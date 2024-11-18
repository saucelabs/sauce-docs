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
This integration enables you to run mobile accessibility tests securely and efficiently using Sauce Labs' private cloud infrastructure.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Familiarity writing and running [Appium tests](/mobile-apps/automated-testing/appium/)
- [A Deque Account](https://axe.deque.com/plans) (axe DevTools® for Mobile Product is required) 


## Appium 2 Version: `appium2-deque-accessibility`

Sauce Labs offers various versions of Appium 2 in our private cloud. One of these is the `appium2-deque-accessibility` version, 
designed to support accessibility testing on mobile apps for both iOS and Android. This version integrates Appium drivers developed by 
the Deque team, enabling seamless integration of accessibility scans into your existing test automation workflows.

You can find more details on Sauce Labs' [Appium versions documentation](/mobile-apps/automated-testing/appium/appium-versions/#appium-2x).

## Key Features of `appium2-deque-accessibility`
- ****Includes Deque Drivers :**** This version incorporates the following accessibility drivers developed by Deque:
    - [axe-appium-xcuitest-driver](https://docs.deque.com/devtools-mobile/2024.9.18/en/appium-setup#configure-your-tests): Automation name is `AxeXCUITEST`
    - [axe-appium-uiautomator2-driver](https://docs.deque.com/devtools-mobile/2024.9.18/en/appium-setup#configure-your-tests): Automation name is `AxeUIAutomator2`
- ****Backward Compatibility with Deprecated Plugin:**** While Deque’s  [axeDevToolsMobile Appium Plugin](https://docs.deque.com/devtools-mobile/2024.2.14/en/june-2024-3) 
has been deprecated, Sauce Labs will continue hosting it until January 31st, allowing users time to migrate to the new drivers.
- ****Powered by Appium :**** This version is built on version [2.12.1](https://github.com/appium/appium/releases/tag/appium%402.12.1) of appium, 
ensuring the latest Appium features and compatibility enhancements.

