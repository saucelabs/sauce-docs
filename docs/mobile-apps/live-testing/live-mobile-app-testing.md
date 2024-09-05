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

#### Default App Settings

| Setting                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Device Language                                                                            | Use the dropdown to select the device language. The language selector will tell your application that the locale of the device and region is set to the selected parameter. You won't need to change the language of the OS manually during a session inside iOS/Android settings. For more information about the locale setting, see the documentation for [iOS](https://developer.apple.com/documentation/foundation/locale) and [Android](https://developer.android.com/reference/java/util/Locale).                                                                                     |
| Device Orientation                                                                         | Use the dropdown to set the device orientation (Landscape or Portrait).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Proxy                                                                                      | Enable/disable the use of a proxy. Enter the **Hostname** and **Port** and then click **Update**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Device Passcode <br/><p><span className="sauceGreen">Real Devices Only</span></p>          | Enable/disable the device passcode for your apps. If your app requires a device passcode/screenlock to launch, you can enable this setting to run your tests on a passcode-protected device. On Android we are setting 000000, on iOS 089675 as passcode. This is available during Live Testing sessions, see it below in the [Live Testing interface section](/mobile-apps/live-testing/live-mobile-app-testing/#live-test-interface).                                                                                                                                                                                                                                                                                                                                                                                                 |
| Instrumentation                                                                            | Enable/disable device instrumentation. Enabling allows you to use advanced features when testing your app in the real device cloud, like image injection and taking screenshots of secure views.                                                                                                                                                                                                                                                                                                                                                                                            |
| Image Injection                                                                            | Enable/disable image injection. Image injection allows you to mimic camera behavior when testing apps by letting you upload an image and present it to the app as if it were read by the device camera.                                                                                                                                                                                                                                                                                                                                                                                     |
| Bypass Screenshot Restriction <br/><p><span className="sauceGreen">Android Only</span></p> | Enable/disable Bypass Screenshot Restriction (not supported on apps uploaded to the legacy sauce storage). If you're testing Android mobile apps on Sauce Labs and see a black screen in your live testing session, you might need to enable the <b>Bypass Screenshot Restriction</b>. This allows Sauce Labs to work around a setting on those apps that prevents screenshots or videos from being taken. However, there are other details to keep in mind. To effectively test apps that have this setting, see [Bypass Screenshot Restriction](/mobile-apps/features/bypass-screenshot). |
| System Alerts Display <br/><p><span className="sauceGreen">iOS Only</span></p>             | Enable/disable a system alerts delay. Enabling delays alerts, such as asking for permission to access the camera, to prevent app crashes at startup.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Biometrics Interception                                                                    | Enable/disable biometrics. Enabling allows you to choose authentication options if your mobile app requires a biometric authentication, such as fingerprint or face recognition on Android, and Face ID or Touch ID on iOS.<br/> This setting is disabled by default for iOS apps.                                                                                                                                                                                                                                                                                                          |
| Group Folder Redirect <br/><p><span className="sauceGreen">iOS Only</span></p>             | Enable/disable a group directory redirect. Enabling allows you to use your app's private app container directory instead of the shared app group container directory. When your app gets resigned, the shared directory is not accessible.                                                                                                                                                                                                                                                                                                                                                  |

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

:::caution

If you have issues starting live tests, check your IT infrastructure and make sure you are not blocking WebSockets.

:::

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
1. Under **VPN & Device Management**, tap the app you are trying to install and test.
1. Tap **Trust "app name"** and then tap **Trust**.
1. Reopen the app to continue the test.

### Adding a Test Name and Outcome for Your Test

Sauce Labs has introduced a new feature that allows you to enter a test name and test status (passed/failed) for your Live Tests after cross-browser and mobile app testing. This update enhances the testing efficiency by enabling you to add more context to test descriptions and add more clarity to your test repository.

Adding a test name is a straightforward process, and there are two ways to do it:

1. From the end session screen:

   - Start a Live Test session.
   - End the Live Test Session by clicking on the **End** button from the toolbar. The end session screen will pop up, and from there, you can edit the test name and select test outcome status:

     <img src={useBaseUrl('img/mobile-apps/mobile-live-failed-passed.png')} alt="Test Name" width="550"/>

1. From the test details page:
   - Go to **Live** -> **Test results** -> click on a test.
   - On the test details page, click on the pencil nearby the test name to edit it:
     <img src={useBaseUrl('img/mobile-apps/change-name-test-1.png')} alt="Test Name" width="550"/>

:::note
This feature works the same way for both cross-browser testing and mobile app testing.
:::

Use test names to customize your testing experience:

- Add descriptive names to your tests to quickly identify your findings.
- Keep track of tested steps by adding details to test names.
- Easily rename your tests to reflect Jira tickets or other related tasks.

:::note LIMITATIONS
This feature has a constraint on the maximum allowable length of the test name, which is limited to 255 characters. The utilization of emojis is not supported in the test name.
:::

## Live Test Interface

| Icon                                                                                                                     | Name                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :----------------------------------------------------------------------------------------------------------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src={useBaseUrl('img/live-testing/pin-unpin-icon.png')} alt="Unpin/Pin Toolbar icon" width="35"/>                   | Unpin/Pin Toolbar   | Unpins or pins the live testing toolbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <img src={useBaseUrl('img/live-testing/session-info-icon.png')} alt="Session Info icon" width="35"/>                     | Session Info        | Opens the **Current Session** window, which includes app and device details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <img src={useBaseUrl('img/live-testing/take-screenshot-icon.png')} alt="Take Screenshot icon" width="35"/>               | Take Screenshot     | Takes a screenshot of the current device screen. The image downloads automatically as a .png file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <img src={useBaseUrl('img/live-testing/share-session-icon.png')} alt="Share Session icon" width="35"/>                   | Share Session       | Opens the **Share Device** window. For a sharable link to the device, click **Get Link**. <br/>Users must be logged in to be able to view the test.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <img src={useBaseUrl('img/mobile-apps/rotate-button.png')} alt="Rotate Device icon" width="35"/>                         | Rotate Device       | Rotates the device between portrait and landscape.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <img src={useBaseUrl('img/live-testing/home-icon.png')} alt="Home icon" width="35"/>                                     | Home                | Opens the device home screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <img src={useBaseUrl('img/live-testing/more-device-options-icon.png')} alt="More Device Options icon" width="35"/>       | More Device Options | **Set Location** - Set the GPS location using coordinates or by dropping a pin on the map. <br/> **Camera Injection** - Opens the **Camera Injection** window. See [Camera Image Injection](/mobile-apps/features/camera-image-injection) for more information.<br/> **Biometric Injection** - Opens the [Biometric Authentication](/mobile-apps/features/biometric-authentication) window. <br/> **Performance mode On/Off** - Enables you to increase frame rate per second, or switch back to lower frame rate video streaming, when your network connection or VPN is restrictive and you experience blurred screen. |
| <img src={useBaseUrl('img/mobile-apps/restart-app-button.png')} alt="Restart App icon" width="35"/>                      | Restart App         | Restarts the app.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <img src={useBaseUrl('img/live-testing/switch-app-version-icon.png')} alt="Switch App Version icon" width="35"/>         | Switch App Version  | Opens the **Switch App Version** window. To change the version of the app you are testing, hover over the version and then click **Choose version**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <img src={useBaseUrl('img/mobile-apps/clipboard-button.png')} alt="Clipboard icon" width="35"/>                          | Clipboard           | Opens the **Paste Content Into Device** window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <img src={useBaseUrl('img/live-testing/install-dependency-icon.png')} alt="Install Dependency icon" width="35"/>         | Install Dependency  | Opens the **Install Dependent App** window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <img src={useBaseUrl('img/mobile-apps/devtools-button.png')} alt="Developer Options icon" width="35"/>                   | Developer Options   | Opens the **Developer Options** panel, which includes the **Device Log** and **Dev Tools** tabs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <img src={useBaseUrl('img/live-testing/live-mobile-app-management-audio.png')} alt="Developer Options icon" width="35"/> | Mute/Unmute         | Mutes or unmutes audio for your testing session.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <img src={useBaseUrl('img/live-testing/passcode.png')} alt="Passcode icon" width="35"/> | Passcode - Android Only         | If your app requires a device passcode/screenlock to launch, you can enable this setting to run your tests on a passcode-protected device. On Android we are setting 000000.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Device Log

<img src={useBaseUrl('img/live-testing/device-log.png')} alt="Device Log" width="450"/>

| Icon                                                                                                               | Name                                                              | Description                                                                                                                                                                                             |
| :----------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src={useBaseUrl('img/live-testing/log-level.png')} alt="Log Level" width="85"/>                               | Log Level                                                         | <ul><li>VERBOSE </li><li>DEBUG </li><li>INFO </li><li>WARN </li><li>ERROR </li><li>ASSERT </li></ul>                                                                                                    |
| <img src="https://user-images.githubusercontent.com/68342451/236323299-3e75d296-a6ec-4130-b131-e9c901c43429.png"/> | [App Log](/mobile-apps/features/mobile-app-diagnostics/app-logs/) | <ul><li>VERBOSE </li><li>DEBUG </li><li>INFO </li><li>WARN </li><li>ERROR </li><li>ASSERT </li></ul>                                                                                                    |
| <img src={useBaseUrl('img/live-testing/search-log-icon.png')} alt="Search Log icon" width="40"/>                   | Search Log                                                        | Opens the **Search log** interface. Enter a term or terms in the search box and select or deselect the following checkboxes as necessary: <ul><li>REGEX </li><li>IGNORE CASE </li><li>INVERT </li></ul> |
| <img src={useBaseUrl('img/live-testing/pause-log-icon.png')} alt="Pause Log icon" width="40"/>                     | Pause Log                                                         | Pauses the log feed.                                                                                                                                                                                    |
| <img src={useBaseUrl('img/live-testing/wrap-text-icon.png')} alt="Wrap Text icon" width="40"/>                     | Wrap Text                                                         | Wraps text in the log for easier reading.                                                                                                                                                               |
| <img src={useBaseUrl('img/live-testing/clear-log-icon.png')} alt="Clear Log icon" width="40"/>                     | Clear Log                                                         | Clears the log feed.                                                                                                                                                                                    |
| <img src={useBaseUrl('img/live-testing/download-log-icon.png')} alt="Download Log icon" width="40"/>               | Download Log                                                      | Downloads the log as a .txt file.                                                                                                                                                                       |

## Changing an App Version

Sometimes you need to conduct A/B testing, or document and validate feature parity between different versions of the same app. You can change the app version, as well as the real device, and launch a new test session.

1. On the **App Upload** page, click **+_#_** in the **Version** column.
   <img src={useBaseUrl('img/live-testing/live-mobile-app-management-version.png')} alt="App with multiple versions" width="750"/>
2. On the **Settings** page, in the versions list, hover over the version you want to launch.
3. Click **Start Test**.
   <img src={useBaseUrl('img/live-testing/live-mobile-app-management-version-start.png')} alt="Change the version of an app" width="750"/>
