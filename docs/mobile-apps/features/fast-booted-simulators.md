---
id: fast-booted-simulators
title: Fast Booted iOS Simulators
sidebar_label: Fast Booted iOS Simulators
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span className="sauceDBlue">Beta</span></small></p>

The speed of the Simulator is a crucial factor that impacts the development workflow of iOS app developers. Fast booted iOS Simulators offer significant advantages over our default Simulators, as they reduce the time it takes to launch the Simulator to test apps. With fast booted iOS Simulators, you can quickly switch between two iOS versions and test your app in four configurations to ensure the compatibility and performance of your app. 

Sauce Labs supports the following configurations: 

- iPhone 14 Simulator with the latest iOS 16.x version (`latest|current_major`).
- iPhone 13 Simulator with the latest iOS 15.x version (`previous_major`).
- iPad (10th generation) Simulator with the latest iOS 16.x version (`latest|current_major`). (COMING SOON)
- iPad (9th generation) Simulator with the latest iOS 15.x version (`previous_major`). (COMING SOON)

:::note
By using the `latest` or `current_major` version, you can test your apps in the most up-to-date environment, while the `previous_major` version provides the environment for testing apps on the previous latest major iOS version.
:::

These Simulator configurations can be used for automated tests, allowing you to target specific devices and iOS versions for testing. This flexibility can help you optimize the testing process and improve the compatibility and performance of your apps.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- A native iOS, or iPadOS mobile app.

## Accessing Fast Booted iOS Simulator for Live Testing

To access the Fast Booted iOS Simulator follow the steps below, for this example we will use the iPhone 14 with the latest iOS 16.x version (`current_major`):

1. On Sauce Labs click **Live** > **Cross Browser** > **Mobile Virtual**.
<img src={useBaseUrl('img/mobile-apps/fast-sim-1.png')} alt="fast booted menu" width="750"/>

2. Select “Apple” as the Manufacturer.
3. If you want to use the `current_major` version, then use these values :
- Select **iPhone 14 Simulator** for the Device.
- Select the latest available version of iOS.


:::note
If you want to use the `previous_major` version, then use these values:
- Select “iPhone 13 Simulator” for the Device
- Select the previous major version, at the moment this is “iOS 15.4”, for the OS Version
:::

## Accessing Fast Booted iOS Simulator for Automated Testing with Appium

To use the fast-booted Simulators, specify the following device configuration capabilities:


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
DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("browserName", "safari");
capabilities.setCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2
capabilities.setCapability("appium:platformVersion", "latest|current_major|previous_major");
capabilities.setCapability("appium:deviceName", "iPhone Fast Simulator");
// Mandatory for Appium 2
capabilities.setCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2
```

</TabItem>
<TabItem value="ipad">

```java
DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("browserName", "safari");
capabilities.setCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2
capabilities.setCapability("appium:platformVersion", "latest|current_major|previous_major");
capabilities.setCapability("appium:deviceName", "iPad Fast Simulator");
// Mandatory for Appium 2
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
    // W3C Protocol is mandatory for Appium 2
    'appium:platformVersion': 'latest|current_major|previous_major',
    'appium:deviceName': 'iPhone Fast Simulator',
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
    // W3C Protocol is mandatory for Appium 2
    'appium:platformVersion': 'latest|current_major|previous_major',
    'appium:deviceName': 'iPad Fast Simulator',
    // Mandatory for Appium 2
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
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" : "latest|current_major|previous_major",
    "appium:deviceName" : "iPhone Fast Simulator",
    # Mandatory for Appium 2
    'appium:automationName': 'xcuitest',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2
        "appiumVersion" : "2.0.0-beta56"
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
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" : "latest|current_major|previous_major",
    "appium:deviceName" : "iPad Fast Simulator",
    'appium:automationName': 'xcuitest',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2
        "appiumVersion" : "2.0.0-beta56"
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
    "appium:platformVersion" => "latest|current_major|previous_major",
    "appium:deviceName" => "iPhone Fast Simulator",
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
    "appium:platformVersion" => "latest|current_major|previous_major",
    "appium:deviceName" => "iPad Fast Simulator"",
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
// W3C Protocol is mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:platformVersion", "latest|current_major|previous_major");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone Fast Simulator");
capabilities.AddAdditionalCapability("appium:automationName", "uiautomator2");

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
// W3C Protocol is mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:platformVersion", "latest|current_major|previous_major");
capabilities.AddAdditionalCapability("appium:deviceName", "iPad Fast Simulator");
// Mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:automationName", "xcuitest");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

This will assign a fast-booted Simulator that represents the `latest`/`current_major` iOS version for the requested device by what both Apple has released and what Sauce Labs supports in our Simulator cloud. In the case of using `previous_major` platform version, it will represent the latest previous major iOS version for the requested device by what both Apple has released and what Sauce Labs supports in our Simulator cloud.

:::note
To use a different version of Appium, you can specify it through the [sauce:options](https://docs.saucelabs.com/dev/test-configuration-options/#appiumversion). Check our [platform configurator](https://saucelabs.com/products/platform-configurator#/) to confirm which Appium versions are supported. Using a different version may result in additional 20 seconds of start-up time for your iPhone/Ipad Fast Simulator.
:::


## FAQ

### How can I validate that my session used a Fast Booted Simulator?

This can be done by:

- Validating the session command time, which should be between 0-10 seconds. The video should start with a booted sim.
  
<img src={useBaseUrl('img/mobile-apps/fast-sim-2.png')} alt="fast booted menu" width="750"/>



- Opening the Metadata tab, as Sauce Labs automatically add tags.
If you are using `“appium:deviceName”: “iPhone Fast Simulator”` or `“appium:deviceName”: “iPad Fast Simulator”`, you should see the tag **fast-simulator**. When you use the default Appium version, you will additionally see the **fast-simulator-with-matching-appium** tag.
<img src={useBaseUrl('img/mobile-apps/fast-sim-3.png')} alt="fast booted menu" width="750"/>

:::caution
Our tags will be overwritten when you provide your own tags.
:::

### I set up a Fast Booted Simulator, but it’s still taking a long time to boot.


There are a few reasons why this could happen. The first reason is that all available Fast Booted Simulators are already used and your session uses the default way of starting a Simulator.

The second reason could be that Appium restarted the Simulator due to specific capabilities that you provided. To check it, follow the steps below:
1. Go to **Automated** > **Test Results**.
2. Open your session.
3. Check the first 15 seconds of the video. If you see that the Simulator was already started from the first second, or the restart of the video happens in the first 15 seconds, it means that Appium rebooted the Simulator. See the video below for more information:


<video controls style={{"max-width": "800px"}}>

  <source src={useBaseUrl('img/mobile-apps/fast-booted-restart.mp4')} />
</video>

A common cause could be that you have provided a capability `“appium:language”` or `“appium:locale”` to change the language of the app or Simulator.

The Fast Booted Simulators use default English settings. Every change you make to it by providing different capabilities will trigger Appium to restart the Simulator. 
