---
id: appium-2-migration
title: Migrating to Appium 2.0 on Sauce Labs
sidebar_label: Appium 2.0 Migration
description: Learn how to migrate you Appium 1 tests to Appium 2 on Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Appium 1 End-of-life
The Appium core team does not maintain Appium 1.x anymore since the 1st of January 2022. All recent versions of officially supported platform drivers are not compatible to Appium 1.x anymore, and require Appium 2 to run.
:::

Appium 2.0 is the most major new release of Appium in the last years. The changes in Appium 2.0 are not primarily related to changes in automation behaviors for specific platforms. Instead, Appium 2.0 re-envisions Appium as a platform where "drivers" (code projects that introduce support for automation of a given platform) and "plugins" (code projects that allow for overriding, altering, extending, or adding behaviors to Appium) can be easily created and shared.

At the same time, the Appium project is taking the opportunity to remove many old and deprecated bits of functionality. More information about this can be found in the [Appium 2.0 release notes](https://github.com/appium/appium/releases).

:::tip Appium 2.0 Documentation
Appium is in the final stages of a major revision (to version 2.0). As such, the documentation found around the web may not be correct. The current Appium 2.0 documentation is very much in progress. Currently, it can be found [here](https://appium.github.io/appium/docs/en/2.0/).
:::

## Breaking Changes

Before you get started with migrating your Appium 1 tests to Appium 2, you should have a look a the [Appium 2.0 release notes](https://github.com/appium/appium/releases). The breaking changes that are listed below are only a subset of the changes that are listed in the release notes, but also have an impact on running your tests on Sauce Labs.

### Protocol changes

Appium's API is based on the [W3C WebDriver Protocol](https://www.w3.org/TR/webdriver/), and it has supported this protocol for years. Before the W3C WebDriver Protocol was designed as a web standard, several other protocols were used for both Selenium and Appium. These protocols were the "JSONWP" (JSON Wire Protocol) and "MJSONWP" (Mobile JSON Wire Protocol). The W3C Protocol differs from the (M)JSONWP protocols in a few small ways.

Up until Appium 2.0, Appium supported both protocols, so that older Selenium/Appium clients could still communicate with newer Appium servers. Moving forward, support for older protocols will be removed.

### Appium capabilities

One significant difference between old and new protocols is in the format of capabilities. Previously called "desired capabilities", and now called simply "capabilities", there is now a requirement for a so-called "vendor prefix" on any non-standard capabilities. The list of standard capabilities is given in the [WebDriver Protocol spec](https://www.w3.org/TR/webdriver/#capabilities), and includes a few commonly used capabilities such as browserName and platformName.

These standard capabilities continue to be used as-is. All other capabilities must include a "vendor prefix" in their name. A vendor prefix is a string followed by a colon, such as `appium:`. Most of Appium's capabilities go beyond the standard W3C capabilities and must therefore include vendor prefixes (we recommend that you use `appium:` unless directed otherwise by documentation). For example:

- `appium:app`
- `appium:noReset`
- `appium:deviceName`

More information about the Appium Capabilities can be found [here](https://appium.github.io/appium/docs/en/2.0/guides/caps/).

:::caution Warning
Sauce Labs does not support the `appium:options` object value as a replacement for the repetitive `appium:`-prefix yet. Instead, you should use the `appium:` prefix for each capability.
:::

### `automationName` is now required

Appium 1 automatically used the "default" automation backend for the platform being automated. For example, for iOS, Appium 1 would use the `XCUITest` automation backend unless otherwise specified. For Android, Appium 1 would use the `UiAutomator2` automation backend unless otherwise specified.

Appium 2 does not have a default automation backend. Instead, the automation backend must be specified explicitly using the `automationName` capability. For example, to use the `XCUITest` automation backend for iOS, you would set the `appium:automationName` capability to `XCUITest`. For Android, you would set the `appium:automationName` capability to `UiAutomator2`.

### Sauce Labs specific capabilities

All Sauce Labs specific capabilities need to be put into a single object value which is called `sauce:options`. The Sauce Labs specific capabilities are can be found [here](/dev/test-configuration-options/#mobile-app-appium-capabilities-sauce-specific--optional)

:::note Important
To run your tests with Appium 2.0 you need to set the `appiumVersion` capability in your `sauce:options` object to `2.0.0`, see also [Appium Version](/dev/test-configuration-options/#appiumversion).
:::

### Driver-specific automation commands

The definition of certain commands that pertain only to specific drivers has been moved to those drivers' implementations. For example, `pressKeyCode` is specific to the [`UiAutomator2` driver](https://github.com/appium/appium-uiautomator2-driver) and is now understood only by that driver.

In practice, the only breaking change here is the kind of error you would encounter if the appropriate driver is not installed. Previously, you would get a `501 Not Yet Implemented error` if using a driver that didn't implement the command. Now, you will get a `404 Not Found` error because if a driver that doesn't know about the command is not active, the main Appium server will not define the route corresponding to the command

## Getting started with Appium 2.0 on Sauce Labs

:::caution Appium 2.0 progress on Sauce Labs
Sauce Labs is currently in the process of implementing Appium 2.0 into our Virtual and Real Device cloud. We are working hard to make Appium 2.0 available for all our customers as soon as possible. Please check back here for updates.

| Cloud           | Status                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------ |
| Real Devices    | Available, see [supported drivers](#supported-drivers) for all available drivers           |
| Virtual Devices | Partially available, see [supported drivers](#supported-drivers) for all available drivers |

:::

As mentioned above, the following breaking changes lead to using the following capabilities:

- [W3C capabilities](#appium-capabilities)
- [Required `automationName`](#automationname-is-now-required)
- [Sauce Labs specific capabilities](#sauce-labs-specific-capabilities)

### Capabilities

Below you can find an example of a capabilities object for running a test on Sauce Labs with Appium 2.0. The examples are created for Real Devices, for Virtual device we advice you to check out our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/).

```json title="Android"
{
  "sauce:options": {
    "appiumVersion": "2.0.0",
    "deviceName": "Google Pixel 3 GoogleAPI Emulator",
    "deviceOrientation": "portrait",
    "platformVersion": "10.0",
    "platformName": "Android",
    "app": "sauce-storage:myapp.apk",
    "automationName": "UiAutomator2"
  }
}
```

```json title="iOS"
{
  "sauce:options": {
    "appiumVersion": "2.0.0",
    "deviceName": "iPhone 11 Simulator",
    "deviceOrientation": "portrait",
    "platformVersion": "13.3",
    "platformName": "iOS",
    "app": "sauce-storage:myapp.ipa",
    "automationName": "XCUITest"
  }
}
```

```json title="Capabilities for Appium 2.0"
{
  "sauce:options": {
    "appiumVersion": "2.0.0",
    "deviceName": "iPhone 11 Simulator",
    "deviceOrientation": "portrait",
    "platformVersion": "14.0",
    "platformName": "iOS",
    "app": "sauce-storage:myapp.zip"
  }
}
```

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

```java
DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("platformName", "android");
// W3C Protocol is mandatory for Appium 2.0
capabilities.setCapability("appium:platformVersion", "12");
capabilities.setCapability("appium:deviceName", "Google Pixel 6");
// automationName for Appium 2.0
capabilities.setCapability("appium:automationName", "UiAutomator2");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
sauceOptions.put("appiumVersion", "2.0.0");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

```java
DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2.0
capabilities.setCapability("appium:platformVersion", "16");
capabilities.setCapability("appium:deviceName", "iPhone 14");
// automationName for Appium 2.0
capabilities.setCapability("appium:automationName", "XCUITest");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
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

```js
const capabilities = {
  platformName: 'android',
  // W3C Protocol is mandatory for Appium 2.0
  'appium:platformVersion': '12',
  'appium:deviceName': 'Google Pixel 6',
  // automationName for Appium 2.0
  'appium:automationName': 'UiAutomator2',
  'sauce:options': {
    // appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
    appiumVersion: '2.0.0',
  },
};
```

</TabItem>
<TabItem value="ios">

```js
const capabilities = {
  platformName: 'ios',
  // W3C Protocol is mandatory for Appium 2.0
  'appium:platformVersion': '16',
  'appium:deviceName': 'iPhone 14',
  // automationName for Appium 2.0
  'appium:automationName': 'XCUITest',
  'sauce:options': {
    // appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
    appiumVersion: '2.0.0',
  },
};
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

```py
capabilities = {
    "platformName" : "android",
    # W3C Protocol is mandatory for Appium 2.0
    "appium:platformVersion" : "12",
    "appium:deviceName" : "Google Pixel 6",
    # automationName for Appium 2.0
    'appium:automationName': 'UiAutomator2',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
        "appiumVersion" : "2.0.0"
    }
}
```

</TabItem>
<TabItem value="ios">

```py
capabilities = {
    "platformName" : "ios",
    # W3C Protocol is mandatory for Appium 2.0
    "appium:platformVersion" : "16",
    "appium:deviceName" : "iPhone 14",
    # automationName for Appium 2.0
    'appium:automationName': 'XCUItest',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
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

```ruby
capabilities = {
    "platformName" => "android",
    # W3C Protocol is mandatory for Appium 2.0
    "appium:platformVersion" => "12",
    "appium:deviceName" => "Google Pixel 6",
    # automationName for Appium 2.0
    'appium:automationName'=> 'UiAutomator2',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
        "appiumVersion" => "2.0.0"
    }
}
```

</TabItem>
<TabItem value="ios">

```ruby
capabilities = {
    "platformName" => "ios",
    # W3C Protocol is mandatory for Appium 2.0
    "appium:platformVersion" => "16",
    "appium:deviceName" => "iPhone 14",
    # automationName for Appium 2.0
    'appium:automationName'=> 'XCUItest',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
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

```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("platformName", "android");
// W3C Protocol is mandatory for Appium 2.0
capabilities.AddAdditionalCapability("appium:platformVersion", "12");
capabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6");
// automationName for Appium 2.0
capabilities.AddAdditionalCapability("appium:automationName", "UiAutomator2");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
sauceOptions.Add("appiumVersion", "2.0.0");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2.0
capabilities.AddAdditionalCapability("appium:platformVersion", "16");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone 14");
// automationName for Appium 2.0
capabilities.AddAdditionalCapability("appium:automationName", "XCUITest");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
sauceOptions.Add("appiumVersion", "2.0.0");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

### Supported Drivers

The following drivers are supported by Sauce Labs

| Platform | Driver                                                               | Supported                                                                                                                                      |
| -------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Android  | [UiAutomator2](https://github.com/appium/appium-uiautomator2-driver) | <span className="sauceDBlue">Real Devices Only</span>, Virtual Devices only support Appium 1 at the moment                                     |
| Android  | [Flutter](https://github.com/appium-userland/appium-flutter-driver)  | <span className="sauceDBlue">Real Devices Only</span>, Virtual Devices only support Appium 1 at the moment                                     |
| iOS      | [XCUITest](https://github.com/appium/appium-xcuitest-driver)         | <span className="sauceDBlue">Virtual and Real Devices</span>, Appium 2 for Virtual Devices on Sauce Labs is only supporting iOS 15 and higher. |
| iOS      | [Flutter](https://github.com/appium-userland/appium-flutter-driver)  | <span className="sauceDBlue">Real Devices Only</span>, Virtual Devices only support Appium 1 at the moment                                     |

### Supported Plugins

Currently, we do not provide pre-installed and do not support passing custom plugins. We will keep monitoring the Appium community for the progress of the plugins and will update this page accordingly.

If you have specific needs for a plugin, please reach out to our [support team](https://support.saucelabs.com/hc/en-us/requests/new) and provide all relevant information about this plugin.

```

```
