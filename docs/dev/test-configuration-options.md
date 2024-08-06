---
id: test-configuration-options
title: Test Configuration Options
sidebar_label: Test Configuration Options
description: An index of automation test configuration settings compatible with Sauce Labs test protocols.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page provides a reference for the valid test configuration options (capabilities) you can set to specify the variable settings for your automated tests running on Sauce Labs.

Try our [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator#/)! It provides a graphical user interface where you can specify your settings using option buttons and drop-down menus, then automatically generates the corresponding capabilities code based on your selections. For examples, see [Examples of Test Configuration Options for Website Tests](/basics/test-config-annotation/test-config/#examples-of-test-configuration-options-for-website-tests).

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))

## Terminology

When setting up your test, you'll need to configure your script with settings called _capabilities_ that align with your test environment (e.g., desktop browser, mobile web browser, mobile app). While each environment has its own set of capabilities, they can also be combined. Some are required for a test to run in a given environment, while some are optional.

You'll need to add these configurations to the [capabilities](https://www.selenium.dev/documentation/webdriver/drivers/options/) or [options](https://www.selenium.dev/documentation/en/driver_idiosyncrasies/driver_specific_capabilities/) classes.

- **W3C WebDriver Capabilities**: Required for any test using Selenium or Appium to communicate with the browser. W3C WebDriver capabilities are universal capabilities for any test, and are usually combined with additional capabilities. See the [official W3C Recommendations website](https://www.w3.org/TR/webdriver1/#capabilities) for more information.
- **Sauce Labs Capabilities**: Needed for running a test on the Sauce Labs Cloud, with different possible sets for different environments. Though there aren't any capabilities required, you will need to [configure the endpoint URL](/basics/data-center-endpoints) and should pass the test name and status as capabilities to the remote webdriver.
- **Appium Capabilities**: Required for tests using Appium on mobile apps and Appium on mobile web browsers.
- **Browser-Specific Capabilities**: Optional, browser-specific Sauce Labs capabilities.
- **Browser Vendor Capabilities**: Each browser also has its own set of pre-defined options you can set to help you test. You can add these in regular capabilities or options, or use the browser-defined capabilities (browser options classes) to configure your browser tests:
  - [Chrome Capabilities](https://chromedriver.chromium.org/capabilities)
  - [Microsoft Edge Capabilities](https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options)
  - [Firefox Capabilities](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities/firefoxOptions)
  - [Internet Explorer Capabilities](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/ie/InternetExplorerDriver.html)
  - [Safari Capabilities](https://developer.apple.com/documentation/webkit/about_webdriver_for_safari)

## W3C WebDriver Capabilities – Required

Sauce Labs determines W3C sessions with the presence of `sauce:options`
capabilities and [generic W3C WebDriver-compliant capabilities](https://www.w3.org/TR/webdriver1/#capabilities) in your code. See [W3C Capabilities Support](/dev/w3c-webdriver-capabilities) for more information.

Below are the W3C WebDriver primary test configuration settings for Sauce Labs desktop browser tests and mobile tests.

:::tip
Use the latest version of the Selenium library in your code for the most up-to-date support.
:::

---

### `browserName`

<p><small>| STRING |</small></p>

Identifies the user agent. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-browser-name) for more information. This setting also applies to emulators, simulators and real devices when automating with a mobile browser. It must be set when [App Name](#app) is not set.

- For Android v5 and below, the value needs to be `"Browser"`, v6 and above, it is `"Chrome"`.
- For iOS, the value needs to be `"Safari"`.
- For mobile native or hybrid apps, the value needs to be an empty String.

```java
"browserName": "firefox"
```

---

### `browserVersion`

<p><small>| STRING |</small></p>

Identifies the version of the browser you want to use in your test. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-browser-version) for more information.

To use the latest stable version of Chrome or Firefox that we support, you can use `"browserVersion": "latest"`. You can also use `"browserVersion": "latest-1"` or `"browserVersion": "latest-2"`, etc., to request the next most recent versions of a browser.

For example, if the latest stable version of Chrome is 73, you can request `"latest-2"` to use Chrome 71.Note that the latest version for Safari browsers will depend on the chosen `"platformName"`.

See the [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator) for valid options.

:::note
This setting cannot be used for mobile browsers, as your test will use the default browser installed for the given Appium version.
:::

```java
"browserVersion": "latest"
```

---

### `platformName`

<p><small>| STRING |</small></p>

Identifies the name of the operating system the browser or mobile device should be running on. You can use this for [dynamic device allocation](/mobile-apps/supported-devices#static-and-dynamic-device-allocation). Values are not case-sensitive (i.e., `"ios"` is the same as `"iOS"`). See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-platform-name) for more information.

```java
"platformName": "macOS 10.13"
```

---

## W3C WebDriver Browser Capabilities – Optional

Optional, Sauce-compatible W3C WebDriver specification capabilities you can add to your tests. To view their descriptions, see the [W3C WebDriver Specification Capabilities](https://www.w3.org/TR/webdriver/#capabilities).

---

### `acceptInsecureCerts`

<p><small>| BOOLEAN |</small></p>

Indicates whether untrusted and self-signed TLS certificates are implicitly trusted on navigation for the duration of the session. The default value is `false`. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-insecure-tls-certificates) for more information.

```java
"acceptInsecureCerts": true
```

---

### `pageLoadStrategy`

<p><small>| STRING |</small></p>

Defines the current session’s page load strategy. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-page-load-strategy) for more information. For allowed values and their associated required document readiness state, see [WebDriver W3C Specification Page Load Strategies Table](https://w3c.github.io/webdriver/#dfn-table-of-page-load-strategies).

```java
"pageLoadStrategy": "eager"
```

---

### `proxy`

<p><small>| OBJECT |</small></p>

Defines the current session’s proxy configuration. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-proxy-configuration) for more information.

```java
"proxy": {"proxyType": "manual",
          "httpProxy": "myproxy.com:3128"}
```

---

### `timeouts`

<p><small>| OBJECT |</small></p>

Describes the timeouts imposed on certain session operations. Applicable timeouts can be found on the [WebDriver W3C Specification Timeouts Table](https://w3c.github.io/webdriver/#timeouts). See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-session-script-timeout) for more information.

```java
"timeouts": {"script": 20000,
             "pageLoad": 400000,
             "implicit": 1000}
```

---

### `strictFileInteractability`

<p><small>| BOOLEAN |</small></p>

Defines the current session’s strict file interactability. This indicates that interactabilty checks will be applied to File type input elements. The default is `false`. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-strict-file-interactability) for more information.

```java
"strictFileInteractability": true
```

---

### `unhandledPromptBehavior`

<p><small>| STRING |</small></p>

Describes the current session’s user prompt handler. The default value is `"dismiss and notify"`. For a list of the allowed options, see [WebDriver W3C Specification User Prompt Handler Table](https://w3c.github.io/webdriver/#dfn-user-prompt-handler). See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-unhandled-prompt-behavior) for more information.

```java
"unhandledPromptBehavior": "ignore"
```

---

### `webSocketUrl`

<p><small>| BOOLEAN | <span className="sauceGreen">Desktop Only</span> | <span className="sauceGreen">BETA</span> |</small></p>

Enables [W3C WebDriver BiDi](https://w3c.github.io/webdriver-bidi/) support. This allows Selenium 4 clients to use [Bi-Directional functionality](https://www.selenium.dev/documentation/webdriver/bidirectional/). It also enables BiDi for other test frameworks, like [WebDriverIO](https://webdriver.io/docs/api/webdriverBidi/). In particular, this capability exposes the WebSocket endpoint which is available under `webSocketUrl` field in session startup response body. This endpoint can be used to issue WebDriver BiDi commands as described by the [specification](https://w3c.github.io/webdriver-bidi/). The default value is `false`.

The `webSocketUrl` capability is **not compatible** with [`extendedDebugging`](#extendeddebugging) capability.


```java
"webSocketUrl": true
```

---

## Desktop Browser Capabilities: Sauce-Specific – Optional

Browser-specific optional capabilities you can add to the `sauce:options` block of your test session creation code.

---

### `chromedriverVersion`

<p><small>| STRING |</small></p>

Allows you to specify the ChromeDriver version you want to use for your tests. The default version of ChromeDriver when no value is specified depends on the version of Chrome used. As of Chrome 73, the major version of the driver and the browser must match.

For a list of ChromeDriver versions, see [chromedriver versions list](https://chromedriver.storage.googleapis.com/index.html).

:::tip Use this for specifying a specific point release

If you find a bug that you determine is driver related, you can specify the latest point release of the chrome driver that matches the browser version.

For example, Sauce Labs might default to `"88.0.4324.27"`, but there is a bug fix in version `"88.0.4324.96"`, so you can specify that in your test.
:::

```java
"chromedriverVersion": "88.0.4324.96"
```

---

### `edgedriverVersion`

<p><small>| STRING |</small></p>

Specifies the Microsoft Edge driver version you want to use for your tests. For a list of edgedriver versions, see the [Microsoft Edge Driver website](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

:::note
Edge Driver is based on Chrome Driver, so the same caveats from [chromedriverVersion](#chromedriverversion) apply to `edgedriverVersion`.

:::

```java
"edgedriverVersion": "90.0.818.51"
```

---

### `geckodriverVersion`

<p><small>| STRING |</small></p>

Specifies the Firefox GeckoDriver version. The default geckodriver version varies based on the version of Firefox specified. For a list of geckodriver versions and the Firefox versions they support, see [geckodriver Supported Platforms](https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html).

:::note
With geckodriver version 0.31.0, Mozilla removed the capability `--remote-debugging-port`, which was never officially supported. You can use the supported capability `moz:debuggerAddress`. See [this article on our blog](https://saucelabs.com/blog/update-firefox-tests-before-oct-4-2022) for more information.
:::

```java
"geckodriverVersion": "0.27.0"
```

---

### `iedriverVersion`

<p><small>| STRING |</small></p>

Specifies the Internet Explorer Driver version. If no version is specified, it defaults to 2.53.1. For a list of IE Driver versions, see [Internet Explorer Driver Server CHANGELOG](https://raw.githubusercontent.com/SeleniumHQ/selenium/trunk/cpp/iedriverserver/CHANGELOG).

```java
"iedriverVersion": "3.150.1"
```

---

### `seleniumVersion`

<p><small>| STRING |</small></p>

Specifies the Selenium version you want to use for your test. Sauce Labs will default to different versions, depending on the age of the browser and platform, and whether or not you're initializing a session with valid W3C syntax.

:::tip

Always use the latest Selenium version. The Selenium developers are very conscientious about backward compatibility support, so we recommend always using the latest available version unless you find a specific, known issue.
:::

```java
"seleniumVersion": "3.141.1"
```

---

### `avoidProxy`

<p><small>| BOOLEAN |</small></p>

Allows the browser to communicate directly with servers without going through a proxy. By default, Sauce routes traffic from Internet Explorer and Safari through an HTTP proxy server so that HTTPS connections with self-signed certificates will work. The proxy server can cause problems for some users, and this setting allows you to avoid it.

:::note
Any test run with a Sauce Connect tunnel has to use the proxy and this flag will be ignored.
:::

```java
"avoidProxy": true
```

---

### `extendedDebugging`

<p><small>| BOOLEAN |</small></p>

Enables [Extended Debugging features](/insights/debug). This applies to Firefox and Chrome only. It records HAR files and console logs for both of these browsers. In Chrome, it also enables network interception, network and cpu throttling as well as access to network logs during the session. It is required to be true for [`capturePerformance`](#captureperformance). The default value is `false`.

```java
"extendedDebugging": true
```

---

### `capturePerformance`

<p><small>| BOOLEAN |</small></p>

Enables Performance Capture feature. Sauce Performance Testing can be enabled by setting both [`extendedDebugging`](#extendeddebugging) and `capturePerformance` to `true`. Default value is `false`. See [Getting Started with Sauce Front-End Performance](/performance) for more information.

```java
"capturePerformance": true
```

---

### `screenResolution`

<p><small>| STRING |</small></p>

Specifies the screen resolution to be used during your test session. Default screen resolution for Sauce tests is `1024x768`.

:::note
To specify the screen resolution on Windows, we recommend that you set the [`platformName`](#platformname) to Windows 8 or newer (e.g., Windows 10).
:::

```java
"screenResolution": "1280x1024"
```

---

### `commandTimeout`

<p><small>| INTEGER |</small></p>

Sets command timeout in seconds. As a safety measure to prevent Selenium crashes from making your tests run indefinitely, we limit how long Selenium can take to run a command in our browsers. This is set to 300 seconds by default. The maximum command timeout value allowed is 600 seconds.

```java
"commandTimeout": 300
```

---

### `idleTimeout`

<p><small>| OPTIONAL | DURATION | INTEGER | <span className="sauceGreen">Desktop Only</span> | </small></p>

Sets idle test timeout in seconds. As a safety measure to prevent tests from running too long after something has gone wrong, we limit how long a browser can wait for a test to send a new command. This is set to 90 seconds by default and limited to a maximum value of 1000 seconds.

```java
"idleTimeout": 90
```

---

### `devTools`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Desktop Only</span> | <span className="sauceGreen">BETA</span> | </small></p>

Enables [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) support, which is disabled by default on Sauce Labs platform. This allows Selenium 4 clients to use [Bi-Directional functionality](https://www.selenium.dev/documentation/webdriver/bidirectional/). In particular, this capability exposes the WebSocket endpoint which is available under `se:cdp` field in session startup response body. This endpoint can be used to issue Chrome DevTools Protocol commands as described by the [specification](https://chromedevtools.github.io/devtools-protocol/). The default value is `false`.

The `devTools` capability is **not compatible** with [`extendedDebugging`](#extendeddebugging) capability.

```java
"devTools": true
```

---

## Mobile Appium Capabilities

As the W3C WebDriver Protocol is supported in Appium v1.6.5 and higher, and required for Appium v2.0, we encourage and support using it for your Appium mobile app tests instead of the JSON Wire Protocol (JWP). We'll continue to support JWP in all currently supported Appium 1.X versions, but please be aware that with Appium 2.0, JWP support will be fully deprecated in favor of W3C.

The capabilities defined here assume the W3C WebDriver Protocol. See [Appium Real Device W3C Specification](/mobile-apps/automated-testing/appium/real-devices/#using-the-w3c-webdriver-specification) and [Migrating Appium Real Device Tests to W3C](https://support.saucelabs.com/hc/en-us/articles/4412359870231) for more information.

---

### `platformName`

<p><small>| MANDATORY <span className="sauceGreen">for Virtual and Real Devices</span> | STRING |</small></p>

Identifies the name of the operating system the mobile device should be running on. Values are not case-sensitive (i.e., `"ios"` is the same as `"iOS"`). Valid values are `Android` and `iOS`. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-platform-name) for more information.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("platformName", "Android");
```

---

### `appium:platformVersion`

<p><small>| MANDATORY <span className="sauceGreen">for Virtual Devices</span> | OPTIONAL <span className="sauceGreen">for Real Devices</span> | STRING |</small></p>

Allows you to set the mobile OS platform version that you want to use in your test.

:::note
Android and iOS platform versions are based on [Semantic Versioning](https://semver.org/), also known as SEMVER. This means that the versions will have the format `MAJOR.MINOR.PATCH`.
:::

**Virtual Devices**

This is mandatory for Android Emulators and iOS Simulators. You can find the available versions in our [Platform Configurator](https://saucelabs.com/platform/platform-configurator).

:::note
iOS Simulators now support the values `latest`, `current_major`, or `previous_major` as the `appium:platformVersion`. These values will automatically use the latest, current major, or previous major version of iOS for your specified Simulator. See [iOS Version Management](/mobile-apps/features/ios-version-management) for more information.
:::

**Real Devices**

This is optional for Real Devices. There are three options you can use to determine which version you want to use for your automated Appium, Espresso, or XCUITest tests:

1. Don't provide a `platformVersion`, this will result in any available Android or iOS device, no matter the version.
2. Provide a `platformVersion` that starts with your provided `platformVersion` string:
   - **`12`:** matches all minors and patches for `platformVersion: "12"`. For example `12.1.0|12.1.1|12.2.0|...`
   - **`12.1`:** matches all patches for `platformVersion: "12.1"`. For example `12.1.0|12.1.1`, it will **not** match `12.2.x|12.3.x` and higher
   - **`12.1.1`:** matches all devices that have **this exact** platform version
3. In/exclude a specific version and or a range of versions by using a regular expression (regex). You don't need to provide the forward slashes (`/{your-regex}/`) as you would normally do with regex. Keep in mind that the regex needs to match the format `MAJOR.MINOR.PATCH`. The possibilities are endless, but here are just a few examples:
   - **`^1[3-4|6].*`:** Will match `13`, `14` and `16`, but not 15, see [example](https://regex101.com/r/ExICgZ/1).
   - **`^(?!15).*`:** Will exclude version `15` with all it's minors and patches, but will match all other versions, see [example](https://regex101.com/r/UqqYrM/1).

:::note NOTE
The stricter the `platformVersions` is, the smaller the pool of available devices will be and the longer you might need to wait for the available device. We recommend using only the major version or using the regex option to get the best results and an available device in the fastest way.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
// For Android Emulators or iOS Simulators
// the platformVersion needs to match exactly
capabilities.setCapability("appium:platformVersion", "12.0");
// For Real Devices, dynamically finding an available device
// with at least major version 12
capabilities.setCapability("appium:platformVersion", "12");
// For Real Devices when you exactly know the version of
// the device you want to use
capabilities.setCapability("appium:platformVersion", "12.4.1");
// For Real Devices when you want to exclude version 15
capabilities.setCapability("appium:platformVersion", "^(?!15).*");
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:deviceName`

<p><small>| MANDATORY for <span className="sauceGreen">Virtual Devices</span> | OPTIONAL for <span className="sauceGreen">Real Devices</span> | STRING |</small></p>

Allows you to set the name of the simulator, emulator, or real device you want to use in the test.

**For Real Devices:**

You can use this to set up a test with either [static or dynamic allocation for RDC](/mobile-apps/supported-devices/#static-and-dynamic-device-allocation), and run individual or parallel tests. Static allocation allows you to run your tests on a very specific device, while dynamic allocation allows you to specify a family of devices or any device with a certain OS so you can quickly run your test on the first available real device (RDC) device.

- Dynamic allocation example: for an Android RDC test, you can request a generic Samsung Galaxy device by using the option `"appium:deviceName":"Samsung Galaxy.*"`.
- Static allocation example: if you want to use a Samsung Real Device, you need to specify the exact Samsung Galaxy device by using it's device ID or display name (e.g., `"appium:deviceName":"Samsung_Galaxy_S20_real"` or `"appium:deviceName":"Samsung Galaxy S20"`).

**For Android Emulators**

Each Android Emulator skin will have a different configuration depending on the phone or tablet that it emulates. For example, all the skins have different resolutions, screen dimensions, pixel densities, memory, etc. You can use our [Platform Configurator](https://saucelabs.com/platform/platform-configurator) to get a list of the available Android emulator skins for the various Android Emulator versions.

**Examples**

```java
MutableCapabilities capabilities = new MutableCapabilities();
// For a real device
capabilities.setCapability("appium:deviceName", "Samsung Galaxy S20");
// For an Android Emulator
capabilities.setCapability("appium:deviceName", "Google Nexus 7 HD Emulator");
// For an iOS Simulator
capabilities.setCapability("appium:deviceName", "iPhone XS Simulator");
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:automationName`

<p><small>| OPTIONAL for  <span className="sauceGreen">Appium 1.x (JWP)</span> | MANDATORY for  <span className="sauceGreen">Appium 2.0 (W3C)</span> | STRING  |</small></p>

Allows you to set the automation engine that will be used.
Possible values are:

**Emulators / Simulators:**

- **Android:** `UiAutomator2`, `Espresso`, `Flutter`
- **iOS:** `XCUITest`, `Flutter`

**Real Devices:**

- **Android:** `UiAutomator2`
- **iOS:** `XCUITest`

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:automationName", "UiAutomator2");
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `browserName`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Virtual and Real Devices</span> |</small></p>

Identifies the browser to be used when automating with a mobile browser. See the [WebDriver W3C Specification](https://w3c.github.io/webdriver/#dfn-browser-name) for more information. This capability is case-insensitive

- For Android the value needs to be `"Chrome"`.
- For iOS, the value needs to be `"Safari"`.

:::note

- If this capability is not provided for a virtual device, the [`appium:app`](#appiumapp) capability needs to be set. If none is set the test will throw an error.
- This capability can be omitted for virtual devices if the [`appium:app`](#appiumapp) capability is set.
- If this capability is not provided for a real device session and also the:
  - [`appium:app`](#appiumapp)
  - or [`appium:bundleId`](#appiumbundleid) (iOS)
  - or [`appium:appPackage`](#appiumapppackage) and [`appium:appActivity`](#appiumappactivity) (Android)
    capability is not provided, then a real device session will automatically fall back to the default browser. This will be Chrome for Android and Safari for iOS.

:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("browserName", "chrome");
```

---

### `appium:app`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Virtual and Real Devices</span> |</small></p>

Allows you to set a path to an `.ipa`, `.apk`, `.aab` or `.zip` file containing the mobile app you want to test. This could be the location of your app in [App Storage](/mobile-apps/app-storage) (e.g., `storage:filename=myapp.zip`) or the URL to a remote location where your app is located (e.g., `http://myappurl.zip`). The remote location needs to be accessible from the web, Sauce Connect can not access your internal file system where apps are hosted.

:::note

- If this capability is not provided for a virtual device, the [`browserName`](#browsername-1) capability needs to be set. If none is set the test will throw an error.
- This capability can be omitted for virtual devices if the [`browserName`](#browsername-1) capability is set.
- If this capability is not provided for a real device session and also the:

  - [`browserName`](#browsername-1) capability
  - or [`appium:app`](#appiumapp)
  - or [`appium:bundleId`](#appiumbundleid) (iOS)
  - or [`appium:appPackage`](#appiumapppackage) and [`appium:appActivity`](#appiumappactivity) (Android)

  capability is not provided, then a real device session will automatically fall back to the default browser. This will be Chrome for Android and Safari for iOS

:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:app", "storage:filename=my_app.zip");
```

:::tip Using Storage Id
If your app has been uploaded to [Sauce storage](https://app.saucelabs.com/live/app-testing), you can set the `app` capability to `"storage:xxxxxxxxx-xxxxxxx-xxx"` and enter the **FILE ID** for your app. This allows you to set which specific version you uploaded. Otherwise, if you use the file name it will select the latest version uploaded with the exact same name.
:::

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:bundleId`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">iOS Only</span> |</small></p>

Bundle identifier of the app under test, for example `com.apple.calculator`. The capability value is calculated automatically if [`appium:app`](#appiumapp) is provided.

:::note
If neither [`appium:app`](#appiumapp), [`browserName`](#browsername-1), or `appium:bundleId` capability is provided then by default Sauce Labs will start the Safari browser for iOS.
:::

<!-- prettier-ignore -->
:::tip
These two posts explain how you can get the `bundleId` for iOS apps:

- [iOS System Apps](https://github.com/joeblau/apple-bundle-identifiers)
- [3rd party iOS Apps](https://pspdfkit.com/guides/ios/faq/finding-the-app-bundle-id/)

:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:bundleId", "com.apple.calculator");
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:appPackage`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">Android Only</span> |</small></p>

Application package identifier to be started, for example, `com.google.android.youtube`. If not provided, then UiAutomator2 will try to detect it automatically from the package provided by the [`appium:app`](#appiumapp) capability. Read [How To Troubleshoot Activities Startup](https://github.com/appium/appium-uiautomator2-driver/blob/master/docs/activity-startup.md) for more details.

:::note
If neither [`appium:app`](#appiumapp), [`browserName`](#browsername-1), or `appium:appPackage` plus [`appium:appActivity`](#appiumappactivity) capabilities are provided then by default Sauce Labs will start the Chrome browser for Android.
:::

:::tip
This [post](https://www.techmesto.com/find-android-app-package-name/) explains how you can get the `appPackage` for Android apps.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:appPackage", "com.google.android.youtube");
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:appActivity`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">Android Only</span> |</small></p>

Main application activity identifier, for example, `com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity`. If not provided then UiAutomator2 will try to detect it automatically from the package provided by the [`appium:app`](#appiumapp) capability. Read [How To Troubleshoot Activities Startup](https://github.com/appium/appium-uiautomator2-driver/blob/master/docs/activity-startup.md) for more details.

:::note
If neither [`appium:app`](#appiumapp), [`browserName`](#browsername-1) or `appium:appActivity` plus [`appium:appPackage`](#appiumapppackage) capability are provided then by default Sauce Labs will start the Chrome browser for Android.
:::

:::tip
You can get the current activity by using the Appium [`currentActivity`](https://appium.io/docs/en/commands/device/activity/current-activity/) command. This is the Appium 1 command, but will also work with Appium 2.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:appActivity", "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity");
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:otherApps`

<p><small>| OPTIONAL | STRING or LIST | <span className="sauceGreen">Real Devices Only</span> |</small></p>

A dependent app that has already been uploaded to [App Storage](/mobile-apps/app-storage) will be pre-installed on the device during the testing of the main app. You can specify the app using its `storage:<fileId>` or `storage:filename=<filename>` reference.

Dependent apps inherit the configuration of the main app under test for [`Device Language`](/mobile-apps/live-testing/live-mobile-app-testing/#default-app-settings), [`Device Orientation`](/mobile-apps/live-testing/live-mobile-app-testing/#default-app-settings), and [`Proxy`](/mobile-apps/live-testing/live-mobile-app-testing/#default-app-settings), regardless of the settings may have been applied to the app at the time of upload, because the settings are specific to the device under test. For example, if the dependent app is intended to run in landscape orientation, but the main app is set to portrait, the dependent app will run in portrait for the test, which may have unintended consequences.

Android-dependent apps will not be instrumented or modified. iOS-dependent apps will always be resigned/modified (even when resigning is disabled for the main app) because apps can't be installed on iOS devices without resigning them. If a dependent app cannot be resigned (such as a third party app), the test will not work as intended.

```java
MutableCapabilities capabilities = new MutableCapabilities();
// Or for a single app by name
capabilities.setCapability("appium:otherApps", "storage:filename=app0.apk");
// Or for a single app by fileId
capabilities.setCapability("appium:otherApps",  "storage:7435ab52-1eaa-4387-a67b-4d8e265f85");
// Or for multiple apps by name
capabilities.setCapability("appium:otherApps", ["storage:filename=app0.apk", "storage:filename=app1.apk"]);
// Or for multiple apps by fileId
capabilities.setCapability("appium:otherApps",  ["storage:7435ab52-1eaa-4387-a67b-4d8e265f8509","storage:9035342-f8ea-7687-a67b-4dd4365f8588"]);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:orientation`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Virtual and Real Devices</span> |</small></p>

Specifies the orientation of the screen during the test. Valid values are `PORTRAIT` and `LANDSCAPE`.

:::important
This capability is an Appium capability that needs to be pre-fixed with `appium:` so it becomes `appium:orientation`. It can be used for virtual device mobile tests and real device tests. The`appium:orientation` capability will only flip the screen while the capability `deviceOrientation` will flip the skin and the screen. See [`deviceOrientation`](#deviceorientation) for more information.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:orientation", "LANDSCAPE");
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:noReset`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Virtual and Real Devices</span> |</small></p>

If set to `true` it prevents the device from resetting before the session startup. This means the application under test will not be terminated or its data cleaned. This capability behaves differently across virtual and real devices.

**For Real Devices:**

Set `noReset` to `true` to keep a device allocated to you during the device cleaning process, as described under [`cacheId`](#`cacheId`), allowing you to continue testing on the same device. Default value is `false`. To use `noReset`, you must pair it with `cacheId`.

**For Virtual Devices:**

This capability will have no effect on Sauce Labs virtual devices, it will only work on local Android Emulators/iOS Simulators. For local executions, you will likely only have one device available, in Sauce Labs you will have a pool of devices available depending on your concurrency. Each session will start a new clean session which will make this capability redundant.

**Specifics for Android Real Devices:**

If `noReset` is set to `true`:

- The app does not stop after a test/session.
- The app data will not be cleared between tests/sessions.
- Apk will not be uninstalled after a test/session.

**Specifics for iOS Real Devices:**

On iOS devices, the `noReset` value is permanently set to `true` and cannot be overridden using `noReset:false`. If you check your Appium logs, you'll see that the value is `true`, even though the default setting technically is false. We've done this intentionally to ensure that your post-test iOS device cleaning process is optimal and secure.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:noReset", true);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:autoWebview`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Virtual and Real Devices</span> |</small></p>

Move directly into Webview context if available. This can come in handy when you need to automate a Hybrid app and the first screen in your app is a Hybrid screen. Default `false`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:autoWebview", true);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:includeSafariInWebviews`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">iOS Only</span> |</small></p>

Add Safari web contexts to the list of contexts available during a native/webview app test. This is useful if the test starts with an app and you eventually need to open Safari to be able to interact with it. Defaults to `false`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:includeSafariInWebviews", true);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:autoAcceptAlerts`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">iOS Only</span> |</small></p>

Accept all iOS alerts automatically if they pop up. This includes privacy access permission alerts (e.g., location, contacts, photos). Default is `false`.

:::note
The Android equivalent is [`appium:autoGrantPermissions`](#appiumautograntpermissions).
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:autoAcceptAlerts", true);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:autoDismissAlerts`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">iOS Only</span> |</small></p>

Dismiss all iOS alerts automatically if they pop up. This includes privacy access permission alerts (e.g., location, contacts, photos). Default is `false`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:autoDismissAlerts", true);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:autoGrantPermissions`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">Android Only</span> |</small></p>

Whether to grant all the requested application permissions automatically when a test starts.

The default value is `true`.

:::note
The iOS equivalent is [`appium:autoAcceptAlerts`](#appiumautoacceptalerts).
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
// Handle all requested application permissions "yourself"
capabilities.setCapability("appium:autoGrantPermissions", false);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

## Mobile Appium Timeout Capabilities

As with Selenium Tests, Appium also supports different types of timeouts like:

- [Implicit Wait Timeout](https://appium.io/docs/en/commands/session/timeouts/implicit-wait/#set-implicit-wait-timeout): Set the amount of time the driver should wait when searching for elements
- [Script Timeouts](https://appium.io/docs/en/commands/session/timeouts/async-script/index.html): Sets the amount of time, in milliseconds, that asynchronous scripts executed by [execute async](https://appium.io/docs/en/commands/web/execute-async/index.html) are permitted to run before they are cancelled (Web context only)

These timeouts can be controlled by the driver during the test session. There are timeouts that can be set as a capability for when you start the driver and can be driver specific.

---

### `appium:newCommandTimeout`

<p><small>| OPTIONAL | DURATION | INTEGER | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">Android and iOS</span> |</small></p>

Specifies the amount of time in seconds, in which the driver waits for a new command from the client before assuming the client has stopped sending requests. If there is no response during this time, the next executed command on the Virtual/Real Device will time out. The default value is 60 seconds while the maximum allowed value is not limited for Virtual Devices and is limited to 90 seconds for Real Devices.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:newCommandTimeout", 90);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:autoWebviewTimeout`

<p><small>| OPTIONAL | DURATION | INTEGER | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">Android only</span> |</small></p>

Set the maximum number of milliseconds to wait until a web view is available if autoWebview capability is set to true. 2000 ms by default

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:autoWebviewTimeout", 30000);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:webkitResponseTimeout`

<p><small>| OPTIONAL | DURATION | INTEGER | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">iOS only</span> |</small></p>

Set the time, in milliseconds, to wait for a response from `WebKit` in a Safari session. Defaults to `5000`

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:webkitResponseTimeout", 10000);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:webviewConnectTimeout`

<p><small>| OPTIONAL | DURATION | INTEGER | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">iOS only</span> |</small></p>

The time to wait, in milliseconds, for the initial presence of webviews in MobileSafari or hybrid apps. Defaults to 0

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:webviewConnectTimeout", 50000);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

## Mobile Appium iOS `WebDriverAgent` Timeout Capabilities

`WebDriverAgent` is a [WebDriver server](https://w3c.github.io/webdriver/) implementation for iOS that is used to remote control iOS devices. It is developed for end-to-end testing and is adopted via the [XCUITest driver](https://github.com/appium/appium-xcuitest-driver). The `WebDriverAgent` has it's own timeout capabilities that can be controlled by the driver during the test session. The most important ones are explained below.

:::note
It might be helpful to understand how the `WebDriverAgent` works before reading the following capabilities. You can check this video [Appium: Under the Hood of WebDriverAgent by Mykola Mokhnach](https://youtu.be/4i6x3j1D8C8) for a quick introduction. The reason for adjusting the timeouts, which are explained below, are explained in this video from [here](https://youtu.be/4i6x3j1D8C8?t=481).
:::

---

### `appium:wdaLaunchTimeout`

<p><small>| OPTIONAL | DURATION | INTEGER | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">iOS only</span> |</small></p>

Time, in ms, to wait for `WebDriverAgent` to be pingable. Defaults to 60000ms.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:wdaLaunchTimeout", 30000);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:wdaConnectionTimeout`

<p><small>| OPTIONAL | DURATION | INTEGER | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">iOS only</span> |</small></p>

Timeout, in ms, for waiting for a response from `WebDriverAgent`. Defaults to 240000ms.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:wdaConnectionTimeout", 30000);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:waitForIdleTimeout`

<p><small>| OPTIONAL | DURATION | FLOAT | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">iOS only</span> |</small></p>

The amount of time in float seconds to wait until the application under test is idling. XCTest requires the app's main thread to be idling in order to execute any action on it, so the `WebDriverAgent` might not even start/freeze if the app under test is constantly hogging the main thread. The default value is `10` (seconds). Setting it to zero disables idling checks completely (not recommended) and has the same effect as setting `waitForQuiescence` to false. Available since Appium `1.20.0`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:waitForIdleTimeout", 60);
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

### `appium:commandTimeouts`

<p><small>| OPTIONAL | DURATION | STRING | <span className="sauceGreen">Virtual and Real Devices</span> | <span className="sauceGreen">iOS only</span> |</small></p>

Custom timeout(s) in milliseconds for `WebDriverAgent` backend commands execution. This might be useful if the `WebDriverAgent` backend freezes unexpectedly or requires too much time to fail and blocks automated test execution. The value is expected to be of type string and can either contain max milliseconds to wait for each `WebDriverAgent` command to be executed before terminating the session forcefully.

:::note
Don't confuse `appium:commandTimeouts` with [`appium:newCommandTimeout`](#appiumnewcommandtimeout) which is the timeout for the next command to be executed.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("appium:commandTimeouts", "120000");
```

:::tip
Using Appium 2? Prevent `appium:`-prefix repetitiveness and start using [`appium:options`](#appiumoptions) for Real Devices instead.
:::

---

## More Appium specific capabilities

Not all specific Appium Driver capabilities are explained here in preventing duplications. There are more capabilities which are specific for each Appium Driver. They can be found here

**Android**

- [UIAutomator2-Driver](https://github.com/appium/appium-uiautomator2-driver#capabilities)
- [Flutter-Driver](https://github.com/appium-userland/appium-flutter-driver#desired-capabilities-for-flutter-driver-only)

**iOS**

- [XCUITest-Driver](https://github.com/appium/appium-xcuitest-driver#capabilities)
- [Flutter-Driver](https://github.com/appium-userland/appium-flutter-driver#desired-capabilities-for-flutter-driver-only)

---

### `appium:options`

<p><small>| OPTIONAL | OBJECT | <span className="sauceGreen">Real Devices</span> | <span className="sauceGreen">Appium 2 Only</span> |</small></p>

If you use a lot of `appium:` capabilities in your tests, it can get a little repetitive. You can combine all capabilities as an object value of a single `appium:options` capability instead, in which case you don't need to use prefixes on the capabilities inside the object. For example:

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("platformName", "iOS");
capabilities.setCapability("browserName", "Safari");
MutableCapabilities appiumOptions = new MutableCapabilities();
appiumOptions.setCapability("automationName", "XCUITest");
appiumOptions.setCapability("deviceName", "iPhone iPhone 11");
appiumOptions.setCapability("platformVersion", "16");
capabilities.setCapability("appium:options", appiumOptions);
// `appium:options` will only work with Appium 2 or later
// This can be set in the `sauce:options` block
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("appiumVersion", "2.0.0");
sauceOptions.setCapability("build", "<your build id>");
sauceOptions.setCapability("name", "<your test name>");
capabilities.setCapability("sauce:options", sauceOptions);
```

:::note
`appium:options` support for Virtual Devices is coming soon.
:::

:::caution
If you include the same capabilities both inside and outside of `appium:options`, the values inside of `appium:options` take precedence.
:::

---

## Mobile App Appium Capabilities: Sauce-Specific – Optional

Optional, Sauce-specific capabilities that you can use in your Appium tests. They can be added to the `sauce:options` block of your session creation code.

---

### `appiumVersion`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Virtual and Real Devices</span> |</small></p>

Specifies the Appium driver version you want to use. For most use cases, setting the `appiumVersion` is unnecessary because Sauce Labs defaults to the version that supports the broadest number of device combinations. Sauce Labs advises against setting this property unless you need to test a particular Appium feature or patch.

:::note
If you want to use Appium 2.0, see the [Migration Guide](/mobile-apps/automated-testing/appium/appium-2-migration/).
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("appiumVersion", "1.22.0");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

#### Check on which Appium version your test ran:

1. Log into Sauce Labs.
2. Go to **Test Details**.
3. Find and select the test that you ran using Appium.
4. Click the **Metadata** tab.
5. Look for the **Logs** row and select **Appium Log**. The first line indicates the Appium version. For example, `2019-05-05T17:45:07.541Z - info: Welcome to Appium v1.21.0`.

---

### `deviceOrientation`

<p><small>| OPTIONAL | STRING| <span className="sauceGreen">Virtual Devices Only</span> |</small></p>

Specifies the orientation of the virtual skin and screen during the test. Valid values are `PORTRAIT` and `LANDSCAPE`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `customLogFiles`

<p><small>| OPTIONAL | LIST | <span className="sauceGreen">Virtual Devices Only</span> |</small></p>

If your app creates an extra log then you can use the `customLogFiles` to store those additional logs in the "Logs" tab of the executed automated session. It is created in the form of a list of search filters that enumerate after an app test to locate text files to upload as logs. Files are uploaded with the `.log` extension appended. The search paths are rooted at the application under test:

- Android (path on the emulated device): `/data/data/*PACKAGE_ID*/...`
- iOS: `*SIMULATED_DEVICE_PATH*/data/Containers/Data/Application/*APPLICATION_ID*/...`. On a macOS filesystem, an example of SIMULATED_DEVICE_PATH would be `~/Library/Developer/CoreSimulator/Devices/*DEVICE_ID*`

To view and download the extra log files, go to the executed session in the Sauce Labs dashboard, and switch to the "Logs" tab:

1. "Automated > Test Results"
2. Search for your session and click on it
3. Go to the "Logs" tab above the video

<img src={useBaseUrl('/img/dev/customLogFiles.png')} alt="customLogFiles"/>

The following examples outline how this is handled for the different device types.

Supplying the list `["files/*_log", "*crash*"]` to an Android app test of the package `com.saucelabs.exampleapp` will upload all the files found after the test, that match either of the glob expressions:

- `/data/data/com.saucelabs.exampleapp/files/*.log`
- `/data/data/com.saucelabs.exampleapp/*crash*`

Supplying the list `["files/*_log", "*crash*"]` to an iOS app test will upload all the files found after the test, that match either of the glob expressions (SIMULATED_DEVICE_PATH and APPLICATION_ID filled in with example values):

- `~/Library/Developer/CoreSimulator/Devices/8BF8C5E3-E992-424F-A491-5C673761737C/data/Containers/Data/Application/DBF4A728-9414-4431-9A56-41EC1CBFFA0B/files/*.log`
- `~/Library/Developer/CoreSimulator/Devices/8BF8C5E3-E992-424F-A491-5C673761737C/data/Containers/Data/Application/DBF4A728-9414-4431-9A56-41EC1CBFFA0B/*crash*`

In both sets of examples, it is worth noting that an asterisk can match directory elements as well as characters, so `files/*log` will match both `files/debug.log` and `files/subdir/other.log`

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("customLogFiles", ["Library/Caches/Logs/*_log", "files/*crash.log"]);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `android.gpu.mode`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Android Virtual Devices Only</span> |</small></p>

By default, our emulator uses `software` rendering to handle graphics for maximum compatibility. This involves the CPU calculating how everything looks on your app's screen. However, this could lead to an emulator crash when testing apps with intricate or heavy graphical elements. To mitigate this, use the hardware rendering option by specifying `"android.gpu.mode"="hardware"` in your test capabilities.

Valid values are `hardware` and `software` (default).

:::caution

Our advice is to leave it as `software` unless you are experiencing specific issues, like emulator (**not** app) crashes. Using `hardware` could solve your specific issue, but beware you might run into other issues which you didn't have before. If you do run into issues, please <a href="mailto:help@saucelabs.com">contact support</a>.

:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("android.gpu.mode", "hardware");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `disableImmersiveModePopUp`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Android Virtual Devices Only</span> |</small></p>

Android allows apps to use the full screen, hiding the status bar and navigation bar. This is called ["immersive mode"](https://developer.android.com/develop/ui/views/layout/immersive). When you run an Android test, the device will show a popup asking if you want to allow the app to use immersive mode. This popup can interfere with your test, and by default we disable it. If you want to enable it, set `disableImmersiveModePopUp` to `false`.

:::note

Under the hood, this capability is running this command before the app is started:

```bash
adb shell settings put secure immersive_mode_confirmations confirmed
```

:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("disableImmersiveModePopUp", false);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `setupDeviceLock`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> | </small></p>

Sets up the device pin code for the automated test session. Valid values are `true` and `false`.
This capability sets your device in the state required for your application to launch successfully.

:::important

The `setupDeviceLock` capability helps to bypass the Security requirements from your applications, like pincode requirements for launching and app or invoking certain activities/features in your app. For an example, see https://developer.android.com/reference/android/app/KeyguardManager.

It must be paired with one of the capabilities listed below.

- [`appium:app`](#appiumapp)
- [`appium:bundleId`](#appiumbundleid) (iOS)
- [`appium:appPackage`](#appiumapppackage) (Android)
- [`appium:appActivity`](#appiumappactivity) (Android)

:::

```java title="Real Device Setting"
MutableCapabilities capabilities = new MutableCapabilities();
//.. .
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("setupDeviceLock", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `tabletOnly`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Use this capability to select only tablet devices for testing by setting it to `"true"`. For [**Dynamic Allocation**](/mobile-apps/automated-testing/appium/real-devices).

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("tabletOnly", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `phoneOnly`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Use this capability to select only phone devices by setting it to `"true"`. For [**Dynamic Allocation**](/mobile-apps/automated-testing/appium/real-devices).

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("phoneOnly", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `privateDevicesOnly`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

If your pricing plan includes both private and public devices, use this capability to request allocation of private devices only by setting it to `"true"`. For [**Dynamic Allocation**](/mobile-apps/automated-testing/appium/real-devices).

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("privateDevicesOnly", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `publicDevicesOnly`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

If your pricing plan includes both private and public devices, use this capability to request allocation of public devices only by setting it to `"true"`. For [**Dynamic Allocation**](/mobile-apps/automated-testing/appium/real-devices).

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("publicDevicesOnly", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `carrierConnectivityOnly`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">Private Devices Only</span> |</small></p>

Use this capability to allocate only devices connected to a carrier network by setting it to `"true"`. For [**Dynamic Allocation**](/mobile-apps/automated-testing/appium/real-devices).

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("carrierConnectivityOnly", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `cacheId`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Keeps the device allocated to you between test sessions and bypasses the device cleaning process and session exit that occurs by default after each test completes. Normally, you'd need to start over and reopen another device. You'll need to launch your next test within 10 seconds of your previous test ending to ensure that the same device will be allocated for the test (not cleaned or reset).

:::note
**For Android:**
If [`noReset`](#noreset) is also set to `true`, the app under test and its data will remain as-is on the device.

**For iOS**
Changing [`noReset`](#noreset) has no impact here. The app will not be removed, will stay on the phone/tablet and will keep it's state. This is caused by the re-signing process of the app.
:::

If you are running multiple test suites in parallel, the values for `cacheId` should be unique for each suite (to avoid mixing up the devices), and the value for `cacheId` must be the same for all test methods that you want to run on the cached device. In addition, the app and project ID used for the tests must remain the same, along with the values for these capabilities:

- `platformName`
- `appium:deviceName`
- `appium:platformVersion`
- `appium:autoGrantPermissions`

and specific `sauce:options` like:

- `tabletOnly`
- `phoneOnly`
- `privateDevicesOnly`
- `appiumVersion`

Suitable for test setups that require the app's state to be reset between tests. Can be used for both [**static allocation and dynamic allocation**](/mobile-apps/supported-devices/#static-and-dynamic-device-allocation).

We recommend reviewing [Device Management for Real Devices](/mobile-apps/supported-devices) to learn more about how Sauce Labs manages device allocation, device caching, and device cleanup.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("cacheId", "Wou0L9usPI9v");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `resigningEnabled`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Controls Sauce Labs default resigning (iOS) or instrumentation (Android) of mobile apps installed on our devices. By default, this property is always `true`.

**iOS**

When set to `true`, Sauce Labs will resign the app under test with its own signature. This is required for iOS apps to be installed on our devices, but also to support features like:

- [Network Capture](#networkcapture)
- [Image Injection](#saucelabsimageinjectionenabled)
- [Biometrics interception](#allowtouchidenroll)

And many more. This value can be set to `false` to allow testing of specific behaviors that are not permitted under the Sauce Labs provisioning. See [Resigning Enablements](/mobile-apps/automated-testing/ipa-files/#sauce-labs-resigning-enablements) for more information. This capability can only be set to `false` for iOS private devices.

**Android**

When set to `true`, Sauce Labs will instrument the app under test with its own signature. This is required for Android apps if you want to use features like:

- [Network Capture](#networkcapture)
- [Image Injection](#saucelabsimageinjectionenabled)
- [Biometrics interception](#allowtouchidenroll)

and many more. This value can be set to `false` and can be used for private and public devices.

:::caution AAB App Signing
To install an \*.apk app that is extracted from an \*.aab file, Sauce Labs must sign the \*.apk using its own signature. In such cases, Sauce Labs signs both the `app` and `testApp` to ensure matching signatures, even if this capability is set to `false`. Otherwise, the app installation will fail.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("resigningEnabled", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `sauceLabsImageInjectionEnabled`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Enables the [camera image injection](/mobile-apps/features/camera-image-injection) feature. [`resigningEnabled`](#resigningenabled) needs to be enabled if this is set to `true`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("sauceLabsImageInjectionEnabled", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `sauceLabsBypassScreenshotRestriction`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">Android Only</span> |</small></p>

Bypasses the restriction on taking screenshots for secure screens (i.e., secure text entry). [`resigningEnabled`](#resigningenabled) needs to be enabled if this is set to `true`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("sauceLabsBypassScreenshotRestriction", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `allowTouchIdEnroll`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Enables the interception of biometric input, allowing the test to simulate Touch ID interactions (not a Sauce Labs-specific capability). [`resigningEnabled`](#resigningenabled) needs to be enabled if this is set to `true`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("allowTouchIdEnroll", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `audioCapture`

<p><small>| OPTIONAL | BOOLEAN | </small></p>

Enables audio recording in your automated tests. This feature is supported for Windows and macOS desktop tests as well as mobile Real Devices. The audio will be part of the **Test Results** page video file, which you can play back and download in our built-in media player. The default value is `false`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("audioCapture", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `networkCapture`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span></small> |</p>

Enables mobile app instrumentation (Android or iOS) and recording of HTTP/HTTPS network traffic for debugging purposes. API calls are collected into a HAR file, which you can view and download from your **Test Results** > **Network** tab console. The default value is `false`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("networkCapture", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `groupFolderRedirectEnabled`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span></small> | <small><span className="sauceGreen">iOS Only</span> | </small></p>

Enables the use of the app's private app container directory instead of the shared app group container directory. For testing on the Real Device Cloud, the app gets resigned, which is why the shared directory is not accessible.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("groupFolderRedirectEnabled", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `enableAnimations`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span></small> | <small><span className="sauceGreen">Android Only</span> | </small></p>

Use this capability to enable animations for Android real devices by setting it to `true`. By default, animations are disabled.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("enableAnimations", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `systemAlertsDelayEnabled`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span></small> | <small><span className="sauceGreen">iOS Only</span> | </small></p>

Delays system alerts, such as alerts asking for permission to access the camera, to prevent app crashes at startup. [`resigningEnabled`](#resigningenabled) needs to be enabled if this is set to `true`.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("systemAlertsDelayEnabled", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `sessionCreationTimeout`

<p><small>| OPTIONAL | INTEGER | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Specify the amount of time (in milliseconds) that the test should be allowed to find and assign an available device before the test will fail. The default value is 900000 milliseconds (15 minutes) and the max is 1800000 milliseconds (30 minutes).

:::caution
If you assign a value to this parameter that is lower than 1 minute (60000 milliseconds), you might encounter an `Unable to find available device within {sessionCreationTimeout}ms` error. This happens because the device may not be prepared in time for the test to begin.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
// Set it to 5 minutes (5*60*1000=300000)
sauceOptions.setCapability("sessionCreationTimeout", 300000);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `sessionCreationRetry`

<p><small>| OPTIONAL | INTEGER | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Specify the amount of automatic retries that Sauce Labs will execute to find and assign an available device before the test will fail. The default value is 1 and the max is 3.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
// Set it to 5 minutes (5*60*1000=300000)
sauceOptions.setCapability("sessionCreationRetry", 2);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `networkProfile`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">BETA</span> |</small></p>

Set a network profile with predefined network conditions at the beginning of the session.
Please refer to the [list of network profiles](https://docs.saucelabs.com/mobile-apps/features/network-throttling/#predefined-network-profiles) for more information about each profile's network conditions.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("networkProfile", "2G");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `networkConditions`

<p><small>| OPTIONAL | OBJECT | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">BETA</span> |</small></p>

Set custom network conditions for `downloadSpeed`, `uploadSpeed`, `latency` or `loss` at the beginning of the session.
Not all parameters need to be specified and only the ones specified will have conditioning applied.
Please refer to the [supported network conditions](https://docs.saucelabs.com/mobile-apps/features/network-throttling/#supported-network-conditions) for more information.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("networkConditions", ImmutableMap.of(
		"downloadSpeed", 5000,
		"uploadSpeed", 3000,
		"latency", 200,
		"loss", 2,
));
capabilities.setCapability("sauce:options", sauceOptions);
```

:::important

Each network condition has a supported value range:

- `downloadSpeed`: 0 - 50000 kbps
- `uploadSpeed`: 0 - 50000 kbps
- `latency`: 0 - 3000 ms
- `loss`: 0 - 100 %

:::

---

### `sauce: network-profile`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Set a network profile with predefined network conditions dynamically during your session.
Please refer to the [list of network profiles](/mobile-apps/features/network-throttling/#predefined-network-profiles) for more information about each profile's network conditions.

```java
driver.executeScript("sauce: network-profile", "2G");
```

---

### `sauce: network-conditions`

<p><small>| OPTIONAL | OBJECT | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Set custom network conditions for `downloadSpeed`, `uploadSpeed`, `latency` or `loss` dynamically during your session.
Not all parameters need to be specified and only the ones specified will have conditioning applied.
Please refer to [Network Throttling - executeScript](/mobile-apps/features/network-throttling/#appium---executescript) for more information.

```java
driver.executeScript("sauce: network-conditions", ImmutableMap.of(
    "downloadSpeed", 5000,
    "uploadSpeed", 3000,
    "latency", 200,
    "loss", 2,
));
```

---

### `mobile: shell`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Real Devices Only</span> | <span className="sauceGreen">Android Only</span> |</small></p>

Execute ADB shell commands, through Appium's `mobile: shell` capability.

:::note
Sauce Labs now supports ADB commands for Appium. To use ADB and `mobile: shell` commands, please [sign up for our BETA through this form](https://forms.gle/42qv8U1RukqC62x86) and indicate the desired ADB commands you would like to run. We will be supporting a limited list of ADB commands through `mobile: shell`. Please refer to the list of [allowed commands](https://docs.saucelabs.com/mobile-apps/mobile-faq/#im-encountering-errors-when-executing-adb-shell-commands-what-could-be-the-issue) or contact support for assistance.
:::


```java
driver.executeScript("mobile: shell", ImmutableMap.of(
    "command", "input",
    "args", ImmutableList.of("keyevent", "3")
));
```

---

## Desktop and Mobile Capabilities: Sauce-Specific – Optional

Optional Sauce Labs-specific capabilities that you can use for any Sauce Labs test. They must be added to the `sauce:options` block of your session creation code.

---

### `name`

<p><small>| OPTIONAL | STRING |</small></p>

Records test names for jobs and make it easier to find individual tests.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("name", "You test name");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `build`

<p><small>| OPTIONAL | STRING |</small></p>

Associates multiple jobs with a build number or app version, which will then be displayed on both the **Test Results** dashboard and **Archive** view.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("build", "build-1234");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `tags`

<p><small>| OPTIONAL | LIST | <span className="sauceGreen">Virtual and Real Devices</span> |</small></p>

User-defined tags for grouping and filtering jobs on the **Test Results** dashboard and **Archive** view. Tags can facilitate team collaboration.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("tags", ["tag1","tag2","tag3"]);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `username`

<p><small>| OPTIONAL | STRING |</small></p>

Sets your Sauce Labs username for a test.

You can either set `"username"` in capabilities or specify it in the Sauce URL as Basic Authentication. For [Visual Tests](#visual-testing)), this must be set in capabilities.

:::tip
You can find your `username` value under **Account** > **User Settings**.
:::

:::warning
Good security practices include never putting credentials in plain text in your code. We highly encourage you to reference this value from an Environment Variable and [Set Environment Variables for Authentication](/basics/environment-variables/) on every machine that executes your code. The example below is in JavaScript.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("username", System.getenv("SAUCE_USERNAME"));
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `accessKey`

<p><small>| OPTIONAL | STRING |</small></p>

Sets your Sauce Labs access key for the test.

You can either set `"accessKey"` in capabilities or specify it in the Sauce URL as Basic Authentication. For [Visual Tests](#visual-testing), this must be set in capabilities.

:::tip
You can find your `accessKey` value under **Account** > **User Settings**.
:::

:::warning
Good security practices include never putting credentials in plain text in your code. We highly encourage you to reference this value from an Environment Variable and [Set Environment Variables for Authentication](/basics/environment-variables/) on every machine that executes your code. The example below is in JavaScript.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `custom-data`

<p><small>| OPTIONAL | OBJECT | <span className="sauceGreen">Desktop and Virtual Devices Only</span> |</small></p>

User-defined custom data that will accept any valid JSON object, limited to 64KB in size.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("custom-data", "{'release': '1.0','commit': '0k392a9dkjr','staging': true,'execution_number': 5,'server': ‘test.customer.com'}");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `public`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Desktop and Virtual Devices Only</span> |</small></p>

We support several test/job result visibility levels, which control who can view the test details. The visibility level for a test can be set manually from the test results page, but also programmatically when starting a test or with our REST API. For more information about sharing test results, see the topics under [Sharing the Results of Sauce Labs Tests](/test-results/sharing-test-results).

Available visibility modes are:

- **public**:
  - Accessible to everyone.
  - May be listed on public web pages and indexed by search engines.
- **public restricted**:
  - Share your job's results page and video, but keeps the logs only for you.
  - Hides the fancy job log.
  - Prohibits access to the raw Selenium log so that anonymous users with the link will be able to watch the video and screenshots, but won't be able to see what's being typed and done to get there.
- **share**:
  - Only accessible to people with a valid link.
  - Not listed on publicly available pages on Sauce Labs.
  - Not indexed by search engines.
- **team**:
  - Best option if you want to share your jobs with other team members that were created as a sub-accounts of one parent account.
  - Only accessible to people under the same root account as you.
- **private**:
  - Best option if you don't want to share your test results page and video with anyone.
  - Only you (the owner) will be able to view assets and test results page.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("public", "team");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `tunnelName`

<p><small>| OPTIONAL | STRING | </small></p>

Specify a [Sauce Connect](/secure-connections/sauce-connect) tunnel to establish connectivity with Sauce Labs for your test. Tunnels allow you to test an app that is behind a firewall or on your local machine by providing a secure connection to the Sauce Labs platform.

See [Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup) for more information.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("tunnelName", "MyTunnel01");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `tunnelIdentifier`

<p><small>| OPTIONAL | STRING | <span className="sauceGold">DEPRECATED</span> |</small></p>

Specify a [Sauce Connect tunnel name](/secure-connections/sauce-connect/setup-configuration/basic-setup/#using-tunnel-names) to establish connectivity with a Sauce Labs test platform. This is an alias for [tunnelName](#tunnelname).

:::caution Deprecation notice
`tunnelIdentifier` is being deprecated in favor of `tunnelName`.
:::

:::note Choose the Correct Tunnel Identifier
The value expected here is the value shown under the **Tunnel Name** column on the Sauce Labs Tunnels page, _not_ the **Tunnel ID** numerical value.
:::

See [Using Tunnel Names](/secure-connections/sauce-connect/setup-configuration/basic-setup/#using-tunnel-names) for more information.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("tunnelIdentifier", "MyTunnel01");
capabilities.setCapability("sauce:options", sauceOptions);
```

:::warning Breaking Change
Appium tests for the Real Device Cloud using the W3C protocol MUST use `tunnelName` instead of `tunnelIdentifier`.
:::

### `tunnelOwner`

<p><small>| OPTIONAL | STRING |</small></p>

If the [tunnelName](#tunnelname) you've specified to establish connectivity with a Sauce Labs test platform is a shared tunnel, and you are _not_ the user who created the tunnel, you must identify the Sauce Labs user who did create the tunnel in order to use it for your test.

:::note Choose the Correct Tunnel Identifier
The value expected here is the value shown under the **Tunnel Name** column on the Sauce Labs Tunnels page, _not_ the **Tunnel ID** numerical value.
:::

See [Using Tunnel Names](/secure-connections/sauce-connect/setup-configuration/basic-setup/#using-tunnel-names) for more information.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("tunnelName", "MyTunnel01");
sauceOptions.setCapability("tunnelOwner", "<username of tunnel originator>");
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `parentTunnel`

<p><small>| OPTIONAL | STRING | <span className="sauceGold">DEPRECATED</span> |</small></p>

If the [tunnelName](#tunnelname) (or [tunnelIdentifier](#tunnelidentifier)) you've specified to establish connectivity with a Sauce Labs test platform is a shared tunnel, and you are _not_ the user who created the tunnel, you must identify the Sauce Labs user who did create the tunnel in order to use it for your test. This is an alias for [tunnelOwner](#tunnelowner).

:::caution Deprecation notice
`parentTunnel` is being deprecated in favor of `tunnelOwner`.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("tunnelIdentifier", "MyTunnel01");
sauceOptions.setCapability("parentTunnel", "<username of tunnel originator>");
capabilities.setCapability("sauce:options", sauceOptions);
```

:::warning Breaking Change
Appium tests for the Real Device Cloud using the W3C protocol MUST use `tunnelName` instead of `tunnelIdentifier` **and** `tunnelOwner` instead of `parentTunnel`.
:::

---

### `recordVideo`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Use this to disable video recording. By default, Sauce Labs records a video of every test you run. Disabling video recording can be useful for debugging failing tests as well as having a visual confirmation that a certain feature works (or still works). However, there is an added wait time for screen recording during a test run.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("recordVideo", false);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `videoUploadOnPass`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Disables video upload for passing tests. `videoUploadOnPass` is an alternative to `recordVideo`; it lets you discard videos for tests you've marked as passing. It disables video post-processing and uploading that may otherwise consume some extra time after your test is complete.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("videoUploadOnPass", false);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `recordScreenshots`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Disables step-by-step screenshots. In addition to capturing video, Sauce Labs captures step-by-step screenshots of every test you run. Most users find it very useful to get a quick overview of what happened without having to watch the complete video. However, this feature may add some extra time to your tests.

:::caution Limitations
The maximum number of screenshots is **150**. Once the limit is reached, further screenshots will no longer be taken.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("recordScreenshots", false);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `captureHtml`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

In the same way Sauce Labs captures step-by-step screenshots, you can capture the HTML source at each step of a test. This feature is disabled by default, but when it is enabled you can view the HTML source captures on the **Test Results** page.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("captureHtml", true);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `recordLogs`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Disables log recording. By default, Sauce creates a log of all the actions that you execute to create a report for the test run that lets you troubleshoot test failures more easily. This option disables only the recording of the log.json file; the selenium-server.log will still be recorded.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("recordLogs", false);
capabilities.setCapability("sauce:options", sauceOptions);
```

<br/>

## Desktop and Virtual Device Capabilities: Sauce-Specific – Optional

The following are Sauce Labs-specific options that apply only to virtual devices (desktop sessions, emulators and simulators). These options can be added to the `sauce:options` block of your session creation code.

---

### `maxDuration`

<p><small>| OPTIONAL | INTEGER | <span className="sauceGreen">Desktop and Virtual Devices Only</span> |</small></p>

Sets maximum test duration in seconds. As a safety measure to prevent tests from running indefinitely, the default is 1,800 seconds (30 minutes) and the maximum is 10,800 seconds (three hours).

:::caution Tests Should Not Exceed 30 Minutes

A test should never need to run more than 30 minutes. Our data shows that tests that run in under two minutes are twice as likely to pass as tests that take longer than seven minutes.

We have a three-hour maximum in place to ease the transition of new users migrating long-running tests to Sauce Labs.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("maxDuration", 1800);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `priority`

<p><small>| OPTIONAL | INTEGER | <span className="sauceGreen">Desktop and Virtual Devices Only</span> |</small></p>

Setting to prioritize jobs. If you have multiple new jobs waiting to start (i.e., across a collection of sub-accounts), jobs with a lower priority number take precedence over jobs with a higher number.

So, for example, if you have multiple jobs simultaneously waiting to start, we'll first attempt to find resources to start all the jobs with priority `0`, then all the jobs with priority `1`, etc.

When we run out of available virtual machines, or when you hit your concurrency limit, any jobs not yet started will wait. Within each priority level, jobs that have been waiting the longest take precedence.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("priority", 0);
capabilities.setCapability("sauce:options", sauceOptions);
```

---

### `timeZone`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Desktop and Virtual Devices Only</span> |</small></p>

Allows you to set a custom time zone for your test based on a city name. Most major cities are supported.

- **For Desktop VMs**: can be configured with custom time zones. This feature should work on all operating systems, however, time zones on Windows VMs are approximate. The time zone defaults to UTC. Look for the "principal cities" examples on this [list of UTC time offsets](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets).
- **For iOS Virtual Devices**: you can use this capability to change the time on the Mac OS X VM, which will be picked up by the iOS simulator. Also, since XCUITest driver version 7.10.0 it is possible to update the per-application time zone on real and virtual devices via the [appium:appTimeZone](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/reference/capabilities.md#app) capability.
- **For Android Virtual Devices**: This capability is not supported for virtual Android devices. Although, since UiAutomator2 driver version 3.1.0 it is possible to update the device-wide time zone on real and virtual devices via the [appium:timeZone](https://github.com/appium/appium-uiautomator2-driver?tab=readme-ov-file#other) capability.

:::note
Most web apps serve localization content based on the computer's IP Address, not the time zone set
in the operating system. If you need to simulate the computer being in a different location, you may need to set up a proxy.
:::

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("timeZone", "Los_Angeles");
capabilities.setCapability("sauce:options", sauceOptions);
```

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">All Devices Since appium2-20240501</span> |</small></p>

Both UiAutomator2 and XCUITest drivers allow to change the time zone using corresponding
test session capabilities.

**Android Devices**

Provide a valid time zone identifier to `appium:timeZone` capability.
The time zone identifier must be a valid name from the list of
[available time zone identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones),
for example `America/New_York`.
The time zone is changed instantly on the *per-device* basis and is preserved until the next change.

**iOS Devices**

Provide a valid time zone identifier to `appium:appTimeZone` capability.
The time zone identifier must be a valid name from the list of
[available time zone identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), for example `America/New_York`.
The time zone is changed on the *per-application* basis and is only valid for the application under test.
The same behavior could be achieved by providing a custom value to the
[TZ](https://developer.apple.com/forums/thread/86951#263395) environment variable via the `appium:processArguments` capability.

---

### Pre-Run Executables

<p><small>| OPTIONAL | <span className="sauceGreen">Desktop and Virtual Devices Only</span> |</small></p>

Pre-run executables have a primary key ([`prerun`](#prerun-primary-key)) and four secondary keys:

- [`executable`](#executable-secondary-key)
- [`args`](#args-secondary-key)
- [`background`](#background-secondary-key)
- [`timeout`](#timeout-secondary-key)

Read the descriptions of each key below the example.

```java title="Full Example"
"prerun": {
         "executable": "http://url.to/your/executable.exe",
```

---

#### `prerun` (primary key)

status
Use this to define pre-run executables. You can provide a URL to an executable file, which will be downloaded and executed to configure the VM before the test starts. For faster performance, you may want to upload the executable to your [Sauce Apps Storage](/mobile-apps/app-storage) space. This capability takes a JSON object with four main keys. See [Using Pre-Run Executables to Configure Browsers and VMs](/web-apps/automated-testing/selenium/pre-run-executables) for more information.

- Running AutoIt Scripts: If you want to run an AutoIt script during your test, compile it as an .exe, send it using this capability, and set background to true to allow AutoIt to continue running throughout the full duration of your test.
- Using Multiple Pre-Run Executables: If you need to send multiple pre-run executables, the best way is to bundle them into a single executable file, such as a self-extracting zip file.
- Sending a Single String Instead of JSON: If a single string is sent as the pre-run capability rather than a JSON object, this string is considered to be the URL to the executable, and the executable launches with background set to `false`.

#### `executable` (secondary key)

<p><small>| STRING |</small></p>

Provide the URL to the executable you want to run before your browser session starts.

#### `args` (secondary key)

<p><small>| LIST |</small></p>

Lists the command line parameters that you want the executable to receive. Valid arguments are:

- `--silent` or `/S`: Installs the script silently without raising any dialogs.
- `-a`: Add switches to the command line of the underlying setup.exe process.
- `-q`: Like `--silent`, installs the script without raising any dialogs.

#### `background` (secondary key)

<p><small>| BOOLEAN |</small></p>

Defines whether Sauce should wait for this executable to finish before your browser session starts. This setting overrides the values set by [`timeout`](#timeout-secondary-key).

#### `timeout` (secondary key)

<p><small>| INTEGER |</small></p>

Defines the number of seconds Sauce Labs will wait for your executable to finish before your browser session starts. The default value is 90 seconds. Maximum is 360 seconds.

---

## Additional Resources

### Example Test Scripts

See [Sauce Labs Training on GitHub](https://github.com/saucelabs-training).

### Visual Testing

While [Visual Testing](/visual) runs on Sauce Labs servers, the URL gets sent to `"https://hub.screener.io"`. This means that the [`username`](#username) and [`accessKey`](#accesskey) values are required.

See [Visual Testing with WebDriver](/visual/e2e-testing/setup) and [Visual Commands and Options](/visual/e2e-testing/commands-options).

:::caution Limitations
When running a test on a Virtual Device, be aware that each capability value has a 100 characters limitation. If the value exceeds this limit, it will be truncated, which can lead to further side effects or prevent a job from starting.
:::
