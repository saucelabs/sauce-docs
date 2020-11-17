---
id: espresso-rdc
title: Using Espresso for Real Device Testing
sidebar_label: Espresso Using RDC
---

Espresso is a testing framework for running user interface tests on Android devices. Sauce Labs offers the option to run Espresso and UI Automator tests against our real device cloud using our test runner, which is parameterized for use in CI/CD environments, in addition to being able to run Espresso and UI Automator tests from the web interface.

## Requirements for Using Espresso with Sauce Runner for Real Devices

* [Set up your project](https://wiki.saucelabs.com/display/DOCS/Application+and+Project+Management+for+Real+Devices)
* Have the .apk files for both your app and tests
*Click this link to download the [latest version 1.9 of Sauce Labs Runner (.jar file)](https://s3.amazonaws.com/saucelabs-runner/v1.9/runner.jar)
*Make sure you have Java 8 or later installed on your local machine

## Configuring Sauce Runner for Real Devices for Espresso Testing
The [Command Reference for Sauce Runner for Real Devices](https://wiki.saucelabs.com/display/DOCSDEV/Command+Reference+for+Sauce+Runner+for+Real+Devices) contains a list of the options you can use to configure Sauce Runner to run tests with Espresso.
