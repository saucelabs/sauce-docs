---
id: ipa-files
title: Creating Real Device .ipa Files for Appium and XCUITest
sidebar_label: iOS Real Device .ipa Files
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note Documentation moved

Details of the resigning process were moved to [Features/iOS App Resiging](/docs/mobile-apps/features/ios-app-resigning.md)

:::

## Creating .ipa files for Appium testing

### Building an .app Bundle

1. Open your app project in Xcode.
2. Select a **Any iOS Device (arm64)** as your product's device target.
3. In the **Product** menu, select **Clean Build Folder**.
4. In the **Product** menu, select **Build**.
5. Navigate to your Xcode project's **Products** directory and find the generated **.app** file.

#### Building an .ipa from an .app Bundle

1. Create an empty directory with the name `Payload`.
2. Move the **.app** file inside the `Payload` directory.
3. Compress the `Payload` directory into an archive (.zip file) and give it a new name with .ipa appended to the end of the file name.
4. Your `.ipa` file is now ready for upload to Sauce Labs.

```shell
# example for building an '.ipa' file out of an '.app'
mkdir Payload
cp -r PATH_TO_BUILD_FOLDER/Runner.app Payload
zip -r Runner.ipa Payload
```

### Building an .ipa File

You can use any of the existing methods of distribution for your iOS app, except for the **App Store** type. This means that you can choose any of the three other export methods: **Ad Hoc**, **Enterprise**, or **Development**.

:::info Recommendation

We highly recommend to use Ad-hoc and Development targets to get the most out of our capabilities. Enterprise-signed apps have limitations, and in some cases we are not able to install Enterprise re-signed applications due to Apple restrictions and protections.

:::

1. Open your app project in Xcode.
2. Select **Generic iOS Device** or **Any iOS Device (arm64)** as your project's device target.
3. In the **Product** menu, select **Clean Build Folder**.
4. In the **Product** menu, select **Archive**. When the archiving process completes, you'll see your app listed under **Archives**.
5. Select your app and click **Distribute App**.
6. When prompted for a distribution method, select **Custom**, and click **Next**.
7. On the next step, select **Release Testing**, and click **Next**.
7. Set these **distribution** options:
   1. App Thinning: None.
   2. Clear the selection **Include manifest for over-the-air installation**.
8. Select your **Distribution Certificate**, **Provisioning Profile** (**Automatic** or **Manual**), and click **Next**. This will generate the `.ipa` file.
9. When the file generation process completes, click **Export** and choose where to save the `.ipa` file.
10. Your `.ipa` file is now ready for upload to Sauce Labs.

## Creating an .ipa File from a XCUITest Package

:::note

`saucectl` supports archiving from `.app` to `.ipa` [Testing with XCUITest](/mobile-apps/automated-testing/espresso-xcuitest) when [`devices`](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#devices) are used during the configuration of your [`suites`](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#suites).

:::

1. Open your app project in Xcode.
2. Select **Generic iOS Device** or **Any iOS Device (arm64)** as your project's device target.
3. Make sure that your UI tests are part of a **Target Membership** and that those Targets are selected to be built in your Xcode **Build scheme**. _Targets containing UI Tests are typically selected to be built at the "Test" build action._
   <img src={useBaseUrl('img/xcuitest/xcode-build.png')} alt="Xcode Build Options" width="800" />

4. Generate your test package by selecting **Product** > **Build For** > **Testing**.
5. Navigate to your Xcode project's **Products** directory and find the generated **.app** file.
6. Create an empty directory with the name `Payload`.
7. Move the **.app** file inside the `Payload` directory.
8. Compress the `Payload` directory into an archive (.zip file) and give it a new name with .ipa appended to the end of the file name.
9. Your `.ipa` file is now ready for upload to Sauce Labs.

## Setting iOS Deployment Target for XCUITest Compatibility

Make sure that you set the same iOS version for your app and test runner **iOS Deployment Target**. If they don't match, your tests will run locally, but fail when you run them against Sauce Labs real devices.

To set the iOS version in your Xcode Project:

1. Select the Project you want to build.
2. Under **Build Settings**, set the **iOS Deployment Target** to the iOS version you want to use in your test. All target outputs of this project, including the app and your test runner, will be set to the same iOS version.

To set the iOS version in your Xcode Target:

1. Select the Target for your Project.
2. Under **Build Settings**, set the iOS Deployment Target to the iOS version you want to use in your test.

:::caution
This will also overwrite the **Build Settings** at the Project level to that iOS version. If you use this method, be aware that your Targets can become out of sync with each other and the Project settings, and your tests will break. If you change the iOS version for one target output, you may want to build the Project again to make sure all your targets are in sync.
:::

## Sauce Labs Resigning Enablements

:::note Documentation moved

Details of the resigning Enablements were moved to [Features/iOS App Resiging#Side Effects](/docs/mobile-apps/features/ios-app-resigning.md#side-effects-of-re-signing-your-app)

:::

## Common Errors

:::note Documentation moved

Details of the resigning Enablements were moved to [Features/iOS App Resiging#Common Errors](/docs/mobile-apps/features/ios-app-resigning.md#common-errors)

:::
