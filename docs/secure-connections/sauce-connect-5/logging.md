---
id: logging
title: Logging
---

This document describes how to configure logging for Sauce Connect Proxy 5.

By default, Sauce Connect Proxy 5 logs messages to the console.
Logging can be configured using the following options:

- [`log-file`](/dev/cli/sauce-connect-5/run/#log-file): specify the log file
- [`log-level`](/dev/cli/sauce-connect-5/run/#log-level): set the log level
- [`log-http`](/dev/cli/sauce-connect-5/run/#log-http): log HTTP requests and responses

## Log rotation

Logs are automatically rotated when running Sauce Connect Proxy 5 as a Linux Systemd service or in a Docker container.
For other setups, use the `logrotate` utility.

:::note
The logrotate integration in Linux and macOS is available in **Sauce Connect Proxy 5.1.2** and later.
:::

### Linux

When running as a Systemd service, logs are stored in `/var/log/sauce-connect` and rotated automatically.

For standalone runs, configure logrotate as follows:

1. Create a directory for log files:

   First, create a directory for Sauce Connect log files or use existing one.
   The directory needs to be writable by the user running Sauce Connect.

   ```bash
   mkdir -p /path/to/sauce-connect/logs
   ```

1. Adjust Sauce Connect configuration to write logs to the log file:

   Command line:

   ```bash
   sc run ... --log-file /path/to/sauce-connect/logs/sc.log
   ```
   
   Configuration file:

   ```yaml
   log-file: /path/to/sauce-connect/logs/sc.log
   ```

1. Configure logrotate:

   Create a logrotate configuration file `/etc/logrotate.d/sauce-connect` with the following content:

   ``` 
   /path/to/sauce-connect/logs/sc.log {
       size 100M
       rotate 10
       compress
       maxage 30
       postrotate
           /usr/bin/killall -HUP sc
       endscript
   }
   ```

   This configuration rotates the log file when it reaches 100MB, keeps 10 rotated files, compresses rotated files, and deletes files older than 30 days.
   You can adjust these values to suit your needs.

   For information on available logrotate config file options, check [`man logrotate`](https://linux.die.net/man/8/logrotate).

   You can test the configuration with the following command. 

   ```bash
   logrotate -d /etc/logrotate.d/sauce-connect
   ```

### MacOS

1. Install logrotate:

   First, ensure logrotate is installed via Homebrew.

   ```bash
   brew install logrotate
   ```

1. Create a directory for log files:

   Create a directory for log Sauce Connect files or use existing one.
   The directory needs to be writable by the user running Sauce Connect.

   ```bash
   mkdir -p /path/to/sauce-connect/logs
   ```

1. Adjust Sauce Connect configuration to write logs to the log file:

   Command line:

   ```bash
   sc run ... --log-file /path/to/sauce-connect/logs/sc.log
   ```

   Configuration file:

   ```yaml
   log-file: /path/to/sauce-connect/logs/sc.log
   ```

1. Configure logrotate:

   Create logrotate configration directory.

   ```bash
   sudo mkdir -p /usr/local/etc/logrotate.d
   ```

   Create a logrotate configuration file `/usr/local/etc/logrotate.d/sauce-connect` with the following content:

   ```
   /path/to/sauce-connect/logs/sc.log {
       size 100M
       rotate 10
       compress
       maxage 30
       postrotate
           /usr/bin/killall -HUP sc
       endscript
   }
   ```

   This configuration rotates the log file when it reaches 100MB, keeps 10 rotated files, compresses rotated files, and deletes files older than 30 days.
   You can adjust these values to suit your needs.


   For information on available logrotate config file options, check [`man logrotate`](https://linux.die.net/man/8/logrotate).

   You can test the configuration with the following command.

   ```bash
   logrotate -d /usr/local/etc/logrotate.d/sauce-connect
   ```

1. Create run logrotate script:

   Create `run_logrotate.sh` script with the following content:

   ```bash
   #!/bin/sh
   /opt/homebrew/sbin/logrotate -s /opt/homebrew/var/run/logrotate.status /usr/local/etc/logrotate.d/*
   ```

   Set execute permissions for the script.

   ```bash
   chmod 755 run_logrotate.sh
   ```

1. Set up periodic job:

   The `periodic` utility runs scripts located in specific directories at daily, weekly, or monthly intervals.
   Place your script in `/etc/periodic/daily` for daily execution.

   ```bash
   sudo cp run_logrotate.sh /etc/periodic/daily/500.logrotate
   ```

   Manually run the script to test it.

   ```bash
   sudo periodic daily
   ```

   Check the logs or the logrotate results to ensure it is functioning as expected.

### Windows

Open Terminal application to run the following commands.

1. Install Log-Rotate:

   First, install logrotate compatible PowerShell module. 

   ```powershell
   Install-Module -Name Log-Rotate -Scope CurrentUser
   ```

   If log compression is required, install the `7zip` utility.

   ```powershell
   winget install 7zip
   ```

1. Create a directory for log files:

   Create a directory for Sauce Connect log files or use existing one.

   ```bash
   mkdir -p c:\sauce-connect\logs
   ```

1. Adjust Sauce Connect configuration to write logs to the log file:

   Command line:

   ```bash
   sc run ... --log-file c:\sauce-connect\logs\sc.log
   ```

   Configuration file:

   ```yaml
   log-file: c:\sauce-connect\logs\sc.log
   ```

1. Configure Log-Rotate:

   Create Log-Rotate configration directory `c:\Log-Rotate\`.

   ```bash
   mkdir c:\Log-Rotate
   ```

   Create a logrotate configuration file `c:\Log-Rotate\sauce-connect` with the following content:

   ```
   c:\sauce-connect\logs\sc.log {
       size 100M
       rotate 10
       compress
       maxage 30
       copy
       postrotate
           Clear-Content c:\sauce-connect\logs\sc.log
       endscript
   }
   ```

   This configuration rotates the log file when it reaches 100MB, keeps 10 rotated files, compresses rotated files, and deletes files older than 30 days.
   You can adjust these values to suit your needs.

   For information on available logrotate config file options, check [`man logrotate`](https://linux.die.net/man/8/logrotate).
   Not all options are supported by Log-Rotate PowerShell module.
   Check the [Log-Rotate documentation](https://github.com/theohbrothers/Log-Rotate) for more information. 

   You can test the configuration with the following command.`

    ```powershell
   Log-Rotate -Config C:\LogRotate\sauce-connect -State C:\LogRotate\Log-Rotate.status -Verbose -WhatIf
   ```

1. Set up scheduled task:

   Run the following PowerShell script to create a scheduled task to run the Log-Rotate command daily at 9 AM.

   ```powershell
   $trigger = New-ScheduledTaskTrigger -Daily -At 9am
   $action = New-ScheduledTaskAction -Execute 'PowerShell.exe' -Argument '-Command "Log-Rotate -Config C:\LogRotate\sauce-connect -State C:\LogRotate\Log-Rotate.status -Verbose"'
   Register-ScheduledTask -TaskName "SauceConnectLogRotate" -Trigger $trigger -Action $action -Description "Daily task rotate Sauce Connect logs"
   ```

   Manually run the task to test it.

   ```powershell
   Start-ScheduledTask -TaskName "SauceConnectLogRotate"
   ```

   Check the logs or the Log-Rotate results to ensure it is functioning as expected.

## HTTP request logging

Sauce Connect Proxy 5 does not log HTTP requests and responses by default.
To enable this, use the `--log-http` flag.

The following example logs request and response headers for proxied requests:
Note: Proxied request logging works only with plain HTTP requests or HTTPS requests when TLS resigning is enabled.

Command line:

```bash
sc run ... --log-http proxy:headers
```

Configuration file:

```yaml
log-http: proxy:headers
```

### Syntax

The `--log-http` flag accepts a comma-separated list of `[module]:[option]` pairs.
Module can be one of the following:

* `proxy`: requests and responses from test jobs
* `api`: requests received by the sc API server
* `control`: requests sent to the Sauce Labs API

If `[module]:` is omitted, the option applies to all modules.

Available options are:

* `none`: no logging
* `short-url`: logs `[scheme://]host[/path]` instead of the full URL
* `url`: logs the full URL including query parameters
* `headers`: logs request line and headers
* `body`: logs request line, headers, and body
* `errors`: logs request line and headers if status code is greater than or equal to 500