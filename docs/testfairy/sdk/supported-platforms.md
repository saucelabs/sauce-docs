---
id: supported-platforms
title: Supported Platforms
sidebar_label: Supported Platforms
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Sauce Mobile Beta SDK (formerly the TestFairy SDK) ships as crashless artifacts for [iOS](/testfairy/sdk/ios/integrating-ios/), [Android](/testfairy/sdk/android/integrating-android/) and [React Native](/testfairy/platforms/react-native/), including [Expo](/testfairy/platforms/expo/) (with prebuild). These artifacts never install a crash handler and are designed to run beside Backtrace, Sauce Labs Error Reporting, which owns crash reporting. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).

The other platform plugins listed below still wrap the legacy TestFairy SDK 1.x, which includes its own crash handler. Do not combine them with Backtrace. See below for a list of each supported platform, and the supported features on each platform.

## Cordova / PhoneGap

- [Adding the SDK to your App](/testfairy/platforms/cordova)
- [Identifying your Users](/testfairy/sdk/identifying-users)
- [Session Attributes](/testfairy/sdk/session-attributes)
- [Remote Logging](/testfairy/sdk/remote-logging)

## Ionic

- [Adding the SDK to your App](/testfairy/platforms/ionic)
- [Identifying your Users](/testfairy/sdk/identifying-users)
- [Session Attributes](/testfairy/sdk/session-attributes)
- [Remote Logging](/testfairy/sdk/remote-logging)

## React Native

- [Adding the SDK to your App](/testfairy/platforms/react-native)
- [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/)
- [Hiding Sensitive Data](/testfairy/sdk/security/hiding-data)
- [Identifying your Users](/testfairy/sdk/identifying-users)
- [Session Attributes](/testfairy/sdk/session-attributes)
- [Remote Logging](/testfairy/sdk/remote-logging)

## Nativescript

- [Adding the SDK to your App](/testfairy/platforms/nativescript)
- [Hiding Sensitive Data](/testfairy/sdk/security/hiding-data)
- [Identifying your Users](/testfairy/sdk/identifying-users)
- [Session Attributes](/testfairy/sdk/session-attributes)
- [Remote Logging](/testfairy/sdk/remote-logging)

## Unity

- [Adding the SDK to your App](/testfairy/platforms/unity)
- [Identifying your Users](/testfairy/sdk/identifying-users)
- [Session Attributes](/testfairy/sdk/session-attributes)
- [Remote Logging](/testfairy/sdk/remote-logging)

## Xamarin

- [Adding the SDK to your App](/testfairy/platforms/xamarin)
- [Hiding Sensitive Data](/testfairy/sdk/security/hiding-data)
- [Identifying your Users](/testfairy/sdk/identifying-users)
- [Session Attributes](/testfairy/sdk/session-attributes)
- [Remote Logging](/testfairy/sdk/remote-logging)

## Adobe Air

- [Identifying your Users](/testfairy/sdk/identifying-users)
- [Session Attributes](/testfairy/sdk/session-attributes)
- [Remote Logging](/testfairy/sdk/remote-logging)

## Titanium

- [Adding the SDK to your App](/testfairy/platforms/titanium)
- [Identifying your Users](/testfairy/sdk/identifying-users)
- [Session Attributes](/testfairy/sdk/session-attributes)
- [Remote Logging](/testfairy/sdk/remote-logging)
