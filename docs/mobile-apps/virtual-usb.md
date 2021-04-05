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

Virtual USB (vUSB) simulates connecting a Sauce Labs real device directly to your local machine with a USB cable, allowing you to debug your Android and iOS native and web apps. vUSB integrates into your development environment as if the device is connected directly to your workstation.

Once you connect to the Sauce Labs real device of your choice, you can:

* Interact with your app manually in a live test session using browser-based developer tools (e.g., Chrome DevTools, Safari Web Inspector).
* Run automated tests on your app from any IDE (e.g., Android Studio, Xcode) using your homegrown developing and testing tools.
* Mix live and automated testing as it fits your use case. you can introduce some breakpoints and do exploratory testing from there.
* Use any framework, as long as it can connect to the Sauce Labs cloud
* Make the most our of your early stage development.
* Build and deploy an application directly from the IDE.
* Monitor device performance metrics such as CPU consumption, device memory, and network data performance.

>**NOTE**: This topic provides instructions for both Sauce Labs and TestObject, our [legacy RDC platform](https://wiki.saucelabs.com/display/DOCS/Legacy+Real+Device+Platform+Resources). To take advantage of our latest features, we recommend using Sauce Labs. For information on upcoming and available real device cloud features, refer to our [feature preview doc](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721844).

## What You'll Need

<p><Highlight color="#013a70">ENTERPRISE PLANS ONLY</Highlight></p>

* For security reasons, you'll need to have our [private real device cloud](https://saucelabs.com/platform/real-device-cloud) feature enabled as part of your plan. This is a dedicated pool of Sauce Labs real devices allocated to your organization only.
* Windows, Mac or Linux operating system.
* Administrator and or installation rights on your machine.
* Java Development Kit (JDK) installed.
* Optional: Have [Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) downloaded, if you plan to use it.

Android only:
 * Android Debug Bridge (ADB) version higher than 1.0.39.
 * Android Studio 4 or higher.

## Virtual USB for Sauce Labs

<img src={useBaseUrl('img/virtual-usb/vusb-workflow.png')} alt="Virtual USB Workflow" width="800" />

:::tip `--help` flag
Run `java -jar virtual-usb-client-2.0.0.jar --help` to see a full list of vUSB test configuration commands and options.
:::

### Download

1. Click below to download the latest vUSB client to your local machine where you have your IDE installed.

  <p> <a href="https://s3-eu-west-1.amazonaws.com/v2.0.0/virtual-usb-client-2.0.0.jar"><button class="download">Download vUSB</button></a> </p>

>**NOTE**: If you're testing on iOS devices, you'll also need to [download iOS symbols](https://github.com/Zuikyo/iOS-System-Symbols).

### Start vUSB Server

2. On your local machine, launch a command line terminal window and use `cd` to navigate to the folder where you downloaded the vUSB client.

3. Enter the `server` command, followed by the `--datacenter US` (Sauce Labs U.S. Data Center) or `--datacenter EU` (Sauce Labs Europe Data Center). This establishes the connection from your local machine to our Real Device Cloud, where your private devices are hosted.
  ```java
  java -jar virtual-usb-client-2.0.0.jar server --datacenter US
  ```

  **Set Up a Local Proxy (Optional)**

  You can launch a proxy tunnel or device proxy tunnel using the proxy command options (run `java -jar virtual-usb-client-2.0.0.jar --help` and go to the `server` section).
  <img src={useBaseUrl('img/virtual-usb/vusb-proxy.jpg')} alt="Virtual USB Proxy Command Options" width="500" />

  **Set Environment Variables (Optional)**

  Set your Sauce Labs user credentials (`username` and `accessKey`) as environment variables. For more info, see [Using Environment Variables for Authentication Credentials](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365647#BestPracticesforRunningTests-UseEnvironmentVariablesforAuthenticationCredentials).

### Start Test Session

5. Find the device that you want to use for testing. Go to **Live** > **Cross Browser** > **Mobile Real** > Navigate to your device in the list > click **Details** > Copy the **ID** (this will be your `--deviceName` in the next step).

  <img src={useBaseUrl('img/virtual-usb/vusb-devicename.jpg')} alt="Virtual USB Device Name" width="500" />

  As a reminder, vUSB only works on private devices (marked with a <img src={useBaseUrl('img/virtual-usb/vusb-private.jpg')} alt="Sauce Labs Private Device Icon" width="15" />). A quick way to find your organization's private devices from the device list is to click **Filters** and toggle **Private Devices**.

  <img src={useBaseUrl('img/virtual-usb/vusb-privatedevices.jpg')} alt="Virtual USB Private Devices Filters" width="500" />

  The device will be allocated specifically to you and unavailable to other users in your organization until your session ends.

6. Open a second command line terminal, while keeping the first one with the server connection running in the background. You'll use the new one to establish the connection to the device and start your test session. Run the `startSession` command, followed by your `username` and `accessKey` for authentication, then the `--deviceName` (the **ID** from the previous step):
<Tabs
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'Android'},
    {label: 'iOS', value: 'iOS'},
  ]}>

  <TabItem value="Android">

  ```java
  java -jar virtual-usb-client-2.0.0.jar startSession --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03 --deviceName Motorola_Moto_Z_real
  ```

  </TabItem>
  <TabItem value="iOS">

  ```java
  java -jar virtual-usb-client-2.0.0.jar startSession --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03 --deviceName iPhone_XS
  ```

  </TabItem>
  </Tabs>

   or

   **Sauce Connect Proxy (Optional)**

   To run your vUSB test through a Sauce Connect Proxy tunnel:
   * Open a third command line terminal and start a tunnel from there.
    ```sh
    $ bin/sc --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03 https://saucelabs.com/rest/v1/ --tunnel-identifier awesometunnel
    ```
   * Go back to your previous terminal window and append your tunnel identifier to the end of your `startSession` command line. The vUSB client will use it to retrieve and secure your test data.
    ```java
    java -jar virtual-usb-client-2.0.0.jar startSession --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03 --deviceName Motorola_Moto_Z_real --tunnel-identifier awesometunnel
    ```

7. If your vUSB test session launch is successful, you'll see a success message containing:

  <Tabs
    defaultValue="Android"
    values={[
      {label: 'Android', value: 'Android'},
      {label: 'iOS', value: 'iOS'},
    ]}>

  <TabItem value="Android">

  Your session ID, a port number, and a link that takes you to your device and allows you to watch your test running in real time.

  ```java
  37D274BC3A65A34BB3DA4DDF7B77E341        Motorola Moto Z     ANDROID     7.0     https://app.us-west-1.saucelabs.com/live/mobile/dataCenters/US/devices/shared/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a

  localhost:7000  online
  ```

  </TabItem>
  <TabItem value="iOS">

  Your session ID and a link that takes you to your device and allows you to watch your test running in real time.

  ```java
  37D274BC3A65A34BB3DA4DDF7B77E341        iPhone XS             IOS         14.3    https://app.us-west-1.saucelabs.com/live/mobile/dataCenters/US/devices/shared/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a

  localhost:-1  online
  ```

  </TabItem>
  </Tabs>

### Test and Debug

8. **Android Only**: Connect ADB to your test session device by running `adb connect`, followed by the `<IPAddress>:<portNumber>` from the previous step:
  ```java
  adb connect localhost:7000
  ```
  <img src={useBaseUrl('img/virtual-usb/vusb-adb.jpg')} alt="Virtual USB ADB" width="400" />

9. Open up the device by running the URL from your success message in a browser.

10. **iOS Only**: When you see the pop-up window, provide your Touch ID or password authentication.

11. Now you can run your tests and debug your app.
  <Tabs
    defaultValue="Android"
    values={[
      {label: 'Android', value: 'Android'},
    {label: 'iOS', value: 'iOS'},
    ]}>

  <TabItem value="Android">

  You can execute automated adb-based tests using Android Studio, Google Chrome's Remote Debugging, or any other adb-compliant debugging tool. As an example, you can start the camera of the connected device using adb shell:

  ```java
  adb shell
  am start -a android.media.action.IMAGE_CAPTURE
  ```

  </TabItem>
  <TabItem value="iOS">

  You can use Safari's developer tool, Web Inspector, to debug your app.

  </TabItem>
  </Tabs>

### Close Your Test

12. When you've finished testing, there are a few ways to end your vUSB session:
  * Close the browser window in which the device is running.
  * Close your session by running the `disconnect` command along with the `--sessionID`, which you can find in the success message.
  ```java
  java -jar virtual-usb-client-2.0.0.jar disconnect --sessionID 37D274BC3A65A34BB3DA4DDF7B77E341
  ```
  Delete your sessions by running `deleteSession`, followed by your `--sessionID`, `--username`, and `--accessKey`.
  ```java
  java -jar virtual-usb-client-2.0.0.jar deleteSession --sessionID 37D274BC3A65A34BB3DA4DDF7B77E341 --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03
  ```
  * Android Only: Disconnect your device from ADB by running `adb disconnect` followed by your `<IPAddress>:<portNumber>`:
  ```java
  adb disconnect localhost:7000
  ```

:::tip
If you lose track of your `--sessionID`, you can recover it by running the `sessions` command, followed by your `--username` and `--accessKey`. This generates a list active device sessions:
```java
java -jar virtual-usb-client-2.0.0.jar sessions --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03
```
:::

## Virtual USB for TestObject (Legacy)

Below are instructions on how to launch a vUSB Android real device test session in TestObject, our legacy real device platform.

vUSB for iOS on TestObject is in Beta. Contact your Customer Success Manager to request access.

### Download

1. Click below to download the vUSB client to the same machine where you have your IDE (e.g., Android Studio) installed.

<p> <a href="https://s3-eu-west-1.amazonaws.com/saucelabs-vusb/v1.8/vusb-client.jar"><button class="download">Download vUSB</button></a> </p>

:::tip **Accessing Instructions in the Client**
You can also find instructions for using the Virtual USB client by running `java -jar vusb-client.jar --help`.
:::

### Start vUSB Server

2. Launch TestObject by logging in to your Sauce Labs account, then clicking **Sauce Apps** > **Legacy RDC**.

3. Find your TestObject username and User API key. Click the person icon > **Account Settings**. Your TestObject credentials are entirely separate from your Sauce Labs username and access key.
<img src={useBaseUrl('img/virtual-usb/vusb1.jpg')} alt="TestObject person icon" width="300" />

4. On your local machine, launch a command line terminal and use `cd` to navigate to the folder where you downloaded the vUSB client.

5. Enter the `server` command, followed by the `--datacenter US` (Sauce Labs U.S. Data Center) or `--datacenter EU` (Sauce Labs Europe Data Center). This establishes the connection from your local machine to our Real Device Cloud.

```java
java -jar vusb-client.jar server --datacenter US
```

### Start Test Session

6. From another command line window, launch the client again using this command to create a new session:

```java
java -jar vusb-client.jar startSession --apiKey 37D274BC3A65A34BB3DA4DDF7B77E341 --deviceName Motorola_Moto_Z_real
```

7. When vUSB connects to your live testing session, it will return a success message and a link to watch the device running your test in real time.

```java
37D274BC3A65A34BB3DA4DDF7B77E341		Motorola Moto Z		ANDROID		7.0		https://app.testobject.com/#/device/share/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a/view?dc=US

localhost:7000	online
```

8. Copy the port number and use it to connect `adb` to your session device using Virtual USB.

```java
adb connect localhost:7000
```

### Test and Debug

9. vUSB should be fully connected to the device. Now you can run your tests. You can debug your app by executing automated adb-based tests using Android Studio, Google Chrome's Remote Debugging, or any other adb-compliant debugging tool.

### Close Your Test

10. When you've finished testing, there are a couple ways to end your vUSB session:
  * Close the browser window in which the device is running.
  * Disconnect your device from ADB by running `adb disconnect` followed by your `<IPAddress>:<portNumber>`:

   ```java
   adb disconnect localhost:7000
   ```

### Generate HAR File (Optional)

This section demonstrates how to connect to the Chrome Inspector and export an [Http ARchive (HAR)](https://en.wikipedia.org/wiki/HAR_(file_format)) file to your local machine from a live testing session. Chrome Inspector's suite of developer tools provides a powerful way to work with your web pages while leveraging our real devices.

HAR files are useful for identifying performance issues, network traffic, and other information, such as:

* HTTP requests generated by your web pages
* API calls
* User analytics
* Third-party web service calls

1. Follow the steps in the previous section to initialize the vUSB client, connect to your device, and initialize an `adb` connection.

2. Open a Chrome tab locally and run `chrome://inspect` in the address bar to open the Chrome Inspector:
<img src={useBaseUrl('img/virtual-usb/vusb4.png')} alt="Virtual USB" width="400" />

3. Now, you don't actually have Chrome open on the device yet. We can issue additional `adb` commands to make that happen. First, launch the Chrome app:
  ```java
  $ ./adb shell am start -n com.android.chrome/com.google.android.apps.chrome.Main
  ```
  Then, navigate to a website (for this example, we'll use our Sauce Labs demo website).

  ```java
  $ ./adb shell am start -a android.intent.action.VIEW -d http://www.saucedemo.com
  ```

4. If the above commands are successful, you should see a new set of options under the **Remote Target** heading in your chrome://inspect tab.  

  If you click **inspect**, a new window will open, displaying Chrome DevTools the same as if the device were sitting on your desk, connected to a USB cable.
  <img src={useBaseUrl('img/virtual-usb/vusb3.png')} alt="Virtual USB" width="400" />
  <img src={useBaseUrl('img/virtual-usb/vusb2.png')} alt="Virtual USB" width="400" />

5. Clicking the **Network** tab and reloading the page will display all HTTP requests made during the refresh:

6. Under the **Network** tab, click the down arrow icon to export a HAR file locally. This will prompt you with a Save dialog. Choose a location for the HAR file.
<img src={useBaseUrl('img/virtual-usb/vusb6.png')} alt="Virtual USB HAR" width="400" />

7. Review your HAR file. It should contain every HTTP request/response gathered during the page load, as well as all of the headers, parameters, timing info. Using this information, you can dive deep into the way your web pages are put together. You can do it on any configured device, without having to worry about power management or keeping up with the physical device.

>**NOTE**: The `adb-reverse` command is not supported.

## Changelog

For version release notes, see [Android Virtual USB Changelog](https://wiki.saucelabs.com/pages/viewpage.action?pageId=86575598) and [iOS Virtual USB Changelog](https://wiki.saucelabs.com/pages/viewpage.action?pageId=99652031).
