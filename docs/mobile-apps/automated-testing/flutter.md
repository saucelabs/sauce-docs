---
id: flutter
title: Flutter on Sauce Labs
sidebar_label: Using Flutter
description: Test your mobile Flutter apps on Sauce Labs
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Are your iOS and Android apps built with Flutter? Sauce Labs supports testing Flutter apps on Real Devices.  

[Flutter](https://flutter.dev/) is a popular open-source framework created by Google to build natively compiled 
applications for mobile, web, and desktop from a single codebase. You can run your tests on Sauce Labs to benefit 
from speed, parallelization, failure analysis, simple setup, and more.


## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Flutter mobile app. If you don't have one, you could use our Flutter Demo App:
    - [Sauce Labs Flutter Demo App](https://github.com/saucelabs/my-demo-app-flutter)


## Choosing a Flutter Integration Driver for Testing

There are two drivers that you can use to test your Flutter app on Sauce Labs: 
[Native Flutter Integration Driver Devices - Android](/mobile-apps/automated-testing/flutter/flutter-integration-testing-android) 
or [Appium Flutter Integration Driver](/mobile-apps/automated-testing/appium/appium-flutter-integration-driver). 

### Appium Flutter Integration Driver

With the [Appium Flutter Integration Driver](/mobile-apps/automated-testing/appium/appium-flutter-integration-driver), 
you can write tests in for both Android and iOS devices using the Appium framework. The Appium Flutter Integration 
Driver is a wrapper around the Appium framework that allows you to write tests in languages other than Dart, such as 
Java, Python, Ruby, and more.

### Native Flutter Integration Driver

Sauce Labs now supports running Flutter integration tests written in Dart on both Android and iOS real devices. 
This enables developers to execute their Dart-based integration tests across both major mobile platforms using Sauce Labs' infrastructure.

To get started with Flutter integration testing on Sauce Labs:

* Android: Follow the [Flutter Android Integration Testing Guide](/mobile-apps/automated-testing/flutter/flutter-integration-testing-android) to set up and run your tests.
* iOS: Refer to the [Flutter iOS Integration Testing Guide](/mobile-apps/automated-testing/flutter/flutter-integration-testing-ios) for instructions on building your `.ipa` and `.xctestrun` files and executing tests on real iOS devices.

Both testing approaches leverage Flutter's native integration testing capabilities, ensuring consistency and reliability across platforms.

Both drivers are based on [Flutter Integration Test](https://docs.flutter.dev/cookbook/testing/integration/introduction). 
Check the table below to see which driver is best for your testing needs.

| Use Cases                                                                                                                           | Native Flutter Driver | Appium Flutter Integration Driver |
| ----------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------- |
| Writing tests in languages other than Dart                                                                                          | ❌                    | ✔️                                |
| Running integration tests for Flutter apps with embedded webview or native view, or existing native apps with embedded Flutter view | ❌                    | ✔️                                |
| Running tests on multiple devices simultaneously                                                                                    | ❌                    | ✔️                                |
| Running integration tests on device farms that offer Appium support                                                                 | ❌                    | ✔️                                |
| App interactions beyond Flutter’s contextuality (e.g., sending an OTP from a message application)                                   | ❌                    | ✔️                                |


## How to Get Started

After choosing the driver that best fits your testing needs, follow the guides below to set up your Flutter app for 
testing on Sauce Labs.

- [Appium Flutter Integration Driver](/mobile-apps/automated-testing/appium/appium-flutter-integration-driver)
- [Native Flutter Integration Driver Devices - Android](/mobile-apps/automated-testing/flutter/flutter-integration-testing-android)
