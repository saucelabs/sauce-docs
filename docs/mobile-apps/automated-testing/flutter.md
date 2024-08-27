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

With the [Native Flutter Integration Driver Devices](/mobile-apps/automated-testing/flutter/flutter-integration-testing-android), 
you can write tests in Dart and run them on Sauce Labs. Only Android is currently supported.

:::info iOS Support

We're excited to share that Sauce Labs is actively working on expanding support for Flutter integration tests on iOS.
Stay tuned for updates as we continue to develop this capability!
:::

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
