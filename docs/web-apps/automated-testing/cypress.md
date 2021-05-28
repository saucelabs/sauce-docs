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

* A [Sauce Labs](https://app.saucelabs.com/) account


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

Using `saucectl` to run your Cypress tests and view them in the Sauce Labs app requires a directory structure that includes the Cypress project and the Sauce configuration keys. Follow the steps below to dynamically build the directory.

1. Run the `new` command:
    ```
    saucectl new
    ```
1. At the framework prompt, choose `Cypress`.
1. At the region prompt, choose the Sauce Labs data center applicable to your account.

At this point, `saucectl` generates a project that includes everything required to run a sample Cypress test through `saucectl`.

If it detects a Cypress project already in the directory, `saucectl` will prompt you whether to overwrite any duplicates, such as the `cypress` folder and `cypress.json`. You can choose `No` to these questions to preserve your existing Cypress directory structure and files, and then manually [edit the `saucectl` configuration](/testrunner-toolkit/configuration) to run those tests.

### Run Tests

Use the `run` command to execute the sample test included with the `saucectl` installation or whichever test suites you have defined in the configuration file.

```
saucectl run
```

The console displays the executing tests, distinguishing which mode is running.

The results and test assets are immediately available in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc):

   <img src={useBaseUrl('img/cypress/test-results.png')} alt="Cypress Test Results" />
