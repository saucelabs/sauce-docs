---
id: testrunner-toolkit
title: Using Testrunner Toolkit                                 
sidebar_label: Using Testrunner Toolkit
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Sauce Labs Testrunner Toolkit is designed to support native Javascript frameworks through a containerized testing solution that simplifies user set up and speeds up test execution time. 


This approach combines the power and expressiveness of different test frameworks with the dashboards, infrastructure, and analytics of Sauce Labs.


Most importantly, by running these tests through Sauce Labs, you can:

* Run tests using popular JavaScript frameworks: [Cypress](https://github.com/cypress-io/cypress), [Playwright](https://github.com/microsoft/playwright), and [TestCafe](https://devexpress.github.io/testcafe).
* Take advantage of low latency provided by a containerized solution
* Review, share, and evaluate your test assets, such as logs, test results, and test videos 
* Use our Insights feature to perform deeper analysis of test outcomes
* Take advantage of other Sauce-specific options as development continues, including VMs, parallelization, and so on

## How to Get Started

To get started quickly, please see [this page](/testrunner-toolkit/installation).

### How it Works

Testrunner Toolkit achieves JavaScript framework testing through the combination of Sauce Labs, Jest, and the
JavaScript framework of your choice. 

## Supported Frameworks and Browsers

In the current beta, the toolkit supports the following frameworks: [Cypress](https://github.com/cypress-io/cypress), [Playwright](https://github.com/microsoft/playwright), and [TestCafe](https://github.com/DevExpress/testcafe). The specific framework you use for testing depends on the types of tests you
need to run, and the environment where you run the tests.

Furthermore, the framework and browser version support depends on the Sauce Labs docker images. The table below indicates framework and browser support based on the requisite docker image tag.

:::note 
Each docker image tag is the 'latest' image that supports the specific framework version
:::

<!--CLOUD FRAMEWORKS GO HERE. This markdown is generated from the test-composer project. Do not edit manually -->
<!--START_AUTO_GENERATED_TABLE-->

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
|1.11.0|Windows 10|Chrome, Firefox, MicrosoftEdge|
|1.10.1|Windows 10|Chrome, Firefox, MicrosoftEdge|

</TabItem>
</Tabs>

<!--END_AUTO_GENERATED_TABLE-->

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

### Workflow Overview

Below are the general steps for executing tests with Testrunner Toolkit. For further information, follow the links below:

* [Download and Install](testrunner-toolkit/installation.md#installing-testrunner-toolkit) `saucectl`
* [Authenticate with your Sauce Labs Credentials](testrunner-toolkit/configuration.md#authenticate)
* [Generate a Configuration File and Tests Directory](testrunner-toolkit/configuration.md#generate-a-configuration-file-and-tests)
* [Run the Tests](testrunner-toolkit/configuration.md#run-the-test)
* [Analyze Test Results on Sauce Labs](testrunner-toolkit/configuration.md#analyze-test-results-in-sauce-labs)

## Common Use Cases

Below are some example user journeys and use cases that Testrunner Toolkit supports.

### Sample Tests

If you're starting from scratch and don't have any tests currently running as a part of your development workflow, `saucectl` will automatically [generate an example test when you choose an automation framework and run the initial command](testrunner-toolkit/configuration.md#choose-a-framework). From there you can modify or expand upon the existing test.

### Existing Tests

If you already have existing tests in your project (like say in `cypress` for example), you can simply [download and install `saucectl`](testrunner-toolkit/installation#installing-testrunner-toolkit), [modify the existing configuration](testrunner-toolkit/configuration.md#modifying-the-configuration-file), and [run your existing tests](testrunner-toolkit/running-tests.md#automation-framework-examples).

### Pipeline Tests

If you wish to run `saucectl` as part of your DevOps CI toolchain, you can add it in your workflow by following one of our [CI integration guides](testrunner-toolkit/integrations.md).

## Additional Resources

To learn more about the tools associated with this project please see the links below:

* Jest: [https://jestjs.io/](https://jestjs.io/)
* Cypress: [https://github.com/cypress-io/cypress](https://github.com/cypress-io/cypress)
* The Microsoft Playwright project: [https://github.com/microsoft/playwright](https://github.com/microsoft/playwright)
* TestCafe: [https://devexpress.github.io/testcafe/](https://devexpress.github.io/testcafe/)

Visit the links below to view information and release notes regarding the docker images' contents:

* [sauce-cypress-runner](https://github.com/saucelabs/sauce-cypress-runner)
* [sauce-playwright-runner](https://github.com/saucelabs/sauce-playwright-runner)
* [sauce-puppeteer-runner](https://github.com/saucelabs/sauce-puppeteer-runner)
* [sauce-testcafe-runner](https://github.com/saucelabs/sauce-testcafe-runner)
