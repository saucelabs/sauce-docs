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

This page includes a list of valid Sauce Labs test configuration options. 
See the [Sauce Labs Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator) 
for the basic code necessary for executing a test. Those settings as well as all valid parameters are described below.

We always recommend using the latest released version of Selenium, 
but to ensure W3C WebDriver compliance, make sure to use Selenium version 3.11 or later. 
Sauce Labs determines W3C sessions with the presence of `sauce:options` capabilities 
and [generic W3C WebDriver-compliant capabilities](https://www.w3.org/TR/webdriver1/#capabilities). 
See [W3C Capabilities Support](https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414463) for more information.


## WebDriver W3C Capabilities (Required)

Below are the W3C WebDriver primary test configuration settings for Sauce Labs desktop browser tests and mobile tests.

### [`browserName`](https://w3c.github.io/webdriver/#dfn-browser-name)
__Description__: identifies the user agent. 

__Value Type__: string.

__Example__: `"browserName": "firefox"`

:::note
This setting also applies to emulators, simulators and real devices when automating with a mobile browser. It must
be set when [App Name](#app) is not set.
* For Android v5 and below, the value needs to be `"Browser"`, v6 and above, it is `"Chrome"`
* For iOS, the value needs to be `"Safari"`
* For mobile native or hybrid apps, the value needs to be an empty string
:::

<br/>

### [`browserVersion`](https://w3c.github.io/webdriver/#dfn-browser-version)
__Description__: identifies the version of the browser you want to use in your test.

__Value Type__: string.

__Example__: `"browserVersion": "90.0"`

:::tip Default to Latest Version of Chrome, Firefox, or Microsoft Edge

If you want to use the latest stable version of Google Chrome or Firefox that Sauce supports, you can use 
`"browserVersion": "latest"`. You can also use `"browserVersion": "latest-1"` or `"browserVersion": "latest-2"`, etc. 
to request the next most recent versions of a browser. For example, if the latest stable version of Chrome is 73, 
you can request `"latest-2"` to use Chrome 71. Note that the latest version for Safari browsers will depend
on the chosen `"platformName"`. 
See the [Sauce Labs Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator) for valid
options.
:::

:::note
This setting is not used for mobile browsers as your test will use the default browser installed for the given 
Appium version
:::

<br/>

### [`platformName`](https://w3c.github.io/webdriver/#dfn-platform-name)
__Description__: The name of the operating system the browser or mobile device should be running on.

__Value Type__: string.

__Example__: `"platformName": "macOS 10.13"`, `"platformName": "iOS"`, `"platformName": "Android"`


## Browser W3C Capabilities (Optional)
Below are more Sauce-compatible W3C WebDriver specification capabilities. 
To view their descriptions, see the [W3C WebDriver Capabilities site](https://www.w3.org/TR/webdriver/#capabilities):

### [`acceptInsecureCerts`](https://w3c.github.io/webdriver/#dfn-insecure-tls-certificates)
### [`pageLoadStrategy`](https://w3c.github.io/webdriver/#dfn-page-load-strategy)
### [`proxy`](https://w3c.github.io/webdriver/#dfn-proxy-configuration)
### [`timeouts`](https://w3c.github.io/webdriver/#dfn-session-script-timeout)
### [`strictFileInteractability`](https://w3c.github.io/webdriver/#dfn-strict-file-interactability)
### [`unhandledPromptBehavior`](https://w3c.github.io/webdriver/#dfn-unhandled-prompt-behavior)

## Desktop Browser Capabilities: Sauce-Specific (Optional)

These options apply to specific browsers and can be added to the `sauce:options` block of your test session creation code.

### `chromedriverVersion`
__Description__: allows you to specify the ChromeDriver version you want to use for your tests.
The default version of ChromeDriver when no value is specified depends on the version of Chrome used.
As of Chrome 73, the major version of the driver and the browser must match.

For a list of chromedriver versions, see [chromedriver versions list](https://chromedriver.storage.googleapis.com/index.html).

__Value Type__: string.

__Example__: `"chromedriverVersion": "88.0.4324.96"`
:::tip Use this for specifying a specific point release.

If you find a bug that you determine is driver related, you can specify the latest point release of the chrome driver
that matches the browser version. 
For example, Sauce Labs might default to `"88.0.4324.27"`, but there is a bug fix in version `"88.0.4324.96"`,
so you can specify that in your test.
:::

<br/>

### `edgedriverVersion`
__Description__: allows you to specify the Microsoft Edge driver version you want to use for your tests.

For a list of edgedriver versions, see [edgedriver versions](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

__Value Type__: string.

__Example__: `"edgedriverVersion": "90.0.818.51"`
:::note
Edge Driver is based on Chrome Driver, so the same caveats from [chromedriverVersion](#chromedriverversion) apply to `edgedriverVersion`
:::

<br/>

### `geckodriverVersion`   

__Description__: allows you to specify the Firefox GeckoDriver version. 
The default geckodriver version varies based on the version of Firefox specified.

For a list of geckodriver versions and the Firefox versions they support, 
see [geckodriver Supported Platforms](https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html).

__Value Type__: string.

__Example__: "geckodriverVersion": "0.27.0"
<br/>

### `iedriverVersion`

__Description__: allows you to specify the Internet Explorer Driver version. If no version is specified, it defaults to 2.53.1.

For a list of IE Driver versions, 
see [Internet Explorer Driver Server CHANGELOG](https://raw.githubusercontent.com/SeleniumHQ/selenium/trunk/cpp/iedriverserver/CHANGELOG).
<br/>

__Value Type__: string.

__Example__: `"iedriverVersion": "3.150.1"`
<br/>

### `seleniumVersion`

__Description__: allows you to specify the version of Selenium you want to use for your test.
Sauce Labs defaults to different versions depending on how old the browser or platform is and whether the user is
initializing a session with valid w3c syntax.

__Value Type__: string.

__Example__: `"seleniumVersion": "3.141.1"`

:::tip Always use the latest version.

The Selenium developers are very conscientious about backward compatibility support, so we recommend always using the 
latest available version of Selenium unless you find a specific, known issue.
:::

<br/>

### `avoidProxy`
__Description__: allows the browser to communicate directly with servers without going through a proxy.
By default, Sauce routes traffic from Internet Explorer and Safari through 
an HTTP proxy server so that HTTPS connections with self-signed certificates will work. 
The proxy server can cause problems for some users, and this setting allows you to avoid it.
Note that any test run with a Sauce Connect tunnel has to use the proxy and this flag will be ignored.

__Value Type__: boolean.

__Example__: `"avoidProxy": true`
<br/>

### `extendedDebugging`
__Description__: Enables [Extended Debugging features](/insights/debug/index.html). 
This only applies to Firefox and Chrome, and it records HAR files and console logs for both of these browsers 
In Chrome it also enables network interception, network and cpu throttling as well as access to network logs 
during the session. It is required to be true for [`capturePerformance`](#captureperformance)
The default value is `false`.

__Value Type__: boolean

__Example__: `"extendedDebugging": true`

:::note
Extended Debugging generates additional assets which can impact test performance.
:::

<br/>

### `capturePerformance`
__Description__: Enables Performance Capture feature. 
Sauce Performance Testing can be enabled by setting both [`extendedDebugging`](#extendeddebugging) and `capturePerformance` to `true`. 
Default value is `false`. 
See [Getting Started with Sauce Front-End Performance](https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Sauce+Front-End+Performance) for more information.
__Value Type__: boolean
__Example__: `"capturePerformance": true`
<br/>

### `screenResolution`
__Description__: allows you to specify the screen resolution to be used during your test session. 
Default screen resolution for Sauce tests is 1024x768.

__Value Type__: string.

__Example__: `"screenResolution": "1280x1024"`

:::note
You can not set screen resolution on Windows 7 with IE 9
:::

<br/>


## Mobile App Capabilities: Appium Settings (Required)

These common Appium test configuration settings can be added with an `appium:` prefix in your test session creation code.

If you are not using the official Appium bindings, make sure to prefix all Appium capabilities with `appium:` 
to make them W3C WebDriver-compliant. For more information about Appium-specific options, 
see the [Appium Server Capabilities page of the Appium.io website](http://appium.io/docs/en/writing-running-appium/caps).

:::note
[`browserName`](#browsername) and [`platformName`](#platformname) are frequently used in Appium tests, but
are W3C capabilities so they are not prepended with `appium:`
:::

### `app`
__Description__: allows you to set the path to an .ipa, .apk or .zip file containing the app you want to test.
This could be the location of your app in [Application Storage](mobile-apps/app-storage) (e.g., `storage:filename=myapp.zip`)
or the URL to a remote location where your app is located (e.g., http://myappurl.zip).

__Value Type__: string.

__Example__: `"appium:app": "storage:filename=my_app.zip"`

:::note
This option is for testing mobile native apps or hybrid web apps.
Either this or [`browserName`](#browsername) must be set for a mobile test.
:::

<br/>

### `deviceName`
__Description__: allows you to set the name of the simulator, emulator, or device you want to use in the test.

:::tip Generic Android Emulator

For Android emulator tests, you can request a generic Android emulator by using the option `"deviceName":"Android Emulator"`. 
If you want to use an Android emulator that looks and feels like a specific Android phone or tablet 
(e.g., Google Nexus 7 HD Emulator or a Samsung Galaxy S4), you need to specify the exact Android emulator skin to use 
(e.g., `"appium:deviceName":"Samsung Galaxy S4 Emulator"`).
:::

:::tip Emulator Skins and Configurations

Each Android emulator skin will have a different configuration depending on the phone or tablet that it emulates. 
For example, all the skins have different resolutions, screen dimensions, pixel densities, memory, etc. 
You can use our [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator?src=sidebar#/) 
to get a list of the available Android emulator skins for the various Android emulator versions.
:::

__Value Type__: string.

__Example__: `"appium:deviceName": "Google Nexus 7 HD Emulator"`
<br/>

### `platformVersion`
__Description__: allows you to set the mobile OS platform version that you want to use in your test.

__Value Type__: string.

__Example__: `"appium:platformVersion": "9.1"`
<br/>

### `automationName`
__Description__: allows you to set the automation engine that will be used. Possible values are: `Appium`, `UiAutomator2`, `Selendroid`. Default value is Appium.

__Value Type__: string.

__Example__: `"appium:automationName": "UiAutomator2"`
<br/>

### `appPackage`

<p><small><Highlight color="#946f59">Android Only</Highlight></small></p>

__Description__: Application Package. The Java package of the Android app you want to run.

:::tip Automatic Package Detection

Appium automatically determines the package to launch; you'll only need to use this desired capability if you want to specify a package different from the default one.
:::

__Value Type__: string.

__Example__: `"appium:appPackage": "com.example.android.myApp, com.android.settings"`
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

__Example__: `"appium:appActivity": ".MainActivity"`
<br/>

### `autoAcceptAlerts`

<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Description__: setting this option will automatically accept any unexpected browser alerts that come up during your test, such as when Safari pops up the alert "Safari would like to use your current location (Don't Allow | Allow)."

__Value Type__: boolean

__Example__: `"appium:autoAcceptAlerts": true`
<br/>


## Mobile App Capabilities: Sauce-Specific (Optional)

Below are some additional options that you can use in your Appium tests. 
They can be added to the `sauce:options` block of your session creation code.

### `appiumVersion`
__Description__: the Appium driver version you want to use.

:::tip Default Appium Version

It is recommended to use the default Appium Version.

If you don’t select an Appium Version, this capability will automatically default to the latest version of Appium 
that is compatible with your selected OS. If you prefer to use a different version of Appium for your test, 
enter the version number you want as the value for the appiumVersion capability.

You can find the release notes for each Appium version at the [Appium GitHub repository](https://github.com/appium/appium/releases). 
In order for you to have a window of time to check the compatibility of your test suites with the latest Appium version,
it won't be set as the default version on Sauce until one week after the version release.
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

The following are Sauce Labs-specific options you can set for any test run on the Sauce Labs platform.
These can be added to the `sauce:options` block of your session creation code.

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
__Description__: We support several test/job result visibility levels, which control who can view the test details. 
The visibility level for a test can be set manually from the test results page, 
but also programmatically when starting a test or with our REST API. 
For more information about sharing test results, see the topics under 
[Sharing the Results of Sauce Labs Tests](https://wiki.saucelabs.com/display/DOCS/Sharing+the+Results+of+Sauce+Labs+Tests).

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

### `tunnelIdentifier`
__Description__: If you're using [Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect/index.html) 
to test an application that is behind a firewall or on your local machine that has been created with a 
`--tunnel-identifier` value, you must provide that identifier in order to use the tunnel. 
See [Basic Sauce Connect Proxy Setup](https://docs.saucelabs.com/secure-connections/sauce-connect/setup-configuration/basic-setup) 
for more information.

__Value Type__: string.

__Example__: `"tunnelIdentifier": "MyTunnel01"`
<br/>

### `parentTunnel`  
__Description__: for using shared tunnels in your organization. 
This capability will let the test job use any shared tunnels available from the specified parent 
account (i.e., any account that is upstream in the hierarchy). 
See [Using Sauce Connect Tunnel Identifiers](secure-connections/sauce-connect/setup-configuration/high-availability) for more information.

__Value Type__: string.

__Example__: 

```java
"tunnelIdentifier": "ParentTunnelName"
"parentTunnel": "<username of parent>"
```

:::note
If you're using a shared tunnel, you'll need to specify both `tunnelIdentifier` and `parentTunnel`.
:::

<br/>

### `recordVideo`
__Description__: use this to disable video recording. By default, Sauce Labs records a video of every test you run.

Disabling video recording can be useful for debugging failing tests as well as having a visual confirmation 
that a certain feature works (or still works). However, there is an added wait time for screen recording during a test run.

__Value Type__: boolean.

__Example__: `"recordVideo": false`
<br/>

### `videoUploadOnPass`
__Description__: disables video upload for passing tests. As an alternative to `recordVideo`, 
`videoUploadOnPass` will let you discard videos for tests you have marked as passing. 
It disables video post-processing and uploading that may otherwise consume some extra time after your test is complete.

__Value Type__: boolean

__Example__: `"videoUploadOnPass": false`
<br/>

### `recordScreenshots`
__Description__: disables step-by-step screenshots. 
In addition to capturing video, Sauce Labs captures step-by-step screenshots of every test you run. 
Most users find it very useful to get a quick overview of what happened without having to watch the complete video. 
However, this feature may add some extra time to your tests. 

__Value Type__: boolean

__Example__: `"recordScreenshots": false`
<br/>

### `recordLogs`
__Description__: disables log recording. 
By default, Sauce creates a log of all the actions that you execute to create a report for the test run that 
lets you troubleshoot test failures more easily.

Selenium logs will still be recorded. This option only disables recording of the log.json file. 
The selenium-server.log will still be recorded even if you choose to disable recording of the log.json.

__Value Type__: boolean

__Example__: `"recordLogs": false`
<br/>

#### **Timeout Settings**

These settings apply to all tests run on Virtual device cloud (desktop browsers, emulators, and simulators). They can be added to the `sauce:options` block of your session creation code.

## Virtual Device Capabilities: Sauce-Specific (Optional)

The following are Sauce Labs-specific options that only work for Desktop sessions, Emulators and Simulators.
These can be added to the `sauce:options` block of your session creation code.

### `maxDuration`
__Description__: sets maximum test duration in seconds. 
As a safety measure to prevent tests from running indefinitely, 
The default is 1,800 seconds (30 minutes), and the maximum is 10,800 seconds (3 hours).

:::caution Test Should Not Exceed 30 Minutes
A test should never need to run more than 30 minutes.
Our data shows that tests that run in under 2 minutes are twice as likely to pass as tests that take longer than
7 minutes.

The 3-hour maximum exists to ease the transition of new users migrating long-running tests to Sauce Labs.
:::

__Value Type__: integer.

__Example__: `"maxDuration": 1800`
<br/>

### `commandTimeout`
__Description__: sets command timeout in seconds. 
As a safety measure to prevent Selenium crashes from making your tests run indefinitely, 
we limit how long Selenium can take to run a command in our browsers. 
This is set to 300 seconds by default. The maximum command timeout value allowed is 600 seconds.

__Value Type__: integer.

__Example__: `"commandTimeout": 300`
<br/>

### `idleTimeout`
__Description__: sets idle test timeout in seconds. 
As a safety measure to prevent tests from running too long after something has gone wrong, 
Sauce limits how long a browser can wait for a test to send a new command. 
This is set to 90 seconds by default and limited to a maximum value of 1000 seconds.

__Value Type__: integer.

__Example__: `"idleTimeout": 90`
<br/>

### `priority`
__Description__: setting to prioritize jobs. If you have multiple new jobs waiting to start (i.e., across a collection of sub-accounts), jobs with a lower priority number take precedence over jobs with a higher number.

So, for example, if you have multiple jobs simultaneously waiting to start, we'll first attempt to find resources to start all the jobs with priority 0, then all the jobs with priority 1, etc.

When we run out of available virtual machines, or when you hit your concurrency limit, any jobs not yet started will wait. Within each priority level, jobs that have been waiting the longest take precedence.

__Value Type__: integer.

__Example__: `"priority": 0`
<br/>

### `timeZone`
__Description__: allows you to set a custom time zone for your test.
If the `timeZone` name has two or more or words (e.g., `Los Angeles`),
you'll need to separate the words with either a space or an underscore.
We support location names (not their paths), as shown in the example below.

* **For Desktop VMs**: can be configured with custom time zones.
  This feature should work on all operating systems, however time zones on Windows VMs are approximate.
  The time zone will usually default to whatever local time zone is on your selected data center, but this cannot be guaranteed.
  You can find a complete list of time zones [here](https://en.wikipedia.org/wiki/Lists_of_time_zones).
* **For iOS Devices**: you can use this capability to change the time on the Mac OS X VM,
  which will be picked up by the iOS simulator.

:::note
This capability does not work for Android devices, but for Android 7.2 or later, there is a workaround.

Use the following ADB command to grant Appium notification read permission in order to use the time zone capability:
```java
adb shell cmd notification allow_listener io.appium.settings/io.appium.settings.NLService
```
See the [Appium Android documentation](http://appium.io/docs/en/writing-running-appium/android/android-shell/#mobile-shell) for additional support.
:::

__Value Type__: string.

__Examples__: `"timeZone": "Los_Angeles"`, `"timeZone": "New_York"`, `"timeZone": "Honolulu"`, `"timeZone": "Alaska"`

### Pre-Run Executables

Pre-run executables have a primary key ([`prerun`](#prerun-primary-key)), and four secondary keys:
* [`executable`](#executable-secondary-key)
* [`args`](#args-secondary-key)
* [`background`](#background-secondary-key)
* [`timeout`](#timeout-secondary-key)

Read the descriptions of each key below the example.

__Example__:
```java
"prerun": {
         "executable": "http://url.to/your/executable.exe",
         "args": [ "--silent", "-a", "-q" ],
         "background": false, "timeout": 120
          }
```

#### `prerun` (primary key)

__Description__: use this to define pre-run executables. You can provide a URL to an executable file, which will be downloaded and executed to configure the VM before the test starts. For faster performance, you may want to upload the executable to your [Sauce Application Storage](/mobile-apps/app-storage) space. This capability takes a JSON object with four main keys. See [Using Pre-Run Executables to Configure Browsers and VMs](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365697) for more information.

:::tip
* Running AutoIt Scripts: If you want to run an AutoIt script during your test, compile it as an .exe, send it using this capability, and set background to true to allow AutoIt to continue running throughout the full duration of your test.
* Using Multiple Pre-Run Executables: If you need to send multiple pre-run executables, the best way is to bundle them into a single executable file, such as a self-extracting zip file.
* Sending a Single String Instead of JSON: If a single string is sent as the pre-run capability rather than a JSON object, this string is considered to be the URL to the executable, and the executable launches with background set to `false`.
:::

#### `executable` (secondary key)

__Description__: provide the URL to the executable you want to run before your browser session starts.

__Value Type__: string.
<br/>

#### `args` (secondary key)

__Description__: a list of the command line parameters that you want the executable to receive. Valid arguments are:
* `--silent` or `/S`: Installs the script silently without raising any dialogs.
* `-a`: Add switches to the command line of the underlying setup.exe process.
* `-q`: Like `--silent`, installs the script without raising any dialogs.

__Value Type__: list.
<br/>

#### `background` (secondary key)

__Description__: defines whether Sauce should wait for this executable to finish before your browser session starts.
This setting overrides the values set by [`timeout`](#timeout-secondary-key).

__Value Type__: boolean.
<br/>

#### `timeout` (secondary key)

__Description__: the number of seconds Sauce will wait for your executable to finish before your browser session starts. 
The default is 90 seconds and the maximum is 360 seconds.

__Value Type__: integer.

:::note
This value does not apply if [`background`](#background-secondary-key) is set to `true`
:::
