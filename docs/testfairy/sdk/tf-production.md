---
id: tf-production
title: Sauce Mobile Beta SDK in Production
sidebar_label: Sauce Mobile Beta SDK in Production
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

Running the Sauce Mobile Beta SDK (formerly the TestFairy SDK) in production offers numerous benefits, such as gaining valuable insights into user behavior, detecting and resolving issues promptly, and continuously improving your app's performance. With the SDK, you can proactively monitor your production environment, gather valuable data, and make informed decisions to deliver a superior app to your users.

Crash reporting is not one of these benefits: the Sauce Mobile Beta SDK is crashless. Production crash reporting comes from [Backtrace (Sauce Labs Error Reporting)](/error-reporting/getting-started/), which stays in your production builds whether or not the SDK does. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).

## Running the SDK in Production

When running the SDK in production, you may record sensitive data such as medical information, financial data or photos.

Therefore it is important to follow these guidelines:

1. On iOS, you **must** request explicit user consent before recording start.
   See the [Apple guidelines](https://developer.apple.com/app-store/review/guidelines/) and pay special attention to section 2.5.14

1. On Android, call `disableAutoUpdate()` before `beginWithoutCrashHandler()` to comply with the [Play Store Developer Distribution Agreement](https://play.google.com/about/developer-distribution-agreement.html).

1. When recording sensitive data you **must** use the SDK's [end-to-end encryption](/testfairy/sdk/security/data-encryption/) with your own private keys, so that only your team can see your sessions.

1. You **must** [hide sensitive data](/testfairy/sdk/security/hiding-data/) such as credit card numbers, passwords, or other PII, so that this info will not be uploaded to the server.

1. In case you are using the SDK for customer support to better understand your users in case of a technical issue,
   it is recommended to add a button to your app menu (call it "advanced support"?) and have that button call `TestFairy.beginWithoutCrashHandler()`.
   Before starting the session, ask the user if it is ok to record their screen for quality assurance purposes.
   When doing that, make sure that session duration is set to 2-3 minutes, just enough to identify the cause of a problem.

1. You **must** include a proper disclaimer in your app terms of service document.
   You must explain exactly what data you collect, and how to request deletion of that data.

1. Never use Auto-update with apps that are shipped to production. Auto-updating a store app is a clear violation of both Apple and Google's terms.

## Recommended: Keep the SDK Out of Store Builds

The most reliable way to keep the SDK out of production is to not compile it into store builds at all. Disabling a feature at runtime does not change what code is packaged. A dependency-level switch does. Backtrace is a production tool and stays under a regular dependency in every variant, so store builds keep crash reporting while dropping session recording, tester feedback and update prompts. Both Sauce Labs demo apps use this layout.

### Android: Debug-Only Dependency

Declare the SDK for the debug variant (or a `beta` product flavor) only, and keep Backtrace under `implementation`:

```groovy
dependencies {
    // Crash reporting ships in every variant.
    implementation "com.github.backtrace-labs.backtrace-android:backtrace-library:<add-latest-version>"

    // Sauce Mobile Beta ships in debug builds only. With a beta flavor, use betaImplementation.
    debugImplementation "com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc"
}
```

Use 3.8.0 or later so `BacktraceClient.addAttribute` is available.

Because the `com.testfairy` classes do not exist in the release variant, route all SDK calls through one class that has two implementations in variant-specific source sets. The example below is simplified from the [My Demo App for Android](https://github.com/saucelabs/my-demo-app-android) source set, where `app/src/mobileBeta/java` holds the real integration and `app/src/noMobileBeta/java` holds empty methods:

```groovy
android {
    sourceSets {
        debug.java.srcDir 'src/mobileBeta/java'
        release.java.srcDir 'src/noMobileBeta/java'
    }
}
```

```java
// src/mobileBeta/java/com/example/SauceMobileBetaIntegration.java (debug builds)
final class SauceMobileBetaIntegration {
    static void initialize(Application application, Map<String, String> sharedAttributes) {
        TestFairy.disableAutoUpdate();
        for (Map.Entry<String, String> attribute : sharedAttributes.entrySet()) {
            TestFairy.setAttribute(attribute.getKey(), attribute.getValue());
        }
        TestFairy.beginWithoutCrashHandler(application.getApplicationContext(), "<sauce-mobile-beta-token>");
    }
}

// src/noMobileBeta/java/com/example/SauceMobileBetaIntegration.java (release builds)
final class SauceMobileBetaIntegration {
    static void initialize(Application application, Map<String, String> sharedAttributes) {
        // No SDK in release builds.
    }
}
```

Release builds then contain neither the SDK nor any call to it, and a release build that accidentally references `TestFairy` fails to compile instead of shipping the SDK.

### iOS: Info.plist and xcconfig Switch

A Swift package product is linked into every build configuration, so the switch is a runtime one driven by build settings rather than code changes. [My Demo App for iOS](https://github.com/saucelabs/my-demo-app-ios) reads two Info.plist keys: a boolean `testfairyEnabled` and the token `sauceMobileBetaToken`, which Xcode expands from a build setting defined in an `.xcconfig` file. The SDK runs only when the flag is true and a token is present. Otherwise the app uses a no-op wrapper (see Option 3 below).

```text
// Config/Demo.xcconfig (committed, empty defaults; the app target's base configuration)
SAUCE_MOBILE_BETA_TOKEN =
#include? "Local.xcconfig"

// Config/Local.xcconfig (gitignored; written from CI secrets for beta builds)
SAUCE_MOBILE_BETA_TOKEN = <sauce-mobile-beta-token>
```

```xml
<!-- Info.plist -->
<key>sauceMobileBetaToken</key>
<string>$(SAUCE_MOBILE_BETA_TOKEN)</string>
<key>testfairyEnabled</key>
<true/>
```

```swift
let info = Bundle.main.infoDictionary ?? [:]
let enabled = info["testfairyEnabled"] as? Bool ?? false
let token = info["sauceMobileBetaToken"] as? String ?? ""

if enabled && !token.isEmpty {
    TestFairy.beginWithoutCrashHandler(token)
}
```

For the App Store build, the release pipeline flips the flag and clears the token before building, so the shipped bundle carries no token and never starts a session:

```bash
/usr/libexec/PlistBuddy -c "SET testfairyEnabled NO" "My App/Info.plist"
sed -i '' 's/^SAUCE_MOBILE_BETA_TOKEN = .*/SAUCE_MOBILE_BETA_TOKEN =/' Config/Local.xcconfig
```

Backtrace is initialized unconditionally before this check, so production crashes are still reported. If you also want the SDK's code out of the App Store binary, combine this switch with Option 2 below.

## Disabling the SDK in Production

When it comes to using the SDK in a production environment, there may be instances where you need to disable it temporarily or permanently, for example to comply with platform guidelines or to eliminate potential performance impacts. The SDK is modular, and the options below keep working alongside the dependency-level approach above.

### iOS

#### Option 1: Calling beginWithoutCrashHandler Only in DEBUG

Without a call to `beginWithoutCrashHandler` (or `begin`), the SDK is not initialized. An uninitialized SDK won't consume any memory and won't open sockets. Even though it does not impact your app in any way, the SDK is still linked with your app.

<Tabs
groupId="ios-language"
defaultValue="objc"
values={[
{label: 'Objective-C', value: 'objc'},
{label: 'Swift', value: 'swift'},
]}>

<TabItem value="objc">

```objectivec
#ifdef DEBUG
[TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
#endif
```

</TabItem>

<TabItem value="swift">

```swift
#if DEBUG
TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")
#endif
```

</TabItem>
</Tabs>

If your publishing workflow has multiple build schemes, define a compiler flag for each scheme and enable the SDK only for the schemes relevant to testing:

<Tabs
groupId="ios-language"
defaultValue="objc"
values={[
{label: 'Objective-C', value: 'objc'},
{label: 'Swift', value: 'swift'},
]}>

<TabItem value="objc">

```objectivec
#if defined(DEBUG)
[TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
#elif defined(SCHEME1)
[TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
#elif defined(SCHEME2)
[TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
#else
// Don't initialize the SDK
#endif
```

</TabItem>

<TabItem value="swift">

```swift
#if DEBUG
TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")
#elseif SCHEME1
TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")
#elseif SCHEME2
TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")
#else
// Don't initialize the SDK
#endif
```

</TabItem>
</Tabs>

If you are also worried about reducing the app size in your final release build, proceed to Option 2.

#### Option 2: Exclude the SDK From the App Store Scheme

A common pattern is a dedicated scheme for the App Store, in addition to Debug and Release. This option still requires the `#ifdef` or `#if` directives from Option 1, but also omits the library from the App Store binary.

- With the Swift package (`SauceMobileBeta`), a package product is linked per target, not per configuration. Create a separate app target for the App Store that does not depend on the `SauceMobileBeta` product, and keep the runtime switch above for the targets that do.
- With the legacy manual integration of the TestFairy SDK 1.x (`libTestFairy.a`), navigate to the project build settings and locate the **Excluded Source File Names** option. Expand the list, find the build scheme you want to exclude the SDK from, and add two entries to the excluded file list, one for **TestFairy.h** and one for **libTestFairy.a**.

Try building your project. If the compilation fails, locate the lines where the SDK is used and wrap them with the `#ifdef` or `#if` directives explained in Option 1.

#### Option 3: No-Op Wrapper

Similar to Option 2, you keep multiple schemes or targets, but you do not need `#ifdef` or `#if` around every call. Route every SDK call through a wrapper protocol with a real implementation and a no-op implementation, and select the implementation from the `testfairyEnabled` flag (see above) or from a compiler flag. All `TestFairy` calls live in one file, and the rest of the app never imports the SDK. `TestFairyWrapper.swift` in [My Demo App for iOS](https://github.com/saucelabs/my-demo-app-ios) is a complete example.

```swift
protocol SauceMobileBetaProtocol {
    func begin()
    func showFeedbackForm()
}

final class SauceMobileBetaLive: SauceMobileBetaProtocol {
    func begin() { TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>") }
    func showFeedbackForm() { TestFairy.showFeedbackForm() }
}

final class SauceMobileBetaNoOp: SauceMobileBetaProtocol {
    func begin() {}
    func showFeedbackForm() {}
}
```

The legacy TestFairy iOS No-Op SDK (a `TestFairy.m` with empty implementations for the TestFairy SDK 1.x static library) served the same purpose. Its repository is no longer available.

### Android

#### Option 1: Calling beginWithoutCrashHandler Only in Debug Builds

Your Gradle variants can alter the code path of your app. Use the debug variant to call `TestFairy.beginWithoutCrashHandler()`, and the release variant to omit the call.

In order for ProGuard or R8 to fully remove the SDK from the final binary, use a wrapper class that differs in each of your variants:

- Create the same package structure and class name in `src/debug/java` and in `src/release/java` (not in `src/main/java`, or the two definitions clash).
- Put the code below into the class under `src/debug/java`.

```java
public class TestFairyWrapper {
    public static void begin(Context context, String appToken) {
        TestFairy.beginWithoutCrashHandler(context, appToken);
    }
}
```

- Put the code below into the class under `src/release/java`.

```java
public class TestFairyWrapper {
    public static void begin(Context context, String appToken) {
        // Do nothing
    }
}
```

- Call `TestFairyWrapper.begin()` from your `Application` subclass.

Without any calls to the SDK, ProGuard or R8 removes the entire compiled code from the resulting `classes.dex` and the final APK. Combined with a `debugImplementation` dependency (recommended above), the release APK never contains it in the first place.

#### Option 2: Use a Class Loader

Android allows advanced developers to load classes into memory on the fly. You can use Java reflection to load the SDK class into memory only on a debug build.

Replace the code where you call `TestFairy.beginWithoutCrashHandler()` with the code below.

```java
try {
    Class<?> cls = Class.forName("com.testfairy.TestFairy");
    Method method = cls.getMethod("beginWithoutCrashHandler", android.content.Context.class, String.class);
    method.invoke(null, this, "<sauce-mobile-beta-token>");
} catch (Exception e) { /* ignore */ }
```

Then, in your `build.gradle` file, declare the SDK with `debugImplementation`:

```groovy
debugImplementation "com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc"
```
