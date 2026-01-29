---
id: testcafe
title: TestCafe on Sauce Labs
sidebar_label: Using TestCafe
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[TestCafe](https://github.com/DevExpress/testcafe) is a testing framework that
you can use to test your web apps remotely on Sauce Labs cloud using the [`saucectl` CLI](/dev/cli/saucectl).

## System Requirements

Supported OS:

- Windows 10 / Windows 11
- macOS 11+
- Linux

## Supported Languages

JavaScript and TypeScript are supported out of the box.

## Supported Testing Platforms

Sauce Labs supports the following test configurations for TestCafe:

<table id="table-fw">
  <tr>
    <th>TestCafe Version</th>
    <th>Node.js Version</th>
    <th width="10%">Supports Configurable Node.js</th>
    <th width="30%">Supported Platforms</th>
    <th width="30%">Supported Browsers</th>
    <th width="30%">End of Life</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan='3'>3.7.3</td>
      <td rowspan='3'>22</td>
      <td rowspan='3'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13, 14*, 15*</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>January 23rd, 2027</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 14.0, 14.3, 14.4, 14.5, 15.4, 15.5, 16.0, 16.1, 16.2</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>3.7.2</td>
      <td rowspan='3'>22</td>
      <td rowspan='3'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13, 14*, 15*</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>July 8th, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 14.0, 14.3, 14.4, 14.5, 15.4, 15.5, 16.0, 16.1, 16.2</td>
      <td>Safari</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='3'>3.7.1</td>
      <td rowspan='3'>22</td>
      <td rowspan='3'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td>Safari, Chrome, Firefox, Microsoft Edge</td>
      <td rowspan='3'>February 06, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
      <td>Chrome, Firefox, Microsoft Edge</td>
    </tr>
    <tr>
      <td><b>iOS:</b> 14.0, 14.3, 14.4, 14.5, 15.4, 15.5, 16.0, 16.1, 16.2</td>
      <td>Safari</td>
    </tr>
  </tbody>
</table>

*macOS 14+ requires a Premium subscription and `armRequired:"true"` as an additional configuration parameter in your [YAML file](/web-apps/automated-testing/testcafe/yaml#armrequired)

## How to Get Started

- [Quickstart](/web-apps/automated-testing/testcafe/quickstart): Use our demo repo to quickly set up and run a sample TestCafe project and test to see the results.
- [Run Your own Tests](/web-apps/automated-testing/testcafe/yaml): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
- [Incorporate saucectl in your pipeline](/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline): TestCafe on Sauce supports CI integrations with Cirlce CI, GitLab, Jenkins, and GitHub Actions.

### TestCafe Plugins for Sauce Labs

If you prefer to run your tests directly from TestCafe against a remote Sauce
Labs browser, try our [TestCafe Provider Plugin](provider-plugin).

If all you want is to publish your TestCafe test results to Sauce Labs, but not
run _on_ Sauce Labs or use a Sauce Labs provided browser, check out our
[TestCafe Reporter](https://github.com/saucelabs/testcafe-reporter)!

## Limitations

Please check the [Limitations Page](limitations).
