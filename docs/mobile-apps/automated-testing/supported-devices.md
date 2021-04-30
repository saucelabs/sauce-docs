---
id: supported-devices
title: Using Real and Virtual Mobile Devices for Testing
sidebar_label: Supported Devices
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

* Manual testing on real devices.
* Choice of public real devices or private real devices unique to your organization.
* Support for Appium, Robotium, Espresso, and XCUITest frameworks.
* Support on hundreds of device/OS combinations.
* IPSec VPN secure connections to private device clouds.
* Devices cleaning process between sessions to ensure maximum privacy.
* Carrier Network Connectivity (devices with SIM cards).

### System Requirements

| | iOS Mobile Apps | Android Mobile Apps |
:-------:| :-------:| :----:|
|  | <img src={useBaseUrl('img/mobile-apps/apple-logo.png')} alt="Apple logo" width="50"/> | <img src={useBaseUrl('img/mobile-apps/android-logo.png')} alt="Android logo" width="50"/> |
| **Requirements** | <p>Your iOS app must be:</p><p>Formatted as an .ipa file. Refer to the documentation on how to [create an .ipa file](/mobile-apps/automated-testing/espresso-xcuitest/real-devices.md)</p><p>Uploaded and hosted in [Sauce Labs storage](/mobile-apps/app-storage.md) or installed from a remote location.</p> | <p>Your Android app must be:</p><p>Built into an .apk package/archive file.</p><p>Configured to have [internet permissions](http://developer.android.com/reference/android/Manifest.permission.html#INTERNET)</p><p>Uploaded and hosted in [Sauce Labs storage](/mobile-apps/app-storage.md) or installed from a remote location.</p>|
| **Versions supported** | iOS versions 9.3.6 and higher | Android versions 5.0 and higher |

For the full list of supported real devices, see [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices).

### Public vs. Private Real Devices

Sauce Labs offers access to both public and private device clouds for your real device testing. Review the use cases below to see which option will suit your testing needs. Learn more [here](https://saucelabs.com/platform/real-device-cloud).


#### Use Cases: Public Devices

Our public cloud contains a wide selection of thoroughly cleaned devices.

* The devices available on the public cloud are sufficient for your testing coverage.
* You need to reproduce bugs on a selection of hundreds of iOS and Android devices.
* You need to upload and spot check apps on devices you don’t have access to.
* You need to share manual test sessions and devices across teams worldwide.
* You are looking for a low-cost real device testing option.

#### Use Cases: Private Device

<p> <Highlight color="#013a70">Enterprise Plans Only</Highlight> </p>

Dedicated pool of devices just for your organization.

* You need a very specific set of devices that aren't supported on the public cloud.
* Your security team insists on dedicated devices.
* You require a secure tunnel between your tests and our cloud to test.
* You want to run automated/parallel tests across multiple devices.
* You need specific settings which are set on the devices all the time.

### Security

#### **Real Device Cleaning**

We use a proprietary process that wipes every real device clean at the end of the testing session:

* User accounts and data are cleared from the device.
* History and user data is cleared from the browser.
* Network settings are reset.
* Device settings are reset.
* Your app is uninstalled.
* Cached data is deleted.
* Device is de-allocated from you.

:::caution
While we take these actions to clean public real devices after each test session, we do not perform factory resets nor do we have anti-virus software installed on them. It is possible that other users of the public RDC may engage in malicious, careless or unsecure activity, and that sophisticated, persistent malware could therefore be present on any device in the public RDC.
:::

For more information on Sauce Labs security settings, see [Security Settings for Organizations](https://wiki.saucelabs.com/pages/viewpage.action?pageId=69108863).

#### **Data Center Security**

Real Device Cloud Data Center security is described in [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068).

### Static and Dynamic Device Allocation

Regardless of the test frameworks you're using (Appium, Espresso, XCUITest), you can configure your real device tests using static and dynamic device allocation. While the syntax may be different (i.e., `--device`, `deviceName`), the functionality is the same across all frameworks.

#### ***Static Device Allocation***
Specifying the exact device to use in your tests by providing the Device ID, which you can find under **Live** > **Mobile-App** > **Choose device** > Find Your Device > **Details**.
<img src={useBaseUrl('img/mobile-apps/samsung-galaxyA10.jpg')} alt="Sauce Labs Device ID example" width="450"/>

<Tabs
  defaultValue="Espresso"
  values={[
    {label: 'Espresso', value: 'Espresso'},
    {label: 'Appium', value: 'Appium'},
  ]}>

<TabItem value="Espresso">

Static allocation example — exact device names are provided.

```java
--devices iPhone_11_13_5_real_us,iPhone_5
--device Samsung_Galaxy_S20_real
```

</TabItem>
<TabItem value="Appium">

Static allocation example — exact device name is provided.

```java
capabilities.setCapability("deviceName", "Google_Pixel_4");
```

</TabItem>
</Tabs>
<br/>

#### ***Dynamic Device Allocation***
Specifying basic parameters for the platform, operating system, and/or type of device you want to use in your tests using [regular expressions (regex)](https://en.wikipedia.org/wiki/Regular_expression). A device(s) with your specifications will be selected from the real device pool.

| Regex Input | Dynamic Allocation Action
| :--- | :---
| `"iPhone.*" ,  "iPhone .*"` | Allocates any iPhone.
| `".*nexus.*"` | Allocates any device with the word "nexus" in its display name.  
| `"iPhone [67]"` or `"iPhone [6-7]"` | Both will allocate either an iPhone 7 or iPhone 6 device.
| `"iPhone [67]S"` or `"iPhone [6-7]S"` | Both will allocate either an iPhone 7S or iPhone 6S device.
| `"iPhone 7.*"` | Allocates any device that starts with the display name "iPhone 7" (e.g., iPhone 7, iPhone 7S).

<Tabs
  defaultValue="Appium (Android)"
  values={[
    {label: 'Appium (Android)', value: 'Appium (Android)'},
    {label: 'Appium (iOS)', value: 'Appium (iOS)'},
  ]}>

<TabItem value="Appium (Android)">

Dynamic allocation example - finds any device that starts with the display name "Google".

```java
capabilities.setCapability("deviceName", "Google.*");
```

<<<<<<< HEAD
Excludes a specific device.

```java
capabilities.setCapability("deviceName", "^((?!.Google_Pixel_XL_real_us.).)*$");
```

</TabItem>
<TabItem value="Appium (iOS)">

Dynamic allocation example - finds all iPhone devices except 5 and 5S.

```java
capabilities.setCapability("deviceName", "^(iPhone.*)(?!5|5S)$");
```

</TabItem>
</Tabs>

>**NOTE**: A matching device must be present in your account in order for the test to run. Regex values are not case-sensitive (i.e., `"iphone .*S"` and `"IPHONe .*s"` are the same).

## Additional Resources

* [Appium Testing on Real Devices](/mobile-apps/automated-testing/appium/real-devices)
  * [CLI Reference](dev/cli/appium/real-devices)
* [Espresso and XCUITest Testing on Real Devices](mobile-apps/automated-testing/espresso-xcuitest/real-devices)
  * [CLI Reference](dev/cli/espresso-xcuitest/real-devices)
* [Sauce Labs Blog: How to Choose Mobile Devices for Testing](https://saucelabs.com/blog/how-to-choose-mobile-devices-for-testing)
* [Better Together: Using Real Devices, Simulators, and Emulators for Mobile Testing](https://saucelabs.com/blog/better-together-real-devices-emulators-simulators-for-mobile-testing)
* [Mobile Testing Basics: Live Testing vs. Automated Testing](https://saucelabs.com/blog/mobile-testing-basics-manual-vs-automated-testing)
