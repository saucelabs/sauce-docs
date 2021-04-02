---
id: virtual-devices
title: Sauce Runner Virtual Devices CLI Reference
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

Sauce Runner for Virtual Devices lets you run tests using the native testing frameworks like Espresso with virtual devices in the Sauce Labs testing cloud. This topic describes the required and optional command parameters you can use to set up your test runs.

## Required

These command options are required in order to run native mobile tests with Sauce Runner on virtual devices.

:::note About the Examples
All Examples in this page assume knowledge of [Sauce Runner General Usage](/dev/cli/espresso-xcuitest#examples).
:::

### `test-framework`

__Description__: Specifies the name of the test framework you want to use. At the moment, `espresso` is the only supported option.

__Shorthand__: `-f`

__Example__:

```bash
./sauce-runner-virtual --test-framework=espresso
```

### `user`

__Description__: Your Sauce Labs `username`. You can use the [environment variable `SAUCE_USERNAME`](/basics/best-practices/using-environment-variables) to provide your login information. The command line argument will take precedence over the environment variable.

__Shorthand__: `-u`

__Example__:

```bash
./sauce-runner-virtual --user $SAUCE_USERNAME
```

### `api-key`

__Description__: Your Sauce Labs API key, which you can find under [User Settings](https://app.saucelabs.com/user-settings) in the Sauce Labs interface. You can also use the [environment variable SAUCE_ACCESS_KEY](/basics/best-practices/using-environment-variables) to provide your login information. The command line argument will take precedence over the environment variable.

__Shorthand__: `-k`

__Example__:

```bash
./sauce-runner-virtual --user $SAUCE_USERNAME --api-key $SAUCE_ACCESS_KEY
```

### `app`

__Description__: The local path or publicly accessible URL to the location of the application you want to test.

__Shorthand__: `-a`

__Example__:

```bash
--app='https://the.bestapp.ai/helloworld.apk'
```

### `test-app`

__Description__: The local path or publicly accessible URL to the location of the test package you want to use.

__Shorthand__: `-t`

__Example__:

```bash
--test-app='https://the.bestapp.ai/app-debug-AndroidTest.apk'
```

### `devices`

__Description__: The type of device you want to use with your test. You can specify two or more device arguments to run tests on multiple devices in parallel, and each device will execute the full test suite. You specify the type of device to use by setting the required `deviceName` and `platformVersion` properties.

__Shorthand__: `-d`

__Properties__:

| Property          | Required | Description                                                                                                                                                                                                                                                                    |
|-------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `deviceName`      | Yes      | The name of the device to use. You can use the [Sauce Labs Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/) to look up the Appium `deviceName` for supported devices.                                                                   |
| `platformVersion` | Yes      | The operating system version of the device you want to use. Supported values depend on the device. You can use the [Sauce Labs Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/) to look up the Appium `platformVersion` for the device. |
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

## Optional

### `exclude-tests` and `include-tests`

__Description__: Optional parameters to run a subset of tests. You can provide a test filter to either `exclude` or `include` tests. By default, the full test suite is executed.

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

### `tunnel-identifier`

__Description__: Parameter to specify a [Sauce Connect Proxy tunnel](/secure-connections/sauce-connect) to use with the tests.

__Shorthand__: `-n`

__Example__: 

```bash
--tunnel-identifier=dev_tunnel
```

### `data-center`

__Description__: Specifies a Sauce Labs data center. Options are `us-west-1` and `eu-central-1`.
                .

__Shorthand__: _NA_

__Example__: 

```bash
--data-center eu-central-1
```

### `skip-download-junit-reports`

__Description__: Skips downloading the JUnit reporting files at the end of test suite execution.

__Shorthand__: _NA_

__Example__: 

```bash
--skip-download-junit-reports
```

### `verbose`

__Description__: Sets the verbosity of console output. Valid options as `DEBUG`, `INFO`, `WARN` and `ERROR`.

__Shorthand__: `-v`

__Example__: 

```bash
--verbose
```

### `version`

__Description__: Returns the version information for Sauce Runner. 

__Shorthand__: _NA_

__Example__: 

```bash
--version
```

### `help`

__Description__: Prints this command line reference to the console. 

__Shorthand__: `-h`

__Example__: 

```bash
--help
```