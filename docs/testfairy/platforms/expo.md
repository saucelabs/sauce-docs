---
id: expo
title: Expo
sidebar_label: Expo
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Sauce Mobile App Distribution for React Native](https://www.npmjs.com/package/react-native-testfairy) is a bridge to the Sauce Mobile App Distribution SDK and is supported for Expo projects. Integrating the Sauce Mobile App Distribution SDK into your app enables you to understand how your app performs on real devices. It shows when and how people use your app and provides any metrics you may need to optimize your user experience and code.

## Requirements

You have to eject your Expo project before installing Sauce Mobile App Distribution. This process is revertable, but reverting makes you lose access to Sauce Mobile App Distribution features. Apps that require native components are expected to utilize the bare workflow as stated in the [Expo docs](https://docs.expo.io/expokit/eject/).

## Steps

From your project root, run the following commands:

```bash
expo eject
npm install --save react-native-testfairy

cd ios
pod install
```

## Notes

Since all Expo apps are React Native apps behind the scenes, all features introduced in [Sauce Mobile App Distribution for React Native](https://www.npmjs.com/package/react-native-testfairy) also apply to Expo.
