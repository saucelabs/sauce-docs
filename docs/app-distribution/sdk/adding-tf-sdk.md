---
id: adding-tf-sdk
title: Adding the Sauce Mobile Beta SDK to Your App
sidebar_label: Adding the Sauce Mobile Beta SDK
description: Add the Sauce Mobile Beta SDK to your Android, iOS, or React Native app to record tester sessions, collect in-app feedback, and send remote logs to Mobile App Distribution.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

:::info Beta release
The Sauce Mobile Beta SDK is in beta. The current release candidates are 2.2.0-rc for iOS and Android and 3.0.0-rc for React Native.

- Final: the artifact names and the API.
- Can still change before general availability: the version numbers, the iOS package URL, and this documentation.

Share feedback with your Sauce Labs representative.
:::

The Sauce Mobile Beta SDK helps you understand how testers use your app. It records tester sessions, collects in-app feedback and remote logs, and ties every session to a user and a set of attributes, so you can find and inspect sessions on the Sauce Labs Mobile App Distribution dashboard.

SDK features include:

- Recording sessions, including video of how testers interact with your app.
- Collecting in-app feedback from testers. See [User Feedback](/app-distribution/sdk/user-feedback).
- Sending logs to the Sauce Labs Mobile App Distribution dashboard for later inspection. See [Remote Logging](/app-distribution/sdk/remote-logging).
- Identifying users so you can find their sessions. See [Identifying Your Users](/app-distribution/sdk/identifying-users).
- Tagging sessions with attributes for searching and custom reports. See [Session Attributes](/app-distribution/sdk/session-attributes).
- Prompting testers to install a newer build that you mark for auto update. See [App Updates](/app-distribution/sdk/app-updates).

The runtime API is the same on every platform. Import the `TestFairy` module on iOS, `com.testfairy.TestFairy` on Android, and the `TestFairy` default export in React Native.

## Sauce Mobile Beta and Backtrace

The SDK and Backtrace (Sauce Labs Error Reporting) cover two different parts of a tester's experience. The SDK records what happened during a session: the video, the logs, the feedback, and the attributes you set. Backtrace reports what went wrong when the app crashes: the stack trace, the device state, and the symbolicated frames. The SDK does not install a crash handler. Crash reporting is provided by Backtrace, and the two SDKs are designed to run in the same app.

Start the SDK with `beginWithoutCrashHandler`. It starts a session and never installs a crash handler, and it forces the `enableCrashReporter` option (`TFSDKEnableCrashReporterKey` on iOS) to `false` even if you pass `true`. `begin` also starts a session without a crash handler.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'React Native', value: 'react'},
]}>

<TabItem value="android">

```java
import com.testfairy.TestFairy;

TestFairy.beginWithoutCrashHandler(getApplicationContext(), "<sauce-mobile-beta-token>");
```

</TabItem>

<TabItem value="ios">

```swift
import TestFairy

TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")
```

</TabItem>

<TabItem value="react">

```js
import TestFairy from '@saucelabs/mobile-beta-react-native';

TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>');
```

</TabItem>

</Tabs>

Where to go next:

- To set up crash reporting, see [Getting Started with Backtrace](/error-reporting/getting-started/).
- To run both SDKs in one app, initialize Backtrace first, then start the SDK with `beginWithoutCrashHandler`, and give both SDKs the same `sauce.correlation_id` attribute so you can join a crash report with its session recording. See [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence).
- To verify the setup end to end by forcing a crash, see [Testing Crash Reporting with Backtrace](/app-distribution/sdk/crash-handler-testing).

## Supported Platforms

The SDK is available for the following platforms. Follow the instructions for your platform:

- [Android](/app-distribution/sdk/android/integrating-android): `com.saucelabs.mobilebeta:sauce-mobile-beta-android`
- [iOS](/app-distribution/sdk/ios/integrating-ios): Swift package `SauceMobileBeta` (module `TestFairy`)
- [React Native](/app-distribution/sdk/react-native/react-native) and [Expo](/app-distribution/sdk/react-native/expo) (with prebuild): `@saucelabs/mobile-beta-react-native`

See [Supported Platforms](/app-distribution/sdk/supported-platforms) for the features available on each platform.

## Adding Events

Events are used to provide insights into how testers use your apps. They can help you track when a tester reaches key points in your app, such as visiting the in-app store.

To add an event to your timeline:

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'React Native', value: 'react'},
]}>

<TabItem value="android">

```java
TestFairy.addEvent("<event name>");
```

Example

```java
public class MyActivity extends Activity {
    private void onPurchaseComplete() {
        TestFairy.addEvent("Purchase OK");
    }
}
```

</TabItem>

<TabItem value="ios">

```objectivec
[TestFairy addEvent:@"<event name>"];
```

Example

```objectivec
@implementation ViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    [TestFairy addEvent:@"Purchase OK"];
    //...
}
// ...
@end
```

</TabItem>

<TabItem value="react">

```js
TestFairy.addEvent("<event name>");
```

Example

```js
import React, { useEffect } from 'react';
import TestFairy from '@saucelabs/mobile-beta-react-native';

function PurchaseScreen() {
  useEffect(() => {
    TestFairy.addEvent('Purchase OK');
  }, []);

  // ...
}
```

</TabItem>

</Tabs>

## Attaching Files to Sessions

Sauce Labs Mobile App Distribution allows developers to attach files to sessions. As a developer, you can upload up to five files to a given session, with a maximum size of 15MB per file. Files must be local to the device.

Be sure to check the device logs for any problems uploading files. Only file extensions .jpeg, .jpg, .png, .txt, and .sqlite are supported.

To attach a file to a session, call the static instance method `attachFile` in the `TestFairy` class:

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>

<TabItem value="android">

```java
File file = ...
TestFairy.attachFile(file);
```

Example

```java
File file = new File("/path/to/file.txt");
TestFairy.attachFile(file);
```

</TabItem>

<TabItem value="ios">

```objectivec
NSURL *file = ...
[TestFairy attachFile:file];
```

Example

```objectivec
NSURL *file = [NSURL fileURLWithPath:@"/path/to/file.txt"];
[TestFairy attachFile:file];
```

</TabItem>

</Tabs>

:::note Already using the TestFairy SDK?
Follow [Migrating from the TestFairy SDK](/app-distribution/sdk/migration/overview) to move your app to the Sauce Mobile Beta SDK.
:::
