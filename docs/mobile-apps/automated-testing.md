---
id: automated-testing
title: Using Automated Mobile App Testing
sidebar_label: Overview
description: Landing Page for Automated Mobile App Testing
hide_table_of_contents: true
---

This section covers native mobile app test automation using Sauce Labs emulators, simulators, and real devices.

## System Requirements

For information on platform requirements and test environment configuration, see [Supported Mobile Devices](mobile-apps/supported-devices).

## Getting Started

A general process outline for automated testing goes like this:

1. Upload the app you want to test to real devices or virtual devices (emulators and simulators) to a location where Sauce Labs can retrieve it (i.e., AWS S3, GitHub, Dropbox, [Sauce Labs storage](/mobile-apps/app-storage). Please keep in mind that if the application you want to test isn't publicly available / behind a firewall, you'll need to set up a secure [Sauce Connect Proxy](/secure-connections/sauce-connect) tunnel in order for Sauce Labs to connect to the application.
2. Update your test script with your [Sauce Labs credentials](/basics/environment-variables) and the path to the application you want to test, as shown in the example scripts located here:
    1. [Example Appium Scripts for iOS Mobile Application Tests](/mobile-apps/automated-testing/appium)
    2. [Example Appium Scripts for Android Mobile Application Tests](/mobile-apps/automated-testing/appium)
3. Set [the capabilities for your test](/dev/test-configuration-options) for the device/operating system you want to test against, and the path to your application. The topics in [Test Configuration](/basics/test-config-annotation/test-config) and [Test Annotation](/basics/test-config-annotation/test-annotation) describe the various options for desired capabilities, or you can use our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to set up the desired capabilities of your test.
