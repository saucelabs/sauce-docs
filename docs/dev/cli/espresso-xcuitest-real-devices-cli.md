---
id: espresso-xcuitest-real-devices-cli
title: Espresso and XCUITest Commands for Real Devices
sidebar_label: Espresso and XCUITest for RDC
---

:::warning Only Available in TestObject

At the moment, the Sauce Runner is only available for our Legacy Real Device Cloud Platform, therefore all topics in this page do not apply to automated testing with Real Devices in Sauce Labs. Check the [Real Device Testing in Sauce Labs Feature Preview](https://sauce-docs.com) for updates on when the Sauce Runner will be available.
:::

To run automated tests using the Espresso and XCUITest frameworks, you'll need to download Sauce Runner for Real Devices. See [/mobile-apps/real-devices-espresso-xcuitest] for more information.

This topic describes the options you can use with the runner. You can run tests in parallel across multiple devices and run subsets of tests against specific devices. You can set the options as environment variables that can be referenced in your testing scripts, or pass them as command line parameters, which will take precedence over options set as environment variables. You can also create a [runner configuration file](https://wiki.saucelabs.com/pages/viewpage.action?pageId=72748118) with the options and commands for running your tests.

## What You'll Need
* Your [Sauce Labs Account](https://app.saucelabs.com) credentials
* Your native mobile app (both debug and non-debug app)
* Have [Sauce Runner for Real Devices downloaded and installed](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414342)

## General Usage

```js
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar  <command> <command options>
```

## Sauce Runner for Real Devices Commands

### Getting Started

| Command | Description |
| :-------------------------- | :--- |
| `xcuitest` | Defines `xcuitest` as the test framework to use for your native iOS tests.
| `espresso` | Defines `espresso` as the test framework to use for your native Android tests.
| `config` | Defines a configuration YAML file where the runner executes based on the parameters set in the file. **Please note**: if you decide to use the config command, you can no longer use any of the command options below. For more information, see [Creating a Sauce Runner for Real Devices Configuration File](https://wiki.saucelabs.com/pages/viewpage.action?pageId=72748118).

### Required

#### `--apikey`
The API key for your Sauce Labs real device cloud account.

#### `--app`
The path to the *.ipa or *.apk file of the application under test or the id number of an already uploaded app.

#### `--test`
The path to the *.ipa or *.apk file of the test or the id number of an already uploaded test.

#### `--datacenter`
The data center, either in the US or EU, to use in your tests. If you don't specify a device or devices for your test, one will be assigned to your tests based on the type of application you're testing against.
Values: EU or US

### Optional

#### `--device`
For static allocation of a device, provide the ID for the type of device to use in your tests, such as `iPhone_5_real`. You can find the IDs for devices on the **Live** testing page in the Sauce Labs web interface. Under the **Real Devices** tab, search for the type of device you want to use, and then click the **Details** link in the device description to see the device ID.

#### `--devices`
The list of devices, allocated dynamically or through static description of the device ID, to use in your tests.

With the `--devices` option, you can configure Sauce Runner for Real Devices to run tests in parallel across multiple devices using both static and dynamic allocation. Below are some examples of the various configuration options. As an option, you can run a select set of tests against a specific device using the `--testsToRun` command.

```sh
# Define a list of devices on which the tests should be executed.
devices:

# Device 1 example: minimal configuration.
# Only specify a DC (either EU or US).
- datacenter: EU

# Device 2 example: Static Allocation.
- datacenter: US
  # Specify a device descriptor for static allocation f.ex. iPhone_8_real_us.
  device: iPhone_8_real_us

# Device 3 example: Dynamic Allocation.
- datacenter: US
  # Specify a device name or regex for dynamic allocation: 'iPhone 5', 'iPad.*', etc.
  deviceNameQuery: iPhone 5
  # Platform Version for a dynamic device query. f.ex '9' for all Devices
  # with major version 9 and arbitrary minor versions or '9.3.3' for a more
  # specific version.
  platformVersion: 11.4
  # Optional parameters, set to true to enable.
  # phoneOnly: false
  # tabletOnly: false
  # privateDevicesOnly: false

# Device 4 example: Running subset of tests.
  # Data center to run tests in (either EU or US).
- datacenter: EU
  # Provide a list of test cases or test classes. If you want to run all tests
  # of a class provide only the class name and if you want to run a specific
  # method of a class provide the class name and method name.
  testsToRun:
  - testClass: SampleTestCase
  - testClass: SampleTestCase2
    testMethod: testItWorks

```

#### `--testname`
Set a custom test name to appear on the UI, Default is Test.

#### `--tunnelIdentifier`
If you are using Sauce Connect Proxy, provide the identifier of the tunnel you want to use.

#### `--checkFrequency`
Interval in seconds to check test results. Default is `30`.

#### `--timeout`
Test timeout in minutes.  Test duration cannot exceed 60 minutes. Defaults to 60.

#### `--xmlFolder`
The folder for the JUnit XML output.

#### `--url`
Provide the URL of an alternative REST endpoint to use. Default is https://app.testobject.com/api/rest.

#### `--platformVersion`
For dynamic allocation of a device, provide an operating system version to use. For example, use '9' to allocate a device running major version 9 and arbitrary versions of the OS, or '9.3.3' for a specific version.

#### `--privateDevicesOnly`
If set, only private devices will be queried.

#### `--phoneOnly`
If set, only phones will be queried.

#### `--tabletOnly`
If set, only tablets will be queried.

#### `--deviceNameQuery`
For dynamic allocation of a device, provide the device name you would like to dynamically allocate. For example, use `iPhone.*Plus` to allocate any iPhone Plus device.

#### `--testsToRun`

>**XCUITest Only**

Provide a comma separated list of test cases or test classes. If you want to run all tests of a class provide only the classname and if you want to run a specific method of a class provide the class name and method name separated with a '/' (e.g. '--testsToRun ClassA,ClassB/methodC' runs all tests in 'ClassA' and only 'methodC' of 'ClassB')

Example:
```sh
--testsToRun ClassA,ClassB/methodC
```

#### `--useTestOrchestrator`
>**Espresso Only**

If set, the instrumentation will start with Test Orchestrator version 1.1.1 in use. Supported on runner version 1.7 and newer.
Note that with Test Orchestrator it is in most cases recommended to also add the `--e clearPackageData true` parameter To remove all shared state from your device's CPU and memory after each test.

#### `--e`
>**Espresso Only**

Provide a list of test options to Espresso. The key-value pairs supported by espresso are documented here: https://developer.android.com/studio/test/command-line#AMOptionsSyntax. In the example, the test would execute all test methods defined in the class com.example.android.TestClassA and the test method methodName defined in com.example.android.TestClassB.

Example: Execute all tests in class TestClassA
```sh
--e class com.example.android.TestClassA
```

Example: Execute a specific test in class TestClassB
```sh
--e class com.example.android.TestClassB#methodName
```


## Command Line Interface Examples
The examples below contain all required parameters and have the Data Center option set to US.

### XCUITest

```sh
java -jar runner.jar xcuitest --test DummyTestingApp-Runner.ipa --app DummyTestingApp.ipa --apikey <apikey> --datacenter US
```

### Espresso

```sh
java -jar runner.jar espresso --test DummyTestingApp-Runner.apk --app DummyTestingApp.apk --apikey <apikey> --datacenter US
```

## Using Sauce Runner with a Proxy

If you need Sauce Runner to connect to the internet through a proxy server, use the `-D` command to specify a direct domain connection to your proxy server and port. The parameters `http.proxyUser` and `http.proxyPassword` are optional and they can be used if the proxy needs authentication:

```js
java -Dhttp.proxyHost=<your proxy server> -Dhttp.proxyPort=<the port to use> -Dhttp.proxyUser=<the username to use> -Dhttp.proxyPassword=<the password to use>
```
