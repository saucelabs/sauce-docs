---
id: w3c-webdriver-capabilities
title: W3C WebDriver Capabilities Support
sidebar_label: W3C WebDriver Capabilities
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs supports and encourages updating your code to take advantage of the [W3C WebDriver Protocol](/dev/glossary/#w3c-webdriver-protocol), which is currently the default protocol used by all major browsers.

Using the W3C WebDriver protocol on Sauce Labs requires setting specific capabilities in your code. The syntax is different from its predecessor, JSON Wire Protocol (JWP). To learn about W3C WebDriver-compliant capability syntax, we recommend reviewing the following:

- [Test Configuration Options](/dev/test-configuration-options)
- [Upgrading to Selenium 4 for Sauce Labs Testing](/web-apps/automated-testing/selenium/selenium4)
- the [official W3C Recommendations website](https://www.w3.org/TR/webdriver1/#capabilities).
