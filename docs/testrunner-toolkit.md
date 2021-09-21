---
id: testrunner-toolkit
title: Using saucectl                                 
sidebar_label: Using saucectl
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


`saucectl` is a command line interface that performs the underlying business logic to access the tests in your existing framework, run them (either in the Sauce Labs Cloud or locally in a Docker image), then securely transmit the test assets to the Sauce Labs platform, where you can review, share, and evaluate your test outcomes at scale.


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).


## Supported Frameworks and Browsers

`saucectl` currently supports:

* [Cypress](https://github.com/cypress-io/cypress)
* [Playwright](https://github.com/microsoft/playwright)
* [TestCafe](https://github.com/DevExpress/testcafe)
* [Puppeteer](https://github.com/puppeteer)
* [Espresso](https://developer.android.com/training/testing/espresso)
* [XCUITest](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/09-ui_testing.html)

### Supported Frameworks in Sauce Cloud

<Tabs
    groupId="platforms"
    defaultValue="cypress"
    values={[
      {"label":"Cypress","value":"cypress"},
      {"label":"Playwright","value":"playwright"},
      {"label":"TestCafe","value":"testcafe"},
      {"label":"Espresso","value":"espresso"},
      {"label":"XCUITest","value":"xcuitest"}
    ]}>
<TabItem value="cypress">

|Cypress Version|Supported Platforms|Supported Browsers|
|-----|-----|-----|
|8.3.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|7.7.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|7.3.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|7.1.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|6.6.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|5.6.0|Windows 10|Chrome, Firefox, MicrosoftEdge|

</TabItem>
<TabItem value="playwright">

|Playwright Version|Supported Platforms|Supported Browsers|
|-----|-----|-----|
|1.14.1|Windows 10|Chromium, Firefox, Webkit|
|1.12.3|Windows 10|Chromium, Firefox, Webkit|
|1.11.1|Windows 10|Chromium, Firefox, Webkit|
|1.10.0|Windows 10|Chromium, Firefox, Webkit|
|1.7.1|Windows 10|Chromium, Firefox, Webkit|

</TabItem>
<TabItem value="puppeteer">

|Puppeteer Version|Supported Platforms|Supported Browsers|
|-----|-----|-----|

</TabItem>
<TabItem value="testcafe">

<table id="table-fw">
  <tr>
    <th>TestCafe Version</th>
    <th>Supported Platforms</th>
    <th>Supported Browsers</th>
  </tr>
  <tbody>
  <tr>
    <td rowspan='3'>1.15.3</td>
    <td><b>macOS:</b> 11.0</td>
    <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>Windows:</b> 10</td>
    <td>Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
    <td>Safari</td>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td rowspan='3'>1.15.0</td>
    <td><b>macOS:</b> 11.0</td>
    <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>Windows:</b> 10</td>
    <td>Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
    <td>Safari</td>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td rowspan='3'>1.14.2</td>
    <td><b>macOS:</b> 11.0</td>
    <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>Windows:</b> 10</td>
    <td>Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
    <td>Safari</td>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td rowspan='3'>1.14.0</td>
    <td><b>macOS:</b> 11.0</td>
    <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>Windows:</b> 10</td>
    <td>Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
    <td>Safari</td>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td rowspan='3'>1.11.0</td>
    <td><b>macOS:</b> 11.0</td>
    <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>Windows:</b> 10</td>
    <td>Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  <tr>
    <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
    <td>Safari</td>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td>1.10.1</td>
    <td><b>Windows:</b> 10</td>
    <td>Chrome, Firefox, MicrosoftEdge</td>
  </tr>
  </tbody>
</table>

</TabItem>
<TabItem value="espresso">

|Supported Platforms|
|-----|
|Android 5.1+|

</TabItem>
<TabItem value="xcuitest">

|Supported Platforms|
|-----|
|iOS 10+|

</TabItem>
</Tabs>


### Supported Frameworks in Docker Runner

Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available release notes.

<Tabs
  groupId="platforms"
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
    {label: 'Puppeteer', value: 'puppeteer'},
  ]}>

<TabItem value="cypress">

|Cypress Version|Supported Browsers|
|----|----|
|8.3.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v7.3.0)|
|7.7.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v7.2.2)|
|7.3.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v7.1.0)|
|7.1.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v7.0.3)|
|6.6.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v6.0.1)|
|5.6.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v5.9.1)|

</TabItem>
<TabItem value="playwright">

|Playwright Version|Supported Browsers|
|-----|----|
|1.14.1|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v2.2.1)|
|1.12.3|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v2.0.3)|
|1.11.1|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.13.0)|
|1.11.0|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.11.0)|
|1.10.0|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.10.0)|
|1.7.1|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.7.5)|

</TabItem>

<TabItem value="puppeteer">

|Puppeteer Version|Supported Browsers|
|-----|----|
|10.2.0|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.5.0)|
|10.1.0|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.4.1)|
|9.1.1|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.2.0)|
|8.0.0|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.0.0)|
|3.0.4|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v0.3.0)|

</TabItem>

<TabItem value="testcafe">

|TestCafe Version|Supported Browsers|
|----|----|
|1.15.3|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.10.0)|
|1.15.0|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.9.0)|
|1.14.2|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.7.0)|
|1.14.0|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.6.1)|
|1.11.0|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.5.0)|
|1.10.1|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.2.6)|

</TabItem>
</Tabs>

## How to Get Started

The rest of the `saucectl` documentation will guide you through the process of installing and configuring the `saucectl` command line, and then using it to run your tests in the way that best suits your current development process. At a high level, you will:

1. [Download and install `saucectl`](/testrunner-toolkit/installation).
1. Generate and configure your `saucectl` working directory.
1. Run a sample test to verify functionality.

Once you are confident that `saucectl` is running, you can customize your configurations based on your testing objectives. The following sections offer some common scenarios.

### Existing Tests

If you already have existing tests in your project (in `cypress` for example), once you install `saucectl`, you can just directly [modify the default configuration file](/testrunner-toolkit/configuration), and  then run your existing tests.

### Pipeline Tests

If you wish to run `saucectl` as part of your DevOps CI toolchain, you can add it in your workflow by following one of our [CI integration guides](/testrunner-toolkit/integrations.md).

### Sample Repos

If you would like to see sample tests and configuration files for particular frameworks, you can clone one of our demo repositories for use as a template:

* [Cypress Demo](https://github.com/saucelabs/saucectl-cypress-example)
* [TestCafe Demo](https://github.com/saucelabs/saucectl-testcafe-example)
* [Playwright Demo](https://github.com/saucelabs/saucectl-playwright-example)
* [Puppeteer Demo](https://github.com/saucelabs/saucectl-puppeteer-example/)
* [Espresso Demo](https://github.com/saucelabs/saucectl-espresso-example)
* [XCUITest Demo](https://github.com/saucelabs/saucectl-xcuitest-example)
