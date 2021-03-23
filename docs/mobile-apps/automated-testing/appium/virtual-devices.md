---
id: virtual-devices
title: Appium Testing with Emulators and Simulators
sidebar_label: Virtual Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With Sauce Labs, you can run automated Appium tests against many virtual OS and platform combinations with [Android emulators](https://developer.android.com/studio/run/emulator) and [iOS simulators](https://developer.apple.com/documentation/xcode/running_your_app_in_the_simulator_or_on_a_device).


## What You'll Need

*   A Sauce Labs Account.
*   The mobile app you want to test. If you don't have one, you can use our [Sauce Labs demo mobile app](https://github.com/saucelabs/sample-app-mobile).
*   Ensure that your system fulfills the project support and requirements prior to uploading your apps or leveraging device emulators and simulators. Review the[ Automated Mobile App Testing Admin Guide](https://wiki.saucelabs.com/display/DOCS/Mobile+Application+Testing+Admin+Guide#mobile-test-admin-emusim) for further details.


## Uploading Your App to Emulators and Simulators

Before running your automated test, you will need to upload your app – an Android package file (`.apk`) for emulators or an iOS package file (`.zip)` for simulators – to a publicly available source. There are three ways you can upload your app for automated testing:

*   Sauce App Storage
*   Install from a Remote Location
*   Legacy Sauce Storage

For detailed instructions, see [Application Storage](mobile-apps/app-storage.md).


## Setting Your Test Credentials

After you've uploaded your app, you must set your Sauce Labs credentials in your test script and configure your app. How you configure your app depends on your testing use case. Authentication of the Sauce Labs platform, as well as advanced[ Test Configuration Options](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492), requires the use of the W3C WebDriver-compliant <code>[sauce:options](https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414463)</code> capability.

We also recommend [exporting your Sauce Labs credentials to environment variables](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921).


## Configuring Appium for Emulator and Simulator Tests

Here are some tips for configuring Appium for your tests:

### Setting appiumVersion

If you omit the `appiumVersion` in your test configuration, your test will be running with our default Appium version. We recommend that you specify one of the newer Appium versions that provides a more extended API and fixes to known bugs.


### Checking the Appium Version for Your Test

1. Log in to Sauce Labs.
2. Find and select the test that you ran using Appium to view the **Test Details** page.
3. Click the **Metadata** tab.
4. Look for the **Logs** row and select **Appium Log**. \
The first line should indicate the Appium version. For example, `2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.3.6.`


### Setting Browser Name

When testing a native mobile app, the value for `browserName` is an empty string, as in `caps.setCapability("browserName", "");`


### Setting the Location of Your Mobile App

If the app you want to test has been uploaded to a location other than Sauce Storage, you need to specify this location for `app`, and make sure that this location is accessible to Sauce Labs browsers. For example, `caps.setCapability("app","sauce-storage:mapp.zip");`


### Setting automationName for Android Apps

If you're testing a native mobile app against Android versions 4.0 - 4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you need to set the capability `"automationName","selendroid"`. These Android versions are only supported via Appium’s bundled version of Selendroid, which utilizes [Instrumentation](http://developer.android.com/reference/android/app/Instrumentation.html). Later versions of Android are supported via Appium’s own UIAutomator library.


## Setting Appium Capabilities for Emulators and Simulators

Before you run your native/hybrid mobile app tests, you will need to configure the Appium capabilities in order to communicate with Sauce Labs virtual devices (emulators and simulators). Described below are required and optional Appium test capabilities and example scripts.


:::caution For Example Purposes Only

The code in these scripts is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify these scripts. Issues regarding these scripts should be submitted through [GitHub](https://github.com/saucelabs-training). These scripts are not maintained by Sauce Labs Support.
:::


### iOS Project

Below are examples of an iPhone 8 project using iOS version 12.2:

<Tabs
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Node.js', value: 'Node.js'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="Java">

```java
DesiredCapabilities caps = DesiredCapabilities.iphone();
    caps.setCapability("appiumVersion", "1.13.0");
    caps.setCapability("deviceName","iPhone 8 Simulator");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("platformVersion","12.2");
    caps.setCapability("platformName", "iOS");
    caps.setCapability("browserName", "");
    caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip");
```

</TabItem>
<TabItem value="Python">

```py
caps['browserName'] = ""
caps['appiumVersion'] = "1.13.0"
caps['deviceName'] = "iPhone 8 Simulator"
caps['deviceOrientation'] = "portrait"
caps['platformVersion'] = "12.2"
caps['platformName'] = "iOS"
caps['app'] = "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip"
```

</TabItem>
<TabItem value="Node.js">

```js
caps['browserName'] = '';
caps['appiumVersion'] = '1.13.0';
caps['deviceName'] = 'iPhone 8 Simulator';
caps['deviceOrientation'] = 'portrait';
caps['platformVersion'] = '12.2';
caps['platformName'] = 'iOS';
caps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip';
```

</TabItem>
<TabItem value="Ruby">

```rb
caps = Selenium::WebDriver::Remote::Capabilities.iphone()
caps['appiumVersion'] = '1.13.0'
caps['deviceName'] = 'iPhone 8 Simulator'
caps['deviceOrientation'] = 'portrait'
caps['platformVersion'] = '12.2'
caps['platformName'] = 'iOS'
caps['browserName'] = ''
caps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip'
```


</TabItem>
<TabItem value="C#">

```Csharp
DesiredCapabilities caps = new DesiredCapabilities();
    caps.SetCapability("appiumVersion", "1.13.0");
    caps.SetCapability("deviceName", "iPhone 8 Simulator");
    caps.SetCapability("deviceOrientation", "portrait");
    caps.SetCapability("platformVersion", "12.2");
    caps.SetCapability("platformName", "iOS");
    caps.SetCapability("browserName", "");
    caps.SetCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.1.0.zip");
```

</TabItem>
</Tabs>

### Android Project

Below are examples of an Samsung Galaxy S9 Plus project using Android version 8.1:

<Tabs
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Node.js', value: 'Node.js'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="Java">

```java
DesiredCapabilities caps = DesiredCapabilities.android();
    caps.setCapability("appiumVersion", "1.9.1");
    caps.setCapability("deviceName","Samsung Galaxy S9 Plus FHD GoogleAPI Emulator");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("browserName", "");
    caps.setCapability("platformVersion","8.1");
    caps.setCapability("platformName","Android");
    caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk");
```

</TabItem>
<TabItem value="Python">

```py
caps = {}
caps['appiumVersion'] = "1.9.1"
caps['deviceName'] = "Samsung Galaxy S9 Plus FHD GoogleAPI Emulator"
caps['deviceOrientation'] = "portrait"
caps['platformVersion'] = "8.1"
caps['platformName'] = "Android"
caps['app'] = "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk"
```

</TabItem>
<TabItem value="Node.js">

```js
caps = {};
caps['appiumVersion'] = '1.9.1';
caps['deviceName'] = 'Samsung Galaxy S9 Plus FHD GoogleAPI Emulator';
caps['deviceOrientation'] = 'portrait';
caps['browserName'] = '';
caps['platformVersion'] = '8.1';
caps['platformName'] = 'Android';
caps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk';
```

</TabItem>
<TabItem value="Ruby">

```rb
caps = Selenium::WebDriver::Remote::Capabilities.android()
caps['appiumVersion'] = '1.9.1'
caps['deviceName'] = 'Samsung Galaxy S9 Plus FHD GoogleAPI Emulator'
caps['deviceOrientation'] = 'portrait'
caps['browserName'] = ''
caps['platformVersion'] = '8.1'
caps['platformName'] = 'Android'
caps['app'] = 'https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk'
```

</TabItem>
<TabItem value="C#">

```Csharp
DesiredCapabilities caps = new DesiredCapabilities();
    caps.SetCapability("appiumVersion", "1.9.1");
    caps.SetCapability("deviceName", "Samsung Galaxy S9 Plus FHD GoogleAPI Emulator");
    caps.SetCapability("deviceOrientation", "portrait");
    caps.SetCapability("browserName", "");
    caps.SetCapability("platformVersion", "8.1");
    caps.SetCapability("platformName", "Android");
    caps.SetCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.2.0/Android.SauceLabs.Mobile.Sample.app.2.2.0.apk");
```

</TabItem>
</Tabs>

<br/>


## Configuring Native Apps vs. Hybrid Apps

<Tabs
  defaultValue="iOS"
  values={[
    {label: 'iOS', value: 'iOS'},
    {label: 'Android', value: 'Android'},
  ]}>

<TabItem value="iOS">

iPhone Native App
```java
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.4.16");
caps.setCapability("deviceName","iPhone 5");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","10.3");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "");
caps.setCapability("app","sauce-storage:mapp.zip");
```

iPad Native App
```java
DesiredCapabilities caps = DesiredCapabilities.iphone();
  caps.setCapability("appiumVersion", "1.4.16");
  caps.setCapability("deviceName","iPad Retina");
  caps.setCapability("deviceOrientation", "portrait");
  caps.setCapability("platformVersion","9.2");
  caps.setCapability("platformName", "iOS");
  caps.setCapability("browserName", "");
  aps.setCapability("app","sauce-storage:myapp.zip");
```

iPhone Hybrid App
```java
DesiredCapabilities caps = DesiredCapabilities.iphone();
    caps.setCapability("appiumVersion", "1.4.16");
    caps.setCapability("deviceName","iPhone Retina (4-inch 64-bit)");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("platformVersion","7.1");
    caps.setCapability("platformName", "iOS");
    caps.setCapability("browserName", "");
    caps.setCapability("app","sauce-storage:myapp.zip");
```

</TabItem>
<TabItem value="Android">

Android Native App, Android v. 4.3
```java
DesiredCapabilities caps = DesiredCapabilities.android();
    caps.setCapability("appiumVersion", "1.4.16");
    caps.setCapability("deviceName","Samsung Galaxy S4 Emulator");
    caps.setCapability("deviceOrientation", "portrait");  
    caps.setCapability("browserName", "");
    caps.setCapability("platformVersion","4.3");
    caps.setCapability("platformName","Android");
    caps.setCapability("app","sauce-storage:myapp.zip");
```

Android Hybrid App, Android v. 4.1
```java
DesiredCapabilities caps = DesiredCapabilities.android();
    caps.setCapability("appiumVersion", "1.4.16");
    caps.setCapability("deviceName","Android Emulator");
    caps.setCapability("deviceType","tablet");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("browserName", "");
    caps.setCapability("platformVersion","4.1");
    caps.setCapability("platformName","Android");
    caps.setCapability("app","sauce-storage:myapp.zip");
    caps.setCapability("automationName","Selendroid");
```

</TabItem>
</Tabs>


## Example Appium Test Scripts

These Appium scripts for iOS and Android mobile app tests on emulators and simulators can help streamline your testing process. See [Sauce Labs Training on GitHub](https://github.com/saucelabs-training) for a full repository of demo scripts to get you started with automated testing on Sauce Labs.

Visit the following repositories for Appium iOS and Android app example scripts:

*   [Java for iOS](https://github.com/saucelabs-training/demo-java/tree/master/appium-example/src/test/java/example/ios)
* [Java for Android](https://github.com/saucelabs-training/demo-java/tree/master/appium-example/src/test/java/example/android)
*   [JavaScript](https://github.com/saucelabs-training/demo-js/tree/master/webdriverio/appium-app/examples)
*   [Python](https://github.com/saucelabs-training/demo-python/tree/master/appium-examples)
*   [Ruby](https://github.com/saucelabs-training/demo-ruby/tree/master/appium-examples)
*   [C#](https://github.com/saucelabs-training/demo-csharp/tree/master/SauceExamples/AppiumLatestOnDotNetFramework)

## Additional Resources

Now that you've been able to get a test running on Sauce, check out our best practices and available modifications you can make to your tests:

* [Best Practices for Running Tests](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365647)
* [Implement timeouts to control text execution times](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492#TestConfigurationOptions-Timeouts)
*  [Annotating Tests with the Sauce Labs REST API](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365631)
* [Annotating Tests with Selenium's JavaScript Executor](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365700)
* [Setting Test Status to Pass or Fail](https://wiki.saucelabs.com/pages/viewpage.action?pageId=63472006)
* [Use Build IDs and tags to differentiate and identify test runs](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946)
* [Create your own test script examples using our Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator)
* [Browse our full suite of test configuration options and advanced configurations.](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492)
