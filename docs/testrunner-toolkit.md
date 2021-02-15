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
## How it Works

Testrunner Toolkit achieves JavaScript framework testing through the combination of Sauce Labs, Jest, and the
JavaScript framework of your choice. 

### Supported Frameworks and Browsers

In the current beta, the toolkit supports the following frameworks: [Cypress](https://github.com/cypress-io/cypress), [Playwright](https://github.com/microsoft/playwright), and [TestCafe](https://github.com/DevExpress/testcafe). The specific framework you use for testing depends on the types of tests you
need to run, and the environment where you run the tests.

Furthermore, the framework and browser version support depends on the Sauce Labs docker images. The table below indicates framework and browser support based on the requisite docker image tag.

:::note 
Each docker image tag is the 'latest' image that supports the specific framework version
:::

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>
  
<TabItem value="cypress">

| Cypress Version | Supported Browsers                     | Docker Image Tag            |        Sauce Cloud Support [[?](testrunner-toolkit/running-tests.md#test-on-sauce-labs)]         |
|---------|----------------------------------------|-------------------------------------|------------------------------|
| 5.6.0   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul> | [saucelabs/stt-cypress-mocha:v5.6.0](https://hub.docker.com/layers/saucelabs/stt-cypress-mocha-node/v5.6.0/images/sha256-70bc83fce7bf4fb3443f2f68b18f295f5eef71ec57f64ce1a9b5307797756221?context=explore)  |     Windows 10   |
| 5.5.0   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul>  | [saucelabs/stt-cypress-mocha:v0.2.3](https://hub.docker.com/layers/saucelabs/stt-cypress-mocha-node/v0.2.3/images/sha256-95b25c5a85624779c2ed9aaa82a6ca76e770a77e487936e6814f9f9c95dc1e52?context=explore)  |           |
| 5.4.0   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul>  | [saucelabs/stt-cypress-mocha:v0.1.18](https://hub.docker.com/layers/saucelabs/stt-cypress-mocha-node/v0.1.18/images/sha256-1709f9e55223267b0a63b33fa9f00a84920dd1c175dcd33ee0fababf5abfed50?context=explore) |          |
| 4.9.0   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul>  | [saucelabs/stt-cypress-mocha:v0.1.12](https://hub.docker.com/layers/saucelabs/stt-cypress-mocha-node/v0.1.12/images/sha256-7c8d0ce5bc1b0260375345bfba71e9d76dfff97fd223da0aa570e8f4715ba075?context=explore) |          |

</TabItem>
<TabItem value="playwright">

| Playwright Version | Supported Browsers                                      | Docker Image Tag                       | Sauce Cloud Support          |
|---------|---------------------------------------------------------|---------------------------------------------------|------------------------------|
| 1.7.1   | <ul><li>Playwright</li></ul> | [saucelabs/stt-playwright-node:v1.7.1](https://hub.docker.com/layers/saucelabs/stt-playwright-node/v1.7.1/images/sha256-a7b9117dc33a889eac27db968217de04446c27acf2358ff45252ea54898486ad?context=explore)         |     |
| 1.4.0   | <ul><li>Chromium 86.0.4217.0</li> <li>Mozilla Firefox 78.0b5</li> <li>WebKit 14.0</li></ul> | [saucelabs/stt-playwright-jest-node:v0.2.1](https://hub.docker.com/layers/saucelabs/stt-playwright-jest-node/v0.2.1/images/sha256-4084258641418233491812a61f47ef3da7baf2dd8ae0d54e1a3125fb1fd5cf42?context=explore)         |     |
| 1.3.0   | <ul><li>Chromium 86.0.4217.0</li> <li>Mozilla Firefox 78.0b5</li> <li>WebKit 14.0</li></ul> | [saucelabs/stt-playwright-jest-node:v0.2.0](https://hub.docker.com/layers/saucelabs/stt-playwright-jest-node/v0.2.0/images/sha256-3f98d1d68ecb82ecf16ca72ba3d3ff75ab5c4f9e85edfe7b631069ecd2a18067?context=explore)         |     |
| 1.0.0   | <ul><li>Chromium 84.0.4135.0</li> <li>Mozilla Firefox 76.0b5</li></ul>             | [saucelabs/stt-playwright-jest-node:v0.1.6-alpha.1](https://hub.docker.com/layers/saucelabs/stt-playwright-jest-node/v0.1.6-alpha.1/images/sha256-301dbb659245c403b144972e06bc26a859f969e8bda2c3abbdd1756ecd692e2a?context=explore) |      |

</TabItem>
<TabItem value="testcafe">

| TestCafe Version | Supported Browsers                | Docker Image Tag           | Sauce Cloud Support          |
|---------|-----------------------------------|-------------------------------------|------------------------------|
| 1.8.5   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul> | [saucelabs/stt-testcafe-node:v0.1.13](https://hub.docker.com/layers/saucelabs/stt-testcafe-node/v0.1.13/images/sha256-698c954f254b3a68ba57b8ed0f6f87becf0dc7686998e02e197f306e0002fa10?context=explore) |    |

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
* [sauce-testcafe-runner](https://github.com/saucelabs/sauce-testcafe-runner)
