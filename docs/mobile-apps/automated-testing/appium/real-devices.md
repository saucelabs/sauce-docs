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

The Sauce Labs real device cloud provides you with the ability to run either [live](https://wiki.saucelabs.com/display/DOCS/Live+Testing+for+Native+Mobile+Apps+on+Real+Devices) or automated tests across hundreds of mobile device/OS combinations, in either a private or public real device cloud.


## What You'll Need

* Your Sauce Labs username and access key.
* Ensure that your mobile app and project setup meet our [real device cloud requirements](mobile-apps/automated-testing/devices.md).
* Have your mobile app file (.ipa for iOS, .apk for Android) and mobile test file on hand.

If you don't have an app and would like to try out our test functionality, feel free to download and use our [Sauce Labs demo app](https://github.com/saucelabs/sample-app-mobile/releases).


## Uploading and Accessing Your Apps on Real Devices

Select your preferred testing platform for uploading your app in order to view the instructions.

<Tabs
  defaultValue="Using a Remote Location"
  values={[
    {label: 'Using a Remote Location', value: 'Using a Remote Location'},
    {label: 'Using the REST API', value: 'Using the REST API'},
    {label: 'Using TestObject', value: 'Using TestObject'},
  ]}>

<TabItem value="Using a Remote Location">

**Installing Mobile Apps from a Remote Location**

There may be situations where you want to install an app from a downloadable remote location (e.g., AWS S3 bucket, a GitHub repository). The app is completely removed from the real device after the test completes, providing an added layer of security for your app.

Please review the following guidelines below before uploading your app:

1. Make sure your app meets the <a href="/mobile-apps/automated-testing/devices">requirements</a> for Android and iOS Mobile App Testing.
2. Upload your app to the hosting location.
3. Ensure Sauce Labs has READ access to the app URL.
4. In your Appium test script, enter the URL for the app as the "app" desired capability. Example Java Snippet:
```
caps.setCapability("app", "https://github.com/saucelabs/sample-app-mobile/releases/download/2.3.0/Android.SauceLabs.Mobile.Sample.app.2.3.0.apk?raw=true");
```

**Installing your App on Private Devices**

In some cases, you may need to upload / install your app to a private device and also prevent the device from broad internet access while under test. The steps to achieve this are:

* Upload your app to an internal git repository, or private hosting solution with the necessary permissions (e.g. Amazon S3 with a strict bucket policy).
* Ensure the hosted app URL is available to the machine running the automated test.
* Ensure that you've enabled the **Require Sauce Connect/VPN** setting in your [organization's security settings](https://wiki.saucelabs.com/pages/viewpage.action?pageId=69108863).

>**NOTE**: Each Session is a "Fresh" Install. You will not be able to access information about different versions of your app because each session includes a "fresh" installation of your app.

</TabItem>
<TabItem value="Using the REST API">

**Uploading Mobile Apps with the Sauce Labs REST API**

Below are some examples of how to use the Sauce Labs REST API to upload your mobile app to our App Storage and get your real device project started. See also: [Mobile App Testing API](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80416665).

**REST API Authentication**

For APIs and authorization credentials, use the Sauce Labs Storage REST API (app.saucelabs.com).

A recommended best practice is to set your credentials as environment variables, like so:

```sh
SAUCE_USERNAME='valid.username'
SAUCE_ACCESS_KEY='valid.key'
```

For specific instructions on how to set environment variables, visit the following links:

* [Set Environment Variables with Windows 10](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/)
* [Set Environment Variables with MacOS](https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x)
* [Set Environment Variables with Linux](https://askubuntu.com/questions/58814/how-do-i-add-environment-variables)

**Supported Use Cases for Sauce Labs Real Device Testing**

* Execute Appium tests against a private real device hosted in the U.S., using your Sauce Labs username and access key
* Use Sauce Storage, for Appium testing, as you usually do for emulators and simulators tests
* Analyze Appium test executions, on Sauce Labs similar to the way you do it for desktop, emulators and simulators
* Consume Real Device Cloud (RDC) API similar to the way you do for emulators and simulators (with applicable RDC settings)

**Example Test Script**

```sh
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

**App Storage and Data Center Endpoints**

Below are some examples of how to use the Sauce Labs REST API to upload your mobile app to Sauce Storage. For details related to authorization credentials, see [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068).

To connect to the real device cloud in your automated Appium tests, you'll need to use include either the EU or US storage endpoint in your test script. This example (Mac OSX / Linux) how to upload an app to App Storage in the US-West Data Center:

```sh
$ curl -F "payload=@/Users/$SAUCE_USERNAME/Downloads/$FILE_NAME.ipa" -F "name=$FILE_NAME.ipa" -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  'https://api.us-west-1.saucelabs.com/v1/storage/upload'
```

>**NOTE**: For more detailed information on how to access the app in your automated test builds and use the Storage API, see [App Storage](/mobile-apps/app-storage.md).

Below are more examples using the EU and US endpoints.

US Data Center (Mac OSX / Linux)

```sh
$ curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" -X POST -w "%{http_code}\n" \
-H "Content-Type: application/octet-stream" \
"https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk?overwrite=true" \
--data-binary @/path/to/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

US Data Center (Windows)

```
> curl -u "%SAUCE_USERNAME%:%SAUCE_ACCESS_KEY% -X POST -w "%{http_code}\n" \
-H "Content-Type: application/octet-stream" \
"https://saucelabs.com/rest/v1/storage/%SAUCE_USERNAME%/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk?overwrite=true" \
--data-binary @\path\to\Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

EU Data Center (Mac OSX / Linux)

```sh
$ curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" -X POST -w "%{http_code}\n" \
-H "Content-Type: application/octet-stream" \
"https://eu-central-1.saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk?overwrite=true" \
--data-binary @/path/to/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

EU Data Center (Windows)

```sh
> curl -u "%SAUCE_USERNAME%:%SAUCE_ACCESS_KEY%" -X POST -w "%{http_code}\n" \
-H "Content-Type: application/octet-stream" \
"https://eu-central-1.saucelabs.com/rest/v1/storage/%SAUCE_USERNAME%/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk?overwrite=true" \
--data-binary @\path\to\Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

</TabItem>
<TabItem value="Using TestObject">

:::caution
This information applies only to TestObject, our [Legacy Real Device Platform Resources](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721177).

For APIs and authorization credentials, use the Legacy Real Device Cloud REST API (app.testobject.com) and see [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068).
:::

**Creating a Real Device Project on TestObject**

When you create a project, you'll need to provide information about the website or app you want to test, and the device settings you want to use in your tests. You can also create versions of the project to reflect changes in the app or website throughout your development process.

**Versioning Real Device Projects on TestObject**

Once you've created a real device project, you can create versions of it. Each of these versions will be stored in your project, and you can run tests against the current Active version, or a previous version.

**TestObject API Examples**

US Data Center:

Mac OSX / Linux

```sh
$ curl -u "$TEST_OBJECT_USERNAME:$TEST_OBJECT_API_KEY" -X POST \
"https://app.testobject.com:443/api/storage/upload" -H \
"Content-Type: application/octet-stream" --data-binary @/path/to/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

Windows

```sh
> curl -u "%TEST_OBJECT_USERNAME%:%TEST_OBJECT_API_KEY%" -X POST \
"https://app.testobject.com:443/api/storage/upload" -H \
"Content-Type: application/octet-stream" --data-binary @\path\to\Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

EU Data Center:

Mac OSX / Linux

```sh
$ curl -u "$TEST_OBJECT_USERNAME:$TEST_OBJECT_API_KEY" -X POST \
"https://app.testobject.com:443/api/storage/upload" -H \
"Content-Type: application/octet-stream" --data-binary @/path/to/Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```

Windows

```sh
> curl -u "%TEST_OBJECT_USERNAME%:%TEST_OBJECT_API_KEY%" -X POST \
"https://app.testobject.com:443/api/storage/upload" -H \
"Content-Type: application/octet-stream" --data-binary @\path\to\Android.SauceLabs.Mobile.Sample.app.x.x.x.apk
```


</TabItem>
</Tabs>


## Configuring Appium Tests for Real Devices

:::note Different Behaviors from Local Appium Server Testing

Some Appium capabilities behave differently when running Appium tests in the real device cloud instead of against a local Appium server, including:

* Emulator-only capabilities will not work.
* The `app` capability is always overwritten, and points to the app file you uploaded to our system.
* The `noReset` capability only works if device caching is enabled. By default, it is set to `false`.
* Some Appium capabilities may not be supported. You can find a list [here](/mobile-apps/automated-testing/appium/real-devices.md#unsupported-appium-capabilities).

Different setups might have slightly different ways of handling capabilities and/or different requirements. Check to make sure you are providing all of the required capabilities.
:::

**Setting `appiumVersion`**

If you omit the `appiumVersion` in your test configuration, your test will be running with our default Appium version. We recommend that you specify one of the newer Appium versions that provides a more extended API and fixes to known bugs.

**Checking the Appium Version for Your Test**
1. Log in to Sauce Labs.
2. Find and select the test that you ran using Appium to view the **Test Details** page.
3. Click the **Metadata** tab.
4. Look for the **Logs** row and select **Appium Log**. The first line should indicate the Appium version. For example, `2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.3.6`.

**Setting Browser Name**

When testing a native mobile app, the value for `browserName` is an empty string, as in `caps.setCapability("browserName", "");`.

**Setting the Location of Your Mobile App**

If the app you want to test has been uploaded to a location other than Sauce Storage, you need to specify this location for `app`, and make sure that this location is accessible to Sauce Labs browsers. For example, `caps.setCapability("app","sauce-storage:mapp.zip");`.

**Setting `automationName` for Android Apps**

If you're testing a native mobile app against Android versions 4.0-4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you need to set the capability `"automationName","selendroid"`. These Android versions are only supported via Appium’s bundled version of Selendroid, which utilizes [Instrumentation](http://developer.android.com/reference/android/app/Instrumentation.html). Later versions of Android are supported via Appium’s own UiAutomator library.


## Appium Capabilities for Sauce Labs Real Devices

Below are some examples of how to configure Appium tests for Real Devices. Visit our [sample test frameworks GitHub repository](https://github.com/saucelabs-sample-test-frameworks?utf8=%E2%9C%93&q=appium&type=&language=) for more detailed language-specific examples.

:::caution **For Example Purposes Only**

<sub>The code in these scripts is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify these scripts. Issues regarding these scripts should be submitted through <a href="https://github.com/saucelabs-training">Sauce LabsGitHub</a>. These scripts are not maintained by Sauce Labs Support.
</sub>
:::

### Required Capabilities

Your Appium scripts for real device testing must include these capabilities along with a data center endpoint. Check out the example script in [Dynamic Allocation Examples](mobile-apps/automated-testing/devices.md) for examples of these capabilities and their values.

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
   <p>Values are not case-sensitive. To learn more, see: <a href="mobile-apps/automated-testing/devices">Dynamic Device Allocation</a>.</p>
   </td>
  </tr>
</table>


### Optional Capabilities

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
<p>We recommend reviewing <a href="mobile-apps/automated-testing/devices">Device Management for Real Devices</a> to learn more about how Sauce Labs manages device allocation, device caching, and device cleanup.</p>
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



### Capabilities Code Snippets

<Tabs
  defaultValue="iOS"
  values={[
    {label: 'iOS', value: 'iOS'},
    {label: 'Android', value: 'Android'},
  ]}>

<TabItem value="iOS">

Below are examples of Appium capabilities for an iPhone project using iOS version 12.2.

**Java**

```java
DesiredCapabilities caps = DesiredCapabilities();
    caps.setCapability("username", "SAUCE_USERNAME");
    caps.setCapability("accessKey", "SAUCE_ACCESS_KEY");
    caps.setCapability("deviceName","iPhone .*");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("platformVersion","12.2");
    caps.setCapability("platformName", "iOS");
    caps.setCapability("browserName", "");
    caps.setCapability("app", "storage:filename=<file-name>");
```

**Python**

```py
caps = {}
caps['username'] = "SAUCE_USERNAME"
caps['accessKey'] = "SAUCE_ACCESS_KEY"
caps['browserName'] = ""
caps['deviceName'] = "iPhone .*"
caps['deviceOrientation'] = "portrait"
caps['platformVersion'] = "12.2"
caps['platformName'] = "iOS"
caps['app'] = "storage:filename=<file-name>"
```

**node.js**

```js
caps = {};
caps['username'] = 'SAUCE_USERNAME';
caps['accessKey'] = 'SAUCE_ACCESS_KEY';
caps['browserName'] = '';
caps['deviceName'] = 'iPhone .*';
caps['deviceOrientation'] = 'portrait';
caps['platformVersion'] = '12.2';
caps['platformName'] = 'iOS';
caps['app'] = 'storage:filename=<file-name>';
```

**Ruby**

```rb
caps = Selenium::WebDriver::Remote::Capabilities()
caps['username'] = 'SAUCE_USERNAME'
caps['accessKey'] = 'SAUCE_ACCESS_KEY'
caps['deviceName'] = 'iPhone .*'
caps['deviceOrientation'] = 'portrait'
caps['platformVersion'] = '12.2'
caps['platformName'] = 'iOS'
caps['browserName'] = ''
caps['app'] = 'storage:filename=<file-name>'
```

**C#**

```csharp
DesiredCapabilities caps = new DesiredCapabilities();
    caps.SetCapability("username", "SAUCE_USERNAME");
    caps.SetCapability("accessKey", "SAUCE_ACCESS_KEY");
    caps.SetCapability("deviceName", "iPhone .*");
    caps.SetCapability("deviceOrientation", "portrait");
    caps.SetCapability("platformVersion", "12.2");
    caps.SetCapability("platformName", "iOS");
    caps.SetCapability("browserName", "");
    caps.SetCapability("app", "storage:filename=<file-name>");
```

</TabItem>
<TabItem value="Android">

Below are examples of Appium capabilities for an Samsung Galaxy project using Android version 8.1.

**Java**

```java
DesiredCapabilities caps = DesiredCapabilities();
    caps.setCapability("username", "SAUCE_USERNAME");
    caps.setCapability("accessKey", "SAUCE_ACCESS_KEY");
    caps.setCapability("deviceName","Samsung.*Galaxy.*");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("browserName", "");
    caps.setCapability("platformVersion","8.1");
    caps.setCapability("platformName","Android");
    caps.setCapability("app", "sauce-storage:<upload_filename>");
```

**Python**

```py
caps = {}
caps['username'] = "SAUCE_USERNAME"
caps['accessKey'] = "SAUCE_ACCESS_KEY"
caps['deviceName'] = "Samsung.*Galaxy.*"
caps['deviceOrientation'] = "portrait"
caps['platformVersion'] = "8.1"
caps['platformName'] = "Android"
caps['app'] = "sauce-storage:<upload_filename>"
```

**node.js**

```js
caps = {};
caps['username'] = 'SAUCE_USERNAME';
caps['accessKey'] = 'SAUCE_ACCESS_KEY';
caps['deviceName'] = 'Samsung.*Galaxy.*';
caps['deviceOrientation'] = 'portrait';
caps['browserName'] = '';
caps['platformVersion'] = '8.1';
caps['platformName'] = 'Android';
caps['app'] = 'sauce-storage:<upload_filename>';
```

**Ruby**

```rb
caps = Selenium::WebDriver::Remote::Capabilities()
caps['username'] = 'SAUCE_USERNAME'
caps['accessKey'] = 'SAUCE_ACCESS_KEY'
caps['deviceName'] = 'Samsung.*Galaxy.*'
caps['deviceOrientation'] = 'portrait'
caps['browserName'] = ''
caps['platformVersion'] = '8.1'
caps['platformName'] = 'Android'
caps['app'] = 'sauce-storage:<upload_filename>'
```

**C#**

```csharp
DesiredCapabilities caps = new DesiredCapabilities();
    caps.SetCapability("username", "SAUCE_USERNAME");
    caps.SetCapability("accessKey", "SAUCE_ACCESS_KEY");
    caps.SetCapability("deviceName", "Samsung.*Galaxy.*");
    caps.SetCapability("deviceOrientation", "portrait");
    caps.SetCapability("browserName", "");
    caps.SetCapability("platformVersion", "8.1");
    caps.SetCapability("platformName", "Android");
    caps.SetCapability("app", "sauce-storage:<upload_filename>");
```

</TabItem>
</Tabs>


## Configuring Tests for Native vs. Hybrid Apps

**iPhone 6 Real Device**

```sh
{
deviceName:'iPhone 6 Device',
platformName:'iOS',
platformVersion:'8.4',
app:'sauce-storage:SampleIOSApp.ipa',
"appium-version":"1.4.16"
}
```

**Samsung Galaxy S5 Real Device**

```sh
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

```sh
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


## Test Script Examples

These Appium script examples (in Python) can help streamline your real device testing process. They use the [pytest](https://docs.pytest.org/en/latest/) test framework. Feel free to [clone these scripts directly from GitHub](https://github.com/saucelabs-training/demo-python/tree/master/appium-examples/pytest), and follow the instructions in the [README file](https://github.com/saucelabs-training/demo-python).


<Tabs
  defaultValue="iOS"
  values={[
   {label: 'iOS', value: 'iOS'},
   {label: 'Android', value: 'Android'},
 ]}>

<TabItem value="iOS">

**Python**

<ul>
<li><a href="https://github.com/saucelabs-training/demo-python/blob/master/appium-examples/pytest/conftest.py">conftest.py</a>: This script initializes the test fixtures, as well as the prerequisite and post-requisite test tasks.</li>
<li>Test Objects <a href="https://github.com/saucelabs-training/demo-python/blob/master/appium-examples/pytest/rdc/android/tests/test_valid_login.py">test_valid_login.py</a>: this script represents an individual test.</li>
<li>Test Objects <a href="https://github.com/saucelabs-training/demo-python/blob/master/appium-examples/pytest/rdc/ios/tests/test_invald_login.py">test_invalid_login.py</a>: this script represents an individual test.</li>

</ul>
 </TabItem>
 <TabItem value="Android">

**Python**

<ul>
<li><a href="https://github.com/saucelabs-training/demo-python/blob/master/appium-examples/pytest/conftest.py">conftest.py</a>: This script initializes the test fixtures, as well as the prerequisite and post-requisite test tasks.</li>
<li>Test Objects <a href="https://github.com/saucelabs-training/demo-python/blob/master/appium-examples/pytest/rdc/ios/tests/test_valid_login.py">test_valid_login.py</a>: this script represents an individual test.</li>
<li>Test Objects <a href="https://github.com/saucelabs-training/demo-python/blob/master/appium-examples/pytest/rdc/android/tests/test_invald_login.py">test_invalid_login.py</a>: this script represents an individual test.</li>

</ul>
 </TabItem>
 </Tabs>


## Best Practices and Reporting Test Results

Now that you've been able to get a test running on Sauce, there are a few other modifications you can make to your tests. These example scripts show how to:

*   Implement timeouts to control text execution times
*   Add annotations
*   Send Pass/Fail results to Sauce Labs
*   [Use Build IDs and tags to differentiate and identify test runs](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365946)

You can find more information under [Best Practices for Running Tests](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365647) and [Setting Test Status to Pass or Fail](https://wiki.saucelabs.com/pages/viewpage.action?pageId=63472006).

Features specific to our real device cloud include:

*   Support for multiple frameworks (i.e., Appium, Robotium, Espresso, and XCUITest)
*   [IPSec VPN](secure-connections/ipsec-vpn.md) secure connections to private clouds
*   Devices cleaning process between sessions to ensure maximum privacy
*   Carrier Network Connectivity (devices with SIM cards)

As a reminder – from the [Sauce Labs](http://app.saucelabs.com/) platform, you'll have access both our virtual device cloud (emulators, simulators) and real device cloud. This allows you to use the same features – APIs, endpoints, reporting, secure tunnels, analytics, and more – for both clouds.


## Monitoring Real Device Performance for Appium Tests

By including the desired capability `recordDeviceVitals` in your Appium test script, you can collect performance statistics for the real devices used in your tests, including CPU, Network, Memory, and Thread performance. This topic describes how to set up the desired capability in your tests, and collect the statistics when the test completes.


**Setting `recordDeviceVitals`**

Include this setting as part of the desired capabilities in your Appium test script:

```
capabilities.setCapability("recordDeviceVitals", true);
```

**Collecting Performance Metrics**

1. When your test completes, log into the Real Device Testing web interface, and select the app that you used in the test from your dashboard.
2. Click **Automated Testing > Appium**.
3. Select the **Test Results** for your test.
4. Under **Mobile Vitals**, click the link to download the CSV file containing your test performance metrics.

<br/>

**Performance Metrics for Android Devices**

The CSV file will contain these performance metrics for Android devices.

<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>unix_epoch_milliseconds</code>
   </td>
   <td>Unix epoch timestamp in milliseconds, which can be matched to events within your automated tests
   </td>
  </tr>
  <tr>
   <td><code>device_local_time </code>
   </td>
   <td>Device’s local date and time
   </td>
  </tr>
  <tr>
   <td><code>cpu_total</code>
   </td>
   <td>System-wide CPU usage in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400%.
   </td>
  </tr>
  <tr>
   <td><code>cpu_user</code>
   </td>
   <td>CPU usage for user processes in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400%.
   </td>
  </tr>
  <tr>
   <td><code>cpu_kernel</code>
   </td>
   <td>Android OS CPU usage in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400%.
   </td>
  </tr>
  <tr>
   <td><code>n_processors</code>
   </td>
   <td>Amount of available CPU cores. Use this to divide the cpu values into per core
   </td>
  </tr>
  <tr>
   <td><code>n_threads</code>
   </td>
   <td>Total threads in use by the app
   </td>
  </tr>
  <tr>
   <td><code>memory_size_kb </code>
   </td>
   <td>Total memory currently used by device in kilobytes
   </td>
  </tr>
  <tr>
   <td><code>memory_resident_kb</code>
   </td>
   <td>Memory currently in use by application in kilobytes
   </td>
  </tr>
  <tr>
   <td><code>memory_shared_kb</code>
   </td>
   <td>Anonymous shared memory currently in use by system shared between application(s) and system
   </td>
  </tr>
  <tr>
   <td><code>network_wifi_receive_b</code>
   </td>
   <td>Data in bytes received over wifi connection
   </td>
  </tr>
  <tr>
   <td><code>network_wifi_sent_b</code>
   </td>
   <td>Data in bytes sent over wifi connection
   </td>
  </tr>
  <tr>
   <td><code>network_mobile_receive_b</code>
   </td>
   <td>Data in bytes received from the mobile carrier network
   </td>
  </tr>
  <tr>
   <td><code>network_mobile_sent_b </code>
   </td>
   <td>Data in bytes sent over mobile carrier network
   </td>
  </tr>
</table>

<br/>

**Performance Metrics for iOS Devices**

The CSV file will contain these performance metrics for iOS devices.

<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>Unix_epoch_milliseconds</code>
   </td>
   <td>Unix epoch timestamp in milliseconds, which can be matched to events within your automated tests
   </td>
  </tr>
  <tr>
   <td><code>device_local_time</code>
   </td>
   <td>Device’s local date and time
   </td>
  </tr>
  <tr>
   <td><code>cpu_total</code>
   </td>
   <td>System-wide CPU usage in percentage. Values between 0 and 100%.
   </td>
  </tr>
  <tr>
   <td><code>cpu_user</code>
   </td>
   <td>User processes CPU usage in percentage. Values between 0 and 100%.
   </td>
  </tr>
  <tr>
   <td><code>cpu_process</code>
   </td>
   <td>App under test CPU usage in percentage. Values between 0 and 100%.
   </td>
  </tr>
  <tr>
   <td><code>n_threads</code>
   </td>
   <td>Total threads in use by the process
   </td>
  </tr>
  <tr>
   <td><code>process_memory_used_b</code>
   </td>
   <td>Memory used in bytes by the app that is under test
   </td>
  </tr>
  <tr>
   <td><code>net_bytes_in</code>
   </td>
   <td>Total data in bytes received
   </td>
  </tr>
  <tr>
   <td><code>net_bytes_out</code>
   </td>
   <td>Total data in bytes sent
   </td>
  </tr>
  <tr>
   <td><code>net_packets_in</code>
   </td>
   <td>Total packets received
   </td>
  </tr>
  <tr>
   <td><code>net_packets_out</code>
   </td>
   <td>Total packets sent
   </td>
  </tr>
  <tr>
   <td><code>disk_write_ops</code>
   </td>
   <td>Disk write operations during time period
   </td>
  </tr>
  <tr>
   <td><code>disk_bytes_written</code>
   </td>
   <td>Bytes written to disk during time period
   </td>
  </tr>
</table>

## Configuring Appium Tests for TestObject (Legacy)

These examples are specifically for use with TestObject, our [legacy real device cloud platform](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721177), which you can find under **SAUCE APPS** > **Legacy RDC**.

<Tabs
  defaultValue="iOS"
  values={[
    {label: 'iOS', value: 'iOS'},
    {label: 'Android', value: 'Android'},
  ]}>

<TabItem value="iOS">

Examples of an iPhone project using iOS version 12.2.

**Java**

```java
DesiredCapabilities caps = DesiredCapabilities();
    caps.setCapability("testobject_api_key", "project_api_key");
    caps.setCapability("testobject_app_id", "1");
    caps.setCapability("deviceName","iPhone .*");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("platformVersion","12.2");
    caps.setCapability("platformName", "iOS");
    caps.setCapability("browserName", "");
```

**Python**

```py
caps['browserName'] = ""
caps['testobject_api_key'] = "project_api_key"
caps['testobject_app_id'] = "1"
caps['deviceName'] = "iPhone .*"
caps['deviceOrientation'] = "portrait"
caps['platformVersion'] = "12.2"
caps['platformName'] = "iOS"
```

**node.js**

```js
caps['browserName'] = '';
caps['testobject_api_key'] = "project_api_key";
caps['testobject_app_id'] = "1";
caps['deviceName'] = 'iPhone .*';
caps['deviceOrientation'] = 'portrait';
caps['platformVersion'] = '12.2';
caps['platformName'] = 'iOS';
```

**Ruby**

```rb
caps = Selenium::WebDriver::Remote::Capabilities()
caps['testobject_api_key'] = 'project_api_key'
caps['testobject_app_id'] = '1'
caps['deviceName'] = 'iPhone .*'
caps['deviceOrientation'] = 'portrait'
caps['platformVersion'] = '12.2'
caps['platformName'] = 'iOS'
caps['browserName'] = ''
```

**C#**

```csharp
DesiredCapabilities caps = new DesiredCapabilities();
    caps.SetCapability("deviceName", "iPhone .*");
    caps.SetCapability("testobject_api_key", "project_api_key");
    caps.SetCapability("testobject_app_id", "1");
    caps.SetCapability("deviceOrientation", "portrait");
    caps.SetCapability("platformVersion", "12.2");
    caps.SetCapability("platformName", "iOS");
    caps.SetCapability("browserName", "");
```    


</TabItem>

<TabItem value="Android">

Examples of an Samsung Galaxy project using Android version 8.1.

**Java**

```java
DesiredCapabilities caps = DesiredCapabilities();
    caps.setCapability("testobject_api_key", "project_api_key");
    caps.setCapability("testobject_app_id", "1");
    caps.setCapability("deviceName","Samsung.*Galaxy.*");
    caps.setCapability("deviceOrientation", "portrait");
    caps.setCapability("browserName", "");
    caps.setCapability("platformVersion","8.1");
    caps.setCapability("platformName","Android");
```

**Python**

```py
caps = {}
caps['testobject_api_key'] = "project_api_key"
caps['testobject_app_id'] = "1"
caps['deviceName'] = "Samsung.*Galaxy.*"
caps['deviceOrientation'] = "portrait"
caps['platformVersion'] = "8.1"
caps['platformName'] = "Android"
```

**node.js**

```
caps = {};
caps['testobject_api_key'] = 'project_api_key';
caps['testobject_app_id'] = '1';
caps['deviceName'] = 'Samsung.*Galaxy.*';
caps['deviceOrientation'] = 'portrait';
caps['browserName'] = '';
caps['platformVersion'] = '8.1';
caps['platformName'] = 'Android';
```

**Ruby**

```rb
caps = Selenium::WebDriver::Remote::Capabilities()
caps['testobject_api_key'] = 'project_api_key'
caps['testobject_app_id'] = '1'
caps['deviceName'] = 'Samsung.*Galaxy.*'
caps['deviceOrientation'] = 'portrait'
caps['browserName'] = ''
caps['platformVersion'] = '8.1'
caps['platformName'] = 'Android'
```

**C#**

```csharp
DesiredCapabilities caps = new DesiredCapabilities();
    caps.SetCapability("testobject_api_key", "project_api_key");
    caps.SetCapability("testobject_app_id", "1");
    caps.SetCapability("deviceName", "Samsung.*Galaxy.*");
    caps.SetCapability("deviceOrientation", "portrait");
    caps.SetCapability("browserName", "");
    caps.SetCapability("platformVersion", "8.1");
    caps.SetCapability("platformName", "Android");
```

</TabItem>
</Tabs>
