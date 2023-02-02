---
id: live-mobile-app-testing
title: Live Mobile App Testing
sidebar_label: Live Mobile App Testing
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With Sauce Labs, you can test your mobile apps on a variety of Android and iOS/iPadOS devices. If you do not have an app, consider using the [Sauce Labs demo app](https://github.com/saucelabs/my-demo-app-rn) for validating your account functionality as well as your tests.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your mobile app file. If you don't have one on hand, consider using our Demo Apps:
  - [React Native Demo App](https://github.com/saucelabs/my-demo-app-rn/releases)
  - [iOS Demo App](https://github.com/saucelabs/my-demo-app-ios/releases)
  - [Android Demo App](https://github.com/saucelabs/my-demo-app-android/releases)

### Uploading an App

You can upload your app via the Sauce Labs UI or via the REST API. For information about uploading via the API, see [Upload Files with the REST API](/mobile-apps/app-storage).

To upload an app via the Sauce Labs UI:

1. On Sauce Labs, in the left panel, click **App Management**.
2. To upload an app you can either drag and drop an app or browse for and select the file. We currently support \*.apk Android app files, \*.aab Android App Bundle files, and \*.ipa or \*.zip iOS app files (\*.zip files are parsed to determine whether a valid \*.app bundle exists). Non-app file uploads are not supported in the UI at this time, but can be uploaded through the API.

If you don't have an app to test, you can use the [Sauce Labs sample mobile app](https://github.com/saucelabs/sample-app-mobile).

<img src={useBaseUrl('img/live-testing/live-mobile-app-management.png')} alt="Upload an app" width="650"/>

### Deleting an App

Deleting an app in Sauce Labs will delete the whole app (i.e., the group of builds belonging to the same app package). Files associated with app identifiers (i.e., belonging to the same platform and accessible to the same team) are indicated by the + symbol next to the version number. Also, the version number shown is the most recently updated file, not necessarily the latest version of the app.

To delete an app, on the **App Management** page, hover over the app and then click **Delete**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-delete.png')} alt="Delete an app" width="850"/>

### App Settings

To view or change the app settings, on the **App Management** page, hover over the app and then click **Settings**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-settings.png')} alt="App settings" width="850"/>

To easily copy a test's file name or ID, hover over the test and then click the clipboard icon.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-copy.png')} alt="Copy a file name or ID" width="850"/>

:::note
The app settings screen is only available for real device testing.
:::

To view your recent configurations, click **Recents**.

<img src={useBaseUrl('img/live-testing/live-testing-recent-tests-nav.png')} alt="Recent tests" width="550"/>

**Default App Settings**

| Setting                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Device Language                                                                            | Use the dropdown to select the device language. The language selector will tell your application that the locale of the device and region is set to the selected parameter. You won't need to change the language of the OS manually during a session inside iOS/Android settings. For more information about the locale setting, see the documentation for [iOS](https://developer.apple.com/documentation/foundation/locale) and [Android](https://developer.android.com/reference/java/util/Locale).                                                                                     |
| Device Orientation                                                                         | Use the dropdown to set the device orientation (Landscape or Portrait).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Proxy                                                                                      | Enable/disable the use of a proxy. Enter the **Hostname** and **Port** and then click **Update**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Device Passcode <br/><p><span className="sauceDBlue">Real Devices Only</span></p>          | Enable/disable the device passcode for your apps. If your app requires a device passcode/screenlock to launch, you can enable this setting to run your tests on a passcode-protected device.                                                                                                                                                                                                                                                                                                                                                                                                |
| Instrumentation                                                                            | Enable/disable device instrumentation. Enabling allows you to use advanced features when testing your app in the real device cloud, like image injection and taking screenshots of secure views.                                                                                                                                                                                                                                                                                                                                                                                            |
| Image Injection                                                                            | Enable/disable image injection. Image injection allows you to mimic camera behavior when testing apps by letting you upload an image and present it to the app as if it were read by the device camera.                                                                                                                                                                                                                                                                                                                                                                                     |
| Bypass Screenshot Restriction <br/><p><span className="sauceDBlue">Android Only</span></p> | Enable/disable Bypass Screenshot Restriction (not supported on apps uploaded to the legacy sauce storage). If you're testing Android mobile apps on Sauce Labs and see a black screen in your live testing session, you might need to enable the <b>Bypass Screenshot Restriction</b>. This allows Sauce Labs to work around a setting on those apps that prevents screenshots or videos from being taken. However, there are other details to keep in mind. To effectively test apps that have this setting, see [Bypass Screenshot Restriction](/mobile-apps/features/bypass-screenshot). |
| System Alerts Display <br/><p><span className="sauceDBlue">iOS Only</span></p>             | Enable/disable a system alerts delay. Enabling delays alerts, such as asking for permission to access the camera, to prevent app crashes at startup.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Biometrics Interception                                                                    | Enable/disable biometrics. Enabling allows you to choose authentication options if your mobile app requires a biometric authentication, such as fingerprint or face recognition on Android, and Face ID or Touch ID on iOS.<br/> This setting is disabled by default for iOS apps.                                                                                                                                                                                                                                                                                                          |
| Group Folder Redirect <br/><p><span className="sauceDBlue">iOS Only</span></p>             | Enable/disable a group directory redirect. Enabling allows you to use your app's private app container directory instead of the shared app group container directory. When your app gets resigned, the shared directory is not accessible.                                                                                                                                                                                                                                                                                                                                                  |

:::note
Any changes you make to the app settings will affect all uploaded versions of the app.
:::

**Example Settings - iOS**

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-ios.png')} alt="App settings - iOS" width="750"/>

**Example Settings - Android**

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-android.png')} alt="App settings - Android" width="780"/>

Most settings update automatically, however, when you make changes to the proxy setting, click **Update** to finish.

### Selecting a Device

You must select a device prior to launching a session.

On the **App Management** page, hover over the app you want to test and then click **Start Test**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-test.png')} alt="Choose a device" width="750"/>

The device selection page will open, with the option to test on a real device or a virtual device.

:::note
If you are testing an iOS app, the device selection will only display the type (real/virtual) configured on the app.
:::

To mark a device as a favorite so you can find it easily in the future, click the pin icon next to the device name.

<img src={useBaseUrl('img/live-testing/device-favorite.png')} alt="Favorite a device" width="350"/>

The default sorting for the device list is **Pinned First**.

#### Real Devices

On the device selection page, click the **Mobile Real** tab. Use the search box and filters to find the device you want to test on, or select the device in the grid.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-real.png')} alt="Mobile Real tab" width="750"/>

#### Virtual Devices

On the device selection page, click the **Mobile Virtual** tab. Use the dropdowns to select the details for the virtual device you want to test on, and then click **Start Test**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-virtual.png')} alt="Mobile Virtual tab" width="550"/>

#### **Public vs. Private Devices**

There is a distinction between **Public Devices** and **Private Devices**.

- Public devices are accessible by anyone with a Sauce Labs account and are subject to availability. If a device is in use, you will see a yellow **In Use** flag across the thumbnail.

<img src={useBaseUrl('img/live-testing/live9.png')} alt="Busy public device" width="400"/>

- Private devices are associated with your account and are an **enterprise only** feature. Private devices are indicated by a green device icon.

:::note 
If you are interested in upgrading to an enterprise plan, contact your Sauce Labs Sales Engineer or Customer Success Manager. 
:::

### Launching a Test

You can launch a test from the following screens:

- Hover over the device in the grid and then click **Start Test**.
- Hover over the device in the grid and then click **Details**. On the **Details** screen, click **Start Test**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-start-test.png')} alt="Launch a test from the Details screen" width="750"/>

You'll see a loading screen, and then the app will launch in a live test window using the device you selected.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-demo-app.png')} alt="Mobile real device test interface" width="550"/>

#### Time Limits and Timeouts for Real Devices

- Live tests for free users have a 10 minute limit from session start
- Live tests for all other users are limited to six hours
- Live tests for paid users will timeout after 15 minutes of inactivity

### Trusting Enterprise Certificates

If you upload an app that is signed with an enterprise certificate, and **Instrumentation** is DISABLED in app settings, you must manually trust the certificate before it will successfully launch.

1. If you receive an app installation failed error, click the **X** in the app loading screen to exit the device home screen.
1. On the device home screen, navigate to **Settings** -> **General**.
1. Under **Profiles & Device Management**, tap the app you are trying to install and test.
1. Tap **Trust "app name"** and then tap **Trust**.
1. Reopen the app to continue the test.

## Live Test Interface

| Icon                                                                                                                     | Name                | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| :----------------------------------------------------------------------------------------------------------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src={useBaseUrl('img/live-testing/pin-unpin-icon.png')} alt="Unpin/Pin Toolbar icon" width="35"/>                   | Unpin/Pin Toolbar   | Unpins or pins the live testing toolbar.                                                                                                                                                                                                                                                                                                                                                    |
| <img src={useBaseUrl('img/live-testing/session-info-icon.png')} alt="Session Info icon" width="35"/>                     | Session Info        | Opens the **Current Session** window, which includes app and device details.                                                                                                                                                                                                                                                                                                                |
| <img src={useBaseUrl('img/live-testing/take-screenshot-icon.png')} alt="Take Screenshot icon" width="35"/>               | Take Screenshot     | Takes a screenshot of the current device screen. The image downloads automatically as a .png file.                                                                                                                                                                                                                                                                                          |
| <img src={useBaseUrl('img/live-testing/share-session-icon.png')} alt="Share Session icon" width="35"/>                   | Share Session       | Opens the **Share Device** window. For a sharable link to the device, click **Get Link**. <br/>Users must be logged in to be able to view the test.                                                                                                                                                                                                                                         |
| <img src={useBaseUrl('img/live-testing/rotate-device-icon.png')} alt="Rotate Device icon" width="35"/>                   | Rotate Device       | Rotates the device between portrait and landscape.                                                                                                                                                                                                                                                                                                                                          |
| <img src={useBaseUrl('img/live-testing/home-icon.png')} alt="Home icon" width="35"/>                                     | Home                | Opens the device home screen.                                                                                                                                                                                                                                                                                                                                                               |
| <img src={useBaseUrl('img/live-testing/more-device-options-icon.png')} alt="More Device Options icon" width="35"/>       | More Device Options | **Set Location** - Set the GPS location using coordinates or by dropping a pin on the map. <br/> **Camera Injection** - Opens the **Camera Injection** window. See [Camera Image Injection](/mobile-apps/features/camera-image-injection) for more information.<br/> **Biometric Injection** - Opens the [Biometric Authentication](/mobile-apps/features/biometric-authentication) window. |
| <img src={useBaseUrl('img/live-testing/restart-app-icon.png')} alt="Restart App icon" width="35"/>                       | Restart App         | Restarts the app.                                                                                                                                                                                                                                                                                                                                                                           |
| <img src={useBaseUrl('img/live-testing/switch-app-version-icon.png')} alt="Switch App Version icon" width="35"/>         | Switch App Version  | Opens the **Switch App Version** window. To change the version of the app you are testing, hover over the version and then click **Choose version**.                                                                                                                                                                                                                                        |
| <img src={useBaseUrl('img/live-testing/clipboard-icon.png')} alt="Clipboard icon" width="35"/>                           | Clipboard           | Opens the **Paste Content Into Device** window.                                                                                                                                                                                                                                                                                                                                             |
| <img src={useBaseUrl('img/live-testing/install-dependency-icon.png')} alt="Install Dependency icon" width="35"/>         | Install Dependency  | Opens the **Install Dependent App** window.                                                                                                                                                                                                                                                                                                                                                 |
| <img src={useBaseUrl('img/live-testing/dev-options-icon.png')} alt="Developer Options icon" width="35"/>                 | Developer Options   | Opens the **Developer Options** panel, which includes the **Device Log** and **Dev Tools** tabs.                                                                                                                                                                                                                                                                                            |
| <img src={useBaseUrl('img/live-testing/live-mobile-app-management-audio.png')} alt="Developer Options icon" width="35"/> | Mute/Unmute         | Mutes or unmutes audio for your testing session.                                                                                                                                                                                                                                                                                                                                            |

### Device Log

<img src={useBaseUrl('img/live-testing/device-log.png')} alt="Device Log" width="450"/>

| Icon                                                                                                 | Name         | Description                                                                                                                                                                                             |
| :--------------------------------------------------------------------------------------------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src={useBaseUrl('img/live-testing/log-level.png')} alt="Log Level" width="85"/>                 | Log Level    | <ul><li>VERBOSE </li><li>DEBUG </li><li>INFO </li><li>WARN </li><li>ERROR </li><li>ASSERT </li></ul>                                                                                                    |
| <img src={useBaseUrl('img/live-testing/search-log-icon.png')} alt="Search Log icon" width="40"/>     | Search Log   | Opens the **Search log** interface. Enter a term or terms in the search box and select or deselect the following checkboxes as necessary: <ul><li>REGEX </li><li>IGNORE CASE </li><li>INVERT </li></ul> |
| <img src={useBaseUrl('img/live-testing/pause-log-icon.png')} alt="Pause Log icon" width="40"/>       | Pause Log    | Pauses the log feed.                                                                                                                                                                                    |
| <img src={useBaseUrl('img/live-testing/wrap-text-icon.png')} alt="Wrap Text icon" width="40"/>       | Wrap Text    | Wraps text in the log for easier reading.                                                                                                                                                               |
| <img src={useBaseUrl('img/live-testing/clear-log-icon.png')} alt="Clear Log icon" width="40"/>       | Clear Log    | Clears the log feed.                                                                                                                                                                                    |
| <img src={useBaseUrl('img/live-testing/download-log-icon.png')} alt="Download Log icon" width="40"/> | Download Log | Downloads the log as a .txt file.                                                                                                                                                                       |

## Changing an App Version

Sometimes you need to conduct A/B testing, or document and validate feature parity between different versions of the same app. You can change the app version, as well as the real device, and launch a new test session.

1. On the **App Upload** page, click the +**_n_** in the **Version** column.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-version.png')} alt="App with multiple versions" width="750"/>

2. On the **Settings** page, in the versions list, hover over the version you want to launch.
3. Click **Start Test**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-management-version-start.png')} alt="Change the version of an app" width="750"/>

## Testing Apple Pay in Mobile Apps

There are three ways to test Apple Pay with Sauce Labs:

- Using simulators
- Using real private devices with an Apple Pay Sandbox Testing account
- Using real private devices with a real production account and real credit cards

### Requirements

- You need to use [Private devices](#apple-pay-on-real-private-devices).
- [Instrumentation](#disable-instrumentation) needs to be disabled.
- You need to add your Sauce Labs hosted Private device [UDID](#apple-pay-on-real-private-devices) to your own provisioning profile.
- Devices need to have a physical home button (for instance, iPhone SE(2020/2022)/6 series/7 series/8 series). A physical button will require the passcode for payment confirmation.

:::note
Devices with a notch (like the iPhone X(S)/11/12/..) will ask for FaceId confirmation. As this feature is disabled, the payment will fall back to a different confirmation method. It will use a double press on the power button for the payment approval. However, this method is not supported.
:::

### Apple Certificates

Apple certificates are used to ensure security in their systems, and they are much more strict about them than Android. This level of security makes certificates a very complex part of making Apple Pay work with devices in a cloud.

To give you an example, Android apps can be installed without any specific signing on whatever real device you want. With Apple you have two options, or you need to add a remote device to your developer certificate and the provisioning profile, so you are allowed to install the app on that specific device. Or you need to use an enterprise certificate where the Apple device that has that certificate installed allows you to install the app. Similarly, when you install an iOS app on a device, we re-sign the app with a Sauce Labs enterprise certificate so you can install your app on all Sauce Labs public/private devices.

:::note
Apple Pay has a limitation that it cannot work with an enterprise certificate. You need to use the developer certificate where the device has been added to the provisioning profile in order to make this work. This can only be done for Sauce Labs private devices on which you have disabled the instrumentation.
:::

### Apple Pay on Real Private Devices

:::note
Our real devices are cleaned after every test session. Therefore, you need to configure your Apple Pay Sandbox Testing account, including a passcode and sandbox cards, every time you want to test Apple Pay on an iOS real device.
:::

To make Apple Pay work on Sauce Labs real private devices:

1. **Follow Apple’s steps to enable Apple Pay (see [Setting Up Apple Pay Requirements](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay_requirements))**. Apple is strict about certificates, so they require you to follow very specific steps:
1. Set up Apple Pay integration in your app.
1. Register the Merchant ID in your Apple developer account.
1. Set up an Apple sandbox tester account (see [Create a sandbox tester account](https://help.apple.com/app-store-connect/#/dev8b997bee1) for more information).
1. **Build your app**. Apple Pay doesn’t work with enterprise certificates, so it will not work with Sauce Labs out of the box. The first step is to add the Sauce Labs real private devices to your Apple developer certificate before building the app. You can do that in one of the following ways:
1. Manually adding the device and its UDID to the device list for your developer certificate.
   :::note
   Your device list can be found on Apple’s [Certificates, Identifiers & Profiles page](https://developer.apple.com/account/resources/) for your developer account, and you can get the UDID of your private device by contacting your Sauce Labs CSM.
   :::
1. Using the Sauce Labs Virtual USB solution:

   1. Start a session with Virtual USB (see [Testing with Virtual USB on Real Devices](/mobile-apps/features/virtual-usb) for more information).
   2. When the connection is established, open **XCODE**.
   3. Select the device from the device list.

   <img src={useBaseUrl('img/live-testing/apple-pay-1.png')} alt="Apple Pay setup - device list" width="650"/>

   On the **Signing & Capabilities** tab, you will see that the device has not yet been added.

   <img src={useBaseUrl('img/live-testing/apple-pay-2.png')} alt="Apple Pay setup - device not added" width="650"/>

   4. Click **Register Device** to add the device to your developer certificate.

   <img src={useBaseUrl('img/live-testing/apple-pay-3.png')} alt="Apple Pay setup - add device to certificate" width="650"/>

   5. Once the UDID of the device is added to the developer certificate, you can build the app (manually or automatically):
      1. Select your build scheme and then select **Generic iOS Device**.
      2. To build the app, click **Product** and then click **Archive**.
      3. Click **Distribute App**.
      4. Distribute the app with **Ad Hoc** and **Automatically manage signing**.
      5. Store the app on your local machine.

   If the app has been built, you should not yet upload it to Sauce Labs. The device to be tested needs to be prepared. If you have already prepared the device, then you can skip to step 4.

1. Prepare the device. Set up the first Sauce Labs private device to use Apple Pay with the Apple sandbox account that was created in step 1.

### Passcode

One of the Apple Pay requirements is having a set passcode on your phone. Without it, you won't be able to add cards to your wallet. You need to use our Device Passcode capability.

### Add Apple Sandbox Test Cards

Apple test cards can be found on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.

1. On your device, go to **Wallet**. If you didn’t set the passcode capability, Apple will show a notification.

<img src={useBaseUrl('img/live-testing/apple-pay-6.png')} alt="Apple Pay setup - passcode notification" width="250"/>

2. In **Wallet**, tap the plus sign to add a new card. Use the card information on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.

<img src={useBaseUrl('img/live-testing/apple-pay-7.png')} alt="Apple Pay setup - Add new card" width="250"/>

3. **Prepare Sauce Labs**. As mentioned before, Sauce Labs uses an enterprise certificate to install an app on public and private devices. But Apple Pay can’t work with the enterprise certificate, so the app needs to be signed with the developer certificate. You need to instruct Sauce Labs to not re-sign the app when it is installed.

### Disable Instrumentation

1. On Sauce Labs, in the left navigation, click **Live** and then click **Mobile-App**.

<img src={useBaseUrl('img/live-testing/apple-pay-8.png')} alt="Apple Pay setup - Sauce login" width="250"/>

You will see an overview of the already uploaded apps. If no app has been uploaded, then upload the app. Once uploaded, open the app settings by hovering over the row until you see this:

<img src={useBaseUrl('img/live-testing/apple-pay-9.png')} alt="Apple Pay setup - Settings" width="650"/>

2. Click **Settings**.

<img src={useBaseUrl('img/live-testing/apple-pay-10.png')} alt="Apple Pay setup - Settings" width="650"/>

3. Under **Default settings**, toggle **Instrumentation** to **Disabled**.

<img src={useBaseUrl('img/live-testing/apple-pay-11.png')} alt="Apple Pay setup - Disable instrumentation" width="350"/>

Disabling this allows the app to use Apple Pay and the developer certificate and provisioning profile that you used when you built the app.

:::note
Disabling re-signing will break the installation of the app on public devices. The app will only be allowed to be installed on private devices that have been added to the developer certificate and provisioning profile.
:::

4. Once the app has been uploaded and re-signing has been disabled, you can start the device and let Sauce Labs install the app on the device.

5. **Test the app**. View the Sauce Labs Demo Payments app:

<img src={useBaseUrl('img/live-testing/apple-pay-12.png')} alt="Apple Pay setup - Demo app" width="250"/>

<img src={useBaseUrl('img/live-testing/apple-pay-13.png')} alt="Apple Pay setup - Demo app" width="250"/>

<img src={useBaseUrl('img/live-testing/apple-pay-14.png')} alt="Apple Pay setup - Demo app" width="250"/>

<img src={useBaseUrl('img/live-testing/apple-pay-15.png')} alt="Apple Pay setup - Demo app" width="250"/>
