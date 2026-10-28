---
id: expo
title: Expo (with prebuild)
sidebar_label: Expo (with prebuild)
description: Add the Sauce Mobile Beta SDK for React Native to an Expo project that generates its native projects with prebuild.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

:::info Beta release
The Sauce Mobile Beta SDK is in beta. The artifact names and the API are final; this documentation can still change. Share feedback with your Sauce Labs representative.
:::

[Sauce Mobile Beta for React Native](https://github.com/testfairy/react-native-testfairy/releases/tag/3.1.0) (`@saucelabs/mobile-beta-react-native`) is a bridge to the Sauce Mobile Beta SDK and is supported for Expo (with prebuild): Expo projects whose native `ios` and `android` directories are generated with `npx expo prebuild`. Integrating the SDK into your app shows you how your app performs on real devices. It shows when and how people use your app and provides any metrics you may need to optimize your user experience and code.

## Requirements

The package contains native iOS and Android code, so it does not run in Expo Go. Your project needs generated `ios` and `android` directories before you install it. Generate them with `npx expo prebuild`, which Expo calls Continuous Native Generation. See the [Expo prebuild docs](https://docs.expo.dev/workflow/prebuild/).

The SDK does not install a crash handler. Crash reporting is provided by Backtrace (Sauce Labs Error Reporting), and the two SDKs are designed to run in the same app. Start the SDK with `beginWithoutCrashHandler`. See [Crash Ownership](/app-distribution/sdk/react-native/#crash-ownership).

## Steps

From your project root, run the following commands. Until npm publishing is switched on, the package is installed from the tarball attached to the GitHub Release:

```bash
npx expo prebuild
npm install https://github.com/testfairy/react-native-testfairy/releases/download/3.1.0/saucelabs-mobile-beta-react-native-3.1.0.tgz

cd ios
pod install
```

:::note
After the package is published on npm, install it with `npm install @saucelabs/mobile-beta-react-native` instead of the release asset URL.
:::

On Android, the package registers its Maven repositories on every Gradle project, so a standard Expo project needs no repository change. If your `android/settings.gradle` restricts repositories with `RepositoriesMode.FAIL_ON_PROJECT_REPOS`, add the Sauce Mobile Beta Maven repository as shown in [Android](/app-distribution/sdk/react-native/#android), and re-apply that change (or apply it with a config plugin) after every `npx expo prebuild --clean`, which regenerates the native directories.

The snippet below uses two values, `<sauce-mobile-beta-token>` and `<server-endpoint>`. Both values are in **Organization Settings > SDK Settings** on your Mobile App Distribution dashboard, under the organization that owns the app. Only Account Owners and Org Admins can open that page. See [Organization Settings](/app-distribution/settings/organization/#sdk-settings).

- **SDK App Token**: the organization-wide token your app starts sessions with. Regenerating it invalidates the previous token for every build that still carries it.
- **Server Endpoint**: the URL the SDK sends session data to, in the form `https://<host>/services/`. It is specific to your region or private instance, so copy it exactly. If it reads **Not configured**, contact Sauce Labs support before you ship a build.

Pass the endpoint to `setServerEndpoint` before `beginWithoutCrashHandler`. The SDK's built-in default server is no longer in service: an app that skips this call starts no sessions.

Then set the endpoint and start the SDK once per app launch from your root component:

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

## Notes

Since all Expo apps are React Native apps behind the scenes, everything on the [Integrating the React Native SDK](/app-distribution/sdk/react-native/) page also applies to Expo: the API notes and the [Using With Backtrace](/app-distribution/sdk/react-native/#using-with-backtrace) summary. If you use Backtrace in the same app, initialize Backtrace first and use `@backtrace/react-native` 0.2.3 or later (until it is published as stable, `npm install @backtrace/react-native@rc`), so that the SDK can hand the `sauce.correlation_id` it generates for every session to Backtrace, as described in [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence/).
