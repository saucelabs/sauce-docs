---
id: example-configurations
title: Example Configurations for Espresso and XCUITest
sidebar_label: Example Configurations
---

These repositories below illustrate how to run Espresso tests on the Sauce Labs cloud.


## Creating a YAML Configuration File for Real Devices

As an alternative to configuring your [Espresso and XCUITest RDC tests](mobile-apps/automated-testing/espresso-xcuitest/real-devices.md) using the [command line interface](/dev/cli/espresso-xcuitest.md), you can create a YAML configuration file, as described below.

>**NOTE**: You cannot use [command line options](dev/cli/espresso-xcuitest.md) in your YAML config file. Once you pass the `config` command to the runner, it will prohibit you from using the other configuration options available on the command line.

#### XCUITest Example: Sauce Runner YAML Configuration File

This snippet includes all the required options for running an XCUITest suite in conjunction with Sauce Runner for Real Devices. It includes the `--devices` option to select devices based on both static and dynamic allocation, and the `--testsToRun` option to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Swift or Objective-C.

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

# Device 1 example: this will execute every test in the .ipa file on a random iOS device
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
  # privateDevicesOnly: false            
        # if 'true', will run only on Private Devices assigned to your account

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

#### Espresso Example: Sauce Runner YAML Configuration File

This snippet includes all the required options for running an Espresso test suite, including the `--devices` option to select devices based on both static and dynamic allocation, and the `--envs` option to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Java or Kotlin.

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

### Parallel Test Executions
The XCUITest and Espresso examples above each contain tests on four different iOS and Android devices, respectively. On the Sauce Labs Real Device Cloud, you'll have the option to configure these tests to run in parallel.

For each section starting with the `-datacenter` directive, a new parallel test thread will spin up for the device indicated. If you specify multiple test classes or test methods, each will be executed serially, in the order presented in the section, on the device.

By executing either example (Espresso or XCUITest), it would result in four separate test executions in parallel on four different devices. The tests within the section will be assigned to that one device and executed in the order specified.

Once the test suite has completed, you can find the test results for each device rolled into a single set of artifacts (e.g., videos, logs) under Sauce Labs > Automated > Test Results. You can download these artifacts via the API.

### Uploading Your App and Test Files to TestObject Storage API

As an alternative to using the built-in upload behavior of Sauce Runner for Real Devices, you can separate the upload of your application and test files via TestObject Storage API.

Implementing the separation of upload allows you to take control of when to upload a new version, which in turn helps save time by reducing the total amount of file uploads done.

Below are example `curl` commands for uploading your app build and test runners to TestObject.

Example: uploading an iOS app

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest/storage/upload -H "Content-Type: application/octet-stream" --data-binary @/path/to/iOSApp.ipa
```

Example: uploading an Android app

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest/storage/upload -H "Content-Type: application/octet-stream" --data-binary @/path/to/androidApp.apk
```

Example: uploading an iOS test runner

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: XCUITEST" --data-binary @/path/to/XCUITests-Runner.ipa
```

Example: uploading an Android test runner

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: ANDROID_INSTRUMENTATION_TEST" --data-binary @/path/to/androidTest.apk
```

## Additional Resources

### Real Devices

* [Sauce Labs GitHub repository | Espresso for Real Devices](https://github.com/saucelabs-training/demo-espresso/tree/master/real-devices)

* [Sauce Labs GitHub repository | XCUITest for Real Devices](https://github.com/saucelabs-training/demo-xcuitest/tree/master/real-devices)


### Virtual Devices

* [Sauce Labs GitHub repository | Espresso for Real Devices](https://github.com/saucelabs-training/demo-espresso/tree/master/emulators)

Sauce Labs virtual devices do not support XCUITest.
