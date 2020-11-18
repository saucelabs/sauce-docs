---
id: configuration-file
title: Creating a Sauce Runner for Real Devices Configuration File
sidebar_label: Creating Configuration Files
---

In addition to passing configuration options to Sauce Runner for Real Devices through the command line, you can also create a YAML configuration file for your tests. The runner will execute based on the test parameters set in the file.

## General Usage

```js
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar config --path <path to config.yml> --apikey <apikey>
```

## Config Command
When you pass the config command to the runner, you can no longer use the other configuration options available on the command line (e.g., ``- devices``, ``- testname``, etc). The config command only accepts two parameters: ``--path <path to config.yml>`` and ``--apikey <apikey>``.

## Parallel Test Executions
For both examples, the tests can be configured to run in parallel on the Sauce Labs Real Device Cloud.

For each section starting with the - datacenter directive, a new parallel test thread will spin up for the device indicated. If you specify multiple test classes or test methods, each will be executed serially, in the order presented in the section, on the device. The test results for each device are then rolled into a single set of artifacts (e.g., videos, logs) in the UI. These artifacts may be downloaded via the API after the test suite is complete.

If either example were executed, it would result in four separate test executions in parallel on four different devices. The tests within the section will be assigned to that one device and executed in the order specified.

## Example Sauce Runner Configuration File for XCUITest
This snippet includes all the required options for running an XCUITest suite, including the --devices option to select devices based on both static and dynamic allocation, and the --testsToRun option to set a specific set of classes/tests to run on a device. The class(es) specified can be written in Swift or Objective-C.
