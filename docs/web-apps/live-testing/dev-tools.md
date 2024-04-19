---
id: dev-tools
title: DevTools
sidebar_label: DevTools
description: Leverage the power of Chrome DevTools and Safari Web Inspector to test your mobile iOS and Android web apps and websites in real-time with our Real Devices cloud.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Leverage the power of [Chrome DevTools](https://developer.chrome.com/docs/devtools/) and Safari [Web Inspector](https://developer.apple.com/safari/tools/#current) to test your mobile iOS and Android web apps and websites in real time with our Real Devices cloud.

You can use Dev Tools to:

- Debug and diagnose CSS and JavaScript issues quickly.
- View and edit DOM elements.
- Analyze network requests, responses, and timings to optimize your network.
- Identify performance issues to improve load times and responsiveness.
- Native or Hybrid applications

<img src={useBaseUrl('img/live-web-apps/new-toolbar/dev-tools-elements.png')} alt="Shows the Dev Tools tab used to inspect elements in the Developer Options for a live mobile test." width="800"/>

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Web or hybrid application under test. 
- A Google Chrome or Microsoft Edge browser (for Windows or macOS).
- An iOS or Android Real Device with version:
  - iOS/iPadOS 13 and above
  - Android 9 and above

## Cross Browser Testing with Development Tools

To enable DevTools for iOS and Android during cross-browser testing:

1. In Sauce Labs, go to **Live** > **Cross Browser** or **Mobile App**. 
2. In the **URL** field, enter the web application's url, or select the native/hybrid application you want to test. 
3. Launch a test on a Real Device (iOS 13+, Android 9+).
4. After your session starts, select **Developer Options** from the toolbar on the right of the screen.
5. Select the new **Dev Tools** tab.

:::note 
With DevTools against Hybrid applications, we're initiating DevTools and searching for a Webview/Webkit in your application context. This may take a few moments. 
Please ensure that the page you're inspecting contains a Webview/Webkit and that it's currently rendered on screen.

:::

<img src={useBaseUrl('img/live-web-apps/new-toolbar/dev-tools-sources.png')} alt="Shows the Dev Tools tab used to inspect sources in the Developer Options for a live mobile test." width="800"/>

You can now interact with the DevTool/WebInspector components.
