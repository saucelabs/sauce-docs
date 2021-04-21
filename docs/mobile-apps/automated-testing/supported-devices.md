---
id: supported-devices
title: Choosing a Device for Mobile App Testing
sidebar_label: Supported Devices
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

import useBaseUrl from '@docusaurus/useBaseUrl';

Get the most out of your live and automated testing by including a healthy mix of emulators, simulators, and real devices as your mobile testing platforms. Why? Because there are aspects of the mobile experience that you can't test on emulators or simulators, such as location-based apps that use manufacturer-specific device sensors, memory consumption, and CPU usage.

There are a variety of use cases to consider when you're deciding on the mix of emulators, simulators, and real devices to use in your testing.

[Full list of Sauce Labs supported devices and browsers](https://saucelabs.com/platform/supported-browsers-devices).

## When to Test on Emulators and Simulators

If you need...

* Massive concurrency
* To reduce build times
* To save costs
* Immediate availability
* Extremely low error rates for your test environment

### System Requirements

| | iOS Mobile Apps | Android Mobile Apps |
:-------:| :-------:| :----:|
|  | <img src={useBaseUrl('img/mobile-apps/apple-logo.png')} alt="Apple logo" width="50"/> | <img src={useBaseUrl('img/mobile-apps/android-logo.png')} alt="Android logo" width="50"/> |
| **Requirements** | <p>Your iOS app must be:</p><p>Compiled for the simulator/device version of your choice</p><p>Compressed into a .zip package/archive file (must include app directory)</p><p>[Uploaded and hosted](mobile-apps/app-storage.md) in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Storage)</p> | <p>Your Android app must be:</p><p>Compiled for the simulator/device version of your choice</p><p>Configured to have internet permissions</p><p>Built into an .apk package/archive file</p><p>[Uploaded and hosted](mobile-apps/app-storage.md) in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Storage)</p> |
| **Versions supported** | iOS versions 10.3 and higher | Android versions 5.0 and higher |
| **Tips** | <p>If you're using Sauce Storage, get the returned location, which will look something like sauce-storage:myApplication.zip.</p><p>In your [test capabilities](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options), specify the location of the .zip file, or the `sauce-storage:myApplication.zip` URL as described in [App Storage](mobile-apps/app-storage.md).</p> | <p>This StackOverflow article contains instructions on how to build an .apk file in Eclipse.</p><p>In your test capabilities, specify the location of the .apk file, or the `sauce-storage:app.apk` URL as described in [Sauce Storage](mobile-apps/app-storage.md).</p> |

For the full list of supported real devices, see [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices).


## When to Test on Real Devices

If you need...

* A breadth of device types for panel/compatibility testing
* To replicate an issue to match exact model as reported
* Pixel-perfect display testing
* To test hardware dependencies like CPU, memory, display, GPS
* To test native ARM Libraries
* To test on a custom OS (e.g., Samsung TouchWiz, OnePlus OxygenOS)
* To test on a native framework like Espresso and Robotium
* To test scenarios that require network connectivity (e.g., phone calls, send SMS messages)

### Supported Features

The Sauce Labs Real Device Cloud (RDC) provides you with the ability to run live and automated tests across Android and iOS devices. Some of the features that are specific to our RDC include:

* Manual testing on real devices
* Choice of public real devices or private real devices unique to your organization
* Support for Appium, Robotium, Espresso, and XCUITest frameworks
* Support on hundreds of device/OS combinations
* IPSec VPN secure connections to private device clouds
* Devices cleaning process between sessions to ensure maximum privacy
* Carrier Network Connectivity (devices with SIM cards)

### System Requirements

| | iOS Mobile Apps | Android Mobile Apps |
:-------:| :-------:| :----:|
|  | <img src={useBaseUrl('img/mobile-apps/apple-logo.png')} alt="Apple logo" width="50"/> | <img src={useBaseUrl('img/mobile-apps/android-logo.png')} alt="Android logo" width="50"/> |
| **Requirements** | <p>Your iOS app must be:</p><p>Formatted as an .ipa file. Refer to the documentation on how to [create an .ipa file](/mobile-apps/automated-testing/espresso-xcuitest/real-devices.md)</p><p>Uploaded and hosted in [Sauce Labs storage](/mobile-apps/app-storage.md) or installed from a remote location.</p> | <p>Your Android app must be:</p><p>Built into an .apk package/archive file.</p><p>Configured to have [internet permissions](http://developer.android.com/reference/android/Manifest.permission.html#INTERNET)</p><p>Uploaded and hosted in [Sauce Labs storage](/mobile-apps/app-storage.md) or installed from a remote location.</p>|
| **Versions supported** | iOS versions 9.3.6 and higher | Android versions 5.0 and higher |

For the full list of supported real devices, see [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices).


### Public vs. Private Real Devices

Sauce Labs offers access to both public and private device clouds for your real device testing. Review the use cases below to see which option will suit your testing needs. Learn more [here](https://saucelabs.com/platform/real-device-cloud).


#### Public Real Device Cloud Uses Cases

Our public cloud contains a wide selection of thoroughly cleaned devices.

* The devices available on the public cloud are sufficient for your testing coverage.
* You need to reproduce bugs on a selection of hundreds of iOS and Android devices.
* You need to upload and spot check apps on devices you don’t have access to.
* You need to share manual test sessions and devices across teams worldwide.
* You are looking for a low-cost real device testing option.


#### Private Real Device Cloud Use Cases

<p> <Highlight color="#013a70">Enterprise Plans Only</Highlight> </p>

Dedicated pool of devices just for your organization.

* You need a very specific set of devices that aren't supported on the public cloud.
* Your security team insists on dedicated devices.
* You require a secure tunnel between your tests and our cloud to test.
* You want to run automated/parallel tests across multiple devices.
* You need specific settings which are set on the devices all the time.

### Security

#### Real Device Cleaning

We use a proprietary process that wipes every device clean at the end of the testing session. Steps in this process include:

* User accounts and data are cleared from the device
* History and user data is cleared from the browser
* Network settings are reset
* Device settings are reset
* The app is uninstalled, and any cached data is deleted

>**NOTE**: While we take these actions after each test session on a public device, users of the public RDC should be aware that Sauce Labs does not factory reset devices in the public RDC between test sessions, and these devices do not have anti-virus software installed on them. It is possible that other users of the public RDC may engage in malicious, careless or unsecure activity, and that sophisticated, persistent malware could therefore be present on any device in the public RDC.

For more information on Sauce Labs security settings, see [Security Settings for Organizations](https://wiki.saucelabs.com/pages/viewpage.action?pageId=69108863).

#### Data Center Security

Data Center security related to real devices is described in [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068).

### Device Allocation

You can configure your real device tests in two ways:

* ***Static Device Allocation***: specifying the exact device to use in your tests.
* ***Dynamic Device Allocation***: providing basic parameters for the platform, operating system, and/or type of device you want to use in your tests, so that a device(s) with those specifications is selected from the device pool.

## Additional Resources

* [Appium Testing on the Sauce Labs Real Device Cloud](/mobile-apps/automated-testing/appium/real-devices)

* [Espresso and XCUITest Testing on the Sauce Labs Real Device Cloud](mobile-apps/automated-testing/espresso-xcuitest/real-devices)

* [Sauce Labs Blog: How to Choose Mobile Devices for Testing](https://saucelabs.com/blog/how-to-choose-mobile-devices-for-testing)

* [Better Together: Using Real Devices, Simulators, and Emulators for Mobile Testing](https://saucelabs.com/blog/better-together-real-devices-emulators-simulators-for-mobile-testing)

* [Mobile Testing Basics: Live Testing vs. Automated Testing](https://saucelabs.com/blog/mobile-testing-basics-manual-vs-automated-testing)
