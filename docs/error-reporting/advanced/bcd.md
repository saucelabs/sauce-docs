---
id: bcd
title: BCD
sidebar_label: BCD
description: BCD is configured to use the Backtrace I/O tracers and database clients to allow for process snapshots to be directly submitted to the database.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

BCD is a library for invoking out-of-process tools in response to program errors. By default, BCD is configured to use the Backtrace I/O tracers and database clients to allow process snapshots to be directly submitted to the database.

## Supported Platforms

BCD supports Linux. It supports GCC, Clang, and ICC. Although BCD must be built with a C compiler that supports GNU99, the BCD interface is C++ compatible.

## Dependencies

For glibc versions before 2.17, `librt` is required.

## Download

You can download BCD from the [BCD GitHub](https://github.com/backtrace-labs/bcd) repository.

## Build

To use BCD as a stand-alone library, follow these steps:

```bash
./configure
make
make install
```

You can also use BCD in amalgamated mode by dropping in a header and source file in your source tree. To do this, follow these steps:

```bash
./configure
make amalgamated
```

The source file is located at `src/bcd-amalgamated.c`, and the header file is `include/bcd.h`. Copy these files to your source tree.

## Usage

For a example, refer to `regressions/broad.c`. For more detailed documentation, see `include/bcd.h`.

To initialize the library, call `bcd_init`. This will initialize the library for use. If you want to emit non-fatal errors, you must also use `bcd_attach` to initialize a `bcd_t` object. Each thread must use a unique `bcd_t` object. You can destroy these `bcd_t` objects using `bcd_detach`.

You can use `bcd_emit` to request a snapshot of a non-fatal error. The errors will be grouped according to the error message passed to `bcd_emit`. For fatal errors, you can call `bcd_fatal`. BCD will exit and deinitialize after a call to `bcd_fatal, so your program is expected to exit at that point.

You can configure credentials, permissions, OOM killer interaction, and more using the `bcd_config` data structure. Refer to `bcd.h` for details.

### Example

```c
#include <stdio.h>
#include <stdlib.h>
#include <bcd.h>

int main(void) {
  struct bcd_config config;
  bcd_error_t error;
  bcd_t bcd;

  /* Initialize BCD configuration. See bcd.h for options */
  if (bcd_config_init(&config, &error) == -1)
    goto fatal;

  /* Initialize the library. */
  if (bcd_init(&config, &error) == -1)
    goto fatal;

  /* Initialize a handle to BCD. This should be called by every thread interacting with BCD. */
  if (bcd_attach(&bcd, &error) == -1)
    goto fatal;

  if (bcd_kv(&bcd, "application", "my_application", &error) == -1)
    goto fatal;

  if (bcd_kv(&bcd, "datacenter", "my data center", &error) == -1)
    goto fatal;

  /*
   * Generate a snapshot of the calling thread and upload it to
   * the Backtrace database. Key-value attributes will be included.
   */
  bcd_emit(&bcd, "This is a non-fatal error");

  /*
   * We generate a fatal error and exit immediately.
   */
  bcd_fatal("This is a fatal error. No recovery");
  return 0;

fatal:
  fprintf(stderr, "error: %s\n", bcd_error_message(&error));
  exit(EXIT_FAILURE);
}
```

### Limitations

For ease of use, `bcd_emit` and `bcd_fatal` do not provide return values. Error callbacks are used, which are executed in the context of the BCD slave. If a developer wishes to terminate their process due to error logging failures, they may register their own callbacks. BCD itself will never terminate the calling process.

BCD relies on a UNIX socket (by default, `/tmp/bcd.*`) for thread communications and uses pipes for handling fatal errors and initial library configuration. If either of these facilities is closed erroneously, BCD generates a fatal error and exit. If this is a concern, it is recommended to install your own error handler to terminate the monitored process.

BCD allocates memory in a separate process on errors, which may not be suitable for systems that lack overcommit.

### Design

During `bcd_init`, BCD initializes a pipe and forks a process. The child process initializes a UNIX socket for per-thread communications. The pipe is used early in initialization to communicate configuration errors and for fatal error handling. The BCD child process forks and executes in response to trace requests.

All communication between the host application and BCD occurs synchronously to maintain global ordering of all BCD operations.

### Handling Crashes

By default, BCD does not set any signal handlers as complex runtimes may rely on signals for functionality. To handle crashes, ensure you install a signal handler. You can use `bcd_emit` for recoverable crashes and `bcd_fatal` for non-recoverable crashes. These functions are signal-safe and thread-safe.

Here is an example that uses `signal`. For production use, it is recommended to use `sigaction` with `SA_SIGINFO` set to allow for additional data extraction at the time of the fault.

```c
#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <bcd.h>

static void signal_handler(int s) {
  bcd_fatal("This is a fatal crash");
  raise(s);
  return;
}

int main(void) {
  struct bcd_config config;
  bcd_error_t error;
  bcd_t bcd;

  /* Initialize BCD configuration. See bcd.h for options */
  if (bcd_config_init(&config, &error) == -1)
    exit(EXIT_FAILURE);

  /* Initialize the library. */
  if (bcd_init(&config, &error) == -1)
    exit(EXIT_FAILURE);

  /* Initialize a handle to BCD. */
  if (bcd_attach(&bcd, &error) == -1)
    exit(EXIT_FAILURE);

  if (signal(SIGSEGV, signal_handler) == SIG_ERR)
    abort();

  if (signal(SIGABRT, signal_handler) == SIG_ERR)
    abort();

  return 0;
}
```

## Troubleshooting

If you are on Linux and `yama` is enabled, you can change the `ptrace` scope for your program using `prctl`.

```c
#include

prctl(PR_SET_PTRACER, PR_SET_PTRACER_ANY, 0, 0, 0);
```

System-level controls are available in `/proc/sys/kernel/yama`.

For more details, refer to the [Yama documentation](https://www.kernel.org/doc/Documentation/security/Yama.txt).
