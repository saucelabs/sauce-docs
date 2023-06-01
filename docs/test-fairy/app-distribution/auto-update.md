---
id: auto-update
title: Auto-Update
sidebar_label: Auto-Update
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Auto-update allows developers to push new app versions automatically to ensure all users are on the latest version of an app. If you set a new version to auto-update, all the users with older versions see a notification the next time they use the app, prompting them to update.

:::note
In production, you cannot use auto-update.
:::

## Configuring Auto-Update

For auto-update to work, your app must include the TestFairy SDK.

You can configure auto-update for a specific build in three ways:

- On upload
- In build settings
- Via Upload API

### On Upload

When uploading a new app or version, select the **Auto-Update** checkbox.

<img src={useBaseUrl('/img/test-fairy/app-distribution/auto-update-img2.png')} alt="testfairy build settings"/>

### In Build Settings

After a build is uploaded, open the build settings and, under **App Distribution**, select the **Auto-Update** checkbox.

<img src={useBaseUrl('/img/test-fairy/app-distribution/auto-update-img1.png')} alt="testfairy build settings"/>

### Via Upload API

When uploading a new build via the [upload api](/test-fairy/api-reference/upload-api), set the `auto-update` parameter to `on`.

### Verifying Auto-Update Setting

To verify whether an app has auto-update enabled, open the app and look at the list of builds. The right column has an icon of a rounded arrow, indicating this is the auto-update version.

<img src={useBaseUrl('/img/test-fairy/app-distribution/auto-update-dashboard-place.png')} alt="auto update dashboard"/>

### Using Auto-Update

When auto-update is enabled, all previous installations of an app upgrade to the selected version.

When you launch your app, the SDK checks if a new version is available and marked for auto-update. If it is, the user gets a notification that a new version is ready and prompts them to update.

<img src={useBaseUrl('/img/test-fairy/app-distribution/auto-update-msg.png')} alt="auto update message"/>

If the user agrees, the new version is downloaded and installed. If the user declines, the old version of the app is loaded. The app notifies the user again the next time they launch the app.

### Reasons Auto-Update May Fail

Auto-update may fail for the following reasons:

- The version number and name of the new build are the same as the old one. Auto-update only works when versions are different.
- The TestFairy SDK isn't integrated into both versions.
- (Android) The sign certificates for each version is different. If an app does not sign with the same certificate, TestFairy can't perform the auto-update.
- (iOS) The app is not signed with an ad-hoc or enterprise certificate.

### Forcing Auto-Update

Occasionally you want all testers of an app only to test the latest version released. In this case, you can use the following method to ensure users and testers cannot run older versions of the app and must upgrade to the version marked for auto-update.

The classes used are:

- Android - `sessionStateListener` https://docs.testfairy.com/reference/android/com/testfairy/SessionStateListener.html#SessionStateListener → `onAutoUpdateDismissed`
- iOS - `testFairySessionStateDelagate` https://app.testfairy.com/reference/ios/Protocols/TestFairySessionStateDelegate.html → `autoUpdateDismissed`

### Downgrading an App

Auto-update works only in cases where the version is unique and the new version uploads after the old version. Only the upload date is necessary. The version number or code of the app is not essential.

Say you want to downgrade from version 1.5 to 1.4:

- Re-upload version 1.4 using a new version name (for example, 1.41).
- Enable auto-update for the new version.

It prompts the system to perform an auto-update of version 1.5 to version 1.41, downgrading your app to version 1.4.
