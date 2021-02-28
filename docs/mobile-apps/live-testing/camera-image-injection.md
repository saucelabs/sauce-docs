---
id: camera-image-injection
title: Testing with Camera Image Injection
sidebar_label: Testing with Camera Image Injection
---
Does your mobile app have the ability to take images and then process or store them within the app (e.g., scanning a bank check, taking a social media selfie)? Camera Image Injection – also known as camera mocking – is a Sauce Labs Real Device Cloud (RDC) feature that simulates taking a picture through your mobile device app, allowing you to test the app’s camera-based functionality and deliver the best possible user experience.

To mimic camera behavior when testing your app, you'll provide the app with an image that mocks the use of the camera. During a Sauce Labs live test, you'll be prompted to upload a photo that will be fed to your app, rather than using your device camera to take the photo. For automated tests, you'll pass an image to the image injection endpoint. Image Injection intercepts the camera input and replaces the camera output with the image file via the camera APIs. When the app requests an image from the device's camera, we inject your uploaded image into the response (the app doesn't know the difference).

## What You'll Need
You'll need to upload your app to Sauce Labs prior to testing. For instructions, see [Uploading and Accessing Your Apps on Real Devices](https://wiki.saucelabs.com/display/DOCS/Automated+Testing+with+Real+Devices#AutomatedTestingwithRealDevices-UploadingandAccessingYourAppsonRealDevices).

## Using Camera Image Injection
Camera Image Injection is a core feature built into our RDC functionality and available for use with public and private devices. Your mobile app accesses the camera and instead of getting back the picture of the device camera, it'll retrieve your uploaded image for your test. You employ the built-in device camera in your live and automated testing and perform test cases that require taking images with any of the device cameras.

### System Requirements
See the topics under [Mobile Application Testing](https://wiki.saucelabs.com/display/DOCS/Mobile+Application+Testing) for RDC system requirements.

### Key Specs
**Supported**
* All iOS and Android devices available in the RDC
* Front-facing and rear-facing system device cameras
* Image file sizes up to 5MB
* JPG, JPEG, PNG image file formats.

**Not Supported**
* Ephemeral apps (i.e., app with temporary messages that disappear after a certain timeframe)
* Testing with Emulators, Simulators

## Live Testing with Camera Image Injection
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
