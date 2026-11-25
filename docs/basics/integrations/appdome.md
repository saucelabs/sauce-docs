---
id: appdome
title: Appdome Integration
sidebar_label: Appdome
description: Test Appdome-secured Android and iOS apps with Sauce Labs.
keywords:
 - devsecops
 - security
 - automated-testing
 - mobile
 - mobile-native
 - how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[Appdome](https://www.appdome.com/) secures Android and iOS apps without code changes. Appdome works with all leading mobile automation testing solutions to help you achieve comprehensive mobile app security with speed and agility, all in the app's lifecycle. With Sauce Labs, you can test your Appdome-secured apps on real devices as part of your DevSecOps process.

## How It Works

You upload your Appdome-secured Android or iOS app to Sauce Labs and test it on a real device. Before you start a test, you disable **Instrumentation** and **Image Injection** in the app settings, so Sauce Labs runs the app without changing it.

Appdome ONEShield protects your app from running on Emulators and Simulators, and against techniques such as tampering and reverse engineering. Because of this, you test Appdome-secured apps on real devices, and run your automation test tool in manual mode instead of emulator mode. If you want to test using Appium, see [Appium on Sauce Labs](/mobile-apps/automated-testing/appium/).

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up)).
- An [Appdome account](https://fusion.appdome.com/login).
- An Appdome-secured Android or iOS app.

## Set Up the Integration

**Step 1:** From the left navigation in your Sauce Labs account, click **App Management**.

<img src={useBaseUrl('img/integrations/appdome/appdome-2.png')} alt="App Management in the left navigation" width="700"/>

**Step 2:** To upload your Android or iOS app, drag and drop the app file, or click **choose file**. You can upload `.apk`, `.ipa`, `.zip`, and `.aab` files.

<img src={useBaseUrl('img/integrations/appdome/appdome-3.png')} alt="Upload area on the App Management page" width="700"/>

**Step 3:** After the app is uploaded, click the **Settings** (gear) icon for the app.

<img src={useBaseUrl('img/integrations/appdome/appdome-4.png')} alt="Settings icon for each app on the App Management page" width="700"/>

**Step 4:** On the **Settings** tab, under **App Settings for Live Testing**, disable **Instrumentation** and **Image Injection**.

<img src={useBaseUrl('img/integrations/appdome/appdome-5.png')} alt="Instrumentation and Image Injection settings on the Settings tab" width="700"/>

## Authentication

You don't need any additional credentials for this integration. You sign in to your Sauce Labs account to upload and test your app, and you secure your app in your [Appdome account](https://fusion.appdome.com/login) before you upload it.

## Verify the Integration

1. In **App Management**, check that your Appdome-secured app appears in the list of uploaded apps.
2. Click the **Settings** (gear) icon for the app, and check that **Instrumentation** and **Image Injection** are disabled on the **Settings** tab.

## Use the Integration

After you upload your app and update its settings, you can start a manual test on a real device.

**Step 1:** In **App Management**, click the **Start Test** icon for your app.

<img src={useBaseUrl('img/integrations/appdome/appdome-6.png')} alt="Start Test icon for each app on the App Management page" width="700"/>

You can also go to **Live** > **Mobile App** from the left navigation, and then select your app in **App to test**.

<img src={useBaseUrl('img/integrations/appdome/appdome-1.png')} alt="Mobile App under Live in the left navigation" width="700"/>

**Step 2:** The **Mobile App** page lists the devices that are compatible with your app. Find an **Available** device.

<img src={useBaseUrl('img/integrations/appdome/appdome-7.png')} alt="Devices compatible with the app on the Mobile App page" width="700"/>

**Step 3:** Click the **Start Test** icon for the device. This starts a manual test for the uploaded app on the selected device.

<img src={useBaseUrl('img/integrations/appdome/appdome-8.png')} alt="Start Test icon for each device on the Mobile App page" width="700"/>

**Step 4:** When your test is done, click **End Session**.

<img src={useBaseUrl('img/integrations/appdome/appdome-9.png')} alt="End Session button in the live test session" width="700"/>

You can now [view your test results](/test-results/viewing-test-results/#live-test-results) in Sauce Labs.

## Troubleshooting

<details>
<summary>**The app does not run on the device**</summary>

Most automation test tools can be used in one of two modes: emulator mode and manual mode (specific terms may vary according to the testing tool). If you use the automation test tool in **emulator mode**, the Appdome-secured app does not run on the device. The app behaves this way because [Appdome ONEShield](https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/) protects apps from running on Emulators and Simulators. Run the automation test tool in **manual mode** instead.

</details>

<details>
<summary>**The app shows "Application has violated security policies and it will be shut down"**</summary>

This message means that techniques such as Emulators, tampering, or reverse engineering are present, and that the Fusion Set does not contain Appdome Threat-Events. The app behaves this way because [Appdome ONEShield](https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/) protects against those conditions. Remove the triggering condition, or use [Appdome Threat Events](https://www.appdome.com/how-to/threat-events/mobile-threat-events/how-to-implement-appdomes-oneshield-threat-events-2/) if applicable.

</details>

## Next Steps

- [Live Mobile App Testing](/mobile-apps/live-testing/live-mobile-app-testing/)
- [Appium on Sauce Labs](/mobile-apps/automated-testing/appium/)
- [Integrations Overview](/basics/integrations-overview/)
