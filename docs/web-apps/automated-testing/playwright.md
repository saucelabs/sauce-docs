---
id: playwright
title: Playwright on Sauce Labs
sidebar_label: Using Playwright
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Playwright](https://github.com/microsoft/playwright) is a testing framework that you can use to test your web apps remotely on Sauce Labs Cloud using the [`saucectl` CLI](/dev/cli/saucectl).

## Supported Languages

JavaScript and TypeScript are supported out of the box.
Cucumber.js is not directly supported by Playwright. However, Playwright can be used as the backing automation framework. See [this setup guide](cucumberjs-playwright/quickstart.md) for more information.

## System Requirements

Supported OS:

- Windows 10 / Windows 11
- macOS 10.14+
- Linux

## Supported Testing Platforms

Sauce Labs supports the following test configurations for Playwright:

<table id="table-fw">
  <tr>
    <th>Playwright Version</th>
    <th>Supported Platforms</th>
    <th>Supported Browsers</th>
    <th>End of Life</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan='2'>1.35.1</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>June 16, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.33.0</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>May 11, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.31.1</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>Mar 01, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.29.2</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>Jan 15, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.28.1</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>Nov 30, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.27.1</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Firefox, Webkit</td>
      <td rowspan='2'>Oct 20, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.25.1</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Firefox, Webkit</td>
      <td rowspan='2'>Sep 7, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
    <td rowspan='2'>1.24.1</td>
    <td><b>macOS:</b> 11.00, 12, 13</td>
    <td rowspan='2'>Chromium, Firefox, Webkit</td>
    <td rowspan='2'>Jul 29, 2023</td>
  </tr>
  <tr>
    <td><b>Windows:</b> 10, 11</td>
  </tr>
  </tbody>
</table>

## How to Get Started

- [Quickstart](/web-apps/automated-testing/playwright/quickstart): Use our demo repository to quickly set up and run a sample Playwright project and test to see the results.
- [Run your own tests](/web-apps/automated-testing/playwright/yaml): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
- [Incorporate `saucectl` in your pipeline](/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline): Playwright on Sauce supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions.
- [Run your tests in Orchestrate](/orchestrate/quickstart/playwright): Use `saucectl` to run tests with a containerized test runner.

## Playwright Reporter for Sauce Labs

If you prefer to stay in Playwright, try the [Playwright Sauce Labs Reporter](https://github.com/saucelabs/sauce-playwright-reporter). Connect to your Sauce Labs account from within your Playwright project to configure and run your tests directly from Playwright.

## Limitations

:::caution Special Characters in Test Names
We recommend that you avoid the use of special characters when naming your tests. If your test name contains any special characters, your test may not run or its artifacts may not be visible in our platform.
:::

:::caution Playwright 1.31.1 + Webkit + Sauce-Connect
When using Sauce-Connect, Webkit browser is unable to load any website that is hosted on the Internet.
Local websites can still be loaded.
:::

:::caution macOS 11 + Playwright 1.29+ + Webkit
Webkit is not working on macOS 11 since Playwright 1.29.0
:::

:::note
Based on current Playwright test runner implementation, there is no way to run Playwright test runner with Cucumber.
:::
