---
id: ipa-files
title: Creating Real Device .ipa Files for Appium and XCUITest
sidebar_label: iOS Real Device .ipa Files
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note

To install your iOS app on our cloud devices we need to include our own provisioning profile in your app. We use a [resigning process](#sauce-labs-resigning-enablements) to include our provisioning profile in your app. While this process does not modify the functionality of the app, it touches [certain entitlements in your app](#sauce-labs-resigning-enablements). It is possible to disable the resigining process by buying your own private devices with dedicated provisioning profiles, see [here](#private-devices).

:::

## Creating .ipa Files for Appium Testing

### Building an .app Bundle

1. Open your app project in Xcode.
2. Select a **Generic iOS Device** or **Any iOS Device (arm64)** as your product's device target.
3. In the **Product** menu, select **Clean**.
4. In the **Product** menu, select **Build**.
5. Navigate to your Xcode project's **Products** directory and find the generated **.app** file.

#### Building an .ipa from an .app Bundle

1. Create an empty directory with the name `Payload`.
2. Move the **.app** file inside the `Payload` directory.
3. Compress the `Payload` directory into an archive (.zip file) and give it a new name with .ipa appended to the end of the file name.
4. Your `.ipa` file is now ready for upload to Sauce Labs.

### Building an .ipa File

You can use any of the existing methods of distribution for your iOS app, except for the **App Store** type. This means that you can choose any of the three other export methods: **Ad Hoc**, **Enterprise**, or **Development**.

:::info Recommendation

We highly recommend to use Ad-hoc and Development targets to get the most out of our capabilities. Enterprise-signed apps have limitations, and in some cases we are not able to install Enterprise re-signed applications due to Apple restrictions and protections.

:::

1. Open your app project in Xcode.
2. Select **Generic iOS Device** or **Any iOS Device (arm64)** as your project's device target.
3. In the **Product** menu, select **Clean**.
4. In the **Product** menu, select **Archive**. When the archiving process completes, you'll see your app listed under **Archives**.
5. Select your app and click **Export**.
6. When prompted for an export method, select **Ad Hoc**, **Development** or **Enterprise**.
7. Set these **Distribution** options:
   1. App Thinning: None.
   2. Clear the selection **Rebuild from Bitcode**.
   3. **Strip Swift symbols** is optional.
   4. Clear the selection **Include manifest for over-the-air installation**.
8. Select your **Distribution Certificate** and **Provisioning Profile** (**Automatic** or **Manual**). This will generate the `.ipa` file.
9. When the file generation process completes, click **Export** and choose where to save the `.ipa` file.
10. Your `.ipa` file is now ready for upload to Sauce Labs.

## Creating an XCUITest Package

:::note

`saucectl` supports archiving from `.app` to `.ipa` [Testing with XCUITest](/mobile-apps/automated-testing/espresso-xcuitest) when [`devices`](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#devices) are used during the configuration of your [`suites`](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#suites).

:::

1. Open your app project in Xcode.
2. Select **Generic iOS Device** or **Any iOS Device (arm64)** as your project's device target.
3. Make sure that your UI tests are part of a **Target Membership** and that those Targets are selected to be built in your Xcode **Build scheme**. _Targets containing UI Tests are typically selected to be built at the "Test" build action._
   <img src={useBaseUrl('img/xcuitest/xcode-build.png')} alt="Xcode Build Options" width="800" />

4. Generate your test package by selecting **Product** > **Build For** > **Testing**.
5. Navigate to your Xcode project's **Products** directory and find the generated **.app** files.

## Creating .ipa Files for XCUITest Testing

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

### Public Devices

Sauce Labs applies its own resigning to apps that are installed on our public iOS devices. Our resigner includes the following `keychain-access-groups` entitlements:

| Key                                                  | Value                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `application-identifier`                             | `<string>XXXXXXXXXX.*</string>`                                                                                                                                                                                                                                                                     |
| `keychain-access-groups`                             | `<array>`<br/>&nbsp;&nbsp;`<string>XXXXXXXXXX.*</string>`<br/>&nbsp;&nbsp;`  <string>com.apple.token</string>`<br/>`</array>`                                                                                                                                                                       |
| `get-task-allow`                                     | `<true/>`                                                                                                                                                                                                                                                                                           |
| `com.apple.developer.team-identifier`                | `<string>XXXXXXXXXX</string>`                                                                                                                                                                                                                                                                       |
| `com.apple.developer.ubiquity-kvstore-identifier`    | `<string>XXXXXXXXXX.*</string>`                                                                                                                                                                                                                                                                     |
| `com.apple.developer.ubiquity-container-identifiers` | `<array>`<br/>&nbsp;&nbsp;`<string>XXXXXXXXXX.*</string>`<br/>`</array>`                                                                                                                                                                                                                            |
| `inter-app-audio`                                    | `<true/>`                                                                                                                                                                                                                                                                                           |
| `com.apple.developer.networking.networkextension`    | `<array>`<br/> &nbsp;&nbsp;`<string>app-proxy-provider</string>`<br/>&nbsp;&nbsp;`<string>content-filter-provider</string>`<br/> &nbsp;&nbsp;`<string>packet-tunnel-provider</string>`<br/>&nbsp;&nbsp;`<string>dns-proxy</string>`<br/> &nbsp;&nbsp;`<string>dns-settings</string>`<br/>`</array>` |
| `com.apple.developer.siri`                           | `<true/>`                                                                                                                                                                                                                                                                                           |
| `com.apple.developer.pass-type-identifiers`          | `<array>`<br/>&nbsp;&nbsp; `<string>XXXXXXXXXX.*</string>`<br/>`</array>`                                                                                                                                                                                                                           |

### Private Devices

If your organization or application requires specific entitlements to be present, Sauce Labs allows you to [disable resigning](/dev/test-configuration-options/#resigningenabled) for private devices.
To access our private device cloud, contact your Sauce Labs account executive or our support team. 
When resigning is disabled, you may sign your app using your own provisioning profile, or install an application that is signed with an Enterprise certificate, which can include any entitlements.

To disable the **Resigning**, you can either visit "App Management > \{Your App} > App Settings" ([App Settings](/mobile-apps/live-testing/live-mobile-app-testing/#app-settings)) to disable resigning globally for your app.

You can also use the `sauce:options` [capability](/dev/test-configuration-options/#resigningenabled) `resigningEnabled=false` to disable app resigning for automation. This option is available for private devices only.


## Common Errors

### Unable to Verify App

If you are facing the issue where the app crashes with a red screen and an "Unable to Verify App" popup:
<img src={useBaseUrl('img/mobile-apps/verify-app-error.png')} alt="Mobile app settings navigation" width="350"/>

that means your proxy might be blocking Apple's signature check for installing custom enterprise apps on iOS. Apple has recently started rolling out a new signature verification and PPQS check for new prov. profiles and our new accounts. During installation, Apple sends an initial API request to verify the signature of the app.

We recommend that you try the following workaround:

1. Disable the proxy for the device you are using to install the app.
2. If the above solution does not work, try using a different network without the proxy.

We do not have control over Apple's signature verification process. It is recommended to work with your network administrator to ensure that Apple's signature check is not blocked by the proxy.
