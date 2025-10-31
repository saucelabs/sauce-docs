---
id: appium-2-migration
title: Migrating to Appium 2 on Sauce Labs
sidebar_label: Appium 2 Migration
description: Learn how to migrate your Appium 1 tests to Appium 2 on Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Appium 1 End-of-life
The Appium core team does not maintain Appium 1.x anymore since the [1st of January 2022](https://github.com/appium/appium). Recent versions of all officially supported platform drivers are no longer compatible with Appium 1.x, and require Appium 2 to run.

Sauce Labs still supports Appium 1.x (check our [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) to see which Appium 1 versions are available), but we recommend migrating to Appium 2.
:::

The changes in Appium 2 are not primarily related to changes in automation behaviors for specific platforms. Instead, Appium 2 re-envisions Appium as a platform where "drivers" (code projects that introduce support for automation of a given platform) and "plugins" (code projects that allow for overriding, altering, extending, or adding behaviors to Appium) can be easily created and shared.

At the same time, the Appium project is taking the opportunity to remove many old and deprecated bits of functionality. More information about this can be found in the [Appium 2 release notes](https://github.com/appium/appium/releases).

:::tip Appium 2 Documentation
The current Appium 2 documentation can be found [here](https://appium.io/docs/en/2.0/).
:::

## Breaking Changes

Before you get started with migrating your Appium 1 tests to Appium 2, read the [Appium 2 release notes](https://github.com/appium/appium/releases). The breaking changes that are listed below have an impact on running your tests on Sauce Labs, but they are only a subset of the changes that are listed in the Appium 2 release notes.

### Protocol changes

Appium 2's API is based on the [W3C WebDriver Protocol](https://www.w3.org/TR/webdriver/), and Appium 1 has supported this protocol for years. Before the W3C WebDriver Protocol was designed as a web standard, several other protocols were used for both Selenium and Appium. These protocols were the "JSONWP" (JSON Wire Protocol) and "MJSONWP" (Mobile JSON Wire Protocol). The W3C Protocol differs from the (M)JSONWP protocols in a few small ways.

Up until Appium 2, Appium supported both protocols, so that older Selenium/Appium clients could still communicate with newer Appium servers. Moving forward, support for older protocols is removed.

### Appium capabilities

One significant difference between old and new protocols is in the format of capabilities. Previously called "desired capabilities", and now called simply "capabilities", there is now a requirement for a so-called "vendor prefix" on any non-standard capabilities. The list of standard capabilities is given in the [WebDriver Protocol spec](https://www.w3.org/TR/webdriver/#capabilities), and includes a few commonly used capabilities such as [`browserName`](/dev/test-configuration-options/#browsername-1) and [`platformName`](/dev/test-configuration-options/#platformname-1).

These standard capabilities continue to be used as-is. All other capabilities must include a "vendor prefix" in their name. A vendor prefix is a string followed by a colon, such as `appium:`. Most of Appium's capabilities go beyond the standard W3C capabilities and must therefore include vendor prefixes (we recommend that you use `appium:` unless directed otherwise by documentation). For example:

- `appium:app`
- `appium:noReset`
- `appium:deviceName`

More information about the Appium Capabilities can be found [here](https://appium.github.io/appium/docs/en/2.0/guides/caps/).

:::tip
Sauce Labs now supports the [`appium:options`](/dev/test-configuration-options/#appiumoptions) object value as a replacement for the repetitive `appium:`-prefix. More information can be found [here](/dev/test-configuration-options/#appiumoptions).
:::

### `automationName` is now required

Appium 1 automatically used the "default" automation backend for the platform being automated. For example, for iOS, Appium 1 would use the `XCUITest` automation backend unless otherwise specified. For Android, Appium 1 would use the `UiAutomator2` automation backend unless otherwise specified.

Appium 2 does not have a default automation backend. Instead, the automation backend must be specified explicitly using the `automationName` capability. For example, to use the `XCUITest` automation backend for iOS, you would set the `appium:automationName` capability to `XCUITest`. For Android, you would set the `appium:automationName` capability to `UiAutomator2`.

### Sauce Labs specific capabilities

All Sauce Labs specific capabilities need to be put into a single object value which is called `sauce:options`. The Sauce Labs specific capabilities are can be found [here](/dev/test-configuration-options/#mobile-app-appium-capabilities-sauce-specific--optional)

:::note Important
To run your tests with Appium 2 you need to set the `appiumVersion` capability in your `sauce:options` object to `stable`, see also [Appium Version](/dev/test-configuration-options/#appiumversion).
:::

### Driver-specific automation commands

The definition of certain commands that pertain only to specific drivers has been moved to those drivers' implementations. For example, `pressKeyCode` is specific to the [`UiAutomator2` driver](https://github.com/appium/appium-uiautomator2-driver) and is now understood only by that driver.

In practice, the only breaking change here is the kind of error you would encounter if the appropriate driver is not installed. Previously, you would get a `501 Not Yet Implemented error` if using a driver that didn't implement the command. Now, you will get a `404 Not Found` error because if a driver that doesn't know about the command is not active, the main Appium server will not define the route corresponding to the command

## Getting started with Appium 2 on Sauce Labs

As mentioned above, the following breaking changes lead to using the following capabilities:

- [W3C capabilities](#appium-capabilities)
- [Required `automationName`](#automationname-is-now-required)
- [Sauce Labs specific capabilities](#sauce-labs-specific-capabilities)

### Capabilities

Below you can find an example of a capabilities object for running a test on Sauce Labs with Appium 2. See our [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) to help you construct your capabilities for the specific platform and device you want to test on.

See [Appium 2 for Real devices](/mobile-apps/automated-testing/appium/appium-versions/#real-devices) or [Appium 2 for Virtual devices](/mobile-apps/automated-testing/appium/appium-versions/#virtual-devices) to see which Appium 2 versions are available on Sauce Labs.

:::note
The below examples are for Mobile Web Testing, for Mobile App Testing remove the `browserName` and add the [`appium:app`-capability](/mobile-apps/app-storage#using-app-storage-with-automated-test-builds)
:::

### Android Emulators and iOS Simulators

<Tabs
groupId="capability-ex-emusim"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Node.js', value: 'js'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'C#', value: 'csharp'},
]}>

<TabItem value="java">
<Tabs
groupId="capability-java-emusim"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("platformName", "android");
// W3C Protocol is mandatory for Appium 2
capabilities.setCapability("appium:platformVersion", "12");
capabilities.setCapability("appium:deviceName", "Google Pixel 6 Pro GoogleAPI Emulator");
// Mandatory for Appium 2
capabilities.setCapability("appium:automationName", "uiautomator2");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2
sauceOptions.put("appiumVersion", "stable");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("browserName", "safari");
capabilities.setCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2
capabilities.setCapability("appium:platformVersion", "15.4");
capabilities.setCapability("appium:deviceName", "iPhone 13 Simulator");
// Mandatory for Appium 2
capabilities.setCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2
sauceOptions.put("appiumVersion", "stable");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="js">

<Tabs
groupId="capability-js-emusim"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```js
const capabilities = {
    browserName: 'chrome',
    platformName: 'android',
    // W3C Protocol is mandatory for Appium 2
    'appium:platformVersion': '12',
    'appium:deviceName': 'Google Pixel 6 Pro GoogleAPI Emulator',
    // Mandatory for Appium 2
    'appium:automationName': 'uiautomator2',
    'sauce:options': {
        // appiumVersion is mandatory to use Appium 2
        appiumVersion: 'stable'
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```js
const capabilities = {
    browserName: 'safari',
    platformName: 'ios',
    // W3C Protocol is mandatory for Appium 2
    'appium:platformVersion': '15.4',
    'appium:deviceName': 'iPhone 13 Simulator',
    // Mandatory for Appium 2
    'appium:automationName': 'xcuitest',
    'sauce:options': {
        // appiumVersion is mandatory to use Appium 2
        appiumVersion: 'stable'
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="python">

<Tabs
groupId="capability-python-emusim"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```py
capabilities = {
    "browserName" : "chrome",
    "platformName" : "android",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" : "12",
    "appium:deviceName" : "Google Pixel 6 Pro GoogleAPI Emulator",
    # Mandatory for Appium 2
    'appium:automationName': 'uiautomator2',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2
        "appiumVersion" : "stable"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```py
capabilities = {
    "browserName" : "safari",
    "platformName" : "ios",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" : "15.4",
    "appium:deviceName" : "iPhone 13 Simulator",
    # Mandatory for Appium 2
    'appium:automationName': 'xcuitest',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2
        "appiumVersion" : "stable"
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="ruby">

<Tabs
groupId="capability-ruby-emusim"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "browserName" => "chrome",
    "platformName" => "android",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" => "12",
    "appium:deviceName" => "Google Pixel 6 Pro GoogleAPI Emulator",
    # Mandatory for Appium 2
    'appium:automationName' => 'uiautomator2',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2
        "appiumVersion" => "stable"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "browserName" => "safari",
    "platformName" => "ios",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" => "15.4",
    "appium:deviceName" => "iPhone 13 Simulator",
    # Mandatory for Appium 2
    'appium:automationName'=> 'xcuitest',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2
        "appiumVersion" => "stable"
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="csharp">

<Tabs
groupId="capability-csharp"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("browserName", "chrome");
capabilities.AddAdditionalCapability("platformName", "android");
// W3C Protocol is mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:platformVersion", "12");
capabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6 Pro GoogleAPI Emulator");
// Mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:automationName", "uiautomator2");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2
sauceOptions.Add("appiumVersion", "stable");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("browserName", "safari");
capabilities.AddAdditionalCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:platformVersion", "15.4");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone 13 Simulator");
// Mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2
sauceOptions.Add("appiumVersion", "stable");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

### Real Devices

<Tabs
groupId="capability-ex"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Node.js', value: 'js'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'C#', value: 'csharp'},
]}>

<TabItem value="java">
<Tabs
groupId="capability-java"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("platformName", "android");
// W3C Protocol is mandatory for Appium 2
capabilities.setCapability("appium:platformVersion", "12");
capabilities.setCapability("appium:deviceName", "Google Pixel 6");
// Mandatory for Appium 2
capabilities.setCapability("appium:automationName", "uiautomator2");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2 on Sauce Labs
sauceOptions.put("appiumVersion", "2.0.0");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("browserName", "safari");
capabilities.setCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2
capabilities.setCapability("appium:platformVersion", "16");
capabilities.setCapability("appium:deviceName", "iPhone 14");
// Mandatory for Appium 2
capabilities.setCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2 on Sauce Labs
sauceOptions.put("appiumVersion", "2.0.0");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="js">

<Tabs
groupId="capability-js"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```js
const capabilities = {
    browserName: 'chrome',
    platformName: 'android',
    // W3C Protocol is mandatory for Appium 2
    'appium:platformVersion': '12',
    'appium:deviceName': 'Google Pixel 6',
    // Mandatory for Appium 2
    'appium:automationName': 'uiautomator2',
    'sauce:options': {
        // appiumVersion is mandatory to use Appium 2 on Sauce Labs
        appiumVersion: '2.0.0'
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```js
const capabilities = {
    browserName: 'safari',
    platformName: 'ios',
    // W3C Protocol is mandatory for Appium 2
    'appium:platformVersion': '16',
    'appium:deviceName': 'iPhone 14',
    // Mandatory for Appium 2
    'appium:automationName': 'xcuitest',
    'sauce:options': {
        // appiumVersion is mandatory to use Appium 2 on Sauce Labs
        appiumVersion: '2.0.0'
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="python">

<Tabs
groupId="capability-python"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```py
capabilities = {
    "browserName" : "chrome",
    "platformName" : "android",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" : "12",
    "appium:deviceName" : "Google Pixel 6",
    # Mandatory for Appium 2
    'appium:automationName': 'uiautomator2',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2 on Sauce Labs
        "appiumVersion" : "2.0.0"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```py
capabilities = {
    "browserName" : "safari",
    "platformName" : "ios",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" : "16",
    "appium:deviceName" : "iPhone 14",
    # Mandatory for Appium 2
    'appium:automationName': 'xcuitest',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2 on Sauce Labs
        "appiumVersion" : "2.0.0"
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="ruby">

<Tabs
groupId="capability-ruby"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "browserName" => "chrome",
    "platformName" => "android",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" => "12",
    "appium:deviceName" => "Google Pixel 6",
    # Mandatory for Appium 2
    'appium:automationName' => 'uiautomator2',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2 on Sauce Labs
        "appiumVersion" => "2.0.0"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "browserName" => "safari",
    "platformName" => "ios",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" => "16",
    "appium:deviceName" => "iPhone 14",
    # Mandatory for Appium 2
    'appium:automationName'=> 'xcuitest',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2 on Sauce Labs
        "appiumVersion" => "2.0.0"
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="csharp">

<Tabs
groupId="capability-csharp"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("browserName", "chrome");
capabilities.AddAdditionalCapability("platformName", "android");
// W3C Protocol is mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:platformVersion", "12");
capabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6");
// Mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:automationName", "uiautomator2");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2 on Sauce Labs
sauceOptions.Add("appiumVersion", "2.0.0");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("browserName", "safari");
capabilities.AddAdditionalCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:platformVersion", "16");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone 14");
// Mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2 on Sauce Labs
sauceOptions.Add("appiumVersion", "2.0.0");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

### Supported Drivers

The following drivers are supported by Sauce Labs

| Platform | Driver                                                               | Appium 1                                                                                | Appium 2                                                                                |
| -------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Android  | [UiAutomator2](https://github.com/appium/appium-uiautomator2-driver) | <span className="sauceGreen">Virtual and Real Devices</span><br/>Android 5.1 and higher | <span className="sauceGreen">Virtual and Real Devices</span><br/>Android 6.0 and higher |
| Android  | [Flutter](https://github.com/appium-userland/appium-flutter-driver)  | <span className="sauceGreen">Virtual and Real Devices</span><br/>Android 5.1 and higher | <span className="sauceGreen">Virtual and Real Devices</span><br/>Android 6.0 and higher |
| Android  | [Espresso\*](https://github.com/appium/appium-espresso-driver)       | -                                                                                       | <span className="sauceGreen">Android Emulators</span><br/>Android 7.0 and higher        |
| iOS      | [XCUITest](https://github.com/appium/appium-xcuitest-driver)         | <span className="sauceGreen">Virtual and Real Devices</span><br/>iOS 10.3 and higher    | <span className="sauceGreen">Virtual and Real Devices</span><br/>iOS 12.2 and higher    |
| iOS      | [Flutter](https://github.com/appium-userland/appium-flutter-driver)  | <span className="sauceGreen">Virtual and Real Devices</span><br/>iOS 10.3 and higher    | <span className="sauceGreen">Virtual and Real Devices</span><br/>iOS 12.2 and higher    |

:::caution \*Espresso Driver
Before the sessions starts, the Espresso driver needs to build and install an Espresso Test Server on the Emulator. This Espresso server is build based on the current app under test, building needs to happen for each new session and will add 30-60 seconds extra time to starting the session.
:::

<!-- prettier-ignore -->
:::info Which driver version am I using?
Sauce Labs updates the versions of the drivers on Sauce Labs regularly. To find out which versions your Appium 2 tests are using, please go to the Sauce Labs UI, select your test, and check the Appium Version in the Test Details Logs tab under the Appium Logs section.

Below is an example for an Appium 2 test running on iOS:

```log
14:34:39 V [Appium] [Appium] Attempting to find matching driver for automationName 'XCUItest' and platformName 'iOS'
14:34:39 V [Appium] [Appium] The 'xcuitest' driver was installed and matched caps.
14:34:39 V [Appium] [Appium] Will require it at /root/appium/appium/2.0.0/node_modules/appium-xcuitest-driver
14:34:39 V [debug] [Appium] [Appium] Requiring driver at /root/appium/appium/2.0.0/node_modules/appium-xcuitest-driver
14:34:39 V [AppiumDriver@dbbe] [AppiumDriver@dbbe] Appium v2.0.0-beta.53 creating new XCUITestDriver (v4.16.10) session
```

:::

### Supported Plugins

Currently, we do not provide pre-installed and do not support passing custom plugins. We will keep monitoring the Appium community for the progress of the plugins and will update this page accordingly.

If you have specific needs for a plugin, please reach out to our [support team](https://support.saucelabs.com/hc/en-us/requests/new) and provide all relevant information about this plugin.

### FAQ

#### How do I know if my test is running on Appium 1 or Appium 2?

You can find out which version of Appium is used for your test by checking the Appium Version in the Test Details Logs tab under the Appium Logs section in the Sauce Labs UI.

#### How do I know which driver version is used for my test?

You can find out which version of the driver is used for your test by checking the Driver Version in the Test Details Logs tab under the Appium Logs section in the Sauce Labs UI.

#### How do I know which version of Appium is installed on the Sauce Labs Emulators and Simulators?

See our [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) for the latest versions of Appium installed on our Emulators and Simulators.

#### Can I provide my own Appium Server version?

No, you cannot provide your own Appium version. We keep our Appium versions up to date with the latest Appium releases. If you have specific needs for an Appium Server version then please reach out to our [support team](https://support.saucelabs.com/hc/en-us/requests/new).

#### Can I provide my own Appium Driver version?

No, you cannot provide your own Appium Driver version. We keep our Appium Driver versions up to date with the latest Appium Driver releases. If you have specific needs for an Appium Driver version then please reach out to our [support team](https://support.saucelabs.com/hc/en-us/requests/new).
