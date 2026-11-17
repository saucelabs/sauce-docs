---
id: evinced
title: Evinced Integration
sidebar_label: Evinced
description: Test your mobile apps for accessibility challenges with Evinced and the Sauce Labs cloud
keywords:
- accessibility
- accessibility-testing
- automated-testing
- mobile
- mobile-native
- how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Evinced [Mobile Flow Analyzer](https://www.evinced.com/products/flow-analyzer-for-mobile) allows you to connect to a mobile device right from your desktop and scan any native mobile applications for accessibility issues. Actionable reports can be created with a single click to make communicating with developer team members easier than ever. The Sauce Labs integration with Evinced lets you run these scans on Sauce Labs real devices, on nearly [any device and operating system](https://saucelabs.com/platform/platform-configurator#/) combination.

## How It Works

The Evinced rule set goes beyond what the vendor accessibility APIs offer to help you find more issues that could be impacting the accessibility of your application. Evinced uses advanced algorithms to create a single actionable report. Access to the source code isn't required: there is no need to rebuild the app or modify it in any way to test it for accessibility issues.

The integration connects the Mobile Flow Analyzer to a Sauce Labs real device with [Virtual USB](/mobile-apps/features/virtual-usb/) (vUSB). vUSB is a mobile debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable, allowing you to use your choice of homegrown development and testing tools to debug. After the vUSB session starts, the device is available to your workstation just as if it were plugged in directly, and you can select it in the Mobile Flow Analyzer.

Testing on many devices matters for both platforms:

- **Android**: Breadth of coverage is extremely important due to the large segmentation in the Android market (Samsung, Google, LG, HTC, OnePlus, Huawei, etc). All these manufacturers take the default Android OS image from Google and make it their own. This requires additional testing to make sure you give the best experience possible to all users.
- **iOS**: Once a device's OS is upgraded, it is impossible to roll it back to a previous version. Proper testing requires a library of iOS devices on all the supported versions, to ensure a great experience.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings). See [Authentication](#authentication).
- Sauce Labs Private Devices enabled as part of your enterprise plan, which Virtual USB requires. See the [Virtual USB requirements](/mobile-apps/features/virtual-usb/).
- The [Virtual USB client](/mobile-apps/features/virtual-usb/) and its requirements, such as the Java Development Kit (JDK). To test iOS apps, you need macOS or Linux.
- The Evinced Mobile Flow Analyzer desktop client for Mac or Windows. You can [start an Evinced trial](https://www.evinced.com/products/flow-analyzer-for-mobile).
- For iOS devices, your Apple Developer Team ID.

## Set Up the Integration

To set up the integration, start a vUSB session with a Sauce Labs real device, so the device is connected to your workstation. The following steps use a private iOS device.

**Step 1:** [Download the vUSB client](/mobile-apps/features/virtual-usb/#download-client) from Sauce Labs.

**Step 2:** Navigate to the client directory and start the local vUSB server with the following [command](/dev/cli/virtual-usb/):

```bash
java -jar virtual-usb-client.jar server --datacenter US
```

:::tip
Double-check [the data center](/basics/data-center-endpoints/) closest to you for the best performance.
:::

**Step 3:** After the server is running, get the device ID of your private iOS device. This ID is located in the **Details** section when choosing a device.

<img src={useBaseUrl('img/integrations/evinced/evinced-1.webp')} alt="Sauce Labs Device details screen, highlighting the device ID" />

**Step 4:** In a new terminal tab, start the device session with the following command:

```bash
java -jar virtual-usb-client.jar startSession --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY --deviceName iPhone_Device_ID
```

This starts the device session and establishes the virtual USB connection. The device is now available to your workstation just as if it were plugged in directly.

## Authentication

The vUSB client authenticates with your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). The `startSession` command reads them from the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables. See [Set Up the Integration](#set-up-the-integration).

You also log in to the Evinced Mobile Flow Analyzer with your Evinced account, and enter your Apple Developer Team ID when you connect to an iOS device.

## Verify the Integration

1. In the terminal where you ran the `startSession` command, check that the device session started and the virtual USB connection is established.
2. Open the Evinced Mobile Flow Analyzer, select iOS, and check that the Sauce Labs device appears in the device dropdown list.

## Use the Integration

After you connect the device with vUSB, use the Mobile Flow Analyzer to scan your app on the Sauce Labs device.

**Step 1:** Open the Mobile Flow Analyzer desktop client and log in.

**Step 2:** Select iOS, and then choose your device from the device dropdown list.

<img src={useBaseUrl('img/integrations/evinced/evinced-2.webp')} alt="Evinced Flow Analyzer Device selection" />

**Step 3:** Select the Sauce Labs device, enter your Apple Developer Team ID, and click **Connect**.

**Step 4:** Start scanning the app for accessibility issues.

<img src={useBaseUrl('img/integrations/evinced/evinced-3.webp')} alt="Evinced scan and Sauce Labs device open in separate browser windows, but in sync" />

## Troubleshooting

<details>
<summary>**The Sauce Labs device does not appear in the Mobile Flow Analyzer**</summary>

The device appears only while its vUSB session is running. Make sure the vUSB server is running and that the `startSession` command established the virtual USB connection. See [Set Up the Integration](#set-up-the-integration).

</details>

<details>
<summary>**You cannot start a vUSB session**</summary>

Virtual USB requires Sauce Labs Private Devices as part of your enterprise plan. Check that your account has private devices, and that you use the device ID of a private device. See the [Virtual USB requirements](/mobile-apps/features/virtual-usb/).

</details>

<details>
<summary>**You cannot connect to an iOS device from Windows**</summary>

Virtual USB doesn't support iOS devices on Windows. Use macOS or Linux to test iOS apps.

</details>

<details>
<summary>**The connection to the device is slow**</summary>

Start the vUSB server with the [data center](/basics/data-center-endpoints/) closest to you, using the `--datacenter` option.

</details>

## Next Steps

- [Virtual USB](/mobile-apps/features/virtual-usb/)
- [Evinced](https://www.evinced.com/)
- [Evinced Flow Analyzer for Mobile and Sauce Labs](https://www.evinced.com/blog/evinced-flow-analyzer-for-mobile-sauce-labs) (Evinced blog)
- [Integrations Overview](/basics/integrations-overview/)

This page was developed with the generous help of the Evinced team, from [their own documentation](https://www.evinced.com/blog/evinced-flow-analyzer-for-mobile-sauce-labs).
