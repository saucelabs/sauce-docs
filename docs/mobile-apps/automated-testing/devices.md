---
id: devices
title: Choosing a Device for Mobile App Testing
sidebar_label: Choosing Devices
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

>**NOTE**: If your organization requires a secure, proxied connection to the Sauce Labs Cloud platform, see [Secure Connections](secure-connections.md).


## When to Test on Emulators and Simulators

If you need...

* Massive concurrency
* To reduce build times
* To save costs
* Immediate availability
* Extremely low error rates for your test environment

### Requirements

| | iOS Mobile Apps | Android Mobile Apps |
:-------:| :-------:| :----:|
|  | <img src={useBaseUrl('img/mobile-apps/apple-logo.png')} alt="Apple logo" width="50"/> | <img src={useBaseUrl('img/mobile-apps/android-logo.png')} alt="Android logo" width="50"/> |
| **Requirements** | <p>Your iOS app must be:</p><p>Compiled for the simulator/device version of your choice</p><p>Compressed into a .zip package/archive file (must include app directory)</p><p>[Uploaded and hosted](mobile-apps/app-storage.md) in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Storage)</p> | <p>Your Android app must be:</p><p>Compiled for the simulator/device version of your choice</p><p>Configured to have internet permissions</p><p>Built into an .apk package/archive file</p><p>[Uploaded and hosted](mobile-apps/app-storage.md) in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Storage)</p> |
| **Versions supported** | iOS versions 10.3 and higher | Android versions 5.0 and higher |
| **Tips** | <p>If you're using Sauce Storage, get the returned location, which will look something like sauce-storage:myApplication.zip.</p><p>In your [test capabilities](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options), specify the location of the .zip file, or the `sauce-storage:myApplication.zip` URL as described in [App Storage](mobile-apps/app-storage.md).</p> | <p>This StackOverflow article contains instructions on how to build an .apk file in Eclipse.</p><p>In the test capabilities, specify the location of the .apk file, or the sauce-storage:app.apk URL as described in Temporary Sauce Storage.</p> |

For the full list of supported real devices, see [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices).


## When to Test on Real Devices

If you need...

* Breadth of device types for panel/compatibility testing
* To replicate an issue to match exact model as reported
* Pixel-perfect display testing
* To test hardware dependencies like CPU, memory, display, GPS
* To test native ARM Libraries
* To test on a custom OS (e.g., Samsung TouchWiz, OnePlus OxygenOS)
* To test on a native framework like Espresso and Robotium
* To test scenarios that require network connectivity (e.g., phone calls, send SMS messages)

The Sauce Labs real device cloud (RDC) provides you with the ability to run live and automated tests across Android and iOS devices. Some of the features that are specific to our real device cloud include:

* Manual testing on real devices
* Choice of public real devices or private real devices unique to your organization
* Support for Appium, Robotium, Espresso, and XCUITest frameworks
* Support on hundreds of device/OS combinations
* IPSec VPN secure connections to private device clouds
* Devices cleaning process between sessions to ensure maximum privacy
* Carrier Network Connectivity (devices with SIM cards)

### Requirements

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

*   The devices available on the public cloud are sufficient for your testing coverage
*   You need to reproduce bugs on a selection of hundreds of iOS and Android devices
*   You need to upload and spot check apps on devices you don’t have access to
*   You need to share manual test sessions and devices across teams worldwide
*   You are looking for a low-cost real device testing option


#### Private Real Device Cloud Use Cases

<p> <Highlight color="#013a70">ENTERPRISE PLANS ONLY</Highlight> </p>

Dedicated pool of devices just for your organization.

*   You need a very specific set of devices that aren't supported on the public cloud
*   Your security team insists on dedicated devices
*   You require a secure tunnel between your tests and our cloud to test
*   You want to run automated/parallel tests across multiple devices
*   You need specific settings which are set on the devices all the time

### Security

#### Real Device Cleaning

We use a proprietary process that wipes every device clean at the end of the testing session. Steps in this process include:

*   User accounts and data are cleared from the device
*   History and user data is cleared from the browser
*   Network settings are reset
*   Device settings are reset
*   The app is uninstalled, and any cached data is deleted

>**NOTE**: While we take these actions after each test session on a public device, users of the public RDC should be aware that Sauce Labs does not factory reset devices in the public RDC between test sessions, and these devices do not have anti-virus software installed on them. It is possible that other users of the public RDC may engage in malicious, careless or unsecure activity, and that sophisticated, persistent malware could therefore be present on any device in the public RDC.

For more information on Sauce Labs security settings, see [Security Settings for Organizations](https://wiki.saucelabs.com/pages/viewpage.action?pageId=69108863).


#### Data Center Security

Data Center security related to real devices is described in [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068).


### Dynamic Device Allocation

_Dynamic Allocation_ involves providing basic parameters for the platform and operating system, or the type of device you want to use in your tests, and a device with those specifications is selected from the device pool. While static allocation allows you more fine-grained control over the device used in your tests, it can also cause delays in your test execution if that device isn't available when you run your tests. If you only need to test on a particular platform and OS version, such as an Android 4.1, or on a particular type of device, you should use dynamic allocation, and we recommend that you use dynamic allocation for all automated mobile application testing in CI/CD environments.

#### Required Capabilities for Dynamic Allocation

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Capability Explanation</strong>
   </td>
  </tr>
  <tr>
   <td><code>platformName</code>
   </td>
   <td><p>Defines the type of mobile platform to use in your tests (i.e., Android or iOS). The values for capabilities are not case-sensitive, so <code>android</code> is the same as <code>Android</code>, and <code>ios</code> is the same as <code>iOS</code>.</p>
   </td>
  </tr>
  <tr>
   <td><code>platformVersion</code>
   </td>
   <td><p>The platform version to use in your tests, for example "4" or "4.1". This is a substring match. You can specify both major versions and incremental versions of an operating system.</p><p>For example, if you set only a major version 4, you also have access to all devices running incremental versions (e.g., "4.1"," 4.2", "4.2.1", "4.4.4").</p><p>This also extends to minor and point versions. For example, if you specify "11.4", it will match "11.4.0", "11.4.1".</p>

   </td>
  </tr>
  <tr>
   <td><code>deviceName</code>
   </td>
   <td><p>The display name of the device to use, such as "Samsung S7". You can also use regular expressions for setting the <code>deviceName</code>. Some examples:</p>

<p>To allocate any iPhone:</p><sub>

    "iPhone.*", "iPhone .*"
</sub>
<p>To allocate any device with the word "nexus" in its display name.</p><sub>

    ".*nexus.*"
</sub>
<p>To allocate either "iPhone 7" or "iPhone 6" device.</p><sub>

    "iPhone [67]" or "iPhone [6-7]"
</sub>
<p>To allocate either "iPhone 7S" or "iPhone 6S" device.</p><sub>

    "iPhone [67]S" or "iPhone [6-7]S"
</sub>
<p>To allocate "iPhone 7" or "iPhone 7S", or any device that starts with the display name "iPhone 7".</p><sub>

    "iPhone 7.*"
</sub>
<p><strong>NOTE</strong>: Regular expressions are not case sensitive.</p>
   </td>
  </tr>
</table>


#### Optional Capabilities for Dynamic Allocation

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>privateDeviceOnly</code>
   </td>
   <td><p>If you have access to both private and public devices, you can request allocation of private devices only with "true".</p>
   </td>
  </tr>
  <tr>
   <td><code>tabletOnly</code>
   </td>
   <td><p>Select only tablet devices with "true".</p>
   </td>
  </tr>
  <tr>
   <td><code>phoneOnly</code>
   </td>
   <td><p>Select only phone devices with "true".</p>
   </td>
  </tr>
  <tr>
   <td><code>carrierConnectivityOnly</code>
   </td>
   <td><p>Only allocate devices if they are connected to a carrier network with "true".</p>
   </td>
  </tr>
</table>


### Static Device Allocation

With _Static Allocation_, you can specify the device to use in your tests, but if that device is not available when you run your tests, it will delay test execution. For this reason, you should always make sure that the device you want to use is available before launching your tests. The `platformName` and `platformVersion` capabilities will be set by default, and if these are included in your test script, they will be ignored.

| Capability | Setting |
|------------|----|
| `deviceName` | The ID of the device you want to use in your test, for example `LG_Nexus_5X_real`. You can find the ID for a device by locating it in the real device selection menu of the Sauce Labs application, and then click the **Details** link for the device. |


### Device Caching

#### `cacheId` Capability

By default, every time you complete a test session, the real device cloud uninstalls your application, performs device cleaning, and de-allocates the device. This means that if you have multiple tests that you want to run on the same device, you will, by default, wait for this cleaning process to complete between every test.

However, you can use the capability `cacheId` to leave the device allocated to you for 10 seconds after each test completes. If you immediately start another test on the device, you won't need to wait for the allocation and device cleaning process to be repeated. In this case, no device cleaning will take place in between sessions, with the only exception being the application under test and the data it owns.


<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Setting</strong>
   </td>
  </tr>
  <tr>
   <td><code>cacheId</code></td>
   <td><p>A random string. This value for cacheId must be the same for all test methods that you want to run on the cached device. In addition, the application and project ID used for the tests must remain the same, along with the values for these capabilities:</p>
<ul>

<li><code>deviceName</code></li>
<li><code>platformName</code></li>
<li><code>platformVersion</code></li>
<li><code>tabletOnly</code></li>
<li><code>phoneOnly</code></li>
<li><code>privateDevicesOnly</code></li>
<li><code>automationName</code></li>
<li><code>autoGrantPermissions</code></li>
<li><code>appiumVersion</code></li>

</ul>
   </td>
  </tr>
</table>


#### Using Device Caching with `noReset`

You can also use the cacheId capability in conjunction with the standard noReset Appium capability. In the default case, where noReset is set to false, your application will be uninstalled and reinstalled after every test. If noReset is set to true, the application you are testing won't be reinstalled after every test run. This might save you further time, but it won't be suitable for test setups that require the application's state to be reset between tests. Note that then cacheId is set, no device cleaning will take place in between sessions, regardless of noReset value.

>**NOTE**: Our [legacy Real Device Cloud platform](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721177) used the capability `testobject_cache_device` – specific to static allocation – to keep the device allocated to you during the cleaning process. This capability has been deprecated and replaced with `cacheId`, which works for both static and dynamic allocation. If you have scripts that use `testobject_cache_device`, they will still work for static allocation, and the 10-second limit on cached devices is still the same.

<br/>


## Additional Resources

* [Sauce Labs Blog: How to Choose Mobile Devices for Testing](https://saucelabs.com/blog/how-to-choose-mobile-devices-for-testing)

* [Better Together: Using Real Devices, Simulators, and Emulators for Mobile Testing](https://saucelabs.com/blog/better-together-real-devices-emulators-simulators-for-mobile-testing)

* [Mobile Testing Basics: Live Testing vs. Automated Testing](https://saucelabs.com/blog/mobile-testing-basics-manual-vs-automated-testing)
