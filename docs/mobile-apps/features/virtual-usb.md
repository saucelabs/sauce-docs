---
id: virtual-usb
title: Virtual USB Testing on Real Mobile Devices
sidebar_label: Virtual USB (Real Devices)
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

Virtual USB (vUSB) is a mobile (app) debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable. It integrates into your development environment as if the device is connected directly to your workstation, meaning you can use your choice of homegrown development and testing tools to debug.

* Build and deploy apps directly from any IDE (e.g., Android Studio, Xcode).
* Make the most out of your early stage development.
* Use a mix of live and automated testing as it fits your use case.
* Monitor device performance metrics such as CPU consumption, device memory, and network data performance (depending on what the IDE/your tools offer).
* Interact with your app manually in a live test session using browser-based developer tools (e.g., Chrome DevTools, Safari Web Inspector).

## What You'll Need

<small><span className="sauceDBlue">Enterprise Plans Only</span></small>

* For security reasons, you'll need to have [Sauce Labs Private Devices](https://saucelabs.com/platform/real-device-cloud) enabled as part of your [enterprise pricing plan](https://saucelabs.com/solutions/enterprise) to use Virtual USB. This feature allocates a dedicated pool of Sauce Labs real devices to your organization only.
* Windows, macOS, or Linux operating system.
* Administrative rights to install software on your machine.
* Have Java Development Kit (JDK) installed.
* A mobile native app or web app.
* If you're testing an iOS app:
  * macOS required (not supported for Windows or Linux).
  * Have Xcode installed.
* If you're testing an Android app:
  * Android Debug Bridge (ADB) version higher than 1.0.39.
  * Android Studio 4 or higher.
* If you need to use [Sauce Connect Proxy](/secure-connections/sauce-connect), you'll need to have the client installed first.


## Using Virtual USB

:::tip CLI Reference
See [Virtual USB CLI Reference](/dev/cli/virtual-usb.md) for a full list of vUSB test configuration commands and options. You can also view them directly in the vUSB client by running `java -jar virtual-usb-client.jar --help`.
:::

### Download Client

1. Click below to download the latest vUSB client to your local machine where you have your IDE installed/set up.

  <p> <a href="https://saucelabs-vusb.s3-eu-west-1.amazonaws.com/v2.0.0/virtual-usb-client.jar"><button class="download">Download vUSB</button></a> </p>

### Gather Credentials

2. Have your Sauce Labs `username` and `accessKey` handy. You can find these under **Account** > **User settings**.

3. Have your `--deviceName` handy. This is the **ID** of the device that you want to use for testing. To find this, go to **Live** > **Cross Browser** > **Mobile Real** > Find Your **Private Device** > **Details**.

  <img src={useBaseUrl('img/virtual-usb/vusb-devicename.jpg')} alt="Virtual USB Device Name" width="500" />

  The device you choose will be allocated specifically to you while your session is active. Other users in your organization will see it marked **Busy**.

  As a reminder, vUSB only works on private devices (marked with a <img src={useBaseUrl('img/virtual-usb/vusb-private.jpg')} alt="Sauce Labs Private Device Icon" width="17" />). A quick way to find your organization's private devices from the device list is to click **Filters** and toggle **Private Devices**.

  <img src={useBaseUrl('img/virtual-usb/vusb-privatedevices.jpg')} alt="Virtual USB Private Devices Filters" width="500" />

<br/>

### Start Server

4. On your local machine, launch a command line terminal window and use `cd` to navigate to the folder where you downloaded the vUSB client.

5. In your terminal, enter the [`server`](/dev/cli/virtual-usb/start-server) command, followed by `--datacenter US` or `--datacenter EU`, to specify the Sauce Labs U.S. or E.U. Data Center. This establishes the connection from your local machine to our Real Device Cloud, where your private devices are hosted.
  ```java
  java -jar virtual-usb-client.jar server --datacenter US
  ```

  Once you've executed the above command line, it becomes a session data log, running continuously in the background. Do not close it, and keep it separate from terminals you'll use in forthcoming steps.

  #### **Optional: Set Verbose Logging**
  If you'd like to set verbose or very verbose logging, you can specify `-v` or `-vv` as the first argument, respectively. Example:
  ```java
  java -jar virtual-usb-client.jar -v server --datacenter US
  ```

  #### **Optional: Set Up a Local Server Proxy**

  If you need to use a proxy to get access to external resources, you can launch a proxy tunnel or device proxy tunnel using the [proxy flags compatible with the `server` command](/dev/cli/virtual-usb/start-server). This is not the same as starting a [Sauce Connect Tunnel](/secure-connections/sauce-connect).

  #### **Optional: Set Environment Variables**

  Setting your Sauce Labs `username` and `accessKey` as [environment variables](/basics/environment-variables) provides an extra layer of security for your credentials when you reference them from within your tests.


### Start Test Session

6. In this step, you'll establish the connection to your device and start a vUSB test session. This needs to be done in a separate terminal session. This terminal session will only log if a connection is successful or not. During the session with the device(s) the logs can be found in the terminal that you'll have started in the previous step.

  There are two ways to start a test session:

  #### **Method 1 (Recommended): Connect to existing live testing session**
  Start a live test directly on Sauce Labs, then use the command terminal to [`connect`](/dev/cli/virtual-usb/connect-session) the test to your vUSB client.

  First, launch your test on Sauce Labs (**Live** > **Cross Browser** > **Mobile Real** > Find your **Private Device** > **Launch**). Next, locate your `--sessionId` by opening a new command line terminal and running the [`sessions`](/dev/cli/virtual-usb/find-sessionid) command, along with your credentials.

  ```java
  java -jar virtual-usb-client.jar sessions --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  ```

  If [Sauce Connect Proxy](/secure-connections/sauce-connect) is required to access your corporate network or your local machine for secure test data, you'll need to select a **SAUCE CONNECT PROXY** from the dropdown before launching your device.
  <img src={useBaseUrl('img/virtual-usb/vusb-sc-ui.jpg')} alt="Sauce Connect tunnel dropdown in UI" width="600" />

  This will return a list of your active test sessions.
  ```java
  List of active sessions
  d03a1b81-158d-4bb4-bcc9-074e43dd8465   Samsung Galaxy S10  ANDROID  10
  c7729c7a-56a9-46cf-ba96-958709a86b4f   iPhone XS           IOS      14.3
  e21abb6f-a08e-4685-ba6e-8c6586dd4264   iPhone SE 2020      IOS      14.3
  ```

  Copy the `--sessionId` of your desired test, then run that along with the [`connect`](/dev/cli/virtual-usb/connect-session) command and your credentials.

  ```java
  java -jar virtual-usb-client.jar connect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  ```

  > **NOTE:** Method 1 is recommended for the following reasons:
  > - All menu options to control the device are available with Method 1 and **NOT** with Method 2.
  > - Interactions and gestures on an iOS device session are much faster in comparison to Method 2.

  If your vUSB test session launch is successful, you'll see a success message:
  <Tabs
    defaultValue="Android"
    values={[
      {label: 'Android', value: 'Android'},
      {label: 'iOS', value: 'iOS'},
    ]}>

  <TabItem value="Android">

  The expected output will be a **port number**, which you'll need when you want to connect the device to ADB (see Step 7).

  ```java
  localhost:7000  online
  ```

  </TabItem>
  <TabItem value="iOS">

  ```java
  localhost:-1  online
  ```

  After this, you'll see:
  <ol>
    <li>an Apple system notification popup, where you'll need to provide Touch ID or password authentication</li>
    <li>information returned in your server logs similar to the example below.</li>
  </ol>  

  ```bash
  11:13:12.347 INFO com.saucelabs.vusb.client.server.usbmuxd.SocketMover - The socket at /var/run/usbmuxd needs to be moved
  11:13:12.347 INFO com.saucelabs.vusb.client.server.usbmuxd.SocketMover - This will require administrator privileges!
  ```

  This prepares the usbmuxd socket (`/var/usbmuxd`) so that developer tools like Xcode can interact with the remote device just like they interact with a local device. You will need to have administrator permissions to replace `/var/usbmuxd` on your computer and [disable Systems Integrity Protection (SIP) in macOS](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection).

   </TabItem>
   </Tabs>

  or

  #### **Method 2: Start new session with vUSB client from command line**
  Open a new command line terminal window and run the [`startSession`](/dev/cli/virtual-usb/start-session) command, followed by your `username`, `accessKey`, and `--deviceName`:
<Tabs
  defaultValue="Android"
  values={[
    {label: 'Android', value: 'Android'},
    {label: 'iOS', value: 'iOS'},
  ]}>

  <TabItem value="Android">

  ```java
  java -jar virtual-usb-client.jar startSession --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx --deviceName Motorola_Moto_Z_real
  ```

  </TabItem>
  <TabItem value="iOS">

  ```java
  java -jar virtual-usb-client.jar startSession --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx --deviceName iPhone_XS
  ```

  </TabItem>
  </Tabs>

  To use Sauce Connect Proxy: launch a tunnel in the Sauce Connect client, then add your [`--tunnel-identifier`](https://docs.saucelabs.com/dev/cli/virtual-usb/start-session#--tunnelidentifier), which the vUSB client will use to retrieve and secure test data. You can also set up a device proxy using [proxy command options](/dev/cli/virtual-usb/start-session).

  If your vUSB test session launch is successful, you'll see a success message:
  <Tabs
    defaultValue="Android"
    values={[
      {label: 'Android', value: 'Android'},
      {label: 'iOS', value: 'iOS'},
    ]}>

  <TabItem value="Android">

  The expected output will be your **`--sessionId`**, a **port number**, and a **link**. Click the link to see your device in action, running your tests in real time. You must be logged into Sauce Labs for the link to work.
  The **port number** is needed when you want to connect the device to ADB (see step 7).

  ```java
  d03a1b81-158d-4bb4-bcc9-074e43dd8465  Motorola Moto Z    ANDROID   7.0   https://app.us-west-1.saucelabs.com/live/mobile/dataCenters/US/devices/shared/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a

  localhost:7000  online
  ```

  </TabItem>
  <TabItem value="iOS">

  The expected output will be your **`--sessionId`** and a **link** (no port number for iOS).

  ```java
  d03a1b81-158d-4bb4-bcc9-074e43dd8465     iPhone XS         IOS      14.3    https://app.us-west-1.saucelabs.com/live/mobile/dataCenters/US/devices/shared/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a

  localhost:-1  online
  ```

  Make sure you're logged into your Sauce Labs account prior to clicking the link above. After doing so, you'll see: 1) an Apple system notification popup, where you'll need to provide Touch ID or password authentication; and 2) information returned in your server logs similar to the example below.

  ```bash
  11:13:12.347 [KQueueEventLoopGroup-2-2] INFO com.saucelabs.vusb.client.server.usbmuxd.SocketMover - The socket at /var/run/usbmuxd needs to be moved
  11:13:12.347 [KQueueEventLoopGroup-2-2] INFO com.saucelabs.vusb.client.server.usbmuxd.SocketMover - This will require administrator privileges!
  ```

  This prepares the usbmuxd socket (`/var/usbmuxd`) so that developer tools like Xcode can interact with the remote device just like they interact with a local device. You will need to have administrator permissions to replace `/var/usbmuxd` on your computer and [disable Systems Integrity Protection (SIP) in macOS](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection).

   </TabItem>
   </Tabs>
<br/>   

7. **Android only**: Link ADB to your test session device by running `adb connect`, followed by the port number:

  ```java
  adb connect localhost:7000
  ```
  <img src={useBaseUrl('img/virtual-usb/vusb-adb.jpg')} alt="Virtual USB ADB" width="400" />

### Test and Debug

8. Now, you can debug and run tests on your app. For guidance and ideas, see the [Example Use Cases](https://docs.saucelabs.com/mobile-apps/features/virtual-usb#example-use-cases).

:::caution iOS Limitation
To do proper debugging, the iOS device symbols will need to be downloaded to your local machine. This happens automatically when you're connecting to a Sauce Labs iOS device for the first time via a remote debug vUSB session with Xcode. **Xcode will attempt to download the iOS device symbols over the vUSB tunnel, causing a lag that can last up to a few minutes.**
  * **What to Do**: Go to `~/Library/Developer/Xcode/iOS DeviceSupport/` and check the used iOS version of the phone to see if the symbols have been downloaded. The total used space per OS should be more than 1GB. If they are less than 1MB, delete the folder and restart Xcode again so it can re-fetch them.
This a one-time action that you won't need to do again for future tests.
:::

<br/>

:::caution Android Limitation
**The `adb-reverse` command is not supported.**
:::

### Close Test

10. When you've finished testing, we recommend closing your vUSB session so that other users can use the device. There are a few ways to do this:

    * If you started a test session by connecting to a live session on Sauce Labs (Option 1), close it out by running the [`disconnect`](/dev/cli/virtual-usb/disconnect-session) command, followed by your `--sessionId`.
      * **Android Only**: You'll also need to disconnect your device from ADB. Run `adb disconnect` followed by your `<IPAddress>:<portNumber>`:
       ```java
       adb disconnect localhost:7000
       ```

    * If you started your test session with `startSession` (option 2), close it out by running the [`deleteSession`](/dev/cli/virtual-usb/delete-session) command, followed by your `--sessionId` and credentials.

     ```java
     java -jar virtual-usb-client.jar deleteSession --sessionId 37D274BC3A65A34BB3DA4DDF7B77E341 --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     ```
     * **Android Only**: You'll also need to disconnect your device from ADB. Run `adb disconnect` followed by your `<IPAddress>:<portNumber>`:
       ```java
       adb disconnect localhost:7000
       ```

    * The third option, regardless of your test setup, is to close the browser window where the device session is running.

  :::tip
  If you've lost track of your `--sessionId`, you can recover it using the [`sessions`](/dev/cli/virtual-usb/find-sessionid) command to generate a list of your active device sessions.
  ```java
  java -jar virtual-usb-client.jar disconnect --sessionId 37D274BC3A65A34BB3DA4DDF7B77E341
  ```
  :::

## Example Use Cases

### Exploratory Testing

Introduce breakpoints in your IDE and then do exploratory testing.

### Android Debugging

#### Android Studio Debugging
To for example profile your Android app you can follow the instructions as mentioned [here](https://developer.android.com/studio/profile). This can result in the following data.

<img src={useBaseUrl('img/virtual-usb/vusb-android-profiling.png')} alt="Virtual USB Android Studio Profiling" />

#### Chrome DevTools Web Debugging
This example demonstrates how to connect your test device to Chrome Inspector and export an [Http ARchive (HAR)](https://en.wikipedia.org/wiki/HAR_(file_format)) file to your local machine from a live testing session. Chrome Inspector's suite of developer tools provides a powerful way to work with your web pages while leveraging our real devices.

HAR files are useful for identifying performance issues, network traffic, and other information, such as:

* HTTP requests generated by your web pages
* API calls
* User analytics
* Third-party web service calls

1. Follow the steps in the previous section to start up a test session (i.e., download vUSB client, connect to Data Center, connect to your device, and initialize an `adb` connection). Have your Sauce Labs device test session up on your screen.

2. Open a Chrome tab locally and run `chrome://inspect` in the address bar. This opens the Chrome Inspector.
<img src={useBaseUrl('img/virtual-usb/vusb4.png')} alt="Virtual USB" width="400" />

3. Use your command line terminal to open Chrome on the device by running the `adb` commands below. The first one launches the Chrome app:
  ```java
  $ ./adb shell am start -n com.android.chrome/com.google.android.apps.chrome.Main
  ```
  Then, navigate to a website (for this example, we'll use our demo site).

  ```java
  $ ./adb shell am start -a android.intent.action.VIEW -d http://www.saucedemo.com
  ```

4. If the above commands are successful, you should see a new set of options under the **Remote Target** heading in your `chrome://inspect` tab.  

  If you click **Inspect**, a new window will open, displaying Chrome DevTools the same as if the device were sitting on your desk, connected to a USB cable.
  <img src={useBaseUrl('img/virtual-usb/vusb3.png')} alt="Virtual USB" width="400" />
  <img src={useBaseUrl('img/virtual-usb/vusb2.png')} alt="Virtual USB" width="600" />

5. Click the **Network** tab and reload the page to display all HTTP requests made during the refresh:

6. Under the **Network** tab, click the down arrow icon to export a HAR file locally. This will prompt you with a Save dialog. Choose a location for the HAR file.
<img src={useBaseUrl('img/virtual-usb/vusb6.png')} alt="Virtual USB HAR" width="600" />

7. Review your HAR file. It should contain every HTTP request/response gathered during the page load, as well as all of the headers, parameters, timing info. Using this information, you can dive deep into the way your web pages are put together. You can do it on any configured device, without having to worry about power management or keeping up with the physical device.

:::tip
For more tips on working with HAR Files, check out [Visualize HAR Files with the Sauce Labs React Network Viewer Component](https://opensource.saucelabs.com/blog/react_network_viewer).
:::

#### ADB commands
You can execute `adb` commands on the device connected over vUSB as you would normally also use. This is a simple example to capture a screenshot and pull it to your local machine.

```bash
#Create a temporary folder to save a screenshot.
mkdir tmp
#Capture a screenshot and save to /sdcard/screen.png on your Android divice.
adb shell screencap -p /sdcard/screen.png

#Grab the screenshot from /sdcard/screen.png to /tmp/screen.png on your PC.
adb pull /sdcard/screen.png /tmp/screen.png

#Delete /sdcard/screen.png.
adb shell rm /sdcard/screen.png

#open the screenshot on your PC.
open /tmp/screen.png
```

### iOS Debugging
To deploy and debug your iOS apps, you can use Xcode. To debug your website, we recommend using the developer tools within Safari.

#### **Xcode Debugging**
> **NOTE**: Before debugging with Xcode, please read the known limitations under [Test and Debug](https://docs.saucelabs.com/mobile-apps/features/virtual-usb#test-and-debug).

To profile your app: from your Xcode nav, select **Product** > **Profile**. It will automatically profile the app and generate a new menu, as shown below.

<img src={useBaseUrl('img/virtual-usb/vusb-ios-profiling.png')} alt="Virtual USB Profiling" />

<br/><br/>

In this example below, **Energy Log** has been selected and recording has been started. This can result in the following screen.

<img src={useBaseUrl('img/virtual-usb/vusb-energy-logs.png')} alt="Virtual USB Energy Logs" />

#### **Safari Web Debugging**

To debug with Safari: Open Safari > From the nav, select **Develop** > **Select your device** > **Select the view** you want to debug. In our example, we want to debug the [Sauce Swag Labs demo website](https://www.saucedemo.com).

<img src={useBaseUrl('img/virtual-usb/vusb-safari-debug.png')} alt="Virtual USB Energy Logs" />

## TestObject (Legacy RDC)

:::warning
TestObject, our [Legacy Real Device Platform](https://saucelabs.com/platform/test-object-eol), reaches end-of-life September 1, 2021. Please migrate all of your apps and tests from TestObject to Sauce Labs by August 31, 2021.
:::
