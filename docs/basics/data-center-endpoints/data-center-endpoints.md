---
id: data-center-endpoints
title: Data Center Endpoints
sidebar_label: Data Center Endpoints
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The data center (DC) you use with Sauce Labs determines:

* The location of the servers where your tests are run
* Where related artifacts are stored
* Your ability to run headless tests, meaning tests run on a browser that does not have a user interface

## Data Center Location - Real Device Cloud
For real device testing, the location of your data center determines the format of some of the information you will see. Devices in US data centers default to EN-US, and will display information like date, currency, and temperature using US standard terms (i.e., MM/dd/yyyy, $, and F°), while devices in EU data centers default to EN-UK, and will display information like date, currency, and temperature using UK standard terms (i.e., dd/MM/yyyy, £, and C°).

:::note
This information only applies to real device testing. For all others, the default location will be EN-US, regardless of location.
:::


## Access to Data Centers
Your DC is determined based on your license type and your company's needs:

* Free-trial and self-service users select their DC when they sign up for Sauce Labs.
* Enterprise customers select one or more DCs as part of their contract with Sauce Labs

To see your data center, check the upper-right corner of the Sauce Labs user interface. Options include:

* US-West
* EU-Central
* Headless

### Restricted Access
If you attempt to use a DC that you don't have access to:

* In the UI:
  * If you have a free-trial or self-service license, you can see the full list of DCs but can only select the one you have access to.
  * If you have an enterprise plan, you can select any DC but you won't have any concurrent sessions available for DCs you don't have access to.
* When running an automated test, you'll see an error message indicating that you don't have access.

### Access to Real Devices
Real devices are kept in our data center, behind locked racks and doors. Other security measures include:

* WiFi APIs are password protected with WPA2 security protocol, so only our devices can connect to the subnet
* Devices must have proper proxy information in order to have network connectivity
* Access management is handled by Sauce employees, and only specific individuals are allowed access to our devices, with logs that track all access attempts

### Automated Tests and APIs
When you run automated tests or make API calls, your DC by default is US-West. If you want to use a different DC, you'll need to specify it in the test code or API call.

In addition, if you want to run automated tests on real devices, you need to specify the correct real device endpoint based on your DC. For details, see the table for your DC under Endpoints.

See the respective API documentation for the Real Device Cloud and Sauce Labs API:

* [TestObject: API Reference](https://api.testobject.com/)
* [The Sauce Labs REST API](/dev/api)

#### Authorization Credentials
The URL hostname and authorization credentials for APIs are different for each DC:


| Sauce Data Center | Authorization Credentials |
|---|---|
| US virtual devices and desktops cloud  | User name and access key can be found in [Sauce Labs](https://app.saucelabs.com/dashboard) under **ACCOUNT -> User settings**. |
| EU virtual devices and desktops cloud  | User name and access key can be found in [Sauce Labs](https://app.saucelabs.com/dashboard) under **ACCOUNT -> User settings**. |
| US real devices cloud  | User name and access key can be found in [Sauce Labs](https://app.saucelabs.com/dashboard) under **ACCOUNT -> User settings**. |
| EU real devices cloud  | User name and access key can be found in [Sauce Labs](https://app.saucelabs.com/dashboard) under **ACCOUNT -> User settings**. |
| US Legacy TestObject cloud  | User name and API key can be found in [Test Object](https://app.testobject.com/) under **Account Settings**. |
| EU Legacy TestObject cloud  | User name and API key can be found in [Test Object](https://app.testobject.com/) under **Account Settings**. |

#### Running Tests on EU-Central
If you use any of the following and your DC is EU-Central, you need to make changes to your tests and/or framework to run those tests in the EU DC.

|||
|---|---|
| Java with JUnit or TestNG  | Set `SAUCE_REST_ENDPOINT=https://eu-central-1.saucelabs.com/` as a system/environment variable, otherwise test status will not be set. |
| Protractor | Update to version 5.4.2 or later of Protractor and set `sauceRegion: 'eu'` in your `config` file. |
| WebDriverIO | Update to version 4.14.1 or later, or 5.0.0 or later, of WebDriverIO and set `region: 'eu'` in your `wdio.conf` file. |

### Single Sign-On (SSO) Configuration
If you're using SSO with Sauce Labs, your DC determines the appropriate URLs for:

* Signing/Encryption Certificate - This URL shows the certificate metadata you need to provide to your service provider to authenticate with Sauce Labs.
* Entity AssertionConsumeURL - This URL is the endpoint where your service provider gets SAML assertions from Sauce Labs.

For details about setting up SSO for Sauce Labs, see [Setting Up Single Sign-On](/basics/sso/setting-up-single-sign-on).

| Data Center | Signing/Encryption Certificate/Entity ID | Entity AssertionConsumeURL |
|---|---|---|
| US | `https://saucelabs.com/sso/metadata` | `https://saucelabs.com/sso/acs` |
| EU | `https://eu-central-1.saucelabs.com/sso/metadata` | `https://eu-central-1.saucelabs.com/sso/acs` |
| Headless | `https://us-east-1.saucelabs.com/sso/metadata` | `https://us-east-1.saucelabs.com/sso/acs` |

## Changing Your Data Center
If you have access to more than one DC, you can switch DCs by clicking the data center name in the upper-right corner. This drops down a list of options available to you.

Changing your DC changes what you can see and do in the Sauce Labs UI:

* Live tests you run in the UI
* Results for live tests and automated tests you run on the DC
* Organization-wide concurrency settings specific to the DC
* Teams associated with the DC
* Sauce Connect Proxy Tunnels connected to the DC

## Status Pages
To check on the state of your data center, click the applicable link:

US Data Center - [https://status.us-west-1.saucelabs.com/](https://status.us-west-1.saucelabs.com/)
EU Data Center - [http://status.eu-central-1.saucelabs.com/](http://status.eu-central-1.saucelabs.com/)
Headless Data Center (US-only) - [https://status.us-east-1.saucelabs.com/](https://status.us-east-1.saucelabs.com/)

### Maintenance Windows
To view planned maintenance windows for your data center, see [Maintenance Windows](/dev/data-center-maint).

## Endpoints
URLs vary based on the services you're using, your DC, and the types of tests you need to run.

### US Data Center
| Name | Details |
|---|---|
| **US OnDemand Endpoints** |   |
| Desktop Browser and Virtual Device Cloud | `https://ondemand.us-west-1.saucelabs.com/wd/hub` |
| RDC on Sauce | `https://ondemand.us-west-1.saucelabs.com/` |
| Legacy RDC/Test Object | `https://us1.appium.testobject.com/wd/hub` |
| Team Management | `https://api.us-west-1.saucelabs.com/team-management/v1/` |
| **US REST API** |   |
| Virtual Devices and Desktops | `https://api.us-west-1.saucelabs.com/v1` |
| RDC on Sauce | `https://api.us-west-1.saucelabs.com/v1/rdc` |
| Real Devices on Test Object | `https://app.testobject.com/api/rest/` |
| Sauce Connect Proxy | Virtual and Real Devices on Sauce: `https://saucelabs.com/rest/v1/`<br/>Real Devices on Test Object: `https://us1.api.testobject.com/sc/rest/v1` |
| IP Ranges | 162.222.72.0/21<br/>66.85.48.0/21  |

### EU Data Center
:::note
Depending on the framework or driver you use, you might need to make additional changes to your tests to run them in the EU-Central DC. See Running Tests on EU-Central for details.
:::

| Name | Details |
|---|---|
| **EU OnDemand Endpoints** |   |
| Desktop Browser and Virtual Device Cloud | `https://ondemand.eu-central-1.saucelabs.com/wd/hub` |
| RDC on Sauce | `https://ondemand.eu-central-1.saucelabs.com/` |
| Legacy RDC/Test Object | `https://eu1.appium.testobject.com/wd/hub` |
| Team Management | `https://api.eu-central-1.saucelabs.com/team-management/v1/` |
| **EU REST API** |   |
| Virtual Devices and Desktops | `https://api.eu-central-1.saucelabs.com/v1` |
| RDC on Sauce | `https://api.eu-central-1.saucelabs.com/v1/rdc` |
| Real Devices on Test Object | `https://app.testobject.com/api/rest/` |
| Sauce Connect Proxy | Virtual and Real Devices on Sauce: `https://eu-central-1.saucelabs.com/rest/v1`<br/>Real Devices on Test Object: `https://eu1.api.testobject.com/sc/rest/v1` |
| IP Ranges | `185.94.24.0/22` |

### Headless Data Center (US-Only)
For more information on Sauce Headless, including full test walkthroughs, see [Sauce Headless Testing in the Cross-Browser Cloud](/headless).

| Name | Details |
|---|---|
| **Headless OnDemand Endpoints** |   |
| Desktop Browser and Virtual Device Cloud | `https://ondemand.us-east-1.saucelabs.com/wd/hub` |
| RDC on Sauce | N/A |
| Legacy RDC/Test Object | N/A |
| **Headless REST API** |   |
| Virtual Devices and Desktops | `https://us-east-1.saucelabs.com/rest/v1` |
| RDC on Sauce | N/A |
| Real Devices on Test Object | N/A |
| Sauce Connect Proxy | `https://us-east-1.saucelabs.com/rest/v1` |
| IP Ranges | N/A |
