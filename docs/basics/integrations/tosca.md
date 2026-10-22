---
id: tosca
title: Tosca Integration
sidebar_label: Tosca
description: Scan your mobile app and run Tricentis Tosca tests in parallel on Sauce Labs real and virtual devices.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Tricentis Tosca is a model-based test automation tool for web, mobile, and client-server applications. The Sauce Labs integration with Tosca lets you scan your mobile app and run your Tosca tests in parallel on Sauce Labs real and virtual devices, so you can scale your test execution. This page explains how to set up the integration and use it with your Sauce Labs tests.

## How It Works

Tosca scans your app to gather data about its pages and elements. From the model that Tosca creates, you put together sequences of actions to script the steps your test runs.

Tosca connects to Sauce Labs through the Sauce Labs Appium server, using your Sauce Labs credentials. You upload your app to Sauce Labs [App Storage](/mobile-apps/app-storage/), and Tosca opens it on the Sauce Labs device you choose, both when you scan the app and when you run your tests. To find the values for the platforms you want to run on, see the [Platform Configurator](https://saucelabs.com/products/platform-configurator).

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- Tricentis Tosca, with **Tosca Commander** installed.
- Your mobile app file (`.ipa`, `.aab`, or `.apk`).

## Set Up the Integration

### Upload Your App to Sauce Labs

Upload your app file to Sauce Labs App Storage. For details, see [Mobile App Storage](/mobile-apps/app-storage/).

After the upload, note the filename or the file ID (`file_id`) of your app. You use it to point Tosca to your app in the following format:

```text
storage:filename=<file-name>
```

or:

```text
storage:<file_id>
```

### Connect Tosca to Sauce Labs and Scan Your App

**Step 1:** In **Tosca Commander**, on the **Modules** tab, click **Scan**, and then click **Mobile**.

<img src={useBaseUrl('img/integrations/tosca-modules.png')} alt="Tosca Commander Modules tab" width="600"/>

**Step 2:** In the **Add connection** box, enter a name for your connection, select **SauceLabs** as the **Type**, and enter the Sauce Labs Appium server address and your Sauce Labs credentials. See [Authentication](#authentication).

<img src={useBaseUrl('img/integrations/tosca-add-connection.png')} alt="Tosca Commander Add connection box" width="400"/>

:::note
The connection types depend on your Tosca version. In newer versions of Tosca with Mobile Engine 3.0, connect to Sauce Labs with the **Cloud (Appium)** connection type, which connects to any Appium-based cloud service. For more information, see [Mobile Engine 3.0](https://docs.tricentis.com/tosca-2026.1/en-us/content/engines_3.0/mobile/tbox_mobileweb.htm) in the Tricentis documentation.
:::

**Step 3:** In the **Add device** box, enter the information for the Sauce Labs device you want to use.

<img src={useBaseUrl('img/integrations/tosca-add-device.png')} alt="Tosca Commander Add device box" width="400"/>

**Step 4:** In the **Edit native/hybrid application** box, enter the App Storage path of your app (for example, `storage:filename=<file-name>`), and then click **Save**.

<img src={useBaseUrl('img/integrations/tosca-edit-native-hybrid-app.png')} alt="Tosca Edit native/hybrid application box" width="400"/>

**Step 5:** In the **Establishing connection...** box, click **Scan**.

<img src={useBaseUrl('img/integrations/tosca-est-connection.png')} alt="Tosca Establishing connection box" width="400"/>

:::note
The scan can take a considerable amount of time, due to the large volume of data that flows between Tosca and the Sauce Labs cloud. Running the scan locally (on an Emulator) can speed up the process, and is the recommended practice.
:::

## Authentication

Tosca authenticates with Sauce Labs using your Sauce Labs **username** and **access key**. You can find both in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings).

You enter your credentials in two places:

- **Scanning**: In the **Add connection** box, enter your username in **Login** and your access key in **Access Key**, along with the Appium server address for your [data center](/basics/data-center-endpoints/) (for example, `https://ondemand.us-west-1.saucelabs.com:443/wd/hub`).
- **Running tests**: In the test configuration, enter your username in `SauceUsername` and your access key in `SauceAccessKey`. See [Use the Integration](#use-the-integration).

Your access key gives full access to your Sauce Labs account. Don't share it, and remove it from any Tosca workspace or screenshot that you share with others.

## Verify the Integration

1. Scan your app as described in [Connect Tosca to Sauce Labs and Scan Your App](#connect-tosca-to-sauce-labs-and-scan-your-app).
2. Check that Tosca connects to the Sauce Labs device and the scan of your app starts.

## Use the Integration

After you create some basic tests from the scanned modules, you can run them on Sauce Labs devices. To run multiple tests in parallel on Sauce Labs devices, fill in the test configuration fields as follows.

To run your tests on Sauce Labs:

1. In **Tosca Commander**, on the **Execution** tab, enter your Sauce Labs credentials in the test configuration.

   <img src={useBaseUrl('img/integrations/tosca-execution-tab.png')} alt="Tosca Commander Execution tab" width="600"/>

2. On the **TestCases** tab, under **Open Mobile App**, enter the App Storage path of your app (for example, `storage:filename=<file-name>`) in the **Application** field.

   <img src={useBaseUrl('img/integrations/tosca-test-cases-tab.png')} alt="Tosca Commander TestCases tab" width="600"/>

3. Add the test configuration for the type of device you want to use, and run your tests. See [Real Devices](#real-devices) and [Virtual Devices](#virtual-devices).

**Result:** Tosca runs your tests on the Sauce Labs devices in your test configuration.

### Test Configuration

| Option           | Description                                                                                  | Example                                               |
| ---------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `AppiumServer`   | The Sauce Labs Appium server address for your [data center](/basics/data-center-endpoints/). | `https://ondemand.us-west-1.saucelabs.com:443/wd/hub` |
| `Application`    | The App Storage path of your app. Use it to test a native or hybrid app.                     | `storage:filename=<file-name>`                        |
| `Browser`        | The browser to use.                                                                          | `ChromeAndroid`                                       |
| `DeviceName`     | The name of the Sauce Labs device.                                                           | `Samsung_Galaxy_A21_real_us`                          |
| `IsSimulator`    | Set to `False` for a real device, or `True` for a virtual device (Emulator or Simulator).    | `False`                                               |
| `OSVersion`      | The operating system version of the device.                                                  | `10.0`                                                |
| `SauceUsername`  | Your Sauce Labs username.                                                                    | `<username>`                                          |
| `SauceAccessKey` | Your Sauce Labs access key.                                                                  | `<access-key>`                                        |

#### Real Devices

To run a test on a real device, set `IsSimulator` to `False` and enter the name of a Sauce Labs real device in `DeviceName`.

<img src={useBaseUrl('img/integrations/tosca-execute-real-device.png')} alt="Tosca real device configuration" width="600"/>

#### Virtual Devices

To run a test on a virtual device, set `IsSimulator` to `True` and enter the name of a Sauce Labs Emulator or Simulator in `DeviceName`.

<img src={useBaseUrl('img/integrations/tosca-execution-virtual-device.png')} alt="Tosca virtual device configuration" width="600"/>

## Troubleshooting

<details>
<summary>**The scan takes a long time**</summary>

A scan sends a large volume of data between Tosca and the Sauce Labs cloud. Run the scan locally on an Emulator instead, which is the recommended practice.

</details>

<details>
<summary>**Tosca cannot find your app**</summary>

Check that your app is uploaded to Sauce Labs [App Storage](/mobile-apps/app-storage/), and that you entered its path in the `storage:filename=<file-name>` or `storage:<file_id>` format.

</details>

<details>
<summary>**Tosca cannot connect to Sauce Labs**</summary>

Check that your username and access key are correct, and that the Appium server address matches the [data center](/basics/data-center-endpoints/) of your Sauce Labs account.

</details>

## Next Steps

- [Mobile App Storage](/mobile-apps/app-storage/)
- [Platform Configurator](https://saucelabs.com/products/platform-configurator)
- [Data Center Endpoints](/basics/data-center-endpoints/)
- [Integrations Overview](/basics/integrations-overview/)
