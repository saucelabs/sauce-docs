---
id: real-devices
title: Real Device Testing with Espresso and XCUITest
sidebar_label: Real Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs provides the ability to run your automated tests on our real devices using Espresso and XCUITest, the native app testing frameworks for running user interface (UI) tests on Android devices and iOS devices, respectively.

* Leverage the power of our 2,000+ Android and iOS devices to run mobile app UI tests, without having to leave your Espresso or XCUITest environment.
* Accelerate test execution with parallel testing.
* Gain immediate insight with test reporting comprised of video, screenshots, and logs.

For more information about implementing automated testing using Espresso and XCUITest, see our white paper, [Beyond Appium: Testing Using Espresso and XCUITest](https://saucelabs.com/resources/white-papers/beyond-appium-testing-using-espresso-and-xcuitest).

## What You'll Need

* Your Sauce Labs username and access key.
* Have your mobile app file and mobile test file ready (.ipa for iOS, .apk for Android).

If you don't have an app and would like to try out our test functionality, feel free to download and use our [Sauce Labs demo app](https://github.com/saucelabs/sample-app-mobile/releases).

## System Requirements

Minimum requirements for installing Sauce Runner for Real Devices:

* Have Java 8 or later installed on your local machine. To check, run `java -version` on your local machine.

## Download

To get started, you'll need to download Sauce Runner for Real Devices, which is parameterized for use in your CI/CD environment. This test runner connects your environment to our Real Device Cloud.  

Click the button below to download the Sauce Runner for Real Devices .jar file.

<p> <a href="https://s3.amazonaws.com/saucelabs-runner/v1.10/runner.jar"><button class="download">Download</button></a> </p>


## Quickstart

Here are our recommended steps to get up and running quickly.

:::tip
For a full list of test specifications, execute the `help` command:

```sh
java -jar saucelabs-native-test-runner.jar help
```
:::

<Tabs
  defaultValue="Espresso"
  values={[
    {label: 'Espresso', value: 'Espresso'},
    {label: 'XCUITest', value: 'XCUITest'},
  ]}>

<TabItem value="Espresso">

1. Create a new folder for your tests, somewhere on your local machine.
2. In the folder, drop the command-line client (Sauce Runner for Real Devices), your app, and test app.
3. Execute a sample test:
```sh
java -jar saucelabs-native-test-runner.jar espresso --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESSKEY --datacenter US --app <path-to-app> --test <path-to-test>
```
4. Wait for the client to submit the tests. In this step, the test runner will automatically upload the apps you specify. The expected output will be similar to this:
```java
Finished uploading app file 'binaries/android/sample-android-app.apk' to 'US' data center.
Uploading test file 'binaries/android/sample-android-test.apk' to 'US' data center...
Finished uploading test file 'binaries/android/sample-android-test.apk' to 'US' data center.
Starting test run on US data center...
```
5. View your results on Sauce Labs. Go to **Automated** > **Test Results** > select the **Real Devices** radio button.

</TabItem>
<TabItem value="XCUITest">

1. Create a new folder for your tests, somewhere on your local machine.
2. In the folder, drop the command-line client (Sauce Runner for Real Devices), your app, and test app.
3. Execute a sample test:
```sh
java -jar saucelabs-native-test-runner.jar xcuitest --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESSKEY --datacenter US --app <path-to-app> --test <path-to-test>
```
4. Wait for the client to submit the tests. In this step, the test runner will automatically upload the apps you specify. The expected output will be similar to this:
```java
Finished uploading app file 'binaries/xcuitest/sample-ios-app.ipa' to 'US' data center.
Uploading test file 'binaries/xcuitest/sample-ios-test.ipa' to 'US' data center...
Finished uploading test file 'binaries/xcuitest/sample-ios-test.ipa' to 'US' data center.
Starting test run on US data center...
```
5. View your results on Sauce Labs. Go to **Automated** > **Test Results** > select the **Real Devices** radio button.

</TabItem>
</Tabs>

<br/>

## Setting Up Your Environment

### Espresso (Android)

Sauce Labs offers the ability to run Espresso and UI Automator tests against our real device cloud using our test runner, which is parameterized for use in CI/CD environments.

### XCUITest (iOS)

For information on building .ipa files for your app to use with Sauce Runner for Real Devices, see [Creating .ipa Files for Appium and XCUITest](mobile-apps/automated-testing/ipa-files.md).

Make sure that you set the same iOS version for your app and test runner **iOS Deployment Target**. If they donâ€™t match, your tests will run locally, but fail when you run them against Sauce Labs real devices.

To set the iOS version in your Xcode Project:
1. Select the Project you want to build.
2. Under **Build Settings**, set the **iOS Deployment Target** to the iOS version you want to use in your test. All target outputs of this project, including the app and your test runner, will be set to the same iOS version.

To set the iOS version in your Xcode Target:
1. Select the Target for your Project.
2. Under **Build Settings**, set the iOS Deployment Target to the iOS version you want to use in your test.

>**NOTE**: will also overwrite the **Build Settings** at the Project level to that iOS version. If you use this method, be aware that your Targets can become out of sync with each other and the Project settings, and your tests will break. If you change the iOS version for one target output, you may want to build the Project again to make sure all your targets are in sync.


## Test Configuration Options

There are two ways to configure tests to run on Sauce Runner for Real Devices with Espresso or XCUITest: command-line interface or YAML configuration file.

### Using the Command-Line Interface

1. Add one of the following commands and add it to your test script:
  * `xcuitest` Defines XCUITest as the test framework to use for your native iOS app tests
  * `espresso` Defines Espresso as the test framework to use for your native Android app tests

2. Add the required flags listed [here](dev/cli/espresso-xcuitest.md) (i.e., `--accessKey`, `--app`, `--test`, `--datacenter`).

3. [Click here](dev/cli/espresso-xcuitest.md) to see the full list of optional parameters you can use. Sauce Runner for Real Devices will execute tests based on the parameters you set.

### Using a YAML Config File

As an alternative to configuring your Espresso and XCUITest RDC tests using the command line interface, you can create and run a YAML configuration file.

1. Add the `config` command to your test script.
2. Add the following parameters: `--path` and `--accessKey`. These are the only parameters accepted by the `config` command. Here's an example snippet:

```java
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar config --path <myFile.yml> --accessKey <12345abcde>
```

#### XCUITest YAML Example

This example YAML file includes all required options for running an XCUITest test suite in conjunction with Sauce Runner for Real Devices:

* `--devices` option: use this to select devices based on both static and dynamic allocation.
* `--testsToRun` option: use this to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Swift or Objective-C.

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

# Platform Version for a dynamic device query. e.g. '13' for all Devices with major version 13 and arbitrary minor versions or '13.5.1' for a more specific version
platformVersion: 13
testname: MyTestName3

# Optional parameters, set to true to enable
# If 'true', will run only on Private Devices assigned to your account
phoneOnly: false
tabletOnly: false
privateDevicesOnly: false            

# Device 4 example: Running subset of tests
- datacenter: EU
  testname: MyTestName4

# Provide a list of test cases or test classes. If you want to run all tests of a class, provide the class name by itself.
# To run a specific class method, provide both the class and method names.  
# You may specify multiple testClass parameters. As described above, each testClass will execute serially on the device indicated.
# Each testClass must be preceded by a hyphen (e.g., '- testClass'), whereas testMethod parameters must be at the same indentation level as testClass, without the hyphen.
testsToRun:
- testClass: SampleTestCase
- testClass: SampleTestCase2
  testMethod: testItWorks

- testClass: SampleTestCase3
  testMethod: testThisMethod

```

#### Espresso YAML Example

This example YAML file includes all required options for running an Espresso test suite in conjunction with Sauce Runner for Real Devices:

* `--devices` option: use this to select devices based on both static and dynamic allocation.
* `--envs` option: use this to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Java or Kotlin.

```sh
# Test framework: "espresso" in this example
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

# Platform Version for a dynamic device query. e.g. '7' for all Devices with major version 7 and arbitrary minor versions or '7.1.2' for a more specific version
platformVersion: 7.1

# Optional parameters, set to true to enable. If 'true', will run only on Private Devices assigned to your account
phoneOnly: false
tabletOnly: false
privateDevicesOnly: false             

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

#### Parallel Test Execution

The XCUITest and Espresso YAML examples above each contain tests on four different iOS and Android devices, respectively. On the Sauce Labs Real Device Cloud, you'll have the option to configure tests like these to run in parallel.

By executing either example (Espresso or XCUITest), it would result in four separate test executions in parallel on four different devices. The tests within the section will be assigned to that one device and executed in the order specified.

For each section starting with the `-datacenter` directive, a new parallel test thread will spin up for the device indicated. If you specify multiple test classes or test methods, each will be executed serially, in the order presented in the section, on the device.

Once the test suite has completed, you can find the test results for each device rolled into a single set of artifacts (e.g., videos, logs) under **Automated** > **Test Results**. You can download these artifacts via the API.

## Executing Your Test

Load and execute your .ipa or .apk file on the real mobile device, along with the app you're testing.

>**NOTE**: The maximum execution time for a single XCUITest test is one hour. As a best practice, we recommend designing your tests as [small, atomic, autonomous](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365933), and setting maximum execution times in minutes or seconds, so you can get the most efficiency for your builds.

## Legacy RDC (TestObject)

As an alternative to using the built-in upload behavior of Sauce Runner for Real Devices, you can separate the upload of your app and test files via the [TestObject](https://wiki.saucelabs.com/display/DOCS/Legacy+Real+Device+Platform+Resources) Storage API.

Implementing the separation of upload allows you to take control of when to upload a new version, which in turn helps save time by reducing the total amount of file uploads done.

Below are example `curl` snippets for uploading your app build and test runners to TestObject.

<Tabs
  defaultValue="Upload an iOS App"
  values={[
    {label: 'Upload an iOS App', value: 'Upload an iOS App'},
    {label: 'Upload an Android app', value: 'Upload an Android app'},
    {label: 'Upload an iOS Test Runner', value: 'Upload an iOS Test Runner'},
    {label: 'Upload an Android Test Runner', value: 'Upload an Android Test Runner'},
  ]}>

<TabItem value="Upload an iOS App">

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest/storage/upload -H "Content-Type: application/octet-stream" --data-binary @/path/to/iOSApp.ipa
```

</TabItem>
<TabItem value="Upload an Android app">

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest/storage/upload -H "Content-Type: application/octet-stream" --data-binary @/path/to/androidApp.apk
```

</TabItem>
<TabItem value="Upload an iOS Test Runner">

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: XCUITEST" --data-binary @/path/to/XCUITests-Runner.ipa
```

</TabItem>
<TabItem value="Upload an Android Test Runner">

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com/api/rest/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: ANDROID_INSTRUMENTATION_TEST" --data-binary @/path/to/androidTest.apk
```

</TabItem>
</Tabs>

## Additional Resources

* [Espresso and XCUITest CLI Reference](dev/cli/espresso-xcuitest.md)

* [Sauce Labs GitHub repository | Espresso for Real Devices](https://github.com/saucelabs-training/demo-espresso/tree/master/real-devices)

* [Sauce Labs GitHub repository | XCUITest for Real Devices](https://github.com/saucelabs-training/demo-xcuitest/tree/master/real-devices)
