---
id: react-native
title: Migrating a React Native App from the TestFairy SDK
sidebar_label: React Native
description: Move a React Native app from react-native-testfairy 2.x to @saucelabs/mobile-beta-react-native.
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

Follow these steps to move a React Native app from the `react-native-testfairy` 2.x package to `@saucelabs/mobile-beta-react-native` 3.0.0-rc, the Sauce Mobile Beta SDK for React Native. Read [Migrating from the TestFairy SDK](/app-distribution/sdk/migration/overview) first for what changes and why. For the full install reference of the new package, see [Integrating the React Native SDK](/app-distribution/sdk/react-native/react-native) and, for Expo projects with prebuild, [Expo (with prebuild)](/app-distribution/sdk/react-native/expo).

The JavaScript API is the same: the default export is `TestFairy` and the native module is `TestFairyBridge`. The migration is a package swap, one import change, and one initialization change. The package bundles the native Sauce Mobile Beta SDKs 2.2.0-rc for iOS and Android, so you do not add the native SDKs yourself.

Requirements: React Native 0.71 or later, React 18 or later, Node.js 18 or later, iOS 12.4 or later (the React Native 0.71 minimum; the package's podspec requires iOS 12.0), and Android API level 21 or later (required by React Native 0.71 and by Backtrace (Sauce Labs Error Reporting)).

:::caution Order matters
The two packages are mutually exclusive. `react-native-testfairy` 2.x exposes the same `TestFairyBridge` native module and the same `com.testfairy` native classes as `@saucelabs/mobile-beta-react-native`, so a project that contains both fails with duplicate module and duplicate class errors. `react-native-testfairy` also installs its own crash handler, so never run it beside Backtrace: a process has one owner of its signal and exception handlers.
:::

## 1. Remove the TestFairy SDK Artifacts

Uninstall the package:

```bash
npm uninstall react-native-testfairy
```

Then remove the native pieces that an earlier integration may have added by hand:

- iOS: a `pod 'TestFairy'` line in `ios/Podfile`, and a manually linked `TestFairySDK.framework` or `libTestFairy.a` in the Xcode project. The `React-TestFairy` pod and `libTestFairy.a` that the old package bundled go away with the uninstall.
- Android: `com.testfairy:testfairy-android-sdk` and `com.testfairy:testfairy-android-ndk` in any `build.gradle`.
- Android: a manually registered `TestFairyPackage` in `MainApplication` (the `new TestFairyPackage()` entry in the packages list and its `import com.testfairy.react.TestFairyPackage;` line). React Native 0.60 and later autolink the package, so no manual registration is needed.

**Verify.** `npm ls react-native-testfairy` reports `(empty)` under your project name, and the grep prints nothing:

```bash
npm ls react-native-testfairy
grep -rn "react-native-testfairy\|TestFairyPackage\|com.testfairy:testfairy" ios/Podfile android --include="*.gradle" --include="*.java" --include="*.kt" --include="Podfile" --exclude-dir=build --exclude-dir=.gradle
```

## 2. Add the Sauce Mobile Beta Package

Until npm publishing is switched on, install the package from the tarball attached to the [GitHub Release](https://github.com/testfairy/react-native-testfairy/releases/tag/3.0.0-rc). It installs into `node_modules/@saucelabs/mobile-beta-react-native` and autolinks exactly like a registry install:

```bash
npm install https://github.com/testfairy/react-native-testfairy/releases/download/3.0.0-rc/saucelabs-mobile-beta-react-native-3.0.0-rc.tgz
```

:::note
After the package is on npm, install it with `npm install @saucelabs/mobile-beta-react-native` instead of the release asset URL. The package name, version scheme, and API stay the same.
:::

**Verify.** `package.json` lists `@saucelabs/mobile-beta-react-native`, and `npm ls @saucelabs/mobile-beta-react-native` prints version `3.0.0-rc`.

## 3. Update the Import and the Initialization

Update the import everywhere the old package was imported. The runtime class is still `TestFairy`, so no other source changes are needed:

```js
// Before
import TestFairy from 'react-native-testfairy';
// After
import TestFairy from '@saucelabs/mobile-beta-react-native';
```

Replace the old initialization, `disableCrashHandler()` followed by `begin(token)`, with `beginWithoutCrashHandler(token)`. It starts a session, never installs a crash handler, and forces the `enableCrashReporter` option to `false` even if you pass `true`. It accepts the same optional second argument as `begin` for session options. Call it once per app launch from your root component, with the app token from the [user preferences](https://app.testfairy.com/settings/) on your Sauce Labs Mobile App Distribution account:

```js
import React, { useEffect } from 'react';
import TestFairy from '@saucelabs/mobile-beta-react-native';

export default function App() {
  useEffect(() => {
    // Before:
    // TestFairy.disableCrashHandler();
    // TestFairy.begin('<app-token>');

    // After. Initialize Backtrace before this line when it is part of the app.
    TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>');
  }, []);

  return <YourApp />; // your root component tree
}
```

**Verify.** The following command prints nothing:

```bash
grep -rn "from 'react-native-testfairy'\|require('react-native-testfairy')" --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" --exclude-dir=node_modules .
```

## 4. Delete the Crash Handler Calls and Set Up Backtrace

The crash entry points still exist in the API, but they do nothing in the Sauce Mobile Beta SDK. Delete these calls from your code:

```js
// Delete these calls. They are no-ops in the Sauce Mobile Beta SDK.
TestFairy.enableCrashHandler();
TestFairy.disableCrashHandler();
```

Two new calls describe the behavior: `isCrashReportingAvailable()` returns `false`, and `getIntegrationInfo()` returns `{ sdkName, crashReportingAvailable: false, coexistenceMode: 'backtrace_crash_owner' }`.

Crash reporting is provided by Backtrace, which owns JavaScript unhandled errors and unhandled promise rejections, iOS native crashes, and Android JVM and native crashes. Add `@backtrace/react-native` by following the [Backtrace React Native integration guide](/error-reporting/language-integrations/react-native/), and initialize it before `beginWithoutCrashHandler` so that it is the only crash owner. New to Backtrace? Start with [Getting Started](/error-reporting/getting-started/).

**Verify.** The following command prints nothing:

```bash
grep -rn "enableCrashHandler\|disableCrashHandler" --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" --exclude-dir=node_modules --exclude-dir=ios --exclude-dir=android .
```

## 5. Update the Native Projects

**iOS.** The package's podspec vendors the `TestFairy` xcframework, so you do not add a pod for the native SDK yourself. Reinstall the pods from a clean state:

```bash
cd ios && rm -rf Pods Podfile.lock && pod install
```

Run `pod install` again after every install or upgrade of the package.

**Android.** The package pins the native artifact `com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc` and ships it in a local Maven repository (`local-native/android/maven`), which its `build.gradle` registers on every Gradle project together with `https://maven.testfairy.com` as a fallback. A standard React Native project needs no repository change. If your `android/settings.gradle` (or `settings.gradle.kts`) restricts repositories with `dependencyResolutionManagement` and `RepositoriesMode.FAIL_ON_PROJECT_REPOS`, declare the fallback repository there as well. The `content` filter is optional and limits the repository to the Sauce Mobile Beta group:

<Tabs
groupId="gradle"
defaultValue="groovy"
values={[
{label: 'Groovy', value: 'groovy'},
{label: 'Kotlin DSL', value: 'kotlin'},
]}>

<TabItem value="groovy">

```groovy
// android/settings.gradle
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()

        maven {
            url "https://maven.testfairy.com"
            content { includeGroup "com.saucelabs.mobilebeta" }
        }
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin
// android/settings.gradle.kts
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()

        maven {
            url = uri("https://maven.testfairy.com")
            content { includeGroup("com.saucelabs.mobilebeta") }
        }
    }
}
```

</TabItem>
</Tabs>

The native artifact bundles its consumer ProGuard rules (`-keep class com.testfairy.** { *; }` and `-dontwarn com.testfairy.**`), so existing keep rules remain valid. When Backtrace is in the app, set `minSdk 21`.

**Clean the native build directories** before rebuilding, so that no output from the old package survives:

```bash
rm -rf ios/build android/.gradle android/build android/app/build
```

:::note Expo (with prebuild)
The package contains native code, so it does not run in Expo Go. Your project needs generated `ios` and `android` directories (`npx expo prebuild`). `npx expo prebuild --clean` regenerates the native directories, so re-apply the Maven repository change (or apply it with a config plugin) whenever you regenerate them. See [Expo (with prebuild)](/app-distribution/sdk/react-native/expo).
:::

**Verify.** `ios/Podfile.lock` lists neither `React-TestFairy` nor the `TestFairy` pod it depended on, and the Android dependency graph lists nothing from the `com.testfairy` group:

```bash
grep -n "TestFairy" ios/Podfile.lock
cd android && ./gradlew :app:dependencies --configuration debugRuntimeClasspath | grep testfairy
```

## 6. Add the Correlation Attributes

To match a Backtrace crash report with the session recorded up to the crash, both SDKs must carry the same `sauce.correlation_id` attribute: one lowercase UUID v4 generated per app launch before either SDK starts, together with the other reserved attributes. Backtrace receives them as `userAttributes` in `BacktraceClient.initialize(...)`, and the Sauce Mobile Beta SDK through `TestFairy.setAttribute(key, value)` before `beginWithoutCrashHandler`. A session state listener registered with `TestFairy.addSessionStateListener(...)` before the start copies the session URL into Backtrace on every session start.

The contract is defined once, in [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence), which has the initialization order and a complete React Native example, and [Reserved Attributes for Backtrace Coexistence](/app-distribution/sdk/session-attributes#reserved-attributes-for-backtrace-coexistence). A working setup is in the package repository at [example/src/observability.ts](https://github.com/testfairy/react-native-testfairy/blob/3.0.0-rc/example/src/observability.ts).

Do not use the deprecated `setCorrelationId(...)` or `identify(...)` methods for the correlation id. They write the user-identity field that `setUserId` writes. See [Identifying Your Users](/app-distribution/sdk/identifying-users).

**Verify.** A session's attributes in Sauce Labs Mobile App Distribution show `sauce.correlation_id`, and a Backtrace report from the same launch shows the same value.

## 7. Validate Before Release

1. `npm ls react-native-testfairy` reports `(empty)`, `ios/Podfile.lock` lists neither `React-TestFairy` nor `TestFairy`, and the Android dependency graph lists nothing from the `com.testfairy` group.
2. A clean build of both platforms succeeds. A duplicate `TestFairyBridge` module error, a duplicate symbol error for `TestFairy`, or a `Duplicate class` error for `com.testfairy` classes means the old package or an old native artifact is still present. Go back to step 1 and step 5.
3. Run a debug build with both SDKs initialized and force a crash, for example an unhandled JavaScript error and a native crash. The process dies as a genuine crash. Relaunch the app: the crashes appear in Backtrace only, and the Sauce Mobile Beta SDK starts a new session.
4. Submit feedback from the app and confirm that the session shows `sauce.correlation_id` in its attributes, with the same value as the Backtrace report from that launch.
5. Confirm that store builds do not contain the Sauce Mobile Beta SDK while Backtrace stays. See [Sauce Mobile Beta SDK in Production](/app-distribution/sdk/tf-production).

## Troubleshooting

**Duplicate `TestFairyBridge` module, duplicate symbols for `TestFairy`, or `Duplicate class` errors for `com.testfairy`.** `react-native-testfairy` or one of the old native artifacts is still present. Run the checks from step 1 and step 5, clean the native build directories, and rebuild.

**The app crashes at startup with `Native module TestFairyModule tried to override TestFairyModule`.** A manual `new TestFairyPackage()` registration from the old integration is still in `MainApplication`. The new package autolinks and also provides `com.testfairy.react.TestFairyPackage`, so the module is registered twice. Remove the manual entry and its import.

**`Could not find com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc`.** Confirm that `node_modules/@saucelabs/mobile-beta-react-native/local-native/android/maven` exists, and reinstall the package if it does not. If `android/settings.gradle` sets `RepositoriesMode.FAIL_ON_PROJECT_REPOS`, Gradle rejects the repositories the package registers: declare `https://maven.testfairy.com` in `dependencyResolutionManagement` as shown in step 5. On Expo, re-check after every `npx expo prebuild --clean`.

**The iOS build still links the old SDK after the uninstall.** Run `cd ios && rm -rf Pods Podfile.lock && pod install` and delete `ios/build`.

**A crash shows up nowhere.** The Sauce Mobile Beta SDK does not report crashes, and `isCrashReportingAvailable()` returns `false` by design. Make sure Backtrace is initialized before `beginWithoutCrashHandler` and that its submission URL is correct. See the [Backtrace React Native integration guide](/error-reporting/language-integrations/react-native/).
