---
id: tf-crash-handler
title: Crash Handling (Legacy TestFairy SDK)
sidebar_label: Crash Handling (Legacy)
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

The Sauce Mobile Beta SDK (formerly the TestFairy SDK) is crashless. It never installs a crash handler, and the crash APIs of the legacy SDK are no-ops in it:

- `installCrashHandler` is a no-op. It does not start a session.
- `enableCrashHandler` and `disableCrashHandler` are no-ops.
- `didLastSessionCrash` always returns `false`.
- `beginWithoutCrashHandler` is the recommended entry point. It forces the `enableCrashReporter` begin option to `false`, even if you pass `true`. Plain `begin` is also crashless.

Crash reporting for apps that use the Sauce Mobile Beta SDK is provided by Backtrace (Sauce Labs Error Reporting). Initialize Backtrace before the Sauce Mobile Beta SDK so it is the sole crash owner. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/) for the initialization order and the shared `sauce.correlation_id` attribute, and the Backtrace setup guide for your platform:

- [Backtrace: Error and Crash Reporting](/error-reporting/getting-started/)
- [Setting Up Backtrace for iOS](/error-reporting/platform-integrations/ios/setup/)
- [Setting Up Backtrace for Android](/error-reporting/platform-integrations/android/setup/) and [Native Crash Integration for Android](/error-reporting/platform-integrations/android/native-crash-integration/)
- [Backtrace for React Native](/error-reporting/language-integrations/react-native/)

:::caution
Never install a legacy TestFairy artifact (`pod 'TestFairy'`, the Carthage or manual `TestFairySDK.framework`, `com.testfairy:testfairy-android-sdk`, `com.testfairy:testfairy-android-ndk`, `react-native-testfairy`) together with the Sauce Mobile Beta SDK (duplicate classes) or together with Backtrace (competing crash handlers).
:::

## Legacy: TestFairy SDK 1.x as a Crash Handler

:::note Legacy TestFairy SDK 1.x only
The examples below apply only to the legacy, crash-capable TestFairy SDK 1.x. In the Sauce Mobile Beta SDK, `installCrashHandler` does nothing.
:::

To use the legacy TestFairy SDK 1.x as a crash handler without any other feature, use the code example below. No session is recorded.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS Objective C', value: 'iosC'},
{label: 'iOS Swift', value: 'iosS'},
]}>

<TabItem value="android">

```java
TestFairy.installCrashHandler(this, "<app-token>");
```

Example

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        TestFairy.installCrashHandler(this, "<app-token>");
    }
}
```

</TabItem>

<TabItem value="iosC">

```objectivec
[TestFairy installCrashHandler:@"<app-token>"];
```

Example

```objectivec
#import "TestFairy.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [TestFairy installCrashHandler:@"<app-token>"];
    return YES;
}

@end
```

</TabItem>

<TabItem value="iosS">

```swift
TestFairy.installCrashHandler("<app-token>")
```

Example

```swift
import UIKit
import TestFairy

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
        TestFairy.installCrashHandler("<app-token>")
        return true
    }

}
```

</TabItem>

</Tabs>
