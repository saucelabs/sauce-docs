---
id: installation
title: Downloading Sauce Connect Proxy 5
sidebar_label: Download
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ScTable from '../../../src/components/scTable.jsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
Sauce Connect Proxy 5 release is currently in the Alpha stage. See [this document](/secure-connections/sauce-connect/installation/) for the most recent stable version (4.9.1) download instructions.
:::

This topic describes how to install Sauce Connect Proxy version 5 to your machine.

## What You’ll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Downloading Sauce Connect Proxy

1. Download the latest Sauce Connect Proxy 5 to your local machine by clicking the link below corresponding to your OS and the CPU architecture.

<table>
  <tr>
    <td><strong>Platform</strong>
    </td>
    <td><strong>Download URL</strong>
    </td>
  </tr>
  <tr>
    <td rowspan="3">Linux x86_64</td>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.x86_64.tar.gz">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.x86_64.tar.gz</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect_5.0.0-alpha9.linux_amd64.deb">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect_5.0.0-alpha9.linux_amd64.deb</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.x86_64.rpm">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.x86_64.rpm</a>
    </td>
  </tr>
  <tr>
    <td rowspan="3">Linux arm64</td>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.aarch64.tar.gz">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.aarch64.tar.gz</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect_5.0.0-alpha9.linux_arm64.deb">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect_5.0.0-alpha9.linux_arm64.deb</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.aarch64.rpm">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.aarch64.rpm</a>
    </td>
  </tr>
  <tr>
    <td>Windows x86_64</td>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_windows.x86_64.zip">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_windows.x86_64.zip</a>
    </td>
  </tr>
  <tr>
    <td>Windows arm64</td>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_windows.aarch64.zip">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_windows.aarch64.zip</a>
    </td>
  </tr>
  <tr>
    <td>macOS</td>
    <td>
      <a href="https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_darwin.all.zip">https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_darwin.all.zip</a>
    </td>
  </tr>
</table>

SHA256 checksums are available [here](https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/checksums).

2. Install Sauce Connect Proxy

<Tabs
defaultValue="Linux/macOS"
  values={[
    {label: 'Linux/macOS Binary', value: 'Linux/macOS'},
    {label: 'Linux Debian', value: 'Debian'},
    {label: 'Linux RPM', value: 'RPM'},
    {label: 'macOS brew', value: 'brew'},
    {label: 'Windows (Powershell)', value: 'Windows'},
  ]}>
<TabItem value="Linux/macOS">

```bash
mkdir $HOME/sauce-connect-5.0.0-alpha && cd $HOME/sauce-connect-5.0.0-alpha
curl -sLO https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.x86_64.tar.gz
tar xzf sauce-connect-5.0.0-alpha9_linux.x86_64.tar.gz
```

<details><summary>What's in the folder?</summary>

#### Sauce Connect folder contents

```bash
  ├── LICENSE
  ├── LICENSE.3RD_PARTY
  ├── completions
  │   ├── sc.bash
  │   ├── sc.fish
  │   └── sc.zsh
  └── sc
```

</details>

  </TabItem>

  <TabItem value="Debian">

```bash
arch=$(dpkg --print-architecture)
sc_version=5.0.0-alpha9
curl -sLO https://saucelabs.com/downloads/sauce-connect-${sc_version}/sauce-connect_${sc_version}.linux_${arch}.deb
sudo dpkg --skip-same-version --install sauce-connect_${sc_version}.linux_${arch}.deb
rm sauce-connect_${sc_version}.linux_${arch}.deb
```

<details><summary>What does the Sauce Connect Debian package install</summary>

- Sauce Connect Proxy binary is in `/usr/bin/sc`
- The enviroment variables file template is in `/etc/default/sauce-connect`. The file may be modified to include your configuration, , see [Running systemd service on Debian-based Linux](/secure-connections/sauce-connect-5/operation/#running-systemd-service-on-debian-based-linux)
  ```bash
  cat /etc/default/sauce-connect
  # Default values for Sauce Connect Proxy
  #SAUCE_CONFIG_FILE=/etc/sauce-connect/config.yaml
  # Required values
  #SAUCE_USER=
  #SAUCE_ACCESS_KEY=
  #SAUCE_REGION=
  #SAUCE_TUNNEL_NAME=
  # Options
  #SAUCE_SHARED_TUNNEL=
  #SAUCE_TUNNEL_POOL=
  # See https://docs.saucelabs.com/dev/cli/sauce-connect-5/ for all environment variable values
  ```
- Systemd service is enabled, see [Running systemd service on Debian-based Linux](/secure-connections/sauce-connect-5/operation/#running-systemd-service-on-debian-based-linux)

</details>

  </TabItem>

  <TabItem value="RPM">

```bash
sudo rpm -i https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_linux.x86_64.rpm
```

  </TabItem>

  <TabItem value="brew">

```bash
brew install saucelabs/tap/sauce-connect
```

  </TabItem>

  <TabItem value="Windows">

```bash title="Using Powershell (Windows)"
Invoke-RestMethod -Uri https://saucelabs.com/downloads/sauce-connect-5.0.0-alpha9/sauce-connect-5.0.0-alpha9_windows.x86_64.zip -OutFile sauce-connect-5.0.0-alpha9.zip
Expand-Archive -Force -Path ./sauce-connect-5.0.0-alpha9.zip
```

  </TabItem>
</Tabs>

## Using Sauce Connect in Docker

As an alternative to downloading the client, you can use the Sauce Connect Proxy Docker image to run it in a Docker container.

```bash
docker pull saucelabs/sauce-connect:5.0
```

To learn more, see [Sauce Connect Docker Container Setup](/secure-connections/sauce-connect/setup-configuration/docker/).

## More Information

- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/)
- [Sauce Connect Proxy Architecture](/secure-connections/sauce-connect-5/advanced/architecture/)
- [Sauce Connect Proxy Changelog](https://changelog.saucelabs.com/en?category=sauce%20connect)
