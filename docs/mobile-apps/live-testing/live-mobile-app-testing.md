---
id: live-mobile-app-testing
title: Live Mobile Application Testing
sidebar_label: Live Mobile Application Testing
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With Sauce Labs, you can test your mobile applications on a variety of Android and iOS devices. If you do not have an app, consider using the Sauce Labs Swag Labs sample app for validating your account functionality as well as your tests.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* A mobile app to test. If you don't have one, you can use the [Sauce Labs sample mobile app](https://github.com/saucelabs/sample-app-mobile).

### Uploading an App
You can upload your app via the Sauce Labs UI or via the REST API. For information about uploading via the API, see [Upload Files with the REST API](/mobile-apps/app-storage).

To upload an app via the Sauce Labs UI:

1. In Sauce Labs, in the left panel, click **LIVE** and then click **Mobile App**.
2. Click **App Upload**. You can either drag and drop an application, or browse for and select the file. We currently support \*.apk Android app files (\*.aab file support coming soon) and \*.ipa or \*.zip iOS app files (\*.zip files are parsed to determine whether a valid \*.app bundle exists). Non-app file uploads are not supported in the UI at this time, but can be uploaded through the API.

<img src={useBaseUrl('img/live-testing/live-mobile-app-nav.png')} alt="Upload an application" width="650"/>

### Deleting an App
Deleting an app in Sauce Labs will delete the whole application (i.e., the group of builds belonging to the same app package). Files associated with app identifiers (i.e., belonging to the same platform and accessible to the same team) are indicated by the + symbol next to version number. Also, the version number shown is the most recently updated file, not necessarily the latest version of the application.

To delete an application, on the Mobile App test page, hover over the test and then click **Delete**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-delete.png')} alt="Delete an application" width="650"/>

### App Settings
To view or change the application settings, on the Mobile App test page, hover over the test and then click **Settings**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-settings.png')} alt="Application settings" width="650"/>

To easily copy a test's file name or ID, hover over the test and then click the clipboard icon.

<img src={useBaseUrl('img/live-testing/copy-file-id.png')} alt="Copy a file name or ID" width="450"/>

:::note
The application settings screen is only available for real device testing.
:::

**Default App Settings**

| Setting | Description |
| :--- | :--- |
| Device Language | Use the dropdown to select the device language. |
| Device Orientation | Use the dropdown to set the device orientation (Landscape or Portrait). |
| Proxy | Enable/disable the use of a proxy. Enter the **Hostname** and **Port** and then click **Update**. |
| Instrumentation | Enable/disable device instrumentation. Enabling allows you to use advanced features when testing your app in the real device cloud, like image injection and taking screenshots of secure views.  |
| Image Injection | Enable/disable image injection. Image injection allows you to mimic camera behavior when testing applications by letting you upload an image and present it to the application as if it were read by the device camera. |
| Bypass Screenshot Restriction <br/><p><span className="sauceDBlue">ANDROID ONLY</span></p> | Enable/disable Bypass Screenshot Restriction (not supported on applications uploaded to the legacy sauce storage). Enabling **Bypass Screenshot Restriction** allows you to take screenshots of your app during tests, even if your app does not allow screenshots for security reasons. |
| System Alerts Display <br/><p><span className="sauceDBlue">iOS Only</span></p> | Enable/disable a system alerts delay. Enabling delays alerts, such as asking for permission to access the camera, to prevent app crashes at startup. |
| Biometrics Interception | Enable/disable biometrics. Enabling allows you to choose authentication options if your mobile app requires a biometric authentication, such as fingerprint or face recognition on Android, and Face ID or Touch ID on iOS.<br/> This setting is disabled by default for iOS apps. |
| Group Folder Redirect <br/><p><span className="sauceDBlue">iOS Only</span></p> | Enable/disable a group directory redirect. Enabling allows you to use your app's private app container directory instead of the shared app group container directory. When your app gets resigned, the shared directory is not accessible. |

:::note
Any changes you make to the application settings will affect all uploaded versions of the application.
:::

**Example Settings - iOS**

<img src={useBaseUrl('img/live-testing/live-mobile-app-settings-ios.png')} alt="Application settings - iOS" width="650"/>

**Example Settings - Android**

<img src={useBaseUrl('img/live-testing/live-mobile-app-settings-android.png')} alt="Application settings - Android" width="650"/>

Most settings update automatically, however, when you make changes to the proxy setting, click **Update** to finish.

### Selecting a Device
You must select a device prior to launching a session.

On the **App Selection** page, hover over the app you want to test and then click **Choose Device**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-choose-device.png')} alt="Choose a device" width="650"/>

The device selection page will open, with the option to test on a real device or a virtual device.

:::note
If you are testing an iOS app, the **Virtual Devices** tab will only appear if the app is configured for simulators.
:::

#### Real Devices
On the device selection page, click the **Mobile Real** tab. Use the search box and filters to find the device you want to test on, or select the device in the grid.

<img src={useBaseUrl('img/live-testing/live-mobile-app-real-tab.png')} alt="Mobile Real tab" width="450"/>

#### Virtual Devices
On the device selection page, click the **Mobile Virtual** tab. Use the dropdowns to select the details for the virtual device you want to test on, and then click **Start Session**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-virtual-tab.png')} alt="Mobile Virtual tab" width="250"/>

#### **Public vs. Private Devices**

There is a distinction between **Public Devices** and **Private Devices**.

* Public devices are accessible by anyone with a Sauce Labs account and are subject to availability. If a device is in use, you will see a yellow **Busy** flag across the thumbnail.

<img src={useBaseUrl('img/live-testing/live-mobile-app-busy.png')} alt="Busy public device" width="280"/>

* Private devices are associated with your account and are an **enterprise only** feature. Private devices are indicated by a person icon.

### Launching a Test
You can launch a test from the following screens:
  * Hover over the device in the grid and then click **Launch**.   
  * Hover over the device in the grid and then click **Details**. On the **Details** screen, click **Launch**.

  <img src={useBaseUrl('img/live-testing/live-mobile-app-launch.png')} alt="Launch a test from the Details screen" width="650"/>

  You'll see a loading screen, and then the app will launch in a live test window using the device you selected.

  <img src={useBaseUrl('img/live-testing/live-mobile-test-ui.png')} alt="Mobile real device test interface" width="450"/>

## Live Test Interface

| Icon | Name | Description |
| :--- | :--- | :--- |
| <img src={useBaseUrl('img/live-testing/pin-unpin-icon.png')} alt="Unpin/Pin Toolbar icon" width="35"/> | Unpin/Pin Toolbar | Unpins or pins the live testing toolbar.  |
| <img src={useBaseUrl('img/live-testing/session-info-icon.png')} alt="Session Info icon" width="35"/> | Session Info | Opens the **Current Session** window, which includes app and device details. |
| <img src={useBaseUrl('img/live-testing/take-screenshot-icon.png')} alt="Take Screenshot icon" width="35"/> | Take Screenshot | Takes a screenshot of the current device screen. The image downloads automatically as a .png file. |
| <img src={useBaseUrl('img/live-testing/share-session-icon.png')} alt="Share Session icon" width="35"/> | Share Session | Opens the **Share Device** window. For a sharable link to the device, click **Get Link**. <br/>Users must be logged in to be able to view the test. |
| <img src={useBaseUrl('img/live-testing/rotate-device-icon.png')} alt="Rotate Device icon" width="35"/> | Rotate Device | Rotates the device between portrait and landscape. |
| <img src={useBaseUrl('img/live-testing/home-icon.png')} alt="Home icon" width="35"/> | Home | Opens the device home screen. |
| <img src={useBaseUrl('img/live-testing/more-device-options-icon.png')} alt="More Device Options icon" width="35"/> | More Device Options | **Set Location** - Set the GPS location using coordinates or by dropping a pin on the map. <br/> **Camera Injection** - Opens the **Camera Injection** window. See [Camera Image Injection](/mobile-apps/live-testing/live-mobile-app-testing#camera-image-injection) for more information.<br/> **Biometric Injection** - Opens the **Biometric Authentication** window. |
| <img src={useBaseUrl('img/live-testing/restart-app-icon.png')} alt="Restart App icon" width="35"/> | Restart App | Restarts the app. |
| <img src={useBaseUrl('img/live-testing/switch-app-version-icon.png')} alt="Switch App Version icon" width="35"/> | Switch App Version | Opens the **Switch App Version** window. To change the version of the app you are testing, hover over the version and then click **Choose version**. |
| <img src={useBaseUrl('img/live-testing/clipboard-icon.png')} alt="Clipboard icon" width="35"/> | Clipboard | Opens the **Paste Content Into Device** window. |
| <img src={useBaseUrl('img/live-testing/install-dependency-icon.png')} alt="Install Dependency icon" width="35"/> | Install Dependency | Opens the **Install Dependent App** window. |
| <img src={useBaseUrl('img/live-testing/dev-options-icon.png')} alt="Developer Options icon" width="35"/> | Developer Options | Opens the **Developer Options** panel, which includes the **Device Log**, **Device Vitals**, and **Dev Tools** tabs. |

### Device Log

<img src={useBaseUrl('img/live-testing/device-log.png')} alt="Device Log" width="450"/>

| Icon | Name | Description |
| :--- | :--- | :--- |
| <img src={useBaseUrl('img/live-testing/log-level.png')} alt="Log Level" width="85"/> | Log Level | <ul><li>VERBOSE </li><li>DEBUG </li><li>INFO </li><li>WARN </li><li>ERROR </li><li>ASSERT </li></ul> |
| <img src={useBaseUrl('img/live-testing/search-log-icon.png')} alt="Search Log icon" width="40"/> | Search Log | Opens the **Search log** interface. Enter a term or terms in the search box and select or deselect the following checkboxes as necessary: <ul><li>REGEX </li><li>IGNORE CASE </li><li>INVERT </li></ul>  |
| <img src={useBaseUrl('img/live-testing/pause-log-icon.png')} alt="Pause Log icon" width="40"/> | Pause Log | Pauses the log feed. |
| <img src={useBaseUrl('img/live-testing/wrap-text-icon.png')} alt="Wrap Text icon" width="40"/> | Wrap Text | Wraps text in the log for easier reading. |
| <img src={useBaseUrl('img/live-testing/clear-log-icon.png')} alt="Clear Log icon" width="40"/> | Clear Log | Clears the log feed. |
| <img src={useBaseUrl('img/live-testing/download-log-icon.png')} alt="Download Log icon" width="40"/> | Download Log | Downloads the log as a .txt file. |

### Device Vitals
Device Vitals is a feature that collects useful performance data in real time from a device during a live session. Data such as network, CPU, and memory usage helps users understand the general performance of a device and the application under test. Users can view a graph of this performance data in real time as the app is processing.

<img src={useBaseUrl('img/live-testing/device-vitals.png')} alt="Device Vitals" width="450"/>

| Icon | Name | Description |
| :--- | :--- | :--- |
| <img src={useBaseUrl('img/live-testing/graph-height.png')} alt="Graph Height" width="40"/> | Graph Height | Change the size of the graphs (S, M, L). |
| <img src={useBaseUrl('img/live-testing/grid-layout-icon.png')} alt="Grid Layout icon" width="40"/> | Grid Layout | Displays graphs side by side. |
| <img src={useBaseUrl('img/live-testing/row-layout-icon.png')} alt="Row Layout icon" width="40"/> | Row Layout | Displays graphs as as a list. |
| <img src={useBaseUrl('img/live-testing/download-vitals-icon.png')} alt="Download Vitals icon" width="40"/> | Download Vitals | Downloads the device vitals as a .txt file. |

**Performance Metrics for Android/iOS Devices**

The graph and csv file will contain these performance metrics for devices.

| Metric | Description |
| :--- | :--- |
| `cpu_total` | System-wide CPU usage in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400% |
| `cpu_user` | CPU usage for user processes in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400% |
| `cpu_kernal` | Android OS CPU usage in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400% |
| `n_threads` | Total threads in use by the app |
| `memory_size_kb` | Total threads in use by the app |
| `memory_resident_kb` | Memory currently in use by application in kilobytes |
| `memory_shared_kb` | Anonymous shared memory currently in use by system shared between application(s) and system |
| `network_wifi_receive_b` | Data in bytes received over wifi connection |
| `network_wifi_sent_b` | Data in bytes sent over wifi connection |
| `network_mobile_receive_b` | Data in bytes received from the mobile carrier network |
| `network_mobile_sent_b` | Data in bytes sent over mobile carrier network |

:::note
Device Vitals for live testing is currently in beta state, which means we are testing it on a few devices first. We will roll out to all devices in the coming weeks, please refer to this page for updates. See the full list of combinations available for beta below.
:::

<Tabs
  defaultValue="iOS"
  values={[
    {label: 'iOS', value: 'iOS'},
    {label: 'Android', value: 'Android'},
  ]}>

<TabItem value="iOS">

**App Tests**

| Device/Platform | iPhone 11 | iPhone XR | iPhoneXS | iPhone X | iPhone 8 | iPhone 7 | iPhone 6 | iPhone 6 Plus | iPhone 6S Plus | iPhone 5S | iPhone SE | iPad Pro 11 2018 | iPad Pro | iPad Air 2019 | iPad 9.7 2017 | iPad 4 | iPad Mini 2 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| iOS 9.3.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 10.0.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 10.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 10.3.3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 11.4 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 11.4.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 12.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 12.4.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 13.0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| iOS 13.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


</TabItem>
<TabItem value="Android">

**App Tests**

| Device/Platform | Google Pixel XL | Google Pixel 3 | Google Pixel 3a | Motorola Moto G6 Plus | Huawei P30 | Google Pixel C | HTC U12 Plus | HTC U11 | HTC Desire 12 | Samsung Galaxy S7 | Lenovo Tab 4 | Asus Google Nexus 7 (2013) | LG G6 | LG G5 | LG G4 | Huawei P9 | Amazon Kindle Fire HD 8 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Android 5.1.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Android 6.0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Android 6.0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Android 7.0 |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |
| Android 7.1.1 |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |
| Android 8.0.0 |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |
| Android 8.1.0 |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |
| Android 9 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Android 10 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Android 11 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

</TabItem>
</Tabs>

## Changing an App Version
Sometimes you need to conduct A/B testing, or document and validate feature parity between different versions of the same application. You can change the app version, as well as the real device, and launch a new test session.

1. On the **App Upload** page, click the +***n*** in the **Version** column.

<img src={useBaseUrl('img/live-testing/live-mobile-app-versions.png')} alt="App with multiple versions" width="650"/>

2. On the **Settings** page, in the versions list, hover over the version you want to launch.
3. Click **Choose Device**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-version-change.png')} alt="Change the version of an app" width="650"/>

## Testing Apple Pay in Mobile Apps
There are three ways to test Apple Pay with Sauce Labs:

* Using simulators
* Using real private devices with an Apple Pay Sandbox Testing account
* Using real private devices with a real production account and real credit cards

### Apple Certificates
Apple certificates are used to ensure security in their systems, and they are much more strict about them than Android. This level of security makes certificates a very complex part of making Apple Pay work with devices in a cloud.

To give you an example, Android apps can be installed without any specific signing on whatever real device you want. With Apple you have two options, or you need to add a remote device to your developer certificate and the provisioning profile, so you are allowed to install the app on that specific device. Or you need to use an enterprise certificate where the Apple device that has that certificate installed allows you to install the app. Similarly, when you install an iOS app on a device, we re-sign the app with a Sauce Labs enterprise certificate so you can install your app on all Sauce Labs public/private devices.

:::note
Apple Pay has a limitation that it cannot work with an enterprise certificate. You need to use the developer certificate where the device has been added to the provisioning profile in order to make this work. This can only be done for Sauce Labs private devices on which you have disabled the resigning.
:::

### Apple Pay on Real Private Devices
To make Apple Pay work on Sauce Labs real private devices:
1. **Follow Apple’s steps to enable Apple Pay (see [Setting Up Apple Pay Requirements](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay_requirements))**. Apple is strict about certificates, so they require you to follow very specific steps:
  1. Set up Apple Pay integration in your app.
  2. Register the Merchant ID in your Apple developer account.
  3. Set up an Apple sandbox tester account (see [Create a sandbox tester account](https://help.apple.com/app-store-connect/#/dev8b997bee1) for more information).
2. **Build your app**. Apple Pay doesn’t work with enterprise certificates, so it will not work with Sauce Labs out of the box. The first step is to add the Sauce Labs real private devices to your Apple developer certificate before building the app. You can do that in one of the following ways:
  1. Manually adding the device and its UDID to the device list for your developer certificate.
  :::note
  Your device list can be found on Apple’s [Certificates, Identifiers & Profiles page](https://developer.apple.com/account/resources/) for your developer account, and you can get the UDID of your private device by contacting your Sauce Labs CSM.
  :::
  2. Using the Sauce Labs Virtual USB solution:
      1. Start a session with Virtual USB (see [Testing with Virtual USB on Real Devices](/mobile-apps/features/virtual-usb) for more information).
      2. When the connection is established, open **XCODE**.
      3. Select the device from the device list.

      <img src={useBaseUrl('img/live-testing/apple-pay-1.png')} alt="Apple Pay setup - device list" width="650"/>

         On the **Signing & Capabilities** tab, you will see that the device has not yet been added.

      <img src={useBaseUrl('img/live-testing/apple-pay-2.png')} alt="Apple Pay setup - device not added" width="650"/>

      4. Click **Register Device** to add the device to your developer certificate.

      <img src={useBaseUrl('img/live-testing/apple-pay-3.png')} alt="Apple Pay setup - add device to certificate" width="650"/>

      5. Once the UDID of the device is added to the developer certificate, you can build the application (manually or automatically):
          1. Select your build scheme and then select **Generic iOS Device**.
          2. To build the application, click **Product** and then click **Archive**.
          3. Click **Distribute App**.
          4. Distribute the application with **Ad Hoc** and **Automatically manage signing**.
          5. Store the application on your local machine.

    If the application has been built, you should not yet upload it to Sauce Labs. The device to be tested needs to be prepared. If you have already prepared the device, then you can skip to step 4.

3. Prepare the device. Set up the first Sauce Labs private device to use Apple Pay with the Apple sandbox account that was created in step 1.

### Disable the Passcode

Apple Pay requires that you have set a passcode on your phone, and you can’t add cards to your wallet without it. But setting a passcode on a device can break Appium automation because Appium can’t automate the passcode screen. To prevent the testing device from displaying the passcode screen:
1. On the device, go to **Settings > Display & Brightness** and disable Auto-Lock.
2. Ask your CSM to disable rebooting the device by providing them with the unique device name, found in the device details.
:::note
There is no guarantee that the device won’t reboot or show the passcode screen. The test run on the device might be less reliable if the passcode screen appears during the automated session.
:::

### Add the Testing Account
1. On the device, go to **Settings** and then click **Sign in to your iPhone**. Sign in using your Apple sandbox tester account.

<img src={useBaseUrl('img/live-testing/apple-pay-4.png')} alt="Apple Pay setup - sign in to account" width="250"/>

2. If prompted, enter the device’s passcode.

<img src={useBaseUrl('img/live-testing/apple-pay-5.png')} alt="Apple Pay setup - passcode" width="250"/>

  If you weren’t prompted for a passcode, set it by going to **Settings > Face ID & Passcode** and tapping **Turn Passcode On**.

### Add Apple Sandbox Test Cards
Apple test cards can be found on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.
1. On your device, go to **Wallet**. If you didn’t set a passcode, Apple will show a notification.

<img src={useBaseUrl('img/live-testing/apple-pay-6.png')} alt="Apple Pay setup - passcode notification" width="250"/>

2. In **Wallet**, tap the plus sign to add a new card. Use the card information on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.

<img src={useBaseUrl('img/live-testing/apple-pay-7.png')} alt="Apple Pay setup - Add new card" width="250"/>

3. **Prepare Sauce Labs**. As mentioned before, Sauce Labs uses an enterprise certificate to install an app on public and private devices. But Apple Pay can’t work with the enterprise certificate, so the app needs to be signed with the developer certificate. You need to instruct Sauce Labs to not re-sign the app when it is installed.

### Disable Re-Signing
1. In Sauce Labs, in the left navigation, click **Live** and then click **Mobile-App**.

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

Once the app has been uploaded and re-signing has been disabled, you can start the device and let Sauce Labs install the application on the device.

5. **Test the app**. View the Sauce Labs Demo Payments app:

<img src={useBaseUrl('img/live-testing/apple-pay-12.png')} alt="Apple Pay setup - Demo app" width="250"/>

<img src={useBaseUrl('img/live-testing/apple-pay-13.png')} alt="Apple Pay setup - Demo app" width="250"/>

<img src={useBaseUrl('img/live-testing/apple-pay-14.png')} alt="Apple Pay setup - Demo app" width="250"/>

<img src={useBaseUrl('img/live-testing/apple-pay-15.png')} alt="Apple Pay setup - Demo app" width="250"/>
