---
id: cypress
title: Cypress on Sauce Labs
sidebar_label: Using Cypress
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) is an end-to-end JavaScript testing framework that you can use to test your web apps remotely on Sauce Labs cloud using the [`saucectl` CLI](/dev/cli/saucectl).

## System Requirements

Supported OS:

- Windows 10 / Windows 11
- macOS 10.15+
- Linux

## Supported Languages

JavaScript is supported out of the box. TypeScript and Cucumber are also supported, but require additional dependencies at runtime. See our [example repo](https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1/examples) for working end-to-end examples.

## Supported Testing Platforms

Sauce Labs supports the following test configurations for Cypress:

<table id="table-fw">
  <tr>
    <th>Cypress Version</th>
    <th>Node.js Version</th>
    <th width="10%">Supports Configurable Node.js</th>
    <th width="20%">Supported Platforms</th>
    <th width="30%">Supported Browsers</th>
    <th width="30%">End of Life</th>
  </tr>
  <tbody>
    <tr>
      <td rowspan='2'>14.0.0</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>February 06, 2026</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.16.0</td>
      <td rowspan='2'>22</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>December 04, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.15.2</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>November 13, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.15.1</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>November 05, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.14.2</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>September 27, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.13.3</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'>✅</td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>August 28, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.13.1</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>July 23, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.12.0</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>June 26, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.10.0</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>May 28, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.7.3</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>April 15, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td rowspan='2'>13.6.6</td>
      <td rowspan='2'>20</td>
      <td rowspan='2'></td>
      <td><b>macOS:</b> 11.00, 12, 13</td>
      <td rowspan='2'>Chrome, Firefox, Microsoft Edge, Webkit (Experimental)</td>
      <td rowspan='2'>February 28, 2025</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
  </tbody>
</table>

## How to Get Started

- [Quickstart](/web-apps/automated-testing/cypress/quickstart): Use our demo repo to quickly set up and run a sample Cypress project and test to see the results.
- [Run your own tests](/web-apps/automated-testing/cypress/yaml): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
- Try Cypress with Cucumber: `saucectl` supports Cypress using Cucumber, and the demo repo includes examples for [Cypress 10 and above](https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1/examples/cucumber).
- [Incorporate saucectl in your pipeline](/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline): Cypress on Sauce supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions.

## Cypress Plugin for Sauce Labs

If you would prefer to stay in Cypress, try the new [Cypress Sauce Labs Plugin](https://github.com/saucelabs/sauce-cypress-plugin). Connect to your Sauce Labs account from within your Cypress project to configure and run your tests directly from Cypress.

## Limitations

Please check the [Limitations Page](cypress/limitations.md).
