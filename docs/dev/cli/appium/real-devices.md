---
id: real-devices
title: Appium for Real Devices CLI Reference
sidebar_label: Real Devices
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

Below are required and optional capabilities to configure [iOS and Android Appium tests for real devices](mobile-apps/automated-testing/appium/real-devices).

## Required Capabilities

Your Appium scripts for real device testing must include these capabilities. Check out the example script in [Dynamic Allocation Examples](mobile-apps/automated-testing/appium/real-devices).

### `username`
__Data Type__: String.

__Description__: The Sauce Labs Username you use to authenticate your tests. You can find this under **Account** > **User Settings**.
<br/>

### `accessKey`
__Data Type__: String.

__Description__: The Sauce Labs Access Key you use to authenticate your tests. You can find this under **Account** > **User Settings**.
<br/>

### `app`
__Data Type__: String.

__Description__: This capability refers to the location of your mobile app. If you're running a mobile browser test, this capability can be left blank.
<br/>

**Data Center Endpoint**
__Data Type__: String.

__Description__: specifies the specific regional Sauce Labs Data Center (US or EU) where your desired device is located. There are currently two options for Appium real device testing:

* US RDC: https://ondemand.us-west-1.saucelabs.com
* EU RDC: https://ondemand.eu-central-1.saucelabs.com

<br/>

### `platformName`
__Data Type__: String.

__Description__: specify the type of mobile platform to use in your tests (i.e., `"Android"` or `"iOS"`). Values are not case-sensitive (i.e., `"ios"` is the same as `"iOS"`). For ***Dynamic Allocation***.
<br/>

### `platformVersion`
__Data Type__: String.

__Description__: specifies the operating system platform version to use in your tests. This is a substring match. For ***Dynamic Allocation***. You can specify:
  * Incremental versions (e.g., `"4.1"`)
  * Major versions (e.g., `"4"`): by setting a major version, you'd have access to all devices running incremental versions (`"4.1"`, `"4.2"`, `"4.2.1"`, "`4.4.4"`). This also extends to minor and point versions (e.g., specifying `"4.4"` will match `"4.4.0"`, `"4.4.1"`).
<br/>

### `deviceName`
__Description__: specify the name of the device you want to test on, using either static or dynamic allocation, for individual or parallel tests. See [Static and Dynamic Device Allocation](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation) for detailed instructions.
  * ***Static Allocation***: specify an exact device for your test by setting `deviceName` to the Device ID. When using this, there's no need to specify the `platformName` and `platformVersion` because they'll be set by default (i.e., if you include these separately included in your test script, they will be ignored).
  ```java title="Java Example"
  capabilities.setCapability("deviceName", "iPhone_11_13_5_real_us");
  ```
  * ***Dynamic Allocation***: use regular expressions (regex) to dynamically allocate a device.
  ```java title="Java Example"
  capabilities.setCapability("deviceName", "Google Pixel.*");
  ```
<br/>

## Optional Capabilities

### `appiumVersion`
__Data Type__: String.

__Description__: The version of Appium you want to use in your tests. If you leave this capability blank, or omit it completely, Sauce Labs will defer to the default Appium version installed on our platform.
<br/>

<br/>

### `name`
__Data Type__: String.

__Description__: A name for your test, to [make it easier to find individual tests](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946).
<br/>

### `build`
__Data Type__: String.

__Description__: If you're running several tests within a test suite, you can [add a build tag to group these tests together](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946).
<br/>

### `tag`
__Data Type__: String.

__Description__: [Tags are useful for collaborating with teams](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946) and also for filtering results on your Sauce Labs **Test Results** and **Archive** pages.
<br/>

### `newCommandTimeout`
__Data Type__: Float

__Description__: enables you to increase inactivity timeout to 90 seconds. By default, tests time out after 60 seconds of inactivity.
<br/>

### `commandTimeout`
__Data Type__: Float

__Description__: Custom timeout in milliseconds for the WebDriverAgent backend. The maximum allowed timeout is 600 seconds.

When creating an Appium session on the real device cloud for any iOS device, it is possible to set the desired capability commandTimeouts. It will set a timeout for the WebDriverAgent backend, which will prevent automated test sessions from being blocked when the Appium WebDriverAgent backend freezes unexpectedly. Sauce Labs sets a default of 60 seconds for this capability.
<br/>

### `tabletOnly`
__Data Type__: Boolean.

__Description__: use this capability to select only tablet devices for testing by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `phoneOnly`
__Data Type__: Boolean.

__Description__: use this capability to select only phone devices by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `privateDevicesOnly`
__Data Type__: Boolean.

__Description__: if your pricing plan includes both private and public devices, use this capability to request allocation of private devices only by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `carrierConnectivityOnly`
__Data Type__: Boolean.

__Description__: use this capability to allocate only devices connected to a carrier network by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `automationName`
<p><small><Highlight color="#946f59">Android/Espresso Only</Highlight></small></p>

__Data Type__: String.

__Description__: pass an automation value to use native automation frameworks (supported for Android native apps only). UiAutomator2 example:
```java
capabilities.setCapability("automationName", "uiautomator2");
```
<br/>

### `cacheId`
__Data Type__: randomized string.

__Description__: use this capability to keep a device allocated to you between test sessions, bypassing the device cleaning process and session exit that occurs by default after each test completes. Normally, you'd need to start over and reopen another device. You'll need to launch your next test within **10 seconds** of your previous test ending to ensure that the same device will be allocated for the test (not cleaned or reset)

Your app under test and its data will remain as-is on the device.

The value for `cacheId` must be the same for all test methods that you want to run on the cached device. In addition, the app and project ID used for the tests must remain the same, along with the values for these capabilities:
* `deviceName`
* `platformName`
* `platformVersion`
* `tabletOnly`
* `phoneOnly`
* `privateDevicesOnly`
* `automationName`
* `autoGrantPermissions`
* `appiumVersion`

Suitable for test setups that require the app's state to be reset between tests. Can be used for both [***static*** and ***dynamic allocation***](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation).

We recommend reviewing [Device Management for Real Devices](mobile-apps/supported-devices) to learn more about how Sauce Labs manages device allocation, device caching, and device cleanup.

>**NOTE**: `cacheId` has replaced the `testobject_cache_device` capability that was used in TestObject (Legacy RDC).
<br/>

### `noReset`
__Data Type__: Boolean.

__Description__: set `noReset` to `true` to keep a device allocated to you during the device cleaning process, as described under [`cacheId`](#`cacheId`), allowing you to continue testing on the same device. Default value is `false`. To use `noReset`, you must pair it with `cacheId`.

:::caution Known iOS Limitation
On iOS devices, the `noReset` value is permanently set to `true` and cannot be overridden using `noReset:false`. If you check your Appium logs, you'll see that the value is `true`, even though the default setting technically is false. We've done this intentionally to ensure that your post-test iOS device cleaning process is optimal and secure.
:::

<br/>

### `recordDeviceVitals`
__Data Type__: Boolean.

__Description__: Device vitals are a collection of the mobile device performance data taken in real time during test execution. Vitals includes CPU utilization, memory consumption, network usage for both wifi and carrier connectivity where applicable, file operation and more. Measuring device vitals during test execution provides insights for analyzing app performance during operation.
<br/>

### `crosswalkApplication`

__Data Type__: Boolean.

__Description__: As described in [Appium Issue 4597](https://github.com/appium/appium/issues/4597) and [ChromeDriver Issue 2375613002](https://codereview.chromium.org/2375613002), mobile tests using Crosswalk will fail because because of attempts to connect to the wrong socket on the device. Sauce Labs has developed a patched version of ChromeDriver that will work with Crosswalk. You can specify to use this patched version with the `crosswalkApplication` capability.
<br/>

### `autoGrantPermissions`

__Data Type__: Boolean.

__Description__: By default, applications are installed on devices in the Sauce Labs real device cloud with autoGrantPermissions capability set to `true`. As long as the API number of the device is equal to 23 or higher, you can disable this by explicitly setting `autoGrantPermissions` to false.
<br/>

### `enableAnimations`
__Data Type__: Boolean.

__Description__: By default, animations are disabled on real devices. You can enable animations for private devices only with the enableAnimations capability. To use this capability, you'll need to add `privateDevicesOnly` and set to `true`.
<br/>

## Override Settings Capabilities (Optional)

These are custom capabilities developed by Sauce Labs that you can use to override settings that are enabled during app configuration.

### `resigningEnabled`
__Data Type__: Boolean.

__Description__: Enables the resigning (iOS) or instrumentation (Android) of apps on the Sauce Labs side, allowing the usage of the other capabilities listed in this section.
<br/>

### `sauceLabsImageInjectionEnabled`
__Data Type__: Boolean.

__Description__: enables the [camera image injection](https://docs.saucelabs.com/mobile-apps/features#camera-image-injection) feature.
<br/>

### `sauceLabsBypassScreenshotRestriction`
<p><small><Highlight color="#946f59">Espresso/Android Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: bypasses the restriction on taking screenshots for secure screens (i.e., secure text entry).
<br/>

### `allowTouchIdEnroll`
<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: enables the interception of biometric input, allowing the test to simulate Touch ID interactions (not a Sauce Labs-specific capability).
<br/>

### `groupFolderRedirectEnabled`
<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: Enables the use of the app's private app container directory instead of the shared app group container directory. For testing on the Real Device Cloud, the app gets resigned, which is why the shared directory is not accessible.
<br/>

### `systemAlertsDelayEnabled`
<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: Delays system alerts, such as alerts asking for permission to access the camera, to prevent app crashes at startup.
<br/>

## Unsupported Appium Capabilities

The following Appium capabilities are not yet supported for real devices. If you have any questions or concerns about unsupported capabilities, please contact your Customer Success Manager or Sauce Labs Support.

* `installApp`: Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
* `removeApp`: Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
* `Edit Timezone`: Appium does not provide a capability to edit the timezone of a device in automated testing on real devices. See [Test Configuration Options](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492) for information about timezone capabilities in virtual device testing.

## Additional Resources

* [Example Appium Test Scripts](https://github.com/saucelabs-training)
* [Sauce Labs Test Configuration Options for Appium](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492)
* [Sauce Labs Real Devices FAQ](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414315)
