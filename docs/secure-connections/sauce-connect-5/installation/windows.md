---
id: windows
title: Install Sauce Connect on Windows
sidebar_label: Windows
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Unpack the zip file

<Tabs
defaultValue="ARM64"
  values={[
    {label: 'ARM64', value: 'ARM64'},
    {label: 'x86-64', value: 'x86-64'},
  ]}>
<TabItem value="ARM64">

```bash
mkdir C:\sauce-connect
Invoke-WebRequest -Uri https://saucelabs.com/downloads/sauce-connect/5.0.1/sauce-connect-5.0.1_windows.aarch64.zip -OutFile sauce-connect.zip
Expand-Archive -Path sauce-connect.zip -DestinationPath C:\sauce-connect
```
  </TabItem>

  <TabItem value="x86-64">

```bash
mkdir C:\sauce-connect
Invoke-WebRequest -Uri https://saucelabs.com/downloads/sauce-connect/5.0.1/sauce-connect-5.0.1_windows.x86_64.zip -OutFile sauce-connect.zip
Expand-Archive -Path sauce-connect.zip -DestinationPath C:\sauce-connect
```

  </TabItem>
</Tabs>

### Add the binary to PATH

Add `C:\sauce-connect` to `PATH` environment variable.

```bash
$currentPath = [System.Environment]::GetEnvironmentVariable('PATH', [System.EnvironmentVariableTarget]::Machine)
$newPath = "$currentPath;C:\sauce-connect"
[System.Environment]::SetEnvironmentVariable('PATH', $newPath, [System.EnvironmentVariableTarget]::Machine)
```

### Add completion

Open PowerShell and check if you already have a profile.

```bash
Test-Path $PROFILE
```

If the command returns `False`, create a new profile.

```bash
New-Item -ItemType File -Path $PROFILE -Force
```

Add PowerShell completion to the profile.

```bash
Add-Content -Path $PROFILE -Value ". C:\sauce-connect\completions\sc.ps1"
```

### Edit config file

This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.
See [CLI reference](/dev/cli/sauce-connect-5/) for more details.

```bash
notepad C:\sauce-connect\sauce-connect.yaml
```

### Start Sauce Connect

```bash
sc.exe run --config-file C:\sauce-connect\sauce-connect.yaml
```
