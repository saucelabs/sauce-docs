---
id: app-versioning
title: App Versioning
sidebar_label: App Versioning
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When uploading an app, TestFairy decodes the app name, version number, and version name of the build and displays it on the dashboard.

## Display Name

The app name used on the dashboard is the **Display Name** in your iOS xcode project, or the value of the `string name=”app_name”` in the **strings.xml** file in the `res/values` directory of your Android app in Android studio.

**In Xcode:**

<img src={useBaseUrl('/img/test-fairy/app-distribution/xcode-ios-app-display-name.png')} alt="xcode"/>

**In Android Studio**

<img src={useBaseUrl('/img/test-fairy/app-distribution/android-studio-app-name.png')} alt="android studio"/>

## Android

There are two fields that identify a build:

- **versionCode** - A positive integer used as an internal version number.
- **versionName** — A string used as the version number shown to users.

These fields will be translated and displayed in the following fields on the dashboard:

- Version = **versionName**
- Version code = **versionCode** (displayed in brackets after the version field)

<img src={useBaseUrl('/img/test-fairy/app-distribution/android-version-numbering.png')} alt="android version numbering"/>

## iOS

There are two fields that identify an app:

- **Bundle version** - A string composed of one to three period-separated integers. Can only contain numeric characters (0-9) and periods.
- **Bundle versions string, short** - A string.

These fields will be translated and displayed in the following fields on the dashboard:

- Version = **Bundle versions string, short**
- Version code = **Bundle version** (displayed in brackets after the version field)

<img src={useBaseUrl('/img/test-fairy/app-distribution/ios-version-numbering.png')} alt="ios version numbering"/>

For more information about app versioning, see [Version Numbers and Build Numbers](https://developer.apple.com/library/archive/technotes/tn2420/_index.html) or [Set application version information](https://developer.android.com/studio/publish/versioning#appversioning).

## Separating Apps and Builds

If you upload an app with the same version and package name (or bundle identifier), and the app already exists in your account, the new app will override the old app.

To keep the old app you can do one of the following:

1. Change the app version. Either increment the app version name or number, or add a numeric/textual suffix.

2. Change the app package name (or bundle identifier).

Since apps are grouped by package name, uploading an app with a new package name will create a new project. For example, apps with the package name `com.company.app` will be grouped separately from apps with the package name `com.company.app.debug`.
