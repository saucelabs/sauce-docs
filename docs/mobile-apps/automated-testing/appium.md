---
id: appium
title: Appium on Sauce Labs
sidebar_label: Using Appium
description: Learn how to achieve digital confidence for your app on all mobile devices with Appium and Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<<<<<<< HEAD
Looking to incorporate Appium in your mobile testing strategy? This page can help you understand the system architecture and installation requirements.
=======
Looking to incorporate Appium in your mobile testing strategy? This page can help you understand the system architecture and requirements, as well as how to design a test strategy that yields the most meaningful results.
>>>>>>> da7390e278f68d093227d629b9455f679a32514c

[Appium](http://appium.io/) is an automation testing framework that allows you to write tests using the [Selenium](https://www.selenium.dev) syntax that are for use in testing native, mobile web, and hybrid applications on iOS and Android devices. Run your Appium tests on Sauce Labs to benefit from speed, parallelization, clear test result history, failure analysis, issue tracking, and more.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
<<<<<<< HEAD
* [Node.js v10+ and NPM](http://nodejs.org/)


## Installing Appium

Appium is a client-server framework in which the user installs a client application locally that translates test session configuration details into requests to the remote Appium server, which processes them and responds with results and related material that Sauce Labs can then render into meaningful results in your dashboard. In order to use Appium, you must install both the server and a client.

### Installing the Server

You can install the Appium Server directly via NPM by running the following command:

```
npm install -g appium
```

Alternatively, you can download [Appium Desktop](https://github.com/appium/appium-desktop/releases) for your for Mac, Windows, or Linux environment.  Appium Desktop is a Graphical User Interface application that bundles many of the system dependencies (including Node/NPM) of Appium Server and provides a clean and easy-to-use interface for launching the server and inspecting your app's elements, which can be very helpful in writing your tests.

### Installing a Client

The Appium client is the application in which you write your test scripts and instruct Appium how and where to run them. Appium provides [client libraries](http://appium.io/downloads) for a variety of programming languages, so choose your favorite and download it to start creating tests for your mobile app or mobile browser app. Many of the examples throughout this documentation use the [JavaScript WebDriverIO client](https://webdriver.io/).

:::tip Appium Doctor
Use Appium's dependency validator CLI `appium-doctor` to ensure your installation is ready to go for your Android or iOS tests.

Install the doctor: `npm install -g appium-doctor`.
Run the command: `appium-doctor --ios|--android`
:::



=======

## Appium Architecture

Appium has a client-server architecture, meaning the user installs a client application locally that translates test session configuration details into requests to the remote Appium server, which processes them and responds with results and related material that Sauce Labs can then render into meaningful results in your dashboard.

The **Appium client** is a programming language-specific [set of client libraries](http://appium.io/downloads) in which you write your test scripts. The Appium client library is a wrapper of Selenium client libraries designed specifically for use with the unique needs of mobile device operating systems.

The **Appium server** component, based on node.js, exposes a superset of the [JSON Wire Protocol](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol), known as the [Mobile JSON Wire Protocol](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md). The Appium server also supports elements of the [W3C Webdriver spec](https://w3c.github.io/webdriver/webdriver-spec.html), which allows it to support a wide variety of test specification formats.

There is also an [Appium desktop application](https://github.com/appium/appium-desktop) option available for Mac, Windows, and Linux environments that offers a graphical interface experience for the Appium server and bundles many of the system dependencies (including Node/NPM).

:::note
Appium Desktop is currently supported by the [Appium core team](https://appium.io/docs/en/contributing-to-appium/developers-overview/#developer-community).
:::

>>>>>>> da7390e278f68d093227d629b9455f679a32514c
## How to Get Started

* [Quickstart](/mobile-apps/automated-testing/appium/quickstart): Quickly set up a Java test environment and run a pre-configured working test using Appium to see if this is the right method for your mobile test objectives.
* [Real Devices](/mobile-apps/automated-testing/appium/real-devices): If you already have an Appium test infrastructure, set it up to test on Sauce Labs library of real devices.
* [Virtual Devices](/mobile-apps/automated-testing/appium/virtual-devices): You can also run your tests against Sauce Labs extensive combination of simulators and emulators for broader selection of devices and options.
