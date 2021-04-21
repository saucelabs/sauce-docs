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

Your Appium scripts for real device testing must include these capabilities, along with a Data Center endpoint. Check out the example script in [Dynamic Allocation Examples](mobile-apps/automated-testing/appium/real-devices) for examples of these capabilities and their values.

### `username`
__Data Type__: String
__Description__: The Sauce Labs Username you use to authenticate your tests. You can find this under **Account** > **User Settings**.

### `accessKey`
__Data Type__: String
__Description__: The Sauce Labs Access Key you use to authenticate your tests. You can find this under **Account** > **User Settings**.

### `app`
__Data Type__: String
__Description__: This capability refers to the location of your mobile application. If you're running a mobile browser test, this capability can be left blank.

### `platformName`
__Data Type__: String
__Description__: The type of mobile platform to use in your tests, for example `"Android"` or `"iOS"`. Values are not case-sensitive (i.e., `"android"` is the same as `"Android"`, and `"ios"` is the same as `"iOS"`).

### `platformVersion`
__Data Type__: String
__Description__: The platform version to use in your tests, for example `"4"` or `"4.1"`. This is a substring match. You can specify both major versions and incremental versions of an operating system.

If you set only a major version - for example, `4` - you'll also have access to all devices running incremental versions, such as `"4.1"`, `"4.2"`, `"4.2.1"`, "`4.4.4"`. This also extends to minor and point versions. If you specify `"11.4"`, it will match `"11.4.0"`, `"11.4.1"`, etc.

### `deviceName`
__Description__: If you only want to test on a particular type of device, such as a `"Samsung S7"` or an `"iPhone"`, set deviceName to the display name of the device as shown in the Real Devices menu of Sauce Labs.

You can use regular expressions for setting dynamic allocation of deviceName. The examples below use regular expressions for setting the deviceName, because a **matching device must be present in your account in order for the test to run**.

* `"iPhone.*" ,  "iPhone .*"` will allocate any iPhone.
* `".*nexus.*"` will allocate any device with the word "nexus" in its display name.
* `"iPhone [67]"` or `"iPhone [6-7]"` will allocate either "iPhone 7" or "iPhone 6" device.
* `"iPhone [67]S"` or `"iPhone [6-7]S"` will allocate either "iPhone 7S" or "iPhone 6S" device.
* `"iPhone 7.*"` will allocate "iPhone 7" or "iPhone 7S", or any device that starts with the display name "iPhone 7".

Values are not case-sensitive. To learn more, see [Dynamic Device Allocation](mobile-apps/automated-testing/supported-devices).

## Optional Capabilities

### `appiumVersion`

__Data Type__: String
__Description__: The version of Appium you want to use in your tests. If you leave this capability blank, or omit it completely, Sauce Labs will defer to the default Appium version installed on our platform.


### `name`

__Data Type__: String
__Description__: A name for your test, to <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">make it easier to find individual tests</a>.


### `build`
__Data Type__: String
__Description__: If you're running several tests within a test suite, you can <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">add a build tag to group these tests together</a>.


### `tag`

__Data Type__: String
__Description__: <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">Tags are useful for collaborating with teams</a> and also for filtering results on your Sauce Labs <strong>Test Results</strong> and <strong>Archive</strong> pages.


### `newCommandTimeout`

__Data Type__: Float
__Description__: Automated tests time out by default after 60 seconds of inactivity. You can increase this to 90 seconds with the newCommandTimeout desired capability.

### `commandTimeout`

__Data Type__: Float
__Description__: Custom timeout in milliseconds for the WebDriverAgent backend. The maximum allowed timeout is 600 seconds.

When creating an Appium session on the real device cloud for any iOS device, it is possible to set the desired capability commandTimeouts. It will set a timeout for the WebDriverAgent backend, which will prevent automated test sessions from being blocked when the Appium WebDriverAgent backend freezes unexpectedly. Sauce Labs sets a default of 60 seconds for this capability.

### `tabletOnly`
__Data Type__: Boolean
__Description__: You can use the tabletOnly desired capability to select only tablet devices by setting this capability to `"true"`.


### `phoneOnly`
__Data Type__: Boolean
__Description__: You can use the phoneOnly desired capabilities to select only phone devices by setting this capability to `"true"`.

### `privateDevicesOnly`
__Data Type__: Boolean
__Description__: If you have access to both private and public devices, you can request allocation of private devices only by setting this capability to "true".

### `automationName`

__Data Type__: String
__Description__: You can pass an automation value to use native automation frameworks (supported for Android native apps only). UiAutomator2 example:
```java
capabilities.setCapability("automationName", "uiautomator2");
```

### `cacheId`
__Data Type__: String
__Description__: Specifying the desired capability cacheId (a randomized String) will allocate the device to you for 10 seconds after a test finishes. You can then re-use the same device in your next test. However the value for cacheId must be the same for all test methods that you want to run on the cached device. In addition, the application and project ID used for the tests must remain the same, along with the values for these capabilities:
* `deviceName`
* `platformName`
* `platformVersion`
* `tabletOnly`
* `phoneOnly`
* `privateDevicesOnly`
* `automationName`
* `autoGrantPermissions`
* `appiumVersion`

We recommend reviewing [Device Management for Real Devices](mobile-apps/automated-testing/supported-devices) to learn more about how Sauce Labs manages device allocation, device caching, and device cleanup.

### `noReset`

__Data Type__: Boolean
__Description__: You can also use the cacheId capability in conjunction with the standard noReset Appium capability. In the default case, where noReset is set to false, your application will be uninstalled and reinstalled after every test. If noReset is set to true, the application you are testing won't be reinstalled after every test run. This might save you further time, and is suitable for test setups that require the application's state to be reset between tests. Note that then cacheId is set, no device cleaning will take place in between sessions, regardless of noReset value.

### `carrierConnectivityOnly`

__Data Type__: Boolean
__Description__: You can use the carrierConnectivityOnly desired capability to allocate only devices that are connected to a carrier network.


### `recordDeviceVitals`

__Data Type__: Boolean
__Description__: Device vitals are a collection of the mobile device performance data taken in real time during test execution. Vitals includes CPU utilization, memory consumption, network usage for both wifi and carrier connectivity where applicable, file operation and more. Measuring device vitals during test execution provides insights for analyzing app performance during operation.

### `crosswalkApplication`

__Data Type__: Boolean
__Description__: As described in <a href="https://github.com/appium/appium/issues/4597">Appium Issue 4597</a> and <a href="https://codereview.chromium.org/2375613002/">ChromeDriver Issue 2375613002</a>, mobile tests using Crosswalk will fail because because of attempts to connect to the wrong socket on the device. Sauce Labs has developed a patched version of ChromeDriver that will work with Crosswalk. You can specify to use this patched version with the crosswalkApplication desired capability.

### `autoGrantPermissions`

__Data Type__: Boolean
__Description__: By default, applications are installed on devices in the Sauce Labs real device cloud with autoGrantPermissions capability set to true. As long as the API number of the device is equal to 23 or higher, you can disable this by explicitly setting autoGrantPermissions to false.


### `enableAnimations`

__Data Type__: Boolean
__Description__: By default, animations are disabled on real devices. You can enable animations for private devices only with the enableAnimations capability.
>***NOTE***: The enableAnimations capability will only work if `privateDevicesOnly` is set to true.


### `cacheId`

__Description__: By default, each time you complete a test session, the real device cloud uninstalls your application, performs device cleaning, and de-allocates the device. This means that if you have multiple tests that you want to run on the same device, you will, by default, wait for this cleaning process to complete between every test.

You can use this `cacheId` capability to leave the device allocated to you for 10 seconds after each test completes. If you immediately start another test on the device, you won't need to wait for the allocation and device cleaning process to be repeated. In this case, no device cleaning will take place in between sessions, with the only exception being the application under test and the data it owns.

>**NOTE**: TestObject, our Legacy Real Device Cloud platform used the capability `testobject_cache_device` to keep the device allocated to you during the cleaning process, but you could only use this capability for static allocation. This has been deprecated and replaced with the capability `cacheId`, described in this section, which works for both static and dynamic allocation. If you have scripts that use `testobject_cache_device`, they will still work for static allocation only if you're using TestObject. The 10-second limit on cached devices is still the same.

## Override Settings Capabilities (Optional)

These are custom capabilities developed by Sauce Labs that you can use to override settings that are enabled during app configuration.

### `resigningEnabled`
__Description__: Enables the resigning (iOS) or instrumentation (Android) of apps on the Sauce Labs side, which enables the usage of the other capabilities listed in this table.

### `sauceLabsImageInjectionEnabled`
__Description__: Enables the image injection feature.

### `sauceLabsBypassScreenshotRestriction`
<p><Highlight color="#013a70">Android only</Highlight></p>

__Description__: Bypasses the restriction on taking screenshots for secure screens (i.e., secure text entry).

### `allowTouchIdEnroll`
<p><Highlight color="#013a70">iOS only</Highlight></p>

__Description__: Enables the interception of biometric input, allowing the test to simulate Touch ID interactions (not a Sauce Labs-specific capability).

### `groupFolderRedirectEnabled`
<p><Highlight color="#013a70">iOS only</Highlight></p>
__Description__: Enables the use of the app's private app container directory instead of the shared app group container directory. For testing on the Real Device Cloud, the app gets resigned, which is why the shared directory is not accessible.

### `systemAlertsDelayEnabled`
<p><Highlight color="#013a70">iOS only</Highlight></p>
__Description__: Delays system alerts, such as alerts asking for permission to access the camera, to prevent app crashes at startup.

## Unsupported Capabilities

The following Appium capabilities are not yet supported for real devices. If you have any questions or concerns about unsupported capabilities, please contact your Customer Success Manager or Sauce Labs Support.

* `installApp`: Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
* `removeApp`: Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
* `Edit Timezone`: Appium does not provide a capability to edit the timezone of a device in automated testing on real devices. See [Test Configuration Options](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492) for information about timezone capabilities in virtual device testing.


## Additional Resources

* [Sauce Labs Real Devices FAQ](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414315)
