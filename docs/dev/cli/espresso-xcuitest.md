---
id: espresso-xcuitest
title: Sauce Runner CLI Introduction
sidebar_label: General Usage
---

This page describes the general usage for the [Sauce Runner tool](/mobile-apps/automated-testing/espresso-xcuitest), which is required to run Espresso and XCUITest automated mobile app tests on Sauce Labs real and virtual devices.

## What You'll Need

Prerequisites for using Sauce Runner with virtual and real devices:

* Your Sauce Labs account credentials
* Your mobile app file (both debug and non-debug app) and test file
* Have Sauce Runner for Real Devices or Virtual Devices downloaded and installed

## General Usage

* **Required step**: open your command line terminal and navigate to your local directory location where you downloaded Sauce Runner (the `runner.jar` file).
* Note that the command line structure for all Sauce Runner requests is as follows: `<main class> [options] [command] [command options]`

```java
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar  <command> <command options>
```

:::tip

You can also view the Sauce Runner CLI directly in the command line terminal by running the `--help` flag.
```java
java -jar runner.jar --help
```
:::


## Use Cases

* Run tests in parallel across multiple devices
* Run subsets of tests against specific devices
* Set the options as environment variables that can be referenced in your testing scripts
* Pass options as command line parameters, which will take precedence over options set as environment variables
* Create a [runner configuration file](/mobile-apps/automated-testing/espresso-xcuitest/real-devices.md) with the options and commands for running your tests
