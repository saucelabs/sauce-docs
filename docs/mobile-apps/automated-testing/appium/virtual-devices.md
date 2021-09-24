---
id: virtual-devices
title: Appium Testing with Emulators and Simulators
sidebar_label: Virtual Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With Sauce Labs, you can run automated Appium tests for your native and hybrid mobile apps against many virtual
OS and platform combinations with [Android emulators](https://developer.android.com/studio/run/emulator) and
[iOS simulators](https://developer.apple.com/documentation/xcode/running_your_app_in_the_simulator_or_on_a_device).


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* The native or hybrid mobile app you want to test. If you don't have one on hand and would like to test this functionality, consider using our [Sauce Labs demo mobile app](https://github.com/saucelabs/sample-app-mobile).
* Ensure that your system fulfills the project support and requirements prior to uploading your apps or leveraging device emulators and simulators. Review the [Automated Mobile App Testing Admin Guide](/mobile-apps/supported-devices) for further details.

## Upload Your App to Emulators and Simulators

To begin, upload your app to a publicly available source. Accepted file types are \*.zip iOS package files for simulators and \*.apk Android package files for emulators. There are two ways you can upload your app for automated testing:

* Upload a local file using the [App Storage REST API](/dev/api/storage/#upload-file-to-app-storage)
* Provide a URL to install from a [Remote Location](/mobile-apps/automated-testing/appium/real-devices/#uploading-mobile-apps-from-a-remote-location)

:::note
`\*.aab` files are not yet supported for Android emulator tests.
:::


## Set Your Test Credentials

After you've uploaded your app, open a new test script. Add your Sauce Labs credentials (`username` and `accessKey`).

:::warning
Credentials should not be stored in as text in your code where they might be stored in version control system.
For every machine that executes the code,
[set your Sauce Labs credentials with environment variables](/basics/environment-variables).
:::

## Set Test Configurations

There are numerous [Test Configuration Options](/dev/test-configuration-options) that can be used to generate
the session you want and determine the behavior of the tests.

Here are some tips for configuring your Appium tests:

### Set the Location of Your Mobile App

Set the value of `app` to the location for where it can be accessed. This can be a full URL, or it can use
[Sauce Labs Application Storage](https://docs.saucelabs.com/mobile-apps/app-storage/index.html#using-application-storage-with-automated-test-builds)

:::note
Sauce Labs only allows you to set either `browserName` or `app`. If you have a value set for `browserName` Sauce will
treat it as a mobile-web test instead of a native application test, so make sure this value is empty or removed.
:::

Example of using Sauce Labs Storage:
```java reference title="Sauce Labs Storage"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/appium-examples/src/test/java/com/realdevice/image_injection/ImageInjectionIosTest.java#L63-L65
```

### Set the `appiumVersion`

We recommend specifying one of the newer Appium versions, which will provide a more extended API and fixes to known bugs.
If this value is not set, an older default value may be used instead.

### Check the Appium Version for Your Test

  * Log in to Sauce Labs.
  * Find and select the test that you ran using Appium to view the **Test Details** page.
  * Click the **Metadata** tab.
  * Look for the **Logs** row and select **Appium Log**. The first line should indicate the Appium version. For example:
    ```bash
    2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.9.0.
    ```

## iOS Code Examples

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

## Android Code Examples

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

## Native Apps vs. Hybrid Apps

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
caps.setCapability("app","storage:filename=mapp.zip");
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
  caps.setCapability("app","storage:filename=myapp.zip");
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
    caps.setCapability("app","storage:filename=myapp.zip");
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
    caps.setCapability("app","storage:filename=myapp.zip");
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
    caps.setCapability("app","storage:filename=myapp.zip");
    caps.setCapability("automationName","Selendroid");
```

</TabItem>
</Tabs>

## Example Appium Test Scripts

These Appium scripts for iOS and Android mobile app tests on emulators and simulators can help streamline your testing
process. Below are links to the [Sauce Labs Training on GitHub](https://github.com/saucelabs-training) repository,
where you'll find demo scripts for a variety of use cases to get you started with automated Appium testing:

* [Java](https://github.com/saucelabs-training/demo-java/blob/docs-1.0/appium-examples)
* [JavaScript](https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/appium-app/examples)
* [Python](https://github.com/saucelabs-training/demo-python/blob/docs-1.0/best_practice/mobile_native)
* [Ruby](https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/appium-examples)
* [C#](https://github.com/saucelabs-training/demo-csharp)

::note
For Android tests, if your emulator session fails to start, make sure the app you are targeting is an `\*.apk`, not an `\*.aab`, as the latter is not yet supported in emulator tests.
:::

## Additional Resources

Once you've been able to get a test running on Sauce, check out our best practices and available modifications you can make to your tests:

* [Best Practices for Running Tests](https://community.saucelabs.com/search?q=best+practice&search_type=tag).
* [Implement timeouts to control text execution times](https://docs.saucelabs.com/dev/test-configuration-options#virtual-device-capabilities-sauce-specific--optional).
* [Annotating Tests with the Sauce Labs REST API](https://docs.saucelabs.com/basics/test-config-annotation/test-annotation#sauce-labs-rest-api).
* [Annotating Tests with Selenium's JavaScript Executor](https://docs.saucelabs.com/basics/test-config-annotation/test-annotation#selenium-javascript-executor).
* [Setting Test Status to Pass or Fail](/test-results/test-status).
* [Using Build IDs and tags to differentiate and identify test runs](/basics/test-config-annotation/test-annotation).
* [Create your own test script examples using our Platform Configurator](https://saucelabs.com/platform/platform-configurator#/).
* [Browse our full suite of test configuration options and advanced configurations](/dev/test-configuration-options).

## Training
Lean how to run Appium Android tests on an Emulator in the [Automation Quickstart Course](https://training.saucelabs.com/codelabs/Module2-Quickstart/index.html?index=..%2F..quickstart#0).
