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

## Configure `saucectl`

Before you begin running playwright tests, you must configure `saucectl`: 

1. Configure your Sauce Labs credentials:

    * via system environment variables:
        
        ```bash title="bash example"
        export SAUCE_USERNAME=<your sauce labs username>
        export SAUCE_ACCESS_KEY=<your sauce labs access key>
        ```
    
    * via `saucectl configure`:
    
        ```bash
        saucectl configure
        ```
      
      This command generates a `credentials.yml` file:
      
      ```yaml title="example credentials.yml"
      username: <your saucelabs username>
      accessKey: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
      source: saucectl configure
      ```
      
      :::warning Do NOT commit `credentials.yml`
      It should go without saying, but do not publicly expose your `credentials.yml` file over the internet. Make sure you add this file to your `.gitignore` file, as you should only use it locally.
      :::  
      
2. Create the `saucectl` configuration:
    
    ```bash
    saucectl new
    ```

3. Choose the `Playwright` framework. This command generates the default `tests/playwright` directory, and an example playwright test:
    
    ```bash
    INF Start New Command
    Choose a framework:
      Puppeteer
    ❯ Playwright
      Testcafe
      Cypress
    ```
   
    :::tip Want to use your existing Playwright tests?
    If you have existing Playwright tests, `saucectl` prompts you to overwrite your `tests/playwright/` directory, and other relevant test configuration files.
    
    If you want to edit the configuration manually select "No" and visit the [configuration](/testrunner-toolkit/configuration#configuration-examples) documentation for more details.
    :::

4. Choose a Sauce Labs data center location:

    ```bash
    INF Start New Command
    Choose a framework: Playwright
    Choose the sauce labs region:
    ❯ us-west-1
      eu-central-1
    ```
   
## Run Tests Locally

The following steps outline how to run your playwright tests on your local machine with the containerized solution, [Testrunner Toolkit](/testrunner-toolkit):

1. Run your playwright tests using `docker` mode by modifying `config.yml` like following:

    ```yaml
    defaults:
      mode: docker
    ```
    _or_

    ```yaml
    suites:
      - name: saucy test
        mode: docker
    ```
   
   The test results display in the console like so:
   
    ```bash
    Run ./saucectl run -c ./.sauce/config.yml
    00:14:19 INF Running version 0.30.0
    00:14:19 INF Reading config file config=./.sauce/config.yml
    00:14:19 INF Running Playwright in Docker
    
    ⠋ Pulling image saucelabs/stt-playwright-node:v1.7.4
       
   00:15:42 INF Launching workers. concurrency=1
   00:15:42 INF Setting up test environment suite="saucy test"
   00:15:42 INF File mounted from=tests/playwright/ suite="saucy test" to=/home/seluser/playwright
   00:15:42 INF Using credentials set by environment variables suite="saucy test"
   ........00:15:50 INF Starting container id=91afa3083b77 img=saucelabs/stt-playwright-node:v1.7.4 suite="saucy test"
   .........00:15:59 INF Tearing down environment suite="saucy test"
   ```
   
  > You can also troubleshoot any issues with the [--verbose](/testrunner-toolkit/saucectl#verbose) flag.

2. A Sauce Labs job link appears in the console where you can [verify the results in the Sauce Labs dashboard](#run-tests-on-sauce-labs):

    ```bash
    00:16:00 INF Suites completed: 1/1
    00:16:00 INF Suite finished. passed=true suite="saucy test" 
            url=https://app.saucelabs.com/tests/8f332330914d431cb0fe9191615cb144
    00:16:00 INF Suites expected: 1
    00:16:00 INF Suites passed: 1
    00:16:00 INF Suites failed: 0
    ```
   
## Run Tests on Sauce Labs

The following steps outline how to run your playwright tests using Sauce Labs virtual machines:
   
1. Run your playwright tests with the following `saucectl` settings:

    ```yaml
    defaults:
      mode: sauce
    ```
    _or_

    ```yaml
    suites:
      - name: saucy test
        mode: sauce
    ```
   
   > For more information regarding the `saucectl` parameters, including how to increase your VM concurrency, please visit the [configuration](/testrunner-toolkit/configuration) documentation.

6. Watch test runs in real-time, or verify the results in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc):
   
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
