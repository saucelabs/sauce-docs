---
id: virtual-devices
title: Appium Testing with Emulators and Simulators
sidebar_label: Virtual Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With Sauce Labs, you can run automated Appium tests for your native and hybrid mobile apps against many virtual OS and platform combinations with [Android emulators](https://developer.android.com/studio/run/emulator) and [iOS simulators](https://developer.apple.com/documentation/xcode/running_your_app_in_the_simulator_or_on_a_device).


## What You'll Need

* A Sauce Labs Account.
* The native or hybrid mobile app you want to test. If you don't have one on hand and want to test this functionality, try our [Sauce Labs demo mobile app](https://github.com/saucelabs/sample-app-mobile).
* Ensure that your system fulfills the project support and requirements prior to uploading your apps or leveraging device emulators and simulators. Review the [Automated Mobile App Testing Admin Guide](/mobile-apps/automated-testing/supported-devices) for further details.

## Upload Your App to Emulators and Simulators

1. To begin, you'll need to upload your app to a publicly available source. Accepted file types are *.zip iOS package files for simulators and *.apk Android package files for emulators. There are three ways you can upload your app for automated testing:

   * Sauce App Storage
   * Install from a Remote Location
   * Legacy (TestObject) Sauce Storage

  For step-by-step instructions on uploading your app, see [Application Storage](mobile-apps/app-storage.md).

## Set Your Test Credentials

2. After you've uploaded your app, open a new test script. Add your Sauce Labs credentials (`username` and `accessKey`). We also recommend [exporting your Sauce Labs credentials to environment variables](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921).
  ```bash title="macOS/Linux Example"
  export SAUCE_USERNAME=********
  export SAUCE_ACCESS_KEY=*******
  ```

## Configuring Appium Test for Emulators and Simulators

3. The next step is to configure your app using Appium capabilities compatible with Sauce Labs emulators and simulators. Test configuration will depend on your testing use case.

  Authentication of the Sauce Labs platform, as well as advanced [Test Configuration Options](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492), requires the use of the W3C WebDriver-compliant [`sauce:options`](https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414463) capability. Here are some tips for configuring Appium for your tests:

### Set Your `appiumVersion`

4. Set the `appiumVersion` in your test script. While not required, if you omit this, your test will run with our default Appium version.  

  We recommend specifying one of the newer Appium versions, which will provide a more extended API and fixes to known bugs.

### Check the Appium Version for Your Test

5. Check the Appium version for your test:
  * Log in to Sauce Labs.
  * Find and select the test that you ran using Appium to view the **Test Details** page.
  * Click the **Metadata** tab.
  * Look for the **Logs** row and select **Appium Log**. The first line should indicate the Appium version. For example:
    ```bash
    2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.9.0.
    ```

### Set Browser Name

6. If you're testing a native mobile app, set the value for `browserName` as an empty string, for example:
  ```java
  caps.setCapability("browserName", "");
  ```

### Set the Location of Your Mobile App

7. If the app you want to test has been uploaded to a location other than Sauce Storage, you'll need to specify this location for `app`, and make sure that this location is accessible to Sauce Labs browsers. For example:
  ```java
  caps.setCapability("app","sauce-storage:mapp.zip");
  ```

### Set `automationName` for Android Apps

8. If you're testing a native mobile app against Android versions 4.0 - 4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you need to set the capability `"automationName","selendroid"`.

These Android versions are only supported via Appium’s bundled version of Selendroid, which utilizes [Instrumentation](http://developer.android.com/reference/android/app/Instrumentation.html). Later versions of Android are supported via Appium’s own UIAutomator library.


## Set Appium Capabilities for Emulators and Simulators

9. Before you running your test(s), you'll need to configure your Appium capabilities to communicate with the Sauce Labs virtual device cloud. Described below are required and optional Appium test capabilities and example scripts.

:::caution For Example Purposes Only

The code in these scripts is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify these scripts. Issues regarding these scripts should be submitted through [GitHub](https://github.com/saucelabs-training). These scripts are not maintained by Sauce Labs Support.
:::


## iOS Code Snippets

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

## Android Code Snippets

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

## Native Apps vs. Hybrid Apps Configuration

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
caps.setCapability("appiumVersion", "1.9.0");
caps.setCapability("deviceName","iPhone 8");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","14.3");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "");
caps.setCapability("app","sauce-storage:mapp.zip");
```

iPad Native App
```java
DesiredCapabilities caps = DesiredCapabilities.iphone();
  caps.setCapability("appiumVersion", "1.9.0");
  caps.setCapability("deviceName","iPad Retina");
  caps.setCapability("deviceOrientation", "portrait");
  caps.setCapability("platformVersion","14.3");
  caps.setCapability("platformName", "iOS");
  caps.setCapability("browserName", "");
  caps.setCapability("app","sauce-storage:myapp.zip");
```

iPhone Hybrid App,
```java
DesiredCapabilities caps = DesiredCapabilities.iphone();
    caps.setCapability("appiumVersion", "1.9.0");
    caps.setCapability("deviceName","iPhone Retina (4-inch 64-bit)");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("platformVersion","7.1");
    caps.setCapability("platformName", "iOS");
    caps.setCapability("browserName", "");
    caps.setCapability("app","sauce-storage:myapp.zip");
```

</TabItem>
<TabItem value="Android">

Android Native App, Android version 4.3.

```java
DesiredCapabilities caps = DesiredCapabilities.android();
    caps.setCapability("appiumVersion", "1.9.0");
    caps.setCapability("deviceName","Samsung Galaxy S4 Emulator");
    caps.setCapability("deviceOrientation", "portrait");  
    caps.setCapability("browserName", "");
    caps.setCapability("platformVersion","4.3");
    caps.setCapability("platformName","Android");
    caps.setCapability("app","sauce-storage:myapp.zip");
```

Android Hybrid App, Android version 4.1.

```java
DesiredCapabilities caps = DesiredCapabilities.android();
    caps.setCapability("appiumVersion", "1.9.0");
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

These Appium scripts for iOS and Android mobile app tests on emulators and simulators can help streamline your testing process. Below are links to the [Sauce Labs Training on GitHub](https://github.com/saucelabs-training) repository, where you'll find demo scripts for a variety of use cases to get you started with automated Appium testing:

* [Java](https://github.com/saucelabs-training/demo-java/tree/master/appium-examples)
* [JavaScript](https://github.com/saucelabs-training/demo-js)
* [Python](https://github.com/saucelabs-training/demo-python)
* [Ruby](https://github.com/saucelabs-training/demo-ruby/tree/master/appium-examples)
* [C#](https://github.com/saucelabs-training/demo-csharp)

## Additional Resources

Once you've been able to get a test running on Sauce, check out our best practices and available modifications you can make to your tests:

* [Best Practices for Running Tests](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365647)
* [Implement timeouts to control text execution times](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492#TestConfigurationOptions-Timeouts)
*  [Annotating Tests with the Sauce Labs REST API](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365631)
* [Annotating Tests with Selenium's JavaScript Executor](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365700)
* [Setting Test Status to Pass or Fail](https://wiki.saucelabs.com/pages/viewpage.action?pageId=63472006)
* [Using Build IDs and tags to differentiate and identify test runs](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946)
* [Create your own test script examples using our Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator)
* [Browse our full suite of test configuration options and advanced configurations.](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492)
