---
id: installation
title: Downloading Sauce Connect Proxy
sidebar_label: Download
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ScTable from '../../../src/components/scTable.jsx';

:::caution Sauce Connect Proxy 5 is released
Please refer to [Sauce Connect Proxy 5 Installation Guide](/secure-connections/sauce-connect-5/installation/) for the most recent Sauce Connect Proxy 5 installation instructions.
:::

This topic describes where and how to download Sauce Connect Proxy to your local machine.

## What You’ll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

:::caution Always use the latest version
If applicable, delete any previous Sauce Connect versions you have. Using older versions may impact your ability to launch a tunnel or cause other technical issues.
:::

## Downloading Sauce Connect Proxy

1. Download the latest Sauce Connect Proxy client to your local machine by clicking the link below corresponding to your OS.
<table>
    <tr>
        <td><strong>Platform</strong></td>
        <td><strong>Download URL</strong></td>
        <td><strong>SHA1 Checksum</strong></td>
    </tr>
    <tr>
        <td>Linux</td>
        <td>
            <a href="https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz">https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz</a>
        </td>
        <td><small>5589571bdc186f3f1b05fe6ce68529501a42fb43</small></td>
    </tr>
    <tr>
        <td>Linux ARM64</td>
        <td>
            <a href="https://saucelabs.com/downloads/sc-4.9.2-linux-arm64.tar.gz">https://saucelabs.com/downloads/sc-4.9.2-linux-arm64.tar.gz</a>
        </td>
        <td><small>8b02c4343b74c36c575817ea4a6eae5fb5718f6c</small></td>
    </tr>
    <tr>
        <td>macOS</td>
        <td>
            <a href="https://saucelabs.com/downloads/sc-4.9.1-osx.zip">https://saucelabs.com/downloads/sc-4.9.1-osx.zip</a>
        </td>
        <td><small>64f9c1bac5d4f5b9acb6fbb629b6df0f5671b4c8</small></td>
    </tr>
    <tr>
        <td>Windows</td>
        <td>
            <a href="https://saucelabs.com/downloads/sc-4.9.2-win32.zip">https://saucelabs.com/downloads/sc-4.9.2-win32.zip</a>
        </td>
        <td><small>47c19feda3fb684f88acd816e9c8f2e3d4a1e3c0</small></td>
    </tr>
</table>

:::note
MacOS is not supported in version 4.9.2.
:::

2. Extract the contents of the \*.zip download to your local machine. We recommend saving the Sauce Connect Proxy folder to your home directory.

<details>
<summary>What's in the folder?</summary>

#### Sauce Connect folder contents

```bash
$ tree sc-4.9.2-linux/
  sc-4.9.2-linux/
  ├── COPYRIGHT.md
  ├── bin
  │   └── sc
  ├── config_examples
  │   ├── config.yml
  │   └── systemd
  │       ├── README.md
  │       ├── sc.service
  │       └── sc@.service
  └── license.html
```

  <table>
  <tr>
   <td>File</td>
   <td>Description</td>
  </tr>
  <tr>
    <td><strong>sc</strong> (Linux/macOS) or <strong>sc.exe</strong> (Windows)</td>
    <td>Sauce Connect Proxy client executable file.</td>
   </tr>
   <tr>
    <td><strong>config.yml</strong></td>
   <td>Sample <a href="/secure-connections/sauce-connect/setup-configuration/yaml-config">YAML configuration file</a>.</td>
   </tr>
   <tr>
   <td><strong>sc.service</strong>, <strong>sc@.service</strong></td>
   <td>Sample files intended for use with the <a href="/secure-connections/sauce-connect/proxy-tunnels/#service-management-tools">systemd service manager</a>, an alternative way to start and stop Sauce Connect Proxy tunnels. Consult the <strong>README.md</strong> for more information.</td>
   </tr>
  </table>

</details>

3. If you're using Linux, you'll need to add Sauce Connect to your system PATH:

```bash
cd $HOME
curl -LO https://saucelabs.com/downloads/sc-4.9.2-linux.tar.gz
tar xvf ./sc-4.9.2-linux.tar.gz
export PATH="$HOME/sc-4.9.2-linux/bin:$PATH"
```

## Using Sauce Connect in Docker

As an alternative to downloading the client, you can use the Sauce Connect Proxy Docker image to run it in a Docker container. To learn more, see [Sauce Connect Docker Container Setup](/secure-connections/sauce-connect/setup-configuration/docker/).

## More Information

- [Sauce Connect Proxy 5 Installation Guide](/secure-connections/sauce-connect-5/installation/)
- [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart)
- [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements/)
- [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy/)
- [Sauce Connect Proxy Architecture](/secure-connections/sauce-connect/advanced/architecture/)
- [Sauce Connect Proxy Changelog](https://changelog.saucelabs.com/en?category=sauce%20connect)
