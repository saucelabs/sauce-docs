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

## Getting Ready to Test
Test configuration refers to setting the desired capabilities of your test within the test script itself. There are [required capabilities for both Selenium and Appium tests](/basics/test-config.md#capabilities-for-selenium-and-appium-tests), as well as an extensive set of [optional capabilities](/dev/test-configuration-options.md) (some of which are exclusive to Sauce Labs). You can use our [Platform Configurator](/basics/platform-configurator.md) to create the required desired capabilities for your test scripts, or use one of our [sample test frameworks](https://github.com/saucelabs-training) to set up the desired capabilities for parallel testing across multiple platform/operating systems.

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
|Device Name|The name of the simulator, emulator, or device you want to use in the test.|`deviceName`|string|`"deviceName": "Google Nexus 7 HD Emulator"`<br/><br/><p><strong>NOTE</strong>: For an Android emulator test you can request a generic Android emulator by using the option `"deviceName":"Android Emulator"`. If you want to use an Android emulator that looks and feels like a specific Android phone or tablet, for example a Google Nexus 7 HD Emulator or a Samsung Galaxy S4, then instead of `"deviceName":"Android Emulator"`, you need to specify the exact Android emulator skin to use, for example, `"deviceName":"Samsung Galaxy S4 Emulator"`.</p><p><strong>NOTE</strong>: Each Android emulator skin will have a different configuration depending on the phone or tablet that it emulates. For example, all the skins have different resolutions, screen dimensions, pixel densities, memory, etc. You can use the [Platform Configurator](/basics/platform-configurator.md) to get a list of the available Android emulator skins for the various Android emulator versions.</p>|
|Platform Version|The mobile operating system version that you want to use in your test.|`platformVersion`|string|`"platformVersion": "9.1"`|
|Platform Name|The mobile operating system platform you want to use in your test.|`platformName`|string|`"platformName": "iOS"`|
|Application Path|The path to a `.ipa`, `.apk`, or `.zip` file containing the app to test. This could be the location of your app in [Sauce application storage](/mobile-apps/app-storage.md) (e.g., storage:filename=myapp.zip) or the URL to a remote location where your app is located (e.g., http://myappurl.zip).|`app`|string|`"app": "storage:filename=my_app.zip"`<br/><br/><p><strong>NOTE</strong>: This capability is required only for testing mobile native apps or web apps.</p>|
|Automation Engine|The automation engine that will be used. Options are:<br/><ul><li>Appium</li><li>UiAutomator2</li><li>Selendroid</li></ul>The default is Appium.|`automationName`|string|`"automationName": "UiAutomator2"`|
|Application Package<p><span className="sauceDBlue">ANDROID ONLY</span></p>|The Java package of the Android app you want to run.|`appPackage`|string|`"appPackage": "com.example.android.myApp, com.android.settings"`<br/><br/><p><strong>NOTE</strong>: Appium automatically determines the package to launch; you'll only need to use this desired capability if you want to specify a package different from the default one.</p>|
|Android Activity<p><span className="sauceDBlue">ANDROID ONLY</span></p>|The name for the Android activity you want to launch from your package.|`appActivity`|string|`"appActivity": ".MainActivity"`<br/><br/><p><strong>NOTE</strong>: This capability needs to be preceded by a . (dot). For example, `.MainActivity` instead of `MainActivity`.</p><br/><p><strong>NOTE</strong>: Appium automatically determines the activity to launch; you'll only need to use this desired capability if you want to specify an activity different from the default one.</p>|
|Auto Accept Alerts<p><span className="sauceDBlue">IOS ONLY</span></p>|Setting this option will automatically accept any unexpected browser alerts that come up during your test, such as when Safari pops up the alert "Safari would like to use your current location (Don't Allow/Allow)."|`autoAcceptAlerts`|boolean|`"autoAcceptAlerts": true`|

See [Test Configuration Options](/dev/test-configuration-options.md) for a list of valid test configuration options for tests run on Sauce Labs.
