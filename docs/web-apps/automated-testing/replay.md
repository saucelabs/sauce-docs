---
id: replay
title: Replay on Sauce Labs
sidebar_label: Using Replay
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Replay](https://github.com/puppeteer/replay) is a library that provides an API to replay and stringify recordings created using [Chrome DevTools Recorder](https://developer.chrome.com/docs/devtools/recorder). Using the [`saucectl` CLI](/dev/cli/saucectl), you can replay Chrome DevTools' JSON-based recordings remotely on Sauce Labs, giving you the flexibility of choosing browser version and operating system combinations and test result data analytics.

## Supported Testing Platforms

Sauce Labs supports the following test configurations for Replay:

<table id="table-fw">
  <tr>
    <th>Replay Version</th>
    <th>Node.js Version</th>
    <th width="10%">Supported Platforms</th>
    <th width="30%">Supported Browsers</th>
    <th width="30%">End of Life</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan='2'>0.30.0</td>
      <td rowspan='2'>22</td>
      <td><b>macOS:</b> 11, 12, 13, 14, 15</td>
      <td rowspan='2'>Chrome</td>
      <td rowspan='2'>January 23rd, 2027</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>0.29.0</td>
      <td rowspan='2'>22</td>
      <td><b>macOS:</b> 11, 12, 13</td>
      <td rowspan='2'>Chrome</td>
      <td rowspan='2'>December 1st, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>0.28.0</td>
      <td rowspan='2'>22</td>
      <td><b>macOS:</b> 11, 12, 13</td>
      <td rowspan='2'>Chrome</td>
      <td rowspan='2'>November 17th, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
</table>

## How to Get Started

- [Quickstart](/web-apps/automated-testing/replay/quickstart): Use our demo repo to quickly set up and run a sample Replay project and test to see the results.
- [Run your own](/web-apps/automated-testing/replay/yaml): Customize `saucectl` to replay your existing recordings just by modifying the `config.yml` file for your project.
- [Incorporate saucectl in your pipeline](/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline): Replay in Sauce Labs supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions.

## Limitations

There are no known limitations at the time of this writing.
