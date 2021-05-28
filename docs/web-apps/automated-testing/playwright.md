---
id: playwright
title: Playwright on Sauce Labs
sidebar_label: Playwright
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page provides a walkthrough on how to run [Playwright](https://playwright.dev/docs/intro) tests locally and on Sauce Labs.

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* [Download and install `saucectl`](/testrunner-toolkit/installation#installing-testrunner-toolkit)
    * Ensure you've met the prerequisites outlined in the [Testrunner Toolkit documentation](/testrunner-toolkit/installation#what-youll-need)

## Quick Start

You can run a working Cypress sample test in under ten minutes!

### Install `saucectl`

Begin by installing the `saucectl` CLI in the root directory of your existing Cypress project or your intended directory.

```
npm install -g saucectl
```

### Link Your Sauce Labs Account

`saucectl` requires access to a valid Sauce Labs account.

1. Run the `configure` command:     
    ```
    saucectl configure
    ```
1. Enter your Sauce Labs Username and Access Key at the prompts.
1. Add `credentials.yml` to your `.gitignore` file to protect it from unintended exposure.

### Set up Your Playwright Project

Please clone our [playwright example repository](https://github.com/saucelabs/saucectl-playwright-example).

### Run Tests

Use the `run` command to execute the sample test included with the `saucectl` installation or whichever test suites you have defined in the configuration file.

```
saucectl run
```

The console displays the executing tests, distinguishing which mode is running.

The results and test assets are immediately available in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc):

   <img src={useBaseUrl('img/playwright/test-results.png')} alt="Playwright Test Results" />


:::warning Running Tests with a Local App

If you plan to run your playwright tests with either of the following scenarios:

* A `localhost` app running on your host machine
* An app running locally in a CI pipeline
* An app running on a local app server in a private network

Please review the following [documentation section](/testrunner-toolkit/running-tests#run-tests-against-a-local-app) for further details.
:::

## Additional Resources

Below are some additional topics related to using Playwright with Sauce Labs.

### Configuration Details

Please visit the [Configuration page](/testrunner-toolkit/configuration) to learn more about `config.yml` and the specific fields and properties:

* [Common Syntax Reference](/testrunner-toolkit/configuration#common-syntax-reference)
* [Playwright Syntax Reference](/testrunner-toolkit/configuration/playwright)

### Running in CI

Please visit [our CI integrations page](/testrunner-toolkit/integrations) for more information about how to run your tests in the following CI platforms:

* [Jenkins](/testrunner-toolkit/integrations/jenkins)
* [GitHub Actions](/testrunner-toolkit/integrations/github-actions)
