---
id: testrunner-toolkit
title: Using Testrunner Toolkit                                 
sidebar_label: Using Testrunner Toolkit
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Testrunner Toolkit is a containerized testing solution that allows you to get the benefits of the Sauce Labs platform while maintaining your test suites in your favorite framework.  


## How it Works

At the heart of the toolkit is the `saucectl` command line, which performs the underlying business logic to access the tests in your existing framework, run them (either in the Sauce Labs Cloud or locally in a Docker image), then securely transmit the test assets to the Sauce Labs platform, where you can review, share, and evaluate your test outcomes at scale.

## Supported Frameworks and Browsers

The toolkit currently supports:

* [Cypress](https://github.com/cypress-io/cypress)
* [Playwright](https://github.com/microsoft/playwright)
* [TestCafe](https://github.com/DevExpress/testcafe)
* [Puppeteer](https://github.com/puppeteer)
* [Espresso](https://developer.android.com/training/testing/espresso)

### Supported Frameworks in Sauce Cloud

<Tabs
    defaultValue="cypress"
    values={[
      {"label":"Cypress","value":"cypress"},
      {"label":"Playwright","value":"playwright"},
      {"label":"TestCafe","value":"testcafe"},
      {"label":"Espresso","value":"espresso"}
    ]}>
<TabItem value="cypress">

|Cypress Version|Supported Platforms|Supported Browsers|
|-----|-----|-----|
|6.6.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|5.6.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|5.5.0|Windows 10|Chrome, Firefox, MicrosoftEdge|

</TabItem>
<TabItem value="playwright">

|Playwright Version|Supported Platforms|Supported Browsers|
|-----|-----|-----|
|1.7.1|Windows 10|Chromium, Firefox, Webkit|

</TabItem>
<TabItem value="puppeteer">

|Puppeteer Version|Supported Platforms|Supported Browsers|
|-----|-----|-----|

</TabItem>
<TabItem value="testcafe">

|TestCafe Version|Supported Platforms|Supported Browsers|
|-----|-----|-----|
|1.11.0|macOS 11.00|Safari, Chrome, Firefox, MicrosoftEdge|
|1.11.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|1.10.1|Windows 10|Chrome, Firefox, MicrosoftEdge|

</TabItem>
<TabItem value="espresso">
<small><span className='preview'>PREVIEW</span></small>

|Supported Platforms|
|-----|
|Android 5.1+|

</TabItem>
</Tabs>


### Supported Frameworks in Docker Runner

Browser support or each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available release notes.

<Tabs
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
|7.1.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v7.0.3)|
|6.6.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v6.0.1)|
|5.6.0|Please see [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v5.9.1)|

</TabItem>
<TabItem value="playwright">

|Playwright Version|Supported Browsers|
|-----|----|
|1.10.0|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.10.0)|
|1.7.1|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.7.5)|

</TabItem>

<TabItem value="puppeteer">

|Puppeteer Version|Supported Browsers|
|-----|----|
|8.0.0|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.0.0)|
|3.0.4|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v0.3.0)|

</TabItem>

<TabItem value="testcafe">

|TestCafe Version|Supported Browsers|
|----|----|
|1.14.0|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.6.1)|
|1.11.0|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.5.0)|
|1.10.1|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.2.6)|

</TabItem>
</Tabs>

## How to Get Started

The rest of the Testrunner Toolkit documentation will guide you through the process of installing and configuring the `saucectl` command line, and then using it to run your tests in the way that best suits your current development process. At a high level, you will:

1. [Download and install `saucectl`](testrunner-toolkit/installation).
1. Generate and configure your `saucectl` working directory.
1. Run a sample test to verify functionality.

Once you are confident that `saucectl` is running, you can customize your configurations based on your testing objectives. The following sections offer some common scenarios.

### Existing Tests

If you already have existing tests in your project (in `cypress` for example), once you install `saucectl`, you can just directly [modify the default configuration file](testrunner-toolkit/configuration.md#modifying-the-configuration-file), and  then run your existing tests.

### Pipeline Tests

If you wish to run `saucectl` as part of your DevOps CI toolchain, you can add it in your workflow by following one of our [CI integration guides](testrunner-toolkit/integrations.md).

### Sample Repos

If you would like to see sample tests and configuration files for particular frameworks, you can clone one of our demo repositories for use as a template:

* [Cypress Demo](https://github.com/saucelabs/saucectl-cypress-example)
* [TestCafe Demo](https://github.com/saucelabs/saucectl-testcafe-example)
* [Playwright Demo](https://github.com/saucelabs/saucectl-playwright-example)
* [Puppeteer Demo](https://github.com/saucelabs/saucectl-puppeteer-example/)
* [Espresso Demo](https://github.com/saucelabs/saucectl-espresso-example)
