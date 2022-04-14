---
id: installation
title: Downloading Sauce Connect Proxy
sidebar_label: Download
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ScTable from '../../../src/components/scTable.jsx';

This topic describes where and how to download Sauce Connect Proxy to your local machine.

## What You’ll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

:::caution Always use the latest version
If applicable, delete any previous Sauce Connect versions you have. Using older versions may impact your ability to launch a tunnel or cause other technical issues.
:::


## Downloading Sauce Connect Proxy

1. Download the latest Sauce Connect Proxy client to your local machine by clicking the link below corresponding to your OS.
  <table>
    <tr>
      <td><strong>Platform</strong>
      </td>
      <td><strong>Download URL</strong>
      </td>
 <td><strong>SHA1 Checksum</strong>
 </td>
   </tr>
   <tr>
 <td>Linux
   </td>
    <td>
  <a href="https://saucelabs.com/downloads/sc-4.7.1-linux.tar.gz">https://saucelabs.com/downloads/sc-4.7.1-linux.tar.gz</a>
   </td>
   <td><small>e5d7f82ad98251a653d1b0537f1103e49eda5e11</small>
   </td>
  </tr>
  <tr>
   <td>macOS
   </td>
   <td>
  <a href="https://saucelabs.com/downloads/sc-4.7.1-osx.zip">https://saucelabs.com/downloads/sc-4.7.1-osx.zip</a>
   </td>
   <td><small>1f18defa14a5cc4b663bf07213411f6bdd535b6d</small>
   </td>
   </tr>
  <tr>
 <td>Windows
     </td>
   <td>
    <a href="https://saucelabs.com/downloads/sc-4.7.1-win32.zip">https://saucelabs.com/downloads/sc-4.7.1-win32.zip</a>
   </td>
   <td><small>9c91e5adbd023973efe0eb14d2d427d2c0ef3c25</small>
   </td>
  </tr>
  </table>

2. Extract the contents of the .zip download to your local machine. We recommend saving the Sauce Connect Proxy folder to your home directory.

  <details><summary>What's in the folder?</summary>

  Sauce Connect folder contents:<br/><img src={useBaseUrl('img/sauce-connect/scp-download.png')} alt="Sauce Connect download file contents" width="500" />
  <table>
  <tr>
   <td>File</td>
   <td>Description</td>
  </tr>
  <tr>
    <td><strong>sc</strong> (macOS) or <strong>sc.exe</strong> (Windows)</td>
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
  curl -LO https://saucelabs.com/downloads/sc-4.7.1-linux.tar.gz
  tar xvf ./sc-4.7.1-linux.tar.gz
  export PATH="$HOME/sc-4.7.1-linux/bin:$PATH"
  ```


### Log File

Once you've started using Sauce Connect Proxy, a log file will appear in your computer's directory. The name of the file will match what you named your tunnel using [`--tunnel-identifier`](/dev/cli/sauce-connect-proxy/#--tunnel-identifier). For example, if you named it `saucebot`, the log file name would be **sc-saucebot.log**. If you did not name your tunnel, the file name will be **sc.log**.

The location of the log file will vary, depending on your operating system. For Mac and Linux, the log will use a tmp folder. For Windows, it'll use the current working directory.

<table>
  <tr>
   <td>OS
   </td>
   <td>Log Directory
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
   <code>C:\Users\sauce_username\Downloads\sc-4.7.1-win32\sc-TUNNEL_NAME.log</code>
   </td>
  </tr>
</table>


### Version Lifecycle Information

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
    <a href="#download-latest-version">See latest version</a>
   </td>
   <td rowspan="2" >Sep. 30, 2022
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
   <td rowspan="6" >Mar. 31, 2022
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
   <td>4.6.0<sup><a href="#sauce-connect-proxy-versions-below-461-which-were-supporting-private-certificates-reached-end-of-life-and-are-no-longer-available-for-download">**</a></sup>
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
   <td rowspan="5" >4.5<sup><a href="#sauce-connect-proxy-versions-below-461-which-were-supporting-private-certificates-reached-end-of-life-and-are-no-longer-available-for-download">**</a></sup>
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
##### <sup>**</sup>Sauce Connect Proxy versions below 4.6.1, which were supporting Private Certificates, reached end of life and are no longer available for download.

## Using Sauce Connect in Docker

As an alternative to downloading the client, you can use the Sauce Connect Proxy Docker image to run it in a Docker container. To learn more, see [Sauce Connect Docker Container Setup](/secure-connections/sauce-connect/setup-configuration/specialized-environments/#sauce-connect-docker-container-setup).



## More Information

* [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart)
* [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements/)
* [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Architecture](/secure-connections/sauce-connect/advanced/architecture/)
* [Sauce Connect Proxy Changelog](https://changelog.saucelabs.com/en?category=sauce%20connect)
