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
- macOS 12+
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
        <td rowspan='2'>1.60.0</td>
        <td rowspan='2'>24</td>
        <td rowspan='2'>✅</td>
        <td><b>macOS:</b> 14*, 15*, 26*</td>
        <td rowspan='2'>Chromium 148.0.7778.96, Chrome, Firefox 150.0.2, Webkit 26.4</td>
        <td rowspan='2'>June 15th, 2027</td>
      </tr>
      <tr>
        <td><b>Windows:</b> 10, 11</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td rowspan='2'>1.58.2</td>
        <td rowspan='2'>22</td>
        <td rowspan='2'>✅</td>
        <td><b>macOS:</b> 14*, 15*</td>
        <td rowspan='2'>Chromium 145.0.7632.6, Chrome, Firefox 146.0.1, Webkit 26.0</td>
        <td rowspan='2'>March 25th, 2027</td>
      </tr>
      <tr>
        <td><b>Windows:</b> 10, 11</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td rowspan='2'>1.58.1</td>
        <td rowspan='2'>22</td>
        <td rowspan='2'>✅</td>
        <td><b>macOS:</b> 14*, 15*</td>
        <td rowspan='2'>Chromium 145.0.7632.6, Chrome, Firefox 146.0.1, Webkit 26.0</td>
        <td rowspan='2'>February 25th, 2027</td>
      </tr>
      <tr>
        <td><b>Windows:</b> 10, 11</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td rowspan='2'>1.57.0</td>
        <td rowspan='2'>22</td>
        <td rowspan='2'>✅</td>
        <td><b>macOS:</b> 12, 13</td>
        <td rowspan='2'>Chromium 143.0.7499.4, Chrome, Firefox 144.0.2, Webkit 26.0</td>
        <td rowspan='2'>January 23rd, 2027</td>
      </tr>
      <tr>
        <td><b>Windows:</b> 10, 11</td>
      </tr>
    </tbody>
    <tbody>
    <tr>
      <td rowspan='2'>1.56.1</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium 141.0.7390.37, Chrome, Firefox 142.0.1, Webkit 26.0</td>
      <td rowspan='2'>November 30th, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
    <tbody>
    <tr>
      <td rowspan='2'>1.55.1</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium 140.0.7339.16, Chrome, Firefox 141.0, Webkit 26.0</td>
      <td rowspan='2'>October 3rd, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.54.1</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium 139.0.7258.5, Chrome, Firefox 140.0.2, Webkit 26.0</td>
      <td rowspan='2'>July 24th, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.52.0</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium 136.0.7103.25, Chrome, Firefox 137.0, Webkit 18.4</td>
      <td rowspan='2'>April 30th, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.50.1</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 12, 13</td>
      <td rowspan='2'>Chromium 133.0.6943.16, Chrome, Firefox 134.0, Webkit 18.2</td>
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
      <td rowspan='2'>Chromium 131.0.6778.33, Chrome, Firefox 132.0, Webkit 18.2</td>
      <td rowspan='2'>February 06, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
</table>

*macOS 14+ requires a Premium subscription. For additional details see [macOS Browser Tests on Apple Silicon](/web-apps/macos-apple-silicon)

The version numbers in the **Supported Browsers** column are the Chromium, Firefox, and WebKit builds bundled with each Playwright release, as published in the [Playwright release notes](https://playwright.dev/docs/release-notes). "Chrome" refers to the stable Google Chrome channel and is not version-pinned to the Playwright release.

## How to Get Started

- [Quickstart](/web-apps/automated-testing/playwright/quickstart): Use our demo repository to quickly set up and run a sample Playwright project and test to see the results.
- [Run your own tests](/web-apps/automated-testing/playwright/yaml): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
- [Incorporate `saucectl` in your pipeline](/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline): Playwright on Sauce supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions.

## Playwright Reporter for Sauce Labs

If you prefer to stay in Playwright, try the [Playwright Sauce Labs Reporter](https://github.com/saucelabs/sauce-playwright-reporter). Connect to your Sauce Labs account from within your Playwright project to configure and run your tests directly from Playwright.

## Limitations

Please check the [Limitations Page](playwright/limitations.md).
