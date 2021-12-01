---
id: real-devices
title: Appium Testing with Real Devices
sidebar_label: Real Devices
description: Run your automated Appium tests on Sauce Labs real devices.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs provides thousands of real mobile devices for nearly every phone and tablet model and applicable OS version. You can run your Appium tests on these devices through the Sauce Labs Real Device Cloud (RDC) to ensure your app behaves accurately and consistently across different devices in the real world. Sauce Labs offers a massive pool of public devices available for all customers, as well as a [private option](/mobile-apps/supported-devices/#private-device-cloud) in which customers can create a selection of devices for use by only their organization.

Appium automated real device testing supports tests designed to run against a web application in a mobile browser or a native app on a mobile device.

See [When to Test on Real Devices](https://docs.saucelabs.com/mobile-apps/supported-devices/#when-to-test-on-real-devices) for deails about real device testing use cases, benefits, and system requirements.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* An Appium installation (See [Using Appium](/mobile-apps/automated-testing/appium))
* A mobile app file (.ipa for iOS, .apk for Android) If you don't have one, consider using our Demo Apps:
     * [React Native Demo App](https://github.com/saucelabs/my-demo-app-rn/releases)
     * [iOS Demo App](https://github.com/saucelabs/my-demo-app-ios/releases)
     * [Android Demo App](https://github.com/saucelabs/my-demo-app-android/releases)
* An Appium mobile test script


## Installing Your Mobile App on Real Devices

If your Appium tests are intended to test a native mobile application on real devices, the app file must be available to Sauce Labs so it can be installed on the devices selected for testing. Sauce Labs provides a variety of methods for doing this, including:

* Upload your app to Sauce Application Storage using the [Sauce Labs UI](/mobile-apps/app-storage/#uploading-apps-via-ui) or [REST API](/mobile-apps/app-storage/#uploading-apps-via-rest-api)
* Install your app to a real device from a remote location [How?](/mobile-apps/app-storage/#installing-apps-from-a-remote-location)

The following application file types are supported for real device tests:

* \*.apk or \*.aab for Android app files
* \*.ipa for iOS app files (See [Create .ipa Files for Appium](/mobile-apps/automated-testing/ipa-files/#real-devices))

## Using the W3C WebDriver Specification

Sauce Labs encourages adoption of the W3C WebDriver protocol, but supports both JSON Wire Protocol (JWP) or W3C in all currently supported Appium 1.X versions (Appium 2.0 will deprecate support for JWP).

Since W3C and JWP use different formats for specifying your test capabilities, it is important to make sure you configure your tests accurately so your intended protocol is followed and your settings are applied correctly.

### How Sauce Labs Determines Your Protocol

When Sauce Labs executes your test configuration, it looks for the presence of certain indicators in the session creation request to determine whether it should apply the JWP or W3C protocol. The following table outlines how Sauce Labs evaluates your creation request.

|Indicator|Determination|
|:---|:---|
|`sauce:options` node is present within the capabilities node.|W3C|
|`desiredCapabilities` node is absent.|W3C|
|`desiredCapabilities` node is present AND `sauce:options` node is absent.|JWP|

### Examples of JWP and W3C Configurations

The main difference between JWP and W3C is the format required to specify your test capabilities. In JWP, all capabilities are defined within the `desiredCapabilities` node, while in W3C, all capabilities are defined under the `capabilities` node within the `firstMatch` property. Each capability uses a namespace to indicate one of the following three categorizations:

* WebDriver standard capabilities have no namespace
* Appium specific capabilities require the prefix `appium:`
* Sauce Labs custom capabilities are set within the `sauce:options` node

The following examples illustrate this difference in the respective specifications.

<Tabs
  groupId="protocol"
  defaultValue="jwp"
  values={[
    {label: 'JWP', value: 'jwp'},
    {label: 'W3C', value: 'w3c'},
  ]}>

<TabItem value="jwp">

```
"desiredCapabilities": {
    "platformName" : "android";
    "app" : "./apps/mda-1.0.6-8.apk";
    “deviceName" : "Samsung.*Galaxy.*”;
    “orientation” : “portrait”;
    “platformVersion" : "8.1";
    "appiumVersion" : "1.21.0";
 }
```

</TabItem>
<TabItem value="w3c">

```
"capabilities": {
    "firstMatch": [
      {
        "platformName" : "android",                    #standard capability
        "appium:app" : "./apps/mda-1.0.6-8.apk";       #Appium capabilities
        “appium:deviceName" : "Samsung.*Galaxy.*”;
        “appium:orientation” : “portrait”;
        “appium:platformVersion" : "8.1";
        "sauce:options" : {                           #Sauce custom capabilities
           "appiumVersion" : "1.21.0";
           "sessionCreationRetry" : "2",
           "sessionCreationTimeout" : "300000",
           "name" : "MobileWebsiteTest (w3c)"
        }
      }
    ]
}
```

</TabItem>
</Tabs>

:::note
You can avoid having to add the `appium:` prefix to Appium specific capabilities by upgrading your [Appium client library](http://appium.io/docs/en/about-appium/appium-clients/) to a version that automatically applies the prefix or installing the [relaxed-caps plugin](https://github.com/appium/appium-plugins/tree/master/packages/relaxed-caps), but Sauce Labs advises including the prefix to avoid any confusion in the future.
:::


## Configuring Appium Tests for Real Devices

Our [Test Configuration Options](/dev/test-configuration-options) reference documentation provides a complete index of required and optional parameters for Appium. Be aware that not all of the Appium capabilities list are supported for both virtual and real device tests and that some capabilities have driver-specific options for [Android](https://github.com/appium/appium-uiautomator2-driver) and [iOS](https://github.com/appium/appium-xcuitest-driver) client libraries.

The following sections provide context and instructions for test configurations that are essential when using Appium to run automated tests on Sauce Labs **real devices**.

### Specifying the `platformName`

You can use real devices to test both native apps and web apps in a mobile browser. The `platformName` capability is the only test configuration that is mandatory regardless of which type of mobile test you are writing, as it specifies whether the test is for `iOS` or `Android`.


### Specifying Your `app`

For native app tests, the `app` capability is the only other required configuration. If it is omitted, Sauce Labs infers the test is written for a mobile browser and automatically sets a default `browserName` based on the specified `platformName`.

For native app tests on real devices, you must provide a location from which your mobile app can be accessed in the `app` capability so your app can be installed on the test devices. You can specify a Sauce Labs Application Storage ID or filename, or a remote location to which Sauce Labs has access. See [Application Storage](/mobile-apps/app-storage) for details.

```js title=App Storage Example
"appium:app","storage:filename=mapp.ipa";
```

```js title=Remote App Example
"appium:app","https://github.com/test-apps/ios-app.ipa";
```

### Excluding the `browserName`

When testing a native mobile app, no browser is accessed, so if you are re-using the capabilities from your mobile or desktop browser tests, omit the `browserName` capability. This is an important exclusion because if values are set for _both_ `app` and `browserName`, Sauce Labs defaults to the `browserName`. Similarly, if neither capability is specified, Sauce Labs automatically populates the `browserName` value that matches the `platformName` (Safari for iOS and Chrome for Android).


### Selecting Your Test Device

Testing on real devices requires you to specify a device on which you plan to test your app. You can do this by specifying either:

* A specific device from a Sauce Labs device pool (public or private) by its ID (static allocation)
* A set of device attributes to use as criteria for selecting any available matching device (dynamic allocation)

#### Static Device Allocation

_Static Allocation_ allows you to specify a known device by its unique ID. This can be beneficial if, for example, you are testing features only available on a very specific device setup. However, what you gain in precision may be offset by the time it takes for a specific device to become available, especially if your tests do not require that level of precision. If you do require a specific device, you should always configure the device's availability before launching your tests.

```js
"appium:deviceName" : "HTC_One_M8_real");
```

You can obtain a list of available devices, including their IDs, using the [Get Devices](https://docs.saucelabs.com/dev/api/rdc/#get-devices) API request.

Alternatively, you can find a device's ID in the Sauce Labs application:

1. Log into Sauce Labs.
1. Navigate to **Live** >> **Mobile App**.
1. Choose your mobile app (or an applicable demo app) from the list and click **Choose Device** to bring up the pool of devices for your organization.
1. Hover over the device you want a click **Details** to bring up the identification information for that device.


#### Dynamic Device Allocation

_Dynamic Allocation_ allows you to specify the device attributes that are important to you and then run your test against the first available device from the pool that matches your specifications, giving you greater flexibility and, likely, a faster test execution time, particularly if you are running tests in parallel.

Dynamic allocation is advised, in particular, for all automated mobile application testing in CI/CD environments.

To enable dynamic device allocation, you should specify the `deviceName` and `platformName`, and `platformVersion` capabilities at a minimum. The following table provides information about accepted values.

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
    <p>Any iPhone: <code>"appium:deviceName", "iPhone.\*", "iPhone .\*"</code></p>
    <p>Any device with the word "nexus" in its display name: <code>"appium:deviceName", ".\*nexus.\*"</code></p>
    <p>Either <i>iPhone 7</i> or <i>iPhone 6</i>: <code>"appium:deviceName", "iPhone [67]"</code> or <code>"iPhone [6-7]"</code></p>
    <p>Either <i>iPhone 7S</i> or <i>iPhone 6S</i>: <code>"appium:deviceName", "iPhone [67]S"</code> or <code>"iPhone [6-7]S"</code></p></td>
  </tr>
  <tr>
   <td><a href="/dev/test-configuration-options#platformname"><code>platformName</code></a></td>
   <td>Specify the mobile operating system to use in your tests (i.e., <code>android</code> or <code>ios</code>.</td>
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
"sauce:options" : {
  "cacheId" : "jnc0x1256";
}
```

To skip the uninstallation and reinstallation of your app from the device, you can set `noReset` to `true` in conjunction with using a `cacheId`. This setting adds efficiency, but may not be suitable for test setups that require the application's state to be reset between tests.

```js
"sauce:options" : {
  "noReset" : "true";
}
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
