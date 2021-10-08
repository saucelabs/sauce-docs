---
id: test-config
title: Test Configuration
sidebar_label: Test Configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

Before running a browser or device test with Sauce Labs, you need to write your test script to launch the platform/operating system/browser combination you want, and specify the location of the app for testing. You'll also want to configure other options, such as the path to your app.

Once your test is finished, you can annotate the job with a name, tags, and pass/fail status using the Sauce Labs REST API, or Selenium's JavaScript executor.

See [Test Configuration Options](/dev/test-configuration-options) for a list of valid test configuration options for tests run on Sauce Labs.

## Getting Ready to Test
Test configuration refers to setting the capabilities of your test within the test script itself. There are required capabilities for both Selenium and Appium tests, as well as an extensive set of optional capabilities (some of which are exclusive to Sauce Labs). You can use our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to create the required capabilities for your test scripts, or use one of our [sample test frameworks](https://github.com/saucelabs-training) to set up the capabilities for parallel testing across multiple platform/operating systems.

## Capabilities for Selenium and Appium Tests

You can configure the environment for your Appium and Selenium tests by specifying a set of capabilities. Our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) can set test capabilities for testing in the scripting language of your choice. [Test Configuration Options](/dev/test-configuration-options) provides a complete list of all Selenium, Appium, and Sauce Labs testing capabilities.

## Examples of Test Configuration Options for Website Tests
You can test websites using either Selenium or Appium. Selenium has better support for desktop devices, while Appium has better support for testing websites on mobile devices with native browsers. However, website testing against Android devices with Appium is only supported for Android versions 4.4 and higher.
All examples are for Java, but you can use our Platform Configurator to configure your tests in the language of your choice.

### Default Selenium Version
By default, Sauce Labs will use the following version of Selenium, depending on your selected combination of browser and operating system. While Selenium 3 is not yet fully implemented as a default version, it is supported for all Chrome and Firefox browsers on Mac and Windows platforms, for Safari 10+ on macOS 10.12 Sierra, and for Microsoft Edge and IE browsers version 10 and above. Currently Sauce Labs supports Selenium 3.4.0+ for Firefox and Safari and Selenium 3.5.0+ for Microsoft Edge and Chrome.

| Browser Name | Default Selenium Version |
|---|---|
| Microsoft Edge | 2.52.0 |
| Chrome | Latest Chromedriver |
| Firefox | Dev: 3.4.0<br/>Beta: 3.4.0<br/>53+: 3.4.0<br/>39+: 2.53.1 |
| Safari | 11.0: 3.4.0<br/>< 11.0: 2.48.0 |
| Internet Explorer | 2.53.1 |

You can set the Selenium version for your tests by using the seleniumVersion desired capability:

```
'seleniumVersion' = '3.8.1'
```

### Examples for Selenium Mobile and Desktop Browsers
With Selenium you can test against both desktop and mobile devices, though there are limitations with Android versions and devices.

#### PC/Windows/IE
```
DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
caps.setCapability("platform", "Windows 8.1");
caps.setCapability("version", "11.0");
```

#### PC/Linux/Chrome
```
DesiredCapabilities caps = DesiredCapabilities.chrome();
caps.setCapability("platform", "Linux");
caps.setCapability("version", "47.0");
```

#### Mac/OSX/Safari
```
DesiredCapabilities caps = DesiredCapabilities.safari();
caps.setCapability("platform", "OS X 10.9");
caps.setCapability("version", "7.0");
```

#### Android Emulator Phone/Android 5.1
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("platform", "Linux");
caps.setCapability("version", "5.1");
caps.setCapability("deviceName","Android Emulator");
caps.setCapability("deviceType","phone");
caps.setCapability("deviceOrientation", "portrait");
```

#### Samsung Galaxy S3 Emulator/Android 4.4
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("platform", "Linux");
caps.setCapability("version", "4.4");
caps.setCapability("deviceName","Samsung Galaxy S3 Emulator");
caps.setCapability("deviceOrientation", "portrait");
```

### Appium Mobile and Desktop Browser Test Configuration Examples
#### iPhone
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPhone 6");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","8.4");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "Safari");
```

#### iPad
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPad Retina");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","8.4");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "Safari");
```

#### Android Phone Emulator/Android 4.4
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","Android Emulator");
caps.setCapability("deviceType","phone");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("browserName", "Browser");
caps.setCapability("platformVersion", "4.4");
caps.setCapability("platformName","Android");
```

#### iPhone 6 Real Device
```
{
deviceName:'iPhone 6 Device',
platformName:'iOS',
platformVersion:'8.0',
browserName:'Safari',
"appium-version":"1.5.1"
}
```

#### Samsung Galaxy S5 Real Device
```
{
deviceName:'Samsung Galaxy S5 Device',
platformName:'Android',
platformVersion:'4.4',
browserName:'Chrome',
name:'S5 real device google.com'
}
```

#### Samsung Galaxy S4 Real Device
```
{
deviceName:'Samsung Galaxy S4 Device',
platformName:'Android',
platformVersion:'4.4',
browserName:'Chrome',
name:'S5 real device google.com'
}
```

### Examples for Mobile Native Application Tests
This following includes tips and examples of how to configure your mobile native application tests with Appium. For more detailed descriptions about the capabilities of Appium tests, check out the [Server Capabilities](http://appium.io/slate/en/master/?python#appium-server-capabilities) section of the official Appium website. All examples are for Java, but you can use the [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to set the capabilities in the language of your choice.

### Mobile Native Application Test Configuration Tips
#### Setting `appiumVersion`
If you omit the `appiumVersion` in your test configuration, your test will be running with our default Appium version. Sauce recommends that you specify one of the newer Appium versions that provides a more extended API and fixes to known bugs.

#### Checking the Appium Version for Your Test

1. Log in to saucelabs.com.
2. Find and select the test that you ran using Appium to view the **Test Details** page.
3. Click the **Metadata** tab.
4. Look for the **Logs** row and select **Appium Log**.
The first line should indicate the Appium version. For example, `2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.3.6`.

#### Setting Browser Name

When testing a native mobile application, the value for browserName is an empty string, as in `caps.setCapability("browserName", "");`

#### Setting the Location of the Mobile App

If the application you want to test has been uploaded to a location other than our App Storage, you need to specify this location for app, and make sure that this location is accessible to Sauce Labs browsers. For example, `caps.setCapability("app","storage:filename=mapp.zip");`

#### Setting `automationName` for Android Apps

If you're testing a native mobile app against Android versions 4.0 - 4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you need to set the capability `"automationName","selendroid"`. These Android versions are only supported via Appium’s bundled version of Selendroid, which utilizes [Instrumentation](http://developer.android.com/reference/android/app/Instrumentation.html). Later versions of Android are supported via Appium’s own UiAutomator library.

#### Enabling Location Services for iOS Devices

If you want to enable location services in an iOS simulator, for example to test GPS-dependent applications, you should set these capabilities in your Appium test script:

* `locationServicesEnabled=true`
* `locationServicesAuthorized=true`

### Examples of Native and Hybrid Mobile Application Test Configuration
#### iPhone Simulator Native Application
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPhone 5");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","8.4");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "");
caps.setCapability("app","storage:filename=mapp.zip");
```

#### iPad Simulator Native Application
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPad Retina");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","9.2");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "");
caps.setCapability("app","storage:filename=myapp.zip");
```

#### iPhone Simulator Hybrid Application
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPhone Retina (4-inch 64-bit)");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","8.4");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "");
caps.setCapability("app","storage:filename=myapp.zip");
```

#### Android Native Application, Android v. 4.3
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","Samsung Galaxy S4 Emulator");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("browserName", "");
caps.setCapability("platformVersion","4.3");
caps.setCapability("platformName","Android");
caps.setCapability("app","storage:filename=myapp.zip");
```

#### Android Hybrid Application, Android v. 4.1
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","Android Emulator");
caps.setCapability("deviceType","tablet");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("browserName", "");
caps.setCapability("platformVersion","4.1");
caps.setCapability("platformName","Android");
caps.setCapability("app","storage:filename=myapp.zip");
caps.setCapability("automationName","Selendroid");
```
