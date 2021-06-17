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
Test configuration refers to setting the desired capabilities of your test within the test script itself. There are [required capabilities for both Selenium and Appium tests](/basics/test-config-annotation/test-config), as well as an extensive set of [optional capabilities](/dev/test-configuration-options) (some of which are exclusive to Sauce Labs). You can use our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to create the required desired capabilities for your test scripts, or use one of our [sample test frameworks](https://github.com/saucelabs-training) to set up the desired capabilities for parallel testing across multiple platform/operating systems.

## Capabilities for Selenium and Appium Tests

You can configure the environment for your Appium and Selenium tests by specifying a set of desired capabilities. Our Platform Configurator can set desired capabilities for testing in the scripting language of your choice. Test Configuration Options provides a complete list of all Selenium, Appium, and Sauce Labs testing capabilities.

### Required Selenium Test Configuration Settings

| Setting | Description | Key | Value Type | Example |
|---|---|---|---|---|
|Browser Name|The name of the browser test against.|`browserName`|string|`"browserName": "firefox"`|
|Browser Version|The version of the browser you want to use in your test.|`browserVersion`|string|`"browserVersion": "latest"` <br/><p><strong>NOTE</strong>: If you want to use the latest stable version of Google Chrome or Firefox that Sauce supports, you can use `"browserVersion": "latest"`. You can also use `"browserVersion": "latest-1"` or `"browserVersion": "latest-2"`, etc. to request the next most recent versions of a browser. For example, if the latest stable version of Chrome is 73, you can request `"latest-2"` to use Chrome 71.</p><br/><p><strong>NOTE</strong>: Microsoft Edge has two version numbers, the browser application version and the EdgeHTML rendering engine version. For example, the current stable release of Edge as of November 2019 has the browser application version 44.17763 and the EdgeHTML version 18.17763. The Wikipedia page on Microsoft Edge covers this in more detail: https://en.wikipedia.org/wiki/Microsoft_Edge. It is the EdgeHTML version that should be specified here, such as `"browserVersion": "18.17763"`.</p>|
|Platform Name|Which operating system the browser or mobile device should be running on.|`platformName`|string|`"platformName": "macOS 10.13"`|

### Required Appium Test Configuration Settings

| Setting | Description | Key | Value Type | Example |
|---|---|---|---|---|
|Browser Name|The mobile web browser that will be automated in the simulator, emulator or device.|`browserName`|string|`"browserName": "Safari"`<br/><br/><p><strong>NOTE</strong>: If you're running a test on an Android emulator, you'll need to specify `"Browser"` (the Android stock browser for older Android versions) and `"Chrome"` (for newer Android versions).<br/> For iOS simulators, you'll need to specify `"Safari"`.<br/></p><p><strong>NOTE</strong>: If you're testing a mobile native or hybrid app, the value for this capability should be an empty string.</p>|
|Device Name|The name of the simulator, emulator, or device you want to use in the test.|`deviceName`|string|`"deviceName": "Google Nexus 7 HD Emulator"`<br/><br/><p><strong>NOTE</strong>: For an Android emulator test you can request a generic Android emulator by using the option `"deviceName":"Android Emulator"`. If you want to use an Android emulator that looks and feels like a specific Android phone or tablet, for example a Google Nexus 7 HD Emulator or a Samsung Galaxy S4, then instead of `"deviceName":"Android Emulator"`, you need to specify the exact Android emulator skin to use, for example, `"deviceName":"Samsung Galaxy S4 Emulator"`.</p><p><strong>NOTE</strong>: Each Android emulator skin will have a different configuration depending on the phone or tablet that it emulates. For example, all the skins have different resolutions, screen dimensions, pixel densities, memory, etc. You can use the [Platform Configurator](/basics/platform-configurator) to get a list of the available Android emulator skins for the various Android emulator versions.</p>|
|Platform Version|The mobile operating system version that you want to use in your test.|`platformVersion`|string|`"platformVersion": "9.1"`|
|Platform Name|The mobile operating system platform you want to use in your test.|`platformName`|string|`"platformName": "iOS"`|
|Application Path|The path to a `.ipa`, `.apk`, or `.zip` file containing the app to test. This could be the location of your app in [Sauce application storage](/mobile-apps/app-storage) (e.g., storage:filename=myapp.zip) or the URL to a remote location where your app is located (e.g., http://myappurl.zip).|`app`|string|`"app": "storage:filename=my_app.zip"`<br/><br/><p><strong>NOTE</strong>: This capability is required only for testing mobile native apps or web apps.</p>|
|Automation Engine|The automation engine that will be used. Options are:<br/><ul><li>Appium</li><li>UiAutomator2</li><li>Selendroid</li></ul>The default is Appium.|`automationName`|string|`"automationName": "UiAutomator2"`|
|Application Package<p><span className="sauceDBlue">ANDROID ONLY</span></p>|The Java package of the Android app you want to run.|`appPackage`|string|`"appPackage": "com.example.android.myApp, com.android.settings"`<br/><br/><p><strong>NOTE</strong>: Appium automatically determines the package to launch; you'll only need to use this desired capability if you want to specify a package different from the default one.</p>|
|Android Activity<p><span className="sauceDBlue">ANDROID ONLY</span></p>|The name for the Android activity you want to launch from your package.|`appActivity`|string|`"appActivity": ".MainActivity"`<br/><br/><p><strong>NOTE</strong>: This capability needs to be preceded by a . (dot). For example, `.MainActivity` instead of `MainActivity`.</p><br/><p><strong>NOTE</strong>: Appium automatically determines the activity to launch; you'll only need to use this desired capability if you want to specify an activity different from the default one.</p>|
|Auto Accept Alerts<p><span className="sauceDBlue">IOS ONLY</span></p>|Setting this option will automatically accept any unexpected browser alerts that come up during your test, such as when Safari pops up the alert "Safari would like to use your current location (Don't Allow/Allow)."|`autoAcceptAlerts`|boolean|`"autoAcceptAlerts": true`|

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

If you want to enable location services in an iOS simulator, for example to test GPS-dependent applications, you should set these desired capabilities in your Appium script:

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
