---
id: privacy-control
title: Privacy Control
sidebar_label: Privacy Control
description: Backtrace provides several facilities for scrubbing data of personal information.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace provides several facilities for scrubbing data of personally identifiable information. There are mechanisms for both native UNIX core dump formats as well as the minidump format used by Windows, Breakpad, and Crashpad.

## Data Scrubbers for Minidump

Minidump files contain raw data of the crashed process which may include sensitive data, such as Personally Identifiable Information (PII). When they are submitted to Backtrace server, metadata and attributes are extracted from them and the minidump files are persisted on disk. Developers are able to view these dumps directly in their web browser or download them for the purposes of root cause analysis.

Data Scrubbers provide administrators the ability to remove sensitive data from dump files submitted to Backtrace before they are committed to disk. All data contained in the dump including register values, memory and crash attributes is scanned for patterns that may be indicative of personally identifiable information.

There are two primary classes of data scrubbers: built-in scrubbers and regular expression scrubbers. Built-in scrubbers exist for:

- Credit card numbers
- Social security numbers
- Encryption keys
- Environment variables

These scrubbers are applied to:

- Filesystem paths
- Register values
- Memory regions

If an environment variable scrubber is enabled, all environment variables are scrubbed.

All personally identifiable information is mutated in-place before committing to disk. The offending information is masked and the over-all structure of the file is unmodified in order to ensure that the file can be loaded by your system debugger.

User-defined scrubbers can also be defined using POSIX regular expressions. Scrubbers that rely on regular expression are applied to any data in the dump that looks like it may be a string. For example, string representations of IP addresses can be scrubbed with the regular expression `[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+`.

At this time, management of the scrubbers is handled through the morgue command line utility. For more information about how to use morgue, see [Morgue](/error-reporting/advanced/morgue/).

### Listing Scrubbers

You can list the scrubbers of a project. For example, the following command lists the scrubbers of project "minetest".

```
morgue scrubber minetest list
[1] credit_card
        regexp: null
       builtin: ccn
        format: minidump
        target: memory
        enable: 0
[2] social_security
        regexp: null
       builtin: ssn
        format: minidump
        target: memory
        enable: 0
[3] security_key
        regexp: null
       builtin: key
        format: minidump
        target: memory
        enable: 0
[4] environment_variable
        regexp: null
       builtin: env
        format: all
        target: all
        enable: 1
[5] ip_addr
        regexp: [0-9]+\.[0-9]+\.[0-9]+\.[0-9]+
       builtin: null
        format: all
        target: all
        enable: 1
```

This project has five data scrubbers. Each scrubber is given an `id` number and consists of the following fields:

- `name`: A human-readable name for a scrubber.
- `regexp`: a regular expression defined by the user.
- `builtin`: Includes the built-in scrubbers. Current implementation includes: `ccn`, `ssn`, `key`, and `env`; which are credit card number, social security number, encryption key, and environment variable respectively.
- `format`: Refers to the applicable error and crash format. It must be `minidump`.
- `target`: Refers to data regions of crash error to scrub. Valid values are: `memory`, `map`, `registers`, `variable`, and, `all`. However, the current implementation doesn't enforce the target. All data is scrubbed instead.
- `enable`: Specifies if the scrubber will be applied to crash error data. `0` disables the scrubber, while other integer values enable the scrubber.

### Creating, Modifying, or Deleting Scrubbers

You can create, modify, or delete a data scrubber. You must specify either `regexp` or `builtin`, but not both. If `--builtin=all` is chosen, all built-in scrubbers are created at once.

Options include: `--format=` and `--target=`. If not specified, both `format` and `target` are set to `all`.

For example, the following example creates a scrubber to filter IP addresses.

```
morgue scrubber minetest create --name=ip_scrubber --regexp='[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+' --enable=1
```

## Extensions for Native UNIX Dumps

If you are using our advanced debugger for Linux, FreeBSD and IllumOS-based systems, you are able to modify and censor personally identifiable information through our plugin system, either with LUA or C plugins. For more information, see [Plugins for ptrace](/error-reporting/advanced/ptrace/).

## For On-Premise Customers Using coronerd

Add the following to your `coronerd.conf` file:

```
"data_scrub": {
    "enable": true
}
```

After adding, make sure you restart the coronerd service.
