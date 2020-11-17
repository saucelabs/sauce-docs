---
id: xcuitest-rdc
title: Using XCUITest for Real Device Testing
sidebar_label: XCUITest Using RDC
---

XCUITest is a testing framework for running user interface tests on iOS devices. Developed by Apple, it is built on the XCTest framework, and is included as part of the iOS Xcode development tools. Tests are written in ObjectiveC/Swift, and are built as an [.ipa file](https://wiki.saucelabs.com/display/DOCSDEV/Creating+an+ipa+File), which is loaded and executed on the device along with the application you're testing.

Sauce Labs offers the option to run XCUITest against our real device cloud using our test runner, which is parameterized with options for use in CI/CD environments. You can run tests against one or more devices in parallel, with test reporting that includes video, screenshots, and logs of your tests.

<span style="color:#E5DC1D"> ***-------------------*** </span>
##### <span style="color:#E5DC1D">**One Hour Test Limit**</span>

The execution time for a single XCUITest test is one hour. Our recommended best practice is to keep all tests ["Small, Atomic, and Autonomous,"](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365933) with maximum execution times in minutes or seconds, so you can get the [most efficiency for your builds](https://wiki.saucelabs.com/pages/viewpage.action?pageId=72002870).

<span style="color:#E5DC1D"> ***-------------------*** </span>

## Requirements for Using XCUITest with Sauce Runner for Real Devices

* [Set up your project](https://wiki.saucelabs.com/pages/viewpage.action?pageId=92677287)
* Have the .ipa files for both your app and tests
* Click this link to download the [latest version of Sauce Labs Runner (.jar file)](https://s3.amazonaws.com/saucelabs-runner/v1.9/runner.jar)
* Make sure you have Java 8 or later installed on your local machine

## Building Your App for Use with Sauce Runner
When you are ready to build the .ipa file for your app to use with the test runner, you need to make sure that the iOS version you set for the **iOS Deployment Target** for both the application and your test runner match. If these don’t match, your tests will run locally, but fail when you run them against the Sauce Labs real devices. You can set this for both Projects and Targets of your application in the Xcode **Build Settings**.  

### Project
Select the Project you want to build, and under Build Settings, set the iOS Deployment Target to the iOS operating system version you want to use in your test. All target outputs of this project, including the application and your test runner, will be set to the same operating system version.

### Target
Select the **Target** for your Project, and under **Build Settings**, set the **iOS Deployment Target** to the iOS operating system version you want to use in your test. This will also overwrite the Build Settings at the Project level to that operating system version, so if you use this method, be aware that your Targets can become out of synch with each other and the Project settings, and your tests will break. If you change the iOS version for one target output, you may want to build the Project again to make sure all your targets are in synch.

## Configuring Sauce Runner for Real Devices for XCUITest
The [Command Reference for Sauce Runner for Real Devices](https://wiki.saucelabs.com/display/DOCS/Command+Reference+for+Sauce+Runner+for+Real+Devices) contains a list of the options you can use to configure Sauce Runner run tests with XCUITest.
