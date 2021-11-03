---
id: data-center-endpoints
title: Data Center Endpoints
sidebar_label: Data Center Endpoints
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The data center you use with Sauce Labs determines:

* The location of the servers where your tests are run
* Where related artifacts are stored
* Your ability to run headless tests, meaning tests run on a browser that does not have a user interface


## What You’ll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)


## Access to Data Centers
Your data center is determined based on your license type and your company's needs:

* Free-trial users and self-service users select their data center when they sign up for Sauce Labs.
* Enterprise plan users select one or more data centers as part of their contract with Sauce Labs.

To see your data center, check the upper-right corner of the Sauce Labs user interface. Options include:

* [US West](#us-west-data-center)
* [EU Central](#eu-central-data-center)
* [Headless US-East](#headless-us-east-data-center)
* [APAC Southeast](#apac-southeast-data-center) <small><span className="sauceDBlue">BETA</span></small>


## Data Center Endpoints

URLs vary based on the services you're using, your data center, and the types of tests you need to run.

### US West Data Center

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Details</strong></td>
</tr>
<tr>
<td colSpan='2'><strong>US West OnDemand Endpoints</strong></td>
</tr>
<tr>
<td>Desktop Browser and Virtual Device Cloud</td><td><code>https://ondemand.us-west-1.saucelabs.com/wd/hub</code></td>
</tr>
<tr>
<td>RDC on Sauce</td><td><code>https://ondemand.us-west-1.saucelabs.com/</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy) <small><span className="sauceGold">DEPRECATED</span></small></td><td><code>https://us1.appium.testobject.com/wd/hub</code></td>
</tr>
<tr>
<td colSpan='2'><strong>US West REST API</strong></td>
</tr>
<tr>
<td>Virtual Devices and Desktops</td><td><code>https://api.us-west-1.saucelabs.com/v1</code></td>
</tr>
<tr>
<td>RDC on Sauce</td><td><code>https://api.us-west-1.saucelabs.com/v1/rdc</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy) <small><span className="sauceGold">DEPRECATED</span></small></td><td><code>https://app.testobject.com/api/rest/</code></td>
</tr>
<tr>
<td rowspan="2" >Sauce Connect Proxy</td>
<td>Virtual and Real Devices on Sauce: <code>https://saucelabs.com/rest/v1/</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy): <code>https://us1.api.testobject.com/sc/rest/v1</code> <small><span className="sauceGold">DEPRECATED</span></small></td>
</tr>
<tr>
<td>Team Management</td><td><code>https://api.us-west-1.saucelabs.com/team-management/v1/</code></td>
</tr>
<tr>
<td>IP Ranges</td><td><code>162.222.72.0/21</code><br/><code>66.85.48.0/21</code></td>
</tr>
</table>


### EU Central Data Center
:::note
Depending on the framework or driver you use, you might need to make additional changes to your tests to run them in the EU-Central data center. See [Running Tests on EU Central](#running-tests-on-eu-central) for details.
:::

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Details</strong></td>
</tr>
<tr>
<td colSpan='2'><strong>EU Central OnDemand Endpoints</strong></td>
</tr>
<tr>
<td>Desktop Browser and Virtual Device Cloud</td><td><code>https://ondemand.eu-central-1.saucelabs.com/wd/hub</code></td>
</tr>
<tr>
<td>RDC on Sauce</td><td><code>https://ondemand.eu-central-1.saucelabs.com/</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy) <small><span className="sauceGold">DEPRECATED</span></small></td><td><code>https://eu1.appium.testobject.com/wd/hub</code></td>
</tr>
<tr>
<td colSpan='2'><strong>EU Central REST API</strong></td>
</tr>
<tr>
<td>Virtual Devices and Desktops</td><td><code>https://api.eu-central-1.saucelabs.com/v1</code></td>
</tr>
<tr>
<td>RDC on Sauce</td><td><code>https://api.eu-central-1.saucelabs.com/v1/rdc</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy) <small><span className="sauceGold">DEPRECATED</span></small></td><td><code>https://app.testobject.com/api/rest/</code></td>
</tr>
<tr>
<td rowspan="2" >Sauce Connect Proxy</td>
<td>Virtual and Real Devices on Sauce: <code>https://eu-central-1.saucelabs.com/rest/v1</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy): <code>https://eu1.api.testobject.com/sc/rest/v1</code> <small><span className="sauceGold">DEPRECATED</span></small></td>
</tr>
<tr>
<td>Team Management</td><td><code>https://api.eu-central-1.saucelabs.com/team-management/v1/</code></td>
</tr>
<tr>
<td>IP Ranges</td><td><code>185.94.24.0/22</code></td>
</tr>
</table>


### APAC Southeast Data Center

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Details</strong></td>
</tr>
<tr>
<td colSpan='2'><strong>APAC Southeast OnDemand Endpoints</strong></td>
</tr>
<tr>
<td>Desktop Browser and Virtual Device Cloud</td><td><code>https://ondemand.apac-southeast-1.saucelabs.com/wd/hub</code></td>
</tr>
<tr>
<td>RDC on Sauce</td><td><code>https://ondemand.apac-southeast-1.saucelabs.com/</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy)<small><span className="sauceGold">DEPRECATED</span></small></td><td>N/A</td>
</tr>
<tr>
<td colSpan='2'><strong>APAC Southeast REST API</strong></td>
</tr>
<tr>
<td>Virtual Devices and Desktops</td><td><code>https://api.apac-southeast-1.saucelabs.com/v1/</code></td>
</tr>
<tr>
<td>RDC on Sauce</td><td>N/A</td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy)<small><span className="sauceGold">DEPRECATED</span></small></td><td>N/A</td>
</tr>
<tr>
<td rowspan="2" >Sauce Connect Proxy</td>
<td>Virtual and Real Devices on Sauce: <code>https://saucelabs.com/rest/v1/</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy): N/A</td>
</tr>
<tr>
<td>Team Management</td><td><code>https://api.apac-southeast-1.saucelabs.com/team-management/v1/</code></td>
</tr>
<tr>
<td>IP Ranges</td><td><code>34.87.251.80/28</code></td>
</tr>
</table>


### Headless US-East Data Center
For more information on Sauce Headless, including full test walkthroughs, see [Sauce Headless Testing in the Cross-Browser Cloud](/headless).

<table>
<tr>
<td><strong>Name</strong></td>
<td><strong>Details</strong></td>
</tr>
<tr>
<td colSpan='2'><strong>Headless US-East OnDemand Endpoints</strong></td>
</tr>
<tr>
<td>Desktop Browser and Virtual Device Cloud</td><td><code>https://ondemand.us-east-1.saucelabs.com/wd/hub</code></td>
</tr>
<tr>
<td>RDC on Sauce</td><td>N/A</td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy)<small><span className="sauceGold">DEPRECATED</span></small></td><td>N/A</td>
</tr>
<tr>
<td colSpan='2'><strong>Headless US-East REST API</strong></td>
</tr>
<tr>
<td>Virtual Devices and Desktops</td><td><code>https://us-east-1.saucelabs.com/rest/v1</code></td>
</tr>
<tr>
<td>RDC on Sauce</td><td>N/A</td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy)<small><span className="sauceGold">DEPRECATED</span></small></td><td>N/A</td>
</tr>
<tr>
<td rowspan="2" >Sauce Connect Proxy</td>
<td>Virtual and Real Devices on Sauce: <code>https://us-east-1.saucelabs.com/rest/v1</code></td>
</tr>
<tr>
<td>Real Devices on TestObject (Legacy): N/A <small><span className="sauceGold">DEPRECATED</span></small></td>
</tr>
<tr>
<td>Team Management</td><td>N/A</td>
</tr>
<tr>
<td>IP Ranges</td><td>N/A</td>
</tr>
</table>


## Data Center Location - Real Device Cloud
For real device testing, the location of your data center determines the format of some of the information you will see. Devices in US data centers default to EN-US, and will display information like date, currency, and temperature using US standard terms (i.e., MM/dd/yyyy, $, and F°), while devices in EU data centers default to EN-UK, and will display information like date, currency, and temperature using UK standard terms (i.e., dd/MM/yyyy, £, and C°).

:::note
This information only applies to real device testing. For all others, the default location will be EN-US, regardless of location.
:::

### Restricted Access
If you attempt to use a data center that you don't have access to:

* In the UI:
  * If you have a free-trial or self-service license, you can see the full list of data centers but can only select the one you have access to.
  * If you have an enterprise plan, you can select any data center but you won't have any concurrent sessions available for data centers you don't have access to.
* When running an automated test, you'll see an error message indicating that you don't have access.

### Access to Real Devices
Real devices are kept in our data center, behind locked racks and doors. Other security measures include:

* WiFi APIs are password protected with WPA2 security protocol, so only our devices can connect to the subnet.
* Devices must have proper proxy information in order to have network connectivity.
* Access management is handled by Sauce Labs, and only specific individuals are allowed access to our devices, with logs that track all access attempts.

### Automated Tests and APIs
When you run automated tests or make API calls, your data center by default is US West. If you want to use a different data center, you'll need to specify it in the test code or API call.

In addition, if you want to run automated tests on real devices, you need to specify the correct real device endpoint based on your data center. For details, see [Endpoints](#endpoints).

See the respective API documentation for the Real Device Cloud and Sauce Labs API:

* [The Sauce Labs REST API](/dev/api)
* [TestObject: API Reference](https://api.testobject.com/) <small><span className="sauceGold">DEPRECATED</span></small>

For more information about the Real Device Cloud and Sauce Labs API, see [API Reference](/dev/api).

#### Authorization Credentials
The URL hostname and authorization credentials for APIs are different for each data center:

| Sauce Data Center | Authorization Credentials |
|:---|:---|
| US West virtual devices and desktops cloud  | Username and access key can be found in Sauce Labs under **ACCOUNT** > **User settings**. |
| EU Central virtual devices and desktops cloud  | Username and access key can be found in Sauce Labs under **ACCOUNT** > **User settings**. |
| APAC Southeast virtual devices and desktops cloud  | Username and access key can be found in Sauce Labs under **ACCOUNT** > **User settings**. |
| US West real devices cloud  | Username and access key can be found in Sauce Labs under **ACCOUNT** > **User settings**. |
| EU Central real devices cloud  | Username and access key can be found in Sauce Labs under **ACCOUNT** > **User settings**. |
| APAC Southeast real devices cloud | N/A |
| US Legacy TestObject cloud <small><span className="sauceGold">DEPRECATED</span></small>  | User name and API key can be found in [TestObject](https://app.testobject.com/) under **Account Settings**. |
| EU Legacy TestObject cloud <small><span className="sauceGold">DEPRECATED</span></small>  | User name and API key can be found in [TestObject](https://app.testobject.com/) under **Account Settings**. |

#### Running Tests on EU Central
If you use any of the following and your data center is EU Central, you need to make changes to your tests and/or framework to run those tests in the EU data center.

| Framework | Change |
|:---|:---|
| Java with JUnit or TestNG  | Set `SAUCE_REST_ENDPOINT=https://eu-central-1.saucelabs.com/` as a system/environment variable, otherwise test status will not be set. |
| Protractor | Update to version 5.4.2 or later of Protractor and set `sauceRegion: 'eu'` in your `config` file. |
| WebDriverIO | Update to version 4.14.1 or later, or 5.0.0 or later, of WebDriverIO and set `region: 'eu'` in your `wdio.conf` file. |

### Single Sign-On (SSO) Configuration
If you're using SSO with Sauce Labs, your data center determines the appropriate URLs for:

* Signing/Encryption Certificate - This URL shows the certificate metadata you need to provide to your service provider to authenticate with Sauce Labs.
* Entity AssertionConsumeURL - This URL is the endpoint where your service provider gets SAML assertions from Sauce Labs.

For details about setting up SSO for Sauce Labs, see [Setting Up Single Sign-On](/basics/sso/setting-up-single-sign-on).

| Data Center | Signing/Encryption Certificate/Entity ID | Entity AssertionConsumeURL |
|:---|:---|:---|
| US West | `https://saucelabs.com/sso/metadata` | `https://saucelabs.com/sso/acs` |
| EU Central | `https://eu-central-1.saucelabs.com/sso/metadata` | `https://eu-central-1.saucelabs.com/sso/acs` |
| Headless US-East | `https://us-east-1.saucelabs.com/sso/metadata` | `https://us-east-1.saucelabs.com/sso/acs` |

## Changing Your Data Center
If you have access to more than one data center, you can switch data centers by clicking the data center name in the upper-right corner. This drops down a list of options available to you.

Changing your data center changes what you can see and do in the Sauce Labs UI:

* Live tests you run in the UI.
* Results for live tests and automated tests you run on the data center.
* Organization-wide concurrency settings specific to the data center.
* Teams associated with the data center.
* Sauce Connect Proxy tunnels connected to the data center.

## Data Center Status
To check on the status of your data center, see the [Sauce Labs Systems Status](https://status.saucelabs.com/) page.

### Maintenance Windows
To view planned maintenance windows for your data center, see [Maintenance Windows](/dev/data-center-maint).
