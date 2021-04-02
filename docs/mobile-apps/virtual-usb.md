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

Connect to a real device directly from your development environment via Virtual USB (vUSB) for fast and easy debugging.

vUSB simulates connecting a real device with a USB cable directly to your local machine during a live or automated testing session. It allows you to interact directly with iOS and Android Sauce Labs cloud real devices via integrated development environments (IDE) like Android Studio and Xcode, and browser-based tools like Chrome DevTools and Safari Web Inspector.

With vUSB, you can use homegrown developing and testing tools because it integrates into the development environment as if the device was directly connected to the workstation. When you debug your applications, vUSB provides the ability to build and deploy an application directly from the IDE. You can also directly monitor device performance metrics such as CPU consumption, device memory, and network data performance.

This topic provides instructions for using vUSB with Sauce Labs and TestObject, our legacy real device cloud platform. To take advantage of our latest features, we recommend using Sauce Labs. For more information, see [Sauce Labs Real Device Testing Features](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721844) and [Legacy Real Device Platform Resources](https://wiki.saucelabs.com/display/DOCS/Legacy+Real+Device+Platform+Resources).

>**NOTE**:Your access may depend on whether you're using the Legacy platform or the Sauce Labs platform. For more information on upcoming and available features for Real Devices, refer to the [feature preview doc](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721844).

<img src={useBaseUrl('img/virtual-usb/vusb-workflow.png')} alt="Virtual USB Workflow" width="400" />


## What You'll Need

* You'll need to have our [private Real Device Cloud](https://saucelabs.com/platform/real-device-cloud) feature enabled as part of your plan. This is a dedicated pool of Sauce Labs real devices for your organization.
* You'll need to have Java installed.
* Android only:
    * Make sure you're using an Android Debug Bridge (ADB) version higher than 1.0.39.
    * Set `JAVA_HOME` and `ANDROID_HOME` as environment variables. To confirm, enter `echo %JAVA_HOME%`, and it will print that command. Then, do the same for `echo %ANDROID_HOME%`.
    * Optional: Have Android Studio installed on your local machine, preferably the latest version.

## vUSB for Sauce Labs (NEW)

Instructions for iOS and Android devices:

:::tip Use `--help` to access instructions in the client
Run `java -jar vusb-client.jar --help` to see a list of all available vUSB commands and options.
:::

1. Click below to download the latest vUSB client on the same machine where you have Android Studio installed.

<p> <a href="https://s3-eu-west-1.amazonaws.com/saucelabs-vusb/v1.8/vusb-client.jar"><button class="download">Download vUSB</button></a> </p>

If you're planning to test on iOS devices, you'll also need to [download the iOS symbols](https://github.com/Zuikyo/iOS-System-Symbols).

2. Launch a command line terminal from the same from the folder where you downloaded the vUSB client.
3. Enter the below command to launch the vUSB client and connect to your preferred Data Center (type `US` or `EU`). This will get your server up and running.

```java
java -jar virtual-usb-client-2.0.0.jar server --datacenter EU
```

4. Go to your organization's private pool of real devices (**Live** > **Cross Browser** > **Mobile Real**) and identify the specific device you wish to use for testing. To quickly access your private devices, click **Filters** and ensure that the **Private Devices** is toggled.

<img src={useBaseUrl('img/virtual-usb/vusb-privatedevices.jpg')} alt="Virtual USB Private Devices Filters" width="400" />

5. Grab your Sauce Labs credentials (username and access key), which you can find under **Account** > **User settings**.
6. Next, enter this string into your command line to launch your vUSB session, authenticate your credentials (`username` and `accessKey`), and connect to your desired device:

```java
java -jar vusb-client.jar startSession --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03 --deviceName Motorola_Moto_Z_real
```
Your chosen device will be allocated specifically for your test session. It will not available for other users until your session is over.

7. When vUSB connects to your live testing session, it will return a success message along with a link you can click to watch the device running your test in real time.

```java
37D274BC3A65A34BB3DA4DDF7B77E341        Motorola Moto Z     ANDROID     7.0     https://app.eu-central-1.saucelabs.com/live/mobile/dataCenters/EU/devices/shared/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a

localhost:7000  online
```

If you're testing on iOS, skip to the last step.

8. **Android Only**: Copy the port number and use it to connect adb to your session device by running `adb connect` followed by the `<IPAddress>:<portNumber>` from the previous step:

```java
adb connect localhost:7000
```

9. **Android Only**: Now, your vUSB is fully connected. You can use Android Studio (or Google Chrome's Remote Debugging) to debug your app, execute automation based on adb, or any other tool that is adb-compliant. For example, using adb shell, you can start the camera of the connected device:

```java
adb shell
am start -a android.media.action.IMAGE_CAPTURE
```

10. **Android Only**: Run your desired tests. Remember, you can use the `--help` flag to view a full CLI reference guide for vUSB functionality.

11. **Android Only**: When you're ready to close your vUSB connection/session, disconnect your device from ADB by running `adb disconnect` followed by your `<IPAddress>:<portNumber>`:

```java
adb disconnect localhost:7000
```

12. Close the session through the command line.


## vUSB for TestObject (LEGACY)

:::caution
Virtual USB for iOS Devices is in Beta. Contact your Customer Success Manager to get access.

Known Limitations:
* You'll need to exit Xcode/Safari before connecting to an iOS Virtual USB session (or relaunch it after connecting). Otherwise, the device won't show up.
* Devices attached to the host locally are not useable while using iOS Virtual USB. When the server is shut down, it asks again for permissions to put the original `/var/run/usbmuxd` socket back into its place, and Xcode/Safari have to be relaunched to show the local devices.
:::

Click below to download the vUSB client to the same machine where you have your IDE (e.g., Android Studio) installed.

<p> <a href="https://s3-eu-west-1.amazonaws.com/saucelabs-vusb/v1.8/vusb-client.jar"><button class="download">Download vUSB</button></a> </p>


### Launch and Connect Virtual USB to a Real Android Device Live Testing Session

:::tip **Accessing Instructions in the Client**
You can also find instructions for using the Virtual USB client by running `java -jar vusb-client.jar --help`.
:::


1. Log in to your Sauce Labs account.
2. Launch the TestObject real device platform by clicking **Sauce Apps** > **Legacy RDC**.
3. Click the person icon > Account Settings.
<img src={useBaseUrl('img/virtual-usb/vusb1.jpg')} alt="Virtual USB" width="300" />

4. Grab your User API key. **NOTE**: This API key is entirely separate from the one in the main Sauce Labs interface.
5. From a command line, launch the client. Choose between the **EU** or the **US** data center, depending on which device you are trying to connect to:

```sh
java -jar vusb-client.jar server --datacenter <EU/US>
```

```sh
java -jar vusb-client.jar server --datacenter EU
```


6. Once the server is open, you can now start a session. From another command line window, launch the client again using this command to create a new session:

```java
java -jar vusb-client.jar startSession --apiKey <API_KEY> --deviceName <DEVICE_NAME>
```

```java
java -jar vusb-client.jar startSession --apiKey 37D274BC3A65A34BB3DA4DDF7B77E341 --deviceName Motorola_Moto_Z_real
```

This will allow you to allocate a device for your session. That means the device will be in use and not available for other uses until your session is over.


7. When Virtual USB connects to your live testing session, it will return a success message and a link to watch the device running your test in real time.

```java
37D274BC3A65A34BB3DA4DDF7B77E341		Motorola Moto Z		ANDROID		7.0		https://app.testobject.com/#/device/share/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a/view?dc=US

localhost:7000	online
```

8. Copy the port number and use it to connect `adb` to your session device using Virtual USB.

```java
adb connect localhost:<paste returned port here>
```

```java
adb connect localhost:7000
```

9. At this point, vUSB will be fully connected. You can use Android Studio (or Google Chrome's Remote Debugging) to debug your app, execute automation based on `adb`, or any other tool that is `adb`-compliant. For example, using `adb` shell, you can start the camera of the connected device:

```sh
adb shell
am start -a android.media.action.IMAGE_CAPTURE
```

### Closing a Virtual USB Connection

1. Make sure you disconnect your device from ADB using `adb disconnect <IPAddress>:<portNumber>`.

```java
adb disconnect localhost:7000
```

2. If open, close your Sauce Labs device view in your browser.

### Connecting to the Chrome Inspector

One powerful way to work with your Real Device is by viewing web pages through the full spectrum of tools allowed by the Chrome Inspector. This example will demonstrate how to export an [Http ARchive (HAR)](https://en.wikipedia.org/wiki/HAR_(file_format)) file to your local machine from a Live Testing session.

HAR files are useful for inspecting:

*   HTTP requests generated by your web pages
*   API calls
*   User analytics
*   Third party web service calls
*   Any other kind of network traffic you want to capture

1. Follow the above steps [Launch and Connect Virtual USB to a Real Android Device Live Testing Session](/mobile-apps/virtual-usb#launch-and-connect-virtual-usb-to-a-real-android-device-live-testing-session). to initialize the Sauce Labs vUSB client, connect to your device, and initialize an `adb` connection.

2. Once you've verified that you are connected to the device, open a Chrome tab locally and put chrome://inspect in the address bar. This will open the Chrome Inspector:
<img src={useBaseUrl('img/virtual-usb/vusb4.png')} alt="Virtual USB" width="400" />

3. Now, you don't actually have Chrome open on the device yet. We can issue additional `adb` commands to make that happen:

```java
$ ./adb shell am start -n com.android.chrome/com.google.android.apps.chrome.Main
```

```java
$ ./adb shell am start -a android.intent.action.VIEW -d http://www.saucedemo.com
```

4. These commands launch the Chrome app, and then navigate to our "Swag Labs" demo website. Once these have been successful, you should see a new set of options under the Remote Target heading in your chrome://inspect tab.  

If you click **inspect**, a new window will open, displaying Chrome DevTools the same as if the device were sitting on your desk, connected to a USB cable.
<img src={useBaseUrl('img/virtual-usb/vusb3.png')} alt="Virtual USB" width="400" />
<img src={useBaseUrl('img/virtual-usb/vusb2.png')} alt="Virtual USB" width="400" />

5. Clicking the **Network** tab and reloading the page will display all HTTP requests made during the refresh:

6. Under the **Network** tab, click the down arrow icon to export a HAR file locally. This will prompt you with a Save dialog. Choose a location for the HAR file.
<img src={useBaseUrl('img/virtual-usb/vusb6.png')} alt="Virtual USB HAR" width="400" />

7. Review your HAR file. It should contain every HTTP request/response gathered during the page load, as well as all the headers, parameters, timing info, and other things. Using this information, you can dive deep into the way your web pages are put together, and you can do it on any configured device, without having to worry about power management or keeping up with the physical device.

>**NOTE**: The `adb-reverse` command is not supported for use with Virtual USB.


## Changelog

For version release notes, see [Android Virtual USB Changelog](https://wiki.saucelabs.com/pages/viewpage.action?pageId=86575598) and [iOS Virtual USB Changelog](https://wiki.saucelabs.com/pages/viewpage.action?pageId=99652031).
