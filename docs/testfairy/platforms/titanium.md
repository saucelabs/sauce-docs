---
id: titanium
title: Titanium
sidebar_label: Titanium
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The TiTestFairy Module extends the Appcelerator Titanium Mobile framework with the TestFairy Android and iOS SDKs. By integrating TestFairy, you gain valuable insights into how your app performs on real devices, understand user behavior, and collect metrics to optimize your user experience and code.

## Installation

To integrate TestFairy into your Titanium Mobile project, follow these steps:

1. Add the following lines to your `tiapp.xml` file:

   ```xml
   <modules>
       <module platform="iphone">com.testfairy.titestfairy</module>
   </modules>
   ```

1. Download the [latest release.](https://github.com/testfairy/ti.testfairy/releases/latest/)

   - Be sure to either download either the Android (com.testfairy.titestfairy-android-2.1.3.zip) or the iOS (com.testfairy.titestfairy-iphone-2.1.3.zip) depending on the platform you're targeting.

1. Add the module to your Titanium Mobiles

   - “Help” -> "Install Mobile Module..."
   - or by unzipping the contents of the module zip file into your `Titanium/modules/iphone` or `Titanium/modules/android` folders.

1. Include the module in your code and use it:

   ```javascript
       const TiTestFairy = require('com.testfairy.titestfairy');

       TiTestFairy.begin("<APP TOKEN>");
   ```

   :::note
   Replace 'APP TOKEN' with your token, which can be found in the [user preferences page](https://app.testfairy.com/settings/#app-token).
   :::

For more detailed code examples take a look at our [example app](https://github.com/testfairy/ti.testfairy/blob/feat-readme/example/app.js).

## Identifying Your Users

To learn how to identify users and set session attributes using the TestFairy SDK in Titanium, refer to the [identifying users section](/testfairy/sdk/identifying-users/) in the SDK Documentation.

## Session Attributes

For information on how to set session attributes using the TestFairy Titanium SDK, please refer to the [SDK Documentation on session attributes](/testfairy/sdk/session-attributes/).

## Remote Logging

To understand how to perform remote logging with the TestFairy SDK in Titanium, refer to the [remote logging section](/testfairy/sdk/remote-logging/) in the SDK Documentation.

## Reference

The TestFairy Titanium module exposes the following methods:

`TiTestFairy.version;` - Returns the version of the TestFairy SDK.

`TiTestFairy.setCorrelationId(correlationId)` - Sets an identifier that can be looked up through dashboard.

`TiTestFairy.pushFeedbackController()` - Present a feedback dialog to the user.

`TiTestFairy.sendUserFeedback(string)` - Send a feedback on behalf of the user. Call when using a in-house feedback view controller with a custom design and feel. Feedback will be associated with the current session.

`TiTestFairy.updateLocation(locations)` - Mark geo location at this point (to be used with `navigator.geolocation.getCurrentPosition`).

`TiTestFairy.checkpoint(checkpointName)` - Mark a checkpoint in session.

`TiTestFairy.pause()` - Pauses the current session until resume() is called.

`TiTestFairy.resume()` - Resumes a paused session.

`TiTestFairy.sessionUrl()` - Returns the address of the recorded session on TestFairy's developer portal. Will return nil if recording has not started yet.

`TiTestFairy.takeScreenshot()` - Takes a screenshot.
