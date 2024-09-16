---
id: app-versioning
title: App Versioning
sidebar_label: App Versioning
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When you upload an app to TestFairy, various aspects of the version, such as the app name, version number, and version name, are decoded and made accessible on the TestFairy dashboard. This documentation will explain the key elements related to app versioning and help you understand how to manage and differentiate your app builds effectively.

## Display Name

The app name used on the dashboard is the **Display Name** in your iOS Xcode project, or the value of the `string name=”app_name”` in the **strings.xml** file in the `res/values` directory of your Android app in Android Studio. By understanding how to configure the Display Name, you can ensure the accurate representation of your app on the TestFairy platform.

**In Xcode:**

<img src={useBaseUrl('/img/testfairy/app-distribution/xcode-ios-app-display-name.png')} alt="Xcode"/>

**In Android Studio:**

<img src={useBaseUrl('/img/testfairy/app-distribution/android-studio-app-name.png')} alt="Android studio"/>

## Android

For Android apps, TestFairy utilizes two fields to identify a build:

- **versionCode** - A positive integer used as an internal version number.
- **versionName** — A string used as the version number shown to users.

These fields are translated and displayed in the following fields on the dashboard:

- Version = **versionName**
- Version code = **versionCode** (displayed in brackets after the version field)

<img src={useBaseUrl('/img/testfairy/app-distribution/android-version-numbering.png')} alt="Android version numbering"/>

## iOS

iOS apps in TestFairy are identified using two fields:

- **Bundle version** - A string of one to three period-separated integers. It can only contain numeric characters (0-9) and periods.
- **Bundle versions string, short** - A string.

These fields are translated and displayed in the following fields on the dashboard:

- Version = **Bundle versions string, short**
- Version code = **Bundle version** (displayed in brackets after the version field)

<img src={useBaseUrl('/img/testfairy/app-distribution/ios-version-numbering.png')} alt="ios version numbering"/>

:::note
For more information about app versioning, see [Version Numbers and Build Numbers](https://developer.apple.com/library/archive/technotes/tn2420/_index.html) or [Set application version information](https://developer.android.com/studio/publish/versioning#appversioning).
:::

## Separating Apps and Builds

When uploading an app to TestFairy, it's important to understand how TestFairy handles situations where an app with the same version and package name (or bundle identifier) already exists in your account. In such cases, the new app will override the old one, replacing it entirely.

To retain the previous app build, you have two options:

1. Change the app version. Either increment the app version name or number or add a numeric/textual suffix.

2. Change the app package name (or bundle identifier).

Since apps are grouped by package name, uploading an app with a new package name creates a new project. For example, apps with the package name `com.company.app` are grouped separately from those with `com.company.app.debug`.

## Download Your AAB File

If you uploaded an AAB file to us, we will convert it to an APK for distribution. However, you can still access your original AAB file by following these steps:

1. Navigate to Your Build: Go to the build where you uploaded the AAB file.

2. Find the App: Locate the app within the build details.

3. Access the Detail Page: Click on the app to open its detail page.

4. Download the AAB File: Click on **More**. If the app was originally an AAB, you will find a download link in the **Attachments** section.

Use this link to download the original AAB file if needed.

<img src={useBaseUrl('/img/testfairy/app-distribution/download-aab-file.png')} alt="Download AAB file"/>
