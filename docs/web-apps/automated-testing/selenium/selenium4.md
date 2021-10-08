---
id: selenium4
title: Selenium 4 On Sauce Labs
sidebar_label: Selenium 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

Selenium 4 started its development in late 2018, had its first Alpha release in April 2019, and moved to Beta in February 2021. It is currently a release candidate and the stable release is expected in late 2021.

Several new features and benefits for automated testing are included in the upcoming Selenium 4 release, such as:



* Relative locators
* Better window and tabs managing
* Improved Selenium Grid
* Use of W3C by default under the hood
* A set of bidirectional APIs designed for intercepting network requests, authentication on secure pages, listening to DOM events and more. These are currently implemented through the [Chrome DevTools Protocol (CDP)](https://chromedevtools.github.io/devtools-protocol/), but in the future [WebDriver BiDi](https://w3c.github.io/webdriver-bidi/) will be used.

Selenium 4 has been designed to be a drop-in replacement, but there might be cases where tests or dependencies need to be adjusted. We recommend you to go through the following sections to understand better how this new version will benefit you and what potential changes might be needed to upgrade.

Sauce Labs has contributed to the development of Selenium 4, and thanks to that, you can rest assured that your tests will continue to work on our platform.


# How to upgrade to Selenium 4

The Selenium team has spent a good amount of time making the upgrade process as painless as possible. A few things have been deprecated, so you might hit a couple of issues while upgrading, especially if you have built custom functionalities in your testing framework. This [guide](https://docs.google.com/document/d/1IeyMLDWQxurn9Wnsr-6A66Zw7yTxSSt_W5I_U0dmdnA/edit?usp=sharing) will show you how to move from Selenium 3 to Selenium 4.


# New features


### Relative Locators

A new way of locating elements by using more natural language friendly terms, such as “above”, “below”, “left of”, “right of”, and “near”. In general, you could think about them as a way to locate elements based on the visual placement on the page. Check how to use the new Relative Locators [here](https://docs.google.com/document/d/1bBtdZhe_L8zIP58ZRJduaIIWe5qyc7liklIRA1zSL1Y/edit?usp=sharing).


### New Window & Tab utilities

Selenium 4 includes a new command to help users create a new tab or a new window. Check some [code examples](https://docs.google.com/document/d/1nAZEdrgMWKPIKSdFQyeVU7IE3iQe4AFb1EDvWYDyJcY/edit?usp=sharing) that show how to use it.


### Print Page as PDF

Selenium 4 will allow users to print a page as a PDF through Chrome and Firefox. Examples with each browser can be seen [here](https://docs.google.com/document/d/1IZ-Pk2XjU5gEX1heRjjLq-E0ee-ezF8GXhqc5bWSoFM/edit?usp=sharing).


### New features with Firefox

The upcoming version of Selenium exposes a few new features with Firefox, such a full page screenshot, a simplified way to install add-ons, and updating Firefox preferences in the middle of the session. Check them [here](https://docs.google.com/document/d/17YvEXNP9C5OpuHfuDN0szIJ9gACS-HvYscmRjl15M94/edit?usp=sharing).


### Setting network conditions with Chrome and Edge

Selenium 4 exposes a set of utilities to modify the network conditions in Chromium based browsers, useful to test web applications under different network conditions. Check the details [here](https://docs.google.com/document/d/1NqEFI-tetgQcNm9siQQcjfNPoyMwrSUUOAN5IWxGZmw/edit?usp=sharing).


### New Element Attribute and Property methods

Two new methods have been added to more precisely get a given element attribute or a property. It is recommended to use one of the new methods for performance and preciseness, specially if you are using Sauce Labs. Read more about them [here](https://docs.google.com/document/d/1MV7f6ha3j2mjU7-9zw3NN-_CItyfDbpI42MBHIkbCns/edit?usp=sharing).


### New Selenium Grid

Selenium Grid 4 has been rewritten from scratch, with all the learnings from the past. It takes advantage of modern infrastructure (such as Docker and distributed tracing). Read more details about it [here](https://docs.google.com/document/d/1iQD3ohUef-SZHZ434PYG2bFuwUazdtSjfEk3rSJNfX4/edit?usp=sharing).


### Frequently Asked Questions

Check a list of the most common asked questions about the upcoming Selenium version [here](https://docs.google.com/document/d/15M5GxhoppmhkHcb4lRTN9PAXOEbT7CGZZTNIdFTgdwU/edit?usp=sharing).
