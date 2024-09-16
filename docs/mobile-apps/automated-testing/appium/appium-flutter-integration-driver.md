---
id: appium-flutter-integration-driver
title: Appium Flutter Integration Driver Testing on Sauce Labs
sidebar_label: Appium Flutter Integration Testing
description: Learn how to test Flutter apps with the Appium Flutter Integration Driver.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs supports testing Flutter apps on Android and iOS real devices with Appium by utilizing the [appium-flutter-integration-driver](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver). 
The process to test Flutter apps with Appium involves an additional and crucial step: [Prepare the app with Flutter Integration Server](#prepare-the-app-with-flutter-integration-server). 
This step includes instructions on how to prepare and build your app for both Android and iOS platforms. After preparing your app, 
you can [upload](#uploading-your-flutter-app-to-sauce-labs) it to Sauce Labs, [Configure your Appium capabilities](#configuring-your-appium-capabilities), and run your tests.


## Native Flutter Integration Driver vs Appium Flutter Integration Driver

The Appium Flutter Integration Driver is a wrapper around the Appium framework and uses the Flutter Integration Test SDK
to enable you to write tests in languages other than Dart, such as Java, Python, Ruby, and more. The driver is designed to
run integration tests for Flutter apps with embedded WebViews or native views, or existing native apps with embedded Flutter views.

For more information, see [Choosing a Flutter Integration Driver for Testing](/mobile-apps/automated-testing/flutter/#choosing-a-flutter-integration-driver-for-testing).

## Differences from Appium Flutter Driver

The current Appium Flutter Driver is built on top of the `flutter_test` SDK, which is deprecated. 
The potential deprecation ([Expand deprecation policy to package:flutter_driver](https://github.com/flutter/flutter/issues/139249)) 
means this driver may not work with future Flutter updates. It also does not handle all cases, such as permission dialog handling.

## Why Use Appium Flutter Integration Driver?

This driver is built using [Flutter Integration Test](https://docs.flutter.dev/cookbook/testing/integration/introduction).

 ***Strong Typing & Fluent APIs:*** Ensures robust and easy-to-use interfaces.

 ***Element Handling***: Automatically waits for elements to attach to the DOM before interacting.

 ***Seamless Context Switching***: No need to switch between contexts, such as Flutter and native; the driver handles it effortlessly.

 ***Auto Wait for Render Cycles***: Automatically waits for frame render cycles, including animations and screen transitions.

 ***Simplified Powerful Gestures***: Supports powerful yet simplified gestures like LongPress, ScrollToElement, DragAndDrop, and DoubleClick.

 ***Element Chaining***: Allows chaining of elements, enabling you to find child elements under a specific parent easily.


## What You'll Need

- Familiarity with creating, signing and building [Flutter apps](https://docs.flutter.dev/).
- Familiarity writing and running [Appium tests](/mobile-apps/automated-testing/appium/).

## Use Sauce Labs `My Demo App Flutter`

[*My Demo App Flutter*](https://github.com/saucelabs/my-demo-app-flutter) is a mobile application developed using Flutter based
on [Flutter Counter example application](https://github.com/felangel/bloc/tree/master/examples/flutter_counter).
Modified by the Sauce Labs team, this app is designed to demonstrate the robust capabilities of Sauce Labs
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

More information on how to write Appium tests for Flutter apps can be found in the [appium-flutter-integration-driver](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver) repository. You can also find a sample Flutter app and tests in the [Demo JS - Appium Flutter Integration](https://github.com/saucelabs-training/demo-js/tree/docs-1.3/webdriverio/appium-app/examples/appium-flutter-integration)-repository.

:::info APPIUM FLUTTER INTEGRATION DRIVER SUPPORT :
[appium-flutter-integration-driver](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver). This driver will now be included by default with Appium version latest and all subsequent versions released after July 1st.

More information regarding the available [appium versions](/mobile-apps/automated-testing/appium/appium-versions/#real-devices)
we support at Sauce Labs.
:::

### Real Devices

<Tabs
groupId="capability-ex"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'WDIO', value: 'ts'},
]}>

<TabItem value="java">
<Tabs groupId="capability-java"
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
sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
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
sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="ts">

<Tabs
groupId="capability-js"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>
<TabItem value="android">

<!-- prettier-ignore -->
```ts
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
```ts
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
</Tabs>
