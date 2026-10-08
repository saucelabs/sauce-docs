---
id: supported-platforms
title: Supported Platforms
sidebar_label: Supported Platforms
description: The Sauce Mobile Beta SDK supports Android, iOS, React Native, and Expo with prebuild.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

The Sauce Mobile Beta SDK is available for Android, iOS and React Native, including Expo projects that generate their native projects with prebuild. The SDK does not install a crash handler. Crash reporting is provided by Backtrace (Sauce Labs Error Reporting), and the two SDKs are designed to run in the same app. See [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence).

The runtime API is the same on every platform. Import the `TestFairy` module on iOS, `com.testfairy.TestFairy` on Android, and the `TestFairy` default export in React Native. The feature pages below show each platform's syntax side by side.

## Android

- [Adding the SDK to Your App](/app-distribution/sdk/android/integrating-android)
- [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence)
- [Begin with Options](/app-distribution/sdk/options)
- [Identifying Your Users](/app-distribution/sdk/identifying-users)
- [Session Attributes](/app-distribution/sdk/session-attributes)
- [Submitting User Feedback](/app-distribution/sdk/user-feedback)
- [App Updates](/app-distribution/sdk/app-updates)
- [Logging](/app-distribution/sdk/logging) and [Remote Logging](/app-distribution/sdk/remote-logging)
- [Hiding Sensitive Data](/app-distribution/sdk/security/hiding-data)
- [Using Map Locations](/app-distribution/sdk/map-locations)

## iOS

- [Adding the SDK to Your App](/app-distribution/sdk/ios/integrating-ios)
- [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence)
- [Begin with Options](/app-distribution/sdk/options)
- [Identifying Your Users](/app-distribution/sdk/identifying-users)
- [Session Attributes](/app-distribution/sdk/session-attributes)
- [Submitting User Feedback](/app-distribution/sdk/user-feedback)
- [App Updates](/app-distribution/sdk/app-updates)
- [Logging](/app-distribution/sdk/logging) and [Remote Logging](/app-distribution/sdk/remote-logging)
- [Hiding Sensitive Data](/app-distribution/sdk/security/hiding-data) and [Hiding Webview Elements](/app-distribution/sdk/ios/hiding-webview)
- [Log Network](/app-distribution/sdk/ios/log-network)
- [Using Map Locations](/app-distribution/sdk/map-locations)

## React Native

- [Adding the SDK to Your App](/app-distribution/sdk/react-native/react-native), including [Expo](/app-distribution/sdk/react-native/expo) (with prebuild)
- [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence)
- [Identifying Your Users](/app-distribution/sdk/identifying-users)
- [Session Attributes](/app-distribution/sdk/session-attributes)
- [Submitting User Feedback](/app-distribution/sdk/user-feedback)
- [App Updates](/app-distribution/sdk/app-updates)
- [Logging](/app-distribution/sdk/logging) and [Remote Logging](/app-distribution/sdk/remote-logging)
- [Hiding Sensitive Data](/app-distribution/sdk/security/hiding-data)
