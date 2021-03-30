---
id: espresso-xcuitest
title: Sauce Runner CLI Introduction
sidebar_label: General Usage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This page describes the general usage for the [Sauce Runner Tool](/mobile-apps/automated-testing/espresso-xcuitest) to run automated tests on Sauce Labs real and virtual devices using native mobile test frameworks—Espresso and XCUITest.

## Use Cases

* Run tests in parallel across multiple devices
* Run subsets of tests against specific devices
* Set the options as environment variables that can be referenced in your testing scripts, or pass them as command line parameters, which will take precedence over options set as environment variables
* Create a [runner configuration file](/mobile-apps/automated-testing/espresso-xcuitest/real-devices.md) with the options and commands for running your tests

## What You'll Need
Below are the requirements for using Sauce Runner with both virtual and  real devices:

### For Real Devices
* Your [Sauce Labs Account](https://app.saucelabs.com/user-settings) credentials
* Your native mobile app file (both debug and non-debug app) and test file
* Have [Sauce Runner for Real Devices downloaded and installed](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414342)

### For Virtual Devices
* Your [Sauce Labs Account](https://app.saucelabs.com/user-settings) credentials
* Your native mobile app file (both debug and non-debug app) and test file
* Have [Sauce Runner for Virtual Devices downloaded and installed](https://wiki.saucelabs.com/display/DOCS/Installing+Sauce+Runner+for+Virtual+Devices)

## General Usage

```js
JAVA_HOME=$(/usr/libexec/java_home --version 8) java -jar runner.jar  <command> <command options>
```

## Examples

### Real Devices

<Tabs
  defaultValue="espresso"
  values={[
    {label: 'Espresso', value: 'espresso'},
    {label: 'XCUITest', value: 'xcuitest'},
  ]}>

<TabItem value="espresso">

```js
java -jar runner.jar espresso --test DummyTestingApp-Runner.apk /
--app DummyTestingApp.apk --apikey <apikey> --datacenter US
```

</TabItem>
<TabItem value="xcuitest">

```js
java -jar runner.jar xcuitest --test DummyTestingApp-Runner.ipa /
--app DummyTestingApp.ipa --apikey <apikey> --datacenter US
```

</TabItem>
</Tabs>


### Virtual Devices

<Tabs
  defaultValue="espresso"
  values={[
    {label: 'Espresso', value: 'espresso'},
    {label: 'XCUITest', value: 'xcuitest'},
  ]}>

<TabItem value="espresso">

```js
./sauce-runner-virtual \
   -u test_user \
   -k 1234-1235 \
   -f espresso \
   -a ./helloworld.apk \
   -t ./espresso-test-suite.apk \
   -d 'deviceName=Samsung Galaxy S8 HD GoogleAPI Emulator,platformVersion=7.0' \
   -d 'deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.1'
```

</TabItem>
<TabItem value="xcuitest">

**Coming Soon!**

</TabItem>
</Tabs>

## Command Line Reference
* [Real Devices Command Line Reference](/dev/cli/espresso-xcuitest/real-devices)
* [Virtual Devices Command Line Reference](/dev/cli/espresso-xcuitest/virtual-devices)
