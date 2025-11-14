---
id: system-requirements
title: Sauce Connect Proxy System and Network Requirements
sidebar_label: System and Network Requirements
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy system requirements vary, depending on the number of parallel tests you plan to run.

Keep in mind that these are guidelines. Most environments have their own workload requirements for optimal performance. Test and profile your own environment using these recommendations as a baseline.

## What You'll Need

- Minimum 2 core x 8 GB Machine.
- We recommend using the [cURL command line](https://curl.haxx.se/download.html) or an equivalent tool to ensure that any error messages you receive are precise and actionable. If you're not familiar with the tool, [review their docs here](https://curl.se/docs) and then install cURL on your local machine.
- For macOS and other Unix-based systems, set your [open file limit](https://www.tecmint.com/increase-set-open-file-limits-in-linux/) to at least 64000. See [What are the optimal open file settings?](/secure-connections/sauce-connect-4/faq/#what-are-the-optimal-open-file-settings).

## Supported Operating Systems

### Sauce Connect v4.x.x

<table>
  <tr>
   <td><strong>Name</strong></td>
   <td><strong>Value</strong></td>
   <td><strong>CPU Arch</strong></td>
   <td><strong>Notes</strong></td>
  </tr>
  <tr>
   <td>Linux</td>
   <td>Ubuntu 18.04 or higher
        <p>Debian 9 or higher</p>
        <p>CentOS/RHEL-7 or higher</p>
        <p>SUSE Linux Enterprise 15.0 and higher</p></td>
   <td>x86_64<br/>arm64</td>
   <td>Unsupported OSes may still be able to run Sauce Connect, but they've not been tested for versions 4.8.x and higher.</td>
  </tr>
  <tr>
   <td>macOS</td>
   <td>macOS 10.13 (High Sierra) and higher</td>
   <td>x86_64</td>
   <td></td>
  </tr>
  <tr>
   <td>Windows</td>
   <td>Windows 10 and higher</td>
   <td>x86</td>
   <td></td>
  </tr>
</table>

:::note macOS Catalina 10.15+ compatibility

Enable your Mac to allow apps from the App Store and identified developers.

1. Go to **System Preferences** > **Security & Privacy** > **General**.
2. Under **Allow apps downloaded from**, select the option **App Store and identified developers**.

:::

## Verifying Sauce Connect Network Routes on Your Host Machine

As an important step prior to downloading Sauce Connect Proxy, you or your systems administrator will need to verify that Sauce Connect Proxy can make the required network requests.

1. Log into the machine that will be hosting your Sauce Connect Proxy tunnels. This is the machine where you'll eventually be placing and running the downloaded Sauce Connect Binary.

2. Use cURL (or equivalent tool) to reach your Site Under Test. If you are relying on API to support a website or mobile app, you can cURL that as well. You should get a `200 OK HTTP` response. If you do NOT see a `200 OK HTTP` response, then Sauce Connect Proxy will not be able to reach it either.

3. Use cURL (or equivalent tool) to reach the below URLs, as needed. For example:

   - [https://api.us-west-1.saucelabs.com/rest/v1](https://api.us-west-1.saucelabs.com/rest/v1) for US-WEST region
   - [https://api.us-east-4.saucelabs.com/rest/v1](https://api.us-east-4.saucelabs.com/rest/v1) for US-EAST region
   - [https://api.eu-central-1.saucelabs.com](https://api.eu-central-1.saucelabs.com/) for EU-Central region

   If you can get a `200 OK` response from all URLs above, you are ready to start Sauce Connect!
   As an alternative, you can just try to [start a tunnel](/secure-connections/sauce-connect-4/quickstart/#start-tunnel)
   and check the console output.

## Configuring Your System to Use Sauce Connect

Select a cloud provider from the tables below to view the minimum and recommended system requirements:

:::note These are general recommendations
Actual system requirements will depend on the number of parallel tests, and amount of data transferred with each test.
:::

### Amazon Web Services (AWS)

<table>
  <tr>
    <td></td>
    <td><strong>Machine Type</strong></td>
    <td><strong>Memory</strong></td>
    <td><strong>Processor</strong></td>
    <td><strong>Bandwidth</strong></td>
  </tr>
  <tr>
    <td>Minimum</td>
    <td>EC2 m4.large</td>
    <td>8 GB</td>
    <td>2</td>
    <td>450 Mbps</td>
  </tr>
  <tr>
    <td>Recommended</td>
    <td>EC2 m4.xlarge</td>
    <td>16 GB</td>
    <td>4</td>
    <td>750 Mbps</td>
  </tr>
</table>

### Google Compute Engine (GCE)

<table>
  <tr>
    <td></td>
    <td><strong>Machine Type</strong></td>
    <td><strong>Memory</strong></td>
    <td><strong>Processor</strong></td>
    <td><strong>Bandwidth</strong></td>
  </tr>
  <tr>
    <td>Minimum</td>
    <td>GCE n1-standard-2</td>
    <td>7.5 GB</td>
    <td>2</td>
    <td>450 Mbps</td>
  </tr>
  <tr>
    <td>Recommended</td>
    <td>GCE n1-standard-4</td>
    <td>15 GB</td>
    <td>4</td>
    <td>750 Mbps</td>
  </tr>
</table>

### Microsoft Azure

The below recommendations are for Linux VMs.

<table>
  <tr>
    <td></td>
    <td><strong>Machine Type</strong></td>
    <td><strong>Memory</strong></td>
    <td><strong>Processor</strong></td>
    <td><strong>Bandwidth</strong></td>
  </tr>
  <tr>
    <td>Minimum</td>
    <td>Standard_D2a_v4</td>
    <td>8 GiB</td>
    <td>2</td>
    <td>2000 Mbps</td>
  </tr>
  <tr>
    <td>Recommended</td>
    <td>Standard_D4a_v4</td>
    <td>16 GiB</td>
    <td>4</td>
    <td>4000 Mbps</td>
  </tr>
</table>

## Optimizing the Sauce Connect Proxy Performance

- If you're running **50 or more parallel tests**, we recommend a minimum network bandwidth of 450 Mbps to support the high volume of network traffic.
- If you're running **100 or more parallel tests**, we recommend a minimum network bandwidth of 750 Mbps to support the high volume of network traffic.
- For best performance, stability, and security, we recommend using a dedicated server for each tunnel (see [Sauce Connect Proxy Network Security](/secure-connections/sauce-connect-4/security-authentication)).
- If you're running **60 or more parallel tests**, we recommend launching more than one tunnel and using the [High Availability Sauce Connect Proxy Setup](/secure-connections/sauce-connect-4/setup-configuration/high-availability).

These are recommendations for the number of Sauce Connect tunnels by number of tests running in parallel:

<table>
  <tr>
    <td><strong>Parallel Tests</strong></td>
    <td><strong>Recommended SC Tunnels</strong></td>
  </tr>
  <tr>
    <td>0-59</td>
    <td>1</td>
  </tr>
  <tr>
    <td>60-119</td>
    <td>2</td>
  </tr>
  <tr>
    <td>120-199</td>
    <td>3</td>
  </tr>
  <tr>
    <td>200-299</td>
    <td>4-5</td>
  </tr>
  <tr>
    <td>400-599</td>
    <td>6-7</td>
  </tr>
  <tr>
    <td>600-799</td>
    <td>8-9</td>
  </tr>
  <tr>
    <td>800+</td>
    <td>10</td>
  </tr>
</table>

## Setting Up Sauce Connect on Your Test Device Network

Sauce Connect Proxy must be set up on the same network as your test devices. It does not, however, need to be set up on the same machine as the website or app you're testing.

[What Not to Do: Common Mistakes in Sauce Connect Proxy Network Configurations](/secure-connections/sauce-connect-4/troubleshooting) illustrates some examples of network architectures in which Sauce Connect will not be able to create a tunnel or will be too slow to carry out effective testing.

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

### Allowlisting for Restricted Networks

If you're testing in a restricted network setting, you may need to allowlist the Sauce Labs domains below to allow outbound communication to Sauce Labs Selenium and Appium endpoints. Allowlisting for inbound traffic coming into your network is not necessary. To confirm your setup is successful, try running a test using the [basic setup](/secure-connections/sauce-connect-4/setup-configuration/basic-setup).

You need to use the set of domains for your corresponding Sauce Labs data center: US data center (US West 1) or European data center (EU Central 1). The data center you're connected to is indicated in your navigation.<br/>

<img src={useBaseUrl('img/sauce-connect/dc-ui.png')} alt="Sauce Connect data center" width="450"/>

For more information on our data centers and how to choose the right one for you, see [Data Center Endpoints](/basics/data-center-endpoints).

### REST API Endpoints

The Sauce Labs REST API is a requirement for using Sauce Connect Proxy. Select your relevant [Data Center](/basics/data-center-endpoints):

<Tabs
groupId="dc-url"
defaultValue="US-West-1"
values={[
{label: 'US-West-1', value: 'US-West-1'},
{label: 'US-East-4', value: 'US-East-4'},
{label: 'EU-Central-1', value: 'EU-Central-1'},
]}>

<TabItem value="US-West-1">

| Virtual Device Cloud/Real Device Cloud + Sauce Connect |
| :----------------------------------------------------- |
| `https://api.us-west-1.saucelabs.com/rest/v1`          |

</TabItem>
<TabItem value="EU-Central-1">

| Virtual Device Cloud/Real Device Cloud + Sauce Connect |
| :----------------------------------------------------- |
| `https://api.eu-central-1.saucelabs.com/rest/v1`       |

</TabItem>
<TabItem value="US-East-4">

| Real Device Cloud + Sauce Connect                      |
| :----------------------------------------------------- |
| `https://api.us-east-4.saucelabs.com/rest/v1`          |

</TabItem>
</Tabs>

<br/>

#### Sauce Connect Tunnel Service Domains

The following domains must be allowlisted for outbound communication from you network in order to make connections to Sauce Connect tunnels. Select your relevant [Data Center](/basics/data-center-endpoints):

<Tabs
groupId="dc-url"
defaultValue="US-West-1"
values={[
{label: 'US-West-1', value: 'US-West-1'},
{label: 'US-East-4', value: 'US-East-4'},
{label: 'EU-Central-1', value: 'EU-Central-1'},
]}>

<TabItem value="US-West-1">

| Virtual Device Cloud/Real Device Cloud + Sauce Connect |
| :----------------------------------------------------- |
| `*.miso.saucelabs.com`                                 |

</TabItem>
<TabItem value="EU-Central-1">

| Virtual Device Cloud/Real Device Cloud + Sauce Connect |
| :----------------------------------------------------- |
| `*.eu-central-1.miso.saucelabs.com`                    |

</TabItem>
<TabItem value="US-East-4">

| Real Device Cloud + Sauce Connect                      |
| :----------------------------------------------------- |
| `*.tunnels.us-east-4.saucelabs.com`                    |

</TabItem>
</Tabs>

:::note Recommended Wildcard Allowlisting
For US-West-1 (Virtual Device Cloud/Real Device Cloud + Sauce Connect): `*.miso.saucelabs.com`
:::

<br/>

## Transport Layer Security (TLS) Requirements

Here are the Sauce Connect Proxy network requirements for TLS and SSL traffic:

- TLS version 1.2 or higher
- TLS/SSL library (e.g., OpenSSL)
- Network `port 443`, through which all traffic between your site and a Sauce Labs tunnel endpoint must pass

## Certificate Management

Public key certificates are used to manage the security of Sauce Connect Proxy communication to both the Sauce Labs API and to the Virtual Machine hosting your tests in the Sauce Labs cloud. For information on saucelabs.com certificate authentication, see [Sauce Connect Proxy Certificate Handling](/secure-connections/sauce-connect-4/security-authentication).
