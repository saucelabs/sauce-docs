---
id: js-quickstart
title: Quickstart for Sauce Labs with Cypress, Playwright, and TestCafe
sidebar_label: Getting Started with JavaScript Testing
description: Basic steps for getting going quickly with JavaScript based frameworks using TestRunner Toolkit and SauceCTL
---

## Step 1: Install saucectl and the TestRunner Toolkit

You can configure the [Sauce Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit) along with Docker, _or_ run [`saucectl`](https://docs.saucelabs.com/testrunner-toolkit/saucectl) on Sauce Labs VMs.

The basic steps include:

 * [Install saucectl](https://docs.saucelabs.com/testrunner-toolkit/installation#installing-saucectl) with `npm i -g saucectl`

 * Set your [Sauce username and access key](https://docs.saucelabs.com/testrunner-toolkit/installation#use-credentialsyml) with `saucectl configure`
 * Download an example test suite
    * [Cypress](https://github.com/saucelabs/saucectl-cypress-example)
    * [TestCafe](https://github.com/saucelabs/saucectl-testcafe-example)
    * [Playwright](https://github.com/saucelabs/saucectl-playwright-example)
    * [Puppeteer](https://github.com/saucelabs/saucectl-puppeteer-example)
* If you are ready to use your own test
    * Add `.sauceignore `, `.sauce `and `.sauce/config.yml` for your framework using examples above, to your project
    * Update `config.yml` with test suite information including location and dependencies

 > For more detailed instructions please [consult the documentation](https://docs.saucelabs.com/testrunner-toolkit/installation), or see [an example with Cypress ](https://training.saucelabs.com/codelabs/Module1-Testrunner/index.html?index=..%2F..testrunner#2)


## Step 2: Run Your Tests

By Default, Cypress, Playwright, and TestCafe tests are run in _Sauce Mode_ using the Sauce Labs cloud of virtual machines, by running the command:
```
saucectl run
```

If you are adding tests to the example test project, you will need update the [project configuration](https://docs.saucelabs.com/testrunner-toolkit/configuration/cypress) in `.sauce/config.yml` to specify which tests are run, and which environment:


```
    suites:
      - name: "Swag Labs Login Chrome"
        browser: "chrome"
        platformName: "Windows 10"
        config:
          testFiles: [ "**/logintest.*" ]
```


> _Puppeteer is only supported in Docker mode and will run on Docker automatically. See the [tutorial](https://training.staging.saucelabs.net/saucectl/) and [documentation](https://docs.saucelabs.com/testrunner-toolkit/running-tests) to learn more._

You can set the mode in `config.yml`:

*   Set it as a global setting

    ```
    defaults:
      mode: sauce
    ```

*   Set it on the suite level (override)

    ```
    suites:
     - name: saucy test suite
       mode: docker
    ```
