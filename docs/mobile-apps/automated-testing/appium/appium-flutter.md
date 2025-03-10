---
id: appium-flutter
title: Appium Flutter Testing on Sauce Labs
sidebar_label: Appium Flutter Testing
description: Learn how to test Flutter apps with the Appium Flutter Driver.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Appium Flutter Driver
The [`appium-flutter-driver`](https://github.com/appium-userland/appium-flutter-driver/). is now considered a legacy driver by Appium, 
meaning no bug fixes or updates will be released. However, it can still be used when running tests on Sauce Labs. 
We advise transitioning to the [appium-flutter-integration-driver](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver).
A guide on how to run tests on Sauce Labs using the new driver can be found [here](/mobile-apps/automated-testing/appium/appium-flutter-integration-driver).
:::

Sauce Labs supports testing Flutter apps on Android and iOS virtual and real devices with Appium by supporting the [`appium-flutter-driver`](https://github.com/appium-userland/appium-flutter-driver/). The process to test Flutter apps with Appium involves an extra and important step, which is [preprocessing your app](#preprocessing-your-flutter-app). After that you can [build](#building-your-flutter-app) it, [upload](#uploading-your-flutter-app-to-sauce-labs) it to Sauce Labs, [configure your Appium capabilities](#configuring-your-appium-capabilities) and run your tests.

## What You'll Need

- Familiarity with creating, signing and building [Flutter apps](https://docs.flutter.dev/).
- Familiarity writing and running [Appium tests](/mobile-apps/automated-testing/appium/).

## Preprocessing your Flutter App

The Appium Flutter Driver uses the [Dart VM Service Protocol](https://github.com/dart-lang/sdk/blob/master/runtime/vm/service/service.md) with extension `ext.flutter.driver`, similar to Flutter Driver, to control the Flutter app-under-test (AUT). This needs to be enabled in the AUT before the app can be tested with Appium Flutter Driver and can be done by following the steps below:

1. Open your Flutter project in your favorite IDE.
2. In your `pubspec.yaml` file, add the following dependency:

```yaml
#...
dev_dependencies:
test: any
flutter_test:
sdk: flutter
flutter_driver:
sdk: flutter
#...
```

Both libraries provide functions and APIs respectively to write tests for Flutter apps.

3. Run the following command to install the `dev_dependencies` that you added in the previous step.

```bash
flutter pub get
```

4. Now open the `main.dart` file in your Flutter project and add the following code statement.

```dart
import 'package:flutter_driver/driver_extension.dart';
```

This statement imports the `driver_extension.dart` file from the `flutter_driver` library and is the first step to enable the Flutter Driver extension.

5. The `import` from the previous step provides an `enableFlutterDriverExtension()` function that enables the Flutter Driver extension. Add the following code statement in the main.dart file of your Flutter project to enable it for your project.

```dart
void main() {
  // This line enables the extension
  enableFlutterDriverExtension();

  runApp(const MyApp());
}
```

Check out the [`enableFlutterDriverExtension`](https://api.flutter.dev/flutter/flutter_driver_extension/enableFlutterDriverExtension.html) function section to learn more about it's powers.

## Building your Flutter App

After you have enabled the Flutter Driver extension, you can now build your app for testing. To do so, follow the steps below

1. Open your Flutter project in your favorite IDE and or open a terminal in the root directory of your Flutter project.
2. Determine for which device type (Android Emulator/Real Device or iOS Simulator/Real Device) you want to build your app for.
3. Run one of the following commands

| OS      | Device Type | Build Command                   | Output Folder                                   |
| ------- | ----------- | ------------------------------- | ----------------------------------------------- |
| Android | Emulator    | `flutter build apk --debug`     | `{project-root}/build/app/outputs/flutter-apk/` |
| Android | Real Device | `flutter build apk --debug`     | `{project-root}/build/app/outputs/flutter-apk/` |
| iOS     | Simulator   | `flutter build ios --simulator` | `{project-root}/build/ios/iphonesimulator/`     |
| iOS     | Real Device | `flutter build ipa --profile`   | `{project-root}/build/ios/ipa/`                 |

:::note
For more information regarding the build modes (`debug`, `release`, `profile`) for Flutter apps, see [Flutter's build modes documentation](https://docs.flutter.dev/testing/build-modes).
:::

## Uploading your Flutter App to Sauce Labs

You can now upload the built apps with our [REST API](/dev/api/storage/#upload-file-to-app-storage), or manually upload them to the preferred Data Center. See [Manually Uploading an App](/mobile-apps/app-storage/#uploading-apps) for more information.

## Configuring your Appium Capabilities

More information on how to write Appium tests for Flutter apps can be found in the [Appium Flutter Driver](https://github.com/appium-userland/appium-flutter-driver/) repository. You can also find a sample Flutter app and tests in the [Demo JS - Appium Flutter](https://github.com/saucelabs-training/demo-js/tree/docs-1.2/webdriverio/appium-app/examples/appium-flutter)-repository.

:::note W3C Capabilities
We encourage you to use W3C capabilities for your tests. For more information on W3C capabilities, see [W3C Capabilities](/dev/test-configuration-options/#mobile-appium-capabilities).
:::

Apps that have been built with Flutter 2 can use Appium 1 and Appium 2, while apps that have been built with Flutter 3 can only use Appium 2.

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

capabilities.setCapability("platformName", "android");
capabilities.setCapability("appium:platformVersion", "12");
capabilities.setCapability("appium:deviceName", "Google Pixel 6 Pro GoogleAPI Emulator");
// Mandatory for using the appium-flutter-driver
capabilities.setCapability("appium:automationName", "flutter");
capabilities.setCapability("appium:app", "storage:filename=flutter-counter-debug.apk");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
sauceOptions.put("appiumVersion", "stable");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("platformName", "ios");
capabilities.setCapability("appium:platformVersion", "15.4");
capabilities.setCapability("appium:deviceName", "iPhone 13 Simulator");
// Mandatory for using the appium-flutter-driver
capabilities.setCapability("appium:automationName", "flutter");
capabilities.setCapability("appium:app", "storage:filename=flutter-counter-debug.zip");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
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
    platformName: 'android',
    'appium:platformVersion': '12',
    'appium:deviceName': 'Google Pixel 6 Pro GoogleAPI Emulator',
    // Mandatory for using the appium-flutter-driver
    'appium:automationName': 'flutter',
    'appium:app': 'storage:filename=flutter-counter-debug.apk',
    'sauce:options': {
        appiumVersion: 'stable'
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```js
const capabilities = {
    platformName: 'ios',
    'appium:platformVersion': '15.4',
    'appium:deviceName': 'iPhone 13 Simulator',
    // Mandatory for using the appium-flutter-driver
    'appium:automationName': 'flutter',
    'appium:app': 'storage:filename=flutter-counter-debug.zip',
    'sauce:options': {
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
    "platformName" : "android",
    "appium:platformVersion" : "12",
    "appium:deviceName" : "Google Pixel 6 Pro GoogleAPI Emulator",
    # Mandatory for using the appium-flutter-driver
    'appium:automationName': 'flutter',
    'appium:app': 'storage:filename=flutter-counter-debug.apk',
    "sauce:options" : {
        "appiumVersion" : "stable"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```py
capabilities = {
    "platformName" : "ios",
    "appium:platformVersion" : "15.4",
    "appium:deviceName" : "iPhone 13 Simulator",
    # Mandatory for using the appium-flutter-driver
    'appium:automationName': 'flutter',
    'appium:app': 'storage:filename=flutter-counter-debug.zip',
    "sauce:options" : {
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
    "platformName" => "android",
    "appium:platformVersion" => "12",
    "appium:deviceName" => "Google Pixel 6 Pro GoogleAPI Emulator",
    # Mandatory for using the appium-flutter-driver
    'appium:automationName' => 'flutter',
    'appium:app' => 'storage:filename=flutter-counter-debug.apk',
    "sauce:options" => {
        "appiumVersion" => "stable"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "platformName" => "ios",
    "appium:platformVersion" => "15.4",
    "appium:deviceName" => "iPhone 13 Simulator",
    # Mandatory for using the appium-flutter-driver
    'appium:automationName'=> 'flutter',
    'appium:app' => 'storage:filename=flutter-counter-debug.zip',
    "sauce:options" => {
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

capabilities.AddAdditionalCapability("platformName", "android");
capabilities.AddAdditionalCapability("appium:platformVersion", "12");
capabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6 Pro GoogleAPI Emulator");
// Mandatory for using the appium-flutter-driver
capabilities.AddAdditionalCapability("appium:automationName", "flutter");
capabilities.AddAdditionalCapability("appium:app", "storage:filename=flutter-counter-debug.apk");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
sauceOptions.Add("appiumVersion", "stable");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("platformName", "ios");
capabilities.AddAdditionalCapability("appium:platformVersion", "15.4");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone 13 Simulator");
// Mandatory for using the appium-flutter-driver
capabilities.AddAdditionalCapability("appium:automationName", "flutter");
capabilities.AddAdditionalCapability("appium:app", "storage:filename=flutter-counter-debug.zip");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
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

capabilities.setCapability("platformName", "android");
// W3C Protocol is mandatory for Appium 2.0
capabilities.setCapability("appium:platformVersion", "12");
capabilities.setCapability("appium:deviceName", "Google Pixel 6");
// Mandatory for Appium 2.0
capabilities.setCapability("appium:automationName", "flutter");
capabilities.setCapability("appium:app", "storage:filename=flutter-counter-debug.apk");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
sauceOptions.put("appiumVersion", "stable");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2.0
capabilities.setCapability("appium:platformVersion", "16");
capabilities.setCapability("appium:deviceName", "iPhone 14");
// Mandatory for Appium 2.0
capabilities.setCapability("appium:automationName", "flutter");
capabilities.setCapability("appium:app", "storage:filename=flutter-counter-debug.ipa");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
sauceOptions.put("appiumVersion", "stable");
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
    platformName: 'android',
    // W3C Protocol is mandatory for Appium 2.0
    'appium:platformVersion': '12',
    'appium:deviceName': 'Google Pixel 6',
    // Mandatory for Appium 2.0
    'appium:automationName': 'flutter',
    'appium:app': 'storage:filename=flutter-counter-debug.apk',
    'sauce:options': {
        // appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
        appiumVersion: 'stable'
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```js
const capabilities = {
    platformName: 'ios',
    // W3C Protocol is mandatory for Appium 2.0
    'appium:platformVersion': '16',
    'appium:deviceName': 'iPhone 14',
    // Mandatory for Appium 2.0
    'appium:automationName': 'flutter',
    'appium:app': 'storage:filename=flutter-counter-debug.ipa',
    'sauce:options': {
        // appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
        appiumVersion: 'stable'
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
    "platformName" : "android",
    # W3C Protocol is mandatory for Appium 2.0
    "appium:platformVersion" : "12",
    "appium:deviceName" : "Google Pixel 6",
    # Mandatory for Appium 2.0
    'appium:automationName': 'flutter',
    'appium:app': 'storage:filename=flutter-counter-debug.apk',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
        "appiumVersion" : "stable"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```py
capabilities = {
    "platformName" : "ios",
    # W3C Protocol is mandatory for Appium 2.0
    "appium:platformVersion" : "16",
    "appium:deviceName" : "iPhone 14",
    # Mandatory for Appium 2.0
    'appium:automationName': 'flutter',
    'appium:app': 'storage:filename=flutter-counter-debug.ipa',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
        "appiumVersion" : "stable"
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
    "platformName" => "android",
    # W3C Protocol is mandatory for Appium 2.0
    "appium:platformVersion" => "12",
    "appium:deviceName" => "Google Pixel 6",
    # Mandatory for Appium 2.0
    'appium:automationName' => 'flutter',
    'appium:app' => 'storage:filename=flutter-counter-debug.apk',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
        "appiumVersion" => "stable"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "platformName" => "ios",
    # W3C Protocol is mandatory for Appium 2.0
    "appium:platformVersion" => "16",
    "appium:deviceName" => "iPhone 14",
    # Mandatory for Appium 2.0
    'appium:automationName'=> 'flutter',
    'appium:app' => 'storage:filename=flutter-counter-debug.ipa',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
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

capabilities.AddAdditionalCapability("platformName", "android");
// W3C Protocol is mandatory for Appium 2.0
capabilities.AddAdditionalCapability("appium:platformVersion", "12");
capabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6");
// Mandatory for Appium 2.0
capabilities.AddAdditionalCapability("appium:automationName", "flutter");
capabilities.AddAdditionalCapability("appium:app", "storage:filename=flutter-counter-debug.apk");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
sauceOptions.Add("appiumVersion", "stable");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2.0
capabilities.AddAdditionalCapability("appium:platformVersion", "16");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone 14");
// Mandatory for Appium 2.0
capabilities.AddAdditionalCapability("appium:automationName", "flutter");
capabilities.AddAdditionalCapability("appium:app", "storage:filename=flutter-counter-debug.ipa");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2.0 on Sauce Labs
sauceOptions.Add("appiumVersion", "stable");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>
