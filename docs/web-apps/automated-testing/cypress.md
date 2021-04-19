---
id: cypress
title: Cypress on Sauce Labs
sidebar_label: Cypress
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page provides a walkthrough on how to run [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) tests locally and on Sauce Labs.

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* [Download and install `saucectl`](/testrunner-toolkit/installation#installing-testrunner-toolkit)
    * Ensure you've met the prerequisites outlined in the [Testrunner Toolkit documentation](/testrunner-toolkit/installation#what-youll-need)

## Configure `saucectl`

Before you begin running cypress tests, you must configure `saucectl` if you plan to view test results on the Sauce Labs dashboard or running tests on the Sauce Labs VMs:      

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

3. Choose the `cypress` framework. This command generates the default `cypress` directory, the `cypress.json` file, and an example cypress test:
    
    ```bash
    INF Start New Command
    Choose a framework:
      Puppeteer
      Playwright
      Testcafe
    ❯ Cypress
    ```
   
    :::tip Want to use your existing Cypress tests?
    If you have existing cypress tests, `saucectl` prompts you to potentially overwriting the `cypress` directory and the `cypress.json` file. 
    
    If you want to edit the configuration manually select "No" and visit the [configuration](/testrunner-toolkit/configuration#configuration-examples) documentation for more details.
    :::

4. Choose a Sauce Labs data center location:

    ```bash
    INF Start New Command
    Choose a framework: Cypress
    Choose the sauce labs region:
    ❯ us-west-1
      eu-central-1
    ```
   
## Run Tests Locally

The following steps outline how to run your cypress tests on your local machine with the containerized solution, [Testrunner Toolkit](/testrunner-toolkit):

1. Run your cypress tests using `docker` mode by modifying `config.yml`:

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
    9:49AM INF Running version 0.23.2
    9:49AM INF Reading config file config=.sauce/config.yml
    9:49AM INF Starting local runner
    9:49AM INF Setting up test environment
    9:49AM INF File mounted from=./tests/ to=/home/seluser/tests
    9:49AM INF Using credentials from environment variables
    9:49AM INF Starting tests
    
    > sauce-cypress-runner@0.0.0 test /home/seluser
    > ./bin/cypress
    
    It looks like this is your first time using Cypress: 4.9.0
    
    [18:49:28]  Verifying Cypress can run /home/seluser/.cache/Cypress/4.9.0/Cypress [started]
    [18:49:33]  Verified Cypress!       /home/seluser/.cache/Cypress/4.9.0/Cypress [title changed]
    [18:49:33]  Verified Cypress!       /home/seluser/.cache/Cypress/4.9.0/Cypress [completed]
    
    Opening Cypress...
    
    ================================================================================
    
      (Run Starting)
   
   ```
  
   
  > You can also troubleshoot any issues with the [--verbose](/testrunner-toolkit/saucectl#verbose) flag.

2. A Sauce Labs job link appears in the console where you can [verify the results in the Sauce Labs dashboard](#run-tests-on-sauce-labs):

    ```bash
    Preparing assets for tests/home.tree.test.js
    
    Open job details page: https://app.saucelabs.com/tests/8fb13276b39f40c2b05048776bcaeaf6
    ```
   
## Run Tests on Sauce Labs

The following steps outline how to run your cypress tests using Sauce Labs virtual machines:
   
1. Run your cypress tests with the following `saucectl` setting:

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
   
   <img src={useBaseUrl('img/cypress/test-results.png')} alt="Cypress Test Results" />

:::warning Running Tests with a Local App

If you plan to run your cypress tests with either of the following scenarios:

* A `localhost` app running on your host machine
* An app running locally in a CI pipeline
* An app running on a local app server in a private network

Please review the following [documentation section](/testrunner-toolkit/running-tests#run-tests-against-a-local-app) for further details.
:::

## Additional Resources

Below are some additional topics related to using Cypress with Sauce Labs.

### Configuration Details

Please visit the [Configuration page](/testrunner-toolkit/configuration) to learn more about `config.yml` and the specific fields and properties:

* [Common Syntax Reference](/testrunner-toolkit/configuration#common-syntax-reference)
* [Cypress Syntax Reference](/testrunner-toolkit/configuration/cypress)

### Running in CI

Please visit [our CI integrations page](/testrunner-toolkit/integrations) for more information about how to run your tests in the following CI platforms:

* [Jenkins](/testrunner-toolkit/integrations/jenkins)
* [GitHub Actions](/testrunner-toolkit/integrations/github-actions)