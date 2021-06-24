---
id: real-devices
title: Sauce Runner for Real Devices CLI Reference
sidebar_label: Real Devices
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

Sauce Runner for Real Devices provides the ability to run Espresso and XCUITest tests on Android and iOS real devices in the Sauce Labs cloud. This topic describes the required and optional command parameters you can use to set up your test runs.

>**NOTE**: All examples in this page assume knowledge of [Sauce Runner General Usage](/dev/cli/espresso-xcuitest). Please review before proceeding.

## What You'll Need

* Your Sauce Labs account credentials.
* Your mobile app file (both debug and non-debug app) and test file.
* Have the Sauce Runner for Real Devices downloaded and installed to your local machine.
* Prior to using the CLI Reference below, navigate (`cd`) to the specific folder directory on your local machine where you downloaded and placed your Sauce Runner file (i.e., `runner.jar`).

:::tip

You can also view the vUSB CLI directly in the command line terminal by running the `-h` (`--help`) flag.
```java
java -jar runner.jar --help
```
:::

## Required

These commands and flags are required for use with Sauce Runner for Real Devices. They are not compatible for use with Real Device Cloud [YAML file configuration](dev/cli/espresso-xcuitest/yaml-config).

### `espresso` or `xcuitest`
__Description__: defines the test framework you wish to use for your test (choose only one).

<br/>

### `--apikey`
__Description__: specifies the access key for your Sauce Labs account. You can find it under **Account** > **User Settings**.

```js title="Example"
--apikey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```
<br/>

### `--app`

__Description__: specifies the path to the `*.ipa` or `*.apk` file of the app under test, or the ID number of an already uploaded app. In your command line, refer to the location where you have downloaded the `runner.jar` file and run the command from the folder from where you downloaded the runner.

```bash title="Example Folder Structure"
|_{root / your project folder}
  |_runner.jar
  |_ExampleApp.ipa
  |_ExampleApp.Tests.ipa
```

```js title="Example"
--app ExampleApp.ipa
```
<br/>

### `--test`

__Description__: specifies the path to the `*.ipa` or `*.apk` file of the test.

```js title="Example"
--test ExampleApp.Tests.ipa
```
<br/>

### `--datacenter`

__Description__: specifies the Data Center to use in your tests. Possible values: `US` or `EU`.

```js title="Example"
--datacenter US
```
<br/>

#### **Full Example (required flags only)**

<Tabs
  defaultValue="Espresso"
  values={[
    {label: 'Espresso', value: 'Espresso'},
    {label: 'XCUITest', value: 'XCUITest'},
  ]}>

<TabItem value="Espresso">

Full Example (required flags only)

```java
java -jar runner.jar espresso --test ExampleApp.Tests.apk /
--app ExampleApp.apk --apikey 77029389527648BE81600Dxxxxxxxxxx --datacenter US
```

</TabItem>
<TabItem value="XCUITest">

```java
java -jar runner.jar xcuitest --test ExampleApp.Tests.ipa /
--app ExampleApp.ipa --apikey 77029389527648BE81600Dxxxxxxxxxx --datacenter US
```

</TabItem>
</Tabs>
<br/>

## Optional

Here are some additional command line configuration options.

### `--device`

__Description__: specifies the exact device to use in your tests by providing the Device ID. See [Static Device Allocation](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation) for detailed instructions. For ***Static Allocation***.

```java title="Example"
--datacenter US --device iPhone_11_13_5_real_us
```

### `--devices`

__Description__: define a list of devices on which the tests should be executed, using static and/or dynamic allocation, to run tests in parallel. See [Static and Dynamic Device Allocation](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation) for detailed instructions.
  * ***Static Allocation***: specify an exact device by setting  to the Device ID. When using this, there's no need to specify the `platformName` and `platformVersion` because they'll be set by default (i.e., if you include these separately included in your test script, they will be ignored).
  ```java title="Example"
  --datacenter EU --devices iPhone_11_13_5_real_us --testname MyTestName
  ```
  * ***Dynamic Allocation***: specify basic device name parameters using [regular expressions (regex)](https://en.wikipedia.org/wiki/Regular_expression) to dynamically allocate a device.
  ```java title="Example"
  --datacenter EU --devices iPhone.* --testname MyTestName
  ```

As an option, you can combine this with the `--testsToRun` command to run a select set of tests against a specific device. See [`--testsToRun`](#--testsToRun) for examples.

:::caution Default Device Allocation
If you don't specify a `--device`/`--devices` for your test, one will be assigned to your tests based on your AUT (application under test) platform type.
:::

<br/>

### `--testname`

__Description__: sets a custom test name to appear on the UI. Default is `Test`.

```java title="Example"
--datacenter US --device iPhone_11_13_5_real_us --testname MyTestName
```
<br/>

### `--platformVersion`

__Description__: specifies an operating system version to use. For ***Dynamic Allocation***. For example, use `9` to allocate a device running major version 9 and arbitrary versions of the OS; use `9.3.3` for a specific minor version.

```java title="Example"
--platformVersion 9.3.3
```
<br/>

### `--privateDevicesOnly`

__Description__: if set, only private devices will be queried.

```java title="Example"
--datacenter US --privateDevicesOnly true
```
<br/>

### `--phoneOnly`

__Description__: if set, only phones will be queried.

```java title="Example"
--datacenter US --phoneOnly true
```
<br/>

### `--tabletOnly`

__Description__: if set, only tablets will be queried.

```js title="Example"
--datacenter US --tabletOnly true
```
<br/>

### `--deviceNameQuery`

__Description__: find a find by specifying a regular expression (regex) to dynamically allocate a device. It looks for available devices using wildcard names, giving you the ability to run a specified test on a pool of devices that are configured the same but have different names for parallel processing. For ***Dynamic Allocation***; see [Static and Dynamic Device Allocation](https://docs.saucelabs.com/mobile-apps/supported-devices#static-and-dynamic-device-allocation) for detailed instructions.

Allocates any iPhone Plus device:

```js title="Example"
--datacenter US --deviceNameQuery 'iPhone 8.*'
```

Allocates any Samsung Galaxy device:

```js title="Example"
--datacenter US --deviceNameQuery 'Samsung Galaxy.*'
```

Allocates any device with Samsung Galaxy S7 in the name (i.e., Samsung Galaxy S7, Samsung Galaxy S7 Edge):

```js title="Example"
--datacenter US --deviceNameQuery 'Samsung Galaxy 7'
```

<br/>

### `--testsToRun`
<p><small><Highlight color="#333333">iOS Only</Highlight></small></p>

__Description__: specify a comma-separated list of test cases or test classes on which you'd like to run tests.

* If you want to run all tests of a class, provide only the classname.
* If you want to run a specific method of a class, provide the class name and method name separated with a `/` (i.e., `--testsToRun ClassA,ClassB/methodC` runs all tests in `ClassA` and only `methodC` of `ClassB`). This executes all tests in `ClassA` and only `methodC` of `ClassB`:

```js title="Example"
--datacenter EU --testname MyTestName4 --testsToRun ClassA,ClassB/methodC
```
<br/>

### `--e`
<p><small><Highlight color="#946f59">Android/Espresso Only</Highlight></small></p>

__Description__: specify a list of test options to Espresso. The key-value pairs supported by Espresso are documented here: [Android Developers—am instrument options](https://developer.android.com/studio/test/command-line#AMOptionsSyntax).

1. Execute all tests in class `TestClassA`:

  ```js title="Example"
  --e class com.example.android.TestClassA
  ```

2. Execute a specific test in class `TestClassB`:

  ```js title="Example"
  --e class com.example.android.TestClassB#methodName
  ```
<br/>

### `--tunnelIdentifier`

__Description__: specifies the identifier of the tunnel you want to use. This is required if you're using Sauce Connect Proxy. You can find the tunnelIdentifier name on Sauce Labs under **Tunnels**, after you've launched the tunnel.

```java title="Example"
--tunnelIdentifier <your-tunnel-name>
```
<br/>

### `--checkFrequency`

__Description__: specifies the interval in seconds to check test results. Default is `30`.

```java title="Example"
--checkFrequency 15
```
<br/>

### `--timeout`

__Description__: sets your test timeout (unit = minutes). Test duration cannot exceed 60 minutes. Default value is `60`.

```java title="Example"
--timeout 10
```
<br/>

### `--xmlFolder`

__Description__: specifies the folder for the JUnit XML output.

```java title="Example"
--test ./SampleAppUITests-tests.apk --xmlFolder ./tmp
```
<br/>

### `--url`

__Description__: specifies the URL of an alternative REST endpoint to use. See [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints) for further details.

```java title="Example"
--url <rest-endpoint-url>
```
<br/>

### `--useTestOrchestrator`

<p><small><Highlight color="#946f59">Android/Espresso Only</Highlight></small></p>

__Description__: if set, the instrumentation will start with Test Orchestrator version `1.1.1` in use.

In most cases, we recommend adding the `--e clearPackageData true` parameter to remove all shared state from your device's CPU and memory after each test.

```js title="Example"
--e useTestOrchestrator clearPackageData true class com.example.android.TestClassB#methodName
```
<br/>

### `--D`

__Description__: specifies a **direct domain** connection for your proxy server and port, so that Sauce Runner can connect to the internet. If the proxy needs authentication, use the optional parameters `http.proxyUser` and `http.proxyPassword`.

```java title="Example"
-Dhttp.proxyHost=<your proxy server>
-Dhttp.proxyPort=<the port to use>
-Dhttp.proxyUser=<the username to use>
-Dhttp.proxyPassword=<the password to use>
```

## Additional Resources

* [Example Espresso Test Scripts](https://github.com/saucelabs-training/demo-espresso)
* [Example XCUITest Test Scripts](https://github.com/saucelabs-training/demo-xcuitest)
* [Sauce Labs Real Devices FAQ](/mobile-apps/faq)
