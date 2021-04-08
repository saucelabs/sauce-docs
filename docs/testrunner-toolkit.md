---
id: testrunner-toolkit
title: Using Testrunner Toolkit                                 
sidebar_label: Using Testrunner Toolkit
---

<span className="sauceGold">BETA FEATURE</span><p/>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Testrunner Toolkit is a containerized testing solution that allows you to get the benefits of the Sauce Labs platform while maintaining your test suites in your favorite JavaScript framework.  

## How it Works

At the heart of the toolkit is the `saucectl` command line, which performs the underlying business logic to access the tests in your existing JavaScript framework, run them (either in the Sauce Labs CLoud or locally in a Docker image), then securely transmit the test assets to the Sauce Labs platform, where you can review, share, and evaluate your test outcomes at scale.

## Supported Frameworks and Browsers

The toolkit currently supports:

* [Cypress](https://github.com/cypress-io/cypress)
* [Playwright](https://github.com/microsoft/playwright)
* [TestCafe](https://github.com/DevExpress/testcafe).

The table below provides framework and browser support, which is based on the Sauce Labs docker images provided in the `saucectl` installation. For information about the docker images for each supported framework, see:

* [sauce-cypress-runner](https://github.com/saucelabs/sauce-cypress-runner)
* [sauce-playwright-runner](https://github.com/saucelabs/sauce-playwright-runner)
* [sauce-testcafe-runner](https://github.com/saucelabs/sauce-testcafe-runner)
<!-- * [sauce-puppeteer-runner](https://github.com/saucelabs/sauce-puppeteer-runner) -->

### Supported Frameworks in Sauce Cloud

<Tabs
    defaultValue="cypress"
    values={[
      {"label":"Cypress","value":"cypress"},
      {"label":"Playwright","value":"playwright"},
      {"label":"TestCafe","value":"testcafe"}
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
|1.10.1|Windows 10|Chrome, Firefox, MicrosoftEdge|

</TabItem>
</Tabs>


### Supported Frameworks in Docker Runner

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'Puppeteer', value: 'puppeteer'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>

<TabItem value="cypress">

|Cypress Version|Supported Browsers|Release Notes|
|----|----|----|
|6.6.0|Please see release notes.|[saucelabs/sauce-cypress-runner](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v6.0.1)|
|5.6.0|Please see release notes.|[saucelabs/sauce-cypress-runner](https://github.com/saucelabs/sauce-cypress-runner/releases/tag/v5.9.1)|

</TabItem>
<TabItem value="playwright">

|Playwright Version|Supported Browsers|Release Notes|
|-----|----|----|
|1.7.1|Please see release notes.|[saucelabs/sauce-playwright-runner](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.7.5)|

</TabItem>

<TabItem value="puppeteer">

|Puppeteer Version|Supported Browsers|Release Notes|
|-----|----|----|
|8.0.0|Please see release notes.|[saucelabs/sauce-puppeteer-runner](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.0.0)|
|3.0.4|Please see release notes.|[saucelabs/sauce-puppeteer-runner](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v0.3.0)|

</TabItem>

<TabItem value="testcafe">

|TestCafe Version|Supported Browsers|Release Notes|
|----|----|----|
|1.11.0|Please see release notes.|[saucelabs/sauce-testcafe-runner](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.5.0)|
|1.10.1|Please see release notes.|[saucelabs/sauce-testcafe-runner](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.2.6)|

</TabItem>
</Tabs>

## How to Get Started

The rest of the Testrunner Toolkit documentation will guide you through the process of installing and configuring the `saucectl` command line, and then using it to run your tests in the way that best suits your current development process. At a high level, you will:

1. [Download and install `saucectl`](testrunner-toolkit/installation).
1. [Generate and configure your `saucectl` working directory](testrunner-toolkit/configuration).
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
