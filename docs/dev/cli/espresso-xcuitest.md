---
id: espresso-xcuitest
title: Sauce Runner CLI Introduction
sidebar_label: General Usage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes the general usage for the [Sauce Runner tool](/mobile-apps/automated-testing/espresso-xcuitest), which is required to run Espresso and XCUITest automated mobile app tests on Sauce Labs real devices and virtual devices.

The command line structure for all Sauce Runner requests is as follows: `<main class> [options] [command] [command options]`.

**Real Devices CLI Structure**

```java
java -jar runner.jar  <command> <command options>
```

**Virtual Devices CLI Structure**

```java
./sauce-runner-virtual <command> <command options>
```

**Use Cases**

* Run tests in parallel across multiple devices.
* Run subsets of tests against specific devices.
* Set the options as environment variables that can be referenced in your testing scripts.
* Pass options as command line parameters, which will take precedence over options set as environment variables.
* **Real Device testing only**: Create a YAML test runner configuration file as an alternative to using inline commands.
