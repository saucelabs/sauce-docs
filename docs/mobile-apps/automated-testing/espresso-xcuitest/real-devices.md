---
id: real-devices
title: Real Device Testing with Espresso and XCUITest
sidebar_label: Real Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Espresso and XCUITest are the test automation frameworks for writing and testing user interface (UI) functionality for Android and iOS mobile apps, respectively.

Our Sauce Runner for Real Devices test runner provides you the ability to run these tests on our Real Device Cloud without having to leave your Espresso or XCUITest environment.

* Leverage the power of our 2,000+ Android and iOS devices.
* Accelerate and scale your test volume quickly and effectively through parallel test execution on multiple devices at once.
* Gain immediate insight with test reporting comprised of videos, screenshots, and logs.

## What You'll Need

* Your Sauce Labs username and access key.
* Your mobile app file and mobile test file. Accepted file types are *.ipa for iOS and *.apk for Android.
  * For details on how to build .ipa files for use with Sauce Runner for Real Devices, see [Creating .ipa Files for Appium and XCUITest](mobile-apps/automated-testing/ipa-files.md).

If you'd like to try out this functionality but don't have an app on hand, [download our Sauce Labs demo app file and test file](https://github.com/saucelabs-training/demo-espresso/tree/master/real-devices).
:::

## System Requirements

* Have Java 8 or later installed on your local machine. To check the version, run `java -version` on your local machine.

## Download Runner

1. To get started, click the button below to download the Sauce Runner for Real Devices `jar` file. Sauce Runner for Real Devices is parameterized for use in your local CI/CD environment. It will connect your environment to our Real Device Cloud.   

  <p> <a href="https://s3.amazonaws.com/saucelabs-runner/v1.10/runner.jar"><button class="download">Download</button></a> </p>

## Set Up Project Folder

2. Unzip the download package contents to your local machine. The actual runner file will be in the `bin` folder.

3. Create a new folder for your project and drop the `saucelabs-native-test-runner` application, your app .apk file, and test .apk file here, so that your folder structure looks like this:

  ```bash
  |_{root / your project folder}
    |_saucelabs-native-test-runner.jar
    |_SauceLabs.Mobile.Sample.Espresso.App.apk
    |_SauceLabs.Mobile.Sample.Espresso.Tests.apk
  ```

## Gather Your Credentials

4. Find your Sauce Labs `username`, `accessKey`, and the emulator `deviceName` you wish to test on. The list of devices is located under **Live** > **Cross-Browser** > **Mobile Real**.
  * **Set Environment Variables (Optional)**: Setting your Sauce Labs `username` and `accessKey` as [environment variables](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365647#BestPracticesforRunningTests-UseEnvironmentVariablesforAuthenticationCredentials) provides an extra layer of security for your credentials when you reference them from within your tests.

## Configure Your Test

5. There are two ways to configure your Espresso or XCUITest tests to run on Sauce Runner for Real Devices: use the CLI or create a YAML configuration file.

### Using the CLI

:::tip CLI Reference
See [Sauce Runner for Real Devices CLI Reference](dev/cli/espresso-xcuitest/real-devices). To view these commands in your CLI, run the `--help` option:
```java
java -jar saucelabs-native-test-runner.jar --help
```
:::

Open a new command line window, then add the [required commands and flags](/dev/cli/espresso-xcuitest/real-devices) to your test script:

   ```java title="Required Commands and Flags"
   java -jar saucelabs-native-test-runner.jar xcuitest --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESSKEY --datacenter US --app <path-to-app> --test <path-to-test>
   ```

  ```java title="Basic Example"
  java -jar saucelabs-native-test-runner.jar espresso --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx --datacenter US --app SauceLabs.Mobile.Sample.Espresso.App.apk --test SauceLabs.Mobile.Sample.Espresso.Tests.apk
  ```
Sauce Runner will install the Android app, **SauceLabs.Mobile.Sample.Espresso.App.apk**, on the Google Pixel emulator and then launch the Espresso test suite, **SauceLabs.Mobile.Sample.Espresso.Tests.apk**.

If needed, you can also add optional parameters. See [Sauce Runner for Real Devices CLI Reference](/dev/cli/espresso-xcuitest/real-devices) to view the full list of available parameters. Sauce Runner for Real Devices will execute tests based on the parameters you set.

### Using a YAML Config File

Write your YAML file. See [Sauce Runner YAML Configuration](/dev/cli/espresso-xcuitest/yaml-config) for a list of available parameters.

<Tabs
  defaultValue="Espresso"
  values={[
    {label: 'Espresso', value: 'Espresso'},
    {label: 'XCUITest', value: 'XCUITest'},
  ]}>

<TabItem value="Espresso">

**Espresso YAML File Example**

This YAML file example includes:
* All required parameters for running an Espresso test suite with Sauce Runner for Real Devices, plus the following options:
  * `--devices` option: use this to select devices based on both static and dynamic allocation.
  * `--envs` option: use this to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Java or Kotlin.
* Parallel Test Execution: four separate parallel tests on four different Android devices.
  * The tests within the section will be assigned to that one device and executed in the order specified.
  * For each section starting with the `- datacenter` directive, a new parallel test thread will spin up for the device indicated. If you specify multiple test classes or test methods, each will be executed serially, in the order presented in the section, on the device.

```bash
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

</TabItem>
<TabItem value="XCUITest">

**XCUITest YAML File Example**

This YAML file example includes:
* All required options for running an XCUITest test suite with Sauce Runner for Real Devices:
  * `--devices` option: use this to select devices based on both static and dynamic allocation.
  * `--testsToRun` option: use this to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Swift or Objective-C.
* Parallel Test Execution: four separate, parallel test executions on four different iOS devices.
  * The tests within the section will be assigned to that one device and executed in the order specified.
  * For each section starting with the `- datacenter` directive, a new parallel test thread will spin up for the device indicated. If you specify multiple test classes or test methods, each will be executed serially, in the order presented in the section, on the device.

```bash
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

**More Examples**:

* <details><summary>Minimal configuration for all tests</summary>

  ```yaml reference
  https://github.com/saucelabs-training/demo-espresso/blob/d0ae60e428bb2f864c979285b9cf90ee63c756eb/real-devices/runner-ex1.yml
  ```
  </details>

* <details><summary>Run in parallel on hard-coded devices</summary>

  ```yaml reference
  https://github.com/saucelabs-training/demo-espresso/blob/master/real-devices/runner-ex4.yml
  ```
  </details>

</TabItem>
</Tabs>

Once you're finished writing your YAML file, be sure to save it.

## Run Your Test

6. Open a new command line window, then add and execute the following [required commands and flags](/dev/cli/espresso-xcuitest/real-devices). This will launch the Sauce Runner connection and begin running your test.

Wait for the runner to upload both files and execute the tests on Sauce Labs real devices. Our emulators are capable of running Espresso jobs for up to three hours, however, a one-hour execution time is recommended.

  ```java title="Required Commands and Flags"
  java -jar runner.jar config --path <your YAML file name> --accessKey <your Sauce access key>
  ```

  ```java title="Basic Example"
  java -jar runner.jar config --path My.YAML.File.yml --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  ```

7. Wait for the client to submit the tests. The test runner will automatically upload the apps you've specified. The expected output will be something like this:
  ```bash title="Basic Example Response"
  Finished uploading app file 'binaries/android/sample-android-app.apk' to 'US' data center.
  Uploading test file 'binaries/android/sample-android-test.apk' to 'US' data center...
  Finished uploading test file 'binaries/android/sample-android-test.apk' to 'US' data center.
  Starting test run on US data center...
  ```

  The maximum execution time for a single XCUITest test is one hour. As a best practice, we recommend designing your tests as [small, atomic, autonomous](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365933), and setting maximum execution times in minutes or seconds, so you can get the most efficiency for your builds.

8. Once the test suite has completed, you can view your test results on Sauce Labs under **Automated** > **Test Results** > **Real Devices**. Test results for each device rolled into a single set of artifacts (e.g., videos, logs) and you can download these artifacts via the API.

Go to the [Sauce Labs Training GitHub repository](https://github.com/saucelabs-training/demo-espresso/tree/master/real-devices) to browse more example scripts and Espresso test cases on Sauce Labs Emulators.

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

* [Beyond Appium: Testing Using Espresso and XCUITest (white paper)](https://saucelabs.com/resources/white-papers/beyond-appium-testing-using-espresso-and-xcuitest).

* [Sauce Labs GitHub repository | Espresso for Real Devices](https://github.com/saucelabs-training/demo-espresso/tree/master/real-devices)

* [Sauce Labs GitHub repository | XCUITest for Real Devices](https://github.com/saucelabs-training/demo-xcuitest/tree/master/real-devices)
