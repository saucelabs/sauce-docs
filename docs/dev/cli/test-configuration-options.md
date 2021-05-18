---
id: test-configuration-options
title: Test Configuration Options
sidebar_label: Test Configuration Options
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

In this topic, you'll find a list of Sauce Labs test configuration options. You can use the [Sauce Labs Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator) to generate the correct configuration of testing options for your choice of Appium or Selenium tests in your preferred programming language.

We always recommend using the latest released version of Selenium, but to ensure W3C WebDriver compliance, make sure to use Selenium version 3.11 or later. Sauce Labs determines W3C sessions with the presence of `sauce:options` capabilities and [generic W3C WebDriver-compliant capabilities](https://www.w3.org/TR/webdriver1/#capabilities). See [W3C Capabilities Support](https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414463) for more information.


## Desktop Browser W3C Capabilities (Required)

Below are the W3C WebDriver primary test configuration settings for Sauce Labs desktop browser tests.

---
### `browserName`
__Description__: identifies the user agent. <br/>
__Value Type__: string. <br/>
__Example__:
```java
"browserName": "firefox"
```

---
### `browserVersion`
__Description__: identifies the version of the browser you want to use in your test.<br/>
__Value Type__: string.<br/>
```java title="Example"
"browserVersion": "latest"`
```
:::tip Default to Latest Version of Chrome or Firefox

If you want to use the latest stable version of Google Chrome or Firefox that Sauce supports, you can use `"browserVersion": "latest"`. You can also use `"browserVersion": "latest-1"` or `"browserVersion": "latest-2"`, etc. to request the next most recent versions of a browser. For example, if the latest stable version of Chrome is 73, you can request `"latest-2"` to use Chrome 71.
:::

:::tip Microsoft Edge versions

Microsoft Edge has two version numbers, the browser application version and the EdgeHTML rendering engine version. For example, the current stable release of Edge as of November 2019 has the browser application version 44.17763 and the EdgeHTML version 18.17763. For more details, see the [Microsoft Edge Wikipedia page](https://en.wikipedia.org/wiki/Microsoft_Edge).

It is the EdgeHTML version that should be specified here, such as `"browserVersion": "18.17763"`.
:::

---
### `platformName`
__Description__: The name of the operating system the browser or mobile device should be running on.<br/>
__Value Type__: string.<br/>
__Example__: `"platformName": "macOS 10.13"`

---

## Desktop Browser W3C Capabilities (Optional)
Below are more Sauce-compatible W3C WebDriver specification capabilities. To view their descriptions, see the [W3C WebDriver Capabilities site](https://www.w3.org/TR/webdriver/#capabilities):

<table>
  <tr>
   <td>
    <h3><code>acceptInsecureCerts</code></h3>
   </td>
   <td>
    <h3><code>pageLoadStrategy</code></h3>
   </td>
 </tr>
  <tr>
   <td>
    <h3><code>proxy</code></h3>
   </td>
   <td>
    <h3><code>timeouts</code></h3>
   </td>
  </tr>
  <tr>
   <td>
    <h3><code>strictFileInteractability</code></h3>
   </td>
   <td>
    <h3><code>unhandledPromptBehavior</code></h3>
   </td>
  </tr>
</table>


## Desktop Browser W3C Capabilities: Sauce-Specific (Optional)

These options apply to specific browsers and can be added to the `sauce:options` block of your test session creation code.

---
### `chromedriverVersion`
__Description__: allows you to specify the ChromeDriver version you want to use for your tests. We support the ChromeDriver version 1 series (i.e., 26.0.1383.0). The version 2 series (i.e., 2.45) and the latest convention where each Chrome version comes with its own matching ChromeDriver version (from Chrome 73 onwards). The default version of ChromeDriver when no value is specified depends on the version of Chrome used. See [ChromeDriver Versions and Downloads](http://chromedriver.chromium.org/downloads/version-selection) for more information.<br/>
__Value Type__: string.<br/>
__Example__: `"chromedriverVersion": "2.45"`

---
### `geckodriverVersion`   

__Description__: allows you to specify the Firefox GeckoDriver version. For Firefox version 80 and above, geckodriver defaults to latest driver version 0.27.0 when no version is specified.

For a list of geckodriver versions, see [geckodriver Supported Platforms](https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html).<br/>
__Value Type__: string.<br/>
__Example__: "geckodriverVersion": "0.27.0"

---
### `iedriverVersion`

__Description__: allows you to specify the Internet Explorer Driver version. If no version is specified, it defaults to 2.53.1. The versions of Internet Explorer Driver we have available correspond to major Selenium releases - we do not have all the minor point releases (e.g., 3.12.0.4) available.

We recommend setting the Selenium Version (see above) to correspond with the Internet Explorer Driver version you select.

Sauce Labs supports launching 64-bit IE on our 64-bit VMs: Windows 7, Windows 8, and Windows 8.1. This provides a workaround for two known Selenium issues:
* Using a 32 bit driver on a 64 bit operating system causes Selenium's screenshot feature to only capture the part of the page currently visible in the browser viewport [Selenium Issue 5876](https://code.google.com/p/selenium/issues/detail?id=5876).
* Using a 64 bit driver on a 64 bit operating system causes text entry to be extremely slow [Selenium Issue 5516](https://code.google.com/p/selenium/issues/detail?id=5116).

<details><summary><strong>Supported Internet Explorer Driver versions</strong></summary>

*   `x64_2.29.0`
*   `x64_2.39.0`
*   `x64_2.40.0`
*   `x64_2.41.0`
*   `x64_2.42.0`
*   `x64_2.43.0`
*   `x64_2.44.0`
*   `x64_2.45.0`
*   `x64_2.46.0`
*   `x64_2.48.0`
*   `2.21.1`
*   `2.21.2`
*   `2.24.0`
*   `2.25.3`
*   `2.26.0`
*   `2.28.0`
*   `2.29.0`
*   `2.30.1`
*   `2.31.0`
*   `2.32.2`
*   `2.33.0`
*   `2.34.0`
*   `2.35.0`
*   `2.35.1`
*   `2.35.2`
*   `2.35.3`
*   `2.36.0`
*   `2.37.0`
*   `2.38.0`
*   `2.39.0`
*   `2.40.0`
*   `2.41.0`
*   `2.42.0`
*   `2.43.0`
*   `2.44.0`
*   `2.45.0`
*   `2.46.0`
*   `2.48.0`
*   `2.49.0`
*   `2.50.0`
*   `2.51.0`
*   `2.52.0`
*   `2.52.1`
*   `2.52.2`
*   `2.53.0`
*   `2.53.1`
*   `3.0.0`
*   `3.1.0`
*   `3.2.0`
*   `3.3.0`
*   `3.3.1`
*   `3.4.0`
*   `3.5.0`
*   `3.5.1`
*   `3.6.0`
*   `3.7.0`
*   `3.8.0`
*   `3.9.0`
*   `3.10.0`
*   `3.11.0`
*   `3.11.1`
*   `3.12.0`
*   `3.13.0`
*   `3.14.0`
*   `3.141.0`
*   `3.150.1`

</details>

__Value Type__: string.<br/>
__Example__: `"iedriverVersion": "3.141.0"`

---
### `seleniumVersion`

__Description__: allows you to specify the version of Selenium you want to use for your test. For Firefox, the default version of Selenium when no value is specified depends on the version of Firefox.

<details><summary><strong>Firefox and Selenium versions</strong></summary>

<table>
  <tr>
   <td>
    <strong>Firefox Version</strong>
   </td>
   <td>
    <strong>Selenium Version</strong>
   </td>
  </tr>
  <tr>
   <td>
    Firefox 47
   </td>
   <td>
    Selenium 2.53.1 only
   </td>
  </tr>
  <tr>
   <td>
    Firefox 46
   </td>
   <td>
    Selenium 2.51.0 2.52.0 2.53.0, 2.53.1
   </td>
  </tr>
  <tr>
   <td>
    Firefox 44 - 45
   </td>
   <td>
    Selenium 2.48.0, 2.50.0, 2.51.0, 2.52.0, 2.53.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 39 - 43
   </td>
   <td>
    Selenium 2.47.1, 2.48.0, 2.50.0, 2.51.0, 2.52.0, 2.53.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 38
   </td>
   <td>
    Selenium 2.46.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 32 - 37
   </td>
   <td>
    Selenium 2.45.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 26 - 31
   </td>
   <td>
    Selenium 2.40.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 23 - 25
   </td>
   <td>
    Selenium 2.35.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 21 - 22
   </td>
   <td>
    Selenium 2.33.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 20
   </td>
   <td>
    Selenium 2.31.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 19
   </td>
   <td>
    Selenium 2.30.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 17 - 18
   </td>
   <td>
    Selenium 2.29.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 12 - 16
   </td>
   <td>
    Selenium 2.27.0
   </td>
  </tr>
  <tr>
   <td>
    Firefox 11 and below
   </td>
   <td>
    Selenium 2.18.0
   </td>
  </tr>
</table>
</details>
<br/>

"Marionette" replaces the Firefox driver in Firefox 48+. Its binary is called geckodriver (previously wires). The version we use depends on whether the job is Selenium 2 or 3:

* For Selenium 2, the marionette (geckodriver) version is 0.9.0.
* For Selenium 3, the marionette (geckodriver) version is 0.11.1.
* For Firefox 53 and above, the marionette (geckodriver) version is 0.16.0.
* For Firefox 55 and above, the marionette (geckodriver) version is 0.18.0.
* For Firefox 57 and above, the marionette (geckodriver) version is 0.23.0.

When testing with Chrome and Internet Explorer, Selenium Version is not used to determine the version of the ChromeDriver or IEDriver that is used. For these browsers, you should set the driver version as described for the **Chrome Driver Version** and **Internet Explorer Driver Version** options.

:::tip Default Selenium Version

By default, Sauce Labs will use the following version of Selenium, depending on your selected combination of browser and operating system. While Selenium 3 is not yet fully implemented as a default version, it is supported for all Chrome and Firefox browsers on Mac and Windows platforms, for Safari 10+ on macOS 10.12 Sierra, and for Microsoft Edge and IE browsers version 10 and above. Currently Sauce Labs supports Selenium 3.4.0+ for Firefox and Safari and Selenium 3.5.0+ for Microsoft Edge and Chrome.

<details><summary><strong>Default Selenium version</strong></summary>

<table>
  <tr>
   <td><strong>Browser Name</strong>
   </td>
   <td><strong>Default Selenium Version</strong>
   </td>
  </tr>
  <tr>
   <td>Microsoft Edge
   </td>
   <td>2.52.0
   </td>
  </tr>
  <tr>
   <td>Chrome
   </td>
   <td>Latest Chromedriver
   </td>
  </tr>
  <tr>
   <td>Firefox
   </td>
   <td>Dev: 3.4.0
Beta: 3.4.0

53+: 3.4.0

39+: 2.53.1
   </td>
  </tr>
  <tr>
   <td>Safari
   </td>
   <td>11.0: 3.4.0

Pre-11.0: 2.48.0
   </td>
  </tr>
  <tr>
   <td>Internet Explorer
   </td>
   <td>2.53.1
   </td>
  </tr>
</table>

</details>
<br/>

You can set the Selenium version for your tests by using the `seleniumVersion` desired capability (e.g., `'seleniumVersion' = '3.8.1'`)
:::
<br/>
__Value Type__: string.<br/>
__Example__: `"seleniumVersion": "2.46.0"`

---
### `avoidProxy`
__Description__: allows you to avoiding the Selenium Proxy. By default, Sauce routes traffic from some WebDriver browsers (Edge, Internet Explorer, and Safari) through the Selenium HTTP proxy server so that HTTPS connections with self-signed certificates work everywhere. The Selenium proxy server can cause problems for some users. If that's the case for you, you can configure Sauce to avoid using the proxy server and have browsers communicate directly with your servers.

Selenium Proxy is not required for use with Firefox or Google Chrome. Under WebDriver, they're not affected by this flag, as they handle invalid certificates automatically.

This flag is not compatible with Sauce Connect Proxy.

__Value Type__: boolean.

__Example__: `"avoidProxy": true`
<br/>

### `extendedDebugging`
__Description__: Enable Extended Debugging, which records HAR files for some browsers, as well as console.json logs. These are extremely valuable for debugging flaky tests. Default value is `false`.

See [Debugging Tests with JavaScript Console Logs and HAR Files (Extended Debugging)](https://wiki.saucelabs.com/pages/viewpage.action?pageId=70072943) for more information.

__Value Type__: boolean
__Example__: `"extendedDebugging": true`
<br/>

### `capturePerformance`
__Description__: enable Performance Capture feature. Sauce Performance Testing can be enabled by setting both extendedDebugging and capturePerformance to `true`. Default value is `false`. See Getting Started with Sauce Front-End Performance for more information.
__Value Type__: boolean
__Example__: `"capturePerformance": true`
<br/>

### `webdriver.remote.quietExceptions`
__Description__: enable WebDriver's automatic screen shots. Selenium WebDriver captures automatic screenshots for every server side failure, for example if an element is not found. Sauce disables this by default to reduce network traffic during tests, resulting in a considerable performance improvement in most tests. You can enable this feature, but keep in mind that it may be detrimental to the performance of your jobs.

__Value Type__: boolean

__Example__: `"webdriver.remote.quietExceptions": false`


## Mobile App Capabilities: Appium Settings (Required)

These common Appium test configuration settings can be added with an `appium:` prefix in your test session creation code.

If you are not using the official Appium bindings, make sure to prefix all Appium capabilities with `appium:` to make them W3C WebDriver-compliant. For more information about Appium-specific options, see the [Appium Server Capabilities page of the Appium.io website](http://appium.io/docs/en/writing-running-appium/caps).

### `browserName`

__Description__: The mobile web browser that will be automated in the simulator, emulator or device.

:::tip For Web Apps

If you're running a test on an Android emulator, you'll need to specify `"Browser"` (the Android stock browser for older Android versions) and `"Chrome"` (for newer Android versions).

For iOS simulators, you'll need to specify `"Safari"`.
:::

:::tip For Mobile Native and Hybrid Apps

If you're testing a mobile native or hybrid app, the value for this capability should be an empty string.
:::

__Value Type__: string.

__Example__: `"browserName": "Safari"`
<br/>

### `deviceName`
__Description__: allows you to set the name of the simulator, emulator, or device you want to use in the test.

:::tip Generic Android Emulator

For Android emulator tests, you can request a generic Android emulator by using the option `"deviceName":"Android Emulator"`. If you want to use an Android emulator that looks and feels like a specific Android phone or tablet (e.g., Google Nexus 7 HD Emulator or a Samsung Galaxy S4), you need to specify the exact Android emulator skin to use (e.g., `"deviceName":"Samsung Galaxy S4 Emulator"`).
:::

:::tip Emulator Skins and Configurations

Each Android emulator skin will have a different configuration depending on the phone or tablet that it emulates. For example, all the skins have different resolutions, screen dimensions, pixel densities, memory, etc. You can use our [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator?src=sidebar#/) to get a list of the available Android emulator skins for the various Android emulator versions.
:::

__Value Type__: string.

__Example__: `"deviceName": "Google Nexus 7 HD Emulator"`
<br/>

### `platformVersion`
__Description__: allows you to set the mobile OS platform version that you want to use in your test.

__Value Type__: string.

__Example__: `"platformVersion": "9.1"`
<br/>

### `platformName`
__Description__: allows you to set the mobile operating system platform name you want to use in your test.

__Value Type__: string.

__Example__: `"platformName": "iOS"`
<br/>

### `app`
__Description__: allows you to set the path to an .ipa, .apk or .zip file containing the app you want to test. This could be the location of your app in [Application Storage](mobile-apps/app-storage) (e.g., `storage:filename=myapp.zip`) or the URL to a remote location where your app is located (e.g., http://myappurl.zip).

This option is required only for testing mobile native apps or hybrid web apps.

__Value Type__: string.

__Example__: `"app": "storage:filename=my_app.zip"`
<br/>

### `automationName`
__Description__: allows you to set the automation engine that will be used. Possible values are: `Appium`, `UiAutomator2`, `Selendroid`. Default value is Appium.

__Value Type__: string.

__Example__: `"automationName": "UiAutomator2"`
<br/>

### `appPackage`

<p><small><Highlight color="#946f59">Android Only</Highlight></small></p>

__Description__: Application Package. The Java package of the Android app you want to run.

:::tip Automatic Package Detection

Appium automatically determines the package to launch; you'll only need to use this desired capability if you want to specify a package different from the default one.
:::

__Value Type__: string.

__Example__: `"appPackage": "com.example.android.myApp, com.android.settings"`
<br/>

### `appActivity`

<p><small><Highlight color="#946f59">Android Only</Highlight></small></p>

__Description__: allows you to set the name for the Android activity you want to launch from your package.

:::tip Don't Forget the Dot!

This capability needs to be preceded by a dot (e.g., `.MainActivity`).
:::

:::tip Automatic Activity Detection

Appium automatically determines the activity to launch; you'll only need to use this desired capability if you want to specify an activity different from the default one.
:::

__Value Type__: string.

__Example__: `"appActivity": ".MainActivity"`
<br/>

### `autoAcceptAlerts`

<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Description__: setting this option will automatically accept any unexpected browser alerts that come up during your test, such as when Safari pops up the alert "Safari would like to use your current location (Don't Allow | Allow)."

__Value Type__: boolean

__Example__: `"autoAcceptAlerts": true`
<br/>

## Mobile App Capabilities: Sauce-Specific (Optional)

Below are some additional options that you can use in your Appium tests. They can be added to the `sauce:options` block of your session creation code.

### `appiumVersion`
__Description__: the Appium driver version you want to use.

:::tip Default Appium Version

It is recommended to use the default Appium Version.

If you don’t select an Appium Version, this capability will automatically default to the latest version of Appium that is compatible with your selected OS. If you prefer to use a different version of Appium for your test, enter the version number you want as the value for the appiumVersion capability.

You can find the release notes for each Appium version at the [Appium GitHub repository](https://github.com/appium/appium/releases). In order for you to have a window of time to check the compatibility of your test suites with the latest Appium version, it won't be set as the default version on Sauce until one week after the version release.
:::

__Value Type__: string.

__Example__: `"appiumVersion": "1.5.3"`
<br/>

### `deviceType`
__Description__: the type of device type to emulate. Options are: `tablet` and `phone`.

__Value Type__: string.

__Example__: `"deviceType": "tablet"`
<br/>

### `deviceOrientation`
__Description__: the device orientation in which the simulator/device will be rendered. Options are `portrait` and `landscape`.

__Value Type__: string.

__Example__: `"deviceOrientation": "portrait"`
<br/>

## Desktop and Mobile Capabilities: Sauce-Specific (Optional)

The following are Sauce Labs-specific options you can set for both Selenium and Appium Tests. Depending on your use case, they may or may not be required.

#### **Test Annotation**

You can add these annotations to your tests to make them easier to track and identify. These settings apply to all tests run on the Sauce Labs platform; they can be added to the `sauce:options` block of your session creation code.

### `name`
__Description__: use this to record test names for jobs and make it easier to find individual tests.

__Value Type__: string.

__Example__: `"name": "my example name"`
<br/>

### `build`
__Description__: use this to associate jobs with a build number or app version, which is then displayed on both the Dashboard and Archives view.

__Value Type__: string.

__Example__: `"build": "build-1234"`
<br/>

### `tags`
__Description__: User-defined tags for grouping and filtering jobs in the Dashboard and Archives view.

__Value Type__: list.

__Example__: `"tags": ["tag1","tag2","tag3"]`
<br/>

### `custom-data`
__Description__: user-defined custom data that will accept any valid JSON object, limited to 64KB in size.

__Value Type__: object.

__Example__:

```java
"custom-data": {"release": "1.0",
                "commit": "0k392a9dkjr",
                "staging": true,
                "execution_number": 5,
                "server": "test.customer.com"}
```
<br/>

### `public`
__Description__: We support several test/job result visibility levels, which control who can view the test details. The visibility level for a test can be set manually from the test results page, but also programmatically when starting a test or with our REST API. For more information about sharing test results, see the topics under [Sharing the Results of Sauce Labs Tests](https://wiki.saucelabs.com/display/DOCS/Sharing+the+Results+of+Sauce+Labs+Tests).

Available visibility modes are:
* **public**:
  * Accessible to everyone.
  * May be listed on public web pages and indexed by search engines.
* **public restricted**:
  * Share your job's results page and video, but keeps the logs only for you.
  * Hides the fancy job log.
  * Prohibits access to the raw Selenium log so that anonymous users with the link will be able to watch the video and screen shots, but won't be able to see what's being typed and done to get there.
* **share**:
  * Only accessible to people with a valid link.
  * Not listed on publicly available pages on Sauce Labs.
  * Not indexed by search engines.
* **team**:
  * Best option if you want to share your jobs with other team members that were created as a sub-accounts of one parent account.
  * Only accessible to people under the same root account as you.
* **private**:
  * Best option if you don't want to share your test results page and video with anyone.
  * Only you (the owner) will be able to view assets and test results page.

__Value Type__: string.

__Example__: `"public": "team"`
<br/>

#### **Sauce Connect Tunnel Settings**

The following are Sauce Labs-specific options you can set for both Selenium and Appium Tests. Depending on your use case, they may or may not be required.

These settings apply to all tests run on the Sauce Labs Platform with a Sauce Connect proxy tunnel; they can be added to the `sauce:options` block of your session creation code.

### `tunnelIdentifier`
__Description__: If you're using Sauce Connect Proxy to test an application that is behind a firewall or on your local machine, you must provide the identifier of the Sauce Connect tunnel to use it. See [Basic Sauce Connect Proxy Setup](https://docs.saucelabs.com/secure-connections/sauce-connect/setup-configuration/basic-setup) for more information.

__Value Type__: string.

__Example__: `"tunnelIdentifier": "MyTunnel01"`
<br/>

### `parentTunnel`  
__Description__: for shared tunnels in your organization. This capability will let the test job use any shared tunnels available from the specified parent account (i.e., any account that is upstream in the hierarchy). See [Using Sauce Connect Tunnel Identifiers](secure-connections/sauce-connect/setup-configuration/high-availability) for more information.

__Value Type__: string.

__Example__: If you're using a shared tunnel, you'll need to specify both `tunnelIdentifier` and `parentTunnel`.

```java
"tunnelIdentifier": "ParentTunnelName"
"parentTunnel": "<username of parent>"
```

<br/>

#### **Asset Management Settings**

These settings apply to all tests run on the Sauce Labs Platform. They can be added to the `sauce:options` block of your session creation code.

### `recordVideo`
__Description__: use this to disable video recording. By default, Sauce Labs records a video of every test you run.

Disabling video recording can be useful for debugging failing tests as well as having a visual confirmation that a certain feature works (or still works). However, there is an added wait time for screen recording during a test run.

__Value Type__: boolean.

__Example__: `"recordVideo": false`
<br/>

### `videoUploadOnPass`
__Description__: disables video upload for passing tests. As an alternative to `recordVideo`, `videoUploadOnPass` will let you discard videos for passing tests identified using the passed setting. It disables video post-processing and uploading that may otherwise consume some extra time after your test is complete.

__Value Type__: boolean

__Example__: `"videoUploadOnPass": false`
<br/>

### `recordScreenshots`
__Description__: disables step-by-step screenshots. Sauce Labs captures step-by-step screenshots of every test you run. Most users find it very useful to get a quick overview of what happened without having to watch the complete video. However, this feature may add some extra time to your tests. You can avoid this by optionally turning off this feature.

__Value Type__: boolean

__Example__: `"recordScreenshots": false`
<br/>

### `recordLogs`
__Description__: disables log recording. By default, Sauce creates a log of all the actions that you execute to create a report for the test run that lets you troubleshoot test failures more easily.

Selenium logs will still be recorded. This option only disables recording of the log.json file. The selenium-server.log will still be recorded even if you choose to disable recording of the log.json.

__Value Type__: boolean

__Example__: `"recordLogs": false`
<br/>

#### **Timeout Settings**

These settings apply to all tests run on Virtual device cloud (desktop browsers, emulators, and simulators). They can be added to the `sauce:options` block of your session creation code.

### `maxDuration`
__Description__: sets maximum test duration. As a safety measure to prevent tests from running indefinitely, Sauce limits the duration of tests to 30 minutes by default. You can adjust this limit on a per-job basis and the maximum value is 10800 seconds.

:::caution Test Should Not Exceed 30 Minutes
A test should never last more than 30 minutes and ideally should take less than five minutes.

We have a three-hour maximum in place that exists mainly to ease the transition of new users migrating long-running tests to Sauce Labs.

While our test VMs respect the `maxDuration` capability when it's set in tests, it may not always be precise. Tests will never be timed out before their `maxDuration` has elapsed. In most cases, they will be timed out very shortly after their maxDuration has elapsed (usually less than one second). But, in some rare cases, such as when the test VM is suffering performance problems, they can be allowed to run longer (30 seconds or more).
:::

__Value Type__: integer.

__Example__: `"maxDuration": 1800`
<br/>

### `commandTimeout`
__Description__: sets command timeout. As a safety measure to prevent Selenium crashes from making your tests run indefinitely, we limit how long Selenium can take to run a command in our browsers. This is set to 300 seconds by default. The value of this setting is given in seconds. The maximum command timeout value allowed is 600 seconds.

__Value Type__: integer.

__Example__: `"commandTimeout": 300`
<br/>

### `idleTimeout`
__Description__: sets idle test timeout. As a safety measure to prevent tests from running too long after something has gone wrong, Sauce limits how long a browser can wait for a test to send a new command. This is set to 90 seconds by default and limited to a maximum value of 1000 seconds. You can adjust this limit on a per-job basis. The value of this setting is given in seconds.

__Value Type__: integer.

__Example__: `"idleTimeout": 90`
<br/>

#### **Pre-Run Executables**

<p><span className="sauceDBlue">Desktop VMs, Emulators, Simulators Only</span></p>

The settings apply to virtual device tests only (desktop browsers, emulators, and simulators). They can be added to the `sauce:options` block of your session creation code. Here's a full example that displays all of the below options together:

```java
"prerun": {
         "executable": "http://url.to/your/executable.exe",
         "args": [ "--silent", "-a", "-q" ],
         "background": false, "timeout": 120
          }
```

### `prerun` (primary key)

<p><span className="sauceDBlue">Desktop VMs, Emulators, Simulators Only</span></p>

__Description__: use this to define pre-run executables. You can provide a URL to an executable file, which will be downloaded and executed to configure the VM before the test starts. For faster performance, you may want to upload the executable to your [Sauce Application Storage](/mobile-apps/app-storage) space. This capability takes a JSON object with four main keys. See [Using Pre-Run Executables to Configure Browsers and VMs](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365697) for more information.

:::tip
* Running AutoIt Scripts: If you want to run an AutoIt script during your test, compile it as an .exe, send it using this capability, and set background to true to allow AutoIt to continue running throughout the full duration of your test.
* Using Multiple Pre-Run Executables: If you need to send multiple pre-run executables, the best way is to bundle them into a single executable file, such as a self-extracting zip file.
* Sending a Single String Instead of JSON: If a single string is sent as the pre-run capability rather than a JSON object, this string is considered to be the URL to the executable, and the executable launches with background set to `false`.
:::

### `executable` (secondary key)

<p><span className="sauceDBlue">Desktop VMs, Emulators, Simulators Only</span></p>

__Description__: provide the URL to the executable you want to run before your browser session starts.

__Value Type__: string.
<br/>


### `args` (secondary key)

<p><span className="sauceDBlue">Virtual Devices Only</span></p>

__Description__: a list of the command line parameters that you want the executable to receive. Valid arguments are:
* `--silent` or `/S`: Installs the script silently without raising any dialogs.
* `-a`: Add switches to the command line of the underlying setup.exe process.
* `-q`: Like `--silent`, installs the script without raising any dialogs.

__Value Type__: list.
<br/>

### `background` (secondary key)

<p><span className="sauceDBlue">Desktop VMs, Emulators, Simulators Only</span></p>

__Description__: defines whether Sauce should wait for this executable to finish before your browser session starts. If background isn't set or is set to  `false` , Sauce will wait for up to 90 seconds for the executable to finish. At that point, the browser will start and your test will proceed.

__Value Type__: boolean.
<br/>

### `timeout` (secondary key)

<p><span className="sauceDBlue">Desktop VMs, Emulators, Simulators Only</span></p>

__Description__: the number of seconds Sauce will wait for your executable to finish before your browser session starts. If timeout isn't set, Sauce will wait for up to 90 seconds for the executable to finish. `timeout` is capped at 360 seconds and won't apply if `background` is set to `true.`

__Value Type__: integer.


## Desktop and Mobile Capabilities: Additional Custom Settings (Optional)

### `priority`
__Description__: setting to prioritize jobs. If you have multiple new jobs waiting to start (i.e., across a collection of sub-accounts), jobs with a lower priority number take precedence over jobs with a higher number.

So, for example, if you have multiple jobs simultaneously waiting to start, we'll first attempt to find resources to start all the jobs with priority 0, then all the jobs with priority 1, etc.

When we run out of available virtual machines, or when you hit your concurrency limit, any jobs not yet started will wait. Within each priority level, jobs that have been waiting the longest take precedence.

__Value Type__: integer.

__Example__: `"priority": 0`
<br/>

### `screenResolution`
__Description__: allows you to specify the screen resolution to be used during your test session. Default screen resolution for Sauce tests when value not specified is 1024x768.

<details><summary><strong>Supported Operating Systems</strong></summary>

* Windows 7 (except Windows 7 with IE 9)
* Windows 8
* Windows 8.1
* Windows 10
* OS X 10.9
* OS X 10.10
* OS X 10.11
* macOS 10.2

</details>
<br/>

__Value Type__: string.

__Example__: `"screenResolution": "1280x1024"`
<br/>

### `timeZone`
__Description__: allows you to set a custom time zone for your test. If the `timeZone` name has two or more or words (e.g., `Los Angeles`), you'll need to separate the words with either a space or an underscore. We support location names (not their paths), as shown in the example below.

* **For Desktop VMs**: can be configured with custom time zones. This feature should work on all operating systems, however time zones on Windows VMs are approximate. The time zone will usually default to whatever local time zone is on your selected data center, but this cannot be guaranteed. You can find a complete list of time zones [here](https://en.wikipedia.org/wiki/Lists_of_time_zones).
* **For Mobile Devices**: While Appium does not provide a capability for editing the time zone of a mobile device in a test, here are some workarounds:
  * For **iOS devices**, you can use the Sauce Labs custom capability to change the time on the Mac OS X VM, which will be picked up by the iOS simulator.
  * For **Android devices** (7.2 or later only), use the following ADB command to grant Appium notification read permission in order to use the time zone capability:
    ```java
    adb shell cmd notification allow_listener io.appium.settings/io.appium.settings.NLService
    ```

    See the [Appium Android documentation](http://appium.io/docs/en/writing-running-appium/android/android-shell/#mobile-shell) for additional support.

__Value Type__: string.

__Examples__: `"timeZone": "Los_Angeles"`, `"timeZone": "New_York"`, `"timeZone": "Honolulu"`, `"timeZone": "Alaska"`
