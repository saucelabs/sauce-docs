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

This page provides command line references for Sauce Runner, the CLI tool used to run native mobile tests on real and virtual devices.

## Required

These command executing-from-cucumberflags are required for use with the `xcuitest` or `espresso` commands. They are not compatible with the YAML file `config` command.

:::note About the Examples
All Examples in this page assume knowledge of [Sauce Runner General Usage](/dev/cli/espresso-xcuitest#examples). Run these commands from the directory where you downloaded the runner, or the actual location of the `runner.jar` file.
:::

### `apiKey`

__Description__: The API key for your Sauce Labs real device cloud account.

__Example__:

```js title="CLI"
--apikey <apikey>
```

### `app`

__Description__: The path to the `*.ipa` or `*.apk` file of the app under test, or the ID number of an already uploaded app.

__Examples__:

```js title="CLI"
--app ExampleTestApp.ipa
```

```yaml title="YAML"
app: ExampleTestApp.ipa
```

### `test`

__Description__: The path to the `*.ipa` or `*.apk` file of the test.

__Examples__:

```js title="CLI"
--test ExampleTestApp-Runner.ipa
```

```js title="YAML"
test: ExampleTestApp-Runner.ipa
```

### `datacenter`

__Description__: Specify the data center where test execution takes place.

__Examples__:

```js title="CLI"
--datacenter US
```

```yaml title="CLI"
- datacenter: US
```

## Optional

These command flags are optional.

### `device`

__Description__: For static allocation of a device, provide the ID for the type of device to use in your tests, such as `iPhone_5_real`.
To find device ID numbers, go to **Live** > **Mobile-App** > **Choose device**, then search for the device you want to use, then choose **Details** in the device description.

:::caution Default Device Allocation
If you don't specify a `device`/`devices` for your test, one is assigned to your tests based on the AUT (application under test) platform type.
:::

__Example__:

```js title="CLI"
--datacenter US --device iPhone_11_13_5_real_us
```

```yaml title="YAML"
- datacenter: US
  device: iPhone_11_13_5_real_us
```
### `devices`

__Description__: The list of devices, allocated dynamically or through static description of the device ID, to use in your tests. With the `--devices` option, you can configure Sauce Runner for Real Devices to run tests in parallel across multiple devices using both static and dynamic allocation. As an option, you can run a select set of tests against a specific device using the [`--testsToRun`](#teststorun) command.

__Examples__: See the examples under [Configuration Options: `devices`](/dev/cli/espresso-xcuitest/native-yaml-config#device-configuration).

```js title="CLI"
--datacenter US --devices iPhone_11_13_5_real_us,iPhone_5
```

```yaml title="YAML"
devices:
- datacenter: US
  device: iPhone_11_13_5_real_us
  device: iPhone_5
```

### `testname`

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

### `tunnelIdentifier`

__Description__: If you are using Sauce Connect Proxy, provide the identifier of the tunnel you want to use.

__Example__:

```js title="CLI"
--tunnelIdentifier <your-tunnel-name>
```

```yaml title="YAML"
tunnelIdentifier: <your-tunnel-name>
```

### `checkFrequency`

__Description__: Interval in seconds to check test results. Default is `30`.

__Example__:

```js title="CLI"
--checkFrequency 15
```

```yaml title="YAML"
checkFrequency: 15
```

### `timeout`

__Description__: Test timeout in minutes. Test duration cannot exceed 60 minutes. Default is `60`.

__Example__:

```js title="CLI"
--timeout 10
```

```yaml title="YAML"
timeout: 10
```

### `xmlFolder`

__Description__: The folder for the JUnit XML output.

__Example__:

```js title="CLI"
--test ./SampleAppUITests-tests.apk --xmlFolder ./tmp
```

```yaml title="YAML"
xmlFolder: ./tmp
```

### `url`

__Description__: Provide the URL of an alternative REST endpoint to use.

__Example__: For a list of endpoints, see [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068) for further details.

```js title="CLI"
--url <rest-endpoint-url>
```

```yaml title="YAML"
url: <rest-endpoint-url>
```

### `platformVersion`

__Description__: For dynamic allocation of a device, provide an operating system version to use. For example, use 9 to allocate a device running major version `9` and arbitrary versions of the OS, or `9.3.3` for a specific version.

__Example__:

```js title="CLI"
--platformVersion 9.3.3
```

```yaml title="YAML"
devices:
- datacenter: US
  platformVersion: 9.3.3
```

### `privateDevicesOnly`

__Description__: If set, only private devices will be queried.

__Example__:

```js title="CLI"
--datacenter US --privateDevicesOnly true
```

```yaml title="YAML"
devices:
- datacenter: US
  privateDevicesOnly: true
```

### `phoneOnly`

__Description__: If set, only phones will be queried.

__Examples__:

```js title="CLI"
--datacenter US --phoneOnly true
```

```yaml title="YAML"
devices:
- datacenter: US
  phoneOnly: true
```

### `tabletOnly`

__Description__: If set, only tablets will be queried.

__Example__:

```js title="CLI"
--datacenter US --tabletOnly true
```

```yaml title="YAML"
devices:
- datacenter: US
  tabletOnly: true
```

### `deviceNameQuery`

__Description__: For dynamic allocation of a device, provide the device name you would like to dynamically allocate. For example, use iPhone.*Plus to allocate any iPhone Plus device.

__Example__: See the examples under [Configuration Options: `devices`](/dev/cli/espresso-xcuitest/native-yaml-config#devices).

```js title="CLI"
--datacenter US --deviceNameQuery 'iPhone 8.*'
```

```yaml title="YAML"
devices:
- datacenter: US
  deviceNameQuery: iPhone 8.*
```

### `testsToRun`
<p><small><Highlight color="#333333">xcuitest only</Highlight></small></p>

__Description__: For dynamic allocation of a device, provide the device name you would like to dynamically allocate. For example, use iPhone.*Plus to allocate any iPhone Plus device. For more information, see the examples under --devices.

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
### `e`
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

### `useTestOrchestrator`
<p><small><Highlight color="#946f59">espresso only</Highlight></small></p>

__Description__: If set, the instrumentation will start with Test Orchestrator version `1.1.1` in use.

:::note
With Test Orchestrator, in most cases it is recommended to also add the `--e clearPackageData true` parameter to remove all shared state from your device's CPU and memory after each test.
:::

__Example__:

```js title="CLI"
--e useTestOrchestrator clearPackageData true class com.example.android.TestClassB#methodName
```

### `D`

__Description__: Specifies a **direct domain** connection for your proxy server and port, so that Sauce Runner can connect to the internet. If the proxy needs authentication, use the optional parameters: `http.proxyUser` and `http.proxyPassword`.

__Example__:

```js title="CLI"
-Dhttp.proxyHost=<your proxy server>
-Dhttp.proxyPort=<the port to use>
-Dhttp.proxyUser=<the username to use>
-Dhttp.proxyPassword=<the password to use>
```