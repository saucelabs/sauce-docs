---
id: test-config
title: Test Configuration and Annotation
sidebar_label: Test Configuration and Annotation
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Before running a browser or device test with Sauce Labs, you need to write your test script to launch the platform/operating system/browser combination you want, and specify the location of the app for testing. You'll also want to configure other options, such as the path to your app.

Once your test is finished, you can annotate the job with a name, tags, and pass/fail status using the Sauce Labs REST API, or Selenium's JavaScript executor.

## Getting Ready to Test
Test configuration refers to setting the desired capabilities of your test within the test script itself. There are [required capabilities for both Selenium and Appium tests](https://wiki.saucelabs.com/display/DOCSDEV/Desired+Capabilities+Required+for+Selenium+and+Appium+Tests), as well as an extensive set of [optional capabilities](https://wiki.saucelabs.com/display/DOCSDEV/Test+Configuration+Options) (some of which are exclusive to Sauce Labs). You can use our [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator) to create the required desired capabilities for your test scripts, or use one of our [sample test frameworks](https://github.com/saucelabs-training) to set up the desired capabilities for parallel testing across multiple platform/operating systems.

## Capabilities for Selenium and Appium Tests

You can configure the environment for your Appium and Selenium tests by specifying a set of desired capabilities. Our Platform Configurator can set desired capabilities for testing in the scripting language of your choice. Test Configuration Options provides a complete list of all Selenium, Appium, and Sauce Labs testing capabilities.

### Required Selenium Test Configuration Settings

Browser Name
The name of the browser test against.

browserName 	string 	"browserName": "firefox"
Browser Version
The version of the browser you want to use in your test.	browserVersion 	string 	
"browserVersion": "latest"

Default to Latest Version of Chrome or Firefox

If you want to use the latest stable version of Google Chrome or Firefox that Sauce supports, you can use "browserVersion": "latest". You can also use "browserVersion": "latest-1" or "browserVersion": "latest-2", etc. to request the next most recent versions of a browser. For example, if the latest stable version of Chrome is 73, you can request "latest-2" to use Chrome 71.

Microsoft Edge versions

Microsoft Edge has two version numbers, the browser application version and the EdgeHTML rendering engine version. For example, the current stable release of Edge as of November 2019 has the browser application version 44.17763 and the EdgeHTML version 18.17763. The Wikipedia page on Microsoft Edge covers this in more detail: https://en.wikipedia.org/wiki/Microsoft_Edge
It is the EdgeHTML version that should be specified here, such as "browserVersion": "18.17763".

Platform Name
Which operating system the browser or mobile device should be running on.

platformName	string 	"platformName": "macOS 10.13"  
Required Appium Test Configuration Settings

Browser Name
The mobile web browser that will be automated in the simulator, emulator or device.	browserName	string
"browserName": "Safari"

For Web Apps

If you're running a test on an Android emulator, you'll need to specify "Browser" (the Android stock browser for older Android versions) and "Chrome" (for newer Android versions).

For iOS simulators, you'll need to specify "Safari".

For Mobile Native and Hybrid Apps

If you're testing a mobile native or hybrid app, the value for this capability should be an empty string.

Device Name
The name of the simulator, emulator, or device you want to use in the test.	deviceName	string
"deviceName": "Google Nexus 7 HD Emulator"

Generic Android Emulator

For an Android emulator test you can request a generic Android emulator by using the option "deviceName":"Android Emulator". If you want to use an Android emulator that looks and feels like a specific Android phone or tablet, for example a Google Nexus 7 HD Emulator or a Samsung Galaxy S4, then instead of "deviceName":"Android Emulator", you need to specify the exact Android emulator skin to use, for example "deviceName":"Samsung Galaxy S4 Emulator".

Emulator Skins and Configurations

Each Android emulator skin will have a different configuration depending on the phone or tablet that it emulates. For example, all the skins have different resolutions, screen dimensions, pixel densities, memory, etc. You can use the Platform Configurator to get a list of the available Android emulator skins for the various Android emulator versions.

Platform Version
The mobile operating system version that you want to use in your test.	platformVersion	string	"platformVersion": "9.1"
Platform Name
The mobile operating system platform you want to use in your test.	platformName	string	"platformName": "iOS"
Application Path
The path to a .ipa, .apk or .zip file containing the app to test. This could be the location of your app in Sauce App Storage (e.g., storage:filename=myapp.zip) or the URL to a remote location where your app is located (e.g., http://myappurl.zip).	app	string
"app": "storage:filename=my_app.zip"

Required for Mobile Native and Hybrid Apps Only

This capability is required only for testing mobile native apps or web apps.

Automation Engine
The automation engine that will be used. Options are:

Appium
UiAutomator2
Selendroid
The default is Appium.

automationName

string

"automationName": "UiAutomator2"

Application Package
ANDROID ONLY
The Java package of the Android app you want to run.

appPackage

string

"appPackage": "com.example.android.myApp, com.android.settings"

Automatic Package Detection

Appium automatically determines the package to launch; you'll only need to use this desired capability if you want to specify a package different from the default one.

Android Activity
ANDROID ONLY
The name for the Android activity you want to launch from your package.

appActivity

string

"appActivity": ".MainActivity"

Don't Forget the Dot!

This capability needs to be preceded by a . (dot). For example, .MainActivity instead of MainActivity.

Automatic Activity Detection

Appium automatically determines the activity to launch; you'll only need to use this desired capability if you want to specify an activity different from the default one.

Auto Accept Alerts
IOS ONLY
Setting this option will automatically accept any unexpected browser alerts that come up during your test, such as when Safari pops up the alert "Safari would like to use your current location (Don't Allow | Allow)."

autoAcceptAlerts

boolean

"autoAcceptAlerts": true

## Test Configuration Options

In this topic, you'll find a list of Sauce Labs test configuration options. You can use the Sauce Labs Platform Configurator to generate the correct configuration of testing options for your choice of Appium or Selenium tests in your preferred programming language.

We always recommend using the latest released version of Selenium, but to ensure W3C WebDriver compliance, make sure to use Selenium version 3.11 or later. Sauce Labs determines W3C sessions with the presence of sauce:options capabilities and generic W3C WebDriver-compliant capabilities. See W3C Capabilities Support for more information.

Browser Testing Options
Primary Test Configuration Settings
These apply to all Browser tests on Sauce Labs.

Browser Name
The name of the browser test against.

browserName 	string 	"browserName": "firefox"
Browser Version
The version of the browser you want to use in your test.	browserVersion 	string 	
"browserVersion": "latest"

Default to Latest Version of Chrome or Firefox

If you want to use the latest stable version of Google Chrome or Firefox that Sauce supports, you can use "browserVersion": "latest". You can also use "browserVersion": "latest-1" or "browserVersion": "latest-2", etc. to request the next most recent versions of a browser. For example, if the latest stable version of Chrome is 73, you can request "latest-2" to use Chrome 71.

Microsoft Edge versions

Microsoft Edge has two version numbers, the browser application version and the EdgeHTML rendering engine version. For example, the current stable release of Edge as of November 2019 has the browser application version 44.17763 and the EdgeHTML version 18.17763. The Wikipedia page on Microsoft Edge covers this in more detail: https://en.wikipedia.org/wiki/Microsoft_Edge
It is the EdgeHTML version that should be specified here, such as "browserVersion": "18.17763".

Platform Name
Which operating system the browser or mobile device should be running on.

platformName	string 	"platformName": "macOS 10.13"  
Additional Capabilities Defined in WebDriver Specification
acceptInsecureCerts
pageLoadStrategy
proxy
timeouts
strictFileInteractability
unhandledPromptBehavior
Optional Sauce-Specific Capabilities for Browser Tests
These options apply to specific browsers and can be added to the sauce:options block of your session creation code.

Chrome Driver Version
Sauce Labs supports the ChromeDriver version 1 series (i.e., 26.0.1383.0). The version 2 series (i.e., 2.45) and the latest convention where each Chrome version comes with its own matching ChromeDriver version (from Chrome 73 onwards).

The default version of ChromeDriver when no value is specified depends on the version of Chrome used. See ChromeDriver Versions and Downloads for more information.

NOTE: This capability only applies to Desktop tests.





chromedriverVersion	string
"chromedriverVersion": "2.45"

Firefox GeckoDriver Version
For Firefox version 80 and above, geckodriver defaults to latest driver version 0.27.0 when no version is specified.

For a list of geckodriver versions, see
geckodriver Supported Platforms.

geckodriverVersion
string

“geckodriverVersion”: “0.27.0”

Internet Explorer Driver Version
The Internet Explorer Driver defaults to version 2.53.1 when no version is specified.

Note that the versions of Internet Explorer Driver we have available correspond to major Selenium releases - we do not have all the minor point releases (e.g. 3.12.0.4) available.

We recommend setting the Selenium Version (see above) to correspond with the Internet Explorer Driver version you select.

Sauce Labs supports launching 64-bit IE on our 64-bit VMs: Windows 7, Windows 8, and Windows 8.1. This provides a workaround for two known Selenium issues:

Using a 32 bit driver on a 64 bit operating system causes Selenium's screenshot feature to only capture the part of the page currently visible in the browser viewport Selenium Issue 5876.
Using a 64 bit driver on a 64 bit operating system causes text entry to be extremely slow Selenium Issue 5516.
iedriverVersion

string
"iedriverVersion": "3.141.0"

 Supported IE Drivers
Selenium Version
Allows you to choose the version of Selenium you want to use for your test.

For Firefox, the default version of Selenium when no value is specified depends on the version of Firefox.

 Firefox and Selenium Versions
"Marionette" replaces the Firefox driver in Firefox 48+. Its binary is called geckodriver (previously wires). The version we use depends on whether the job is Selenium 2 or 3:

For Selenium 2, the marionette (geckodriver) version is 0.9.0
For Selenium 3, the marionette (geckodriver) version is 0.11.1
For Firefox 53 and above, the marionette (geckodriver) version is 0.16.0
For Firefox 55 and above, the marionette (geckodriver) version is 0.18.0
For Firefox 57 and above, the marionette (geckodriver) version is 0.23.0

When testing with Chrome and Internet Explorer, Selenium Version is not used to determine the version of the ChromeDriver or IEDriver that is used. For these browsers you should set the driver version as described for the Chrome Driver Version and Internet Explorer Driver Version options.

seleniumVersion

string
"seleniumVersion": "2.46.0"

Default Selenium Version

By default, Sauce Labs will use the following version of Selenium, depending on your selected combination of browser and operating system. While Selenium 3 is not yet fully implemented as a default version, it is supported for all Chrome and Firefox browsers on Mac and Windows platforms, for Safari 10+ on macOS 10.12 Sierra, and for Microsoft Edge and IE browsers version 10 and above. Currently Sauce Labs supports Selenium 3.4.0+ for Firefox and Safari and Selenium 3.5.0+ for Microsoft Edge and Chrome.

Microsoft Edge	2.52.0
Chrome
Latest Chromedriver

Firefox
Dev: 3.4.0

Beta: 3.4.0

53+: 3.4.0

39+: 2.53.1

Safari
11.0: 3.4.0

< 11.0: 2.48.0

Internet Explorer	2.53.1
You can set the Selenium version for your tests by using the seleniumVersion desired capability:

'seleniumVersion' = '3.8.1'


Avoiding the Selenium Proxy
By default, Sauce routes traffic from some WebDriver browsers (Edge, Internet Explorer, and Safari) through the Selenium HTTP proxy server so that HTTPS connections with self-signed certificates work everywhere. The Selenium proxy server can cause problems for some users. If that's the case for you, you can configure Sauce to avoid using the proxy server and have browsers communicate directly with your servers.

Don't Need the Selenium Proxy with Firefox or Google Chrome

Firefox and Google Chrome under WebDriver aren't affected by this flag as they handle invalid certificates automatically and there isn't a need to proxy through Selenium.

Incompatible with Sauce Connect Proxy

This flag is incompatible with Sauce Connect Proxy.

avoidProxy

boolean

"avoidProxy": true

Enable Extended Debugging
Extended debugging records HAR files for some browsers, as well as console.json logs. These are extremely valuable for debugging flaky tests. Default value is false.

See Debugging Tests with JavaScript Console Logs and HAR Files (Extended Debugging) for more information.

extendedDebugging

boolean

"extendedDebugging": true

Enable Performance Capture
Sauce Performance Testing can be enabled by setting both extendedDebugging and capturePerformance to true. Default value is false.

See Getting Started with Sauce Front-End Performance for more information.

capturePerformance

boolean

"capturePerformance": true

Enable WebDriver's automatic screen shots
Selenium WebDriver captures automatic screenshots for every server side failure, for example if an element is not found. Sauce disables this by default to reduce network traffic during tests, resulting in a considerable performance improvement in most tests. You can enable this feature, but keep in mind that it may be detrimental to the performance of your jobs.

webdriver.remote.quietExceptions

boolean

"webdriver.remote.quietExceptions": false


Mobile Testing Options
If you are not using the official Appium bindings, make sure to prefix all Appium capabilities with appium: to make them W3C WebDriver-compliant. For more information about Appium-specific options, see the Appium Server Capabilities page of the Appium.io website.

Appium Test Configuration Settings
These common Appium options can be added with an appium: prefix in your session creation code.

Browser Name
The mobile web browser that will be automated in the simulator, emulator or device.	browserName	string
"browserName": "Safari"

For Web Apps

If you're running a test on an Android emulator, you'll need to specify "Browser" (the Android stock browser for older Android versions) and "Chrome" (for newer Android versions).

For iOS simulators, you'll need to specify "Safari".

For Mobile Native and Hybrid Apps

If you're testing a mobile native or hybrid app, the value for this capability should be an empty string.

Device Name
The name of the simulator, emulator, or device you want to use in the test.	deviceName	string
"deviceName": "Google Nexus 7 HD Emulator"

Generic Android Emulator

For an Android emulator test you can request a generic Android emulator by using the option "deviceName":"Android Emulator". If you want to use an Android emulator that looks and feels like a specific Android phone or tablet, for example a Google Nexus 7 HD Emulator or a Samsung Galaxy S4, then instead of "deviceName":"Android Emulator", you need to specify the exact Android emulator skin to use, for example "deviceName":"Samsung Galaxy S4 Emulator".

Emulator Skins and Configurations

Each Android emulator skin will have a different configuration depending on the phone or tablet that it emulates. For example, all the skins have different resolutions, screen dimensions, pixel densities, memory, etc. You can use the Platform Configurator to get a list of the available Android emulator skins for the various Android emulator versions.

Platform Version
The mobile operating system version that you want to use in your test.	platformVersion	string	"platformVersion": "9.1"
Platform Name
The mobile operating system platform you want to use in your test.	platformName	string	"platformName": "iOS"
Application Path
The path to a .ipa, .apk or .zip file containing the app to test. This could be the location of your app in Sauce App Storage (e.g., storage:filename=myapp.zip) or the URL to a remote location where your app is located (e.g., http://myappurl.zip).	app	string
"app": "storage:filename=my_app.zip"

Required for Mobile Native and Hybrid Apps Only

This capability is required only for testing mobile native apps or web apps.

Automation Engine
The automation engine that will be used. Options are:

Appium
UiAutomator2
Selendroid
The default is Appium.

automationName

string

"automationName": "UiAutomator2"

Application Package
ANDROID ONLY
The Java package of the Android app you want to run.

appPackage

string

"appPackage": "com.example.android.myApp, com.android.settings"

Automatic Package Detection

Appium automatically determines the package to launch; you'll only need to use this desired capability if you want to specify a package different from the default one.

Android Activity
ANDROID ONLY
The name for the Android activity you want to launch from your package.

appActivity

string

"appActivity": ".MainActivity"

Don't Forget the Dot!

This capability needs to be preceded by a . (dot). For example, .MainActivity instead of MainActivity.

Automatic Activity Detection

Appium automatically determines the activity to launch; you'll only need to use this desired capability if you want to specify an activity different from the default one.

Auto Accept Alerts
IOS ONLY
Setting this option will automatically accept any unexpected browser alerts that come up during your test, such as when Safari pops up the alert "Safari would like to use your current location (Don't Allow | Allow)."

autoAcceptAlerts

boolean

"autoAcceptAlerts": true

Optional Sauce-Specific Appium Capabilities for Mobile Tests
Below are some additional options that you can use in your Appium tests. They can be added to the sauce:options block of your session creation code.

Appium Version
The version of the Appium driver you want to use. 	appiumVersion	string
"appiumVersion": "1.5.3"

Default Appium Version

It is recommended to use the default Appium Version.

If you don’t select an Appium Version, this capability will automatically default to the latest version of Appium that is compatible with your selected OS. If you prefer to use a different version of Appium for your test, enter the version number you want as the value for the appiumVersion capability.

You can find the release notes for each Appium version at the Appium GitHub repository. In order for you to have a window of time to check the compatibility of your test suites with the latest Appium version, it won't be set as the default version on Sauce until one week after the version release.

Device Type
The type of device to emulate. Options are:

tablet
phone
deviceType	string	"deviceType": "tablet"
Device Orientation
The orientation in which the simulator/device will be rendered. Options are:

portrait
landscape
deviceOrientation	string	"deviceOrientation": "portrait"
Sauce-Specific Options
The following are Sauce Labs-specific options you can set for both Selenium and Appium Tests. Depending on your use case, they may or may not be required.

Test Annotation
You can add these annotations to your tests to make them easier to track and identify. These settings apply to all tests run on the Sauce Labs platform; they can be added to the sauce:options block of your session creation code.

Test Names
Used to record test names for jobs and make it easier to find individual tests.
name

string
"name": "my example name"

Build Numbers
Used to associate jobs with a build number or app version, which is then displayed on both the Dashboard and Archives view.	build	string	"build": "build-1234"
Tagging
User-defined tags for grouping and filtering jobs in the Dashboard and Archives view.	tags	list	"tags": ["tag1","tag2","tag3"]
Custom Data
User-defined custom data that will accept any valid JSON object, limited to 64KB in size.	custom-data	object
"custom-data": {"release": "1.0",
                "commit": "0k392a9dkjr",
                "staging": true,
                "execution_number": 5,
                "server": "test.customer.com"}
Job Visibility
Sauce Labs supports several test result visibility levels, which control who can view the test details. The visibility level for a test can be set manually from the test results page, but also programmatically when starting a test or with our REST API. For more information about sharing test results, see the topics under Sharing the Results of Sauce Labs Tests.

Available visibility levels are:

public	Making your test public means that it is accessible to everyone, and may be listed on public web pages and indexed by search engines.
public restricted
If you want to share your job's result page and video, but keep the logs only for you, you can certainly do so with public restricted visibility mode. This visibility mode will hide the fancy job log as well as prohibit access to the raw Selenium log, so that anonymous users with the link will be able to watch the video and screen shots but won't be able to see what's being typed and done to get there.

share	You can also decide to make your test sharable. Making your test sharable means that it is only accessible to people having valid link and it is not listed on publicly available pages on Sauce Labs or indexed by search engines.
team	If you want to share your jobs with other team members (that were created as a sub-accounts of one parent account), you can use team visibility mode. Making your test accessible by team means that it is only accessible to people under the same root account as you.
private	If you don't want to share your test's result page and video with anyone, you should use private job visibility mode. This way, only you (the owner) will be able to view assets and test result page.
public

string

"public": "team"



Sauce Connect Tunnel Settings
These settings apply to all tests run on the Sauce Labs Platform with a Sauce Connect proxy tunnel; they can be added to the sauce:options block of your session creation code.

Identified Tunnels
If you are using Sauce Connect Proxy to to test an application that is behind a firewall or on your local machine, you must provide the identifier of the Sauce Connect tunnel to use. Check out Basic Sauce Connect Proxy Setup for more information.

tunnelIdentifier

string

"tunnelIdentifier": "MyTunnel01"

Shared Tunnels
This desired capability will let the test job use any shared tunnels available from the specified parent account (i.e., any account that is upstream in the hierarchy).

NOTE: If using a shared tunnel, you must specify both tunnelIdentifier and parentTunnel.

Check out the topic Using Sauce Connect Tunnel Identifiers for more information.

parentTunnel

string

"tunnelIdentifier": "ParentTunnelName" "parentTunnel": "<username of parent>"

Asset Management
These settings apply to all tests run on the Sauce Labs Platform They can be added to the sauce:options block of your session creation code.

Disable video recording
By default, Sauce Labs records a video of every test you run. This is generally handy for debugging failing tests, as well as having a visual confirmation that a certain feature works (or still works!). However, there is an added wait time for screen recording during a test run.

recordVideo

boolean

"recordVideo": false

Disable video upload for passing tests
As an alternative to disabling video recording, the  videoUploadOnPass  setting will let you discard videos for passing tests identified using the passed setting. This disables video post-processing and uploading that may otherwise consume some extra time after your test is complete.

videoUploadOnPass

boolean

"videoUploadOnPass": false

Disable step-by-step screenshots
Sauce Labs captures step-by-step screenshots of every test you run. Most users find it very useful to get a quick overview of what happened without having to watch the complete video. However, this feature may add some extra time to your tests. You can avoid this by optionally turning off this feature.

recordScreenshots

boolean

"recordScreenshots": false

Disable log recording
By default, Sauce creates a log of all the actions that you execute to create a report for the test run that lets you troubleshoot test failures more easily.

Selenium Logs Are Still Recorded

This option only disables recording of the log.json file. The selenium-server.log will still be recorded even if you choose to disable recording of the log.json.

recordLogs

boolean

"recordLogs": false

Timeouts
These settings apply to all tests run on Virtual Device Cloud (Desktop Browsers, Emulators & Simulators). They can be added to the sauce:options block of your session creation code.

Maximum Test Duration
As a safety measure to prevent tests from running indefinitely, Sauce limits the duration of tests to 30 minutes by default. You can adjust this limit on a per-job basis and the maximum value is 10800 seconds.

Don't Exceed 30 Minutes

A test should never last more than 30 minutes and ideally should take less than five minutes. The 3-hour maximum exists mainly to ease the transition of new users migrating long running tests to Sauce Labs.

While our test VMs respect the maxDuration desired capability when it's set in tests, it may not always be precise. Tests will never be timed out before their maxDuration has elapsed and in most cases, they will be timed out very shortly after their maxDuration has elapsed (usually less than one second). But, in some rare cases, such as when the test VM is suffering performance problems, they can be allowed to run longer (30 seconds or more).

maxDuration	integer	"maxDuration": 1800
Command Timeout
As a safety measure to prevent Selenium crashes from making your tests run indefinitely, Sauce limits how long Selenium can take to run a command in our browsers. This is set to 300 seconds by default. The value of this setting is given in seconds. The maximum command timeout value allowed is 600 seconds.	commandTimeout	integer	"commandTimeout": 300
Idle Test Timeout
As a safety measure to prevent tests from running too long after something has gone wrong, Sauce limits how long a browser can wait for a test to send a new command. This is set to 90 seconds by default and limited to a maximum value of 1000 seconds. You can adjust this limit on a per-job basis. The value of this setting is given in seconds.	idleTimeout	integer	"idleTimeout": 90

Additional Custom Testing Options
These settings apply to all tests run on Virtual Device Cloud (desktop browsers, emulators, and simulators); they can be added to the sauce:options block of your session creation code.

Pre-run Executables
You can provide a URL to an executable file, which will be downloaded and executed to configure the VM before the test starts. For faster performance, you may want to upload the executable to Sauce Storage, a private temporary storage space. This capability takes a JSON object with four main keys. Check out the topics under Using Pre-Run Executables to Configure Browsers and Virtual Machines for more information.

Running AutoIt Scripts

If you want to run an AutoIt script during your test, compile it as an .exe, send it using this capability, and set background to true to allow AutoIt to continue running throughout the full duration of your test.

Using Multiple Pre-Run Executables

If you need to send multiple pre-run executables, the best way is to bundle them into a single executable file, such as a self-extracting zip file.

prerun

(primary key)


"prerun": { "executable": "http://url.to/your/executable.exe", "args": [ "--silent", "-a", "-q" ], "background": false, "timeout": 120 }

Sending a Single String Instead of JSON

If a single string is sent as the prerun capability rather than a JSON object, this string is considered to be the URL to the executable, and the executable launches with background set to false .


The URL to the executable you want to run before your browser session starts.
executable

(secondary key)




A list of the command line parameters that you want the executable to receive. Valid arguments are:

--silent or /S	Installs the script silently without raising any dialogs
-a	Add switches to the command line of the underlying setup.exe process
-q  	Like --silent , installs the script without raising any dialogs
args

(secondary key)




A boolean that defines whether Sauce should wait for this executable to finish before your browser session starts. If background isn't set or is set to  false , Sauce will wait for up to 90 seconds for the executable to finish. At that point, the browser will start and your test will proceed.
background

(secondary key)




The number of seconds Sauce will wait for your executable to finish before your browser session starts. If timeout isn't set, Sauce will wait for up to 90 seconds for the executable to finish. timeout is capped at 360 seconds and won't apply if background is set to true.
timeout

(secondary key)



Prioritize Jobs
If you have multiple new jobs waiting to start (i.e., across a collection of sub-accounts), jobs with a lower priority number take precedence over jobs with a higher number. So, for example, if you have multiple jobs simultaneously waiting to start, we'll first attempt to find resources to start all the jobs with priority 0, then all the jobs with priority 1, etc. When we run out of available virtual machines, or when you hit your concurrency limit, any jobs not yet started will wait. Within each priority level, jobs that have been waiting the longest take precedence.

priority

integer

"priority": 0

Specifying the Screen Resolution
This setting specifies which screen resolution should be used during the test session. This feature is available in:

Windows 7 (except Windows 7 with IE 9)
Windows 8
Windows 8.1
Windows 10
 Resolutions Available for Windows 7
 Resolutions Available for Windows 8, 8.1, and 10


OS X 10.9
OS X 10.10
OS X 10.11
macOS 10.2
 Resolutions Available for OS X 10.9
 Resolutions Available for OS X 10.10
 Resolutions Available for OS X 10.11
 Resolutions Available for macOS 10.12
Default screen resolution for Sauce tests when not specified is 1024x768.

screenResolution	string	"screenResolution": "1280x1024"
Custom Time Zones




Desktop Test VMs can be configured with custom time zones. This feature should work on all operating systems, however time zones on Windows VMs are approximate. The time zone will usually default to whatever local time zone is on your selected data center, but this cannot be guaranteed. You can find a complete list of time zones on Wikipedia. If the timeZone name has two or more or words (e.g., Los Angeles), you'll need to separate the words with either a space or an underscore. Sauce takes only location names (not their paths), as shown in the example below.

Appium does not provide a capability for editing the time zone of a mobile device in a test.

For iOS devices, you can use the Sauce Labs custom capability to change the time on the Mac OS X VM, which will be picked up by the iOS simulator.

For Android devices (7.2 or later only), use the following ADB command to grant Appium notification read permission in order to use the time zone capability:

adb shell cmd notification allow_listener io.appium.settings/io.appium.settings.NLService
See the Appium Android documentation for additional support.

## Platform Configurator
The [Platform Configurator](https://wiki.saucelabs.com/display/DOCSDEV/Platform+Configurator) is a tool developed by Sauce Labs to help you correctly configure the [required test capabilities](https://wiki.saucelabs.com/display/DOCSDEV/Desired+Capabilities+Required+for+Selenium+and+Appium+Tests) for your Appium and Selenium tests.

1. Select the **API** you want to use in your test, Appium or Selenium.
The option you choose here will determine the other configuration options you can set.
1. Select the type of **Device** you want to test against.
Note that Selenium includes options for iOS, Android, and desktop devices, while Appium only has options for mobile devices.
1. Select the **Operating System** you want to test against.
1. For Selenium tests, select the **Browser** you want to test against.
1. For Appium tests, select the type of test you want to run.

Web Testing	Use this option if you want to use a mobile or desktop browser to test a website
Hybrid Testing	Use this option if you want to test a mobile client that is used to access an HTML-based site or application. If you choose this option, you will be prompted to provide the path to the client application that you want to test in Sauce Storage or some other location.
App Testing	Use this option if you want to test a native mobile application. If you choose this option, you will be prompted to provide the path to the client application that you want to test in Sauce Storage  or some other location .

1. Under **Advanced Configurations**, the options to capture screenshots and record video are set by default. Clear these options of you don't want screenshots or video of your test. You can also specify the **Resolution** for your test.
1. Under **Copy Code**, select the scripting language you prefer, and you'll see the capabilities you've selected in the correct format and syntax for your language. Copy the code into your test script and you're ready to run!

## Annotating Tests

Test annotation refers to adding information to your tests after they have completed, such as setting a name, build number, tag, and Pass/Fail status. These annotations are useful for managing your tests and builds (for example, when searching and sorting tests in your [Archives](https://wiki.saucelabs.com/display/DOCSDEV/Searching+for+Test+Results+and+Builds+on+Your+Archive+Page)). You can add annotations with our [REST API](https://wiki.saucelabs.com/display/DOCSDEV/Annotating+Tests+with+the+Sauce+Labs+REST+API) or the [Selenium JavaScript Executor](https://wiki.saucelabs.com/display/DOCSDEV/Annotating+Tests+with+Selenium%27s+JavaScript+Executor). You can also use [sample test frameworks](https://github.com/saucelabs-training) to automatically add annotations to your tests.

### Selenium's JavaScript Executor
Selenium's JavascriptExecutor lets you use JavaScript commands in your test scripts to perform actions in the browser. We've developed a set of custom JavascriptExecutor methods you can use to annotate tests and record pass/fail status. You can also use these methods to track information in your Selenium log for debugging.

**Basic Example**
Here's a Java code sample setting a job's name to "My test":

```
((JavascriptExecutor)driver).executeScript("sauce:job-name=My test");
```

**Methods**
>**NOTE:** Appium JS-Executor methods for Real Device Testing in Sauce Labs are limited and are indicated with the following badge:
<p><span className="sauceDGreen">SUPPORTED ON RDC</span></p>



"sauce:job-result=passed"
<p><span className="sauceDGreen">SUPPORTED ON RDC</span></p>

Sets the pass/fail status of the job. Options are `passed`, `failed`, `true`, and `false`. `True` means passed and `false` means failed.

"sauce:job-name=My awesome job"
Sets the job name

"sauce:job-tags=tag1,tag2,tag3"
Sets the job tags in a comma-separated list.

"sauce:job-build=mybuild123"
Sets the job’s build name.

"sauce: stop network"
"sauce: start network"
Stops and restart the VM’s network connection (Mac OSX only).

"sauce: disable log"
"sauce: enable log"
Turns off logging for certain commands within the test in order to omit sensitive data from the `log.json` file; then re-enables logging.

>**NOTE:** This method does not omit the commands from other possible records.

"sauce: break"
Sets a Sauce breakpoint in the test. Test execution will pause at this point, waiting for manual control by clicking in the test’s live video.

"sauce:context=This line appears in the command list as 'info'"
Logs the given line in the job’s Selenium commands list.

"sauce:job-info={'build':'mybuild','name':'my test name', 'public':'team}"
Sets one or more job information fields to the values sent in the JSON-formatted dictionary.

"sauce:inject-image=[base64_encoded_image]"
<p><span className="sauceDGreen">SUPPORTED ON RDC</span></p>

Points to file for testing image injection (e.g. barcode scanning).
"sauce:performanceEnable"

Allows performance metrics to be collected.
"sauce:performanceDisable"

Pauses performance metrics collection.

>**NOTE:** Spacing in the methods is sensitive, i.e., some methods require a space following  sauce: (`stop`, `start`, `disable`, `enable`, `break`, and `job-info`), while other methods do not.

#### Setting Pass/Fail
Setting the pass/fail status of your tests is important for getting the most out of your [insights](https://wiki.saucelabs.com/display/DOCSDEV/Guide+to+Sauce+Insights), as Selenium has only three built-in states: In Progress, Error, and Complete.

You should update your tests to record pass/fail status with our [REST API](https://wiki.saucelabs.com/display/DOCSDEV/Annotating+Tests+with+the+Sauce+Labs+REST+API) on completion, using a test framework, or the `sauce:job-result` method.

**Code Example**
This code is from a sample Java test script using TestNG. You can find the full version in our [Test Frameworks repository](https://github.com/saucelabs-sample-test-frameworks/Java-TestNG-Selenium).

```
/**
     * Method that gets invoked after test.
     * Dumps browser log and
     * Closes the browser
     */

    @AfterMethod

    public void tearDown(ITestResult result) throws Exception {

        //Gets browser logs if available.
        ((JavascriptExecutor) webDriver.get()).executeScript("sauce:job-result=" + (result.isSuccess() ? "passed" : "failed"));
        webDriver.get().quit();
    }
```

#### Providing Context for Selenium Commands
One of the most difficult aspects of troubleshooting Selenium tests can be matching commands to browser actions. The `sauce:context` method provides you with a way to inject text into the command log to associate with a specific command, essentially adding a comment.

For example, in the command log on the left, it's hard to immediately see which command is responsible for following a link to the page, which one submitted a comment, and which one asserted that the comment was valid. In the screenshot on the right, each set of commands has been provided with a context.

<img src={useBaseUrl('img/test-config-js-context1.png>')} alt="Context for Selenium commands - before" width="650"/>
<img src={useBaseUrl('img/test-config-js-context2.png>')} alt="Context for Selenium commands - after" width="650"/>

**Code Example**
In your `TestBase.java` script, assign a context with each step of the test is set using the `sauce:context` method.

The following code examples are from the Java-TestNG-Selenium framework in [our GitHub repository](https://github.com/saucelabs-sample-test-frameworks/Java-TestNG-Selenium).

```
/**
     * Method to be invoked after test.
     * Dumps browser log and
     * Closes the browser
     */

    @AfterMethod

    public void tearDown(ITestResult result) throws Exception {

        //Gets browser logs if available.
        ((JavascriptExecutor) webDriver.get()).executeScript("sauce:job-result=" + (result.isSuccess() ? "passed" : "failed"));
        webDriver.get().quit();
    }

    protected void annotate(String text) {
        ((JavascriptExecutor) webDriver.get()).executeScript("sauce:context=" + text);
    }
}
```

In your test script, specify the text you want associated with each step of the test:

```
public class TextInputTest extends TestBase {

    /**
     * Runs a simple test verifying if the comment input is functional.
     * @throws InvalidElementStateException
     */

    @org.testng.annotations.Test(dataProvider = "hardCodedBrowsers")
    public void verifyCommentInputTest(String browser, String version, String os, Method method)
            throws MalformedURLException, InvalidElementStateException, UnexpectedException {
        this.createDriver(browser, version, os, method.getName());
        WebDriver driver = this.getWebDriver();


        String commentInputText = UUID.randomUUID().toString();
        this.annotate("Visiting GuineaPig page...");
        GuineaPigPage page = GuineaPigPage.visitPage(driver);


        this.annotate(String.format("Submitting comment: \"%s\"", commentInputText));
        page.submitComment(commentInputText);

        this.annotate(String.format("Asserting submitted comment is: \"%s\"", commentInputText));
        Assert.assertTrue(page.getSubmittedCommentText().contains(commentInputText));

    }
```
### Sauce Labs REST API
You can manage your tests more effectively from your Dashboard and Archives with annotations. The Sauce Labs REST API includes an [update_job](https://wiki.saucelabs.com/display/DOCSDEV/Job+Methods) method that you can use to set a name, tags, pass/fail status, and custom data for your test after it runs. To automate test annotation with this method, you'll want to create a simple set of functions to perform the put request for you. We've developed a [Java library](https://github.com/saucelabs/saucerest-java) to do just that, with examples for [Python](https://gist.github.com/1644439) and [Ruby](https://gist.github.com/DylanLacey/5218959) on GitHub.

>**NOTE:** Adding Pass/Fail Status and Build Numbers to Test Results with Frameworks
In addition to using the REST API to set these annotations once your test completes, you can use [one of the Sauce Labs test framework examples](https://github.com/saucelabs-training) to set these and other annotations for you automatically as part of the test execution.

###Desired Capabilities for Annotation
You can set the following [test configuration options](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options) to keep track of your jobs:

Test Names
Used to record test names for jobs and make it easier to find individual tests
name
string
"name" : "my example name"

Build Numbers
Used to associate jobs with a build number or app version, displayed on the Dashboard and Archives views	build	string	"build": "build-1234"
Tagging
User-defined tags for grouping and filtering jobs in the Dashboard and Archives	tags	list	"tags": ["tag1","tag2","tag3"]
Pass/Fail Status
Selenium and Appium handle sending commands to control a browser or app, but don't report to the server whether a test passed or failed. To record pass/fail status on Sauce, set the passed flag on the job.

Since you can't know in advance whether a test passed or failed, this flag can't be set in the initial configuration.

passed	boolean	"passed": "true"
Custom Data
User-defined custom data that will accept any valid JSON object, limited to 64KB in size.	customData	object
"customData": {"release": "1.0",
                "commit": "0k392a9dkjr",
                "staging": true,
                "execution_number": 5,
                "server": "test.customer.com"}
####Examples
Setting Job Info with cURL for OS X/Linux
```
curl -X PUT \
-s -d '{"passed": true}' \
-u YOUR_USERNAME:YOUR_ACCESS_KEY \
https://saucelabs.com/rest/v1/YOUR_USERNAME/jobs/YOUR_JOB_ID
```

Setting Job Info with cURL for Windows
```
curl -X PUT
-s -d "{\"passed\": true}"
-u YOUR_USERNAME:YOUR_ACCESS_KEY
https://saucelabs.com/rest/v1/YOUR_USERNAME/jobs/YOUR_JOB_ID
```

Setting Job Info Using JSON
```
{
      "name": "my job name",
      "passed": true,
      "public": "public",
      "tags": ["tag1", "tag2", "tag3"],
      "build": 234,
      "customData": {
          "release": "1.0",
          "s erver": "test.customer.com"
      }
  }
  ```

## Website Test Configuration Options
You can test websites using either Selenium or Appium. Selenium has better support for desktop devices, while Appium has better support for testing websites on mobile devices with native browsers. However, website testing against Android devices with Appium is only supported for Android versions 4.4 and higher.
All examples are for Java, but you can use our Platform Configurator - Beta to configure your tests in the language of your choice.

>**NOTE:** Default Selenium Version
By default, Sauce Labs will use the following version of Selenium, depending on your selected combination of browser and operating system. While Selenium 3 is not yet fully implemented as a default version, it is supported for all Chrome and Firefox browsers on Mac and Windows platforms, for Safari 10+ on macOS 10.12 Sierra, and for Microsoft Edge and IE browsers version 10 and above. Currently Sauce Labs supports Selenium 3.4.0+ for Firefox and Safari and Selenium 3.5.0+ for Microsoft Edge and Chrome.

Microsoft Edge	2.52.0
Chrome
Latest Chromedriver

Firefox
Dev: 3.4.0

Beta: 3.4.0

53+: 3.4.0

39+: 2.53.1

Safari
11.0: 3.4.0

< 11.0: 2.48.0

Internet Explorer	2.53.1
You can set the Selenium version for your tests by using the seleniumVersion desired capability:

'seleniumVersion' = '3.8.1'


### Selenium Configuration Examples
With Selenium you can test against both desktop and mobile devices, though there are limitations with Android versions and devices.

**PC/Windows/IE**
```
DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
caps.setCapability("platform", "Windows 8.1");
caps.setCapability("version", "11.0");
```

**PC/Linux/Chrome **
```
DesiredCapabilities caps = DesiredCapabilities.chrome();
caps.setCapability("platform", "Linux");
caps.setCapability("version", "47.0");
```

**Mac/OSX/Safari**
```
DesiredCapabilities caps = DesiredCapabilities.safari();
caps.setCapability("platform", "OS X 10.9");
caps.setCapability("version", "7.0");
```

**Android Emulator Phone/Android 5.1**
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("platform", "Linux");
caps.setCapability("version", "5.1");
caps.setCapability("deviceName","Android Emulator");
caps.setCapability("deviceType","phone");
caps.setCapability("deviceOrientation", "portrait");
```

**Samsung Galaxy S3 Emulator/Android 4.4**
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("platform", "Linux");
caps.setCapability("version", "4.4");
caps.setCapability("deviceName","Samsung Galaxy S3 Emulator");
caps.setCapability("deviceOrientation", "portrait");
```

### Appium Configuration Examples

**iPhone**
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPhone 6");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","8.4");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "Safari");
```

**iPad**
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPad Retina");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","8.4");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "Safari");
```

**Android Phone Emulator/Android 4.4**
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

**iPhone 6 Real Device**
```
{
deviceName:'iPhone 6 Device',
platformName:'iOS',
platformVersion:'8.0',
browserName:'Safari',
"appium-version":"1.5.1"
}
```

**Samsung Galaxy S5 Real Device**
```
{
deviceName:'Samsung Galaxy S5 Device',
platformName:'Android',
platformVersion:'4.4',
browserName:'Chrome',
name:'S5 real device google.com'
}
```

**Samsung Galaxy S4 Real Device**
```
{
deviceName:'Samsung Galaxy S4 Device',
platformName:'Android',
platformVersion:'4.4',
browserName:'Chrome',
name:'S5 real device google.com'
}
```

## Mobile App Test Configuration Options
This topic includes tips and examples of how to configure your mobile native application tests with Appium. For more detailed descriptions about the capabilities of Appium tests, check out the [Server Capabilities section of the official Appium website](http://appium.io/slate/en/master/?python#appium-server-capabilities). All examples are for Java, but you can use the Platform Configurator - Beta to set the capabilities in the language of your choice.

### Test Configuration Tips
* Setting appiumVersion: If you omit the appiumVersion in your test configuration, your test will be running with our default Appium version. Sauce recommends that you specify one of the newer Appium versions that provides a more extended API and fixes to known bugs.

* Checking the Appium Version for Your Test:

1. Log in to [saucelabs.com](http://saucelabs.com/).
1. Find and select the test that you ran using Appium to view the **Test Details** page.
1. Click the **Metadata** tab.
1. Look for the **Logs** row and select Appium Log.
  The first line should indicate the Appium version. For example, `2014-05-05T17:45:07.541Z - info: Welcome to Appium v1.3.6`.

* Setting Browser Name: When testing a native mobile application, the value for `browserName` is an empty string, as in `caps.setCapability("browserName", "");`

* Setting the Location of the Mobile App: If the application you want to test has been uploaded to a location other than Sauce Storage, you need to specify this location for app, and make sure that this location is accessible to Sauce Labs browsers. For example, `caps.setCapability("app","sauce-storage:mapp.zip");`

* Setting `automationName` for Android Apps: If you're testing a native mobile app against Android versions 4.0 - 4.1, or a hybrid mobile against Android versions 4.0 - 4.2, you need to set the capability `"automationName","selendroid"`. These Android versions are only supported via Appium’s bundled version of Selendroid, which utilizes [Instrumentation](http://developer.android.com/reference/android/app/Instrumentation.html). Later versions of Android are supported via Appium’s own UiAutomator library.

* Enabling Location Services for iOS Devices: If you want to enable location services in an iOS simulator, for example to test GPS-dependent applications, you should set these desired capabilities in your Appium script:
    * `locationServicesEnabled=true`
    * `locationServicesAuthorized=true`

### App Test Configuration Examples
**iPhone Simulator Native Application**

```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPhone 5");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","8.4");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "");
caps.setCapability("app","sauce-storage:mapp.zip");
```

**iPad Simulator Native Application**
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPad Retina");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","9.2");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "");
caps.setCapability("app","sauce-storage:myapp.zip");
```

**iPhone Simulator Hybrid Application**
```
DesiredCapabilities caps = DesiredCapabilities.iphone();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","iPhone Retina (4-inch 64-bit)");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("platformVersion","8.4");
caps.setCapability("platformName", "iOS");
caps.setCapability("browserName", "");
caps.setCapability("app","sauce-storage:myapp.zip");
```

**Android Native Application, Android v. 4.3**
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","Samsung Galaxy S4 Emulator");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("browserName", "");
caps.setCapability("platformVersion","4.3");
caps.setCapability("platformName","Android");
caps.setCapability("app","sauce-storage:myapp.zip");
```

**Android Hybrid Application, Android v. 4.1**
```
DesiredCapabilities caps = DesiredCapabilities.android();
caps.setCapability("appiumVersion", "1.5.1");
caps.setCapability("deviceName","Android Emulator");
caps.setCapability("deviceType","tablet");
caps.setCapability("deviceOrientation", "portrait");
caps.setCapability("browserName", "");
caps.setCapability("platformVersion","4.1");
caps.setCapability("platformName","Android");
caps.setCapability("app","sauce-storage:myapp.zip");
caps.setCapability("automationName","Selendroid");
```
