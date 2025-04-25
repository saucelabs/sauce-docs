---
id: app-files
title: Creating Simulator .app Files for Appium and XCUITest
sidebar_label: iOS Simulator .app Files
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welcome to the documentation on creating Simulator .app files for Appium and XCUITest using Sauce Labs. This step-by-step documentation will walk you through the process of building, zipping, and uploading your application for testing on Sauce Labs Simulators.

:::caution Important

Sauce Labs Simulators version 16.2 and below only support apps that have been built with the `x86_64` -architecture for Intel-based Macs. `arm64`-based applications, built for Apple Silicon Macs, will only run on versions 17.0 and above, see [Virtual Devices on Apple Silicon](../virtual-apple-silicon.md) for details. For universal capability, apps can be built with both `x86_64 arm64` architectures

:::

## What You'll Need

- **Xcode:** You need to have Xcode installed, which is the IDE for developing iOS apps.
- **Command Line Tools:** You need to have the Xcode command line tools installed, which can be done by executing the command `xcode-select --install` in the Terminal.
- **App Source Code:** The source code of the application(s), which includes a project or workspace and a scheme
- **macOS:** Since Xcode is only available for macOS, you will need a Mac.

## Building apps with xcodebuild

`xcodebuild` is the command-line tool built into Xcode used for building apps. You can see its detailed documentation by running `xcodebuild --help` or `man xcodebuild` in the terminal.

The following steps can also be executed in a build pipeline, but for explanation and replication purposes, we use a terminal.

### Navigating to the project directory

Open a terminal and navigate to the directory containing the Xcode workspace using the cd command.

```bash
cd /path/to/your/project
```

### Building the app(s) for testing

**Build for Appium**

Appium only needs the test app to be built, so you can create a new build using the `build` command. The following command cleans and builds the project in one step.

```bash
xcodebuild \
  ARCHS=arm64 x86_64 \
  clean build \
  -project testApp.xcodeproj \
  -scheme testApp \
  -derivedDataPath './customFolder' \
  -sdk iphonesimulator \
  -destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=14.5' \
  -configuration Release \
  CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO
```

**Build for Appium workspace based projects**

```bash
xcodebuild \
  ARCHS=arm64 x86_64 \
  clean build \
  -workspace testApp.xcworkspace \
  -scheme testApp \
  -derivedDataPath './customFolder' \
  -sdk iphonesimulator \
  -destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=14.5' \
  -configuration Release \
  CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO
```

**Build for XCUITest**

XCUITest for Simulators is only supported for iOS 15 and up. It needs two apps, which are:

- The App that needs to be tested (testApp)
- The App that holds the tests (testRunner)

You can create a new build using the `build-for-testing` command. The following command cleans and builds the project in one step.

```bash
xcodebuild \
  clean build-for-testing \
  -project testApp.xcodeproj \
  -scheme testApp \
  -derivedDataPath './customFolder' \
  -sdk iphonesimulator \
  -arch arm64 x86_64 \
  -configuration Debug \
  CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO
```

**Build for XCUITest workspace based projects**

```bash
xcodebuild \
  clean build-for-testing \
  -workspace testApp.xcworkspace \
  -scheme testApp \
  -derivedDataPath './customFolder' \
  -sdk iphonesimulator \
  -arch arm64 x86_64 \
  -configuration Debug \
  CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO
```

### Breaking down the build commands

Here is a breakdown of the command arguments:

- **`clean build`**: This cleans any previous build files and then builds the project and is mostly used for Appium.
- **`clean build-for-testing`**: This cleans any previous build files and then builds the project to prepare it for testing and is mostly used for XCUItest.
- **`ARCHS=arm64 x86_64`**: This specifies the architecture to build for. Multiple values are possible for universal compatability Sauce Labs supports arm64 builds on 17.5 and above.
- **`-project`**: This specifies the Xcode project file to use. Rename `testApp.xcodeproj` with the name of your project. This is optional because if it’s not provided it will automatically choose the first `xcodeproj`-file
- **`-workspace`**: This specifies the Xcode workspace file to use. Rename `testApp.xcworkspace` with the name of your workspace.
- **`-scheme`**: This specifies the scheme to build. Rename `testApp` with the name of your scheme
- **`-derivedDataPath ‘./customFolder’`**: This option allows you to specify a custom location for Derived Data, which is where Xcode places all build-related files. It can be useful for separating build artifacts between different builds or for easier cleanup. Replace `./customFolder` with the folder name you want to use.
- **`-sdk iphonesimulator`**: This specifies that the build should target the iOS simulator, not an actual device.
- **`-destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=14.5'`**: By providing these details, you can ensure that `xcodebuild` knows precisely for which simulator to build. Here is a breakdown of the command arguments:
  - **`platform=iOS Simulator`**: This specifies that you're targeting the iOS Simulator platform.
  - **`name=iPhone 11 Pro Max`**: This specifies the exact type of simulator or device for consistency. This is important especially if you have multiple versions of the "iPhone 11 Pro Max" simulator installed.
  - **`OS=14.5`**: This specifies the OS version of the simulator you're targeting. This is important especially if you have multiple versions of the "iPhone 11 Pro Max" simulator installed.
- **`-arch`**:This specifies the architecture to build for. Multiple values are possible for universal compatability Sauce Labs supports arm64 builds on 17.5 and above.
- **`-configuration Release|Debug`**: This sets the build configuration to `Release` or `Debug`. `Debug` includes symbols for debugging and is usually used during development and testing with XCUITest.
- **`CODE_SIGN_IDENTITY="", CODE_SIGNING_REQUIRED=NO, CODE_SIGNING_ALLOWED=NO`**: These disable code signing, which is typically not required when building for the simulator.

:::caution

Do not specify `-arch` explicitly with `xcodebuild` when a `-destination` is used, as this might cause conflicts. Use `ARCHS` instead.

:::

## Zipping the App(s)

After the apps (testApp and testRunner) has/have been built, they need to be zipped. This can be done with the following steps.

### Navigating to the directory containing the built apps

After building, your apps (the .app directories) will be located in the `Build/Products/Debug-iphonesimulator` directory in the Derived Data path. In the above example, we used `./customFolder`.

Open a terminal and navigate to this directory:

```bash
cd /path/to/your/project/customFolder/Build/Products/Debug-iphonesimulator
```

### Zipping the Apps

You can create a zip archive of each app using the zip command:

```bash
zip -r testApp.zip testApp.app
zip -r testRunner.zip testRunner.app
```

Here is a breakdown of the command arguments, which is the same for both lines:

- **`zip -r`**: This tells zip to include all the files and directories recursively in the directory being zipped.
- **`testApp.zip`**: This is the new name of the testApp-file and can be any name you want to give it.
- **`testApp.app`**: This is the name of the testApp-file that needs to be zipped.

:::note
Replace `/path/to/your/project/` with the actual path to your project's directory and `testApp.app` and `testRunner.app` with the actual names of your app directories.
:::

## Uploading the App(s) to Sauce Storage

### Appium

For Appium, you can upload your mobile app programmatically using the [File Storage API Methods](/dev/api/storage). For more information, see [Uploading Apps via Rest API](/mobile-apps/app-storage/#upload-apps-via-rest-api).

### XCUITest

For XCUITest on Simulators, you can use `saucectl` to run XCUITest for Simulators on Sauce Labs. It will handle the app uploading process to Sauce Storage for you. For more information, see [Espresso XCUITest documentation](/mobile-apps/automated-testing/espresso-xcuitest/).
