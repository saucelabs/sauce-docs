---
id: appium-deque-drivers
title: Deque axe DevTools® Mobile Analyzer Accessibility Drivers
sidebar_label: Appium Deque axe DevTools Integration
description: Learn how to run accessibility tests using axe DevTools® Mobile Analyzer drivers hosted in Sauce Labs' private cloud.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceGreen">Real Devices</span></p>

[Deque's axe™](https://www.deque.com/axe/) is a leading digital accessibility toolkit. 
The [axe DevTools® for Mobile SDK](https://docs.deque.com/devtools-mobile/appium) extends this functionality to mobile platforms, 
allowing you to integrate automated accessibility testing directly into your Appium workflows. 
With this SDK, you can scan mobile app content, identify accessibility issues, and improve compliance with accessibility standards.

The following guide explains how to set up the Sauce Labs integration with [axe DevTools® for Mobile](https://docs.deque.com/devtools-mobile/appium). 
This integration enables you to run mobile accessibility tests securely and efficiently using Sauce Labs' cloud infrastructure.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Familiarity writing and running [Appium tests](/mobile-apps/automated-testing/appium/)
- [A Deque Account](https://axe.deque.com/plans) (axe DevTools® for Mobile Product is required) 


## Appium 2 Version: `appium2-deque-accessibility`

Sauce Labs offers various versions of Appium 2 in our cloud. One of these is the `appium2-deque-accessibility` version, 
designed to support accessibility testing on mobile apps for both iOS and Android. This version integrates Appium drivers developed by 
the Deque team, enabling seamless integration of accessibility scans into your existing test automation workflows.

You can find more details on Sauce Labs' [Appium versions documentation](/mobile-apps/automated-testing/appium/appium-versions/#appium-2x).

## Key Features of `appium2-deque-accessibility`

- ****Includes Deque Drivers :**** This version incorporates the following accessibility drivers developed by Deque:
    - [axe-appium-uiautomator2-driver](https://docs.deque.com/devtools-mobile/2024.9.18/en/appium-setup#configure-your-tests): Automation name is `AxeUIAutomator2`
    - [axe-appium-xcuitest-driver](https://docs.deque.com/devtools-mobile/2024.9.18/en/appium-setup#configure-your-tests): Automation name is `AxeXCUITEST`
:::info Min iOS Version for `axe-appium-xcuitest-driver`:
- You can use the `axe-appium-xcuitest-driver` only for devices with iOS 17 or above.
  :::
- ****Backward Compatibility with Deprecated Plugin:**** While Deque’s  [axeDevToolsMobile Appium Plugin](https://docs.deque.com/devtools-mobile/2024.2.14/en/june-2024-3) 
has been deprecated, Sauce Labs will continue hosting it until January 31st 2025, allowing users time to migrate to the new drivers.
- ****Powered by Appium :**** This version is built on version [2.12.1](https://github.com/appium/appium/releases/tag/appium%402.12.1) of appium, 
ensuring the latest Appium features and compatibility enhancements.

## How to Use `appium2-deque-accessibility`

Follow these steps to set up and execute accessibility tests using the `appium2-deque-accessibility` image, leveraging Deque's Appium drivers for Android and iOS.

1. Set Up Your Appium Capabilities

<Tabs
groupId="appium2-deque-accessibility"
defaultValue="AxeUIAutomator2"
values={[
{label: 'AxeUIAutomator2', value: 'AxeUIAutomator2'},
{label: 'AxeXCUITEST', value: 'AxeXCUITEST'},
]}>

<TabItem value="AxeUIAutomator2">

<!-- prettier-ignore -->
```js
const capabilities = {
  platformName: 'Android',
  'appium:platformVersion': '1[0-9]',
  'appium:automationName': 'AxeUIAutomator2', // New Automation name goes here
  'appium:app': 'storage:filename=XXXXXXXXXx',
  'appium:appPackage': 'xxxxxxxxxx',
  'appium:autoGrantPermissions': true,
  'appium:autoAcceptAlerts': true,
  'appium:newCommandTimeout': 90,
  'sauce:options': {
    name: "Android Driver - Testing appium2-deque-accessibility",
    appiumVersion: 'appium2-deque-accessibility',
  },
}
```
</TabItem>
<TabItem value="AxeXCUITEST">

<!-- prettier-ignore -->
```js
const capabilities = {
  platformName: 'iOS',
  'appium:platformVersion': '^1(7|8).*$', // The ios Drvier will work only on ios 17 devices and above
  'appium:automationName': 'AxeXCUITEST', // New Automation name goes here
  'appium:app': 'storage:filename=XXXXXXXXXx',
  'appium:appPackage': 'xxxxxxxxxx',
  'appium:autoGrantPermissions': true,
  'appium:autoAcceptAlerts': true,
  'appium:newCommandTimeout': 90,
  'sauce:options': {
    name: "iOS Driver - Testing appium2-deque-accessibility",
    resigningEnabled: true,
    appiumVersion: 'appium2-deque-accessibility',
  },
}
```
</TabItem>

</Tabs>

2. Obtain Your Deque API Key
Log in to your [axe Deque account setting page](https://axe.deque.com/settings) and retrieve your API key. 
This key is required to authenticate and initiate accessibility scans during your tests.

3. Prepare Your Testing Script
Once you have your API key, include it in your test script to perform a scan using the `mobile: axeScan` command. Below is an example script:

```js
describe("Test appium2-deque-accessibility - Using Drivers Android/iOS", () => {
    it('test appium2-deque-accessibility', async () => {
        const apiKey = process.env.DEQUE_API_KEY;
        const settings = { apiKey: apiKey }

        await driver.execute('mobile: axeScan', settings);
    });
});
```
## Migrating from the Deprecated `axeDevToolsMobile` Plugin to Deque Drivers

Deque's axeDevToolsMobile Appium Plugin is deprecated and will no longer be supported after January 31st 2025. Moving forward, 
the following drivers should be used to ensure compatibility and continued support for accessibility testing:

- Android: [axe-appium-uiautomator2-driver](https://docs.deque.com/devtools-mobile/2024.9.18/en/appium-setup#configure-your-tests): Automation name is `AxeUIAutomator2`
- iOS : [axe-appium-xcuitest-driver](https://docs.deque.com/devtools-mobile/2024.9.18/en/appium-setup#configure-your-tests): Automation name is `AxeXCUITEST`

### Why Migrate?
- Continued Support: The plugin will no longer receive updates, fixes, or enhancements.
- Expanded Capabilities: The drivers offer better integration and updated functionalities for Android and iOS platforms.
- Compliance with Modern Requirements: For iOS, the new driver supports devices running iOS 17 and above.

### Migration Steps
1. ****Update Your Appium Capabilities****

Replace the old plugin reference with the appropriate new driver. Choose the correct automationName based on your platform:

Use `AxeUIAutomator2` for Android.
Use `AxeXCUITEST` for iOS.

Additionally, specify the appiumVersion as `appium2-deque-accessibility`.

```js
const capabilities = {
  ...,
  'appium:automationName': 'AxeUIAutomator2', // For Android; use 'AxeXCUITEST' for iOS
  ...,
  'sauce:options': {
    ...,
    appiumVersion: 'appium2-deque-accessibility',
  },
};
```
2. ****Update Your Testing Scripts****
The `axe:Scan` command used with the ****deprecated**** plugin should now be replaced with the new `mobile: axeScan` command. 

This command works with the new drivers and requires the same API key setup.
```js
await driver.execute('mobile: axeScan', scanSettings);
```

## Additional Notes

- Ensure your Appium server is correctly set up to use the `appium2-deque-accessibility` version. 
- Validate that your app and environment meet the OS version requirements for the selected Deque drivers. 
- For iOS, remember that the AxeXCUITEST driver only works on devices running iOS 17 or later.
- The axeDevToolsMobile plugin will remain available in the Sauce Labs private cloud until January 31st.
- Use the Deque [documentation](https://docs.deque.com/devtools-mobile/2024.2.14/en/appium-setup) for further driver-specific details.