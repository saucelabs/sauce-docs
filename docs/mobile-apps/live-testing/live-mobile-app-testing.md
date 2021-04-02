---
id: live-mobile-app-testing
title: Live Mobile Application Testing
sidebar_label: Live Mobile Application Testing
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Mobile Real Device Testing
With Sauce Labs, you can test your mobile applications on a variety of real Android and iOS mobile devices. If you do not have an app, consider using the Sauce Labs Swag Labs sample app for validating your account functionality as well as your tests.

## What You'll Need
* A Sauce Labs account
* A mobile app to test. If you don't have one, you can use the [Sauce Labs sample mobile app](https://github.com/saucelabs/sample-app-mobile).

### Uploading an App
You can upload your app via the Sauce Labs UI or via the REST API. For information about uploading via the API, see [Upload Files with the REST API](https://wiki.saucelabs.com/display/DOCS/Application+Storage#ApplicationStorage-UploadFileswiththeRESTAPI).

To upload an app via the Sauce Labs UI:

1. In Sauce Labs, in the left panel, click **LIVE** and then click **Mobile App**.
2. Click **App Upload**. You can either drag and drop an application, or browse for and select the file. We currently support APK and IPA files up to 4 GB. Non-app file uploads are not supported in the UI at this time, but can be uploaded through the API.

<img src={useBaseUrl('img/live-testing/live-mobile-app-delete.png)} alt="Delete an application" width="650"/>

:::note The Sauce Labs UI currently supports live testing on **real devices only**. To test on virtual devices, use the REST API.
:::

#### Deleting an App
The Delete button will delete a whole application (e.g., a group of builds belonging to the same app package). Files associated with app identifiers (i.e., belong to the same platform and are accessible to the same team) are indicated by the + symbol next to version number. Also, the version number shown is the most recently updated file, not necessarily the "latest" version of the application.

<img src={useBaseUrl('img/live-testing/live-mobile-app-nav.png')} alt="Live mobile application test navigation" width="650"/>

### App Settings
If you wish to change the application settings, you can do so by hovering over the application in **LIVE > Mobile-App**, and selecting the **Settings** icon.

app-settings.png

You're then presented with the Default Settings page, where **any updated settings will affect all uploaded versions of the application**. Below are some settings you can change:

* Set a proxy host:port
* Set the device language settings
* Set the device orientation
* Enable device instrumentation
* Enable image injection
* Bypass Image Restriction - ANDROID ONLY (not supported on applications uploaded to the legacy sauce storage).
* Set a system alerts delay - IOS ONLY
* Enable biometrics - IOS ONLY
* Disable resigning - IOS ONLY
* Set a group directory redirect - IOS ONLY

#### Settings Comparison: iOS vs Android

iOS Example Settings

Screen Shot 2020-07-21 at 11.26.13 AM.png

Android Example Settings

Screen Shot 2020-08-26 at 8.13.17 AM.png

Most settings update automatically, however when you make changes to the proxy setting, select **Update** to finish.

### Selecting a Real Device
You must select a device prior to launching a session.

1. On the **App Selection** page, hover over the app you want to test and then click **Choose Device**.

<img src={useBaseUrl('img/live-testing/live-mobile-app-choose-device.png')} alt="Choose a device" width="650"/>

2. Use the search box and filters to find the device you want to test on, or select the device in the grid.
3. Hover over the device and then click **Launch**. Clicking **Details** will display the specs for the device.

<img src={useBaseUrl('img/live-testing/live-mobile-app-launch.png')} alt="Launch a test" width="650"/>

#### Public vs. Private Devices
There is a distinction between **Public Devices** and **Private Devices**.

* Public devices are accessible by anyone with a Sauce Labs account and are subject to availability. If a device is in use, you will see a yellow **Busy** flag across the thumbnail.
* Private devices are associated with your account and are an **enterprise only** feature. Private devices are indicated by a person icon.

### Launching a Test
1. You can launch a test from the following screens:
  * Hover over the device in the grid and then click **Launch**.   
  * Hover over the device in the grid and then click **Details**. On the **Details** screen, click **Launch**.

  <img src={useBaseUrl('img/live-testing/live-mobile-app-launch.png')} alt="Launch a test from the Details screen" width="650"/>



## Change the App Version for a Live Test on Real Devices
Sometimes you need to conduct A/B Testing, or document and validate feature parity between different versions of the same application. Sauce Labs has convention for changing the app version, as well as the real device in order to launch a new test session.

1. Select the **Change App** button in the device selection menu.
2. To change the version of the app, there must be multiple versions of the same app already uploaded to storage. This is indicated by the + symbol next to version number that indicates the most recently updated file.

latest-version.png

3. Select the + symbol and you will see a list of all the uploaded applications along with their version IDs.

version-ids.png

4. Select the version of the app, then select a desired device to launch a test session.

select-device2.png

With Real Devices on Sauce Labs, you can test your mobile applications on a variety of real Android and iOS mobile devices. If you do not have an app, consider using the Sauce Labs Swag Labs sample app for validating your account functionality as well as your tests. You can test your mobile applications on a variety of real Android and iOS mobile devices with App Upload on Sauce Labs. Below are the topics associated with testing mobile applications on Real Devices.

## What You'll Need
* A Sauce Labs Account.
* A mobile app you wish to test. If you don't have one, you can use the [Sauce Labs sample mobile app](https://github.com/saucelabs/sample-app-mobile).

## Upload Your Application
In order to run a live test you will need to upload your application to a device. There are generally two ways to upload an application for live testing:
* Upload an application with App-Upload (UI) (See [Upload an App to Real Devices with App-Upload](https://wiki.saucelabs.com/display/DOCS/Application+Storage#ApplicationStorage-UploadanApptoRealDeviceswithApp-Upload) for more information.)
* Upload an application with the Storage API (REST) (See [Upload Files with the REST API](https://wiki.saucelabs.com/display/DOCS/Application+Storage#ApplicationStorage-UploadFileswiththeRESTAPI) for more information.)
For detailed information on how to upload your application to the Sauce Labs Platform, see [Application Storage](https://wiki.saucelabs.com/display/DOCS/Application+Storage).

## Start a Live Test Session on Real Devices
After you've uploaded an application to the Sauce Labs Platform, you are now ready to launch a live testing session.

### Public vs. Private Devices
There is a distinction between **Public Devices** and **Private Devices**.

* Public devices are accessible by anyone with a Sauce Labs Account and are subject to availability. If a device is in use, you will see a yellow **"Busy"** flag across the thumbnail.
* Private devices are associated with your account and are an **enterprise only** feature. All private devices are indicated by the following a **Person Icon**.

### Select a Real Device
You must select a device prior to launching a session. By default, the public devices will display in a grid format like so:

device-grid.png

### Launch a Real Device
There are two ways to launch a device:

1. Hover over a device thumbnail and click on Details to see the specs for that device. Once you find the desired device, select **Launch**.

device-details.png

2. Hover over a device thumbnail and click on **Launch**.

Screen Shot 2020-06-22 at 7.35.44 AM.png

## Change Application Settings
If you wish to change the application settings, you can do so by hovering over the application in **LIVE > Mobile-App**, and selecting the **Settings** icon.

app-settings.png

You're then presented with the Default Settings page, where **any updated settings will affect all uploaded versions of the application**. Below are some settings you can change:

* Set a proxy host:port
* Set the device language settings
* Set the device orientation
* Enable device instrumentation
* Enable image injection
* Bypass Image Restriction - ANDROID ONLY (not supported on applications uploaded to the legacy sauce storage).
* Set a system alerts delay - IOS ONLY
* Enable biometrics - IOS ONLY
* Disable resigning - IOS ONLY
* Set a group directory redirect - IOS ONLY

### Settings Comparison: iOS vs Android

iOS Example Settings

Screen Shot 2020-07-21 at 11.26.13 AM.png

Android Example Settings

Screen Shot 2020-08-26 at 8.13.17 AM.png

Most settings update automatically, however when you make changes to the proxy setting, select **Update** to finish.

## Change the App Version for a Live Test on Real Devices
Sometimes you need to conduct A/B Testing, or document and validate feature parity between different versions of the same application. Sauce Labs has convention for changing the app version, as well as the real device in order to launch a new test session.

1. Select the **Change App** button in the device selection menu.
2. To change the version of the app, there must be multiple versions of the same app already uploaded to storage. This is indicated by the + symbol next to version number that indicates the most recently updated file.

latest-version.png

3. Select the + symbol and you will see a list of all the uploaded applications along with their version IDs.

version-ids.png

4. Select the version of the app, then select a desired device to launch a test session.

select-device2.png

## Testing Apple Pay in Mobile Apps
There are three ways to test Apple Pay with Sauce Labs:

* Using simulators
* Using real private devices with an Apple Pay Sandbox Testing account
* Using real private devices with a real production account and real credit cards

## Apple Certificates
Apple certificates are used to ensure security in their systems, and they are much more strict about them than Android. This level of security makes certificates a very complex part of making Apple Pay work with devices in a cloud.

To give you an example, Android apps can be installed without any specific signing on whatever real device you want. With Apple you have two options, or you need to add a remote device to your developer certificate and the provisioning profile, so you are allowed to install the app on that specific device. Or you need to use an enterprise certificate where the Apple device that has that certificate installed allows you to install the app. Similarly, when you install an iOS app on a device, we re-sign the app with a Sauce Labs enterprise certificate so you can install your app on all Sauce Labs public/private devices.

**NOTE:** Apple Pay has a limitation that it cannot work with an enterprise certificate. You need to use the developer certificate where the device has been added to the provisioning profile in order to make this work. This can only be done for Sauce Labs private devices on which you have disabled the resigning.

## Apple Pay on Real Private Devices
To make Apple Pay work on Sauce Labs real private devices:
1. **Follow Apple’s steps to enable Apple Pay (see [Setting Up Apple Pay Requirements](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay_requirements))**. Apple is strict about certificates, so they require you to follow very specific steps:
  1. Set up Apple Pay integration in your app.
  2. Register the Merchant ID in your Apple developer account.
  3. Set up an Apple sandbox tester account (see [Create a sandbox tester account](https://help.apple.com/app-store-connect/#/dev8b997bee1) for more information).
2. **Build your app**. Apple Pay doesn’t work with enterprise certificates, so it will not work with Sauce Labs out of the box. The first step is to add the Sauce Labs real private devices to your Apple developer certificate before building the app. You can do that in one of the following ways:
  1. Manually adding the device and its UDID to the device list for your developer certificate.
  **NOTE:** Your device list can be found on Apple’s [Certificates, Identifiers & Profiles page](https://developer.apple.com/account/resources/) for your developer account, and you can get the UDID of your private device by contacting your Sauce Labs CSM.
  2. Using the Sauce Labs Virtual USB solution:
      1. Start a session with Virtual USB (see [Testing with Virtual USB on Real Devices](https://wiki.saucelabs.com/display/DOCS/Testing+with+Virtual+USB+on+Real+Devices) for more information).
      2. When the connection is established, open **XCODE**.
      3. Select the device from the device list.

      img1.png

         On the **Signing & Capabilities** tab, you will see that the device has not yet been added.

      img2.png

      4. Click **Register Device** to add the device to your developer certificate.

      img3.png

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
**NOTE:** There is no guarantee that the device won’t reboot or show the passcode screen. The test run on the device might be less reliable if the passcode screen appears during the automated session.

### Add the Testing Account
1. On the device, go to **Settings** and then click **Sign in to your iPhone**. Sign in using your Apple sandbox tester account.

img4.png

2. If prompted, enter the device’s passcode.

img5.png

  If you weren’t prompted for a passcode, set it by going to **Settings > Face ID & Passcode** and tapping **Turn Passcode On**.

### Add Apple Sandbox Test Cards
Apple test cards can be found on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.
1. On your device, go to **Wallet**. If you didn’t set a passcode, Apple will show a notification.

img6.png

2. In **Wallet**, tap the plus sign to add a new card. Use the card information on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.

img7.png

3. **Prepare Sauce Labs**. As mentioned before, Sauce Labs uses an enterprise certificate to install an app on public and private devices. But Apple Pay can’t work with the enterprise certificate, so the app needs to be signed with the developer certificate. You need to instruct Sauce Labs to not re-sign the app when it is installed.

### Disable Re-Signing
1. In Sauce Labs, in the left navigation, click **Live** and then click **Mobile-App**.

img8.png

  You will see an overview of the already uploaded apps. If no app has been uploaded, then upload the app. Once uploaded, open the app settings by hovering over the row until you see this:

img9.png

2. Click **Settings**.

img10.png

3. Under **Default settings**, toggle **Instrumentation** to **Disabled**.

img11.png

Disabling this allows the app to use Apple Pay and the developer certificate and provisioning profile that you used when you built the app.

**NOTE:** Disabling re-signing will break the installation of the app on public devices. The app will only be allowed to be installed on private devices that have been added to the developer certificate and provisioning profile.

Once the app has been uploaded and re-signing has been disabled, you can start the device and let Sauce Labs install the application on the device.

5. **Test the app**. View the Sauce Labs Demo Payments app:

img12.png
img13.png
img14.png
img15.png

## Device Vitals
Device Vitals is a feature available on Real Devices that collects useful performance data in real time from a device during a live session. Data such as network, CPU, and memory usage helps users understand the general performance of a device and the application under test. Users can view a graph of this performance data in real time as the app is processing.

vitals.gif

## Performance Metrics for Android/iOS Devices
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

## Using Device Vitals
### Appium Test Automation
Device Vitals for Test Automation is supported (General Availability) for Appium Test Automation, test developers are required to add the following desired capability to their code:

`capabilities.setCapability("recordDeviceVitals", true);`

At the end of the test execution the vitals data file will be available for download from the Appium test report.

:::note This feature is only available for native and hybrid mobile applications.
:::

### Live Testing
Device Vitals for Live Testing is currently in beta state, which means we are testing it on a few devices first. We will roll out to all devices in the coming weeks, please refer to this page for updates. See the full list of combinations available for beta below.

Where is Device Vitals available in Live Testing?

<Tabs
  defaultValue="iOS"
  values={[
    {label: 'iOS', value: 'iOS'},
    {label: 'Android', value: 'Android'},
  ]}>

<TabItem value="iOS">

Web Tests (on Safari)
| Device
--------
Platform | iPhone 11 | iPhone XR | iPhoneXS | iPhone X | iPhone 8 | iPhone 7 | iPhone 6 | iPhone 6 Plus | iPhone 6S Plus | iPhone 5S | iPhone SE | iPad Pro 11 2018 | iPad Pro | iPad Air 2019 | iPad 9.7 2017 | iPad 4 | iPad Mini 2 |

| iOS 9.3.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 10.0.2 |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |

| iOS 10.1 |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |

| iOS 10.3.3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |

| iOS 11.4 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 11.4.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 12.2 |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 12.4.1 |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 13.0 |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 13.1 | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

App Tests
| Device
--------
Platform | iPhone 11 | iPhone XR | iPhoneXS | iPhone X | iPhone 8 | iPhone 7 | iPhone 6 | iPhone 6 Plus | iPhone 6S Plus | iPhone 5S | iPhone SE | iPad Pro 11 2018 | iPad Pro | iPad Air 2019 | iPad 9.7 2017 | iPad 4 | iPad Mini 2 |

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

Web Tests (on Chrome)
| Device
--------
Platform | Google Pixel XL | Google Pixel 3 | Google Pixel 3a | Motorola Moto G6 Plus | Huawei P30 | Google Pixel C | HTC U12 Plus | HTC U11 | HTC Desire 12 | Samsung Galaxy S7 | Lenovo Tab 4 | Asus Google Nexus 7 (2013) | LG G6 | LG G5 | LG G4 | Huawei P9 | Amazon Kindle Fire HD 8 |

| Android 5.1.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 6.0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 6.0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 7.0 |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |

| Android 7.1.1 |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |

| Android 8.0.0 |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |

| Android 8.1.0 |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 9 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 10 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 11 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

App Tests
| Device
--------
Platform | Google Pixel XL | Google Pixel 3 | Google Pixel 3a | Motorola Moto G6 Plus | Huawei P30 | Google Pixel C | HTC U12 Plus | HTC U11 | HTC Desire 12 | Samsung Galaxy S7 | Lenovo Tab 4 | Asus Google Nexus 7 (2013) | LG G6 | LG G5 | LG G4 | Huawei P9 | Amazon Kindle Fire HD 8 |

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

## Testing with Camera Image Injection
Camera Image Injection – also known as camera mocking – is a Sauce Labs Real Device Cloud (RDC) feature that simulates taking a picture through your mobile device app, allowing you to test the app’s camera-based functionality and deliver the best possible user experience.

To mimic camera behavior when testing your app, you'll provide the app with an image that mocks the use of the camera. During a Sauce Labs live test, you'll be prompted to upload a photo that will be fed to your app, rather than using your device camera to take the photo. For automated tests, you'll pass an image to the image injection endpoint. Image Injection intercepts the camera input and replaces the camera output with the image file via the camera APIs. When the app requests an image from the device's camera, we inject your uploaded image into the response (the app doesn't know the difference).

### What You'll Need
You'll need to upload your app to Sauce Labs prior to testing. For instructions, see [Uploading and Accessing Your Apps on Real Devices](https://wiki.saucelabs.com/display/DOCS/Automated+Testing+with+Real+Devices#AutomatedTestingwithRealDevices-UploadingandAccessingYourAppsonRealDevices).

### Using Camera Image Injection
Camera Image Injection is a core feature built into our RDC functionality and available for use with public and private devices. Your mobile app accesses the camera and instead of getting back the picture of the device camera, it'll retrieve your uploaded image for your test. You employ the built-in device camera in your live and automated testing and perform test cases that require taking images with any of the device cameras.

#### System Requirements
See the topics under [Mobile Application Testing](https://wiki.saucelabs.com/display/DOCS/Mobile+Application+Testing) for RDC system requirements.

#### Key Specs
**Supported**
* All iOS and Android devices available in the RDC
* Front-facing and rear-facing system device cameras
* Image file sizes up to 5MB
* JPG, JPEG, PNG image file formats.

**Not Supported**
* Ephemeral apps (i.e., app with temporary messages that disappear after a certain timeframe)
* Testing with Emulators, Simulators

### Live Testing with Camera Image Injection
1. Launch a test session by logging into Sauce Labs and going to **Live > Mobile App**.
2. Hover over the app you intend to test and click the **Settings** icon.
3. In the editor that appears, make sure the **Image Injection** toggle is enabled and then return to the app selection screen.
**NOTE:** It is important to enable image injection before choosing a device.
4. Hover over the app again and click the **Choose Device** icon to bring up the menu of available devices.
5. Hover over the device of your choice and click **Launch** to begin a test session on that device with your app.
6. When you want to capture an image with the app camera, go to the right toolbar and click the **Camera** icon to initiate Camera Image Injection.
7. Click **Choose Image** to stage your image for the camera.
8. Activate the camera inside of your app.
9. The device will show your uploaded image in the app as if the image was taken by the device camera. The image will continue to be available, should you go back to the camera during your test session, or you can upload another image and capture it with the camera.

## Application Storage
When testing mobile apps, you have the option to upload your app to our Application Storage. Here are some benefits:

Upload all of your mobile apps to the same location for cross-device Automated and Live testing with both virtual devices and real devices
Share your uploaded apps with your team members
Store apps for up to 60 days

## What You'll Need
* A Sauce Labs account
* A mobile app you wish to test. If you don't have one, you can use the Sauce Labs sample mobile app

## Upload an App to Real Devices with App-Upload
1. Log in to Sauce Labs and select **LIVE** from the options in the left-hand navigation.
2. Select **Mobile-App**.
3. You will see a list of previously uploaded apps.
4. To the right of the page, select **App Upload** to upload a new application.
**NOTE:** App-Upload UI currently supports Live Testing on Real Devices only. Use the REST API to upload apps for use with virtual devices.

live-test-mobile-app.png

5. You can either drag and drop an application, or browse for the file. We support mobile app *.APK and *IPA files up to 4 GB. Non-app file uploads are not supported in the UI at this time, but can be uploaded through the API.

app-upload.png

6. To use an app you've previously uploaded, select "Check out the old repository" link at the bottom of the page. This will re-direct you to the legacy TestObject App Management UI with all your previously uploaded.

old-repository.png

## Delete Apps with the Delete Button
The **Delete** button will delete a whole application (e.g., a group of builds belonging to the same app package). Files associated with app identifiers (i.e., belong to the same platform and are accessible to the same team) are indicated by the + symbol next to version number. Also, the version number shown is the most recently updated file, not necessarily the "latest" version of the application.

latest-version.png
