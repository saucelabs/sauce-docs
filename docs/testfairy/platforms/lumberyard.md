---
id: lumberyard
title: Distributing Lumberyard Apps
sidebar_label: Lumberyard
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To distribute Lumberyard Apps to App Distribution, follow the steps provided in this guide.

## What You'll Need

- Lumberyard and Android SDK installed on Windows 10

## Downloading Android SDK Components

Use Android's **SDK Manager** to download the following components:

- Google Play APK Expansion Library
- Google Play Licensing Library
- Android SDK Platform-Tools
- Android SDK Tools

## Downloading and Setup Lumberyard Components

Run Lumberyard's **Setup Assistant**.

:::note
If you haven't installed Lumberyard core, click **Custom Install** and verify that the engine root path is correct.
:::

On the **Getting Started** page, enable the following items:

- Compile the game code
- Compile the engine and asset pipeline
- Compile the Lumberyard Editor and tools
- Compile for Android devices

On the **Required Software** section, install and configure paths for the following items:

- Android Native Development (NDK)
- Android Software Development Kit (SDK) Tools
- Java SE Development Kit (JDK) - Make sure you use the [official Java SE 8 from Oracle](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or [Java SE 8 OpenJDK reference implementation](https://jdk.java.net/java-se-ri/8). Other JDK releases won't work and you will have WAF errors during clean builds.

## Enabling OpenGL ES 3.X for Lumberyard

Close the editor and all of its componenets. Then, open **lumberyard_version\dev\AssetProcessorPlatformConfig.ini** in a text editor to make the following changes.

- Remove the semicolon before `es3=enabled` to enable it. Your development platform gets enabled automatically, so you don't have to enable `pc` or `osx_gl` unless they are required by your custom build schemes.

  ```bash
  [Platforms]
  ;pc=enabled
  es3=enabled
  ;ios=enabled
  ;osx_gl=enabled
  ```

## Generating Android Studio Project

1. Run **Project Configurator** to activate your current project.

2. Using a command line app, navigate to **lumberyard_version\dev** folder.

3. Run `lmbr_waf.bat configure` to generate your Android Studio project if you haven't already.

### Generateing Shaders for Release

1. Build, deploy, and run your app on an Android device by using Lumberyard Editor's Deployment Tool Plugin. Run remote shader compiler if it doesn't launch automatically.

2. In your app, explore every area in every level to ensure that all shader permutations required for the app are generated.

3. Once you complete exploring all included levels, close the app.

4. Embed the shader PAK files into your app or put them in a remotely accessible location where your app can access later. PAK files are located in **lumberyard_version\dev\Build\es3\game_project_name** folder. For more details, refer to [this](https://docs.aws.amazon.com/lumberyard/latest/userguide/android-shaders-building.html).

## Build

1. Using a command line app or terminal, navigate to **lumberyard_version\dev** folder.

2. Determine your build's target CPU architecture. (that is, armv8)

3. Determine your build's type. (that is, profile, debug, release)

4. Run the following command to build your APK. Make sure the CPU arch and build type is set correctly in the following command:

   ```bash
   REM : replace 'armv8' and release 'words' if necessary.

   lmbr_waf.bat -p all build_android_armv8_clang_release --package-projects-automatically=True
   ```

## Uploading To App Distribution

Once your APK is built, you can choose your favourite upload method to finalize distribution. Make sure the correct CPU architecture is set for the project binaries path.

To upload with **curl**, run the following command in **lumberyard_version\dev\BinAndroidCPU_ARCHClang** folder. Make sure your APK filename is set correctly.

```bash
curl https://app.testfairy.com/api/upload -F api_key='your_api_key' -F file=@ProjectName.apk
```

Optionally, you can download and use [App Distribution command line uploader](https://github.com/testfairy/command-line-uploader) if you don't have **curl** installed.
