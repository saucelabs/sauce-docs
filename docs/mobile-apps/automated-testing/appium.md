---
id: appium
title: Appium on Sauce Labs
sidebar_label: Using Appium
description: Learn how to achieve digital confidence for your app on all mobile devices with Appium and Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Looking to incorporate Appium in your mobile testing strategy? This page can help you understand the system architecture and requirements, as well as how to design a test strategy that yields the most meaningful results.

[Appium](http://appium.io/) is an automation testing framework that allows you to write tests using the [Selenium](https://www.selenium.dev) syntax that are for use in testing native, mobile web, and hybrid applications on iOS and Android devices. Run your Appium tests on Sauce Labs to benefit from speed, parallelization, clear test result history, failure analysis, issue tracking, and more.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Appium Architecture

Appium has a client-server architecture, meaning the user installs a client application locally that translates test session configuration details into requests to the remote Appium server, which processes them and responds with results and related material that Sauce Labs can then render into meaningful results in your dashboard.

The **Appium client** is a programming language-specific [set of client libraries](http://appium.io/downloads) in which you write your test scripts. The Appium client library is a wrapper of Selenium client libraries designed specifically for use with the unique needs of mobile device operating systems.

The **Appium server** component, based on node.js, exposes a superset of the [JSON Wire Protocol](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol), known as the [Mobile JSON Wire Protocol](https://github.com/SeleniumHQ/mobile-spec/blob/master/spec-draft.md). The Appium server also supports elements of the [W3C Webdriver spec](https://w3c.github.io/webdriver/webdriver-spec.html), which allows it to support a wide variety of test specification formats.

There is also an [Appium desktop application](https://github.com/appium/appium-desktop) option available for Mac, Windows, and Linux environments that offers a graphical interface experience for the Appium server and bundles many of the system dependencies (including Node/NPM).

:::note
Appium Desktop is currently supported by the [Appium core team](https://appium.io/docs/en/contributing-to-appium/developers-overview/#developer-community).
:::

## How to Get Started

* [Quickstart](/mobile-apps/automated-testing/appium/quickstart): Quickly set up a Java test environment and run a pre-configured working test using Appium to see if this is the right method for your mobile test objectives.
* [Real Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices): If you already have an Appium test infrastructure, set it up to test on Sauce Labs library of real devices.
* [Virtual Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/virtual-devices): You can also run your tests against Sauce Labs extensive combination of simulators and emulators for broader selection of devices and options.
