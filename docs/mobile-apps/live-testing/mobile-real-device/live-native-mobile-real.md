---
id: live-native-mobile-real
title: Testing Native Mobile Apps on Real Devices
sidebar_label: Testing Native Mobile Apps on Real Devices
---
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

