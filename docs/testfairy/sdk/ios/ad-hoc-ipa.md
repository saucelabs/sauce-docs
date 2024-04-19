---
id: ad-hoc-ipa
title: Exporting Ad Hoc IPA
sidebar_label: Exporting Ad Hoc IPA
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An Ad Hoc provisioning profile allows your app to be installed on designated devices without the assistance of Xcode. This distribution method is particularly useful for testing your app on specific devices before it's released to the public.

Apple allows app distribution for testing on registered devices using an **Ad-Hoc** or **Enterprise** provisioning profile. The output file you create is an iOS App file (a file with an `.ipa` filename extension) that is then used to install your app on registered devices.

## Prerequisites

Before proceeding with the steps below, ensure that you have completed the following:

1. **Register Test Devices** Register all the test devices on which you intend to install and test your app. You can follow the instructions in the [Registering Your iOS Device UDID Number](https://docs.saucelabs.com/testfairy/testing-an-app/testers/reg-ios-device/) to complete this step.
2. **Create Ad Hoc Provisioning Profile** - Make sure you have created an Ad Hoc provisioning profile on the Apple Developer Portal. This provisioning profile should specify an App ID that matches your app, a list of test devices, and a single distribution certificate.
3. **Archive Your App** - Create an archive of your app using Xcode. This archive will be used to generate the Ad Hoc IPA file.

## About Ad Hoc Provisioning Profiles

An ad hoc provisioning profile is a distribution provisioning profile that allows your app to be installed on designated devices and to use app services without the assistance of Xcode.

There are 4 types of distribution provisioning profiles you can create for apps:

- **iOS App Store** - for distributing through the apple app store.

- **Ad Hoc** - for installing on **[designated devices]** see [Adding UDIDs toiOS development profile](https://docs.saucelabs.com/testfairy/sdk/ios/adding-udids/).

- **Enterprise** - for distributing an app within your organization, see [this documentation](https://developer.apple.com/programs/enterprise/).

- **Development** - For distributing within members of your team, see [this documentation](https://developer.apple.com/support/certificates/).

Make sure you have created an Ad Hoc provisioning profile specifying an `App ID` that matches one or more of your apps, a set of **test devices**, and a single **distribution certificate** at the developer portal. For more information, see [this documentation](https://idmsa.apple.com/IDMSWebAuth/login?&appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2F%2Fmembercenter%2Findex.action).

We warmly recommend any company to apply to Apple's iOS Developer Enterprise Program. See [](https://developer.apple.com/programs/enterprise/), and sign iOS apps for internal use with an Enterprise certificate.

:::note
Please note that this document is not a legal resource, and for the most accurate and up-to-date information, refer to Apple's official documentation and terms of service.
:::

## Exporting Your App to an IPA (Ad Hoc provisioning profile)

Follow these steps to export your app for testing using the Ad Hoc provisioning profile:

1. Open your Xcode project.
2. In the Xcode project editor, select either `Generic iOS Device` or the name of your connected device from the Scheme toolbar menu. Note that you cannot create an archive of a simulator build.
3. Choose **Product** and then **Archive** from the top menu. The **Archives organizer** will appear, displaying the new archive.
   Xcode will perform preliminary validation tests on the archive. To proceed with creating the IPA file, click the "Distribute App" button.
4. A dialog will appear with export options. Choose the `Save for Ad Hoc Deployment` option. This ensures that the app will be code signed with the distribution certificate.
5. In the next dialog, select a signing method and click "Next."
6. On the distribution options screen, customize the settings as needed and click "Next."
7. Review the app details, entitlements, and provisioning profile in the appearing dialog.
8. Click the **Export** button. The Finder will display the exported files. Save the exported IPA file to your desired location.

## Installing Your App on Test Devices Using Xcode

After exporting the Ad Hoc IPA file, you can install it on your registered test devices using Xcode:

1. Connect the test device to your Mac using a USB cable.
2. Open Xcode on your Mac.
3. Choose **Window** and then **Devices** from the top menu.
4. In the **Devices** window, select the connected test device from the list.
5. In the Installed Apps section, click the **+** button to add an app.
6. In the dialog that appears, select the exported iOS App file (IPA) and click "Open."
7. Xcode will install the app on the test device, and it will appear in the list of installed apps.

## Accessing Logs from Xcode

Accessing raw logs on an iOS device requires hooking up that device via a USB cable to a computer. System logs often help a lot in debugging vague problems around app installation.

The error displayed on an iOS device screen is often too generic, but the system logs explain more thoroughly the reason for the problem. To get the logs, complete the following:

1. Open Xcode.
2. Open menu Window > Devices.
3. Select the device which you want to inspect.
4. Click on the **View Device Logs**.
5. A new window will open up with up-to-date logs from the device.
