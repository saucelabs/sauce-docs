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

- **Android**: Sauce Labs Mobile App Distribution supports uploading and distributing Android Applications. Distributing Android apps with Sauce Labs Mobile App Distribution must be packaged as a `.apk` or `.aab` file.
- **iOS**: Sauce Labs Mobile App Distribution supports uploading and distributing iOS applications. You can sign iOS apps with AdHoc, Development, or Enterprise certificates. Distributing iOS apps with Sauce Labs Mobile App Distribution must be packaged as a `.ipa` file.
- **MacOS**: MacOS apps are bundled as `.app` files, however, to distribute MacOS apps with Sauce Labs Mobile App Distribution, those `.app` files must be zipped into a `.zip` file.

### Expanding iOS Platform Support: Now Including VisionOS (XROS)

We now support VisionOS in addition to all other iOS platforms. Below is the complete list of platforms. Note that **XROS** is used to indicate support for VisionOS:

- iPhoneOS
- WatchOS
- MacOSX
- AppleTVOS
- DriverKit
- XROS (VisionOS)

### Supporting Both APK and AAB Formats for Android Apps

For Android apps, we support both APK and AAB formats. Here’s how it works:

- **APK Support:**

  - If you provide your app in APK format, we handle it directly.

- **AAB Support:**
  - If you upload your app as an AAB (Android App Bundle), we convert it to APK for distribution.
  - We also keep a copy of your original AAB format attached to your project. This allows you to download the AAB file if needed.

Feel free to upload your app in either format, and we'll ensure it’s properly managed and available for your needs.

### Choose Your Build File

In the first stage, you need to select the file you want to upload. The supported file types are:

- **iOS:** `.ipa`
- **Android:** `.apk` or `.aab`
- **MacOS:** `.zip`
- **Windows:** Typically `.exe` or `.zip` (Please contact support for further assistance)

Choose the appropriate file type based on your platform to proceed with the upload.

### Project Settings

You can define your build settings during the upload process:

-- **Custom Comments** - Use this section to add release notes, describe the updates/changes, and anything else you want your testers to know.

More build settings are available on the Account Settings page.

### Updating an App

To update a build, upload the same file again (that is., the same build with the same version). The new build file will override the old build without creating a new app version.

### Uploading a New Version

To upload a new build (a new version of the same app), upload the new version as you uploaded the old version. Sauce Labs Mobile App Distribution identifies that both apps have the same package name (bundle identifier) and group them together in the same project.

### Symbols or Mapping file

In iOS and Android development, symbols or mapping files refer to files used to help debug and analyze crash reports. They are essential when apps are built with optimization settings, such as code obfuscation or stripping debug information, which make crash reports harder to read.
If you're using the API to upload your app, you can attach this file to your build for easy retrieval later if needed.
