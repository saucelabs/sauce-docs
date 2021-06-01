---
id: cypress
title: Cypress on Sauce Labs
sidebar_label: Cypress
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) is a JavaScript front end web application testing framework. `saucectl` -- the Sauce Labs test orchestrator CLI allows you to run Cypress tests directly from your existing Cypress project.

* Don't have Cypress yet? `saucectl` can set up your initial project directory and give you a sample test to run.
* Already running Cypress? Let `saucectl` run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics.  

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

### Set up Your Cypress Project

Using `saucectl` to run your Cypress tests and view them in the Sauce Labs app requires a directory structure that includes the Cypress project and the Sauce configuration keys. Please clone our [cypress example repository](https://github.com/saucelabs/saucectl-cypress-example).

### Run Tests

Use the `run` command to execute the sample test included with the `saucectl` installation or whichever test suites you have defined in the configuration file.

```
saucectl run
```

The console displays the executing tests, distinguishing which mode is running.

The results and test assets are immediately available in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc):

   <img src={useBaseUrl('img/cypress/test-results.png')} alt="Cypress Test Results" />
