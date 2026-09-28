---
id: integrating-ios
title: Integrating iOS SDK
sidebar_label: Integrating iOS SDK
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<iframe width="854" height="480" src="https://www.youtube.com/embed/DhRX5UukvPM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The video shows the legacy TestFairy SDK 1.x CocoaPods flow; follow the Swift Package Manager steps below for the Sauce Mobile Beta SDK.

Integrating the Sauce Mobile Beta SDK (formerly the TestFairy SDK) into your app helps you better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.
You get to:

* Track app use.
* Record screen video and other metrics.
* Understand user flow, using checkpoints.
* Grab NSLogs from client and report to server.
* Collect in-app feedback from your testers.
* Run beside Backtrace (Sauce Labs Error Reporting), which reports crashes.

:::note
The Sauce Mobile Beta SDK is crashless: it never installs a crash handler. Crash reporting is provided by Backtrace. Initialize Backtrace first, then start the Sauce Mobile Beta SDK with `beginWithoutCrashHandler`. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).
:::

## Adding the SDK

The Sauce Mobile Beta SDK for iOS is distributed with Swift Package Manager. The current release candidate is `2.2.0-rc` and requires iOS 11 or later.

### Swift Package Manager

:::note
Requires Xcode 12+. Screenshots taken from Xcode 13.1.
:::

| Item | Value |
| --- | --- |
| Package URL | `https://github.com/testfairy/testfairy-ios-sdk-swift-package` |
| Package product | `SauceMobileBeta` |
| Module to import | `TestFairy` |
| Dependency Rule | **Exact Version** `2.2.0-rc` |

1. Select your project from the Xcode navigator to open your project's configuration.
2. Make sure your project is selected from the Project and Target list.
3. Click the **Package Dependencies** toolbar item.
4. Click the '+' icon to add a package.
<img src={useBaseUrl('img/mobile-apps/xcframework-1.png')} alt="" width="800"/>

1. In the newly opened dialog, enter the Sauce Mobile Beta package URL `https://github.com/testfairy/testfairy-ios-sdk-swift-package` in the top right search bar.
2. Set the **Dependency Rule** to **Exact Version** and enter `2.2.0-rc`.
3. Click the **Add Package** button.
<img src={useBaseUrl('img/mobile-apps/xcframework-2.png')} alt="" width="800"/>

1. After the package has been downloaded, in the newly opened dialog, make sure the `SauceMobileBeta` product is selected in the "Package Product" column.
2. Make sure the right target is selected in the "Add to target" column.
3. Click the **Add Package** button.
<img src={useBaseUrl('img/mobile-apps/xcframework-3.png')} alt="" width="800"/>

:::note Why Exact Version?
`2.2.0-rc` is a semantic-version pre-release. The default "Up to Next Major Version" rule (`from: "2.2.0"`) skips pre-releases, so the package would not resolve. Pin the exact version until the general availability release, which ships with the same package URL and product name.
:::

If you declare dependencies in a `Package.swift` manifest instead:

```swift
dependencies: [
    .package(url: "https://github.com/testfairy/testfairy-ios-sdk-swift-package.git", exact: "2.2.0-rc")
],
targets: [
    .target(name: "MyApp", dependencies: [
        .product(name: "SauceMobileBeta", package: "testfairy-ios-sdk-swift-package")
    ])
]
```

A Sauce-owned repository with the same versions will become the canonical package URL; this page will be updated when it is public. Switching later is a URL change only.

### Legacy TestFairy SDK 1.x

:::caution Legacy TestFairy SDK 1.x
The following channels install the legacy, crash-capable **TestFairy SDK 1.x**, not the Sauce Mobile Beta SDK:

* CocoaPods: `pod 'TestFairy'`
* Carthage: `binary "https://app.testfairy.com/sdk/ios/carthage.json"`
* Manual download of `TestFairySDK.framework` from the [TestFairy download page](https://app.testfairy.com/sdk/ios/)

The CocoaPods pod `SauceMobileBeta` is not published yet. Use Swift Package Manager to add the Sauce Mobile Beta SDK.

Never combine a legacy artifact with the Sauce Mobile Beta package (both provide the `TestFairy` module, which causes duplicate-module and duplicate-symbol errors) or with Backtrace (competing crash handlers). Remove the legacy dependency before you add the Sauce Mobile Beta package.
:::

## Initializing the SDK

Start the SDK with `beginWithoutCrashHandler`. It starts a session without installing a crash handler and forces the `TFSDKEnableCrashReporterKey` begin option to `NO`, even if you pass `YES`. When Backtrace is part of the app, initialize Backtrace before this call. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/) for the full initialization order and the shared `sauce.correlation_id` attribute.

Replace `<sauce-mobile-beta-token>` with your app token. Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

<Tabs
defaultValue="Objective C"
values={[
{label: 'Objective C', value: 'Objective C'},
{label: 'Swift', value: 'Swift'},
]}>

<TabItem value="Objective C">

1. Open your AppDelegate.m file.

2. Add this code to your app:

```objectivec
#import "TestFairy.h"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    // Initialize Backtrace here first when it is part of the app.

    [TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];

    // the rest of the didFinishLaunchingWithOptions method
    // ...
    return YES;
}
```

</TabItem>
<TabItem value="Swift">

1. Import the SDK

   With Swift Package Manager, import the module directly in every Swift file that uses the SDK. The package product is `SauceMobileBeta`, but the module keeps its `TestFairy` name:

```swift
import TestFairy
```

   An Objective-C bridging header also works, for example in a project that already has one. Since this process only needs to be done once per project, if you have already done so, just update your bridging header file.
   * Right-click on your project, select New File...
   * Select Header File.h
   * Save as Bridging.h in your project
   * Click on Bridging.h to open it in editor
   * Add the following line to the code:

```objectivec
#import "TestFairy.h"
```

:::note
If the header is not found, try the framework-style import:
```objectivec
#import "TestFairy/TestFairy.h"
```
:::

   Update Build Settings with the new bridging header:
   * Click on your project
   * Select Build Settings tab
   * Select the "All" filter, in order to find Swift Compiler - General: Objective-C Bridging Header
   * Edit Swift Compiler - General: Objective-C Bridging Header (double-click to edit).
   * Drag "Bridging.h" from the source tree onto the edit box opened

2. Open your AppDelegate.swift file.

3. Add this code to your app:

```swift
import UIKit
import TestFairy

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // Initialize Backtrace here first when it is part of the app.

    TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")

    // the rest of the didFinishLaunchingWithOptions method
    // ...
    return true
}
```

</TabItem>
</Tabs>

:::note
Plain `begin` is also crashless in the Sauce Mobile Beta SDK, and `installCrashHandler`, `enableCrashHandler`, `disableCrashHandler` and `didLastSessionCrash` are no-ops. Use `beginWithoutCrashHandler` to make the intent explicit. See [Crash Handling (Legacy TestFairy SDK)](/testfairy/sdk/tf-crash-handler/).
:::

## Using PencilKit for Better Feedback
You can give your users a better set of tools to markup any screenshots provided during feedback by adding PencilKit to your project. Simply add the PencilKit.framework to your project.

:::note
This requires iOS 13 and Xcode 11.
:::

<br/><img src={useBaseUrl('img/mobile-apps/pencilkit.png')} alt="Pencilkit" width="600"/>

If a screenshot is attached to the feedback, your users can edit the screenshot by tapping on it and using PencilKit to mark it up.

<br/><img src={useBaseUrl('img/mobile-apps/pencilkit-feedback.png')} alt="Pencilkit Feedback" width="250"/>
