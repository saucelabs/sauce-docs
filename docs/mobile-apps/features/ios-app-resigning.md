---
id: ios-app-resigning
title: iOS App Resigning
sidebar_label: iOS App Resigning
description: Learn why we resign apps and what consequences it has.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span className="sauceGreen">Real Devices Only, iOS devices only</span></small></p>

Apple requires that any app that runs on a real iOS device is "signed" with a certificate that was issued by Apple. Signing is a security measure: it proves the app comes from a trusted source, so iOS devices only allow signed apps to run.

Instrumentation features on iOS require changes to the source code of your app. After these changes, the app must be re-signed to run on a real device.

This has three consequences for running iOS tests on Sauce Labs real devices:

1. If you want to use any of our Instrumentation features, resigning must be enabled; otherwise, your app cannot run on the device after we have modified its source code.
2. If you want to use our public devices, resigning must be enabled; otherwise, public devices will refuse to run your app.
3. If you do not want us to re-sign your app, you may only use private devices and cannot use any Instrumentation features.


## How to Enable and Disable Re-Signing

By default re-signing is always turned on. Sauce Labs allows you to disable resigning on private devices only. To access our private device cloud, contact your Sauce Labs account executive or our support team.

By disabling re-signing you can ensure that all app entitlements stay unchanged, you can install apps using your own provisoning profile, or you can isntall apps that were signed with an Enterprise certificate, which can include any entitlements.

**For Appium:** Use the 'resigningEnabled' flag in the Sauce Options: [disable resigning](/dev/test-configuration-options/#resigningenabled).

**For XCUITest & XCTest:** Use the 'resigningEnabled' flag in the saucectl config: [disable resigning for XCTest](/docs/mobile-apps/automated-testing/espresso-xcuitest/xctest-config.md#resigningenabled).

**For Live Testing:** Change the settings for your app in the [App Management UI](https://app.saucelabs.com/app-management) and enable the 'Instrumentation' flag.

:::note Ambiguous names
Sometimes, the terms "instrumentation" and "re-signing" are used interchangeably in our documentation. This is because re-signing is required for any instrumentation features on iOS, while Android only uses instrumentation without re-signing.
:::

## Side Effects of Re-Signing Your App

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
| `com.apple.developer.pass-type-identifiers`          | `<array>`<br/>&nbsp;&nbsp; `<string>XXXXXXXXXX.*</string>`<br/>`</array>` |


## Common Errors

### Unable To Verify App

If you are facing the issue where the app crashes with a red screen and an "Unable to Verify App" popup:
<img src={useBaseUrl('img/mobile-apps/verify-app-error.png')} alt="Mobile app settings navigation" width="350"/>

This means your proxy might be blocking Apple's signature check for installing custom enterprise apps on iOS. Apple has recently started rolling out a new signature verification and PPQS check for new provisioning profiles and our new accounts. During installation, Apple sends an initial API request to verify the signature of the app.

We recommend that you try the following workarounds:

1. Disable the proxy for the device you are using to install the app.
2. If the above solution does not work, try using a different network without the proxy.

We do not have control over Apple's signature verification process. It is recommended to work with your network administrator to ensure that Apple's signature check is not blocked by the proxy.


### Unable to Access Downloads Folder Using 'fileImporter' SwiftUI API

Apple prevents access to private sandbox data via [fileImporter](https://developer.apple.com/documentation/swiftui/view/fileimporter(ispresented:allowedcontenttypes:allowsmultipleselection:oncompletion:)) (and likely other APIs) after resigning an app.

The console may contain one of the following error messages:
```
Could not resolve bookmark
Failed to create a url from bookmarkableString
Tried to call delegate -documentBrowser:didPickDocumentURLs: with an empty array of item
```

