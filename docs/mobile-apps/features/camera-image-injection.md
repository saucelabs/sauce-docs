---
id: camera-image-injection
title: Camera Image Injection
sidebar_label: Camera Image Injection
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span className="sauceDBlue">Real Devices Only</span></small></p>

Do you have a mobile app with the ability to take images on the device camera, then process or store them within the app (e.g., scanning/depositing a check on banking app)?

Camera image injection, also known as camera mocking, is a Sauce Labs Real Device Cloud (RDC) core feature that simulates taking a picture through your mobile app. It then allows you to test your app's camera-based functionality and deliver the best possible user experience.

You employ the built-in device camera in your live and automated testing and perform test cases that require taking images with any of the device cameras. To mimic the system camera behavior during a test, you'll provide the app with an image of your choosing. Your app will access the camera and instead of getting back the picture of the device camera, it'll retrieve the uploaded image.


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* [Upload your app to Sauce Labs](/mobile-apps/app-storage) prior to testing. The camera image injection functionality points to Sauce Labs storage to get your app information.


## Key Specs

Camera Image Injection is available for testing on all Sauce Labs Android and iOS real devices, public and private real device clouds, and front-facing and rear-facing system device cameras. Image uploads must be JPG, JPEG, or PNG format, up to 5MB.

|            | Supported | Not Supported |   
| :--------------------|:---------:|:-------------:|
|   **Device Type **        |  |  |   
| Android real devices |     &checkmark;     |              |   
| iOS real devices     |    &checkmark;      |             |   
| Android emulators    |          |      &#x2715;      |
| iOS simulators       |         |     &#x2715;  |
|       |         |      |
|  **Framework Type**<sup>1</sup> |  |  |
| Appium         | &checkmark; |      |
| Espresso (Android)     |         |     &#x2715;  |
| XCUITest (iOS)       |         |     &#x2715;  |
<sup>1</sup> Automated testing only.

:::note Not Supported
* <small>Ephemeral apps (apps with temporary, disappearing messages and photos).</small>
* <small>Mobile browsers and pre-installed system apps.</small>

:::

### Android System Camera

For Android devices, there are multiple ways to capture an image, as described in the [Android Camera API](https://developer.android.com/guide/topics/media/camera) developer documentation. We support the following:
* [`ACTION_IMAGE_CAPTURE` Intent](https://developer.android.com/reference/android/provider/MediaStore#ACTION_IMAGE_CAPTURE): opens the system camera and notifies the calling app gets when the image is taken.
* [camera2 API](https://developer.android.com/reference/android/hardware/camera2/package-summary): everything is configured and handled from within the app.
* [cameraX](https://developer.android.com/training/camerax): leverages the capabilities of camera2, but uses a simpler, use case-based approach that is lifecycle-aware.
* [Camera API (deprecated)](https://developer.android.com/reference/android/hardware/Camera): partially supported. As with camera2, everything is handled in the app itself. QR Code readers often use [`Camera#setPreviewCallback`](https://developer.android.com/reference/android/hardware/Camera#setPreviewCallback(android.hardware.Camera.PreviewCallback)). We pass the injected image to this method, but the rest of this deprecated API is not supported. UI Elements will not likely display the injected image.


### iOS System Camera

For iOS devices, the camera can be configured with different outputs. We support the following:
*   [`AVCapturePhotoOutput`](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput?language=objc): for capturing still images. The results are received via the [`AVCapturePhotoCaptureDelegate`](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate?language=objc) and the method [`captureOutput:didFinishProcessingPhoto:error:`](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/2873949-captureoutput?language=objc) The other methods in this delegate are either deprecated or handle live photos, which we don't support.
*   [`AVCaptureVideoDataOutput`](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput?language=objc): for capturing video frames and processing them. The frames are received via [`AVCaptureVideoDataOutputSampleBufferDelegate`](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate?language=objc) and the method [`captureOutput:didOutputSampleBuffer:fromConnection:`](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1385775-captureoutput?language=objc).
*   [`AVCaptureMetadataOutput`](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput?language=objc): for reading QR-Codes. The QR Codes are passed to the app via [`captureOutput:didOutputMetadataObjects:fromConnection:`](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/1389481-captureoutput?language=objc). We are detecting the [`AVMetadataMachineReadableCodeObject`](https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject?language=objc) and QR Codes are part of that.


## Example Use Cases

Below are common use cases ideal for implementing Camera Image Injection in your tests.

* **Scanning a Check for a Mobile Banking App Deposit**: Many mobile banking apps allow customers to deposit checks using their smartphone. The customer takes and uploads an image of their physical paper check, and the image is then submitted to the bank for processing.
* **Using a QR Code to Link to an Embedded URL**: QR codes are often used as a way to bridge print media to digital. Users take a photo with a QR code reader app, the app scans the code and directs them to an embedded URL. For use cases that involve scanning barcodes or QR codes, your own application in testing must do the actual image processing. Camera Image Injection passes your uploaded image directly to your app as if it came from the device camera; it does not do any processing.
* **Taking a Selfie for a User Profile Photo**: This could be taking a selfie or uploading a picture for apps that require a user profile photo. You can use Camera Image Injection to test image formats and sizes.
* **Taking an Image to Store or Send via Mobile App**: Whether it’s a social media app or photo sharing, this use case can encompass many different scenarios. In its simplest form, it could be taking pictures from the front or back camera to send and/or archive within the app.

## Live Testing

During a live test, you'll be prompted in the UI to upload a photo that will be fed to your app, rather than using your device camera to take the photo.

1. In Sauce Labs, click **LIVE** and then click **Mobile App**.
2. On the **App Selection** test page, hover over the test and then click **Settings**.

  <img src={useBaseUrl('img/live-testing/live-mobile-app-settings-nav.png')} alt="Mobile app settings navigation" width="650"/>

3. On the **Settings** page, ensure that **Image Injection** is enabled and then return to the **App Selection** page.

  <img src={useBaseUrl('img/live-testing/image-injection-enabled.png')} alt="Image Injection - Enabled" width="650"/>

4. On the **App Selection** test page, hover over the test and then click **Choose Device**.

  <img src={useBaseUrl('img/live-testing/image-injection-choose-device.png')} alt="Image Injection - Choose Device" width="650"/>

5. On the device selection page, hover over a device and then click **Launch**.

  <img src={useBaseUrl('img/live-testing/image-injection-launch.png')} alt="Image Injection - Launch" width="650"/>

6. When you want to capture an image of the test, in the right toolbar, click **More Device Options** and then click **Camera Injection**.

  <img src={useBaseUrl('img/live-testing/camera-injection-nav.png')} alt="Camera Injection navigation" width="650"/>

7. Click **Choose Image** and navigate to the image you want to use.

  <img src={useBaseUrl('img/live-testing/live-mobile-app-camera-nav.png')} alt="Camera image injection navigation" width="450"/>

  If the image upload is successful, you will see a thumbnail of the image and a successful upload message.

  <img src={useBaseUrl('img/live-testing/camera-injection-success.png')} alt="Camera image upload successful" width="450"/>

8. Activate the camera inside of your app. The device will show your uploaded image in the app as if the image was taken by the device camera. The image will continue to be available, should you go back to the camera during your test session, or you can upload another image and capture it with the camera.

### Testing with QR Codes

When injecting an image with a QR Code or barcode, the image size in your preview may exceed the boundaries of the target scanner area, which would prevent your app from reading the code. In this scenario, you'd need to add padding to your uploaded image so that when it's scaled to full-screen, the QR Code will fit inside the scanning area limits and can be processed.


## Automated Testing

During an automated test, you'll pass an image to the image injection endpoint. Image injection intercepts the camera input and replaces the camera output with the image file via the camera APIs. When the app requests an image from the device's camera, we inject your uploaded image into the response (the app doesn't know the difference).

In your test script, you'll need to input the desired capabilities specific to Camera Image Injection (see below code snippets). The code will execute your image upload and opening of the device camera.

1. First, you'll need add the camera instrumentation desired capability command,  `sauceLabsImageInjectionEnabled`, to your test script. This capability enables image injection functionality.

<Tabs
  defaultValue="Webdriver.io example"
  values={[
    {label: 'Webdriver.io example', value: 'Webdriver.io example'},
    {label: 'Java example', value: 'Java example'},
  ]}>

<TabItem value="Webdriver.io example">

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

</TabItem>
<TabItem value="Java example">

```java
var desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("deviceName", "Samsung Galaxy S10");
desiredCapabilities.setCapability("platformVersionName", "10");
...
// Enable image-injection on RDC
desiredCapabilities.setCapability("sauceLabsImageInjectionEnabled", true);
```

</TabItem>
</Tabs>

2. In this step, you're adding the image injection method to your test script by providing a file path to your image. You can put the below code snippet into your test script in one or more places. Then, when you execute your test, the code snippets will call the endpoint and pass the image to the app for further processing or for other use.  

  To change the image, you'll need to send a custom command with a different image. Note that your image file path must be converted to base64 encoding.  


<Tabs
  defaultValue="Webdriver.io example"
  values={[
    {label: 'Webdriver.io example', value: 'Webdriver.io example'},
    {label: 'Java example', value: 'Java example'},
  ]}>

<TabItem value="Webdriver.io example">

```js
const {readFileSync} = require('fs');
const {join} = require('path');

// Read the file from your project and transform it to a base64 string
const qrCodeImage = readFileSync(join(process.cwd(), 'assets/qr-code.png'), 'base64');

// Provide the transformed image to the device
driver.execute(`sauce:inject-image=${qrCodeImage}`);
```

</TabItem>
<TabItem value="Java example">

```java
import java.util.Base64;
import static org.apache.commons.io.IOUtils.toByteArray;

// Read the file from the classpath and transform it to a base64 string
FileInputStream in = new FileInputStream("/Users/enriquegonzalez/Desktop/Gorilla.png");
qrCodeImage = Base64.getEncoder().encodeToString(
        toByteArray(in)
);
// Provide the transformed image to the device
((JavascriptExecutor)driver).executeScript("sauce:inject-image=" + qrCodeImage);
```

</TabItem>
</Tabs>

## Common Errors

Here are some common errors you may see in the course of testing with Camera Image Injection and how to resolve them.

#### Error: `Image injection failed`

This error is displayed when you attempt to inject your image before the app fully loads during your initial test session startup. You must wait until your app has fully loaded prior to injecting your image.

#### Error: `Image injection is not enabled for the application`

This error is displayed due to one or more of these reasons:

*  **Enable Image Injection** checkbox is not checked; this needs to be checked.
*  For Android tests, the debuggable flag (`android:debuggable="true"`) is missing from your application's manifest file.


## Additional Resources

* [Sauce Labs Image Injection code examples (GitHub)](https://github.com/saucelabs-training/demo-js/tree/master/webdriverio/appium-app/examples/image-injection).
* [Sauce Labs sample mobile app](https://github.com/saucelabs/sample-app-mobile/releases/tag/2.3.0); try out image injection for yourself using our demo app.
* [Android Camera API | Google Developer Documentation](https://developer.android.com/guide/topics/media/camera).
