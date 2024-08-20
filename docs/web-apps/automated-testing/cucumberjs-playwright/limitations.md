---
id: limitations 
title: Limitations for Cucumber.js with Playwright
sidebar_label: Limitations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Special Characters in Test Names

We recommend that you avoid the use of special characters when naming your tests. If your test name contains any special characters, your test may not run or its artifacts may not be visible in our platform.

### Playwright 1.31.1 + Webkit + Sauce-Connect

When using Sauce-Connect, Webkit browser is unable to load any website that is hosted on the Internet.
Local websites can still be loaded.

### macOS 11 + Playwright 1.29+ + Webkit

Webkit is not working on macOS 11 since Playwright 1.29.0

### Webkit + Windows

There is a [known issue](https://github.com/microsoft/playwright/issues/24512) in Playwright that prevents some sites from loading in Webkit on Windows with the error `SSL peer certificate or SSH remote key was not OK`. We recommend running your Playwright + Webkit tests on our Mac VMs by setting the [platformName](https://docs.saucelabs.com/web-apps/automated-testing/playwright/yaml/#platformname) to either `macOS 13` or `macOS 12`.
