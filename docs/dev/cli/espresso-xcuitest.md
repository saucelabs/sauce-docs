---
id: espresso-xcuitest
title: Sauce Runner CLI Introduction
sidebar_label: General Usage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes the general usage for the [Sauce Runner tool](/mobile-apps/automated-testing/espresso-xcuitest), which is required to run Espresso and XCUITest automated mobile app tests on Sauce Labs real devices and virtual devices.

## CLI Structure

The command line structure for all Sauce Runner requests is as follows: `<main class> [options] [command] [command options]`.

<Tabs
  defaultValue="Real Devices"
  values={[
    {label: 'Real Devices', value: 'Real Devices'},
    {label: 'Virtual Devices', value: 'Virtual Devices'},
  ]}>

<TabItem value="Real Devices">

```java
java -jar runner.jar  <command> <command options>
```

</TabItem>
<TabItem value="Virtual Devices">

```java
./sauce-runner-virtual <command> <command options>
```

</TabItem>
</Tabs>

## Use Cases

* Run tests in parallel across multiple devices.
* Run subsets of tests against specific devices.
* Set the options as environment variables that can be referenced in your testing scripts.
* Pass options as command line parameters, which will take precedence over options set as environment variables.
* **Real Devices only**: Create a [YAML runner configuration file](dev/cli/espresso-xcuitest/yaml-config) with the commands and options for running your real device tests, as an alternative to configuring using the [CLI](dev/cli/espresso-xcuitest/real-devices).
