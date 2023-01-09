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

Learn how to test Appdome-secured Android and iOS Apps Using SauceLabs automation test platform for DevSecOps. Appdome works with all leading mobile automation testing solutions to help you achieve comprehensive mobile app security at DevSecOps speed and agility, all within the app’s existing application lifecycle.

## How to Test Appdome-secured Android Apps using SauceLabs

* First, build the Android app with Appdome security
* Once finished, go to [https://app.saucelabs.com](https://app.saucelabs.com/) and sign in.

## Testing the secured Android App Using SauceLabs

1. On the left sidebar select **LIVE** > **Mobile App**

:::note
If you see an option to choose between devices on a **Virtual Cloud** and **Real Devices**, select **Real Devices**.
:::

<img src={useBaseUrl('img/integrations/appdome/appdome-1.png')} alt="Mobile App page"/>

2. A list of your apps will be displayed. If you haven’t uploaded an app before, then the list will be empty. If your test app does not appear in the above list, you can upload it by clicking **Upload App**.

3. After you uploaded your test app, hover over the app, and then click the **Settings** option. 

<img src={useBaseUrl('img/integrations/appdome/appdome-2.png')} alt="Mobile App Settings"/>

4. Disable **Instrumentation** and **Image Injection**. Then click **Back to App Selection**.
5. Hover over the app and click **Choose Device** to select the test device.
6. Click **Start test** for the selected device. This starts a manual test on the uploaded app on the selected device.

<img src={useBaseUrl('img/integrations/appdome/appdome-4.png')} alt="Start test"/>

7. Click **Developer options** on the menu on the right to view live device logs.

<img src={useBaseUrl('img/integrations/appdome/appdome-5.png')} alt="Device logs"/>

8. When done, click **End** on the right menu.

If you want to test using Appium, see [Appium on Sauce Labs](/mobile-apps/automated-testing/appium/).

## Testing Appdome-secured iOS Apps using SauceLabs

1. Go to [https://saucelabs.com](https://saucelabs.com/) and sign in.

2. On the left sidebar select **LIVE** > **Mobile App**

:::note
If you see an option to choose between devices on a **Virtual Cloud** and **Real Devices**, select **Real Devices**.
:::

<img src={useBaseUrl('img/integrations/appdome/appdome-1.png')} alt="Mobile App page"/>

3. A list of your apps will be displayed. If you haven’t uploaded an app before then the list will be empty. If your test app does not appear in the above list, you can upload it by pressing **Upload App** button.
4.  After you uploaded your test app, hover over the app, and then click the **Settings** option.

<img src={useBaseUrl('img/integrations/appdome/appdome-2.png')} alt="Mobile App Settings"/>

5. Disable **Instrumentation** and **Image Injection**. Then click **Back to App Selection**.
6. Hover over the app and click **Choose Device** to select the test device.
7. Click **Start test**. This will start a manual test of the uploaded app on the selected device.

<img src={useBaseUrl('img/integrations/appdome/appdome-9.png')} alt="Start test"/>

8. Click **Developer options** on the menu on the right to view live device logs.

<img src={useBaseUrl('img/integrations/appdome/appdome-10.png')} alt="Device logs"/>

9. When done, click **End** on the right menu.

## Troubleshooting Tips

Most automation test tools can typically be used in one of two modes: emulator mode and manual mode (specific terms may vary according to the testing tool). If you use the automation test tool in **emulator mode** instead of **manual mode**, the Appdome-secured application will not run on the device. This is expected because [Appdome ONEShield](https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/) protects apps from running on emulators/simulators. Instead, you should run the automation test tool in manual mode.

If you see a message such as: **Application has violated security policies and it will be shut down**, this means that (1) techniques such as emulators, tampering, or reverse engineering are present, and (2) the Fusion Set does not contain Appdome Threat-Events. This is expected because [Appdome ONEShield](https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/) protects against those conditions. You can either remove the triggering condition or use [Appdome Threat Events](https://www.appdome.com/how-to/threat-events/mobile-threat-events/how-to-implement-appdomes-oneshield-threat-events-2/) if applicable.