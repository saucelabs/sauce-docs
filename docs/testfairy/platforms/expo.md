---
id: expo
title: Expo (with prebuild)
sidebar_label: Expo (with prebuild)
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Sauce Mobile Beta for React Native](https://github.com/testfairy/react-native-testfairy/releases/tag/3.0.0-rc) (`@saucelabs/mobile-beta-react-native`, formerly `react-native-testfairy`) is a bridge to the Sauce Mobile Beta SDK (formerly the TestFairy SDK) and is supported for Expo (with prebuild): Expo projects whose native `ios` and `android` directories are generated with `npx expo prebuild`. Integrating the Sauce Mobile Beta SDK into your app enables you to understand how your app performs on real devices. It shows when and how people use your app and provides any metrics you may need to optimize your user experience and code.

## Requirements

The package contains native iOS and Android code, so it does not run in Expo Go. Your project needs generated `ios` and `android` directories before you install it. Generate them with `npx expo prebuild`, which Expo calls Continuous Native Generation; this replaced the older `expo eject` command and the "bare workflow" wording you may still see in older guides. See the [Expo prebuild docs](https://docs.expo.dev/workflow/prebuild/).

The SDK is crashless and never installs a crash handler; crash reporting is provided by Backtrace. Start it with `beginWithoutCrashHandler`, and never install the legacy `react-native-testfairy` package alongside it. See [Crash Ownership](/testfairy/platforms/react-native/#crash-ownership).

## Steps

From your project root, run the following commands. Until npm publishing is switched on, the package is installed from the tarball attached to the GitHub Release:

```bash
npx expo prebuild
npm install https://github.com/testfairy/react-native-testfairy/releases/download/3.0.0-rc/saucelabs-mobile-beta-react-native-3.0.0-rc.tgz

cd ios
pod install
```

:::note
Once the package is published on npm, install it with `npm install @saucelabs/mobile-beta-react-native` instead of the release asset URL. If you still have the legacy `react-native-testfairy` package installed, run `npm uninstall react-native-testfairy` first; the two are mutually exclusive.
:::

On Android, add the Sauce Mobile Beta Maven repository to `android/settings.gradle` as shown in [Android](/testfairy/platforms/react-native/#android). `npx expo prebuild --clean` regenerates the native directories, so re-apply that change (or apply it with a config plugin) whenever you regenerate them.

Then start the SDK once per app launch from your root component, using the app token from the [user preferences](https://app.testfairy.com/settings/) on your Sauce Labs Mobile App Distribution account:

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

## Notes

Since all Expo apps are React Native apps behind the scenes, everything on the [React Native](/testfairy/platforms/react-native/) page also applies to Expo: the migration steps from `react-native-testfairy`, the API notes, and the [Using with Backtrace](/testfairy/platforms/react-native/#using-with-backtrace) summary. If you use Backtrace in the same app, initialize Backtrace first and share the `sauce.correlation_id` attribute with both SDKs as described in [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).
