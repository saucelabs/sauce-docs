---
id: automated-testing
title: Using Automated Mobile App Testing
sidebar_label: Overview
description: Landing Page for Automated Mobile App Testing
hide_table_of_contents: true
---

For information on native mobile app test automation using Sauce Labs emulators, simulators, and real devices, see the following sections:

*   [Environment Configuration](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365795#MobileApplicationTesting-EnvironmentConfiguration)
*   [Getting Started](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365795#MobileApplicationTesting-GettingStarted)
*   [More Information](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365795#MobileApplicationTesting-MoreInformation)


## System Requirements and Environment Configuration

For information on platform/support requirements and test environment configuration, see [Choosing a Mobile Device](mobile-apps/automated-testing/supported-devices.md).


## Getting Started

A general process outline for automated testing goes like this:

1. Upload the app you want to test on [real devices](https://wiki.saucelabs.com/display/DOCS/Uploading+and+Accessing+Applications+with+Real+Devices) or [virtual devices (emulators and simulators)](https://wiki.saucelabs.com/display/DOCS/Uploading+your+Application+to+Emulators+and+Simulators) to a location where Sauce Labs can retrieve it; for example, AWS S3, GitHub, Dropbox, [Sauce Storage](https://wiki.saucelabs.com/display/DOCS/Uploading+your+Application+to+Sauce+Storage), etc. Please keep in mind that if the application you want to test isn't publicly available / behind a firewall, you'll need to set up a secure [Sauce Connect Proxy Tunnel](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) in order for Sauce Labs to connect to the application.
2. Update your test script with your [Sauce Labs credentials](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials) and the path to the application you want to test, as shown in the example scripts located here:
    1. [Example Appium Scripts for iOS Mobile Application Tests](https://wiki.saucelabs.com/display/DOCS/Example+Appium+Scripts+for+iOS+Mobile+Application+Tests)
    2. [Example Appium Scripts for Android Mobile Application Tests](https://wiki.saucelabs.com/display/DOCS/Example+Appium+Scripts+for+Android+Mobile+Application+Tests)
3. Set [the desired capabilities of your test](https://wiki.saucelabs.com/display/DOCS/Desired+Capabilities+Required+for+Selenium+and+Appium+Tests) for the device/operating system you want to test against, and the path to your application. The topics in [Test Configuration and Annotation](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+and+Annotation) describe the various options for desired capabilities, or you can use our [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator) to set up the desired capabilities of your test.
