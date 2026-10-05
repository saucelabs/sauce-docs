---
id: supported-platforms
title: Supported Platforms
sidebar_label: Supported Platforms
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

The Sauce Mobile Beta SDK is available for Android, iOS and React Native, including Expo projects that generate their native projects with prebuild. The SDK does not install a crash handler. Crash reporting is provided by Backtrace (Sauce Labs Error Reporting), and the two SDKs are designed to run in the same app. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).

The runtime API is the same on every platform. Import the `TestFairy` module on iOS, `com.testfairy.TestFairy` on Android, and the `TestFairy` default export in React Native. The feature pages below show each platform's syntax side by side.

## Android

- [Adding the SDK to Your App](/testfairy/sdk/android/integrating-android/)
- [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/)
- [Begin with Options](/testfairy/sdk/options/)
- [Identifying Your Users](/testfairy/sdk/identifying-users/)
- [Session Attributes](/testfairy/sdk/session-attributes/)
- [Submitting User Feedback](/testfairy/sdk/user-feedback/)
- [Logging](/testfairy/sdk/logging/) and [Remote Logging](/testfairy/sdk/remote-logging/)
- [Hiding Sensitive Data](/testfairy/sdk/security/hiding-data/)
- [Using Map Locations](/testfairy/sdk/map-locations/)

## iOS

- [Adding the SDK to Your App](/testfairy/sdk/ios/integrating-ios/)
- [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/)
- [Begin with Options](/testfairy/sdk/options/)
- [Identifying Your Users](/testfairy/sdk/identifying-users/)
- [Session Attributes](/testfairy/sdk/session-attributes/)
- [Submitting User Feedback](/testfairy/sdk/user-feedback/)
- [Logging](/testfairy/sdk/logging/) and [Remote Logging](/testfairy/sdk/remote-logging/)
- [Hiding Sensitive Data](/testfairy/sdk/security/hiding-data/) and [Hiding Webview Elements](/testfairy/sdk/ios/hiding-webview/)
- [Log Network](/testfairy/sdk/ios/log-network/)
- [Using Map Locations](/testfairy/sdk/map-locations/)

## React Native

- [Adding the SDK to Your App](/testfairy/platforms/react-native/), including [Expo](/testfairy/platforms/expo/) (with prebuild)
- [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/)
- [Identifying Your Users](/testfairy/sdk/identifying-users/)
- [Session Attributes](/testfairy/sdk/session-attributes/)
- [Submitting User Feedback](/testfairy/sdk/user-feedback/)
- [Logging](/testfairy/sdk/logging/) and [Remote Logging](/testfairy/sdk/remote-logging/)
- [Hiding Sensitive Data](/testfairy/sdk/security/hiding-data/)
