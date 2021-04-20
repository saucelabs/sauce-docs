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

<p> <Highlight color="#013a70">Real Devices Only</Highlight> </p>   

Sauce Runner for Real Devices provides the ability to run Espresso and XCUITest tests on Android and iOS real devices in the Sauce Labs cloud. This topic describes the required and optional command parameters you can use to set up your test runs.

:::note
All examples in this page assume knowledge of [Sauce Runner General Usage](/dev/cli/espresso-xcuitest). Please review before proceeding.
:::

## Required

These commands and flags are required for use with Sauce Runner for Real Devices. They are not compatible with the YAML file `config` command.

### `espresso` or `xcuitest`
__Description__: defines the test framework you wish to use for your test (choose only one).

### `--apiKey`
__Description__: the access key for your Sauce Labs account. You can find it under **Account** > **User Settings**.

__Example__:

```js
--apikey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

### `--app`

__Description__: the path to the `*.ipa` or `*.apk` file of the app under test, or the ID number of an already uploaded app. In your command line, refer to the location where you have downloaded the `runner.jar` file and run the command from the folder from where you downloaded the runner.

__Example__:

```bash title="Example Folder Structure"
|_{root / your project folder}
  |_runner.jar
  |_ExampleApp.ipa
  |_ExampleApp.Tests.ipa
```

```js
--app ExampleApp.ipa
```

### `--test`

__Description__: the path to the `*.ipa` or `*.apk` file of the test.

__Example__:

```js
--test ExampleApp.Tests.ipa
```

### `--datacenter`

__Description__: specifies the Data Center to use in your tests. Possible values: `US` or `EU`.

__Example__:

```js
--datacenter US
```

**Basic Example (required flags only)**

<Tabs
  defaultValue="Espresso"
  values={[
    {label: 'Espresso', value: 'Espresso'},
    {label: 'XCUITest', value: 'XCUITest'},
  ]}>

<TabItem value="Espresso">

```java
java -jar runner.jar espresso --test ExampleApp.Tests.apk /
--app ExampleApp.apk --apiKey 77029389527648BE81600Dxxxxxxxxxx --datacenter US
```

</TabItem>
<TabItem value="XCUITest">

```java
java -jar runner.jar xcuitest --test ExampleApp.Tests.ipa /
--app ExampleApp.ipa --apiKey 77029389527648BE81600Dxxxxxxxxxx --datacenter US
```

</TabItem>
</Tabs>


## Optional

Here are some additional configuration options you can use on your command line.

### `--device`

__Description__: For static allocation of a device, provide the ID for the type of device to use in your tests, such as `iPhone_5_real`.
To find device ID numbers, go to **Live** > **Mobile-App** > **Choose device** > Search for the device you want to use > **Details** > See ID in device description.

:::caution Default Device Allocation
If you don't specify a `--device`/`--devices` for your test, one is assigned to your tests based on the AUT (application under test) platform type.
:::

__Example__:

```java
--datacenter US --device iPhone_11_13_5_real_us
```

### `--devices`

__Description__: allows you to provide a list of multiple devices to use in your tests. With this option, you can configure Sauce Runner for Real Devices to run tests in parallel across multiple devices using both static allocation (by providing the device ID#) and dynamic allocation. As an option, you can run a select set of tests against a specific device using the [`--testsToRun`](#teststorun) command.

__Example__:

```java
--datacenter US --devices iPhone_11_13_5_real_us,iPhone_5
```

### `--testname`

__Description__: Set a custom test name to appear on the UI. Default is `Test`.

__Example__:

```java
--datacenter US --device iPhone_11_13_5_real_us --testname MyTestName
```

### `--tunnelIdentifier`

__Description__: If you're using Sauce Connect Proxy, this allows you to provide the identifier of the tunnel you want to use. You can find the tunnelIdentifier name on Sauce Labs under **Tunnels**, after you've launched the tunnel.

__Example__:

```java
--tunnelIdentifier <your-tunnel-name>
```

### `--checkFrequency`

__Description__: Interval in seconds to check test results. Default is `30`.

__Example__:

```java
--checkFrequency 15
```

### `--timeout`

__Description__: sets your test timeout (unit = minutes). Test duration cannot exceed 60 minutes. Default value is `60`.

__Example__:

```java
--timeout 10
```

### `--xmlFolder`

__Description__: specifies the folder for the JUnit XML output.

__Example__:

```java
--test ./SampleAppUITests-tests.apk --xmlFolder ./tmp
```

### `--url`

__Description__: specifies the URL of an alternative REST endpoint to use.

__Example__: For a list of endpoints, see [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068) for further details.

```java
--url <rest-endpoint-url>
```

### `--platformVersion`

__Description__: specifies an operating system version to use for dynamic allocation of a device. For example, use `9` to allocate a device running major version 9 and arbitrary versions of the OS; use `9.3.3` for a specific minor version.

__Example__:

```java
--platformVersion 9.3.3
```

### `--privateDevicesOnly`

__Description__: if set, only private devices will be queried.

__Example__:

```java
--datacenter US --privateDevicesOnly true
```

### `--phoneOnly`

__Description__: if set, only phones will be queried.

__Example__:

```java
--datacenter US --phoneOnly true
```

### `--tabletOnly`

__Description__: if set, only tablets will be queried.

__Example__:

```js
--datacenter US --tabletOnly true
```

### `--deviceNameQuery`

__Description__: allows you to provide the general device name you would like to use for dynamic allocation. For example, `iPhone.*Plus` would allocate any iPhone Plus device.

__Example__:

```js
--datacenter US --deviceNameQuery 'iPhone 8.*'
```

### `--testsToRun`
<p><small><Highlight color="#333333">XCUITest Only</Highlight></small></p>

__Description__: specifies the device name you would like to dynamically allocate for dynamic allocation of a device. For example, use iPhone.*Plus to allocate any iPhone Plus device.

__Example__: Execute all tests in `ClassA` and only `methodC` of `ClassB`.

```js
--datacenter EU --testname MyTestName4 --testsToRun ClassA,ClassB/methodC
```

### `--e`
<p><small><Highlight color="#946f59">Espresso Only</Highlight></small></p>

__Description__: Provide a list of test options to Espresso. The key-value pairs supported by Espresso are documented here: [Android Developers—am instrument options](https://developer.android.com/studio/test/command-line#AMOptionsSyntax).

__Examples__:

1. Execute all tests in class `TestClassA`:

  ```js
  --e class com.example.android.TestClassA
  ```

2. Execute a specific test in class `TestClassB`:

  ```js
  --e class com.example.android.TestClassB#methodName
  ```

### `--useTestOrchestrator`

<p><small><Highlight color="#946f59">Espresso Only</Highlight></small></p>

__Description__: If set, the instrumentation will start with Test Orchestrator version `1.1.1` in use.

In most cases, we recommend adding the `--e clearPackageData true` parameter to remove all shared state from your device's CPU and memory after each test.
:::

__Example__:

```js
--e useTestOrchestrator clearPackageData true class com.example.android.TestClassB#methodName
```

### `--D`

__Description__: Specifies a **direct domain** connection for your proxy server and port, so that Sauce Runner can connect to the internet. If the proxy needs authentication, use the optional parameters: `http.proxyUser` and `http.proxyPassword`.

__Example__:

```java
-Dhttp.proxyHost=<your proxy server>
-Dhttp.proxyPort=<the port to use>
-Dhttp.proxyUser=<the username to use>
-Dhttp.proxyPassword=<the password to use>
```
