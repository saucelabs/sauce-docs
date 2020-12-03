---
id: real-device-testing
title: Real Device Testing with Espresso and XCUITest
sidebar_label: Real Device Testing
---

:::warning Only Available in TestObject

At the moment, the Sauce Runner is only available for our Legacy Real Device Cloud Platform, therefore all topics in this page do not apply to automated testing with Real Devices in Sauce Labs. Check the [Real Device Testing in Sauce Labs Feature Preview](https://sauce-docs.com) for updates on when the Sauce Runner will be available.
:::

Sauce Labs offers the ability to run automated user interface tests on our real device cloud using Espresso and XCUITest, the native app testing frameworks for Android and iOS devices, respectively.

To begin, you'll need to download and configure our test runner, Sauce Runner for Real Devices, which is parameterized for use in your CI/CD environments. You can run tests against one or more devices in parallel, with test reporting that includes video, screenshots, and logs of your tests.

## What You'll Need
Prior to downloading Sauce Runner for Real Devices and getting started with your Espresso and XCUITest tests in the Real Device Cloud, you'll need to have:

* The `.ipa` or `.apk` file for both your app and tests
* Java 8 or later installed on your local machine
* Set up your mobile app testing project (see [Application and Project Management for Real Devices](https://wiki.saucelabs.com/pages/viewpage.action?pageId=92677287))

## Download
Download the Sauce Runner for Real Devices (.jar file) ([click this link](https://s3.amazonaws.com/saucelabs-runner/v1.9/runner.jar)).

## Setup and Configuration
See [Command Reference for Sauce Runner for Real Devices](https://wiki.saucelabs.com/display/DOCS/Command+Reference+for+Sauce+Runner+for+Real+Devices) for a list of options you can use to configure Sauce Runner run tests with both Espresso and XCUITest.

(more TK)

## Using Espresso
There are two ways you can run Espresso and UI Automator tests against Sauce Labs real devices:

* By using our test runner, which is parameterized for use in CI/CD environment
* By using our [web interface](https://app.saucelabs.com)

## Using XCUITest
XCUITest, built on Apple's XCTest framework, is included as part of the iOS Xcode development tools. Tests are written in ObjectiveC/Swift and then built as an [.ipa file](https://wiki.saucelabs.com/display/DOCSDEV/Creating+an+ipa+File), which is loaded and executed on the device, along with the application you're testing.

> **One Hour Test Limit**: The execution time for a single XCUITest test is one hour. Our recommended best practice is to keep all tests ["small, atomic, and autonomous"](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365933) with maximum execution times in minutes or seconds, so you can get the [most efficiency for your builds](https://wiki.saucelabs.com/pages/viewpage.action?pageId=72002870).


### Building Your iOS App for Use with Sauce Runner
When you are ready to build the .ipa file for your app to use with the test runner, you need to make sure that the iOS version you set for the **iOS Deployment Target** for both the application and your test runner match. If these don’t match, your tests will run locally, but fail when you run them against the Sauce Labs real devices. You can set this for both Projects and Targets of your application in the Xcode **Build Settings**.  

#### **Select Your Project**
Select the Project you want to build, and under Build Settings, set the iOS Deployment Target to the iOS operating system version you want to use in your test. All target outputs of this project, including the application and your test runner, will be set to the same operating system version.

#### **Select Your Target**
Select the **Target** for your Project, and under **Build Settings**, set the **iOS Deployment Target** to the iOS operating system version you want to use in your test. This will also overwrite the Build Settings at the Project level to that operating system version, so if you use this method, be aware that your Targets can become out of synch with each other and the Project settings, and your tests will break. If you change the iOS version for one target output, you may want to build the Project again to make sure all your targets are in sync.

## YAML Configuration Option
As an alternative to using command line arguments to configure your Espresso and XCUITest with Sauce Runner for Real Devices, you can build a YAML configuration file.

In addition to passing configuration options to Sauce Runner for Real Devices through the command line, you can also create a YAML configuration file for your tests. The runner will execute based on the test parameters set in the file.

### General Usage

```js
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar config --path <path to config.yml> --apikey <apikey>
```

### Config Command
When you pass the config command to the runner, you can no longer use the other configuration options available on the command line (e.g., `- devices`, `- testname`, etc). The config command only accepts two parameters: `--path <path to config.yml>` and `--apikey <apikey>`.

### Parallel Test Executions
For both examples, the tests can be configured to run in parallel on the Sauce Labs Real Device Cloud.

For each section starting with the - datacenter directive, a new parallel test thread will spin up for the device indicated. If you specify multiple test classes or test methods, each will be executed serially, in the order presented in the section, on the device. The test results for each device are then rolled into a single set of artifacts (e.g., videos, logs) in the UI. These artifacts may be downloaded via the API after the test suite is complete.

If either example were executed, it would result in four separate test executions in parallel on four different devices. The tests within the section will be assigned to that one device and executed in the order specified.

### Sauce Runner Configuration Files

#### XCUITest Example
This snippet includes all the required options for running an XCUITest suite, including the `--devices` option to select devices based on both static and dynamic allocation, and the `--testsToRun` option to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Swift or Objective-C.

```sh
# Test framework: "xcuitest" in this example
testFramework: xcuitest

# Path to the .ipa or .app file (must have the same name as the App created in Sauce Labs)
app: ./SampleApp.ipa

# Path to the test -Runner app's .ipa or .app file
test: ./SampleAppUITests-Runner.ipa

# Path where XML test reports will be saved
xmlFolder: ./

# A list of devices to be used for this test run
devices:

# Device 1 example: this will execute every test in the ipa file on a random iOS device
# Only specify a DC (either EU or US)
- datacenter: EU

# Device 2 example: Static Allocation - this test will only run if the named device is available
- datacenter: US
  # Specify the specific device name for static allocation
  device: iPhone_11_13_5_real_us

  # set test name (optional) - this is the name that will appear in the Sauce Labs UI (and API results)
  testname: MyTestName2

# Device 3 example: Dynamic Allocation
- datacenter: US
  # Specify a device name or regex for dynamic allocation: 'iPhone X', 'iPad.*', etc.
  deviceNameQuery: iPhone 8.*

  # Platform Version for a dynamic device query. e.g. '13' for all Devices with major version 13 and
  #  arbitrary minor versions or '13.5.1' for a more specific version
  platformVersion: 13
  testname: MyTestName3

  # Optional parameters, set to true to enable
  # phoneOnly: false
  # tabletOnly: false
  # privateDevicesOnly: false            # if 'true', will run only on Private Devices assigned to your account

# Device 4 example: Running subset of tests
- datacenter: EU
  testname: MyTestName4

  # Provide a list of test cases or test classes. If you want to run all tests of a class, provide the class name by itself.
  #  To run a specific class method, provide both the class and method names.
  #  You may specify multiple testClass parameters. As described above, each testClass will execute serially on the device indicated.
  #  Each testClass must be preceded by a hyphen (e.g. '- testClass'), whereas testMethod parameters must be at the same indentation
  #  level as testClass, without the hyphen
  testsToRun:
  - testClass: SampleTestCase
  - testClass: SampleTestCase2
    testMethod: testItWorks


  - testClass: SampleTestCase3
    testMethod: testThisMethod

```

#### Espresso

This snippet includes all the required options for running an Espresso test suite, including the --devices option to select devices based on both static and dynamic allocation, and the `--envs` option to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Java or Kotlin.

```sh
testFramework: espresso
# Path to the app's .apk
app: ./SampleApp.apk

# Path to the .apk file containing the test bundle
test: ./SampleAppUITests-tests.apk

# Path where XML test reports will be saved.
xmlFolder: ./

# Define a list of devices on which the tests should be executed
devices:

# Device 1 example
# Only specify a DC (either EU or US). This will execute all test methods on the first random Android
#   device which your account is eligible to use
- datacenter: EU

# Device 2 example: Static Allocation - this test will only run if the named device is available
- datacenter: US

  # Specify the specific device name for static allocation
  device: Samsung_Galaxy_S8_real

  # set test name (optional) - this is the name that will appear in the Sauce Labs UI (and API results)
  testname: MyTestName3

# Device 3 example: Dynamic Allocation
- datacenter: US

  # Specify a device name or regex for dynamic allocation: 'Samsung Galaxy S7', 'Samsung Galaxy.*', etc.
  deviceNameQuery: Samsung Galaxy S7

  # Platform Version for a dynamic device query. e.g. '7' for all Devices with major version 7 and
  #  arbitrary minor versions or '7.1.2' for a more specific version
  platformVersion: 7.1

  # Optional parameters, set to true to enable
  # phoneOnly: false
  # tabletOnly: false
  # privateDevicesOnly: false             # if 'true', will run only on Private Devices assigned to your account

  testname: MyTestName3

# Device 4 example: Running subset of tests.
- datacenter: EU
  testname: MyTestName4

  # Provide a list of test options to espresso
  # The key-value pairs supported by espresso are documented here: https://developer.android.com/studio/test/command-line#AMOptionsSyntax
  # In the example below the test would execute all test methods defined in the class com.example.android.TestClassA
  envs:
  - key: class
    value: com.example.android.TestClassA

```

## Uploading Your App and Test Files to TestObject Storage API

As an alternative to using the built-in upload behavior of Sauce Runner for Real Devices, you can separate the upload of your application and test files via TestObject Storage API.

Implementing the separation of upload allows you to take control of when to upload a new version, which in turn helps save time by reducing the total amount of file uploads done.

Below are example `curl` commands for uploading your app build and test runners to TestObject.

Example: uploading an iOS app

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest -H "Content-Type: application/octet-stream" --data-binary @/path/to/iOSApp.ipa
```

Example: uploading an Android app

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest -H "Content-Type: application/octet-stream" --data-binary @/path/to/androidApp.apk
```

Example: uploading an iOS test runner

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest -H "Content-Type: application/octet-stream" -H "App-Type: XCUITEST" --data-binary @/path/to/XCUITests-Runner.ipa
```

Example: uploading an Android test runner

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest -H "Content-Type: application/octet-stream" -H "App-Type: ANDROID_INSTRUMENTATION_TEST" --data-binary @/path/to/androidTest.apk
``
