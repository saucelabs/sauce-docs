---
id: test-configuration-options
title: Test Configuration Options
sidebar_label: Test Configuration Options
---
This page includes a list of valid test configuration options (capabilities) for tests run on Sauce Labs.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

See the [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator#/ to generate the code for setting the capabilities to execute a test.

_Depending on which environment you are running tests in, different options, also known as **Capabilities**, should be set_. There are different sets of capabilities for different environments, which can be combined. These configurations are added to the [Capabilities](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Capabilities.html) or [Options](https://www.selenium.dev/documentation/en/driver_idiosyncrasies/driver_specific_capabilities/) classes. Some of these setting are required for a test to run in a given environment, while some are optional.

* **[W3C Capabilities](#browser-w3c-capabilities--optional)**: Required for any test using Selenium or Appium to communicate with the browser. W3C capabilities are universal capabilities for any test, and are usually combined with additional capabilities
* **[Sauce Labs Capabilities](#desktop-and-mobile-capabilities-sauce-specific--optional)**: Needed for running a test on the Sauce Labs Cloud, with different possible sets for different environments. Though there aren't any capabilities required, you will need to [configure the endpoint URL](/basics/data-center-endpoints/data-center-endpoints) and should pass the test name and status as capabilities to the remote webdriver.
* **Appium Capabilities:** Required for any test using Appium, either testing web browsers or apps
  * **[Mobile App Capabilities](#mobile-app-capabilities-appium-settings--required)**: Required if you are running a test on a mobile app
  * **Mobile Web Capabilities:** If you are using Appium to test a web app, you need to set the `deviceName`, `platformName` `platformVersion`, and `automationName` the same way you would for a mobile app test, along with settings for the browser.
* **[Browser Capabilities](#desktop-browser-capabilities-sauce-specific--optional)**: You can set different kinds of capabilities for web browsers you are testing on Sauce Labs. Each browser also has it's own set of pre-defined options you can set to help you test. You can add these in regular capabilities or options, or use the browser-defined capabilities (browser options classes) to configure your browser tests:
  * [Chrome Capabilities](https://chromedriver.chromium.org/capabilities)
  * [Microsoft Edge Capabilities](https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options)
  * [Firefox Capabilities](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities/firefoxOptions)
  * [Internet Explorer Capabilities](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/ie/InternetExplorerDriver.html)
  * [Safari Capabilities](https://developer.apple.com/documentation/webkit/about_webdriver_for_safari)


## WebDriver W3C Capabilities – Required

Sauce Labs determines W3C sessions with the presence of `sauce:options`
capabilities and [generic W3C WebDriver-compliant capabilities](https://www.w3.org/TR/webdriver1/#capabilities). See [W3C Capabilities Support](/dev/w3c-webdriver-capabilities) for more information.

:::tip
Use the latest version of the Selenium library in your code for the most up-to-date support.
:::

Below are the W3C WebDriver primary test configuration settings for Sauce Labs desktop browser tests and mobile tests.

### `browserName`
__Description__: identifies the user agent. See the [WebDriver
W3C Specification](https://w3c.github.io/webdriver/#dfn-browser-name) for more info.

>**NOTE**: This setting also applies to emulators, simulators and real devices when automating with a mobile browser. It must be set when [App Name](#app) is not set.
* For Android v5 and below, the value needs to be `"Browser"`, v6 and above, it is `"Chrome"`.
* For iOS, the value needs to be `"Safari"`.
* For mobile native or hybrid apps, the value needs to be an empty string.

__Value Type__: string.

__Example__:
```java
"browserName": "firefox"
```

### `browserVersion`
__Description__: identifies the version of the browser you want to use in your test. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-browser-version) for more info.

To use the latest stable version of Chrome or Firefox that we support, you can use `"browserVersion": "latest"`. You can also use `"browserVersion": "latest-1"` or `"browserVersion": "latest-2"`, etc. to request the next most recent versions of a browser.

For example, if the latest stable version of Chrome is 73, you can request `"latest-2"` to use Chrome 71.Note that the latest version for Safari browsers will depend on the chosen `"platformName"`.

See the [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) for valid options.

>**NOTE**: This setting cannot be used for mobile browsers, as your test will use the default browser installed for the given Appium version.

__Value Type__: string.

__Example__:
```java
"browserVersion": "latest"
```

### `platformName`
__Description__: identifies the name of the operating system the browser or mobile device should be running on.

You can use this for [dynamic device allocation](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation). Values are not case-sensitive (i.e., `"ios"` is the same as `"iOS"`).

See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-platform-name) for more info.

__Value Type__: string.

__Example__:
```java
"platformName": "macOS 10.13", "platformName": "iOS", "platformName": "Android"
```

## Browser W3C Capabilities – Optional
Below are more Sauce-compatible W3C WebDriver specification capabilities. To view their descriptions, see the [W3C WebDriver Specification Capabilities](https://www.w3.org/TR/webdriver/#capabilities).

### `acceptInsecureCerts`
__Description__: Indicates whether untrusted and self-signed TLS certificates are implicitly trusted on navigation for
the duration of the session. The default value is `false`.

See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-insecure-tls-certificates) for more info.

__Value Type__: boolean.

__Example__:
```java
"acceptInsecureCerts": true
```

### `pageLoadStrategy`
__Description__: Defines the current session’s page load strategy. The allowed values and their associated required document readiness state may be found on the [WebDriver W3C Specification Page Load Strategies Table](https://w3c.github.io/webdriver/#dfn-table-of-page-load-strategies).

See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-page-load-strategy) for more info.

__Value Type__: string.

__Example__:
```java
"pageLoadStrategy": "eager"
```

### `proxy`
__Description__: Defines the current session’s proxy configuration.

See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-proxy-configuration) for more info.

__Value Type__: object.

__Example__:
```java
"proxy": {"proxyType": "manual",
          "httpProxy": "myproxy.com:3128"}
```

### `timeouts`
__Description__: Describes the timeouts imposed on certain session operations. Applicable timeouts can be found
on the [WebDriver W3C Specification Timeouts Table](https://w3c.github.io/webdriver/#timeouts)

See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-session-script-timeout) for more info.

__Value Type__: object.

__Example__:

```java
"timeouts": {"script": 20000,
             "pageLoad": 400000,
             "implicit": 1000}
```
<br/>

### `strictFileInteractability`
__Description__: Defines the current session’s strict file interactability. This indicates that interactabilty checks will be applied to File type input elements. The default is `false`.

See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-strict-file-interactability) for more info.

__Value Type__: boolean.

__Example__:
```java
"strictFileInteractability": true
```
<br/>

### `unhandledPromptBehavior`
__Description__: Describes the current session’s user prompt handler. The allowed options may be found in the  [WebDriver W3C Specification User Prompt Handler Table](https://w3c.github.io/webdriver/#dfn-user-prompt-handler). The default value is `"dismiss and notify"`.

See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-unhandled-prompt-behavior) for more info.

__Value Type__: string.

__Example__:
```java
"unhandledPromptBehavior": "ignore"
```
<br/>

## Desktop Browser Capabilities: Sauce-Specific – Optional

These options apply to specific browsers and can be added to the `sauce:options` block of your test session creation code.

### `chromedriverVersion`
__Description__: allows you to specify the ChromeDriver version you want to use for your tests. The default version of ChromeDriver when no value is specified depends on the version of Chrome used. As of Chrome 73, the major version of the driver and the browser must match.

For a list of chromedriver versions, see [chromedriver versions list](https://chromedriver.storage.googleapis.com/index.html).

:::tip Use this for specifying a specific point release.

If you find a bug that you determine is driver related, you can specify the latest point release of the chrome driver that matches the browser version.

For example, Sauce Labs might default to `"88.0.4324.27"`, but there is a bug fix in version `"88.0.4324.96"`, so you can specify that in your test.
:::

__Value Type__: string.

__Example__:
```java
"chromedriverVersion": "88.0.4324.96"
```

<br/>

### `edgedriverVersion`
__Description__: allows you to specify the Microsoft Edge driver version you want to use for your tests.

For a list of edgedriver versions, see the [Microsoft Edge Driver website](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

__Value Type__: string.

__Example__: `"edgedriverVersion": "90.0.818.51"`
:::note
Edge Driver is based on Chrome Driver, so the same caveats from [chromedriverVersion](#chromedriverversion) apply to `edgedriverVersion`
:::
<br/>


### `geckodriverVersion`   

__Description__: allows you to specify the Firefox GeckoDriver version. The default geckodriver version varies based on the version of Firefox specified.

For a list of geckodriver versions and the Firefox versions they support, see [geckodriver Supported Platforms](https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html).

__Value Type__: string.

__Example__:
```java
"geckodriverVersion": "0.27.0"
```
<br/>

### `iedriverVersion`

__Description__: allows you to specify the Internet Explorer Driver version. If no version is specified, it defaults to 2.53.1.

For a list of IE Driver versions, see [Internet Explorer Driver Server CHANGELOG](https://raw.githubusercontent.com/SeleniumHQ/selenium/trunk/cpp/iedriverserver/CHANGELOG).

__Value Type__: string.

__Example__:
```java
"iedriverVersion": "3.150.1"
```
<br/>

### `seleniumVersion`

__Description__: allows you to specify the version of Selenium you want to use for your test.

Sauce Labs defaults to different versions depending on how old the browser or platform is and whether the user is initializing a session with valid W3C syntax.

:::tip Always use the latest version

The Selenium developers are very conscientious about backward compatibility support, so we recommend always using the latest available version of Selenium unless you find a specific, known issue.
:::

__Value Type__: string.

__Example__:
```java
"seleniumVersion": "3.141.1"
```
<br/>

### `avoidProxy`
__Description__: allows the browser to communicate directly with servers without going through a proxy. By default, Sauce routes traffic from Internet Explorer and Safari through an HTTP proxy server so that HTTPS connections with self-signed certificates will work.
The proxy server can cause problems for some users, and this setting allows you to avoid it.

>**NOTE**: Any test run with a Sauce Connect tunnel has to use the proxy and this flag will be ignored.

__Value Type__: boolean.

__Example__:
```java
"avoidProxy": true
```
<br/>

### `extendedDebugging`
__Description__: enables [Extended Debugging features](/insights/debug/index.html).

This applies to Firefox and Chrome only. It records HAR files and console logs for both of these browsers. In Chrome, it also enables network interception, network and cpu throttling as well as access to network logs during the session. It is required to be true for [`capturePerformance`](#captureperformance). The default value is `false`.

__Value Type__: boolean.

__Example__:
```java
"extendedDebugging": true
```
<br/>

### `capturePerformance`
__Description__: enables Performance Capture feature.
Sauce Performance Testing can be enabled by setting both [`extendedDebugging`](#extendeddebugging) and `capturePerformance` to `true`. Default value is `false`.
See [Getting Started with Sauce Front-End Performance](/performance) for more information.

__Value Type__: boolean.

__Example__:
```java
"capturePerformance": true
```
<br/>

### `screenResolution`
__Description__: allows you to specify the screen resolution to be used during your test session.
Default screen resolution for Sauce tests is 1024x768.

>**NOTE**: You cannot set screen resolution on Windows 7 with IE 9.

__Value Type__: string.

__Example__:
```java
"screenResolution": "1280x1024"
```

## Mobile App Capabilities: Appium Settings – Required

These common Appium test configuration settings can be added with an `appium:` prefix in your test session creation code.

If you are not using the official Appium bindings, make sure to prefix all Appium capabilities with `appium:` to make them W3C WebDriver-compliant. For more information about Appium-specific options, see the [Appium Server Capabilities page of the Appium.io website](http://appium.io/docs/en/writing-running-appium/caps).

>**NOTE**: [`browserName`](#browsername) and [`platformName`](#platformname) are frequently used in Appium tests, but are W3C capabilities so they are not prepended with `appium:`

<br/>


### `app`
__Description__: allows you to set the path to an .ipa, .apk or .zip file containing the app you want to test.

This could be the location of your app in [Application Storage](mobile-apps/app-storage) (e.g., `storage:filename=myapp.zip`) or the URL to a remote location where your app is located (e.g., `http://myappurl.zip`).

If you're running a mobile browser test, this capability can be left blank.

__Value Type__: string.

__Example__:
```java
"appium:app": "storage:filename=my_app.zip"
```
<br/>

### `deviceName`
__Description__: allows you to set the name of the simulator, emulator, or real device you want to use in the test.

You can use this to set up a test with either [static or dynamic allocation](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation), and run individual or parallel tests.
* Dynamic allocation example: for an Android emulator test, you can request a generic Android emulator by using the option `"deviceName":"Android Emulator"`.
* Static allocation example: if you want to use an Android emulator that looks and feels like a specific Android phone or tablet (e.g., Google Nexus 7 HD Emulator or a Samsung Galaxy S4), you need to specify the exact Android emulator skin to use (e.g., `"appium:deviceName":"Samsung Galaxy S4 Emulator"`).

Each Android emulator skin will have a different configuration depending on the phone or tablet that it emulates. For example, all the skins have different resolutions, screen dimensions, pixel densities, memory, etc. You can use our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to get a list of the available Android emulator skins for the various Android emulator versions.

__Value Type__: string.

__Example__:
```java
"appium:deviceName": "Google Nexus 7 HD Emulator"
```
<br/>

### `platformVersion`
__Description__: allows you to set the mobile OS platform version that you want to use in your test.

You can use this for [dynamic device allocation](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation) to specify incremental versions (e.g., `"4.1"`) or major versions (e.g., `"4"`). By setting a major version, you'd have access to all devices running incremental versions (`"4.1"`, `"4.2"`, `"4.2.1"`, "`4.4.4"`). This also extends to minor and point versions (e.g., specifying `"4.4"` will match `"4.4.0"`, `"4.4.1"`).

__Value Type__: string.

__Example__:
```java
"appium:platformVersion": "9.1"
```

<br/>

### `automationName`
<p><small><Highlight color="#946f59">Android/Espresso Only</Highlight></small></p>
__Description__: allows you to set the automation engine that will be used. Possible values are: `Appium`, `UiAutomator2`, `Selendroid`. Default value is Appium.

__Value Type__: string.

__Example__:
```java
"appium:automationName": "UiAutomator2"
```
<br/>

### `appPackage`

<p><small><Highlight color="#946f59">Android Only</Highlight></small></p>

__Description__: enables you to specify the Java package of the Android app you want to run.

:::tip Automatic Package Detection

Appium automatically determines the package to launch; you'll only need to use this capability if you want to specify a package different from the default one.
:::

__Value Type__: string.

__Example__:
```java
"appium:appPackage": "com.example.android.myApp, com.android.settings"
```
<br/>

### `appActivity`

<p><small><Highlight color="#946f59">Android Only</Highlight></small></p>

__Description__: allows you to set the name for the Android activity you want to launch from your package. This capability must be preceded by a dot (e.g., `.MainActivity`).

:::tip Automatic Activity Detection

Appium automatically determines the activity to launch; you'll only need to use this desired capability if you want to specify an activity different from the default one.
:::

__Value Type__: string.

__Example__:
```java
"appium:appActivity": ".MainActivity"
```
<br/>

### `autoAcceptAlerts`

<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Description__: setting this option will automatically accept any unexpected browser alerts that come up during your test, such as when Safari pops up the alert "Safari would like to use your current location (Don't Allow | Allow)."

__Value Type__: boolean.

__Example__:
```java
"appium:autoAcceptAlerts": true
```
<br/>

## Mobile App Capabilities: Sauce-Specific – Optional

Below are some additional options that you can use in your Appium tests. They can be added to the `sauce:options` block of your session creation code.

### `appiumVersion`
__Description__: enables you to specify the Appium driver version you want to use. We recommend using the default Appium Version.

If you don’t select an Appium Version, this capability will automatically default to the latest version of Appium that is compatible with your selected OS. If you prefer to use a different version of Appium for your test, enter the version number you want as the value for the `appiumVersion` capability.

You can find the release notes for each Appium version at the [Appium GitHub repository](https://github.com/appium/appium/releases).

To allow a window of time to check the compatibility of your test suites with the latest Appium version, it won't be set as the default version on Sauce until one week after the version release.

__Value Type__: string.

__Example__:
```java
"appiumVersion": "1.5.3"
```
<br/>

### `deviceType`
__Description__: the type of device type to emulate. Options are: `tablet` and `phone`.

__Value Type__: string.

__Example__:
```java
"deviceType": "tablet"
```
<br/>

### `deviceOrientation`
__Description__: the device orientation in which the simulator/device will be rendered. Options are `portrait` and `landscape`.

__Value Type__: string.

__Example__:
```java
"deviceOrientation": "portrait"
```
<br/>

## Desktop and Mobile Capabilities: Sauce-Specific – Optional

The following are Sauce Labs-specific options you can set for any test run on the Sauce Labs platform. These can be added to the `sauce:options` block of your session creation code.

### `name`
__Description__: use this to record test names for jobs and make it easier to find individual tests.

__Value Type__: string.

__Example__:
```java
"name": "my example name"
```
<br/>

### `build`
__Description__: use this to associate multiple jobs with a build number or app version, which will then be displayed on both the **Test Results** dashboard and **Archive** view.

__Value Type__: string.

__Example__:
```java
"build": "build-1234"
```
<br/>

### `tags`
__Description__: user-defined tags for grouping and filtering jobs on the **Test Results** dashboard and **Archive** view. Tags can facilitate team collaboration.

__Value Type__: list.

__Example__:
```java
"tags": ["tag1","tag2","tag3"]
```
<br/>

### `username`
__Description__: use this to set your Sauce Labs username for the test. You can find this value under **Account** > **User Settings**.

:::note
You can either set `"username"` in capabilities or specify it in the URL you direct your tests to. For [Visual Tests](https://docs.saucelabs.com/dev/test-configuration-options#visual-testing)), this must be set in capabilities.
:::

__Value Type__: string.

__Example__:
```java
"username": "sauce-example-user"
```

<br/>

### `accessKey`
__Description__: use this to set your Sauce Labs access key for the test. You can find this value under **Account** > **User Settings**.

:::note
You can either set `"accessKey"` in capabilities or specify it in the URL you direct your tests to. For [Visual Tests](https://docs.saucelabs.com/dev/test-configuration-options#visual-testing), this must be set in capabilities.
:::

__Value Type__: string.

__Example__:
```java
"accessKey": "00000000-0000-0000-0000-000000000000"
```

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
__Description__: We support several test/job result visibility levels, which control who can view the test details. The visibility level for a test can be set manually from the test results page, but also programmatically when starting a test or with our REST API. For more information about sharing test results, see the topics under [Sharing the Results of Sauce Labs Tests](/test-results/sharing-test-results).

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

__Example__:
```java
"public": "team"
```
<br/>

### `tunnelIdentifier`
__Description__: If you're using [Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect/index.html) to test an application that is behind a firewall or on your local machine that has been created with a `--tunnel-identifier` value, you must provide that identifier in order to use the tunnel.

See [Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup) for more information.

__Value Type__: string.

__Example__:
```java
"tunnelIdentifier": "MyTunnel01"
```
<br/>

### `parentTunnel`  
__Description__: for using shared tunnels in your organization.

This capability will let the test job use any shared tunnels available from the specified parent account (i.e., any account that is upstream in the hierarchy).

See [Using Sauce Connect Tunnel Identifiers](/secure-connections/sauce-connect/setup-configuration/high-availability) for more information.

__Value Type__: string.

__Example__:

```java
"tunnelIdentifier": "ParentTunnelName"
"parentTunnel": "<username of parent>"
```

>**NOTE**: If you're using a shared tunnel, you'll need to specify both `tunnelIdentifier` and `parentTunnel`.

<br/>

### `recordVideo`
__Description__: use this to disable video recording. By default, Sauce Labs records a video of every test you run.

Disabling video recording can be useful for debugging failing tests as well as having a visual confirmation that a certain feature works (or still works). However, there is an added wait time for screen recording during a test run.

__Value Type__: boolean.

__Example__:
```java
"recordVideo": false
```
<br/>

### `videoUploadOnPass`
__Description__: disables video upload for passing tests. `videoUploadOnPass` is an alternative to `recordVideo`; it lets you discard videos for tests you've marked as passing.

It disables video post-processing and uploading that may otherwise consume some extra time after your test is complete.

__Value Type__: boolean.

__Example__:
```java
"videoUploadOnPass": false
```
<br/>

### `recordScreenshots`
__Description__: disables step-by-step screenshots. In addition to capturing video, Sauce Labs captures step-by-step screenshots of every test you run.

Most users find it very useful to get a quick overview of what happened without having to watch the complete video. However, this feature may add some extra time to your tests.

__Value Type__: boolean.

__Example__:
```java
"recordScreenshots": false
```
<br/>

### `recordLogs`
__Description__: disables log recording. By default, Sauce creates a log of all the actions that you execute to create a report for the test run that lets you troubleshoot test failures more easily.

This option disables only the recording of the log.json file; the selenium-server.log will still be recorded.

__Value Type__: boolean.

__Example__:
```java
"recordLogs": false
```
<br/>

#### **Timeout Settings**

These settings apply to all tests run on Virtual device cloud (desktop browsers, emulators, and simulators). They can be added to the `sauce:options` block of your session creation code.

## Virtual Device Capabilities: Sauce-Specific – Optional

The following are Sauce Labs-specific options that apply only for desktop sessions, emulators and simulators. These can be added to the `sauce:options` block of your session creation code.

### `maxDuration`
__Description__: sets maximum test duration in seconds. As a safety measure to prevent tests from running indefinitely, the default is 1,800 seconds (30 minutes), and the maximum is 10,800 seconds (three hours).

:::caution Tests Should Not Exceed 30 Minutes

A test should never need to run more than 30 minutes. Our data shows that tests that run in under two minutes are twice as likely to pass as tests that take longer than
seven minutes.

We have a three-hour maximum in place to ease the transition of new users migrating long-running tests to Sauce Labs.
:::

__Value Type__: integer.

__Example__:
```java
"maxDuration": 1800
```
<br/>

### `commandTimeout`
__Description__: sets command timeout in seconds. As a safety measure to prevent Selenium crashes from making your tests run indefinitely, we limit how long Selenium can take to run a command in our browsers. This is set to 300 seconds by default. The maximum command timeout value allowed is 600 seconds.

__Value Type__: integer.

__Example__:
```java
"commandTimeout": 300
```
<br/>

### `idleTimeout`
__Description__: sets idle test timeout in seconds. As a safety measure to prevent tests from running too long after something has gone wrong, we limit how long a browser can wait for a test to send a new command. This is set to 90 seconds by default and limited to a maximum value of 1000 seconds.

__Value Type__: integer.

__Example__:
```java
"idleTimeout": 90
```
<br/>

### `priority`
__Description__: setting to prioritize jobs. If you have multiple new jobs waiting to start (i.e., across a collection of sub-accounts), jobs with a lower priority number take precedence over jobs with a higher number.

So, for example, if you have multiple jobs simultaneously waiting to start, we'll first attempt to find resources to start all the jobs with priority `0`, then all the jobs with priority `1`, etc.

When we run out of available virtual machines, or when you hit your concurrency limit, any jobs not yet started will wait. Within each priority level, jobs that have been waiting the longest take precedence.

__Value Type__: integer.

__Example__:
```java
"priority": 0
```
<br/>

### `timeZone`
__Description__: allows you to set a custom time zone for your test. If the `timeZone` name has two or more or words, you'll need to separate the words with either a space or an underscore (i.e., Los Angeles would be `Los_Angeles`). We support location names (not their paths), as shown in the example below.

  * **For Desktop VMs**: can be configured with custom time zones.
  This feature should work on all operating systems, however time zones on Windows VMs are approximate.
  The time zone will usually default to whatever local time zone is on your selected data center, but this cannot be guaranteed.
  You can find a complete list of time zones [here](https://en.wikipedia.org/wiki/Lists_of_time_zones).
  * **For iOS Devices**: you can use this capability to change the time on the Mac OS X VM, which will be picked up by the iOS simulator.
  * **For Android Devices**: this capability is not supported for Android devices, but for Android 7.2 or later, there is a workaround. Use the following ADB command to grant Appium notification read permission in order to use the time zone capability:
  ```java
  adb shell cmd notification allow_listener io.appium.settings/io.appium.settings.NLService
  ```

  See the [Appium Android documentation](http://appium.io/docs/en/writing-running-appium/android/android-shell/#mobile-shell) for additional support.

__Value Type__: string.

__Examples__:
```java
"timeZone": "Los_Angeles", "timeZone": "New_York", "timeZone": "Honolulu", "timeZone": "Alaska"
```

<br/>

### Pre-Run Executables

Pre-run executables have a primary key ([`prerun`](#prerun-primary-key)) and four secondary keys:
* [`executable`](#executable-secondary-key)
* [`args`](#args-secondary-key)
* [`background`](#background-secondary-key)
* [`timeout`](#timeout-secondary-key)

Read the descriptions of each key below the example.

__Example__:
```
"prerun": {
         "executable": "http://url.to/your/executable.exe",
```

### `prerun` (primary key)

__Description__: use this to define pre-run executables. You can provide a URL to an executable file, which will be downloaded and executed to configure the VM before the test starts. For faster performance, you may want to upload the executable to your [Sauce Application Storage](/mobile-apps/app-storage) space. This capability takes a JSON object with four main keys. See [Using Pre-Run Executables to Configure Browsers and VMs](/web-apps/automated-testing/selenium/pre-run-executables) for more information.

* Running AutoIt Scripts: If you want to run an AutoIt script during your test, compile it as an .exe, send it using this capability, and set background to true to allow AutoIt to continue running throughout the full duration of your test.
* Using Multiple Pre-Run Executables: If you need to send multiple pre-run executables, the best way is to bundle them into a single executable file, such as a self-extracting zip file.
* Sending a Single String Instead of JSON: If a single string is sent as the pre-run capability rather than a JSON object, this string is considered to be the URL to the executable, and the executable launches with background set to `false`.

### `executable` (secondary key)

__Description__: provide the URL to the executable you want to run before your browser session starts.

__Value Type__: string.
<br/>


### `args` (secondary key)

__Description__: a list of the command line parameters that you want the executable to receive. Valid arguments are:
* `--silent` or `/S`: Installs the script silently without raising any dialogs.
* `-a`: Add switches to the command line of the underlying setup.exe process.
* `-q`: Like `--silent`, installs the script without raising any dialogs.

__Value Type__: list.
<br/>

### `background` (secondary key)

__Description__: defines whether Sauce should wait for this executable to finish before your browser session starts. This setting overrides the values set by [`timeout`](#timeout-secondary-key).

__Value Type__: boolean.
<br/>

### `timeout` (secondary key)

__Description__: the number of seconds Sauce will wait for your executable to finish before your browser session starts.

The default is 90 seconds and the maximum is 360 seconds.

__Value Type__: integer.
<br/>


## Appium Real Device Cloud - Dynamic Allocation - Required

Below are capabilities required for dynamically allocating [iOS and/or Android real devices for your tests](mobile-apps/automated-testing/appium/real-devices).


<table>
  <tr>
   <td><strong>Capability</strong>
   </td>
   <td><strong>Capability Explanation</strong>
   </td>
  </tr>
  <tr>
   <td><code>platformName</code>
   </td>
   <td><p>Defines the type of mobile platform to use in your tests (i.e., Android or iOS). The values for capabilities are not case-sensitive, so <code>android</code> is the same as <code>Android</code>, and <code>ios</code> is the same as <code>iOS</code>.</p>
   </td>
  </tr>
  <tr>
   <td><code>platformVersion</code>
   </td>
   <td><p>The platform version to use in your tests, for example "4" or "4.1". This is a substring match. You can specify both major versions and incremental versions of an operating system.</p><p>For example, if you set only a major version 4, you also have access to all devices running incremental versions (e.g., "4.1"," 4.2", "4.2.1", "4.4.4").</p><p>This also extends to minor and point versions. For example, if you specify "11.4", it will match "11.4.0", "11.4.1".</p>

   </td>
  </tr>
  <tr>
   <td><code>deviceName</code>
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

## Appium Real Device Cloud - Dynamic Allocation - Optional

Below are optional capabilities for dynamically allocating [iOS and/or Android real devices for your tests](mobile-apps/automated-testing/appium/real-devices).


### `tabletOnly`
__Data Type__: Boolean.

__Description__: use this capability to select only tablet devices for testing by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `phoneOnly`
__Data Type__: Boolean.

__Description__: use this capability to select only phone devices by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `privateDevicesOnly`
__Data Type__: Boolean.

__Description__: if your pricing plan includes both private and public devices, use this capability to request allocation of private devices only by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `publicDevicesOnly`
__Data Type__: Boolean.

__Description__: if your pricing plan includes both private and public devices, use this capability to request allocation of public devices only by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `carrierConnectivityOnly`
__Data Type__: Boolean.

__Description__: use this capability to allocate only devices connected to a carrier network by setting it to `"true"`. For ***Dynamic Allocation***.
<br/>

### `cacheId`
__Data Type__: randomized string.

__Description__: use this capability to keep a device allocated to you between test sessions, bypassing the device cleaning process and session exit that occurs by default after each test completes. Normally, you'd need to start over and reopen another device. You'll need to launch your next test within **10 seconds** of your previous test ending to ensure that the same device will be allocated for the test (not cleaned or reset)

Your app under test and its data will remain as-is on the device.

The value for `cacheId` must be the same for all test methods that you want to run on the cached device. In addition, the app and project ID used for the tests must remain the same, along with the values for these capabilities:
* `deviceName`
* `platformName`
* `platformVersion`
* `tabletOnly`
* `phoneOnly`
* `privateDevicesOnly`
* `automationName`
* `autoGrantPermissions`
* `appiumVersion`

Suitable for test setups that require the app's state to be reset between tests. Can be used for both [**static allocation and dynamic allocation**](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation).

We recommend reviewing [Device Management for Real Devices](mobile-apps/supported-devices) to learn more about how Sauce Labs manages device allocation, device caching, and device cleanup.

>**NOTE**: `cacheId` has replaced the `testobject_cache_device` capability that was used in TestObject (Legacy RDC).

<br/>

### `noReset`
__Data Type__: Boolean.

__Description__: set `noReset` to `true` to keep a device allocated to you during the device cleaning process, as described under [`cacheId`](#`cacheId`), allowing you to continue testing on the same device. Default value is `false`. To use `noReset`, you must pair it with `cacheId`.

:::caution Known iOS Limitation
On iOS devices, the `noReset` value is permanently set to `true` and cannot be overridden using `noReset:false`. If you check your Appium logs, you'll see that the value is `true`, even though the default setting technically is false. We've done this intentionally to ensure that your post-test iOS device cleaning process is optimal and secure.
:::

<br/>

### `recordDeviceVitals`
__Data Type__: Boolean.

__Description__: Device vitals are a collection of the mobile device performance data taken in real time during test execution. Vitals includes CPU utilization, memory consumption, network usage for both wifi and carrier connectivity where applicable, file operation and more. Measuring device vitals during test execution provides insights for analyzing app performance during operation.
<br/>

### `crosswalkApplication`

__Data Type__: Boolean.

__Description__: As described in [Appium Issue 4597](https://github.com/appium/appium/issues/4597) and [ChromeDriver Issue 2375613002](https://codereview.chromium.org/2375613002), mobile tests using Crosswalk will fail because because of attempts to connect to the wrong socket on the device. Sauce Labs has developed a patched version of ChromeDriver that will work with Crosswalk. You can specify to use this patched version with the `crosswalkApplication` capability.
<br/>

### `autoGrantPermissions`

__Data Type__: Boolean.

__Description__: By default, applications are installed on devices in the Sauce Labs real device cloud with autoGrantPermissions capability set to `true`. As long as the API number of the device is equal to 23 or higher, you can disable this by explicitly setting `autoGrantPermissions` to false.
<br/>

### `enableAnimations`
__Data Type__: Boolean.

__Description__: Use this capability to enable animations for real devices by setting it to `true`. By default, animations are disabled.
<br/>

Override Settings Capabilities (Optional)

These are custom capabilities developed by Sauce Labs that you can use to override settings that are enabled during app configuration.

### `resigningEnabled`
__Data Type__: Boolean.

__Description__: Enables the resigning (iOS) or instrumentation (Android) of apps on the Sauce Labs side, allowing the usage of the other capabilities listed in this section.
<br/>

### `sauceLabsImageInjectionEnabled`
__Data Type__: Boolean.

__Description__: enables the [camera image injection](https://docs.saucelabs.com/mobile-apps/features#camera-image-injection) feature.
<br/>

### `sauceLabsBypassScreenshotRestriction`
<p><small><Highlight color="#946f59">Espresso/Android Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: bypasses the restriction on taking screenshots for secure screens (i.e., secure text entry).
<br/>

### `allowTouchIdEnroll`
<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: enables the interception of biometric input, allowing the test to simulate Touch ID interactions (not a Sauce Labs-specific capability).
<br/>

### `groupFolderRedirectEnabled`
<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: Enables the use of the app's private app container directory instead of the shared app group container directory. For testing on the Real Device Cloud, the app gets resigned, which is why the shared directory is not accessible.
<br/>

### `systemAlertsDelayEnabled`
<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Data Type__: Boolean.

__Description__: Delays system alerts, such as alerts asking for permission to access the camera, to prevent app crashes at startup.
<br/>


## Appium Real Device Cloud - Unsupported Capabilities

The following Appium capabilities are not yet supported for real devices. If you have any questions or concerns about unsupported capabilities, please contact your Customer Success Manager or Sauce Labs Support.

* `installApp`: Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
* `removeApp`: Managed by RDC differently, but cannot be used inside an Appium test as part of the routine.
* `Edit Timezone`: Appium does not provide a capability to edit the timezone of a device in automated testing on real devices.
  * See [Virtual Device Capabilities](https://docs.saucelabs.com/dev/test-configuration-options/index.html#virtual-device-capabilities-sauce-specific--optional) for information about timezone capabilities in virtual device testing.


## Visual Testing

[Visual Testing](/visual) is run on Sauce Labs servers, but the URL gets sent to `"https://hub.screener.io"`.

This means that [`username`](#username) and [`accessKey`](#accesskey) values are required.

Check out the complete Sauce Labs [Visual Testing with WebDriver Documentation](https://screener.io/v2/docs/visual-e2e). Also, we recommend reading up on all of the valid [Visual Options](https://screener.io/v2/docs/visual-e2e/visual-options).


## Additional Resources

* [Appium Example Test Scripts](https://github.com/saucelabs-training)
