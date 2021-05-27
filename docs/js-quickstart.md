---
id: js-quickstart
title: Quickstart for Sauce Labs with Cypress, Playwright, and TestCafe
sidebar_label: Getting Started with JavaScript Testing
description: Basic steps for getting going quickly with JavaScript based frameworks using TestRunner Toolkit and SauceCTL
---

## Step 1: Install sauceCTL and the TestRunner Toolkit

You can configure the [Sauce Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit) along with Docker, _or_ run [`saucectl`](https://docs.saucelabs.com/testrunner-toolkit/saucectl) on Sauce Labs VMs.

The basic steps include:

*   Install saucectl with `npm i -g saucectl`
*   Set your Sauce username and access key with `saucectl configure`
*   Download an example test suite
    *   [Cypress](https://github.com/saucelabs/saucectl-cypress-example)
    *   [TestCafe](https://github.com/saucelabs/saucectl-testcafe-example)
    *   [Playwright](https://github.com/saucelabs/saucectl-playwright-example)
    *   [Puppeteer](https://github.com/saucelabs/saucectl-puppeteer-example)
*   If you are ready to use your own test
    *   Add `.sauceignore `, `.sauce `and `.sauce/config.yml` for your framework using examples above, to your project
    *   Update `config.yml` with test suite information including location and dependencies

 > For more detailed instructions please [consult the documentation](https://docs.saucelabs.com/testrunner-toolkit/installation), or see [the Cypress on Sauce Course](https://training.saucelabs.com/saucectl/)


## Step 2: Run Your Tests

By default your Cypress, TestCafe, or Playwright tests test suites are run on Sauce Labs VMs when you run the command:

### `saucectl run`


You have the option to run your tests in Docker mode or in a combination of _Docker mode_ and _Sauce mode_. To change these settings

Set mode in `config.yml`:



*   Set it as a global setting

    ```
    defaults:
      mode: sauce
    ```


*   Set it on the suite level (override)

    ```
    Suites:
     - name: saucy test suite
       mode: docker

    ```


> _Puppeteer is only supported in Docker Mode and will run in Docker mode automatically. See the [tutorial](https://training.staging.saucelabs.net/saucectl/) and [documentation](https://docs.saucelabs.com/testrunner-toolkit/running-tests) to learn more_
