---
id: cypress
title: Cypress on Sauce Labs
sidebar_label: Cypress
---

This page provides a walkthrough on how to run [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) tests locally and on Sauce Labs.

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Ensure you've met the prerequisites outlined in the [Testrunner Toolkit documentation](/testrunner-toolkit/installation#what-youll-need)

## Run Cypress Tests Locally

The following steps outline how to run your cypress tests using the containerized solution, [Testrunner Toolkit](/testrunner-toolkit):

1. Install [saucectl](https://github.com/saucelabs/saucectl):
    
    ```bash title="Using curl"
    curl -L https://saucelabs.github.io/saucectl/install | bash
    ```

    ```bash title="Using NPM"
    npm install -g saucectl
    ```

    ```bash title="Using Homebrew (macOS)"
    brew install saucectl
    ```
      
2. Configure your Sauce Labs credentials:

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
      
      
3. Create the `saucectl` configuration:
    
    ```bash
    saucectl new
    ```

4. Choose the `cypress` framework. This command generates the default `cypress` directory, the `cypress.json` file, and an example cypress test:
    
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

5. Choose a Sauce Labs data center location:

    ```bash
    INF Start New Command
    Choose a framework: Cypress
    Choose the sauce labs region:
    ❯ us-west-1
      eu-central-1
    ```
   
6. Run your cypress tests:

    ```bash
    saucectl run
    ```

7. Verify the results in the Sauce Labs dashboard:

    > Insert video and/or screenshot

## Run Cypress Tests on Sauce Labs

The following steps outline how to run your cypress tests using Sauce Labs virtual machines:

1. Download and install `saucectl`:
    
    ```bash title="curl Example"
    curl -L https://saucelabs.github.io/saucectl/install | bash
    ```
      
2. Configure your Sauce Labs credentials:

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
      
      
3. Create the `saucectl` configuration:
    
    ```bash
    saucectl new
    ```

4. Choose the `cypress` framework. This command generates the default `cypress` directory, the `cypress.json` file, and an example cypress test:
    
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

5. Choose a Sauce Labs data center location:

    ```bash
    INF Start New Command
    Choose a framework: Cypress
    Choose the sauce labs region:
    ❯ us-west-1
      eu-central-1
    ```
   
6. Run your cypress tests with the following `saucectl` parameter:

    ```bash
    saucectl run --test-env sauce
    ```
   
   > For more information regarding the `saucectl` parameters, including how to increase your VM concurrency, please visit the [CLI Reference](/dev/cli/saucectl#test-env) and the [configuration](/testrunner-toolkit/configuration) documentation.

7. Verify the results in the Sauce Labs dashboard:

    > Insert video and/or screenshot
