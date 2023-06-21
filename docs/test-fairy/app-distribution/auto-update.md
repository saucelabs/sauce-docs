---
id: auto-update
title: Auto-Update
sidebar_label: Auto-Update
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Auto-update is a feature that allows you to seamlessly push new versions of your app to users, ensuring that everyone is always using the latest version. By enabling auto-update, users with older versions of the app will receive a notification prompting them to update the next time they use the app.

:::note
Auto-update is not available in production.
:::

## Configuring Auto-Update

To enable auto-update for your app, you need to include the TestFairy SDK. There are three ways to configure auto-update for a specific build:

- On upload
- In build settings
- Via Upload API

### On Upload

During the app or version upload process, you can select the **Auto-Update** checkbox to enable auto-update for that build.

<img src={useBaseUrl('/img/test-fairy/app-distribution/auto-update-img2.png')} alt="testfairy build settings"/>

### In Build Settings

After uploading a build, access the build settings and navigate to the **App Distribution** section. Here, you can select the **Auto-Update** checkbox to enable auto-update for the build.

<img src={useBaseUrl('/img/test-fairy/app-distribution/auto-update-img1.png')} alt="testfairy build settings"/>

### Via Upload API

When uploading a new build via the [upload api](/test-fairy/api-reference/upload-api), set the `auto-update` parameter to `on`.

### Verifying Auto-Update Setting

To verify whether auto-update is enabled for an app, open the app and check the list of builds. In the right column, you will see an icon of a rounded arrow, indicating that it is an auto-update version.

<img src={useBaseUrl('/img/test-fairy/app-distribution/auto-update-dashboard-place.png')} alt="auto update dashboard"/>

### Using Auto-Update

When auto-update is enabled, all previous installations of the app will be upgraded to the selected version. Here's how it works:

1. When a user launches the app, the TestFairy SDK checks if a new version is available and marked for auto-update.
2. If a new version is available, the user receives a notification informing them that a new version is ready to be installed.
   
    <img src={useBaseUrl('/img/test-fairy/app-distribution/auto-update-msg.png')} alt="auto update message"/>

1. The user can choose to accept the update, in which case the new version is downloaded and installed.
2. If the user declines the update, the app continues to run the old version.
3. The user will be notified again the next time they launch the app, prompting them to update.


### Reasons Auto-Update May Fail

Auto-update may fail for the following reasons:

- The version number and name of the new build are the same as the old one. Auto-update only works when versions are different.
- The TestFairy SDK isn't integrated into both versions.
- (Android) The sign certificates for each version is different. If an app does not sign with the same certificate, TestFairy can't perform the auto-update.
- (iOS) The app is not signed with an ad-hoc or enterprise certificate.

### Forcing Auto-Update

In some cases, you may want to ensure that all users and testers of your app are running the latest version and cannot use older versions. To achieve this, you can use the following methods:
- **Android**: Use the `sessionStateListener` class, specifically the `onAutoUpdateDismissed` method. Refer to the [Android SessionStateListener](https://docs.testfairy.com/reference/android/com/testfairy/SessionStateListener.html#SessionStateListener) documentation for more details.
- **iOS**: Implement the `testFairySessionStateDelegate` class and use the `autoUpdateDismissed` method. See the [iOS TestFairySessionStateDelegate](https://app.testfairy.com/reference/ios/Protocols/TestFairySessionStateDelegate.html) documentation for further information.


### Downgrading an App

Auto-update only works when the new version is unique and uploaded after the old version. The version number or code of the app is not essential. If you need to downgrade your app from version 1.5 to 1.4, follow these steps:


1. Re-upload version 1.4 using a new version name (for example, 1.41).
2.  Enable auto-update for the new version.

It prompts the system to perform an auto-update of version 1.5 to version 1.41, downgrading your app to version 1.4.
