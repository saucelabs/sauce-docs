---
id: appium-deque-accessibility-testing
title: Accessibility Testing with Deque axe DevTools® Mobile Drivers
sidebar_label: Appium Deque axe DevTools Accessibility
description: Learn how to run accessibility tests using axe DevTools® Mobile Analyzer drivers hosted in Sauce Labs' private cloud.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceGreen">Real Devices</span></p>

[Deque's axe™](https://www.deque.com/axe/) is a leading digital accessibility toolkit. 
The [axe DevTools® for Mobile SDK](https://docs.deque.com/devtools-mobile/appium) extends this functionality to mobile platforms, 
enabling automated accessibility testing directly in your Appium workflows for both Android and iOS apps. 
This feature supports compliance with accessibility standards such as WCAG and the European Accessibility Act, 
ensuring your apps are inclusive for all users.

With this integration, you can:

+ Detect and address accessibility issues early in the development cycle.
+ Automate mobile accessibility testing using Sauce Labs' secure and scalable cloud infrastructure.
+ Gain actionable insights to improve compliance with global accessibility standards.

The following guide explains how to set up Sauce Labs’ integration with [axe DevTools® for Mobile](https://docs.deque.com/devtools-mobile/appium) 
and leverage its powerful tools to optimize accessibility testing in your mobile apps.




## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Familiarity writing and running [Appium tests](/mobile-apps/automated-testing/appium/)
- [A Deque Account](https://axe.deque.com/plans) (axe DevTools® for Mobile Product is required) 


## Appium Deque Versions: `appium2-deque-accessibility` and `appium3-deque-accessibility`

Sauce Labs offers various versions of Appium in our cloud. to be specific the `appium2-deque-accessibility` and `appium3-deque-accessibility` versions, 
designed to support accessibility testing on mobile apps for both iOS and Android. These versions integrate Appium drivers developed by 
the Deque team, enabling seamless integration of accessibility scans into your existing test automation workflows.

You can find more details on Sauce Labs' [Appium versions documentation](/mobile-apps/automated-testing/appium/appium-versions/#appium-2x).

## Key Features of `appium2-deque-accessibility` and `appium3-deque-accessibility`

- ****Includes Deque Drivers :**** This version incorporates the following accessibility drivers provided by Deque:
    - axe-appium-uiautomator2-driver: Automation name is `AxeUIAutomator2`
    - axe-appium-xcuitest-driver: Automation name is `AxeXCUITEST`
:::info Min iOS Version for `axe-appium-xcuitest-driver`:
- You can use the `axe-appium-xcuitest-driver` only for devices with iOS 16 or above. 
- To ensure compatibility, set the appium:platformVersion capability in your Appium configuration based on the iOS versions 
supported by the axe-appium-xcuitest-driver. Refer to the [Deque documentation](https://docs.deque.com/devtools-mobile/appium-sauce) 
for detailed requirements and supported versions.
:::

## How to Use `appium2-deque-accessibility` OR `appium3-deque-accessibility`

Follow these steps to set up and execute accessibility tests using the `appium2-deque-accessibility` or `appium3-deque-accessibility` images, leveraging Deque's Appium drivers for Android and iOS.

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
    appiumVersion: 'appium2-deque-accessibility', // Or 'appium3-deque-accessibility'
  },
}
```
</TabItem>
<TabItem value="AxeXCUITEST">

<!-- prettier-ignore -->
```js
const capabilities = {
  platformName: 'iOS',
  'appium:platformVersion': '^1(6|7|8).*$', // The iOS driver will work only on devices running iOS 16 and above
  'appium:automationName': 'AxeXCUITEST', // New Automation name goes here
  'appium:app': 'storage:filename=XXXXXXXXXx',
  'appium:appPackage': 'xxxxxxxxxx',
  'appium:autoGrantPermissions': true,
  'appium:autoAcceptAlerts': true,
  'appium:newCommandTimeout': 90,
  'sauce:options': {
    name: "iOS Driver - Testing appium2-deque-accessibility",
    resigningEnabled: true,
    appiumVersion: 'appium3-deque-accessibility', // Or 'appium2-deque-accessibility'
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

<Tabs
groupId="appium-deque-2-example"
defaultValue="TestingScript"
values={[
{label: 'Testing Script', value: 'TestingScript'},
]}>

<TabItem value="TestingScript">

```js
describe("Test appium-deque-accessibility - Using Drivers Android/iOS", () => {
    it('test appium-deque-accessibility', async () => {
        const apiKey = process.env.DEQUE_API_KEY;
        const settings = { apiKey: apiKey }

        await driver.execute('mobile: axeScan', settings);
    });
});
```
</TabItem>

</Tabs>

## Additional Notes

- Ensure your Appium server is correctly set up to use the `appium2-deque-accessibility` or `appium3-deque-accessibility` versions. 
- Validate that your app and environment meet the OS version requirements for the selected Deque drivers. 
- For iOS, remember that the AxeXCUITEST driver only works on devices running iOS 16 or above.
- The axeDevToolsMobile plugin will remain available in the Sauce Labs cloud until January 31st 2025.
- Use the Deque [documentation](https://docs.deque.com/devtools-mobile/appium-setup) for further driver-specific details.