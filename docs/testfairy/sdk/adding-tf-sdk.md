---
id: adding-tf-sdk
title: Adding the Sauce Mobile Beta SDK to your App
sidebar_label: Adding the Sauce Mobile Beta SDK
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

The Sauce Mobile Beta SDK (formerly the TestFairy SDK) helps you understand how testers use your app. It records tester sessions, collects in-app feedback and remote logs, and ties every session to a user and a set of attributes, so you can find and inspect sessions on the Sauce Labs Mobile App Distribution dashboard.

The SDK is crashless: it never installs a crash handler. Crash reporting is provided by Backtrace, [Sauce Labs Error Reporting](/error-reporting/getting-started/), and the two SDKs are designed to run side by side in one app. See [Sauce Mobile Beta and Backtrace](#sauce-mobile-beta-and-backtrace) below.

Sauce Mobile Beta SDK features include:

- Recording sessions, including video of how testers interact with your app.
- Collecting in-app feedback from testers. See [User Feedback](/testfairy/sdk/user-feedback/).
- Sending logs to the Sauce Labs Mobile App Distribution dashboard for later inspection. See [Remote Logging](/testfairy/sdk/remote-logging/).
- Identifying users so you can find their sessions. See [Identifying Your Users](/testfairy/sdk/identifying-users/).
- Tagging sessions with attributes for searching and custom reports. See [Session Attributes](/testfairy/sdk/session-attributes/).

Only the packaging names changed with the rename. The runtime API keeps its TestFairy names: you still `#import "TestFairy.h"` or `import TestFairy` on iOS, import `com.testfairy.TestFairy` on Android, and use the default export `TestFairy` in React Native.

:::note
Crash handling is no longer a feature of the SDK. Crashes are reported by Backtrace. The legacy crash APIs `installCrashHandler`, `enableCrashHandler`, `disableCrashHandler` and `didLastSessionCrash` remain for source compatibility but do nothing.
:::

## Sauce Mobile Beta and Backtrace

**What changed.** The legacy TestFairy SDK 1.x installed its own crash handler. A process can have only one owner of its signal and exception handlers, so the TestFairy SDK and Backtrace could not run in the same app: depending on which SDK initialized last, crashes were lost or misattributed. The Sauce Mobile Beta SDK artifacts for iOS, Android and React Native remove that conflict at the source. Crash reporting is compiled out of the SDK, and Backtrace is the single crash owner.

**The invariant.** The Sauce Mobile Beta SDK never installs a crash handler, at any layer. The entry point `beginWithoutCrashHandler` makes this explicit: it forces the `enableCrashReporter` option to `false` even if you pass `true`. Plain `begin` is also crashless in the Sauce Mobile Beta artifacts, but `beginWithoutCrashHandler` is the recommended call.

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

**Where to go.**

- To set up crash reporting, see [Sauce Labs Error Reporting](/error-reporting/getting-started/).
- To run both SDKs in one app, initialize Backtrace first, then start Sauce Mobile Beta with `beginWithoutCrashHandler`, and give both SDKs the same `sauce.correlation_id` attribute so you can join a crash report with its session recording. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).
- To move an app from the legacy TestFairy SDK 1.x artifacts, follow the platform page for [Android](/testfairy/sdk/android/integrating-android/), [iOS](/testfairy/sdk/ios/integrating-ios/) or [React Native](/testfairy/platforms/react-native/).

:::caution
Never install a legacy TestFairy SDK 1.x artifact (`pod 'TestFairy'`, the Carthage or manual `TestFairySDK.framework`, `com.testfairy:testfairy-android-sdk`, `com.testfairy:testfairy-android-ndk` or `react-native-testfairy`) together with a Sauce Mobile Beta artifact, which fails with duplicate classes, or together with Backtrace, which leaves two SDKs competing for the crash handler. Remove the legacy artifact first.
:::

## Supported Platforms

The Sauce Mobile Beta SDK ships crashless artifacts for the following platforms. Follow the instructions for your platform:

- [Android](/testfairy/sdk/android/integrating-android/): `com.saucelabs.mobilebeta:sauce-mobile-beta-android`
- [iOS](/testfairy/sdk/ios/integrating-ios/): Swift package `SauceMobileBeta` (module `TestFairy`)
- [React Native](/testfairy/platforms/react-native/) and [Expo](/testfairy/platforms/expo/) (with prebuild): `@saucelabs/mobile-beta-react-native`

See [Supported Platforms](/testfairy/sdk/supported-platforms/) for the features available on each platform.

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

## Attaching Files To Sessions

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
