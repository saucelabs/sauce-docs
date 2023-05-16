---
id: testcafe
title: TestCafe on Sauce Labs
sidebar_label: Using TestCafe
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[TestCafe](https://github.com/DevExpress/testcafe) is a testing framework that you can use to test your web apps remotely on Sauce Labs cloud using the [`saucectl` CLI](/dev/cli/saucectl).

## System Requirements

Supported OS:
- Windows 10 / Windows 11
- macOS 10.14+
- Linux

## Supported Languages

JavaScript and TypeScript are supported out of the box.

## Supported Testing Platforms

Sauce Labs supports the following test configurations for TestCafe:

<table id="table-fw">
  <tr>
    <th>TestCafe Version</th>
    <th>Supported Platforms</th>
    <th>Supported Browsers</th>
    <th>End of Life</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan='3'>2.5.5</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>May 11, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 13.4, 14.5, 15.4, 16.0, 16.1</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>2.3.1</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>Mar 01, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b>13.4, 14.5, 15.4, 16.0, 16.1</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>2.2.0</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>Jan 15, 2024</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b>13.4, 14.5, 15.4, 16.0, 16.1</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>2.1.0</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>Nov 30, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>2.0.1</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>Oct 20, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>2.0.0</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>Sep 7, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>1.20.0</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>Jul 29, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>1.19.0</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>Jun 6, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
      <td>Safari</td>
    </tr>
  </tbody>
</table>

## How to Get Started

- [Quickstart](/web-apps/automated-testing/testcafe/quickstart): Use our demo repo to quickly set up and run a sample TestCafe project and test to see the results.
- [Run Your own Tests](/web-apps/automated-testing/testcafe/yaml): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
- [Incorporate saucectl in your pipeline](/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline): TestCafe on Sauce supports CI integrations with Cirlce CI, GitLab, Jenkins, and GitHub Actions.

### TestCafe Plugins for Sauce Labs

If you would prefer to stay in TestCafe, try the new [TestCafe Sauce Labs Plugin](https://github.com/DevExpress/testcafe-browser-provider-saucelabs). Connect to your Sauce Labs account from within your TestCafe project to configure and run your tests directly from TestCafe.
If all you want is to publish your TestCafe test results to Sauce Labs (but not run on Sauce Labs), please check out our [TestCafe reporter](https://github.com/saucelabs/testcafe-reporter)!

## Limitations

:::caution Special Characters in Test Names
We recommend that you avoid the use of special characters when naming your tests. If your test name contains any special characters, your test may not run or its artifacts may not be visible in our platform.
:::
