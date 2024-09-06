---
id: uploading-an-app
title: Uploading an App
sidebar_label: Uploading an App
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once your account is created and verified, you can upload your app.

Click **New Upload** to upload an app.

We recommend using the Upload API method to enable the Jenkins plugin, Gradle plugin, or Command line uploader.

The code of our command line uploader, Jenkins plugin, and Gradle plugin is open source, so feel free to change and improve it.

## Manual Upload

### Supported Platforms

- **Android**: TestFairy supports uploading and distributing Android Applications. Distributing Android apps with TestFairy must be packaged as a `.apk` or `.aab` file.
- **iOS**: TestFairy supports uploading and distributing iOS applications. You can sign iOS apps with AdHoc, Development, or Enterprise certificates. Distributing iOS apps with TestFairy must be packaged as a `.ipa` file.
- **MacOS**: MacOS apps are bundled as `.app` files, however, to distribute MacOS apps with TestFairy, those `.app` files must be zipped into a `.zip` file.

### Choose your Build File

In the first stage you need to choose the file you want to upload. It can be an **.ipa** (for iOS), **.apk** (for Android), or **.zip** (for MacOS) file.

### Project Settings

You can define your build settings during the upload process:

-- **In-app reporting** - Check this box to enable/disable the "shake to report" feature in your app. When enabled, users can shake their device to send a feedback report, along with a video recording, screenshots, logs, and metrics of their test.

-- **Auto-Update** - When auto-update is enabled, users using previous versions of this app will get a notification about the new version the next time they open up the app. The latest version will be downloaded automatically, so the user doesn't have to download it manually. Note that no email notification will be sent to the testers in this case.

-- **Custom Comments** - Use this section to add release notes, describe the updates/changes, and anything else you want your testers to know.

**Note:** These settings are relevant only if you add the SDK to your app.

More build settings are available on the Account Settings page.

### Updating an App

To update a build, upload the same file again (that is., the same build with the same version). The new build file will override the old build without creating a new app version.

### Uploading a New Version

To upload a new build (a new version of the same app), upload the new version as you uploaded the old version. TestFairy identifies that both apps have the same package name (bundle identifier) and group them together in the same project.

### Symbols or Mapping file

In iOS and Android development, symbols or mapping files refer to files used to help debug and analyze crash reports. They are essential when apps are built with optimization settings, such as code obfuscation or stripping debug information, which make crash reports harder to read.
If you're using the API to upload your app, you can attach this file to your build for easy retrieval later if needed.
