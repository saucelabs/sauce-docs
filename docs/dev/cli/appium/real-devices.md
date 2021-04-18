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

Below are required and optional parameters to configure Appium tests for real devices.

### Required

Your Appium scripts for real device testing must include these capabilities along with a data center endpoint. Check out the example script in [Dynamic Allocation Examples](mobile-apps/automated-testing/supported-devices.md) for examples of these capabilities and their values.

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Data Type</strong>
   </td>
   <td><strong>Summary</strong>
   </td>
  </tr>
  <tr>
   <td><code>username</code>
   </td>
   <td>String
   </td>
   <td>The Sauce Labs Username you use to authenticate your tests. You can find this under <strong>Account > User Settings</strong>.
   </td>
  </tr>
  <tr>
   <td><code>accessKey</code>
   </td>
   <td>String
   </td>
   <td>The Sauce Labs Access Key you use to authenticate your tests. You can find this under <strong>Account</strong> > <strong>User Settings</strong>.
   </td>
  </tr>
  <tr>
   <td><code>app</code>
   </td>
   <td>String
   </td>
   <td><p>This capability refers to the location of your mobile application. If you're running a mobile browser test, this capability can be left blank.</p>
   </td>
  </tr>
  <tr>
   <td><code>platformName</code>
   </td>
   <td>String
   </td>
   <td><p>The type of mobile platform to use in your tests, for example <code>"Android"</code> or <code>"iOS"</code>.</p>
   <p>Values are not case-sensitive (i.e., <code>"android"</code> is the same as <code>"Android"</code>, and <code>"ios"</code> is the same as <code>"iOS"</code>).</p>
   </td>
  </tr>
  <tr>
   <td><code>platformVersion</code>
   </td>
   <td>String
   </td>
   <td><p>The platform version to use in your tests, for example <code>"4"</code> or <code>"4.1"</code>. This is a substring match. You can specify both major versions and incremental versions of an operating system. If you set only a major version, for example <code>4</code>, you will also have access to all devices running incremental versions, such as <code>"4.1"</code>, <code>"4.2"</code>, <code>"4.2.1"</code>, <code>"4.4.4"</code>. This also extends to minor and point versions. If you specify <code>"11.4"</code>, it will match <code>"11.4.0"</code>, <code>"11.4.1"</code>, etc.</p>
   </td>
  </tr>
  <tr>
   <td><code>deviceName</code>
   </td>
   <td>
   </td>
   <td><p>If you only want to test on a particular type of device, such as a "<code>Samsung S7"</code> or an <code>"iPhone"</code>, set <code>deviceName</code> to the display name of the device as shown in the Real Devices menu of Sauce Labs.</p>
   <p>You can use regular expressions for setting dynamic allocation of <code>deviceName</code>. The examples below use regular expressions for setting the <code>deviceName</code>, because a <strong>matching device must be present in your account in order for the test to run</strong>.</p>
   <ul>
   <li><code>"iPhone.*" </code>, <code> "iPhone .*"</code> will allocate any iPhone. <code>"</code></li>
   <li><code>.*nexus.*"</code> will allocate any device with the word "nexus" in its display name.</li>
   <li><code>"iPhone [67]"</code> or <code>"iPhone [6-7]"</code> will allocate either "iPhone 7" or "iPhone 6" device.</li>
   <li><code>"iPhone [67]S"</code> or <code>"iPhone [6-7]S"</code> will allocate either "iPhone 7S" or "iPhone 6S" device.</li>
   <li><code>"iPhone 7.*"</code> will allocate "iPhone 7" or "iPhone 7S", or any device that starts with the display name "iPhone 7".</li>
   </ul>
   <p>Values are not case-sensitive. To learn more, see: <a href="mobile-apps/automated-testing/supported-devices">Dynamic Device Allocation</a>.</p>
   </td>
  </tr>
</table>


### Optional

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Data Type</strong>
   </td>
   <td><strong>Setting</strong>
   </td>
  </tr>
  <tr>
   <td><code>appiumVersion</code>
   </td>
   <td>String
   </td>
   <td>The version of Appium you want to use in your tests. If you leave this capability blank, or omit it completely, Sauce Labs will defer to the default Appium version installed on our platform.
   </td>
  </tr>
  <tr>
   <td><code>name</code>
   </td>
   <td>String
   </td>
   <td>A name for your test, to <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">make it easier to find individual tests</a>.
   </td>
  </tr>
  <tr>
   <td><code>build</code>
   </td>
   <td>String
   </td>
   <td>If you're running several tests within a test suite, you can <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">add a build tag to group these tests together</a>.
   </td>
  </tr>
  <tr>
   <td><code>tag</code>
   </td>
   <td>String
   </td>
   <td><a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946">Tags are useful for collaborating with teams</a> and also for filtering results on your Sauce Labs <strong>Test Results</strong> and <strong>Archive</strong> pages.
   </td>
  </tr>
  <tr>
   <td><code>newCommandTimeout</code>
   </td>
   <td>Float
   </td>
   <td>Automated tests time out by default after 60 seconds of inactivity. You can increase this to 90 seconds with the <code>newCommandTimeout</code> desired capability.
   </td>
  </tr>
  <tr>
   <td><code>commandTimeout</code>
   </td>
   <td>Float
   </td>
   <td>Custom timeout in milliseconds for the WebDriverAgent backend. The maximum allowed timeout is 600 seconds.
   <p>When creating an Appium session on the real device cloud for any iOS device, it is possible to set the desired capability <code>commandTimeouts</code>. It will set a timeout for the WebDriverAgent backend, which will prevent automated test sessions from being blocked when the Appium WebDriverAgent backend freezes unexpectedly. Sauce Labs sets a default of 60 seconds for this capability.</p>
   </td>
  </tr>
  <tr>
   <td><code>tabletOnly</code>
   </td>
   <td>Boolean
   </td>
   <td>You can use the <code>tabletOnly</code> desired capability to select only tablet devices by setting this capability to <code>"true"</code>.
   </td>
  </tr>
  <tr>
   <td><code>phoneOnly</code>
   </td>
   <td>Boolean
   </td>
   <td>You can use the <code>phoneOnly</code> desired capabilities to select only phone devices by setting this capability to <code>"true"</code>.
   </td>
  </tr>
  <tr>
   <td><code>privateDevicesOnly</code>
   </td>
   <td>Boolean
   </td>
   <td>If you have access to both private and public devices, you can request allocation of private devices only by setting this capability to <code>"true"</code>.
   </td>
  </tr>
  <tr>
   <td><code>automationName</code>
   </td>
   <td>String
   </td>
   <td><p>You can pass an automation value to use native automation frameworks (supported for Android native apps only). UiAutomator2 example:</p>
   <sub>

    capabilities.setCapability("automationName", "uiautomator2");

   </sub></td>
  </tr>
  <tr>
   <td><code>cacheId</code>
   </td>
   <td>String
   </td>
   <td>Specifying the desired capability <code>cacheId</code> (a randomized <code>String</code>) will allocate the device to you for 10 seconds after a test finishes. You can then re-use the same device in your next test. However the value for <code>cacheId</code> must be the same for all test methods that you want to run on the cached device. In addition, the application and project ID used for the tests must remain the same, along with the values for these capabilities:
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
<p>We recommend reviewing <a href="mobile-apps/automated-testing/supported-devices">Device Management for Real Devices</a> to learn more about how Sauce Labs manages device allocation, device caching, and device cleanup.</p>
   </td>
  </tr>
  <tr>
   <td><code>noReset</code>
   </td>
   <td>Boolean
   </td>
   <td>You can also use the <code>cacheId</code> capability in conjunction with the standard <code>noReset</code> Appium capability. In the default case, where <code>noReset</code> is set to <code>false</code>, your application will be uninstalled and reinstalled after every test. If <code>noReset</code> is set to <code>true</code>, the application you are testing won't be reinstalled after every test run. This might save you further time, and is suitable for test setups that require the application's state to be reset between tests. Note that then <code>cacheId</code> is set, no device cleaning will take place in between sessions, regardless of <code>noReset</code> value.
   </td>
  </tr>
  <tr>
   <td><code>carrierConnectivityOnly</code>
   </td>
   <td>Boolean
   </td>
   <td>You can use the <code>carrierConnectivityOnly</code> desired capability to allocate only devices that are connected to a carrier network.
   </td>
  </tr>
  <tr>
   <td><code>recordDeviceVitals</code>
   </td>
   <td>Boolean
   </td>
   <td>Device vitals are a collection of the mobile device performance data taken in real time during test execution. Vitals includes CPU utilization, memory consumption, network usage for both wifi and carrier connectivity where applicable, file operation and more. Measuring device vitals during test execution provides insights for analyzing app performance during operation.
   </td>
  </tr>
  <tr>
   <td><code>crosswalkApplication</code>
   </td>
   <td>Boolean
   </td>
   <td>As described in <a href="https://github.com/appium/appium/issues/4597">Appium Issue 4597</a> and <a href="https://codereview.chromium.org/2375613002/">ChromeDriver Issue 2375613002</a>, mobile tests using Crosswalk will fail because because of attempts to connect to the wrong socket on the device. Sauce Labs has developed a patched version of ChromeDriver that will work with Crosswalk. You can specify to use this patched version with the <code>crosswalkApplication</code> desired capability.
   </td>
  </tr>
  <tr>
   <td><code>autoGrantPermissions</code>
   </td>
   <td>Boolean
   </td>
   <td>By default, applications are installed on devices in the Sauce Labs real device cloud with <code>autoGrantPermissions</code> capability set to true. As long as the API number of the device is equal to 23 or higher, you can disable this by explicitly setting <code>autoGrantPermissions</code> to false.
   </td>
  </tr>
  <tr>
   <td><code>enableAnimations</code>
   </td>
   <td>Boolean
   </td>
   <td><p>By default, animations are disabled on real devices. You can enable animations for private devices only with the <code>enableAnimations</code> capability.</p>
   <p><strong>NOTE:</strong> The <code>enableAnimations</code> capability will only work if <code>privateDevicesOnly</code> is set to true.</p>
   </td>
  </tr>
</table>

### Device Caching and Cleanup

By default, each time you complete a test session, the real device cloud uninstalls your application, performs device cleaning, and de-allocates the device. This means that if you have multiple tests that you want to run on the same device, you will, by default, wait for this cleaning process to complete between every test.

However, you can use the capability `cacheId` to leave the device allocated to you for 10 seconds after each test completes. If you immediately start another test on the device, you won't need to wait for the allocation and device cleaning process to be repeated. In this case, no device cleaning will take place in between sessions, with the only exception being the application under test and the data it owns.

>**NOTE**: TestObject, our Legacy Real Device Cloud platform used the capability `testobject_cache_device` to keep the device allocated to you during the cleaning process, but you could only use this capability for static allocation. This has been deprecated and replaced with the capability `cacheId`, described in this section, which works for both static and dynamic allocation. If you have scripts that use `testobject_cache_device`, they will still work for static allocation only if you're using TestObject. The 10-second limit on cached devices is still the same.


### Unsupported Capabilities

Some Appium capabilities are not yet supported for real devices. If you have any questions or concerns about unsupported capabilities, please contact your Customer Success Manager, refer to [Real Devices FAQ](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414315) or submit a help desk ticket to: support@saucelabs.com.

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td><p><code>installApp</code></p>
   </td>
   <td>Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
   </td>
  </tr>
  <tr>
   <td><code>removeApp</code>
   </td>
   <td>Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
   </td>
  </tr>
  <tr>
   <td><code>Edit Timezone</code>
   </td>
   <td>Appium does not provide a capability to edit the timezone of a device in automated testing on real devices. See <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492">Test Configuration Options</a> for information about timezone capabilities in virtual device testing.
   </td>
  </tr>
</table>


### Override Settings Capabilities

These are custom capabilities developed by Sauce Labs to override settings that are enabled during app configuration.

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>resigningEnabled</code>
   </td>
   <td>Enables the resigning (iOS) or instrumentation (Android) of apps on the Sauce Labs side, which enables the usage of the other capabilities listed in this table.
   </td>
  </tr>
  <tr>
   <td><code>sauceLabsImageInjectionEnabled</code>
   </td>
   <td>Enables the image injection feature.
   </td>
  </tr>
  <tr>
   <td><code>sauceLabsBypassScreenshotRestriction</code>
   <p><Highlight color="#009245">Android only</Highlight></p>
   </td>
   <td>Bypasses the restriction on taking screenshots for secure screens (i.e., secure text entry).
   </td>
  </tr>
  <tr>
   <td><code>allowTouchIdEnroll</code>
   <p><Highlight color="#009245">iOS only</Highlight></p>
   </td>
   <td>Enables the interception of biometric input, allowing the test to simulate Touch ID interactions (not a Sauce Labs-specific capability).
   </td>
  </tr>
  <tr>
   <td><code>groupFolderRedirectEnabled</code>
   <p><Highlight color="#009245">iOS only</Highlight></p>
   </td>
   <td>Enables the use of the app's private app container directory instead of the shared app group container directory.
   <p>For testing on the Real Device Cloud, the app gets resigned, which is why the shared directory is not accessible.</p>
   </td>
  </tr>
  <tr>
   <td><code>systemAlertsDelayEnabled</code>
   <p><Highlight color="#009245">iOS only</Highlight></p>
   </td>
   <td>Delays system alerts, such as alerts asking for permission to access the camera, to prevent app crashes at startup.
   </td>
  </tr>
</table>
