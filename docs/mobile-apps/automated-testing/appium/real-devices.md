---
id: real-devices
title: Appium Testing with Real Devices
sidebar_label: Real Devices
description: Run your automated Appium tests on Sauce Labs real devices.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs provides thousands of real mobile devices for nearly every phone and tablet model and applicable OS version. You can run your Appium tests on these devices through the Sauce Labs Real Device Cloud (RDC) to ensure your app behaves accurately and consistently across different devices in the real world. Sauce Labs offers a massive pool of public devices available for all customers, as well as a private option in which customers can create a selection of devices for use by only their organization.

Appium automated real device testing supports tests designed to run against a web application in a mobile browser or a native app on a mobile device.

See [When to Test on Real Devices](https://docs.saucelabs.com/mobile-apps/supported-devices/#when-to-test-on-real-devices) for deails about real device testing use cases, benefits, and system requirements.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* An Appium installation (See [Using Appium](/mobile-apps/automated-testing/appium))
* A mobile app file (.ipa for iOS, .apk for Android) If you don't have one, consider using our Demo Apps:
     *[React Native Demo App](https://github.com/saucelabs/my-demo-app-rn/releases)
     *[iOS Demo App](https://github.com/saucelabs/my-demo-app-ios/releases)
     *[Android Demo App](https://github.com/saucelabs/my-demo-app-android/releases)
* An Appium mobile test file


## Install Your Mobile App on Real Devices

If your Appium tests are intended to test a native mobile application on real devices, the app file must be available to Sauce Labs so it can be installed on the devices selected for testing. Sauce Labs provides a variety of methods for doing this, including:

* Install your app to a real device from a remote location [How?](/mobile-apps/app-storage/#installing-apps-from-a-remote-location)
* Upload your app to Sauce Application Storage using the [Sauce Labs UI](/mobile-apps/app-storage/#uploading-apps-via-ui) or [REST API](/mobile-apps/app-storage/#uploading-apps-via-rest-api).

The following application file types are supported for real device tests:

* \*.apk or \*.aab for Android app files
* \*.ipa or \*.zip for iOS app files (\*.zip files are parsed to determine whether a valid *.app bundle exists).


## Configuring Appium Tests for Real Devices

Our [Test Configuration Options](/dev/test-configuration-options) reference documentation provides a complete index of required and optional parameters for Appium. Be aware that not all of the Appium capabilities list are supported for both virtual and real device tests.

The following sections provide context and instructions for test configurations that are essential when using Appium to run automated tests on Sauce Labs **real devices**.

### Specifying Your `app`

In order to install your app on the devices you select, you must identify the location from which your mobile app can be accessed. You can specify a Sauce Labs Application Storage ID or filename, or a remote location to which Sauce Labs has access.

```js title=App Storage Example
caps.setCapability("app","storage:filename=mapp.zip");
```

```js title=Remote App Example
caps.setCapability("app","https://github.com/test-apps/ios-app.zip");
```


### Setting the `appiumVersion`

If you omit the `appiumVersion` in your test configuration, your test runs with our default Appium version, which is typically the version that supports the broadest number of device combinations, but may not be the latest version. We recommend that you specify the newest Appium version that supports the specific devices and operating systems you plan to use for your test, so you can leverage the most up-to-date features and patches.

```js
caps.setCapability("appiumVersion", "1.5.3");
```

#### **Checking the Appium Version for Your Test**
1. Log into Sauce Labs.
2. Go to **Test Details**.
3. Find and select the test that you ran using Appium.
4. Click the **Metadata** tab.
5. Look for the **Logs** row and select **Appium Log**. The first line should indicate the Appium version. For example, `2019-05-05T17:45:07.541Z - info: Welcome to Appium v1.10.1`.

### Excluding the `browserName`

When testing a native mobile app, no browser is accessed, so if you are re-using the capabilities from your mobile or desktop browser tests, you can omit the `browserName` capability or or set the value as an empty string. This is an important exclusion because if values are set for _both_ `app` and `browserName`, Sauce Labs defaults to the `browserName`. Similarly, if neither capability is specified, Sauce Labs defaults to the `browserName` settings of Safari for iOS and Chrome for Android.

```js
caps.setCapability("browserName", "");
```

### Selecting Your Test Device

Testing on real devices requires you to specify a device on which you plan to test your app. You can do this by specifying either:

* A specific device from a Sauce Labs device pool (public or private) by its ID (static allocation)
* A set of device attributes to use as criteria for selecting any available matching device (dynamic allocation)

#### Static Device Allocation

_Static Allocation_ allows you to specify a known device by its unique ID. This can be beneficial if, for examplle, you are testing features only available on a very specific device setup. However, what you gain in precision may be offset by the time it takes for a specific device to become available, especially if your tests do not require that level of precision. If you do require a specific device, you should always configrm the device's availability before launching your tests.

```js
caps.setCapability("deviceName", "HTC_One_M8_real");
```

:::note
When you specify a device by it's ID, the `platformName` and `platformVersion` capabilities are populated automatically, so may be omitted in your test configuration. If included, they are ignored.
:::

You can obtain a list of available devices, including their IDs, using the [Get Devices](https://docs.saucelabs.com/dev/api/rdc/#get-devices) API request.

Alternatively, you can find a device's ID in the Sauce Labs application:

1. Log into Sauce Labs.
1. Navigate to **Live** >> **Mobile App**.
1. Choose your mobile app (or an applicable demo app) from the list and click **Choose Device** to bring up the pool of devices for your organization.
1. Hover over the device you want a click **Details** to bring up the identification information for that device.


#### Dynamic Device Allocation

_Dynamic Allocation_ allows you to specify the device attributes that are important to you and then run your test against the first available device from the pool that matches your specifications, giving you greater flexibility and, likely, a faster test execution time, particularly if you are running tests in parallel.

Dynamic allocation is advised, in particular, for all automated mobile application testing in CI/CD environments.

To enable dynamic device allocation, you must specify the `deviceName`, `platformName`, and `platformVersion` capabilities at a minimum. The following table provides information about accepted values.

:::note
The following sample values are presented using case for readability, but capabilities values are not case-sensitive, so there is no distinction between `iPhone` and `iphone`, for example.
:::

<table id="table-cli">
  <thead>
    <tr>
      <th width="20%">Capability</th>
      <th>Description and Sample Values</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td><a href="/dev/test-configuration-options#deviceName"><code>deviceName</code></a></td>
    <td><p>Provide a device display name, or use regular expressions to provide a partial name, thus increasing the potential pool of matches. Some examples include:</p>
    <p>Any iPhone: <code>caps.setCapability("deviceName", "iPhone.\*", "iPhone .\*"</code></p>
    <p>Any device with the word "nexus" in its display name: <code>caps.setCapability("deviceName", ".\*nexus.\*"</code></p>
    <p>Either <i>iPhone 7</i> or <i>iPhone 6</i>: <code>caps.setCapability("deviceName", "iPhone [67]"</code> or <code>"iPhone [6-7]"</code></p>
    <p>Either <i>iPhone 7S</i> or <i>iPhone 6S</i>: <code>caps.setCapability("deviceName", "iPhone [67]S"</code> or <code>"iPhone [6-7]S"</code></p></td>
  </tr>
  <tr>
   <td><a href="/dev/test-configuration-options#platformname"><code>platformName</code></a></td>
   <td>Specify the mobile operating system to use in your tests (i.e., <code>Android</code> or <code>iOS</code>.</td>
  </tr>
  <tr>
   <td><a href="/dev/test-configuration-options#platformVersion"><code>platformVersion</code></a></td>
   <td>Specify the OS version to use in your tests (i.e., <code>4</code> or <code>4.1</code>.
     <p>This property uses a substring match, so you can specify major and/or incremental versions. For example, if you set only a major version <code>4</code>, any devices running incremental versions (e.g., <code>4.1</code>, <code>4.2</code>, <code>4.2.1</code>, <code>4.4.4</code>) will also match. This behavior extends to minor and point versions as well, so <code>11.4</code> matches <code>11.4.0</code> and <code>11.4.1</code>.</p></td>
  </tr>
  </tbody>
</table>

In addition to the required capabilities for device matching, you can also specify any of the following optional capabilities to ensure your tests run on a device that matches your ideal environment.

*  [`tabletOnly`](/dev/test-configuration-options/#tabletonly)
*  [`phoneOnly`](/dev/test-configuration-options/#phoneonly)
*  [`privateDevicesOnly`](/dev/test-configuration-options/#privatedevicesonly)
*  [`publicDevicesOnly`](/dev/test-configuration-options/#publicdevicesonly)
*  [`carrierConnectivityOnly`](/dev/test-configuration-options/#carrierconnectivityonly)
*  [`cacheId`](/dev/test-configuration-options/#cacheid)
*  [`noReset`](/dev/test-configuration-options/#noreset)
*  [`recordDeviceVitals`](/dev/test-configuration-options/#recorddevicevitals)
*  [`crosswalkApplication`](/dev/test-configuration-options/#crosswalkapplication)
*  [`autoGrantPermissions`](/dev/test-configuration-options/#autograntpermissions)
*  [`enableAnimations`](/dev/test-configuration-options/#enableanimations)


### Using `cacheId` and `noReset`

By default, every time you complete a test session, the real device cloud uninstalls your app, performs device cleaning, and de-allocates the device. If you're running multiple tests on the same device, this is inconvenient and inefficient:

* You must to wait for the cleaning process to complete between every test.
* You lose time in your testing while your app gets reinstalled to the same device each time.
* There is a small chance that the device could get allocated to another tester before your next test picks it up.

To optimize device availability, consistency, and efficiency for multiple tests, assign a `cacheId` to your tests, which keeps the device allocated to you for 10 seconds after each test completes and skips the allocation and device cleaning process if you immediately start another test. The application and its data will still be uninstalled and reinstalled for the next test, however.

```js
caps.setCapability("cacheId", "jnc0x1256");
```

To skip the uninstallation and reinstallation of your app from the device, you can set `noReset` to `true` in conjunction with using a `cacheId`. This setting adds efficiency, but may not be suitable for test setups that require the application's state to be reset between tests.

```js
caps.setCapability("noReset", "true");
```

When using `cacheId` the value must match for all tests slated to run on the cached device. In addition, the application and project ID must be the same for all tests, as must the values for the following capabilities:

* `deviceName`
* `platformName`
* `platformVersion`
* `tabletOnly`
* `phoneOnly`
* `privateDevicesOnly`
* `publicDevicesOnly`
* `automationName`
* `autoGrantPermissions`
* `appiumVersion`

### Setting the `automationName` for Android Apps

If you're testing a native mobile app against Android versions 4.0-4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you must set the capability `"automationName","selendroid"`.

These Android versions are only supported via Appium’s bundled version of Selendroid, which utilizes [Instrumentation](http://developer.android.com/reference/android/app/Instrumentation.html). Later versions of Android are supported via Appium’s own UiAutomator library.


## Example Configuration Code Snippets

### iOS and Android Project Configuration

Appium capabilities for an iPhone project using iOS version 12.2:

<Tabs
  groupId="lang-ex"
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'node.js', value: 'node.js'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="Java">

```java
DesiredCapabilities caps = DesiredCapabilities();
    caps.setCapability("username", "SAUCE_USERNAME");
    caps.setCapability("accessKey", "SAUCE_ACCESS_KEY");
    caps.setCapability("deviceName","iPhone .*");
    caps.setCapability("orientation", "portrait");
    caps.setCapability("platformVersion","12.2");
    caps.setCapability("platformName", "iOS");
    caps.setCapability("browserName", "");
    caps.setCapability("app", "storage:filename=<file-name>");
```

</TabItem>
<TabItem value="Python">

```py
caps = {}
caps['username'] = "SAUCE_USERNAME"
caps['accessKey'] = "SAUCE_ACCESS_KEY"
caps['browserName'] = ""
caps['deviceName'] = "iPhone .*"
caps['orientation'] = "portrait"
caps['platformVersion'] = "12.2"
caps['platformName'] = "iOS"
caps['app'] = "storage:filename=<file-name>"
```

</TabItem>
<TabItem value="node.js">

```js
caps = {};
caps['username'] = 'SAUCE_USERNAME';
caps['accessKey'] = 'SAUCE_ACCESS_KEY';
caps['browserName'] = '';
caps['deviceName'] = 'iPhone .*';
caps['orientation'] = 'portrait';
caps['platformVersion'] = '12.2';
caps['platformName'] = 'iOS';
caps['app'] = 'storage:filename=<file-name>';
```

</TabItem>
<TabItem value="Ruby">

```rb
caps = Selenium::WebDriver::Remote::Capabilities()
caps['username'] = 'SAUCE_USERNAME'
caps['accessKey'] = 'SAUCE_ACCESS_KEY'
caps['deviceName'] = 'iPhone .*'
caps['orientation'] = 'portrait'
caps['platformVersion'] = '12.2'
caps['platformName'] = 'iOS'
caps['browserName'] = ''
caps['app'] = 'storage:filename=<file-name>'
```

</TabItem>
<TabItem value="C#">

```csharp
DesiredCapabilities caps = new DesiredCapabilities();
    caps.SetCapability("username", "SAUCE_USERNAME");
    caps.SetCapability("accessKey", "SAUCE_ACCESS_KEY");
    caps.SetCapability("deviceName", "iPhone .*");
    caps.SetCapability("orientation", "portrait");
    caps.SetCapability("platformVersion", "12.2");
    caps.SetCapability("platformName", "iOS");
    caps.SetCapability("browserName", "");
    caps.SetCapability("app", "storage:filename=<file-name>");
```

</TabItem>
</Tabs>
<br/>

Appium capabilities for Samsung Galaxy device using Android version 8.1:

<Tabs
  groupId="lang-ex"
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'node.js', value: 'node.js'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="Java">

```java
DesiredCapabilities caps = DesiredCapabilities();
    caps.setCapability("username", "SAUCE_USERNAME");
    caps.setCapability("accessKey", "SAUCE_ACCESS_KEY");
    caps.setCapability("deviceName","Samsung.*Galaxy.*");
    caps.setCapability("orientation", "portrait");
    caps.setCapability("browserName", "");
    caps.setCapability("platformVersion","8.1");
    caps.setCapability("platformName","Android");
    caps.setCapability("app", "storage:filename=<file-name>");
```

</TabItem>
<TabItem value="Python">

```py
caps = {}
caps['username'] = "SAUCE_USERNAME"
caps['accessKey'] = "SAUCE_ACCESS_KEY"
caps['deviceName'] = "Samsung.*Galaxy.*"
caps['orientation'] = "portrait"
caps['platformVersion'] = "8.1"
caps['platformName'] = "Android"
caps['app'] = "storage:filename=<file-name>"
```

</TabItem>
<TabItem value="node.js">

```js
caps = {};
caps['username'] = 'SAUCE_USERNAME';
caps['accessKey'] = 'SAUCE_ACCESS_KEY';
caps['deviceName'] = 'Samsung.*Galaxy.*';
caps['orientation'] = 'portrait';
caps['browserName'] = '';
caps['platformVersion'] = '8.1';
caps['platformName'] = 'Android';
caps['app'] = 'storage:filename=<file-name>';
```

</TabItem>
<TabItem value="Ruby">

```rb
caps = Selenium::WebDriver::Remote::Capabilities()
caps['username'] = 'SAUCE_USERNAME'
caps['accessKey'] = 'SAUCE_ACCESS_KEY'
caps['deviceName'] = 'Samsung.*Galaxy.*'
caps['orientation'] = 'portrait'
caps['browserName'] = ''
caps['platformVersion'] = '8.1'
caps['platformName'] = 'Android'
caps['app'] = 'storage:filename=<file-name>'
```

</TabItem>
<TabItem value="C#">

```csharp
DesiredCapabilities caps = new DesiredCapabilities();
    caps.SetCapability("username", "SAUCE_USERNAME");
    caps.SetCapability("accessKey", "SAUCE_ACCESS_KEY");
    caps.SetCapability("deviceName", "Samsung.*Galaxy.*");
    caps.SetCapability("orientation", "portrait");
    caps.SetCapability("browserName", "");
    caps.SetCapability("platformVersion", "8.1");
    caps.SetCapability("platformName", "Android");
    caps.SetCapability("app", "storage:filename=<file-name>");
```

</TabItem>
</Tabs>


### Native vs. Hybrid Apps

**iPhone 6 Real Device**

```java
{
deviceName:'iPhone 6 Device',
platformName:'iOS',
platformVersion:'8.4',
app:'storage:filename=SampleIOSApp.ipa',
"appium-version":"1.4.16"
}
```

**Samsung Galaxy S5 Real Device**

```java
{
deviceName:'Samsung Galaxy S5 Device',
platformVersion:'4.4',
platformName:'Android',
"appActivity": ".ContactManager",
"appPackage": "com.example.android.contactmanager",
app:"http://saucelabs.com/example_files/ContactManager.apk",
"appium-version":"1.4.16"
}
```

**Samsung Galaxy S4**

```java
{
deviceName:'Samsung Galaxy S4 Device',
platformVersion:'4.4',
platformName:'Android',
"appActivity": ".ContactManager",
"appPackage": "com.example.android.contactmanager",
app:"http://saucelabs.com/example_files/ContactManager.apk",
"appium-version":"1.4.16"
}
```


## Additional Test Configuration Options

Once you're up and running with your real device tests, check out our [Best Practices](https://community.saucelabs.com/search?q=best+practice&search_type=tag;) for making the most of your testing. Some possible configurations include:

* [Implement timeouts to control text execution times](/dev/test-configuration-options#timeouts)
* [Add test annotations](/basics/test-config-annotation/test-annotation)
* [Setting test status to pass or fail](/test-results/test-status)
* [Use Build IDs and tags to differentiate and identify test runs](/basics/test-config-annotation/test-annotation)
