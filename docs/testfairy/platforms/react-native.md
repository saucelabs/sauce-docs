---
id: react-native
title: React Native
sidebar_label: React Native
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

Sauce Labs Mobile App Distribution lets you distribute beta builds to testers and see how they use your app. The Sauce Mobile Beta SDK (formerly the TestFairy SDK) for React Native, `@saucelabs/mobile-beta-react-native`, adds session recording, tester feedback, screenshots, remote logging, and session events to your React Native app, so you can identify and debug issues more effectively and optimize the user experience.

The package is a bridge to the native Sauce Mobile Beta SDKs for iOS and Android. It replaces the legacy `react-native-testfairy` package. The JavaScript API is unchanged, so migrating is a package swap and one import change.

## Crash Ownership

The Sauce Mobile Beta SDK is crashless: neither the JavaScript layer, the native bridges, nor the bundled native SDKs install a crash handler. Crash reporting is provided by Backtrace, the Sauce Labs Error Reporting product, which owns JavaScript unhandled errors and unhandled promise rejections, iOS native crashes, and Android JVM and native crashes. The legacy crash APIs (`enableCrashHandler()` and `disableCrashHandler()`) remain callable for source compatibility but are no-ops.

Start the SDK with `beginWithoutCrashHandler(...)`. It forces the `enableCrashReporter` option to `false` even if you pass `true`. Plain `begin(...)` is also crashless in this package, but the explicit call documents the coexistence contract. See [Using With Backtrace](#using-with-backtrace) for the full setup.

:::caution
Never install a legacy TestFairy artifact together with the Sauce Mobile Beta SDK or together with Backtrace. The legacy `react-native-testfairy` package (2.x) installs its own crash handler, which competes with Backtrace, and it exposes the same `TestFairyBridge` native module and the same `com.testfairy` native classes as this package, which causes duplicate-module and duplicate-class failures. The same applies to the legacy native artifacts: the `TestFairy` pod, a manually linked `TestFairySDK.framework` or `libTestFairy.a`, `com.testfairy:testfairy-android-sdk`, and `com.testfairy:testfairy-android-ndk`.
:::

## Requirements

- React Native 0.71 or later and React 18 or later (the package's peer dependencies). Node.js 18 or later is required to install it. The package autolinks, so no manual native linking is needed.
- iOS 11 or later.
- Android API level 16 or later for the SDK on its own. When you use it with Backtrace, use Backtrace's minimum, API level 21.

## Installation

The current release is `@saucelabs/mobile-beta-react-native` 3.0.0-rc, which bundles the crashless native SDKs 2.2.0-rc for iOS and Android. Until npm publishing is switched on, install the package from the tarball attached to the [GitHub Release](https://github.com/testfairy/react-native-testfairy/releases/tag/3.0.0-rc):

```bash
npm install https://github.com/testfairy/react-native-testfairy/releases/download/3.0.0-rc/saucelabs-mobile-beta-react-native-3.0.0-rc.tgz
cd ios && pod install
```

The package installs into `node_modules/@saucelabs/mobile-beta-react-native` and autolinks exactly like a registry install.

:::note
Publishing to the npm registry follows. After the package is on npm, install it with `npm install @saucelabs/mobile-beta-react-native` instead of the release asset URL. The package name, version scheme, and API stay the same. GA versions ship with the same coordinates.
:::

### iOS

Run `pod install` in your `ios` directory after every install or upgrade of the package. The package's podspec vendors the crashless `TestFairy` xcframework, so you do not add a pod for the native SDK yourself. Do not add `pod 'TestFairy'` to your Podfile, and remove it if a previous integration added it.

### Android

The package depends on the native artifact `com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc`, which is served from the Sauce Mobile Beta Maven repository at `https://maven.testfairy.com`. Declare that repository in `dependencyResolutionManagement` in your `settings.gradle` (or `settings.gradle.kts`):

<Tabs
groupId="gradle"
defaultValue="kotlin"
values={[
{label: 'Kotlin DSL', value: 'kotlin'},
{label: 'Groovy', value: 'groovy'},
]}>

<TabItem value="kotlin">

```kotlin
// settings.gradle.kts
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

<TabItem value="groovy">

```groovy
// settings.gradle
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
</Tabs>

The `content` filter is optional. It limits the repository to the Sauce Mobile Beta group. Do not use version wildcards for pre-release versions. If your app declares `com.testfairy:testfairy-android-sdk` or `com.testfairy:testfairy-android-ndk` anywhere, remove those dependencies first. The native artifact bundles its consumer ProGuard rules (`-keep class com.testfairy.** { *; }` and `-dontwarn com.testfairy.**`), so existing keep rules remain valid.

## Migrating From `react-native-testfairy`

The legacy `react-native-testfairy` package and `@saucelabs/mobile-beta-react-native` are mutually exclusive. Uninstall the legacy package first:

```bash
npm uninstall react-native-testfairy
npm install https://github.com/testfairy/react-native-testfairy/releases/download/3.0.0-rc/saucelabs-mobile-beta-react-native-3.0.0-rc.tgz
cd ios && rm -rf Pods Podfile.lock && pod install
```

Then:

1. Update the import. The runtime class is still `TestFairy`, so no other source changes are needed:

   ```js
   // Before
   import TestFairy from 'react-native-testfairy';
   // After
   import TestFairy from '@saucelabs/mobile-beta-react-native';
   ```

2. Replace the legacy initialization (`disableCrashHandler()` followed by `begin(token)`) with `beginWithoutCrashHandler(token)`.
3. Add the Maven repository from [Android](#android) and remove any legacy `com.testfairy` Gradle dependencies and any `pod 'TestFairy'` line.
4. Remove manually registered `TestFairyPackage` instances from `MainApplication` (React Native 0.60 and later autolink the package), and clean the native build directories (`ios/build`, `android/.gradle`, `android/build`, `android/app/build`) before rebuilding.

## Usage

After installing the package, enable session recording in your app. You need your app token, which you can get from the [user preferences](https://app.testfairy.com/settings/) on your Sauce Labs Mobile App Distribution account.

1. Obtain your app token from the [user preferences](https://app.testfairy.com/settings/) page.
2. Import the SDK in your root component (for example, `App.js` or `App.tsx`) and call `beginWithoutCrashHandler` once per app launch. In a function component, do this in a `useEffect` with an empty dependency array:

```js
import React, { useEffect } from 'react';
import TestFairy from '@saucelabs/mobile-beta-react-native';

export default function App() {
  useEffect(() => {
    TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>');
  }, []);

  return <YourApp />; // your root component tree
}
```

`beginWithoutCrashHandler` accepts the same optional second argument as `begin` for session options. Whatever you pass, `enableCrashReporter` is forced to `false`. Call `setUserId` and `setAttribute` before starting the session so the SDK attaches them to every session it starts. See [Identifying Users](/testfairy/sdk/identifying-users/) and [Session Attributes](/testfairy/sdk/session-attributes/).

## Using With Backtrace

Sauce Mobile Beta and [Backtrace](/error-reporting/getting-started/) run side by side in one app: initialize Backtrace first, so it is the sole crash owner, then start Sauce Mobile Beta with `beginWithoutCrashHandler`. Both SDKs receive the same shared attributes (`sauce.correlation_id`, a lowercase UUID v4 generated once per app launch, plus `sauce.sdk.coexistence_mode`, `sauce.environment`, `sauce.release`, and `sauce.dist`): Backtrace as `userAttributes`, Sauce Mobile Beta through `TestFairy.setAttribute(key, value)` before `beginWithoutCrashHandler`. A session state listener registered before the start overwrites the Backtrace attributes `sauce.mobile_beta.session_url` and `sauce.mobile_beta.session_started` on every session start, because one launch can produce several sessions.

React Native specifics:

- Install the UUID generator and its polyfill with `npm install uuid react-native-get-random-values`. Neither is a dependency of the package. Import `react-native-get-random-values` before `uuid`.
- The shared attributes go into `BacktraceClient.initialize(...)` as `userAttributes`.
- `TestFairy.addSessionStateListener(...)` returns a subscription. Call `remove()` on it if you tear the integration down.
- Index `sauce.correlation_id` in Backtrace (Project Settings > Attributes, UUID format) before you filter or group on it. See [Attributes](/error-reporting/project-setup/attributes/).

```ts
import 'react-native-get-random-values'; // must come before uuid on React Native
import { v4 as uuidv4 } from 'uuid';
import { BacktraceClient } from '@backtrace/react-native';
import TestFairy from '@saucelabs/mobile-beta-react-native';

const shared: Record<string, string> = {
  'sauce.correlation_id': uuidv4(), // one lowercase UUID v4 per app launch
  'sauce.sdk.coexistence_mode': 'backtrace_crash_owner',
  'sauce.environment': 'beta',
  'sauce.release': '<app-id>@<version>',
  'sauce.dist': '<build-number>',
};
const backtrace = BacktraceClient.initialize({ // 1. Backtrace first: sole crash owner
  url: 'https://submit.backtrace.io/<universe>/<backtrace-token>/json',
  userAttributes: shared, // add your database options (see the Backtrace guide)
});
const subscription = TestFairy.addSessionStateListener({ // 2. before the start; runs on every session start
  onSessionStarted({ sessionUrl }) {
    backtrace.addAttribute({ 'sauce.mobile_beta.session_started': 'true', 'sauce.mobile_beta.session_url': sessionUrl ?? '' });
  },
  onSessionFailed() { backtrace.addAttribute({ 'sauce.mobile_beta.session_started': 'false' }); },
});
Object.entries(shared).forEach(([key, value]) => TestFairy.setAttribute(key, value)); // 3. same attributes
TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>'); // 4. crashless start
```

For the complete contract, including the iOS and Android specifics, see [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/). For the Backtrace side of the setup, see the [Backtrace React Native integration guide](/error-reporting/language-integrations/react-native/). A working setup that shares all attributes is in the package repository at [example/src/observability.ts](https://github.com/testfairy/react-native-testfairy/blob/3.0.0-rc/example/src/observability.ts).

## API Notes

The JavaScript API stays TestFairy-compatible: the default export is `TestFairy`, the native module is `TestFairyBridge`, and the Android runtime package is `com.testfairy`. Only the packaging names changed. Differences from the legacy package:

- `beginWithoutCrashHandler(appToken, options?)` is the recommended entry point. `begin(appToken, options?)` is also crashless. Both force `enableCrashReporter` to `false`.
- `enableCrashHandler()` and `disableCrashHandler()` are no-ops kept for source compatibility. Use Backtrace for crash reporting and crash testing.
- `isCrashReportingAvailable()` returns `false`.
- `pushFeedbackController()` shows the feedback form for the running session. `showFeedbackForm(appToken, takeScreenshot?)` also works without a session. See [Submitting User Feedback](/testfairy/sdk/user-feedback/).
- `getIntegrationInfo()` returns `{ sdkName, crashReportingAvailable: false, coexistenceMode: 'backtrace_crash_owner' }`.
- `setAttribute(key, value)` before `beginWithoutCrashHandler` applies to every session the SDK starts, including sessions started after `stop()`. Limits: 64 attributes, keys up to 64 characters, values up to 1000 characters on iOS and 1024 on Android.
- `setUserId(id)` identifies the tester. `setCorrelationId(...)` and `identify(...)` are deprecated. They write the same user-identity field.
- `addSessionStateListener(listener)` returns a subscription with `remove()`. The listener receives `onSessionStarted({ sessionUrl })`, `onSessionFailed()`, `onSessionLengthReached({ secondsFromStartSession })`, `onSessionStopped()`, and the auto-update events.
- `getSessionUrl()` returns a promise that resolves to the session URL (or `null` before the session is accepted). `getVersion()` returns a promise with the native SDK version.
