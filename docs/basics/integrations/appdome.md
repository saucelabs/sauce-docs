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

Learn how to test Appdome-secured Android and iOS apps with Sauce Labs' automation test platform for DevSecOps. Appdome works with all leading mobile automation testing solutions to help you achieve comprehensive mobile app security with speed and agility, all within the app’s lifecycle.

## What You'll Need

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
- An [Appdome account](https://fusion.appdome.com/login)
- An Appdome-secured Android or iOS app

## Testing Appdome-secured iOS and Android Apps

1. From your Sauce Labs account, go to **Live** > **Mobile App**.
2. To upload your Android or iOS app, click **Upload App**.
   <img src={useBaseUrl('img/integrations/appdome/appdome-1.png')} alt="Mobile App page" width="700"/>
3. Once uploaded, hover over the app, then click **Settings**.
   <img src={useBaseUrl('img/integrations/appdome/appdome-2.png')} alt="Mobile App Settings" width="700"/>
4. Disable **Instrumentation** and **Image Injection**, then click **Back to App Selection**.
5. To select a test device, hover over the app and click **Choose Device**.
6. From the Mobile Real tab, hover over a device and click **Start test**. <br/>
   This starts a manual test for the uploaded app on the selected device.
   <img src={useBaseUrl('img/integrations/appdome/appdome-4.png')} alt="Start test" width="700"/>
7. When your test is done, click **End**. <br/>
   You can now view your test results.

If you want to test using Appium, see [Appium on Sauce Labs](/mobile-apps/automated-testing/appium/).

## Troubleshooting Tips

Most automation test tools can typically be used in one of two modes: emulator mode and manual mode (specific terms may vary according to the testing tool). If you use the automation test tool in **emulator mode** instead of **manual mode**, the Appdome-secured application will not run on the device. This is expected because [Appdome ONEShield](https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/) protects apps from running on emulators/simulators. Instead, you should run the automation test tool in manual mode.

If you see a message such as: **Application has violated security policies and it will be shut down**, this means that: (1) techniques such as emulators, tampering, or reverse engineering are present, and (2) the Fusion Set does not contain Appdome Threat-Events. This is expected because [Appdome ONEShield](https://www.appdome.com/how-to/mobile-app-security/no-code-app-shielding/no-code-mobile-app-shielding-resources/) protects against those conditions. You can either remove the triggering condition or use [Appdome Threat Events](https://www.appdome.com/how-to/threat-events/mobile-threat-events/how-to-implement-appdomes-oneshield-threat-events-2/) if applicable.
