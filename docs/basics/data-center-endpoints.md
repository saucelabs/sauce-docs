---
id: data-center-endpoints
title: Data Center Endpoints
sidebar_label: Data Center Endpoints
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The data center you use with Sauce Labs determines:

- The location of the servers where your tests are run
- Where related artifacts are stored

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)

## Access to Data Centers

Your data center is determined based on your license type and your company's needs:

- Free-trial users and self-service users select their data center when they sign up for Sauce Labs.
- Enterprise plan users select one or more data centers as part of their contract with Sauce Labs.

To see your data center, check the upper-right corner of the Sauce Labs user interface. Options include:

- US West
- US East
- EU Central

## Data Center Endpoints

### Sauce Connect Proxy

| Description        | Endpoint                      |
| ------------------ | ----------------------------- |
| Initial connection | <https://saucelabs.com/rest/v1> |

Sauce Connect Proxy makes its initial connection to saucelabs.com. After that, it uses the data center-specific endpoints listed below.

### US West Data Center

| Description                  | Endpoint                                        |
| ---------------------------- | ----------------------------------------------- |
| OnDemand Endpoint            | <https://ondemand.us-west-1.saucelabs.com/wd/hub> |
| REST API                     | api.us-west-1.saucelabs.com                     |
| Sauce Connect Tunnel Servers | maki\*.miso.saucelabs.com:443                   |

### US East Data Center

| Description                  | Endpoint                                        |
| ---------------------------- | ----------------------------------------------- |
| OnDemand Endpoint            | <https://ondemand.us-east-4.saucelabs.com/wd/hub> |
| REST API                     | api.us-east-4.saucelabs.com                     |
| Sauce Connect Tunnel Servers | \*.tunnels.us-east-4.saucelabs.com:443          |

### EU Central Data Center

:::note
Depending on the framework or driver you use, you might need to make additional changes to your tests to run them in the EU Central data center. See [Running Tests on EU Central](#running-tests-on-eu-central) for details.
:::

| Description                  | Endpoint                                           |
| ---------------------------- | -------------------------------------------------- |
| OnDemand Endpoint            | <https://ondemand.eu-central-1.saucelabs.com/wd/hub> |
| REST API                     | api.eu-central-1.saucelabs.com                     |
| Sauce Connect Tunnel Servers | maki\*.eu-central-1.miso.saucelabs.com:443         |

## IP Address Ranges - Outgoing

To set up an IP-address-based allowlist for outgoing connections, rather than using hostnames, see the following table for the relevant IP ranges.

### Sauce Connect Proxy

| Description        | Endpoint    |
| ------------------ | ----------- |
| Initial connection | 34.96.70.78 |

Sauce Connect Proxy makes its initial connection to saucelabs.com, which resolves to the IP address above. After that, it uses the data center-specific endpoints listed below.

### US West Region

| Endpoints                          |
| ---------------------------------- |
| 34.125.90.96/27 (from Jan 31 2023) |
| 34.125.246.157/32                  |
| 44.225.33.89/32                    |
| 66.85.48.0/21                      |
| 162.222.72.0/21                    |

### US East Region

| Endpoints                          |
| ---------------------------------- |
| 66.85.48.0/21                      |
| 162.222.72.0/21                    |
| 34.145.254.128/27                  |

### EU Central Reguion

| Endpoints                          |
| ---------------------------------- |
| 34.107.82.96/27 (from Jan 31 2023) |
| 34.141.28.96/32                    |
| 162.222.79.0/27                    |
| 185.94.24.0/22                     |

## Real Devices

For real device testing, the location of your data center determines the format of some of the information you will see. Devices in US data centers default to EN-US, and will display information like date, currency, and temperature using US standard terms (i.e., MM/dd/yyyy, $, and F°), while devices in EU data centers default to EN-UK, and will display information like date, currency, and temperature using UK standard terms (i.e., dd/MM/yyyy, £, and C°).

:::note
This information only applies to real device testing. For all others, the default location will be EN-US, regardless of location.
:::

### Restricted Access

If you attempt to use a data center that you don't have access to:

- In the UI:
  - If you have a free-trial or self-service license, you can see the full list of data centers but can only select the one you have access to.
  - If you have an enterprise plan, you can select any data center but you won't have any concurrent sessions available for data centers you don't have access to.
- When running an automated test, you'll see an error message indicating that you don't have access.

### Access to Real Devices

Real devices are kept in our data center, behind locked racks and doors. Other security measures include:

- WiFi APIs are password protected with WPA2 security protocol, so only our devices can connect to the subnet.
- Devices must have proper proxy information in order to have network connectivity.
- Access management is handled by Sauce Labs, and only specific individuals are allowed access to our devices, with logs that track all access attempts.

### Automated Tests and APIs

#### Authorization Credentials

The URL hostname and authorization credentials for APIs are different for each data center, and can be found in Sauce Labs on the **User Settings** page.

#### Running Tests on EU Central

If you use any of the following and your data center is EU Central, you need to make changes to your tests and/or framework to run those tests in the EU data center.

| Framework                 | Change                                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Java with JUnit or TestNG | Set `SAUCE_REST_ENDPOINT=https://eu-central-1.saucelabs.com/` as a system/environment variable, otherwise test status will not be set. |
| Protractor                | Update to version 5.4.2 or later of Protractor and set `sauceRegion` to `eu` in your config file.                                      |
| WebDriverIO               | Update to version 4.14.1 or later, or 5.0.0 or later, of WebDriverIO and set `region` to `eu` in your wdio.conf file.                  |

### Single Sign-On (SSO) Configuration

<p><span className="sauceGold">Deprecated</span></p>

:::caution
This SSO flow has been `deprecated`. Use this documentation only if your organization was not migrated to the new SSO.

If you do not have any SSO integrations set up at Sauce Labs and you wish to establish a new integration, see [Setting Up SSO](/basics/sso/setting-up-sso) to get started.

If you have previously implemented the deprecated SSO integration and wish to migrate to the new SSO implementation, see the [step-by-step migration guide](/basics/sso/migration-from-deprecated-sso/).
:::

If you're using SSO with Sauce Labs, your data center determines the appropriate URLs for:

- Signing/Encryption Certificate - This URL shows the certificate metadata you need to provide to your service provider to authenticate with Sauce Labs.
- Entity AssertionConsumeURL - This URL is the endpoint where your service provider gets SAML assertions from Sauce Labs.

For details about setting up SSO for Sauce Labs, see [Setting Up Single Sign-On (Deprecated Flow)](/basics/sso-deprecated/setting-up-single-sign-on).

#### US West Data Center

| Signing/Encryption Certificate/Entity ID | Entity AssertionConsumeURL    |
| ---------------------------------------- | ----------------------------- |
| <https://saucelabs.com/sso/metadata>       | <https://saucelabs.com/sso/acs> |

#### US East Data Center

| Signing/Encryption Certificate/Entity ID        | Entity AssertionConsumeURL                 |
| ----------------------------------------------- | ------------------------------------------ |
| <https://us-east-4.saucelabs.com/sso/metadata> | <https://us-east-4.saucelabs.com/sso/acs> |

#### EU Central Data Center

| Signing/Encryption Certificate/Entity ID        | Entity AssertionConsumeURL                 |
| ----------------------------------------------- | ------------------------------------------ |
| <https://eu-central-1.saucelabs.com/sso/metadata> | <https://eu-central-1.saucelabs.com/sso/acs> |

## Changing Your Data Center

If you have access to more than one data center, you can switch data centers by clicking the data center name in the upper-right corner. This drops down a list of options available to you.

Changing your data center changes what you can see and do in the Sauce Labs UI:

- Live tests you run in the UI.
- Results for live tests and automated tests you run on the data center.
- Organization-wide concurrency settings specific to the data center.
- Teams associated with the data center.
- Sauce Connect Proxy tunnels connected to the data center.

## Data Center Status

To check on the status of your data center, see the [Sauce Labs Systems Status](https://status.saucelabs.com/) page.

### Maintenance Windows

To view planned maintenance windows for your data center, see [Maintenance Windows](/dev/data-center-maint).
