---
id: evinced
title: Evinced Integration
sidebar_label: Evinced
description: Test your mobile apps for accessibility challenges with Evinced and the Sauce Labs cloud
keywords:
- accessibility
- accessibility-testing
- automated-testing
- mobile
- mobile-native
- how-to
---

The Evinced Mobile Flow Analyzer allows you to connect to a mobile device right from your desktop and scan any native mobile applications for accessibility issues. Actionable reports can be created with a single click to make communicating with developer team members easier than ever.

The Evinced rule set goes beyond what the vendor accessibility APIs offer to help you find more issues that could be impacting the accessibility of your application. In addition, Evinced uses advanced algorithms to create a single actionable report that is easy to digest. Best of all, access to the source code isn’t required! There is no need to rebuild the app or modify it in any way to test it for accessibility issues.

The one thing missing from this powerful tool is access to a wide variety of devices and operating systems. This is crucially important for both the Android and iOS platforms.

For Android, breadth of coverage is extremely important due to the large segmentation in the Android market (Samsung, Google, LG, HTC, OnePlus, Huawei, etc). All these manufacturers take the default Android OS image from Google and make it their own. This creates the need for additional testing to make sure we give the best experience possible to all users. For iOS, you may have noticed that once you upgrade your iOS device it is impossible to roll it back to a previous version. This way, proper testing requires a library of iOS devices on all the versions a potential customer might be using to ensure a great experience.

Fortunately, Sauce Labs has a comprehensive cloud based continuous testing platform where we can scan our app for accessibility issues on nearly any device and operating system combination. In this blog we will walk through how easy it is to connect to an iOS device in the Sauce Labs cloud from the Evinced Mobile Flow Analyzer desktop client.

Sauce Labs makes this process very easy with their virtual USB feature. Here is description from the [Sauce Labs documentation](https://docs.saucelabs.com/mobile-apps/features/virtual-usb/):

Virtual USB (vUSB) is a mobile (app) debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable. It integrates into your development environment as if the device is connected directly to your workstation, meaning you can use your choice of homegrown development and testing tools to debug.

To get started, we will need to download the vUSB client from the Sauce Labs website. Once we have that, we can navigate to the client directory and start the local vUSB server with the following command:

```java -jar virtual-usb-client.jar server --datacenter US```

Make sure to double check the data center that is closest to you for the best performance. Once we have the server started, we can grab the device ID from our private iOS device. We can find this ID in the details section when choosing a device in the Sauce Labs UI:


```screen shot```

Once we have the ID can use the following command in a new terminal tab:

```java -jar virtual-usb-client.jar startSession --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY --deviceName iPhone_Device_ID```

This will start the device session and establish the virtual USB connection! The Sauce Labs device is now available to your workstation just as if it was plugged in directly. More details and instructions can be found via the [Sauce Labs Docs](https://docs.saucelabs.com/mobile-apps/features/virtual-usb/) page.

Now that we have the vUSB connection is established we can then move to the Mobile Flow Analyzer for Mobile UI. You can download the desktop client for Mac or Windows and then login. Select iOS and then we can choose our device from the dropdown.

```screenshot```

Select the Sauce Labs device, enter your Apple Developer Team ID, and click connect. Thats it! We are now ready to start scanning our app for accessibility issues on any of the thousands of devices that are available from Sauce Labs.

```screenshot```

Check out the [Evinced](https://www.evinced.com/) and [Sauce Labs](https://saucelabs.com/sign-up) pages for more information on getting started!

This page was developed with the generous help of the Evinced team, from [their own documentation](https://get-evinced.com/blog/evinced-flow-analyzer-for-mobile-sauce-labs/).
