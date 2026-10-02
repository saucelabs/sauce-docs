---
id: backtrace-coexistence
title: Using Sauce Mobile Beta with Backtrace Error Reporting
sidebar_label: Using with Backtrace
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

The Sauce Mobile Beta SDK (formerly the TestFairy SDK) and Backtrace, the Sauce Labs Error Reporting product, run side by side in one app. This guide describes the contract that makes that possible: Backtrace owns crashes, Sauce Mobile Beta owns beta sessions, and both carry the same correlation attribute so a crash report and its session recording can be matched across the two consoles.

## Overview

A process can have only one owner of its signal and exception handlers. The legacy TestFairy SDK 1.x installed its own crash handler, so it could not share an app with Backtrace: whichever SDK initialized last took over, and crashes were lost or misattributed. The Sauce Mobile Beta SDK is crashless. It never installs a crash handler at any layer, on any platform, so Backtrace is always the sole crash owner.

| Product                    | Owns                                                                                                                        |
| :------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| Backtrace                  | Native crashes (iOS, Android JVM and NDK), JavaScript errors and unhandled promise rejections (React Native), out-of-memory detection, symbolication |
| Sauce Mobile Beta SDK      | Beta sessions and video, tester feedback and screenshots, remote logs and events, session attributes, tester workflow |

The runtime API stays TestFairy-compatible: the iOS module and class are still `TestFairy`, the Android package is still `com.testfairy`, and the React Native default export is still `TestFairy`. Only the packaging names changed. The one call that is new on every platform is `beginWithoutCrashHandler`, the recommended entry point for a Backtrace-owned app.

:::caution
Never combine a legacy TestFairy artifact with Backtrace, and never combine a legacy TestFairy artifact with the Sauce Mobile Beta SDK. The legacy artifacts are crash-capable: with Backtrace they compete for the same crash handlers, and with Sauce Mobile Beta they duplicate the `TestFairy` classes and can bring a crash handler back.
:::

## Before You Begin

Install both SDKs, then remove every legacy TestFairy artifact from the project.

1. Install Backtrace for your platform: [iOS](/error-reporting/platform-integrations/ios/setup/), [Android](/error-reporting/platform-integrations/android/setup/) (plus [Native Crash Integration](/error-reporting/platform-integrations/android/native-crash-integration/) if you want NDK crashes), or [React Native](/error-reporting/language-integrations/react-native/). New to Backtrace? Start with [Getting Started](/error-reporting/getting-started/).
   - Android: use Backtrace Android SDK 3.8.0 or later, which provides `BacktraceClient.addAttribute` (see [Configuring Backtrace for Android](/error-reporting/platform-integrations/android/configuration/)). On 3.7.x, use `((BacktraceDatabase) client.database).addAttribute(key, value)` instead.
2. Install the Sauce Mobile Beta SDK: [iOS](/testfairy/sdk/ios/integrating-ios/), [Android](/testfairy/sdk/android/integrating-android/), or [React Native](/testfairy/platforms/react-native/).
3. Remove the legacy TestFairy SDK 1.x artifacts if the project still references them:
   - iOS: `pod 'TestFairy'`, a Carthage or manually added `TestFairySDK.framework`, and 1.x tags of `testfairy-ios-sdk-swift-package`.
   - Android: `com.testfairy:testfairy-android-sdk` and `com.testfairy:testfairy-android-ndk`.
   - React Native: `react-native-testfairy` (`npm uninstall react-native-testfairy`), including its bundled `libTestFairy.a` and `React-TestFairy.podspec`.
4. On Android, use Backtrace's `minSdk` (21) for the combined app. Sauce Mobile Beta alone supports `minSdk` 16.

## Initialization Order

Initialize in this order on every platform:

1. Generate one lowercase UUID v4 for this launch and build the shared attribute map before either SDK starts.
2. Initialize Backtrace with the shared attributes. Backtrace installs the crash handlers.
3. Register a Sauce Mobile Beta session-state listener that mirrors the session URL back into Backtrace.
4. Copy the shared attributes to Sauce Mobile Beta with `setAttribute`.
5. Start Sauce Mobile Beta with `beginWithoutCrashHandler`.

The listener is registered before `beginWithoutCrashHandler` because the session URL is assigned asynchronously. Reading it immediately after `begin` can return null.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS Swift', value: 'iosS'},
{label: 'React Native', value: 'react'},
]}>

<TabItem value="android">

Pass the attribute map to the `BacktraceClient` constructor that also takes `BacktraceDatabaseSettings`. The attributes-only constructor creates a disabled database, and `enableNativeIntegration()` then silently does nothing. Use the `/json` submission URL and keep `enableNativeIntegration()` as the last Backtrace setup call: native annotations are snapshotted there, so values added later reach native reports only through `client.addAttribute` (`backtrace-android` 3.8 and later) or `((BacktraceDatabase) client.database).addAttribute` (3.7.x).

```kotlin
import android.app.Application
import backtraceio.library.BacktraceClient
import backtraceio.library.BacktraceCredentials
import backtraceio.library.models.BacktraceExceptionHandler
import backtraceio.library.models.database.BacktraceDatabaseSettings
import com.testfairy.SessionStateListener
import com.testfairy.TestFairy
import java.io.File
import java.util.UUID

class MainApplication : Application() {
    private lateinit var backtrace: BacktraceClient

    override fun onCreate() {
        super.onCreate()
        // 1. One lowercase UUID v4 per launch, before either SDK starts.
        val shared = mapOf(
            "sauce.correlation_id" to UUID.randomUUID().toString(),
            "sauce.sdk.coexistence_mode" to "backtrace_crash_owner",
            "sauce.environment" to "beta",
            "sauce.release" to "${BuildConfig.APPLICATION_ID}@${BuildConfig.VERSION_NAME}",
            "sauce.dist" to BuildConfig.VERSION_CODE.toString(),
        )

        // 2. Backtrace first: sole JVM and native crash owner.
        backtrace = BacktraceClient(
            applicationContext,
            BacktraceCredentials("https://submit.backtrace.io/<universe>/<backtrace-token>/json"),
            BacktraceDatabaseSettings(File(applicationContext.filesDir, "backtrace").absolutePath),
            HashMap<String, Any>(shared)
        )
        BacktraceExceptionHandler.enable(backtrace)
        backtrace.enableNativeIntegration() // keep last

        // 3. Mirror every session URL into Backtrace (overwritten on each start).
        TestFairy.addSessionStateListener(object : SessionStateListener() {
            override fun onSessionStarted(sessionUrl: String?) {
                // backtrace-android 3.8+; on 3.7.x: (backtrace.database as BacktraceDatabase).addAttribute(key, value)
                backtrace.addAttribute("sauce.mobile_beta.session_started", "true")
                backtrace.addAttribute("sauce.mobile_beta.session_url", sessionUrl ?: "")
            }
            override fun onSessionFailed() {
                backtrace.addAttribute("sauce.mobile_beta.session_started", "false")
            }
        })

        // 4. Same attributes before begin; the SDK keeps them for every session.
        shared.forEach { (key, value) -> TestFairy.setAttribute(key, value) }

        // 5. Crashless start. Never installs a crash handler.
        TestFairy.beginWithoutCrashHandler(applicationContext, "<sauce-mobile-beta-token>")
    }
}
```

</TabItem>

<TabItem value="iosS">

Make the attributes assignment the very next statement after `try BacktraceClient(configuration:)`. PLCrashReporter's handlers are installed by then, and only that setter writes attributes into native crash reports. A crash before that line carries no correlation id. Assign the full map immediately after init, with `String` values. Later updates such as the session URL go through the same setter, which rewrites the attributes stored for crash reports. Use the `/plcrash` submission URL.

```swift
import UIKit
import Backtrace
import TestFairy // module unchanged; the SwiftPM product is SauceMobileBeta

@main
final class AppDelegate: UIResponder, UIApplicationDelegate {
    private let sessionObserver = SessionObserver()

    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // 1. One lowercase UUID v4 per launch, before either SDK starts.
        let info = Bundle.main.infoDictionary ?? [:]
        let shared: [String: String] = [
            "sauce.correlation_id": UUID().uuidString.lowercased(),
            "sauce.sdk.coexistence_mode": "backtrace_crash_owner",
            "sauce.environment": "beta",
            "sauce.release": "\(Bundle.main.bundleIdentifier ?? "")@\(info["CFBundleShortVersionString"] ?? "")",
            "sauce.dist": "\(info["CFBundleVersion"] ?? "")",
        ]

        // 2. Backtrace first: sole crash owner.
        let credentials = BacktraceCredentials(
            submissionUrl: URL(string: "https://submit.backtrace.io/<universe>/<backtrace-token>/plcrash")!)
        let configuration = BacktraceClientConfiguration(credentials: credentials)
        BacktraceClient.shared = try? BacktraceClient(configuration: configuration)
        BacktraceClient.shared?.attributes = shared // full map, next statement after init

        // 3. Mirror every session URL into Backtrace (register once; the SDK retains it).
        TestFairy.setSessionStateDelegate(sessionObserver)

        // 4. Same attributes before begin; the SDK keeps them for every session.
        for (key, value) in shared { TestFairy.setAttribute(key, withValue: value) }

        // 5. Crashless start. Never installs a crash handler.
        TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")
        return true
    }
}

private final class SessionObserver: NSObject, TestFairySessionStateDelegate {
    func sessionStarted() {
        guard let client = BacktraceClient.shared else { return }
        var attributes = client.attributes
        attributes["sauce.mobile_beta.session_started"] = "true"
        attributes["sauce.mobile_beta.session_url"] = TestFairy.sessionUrl() ?? ""
        client.attributes = attributes
    }
    func sessionFailed() {
        guard let client = BacktraceClient.shared else { return }
        var attributes = client.attributes
        attributes["sauce.mobile_beta.session_started"] = "false"
        client.attributes = attributes
    }
}
```

</TabItem>

<TabItem value="react">

Pass the shared attributes as `userAttributes` in `BacktraceClient.initialize(...)`. `addSessionStateListener` returns a subscription. Call `remove()` on it if you tear the integration down.

Install `uuid` and `react-native-get-random-values` (`npm install uuid react-native-get-random-values`). Neither is a dependency of the Sauce Mobile Beta package. Import the polyfill before `uuid`.

```ts
import 'react-native-get-random-values'; // before uuid on React Native
import { v4 as uuidv4 } from 'uuid';
import { BacktraceClient } from '@backtrace/react-native';
import TestFairy from '@saucelabs/mobile-beta-react-native';

export function initializeObservability() {
  // 1. One lowercase UUID v4 per launch, before either SDK starts.
  const shared: Record<string, string> = {
    'sauce.correlation_id': uuidv4(),
    'sauce.sdk.coexistence_mode': 'backtrace_crash_owner',
    'sauce.environment': 'beta',
    'sauce.release': '<app-id>@<version>',
    'sauce.dist': '<build-number>',
  };

  // 2. Backtrace first: sole crash owner (JS errors, native crashes).
  const backtrace = BacktraceClient.initialize({
    url: 'https://submit.backtrace.io/<universe>/<backtrace-token>/json',
    userAttributes: shared,
    database: {
      enable: true,
      captureNativeCrashes: true,
      createDatabaseDirectory: true,
      path: `${BacktraceClient.applicationDataPath}/backtrace`,
    },
  });

  // 3. Mirror every session URL into Backtrace (overwritten on each start).
  const subscription = TestFairy.addSessionStateListener({
    onSessionStarted({ sessionUrl }) {
      backtrace.addAttribute({
        'sauce.mobile_beta.session_started': 'true',
        'sauce.mobile_beta.session_url': sessionUrl ?? '',
      });
    },
    onSessionFailed() {
      backtrace.addAttribute({ 'sauce.mobile_beta.session_started': 'false' });
    },
  });

  // 4. Same attributes before begin; the SDK keeps them for every session.
  for (const [key, value] of Object.entries(shared)) {
    TestFairy.setAttribute(key, value);
  }

  // 5. Crashless start. Never installs a crash handler.
  TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>');
  return { backtrace, subscription };
}
```

</TabItem>
</Tabs>

`beginWithoutCrashHandler` forces the `enableCrashReporter` option to `false` even if you pass `true`. Plain `begin(...)` is also crashless in the Sauce Mobile Beta SDK, but the explicit call documents the contract in your code and is the recommended entry point.

## Shared Attributes

Both SDKs receive the same keys and values. The values are copies, not references: nothing joins the two products server-side, so a report and a session match only when the app wrote the same value to both.

| Attribute                    | Value                                                     | Why                                                                                                  |
| :--------------------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `sauce.correlation_id`       | Lowercase UUID v4, generated once per app launch          | The join key. Search it in either console to find the matching report or session.                    |
| `sauce.sdk.coexistence_mode` | `backtrace_crash_owner`                                   | Documents which product owns crashes in this build; use it to filter mixed fleets.                   |
| `sauce.environment`          | `beta`, `production`, or your own environment name        | Separates beta traffic from other environments in both consoles.                                     |
| `sauce.release`              | `<appId>@<version>` (for example `com.example.app@1.2.3`) | Ties reports and sessions to a release without relying on platform-specific version fields.          |
| `sauce.dist`                 | Build number (`CFBundleVersion` or `versionCode`)         | Distinguishes builds of the same version.                                                            |
| `mad.distribution_id`        | Your Mobile App Distribution build id                     | Optional. Set it only when configured, so filters never see an empty string.                         |

The Backtrace side additionally receives two attributes the app writes on every Sauce Mobile Beta session start: `sauce.mobile_beta.session_url` (the recording's address) and `sauce.mobile_beta.session_started` (the strings `"true"` or `"false"`). A launch can produce several sessions (after `stop()` and a resume), so overwrite these values in the listener every time. Never set them once.

:::note Why one id per launch
A crash belongs to the launch it happened in. Generating `sauce.correlation_id` once per launch, before either SDK starts, guarantees that the report Backtrace writes at crash time and the session Sauce Mobile Beta recorded up to that moment carry the same value. For identity that spans launches, use `setUserId` with your real user id or a persisted identifier. Do not reuse the correlation id for that.
:::

Limits on the Sauce Mobile Beta side: 64 attributes per session, keys up to 64 characters, values up to 1000 characters on iOS and 1024 on Android. On iOS and Android, `setAttribute` returns `false` when a value is rejected. The React Native binding returns nothing. Set every shared attribute before `beginWithoutCrashHandler`. The SDK keeps them and attaches them to every session it starts, including sessions started after `stop()`.

:::caution
Do not use `setCorrelationId` or `identify` for the correlation id. Both are deprecated and write the user-identity field that `setUserId` writes (on Android only once per process), so they would collide with your real user id. Keep `setUserId` for the user and `setAttribute` for `sauce.correlation_id`. See [Identifying Your Users](/testfairy/sdk/identifying-users/) and [Session Attributes](/testfairy/sdk/session-attributes/).
:::

## Finding a Crash's Session

1. Index the attributes in Backtrace. Backtrace lets you filter and group on a custom attribute only after it has been indexed once per project under Project Settings > Attributes. Index `sauce.correlation_id` with the UUID format, and `sauce.mobile_beta.session_url` as a string. See [Indexing Attributes](/error-reporting/project-setup/attributes/).
2. From a crash report, copy the `sauce.correlation_id` value and search for it in the Sauce Labs Mobile App Distribution session list. The session recorded up to the crash carries the same value.
3. Or follow `sauce.mobile_beta.session_url` from the report directly to the recording. It points at the most recent session of that launch, which is the one running when the crash happened.

In the other direction, filter Backtrace on `sauce.correlation_id` with the value shown on a session's attributes to see whether that launch crashed.

## Crash APIs in the Crashless SDK

The legacy crash entry points remain in the API for source compatibility, but they no longer do anything. Remove them from your code when you migrate. Nothing breaks if they stay.

| API                                              | Legacy TestFairy SDK 1.x                    | Sauce Mobile Beta SDK                                                    |
| :----------------------------------------------- | :------------------------------------------ | :----------------------------------------------------------------------- |
| `installCrashHandler`                            | Installs the crash handler without a session | No-op (iOS and Android log that the call is ignored and return)          |
| `enableCrashHandler`                             | Enables crash capture before `begin`        | No-op (logged)                                                           |
| `disableCrashHandler`                            | Disables crash capture before `begin`       | No-op (already crashless)                                                |
| `didLastSessionCrash`                            | Whether the previous session crashed        | Always `false`; query Backtrace for crash history instead                |
| `enableCrashReporter` option (`TFSDKEnableCrashReporterKey`) | Turns crash capture on or off      | Forced to `false` by `beginWithoutCrashHandler`; `begin` is also crashless |
| React Native `isCrashReportingAvailable()`       | Not present in `react-native-testfairy` 2.x | Returns `false`; `getIntegrationInfo().coexistenceMode` is `backtrace_crash_owner` |

The [Crash Handler](/testfairy/sdk/tf-crash-handler/) page and the Crash Reporting section of [Begin with Options](/testfairy/sdk/options/) describe the legacy behavior for readers of the 1.x artifacts. Do not try to chain a TestFairy uncaught-exception handler with Backtrace's. The Sauce Mobile Beta SDK is built without one.

## Production Builds

Keep the Sauce Mobile Beta SDK out of store builds and let Backtrace stay. Backtrace is designed for production crash reporting. The Sauce Mobile Beta SDK records sessions for testers. On Android, declare the SDK with `debugImplementation` or in a beta flavor so release variants never package it. On iOS, gate the calls behind a build setting or a no-op wrapper. [Sauce Mobile Beta SDK in Production](/testfairy/sdk/tf-production/) describes the options, including the no-op SDK pattern. The shared attributes still go to Backtrace in production, which keeps `sauce.release` and `sauce.dist` consistent between beta and store reports.

## Reference Apps

This pattern is taken from the Sauce Labs demo apps and the React Native package's example app, all of which run the released SDKs:

- [My Demo App for iOS repository](https://github.com/saucelabs/my-demo-app-ios), release [2.3.0](https://github.com/saucelabs/my-demo-app-ios/releases/tag/2.3.0). See `My Demo App/AppDelegate.swift` and `My Demo App/Utilities/TestFairyWrapper.swift`.
- [My Demo App for Android repository](https://github.com/saucelabs/my-demo-app-android), release [2.3.0](https://github.com/saucelabs/my-demo-app-android/releases/tag/2.3.0). See `MyApplication.java` and `app/src/mobileBeta/.../SauceMobileBetaIntegration.java`, which also asserts after `beginWithoutCrashHandler` that Backtrace's uncaught-exception handler is still in place.
- React Native example app: [testfairy/react-native-testfairy](https://github.com/testfairy/react-native-testfairy), release [3.0.0-rc](https://github.com/testfairy/react-native-testfairy/releases/tag/3.0.0-rc). See `example/src/observability.ts`.

To try it, run a demo app with your own Backtrace submission URL and Sauce Mobile Beta token, then trigger a crash: More > Crash the App on iOS, or Crash app (debug) in the menu on Android. The process dies as a genuine crash. The Sauce Mobile Beta SDK does not intercept it. Relaunch the app: Backtrace uploads the pending report while Sauce Mobile Beta starts a new session. Open the report, copy its `sauce.correlation_id`, and search for it in the session list to land on the recording of the launch that crashed.
