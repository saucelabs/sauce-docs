---
id: real-devices
title: Sauce Runner Real Devices CLI Reference
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

:::note
All examples in this page assume knowledge of [Sauce Runner General Usage](/dev/cli/espresso-xcuitest). Please review before proceeding.
:::

## Required

These commands and flags are required for use with Sauce Runner for Real Devices. They are not compatible with the YAML file `config` command.

### `espresso` or `xcuitest`
__Description__: defines the test framework you wish to use for your test (choose only one).

### `--accessKey`
__Description__: the access key for your Sauce Labs account. You can find it under **Account** > **User Settings**.

__Example__:

```js title="CLI"
--apikey 77029389527648BE81600Dxxxxxxxxxx
```

### `--app`

__Description__: the path to the `*.ipa` or `*.apk` file of the app under test, or the ID number of an already uploaded app. In your command line, refer to the location where you have downloaded the <code>runner.jar</code> file and run the command from the folder from where you downloaded the runner.

__Examples__:

```js title="CLI"
--app ExampleTestApp.ipa
```

```yaml title="YAML"
app: ExampleTestApp.ipa
```

### `--test`

__Description__: the path to the `*.ipa` or `*.apk` file of the test.

__Examples__:

```js title="CLI"
--test ExampleTestApp-Runner.ipa
```

```yaml title="YAML"
test: ExampleTestApp-Runner.ipa
```

### `--datacenter`

__Description__: specifies the Data Center to use in your tests. Possible values: `US` or `EU`.

__Examples__:

```js title="CLI"
--datacenter US
```

```yaml title="YAML"
- datacenter: US
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
java -jar runner.jar espresso --test DummyTestingApp-Runner.apk /
--app DummyTestingApp.apk --apiKey 77029389527648BE81600Dxxxxxxxxxx --datacenter US
```

</TabItem>
<TabItem value="XCUITest">

```java
java -jar runner.jar xcuitest --test DummyTestingApp-Runner.ipa /
--app DummyTestingApp.ipa --apiKey 77029389527648BE81600Dxxxxxxxxxx --datacenter US
```

</TabItem>
</Tabs>


## Optional

These command flags are optional.

### `--device`

__Description__: For static allocation of a device, provide the ID for the type of device to use in your tests, such as `iPhone_5_real`.
To find device ID numbers, go to **Live** > **Mobile-App** > **Choose device** > Search for the device you want to use > **Details** > See ID in device description. For more information, see the examples under `--devices`.

:::caution Default Device Allocation
If you don't specify a `--device`/`--devices` for your test, one is assigned to your tests based on the AUT (application under test) platform type.
:::

__Example__:

```js title="CLI"
--datacenter US --device iPhone_11_13_5_real_us
```

```yaml title="YAML"
- datacenter: US
  device: iPhone_11_13_5_real_us
```

### `--devices`

__Description__: the list of devices, allocated dynamically or through static description of the device ID, to use in your tests. With the `--devices` option, you can configure Sauce Runner for Real Devices to run tests in parallel across multiple devices using both static and dynamic allocation. As an option, you can run a select set of tests against a specific device using the [`--testsToRun`](#teststorun) command.

__Examples__: See examples under [Configuration Options: `devices`](/dev/cli/espresso-xcuitest/yaml-config#device-configuration).

```js title="CLI"
--datacenter US --devices iPhone_11_13_5_real_us,iPhone_5
```

```yaml title="YAML"
devices:
- datacenter: US
  device: iPhone_11_13_5_real_us
  device: iPhone_5
```

### `--testname`

__Description__: Set a custom test name to appear on the UI. Default is `Test`.

__Examples__:

```js title="CLI"
--datacenter US --device iPhone_11_13_5_real_us --testname MyTestName
```

```yaml title="YAML"
devices:
- datacenter: US
  device: iPhone_11_13_5_real_us
  testname: MyTestName
```

### `--tunnelIdentifier`

__Description__: If you are using Sauce Connect Proxy, provide the identifier of the tunnel you want to use.

__Example__:

```js title="CLI"
--tunnelIdentifier <your-tunnel-name>
```

```yaml title="YAML"
tunnelIdentifier: <your-tunnel-name>
```

### `--checkFrequency`

__Description__: Interval in seconds to check test results. Default is `30`.

__Example__:

```js title="CLI"
--checkFrequency 15
```

```yaml title="YAML"
checkFrequency: 15
```

### `--timeout`

__Description__: sets your test timeout (unit = minutes). Test duration cannot exceed 60 minutes. Default value is `60`.

__Example__:

```js title="CLI"
--timeout 10
```

```yaml title="YAML"
timeout: 10
```

### `--xmlFolder`

__Description__: specifies the folder for the JUnit XML output.

__Example__:

```js title="CLI"
--test ./SampleAppUITests-tests.apk --xmlFolder ./tmp
```

```yaml title="YAML"
xmlFolder: ./tmp
```

### `--url`

__Description__: specifies the URL of an alternative REST endpoint to use.

__Example__: For a list of endpoints, see [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068) for further details.

```js title="CLI"
--url <rest-endpoint-url>
```

```yaml title="YAML"
url: <rest-endpoint-url>
```

### `--platformVersion`

__Description__: specifies an operating system version to use for dynamic allocation of a device. For example, use `9` to allocate a device running major version 9 and arbitrary versions of the OS; use `9.3.3` for a specific minor version.

__Example__:

```js title="CLI"
--platformVersion 9.3.3
```

```yaml title="YAML"
devices:
- datacenter: US
  platformVersion: 9.3.3
```

### `--privateDevicesOnly`

__Description__: if set, only private devices will be queried.

__Example__:

```js title="CLI"
--datacenter US --privateDevicesOnly true
```

```yaml title="YAML"
devices:
- datacenter: US
  privateDevicesOnly: true
```

### `--phoneOnly`

__Description__: if set, only phones will be queried.

__Examples__:

```js title="CLI"
--datacenter US --phoneOnly true
```

```yaml title="YAML"
devices:
- datacenter: US
  phoneOnly: true
```

### `--tabletOnly`

__Description__: if set, only tablets will be queried.

__Example__:

```js title="CLI"
--datacenter US --tabletOnly true
```

```yaml title="YAML"
devices:
- datacenter: US
  tabletOnly: true
```

### `--deviceNameQuery`

__Description__: for dynamic allocation of a device, provide the device name you would like to dynamically allocate. For example, use iPhone.*Plus to allocate any iPhone Plus device.

__Example__: see the examples under [Configuration Options: `devices`](/dev/cli/espresso-xcuitest/yaml-config#devices).

```js title="CLI"
--datacenter US --deviceNameQuery 'iPhone 8.*'
```

```yaml title="YAML"
devices:
- datacenter: US
  deviceNameQuery: iPhone 8.*
```

### `--testsToRun`
<p><small><Highlight color="#333333">xcuitest only</Highlight></small></p>

__Description__: specifies the device name you would like to dynamically allocate for dynamic allocation of a device. For example, use iPhone.*Plus to allocate any iPhone Plus device. For more information, see the examples under `--devices`.

__Example__: Execute all tests in `ClassA` and only `methodC` of `ClassB`.

```js title="CLI"
--datacenter EU --testname MyTestName4 --testsToRun ClassA,ClassB/methodC
```

```yaml title="YAML"
- datacenter: EU
  testname: MyTestName4

  testsToRun:
  - testClass: ClassA
  - testClass: ClassB
    testMethod: methodC
```

### `--e`
<p><small><Highlight color="#946f59">espresso only</Highlight></small></p>

__Description__: Provide a list of test options to Espresso. The key-value pairs supported by Espresso are documented here: [Android Developers—am instrument options](https://developer.android.com/studio/test/command-line#AMOptionsSyntax).

__Examples__:

1. Execute all tests in class `TestClassA`:

  ```js title="CLI"
  --e class com.example.android.TestClassA
  ```

2. Execute a specific test in class `TestClassB`:

  ```js title-"CLI"
  --e class com.example.android.TestClassB#methodName
  ```

### `--useTestOrchestrator`
<p><small><Highlight color="#946f59">espresso only</Highlight></small></p>

__Description__: If set, the instrumentation will start with Test Orchestrator version `1.1.1` in use.

:::note
With Test Orchestrator, in most cases it is recommended to also add the `--e clearPackageData true` parameter to remove all shared state from your device's CPU and memory after each test.
:::

__Example__:

```js title="CLI"
--e useTestOrchestrator clearPackageData true class com.example.android.TestClassB#methodName
```

### `--D`

__Description__: Specifies a **direct domain** connection for your proxy server and port, so that Sauce Runner can connect to the internet. If the proxy needs authentication, use the optional parameters: `http.proxyUser` and `http.proxyPassword`.

__Example__:

```js title="CLI"
-Dhttp.proxyHost=<your proxy server>
-Dhttp.proxyPort=<the port to use>
-Dhttp.proxyUser=<the username to use>
-Dhttp.proxyPassword=<the password to use>
```
