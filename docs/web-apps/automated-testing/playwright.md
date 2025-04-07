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
- macOS 10.15+
- Linux

## Supported Testing Platforms

Sauce Labs supports the following test configurations for Playwright:

<table id="table-fw">
  <tr>
    <th>Playwright Version</th>
    <th>Node.js Version</th>
    <th width="10%">Supports Configurable Node.js</th>
    <th width="20%">Supported Platforms</th>
    <th width="30%">Supported Browsers</th>
    <th width="30%">End of Life</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan='2'>1.50.1</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>March 18, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.49.1</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>February 06, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.49.0</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>December 04, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.48.2</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>November 05, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.47.2</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>September 27, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.46.1</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>August 28, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.45.2</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>July 23, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.45.0</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>June 26, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.44.0</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>May 28, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.43.1</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>April 15, 2025</td>
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

## Playwright Reporter for Sauce Labs

If you prefer to stay in Playwright, try the [Playwright Sauce Labs Reporter](https://github.com/saucelabs/sauce-playwright-reporter). Connect to your Sauce Labs account from within your Playwright project to configure and run your tests directly from Playwright.

## Limitations

Please check the [Limitations Page](playwright/limitations.md).
