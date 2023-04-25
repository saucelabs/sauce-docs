---
id: ios-version-management
title: iOS Version Management
sidebar_label: iOS Version Management
description: Learn how to use iOS Version Management to test your app on the latest versions.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span className="sauceGreen">iOS Simulators Only</span></small></p>

With every major iOS release (for example iOS 15 to iOS 16) it takes 4-6 months for 80% of the end-users to fully adopt a new major version. To help you test your app on the latest versions of iOS, Sauce Labs provides iOS Version Management based on aliases. These aliases allow you to test your app on the latest versions of iOS without having to update your capabilities every time a new version is released.

## Aliases

Sauce Labs provides the following aliases for iOS Simulators:

- `latest` or `current_major` - The latest installed version of the current major version.
- `previous_major` - The latest installed version of the previous major version.

If the latest major released version of iOS is `16` and the latest installed version in the Sauce Labs cloud is `16.4`, then `latest` and `current_major` will both point to `16.4`.

If the latest previous major released version of iOS is `15` and the latest installed version in the Sauce Labs cloud is `15.5`, then `previous_major` will point to `15.5`.

When Sauce Labs releases new versions of iOS, the aliases will be updated to automatically point to the latest installed versions.

:::note
Apple doesn't release every version of iOS for every device. For example:

- iOS 16 is not released for the iPhone 7/Plus because Apple stopped support. If you use the `latest` or `current_major` aliases, Sauce Labs will automatically select the latest version of iOS that is available for the device you are testing on.
- Not every iOS minor version update leads to a new iOS Simulator version. New Simulator versions are released when Apple updates the underlying Xcode version. For example, iOS 15.1 is not released as a new Simulator version because it is not released with Xcode 13.1 or XCODE 13.2, which is the same Xcode version as iOS 15.0. More information about Xcode and iOS versions can be found [here](https://xcodereleases.com/?scope=release).

:::

## How to use iOS Version Management

:::info
The following examples will use an `iPhone Simulator` or `iPad Simulator` to test on a Safari browser. You can use the same approach to test your web or native app on any iOS Simulator. To learn about possible configurations please visit our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) tool for more information.
:::

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
defaultValue="iphone"
values={[
{label: 'iPhone', value: 'iphone'},
{label: 'iPad', value: 'ipad'},
]}>
<TabItem value="iphone">

<!-- prettier-ignore -->
```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("browserName", "safari");
capabilities.setCapability("platformName", "ios");
// Use one of the following aliases to test on the latest version of iOS of your choice
capabilities.setCapability("appium:platformVersion", "latest|current_major|previous_major");
capabilities.setCapability("appium:deviceName", "iPhone Simulator");
capabilities.setCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ipad">

```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("browserName", "safari");
capabilities.setCapability("platformName", "ios");
// Use one of the following aliases to test on the latest version of iOS of your choice
capabilities.setCapability("appium:platformVersion", "latest|current_major|previous_major");
capabilities.setCapability("appium:deviceName", "iPad Simulator");
capabilities.setCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="js">

<Tabs
groupId="capability-js-emusim"
defaultValue="iphone"
values={[
{label: 'iPhone', value: 'iphone'},
{label: 'iPad', value: 'ipad'},
]}>
<TabItem value="iphone">

<!-- prettier-ignore -->
```js
const capabilities = {
    browserName: 'safari',
    platformName: 'ios',
    // Use one of the following aliases to test on the latest version of iOS of your choice
    'appium:platformVersion': 'latest|current_major|previous_major',
    'appium:deviceName': 'iPhone Simulator',
    'appium:automationName': 'xcuitest',
    'sauce:options': {
    }
}
```

</TabItem>
<TabItem value="ipad">

<!-- prettier-ignore -->
```js
const capabilities = {
    browserName: 'safari',
    platformName: 'ios',
    // Use one of the following aliases to test on the latest version of iOS of your choice
    'appium:platformVersion': 'latest|current_major|previous_major',
    'appium:deviceName': 'iPad Simulator',
    'appium:automationName': 'xcuitest',
    'sauce:options': {
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="python">

<Tabs
groupId="capability-python-emusim"
defaultValue="iphone"
values={[
{label: 'iPhone', value: 'iphone'},
{label: 'iPad', value: 'ipad'},
]}>
<TabItem value="iphone">

<!-- prettier-ignore -->
```py
capabilities = {
    "browserName" : "safari",
    "platformName" : "ios",
    # Use one of the following aliases to test on the latest version of iOS of your choice
    "appium:platformVersion" : "latest|current_major|previous_major",
    "appium:deviceName" : "iPhone Simulator",
    'appium:automationName': 'xcuitest',
    "sauce:options" : {
    }
}
```

</TabItem>
<TabItem value="ipad">

<!-- prettier-ignore -->
```py
capabilities = {
    "browserName" : "safari",
    "platformName" : "ios",
    # Use one of the following aliases to test on the latest version of iOS of your choice
    "appium:platformVersion" : "latest|current_major|previous_major",
    "appium:deviceName" : "iPad Simulator",
    'appium:automationName': 'xcuitest',
    "sauce:options" : {
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="ruby">

<Tabs
groupId="capability-ruby-emusim"
defaultValue="iphone"
values={[
{label: 'iPhone', value: 'iphone'},
{label: 'iPad', value: 'ipad'},
]}>
<TabItem value="iphone">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "browserName" => "safari",
    "platformName" => "ios",
    # Use one of the following aliases to test on the latest version of iOS of your choice
    "appium:platformVersion" => "latest|current_major|previous_major",
    "appium:deviceName" => "iPhone Simulator",
    'appium:automationName' => 'xcuitest',
    "sauce:options" => {
    }
}
```

</TabItem>
<TabItem value="ipad">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "browserName" => "safari",
    "platformName" => "ios",
    # Use one of the following aliases to test on the latest version of iOS of your choice
    "appium:platformVersion" => "latest|current_major|previous_major",
    "appium:deviceName" => "iPad Simulator"",
    'appium:automationName'=> 'xcuitest',
    "sauce:options" => {
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="csharp">

<Tabs
groupId="capability-csharp"
defaultValue="iphone"
values={[
{label: 'iPhone', value: 'iphone'},
{label: 'iPad', value: 'ipad'},
]}>
<TabItem value="iphone">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("browserName", "safari");
capabilities.AddAdditionalCapability("platformName", "ios");
// Use one of the following aliases to test on the latest version of iOS of your choice
capabilities.AddAdditionalCapability("appium:platformVersion", "latest|current_major|previous_major");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone Simulator");
capabilities.AddAdditionalCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ipad">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("browserName", "safari");
capabilities.AddAdditionalCapability("platformName", "ios");
// Use one of the following aliases to test on the latest version of iOS of your choice
capabilities.AddAdditionalCapability("appium:platformVersion", "latest|current_major|previous_major");
capabilities.AddAdditionalCapability("appium:deviceName", "iPad Simulator");
capabilities.AddAdditionalCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Examples

:::info
The following examples use iOS 16 and 15 as the current and previous major versions of iOS, respectively. The examples don't always reflect the actual versions of iOS that are supported by Sauce Labs and Apple on Simulators. See our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) tool for the most up-to-date information.
:::

| Configuration                                                  | Supported by Apple on Simulators | Supported by Sauce Labs | Land On  | Note                                                                                                                                                                                                   |
| :------------------------------------------------------------- | :------------------------------: | :---------------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iPhone 14 Simulator + `latest` or `current_major`              |            16.0-16.4             |        16.0-16.4        |   16.4   |                                                                                                                                                                                                        |
| iPhone 14 Simulator + `previous_major`                         |            16.0-16.4             |        16.0-16.4        | &#x2715; | <pre>Error: Failed to create session. <br/>Invalid platform version specified for simulator:<br/>iPhone 14 Simulator</pre> iPhone 14 was released with iOS 16, not with 15                             |
| iPad (10th Generation) Simulator + `latest` or `current_major` |            16.1-16.4             |        16.1-16.4        |   16.4   |                                                                                                                                                                                                        |
| iPad (10th Generation) Simulator + `previous_major`            |            16.1-16.4             |        16.1-16.4        | &#x2715; | <pre>Error: Failed to create session. <br/>Invalid platform version specified for simulator:<br/>iPad (10th Generation) Simulator</pre> iPad (10th Generation) was released with iOS 16.1, not with 15 |
| iPhone 13 Simulator + `latest` or `current_major`              |            15.0-16.4             |        15.0-16.4        |   16.4   | iPhone 13 was released with iOS 15 and supports 16                                                                                                                                                     |
| iPhone 13 Simulator + `previous_major`                         |            15.0-16.4             |        15.0-16.4        |   15.5   | iPhone 13 was released with iOS 15, the current is higher, so `previous_major` will result in iOS 15                                                                                                   |
| iPhone 7 Simulator + `latest` or `current_major`               |            10.0-15.5             |        15.0-16.4        |   15.4   | iPhone 7 was released with iOS 10 and Apple supports till iOS 15.x                                                                                                                                     |
| iPhone 7 Simulator + `previous_major`                          |            10.0-15.5             |        15.0-16.4        |   14.4   | Apple supports 14.5, Sauce Labs only released till 14.4                                                                                                                                                |

## FAQ

### I'm getting the error `Invalid platform version specified for simulator: <selected Simulator>`

This error means that the platform version you specified is not supported by Apple on Simulators. For example, if you specify `previous_major` for an iPhone 14 Simulator when it has just been released (it was released with iOS 16), you'll get this error because Apple doesn't support iOS 15 on this Simulator. You can use the [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) tool to check which versions of iOS are supported by Apple and Sauce Labs.

You can start using `previous_major` once Apple has released a new major version of iOS (for example iOS 17) and Sauce Labs has released a new version of the Simulator for that major version.

### I want to test on the latest version of iOS for an iPhone 7, but it lands on iOS 15.x instead of 16.x

The reason is that Apple doesn't support iOS 16 on the iPhone 7 Simulator. You can use the [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) tool to see which versions of iOS are supported by Apple and Sauce Labs on Simulators.

### I want to test on a specific version of iOS, how can I do that?

You can use the `appium:platformVersion` capability to specify the version of iOS you want to test on. You can use [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) tool to see how to construct your capabilities for your preferred language.
