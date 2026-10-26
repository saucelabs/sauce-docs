---
id: uipath
title: UiPath Integration
sidebar_label: UiPath
description: Use UiPath with Sauce Labs to scale your RPA/app testing.
keywords:
- uipath
- rpa
- mobile-testing
- automated-testing
- how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[UiPath Test Suite](https://www.uipath.com/platform/agentic-testing) is a low-code testing product portfolio powered by the UiPath Automation Platform. The Sauce Labs integration with UiPath Test Suite lets you run your mobile tests at scale on thousands of Sauce Labs real devices, with a wide range of operating systems and configurations, with minimal configuration. This page explains how to set up the integration and use it with your Sauce Labs tests.

## How It Works

In UiPath Studio, the [Mobile Device Manager (MDM)](https://docs.uipath.com/activities/other/latest/ui-automation/configuring-mobile-device-manager) connects to mobile devices through an Appium server. For a local device, this is usually a local Appium server, such as `https://localhost:4723/wd/hub`.

To use a Sauce Labs device, you add the device in MDM with the Sauce Labs Appium URL, and match the device name, platform version, and Appium version to the values for the device in Sauce Labs. Your mobile tests in Studio then run on the Sauce Labs device.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- A UiPath Test Suite account (if you don't have one, [sign up](https://www.uipath.com/start-trial) for a free trial).
- A basic understanding of UiPath's [Mobile Device Manager (MDM)](https://docs.uipath.com/activities/other/latest/ui-automation/configuring-mobile-device-manager).
- An automation framework (these instructions assume an Appium test suite) and a mobile testing project in UiPath Studio.

## Set Up the Integration

### Get the Device Values from Sauce Labs

Use the Sauce Labs [Platform Configurator](https://saucelabs.com/products/platform-configurator) to get the values you enter in MDM:

1. In the Platform Configurator, select the operating system and version, and then the device you want to use.
2. Under **Config Script**, select an Appium version and a language.
3. Copy the values from the generated script into MDM, as shown in the following table.

| MDM field                           | Value from Sauce Labs                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Appium URL**                      | The `url` variable in the script, or the string under **Driver Creation** in your Sauce Labs **User Settings**.      |
| **Device Name**                     | The `appium:deviceName` value.                                                                                       |
| **Platform Version**                | The `appium:platformVersion` value.                                                                                  |
| **Additional Desired Capabilities** | A capability named `sauce:options`, with the Appium version as its value. For example, `{"appiumVersion":"latest"}`. |

For more information on selecting an Appium version, see [Appium Versions](/mobile-apps/automated-testing/appium/appium-versions/).

### Add the Device in MDM

To add a Sauce Labs device in MDM:

**Step 1:** Open MDM from Studio.

**Step 2:** In the left navigation panel, go to **Devices**.

**Step 3:** On the **Add a device** tab, configure the following settings:

- **Name**: Enter a name to identify your device.
- **Appium URL**: Enter the Sauce Labs Appium URL. See [Authentication](#authentication).
- **Platform**: Select **Android** or **iOS** from the dropdown list.
- **Device Name**: Enter the `appium:deviceName` value from the Platform Configurator.
- **Platform Version**: Enter the `appium:platformVersion` value from the Platform Configurator.
- **Additional Desired Capabilities** (_Optional_): Add a capability named `sauce:options` with the Appium version you want to use, for example `{"appiumVersion":"latest"}`. You can also add other capabilities to customize your automation session. For more information, see [Appium Desired Capabilities](https://appium.io/docs/en/latest/guides/caps/) and [Test Configuration Options](/dev/test-configuration-options/).
- **Set Geo Location** (_Optional_): Set your device location to test apps that use Location Services to generate location data.

<img src={useBaseUrl('img/integrations/uipath 1.png')} alt="UiPath MDM Add a device form with Sauce Labs device settings" width="700"/>

**Step 4:** (_Optional_) On the **Logging** tab, configure the logging and video recording settings.

**Step 5:** (_Optional_) On the **Development** tab, configure your development settings:

- **Close Similar Tabs** (_Activated by default_): Close tabs running connections with similar devices and applications.
- **Wait for Page Update** (_Activated by default_): Wait for the page source to retrieve a screenshot of each action.

**Step 6:** Click **Save & Close** to add your device.

For more information on adding a cloud device, see [UiPath's documentation](https://docs.uipath.com/activities/other/latest/ui-automation/cloud-devices).

## Authentication

MDM authenticates with Sauce Labs using your Sauce Labs **username** and **access key**, which are part of the Appium URL.

To get the Appium URL, go to [**Account** > **User Settings**](https://app.saucelabs.com/user-settings) in Sauce Labs and copy the string from **Driver Creation**. It looks similar to the following:

```text
https://<username>:<access-key>@ondemand.us-west-1.saucelabs.com:443/wd/hub
```

The host in the URL depends on the [data center](/basics/data-center-endpoints/) of your Sauce Labs account.

Because the Appium URL contains your access key, treat your MDM device configuration as sensitive. Don't share it, and remove your access key from any screenshot or project that you share with others.

## Verify the Integration

1. In MDM, check that your Sauce Labs device appears in the **Devices** list.
2. Connect to the device from Studio. For more information, see [Device Interaction](https://docs.uipath.com/activities/other/latest/ui-automation/device-interaction).
3. Check that the device opens and that the session appears in Sauce Labs.

## Use the Integration

After you add a Sauce Labs device in MDM, you can run your mobile tests on it from Studio.

To run your mobile tests on Sauce Labs:

1. In Studio, open your mobile testing project.
2. Select your Sauce Labs device as the device for your tests.
3. Run your tests.

**Result:** Your tests run on the Sauce Labs device, and the test results appear in Sauce Labs.

To run your tests on other devices, add a device in MDM for each Sauce Labs device you want to use, with the values from the Platform Configurator for each one. See [Get the Device Values from Sauce Labs](#get-the-device-values-from-sauce-labs).

## Troubleshooting

<details>
<summary>**MDM cannot connect to the Sauce Labs device**</summary>

Check that the Appium URL includes your correct Sauce Labs username and access key, and that the host matches the [data center](/basics/data-center-endpoints/) of your Sauce Labs account. Copy the URL again from **Driver Creation** in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings).

</details>

<details>
<summary>**The session does not start on the device you expect**</summary>

Check that the **Device Name** and **Platform Version** in MDM match the `appium:deviceName` and `appium:platformVersion` values from the Platform Configurator. See [Get the Device Values from Sauce Labs](#get-the-device-values-from-sauce-labs).

</details>

<details>
<summary>**The session uses a different Appium version than you expect**</summary>

Check that **Additional Desired Capabilities** has a `sauce:options` capability with the `appiumVersion` you want, for example `{"appiumVersion":"latest"}`. For the available versions, see [Appium Versions](/mobile-apps/automated-testing/appium/appium-versions/).

</details>

<details>
<summary>**Tabs for other devices close when you open a connection**</summary>

**Close Similar Tabs** is activated by default, and closes tabs running connections with similar devices and applications. To keep them open, turn off **Close Similar Tabs** on the **Development** tab in MDM.

</details>

## Next Steps

- [Appium on Sauce Labs](/mobile-apps/automated-testing/appium/)
- [Appium Versions](/mobile-apps/automated-testing/appium/appium-versions/)
- [Platform Configurator](https://saucelabs.com/products/platform-configurator)
- [UiPath cloud devices](https://docs.uipath.com/activities/other/latest/ui-automation/cloud-devices)
- [Integrations Overview](/basics/integrations-overview/)
