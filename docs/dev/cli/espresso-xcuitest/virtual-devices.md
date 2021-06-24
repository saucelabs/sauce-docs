---
id: virtual-devices
title: Sauce Runner for Virtual Devices CLI Reference
sidebar_label: Virtual Devices
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

:::warning Now Available on saucectl
**Espresso testing for virtual devices is now supported on `saucectl`, our CLI tool used with Testrunner Toolkit. For details, see:**

* **[About `saucectl`](/testrunner-toolkit)**
* **[`saucectl` Installation](/testrunner-toolkit/installation)**
* **[`saucectl` CLI Reference](/testrunner-toolkit/saucectl)**
:::

<br/>
<br/>
<br/>

Sauce Runner for Virtual Devices provides the ability to run Espresso tests on Android emulators in the Sauce Labs cloud. This topic describes the required and optional command parameters you can use to set up your test runs.

>**NOTE**: All code examples in this page assume knowledge of [Sauce Runner General Usage](/dev/cli/espresso-xcuitest). Please review before proceeding.

## What You'll Need

* Your Sauce Labs account credentials.
* Your mobile app file (both debug and non-debug app) and test file.
* Have the Sauce Runner for Real Devices or Sauce Runner for Virtual Devices downloaded and installed to your local machine.
* Prior to using the CLI Reference below, navigate (`cd`) to the specific folder directory on your local machine where you downloaded and placed your Sauce Runner file (i.e., `sauce-runner-virtual`).

:::tip

You can also view the vUSB CLI directly in the command line terminal by running the `-h` (`--help`) flag.
```java
./sauce-runner-virtual --help
```
:::

## Required

These command flags are required in order to run native mobile tests with Sauce Runner on virtual devices.

### `--test-framework`

__Description__: Specifies the name of the test framework you want to use. At the moment, `espresso` is the only supported option and value.

__Shorthand__: `-f`

__Example__:

```java
./sauce-runner-virtual --test-framework=espresso
```

### `--user`

__Description__: Your Sauce Labs `username`. You can use the [environment variable `SAUCE_USERNAME`](/basics/environment-variables to provide your login information. The command line argument will take precedence over the environment variable.

__Shorthand__: `-u`

__Example__:

```bash
./sauce-runner-virtual --user $SAUCE_USERNAME
```

### `--api-key`

__Description__: Your Sauce Labs Access Key, which you can find under [User Settings](https://app.saucelabs.com/user-settings) in the Sauce Labs interface. You can also use the [environment variable SAUCE_ACCESS_KEY](/basics/environment-variables) to provide your login information. The command line argument will take precedence over the environment variable.

__Shorthand__: `-k`

__Example__:

```bash
./sauce-runner-virtual --user $SAUCE_USERNAME --api-key $SAUCE_ACCESS_KEY
```

### `--app`

__Description__: The local path or publicly accessible URL to the location of the application you want to test.

__Shorthand__: `-a`

__Example__:

```bash
--app='https://the.bestapp.ai/helloworld.apk'
```

### `--test-app`

__Description__: The local path or publicly accessible URL to the location of the test package you want to use.

__Shorthand__: `-t`

__Example__:

```bash
--test-app='https://the.bestapp.ai/app-debug-AndroidTest.apk'
```

### `--devices`

__Description__: The type of device you want to use with your test. You can specify two or more device arguments to run tests on multiple devices in parallel, and each device will execute the full test suite. You specify the type of device to use by setting the required `deviceName` and `platformVersion` properties.

__Shorthand__: `-d`

__Properties__:

| Property          | Required | Description                                                                                                                                                                                                                                                                    |
|-------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `deviceName`      | Yes      | The name of the device to use. You can use the [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to look up the Appium `deviceName` for supported devices.                                                                   |
| `platformVersion` | Yes      | The operating system version of the device you want to use. Supported values depend on the device. You can use the [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to look up the Appium `platformVersion` for the device. |
| `locale`          | No       | Location of the device.                                                                                                                                                                                                                                                        |
| `orientation`     | No       | Orientation of the device. Supported values are: <ul> <li>`portrait`(default)</li> <li>`landscape`</li> </ul>                                                                                                                                                                  |

__Examples__:

```bash title="Test on one Device"
-d 'deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.0'
```

```bash title="Test on two Devices"
--devices='deviceName=LG Nexus 4 GoogleAPI Emulator,platformVersion=4.4' \
--devices='deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.0'
```
<br/>

### Full Example

**Basic Setup (minimum required options only)**

```bash reference
https://github.com/saucelabs-training/demo-espresso/blob/master/emulators/runner-ex1.sh#L6-L13
```

:::tip
Go to our [GitHub repository](https://github.com/saucelabs-training/demo-espresso/tree/master/emulators) for example scripts, plus demo apps and tests.
:::

## Optional

These flags provide additional configuration options.

### `--exclude-tests`
### `--include-tests`

__Description__: Optional parameters to run a subset of tests. You can provide a test filter to either exclude or include tests. By default, the full test suite is executed.

__Shorthand__: `-e` | `-i`

__Filters__:

| Filter                                | Description                                                                                                                  |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `class com.example.MyClass#testLogin` | Filter one test method                                                                                                       |
| `com.example.MyClass#testOrder`       | Filter two test methods                                                                                                      |
| `class com.example.MyClass`           | Filter a test class                                                                                                          |
| `package com.example.testPackage`     | Filter a package                                                                                                             |
| `size` `small`\|`medium`\|`large`     | Filter by size. Tests should be annotated with `SmallTest`, `MediumTest`, or `LargeTest`. Cannot be used to `exclude-tests`. |
| `annotation com.example.MyAnnotation` | Filter by test annotation                                                                                                    |

__Examples__:

```bash title="Run only one test method"
--include-tests='class com.example.MyClass#testLogin'
```

```bash title="Run all but one test class"
--exclude-tests='class com.example.MyClass'
```

```bash  title="Run only the large tests"
--include-tests='size large'
```

<br/>

### `--tunnel-identifier`

__Description__: specify a [Sauce Connect Proxy tunnel](/secure-connections/sauce-connect) to use with the tests.

__Shorthand__: `-n`

__Example__:

```java
--tunnel-identifier=dev_tunnel
```

### `--data-center`

__Description__: specify a Sauce Labs Data Center. Possible values are `us-west-1` and `eu-central-1`.

__Shorthand__: n/a

__Example__:

```bash
--data-center eu-central-1
```

### `--skip-download-junit-reports`

__Description__: skips downloading the JUnit reporting files at the end of test suite execution.

__Shorthand__: n/a

__Example__:

```bash
--skip-download-junit-reports
```

### `--verbose`

__Description__: sets the verbosity of console output. Valid options as `DEBUG`, `INFO`, `WARN` and `ERROR`.

__Shorthand__: `-v`

__Example__:

```bash
--verbose
```

### `--version`

__Description__: Returns the version information for Sauce Runner.

__Shorthand__: n/a

__Example__:

```java
./sauce-runner-virtual --version
```

### `--help`

__Description__: Prints this command line reference to the console.

__Shorthand__: `-h`

__Example__:

```java
./sauce-runner-virtual --help
```
