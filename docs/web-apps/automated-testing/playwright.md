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
    <th>Supported Platforms</th>
    <th>Supported Browsers</th>
    <th>End of Life</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan='2'>1.43.1</td>
      <td rowspan='2'>20</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>April 15, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.41.2</td>
      <td rowspan='2'>20</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>February 28, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.41.0</td>
      <td rowspan='2'>20</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>January 22, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.40.1</td>
      <td rowspan='2'>20</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>December 6, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.39.0</td>
      <td rowspan='2'>20</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>November 7, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.38.1</td>
      <td rowspan='2'>18</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>September 28, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.37.1</td>
      <td rowspan='2'>18</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>August 31, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.36.2</td>
      <td rowspan='2'>18</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>August 1, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>1.35.1</td>
      <td rowspan='2'>18</td>
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
      <td rowspan='2'>18</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chromium, Chrome, Firefox, Webkit</td>
      <td rowspan='2'>May 11, 2024</td>
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

### Special Characters in Test Names

We recommend that you avoid the use of special characters when naming your tests. If your test name contains any special characters, your test may not run or its artifacts may not be visible in our platform.

### Playwright 1.31.1 + Webkit + Sauce-Connect

When using Sauce-Connect, Webkit browser is unable to load any website that is hosted on the Internet.
Local websites can still be loaded.

### macOS 11 + Playwright 1.29+ + Webkit

Webkit is not working on macOS 11 since Playwright 1.29.0

### Playwright HTML Reporter + Trace Viewer

Because of a limitation in how assets are stored on our platform, configuring your tests to use the built-in [HTML reporter](https://playwright.dev/docs/test-reporters#html-reporter) and Playwright's [Trace Viewer](https://playwright.dev/docs/trace-viewer-intro) feature will not work as expected.

### Chrome launchOptions

If you use project specific `launchOptions` along with setting Chrome as the browser, you'll encounter the following error:

```
browserType.launch: Chromium distribution 'chrome' is not found at C:\Users\sauce\AppData\Local\Google\Chrome\Application\chrome.exe
```

This is because playwright's project specific settings override the global configuration that Sauce Labs provides during runtime. In this case, the location of the browser binary. Make sure that `launchOptions` are not set when running on a Sauce VM.

### Webkit + Windows

There is a [known issue](https://github.com/microsoft/playwright/issues/24512) in Playwright that prevents some sites from loading in Webkit on Windows with the error `SSL peer certificate or SSH remote key was not OK`. We recommend running your Playwright + Webkit tests on our Mac VMs by setting the [platformName](https://docs.saucelabs.com/web-apps/automated-testing/playwright/yaml/#platformname) to either `macOS 13` or `macOS 12`.

:::note
Tests running through Sauce Tunnels are unaffected.
:::
