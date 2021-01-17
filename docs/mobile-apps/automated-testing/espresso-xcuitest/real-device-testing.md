---
id: real-device-testing
title: Real Device Testing with Espresso and XCUITest
sidebar_label: Real Device Testing
---

:::warning Only Available in TestObject

Espresso and XCUITest real device testing is supported on TestObject, our [Legacy Real Device Cloud Platform](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721177), which you can access via **Sauce Apps** > **Legacy RDC**.

In early 2021, support will be moving from TestObject to Sauce Labs. See [Real Device Testing in Sauce Labs Feature Preview](https://wiki.saucelabs.com/display/DOCS/Real+Device+Testing+in+Sauce+Labs+Feature+Preview) for more information.
:::

Automated testing is included in the two most common integrated development environments (IDEs) used for making mobile apps:

* Android Studio, published by Google, provides automated testing capability by way of Espresso
* XCode, the standard development environment for creating Apple iOS apps, uses XCUITest

Our Sauce Runner for Real Devices test runner enables you to integrate Espresso and XCUITest with Sauce Labs real device testing. Leverage the power of our 2,000+ Android and iOS devices to run mobile app user interface (UI) tests, accelerate test execution with parallel testing, and gain immediate insight with test reporting comprised of video, screenshots, and logs.

## What You'll Need

To get started, you'll need to download and configure Sauce Runner for Real Devices, which is parameterized for use in your CI/CD environments. When you launch a test, the runner authenticates access to Espresso and XCUITest testing using the API key inside runner file. Finally, it validates your mobile app and test files before uploading to our real device cloud.

* The mobile app file (.ipa for iOS; .apk for Android) for both your app and tests
* Set up your mobile app testing project (see [Application and Project Management for Real Devices](https://wiki.saucelabs.com/pages/viewpage.action?pageId=92677287))

## System Requirements

Minimum requirements for installing Sauce Runner for Real Devices:

* Java 8 or later installed on your local machine

## Download
[Click here](https://s3.amazonaws.com/saucelabs-runner/v1.9/runner.jar) to download the Sauce Runner for Real Devices .jar file.

## Configuration

Here's how to configure Sauce Runner for Real Devices with Espresso and XCUITest.

1. Choose one of the following commands to add to your code:

  * `xcuitest` Defines XCUITest as the test framework to use for your native iOS app tests

  * `espresso` Defines Espresso as the test framework to use for your native Android app tests

2. Choose one of the following ways to set your test parameters:

  * **Add command line options**: see [Sauce Runner for Real Devices command line options](dev/cli/espresso-xcuitest.md)
  * **Create a YAML configuration file**: see [Example Configurations](mobile-apps/automated-testing/espresso-xcuitest/example-configurations.md)


## Using Espresso
There are two ways you can run Espresso and UI Automator tests against Sauce Labs real devices:

* By using our test runner, which is parameterized for use in CI/CD environment
* By using our [web interface](https://app.saucelabs.com)

## Using XCUITest
Once you've written your iOS app test in ObjectiveC/Swift, you'll need to build it as an .ipa file for use with Sauce Runner for Real Devices. For instructions, see [Creating an .ipa File](https://wiki.saucelabs.com/pages/viewpage.action?pageId=67767691).

Under **iOS Deployment Target**, ensure that you set the same iOS version for both the app and your test runner. If these don't match, your tests will run locally, but fail when you run them against Sauce Labs real devices. From your Xcode **Build Settings**:

1. **Select Your App Project**: Select the Project you want to build, and under Build Settings, set the iOS Deployment Target to the iOS operating system version you want to use in your test. All target outputs of this project, including the application and your test runner, will be set to the same operating system version.

2. **Select Your App Target**: Select the **Target** for your Project, and under **Build Settings**, set the **iOS Deployment Target** to the iOS operating system version you want to use in your test. This will also overwrite the Build Settings at the Project level to that operating system version, so if you use this method, be aware that your Targets can become out of sync with each other and the Project settings, and your tests will break. If you change the iOS version for one target output, you may want to build the Project again to make sure all your targets are in sync.

### Executing Your Test
Load and execute your .ipa file on the real mobile device, along with the app you're testing.

**NOTE**: The maximum execution time for a single XCUITest test is one hour. As a best practice, we recommend designing your tests as [small, atomic, autonomous](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365933), and setting maximum execution times in minutes or seconds, so you can get the most efficiency for your builds.
