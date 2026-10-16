---
id: overview
title: Migrating from the TestFairy SDK
sidebar_label: Overview
description: Learn what changes when you move an app from the TestFairy SDK 1.x to the Sauce Mobile Beta SDK, and find the steps for each platform.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceYellow">Beta release</span></p>

:::info Beta release
The Sauce Mobile Beta SDK is in beta. The current release candidates are 2.2.0-rc for iOS and Android and 3.0.0-rc for React Native.

- Final: the artifact names and the API.
- Can still change before general availability: the version numbers, the iOS package URL, and this documentation.

Share feedback with your Sauce Labs representative.
:::

This guide is for developers whose app already ships the TestFairy SDK 1.x (on React Native, the `react-native-testfairy` 2.x package) and who want to move it to the Sauce Mobile Beta SDK. If you are adding the SDK to an app for the first time, start with [Adding the Sauce Mobile Beta SDK to your App](/app-distribution/sdk/adding-tf-sdk) instead.

The migration is a dependency swap plus a small set of code changes. The pages in this section walk through it step by step for each platform:

- [Migrating an iOS App from the TestFairy SDK](/app-distribution/sdk/migration/ios)
- [Migrating an Android App from the TestFairy SDK](/app-distribution/sdk/migration/android)
- [Migrating a React Native App from the TestFairy SDK](/app-distribution/sdk/migration/react-native)

## What Stays the Same

The runtime API keeps its TestFairy names, so your existing code keeps compiling:

- iOS: the module and class are `TestFairy`. You keep `import TestFairy` in Swift and `#import "TestFairy.h"` in Objective-C.
- Android: the Java package is `com.testfairy`. You keep `import com.testfairy.TestFairy;` and the `TestFairy.*` calls.
- React Native: the default export is `TestFairy`, the native module is `TestFairyBridge`, and the JavaScript API is the same. Only the package name changes.
- `begin(...)` keeps compiling and starts a session. It no longer installs a crash handler.
- Session recording, feedback, remote logging, events, user identification, and session attributes work as before.

## What Changes

| Area | TestFairy SDK 1.x | Sauce Mobile Beta SDK |
| :--- | :--- | :--- |
| iOS artifact | CocoaPods `pod 'TestFairy'`, Carthage binary from `https://app.testfairy.com/sdk/ios/carthage.json`, or a manually added `TestFairySDK.framework` | Swift package `https://github.com/testfairy/testfairy-ios-sdk-swift-package`, product `SauceMobileBeta`, module `TestFairy`, exact version `2.2.0-rc`. The CocoaPods pod `SauceMobileBeta` is not published yet. |
| Android artifact | `com.testfairy:testfairy-android-sdk` and `com.testfairy:testfairy-android-ndk` | `com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc` from `https://maven.testfairy.com` |
| React Native package | `react-native-testfairy` 2.x | `@saucelabs/mobile-beta-react-native` 3.0.0-rc, installed from the GitHub Release tarball until npm publishing is on |
| Entry point | `begin(...)`, often preceded by `enableCrashHandler` or `disableCrashHandler` | `beginWithoutCrashHandler(...)`. It starts a session, never installs a crash handler, and forces the `enableCrashReporter` option (`TFSDKEnableCrashReporterKey` on iOS) to false even if you pass true. |
| Crash reporting | Captured by the SDK's own crash handler and shown in Sauce Labs Mobile App Distribution | Provided by Backtrace (Sauce Labs Error Reporting). An app on the Sauce Mobile Beta SDK sends no crash reports to Sauce Labs Mobile App Distribution, so no crash reports or dSYM symbolication appear there for it. |
| Crash history | `didLastSessionCrash` | Always `false`. Use Backtrace for crash history. |
| Minimum Android version | API level 16 | API level 16 for the SDK alone, API level 21 when Backtrace is in the same app |

## One Crash Owner

A process has one owner of its signal and exception handlers. The TestFairy SDK 1.x installed its own crash handler, so it could not share an app with Backtrace: whichever SDK initialized last took over, and crashes were lost or misattributed. The Sauce Mobile Beta SDK does not install a crash handler at any layer, on any platform, so Backtrace is always the sole crash owner.

Two rules follow from this:

- Never mix the two artifact families. Both contain the same `TestFairy` classes (`com.testfairy` on Android, the `TestFairy` module on iOS, the `TestFairyBridge` module in React Native), so a build that contains both fails with duplicate class, duplicate module, or duplicate symbol errors, and the TestFairy SDK 1.x artifact can bring a crash handler back.
- Never run the TestFairy SDK 1.x beside Backtrace. The two compete for the same crash handlers.

Remove every TestFairy SDK 1.x artifact first, then add the Sauce Mobile Beta artifact, then add Backtrace. The platform pages name every artifact and install channel to remove.

## Crash API Behavior

The crash entry points remain in the API, so code that calls them keeps compiling, but they do nothing. Delete them from your code when you migrate. Nothing breaks if they stay.

| API | TestFairy SDK 1.x behavior | Sauce Mobile Beta SDK behavior |
| :--- | :--- | :--- |
| `installCrashHandler` | Installs the crash handler without a session | No-op. Android logs a warning to logcat, and iOS records the message in the SDK's remote log. No session is started. |
| `enableCrashHandler` | Enables crash capture before `begin` | No-op (logged) |
| `disableCrashHandler` | Disables crash capture before `begin` | No-op (the SDK never installs a crash handler) |
| `didLastSessionCrash` | Whether the previous session crashed | Always `false`. Query Backtrace for crash history instead. |
| `enableCrashReporter` option (`TFSDKEnableCrashReporterKey` on iOS) | Turns crash capture on or off | Forced to `false` by `beginWithoutCrashHandler`. `begin` also starts a session without a crash handler. |
| React Native `isCrashReportingAvailable()` | Not present in `react-native-testfairy` 2.x | Returns `false` |
| React Native `getIntegrationInfo()` | Not present in `react-native-testfairy` 2.x | Returns `{ sdkName, crashReportingAvailable: false, coexistenceMode: 'backtrace_crash_owner' }` |

Do not try to chain a TestFairy uncaught-exception handler with Backtrace's. The Sauce Mobile Beta SDK is built without one.

## Deprecated Identity Methods

`setCorrelationId` and `identify` are deprecated. They write the same user-identity field that `setUserId` writes (on Android, only the first call per session takes effect), so they overwrite, or are overwritten by, your real user ID.

- Replace `identify(id, traits)` with `setUserId(id)` plus one `setAttribute` call per trait.
- Do not use `setCorrelationId` or `identify` for the Backtrace correlation id. The value that links a Backtrace crash report to a Sauce Mobile Beta session is the session attribute `sauce.correlation_id`, set with `setAttribute` before the session starts.

See [Identifying Your Users](/app-distribution/sdk/identifying-users) and [Session Attributes](/app-distribution/sdk/session-attributes).

## Migration Checklist

Each platform page covers the same stages with platform-specific commands and a verification step for each stage:

1. Remove the TestFairy SDK 1.x artifacts from every install channel.
2. Add the Sauce Mobile Beta artifact and pin the exact version.
3. Update the initialization to `beginWithoutCrashHandler`.
4. Delete the crash-handler calls and set up Backtrace for crash reporting.
5. Point symbol uploads (dSYMs, ProGuard mappings, native symbols) at Backtrace.
6. Add the correlation attributes so a crash report and its session can be matched.
7. Validate before release: inspect the dependency graph, force a crash, and check a feedback session.

Follow the page for your platform:

- [iOS](/app-distribution/sdk/migration/ios)
- [Android](/app-distribution/sdk/migration/android)
- [React Native](/app-distribution/sdk/migration/react-native) (also applies to Expo projects with prebuild)

## After You Migrate

Backtrace owns crashes and the Sauce Mobile Beta SDK owns beta sessions. To match a crash report with the session recorded up to the crash, both SDKs must carry the same `sauce.correlation_id` attribute, together with the other reserved attributes. The initialization order, the attribute contract, and complete examples for every platform are in [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence) and [Reserved Attributes for Backtrace Coexistence](/app-distribution/sdk/session-attributes#reserved-attributes-for-backtrace-coexistence).

Keep the Sauce Mobile Beta SDK out of store builds and let Backtrace stay. See [Sauce Mobile Beta SDK in Production](/app-distribution/sdk/tf-production).
