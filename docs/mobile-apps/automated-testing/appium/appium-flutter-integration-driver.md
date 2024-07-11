---
id: appium-flutter-integration-driver
title: Appium Flutter Integration Driver Testing on Sauce Labs
sidebar_label: Appium Flutter Integration Testing
description: Learn how to test Flutter apps with the Appium Flutter Integration Driver.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs supports testing Flutter apps on Android and iOS virtual and real devices with Appium by utilizing the [appium-flutter-integration-driver](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver). 
The process to test Flutter apps with Appium involves an additional and crucial step: [Prepare the app with Flutter Integration Server](#prepare-the-app-with-flutter-integration-server). 
This step includes instructions on how to prepare and build your app for both Android and iOS platforms. After preparing your app, 
you can [upload](#uploading-your-flutter-app-to-sauce-labs) it to Sauce Labs, [Configure your Appium capabilities](#configuring-your-appium-capabilities), and run your tests.



## What You'll Need

- Familiarity with creating, signing and building [Flutter apps](https://docs.flutter.dev/).
- Familiarity writing and running [Appium tests](/mobile-apps/automated-testing/appium/).

## Use Sauce Labs `My Demo App Flutter`

[*My Demo App Flutter*](https://github.com/saucelabs/my-demo-app-flutter) is a mobile application developed using Flutter based
on [Flutter Counter example application](https://github.com/felangel/bloc/tree/master/examples/flutter_counter).
Modified by the Sauce Labs team, this app is designed to demonstrate the robust capabilities of Sauce Labs'
mobile devices cloud, with a particular focus on our integration with the [Appium Flutter Integration Driver](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver).

The apps can be found [here](https://github.com/saucelabs/my-demo-app-flutter/releases/tag/v1.0.0).
- To download the demo app for Android please click [here](https://github.com/saucelabs/my-demo-app-flutter/releases/download/v1.0.0/sl_my_demo_flutter_app.apk).
- To download the demo app for iOs please click [here](https://github.com/saucelabs/my-demo-app-flutter/releases/download/v1.0.0/sl_my_demo_flutter_app.ipa).


## Prepare the app with Flutter Integration Server

1. Open your Flutter project in your favorite IDE.
2. In your Flutter app's `pubspec.yaml`, add the following dependencies:

   Get the latest version from `https://pub.dev/packages/appium_flutter_server/install`

   ```yaml
   dev_dependencies:
     appium_flutter_server: 0.0.14
   ```

3. Create a directory called `integration_test` in the root of your Flutter project.
4. Create a file called `appium_test.dart` in the `integration_test` directory.
5. Add the following code to the `appium_test.dart` file:

   ```dart
   import 'package:appium_flutter_server/appium_flutter_server.dart';
   import 'package:appium_testing_app/main.dart';

   void main() {
     initializeTest(app: const MyApp());
   }
   ```
   If you are in need to configure certain prerequists before the testing app is loaded, you can try the following code:
   ```dart
   import 'package:appium_testing_app/main.dart'; as app;
   void main() {
     initializeTest(
       callback: (WidgetTester tester) async {
          // Perform any prerequisite steps or intialise any dependencies required by the app
          // and make sure to pump the app widget using below statement.
          await tester.pumpWidget(const app.MyApp());
       },
     );
   }
   ```

6. Build the Android app:

   ```bash
   ./gradlew app:assembleDebug -Ptarget=`pwd`/../integration_test/appium_test.dart
   ```
   
   The APK file will be located in `{project-root}/build/app/outputs/flutter-apk/`

7. Build the iOS app:
   For Simulator - Debug mode
   ```bash
   flutter build ios integration_test/appium_test.dart --simulator
   ```
   
   The app will be located in `{project-root}/build/ios/iphonesimulator/`

   For Real Device - Release mode
   ```bash
    flutter build ipa --release integration_test/appium_test.dart
    ```
   
   The IPA file will be located in `{project-root}/build/ios/ipa/`

Bingo! You are ready to run your tests using Appium Flutter Integration Driver.

## Uploading your Flutter App to Sauce Labs

You can now upload the built apps with our [REST API](/dev/api/storage/#upload-file-to-app-storage), or manually upload them to the preferred Data Center. See [Manually Uploading an App](/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app) for more information.

## Configuring your Appium Capabilities

More information on how to write Appium tests for Flutter apps can be found in the [appium-flutter-integration-driver](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver) repository. You can also find a sample Flutter app and tests in the [Demo JS - Appium Flutter Integration](https://github.com/saucelabs-training/demo-js/tree/main/webdriverio/appium-app/examples/appium-flutter-integration)-repository.

:::info W3C Capabilities
We encourage you to use W3C capabilities for your tests. For more information on W3C capabilities, see [W3C Capabilities](/dev/test-configuration-options/#mobile-appium-capabilities).
:::

:::info APPIUM FLUTTER INTEGRATION DRIVER SUPPORT :
[appium-flutter-integration-driver](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver). This driver will now be included by default with Appium version latest and all subsequent versions released after July 1st.

More information regarding the available [appium versions](/mobile-apps/automated-testing/appium/appium-versions/#Real-Devices) we support at Sauce Sabs.
:::

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
// W3C Protocol is mandatory for Appium 2
capabilities.setCapability("appium:platformVersion", "12");
capabilities.setCapability("appium:deviceName", "Google Pixel 6");
// Mandatory for Appium 2
capabilities.setCapability("appium:automationName", "FlutterIntegration");
capabilities.setCapability("appium:app", "storage:filename=sl_my_demo_flutter_app.apk");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2 on Sauce Labs
sauceOptions.put("appiumVersion", "appium-20240701");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2
capabilities.setCapability("appium:platformVersion", "16");
capabilities.setCapability("appium:deviceName", "iPhone 14");
// Mandatory for Appium 2
capabilities.setCapability("appium:automationName", "FlutterIntegration");
capabilities.setCapability("appium:app", "storage:filename=sl_my_demo_flutter_app.ipa");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// appiumVersion is mandatory to use Appium 2 on Sauce Labs
sauceOptions.put("appiumVersion", "appium-20240701");
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
    // W3C Protocol is mandatory for Appium 2
    'appium:platformVersion': '12',
    'appium:deviceName': 'Google Pixel 6',
    // Mandatory for Appium 2
    'appium:automationName': 'FlutterIntegration',
    'appium:app': 'storage:filename=sl_my_demo_flutter_app.apk',
    'sauce:options': {
        // appiumVersion is mandatory to use Appium 2 on Sauce Labs
        appiumVersion: 'appium-20240701'
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```js
const capabilities = {
    platformName: 'ios',
    // W3C Protocol is mandatory for Appium 2
    'appium:platformVersion': '16',
    'appium:deviceName': 'iPhone 14',
    // Mandatory for Appium 2
    'appium:automationName': 'FlutterIntegration',
    'appium:app': 'storage:filename=sl_my_demo_flutter_app.ipa',
    'sauce:options': {
        // appiumVersion is mandatory to use Appium 2 on Sauce Labs
        appiumVersion: 'appium-20240701'
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
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" : "12",
    "appium:deviceName" : "Google Pixel 6",
    # Mandatory for Appium 2
    'appium:automationName': 'FlutterIntegration',
    'appium:app': 'storage:filename=sl_my_demo_flutter_app.apk',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2 on Sauce Labs
        "appiumVersion" : "appium-20240701"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```py
capabilities = {
    "platformName" : "ios",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" : "16",
    "appium:deviceName" : "iPhone 14",
    # Mandatory for Appium 2
    'appium:automationName': 'FlutterIntegration',
    'appium:app': 'storage:filename=sl_my_demo_flutter_app.ipa',
    "sauce:options" : {
        # appiumVersion is mandatory to use Appium 2 on Sauce Labs
        "appiumVersion" : "appium-20240701"
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
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" => "12",
    "appium:deviceName" => "Google Pixel 6",
    # Mandatory for Appium 2
    'appium:automationName' => 'flutter',
    'appium:app' => 'storage:filename=sl_my_demo_flutter_app.apk',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2 on Sauce Labs
        "appiumVersion" => "appium-20240701"
    }
}
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "platformName" => "ios",
    # W3C Protocol is mandatory for Appium 2
    "appium:platformVersion" => "16",
    "appium:deviceName" => "iPhone 14",
    # Mandatory for Appium 2
    'appium:automationName'=> 'flutter',
    'appium:app' => 'storage:filename=sl_my_demo_flutter_app.ipa',
    "sauce:options" => {
        # appiumVersion is mandatory to use Appium 2 on Sauce Labs
        "appiumVersion" => "appium-20240701"
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
// W3C Protocol is mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:platformVersion", "12");
capabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6");
// Mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:automationName", "FlutterIntegration");
capabilities.AddAdditionalCapability("appium:app", "storage:filename=sl_my_demo_flutter_app.apk");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2 on Sauce Labs
sauceOptions.Add("appiumVersion", "appium-20240701");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="ios">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("platformName", "ios");
// W3C Protocol is mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:platformVersion", "16");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone 14");
// Mandatory for Appium 2
capabilities.AddAdditionalCapability("appium:automationName", "FlutterIntegration");
capabilities.AddAdditionalCapability("appium:app", "storage:filename=sl_my_demo_flutter_app.ipa");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// appiumVersion is mandatory to use Appium 2 on Sauce Labs
sauceOptions.Add("appiumVersion", "appium-20240701");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>
