---
id: appdome
title: Appdome Integration
sidebar_label: Appdome
description: Learn how to test Appdome-secured Android & iOS Apps Using SauceLabs automation test platform for DevSecOps.
keywords:
- devsecops
- security
- automated-testing
- mobile
- mobile-native
- how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Testing Secured Android & iOS Apps Using Appdome

Learn how to test Appdome-secured Android & iOS Apps Using SauceLabs automation test platform for DevSecOps. Appdome works with all leading mobile automation testing solutions to help customers achieve comprehensive mobile app security at DevSecOps speed and agility, all within the app’s existing application lifecycle.

## How to Test Appdome-secured Android Apps using SauceLabs

* First, build the Android app with Appdome security
* Once finished, go to [https://app.saucelabs.com](https://app.saucelabs.com/) and sign in.

## Testing the secured Android App Using SauceLabs

* On the left sidebar select **LIVE** -> **Mobile App**

:::note
If you see an option to choose between devices on a **Virtual Cloud** and **Real Devices**, select **Real Devices**.
:::

<img src={useBaseUrl('img/integrations/appdome/appdome-1.png')} alt=""/>

* A list of your apps will be displayed. If you haven’t uploaded an app before then the list will be empty. 
If your test app does not appear in the above list, you can upload it by clicking **App Upload**.

* After you uploaded your test app, hover your mouse/cursor over the app to display the **Settings** option. Click on Settings.

<img src={useBaseUrl('img/integrations/appdome/appdome-2.png')} alt=""/>

* Disable **Instrumentation** and **Image Injection**. Then click **Back to App Selection**.

<img src={useBaseUrl('img/integrations/appdome/appdome-3.png')} alt=""/>

* Hover your mouse/cursor over the app.  It will show the **Choose Device** option. Click it in order to select the test device.
* Select a test device from the displayed list and click **Launch**. This will start a manual test on the uploaded app on the selected device.

<img src={useBaseUrl('img/integrations/appdome/appdome-4.png')} alt=""/>

You can see live device logs by clicking the **LOG** button on the menu on the right

<img src={useBaseUrl('img/integrations/appdome/appdome-5.png')} alt=""/>

When Done click **STOP** on the right menu

If you want to test using Appium, see [Appium on Sauce Labs](/mobile-apps/automated-testing/appium/).

## Testing Appdome-secured iOS Apps using SauceLabs

* Go to [https://saucelabs.com](https://saucelabs.com/) and sign in.

* On the left sidebar select **LIVE** -> **Mobile App**

:::note
If you see an option to choose between devices on a **Virtual Cloud** and **Real Devices**, select **Real Devices**.
:::

<img src={useBaseUrl('img/integrations/appdome/appdome-6.png')} alt=""/>

* A list of your apps will be displayed. If you haven’t uploaded an app before then the list will be empty.

* If your test app does not appear in the above list, you can upload it by pressing **App Upload** button.

* After you uploaded your test app, hover over the app to display the  **Settings** option. Click **Settings**.

<img src={useBaseUrl('img/integrations/appdome/appdome-7.png')} alt=""/>

* Disable **Instrumentation** and **Image Injection**. Then click **Back to App Selection**.

<img src={useBaseUrl('img/integrations/appdome/appdome-8.png')} alt=""/>

* Hover your mouse/cursor over the app. It will show the **Choose Device** option. Select the test device.

* Select an available test device from the displayed list and click **Launch**. This will start a manual test of the uploaded app on the selected device.

<img src={useBaseUrl('img/integrations/appdome/appdome-9.png')} alt=""/>

* You can see live device logs by pressing **LOG** button on the menu on the right.

<img src={useBaseUrl('img/integrations/appdome/appdome-10.png')} alt=""/>

* When Done click **STOP** on the right menu.

## Troubleshooting Tips

Most automation test tools can typically be used in one of two modes: emulator mode and manual mode (specific terms may vary according to the testing tool). If you use the automation test tool in **emulator mode** instead of **manual mode**, the Appdome-secured application will not run on the device. This is expected because [Appdome ONEShield](https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/) protects apps from running on emulators/simulators. Instead, you should run the automation test tool in manual mode.

If you see a message such as: **Application has violated security policies and it will be shut down**, this means that (1) techniques such as emulators, tampering, or reverse engineering are present, and (2) the Fusion Set does not contain Appdome Threat-Events. This is expected because [Appdome ONEShield](https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/) protects against those conditions. You can either remove the triggering condition or use [Appdome Threat Events](https://www.appdome.com/how-to/threat-events/mobile-threat-events/how-to-implement-appdomes-oneshield-threat-events-2/) if applicable.