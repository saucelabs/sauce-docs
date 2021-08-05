---
id: features
title: Mobile App Testing Features
sidebar_label: Testing Features
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

import useBaseUrl from '@docusaurus/useBaseUrl';

## Biometric Authentication (Touch ID and Face ID)

We provide testing capabilities for mobile app biometric authentication (Touch ID and Face ID).

:::caution **Security Notice**

KeyStore is normally used to implement and store Touch ID and Face ID user biometrics for mobile apps. As this is a cloud security risk, Sauce Labs does not mock the KeyStore on our real devices for supporting Touch ID and Face ID; the use of KeyStore on our real devices is not supported.
:::

### Live Testing

<p><Highlight color="#013a70">iOS Real Devices only</Highlight></p>

For live testing, biometric authentication is supported for iOS real devices only. Emulators, simulators, and Android real devices are not supported at this time.

First, you'll need to enable biometric authentication in your settings:

1. Click **LIVE** > **Mobile App** to get to Sauce Labs real devices.
2. If you haven't already, upload your iOS app *.ipa file here.
3. Hover your mouse over the line item for your app > Click **Settings**.
4. Set **Biometrics Interception** to **Enabled**.
5. Return to the app menu by clicking **Back to App Selection**.
6. Start up your live test session by hovering your mouse over your app, then click **Choose Device** > select your device > click **Launch**.

To initiate a Touch ID or Face ID action in your live test session:

1. In the toolbar, click the **Authentication** fingerprint icon.
2. Select a response:
    1. When you select **PASS**, you're setting biometric authentication will have been successful.
    2. When you select **FAIL**, you're setting biometric authentication to fail.  

<img src={useBaseUrl('img/mobile-apps/biometric-auth-1.png')} alt="Biometric authorization live testing" width="200"/>
<br/>
<img src={useBaseUrl('img/mobile-apps/biometric-auth-2.gif')} alt="Biometric authorization live testing" width="650"/>

See [Live Mobile App Testing Toolbar](https://docs.saucelabs.com/mobile-apps/live-testing/live-mobile-app-testing#app-settings) for more information.


### Automated Testing

For automated testing, biometric authentication is supported for simulators, emulators, and iOS real devices. Please note that not all iOS and Android devices support Touch ID or Face ID. Be prepared to handle test cases..

#### **iOS Simulators**

To enable Touch ID and Face ID on Sauce Labs iOS simulators or on your local machine, you need to set the desired capability `allowTouchIdEnroll` to true. When the Simulator starts, Touch ID enrollment will be enabled by default.

You can also toggle Touch ID enrollment during a test session by calling, for example, the WebdriverIO client method `driver.toggleEnrollTouchId(true)`. More examples in different programming languages can be found [here](http://appium.io/docs/en/commands/device/simulator/toggle-touch-id-enrollment/#toggle-touch-id-enrollment).

1. Add the `allowTouchIdEnroll` capability in your test script and set it to true. Example:
  ```js
  allowTouchIdEnroll: true,
  ```
2. When starting the device through the capabilities, or when you are running your test runtime, add the `driver.toggleEnrollTouchId` capability and set it to true. A full code spec example is available [here](https://github.com/saucelabs-training/demo-js/blob/master/webdriverio/appium-app/examples/biometric-login/test/specs/touch.face.id.spec.js). Example:
  ```js
  driver.toggleEnrollTouchId(true);
  ```
3. To run your test locally, call `npm run test.local.ios.simulator`. To run your test on an Sauce Labs iOS simulator, call one of the following data centers, based on your location:
    * US Data Center: `npm run test.sauce.ios.simulator.us`
    * EU Data Center: `npm run test.sauce.ios.simulator.eu`
4. Try running one of the below example scripts, which demonstrate the default capabilities needed to run automated tests on iOS simulators.

  <details><summary><strong>Click here</strong> to see iOS simulator test examples.</summary>

  ```js reference
  https://github.com/saucelabs-training/demo-js/blob/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.ios.sauce.sim.conf.js
  ```
  </details>

<br/>

#### **Android Emulators**

Android emulators differ from iOS simulators in that:
* They do not have a one-off capability that enables Touch ID authentication.
* By default, you'd need to execute the same steps as you would on a physical mobile device (i.e., enabling a pin and the fingerprint) before you can use it in your tests.
* Android versions differ in their methods of enabling Fingerprint, particularly in the Fingerprint wizard steps.

To enable biometric authentication on Android emulators:

1. Open an emulator.  
2. Activate Screenlock by clicking the three dots icon > **Settings** > **Security**.
3. Go to **Fingerprint** to add a new fingerprint.
4. When prompted to place your finger on the scanner, emulate the fingerprint using this `adb` command.
  ```js
  adb -e emu finger touch <finger_id>
  ```
5. For example, `adb -e emu finger touch 1234`. The automation script would use `1234` as the fingerprint. Make sure you remember the fingerprint number you've selected; when you add the fingerprint through `adb`, you'll need to enter it there.  
6. At this point, you should see a fingerprint detected message.  
7. Return to your Android app, navigate to an action that requires fingerprint authentication, and execute the same command on the app screen.

In the script below, you'll see that the device API level is called out; each Android OS version has a corresponding API level, which may need to be reflected in your code. For more information, see [Android Platform codenames, versions, API levels, and NDK releases](https://source.android.com/setup/start/build-numbers#platform-code-names-versions-api-levels-and-ndk-releases).

```js
enableBiometricLogin() {
    if (driver.capabilities.deviceApiLevel < 26) {
        // Open the settings screen
        this.executeAdbCommand('am start -a android.settings.SECURITY_SETTINGS');
        this.waitAndClick('Fingerprint');
        this.fingerPrintWizardSevenOrLower(DEFAULT_PIN);
    } else {
        // Open the settings screen and set screen lock to pin
        this.executeAdbCommand(`am start -a android.settings.SECURITY_SETTINGS && locksettings set-pin ${DEFAULT_PIN}`);
        this.waitAndClick('Fingerprint');
        this.fingerPrintWizardEightOrHigher(DEFAULT_PIN);
    }

    // We need to end this method where we started it, which is the current running app
    // Open the app again
    driver.launchApp();
}
```

Try running one of the below example scripts, which demonstrate the default capabilities needed to run automated tests on Android emulators.

  <details><summary><strong>Click here</strong> to see the full Android emulator test examples</summary>

  ```js reference
  https://github.com/saucelabs-training/demo-js/blob/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.android.sauce.emu.conf.js
  ```
  </details>

<br/>

#### **iOS Real Devices**

To enable Touch ID and Face ID on iOS real devices, add the `allowTouchIdEnroll` capability in your test script and set it to true, as shown in the example below:

```js reference
https://github.com/saucelabs-training/demo-js/blob/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.ios.sauce.real.conf.js
```

#### **Android Real Devices**

At this time, biometric authentication is not supported for Android real device live testing.

### Additional Resources
* [Using Biometric Login on Sauce Labs](https://github.com/saucelabs-training/demo-js/tree/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login) contains Android and iOS device configuration demo scripts for a variety of use cases, including:
    * iOS local simulators
    * iOS simulators in our Sauce Labs Simulator Cloud
    * iOS real devices in our Legacy RDC platform
    * iOS real devices in the Sauce Labs UI
    * Android local emulators
    * Android emulators in the Sauce Labs Emulator Cloud
* [Documentation for iOS simulator Face ID | Appium on GitHub](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/touch-id.md)
* [Support for iOS Touch ID on Real Devices](https://docs.saucelabs.com/mobile-apps/features/index.html#biometric-authentication-touch-idface-id)


## Camera Image Injection

Does your mobile app have the ability to take images and then process or store them within the app (e.g., scanning a bank check, taking a social media selfie)? Camera Image Injection – also known as camera mocking – is a Sauce Labs Real Device Cloud (RDC) core feature that simulates taking a picture through a mobile app, allowing you to test the app’s camera-based functionality and deliver the best possible user experience.

To mimic camera behavior, you'll provide the app with an image during your test that mocks the use of the camera. Your mobile app accesses the camera and instead of getting back the picture of the device camera, it'll retrieve your uploaded image for your test. You employ the built-in device camera in your live and automated testing and perform test cases that require taking images with any of the device cameras.

### What You'll Need

* Have your [app uploaded to Sauce Labs](/mobile-apps/app-storage) prior to testing.


### Requirements

* Test automation frameworks: Appium.
* Devices: all iOS and Android real devices available in our public and private Real Device Clouds.
* Image file sizes: up to 5MB.
* Image file formats: JPG, JPEG, PNG.

We support both front-facing and rear-facing system device cameras.

:::note Not Supported

* Test automation frameworks: Espresso and XCUITest.
* Mobile browsers and system apps that come pre-installed on the device. Our camera image injection functionality looks to Sauce Labs storage to get your app information.
* Ephemeral apps (i.e., apps with temporary, disappearing messages).
* Testing with emulators and simulators.

:::

#### For Android

For Android devices, there are multiple ways to capture an image, as described in the [Android Camera API](https://developer.android.com/guide/topics/media/camera) developer documentation. We support the following:
* [ACTION_IMAGE_CAPTURE Intent](https://developer.android.com/reference/android/provider/MediaStore#ACTION_IMAGE_CAPTURE): opens the system camera and notifies the calling app gets when the image is taken
* [camera2 API](https://developer.android.com/reference/android/hardware/camera2/package-summary): everything is configured and handled from within the app
* [cameraX](https://developer.android.com/training/camerax): leverages the capabilities of camera2, but uses a simpler, use case-based approach that is lifecycle-aware.
* [Camera API (deprecated)](https://developer.android.com/reference/android/hardware/Camera) (partially supported): As with camera2, everything is handled in the app itself. QR Code readers often use [Camera#setPreviewCallback](https://developer.android.com/reference/android/hardware/Camera#setPreviewCallback(android.hardware.Camera.PreviewCallback)). We pass the injected image to this method, but the rest of this deprecated API is not supported. UI Elements will not likely display the injected image.


#### iOS

For iOS devices, the camera can be configured with different outputs. We support the following:
*   [`AVCapturePhotoOutput`](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput?language=objc): for capturing still images. The results are received via the [`AVCapturePhotoCaptureDelegate`](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate?language=objc) and the method [`captureOutput:didFinishProcessingPhoto:error:`](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/2873949-captureoutput?language=objc) The other methods in this delegate are either deprecated or handle live photos, which we don't support.
*   [`AVCaptureVideoDataOutput`](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput?language=objc): for capturing video frames and processing them. The frames are received via [`AVCaptureVideoDataOutputSampleBufferDelegate`](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate?language=objc) and the method [`captureOutput:didOutputSampleBuffer:fromConnection:`](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1385775-captureoutput?language=objc).
*   [`AVCaptureMetadataOutput`](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput?language=objc): for reading QR-Codes. The QR Codes are passed to the app via [`captureOutput:didOutputMetadataObjects:fromConnection:`](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/1389481-captureoutput?language=objc). We are detecting the [`AVMetadataMachineReadableCodeObject`](https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject?language=objc) and QR Codes are part of that.


### Common Use Cases

Below are common use cases ideal for implementing Camera Image Injection in your tests.

#### **Scanning a Check for a Mobile Banking App Deposit**

Many mobile banking apps allow customers to deposit checks using their smartphone. The customer takes and uploads an image of their physical paper check, and the image is then submitted to the bank for processing.

#### **Using a QR Code to Link to an Embedded URL**

QR codes are often used as a way to bridge print media to digital. Users take a photo with a QR code reader app, the app scans the code and directs them to an embedded URL.

For use cases that involve scanning barcodes or QR codes, your own application in testing must do the actual image processing. Camera Image Injection passes your uploaded image directly to your app as if it came from the device camera; it does not do any processing.

#### **Taking a Selfie for a User Profile Photo**

This could be taking a selfie or uploading a picture for apps that require a user profile photo. You can use Camera Image Injection to test image formats and sizes.

#### **Taking an Image to Store or Send via Mobile App**

Whether it’s a social media app or photo sharing, this use case can encompass many different scenarios. In its simplest form, it could be taking pictures from the front or back camera to send and/or archive within the app.

### Live Testing

During a Live test, you'll be prompted in the UI to upload a photo that will be fed to your app, rather than using your device camera to take the photo.

1. Launch a test session by logging into Sauce Labs and going to **LIVE** > **Mobile App**.
2. Hover over the app you intend to test and click the **Settings** icon.
3. In the editor that appears, make sure the **Image Injection** toggle is enabled and then return to the app selection screen. This needs to be enabled in order to choose a mobile device.
4. Hover over the app again and click the **Choose Device** icon to bring up the menu of available devices.
5. Hover over the device of your choice and click **Launch** to begin a test session on that device with your app.
6. When you want to capture an image with the app camera, go to the right toolbar and click the **Camera** icon to initiate Camera Image Injection.
7. Click **Choose Image** to stage your image for the camera.
8. Activate the camera inside of your app.
9. The device will show your uploaded image in the app as if the image was taken by the device camera. The image will continue to be available, should you go back to the camera during your test session, or you can upload another image and capture it with the camera.

#### Video: Running iOS Mobile Device Tests

This video illustrates how to use both biometric authentication and image injection (starting at 0:41) in an iOS live test:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NmQ6BEjQBWs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Video: Running Mobile Device QR Code Tests

When injecting an image with a QR Code or barcode, the image size in your preview may exceed the boundaries of the target scanner area, which would prevent your app from reading the code. In this scenario, you'd need to add padding to your uploaded image so that when it's scaled to full-screen, the QR Code will fit inside the scanning area limits and can be processed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/viaN-Bs4vBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Automated Testing

During an Automated test, you'll pass an image to the image injection endpoint. Image Injection intercepts the camera input and replaces the camera output with the image file via the camera APIs. When the app requests an image from the device's camera, we inject your uploaded image into the response (the app doesn't know the difference).

In your automated test script, you'll need to input the desired capabilities specific to Camera Image Injection (see below code snippets). The code will execute your image upload and opening of the device camera.

1. First, you'll need add the camera instrumentation desired capability command,  `sauceLabsImageInjectionEnabled`, to your test script. This capability enables image injection functionality.

**Webdriver.io example**

```js
exports.config = {
  //...
  capabilities: [
    {
      deviceName: 'Samsung Galaxy S10',
      platformName: 'Android',
      platformVersion: '10',
      automationName: 'UiAutomator2',
      // Enable image-injection on RDC
      sauceLabsImageInjectionEnabled: true,
    },
  ]
  //...
}
```

**Java example**

```java
var desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("deviceName", "Samsung Galaxy S10");
desiredCapabilities.setCapability("platformVersionName", "10");
...
// Enable image-injection on RDC
desiredCapabilities.setCapability("sauceLabsImageInjectionEnabled", true);
```

2. In this step, you're adding the image injection method to your test script by providing a file path to your image. You can put the below code snippet into your test script in one or more places. Then, when you execute your test, the code snippets will call the endpoint and pass the image to the app for further processing or for other use.  

To change the image, you'll need to send a custom command with a different image. Note that your image file path must be converted to base64 encoding.  

**Webdriver.io example**

```js
const {readFileSync} = require('fs');
const {join} = require('path');

// Read the file from your project and transform it to a base64 string
const qrCodeImage = readFileSync(join(process.cwd(), 'assets/qr-code.png'), 'base64');

// Provide the transformed image to the device
driver.execute(`sauce:inject-image=${qrCodeImage}`);
```

**Java example**

```java
import java.util.Base64;
import static org.apache.commons.io.IOUtils.toByteArray;

// Read the file from the classpath and transform it to a base64 string
String qrCodeImage = Base64.getEncoder().encodeToString(
  toByteArray(getClass().getResourceAsStream("qr-code.png")));

// Provide the transformed image to the device
((JavascriptExecutor)driver).executeScript("sauce:inject-image=" + qrCodeImage);
```

### Troubleshooting

Here are some common errors you may see in the course of testing with Camera Image Injection and how to resolve them.

#### `Image injection failed`

This error is displayed when you attempt to inject your image before the app fully loads during your initial test session startup. You must wait until your app has fully loaded prior to injecting your image.

#### `Image injection is not enabled for the application`

This error is displayed due to one or more of these reasons:

*  **Enable Image Injection** checkbox is not checked; this needs to be checked.
*  For Android tests, the debuggable flag (`android:debuggable="true"`) is missing from your application's manifest file.

### Additional Resources

* [Sauce Labs Image Injection code examples (GitHub)](https://github.com/saucelabs-training/demo-js/tree/master/webdriverio/appium-app/examples/image-injection)
* [Sauce Labs sample mobile app](https://github.com/saucelabs/sample-app-mobile/releases/tag/2.3.0); try out image injection for yourself using our demo app
* [Android Camera API | Google Developer Documentation](https://developer.android.com/guide/topics/media/camera)


## Gestures

Building a great user experience is more than just design. Equally important is creating intuitive user interactions and touch gestures. For more information, see:
* [Sauce Labs Mobile App Gestures | GitHub](https://github.com/saucelabs/sample-app-mobile/#gestures)
* [How To Do Multi-Touch Gestures in Live Testing](https://saucelabs.com/blog/how-to-do-multi-touch-gestures-in-live-testing)


## Virtual USB (RDC)

Virtual USB (vUSB) is a mobile app debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable. It integrates into your development environment as if the device is connected directly to your workstation, meaning you can use your choice of homegrown development and testing tools to debug.

See [Virtual USB for Sauce Labs Real Devices](mobile-apps/virtual-usb) for more information.
