---
id: installation
title: Installation
sidebar_label: Installation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This topic describes where and how to download Sauce Connect Proxy to your local machine.

## What You’ll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* For macOS Catalina 10.15+ compatibility, enable your Mac to allow apps from the App Store and identified developers.
    1. Go to **System Preferences** > **Security & Privacy** > **General** tab.
    2. Under the header **Allow apps downloaded from**, select the option **App Store and identified developers**.

## Downloading

Click the one of the links below (Linux, Mac, or Windows) to download Sauce Connect Proxy to your local machine.

[Latest version: 4.7.0](https://changelog.saucelabs.com/en/sauce-connect-proxy-version-30JTvzO0F)

<table>
 <tr>
  <td><strong><small>Platform</small></strong>
  </td>
  <td><strong><small>Download Link</small></strong>
  </td>
  <td><strong><small>SHA1 Checksum</small></strong>
  </td>
 </tr>
 <tr>
  <td><small>Linux</small>
  </td>
  <td>
   <strong><small><a href="https://saucelabs.com/downloads/sc-4.7.0-linux.tar.gz">https://saucelabs.com/downloads/sc-4.7.0-linux.tar.gz</a></small></strong>
  </td>
  <td><small>f0bf8e35894e9b35bf9fae8f4f34e83845b4bb6b</small>
  </td>
 </tr>
 <tr>
  <td><small>Mac</small>
  </td>
  <td>
   <strong><small><a href="https://saucelabs.com/downloads/sc-4.7.0-osx.zip">https://saucelabs.com/downloads/sc-4.7.0-osx.zip</a></small></strong>
  </td>
  <td><small>8e41a471bdf4cfeed7cd06d6af9dd081b9aa028d</small>
  </td>
 </tr>
 <tr>
  <td><small>Windows</small>
  </td>
  <td>
   <strong><small><a href="https://saucelabs.com/downloads/sc-4.7.0-win32.zip">https://saucelabs.com/downloads/sc-4.7.0-win32.zip</a></small></strong>
  </td>
  <td><small>c09820729e78416e686e2584898577dda8268b5e</small>
  </td>
 </tr>
</table>

## Installation

### macOS and Windows

1. Extract the contents of the .zip download.

2. Open the download folder (e.g., sc-4.7.0-osx). You'll find the following contents:
<img src={useBaseUrl('img/sauce-connect/sc-download.png')} alt="Sauce Connect download file contents" width="350" margin-bottom="50px"/>

* **bin directory**
    * **sc.exe**: Sauce Connect Proxy client executable file
* **config_examples directory**
    * **config.yml file**: An example configuration file to be used with the `--config-file` command-line option. See [Sauce Connect Proxy Command-Line Reference](/dev/cli/sauce-connect-proxy) for more information.
    * **systemd directory**: Contains sample files for use with the systemd service manager to start and stop Sauce Connect Proxy. Consult the **config_examples** > **systemd** > ** README.md** file for more information.
    * **upstart directory**: Contains sample files for use with the upstart service manager to start and stop Sauce Connect Proxy. Consult the **config_examples** > **upstart** > **README.md** file for more information.
* **COPYRIGHT.md file**
  * Sauce Connect Open Source Software Declaration.
* **license.html file**
  * Sauce Labs, Inc. End User Agreement.

### Linux

To install and extract Sauce Connect on your Linux machine, add sc to your system PATH:

```bash
cd ~/
curl -LO https://saucelabs.com/downloads/sc-4.7.0-linux.tar.gz
tar xvf ./sc-4.7.0-linux.tar.gz
cp ./sc-4.7.0-linux/bin/sc ~/bin/sc
```

## Logging

Once you've started using Sauce Connect, a log file called _sc.log_ will populate in your computer's directory.

The location will vary, depending on your operating system. For Mac and Linux, the sc.log will use a tmp folder. For Windows, it'll use the current working directory.

<table>
  <tr>
   <td><strong>OS</strong>
   </td>
   <td><strong>Directory</strong>
   </td>
  </tr>
  <tr>
   <td>Mac
   </td>
   <td><p>(DD Month) (Time)</p>
   Log file:
   <p><code>/var/folders/72/tjnr5_fs4fvcb3csfjx4sw200000gn/T/sc.log</code></p>
   </td>
  </tr>
  <tr>
   <td>Linux (tested on Ubuntu 16.04.6)
   </td>
   <td><p>(DD Month) (Time)</p>
   Log file:
   <p><code>/tmp/sc.log</code></p>
   </td>
  </tr>
  <tr>
   <td>Windows
   </td>
   <td><p>(DD Month) (Time)</p>
   Log file:
   <p><code>C:\Users\sauce_username\Downloads\sc-4.5.1-win32\sc-4.5.1-win32\sc.log</code></p>
   </td>
  </tr>
</table>


## Version Lifecycle Information

The launch of Sauce Connect 4.7.0 makes it the officially supported version of the Sauce Connect client. All past versions are in maintenance mode, with the oldest versions nearing the end of their support life. The table below outlines the lifecycle dates for all versions.

<table>
  <tr>
   <td>Sauce Connect CLI Client
   </td>
   <td>Type of Support
   </td>
   <td>End of Life
   </td>
  </tr>
  <tr>
   <td>4.7.*
   </td>
   <td>Full Support
   </td>
   <td>June 31, 2022
   </td>
  </tr>
  <tr>
   <td>4.6.*
   </td>
   <td>Security & Major Bug Fixes Only
   </td>
   <td>January 31, 2022
   </td>
  </tr>
  <tr>
   <td>4.5.*
   </td>
   <td>Not Supported
   </td>
   <td>March 31, 2021
   </td>
  </tr>
</table>



## Changelog

See [Sauce Connect Proxy Changelog](/secure-connections/sauce-connect/changelog).
