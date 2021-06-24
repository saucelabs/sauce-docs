---
id: installation
title: Installation
sidebar_label: Installation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This topic describes where and how to Sauce Connect Proxy to your local machine.

## What You’ll Need

* Review [Using Sauce Connect Proxy](/secure-connections/sauce-connect).
* Review [System and Network Requirements](/secure-connections/sauce-connect/system-requirements), which includes information about deployment options.
* For macOS Catalina 10.15+ compatibility, enable your Mac to allow apps from the App Store and identified developers.
    1. Go to **System Preferences** > **Security & Privacy** > **General** tab.
    2. Under the header **Allow apps downloaded from**, select the option **App Store and identified developers**.

## Downloading Sauce Connect Proxy

1. Click the one of the links below (Windows, Mac OS X, or Linux) to download Sauce Connect to your local machine. Latest Version: 4.6.5.

<table>
  <tr>
   <td><strong>Sauce Connect Proxy Download Link</strong>
   </td>
   <td><strong>SHA1 Checksum</strong>
   </td>
  </tr>
  <tr>
   <td><a href="https://saucelabs.com/downloads/sc-4.6.5-osx.zip">Download Sauce Connect v4.6.5 for Mac OS 10.8+</a>
   </td>
   <td><code>dd1a04ef3c095cc2bdcedd31a3a3a469d8d382e1</code>
   </td>
  </tr>
  <tr>
   <td><a href="https://saucelabs.com/downloads/sc-4.6.5-win32.zip">Download Sauce Connect v4.6.5 for Windows 7+</a>
   </td>
   <td><code>9142b9692852cf43e7877ad250d4bf47cb0c6547</code>
   </td>
  </tr>
  <tr>
   <td><a href="https://saucelabs.com/downloads/sc-4.6.5-linux.tar.gz">Download Sauce Connect v4.6.5 for Linux</a>
   </td>
   <td><code>992e2cb0d91e54b27a4f5bbd2049f3b774718115</code>
   </td>
  </tr>
  <tr>
   <td><a href="https://saucelabs.com/downloads/sc-4.6.5-linux32.tar.gz">Download Sauce Connect v4.6.5 for Linux 32-bit</a>
   </td>
   <td><code>bd26829205a11026714e2c1b29c067dd2ced538e</code>
   </td>
  </tr>
</table>

2. Extract contents of the **.zip** or **.gz** download.

3. Open the download folder (e.g., sc-4.6.5-osx). You'll find the following contents:
<img src={useBaseUrl('img/sauce-connect/sc-download.png')} alt="Sauce Connect download file contents" width="350" margin-bottom="50px"/>

* **bin directory**
    * **sc.exe**: Sauce Connect Proxy client executable file
* **config_examples directory**
    * **config.yml file**: An example configuration file to be used with the `--config-file` command-line option. See [Sauce Connect Proxy Command-Line Reference](dev/cli/sauce-connect-proxy) for more information.
    * **systemd directory**: Contains sample files for use with the systemd service manager to start and stop Sauce Connect Proxy. Consult the **config_examples** > **systemd** > ** README.md** file for more information.
    * **upstart directory**: Contains sample files for use with the upstart service manager to start and stop Sauce Connect Proxy. Consult the **config_examples** > **upstart** > **README.md** file for more information.
* **COPYRIGHT.md file**
  * Sauce Connect Open Source Software Declaration.
* **license.html file**
  * Sauce Labs, Inc. End User Agreement.

## Sauce Connect Proxy Logs

Once you've started using Sauce Connect, a log file called _sc.log_ will populate in your computer's directory.

The location will vary, depending on your operating system. For Mac OS X and Linux, the sc.log will use a tmp folder. For Windows, it'll use the current working directory.

<table>
  <tr>
   <td><strong>OS</strong>
   </td>
   <td><strong>Directory</strong>
   </td>
  </tr>
  <tr>
   <td>Mac OS X
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

## Changelog

See [Sauce Connect Proxy Changelog](/secure-connections/sauce-connect/changelog).

:::note
Effective with Sauce Connect Proxy version 4.6.0, we've enabled support for Public Certificates and deprecated support for Private Certificates. See [Sauce Connect Proxy Changelog](/secure-connections/sauce-connect/changelog) for more detailed information.
:::
