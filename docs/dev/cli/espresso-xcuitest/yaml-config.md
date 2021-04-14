---
id: yaml-config
title: Sauce Runner YAML Configuration
sidebar_label: YAML Configuration
---

This page outlines some examples of how to set up your Espresso/XCUITest YAML configuration as an alternative to using the [Sauce Runner CLI tool](/dev/cli/espresso-xcuitest).

## Configuration Setup

1. Add the `config` command to your test script.
2. The `config` command only accepts two parameters: `--path <your path to config.yml>` and `--accessKey <your_accessKey>`.

```java
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar config /
--path <path to config.yml> --apikey <apikey>
```

:::info
CLI options are not compatible with YAML config files. Once you pass the `config` YAML command to the runner, it will prohibit you from using all command line configuration options except `--path` and `--accessKey`.
:::

## Device Allocation

### Minimal Configuration

Defines a list of devices on which the tests should be executed. Only specify a DC (either `EU` or `US`).

```yaml
devices:
- datacenter: EU
```

### Static Allocation

Specify a device descriptor for static allocation, for example `iPhone_8_real_us`.

```yaml
devices:
- datacenter: US
  device: iPhone_8_real_us
```


### Dynamic Allocation

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

## Test Run Specification

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
