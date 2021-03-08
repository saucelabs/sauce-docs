---
id: virtual-usb
title: Virtual USB Testing on Real Mobile Devices
sidebar_label: Virtual USB
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Virtual USB (vUSB) for Real Devices simulates connecting a real device with a USB cable directly to your local machine during a live or automated testing session. It allows you to interact directly with a device in the Sauce Labs cloud via an integrated development environment (IDE) like Android Studio and Xcode, or browser-based tools like Chrome DevTools and Safari Web Inspector.

With Virtual USB, you can use homegrown developing and testing tools because it integrates into the development environment as if the device was directly connected to the workstation. When you debug your applications, Virtual USB provides the ability to build and deploy an application directly from the IDE. You can also directly monitor device performance metrics such as CPU consumption, device memory, and network data performance.

>**NOTE**:Your access may depend on whether you're using the Legacy platform or the Sauce Labs platform. For more information on upcoming and available features for Real Devices, refer to the [feature preview doc](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721844).


## What You'll Need

*   You'll need to have our [private Real Device Cloud](https://saucelabs.com/platform/real-device-cloud) feature enabled as part of your plan. This is a dedicated pool of Sauce Labs real devices for your organization.
*   You'll need to have Java installed to run Virtual USB.
*   For Android, make sure you're using an Android Debug Bridge (ADB) version higher than 1.0.39.

## Downloading Virtual USB

### Android

Click below to download the latest Virtual USB client to the same machine where you have Android Studio installed.

<p><button class="badge-download"><a href="https://s3-eu-west-1.amazonaws.com/saucelabs-vusb/v1.8/vusb-client.jar">Download</a></button></p>

For version release notes, see [Android Virtual USB Changelog](https://wiki.saucelabs.com/pages/viewpage.action?pageId=86575598).

### iOS

<p><Highlight color="#eb7734">BETA</Highlight></p>

Virtual USB for iOS Devices is in beta. Contact your Customer Success Manager to get access.

For version release notes, see [iOS Virtual USB Changelog](https://wiki.saucelabs.com/pages/viewpage.action?pageId=99652031).


## Known Limitations

*   You'll need to exit Xcode/Safari before connecting to an iOS Virtual USB session (or relaunch it after connecting). Otherwise, the device won't show up.
*   Devices attached to the host locally are not useable while using iOS Virtual USB. When the server is shut down, it asks again for permissions to put the original `/var/run/usbmuxd` socket back into its place, and Xcode/Safari have to be relaunched to show the local devices.

## Launch and Connect Virtual USB to a Real Android Device Live Testing Session

:::tip **Accessing Instructions in the Client**
You can also find instructions for using the Virtual USB client by running `java -jar vusb-client.jar --help`.
:::


1. Log in to your Sauce Labs account.
2. Launch the TestObject real device platform by clicking **Sauce Apps** > **Legacy RDC**.
3. Click the person icon > Account Settings.
<img src={useBaseUrl('img/virtual-usb/vusb1.jpg')} alt="Live App Upload UI" width="300" />

4. Grab your User API key. **NOTE**: This API key is entirely separate from the one in the main Sauce Labs interface.
5. From a command line, launch the client. Choose between the **EU** or the **US** data center, depending on which device you are trying to connect to:

```
java -jar vusb-client.jar server --datacenter <EU/US>
```

```
java -jar vusb-client.jar server --datacenter EU
```


6. Once the server is open, you can now start a session. From another command line window, launch the client again using this command to create a new session:

```
java -jar vusb-client.jar startSession --apiKey <API_KEY> --deviceName <DEVICE_NAME>
```

```
java -jar vusb-client.jar startSession --apiKey 37D274BC3A65A34BB3DA4DDF7B77E341 --deviceName Motorola_Moto_Z_real
```

This will allow you to allocate a device for your session. That means the device will be in use and not available for other uses until your session is over.


7. When Virtual USB connects to your live testing session, it will return a success message and a link to watch the device running your test in real time.

```
37D274BC3A65A34BB3DA4DDF7B77E341		Motorola Moto Z		ANDROID		7.0		https://app.testobject.com/#/device/share/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a/view?dc=US

localhost:7000	online
```

8. Copy the port number and use it to connect `adb` to your session device using Virtual USB.

```
adb connect localhost:<paste returned port here>
```

```
adb connect localhost:7000
```

9. At this point, vUSB will be fully connected. You can use Android Studio (or Google Chrome's Remote Debugging) to debug your app, execute automation based on `adb`, or any other tool that is `adb`-compliant. For example, using `adb` shell, you can start the camera of the connected device:

```
adb shell
am start -a android.media.action.IMAGE_CAPTURE
```

## Closing a Virtual USB Connection

1. Make sure you disconnect your device from ADB using `adb disconnect <IPAddress>:<portNumber>`.

```
adb disconnect localhost:7000
```

2. If open, close your Sauce Labs device view in your browser.

## Connecting to the Chrome Inspector

One powerful way to work with your Real Device is by viewing web pages through the full spectrum of tools allowed by the Chrome Inspector. This example will demonstrate how to export an [Http ARchive (HAR)](https://en.wikipedia.org/wiki/HAR_(file_format)) file to your local machine from a Live Testing session.

HAR files are useful for inspecting:

*   HTTP requests generated by your web pages
*   API calls
*   User analytics
*   Third party web service calls
*   Any other kind of network traffic you want to capture

1. Follow the above steps [Launch and Connect Virtual USB to a Real Android Device Live Testing Session](/mobile-apps/virtual-usb#launch-and-connect-virtual-usb-to-a-real-android-device-live-testing-session). to initialize the Sauce Labs vUSB client, connect to your device, and initialize an `adb` connection.

2. Once you've verified that you are connected to the device, open a Chrome tab locally and put chrome://inspect in the address bar. This will open the Chrome Inspector:
<img src={useBaseUrl('img/virtual-usb/vusb4.png')} alt="Live App Upload UI" width="400" />

3. Now, you don't actually have Chrome open on the device yet. We can issue additional `adb` commands to make that happen:

```
$ ./adb shell am start -n com.android.chrome/com.google.android.apps.chrome.Main
```

```
$ ./adb shell am start -a android.intent.action.VIEW -d http://www.saucedemo.com
```

4. These commands launch the Chrome app, and then navigate to our "Swag Labs" demo website. Once these have been successful, you should see a new set of options under the Remote Target heading in your chrome://inspect tab.  

If you click **inspect**, a new window will open, displaying Chrome DevTools the same as if the device were sitting on your desk, connected to a USB cable.
<img src={useBaseUrl('img/virtual-usb/vusb3.png')} alt="Live App Upload UI" width="400" />
<img src={useBaseUrl('img/virtual-usb/vusb2.png')} alt="Live App Upload UI" width="400" />

5. Clicking the **Network** tab and reloading the page will display all HTTP requests made during the refresh:

6. Under the **Network** tab, click the down arrow icon to export a HAR file locally. This will prompt you with a Save dialog. Choose a location for the HAR file.
<img src={useBaseUrl('img/virtual-usb/vusb6.png')} alt="Live App Upload UI" width="400" />

7. Review your HAR file. It should contain every HTTP request/response gathered during the page load, as well as all the headers, parameters, timing info, and other things. Using this information, you can dive deep into the way your web pages are put together, and you can do it on any configured device, without having to worry about power management or keeping up with the physical device.

### Unsupported ADB Commands

The `adb-reverse` command is not supported for use with Virtual USB.


## Virtual USB Legacy Versions

:::warnings
Virtual USB versions 1.0-1.2 have been deprecated. We're no longer providing support for them and strongly recommend [upgrading to the latest version](https://s3-eu-west-1.amazonaws.com/saucelabs-vusb/v1.8/vusb-client.jar).
:::

### Launch and Connect Virtual USB to a Real Device Live Testing Session

1. Log in to Sauce Labs and get your User API key from **Sauce Apps** > **Legacy RDC** > **Account Settings** in the TestObject real device cloud platform.
2. From a command line, launch the Virtual USB client.

```
java -jar client.jar server
```

If you're testing on a device in the US Data Center, you should also include the flags:

```
--manualUrl https://us1-manual.app.testobject.com --routerUrl wss://us1.api.testobject.com/api/vusb/forward
```

Optionally, use `-v` for verbose logging or `-vv` for super verbose logging.


3. Return to TestObject and start a **Live Testing** session on an available Android device. The project for the session should correspond to the API key you entered in Step 2, which is the account you logged in with.

4. Open a new command line terminal, and query which sessions are running.

```
java -jar client.jar sessions --apiKey <API KEY>
```

5. This command will return a list of open sessions, find the sessionId> and copy it. \

6. Use the live testing  sessionId> to connect the Virtual USB client to the real device in your session: \

```
java -jar client.jar connect --sessionId <session id> --apiKey <API KEY>
```

```
java -jar client.jar connect --sessionId bwerg235-5214-4f14-889c-234va9v7a --apiKey 5a0d83ab-0ccb-42ff-a822-efb23d90b55d
```

7. When Virtual USB connects to your live testing session, it will return a port number for the connection. Copy the port number  and use it to connect `adb` to your session device using Virtual USB.

```
adb connect localhost:<paste returned port here>
```

```
adb connect localhost:7000
```

8. At this point, vUSB is fully connected and you can use Android Studio to debug your app, execute automation that is based on `adb`, or use any other tool that is `adb`-compliant. For example, using `adb` shell, you can start the camera of the connected device:

```
adb shell
am start -a android.media.action.IMAGE_CAPTURE
```

### Closing a Virtual USB connection

1. Make sure you disconnect your device from ADB using `adb disconnect <IPAddress>:<portNumber>`.

```
adb disconnect localhost:7000
```

2. Close your Sauce Labs device view in your browser.
