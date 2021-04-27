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

### `accessKey`
__Data Type__: String.

__Description__: The Sauce Labs Access Key you use to authenticate your tests. You can find this under **Account** > **User Settings**.

### `app`
__Data Type__: String.
__Description__: This capability refers to the location of your mobile app. If you're running a mobile browser test, this capability can be left blank.

### Appium Endpoint
__Data Type__: String.

__Description__: specifies the specific regional Sauce Labs Data Center where your desired device is located. There are currently two options for real devices:

* US RDC: https://ondemand.us-west-1.saucelabs.com
* EU RDC: https://ondemand.eu-central-1.saucelabs.com

### `platformName`
__Data Type__: String.

__Description__: specify the type of mobile platform to use in your tests (i.e., `"Android"` or `"iOS"`). Values are not case-sensitive (i.e., `"ios"` is the same as `"iOS"`). For ***Dynamic Allocation***.

### `platformVersion`
__Data Type__: String.

__Description__: specifies the operating system platform version to use in your tests. This is a substring match. For ***Dynamic Allocation***. You can specify:

  * Incremental versions (e.g., `"4.1"`)
  * Major versions (e.g., `"4"`): by setting a major version, you'd have access to all devices running incremental versions (`"4.1"`, `"4.2"`, `"4.2.1"`, "`4.4.4"`). This also extends to minor and point versions (e.g., specifying `"4.4"` will match `"4.4.0"`, `"4.4.1"`).

### `deviceName`
__Description__: specify the name of the device you want to test on, using either static or dynamic allocation, for individual or parallel tests. See [Static and Dynamic Device Allocation](https://docs.saucelabs.com/mobile-apps/automated-testing/supported-devices#static-and-dynamic-device-allocation) for detailed instructions.
  * ***Static Allocation***: specify an exact device for your test by setting `deviceName` to the Device ID. When using this, there's no need to specify the `platformName` and `platformVersion` because they'll be set by default (i.e., if you include these separately included in your test script, they will be ignored).
  ```java title="Java Example"
  capabilities.setCapability("deviceName", "iPhone_11_13_5_real_us");
  ```
  * ***Dynamic Allocation***: use regular expressions (regex) to dynamically allocate a device.
  ```java title="Java Example"
  capabilities.setCapability("deviceName", "Google Pixel.*");
  ```

## Optional Capabilities

### `appiumVersion`
__Data Type__: String.

__Description__: The version of Appium you want to use in your tests. If you leave this capability blank, or omit it completely, Sauce Labs will defer to the default Appium version installed on our platform.


### `name`
__Data Type__: String.

__Description__: A name for your test, to <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">make it easier to find individual tests</a>.


### `build`
__Data Type__: String.
__Description__: If you're running several tests within a test suite, you can <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">add a build tag to group these tests together</a>.


### `tag`
__Data Type__: String.

__Description__: <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">Tags are useful for collaborating with teams</a> and also for filtering results on your Sauce Labs <strong>Test Results</strong> and <strong>Archive</strong> pages.


### `newCommandTimeout`
__Data Type__: Float

__Description__: Automated tests time out by default after 60 seconds of inactivity. You can increase this to 90 seconds with the newCommandTimeout desired capability.

### `commandTimeout`
__Data Type__: Float

__Description__: Custom timeout in milliseconds for the WebDriverAgent backend. The maximum allowed timeout is 600 seconds.

When creating an Appium session on the real device cloud for any iOS device, it is possible to set the desired capability commandTimeouts. It will set a timeout for the WebDriverAgent backend, which will prevent automated test sessions from being blocked when the Appium WebDriverAgent backend freezes unexpectedly. Sauce Labs sets a default of 60 seconds for this capability.

### `tabletOnly`
__Data Type__: Boolean.

__Description__: use this capability to select only tablet devices for testing by setting it to `"true"`. For ***Dynamic Allocation***.

### `phoneOnly`
__Data Type__: Boolean.

__Description__: use this capability to select only phone devices by setting it to `"true"`. For ***Dynamic Allocation***.

### `privateDevicesOnly`
__Data Type__: Boolean.

__Description__: if your pricing plan includes both private and public devices, use this capability to request allocation of private devices only by setting it to `"true"`. For ***Dynamic Allocation***.

### `carrierConnectivityOnly`
__Data Type__: Boolean.

__Description__: use this capability to allocate only devices connected to a carrier network by setting it to `"true"`. For ***Dynamic Allocation***.

### `automationName`
__Data Type__: String.

__Description__: You can pass an automation value to use native automation frameworks (supported for Android native apps only). UiAutomator2 example:
```java
capabilities.setCapability("automationName", "uiautomator2");
```

### `cacheId`
__Data Type__: String.

__Description__: specifying this capability along with the device name will allocate the device to you for 10 seconds after a test finishes. You can then re-use the same device in your next test. However the value for cacheId must be the same for all test methods that you want to run on the cached device. In addition, the application and project ID used for the tests must remain the same, along with the values for these capabilities:
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
__Data Type__: Boolean.

__Description__: You can also use the cacheId capability in conjunction with the standard `noReset` Appium capability. In the default case, where noReset is set to false, your application will be uninstalled and reinstalled after every test. If `noReset` is set to true, the application you are testing won't be reinstalled after every test run. This might save you further time, and is suitable for test setups that require the application's state to be reset between tests. Note that then cacheId is set, no device cleaning will take place in between sessions, regardless of noReset value.


### `recordDeviceVitals`
__Data Type__: Boolean.

__Description__: Device vitals are a collection of the mobile device performance data taken in real time during test execution. Vitals includes CPU utilization, memory consumption, network usage for both wifi and carrier connectivity where applicable, file operation and more. Measuring device vitals during test execution provides insights for analyzing app performance during operation.

### `crosswalkApplication`

__Data Type__: Boolean.

__Description__: As described in [Appium Issue 4597](https://github.com/appium/appium/issues/4597) and [ChromeDriver Issue 2375613002](https://codereview.chromium.org/2375613002), mobile tests using Crosswalk will fail because because of attempts to connect to the wrong socket on the device. Sauce Labs has developed a patched version of ChromeDriver that will work with Crosswalk. You can specify to use this patched version with the `crosswalkApplication` capability.

### `autoGrantPermissions`

__Data Type__: Boolean.

<<<<<<< HEAD
__Description__: By default, applications are installed on devices in the Sauce Labs real device cloud with autoGrantPermissions capability set to `true`. As long as the API number of the device is equal to 23 or higher, you can disable this by explicitly setting `autoGrantPermissions` to false.

### `enableAnimations`
__Data Type__: Boolean.

=======
### `enableAnimations`
__Data Type__: Boolean
>>>>>>> 64de3a420b6fbb3726a5a86117f3f1961472cc48
__Description__: By default, animations are disabled on real devices. You can enable animations for private devices only with the enableAnimations capability.
>***NOTE***: This capability will only work if `privateDevicesOnly` is set to `true`.


### `cacheId`
__Description__: use this capability to keep a device allocated to you during the 10-second device cleaning process that occurs by default after each test completes. If you immediately start another test on the device, you won't need to wait for the allocation and device cleaning process to be repeated. In this case, no device cleaning will take place in between sessions, with the only exception being the app under test and the data it owns. This works for both [***static*** and ***dynamic allocation***](https://docs.saucelabs.com/mobile-apps/automated-testing/supported-devices#static-and-dynamic-device-allocation).

By default, each time you complete a test session, the Real Device Cloud uninstalls your app, performs device cleaning, and de-allocates the device. This means that if you wanted to run multiple tests on the same device, you would need to wait for this cleaning process to complete between every test.

>**NOTE**: `cacheId` has replaced the [TestObject platform](https://wiki.saucelabs.com/display/DOCS/Legacy+Device+Platform+User+Migration+Guide) capability `testobject_cache_device`. If you have scripts that use `testobject_cache_device`, they will still work for (static allocation only) on TestObject. The 10-second limit on cached devices is still the same.

## Override Settings Capabilities (Optional)

These are custom capabilities developed by Sauce Labs that you can use to override settings that are enabled during app configuration.

### `resigningEnabled`
__Data Type__: Boolean.

__Description__: Enables the resigning (iOS) or instrumentation (Android) of apps on the Sauce Labs side, which enables the usage of the other capabilities listed in this table.

### `sauceLabsImageInjectionEnabled`
__Data Type__: Boolean.

__Description__: Enables the image injection feature.

### `sauceLabsBypassScreenshotRestriction`
<p><small><Highlight color="#946f59">Espresso/Android Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: Bypasses the restriction on taking screenshots for secure screens (i.e., secure text entry).

### `allowTouchIdEnroll`
<p><small><Highlight color="#333333">XCUITest/iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: Enables the interception of biometric input, allowing the test to simulate Touch ID interactions (not a Sauce Labs-specific capability).

### `groupFolderRedirectEnabled`
<p><small><Highlight color="#333333">XCUITest/iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: Enables the use of the app's private app container directory instead of the shared app group container directory. For testing on the Real Device Cloud, the app gets resigned, which is why the shared directory is not accessible.

### `systemAlertsDelayEnabled`
<p><small><Highlight color="#333333">XCUITest/iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: Delays system alerts, such as alerts asking for permission to access the camera, to prevent app crashes at startup.

## Unsupported Appium Capabilities

The following Appium capabilities are not yet supported for real devices. If you have any questions or concerns about unsupported capabilities, please contact your Customer Success Manager or Sauce Labs Support.

* `installApp`: Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
* `removeApp`: Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
* `Edit Timezone`: Appium does not provide a capability to edit the timezone of a device in automated testing on real devices. See [Test Configuration Options](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492) for information about timezone capabilities in virtual device testing.


## Additional Resources

* [Example Appium Test Scripts](https://github.com/saucelabs-training)
* [Sauce Labs Test Configuration Options for Appium](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492)
* [Sauce Labs Real Devices FAQ](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414315)
