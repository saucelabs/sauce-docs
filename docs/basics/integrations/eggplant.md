---
id: eggplant
title: Eggplant Integration
sidebar_label: Eggplant
description: Create, execute, and maintain test easily with the industry's leading model-based test platform
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Eggplant Gateway enables Eggplant Functional to connect directly to devices hosted in the Sauce Labs Real Device Cloud. Typically, the Eggplant Gateway runs on the same machine as on which you have installed Eggplant Functional. The Eggplant Gateway and Eggplant Functional communicate using the VNC protocol (for image-based automation, usually at port 5900) and WebDriver (for Appium-driven automation, usually at port 5000).

The Eggplant Gateway will allocate a device on the Sauce Labs Real Device Cloud using the Sauce Labs API. The Eggplant Gateway connects to the Sauce Labs API using the HTTPS protocol (at port 443) and the Secure WebSockets protocol (at port 443). For more information, see [Data Center Endpoints](/basics/data-center-endpoints/).

The communication flow is similar when running a DAI model on a Sauce Labs device. In this case, DAI connects to an instance of Eggplant Functional, which leverages the Eggplant Gateway to connect to the Sauce Labs Real Device Cloud.

## Using Sauce Connect Proxy with Eggplant Gateway​

When using the Eggplant Gateway, the application under test is running on a Sauce Labs device. These devices are located in one of Sauce Labs' data centers. In certain scenarios, these applications may need to connect to corporate systems, such as UAT environments, that are not usually exposed over the public internet. In these scenarios, you can consider using Sauce Connect Proxy to provide your application with access to the corporate systems. For more information, see [Sauce Connect Proxy](/secure-connections/sauce-connect-4/).

You can use the Eggplant Gateway for Sauce Labs Browsers to run Eggplant Functional and Eggplant DAI tests on browsers running in the Sauce Labs cloud.

## What You’ll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username](https://app.saucelabs.com/user-settings).
- Download and install Eggplant Gateway. For details, see [Install Eggplant Gateway](https://docs.eggplantsoftware.com/gateway/download/).

## Connecting a Browser to Eggplant

To set up a connection to a browser in the Sauce Labs cloud, run the following command:

```
./epgw add sauce-browser \
 --name <name> \
 --user <user> \
 --apiKey <apiKey> \
 --dataCenter <dataCenter> \
 --platformName <platformName> \
 --browserName <browserName> \
 --browserVersion <browserVersion> \
 --screenResolution <screenResolution> \
 --url <url>
```

| Key              | Description                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name             | The name of the connection you want to create.                                                                                                            |
| user             | Your [Sauce Labs user name](https://app.saucelabs.com/user-settings). For example, `awesome-user`.                                                        |
| apiKey           | Your [Sauce Labs API key](https://app.saucelabs.com/user-settings) (also referred to as Access Key). For example, `33b6cc9e-1cba-4e1e-84d3-eb2a24f5ea28`. |
| dataCenter       | The [Sauce Labs data center](/basics/data-center-endpoints/) you want to use. For example, `us-west-1` or `eu-central-1`.                                 |
| platformName     | The platform you want to use. The default is `Windows 10`.                                                                                                |
| browserName      | The browser name. The default is `chrome`.                                                                                                                |
| browserVersion   | The browser version. The default is `98`.                                                                                                                 |
| screenResolution | The screen resolution. The default is `1400x1050`.                                                                                                        |
| url              | The URL to navigate to when the browser launches.                                                                                                         |

For example, to create a connection that will launch Chrome and navigate to https://www.google.com:

```
./epgw add sauce-browser \
 --name chrome \
 --user sauce_user \
 --apiKey awesome_key \
 --dataCenter eu-central-1 \
 --browserName chrome \
 --url https://www.google.com
```

## Connecting a Browser to Eggplant Functional

To provision a browser in the Sauce Labs cloud and use it through Eggplant Functional:

1. Start **Eggplant Functional**.
2. Run `epgw connect <name>`, where `name` is the name of your Gateway connection. For example, `epgw connect chrome`.

## Setting up a VNC and WebDriver Server

Alternatively, you can set up a VNC and WebDriver server for your browser.

1. Run `epgw vnc <name>`, where `name` is the name of your Gateway connection. For example, `epgw vnc chrome`.

   The Eggplant Gateway will now provision your browser in the Sauce Labs cloud and start:

   - A VNC server at port 5900
   - A WebDriver server at port 5000

2. Manually add your device to the connection list in Eggplant Functional.
3. To run multiple Eggplant Gateways simultaneously, specify a custom VNC port and WebDriver port.

| Key           | Description                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| vncPort       | The custom VNC port. The Eggplant Gateway starts a VNC server at the given vncPort.                   |
| webDriverPort | The custom WebDriver port. The Eggplant Gateway starts a WebDriver server at the given webDriverPort. |

For example, `epgw vnc chrome --vncPort 5901 --webDriverPort 5001`.

## Real Devices

You can use the Eggplant Gateway for the Sauce Labs Real Device Cloud to run Eggplant Functional and Eggplant DAI tests on public and private devices running in the Sauce Labs Real Device Cloud (RDC).

:::note
Eggplant Functional 22.3 (or later) has built-in support for Sauce Labs devices. You do not need to use the Eggplant Gateway to connect to Sauce Labs devices using these versions of Eggplant Functional. See the [Connecting to Sauce Labs Devices and Browsers](https://docs.eggplantsoftware.com/studio/epf-connecting-to-sauce-labs-devices-and-browsers/) for more information.
:::

### What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username](https://app.saucelabs.com/user-settings).
- Download and install Eggplant Gateway. For details, see [Install Eggplant Gateway](https://docs.eggplantsoftware.com/gateway/download/).

### Connecting a Real Device to Eggplant

To set up a connection to an RDC device, run the following command:

```
./epgw add sauce-device \
 --name <name> \
 --user <user> \
 --apiKey <apiKey> \
 --dataCenter <dataCenter> \
 --platformName <platformName> \
 --deviceName <deviceName> \
 --app <app>
```

| Key          | Description                                                                                                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name         | The name of the connection you want to create.                                                                                                                                                                                                             |
| user         | Your [Sauce Labs user name](https://app.saucelabs.com/user-settings). For example, `awesome-user`.                                                                                                                                                         |
| apiKey       | Your [Sauce Labs API key](https://app.saucelabs.com/user-settings) (also referred to as Access Key). For example, `33b6cc9e-1cba-4e1e-84d3-eb2a24f5ea28`.                                                                                                  |
| dataCenter   | The [Sauce Labs data center](/basics/data-center-endpoints/) you want to use. For example, `us-west-1` or `eu-central-1`.                                                                                                                                  |
| platformName | The device platform you want to use (e.g., `iOS` or `Android`).                                                                                                                                                                                            |
| deviceName   | The name of the device you want to connect to (e.g., `iPhone 8`). You can use static or dynamic device allocation. For more information, see [Static and Dynamic Device Allocation](/mobile-apps/supported-devices/#static-and-dynamic-device-allocation). |
| app          | (Optional) The app you want to launch on the device. This can be the location of your app in app storage or the URL to a remote location where your app is located. For more information, see [Mobile App Storage](/mobile-apps/app-storage/).             |

For example, to create a connection that will launch the Swag Labs demo application on an iPhone 8 in the `eu-central-1` data center, run the following command:

```
./epgw add sauce-device \
 --name swaglabs-iphone8 \
 --user sauce_user \
 --apiKey awesome_key \
 --dataCenter eu-central-1 \
 --platformName iOS \
 --deviceName "iPhone 8" \
 --app https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa
```

### Connecting a Real Device to Eggplant Functional

To connect a public or private real device to Eggplant Functional:

1. Start **Eggplant Functional**.
2. Run `epgw connect <name>`, where `name` is the name of your Gateway connection. For example, `epgw connect swaglabs-iphone8`.

The Eggplant Gateway will rent the device and add it to the connection list in Eggplant Functional.

### Setting up a VNC and WebDriver Server

To set up a VNC and WebDriver for your server:

1. Run `epgw vnc <name>`, where `name` is the name of your Gateway connection. For example, `epgw vnc swaglabs-iphone8`.

The Eggplant Gateway will rent the device and start:

- A VNC server at port 5900
- A WebDriver server at port 5000

2. Manually add your device to the connection list in Eggplant Functional.
3. To run multiple Eggplant Gateways simultaneously, specify a custom VNC port and WebDriver port.

| Key           | Description                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| vncPort       | The custom VNC port. The Eggplant Gateway starts a VNC server at the given vncPort.                   |
| webDriverPort | The custom WebDriver port. The Eggplant Gateway starts a WebDriver server at the given webDriverPort. |

For example, `epgw vnc swaglabs-iphone8 --vncPort 5901 --webDriverPort 5001`.
