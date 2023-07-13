---
id: setup
title: Setting up coresnapd on FreeBSD
sidebar_label: Setup for FreeBSD
description: Add Backtrace to your Coresnap project.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To install Backtrace's package mirror, run the following command:

```bash
# fetch https://packages.backtrace.io/LICENSE/stork/freebsd/RELEASE/backtrace.conf -o /etc/pkg/backtrace.conf
```

Replace `<LICENSE>` with your license number. If you haven't received your license number yet, contact us. Replace `RELEASE` with the major version number (for example, 11, 12, etc.) that matches your FreeBSD installation. Tthe minimum required version for coresnap is 11.0.

This command configures `pkg` to pull from Backtrace's mirror. To verify proper `pkg` configuration, run the following commands:

```bash
# pkg update
# pkg search -x '^backtrace-*'
```

Once verified, you can proceed to install the required packages:

```bash
# pkg install backtrace-coroner backtrace-coresnap backtrace-ptrace backtrace-libbt
```

## Initial Configuration

After installing the packages, coresnapd requires a few configuration changes to start. Run the following commands:

```bash
# sysrc coresnapd_enable=YES
# sysrc crashinfo_program="/opt/backtrace/sbin/kernel_coresnap"
# sysrc local_startup="$(sysrc -n local_startup) /opt/backtrace/etc/rc.d"
```

`coresnapd` uses `coroner` to perform submissions of crashes. To configure it, edit the `/usr/local/etc/coroner.cf` file. For more information, consult the [coroner documentation](/error-reporting/advanced/coroner/client-getting-started/).

Now you can start `coresnapd`:

```bash
# service coresnapd start
```

To check its status, use the following command:

```bash
$ service coresnapd status
coresnapd is running as pid 613.
```

## Testing

Coresnapd leverages `devd` on FreeBSD to get notified about userland crashes, which are automatically stored in `/var/coresnap/archive/corefiles`. To test, simply run a program that crashes, and the crash information will be processed.

Kernel crashes are processed by `/opt/backtrace/sbin/kernel_coresnap` instead of the standard `/usr/sbin/crashinfo` and may require configuring a dump device. To configure it, run the following command:

```bash
# sysrc dumpdev=AUTO
```

or more information on configuring the dump device, refer to the [rc.conf](https://www.freebsd.org/cgi/man.cgi?query=rc.conf&apropos=0&sektion=0&manpath=FreeBSD+12.1-RELEASE+and+Ports&arch=default&format=html) documentation. To force a kernel crash for testing purposes, run the following command:

```bash
# sysctl debug.kdb.panic=1
```

When the system comes up again, it will process the kernel crash and deliver it to coresnapd to submit using coroner.
