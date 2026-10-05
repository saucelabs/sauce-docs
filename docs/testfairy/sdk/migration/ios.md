---
id: ios
title: Migrating an iOS App from the TestFairy SDK
sidebar_label: iOS
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

Follow these steps to move an iOS app from the TestFairy SDK 1.x to the Sauce Mobile Beta SDK 2.2.0-rc. Read [Migrating from the TestFairy SDK](/testfairy/sdk/migration/overview/) first for what changes and why. For the full install reference of the new SDK, see [Integrating iOS SDK](/testfairy/sdk/ios/integrating-ios/).

The module name does not change: you keep `import TestFairy` in Swift and `#import "TestFairy.h"` in Objective-C. What changes is the artifact, the entry point, and where crashes go.

:::caution Order matters
Remove every TestFairy SDK 1.x artifact before you add the Sauce Mobile Beta package. Both provide the `TestFairy` module, so a project that contains both fails with duplicate module and duplicate symbol errors. Never run the TestFairy SDK 1.x beside Backtrace (Sauce Labs Error Reporting) either: both install crash handlers, and a process has one owner of its signal and exception handlers.
:::

## 1. Remove the TestFairy SDK Artifacts

The TestFairy SDK 1.x was installed through one of the following channels. Remove it from every channel your project uses.

**CocoaPods.** Remove the `pod 'TestFairy'` line from your `Podfile`, then run `pod install` so that CocoaPods removes the pod from the workspace:

```ruby
# Podfile: remove this line.
pod 'TestFairy'
```

```bash
cd ios && pod install
```

**Carthage.** Remove the `binary` entry that points to `https://app.testfairy.com/sdk/ios/carthage.json` from your `Cartfile`, delete the `TestFairySDK.framework` that Carthage downloaded into `Carthage/Build`, and remove it from the **Frameworks, Libraries, and Embedded Content** section of your target and from any `copy-frameworks` run script.

```text
# Cartfile: remove this line.
binary "https://app.testfairy.com/sdk/ios/carthage.json"
```

**Manual download.** Remove the `TestFairySDK.framework` that was downloaded from the TestFairy download page from the project navigator and from the **Frameworks, Libraries, and Embedded Content** section of your target. Also remove a `libTestFairy.a` static library if one is linked.

**Swift Package Manager at a 1.x version.** If the project already depends on `https://github.com/testfairy/testfairy-ios-sdk-swift-package` at a 1.x tag, keep the package. The 1.x package product was named `TestFairy`, while 2.2.0-rc names it `SauceMobileBeta`, so in step 2 you change the version rule and swap the linked product. The module you import stays `TestFairy`.

**Verify.** The following command prints nothing. Add the files your project uses:

```bash
grep -ri testfairy Podfile Podfile.lock Cartfile Cartfile.resolved 2>/dev/null
```

Also confirm that no `TestFairySDK.framework` or `libTestFairy.a` remains in the project navigator or in the **Build Phases** of any target.

## 2. Add the Sauce Mobile Beta Package

The Sauce Mobile Beta SDK for iOS is distributed with Swift Package Manager and requires iOS 11 or later. The CocoaPods pod `SauceMobileBeta` is not published yet.

| Item | Value |
| :--- | :--- |
| Package URL | `https://github.com/testfairy/testfairy-ios-sdk-swift-package` |
| Package product | `SauceMobileBeta` |
| Module to import | `TestFairy` |
| Dependency Rule | **Exact Version** `2.2.0-rc` |

In Xcode, select the project, open **Package Dependencies**, click **+**, enter the package URL, set the **Dependency Rule** to **Exact Version** `2.2.0-rc`, and add the `SauceMobileBeta` product to your app target. If the package is already present at a 1.x tag, edit its rule to **Exact Version** `2.2.0-rc` instead of adding it again, then remove the old `TestFairy` package product from **Frameworks, Libraries, and Embedded Content** and add the `SauceMobileBeta` product in its place. In a `Package.swift` manifest, change the product name in the `.product(name:package:)` entry from `TestFairy` to `SauceMobileBeta`.

If you declare dependencies in a `Package.swift` manifest:

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

:::note Why Exact Version?
`2.2.0-rc` is a semantic-version pre-release. The default **Up to Next Major Version** rule (`from: "2.2.0"`) skips pre-releases, so the package would not resolve. Pin the exact version until the general availability release.
:::

**Verify.** `Package.resolved` lists `testfairy-ios-sdk-swift-package` at version `2.2.0-rc`, and a file that contains `import TestFairy` compiles.

## 3. Update the Initialization

Replace `begin` with `beginWithoutCrashHandler`. It starts a session, never installs a crash handler, and forces the `TFSDKEnableCrashReporterKey` begin option to `NO` even if you pass `YES`. Replace `<sauce-mobile-beta-token>` with your app token from your [account preferences](https://app.testfairy.com/settings#apptoken).

<Tabs
groupId="lang"
defaultValue="swift"
values={[
{label: 'Swift', value: 'swift'},
{label: 'Objective-C', value: 'objc'},
]}>

<TabItem value="swift">

With Swift Package Manager, import the module directly. The package product is `SauceMobileBeta`, but the module is `TestFairy`. An existing bridging header with `#import "TestFairy.h"` also keeps working.

```swift
import UIKit
import TestFairy

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // Before:
    // TestFairy.begin("<app-token>")

    // After. Initialize Backtrace before this line when it is part of the app.
    TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")

    // the rest of the didFinishLaunchingWithOptions method
    return true
}
```

</TabItem>

<TabItem value="objc">

```objectivec
#import "TestFairy.h"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Before:
    // [TestFairy begin:@"<app-token>"];

    // After. Initialize Backtrace before this line when it is part of the app.
    [TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];

    // the rest of the didFinishLaunchingWithOptions method
    return YES;
}
```

</TabItem>

</Tabs>

If you pass begin options, use the options overload of `beginWithoutCrashHandler` and remove `TFSDKEnableCrashReporterKey` from the dictionary. The SDK forces it to `NO` anyway.

**Verify.** Build and run a debug build. A new session for the build appears in your Sauce Labs Mobile App Distribution dashboard.

## 4. Delete the Crash Handler Calls and Set Up Backtrace

The crash entry points still exist in the API, but they do nothing in the Sauce Mobile Beta SDK. Delete these calls from your code:

<Tabs
groupId="lang"
defaultValue="swift"
values={[
{label: 'Swift', value: 'swift'},
{label: 'Objective-C', value: 'objc'},
]}>

<TabItem value="swift">

```swift
// Delete these calls. They are no-ops in the Sauce Mobile Beta SDK.
TestFairy.installCrashHandler("<app-token>")  // does not start a session
TestFairy.enableCrashHandler()
TestFairy.disableCrashHandler()
TestFairy.didLastSessionCrash()                 // always returns false
```

</TabItem>

<TabItem value="objc">

```objectivec
// Delete these calls. They are no-ops in the Sauce Mobile Beta SDK.
[TestFairy installCrashHandler:@"<app-token>"];  // does not start a session
[TestFairy enableCrashHandler];
[TestFairy disableCrashHandler];
[TestFairy didLastSessionCrash];                 // always returns NO
```

</TabItem>

</Tabs>

If your app used `installCrashHandler` on its own, as a crash handler without a session, that use case is now covered by Backtrace alone.

Crash reporting is provided by Backtrace. Add the Backtrace iOS SDK by following [Setting Up Backtrace for iOS](/error-reporting/platform-integrations/ios/setup/), and initialize it before `beginWithoutCrashHandler` so that it is the only crash owner. New to Backtrace? Start with [Getting Started](/error-reporting/getting-started/).

Any code that read crash state from the SDK, for example a "the app crashed last time" prompt built on `didLastSessionCrash`, needs a Backtrace-based replacement or removal.

**Verify.** The following command prints nothing:

```bash
grep -rn "installCrashHandler\|enableCrashHandler\|disableCrashHandler\|didLastSessionCrash" --include="*.swift" --include="*.m" --include="*.mm" .
```

## 5. Upload dSYMs to Backtrace

An app on the Sauce Mobile Beta SDK sends no crash reports to Sauce Labs Mobile App Distribution, so there is nothing for it to symbolicate there and its dSYMs no longer go there. Crash symbolication for these apps happens in Backtrace.

1. Keep **Debug Information Format** set to **DWARF with dSYM File** in your Xcode build settings so that every build produces dSYMs.
2. Remove any build phase, script, or CI step that uploads dSYMs to Sauce Labs Mobile App Distribution with your upload API key.
3. Upload the dSYMs to Backtrace instead, as described in [Upload Debug Symbols](/error-reporting/platform-integrations/ios/setup/#upload-debug-symbols) and [Symbolication](/error-reporting/project-setup/symbolication/).

**Verify.** A crash report in Backtrace shows your method names instead of addresses.

## 6. Add the Correlation Attributes

To match a Backtrace crash report with the session recorded up to the crash, both SDKs must carry the same `sauce.correlation_id` attribute: one lowercase UUID v4 generated per app launch before either SDK starts, together with the other reserved attributes. Register a session state delegate before `beginWithoutCrashHandler` to copy the session URL into Backtrace on every session start.

The contract is defined once, in [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/), which has the initialization order and a complete `AppDelegate` example in Swift, and [Reserved Attributes for Backtrace Coexistence](/testfairy/sdk/session-attributes/#reserved-attributes-for-backtrace-coexistence).

Do not use the deprecated `setCorrelationId` or `identify` methods for the correlation id. They write the user-identity field that `setUserId` writes. See [Identifying Your Users](/testfairy/sdk/identifying-users/).

**Verify.** A session's attributes in Sauce Labs Mobile App Distribution show `sauce.correlation_id`, and a Backtrace report from the same launch shows the same value.

## 7. Validate Before Release

1. The dependency check from step 1 prints nothing, and `Package.resolved` lists `testfairy-ios-sdk-swift-package` at `2.2.0-rc` only.
2. A clean build succeeds. A duplicate module or duplicate symbol error for `TestFairy` means a TestFairy SDK 1.x artifact is still linked. Go back to step 1.
3. Run a debug build with both SDKs initialized and force a crash. The process dies as a genuine crash. Relaunch the app: the crash appears in Backtrace only, and the Sauce Mobile Beta SDK starts a new session.
4. Submit feedback from the app and confirm that the session shows `sauce.correlation_id` in its attributes, with the same value as the Backtrace report from that launch.
5. Confirm that store builds do not contain the Sauce Mobile Beta SDK while Backtrace stays. See [Sauce Mobile Beta SDK in Production](/testfairy/sdk/tf-production/).

## Troubleshooting

**The package does not resolve.** The **Up to Next Major Version** rule skips the `2.2.0-rc` pre-release. Set the **Dependency Rule** to **Exact Version** `2.2.0-rc`.

**Duplicate module or duplicate symbol errors for `TestFairy`.** A TestFairy SDK 1.x artifact is still in the project: a `pod 'TestFairy'` line, a Carthage or manually added `TestFairySDK.framework`, or a `libTestFairy.a`. Remove it, delete the derived data, and rebuild.

**`TestFairy.h` is not found.** With a bridging header, try the framework-style import `#import "TestFairy/TestFairy.h"`. In Swift files, use `import TestFairy` directly.

**A crash shows up nowhere.** The Sauce Mobile Beta SDK does not report crashes. Make sure Backtrace is initialized before `beginWithoutCrashHandler` and that its submission URL is correct. See [Setting Up Backtrace for iOS](/error-reporting/platform-integrations/ios/setup/).

**The crash report shows addresses instead of method names.** Upload the dSYMs of that build to Backtrace. See step 5.

**`didLastSessionCrash` returns `false` after a crash.** The SDK returns `false` by design. Query Backtrace for crash history.
