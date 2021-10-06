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

## Download Latest Version

Click the one of the links below (Linux, Mac, or Windows) to download Sauce Connect Proxy to your local machine.

[Latest version: 4.7.1](https://changelog.saucelabs.com/en/sauce-connect-proxy-version-487lQrFBc)

<table>
 <tr>
  <td><strong>OS</strong>
  </td>
  <td><strong>Download Link</strong>
  </td>
  <td><strong>SHA1 Checksum</strong>
  </td>
 </tr>
 <tr>
  <td>Linux
  </td>
  <td>
   <strong><small><a href="https://saucelabs.com/downloads/sc-4.7.1-linux.tar.gz">https://saucelabs.com/downloads/sc-4.7.1-linux.tar.gz</a></small></strong>
  </td>
  <td><small>e5d7f82ad98251a653d1b0537f1103e49eda5e11</small>
  </td>
 </tr>
 <tr>
  <td>Mac
  </td>
  <td>
   <strong><small><a href="https://saucelabs.com/downloads/sc-4.7.1-osx.zip">https://saucelabs.com/downloads/sc-4.7.1-osx.zip</a></small></strong>
  </td>
  <td><small>1f18defa14a5cc4b663bf07213411f6bdd535b6d</small>
  </td>
 </tr>
 <tr>
  <td>Windows
  </td>
  <td>
   <strong><small><a href="https://saucelabs.com/downloads/sc-4.7.1-win32.zip">https://saucelabs.com/downloads/sc-4.7.1-win32.zip</a></small></strong>
  </td>
  <td><small>9c91e5adbd023973efe0eb14d2d427d2c0ef3c25</small>
  </td>
 </tr>
</table>

## Installation

### macOS and Windows

1. Extract the contents of the .zip download.

2. Open the download folder (e.g., sc-4.7.1-osx). You'll find the following contents:
<img src={useBaseUrl('img/sauce-connect/sc-download.png')} alt="Sauce Connect download file contents" width="350" margin-bottom="50px"/>

* **bin directory**
    * **sc.exe** or **sc**: Sauce Connect Proxy client executable file
* **config_examples directory**
    * **config.yml file**: An example configuration file to be used with the `--config-file` command-line option. See [Sauce Connect Proxy Command-Line Reference](/dev/cli/sauce-connect-proxy) for more information.
    * **systemd directory**: Contains sample files for use with the systemd service manager to start and stop Sauce Connect Proxy. Consult the **config_examples** > **systemd** > ** README.md** file for more information.
* **COPYRIGHT.md file**
  * Sauce Connect Open Source Software Declaration.
* **license.html file**
  * Sauce Labs, Inc. End User Agreement.

### Linux

To install and extract Sauce Connect on your Linux machine, add sc to your system PATH:

```bash
cd $HOME
curl -LO https://saucelabs.com/downloads/sc-4.7.1-linux.tar.gz
tar xvf ./sc-4.7.-linux.tar.gz
export PATH="$HOME/sc-4.7.1-linux/bin:$PATH"
```

## Log File

Once you've started using Sauce Connect, a log file will populate in your computer's directory. The log file name depends on whether [--tunnel-name](/dev/cli/sauce-connect-proxy/#--tunnel-name-or---tunnel-identifier) was used.
For _anonymous_ tunnels, a log file name would be _sc.log_, for _named_ tunnels, a log file name would be _sc-TUNNEL_NAME.log_

The location of the log file will vary, depending on your operating system. For Mac and Linux, the sc.log will use a tmp folder. For Windows, it'll use the current working directory.

<table>
  <tr>
   <td><strong>OS</strong>
   </td>
   <td><strong>Log Directory</strong>
   </td>
  </tr>
  <tr>
   <td>Mac
   </td>
   <td>(DD Month) (Time)
   Log file:
   <code>/var/folders/72/tjnr5_fs4fvcb3csfjx4sw200000gn/T/sc-TUNNEL_NAME.log</code>
   </td>
  </tr>
  <tr>
   <td>Linux
   </td>
   <td>(DD Month) (Time)
   Log file:
   <code>/tmp/sc-TUNNEL_NAME.log</code>
   </td>
  </tr>
  <tr>
   <td>Windows
   </td>
   <td>(DD Month) (Time)
   Log file:
   <code>C:\Users\sauce_username\Downloads\sc-4.7.1-win32\sc-4.7.1-win32\sc-TUNNEL_NAME.log</code>
   </td>
  </tr>
</table>


## Version Lifecycle Information

The launch of Sauce Connect 4.7.1 makes it the officially supported version of the Sauce Connect client. All previous versions are in maintenance mode, with the oldest versions nearing the end of their support life.


<table>
  <tr>
   <td>Family
   </td>
   <td>Version
   </td>
   <td>Download Link
   </td>
   <td>End of Life
   </td>
  </tr>
  <tr>
   <td colspan="4" ><strong>Full Support</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="2" >4.7
   </td>
   <td>4.7.1
   </td>
   <td>
    See <a href="#downloading">Downloading</a>
   </td>
   <td rowspan="2" >June 31, 2022
   </td>
  </tr>
  <tr>
   <td>4.7.0<sup><a href="#windows-version-no-longer-available-for-download">*</a></sup>
   </td>
   <td>
    <a href="https://saucelabs.com/downloads/sc-4.7.0-linux.tar.gz">Linux</a>, <a href="https://saucelabs.com/downloads/sc-4.7.0-osx.zip">Mac</a>
   </td>
  </tr>
  <tr>
   <td colspan="4" ><strong>Security & Major Bug Fixes only</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="6" >4.6
   </td>
   <td>4.6.5
   </td>
   <td>
    <a href="https://saucelabs.com/downloads/sc-4.6.5-linux.tar.gz">Linux</a>, <a href="https://saucelabs.com/downloads/sc-4.6.5-osx.zip">Mac</a>, <a href="https://saucelabs.com/downloads/sc-4.6.5-win32.zip">Windows</a>
   </td>
   <td rowspan="6" >Jan. 31, 2022
   </td>
  </tr>
  <tr>
   <td>4.6.4
   </td>
   <td>
    <a href="https://saucelabs.com/downloads/sc-4.6.4-linux.tar.gz">Linux</a>, <a href="https://saucelabs.com/downloads/sc-4.6.4-osx.zip">Mac</a>, <a href="https://saucelabs.com/downloads/sc-4.6.4-win32.zip">Windows</a>
   </td>
  </tr>
  <tr>
   <td>4.6.3
   </td>
   <td>
    <a href="https://saucelabs.com/downloads/sc-4.6.3-linux.tar.gz">Linux</a>, <a href="https://saucelabs.com/downloads/sc-4.6.3-osx.zip">Mac</a>, <a href="https://saucelabs.com/downloads/sc-4.6.3-win32.zip">Windows</a>
   </td>
  </tr>
  <tr>
   <td>4.6.2
   </td>
   <td>
    <a href="https://saucelabs.com/downloads/sc-4.6.2-linux.tar.gz">Linux</a>, <a href="https://saucelabs.com/downloads/sc-4.6.2-osx.zip">Mac</a>, <a href="https://saucelabs.com/downloads/sc-4.6.2-win32.zip">Windows</a>
   </td>
  </tr>
  <tr>
   <td>4.6.1
   </td>
   <td>
   <a href="https://saucelabs.com/downloads/sc-4.6.1-linux.tar.gz">Linux</a>, <a href="https://saucelabs.com/downloads/sc-4.6.1-osx.zip">Mac</a>, <a href="https://saucelabs.com/downloads/sc-4.6.1-win32.zip">Windows</a>
   </td>
  </tr>
  <tr>
   <td>4.6.0<sup><a href="#all-sauce-connect-proxy-versions-below-461-which-were-supporting-private-certificates-reached-end-of-life-and-are-no-longer-available-for-download">**</a></sup>
   </td>
   <td>
   &#8212;
   </td>
  </tr>
  <tr>
   <td colspan="4" ><strong>Unsupported</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="5" >4.5<sup><a href="#all-sauce-connect-proxy-versions-below-461-which-were-supporting-private-certificates-reached-end-of-life-and-are-no-longer-available-for-download">**</a></sup>
   </td>
   <td>4.5.4
   </td>
   <td>
    &#8212;
   </td>
   <td rowspan="5" >March 31, 2021
   </td>
  </tr>
  <tr>
   <td>4.5.3
   </td>
   <td>
    &#8212;
   </td>
  </tr>
  <tr>
   <td>4.5.2
   </td>
   <td>
    &#8212;
   </td>
  </tr>
  <tr>
   <td>4.5.1
   </td>
   <td>
    &#8212;
   </td>
  </tr>
  <tr>
   <td>4.5.0
   </td>
   <td>
    &#8212;
   </td>
  </tr>
</table>

##### <sup>*</sup>Windows version no longer available for download.
##### <sup>**</sup>All Sauce Connect Proxy versions below 4.6.1, which were supporting Private Certificates, reached end of life and are no longer available for download.
