---
id: real-devices
title: Real Device Testing with Espresso and XCUITest
sidebar_label: Real Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution  **Only Available in TestObject**

At this time, Espresso and XCUITest real device testing is only supported on TestObject, our [Legacy Real Device Cloud Platform](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721177), which you can access via **Sauce Apps** > **Legacy RDC**.

In spring 2021, Espresso and XCUITest support will move from TestObject to Sauce Labs. See [Real Device Testing in Sauce Labs Feature Preview](https://wiki.saucelabs.com/display/DOCS/Real+Device+Testing+in+Sauce+Labs+Feature+Preview) for more information.
:::

Automated testing is included in the two most common integrated development environments (IDEs) used for making mobile apps:

* Android Studio, published by Google, provides automated testing capability by way of Espresso.
* XCode, the standard development environment for creating Apple iOS apps, uses XCUITest.

Our Sauce Runner for Real Devices test runner enables you to integrate Espresso and XCUITest with Sauce Labs real device testing. Leverage the power of our 2,000+ Android and iOS devices to run mobile app user interface (UI) tests, accelerate test execution with parallel testing, and gain immediate insight with test reporting comprised of video, screenshots, and logs.

## What You'll Need

To get started, you'll need to download Sauce Runner for Real Devices, which is parameterized for use in your CI/CD environment and connects it to our Real Device Cloud.  

When you launch a test, the runner authenticates access to Espresso and XCUITest testing using the API key inside runner file. Finally, it validates your mobile app and test files before uploading to our real device cloud.

* The mobile app file (.ipa for iOS; .apk for Android) for both your app and tests
* Set up your mobile app testing project (see [Application and Project Management for Real Devices](https://wiki.saucelabs.com/pages/viewpage.action?pageId=92677287))

## System Requirements

Minimum requirements for installing Sauce Runner for Real Devices:

* Java 8 or later installed on your local machine

## Download
Click here below to download the Sauce Runner for Real Devices .jar file.

<p><button class="badge-download"><a href="https://s3.amazonaws.com/saucelabs-runner/v1.9/runner.jar">Download</a></button></p>


## Test Preparation

### Espresso

There are two ways you can run Espresso and UI Automator tests against Sauce Labs real devices:

* By using our test runner, which is parameterized for use in CI/CD environment
* By using our [web interface](https://app.saucelabs.com)


### XCUITest

#### Configuring XCUITest Files for Sauce Runner

Once you've written your iOS app test in ObjectiveC/Swift, you'll need to build it as an .ipa file for use with Sauce Runner for Real Devices. For instructions, see **Creating an .ipa File** below.

Under **iOS Deployment Target**, ensure that you set the same iOS version for both the app and your test runner. If these don't match, your tests will run locally, but fail when you run them against Sauce Labs real devices. From your Xcode **Build Settings**:

1. **Select Your App Project**: Select the Project you want to build, and under **Build Settings**, set the iOS Deployment Target to the iOS operating system version you want to use in your test. All target outputs of this project, including the application and your test runner, will be set to the same operating system version.

2. **Select Your App Target**: Select the **Target** for your Project, and under **Build Settings**, set the **iOS Deployment Target** to the iOS operating system version you want to use in your test. This will also overwrite the Build Settings at the Project level to that operating system version, so if you use this method, be aware that your Targets can become out of sync with each other and the Project settings, and your tests will break. If you change the iOS version for one target output, you may want to build the Project again to make sure all your targets are in sync.


#### Creating an .ipa File

Learn how to create an .ipa file using self-signed application files and .app files with our XCUITest test runner.

:::tip
If you need to maintain your own provisioning profile in the .ipa file, you should disable the **App Resigning** option when you set the Device Settings for your app in the cloud.

You can also use the Appium capability `resigningEnabled=false` to disable app resigning. This option is available for private devices only.
:::

:::tip
Our XCUITest test runner accepts both .app and .ipa file formats for the `--app` and `--test` parameters.
:::

All of the build types listed below are supported, since we use a resigning process to embed our own provisioning profile into the uploaded .ipa file. With our own profile in place, the app will be allowed to install and launch on the cloud devices. The functionality of the app itself remains completely unmodified.

You can also use .ipa files generated by build tools outside of Xcode.

#### Building an .app Bundle

1. Open your application project in Xcode.
2. Select your product's device target:
    1. On an RDC: Select **Generic iOS Device**.
    2. On a simulator: Select any available simulator.
3. In the **Product** menu, select **Clean**.
4. In the **Product** menu, select **Build**.
5. Navigate to your Xcode project's **Products** directory and find the generated **.app** file.
6. Create an empty directory with the name `Payload`.
7. Move the **.app** file inside the Payload directory.
8. Compress the `Payload` directory into an archive (.zip file) and give it a new name with .ipa appended to the end of the file name.
9. The .ipa file is now ready for upload to Sauce Labs.

#### Building an .ipa File

You can use any of the existing methods of distribution for your iOS app, except for the **App Store** type. This means that you can choose any of the three other export methods: **Ad Hoc**, **Enterprise**, or **Development**.

1. Open your app project in Xcode.
2. Select **Generic iOS Device** as your project's device target.
3. In the **Product** menu, select **Clean**.
4. In the **Product** menu, select **Archive**. When the archiving process completes, you'll see your app listed under **Archives**.
5. Select your app and click **Export**.
6. When prompted for an export method, select **Ad Hoc, Enterprise** or **Development**.
7. Set these **Distribution** options:
    1. App Thinning: None.
    2. Clear the selection **Rebuild from Bitcode**.
    3. **Strip Swift symbols** is optional.
    4. Clear the selection **Include manifest for over-the-air installation**.
8. Select your **Distribution Certificate** and **Provisioning Profile** (**Automatic** or **Manual**). This will generate the .ipa file.
9. When the file generation process completes, click **Export** and choose where to save the .ipa file.
10. This .ipa file is now ready for upload to Sauce Labs.


#### Creating an XCUITest Test Package

**-Runner.app**

1. Open your application project in Xcode.
2. Select **Generic iOS Device** as your project's device target.
3. Make sure that the your UI tests are part of a **Target Membership** and that those Targets are selected to be built in your Xcode **Build scheme**. _Targets containing UI Tests are typically selected to be built at the "Test" build action._
<img src={useBaseUrl('img/xcuitest/xcode-build.png')} alt="Xcode Build Options" width="800" />


4. Launch the **Build** action, which is set to generate your test packages.
5. Navigate to your Xcode project's **Products** directory and find the generated **-Runner.app** files.
6. The -Runner.app files are ready to be used in the `--test` parameter of our XCUI test runner.

**.ipa (Optional)**

1. Create an empty directory name `Payload`.
2. Move the -Runner.app to the `Payload` directory.
3. Compress the Payload directory into an archive (.zip file) and give it a new name with .ipa file format ending.
4. The .ipa file is ready to be used in the `--test` parameter of our XCUITest test runner.


## Setting Up Your Test

There are two ways to configure your parameters for testing on Sauce Runner for Real Devices with Espresso and XCUITest: by using a command-line interface or by creating and running a YAML file.

### Using the Command Line Interface
Sauce Runner for Real Devices will execute tests based on the parameters you set in the file.

#### Sauce Runner RDC CLI Reference

Add one of the following commands to your test script:
  * `xcuitest` Defines XCUITest as the test framework to use for your native iOS app tests
  * `espresso` Defines Espresso as the test framework to use for your native Android app tests

From here, head to the full list of commands and options at [Sauce Runner for Real Devices Command-Line Reference](dev/cli/espresso-xcuitest.md).

### Using a YAML Configuration File

As an alternative to configuring your [Espresso and XCUITest RDC tests](mobile-apps/automated-testing/espresso-xcuitest/real-devices.md) using the [command line interface](/dev/cli/espresso-xcuitest.md), you can create a YAML configuration file.

Add the [`config` command](dev/cli/espresso-xcuitest.md) to your test script. The config command only accepts two parameters: `--path <path to config.yml>` and `--apikey <apikey>`. Here's an example:

```js
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar config --path <path to config.yml> --apikey <apikey>
```

>**NOTE**: You cannot use [command line options](dev/cli/espresso-xcuitest.md) in your YAML config file. Once you pass the `config` command to the runner, it will prohibit you from using the other configuration options available on the command line.

#### XCUITest YAML Configuration File for Sauce Runner

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

#### Espresso YAML Configuration File for Sauce Runner

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

## Parallel Test Execution

The XCUITest and Espresso YAML examples above each contain tests on four different iOS and Android devices, respectively. On the Sauce Labs Real Device Cloud, you'll have the option to configure tests like these to run in parallel.

By executing either example (Espresso or XCUITest), it would result in four separate test executions in parallel on four different devices. The tests within the section will be assigned to that one device and executed in the order specified.

For each section starting with the `-datacenter` directive, a new parallel test thread will spin up for the device indicated. If you specify multiple test classes or test methods, each will be executed serially, in the order presented in the section, on the device.

Once the test suite has completed, you can find the test results for each device rolled into a single set of artifacts (e.g., videos, logs) under **Automated** > **Test Results**. You can download these artifacts via the API.

## Executing Your Test

Load and execute your .ipa or .apk file on the real mobile device, along with the app you're testing.

>**NOTE**: The maximum execution time for a single XCUITest test is one hour. As a best practice, we recommend designing your tests as [small, atomic, autonomous](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365933), and setting maximum execution times in minutes or seconds, so you can get the most efficiency for your builds.

## Uploading Your App and Test Files to TestObject Storage API

As an alternative to using the built-in upload behavior of Sauce Runner for Real Devices, you can separate the upload of your application and test files via the [TestObject Storage API](https://wiki.saucelabs.com/display/DOCS/Legacy+Real+Device+Platform+Resources).

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

* [Espresso and XCUITest CLI Reference](dev/cli/espresso-xcuitest.md)

* [Sauce Labs GitHub repository | Espresso for Real Devices](https://github.com/saucelabs-training/demo-espresso/tree/master/real-devices)

* [Sauce Labs GitHub repository | XCUITest for Real Devices](https://github.com/saucelabs-training/demo-xcuitest/tree/master/real-devices)
