---
id: instant-booted-simulators
title: Instant Booted iOS Simulators
sidebar_label: Instant Booted iOS Simulators
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::End of Support
Beginning July 31, 2025 iPhone and iPad Instant Boot simulators for iOS versions 15 and 16 are no longer supported. Tests configured with these simulators will be executed on default Simulators. For access to the best performing iOS Simulators on the latest versions, we recommend our [virtual devices with Apple Silicon support](/mobile-apps/virtual-apple-silicon).

:::


The speed of the Simulator is a crucial factor that impacts the development workflow of iOS app developers. Instant booted iOS Simulators offer significant advantages over our default Simulators, as they reduce the time it takes to launch the Simulator to test apps to almost zero seconds.

With Instant Booted iOS Simulators, you can quickly switch between two iOS versions and test your app in four configurations to ensure its compatibility and performance.

Sauce Labs supports the following configurations:

- iPhone 14 Simulator with the latest iOS 16.x version.
- iPhone 13 Simulator with the latest iOS 15.x version.
- iPad (10th generation) Simulator with the latest iOS 16.x version.
- iPad (9th generation) Simulator with the latest iOS 15.x version.

These Simulator configurations can be used for manual and automated tests, allowing you to target specific devices and iOS versions for testing. This flexibility can help you optimize the testing process and improve the compatibility and performance of your apps.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- A web app, native iOS, or iPadOS mobile app.

## Accessing Instant Booted Simulators

There are two ways that you can access iOS Instant Booted Simulators

### Using aliases (recommended)

To ensure that your capabilities remain consistent and you always have access to an instant-booted iPhone or iPad, we introduced two aliases for the device names. These aliases are as follows:

- `iPhone Instant Simulator`
- `iPad Instant Simulator`

We also introduced iOS Version Management, see [iOS Version Management](/mobile-apps/features/ios-version-management/), which add three new platform version aliases. These are

- `latest|current_major`
- `previous_major`

The combination of the device name and platform version alias will automatically allocate an Instant Booted Simulator for your manual or automated test.

:::caution
The alias `iPhone Instant Simulator` or `iPad Instant Simulator` will only work with the platform version aliases `latest|current_major` and `previous_major`. If you use the alias `iPhone Instant Simulator` or `iPad Instant Simulator` with a specific platform version, for example `16.2`, then the test will fail with the following error message

```
Error: Failed to create session.
Invalid platform version specified for instant Simulators: iPhone Instant Simulator. Must be one of ['previous_major', 'current_major', 'latest']
```

:::


| Device Name              | Platform Version                                |              Result              |   Instant Booted   | Note                                                                                                                                                                         |
| :----------------------- | :---------------------------------------------- | :------------------------------: | :----------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iPhone Instant Simulator | latest/current_major                            |       iPhone 14 with 16.2        | :white_check_mark: | The requested instant-booted device alias, requested OS version, and latest OS version installed in our cloud match. This means an instant-booted Simulator will be started. |
| iPad Instant Simulator   | latest/current_major                            | iPad (10th Generation) with 16.2 | :white_check_mark: |                                                                                                                                                                              |
| iPhone Instant Simulator | previous_major                                  |       iPhone 13 with 15.5        | :white_check_mark: |                                                                                                                                                                              |
| iPad Instant Simulator   | previous_major                                  | iPad (9th Generation) with 15.5  | :white_check_mark: |                                                                                                                                                                              |
| iPhone Instant Simulator | A fixed iOS version, for example, 16.2, or 15.5 |                -                 |        :x:         | The combination is invalid. The device name alias **CAN ONLY** be combined with platform version aliases                                                                     |
| iPad Instant Simulator   | A fixed iOS version, for example, 16.2, or 15.5 |                -                 |        :x:         |                                                                                                                                                                              |

### Using explicit capabilities

If you want to use explicit capabilities, then you can use the following combinations:

:::info
The following examples use iOS 16 and 15 as the current and previous major versions of iOS, respectively. The examples don't always reflect the actual versions of iOS that are supported by Sauce Labs and Apple on Simulators. See our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) tool for the most up-to-date information.
:::

| Device Name                                                                    | Platform Version | Latest version in SL Cloud |   Instant Booted   | Note                                                                                          |
| :----------------------------------------------------------------------------- | :--------------- | :------------------------: | :----------------: | :-------------------------------------------------------------------------------------------- |
| <ul><li>iPhone 14 Simulator</li><li>iPad (10th Generation) Simulator</li></ul> | 16.2             |            16.2            | :white_check_mark: | The requested device name + OS version match with an Instant Booted configuration.            |
| <ul><li>iPhone 13 Simulator</li><li>iPad (9th Generation) Simulator</li></ul>  | 15.5             |            15.5            | :white_check_mark: |                                                                                               |
| iPhone 14 Simulator                                                            | 16.1             |            16.2            |        :x:         | The requested device name + OS version **DO NOT** match with an Instant Booted configuration. |
| iPhone 13 Simulator                                                            | 16.2             |            16.2            |        :x:         | The requested device name + OS version **DO NOT** match with an Instant Booted configuration. |


## Accessing Instant Booted iOS Simulator for Automated Testing with Appium

To use the Instant Booted Simulators, specify the following device configuration capabilities:

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
// Possible values: "latest", "current_major", "previous_major"
capabilities.setCapability("appium:platformVersion", "current_major");
capabilities.setCapability("appium:deviceName", "iPhone Instant Simulator");
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
// Possible values: "latest", "current_major", "previous_major"
capabilities.setCapability("appium:platformVersion", "current_major");
capabilities.setCapability("appium:deviceName", "iPad Instant Simulator");
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
     // Possible values: "latest", "current_major", "previous_major"
    'appium:platformVersion': 'current_major',
    'appium:deviceName': 'iPhone Instant Simulator',
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
     // Possible values: "latest", "current_major", "previous_major"
    'appium:platformVersion': 'current_major',
    'appium:deviceName': 'iPad Instant Simulator',
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
    # Possible values: "latest", "current_major", "previous_major"
    "appium:platformVersion" : "current_major",
    "appium:deviceName" : "iPhone Instant Simulator",
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
    # Possible values: "latest", "current_major", "previous_major"
    "appium:platformVersion" : "current_major",
    "appium:deviceName" : "iPad Instant Simulator",
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
    # Possible values: "latest", "current_major", "previous_major"
    "appium:platformVersion" => "current_major",
    "appium:deviceName" => "iPhone Instant Simulator",
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
    # Possible values: "latest", "current_major", "previous_major"
    "appium:platformVersion" => "current_major",
    "appium:deviceName" => "iPad Instant Simulator"",
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
// Possible values: "latest", "current_major", "previous_major"   
capabilities.AddAdditionalCapability("appium:platformVersion", "current_major");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone Instant Simulator");
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
// Possible values: "latest", "current_major", "previous_major"   
capabilities.AddAdditionalCapability("appium:platformVersion", "current_major");
capabilities.AddAdditionalCapability("appium:deviceName", "iPad Instant Simulator");
capabilities.AddAdditionalCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

This will assign an instant-booted Simulator that represents the `latest`/`current_major` iOS version for the requested device by what both Apple has released and what Sauce Labs supports in our Simulator cloud. In the case of using `previous_major` platform version, it will represent the latest previous major iOS version for the requested device by what both Apple has released and what Sauce Labs supports in our Simulator cloud.

:::note
To use a different version of Appium, you can specify it through the [sauce:options](/dev/test-configuration-options/#appiumversion). Check our [platform configurator](https://saucelabs.com/products/platform-configurator#/) to confirm which Appium versions are supported. Using a different version may result in additional 20 seconds of start-up time for your iPhone/iPad Instant Simulator.
:::

## FAQ

### How can I validate that my session used an Instant Booted Simulator?

This can be done by:

- Validating the session command time, which should be between 0-10 seconds. The video should start with a booted sim.

<img src={useBaseUrl('img/mobile-apps/instant-sim-2.png')} alt="instant booted menu" width="750"/>

- Opening the Metadata tab, as Sauce Labs automatically add tags.
  If you are using `“appium:deviceName”: “iPhone Instant Simulator”` or `“appium:deviceName”: “iPad Instant Simulator”`, you should see the tag **sl-instant-simulator**. When you use the default Appium version, you will additionally see the **sl-instant-simulator-with-matching-appium** tag.

<img src={useBaseUrl('img/mobile-apps/instant-sims-tags.jpg')} alt="instant booted tags" width="750"/>

### I set up an Instant Booted Simulator, but it’s still taking a long time to boot.

There are a few reasons why this could happen.

#### All available Instant Booted Simulators are used

Instant Booted Simulators are subject to availability. We keep monitoring our pool of Instant Booted Simulators on a daily basis to determine the ideal number of Instant Booted Simulators to keep available. In case all available Instant Booted Simulators are used then your session will fall back to the default way of starting a Simulator.

#### Appium restarted the Simulator due to specific capabilities that you provided.

To check this, follow the steps below:

1. Go to **Automated** > **Test Results**.
2. Open your session.
3. Check the first 15 seconds of the video. If you see that the Simulator was already started from the first second, or the restart of the video happens in the first 15 seconds, it means that Appium rebooted the Simulator. See the video below for more information:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GF8q9kHgRrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

A common cause could be that you have provided a capability `“appium:language”` or `“appium:locale”` to change the language of the app or Simulator.

The Instant Booted Simulators use default English settings. Every change you make to it by providing different capabilities will trigger Appium to restart the Simulator.
