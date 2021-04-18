---
id: yaml-config
title: Sauce Runner for Real Devices YAML File Configuration
sidebar_label: YAML Config File
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<p> <Highlight color="#013a70">Real Devices Only</Highlight> </p>    

As an alternative to setting up real device tests using the [Sauce Runner for Real Devices CLI](/dev/cli/espresso-xcuitest/real-devices.md), you can also create a runner YAML configuration file. This topic outlines the YAML-specific parameters needed to set up your Espresso and XCUITest tests.

:::note
All examples in this page assume knowledge of [Sauce Runner General Usage](/dev/cli/espresso-xcuitest.md). Please review before proceeding.
:::

## Required

The below flags are required when writing your YAML file.

### `app`

__Description__: the path to the `*.ipa` or `*.apk` file of the app under test, or the ID number of an already uploaded app. In your command line, refer to the location where you have downloaded the <code>runner.jar</code> file and run the command from the folder from where you downloaded the runner.

__Example__:

```yaml
app: ExampleTestApp.ipa
```

### `test`

__Description__: the path to the `*.ipa` or `*.apk` file of the test.

__Examples__:

```yaml
test: ExampleTestApp-Runner.ipa
```

### `--datacenter`

__Description__: specifies the Data Center to use in your tests. Possible values: `US` or `EU`.

__Example__:

```yaml
- datacenter: US
```

## Device Allocation (Optional)

Here are some additional options you can use to configure your YAML file.

### `device`

__Description__: For static allocation of a device, provide the ID for the type of device to use in your tests, such as `iPhone_5_real`.

To find device ID numbers, go to **Live** > **Mobile-App** > **Choose device** > Search for the device you want to use > **Details** > See ID in device description. For more information, see the examples under `--devices`.

:::caution Default Device Allocation
If you don't specify a `--device`/`--devices` for your test, one is assigned to your tests based on the AUT (application under test) platform type.
:::

__Example__:

```yaml
- datacenter: US
  device: iPhone_11_13_5_real_us
```

**Minimal Configuration**:

Defines a list of devices on which the tests should be executed. Only specify a DC (either `EU` or `US`).

```yaml
devices:
- datacenter: EU
```

**Static Allocation**:

Specify a device descriptor for static allocation, for example `iPhone_8_real_us`.

```yaml
devices:
- datacenter: US
  device: iPhone_8_real_us
```

**Dynamic Allocation**:

Specify a device name or regex for dynamic allocation (e.g.,`iPhone 5`, `iPad.*`).

:::tip Version Specificity
You can set the platform version for a dynamic device query for all devices such as major version `9` or you can specify an arbitrary minor version such as `9.3.3`.
:::

```yaml
devices:
- datacenter: US
  deviceNameQuery: iPhone 5
  platformVersion: 11.4
  # Optional parameters
  phoneOnly: false
  tabletOnly: false
  privateDevicesOnly: false
```

### `devices`

__Description__: the list of devices, allocated dynamically or through static description of the device ID, to use in your tests. With the `--devices` option, you can configure Sauce Runner for Real Devices to run tests in parallel across multiple devices using both static and dynamic allocation. As an option, you can run a select set of tests against a specific device using the `--testsToRun` command.

__Examples__:

```yaml
devices:
- datacenter: US
  device: iPhone_11_13_5_real_us
  device: iPhone_5
```

### `testname`

__Description__: Set a custom test name to appear on the UI. Default is `Test`.

__Examples__:

```yaml
devices:
- datacenter: US
  device: iPhone_11_13_5_real_us
  testname: MyTestName
```

### `tunnelIdentifier`

__Description__: If you are using Sauce Connect Proxy, provide the identifier of the tunnel you want to use.

__Example__:

```yaml
tunnelIdentifier: <your-tunnel-name>
```

### `checkFrequency`

__Description__: Interval in seconds to check test results. Default is `30`.

__Example__:

```yaml
checkFrequency: 15
```

### `timeout`

__Description__: sets your test timeout (unit = minutes). Test duration cannot exceed 60 minutes. Default value is `60`.

__Example__:

```yaml
timeout: 10
```

### `xmlFolder`

__Description__: specifies the folder for the JUnit XML output.

__Example__:

```yaml
xmlFolder: ./tmp
```

### `url`

__Description__: specifies the URL of an alternative REST endpoint to use.

__Example__: For a list of endpoints, see [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068) for further details.

```yaml
url: <rest-endpoint-url>
```

### `platformVersion`

__Description__: specifies an operating system version to use for dynamic allocation of a device. For example, use `9` to allocate a device running major version 9 and arbitrary versions of the OS; use `9.3.3` for a specific minor version.

__Example__:

```yaml
devices:
- datacenter: US
  platformVersion: 9.3.3
```

### `privateDevicesOnly`

__Description__: if set, only private devices will be queried.

__Example__:

```yaml
devices:
- datacenter: US
  privateDevicesOnly: true
```

### `phoneOnly`

__Description__: if set, only phones will be queried.

__Examples__:

```yaml
devices:
- datacenter: US
  phoneOnly: true
```

### `--tabletOnly`

__Description__: if set, only tablets will be queried.

__Example__:

```yaml
devices:
- datacenter: US
  tabletOnly: true
```

### `deviceNameQuery`

__Description__: for dynamic allocation of a device, provide the device name you would like to dynamically allocate. For example, use iPhone.*Plus to allocate any iPhone Plus device.

__Example__: see the examples under `devices`.

```yaml
devices:
- datacenter: US
  deviceNameQuery: iPhone 8.*
```

### `testsToRun`
<p><small><Highlight color="#333333">xcuitest only</Highlight></small></p>

__Description__: specifies the device name you would like to dynamically allocate for dynamic allocation of a device. For example, use iPhone.*Plus to allocate any iPhone Plus device. For more information, see the examples under `--devices`.

__Example__: Execute all tests in `ClassA` and only `methodC` of `ClassB`.

```yaml title="YAML"
- datacenter: EU
  testname: MyTestName4

  testsToRun:
  - testClass: ClassA
  - testClass: ClassB
    testMethod: methodC
```

## Test Run Specification (Optional)

### Run a Subset of Tests

Provide a list of test cases or test classes. If you want to run all tests of a class, provide only the class name. If you want to run a specific method of a class, provide the class name and method name.

```yaml
devices:
- datacenter: EU
  testsToRun:
  - testClass: SampleTestCase
  - testClass: SampleTestCase2
    testMethod: testItWorks
```

## Executing Your YAML File

1. Open a new command line terminal window.
2. Add the `config` command, followed by the `--path <your path to your .yml file>` and `--accessKey <your Sauce access key>` parameters.

```java
java -jar runner.jar config --path ./MyFile.yml --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

>::NOTE**:[Sauce Runner RDC CLI Options](dev/cli/espresso-xcuitest/real-devices) are not compatible here. Once you pass the `config` YAML command to the runner, you can only use the YAML-specific flags, `--path` and `--accessKey`.

This will launch your test. To see your results, go to Sauce Labs > **Automated** > **Test Results** > **Real Devices**.
