---
id: system-requirements
title: System and Network Requirements
sidebar_label: System and Network Requirements
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy system requirements vary, depending on the number of parallel tests you plan to run.

Keep in mind that these are guidelines. Most environments have their own workload requirements for optimal performance. Test and profile your own environment using these recommendations as a baseline.

## What You'll Need

We strongly recommend using the [cURL command line](https://curl.haxx.se/download.html) or an equivalent tool to ensure that any error messages you receive are precise and actionable. If you're not familiar with the tool, you can [review their docs here](https://curl.se/docs) and then install cURL on your local host machine.

## Verifying Sauce Connect Network Routes on Your Host Machine

As an important step prior to downloading Sauce Connect Proxy, you or your systems administrator will need to verify that Sauce Connect Proxy can make the required network requests.

1. Log into the machine that will be hosting your Sauce Connect Proxy tunnels. This is the machine where you'll eventually be placing and running the downloaded Sauce Connect Binary.

2. Use cURL (or equivalent tool) to reach your Site Under Test. If you are relying on API to support a website or mobile app, you can cURL that as well. You should get a `200 OK HTTP` response. If you do NOT see a `200 OK HTTP` response, then Sauce Connect Proxy will not be able to reach it either.

3. Use cURL (or equivalent tool) to reach the below URLs, as needed:
   * [https://saucelabs.com](https://saucelabs.com/)
   * [https://eu-central-1.saucelabs.com](https://eu-central-1.saucelabs.com/)
   * [https://us1.api.testobject.com/sc](https://us1.api.testobject.com/sc/)
   * [https://eu1.api.testobject.com/sc](https://eu1.api.testobject.com/sc/)

If you can get a `200 OK` response from all URLs above, you are ready to start Sauce Connect! As an alternative, you can use [Nethelp](https://github.com/mdsauce/nethelp) to quickly connect to multiple resources and save the output.


## Configuring Your System to Use Sauce Connect

Select a cloud provider from the tables below to view the recommended system requirements:

### Amazon Web Services (AWS)

<Tabs
  defaultValue="Virtual Machines"
  values={[
    {label: 'Virtual Machines', value: 'Virtual Machines'},
    {label: 'Headless', value: 'Headless'},
  ]}>

<TabItem value="Virtual Machines">

<table>
  <tr>
   <td><strong>Parallel Tests</strong>
   </td>
   <td><strong>Machine Type</strong>
   </td>
   <td><strong>Memory</strong>
   </td>
   <td>
<strong>Processor</strong>
   </td>
   <td><strong>Bandwidth</strong>
   </td>
   <td><strong>Recommended SC Tunnels</strong>
   </td>
  </tr>
  <tr>
   <td>0-99
   </td>
   <td>EC2 m4.large
   </td>
   <td>8 GB
   </td>
   <td>2
   </td>
   <td>450 Mbps
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>100-199
   </td>
   <td>EC2 m4.xlarge
   </td>
   <td>16 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>200-399
   </td>
   <td>EC2 m4.xlarge
   </td>
   <td>16 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>400-599
   </td>
   <td>EC2 m4.xlarge
   </td>
   <td>16 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>600-799
   </td>
   <td>EC2 m4.xlarge
   </td>
   <td>16 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>800+
   </td>
   <td>EC2 m4.xlarge
   </td>
   <td>16 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>6
   </td>
  </tr>
</table>

</TabItem>
<TabItem value="Headless">

<table>
  <tr>
   <td><strong>Parallel Tests</strong>
   </td>
   <td><strong>Machine Type</strong>
   </td>
   <td><strong>Memory</strong>
   </td>
   <td>
<strong>Processor</strong>
   </td>
   <td><strong>Bandwidth</strong>
   </td>
   <td><strong>Recommended SC Tunnels</strong>
   </td>
  </tr>
  <tr>
   <td>0-99
   </td>
   <td>EC2 m5.large
   </td>
   <td>7.5 GB
   </td>
   <td>2
   </td>
   <td>3.5 Gbps
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>500-999
   </td>
   <td>EC2 m5.large
   </td>
   <td>7.5 GB
   </td>
   <td>2
   </td>
   <td>3.5 Gbps
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>1000-1999
   </td>
   <td>EC2 m5.large
   </td>
   <td>7.5 GB
   </td>
   <td>2
   </td>
   <td>3.5 Gbps
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>2000+
   </td>
   <td>EC2 m5.large
   </td>
   <td>7.5 GB
   </td>
   <td>2
   </td>
   <td>3.5 Gbps
   </td>
   <td>8
   </td>
  </tr>
</table>

</TabItem>
</Tabs>

<br/>

### Google Compute Engine (GCE)

<Tabs
  defaultValue="Virtual Machines"
  values={[
    {label: 'Virtual Machines', value: 'Virtual Machines'},
    {label: 'Headless', value: 'Headless'},
  ]}>

<TabItem value="Virtual Machines">

<table>
  <tr>
   <td>
<strong>Parallel Tests</strong>
   </td>
   <td><strong>Machine Type</strong>
   </td>
   <td><strong>Memory</strong>
   </td>
   <td>
<strong>Processor</strong>
   </td>
   <td><strong>Bandwidth</strong>
   </td>
   <td><strong>Recommended SC Tunnels</strong>
   </td>
  </tr>
  <tr>
   <td>0-99
   </td>
   <td>GCE n1-standard-2
   </td>
   <td>7.5 GB
   </td>
   <td>2
   </td>
   <td>450 Mbps
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>100-199
   </td>
   <td>GCE n1-standard-4
   </td>
   <td>15 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>200-399
   </td>
   <td>GCE n1-standard-4
   </td>
   <td>15 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>400-599
   </td>
   <td>GCE n1-standard-4
   </td>
   <td>15 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>600-799
   </td>
   <td>GCE n1-standard-4
   </td>
   <td>15 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>800+
   </td>
   <td>GCE n1-standard-4
   </td>
   <td>15 GB
   </td>
   <td>4
   </td>
   <td>750 Mbps
   </td>
   <td>6
   </td>
  </tr>
</table>

</TabItem>
<TabItem value="Headless">

<table>
  <tr>
   <td>
<strong>Parallel Tests</strong>
   </td>
   <td><strong>Machine Type</strong>
   </td>
   <td><strong>Memory</strong>
   </td>
   <td>
<strong>Processor</strong>
   </td>
   <td><strong>Bandwidth</strong>
   </td>
   <td><strong>Recommended SC Tunnels</strong>
   </td>
  </tr>
  <tr>
   <td>0-99
   </td>
   <td>GCE n1-standard-2
   </td>
   <td>7.5 GB
   </td>
   <td>2
   </td>
   <td>3.5 Gbps
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>500-999
   </td>
   <td>GCE n1-standard-2
   </td>
   <td>7.5 GB
   </td>
   <td>2
   </td>
   <td>3.5 Gbps
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>1000-1999
   </td>
   <td>GCE n1-standard-2
   </td>
   <td>7.5GB
   </td>
   <td>2
   </td>
   <td>3.5 Gbps
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>2000+
   </td>
   <td>GCE n1-standard-2
   </td>
   <td>7.5 GB
   </td>
   <td>2
   </td>
   <td>3.5 Gbps
   </td>
   <td>8
   </td>
  </tr>
</table>

</TabItem>
</Tabs>


Tips for optimizing your tests running through Sauce Connect tunnels:

*  If you're running **100 or more parallel tests**, we recommend a minimum network bandwidth of 750 Mbps to support the high volume of network traffic.
*  If you're running **200 or more parallel tests**, we recommend launching more than one tunnel and using the [High Availability Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).
*  When running a high volume of parallel tests on Unix-based operating systems, you may need to increase your [open file limit](https://www.tecmint.com/increase-set-open-file-limits-in-linux/) (for example, `ulimit -n 8192`).
*  For best performance, stability, and security, we recommend using a dedicated server (see [Sauce Connect Proxy Network Security](/secure-connections/sauce-connect/security-authentication)).


## Setting Up Sauce Connect on Your Test Device Network

Sauce Connect Proxy must be set up on the same network as your test devices. It does not, however, need to be set up on the same machine as the website or app you're testing.

[What Not to Do: Common Mistakes in Sauce Connect Proxy Network Configurations](/secure-connections/sauce-connect/troubleshooting) illustrates some examples of network architectures in which Sauce Connect will not be able to create a tunnel or will be too slow to carry out effective testing.  


## Configuring Your Network to Use Sauce Connect

### Firewall Restrictions

Before getting started with Sauce Connect, we recommend checking with your network administrator about updating firewall or proxy settings on your organization's network. Firewall restrictions may interfere with testing.

During Sauce Connect Proxy tunnel startup, the Sauce Connect client that runs on your network needs to make three types of outbound connections:

1. To request a new Sauce Connect tunnel: Communication to the Sauce Labs REST API tunnels endpoint.
2. To validate the REST API certificate: Communication to third-party web sites of Certificate Authorities.
3. To establish the tunnel: Communication to Sauce Connect Tunnel VMs in the Sauce Labs cloud.

When your tests are running through a Sauce Connect tunnel, the client on your network needs to make two types of outbound connections:

1. To pass status information: Communication to the Sauce Labs REST API tunnels endpoint.
2. To connect with the site or app under test: Communication to the sites or apps you specify in your tests.


### Allow-listing for Restricted Networks

If you're testing in a restricted network setting, you may need to allow-list the Sauce Labs domains below to allow outbound communication to Sauce Labs Selenium and Appium endpoints. Allow-listing for inbound traffic coming into your network is not necessary. To check if your setup is successful, see [Validating Your Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup).

You'll need to use the set of domains for your corresponding Sauce Labs Data Center: US Data Center (US-West-1**), Headless Data Center (US-East-1), or European Data Center (EU-Central-1). The Data Center you're connected to is indicated in your navigation menu.

<img src={useBaseUrl('img/sauce-connect/data-center-ui.jpg')} alt="Sauce Connect download file contents" width="600" margin-bottom="50px"/>

For more information on our Data Centers and how to choose the right one for you, see [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints).

### REST API Endpoints

The Sauce Labs REST API is a requirement for using Sauce Connect Proxy. Select your relevant [Data Center](/basics/data-center-endpoints/data-center-endpoints):

<Tabs
  defaultValue="US West 1"
  values={[
    {label: 'US-West-1', value: 'US-West-1'},
    {label: 'EU-Central-1', value: 'EU-Central-1'},
    {label: 'Headless US-East', value: 'Headless US-East'},
  ]}>

<TabItem value="US-West-1">

|Virtual Device Cloud/Real Device Cloud + Sauce Connect |
| :-------- |
|`https://saucelabs.com/rest/v1` |

| TestObject (Legacy Real Device Cloud) + Sauce Connect |
| :-------- |
|`https://us1.api.testobject.com/sc/rest/v1` |

</TabItem>
<TabItem value="EU-Central-1">

|Virtual Device Cloud/Real Device Cloud + Sauce Connect|
| :-------- |
|`https://eu-central-1.saucelabs.com/rest/v1`|

|TestObject (Legacy Real Device Cloud) + Sauce Connect|
| :-------- |
|`https://eu1.api.testobject.com/sc/rest/v1`|

</TabItem>
<TabItem value="Headless US-East">

|Headless + Sauce Connect|
| :-------- |
|`https://us-east-1.saucelabs.com/rest/v1`|

</TabItem>
</Tabs>

<br/>


#### Sauce Connect Tunnel Service Domains

The following domains must be whitelisted for outbound communication from you network in order to make connections to Sauce Connect tunnels. Select your relevant [Data Center](/basics/data-center-endpoints/data-center-endpoints):

<Tabs
  defaultValue="US West 1"
  values={[
    {label: 'US-West-1', value: 'US-West-1'},
    {label: 'US East 1', value: 'EU-Central-1'},
    {label: 'Headless US-East', value: 'Headless US-East'},
  ]}>

<TabItem value="US-West-1">

| Virtual Device Cloud/Real Device Cloud + Sauce Connect |
| :-------- |
| `*.miso.saucelabs.com` |

| Legacy Real Device Cloud |
| :-------- |
| `*.sjc1.mrdc.miso.saucelabs.com` |

</TabItem>
<TabItem value="EU-Central-1">

| Virtual Device Cloud/Real Device Cloud + Sauce Connect |
| :----- |
| `*.eu-central-1.miso.saucelabs.com` |

| EU Legacy RDC|
| :-------- |
| `*.txl1.mrdc.miso.saucelabs.com` |

</TabItem>
<TabItem value="Headless US-East">

|Headless + Sauce Connect|
| :-------- |
|`*.tunnels.us-east-1.saucelabs.com`|

</TabItem>
</Tabs>

:::note **Recommended Wildcard Whitelisting**

`*.miso.saucelabs.com` will cover all virtual and real device cloud data centers except for Headless.

* US-West-1 (Virtual Device Cloud/Real Device Cloud + Sauce Connect): `*.miso.saucelabs.com`
* US Legacy Real Device Cloud: `*.sjc1.mrdc.miso.saucelabs.com`
:::

<br/>

## Transport Layer Security (TLS) Requirements

Here are the Sauce Connect Proxy network requirements for TLS and SSL traffic:

* TLS version 1.2 or higher
* TLS/SSL library (e.g., OpenSSL)
* Network `port 443`, through which all traffic between your site and a Sauce Labs tunnel endpoint must pass

## Certificate Management

Public key certificates are used to manage the security of Sauce Connect Proxy communication to both the Sauce Labs API and to the Virtual Machine hosting your tests in the Sauce Labs cloud. For information on saucelabs.com certificate authentication, see [Sauce Connect Proxy Certificate Handling](/secure-connections/sauce-connect/security-authentication).
