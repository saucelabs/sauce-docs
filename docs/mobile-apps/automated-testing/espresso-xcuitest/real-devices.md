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
  * For details on how to build .ipa files for use with Sauce Runner for Real Devices, see [Creating .ipa Files for Appium and XCUITest](/mobile-apps/creating-ipa-files.md).

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
  * **Set Environment Variables (Optional)**: Setting your Sauce Labs `username` and `accessKey` as [environment variables](/basics/environment-variables) provides an extra layer of security for your credentials when you reference them from within your tests.

## Configure Your Test

5. There are two ways to configure your Espresso or XCUITest tests to run on Sauce Runner for Real Devices: use the CLI or create a YAML configuration file.

### Using the CLI

:::tip CLI Reference
See [Sauce Runner for Real Devices CLI Reference](/dev/cli/espresso-xcuitest/real-devices). To view these commands in your CLI, run the `--help` option:
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

Below are some examples of how to write your YAML file. See [Sauce Runner YAML Configuration](/dev/cli/espresso-xcuitest/yaml-config) for a full list of available parameters. This YAML file example includes all required parameters for running Espresso and XCUITest test suite with Sauce Runner for Real Devices, plus the following options:
  * `devices`: use this to specify a group of devices via dynamic allocation (using regex) and/or static allocation (regex plus exact device ID). See [Static and Dynamic Device Allocation](/mobile-apps/supported-devices#static-and-dynamic-device-allocation) for detailed instructions.
  * `testsToRun` (XCUITest only): use this to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Swift or Objective-C.
  * `envs` (Espresso only): use this to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Java or Kotlin.

Both examples show parallel test execution: four separate parallel tests on four different Android/XCUITest devices.
 * The tests within the section will be assigned to that one device and executed in the order specified.
 * For each section starting with the `- datacenter` directive, a new parallel test thread will spin up for the device indicated. If you specify multiple test classes or test methods, each will be executed serially, in the order presented in the section, on the device.

<Tabs
  defaultValue="Espresso"
  values={[
    {label: 'Espresso', value: 'Espresso'},
    {label: 'XCUITest', value: 'XCUITest'},
  ]}>

<TabItem value="Espresso">

Espresso YAML File Example

```yaml reference
https://github.com/saucelabs-training/demo-espresso/blob/d0ae60e428bb2f864c979285b9cf90ee63c756eb/real-devices/runner-ex1.yml#L8-L29
```

**More Examples**:

<details><summary>Parallel execution using dynamic devices</summary>

```yaml reference
https://github.com/saucelabs-training/demo-espresso/blob/e9fd3e9f9c61c36e0fe6374fe280f26f2dbf9d3a/real-devices/runner-ex5.yml#L8-L50
```
</details>

<details><summary>Run in parallel on hard-coded devices</summary>

```yaml reference
https://github.com/saucelabs-training/demo-espresso/blob/e9fd3e9f9c61c36e0fe6374fe280f26f2dbf9d3a/real-devices/runner-ex4.yml#L8-L49
```
</details>

</TabItem>
<TabItem value="XCUITest">

XCUITest YAML File Example

```yaml reference
https://github.com/saucelabs-training/demo-xcuitest/blob/master/real-devices/runner-ex1.yml#L8-L29
```

**More Examples**:

<details><summary>Parallel execution using dynamic devices</summary>

```yaml reference
https://github.com/saucelabs-training/demo-xcuitest/blob/master/real-devices/runner-ex5.yml#L8-L54
```
</details>

<details><summary>Run in parallel on hard-coded devices</summary>

```yaml reference
https://github.com/saucelabs-training/demo-xcuitest/blob/master/real-devices/runner-ex4.yml#L8-L53
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

  The maximum execution time for a single XCUITest test is one hour. As a best practice, we recommend designing your tests as [small, atomic, autonomous](https://community.saucelabs.com/general-delivery-discussion-6/best-practices-use-small-atomic-autonomous-tests-154), and setting maximum execution times in minutes or seconds, so you can get the most efficiency for your builds.

8. Once the test suite has completed, you can view your test results on Sauce Labs under **Automated** > **Test Results** > **Real Devices**. Test results for each device rolled into a single set of artifacts (e.g., videos, logs) and you can download these artifacts via the API.

Go to the [Sauce Labs Training GitHub repository](https://github.com/saucelabs-training/demo-espresso/tree/master/real-devices) to browse more example scripts and Espresso test cases on Sauce Labs Emulators.

## TestObject (Legacy RDC)

:::warning
TestObject, our [Legacy Real Device Platform](https://saucelabs.com/platform/test-object-eol), reaches end-of-life September 1, 2021. Please migrate all of your apps and tests from TestObject to Sauce Labs by August 31, 2021.
:::

## Additional Resources

* [Espresso and XCUITest CLI Reference](dev/cli/espresso-xcuitest.md)
* [Beyond Appium: Testing Using Espresso and XCUITest (white paper)](https://saucelabs.com/resources/white-papers/beyond-appium-testing-using-espresso-and-xcuitest).
* [Sauce Labs GitHub repository | Espresso for Real Devices](https://github.com/saucelabs-training/demo-espresso/tree/master/real-devices)
* [Sauce Labs GitHub repository | XCUITest for Real Devices](https://github.com/saucelabs-training/demo-xcuitest/tree/master/real-devices)
