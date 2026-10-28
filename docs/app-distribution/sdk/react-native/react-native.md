---
id: react-native
title: Integrating the React Native SDK
sidebar_label: Integrating React Native SDK
description: Add the Sauce Mobile Beta SDK for React Native to your React Native app.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

:::info Beta release
The Sauce Mobile Beta SDK is in beta. The artifact names and the API are final; this documentation can still change. Share feedback with your Sauce Labs representative.
:::

Sauce Labs Mobile App Distribution lets you distribute beta builds to testers and see how they use your app. The Sauce Mobile Beta SDK for React Native, `@saucelabs/mobile-beta-react-native`, adds session recording, tester feedback, screenshots, remote logging, and session events to your React Native app, so you can identify and debug issues more effectively and optimize the user experience.

The package is a bridge to the native Sauce Mobile Beta SDKs for iOS and Android.

## Crash Ownership

The SDK does not install a crash handler: neither the JavaScript layer, the native bridges, nor the bundled native SDKs do. Crash reporting is provided by Backtrace (Sauce Labs Error Reporting), which owns JavaScript unhandled errors and unhandled promise rejections, iOS native crashes, and Android JVM and native crashes. The two SDKs are designed to run in the same app.

Start the SDK with `beginWithoutCrashHandler(...)`. It starts a session and never installs a crash handler, and it forces the `enableCrashReporter` option to `false` even if you pass `true`. `begin(...)` also starts a session without a crash handler. Use `beginWithoutCrashHandler` to make the intent explicit in your code. See [Using With Backtrace](#using-with-backtrace) for the full setup.

## Requirements

- React Native 0.71 or later and React 18 or later (the package's peer dependencies). Node.js 18 or later is required to install it. The package autolinks, so no manual native linking is needed.
- iOS 13 or later. The vendored native SDK and the package's podspec require iOS 13.0.
- Android API level 21 or later, required by React Native 0.71 and by Backtrace.

## Installation

The current release is `@saucelabs/mobile-beta-react-native` 3.1.0, which bundles the native SDKs 2.3.0 for iOS and Android. Until npm publishing is switched on, install the package from the tarball attached to the [GitHub Release](https://github.com/testfairy/react-native-testfairy/releases/tag/3.1.0):

```bash
npm install https://github.com/testfairy/react-native-testfairy/releases/download/3.1.0/saucelabs-mobile-beta-react-native-3.1.0.tgz
cd ios && pod install
```

The package installs into `node_modules/@saucelabs/mobile-beta-react-native` and autolinks exactly like a registry install.

:::note
Publishing to the npm registry follows. After the package is on npm, install it with `npm install @saucelabs/mobile-beta-react-native` instead of the release asset URL. The package name, version scheme, and API are the same for both install methods.
:::

### iOS

Run `pod install` in your `ios` directory after every install or upgrade of the package. The package's podspec vendors the `TestFairy` xcframework, so you do not add a pod for the native SDK yourself.

### Android

The package pins the native artifact `com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.3.0` and ships it in a local Maven repository, which its `build.gradle` registers on every Gradle project together with `https://maven.testfairy.com` as a fallback. A standard React Native project needs no repository change. If your `settings.gradle` (or `settings.gradle.kts`) restricts repositories with `dependencyResolutionManagement` and `RepositoriesMode.FAIL_ON_PROJECT_REPOS`, declare the fallback repository there as well:

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

The `content` filter is optional. It limits the repository to the Sauce Mobile Beta group. The native artifact bundles its consumer ProGuard rules (`-keep class com.testfairy.** { *; }` and `-dontwarn com.testfairy.**`), so you do not need to add keep rules for it.

## Usage

After installing the package, enable session recording in your app. You need your app token and your server endpoint.

Both values are in **Organization Settings > SDK Settings** on your Mobile App Distribution dashboard, under the organization that owns the app. Only Account Owners and Org Admins can open that page. See [Organization Settings](/app-distribution/settings/organization/#sdk-settings).

- **SDK App Token**: the organization-wide token your app starts sessions with. Regenerating it invalidates the previous token for every build that still carries it.
- **Server Endpoint**: the URL the SDK sends session data to, in the form `https://<host>/services/`. It is specific to your region or private instance, so copy it exactly. If it reads **Not configured**, contact Sauce Labs support before you ship a build.

Pass the endpoint to `setServerEndpoint` before `beginWithoutCrashHandler`. The SDK's built-in default server is no longer in service: an app that skips this call starts no sessions.

1. Import the SDK in your root component (for example, `App.js` or `App.tsx`).
2. Call `setServerEndpoint` and then `beginWithoutCrashHandler` once per app launch. In a function component, do this in a `useEffect` with an empty dependency array:

```js
import React, { useEffect } from 'react';
import TestFairy from '@saucelabs/mobile-beta-react-native';

export default function App() {
  useEffect(() => {
    TestFairy.setServerEndpoint('<server-endpoint>');
    TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>');
  }, []);

  return <YourApp />; // your root component tree
}
```

`beginWithoutCrashHandler` accepts the same optional second argument as `begin` for session options. Whatever you pass, `enableCrashReporter` is forced to `false`. Call `setUserId` and `setAttribute` before starting the session so the SDK attaches them to every session it starts. See [Identifying Users](/app-distribution/sdk/identifying-users) and [Session Attributes](/app-distribution/sdk/session-attributes).

## Using With Backtrace

Sauce Mobile Beta and [Backtrace](/error-reporting/getting-started/) run side by side in one app: initialize Backtrace first, so it is the sole crash owner, then start Sauce Mobile Beta with `beginWithoutCrashHandler`. At every session start, the SDK generates a new `sauce.correlation_id`, attaches it to the session, and hands it to Backtrace together with `sauce.mobile_beta.session_url`, `sauce.mobile_beta.session_started`, `sauce.sdk.coexistence_mode`, `sauce.release`, and `sauce.dist`. One launch can produce several sessions, and each one gets its own id.

React Native specifics:

- Use `@backtrace/react-native` 0.2.3 or later (until it is published as stable, `npm install @backtrace/react-native@rc`). With that package installed, there is nothing to register: the SDK forwards its attributes to `BacktraceClient.instance.addAttribute(...)` on its own.
- If your app wraps the Backtrace client behind its own module, or your package manager does not let the SDK resolve `@backtrace/react-native` (strict pnpm or Yarn PnP layouts), link it with `TestFairy.setBacktraceClient(myClient)` before `beginWithoutCrashHandler`. Pass `null` to go back to `BacktraceClient.instance`.
- Your own attributes, such as `sauce.environment`, go into `BacktraceClient.initialize(...)` as `userAttributes` and into `TestFairy.setAttribute(key, value)`.
- Index `sauce.correlation_id` in Backtrace (Project Settings > Attributes, UUID format) before you filter or group on it. See [Attributes](/error-reporting/project-setup/attributes/).

```ts
import { BacktraceClient } from '@backtrace/react-native';
import TestFairy from '@saucelabs/mobile-beta-react-native';

const backtrace = BacktraceClient.initialize({ // 1. Backtrace first: sole crash owner
  url: 'https://submit.backtrace.io/<universe>/<backtrace-token>/json',
  userAttributes: { 'sauce.environment': 'beta' }, // add your database options (see the Backtrace guide)
});
TestFairy.setAttribute('sauce.environment', 'beta'); // 2. your own attributes
TestFairy.setServerEndpoint('<server-endpoint>'); // 3. server endpoint from Organization Settings > SDK Settings
TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>'); // 4. start without a crash handler; the SDK hands its attributes to Backtrace
```

For the complete contract, including the iOS and Android specifics, see [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence/). For the Backtrace side of the setup, see the [Backtrace React Native integration guide](/error-reporting/language-integrations/react-native/). A working setup is in the package repository at [example/src/observability.ts](https://github.com/testfairy/react-native-testfairy/blob/3.1.0/example/src/observability.ts).

## API Notes

The default export is `TestFairy`, the native module is `TestFairyBridge`, and the Android runtime package is `com.testfairy`.

- `beginWithoutCrashHandler(appToken, options?)` starts a session. See [Crash Ownership](#crash-ownership).
- `isCrashReportingAvailable()` returns `false`. Use Backtrace for crash reporting and crash testing.
- `pushFeedbackController()` shows the feedback form for the running session. `showFeedbackForm(appToken, takeScreenshot?)` also works without a session. See [Submitting User Feedback](/app-distribution/sdk/user-feedback).
- `getIntegrationInfo()` returns `{ sdkName, crashReportingAvailable: false, coexistenceMode: 'backtrace_crash_owner' }`.
- `setAttribute(key, value)` before `beginWithoutCrashHandler` applies to every session the SDK starts, including sessions started after `stop()`. Limits: 64 attributes, keys up to 64 characters, values up to 1000 characters on iOS and 1024 on Android. The keys the SDK manages for Backtrace (`sauce.correlation_id`, `sauce.mobile_beta.session_started`, and `sauce.mobile_beta.session_url`) are reserved and ignored with a warning.
- `setUserId(id)` identifies the tester. `setCorrelationId(...)` and `identify(...)` are deprecated. They write the same user-identity field as `setUserId`. Use `setUserId` plus `setAttribute` instead.
- `addSessionStateListener(listener)` returns a subscription with `remove()`. The listener receives `onSessionStarted({ sessionUrl, correlationId })`, `onSessionCorrelationIdChanged({ correlationId })`, `onSessionFailed()`, `onSessionLengthReached({ secondsFromStartSession })`, `onSessionStopped()`, and the [app update events](/app-distribution/sdk/app-updates).
- `getSessionUrl()` returns a promise that resolves to the session URL (or `null` before the session is accepted). `getSessionCorrelationId()` returns a promise that resolves to the correlation id of the current session (or `null` before the first session start). `getVersion()` returns a promise with the native SDK version.
- `setBacktraceClient(client)` links a Backtrace client explicitly (any object with `addAttribute(map)`) in place of `BacktraceClient.instance` from `@backtrace/react-native`. `null` restores the automatic link. See [Using With Backtrace](#using-with-backtrace).
