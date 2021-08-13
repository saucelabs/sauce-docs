---
id: supported-devices
title: Using Real and Virtual Mobile Devices for Testing
sidebar_label: Supported Mobile Devices
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

Get the most out of your live and automated testing by including a healthy mix of emulators, simulators, and real devices as your mobile testing platforms. Why? There are some aspects of the mobile experience you can test on emulators or simulators, and others that you'd need to test on real devices, such as location-based apps that use manufacturer-specific device sensors, memory consumption, and CPU usage.

There are a variety of use cases to consider when you're deciding on the mix of emulators, simulators, and real devices to use in your testing.

We support thousands of device/OS combinations and test automation frameworks such as Appium, Espresso, XCUITest, and Robotium. For a full list of Sauce Labs supported devices, operating systems, and browsers, [learn more here](https://saucelabs.com/platform/supported-browsers-devices).

## When to Test on Emulators and Simulators

### Use Cases

If you need...

* Massive concurrency.
* To reduce build times.
* To save costs.
* Immediate availability.
* Extremely low error rates for your test environment.

### System Requirements

| | iOS Mobile Apps | Android Mobile Apps |
:-------:| :-------:| :----:|
|  | <img src={useBaseUrl('img/mobile-apps/apple-logo.png')} alt="Apple logo" width="50"/> | <img src={useBaseUrl('img/mobile-apps/android-logo.png')} alt="Android logo" width="50"/> |
| **Requirements** | <p>Your iOS app must be:</p><p>Compiled for the simulator/device version of your choice</p><p>Compressed into a .zip package/archive file (must include app directory)</p><p>[Uploaded and hosted](mobile-apps/app-storage.md) in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Labs App Storage)</p> | <p>Your Android app must be:</p><p>Compiled for the simulator/device version of your choice</p><p>Configured to have internet permissions</p><p>Built into an .apk package/archive file</p><p>[Uploaded and hosted](mobile-apps/app-storage.md) in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Labs App Storage).</p> <p>_Appium only. For Espresso, `saucectl` uploads the referenced app for you._</p> |
| **Versions supported** | iOS versions 10.3 and higher | Android versions 5.0 and higher |
| **Tips** | <p>If you're using App Storage, get the returned location, which will look something like storage:filename=myApplication.zip.</p><p>In your [test capabilities](/dev/test-configuration-options), specify the location of the .zip file, or the `storage:filename=myApplication.zip` URL as described in [App Storage](mobile-apps/app-storage.md).</p> | <p>This StackOverflow article contains instructions on how to build an .apk file in Eclipse.</p><p>In your test capabilities, specify the location of the .apk file, or the `storage:filename=app.apk` URL as described in [App Storage](mobile-apps/app-storage.md).</p> |


## When to Test on Real Devices

The Sauce Labs Real Device Cloud (RDC) provides you with the ability to run live and automated tests across Android and iOS devices. [Learn more here](https://saucelabs.com/platform/real-device-cloud).

### Use Cases

If you need...

* A breadth of device types for panel/compatibility testing.
* Manual, interactive testing on actual physical devices.
* To replicate an issue to match exact model as reported.
* Pixel-perfect display testing.
* To test hardware dependencies like CPU, memory, display, GPS.
* To test native ARM Libraries.
* To test on a custom OS (e.g., Samsung TouchWiz, OnePlus OxygenOS)
* To test on a native framework like Espresso and Robotium.
* To test scenarios that require carrier network connectivity (e.g., making phone calls and sending SMS messages to devices with SIM cards).

### Public Device Cloud

Our public cloud, available to all users regardless of pricing plan, contains a wide selection of thoroughly cleaned devices. They are subject to availability. On the mobile device selection screen, if a device is in use, it'll be [marked with a **Busy** flag](/mobile-apps/live-testing/live-mobile-app-testing#selecting-a-real-device). Here are some use cases:

* The devices available on the public cloud are sufficient for your testing coverage.
* You need to reproduce bugs on a selection of hundreds of iOS and Android devices.
* You need to upload and spot check apps on devices you don’t have access to.
* You need to share manual test sessions and devices across teams worldwide.
* You are looking for a low-cost real device testing option.

### Private Device Cloud

<p> <Highlight color="#013a70">Enterprise Plans Only</Highlight> </p>

This is dedicated pool of devices just for your organization. On the mobile device selection screen, your private devices are [marked with a person silhouette icon](/mobile-apps/live-testing/live-mobile-app-testing#selecting-a-real-device). Here are some use cases:

* You need to use a very specific set of devices that aren't supported on the public cloud.
* Your security team insists on dedicated devices.
* You want to run automated parallel tests across multiple devices simultaneously.
* You need specific settings which are set on the devices all the time.
* You need to establish a secure [IPSec VPN connection](/secure-connections/ipsec-vpn) between your network and the Sauce Labs cloud.

### System Requirements

| | iOS Mobile Apps | Android Mobile Apps |
:-------:| :-------:| :----:|
|  | <img src={useBaseUrl('img/mobile-apps/apple-logo.png')} alt="Apple logo" width="50"/> | <img src={useBaseUrl('img/mobile-apps/android-logo.png')} alt="Android logo" width="50"/> |
| **Requirements** | <p>Your iOS app must be:</p><p>Formatted as a .app or .ipa file. Refer to the documentation on [how to create an .ipa file](/mobile-apps/automated-testing/ipa-files)</p><p>Uploaded and hosted in [Sauce Labs storage](/mobile-apps/app-storage.md) or installed from a remote location.</p><p>_Appium only. For XCUITest, `saucectl` uploads the referenced app for you._</p>| <p>Your Android app must be:</p><p>Built into an .apk package/archive file.</p><p>Configured to have [internet permissions](http://developer.android.com/reference/android/Manifest.permission.html#INTERNET)</p><p>Uploaded and hosted in [Sauce Labs storage](/mobile-apps/app-storage.md) or installed from a remote location.</p><p>_Appium only. For Expresso, `saucectl` uploads the referenced app for you._</p>|
| **Versions supported** | iOS versions 9.3.6 and higher | Android versions 5.0 and higher |

For the full list of supported real devices, see [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices).

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

For more information on Sauce Labs security settings, see [Security Settings for Organizations](/basics/acct-team-mgmt/org-settings).

#### **Data Center Security**

Real Device Cloud Data Center security is described in [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints).

### Static and Dynamic Device Allocation

Regardless of the test frameworks you're using (Appium, Espresso, XCUITest), you can configure your real device tests using static and dynamic device allocation. While the syntax may be different (i.e., `--device`, `deviceName`), the functionality is the same across all frameworks.

#### **Static Device Allocation**

This is specifying an exact device for your test by setting `deviceName` to the Device ID, which you can find under **Live** > **Mobile-App** > **Choose device** > Find Your Device > **Details**.
<img src={useBaseUrl('img/mobile-apps/samsung-galaxyA10.jpg')} alt="Sauce Labs Device ID example" width="450"/>

When using this, there's no need to specify the `platformName` and `platformVersion` because they'll be set by default (i.e., if you include these separately included in your test script, they will be ignored).

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

Static allocation examples — exact device name are provided.

```java
capabilities.setCapability("deviceName", "Google_Pixel_4");
```

```java
capabilities.setCapability("deviceName", "iPhone_11_13_5_real_us");
```

</TabItem>
</Tabs>
<br/>

#### **Dynamic Device Allocation**

This is specifying basic parameters for the platform, operating system, and/or type of device you want to use in your tests using [regular expressions (regex)](https://en.wikipedia.org/wiki/Regular_expression) to dynamically allocate a device. A device(s) with your specifications will be selected from the real device pool.

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

Excludes a specific device.

```java
capabilities.setCapability("deviceName", "^((?!.Google_Pixel_XL_real_us.).)*$");
```

</TabItem>
<TabItem value="Appium (iOS)">

Dynamic allocation examples - finds all iPhone devices except 5 and 5S, and find all Google Pixel devices, respectively.

```java
capabilities.setCapability("deviceName", "^(iPhone.*)(?!5|5S)$");
```

```java
capabilities.setCapability("deviceName", "Google Pixel.*");
```

</TabItem>
</Tabs>

:::note
A matching device must be present in your account in order for the test to run. Regex values are not case-sensitive (i.e., `"iphone .*S"` and `"IPHONe .*s"` are the same).
:::

## Additional Resources

* [Appium Testing on Real Devices](/mobile-apps/automated-testing/appium/real-devices)
  * [Test Configuration Options](/dev/test-configuration-options)
* [Espresso and XCUITest Testing](/mobile-apps/automated-testing/espresso-xcuitest)
* [Sauce Labs Blog: How to Choose Mobile Devices for Testing](https://saucelabs.com/blog/how-to-choose-mobile-devices-for-testing)
* [Better Together: Using Real Devices, Simulators, and Emulators for Mobile Testing](https://saucelabs.com/blog/better-together-real-devices-emulators-simulators-for-mobile-testing)
* [Mobile Testing Basics: Live Testing vs. Automated Testing](https://saucelabs.com/blog/mobile-testing-basics-manual-vs-automated-testing)
