---
id: appium
title: Appium on Sauce Labs
sidebar_label: Using Appium
description: Learn how to achieve digital confidence for your app on all mobile devices with Appium and Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Looking to incorporate Appium in your mobile testing strategy? This page can help you understand the system architecture and installation requirements.

[Appium](http://appium.io/) is an automation testing framework that allows you to write tests using the [Selenium](https://www.selenium.dev) syntax that are for use in testing native, mobile web, and hybrid applications on iOS and Android devices. Run your Appium tests on Sauce Labs to benefit from speed, parallelization, clear test result history, failure analysis, issue tracking, and more.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* [Node.js v10+ and NPM](http://nodejs.org/)


## Installing Appium

Appium is a client-server framework in which the user installs a client application locally that translates test session configuration details into requests to the remote Appium server, which processes them and responds with results and related material that Sauce Labs can then render into meaningful results in your dashboard. In order to use Appium, you must install both the server and a client.

### Installing the Server

You can install the Appium Server directly via NPM by running the following command:

```
npm install -g appium
```


### Installing a Client

The Appium client is the application in which you write your test scripts and instruct Appium how and where to run them. Appium provides [client libraries](http://appium.io/downloads) for a variety of programming languages, so choose your favorite and download it to start creating tests for your mobile app or mobile browser app. Many of the examples throughout this documentation use the [JavaScript WebDriverIO client](https://webdriver.io/).

:::tip Appium Doctor
Use Appium's dependency validator CLI `appium-doctor` to ensure your installation is ready to go for your Android or iOS tests.

Install the doctor: `npm install -g appium-doctor`.
Run the command: `appium-doctor --ios|--android`
:::

Appium 2.0 users may choose to install [Appium Inspector](https://github.com/appium/appium-inspector), which is basically an Appium client that includes a graphical user interface to specify which Appium server to use, which capabilities to set, and then interact with your app's elements, which can be very helpful in writing your tests.


## How to Get Started

* [Quickstart](/mobile-apps/automated-testing/appium/quickstart): Quickly set up a Java test environment and run a pre-configured working test using Appium to see if this is the right method for your mobile test objectives.
* [Real Devices](/mobile-apps/automated-testing/appium/real-devices): If you already have an Appium test infrastructure, set it up to test on Sauce Labs library of real devices.
* [Virtual Devices](/mobile-apps/automated-testing/appium/virtual-devices): You can also run your tests against Sauce Labs extensive combination of simulators and emulators for broader selection of devices and options.
