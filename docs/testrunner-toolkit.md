---
id: testrunner-toolkit
title: Getting Started with Testrunner Toolkit                                 
sidebar_label: Getting Started
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<p><Highlight color="#1877F2">Beta</Highlight></p>

Sauce Labs Testrunner Toolkit is designed to support native Javascript frameworks through a containerized testing solution that simplifies user set up and speeds up test execution time. 


This approach combines the power and expressiveness of different test frameworks with the dashboards, infrastructure, and analytics of Sauce Labs.


Most importantly, by running these tests through Sauce Labs, you can:

* Take advantage of low latency provided by a containerized solution
* Review, share, and evaluate your test assets, such as logs, test results, and test videos 
* Use our Insights feature to perform deeper analysis of test outcomes
* Take advantage of other Sauce-specific options as development of this beta feature continues, including VMs, parallelization, and so on

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* [Docker](https://docs.docker.com/get-docker/) installed
* Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g. `docker info` works in your terminal)

## How it Works

Testrunner Toolkit achieves JavaScript framework testing through the combination of Sauce Labs, Jest, and the
JavaScript framework of your choice. 

### Supported Frameworks

In the current beta, the toolkit supports the following frameworks:
 
* [Puppeteer](https://github.com/puppeteer/puppeteer)
* [Playwright](https://github.com/microsoft/playwright)
* [TestCafe](https://github.com/DevExpress/testcafe)
* [Cypress](https://github.com/cypress-io/cypress)

The specific framework you want to use for testing should be based on the types of tests you
need to run, and the environment where you run the tests. 

### Workflow Overview

Below are the general steps for executing tests with Testrunner Toolkit. For further information, follow the links below:

* [Download and Install](testrunner-toolkit/installation.md#installing-testrunner-toolkit) `saucectl`
* [Authenticate with your Sauce Labs Credentials](testrunner-toolkit/configuration.md#authenticate)
* [Generate a Configuration File](testrunner-toolkit/configuration.md#generate-a-configuration-file)
* [Run the Tests](testrunner-toolkit/configuration.md#run-the-test)
* [Analyze Test Results on Sauce Labs](testrunner-toolkit/configuration.md#analyze-test-results-in-sauce-labs)

## Common Use Cases

Below are some example user journeys and use cases that Testrunner Toolkit supports.

### Sample Tests

If you're starting from scratch and don't have any tests currently running as a part of your development workflow, `saucectl` will automatically [generate an example test when you choose an automation framework and run the initial command](testrunner-toolkit/running-tests.md#choose-an-automation-framework). From there you can modify or expand upon the existing test.

### Existing Tests

If you already have existing tests in your project (like say in `cypress` for example), you can simply [download and install `saucectl`](testrunner-toolkit#installing-testrunner-toolkit), [use one of our sample configurations](testrunner-toolkit/configuration.md#configuration-examples), and [run your existing tests](testrunner-toolkit/running-tests.md#run-your-first-test).

### Pipeline Tests

If you wish to run `saucectl` as part of your DevOps CI toolchain, you can add it in your workflow by following one of our [CI integration guides](testrunner-toolkit/integrations.md).

## Additional Resources

To learn more about the tools associated with this project please see the links below:

* Jest: [https://jestjs.io/](https://jestjs.io/)
* The Google Puppeteer project: [https://developers.google.com/web/tools/puppeteer](https://developers.google.com/web/tools/puppeteer)
* The Microsoft Playwright project: [https://github.com/microsoft/playwright](https://github.com/microsoft/playwright)
* TestCafe: [https://devexpress.github.io/testcafe/](https://devexpress.github.io/testcafe/)
* Cypress: [https://github.com/cypress-io/cypress](https://github.com/cypress-io/cypress)