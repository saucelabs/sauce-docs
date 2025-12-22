---
id: windows
title: Install Sauce Connect on Windows
sidebar_label: Windows
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## With Winget

On Windows 10 and newer you can install Sauce Connect with the builtin [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) package manager.
This is the recommended way to install Sauce Connect on Windows.

### Install

Open Terminal and run the following command to install Sauce Connect:

```powershell
winget install SauceLabs.SauceConnect
```

### Set SC Alias

Sauce Connect for Windows installs the `sauce-connect` command not `sc`.
This is due to the fact that the `sc` command is already used by the system.
To work around this issue, you can set an alias for the `sauce-connect` command.

In Terminal run the following command to permanently set the `sc` alias for `sauce-connect`:

```powershell
if (-Not (Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
Add-Content -Path $PROFILE -Value "Set-Alias -Name 'sc' -Value 'sauce-connect' -Option 'AllScope' -Force"
```

Open a new Terminal window to use the `sc` command for Sauce Connect.

### Add Command Completion

In Terminal run the following script to add `sc` command completion to PowerShell:

```powershell
if (-Not (Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
Add-Content -Path $PROFILE -Value "Invoke-Expression (sauce-connect completion powershell | Out-String)"
```

Open a new Terminal window to use the `sc` command with completion.

### Edit Config File

This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.
See [CLI reference](/dev/cli/sauce-connect-5/) for more details.

Get the default configuration file:

```powershell
sc run config-file > sauce-connect.yaml
```

Edit the configuration file with your favorite editor:

```powershell
notepad sauce-connect.yaml
```

### Start Sauce Connect

```powershell
sc run --config-file sauce-connect.yaml
```

## With Zip Package

Sauce Connect provides `.zip` package that can be used on older Windows versions that do not support winget.

### Unpack Zip File

```powershell
mkdir C:\sauce-connect
Invoke-WebRequest -Uri https://saucelabs.com/downloads/sauce-connect/5.4.1/sauce-connect-5.4.1_windows.x86_64.zip -OutFile sauce-connect.zip
Expand-Archive -Path sauce-connect.zip -DestinationPath C:\sauce-connect
Rename-Item -Path C:\sauce-connect\sauce-connect.exe -NewName C:\sauce-connect\sauce-connect.exe
```

### Edit Config File

This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.
See [CLI reference](/dev/cli/sauce-connect-5/) for more details.

Get the default configuration file:

```powershell
cd C:\sauce-connect
./sauce-connect.exe run config-file > sauce-connect.yaml
```

Edit the configuration file with your favorite editor:

```powershell
notepad sauce-connect.yaml
```

### Start Sauce Connect

```powershell
./sauce-connect.exe run --config-file sauce-connect.yaml
```
