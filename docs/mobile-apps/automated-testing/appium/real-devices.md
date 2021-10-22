---
id: real-devices
title: Appium Testing with Real Devices
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

This topic describes automated Appium testing on the Sauce Labs Real Device Cloud (RDC). You can accelerate your test execution by running parallel automated tests across thousands of mobile device/OS combinations, in our public real device cloud and/or a private device pool of your own.


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Ensure that your mobile app and project setup meet our [real device cloud requirements](/mobile-apps/supported-devices).
* Have your mobile app file (.ipa for iOS, .apk for Android) and mobile test file on hand. If you don't have one and would like to test our functionality, consider using our [Sauce Labs demo app](https://github.com/saucelabs/sample-app-mobile/releases).


## Uploading Mobile Apps from a Remote Location

There may be situations where you want to install an app from a downloadable remote location (e.g., AWS S3 bucket, a GitHub repository). The app is completely removed from the real device after the test completes, providing an added layer of security for your app.

Please review the following guidelines below before uploading your app:

1. Make sure your app meets the [requirements](/mobile-apps/supported-devices) for Android and iOS Mobile App Testing.
2. Upload your app to the hosting location.
3. Ensure Sauce Labs has READ access to the app URL.
4. In your Appium test script, enter the URL for the app as the "app" desired capability. Example Java Snippet:

  ```java
  caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.3.0/Android.SauceLabs.Mobile.Sample.app.2.3.0.apk?raw=true");
  ```

### Installing your App on Private Devices

In some cases, you may need to upload/install your app to a private device and also prevent the device from broad internet access while under test. The steps to achieve this are:

* Upload your app to an internal git repository, or private hosting solution with the necessary permissions (e.g. Amazon S3 with a strict bucket policy).
* Ensure the hosted app URL is available to the machine running the automated test.
* Ensure that you've enabled the **Require Sauce Connect/VPN** setting in your [organization's security settings](/basics/acct-team-mgmt/org-settings).

:::note
Each session is a "fresh" installation of your app, meaning, you will not be able to access information about previous versions of your app.
:::

## Uploading Mobile Apps with the Sauce Labs REST API

Use the [App Storage REST API](/dev/api/storage/#upload-file-to-app-storage) to upload your app for Appium automated mobile testing. We currently support \*.apk or \*.aab Android app files and \*.ipa or \*.zip iOS app files (\*.zip files are parsed to determine whether a valid *.app bundle exists).

:::caution Limited Support for *.aab Files
At this time, \*.aab files are only supported for Android real device testing.
:::

### Application Storage and Data Center Endpoints

When uploading your app for testing with real devices, you must identify the [Data Center](/basics/data-center-endpoints) where the devices you are testing are located by specifying the applicable API URL for that data center.

Examples using the EU and US endpoints:

<Tabs
  defaultValue="US Data Center"
  values={[
    {label: 'US Data Center', value: 'US Data Center'},
    {label: 'EU Data Center', value: 'EU Data Center'},
  ]}>

<TabItem value="US Data Center">

US Data Center (macOS/Linux)

```bash
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \
--form 'payload=@"g16K4P8IX/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
--form 'name="iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"'
```

US Data Center (Windows)

```zh
> curl -u "%SAUCE_USERNAME%:%SAUCE_ACCESS_KEY% -X POST -w "%{http_code}\n" \
-H "Content-Type: application/octet-stream" \
"https://saucelabs.com/rest/v1/storage/%SAUCE_USERNAME%/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk?overwrite=true" \
--data-binary @\path\to\Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

</TabItem>
<TabItem value="EU Data Center">

EU Data Center (macOS/Linux)

```curl
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/storage/upload' \
--form 'payload=@"g16K4P8IX/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
--form 'name="iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"'
```

EU Data Center (Windows)

```bash
> curl -u "%SAUCE_USERNAME%:%SAUCE_ACCESS_KEY%" -X POST -w "%{http_code}\n" \
-H "Content-Type: application/octet-stream" \
"https://eu-central-1.saucelabs.com/rest/v1/storage/%SAUCE_USERNAME%/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk?overwrite=true" \
--data-binary @\path\to\Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

</TabItem>
</Tabs>


## Configuring Appium Tests for Real Devices

This section describes parameters that we recommend using to configure your Appium tests on Sauce Labs real devices. See [Test Configuration Options](/dev/test-configuration-options) for the full list of required and optional parameters.

Certain Appium capabilities behave differently when running Appium tests on our Real Device Cloud versus a local Appium server. On our Real Device Cloud:

* Some Appium capabilities are not supported.
* Emulator-only capabilities will not work.
* The `app` capability will be always be overwritten; it will point to the app file you uploaded to our system.
* The `noReset` capability will only work if device caching is enabled.
* Different setups may have different ways of handling capabilities and/or different requirements. Check to make sure you're providing all of the required capabilities.

### Supported Use Cases for Sauce Labs Real Device Testing

* Execute Appium tests against a private real device hosted in the U.S., using your Sauce Labs username and access key.
* Use our application storage for Appium testing as you usually do for emulators and simulators tests.
* Analyze Appium test executions, on Sauce Labs similar to the way you do it for desktop, emulators and simulators.
* Consume Real Device Cloud (RDC) API similar to the way you do for emulators and simulators (with applicable RDC settings).

**Example Test Script**

```java
private URL createUrl() throws MalformedURLException {
    return new URL("https://$SAUCE_USERNAME:$SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub");
}

@BeforeEach
void setUp() throws MalformedURLException {
    DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
    desiredCapabilities.setCapability("platformName", "iOS");
    IOSDriver driver = new IOSDriver(createUrl(), desiredCapabilities);
}
```

#### Setting Your `appiumVersion`

If you omit the `appiumVersion` in your test configuration, your test will be running with our default Appium version. We recommend that you specify one of the newer Appium versions that provides a more extended API and fixes to known bugs.

#### **Checking the Appium Version for Your Test**
1. Log in to Sauce Labs.
2. Go to **Test Details**.
3. Find and select the test that you ran using Appium.
4. Click the **Metadata** tab.
5. Look for the **Logs** row and select **Appium Log**. The first line should indicate the Appium version. For example, `2019-05-05T17:45:07.541Z - info: Welcome to Appium v1.10.1`.

#### Setting the `browserName`

When testing a native mobile app, the value for `browserName` is an empty string, as in `caps.setCapability("browserName", "");`.

#### Setting the Location of Your Mobile App

If the app you want to test has been uploaded to a location other than our App Storage, you need to specify this location for `app`, and make sure that this location is accessible to Sauce Labs browsers. For example, `caps.setCapability("app","storage:filename=mapp.zip");`.

#### Setting the `automationName` for Android Apps

If you're testing a native mobile app against Android versions 4.0-4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you need to set the capability `"automationName","selendroid"`.

These Android versions are only supported via Appium’s bundled version of Selendroid, which utilizes [Instrumentation](http://developer.android.com/reference/android/app/Instrumentation.html). Later versions of Android are supported via Appium’s own UiAutomator library.

#### Enabling Location Services for iOS Devices

If you want to enable location services on an iOS simulator - to test GPS-dependent apps, for example - set these capabilities in your Appium script:

```java
locationServicesEnabled=true
locationServicesAuthorized=true
```

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

### Dynamic Device Allocation

_Dynamic Allocation_ involves providing basic parameters for the platform and operating system, or the type of device you want to use in your tests, and a device with those specifications is selected from the device pool.

While static allocation allows you more fine-grained control over the device used in your tests, it can also cause delays in your test execution if that device isn't available when you run your tests. If you only need to test on a particular platform and OS version, such as an Android 4.1, or on a particular type of device, you should use dynamic allocation, and we recommend that you use dynamic allocation for all automated mobile application testing in CI/CD environments.

#### Required Capabilities

Below are capabilities required for dynamic allocation of [iOS and/or Android real devices for your tests](/mobile-apps/automated-testing/appium/real-devices).

<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Capability Explanation</strong>
   </td>
  </tr>
  <tr>
   <td><a href="/dev/test-configuration-options#platformname"><code>platformName</code></a>
   </td>
   <td><p>Defines the type of mobile platform to use in your tests (i.e., Android or iOS). The values for capabilities are not case-sensitive, so <code>android</code> is the same as <code>Android</code>, and <code>ios</code> is the same as <code>iOS</code>.</p>
   </td>
  </tr>
  <tr>
   <td><a href="/dev/test-configuration-options#platformVersion"><code>platformVersion</code></a>
   </td>
   <td><p>The platform version to use in your tests, for example "4" or "4.1". This is a substring match. You can specify both major versions and incremental versions of an operating system.</p><p>For example, if you set only a major version 4, you also have access to all devices running incremental versions (e.g., "4.1"," 4.2", "4.2.1", "4.4.4").</p><p>This also extends to minor and point versions. For example, if you specify "11.4", it will match "11.4.0", "11.4.1".</p>

   </td>
  </tr>
  <tr>
   <td><a href="/dev/test-configuration-options#deviceName"><code>deviceName</code></a>
   </td>
   <td><p>The display name of the device to use, such as "Samsung S7". You can also use regular expressions for setting the <code>deviceName</code>. Some examples:</p>

<p>To allocate any iPhone:</p><sub>

    "iPhone.*", "iPhone .*"
</sub>
<p>To allocate any device with the word "nexus" in its display name.</p><sub>

    ".*nexus.*"
</sub>
<p>To allocate either "iPhone 7" or "iPhone 6" device.</p><sub>

    "iPhone [67]" or "iPhone [6-7]"
</sub>
<p>To allocate either "iPhone 7S" or "iPhone 6S" device.</p><sub>

    "iPhone [67]S" or "iPhone [6-7]S"
</sub>
<p>To allocate "iPhone 7" or "iPhone 7S", or any device that starts with the display name "iPhone 7".</p><sub>

    "iPhone 7.*"
</sub>
<p><strong>NOTE</strong>: Regular expressions are not case sensitive.</p>
   </td>
  </tr>
</table>

#### Optional Capabilities

Below are optional capabilities for dynamic allocation of iOS and/or Android real devices for your tests.

*  [`tabletOnly`](/dev/test-configuration-options#tabletOnly)
*  [`phoneOnly`](/dev/test-configuration-options#phoneOnly)
*  [`privateDevicesOnly`](/dev/test-configuration-options#privateDevicesOnly)
*  [`publicDevicesOnly`](/dev/test-configuration-options#publicDevicesOnly)
*  [`carrierConnectivityOnly`](/dev/test-configuration-options#carrierConnectivityOnly)
*  [`cacheId`](/dev/test-configuration-options#cacheId)
*  [`noReset`](/dev/test-configuration-options#noreset)
*  [`recordDeviceVitals`](/dev/test-configuration-options#recordDeviceVitals)
*  [`crosswalkApplication`](/dev/test-configuration-options#crosswalkApplication)
*  [`autoGrantPermissions`](/dev/test-configuration-options#autoGrantPermissions)
*  [`enableAnimations`](/dev/test-configuration-options#enableAnimations)


### Static Device Allocation

With _Static Allocation_, you can specify the device to use in your tests, but if that device is not available when you run your tests, it will delay test execution. For this reason, you should always make sure that the device you want to use is available before launching your tests. The `platformName` and `platformVersion` capabilities will be set by default, and if these are included in your test script, they will be ignored.

| Capability | Setting |
|------------|----|
| `deviceName` | The ID of the device you want to use in your test (e.g., `LG_Nexus_5X_real`). To find a device's ID number, go to its listing in the device selection menu, then click **Details** . |


### Device Caching

#### **`cacheId` Capability**

By default, every time you complete a test session, the real device cloud uninstalls your app, performs device cleaning, and de-allocates the device. This means that if you're running multiple tests on the same device, you would need to wait for this cleaning process to complete between every test.

To get around this, you can use the capability `cacheId`, which keeps the device allocated to you for 10 seconds after each test completes. If you immediately start another test on the device, you won't need to wait for the allocation and device cleaning process to be repeated. In this case, no device cleaning will take place in between sessions, with the only exception being the application under test and the data it owns.


<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Setting</strong>
   </td>
  </tr>
  <tr>
   <td><code>cacheId</code></td>
   <td><p>A random string. This value for cacheId must be the same for all test methods that you want to run on the cached device. In addition, the application and project ID used for the tests must remain the same, along with the values for these capabilities:</p>
<ul>

<li><code>deviceName</code></li>
<li><code>platformName</code></li>
<li><code>platformVersion</code></li>
<li><code>tabletOnly</code></li>
<li><code>phoneOnly</code></li>
<li><code>privateDevicesOnly</code></li>
<li><code>publicDevicesOnly</code></li>
<li><code>automationName</code></li>
<li><code>autoGrantPermissions</code></li>
<li><code>appiumVersion</code></li>

</ul>
   </td>
  </tr>
</table>


#### Using Device Caching with `noReset`

You can also use the `cacheId` capability in conjunction with the standard noReset Appium capability. In the default case, where noReset is set to false, your application will be uninstalled and reinstalled after every test. If `noReset` is set to `true`, the application you are testing won't be reinstalled after every test run. This might save you further time, but it won't be suitable for test setups that require the application's state to be reset between tests. Note that then cacheId is set, no device cleaning will take place in between sessions, regardless of noReset value.


## Additional Test Configuration Options

Once you're up and running with your real device tests, check out our [Best Practices](https://community.saucelabs.com/search?q=best+practice&search_type=tag;) for making the most of your testing. Here are some examples:

* [Test Configuration Options](/dev/test-configuration-options)
* [Implement timeouts to control text execution times](/dev/test-configuration-options#timeouts)
* [Add test annotations](/basics/test-config-annotation/test-annotation)
* [Setting test status to pass or fail](/test-results/test-status)
* [Use Build IDs and tags to differentiate and identify test runs](/basics/test-config-annotation/test-annotation)

### Full Example Scripts

These Appium script examples can help streamline your real device testing process.
They use the [pytest](https://docs.pytest.org/en/latest/) test framework.
Feel free to [clone these scripts directly from GitHub](https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples),
and follow the instructions in the [README file](https://github.com/saucelabs-training/demo-python#readme).

* [conftest.py](https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/sauce_bindings/pytest/conftest.py): this script initializes the test fixtures, as well as the prerequisite and post-requisite test tasks.
* [test_login_success.py](https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/sauce_bindings/pytest/test_login_success.py): this script represents an individual test.
* [test_invalid_login.py](https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/sauce_bindings/pytest/test_login_fail.py): this script represents an individual test.

Visit our [sample test frameworks GitHub repository](https://github.com/saucelabs-sample-test-frameworks?utf8=%E2%9C%93&q=appium&type=&language=) for more detailed language-specific examples.

:::note For Example Purposes Only
The code in these scripts is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify these scripts. Issues regarding these scripts should be submitted through <a href="https://github.com/saucelabs-training">Sauce Labs GitHub</a>. These scripts are not maintained by Sauce Labs Support.
:::
