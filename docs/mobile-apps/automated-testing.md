---
id: automated-testing
title: Using Automated Mobile App Testing
sidebar_label: Overview
description: Overview of Sauce Labs automated testing methods and supported frameworks.
hide_table_of_contents: true
---

Sauce Labs empowers you to run automation tests using the test instrumentation you prefer, so you can achieve total digital confidence in your application's behavior and performance on any mobile device.

:::note
While "mobile testing" can also refer to testing web applications within a browser on a mobile device, the Sauce Labs mobile automated testing documentation is predominantly addressing concepts and practices related to testing a mobile application designed to be installed on a mobile device.
:::

## High Level Steps

Most automated mobile app testing strategies will follow the same basic process, regardless of the language in or protocol used for the test scripts and the operating system or type of device on which the app is being installed and tested. The essential steps in this process are:

### 1. Link to your Sauce Labs account.

No matter which tool you are using to write and run your automation test scripts, you will need to provide your Sauce Labs credentials in order to access the devices on which you plan to test, and to view your test results and insights in the Sauce Labs application. The best and most secure way to provide your credentials is to [set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as environment variables](/basics/environment-variables).

### 2. Make the iOS and Android application files available to Sauce Labs.

Sauce Labs supports several ways to do this, so the method that best suits your circumstances may vary depending on:
  * Whether you have the file locally or whether it is available through a remote URL
  * Whether you plan to test on virtual devices (Android Emulator or iOS Simulator) or real devices
  * Whether you wish to use a graphical interface or a programmatic API request
  For additional information about choosing your best method, see [Application Storage](/mobile-apps/app-storage).

### 3. Configure your tests for Sauce Labs.

Whether you are using Appium, Espresso, or XCUITest to run your mobile automation test scripts, you will need to provide instructions for things like:
  * The test framework you are using and its version
  * Where your test scripts are located
  * Which tests to run
  * How to send test results to Sauce Labs if you're running locally
  * Whether you need a tunnel for secure access
  * Whether your test have any dependencies that must also be installed on the test devices
  and many other settings. For [Appium](/mobile-apps/automated-testing/appium), these settings are configured through capability properties in your test scripts. For [Espresso and XCUITest](/mobile-apps/automated-testing/espresso-xcuitest), these settings are configured through YAML properties. Refer to the applicable configuration documentation for your test environment for details about supported configurations and syntax.

### 4. Run your Tests.

Once you have connected to Sauce Labs, provided access to your apps, and configured your tests, you can run your tests from the environment of your choice. For example, if you are running Appium tests through IntelliJ, you can start the test from within the IntellliJ interface or execute the command `mvn clean test` from a terminal. For espresso or XCUITests, you can use our `saucectl` CLI command `saucectl run` to kick off your tests.

## Mobile Automation Test Considerations

Within the high level process described above, there are many nuances that can affect the usefulness of your test results. Here we have tried to provide some of the most common.

### Real Device Automated Test Time Limits

By default, automated tests that are running on real devices in the Sauce Labs data centers can run for up to **60 minutes**. However, that duration can be affected by other factors:

* If the test is idle (not actively interacting with the device) for more than 60 seconds, the test will timeout and end the session, so consider writing tests that do not include waits that may trigger this timeout. For Appium tests, you have the option to increase the idle timeout value to a maximum of 90 seconds using the [`newCommandTimeout`](/dev/test-configuration-options/#newCommandTimeout) capability.
* If you are running multiple Appium tests concurrently on the same device, consider setting the [cache ID](/dev/test-configuration-options/#cacheId) to bypass the default device cleaning process and session exit between tests.
