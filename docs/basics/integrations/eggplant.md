---
id: eggplant
title: Eggplant Integration
sidebar_label: Eggplant
description: Run Eggplant Functional and Eggplant DAI tests on Sauce Labs browsers, real devices, Emulators, and Simulators.
---

Keysight Eggplant is a model-based test automation platform that includes Eggplant Functional and Eggplant DAI. The Sauce Labs integration with Eggplant lets you run your Eggplant Functional and Eggplant DAI tests on browsers in the Sauce Labs cloud and on public and private devices in the Sauce Labs Real Device Cloud (RDC). This page explains how to set up the integration and use it with your Sauce Labs tests.

## How It Works

The Eggplant Gateway connects Eggplant Functional directly to browsers and devices in Sauce Labs. Typically, the Eggplant Gateway runs on the same machine as Eggplant Functional.

- **Eggplant Gateway and Eggplant Functional** communicate using the VNC protocol (for image-based automation, usually at port 5900) and WebDriver (for Appium-driven automation, usually at port 5000).
- **Eggplant Gateway and Sauce Labs** communicate using the HTTPS protocol (at port 443) and the Secure WebSockets protocol (at port 443). The Eggplant Gateway uses the Sauce Labs API to allocate a browser or device. For more information, see [Data Center Endpoints](/basics/data-center-endpoints/).

The communication flow is similar when you run an Eggplant DAI model on Sauce Labs. In this case, DAI connects to an instance of Eggplant Functional, which uses the Eggplant Gateway to connect to Sauce Labs.

### Choose a Connection Method

Eggplant Functional 22.3 (or later) has built-in support for Sauce Labs. You do not need to use the Eggplant Gateway to connect to Sauce Labs with these versions of Eggplant Functional.

| Method                                | When to use it                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Built-in Sauce Labs connection**    | You use Eggplant Functional 22.3 or later, and want to connect to desktop browsers or real iOS and Android devices. Select the Sauce Labs connection type in the Eggplant Functional **Connection List**, or use the SenseTalk `Connect` command. See [Connecting to Sauce Labs Devices and Browsers](https://docs.eggplantsoftware.com/epf/epf-connecting-to-sauce-labs-devices-and-browsers/). |
| **Eggplant Gateway** (described here) | You use an earlier version of Eggplant Functional, you want to run a VNC and WebDriver server for a browser or device, or you want to connect to Sauce Labs Emulators and Simulators.                                                                                                                                                                                                            |

### Limitations

- WebDriver commands are not supported for Sauce Labs Safari browser connections in Eggplant Functional.
- The Eggplant Gateway closes browser connections after 3 hours.
- Eggplant Functional supports Sauce Connect Proxy, but not Sauce IPSec Proxy.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- Eggplant Functional installed.
- The Eggplant Gateway installed. For details, see [Install Eggplant Gateway](https://docs.eggplantsoftware.com/gateway/download/).

## Authentication

The Eggplant Gateway authenticates with Sauce Labs using your Sauce Labs **username** and **access key** (also referred to as API key). You can find both in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings).

You pass your credentials to the Eggplant Gateway with the `--user` and `--apiKey` options when you create a connection. To keep your credentials out of your scripts and command history, store them in environment variables:

```bash
export SAUCE_USERNAME="<username>"
export SAUCE_ACCESS_KEY="<access-key>"
```

## Set Up with the CLI

You use the Eggplant Gateway CLI (`epgw`) to create a connection to a Sauce Labs browser or device. You then use the connection from Eggplant Functional.

### Install the Eggplant Gateway

Download and install the Eggplant Gateway. For details, see [Install Eggplant Gateway](https://docs.eggplantsoftware.com/gateway/download/).

### Create a Browser Connection

To set up a connection to a browser in the Sauce Labs cloud, run the following command:

```bash
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

| Option             | Description                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `name`             | The name of the connection you want to create.                                                                            |
| `user`             | Your Sauce Labs username. See [Authentication](#authentication).                                                          |
| `apiKey`           | Your Sauce Labs access key. See [Authentication](#authentication).                                                        |
| `dataCenter`       | The [Sauce Labs data center](/basics/data-center-endpoints/) you want to use. For example, `us-west-1` or `eu-central-1`. |
| `platformName`     | The platform you want to use. The default is `Windows 10`.                                                                |
| `browserName`      | The browser name. The default is `chrome`.                                                                                |
| `browserVersion`   | The browser version. The default is `98`.                                                                                 |
| `screenResolution` | The screen resolution. The default is `1400x1050`.                                                                        |
| `url`              | The URL to navigate to when the browser launches.                                                                         |

For example, to create a connection that launches Chrome and navigates to https://www.google.com:

```bash
./epgw add sauce-browser \
 --name chrome \
 --user "$SAUCE_USERNAME" \
 --apiKey "$SAUCE_ACCESS_KEY" \
 --dataCenter eu-central-1 \
 --browserName chrome \
 --url https://www.google.com
```

### Create a Real Device Connection

To set up a connection to a device in the Sauce Labs Real Device Cloud, run the following command:

```bash
./epgw add sauce-device \
 --name <name> \
 --user <user> \
 --apiKey <apiKey> \
 --dataCenter <dataCenter> \
 --platformName <platformName> \
 --deviceName <deviceName> \
 --app <app>
```

| Option         | Description                                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | The name of the connection you want to create.                                                                                                                                                                                                                   |
| `user`         | Your Sauce Labs username. See [Authentication](#authentication).                                                                                                                                                                                                 |
| `apiKey`       | Your Sauce Labs access key. See [Authentication](#authentication).                                                                                                                                                                                               |
| `dataCenter`   | The [Sauce Labs data center](/basics/data-center-endpoints/) you want to use. For example, `us-west-1` or `eu-central-1`.                                                                                                                                        |
| `platformName` | The device platform you want to use. For example, `iOS` or `Android`.                                                                                                                                                                                            |
| `deviceName`   | The name of the device you want to connect to. For example, `iPhone 8`. You can use static or dynamic device allocation. For more information, see [Static and Dynamic Device Allocation](/mobile-apps/supported-devices/#static-and-dynamic-device-allocation). |
| `app`          | (Optional) The app you want to launch on the device. This can be the location of your app in App Storage or the URL to a remote location where your app is located. For more information, see [Mobile App Storage](/mobile-apps/app-storage/).                   |
| `bundleId`     | (Optional) The bundle ID of the app to run (iOS).                                                                                                                                                                                                                |
| `appPackage`   | (Optional) The app package to run (Android).                                                                                                                                                                                                                     |
| `appActivity`  | (Optional) The app activity to run in the specified `appPackage` (Android).                                                                                                                                                                                      |
| `tunnelName`   | (Optional) The name of the Sauce Connect tunnel to use. See [Test Apps That Connect to Private Environments](#test-apps-that-connect-to-private-environments).                                                                                                   |
| `tunnelOwner`  | (Optional) The Sauce Labs username that started the Sauce Connect tunnel.                                                                                                                                                                                        |

For example, to create a connection that launches the Swag Labs demo app on an iPhone 8 in the `eu-central-1` data center:

```bash
./epgw add sauce-device \
 --name swaglabs-iphone8 \
 --user "$SAUCE_USERNAME" \
 --apiKey "$SAUCE_ACCESS_KEY" \
 --dataCenter eu-central-1 \
 --platformName iOS \
 --deviceName "iPhone 8" \
 --app https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa
```

For all the options, see [epgw add sauce-device](https://docs.eggplantsoftware.com/gateway/cli/epgw-add-sauce-device/) in the Eggplant documentation.

### Create an Emulator or Simulator Connection

To set up a connection to a Sauce Labs Android Emulator or iOS Simulator, run the `epgw add sauce-emulator` command:

```bash
./epgw add sauce-emulator \
 --name <name> \
 --user <user> \
 --apiKey <apiKey> \
 --dataCenter <dataCenter> \
 --platformName <platformName> \
 --platformVersion <platformVersion> \
 --deviceName <deviceName> \
 --app <app>
```

The options are similar to the options for a real device connection, with the addition of `platformVersion` (the platform version of the Emulator or Simulator). To use a Sauce Connect tunnel, use the `tunnelIdentifier` and `parentTunnel` options. For all the options, see [epgw add sauce-emulator](https://docs.eggplantsoftware.com/gateway/cli/epgw-add-sauce-emulator/) in the Eggplant documentation.

## Verify the Integration

1. Start **Eggplant Functional**.
2. Run `epgw connect <name>`, where `<name>` is the name of your connection. For example, `epgw connect chrome`.
3. Check that the browser or device appears in the connection list in Eggplant Functional.

## Use the Integration

After you create a connection, you can run your Eggplant Functional and Eggplant DAI tests on the Sauce Labs browser or device.

### Connect a Browser or Device to Eggplant Functional

To use a Sauce Labs browser or device in Eggplant Functional:

1. Start **Eggplant Functional**.
2. Run `epgw connect <name>`, where `<name>` is the name of your connection. For example, `epgw connect chrome` or `epgw connect swaglabs-iphone8`.

**Result:** The Eggplant Gateway provisions the browser or rents the device in Sauce Labs, and adds it to the connection list in Eggplant Functional.

### Set Up a VNC and WebDriver Server

Alternatively, you can set up a VNC and WebDriver server for your browser or device, and add it to Eggplant Functional manually.

1. Run `epgw vnc <name>`, where `<name>` is the name of your connection. For example, `epgw vnc chrome`.

   The Eggplant Gateway provisions the browser or rents the device in Sauce Labs, and starts:
   - A VNC server at port 5900
   - A WebDriver server at port 5000

2. Manually add your browser or device to the connection list in Eggplant Functional.

To run multiple Eggplant Gateways at the same time, specify a custom VNC port and WebDriver port for each one:

| Option          | Description                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| `vncPort`       | The custom VNC port. The Eggplant Gateway starts a VNC server at the given `vncPort`.                   |
| `webDriverPort` | The custom WebDriver port. The Eggplant Gateway starts a WebDriver server at the given `webDriverPort`. |

For example:

```bash
epgw vnc chrome --vncPort 5901 --webDriverPort 5001
```

### Test Apps That Connect to Private Environments

When you use the Eggplant Gateway, the app under test runs on a Sauce Labs device in one of the Sauce Labs data centers. In some scenarios, the app needs to connect to corporate systems, such as UAT environments, that are not usually exposed over the public internet. In these scenarios, you can use Sauce Connect Proxy to give your app access to the corporate systems. For more information, see [Sauce Connect](/secure-connections/sauce-connect-5/).

To use a Sauce Connect tunnel:

1. Install, configure, and start Sauce Connect Proxy on the same machine as Eggplant Functional.
2. In Sauce Labs, go to the **Tunnels** page and copy the **Tunnel Name** and the tunnel owner (the Sauce Labs username that started the tunnel).
3. Add the tunnel to your connection:
   - **Eggplant Gateway (real devices)**: Add the `--tunnelName` and `--tunnelOwner` options when you run `epgw add sauce-device`.
   - **Built-in Sauce Labs connection**: Enter the values in the **Tunnel Name** and **Tunnel Owner** connection parameters.

:::note
Use the tunnel name, not the tunnel ID. Eggplant Functional does not support Sauce IPSec Proxy.
:::

## Troubleshooting

<details>
<summary>**The Eggplant Gateway cannot connect to Sauce Labs**</summary>

The Eggplant Gateway connects to the Sauce Labs API using HTTPS and Secure WebSockets at port 443. Check that your network allows these connections to the endpoints for your [data center](/basics/data-center-endpoints/), and that your username, access key, and `dataCenter` value are correct.

</details>

<details>
<summary>**A second Eggplant Gateway does not start its VNC or WebDriver server**</summary>

By default, each Eggplant Gateway starts a VNC server at port 5900 and a WebDriver server at port 5000. To run multiple Eggplant Gateways at the same time, specify a custom `--vncPort` and `--webDriverPort` for each one. See [Set Up a VNC and WebDriver Server](#set-up-a-vnc-and-webdriver-server).

</details>

<details>
<summary>**The app on the Sauce Labs device cannot reach your internal environment**</summary>

Sauce Labs devices are not on your corporate network. Use Sauce Connect Proxy to give your app access to systems that are not exposed over the public internet. See [Test Apps That Connect to Private Environments](#test-apps-that-connect-to-private-environments).

If you already use a tunnel, check that you entered the tunnel name (not the tunnel ID) and the tunnel owner, and that the tunnel is running.

</details>

<details>
<summary>**The browser connection closes during a long test**</summary>

The Eggplant Gateway closes browser connections after 3 hours. Split long test runs into shorter runs that each finish in 3 hours or less.

</details>

<details>
<summary>**WebDriver commands fail on a Safari browser connection**</summary>

WebDriver commands are not supported for Sauce Labs Safari browser connections in Eggplant Functional. Use image-based automation for Safari, or run your WebDriver tests on another browser.

</details>

## Next Steps

- [Connecting to Sauce Labs Devices and Browsers](https://docs.eggplantsoftware.com/epf/epf-connecting-to-sauce-labs-devices-and-browsers/) (Eggplant Functional 22.3 or later)
- [Eggplant Gateway for Sauce Labs Browsers](https://docs.eggplantsoftware.com/gateway/sauce-browsers/)
- [Eggplant Gateway for the Sauce Labs Real Device Cloud](https://docs.eggplantsoftware.com/gateway/sauce-device/)
- [Mobile App Storage](/mobile-apps/app-storage/)
- [Sauce Connect](/secure-connections/sauce-connect-5/)
- [Integrations Overview](/basics/integrations-overview/)
