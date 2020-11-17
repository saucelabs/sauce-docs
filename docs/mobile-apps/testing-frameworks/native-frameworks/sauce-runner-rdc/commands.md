---
id: commands
title: Command Reference for Sauce Runner for Real Devices
sidebar_label: Commands
---

<span style="color:red"> ***-------------------*** </span>
##### <span style="color:red">**Only Available in TestObject**</span>

At the moment, the Sauce Runner is only available for our Legacy Real Device Cloud Platform, check the [Real Device Testing in Sauce Labs Feature Preview](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721844) for updates on when the Sauce Runner will be available.

<span style="color:red"> ***-------------------*** </span>

With Sauce Runner for Real Devices, you can run tests using the Espresso and XCUITest frameworks, run tests in parallel across multiple devices, and run subsets of tests against specific devices. This topic describes the options you can use with the runner. You can set the options as environment variables that can be referenced in your testing scripts, or pass them as command line parameters, which will take precedence over options set as environment variables. You can also create a [runner configuration file](https://wiki.saucelabs.com/pages/viewpage.action?pageId=72748118) with the options and commands for running your tests.

## What You'll Need
* A [Sauce Labs Account](https://app.saucelabs.com) and access to your account credentials
* A Native app (both debug and non-debug app)
* [Sauce Runner downloaded and installed](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414342)

## General Usage

```js
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar  <command> <command options>
```

## Commands

| Command | Description |
| :-------------------------- | :--- |
| `xcuitest` | Defines `xcuitest` as the test framework to use for your native iOS tests
| `espresso` | Defines `espresso` as the test framework to use for your native Android tests
| `config` | Defines a configuration YAML file where the runner executes based on the parameters set in the file. Please note, if you decide to use the config command you can no longer use any of the command options below. For more information, see [Creating a Sauce Runner for Real Devices Configuration File](https://wiki.saucelabs.com/pages/viewpage.action?pageId=72748118).

## Options





## CLI Examples
### XCUITest Example
### Espresso Example
