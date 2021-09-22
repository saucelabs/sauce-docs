---
id: quickstart
title: Cypress Quickstart
sidebar_label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

 Use `saucectl` -- the Sauce Labs test orchestrator CLI to run [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) tests directly from your existing Cypress project.

 * Don't have Cypress tests but want to try? The  [Cypress Demo Repo](https://github.com/saucelabs/saucectl-cypress-example) includes a sample project structure, working configuration file, and sample Cypress test so you can get up and running in less than 10 minutes!
 * Already running Cypress? Let `saucectl` run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics.  

## What You'll Need

 * A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
 * Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)


## Step 1: Install `saucectl`

 ```
 npm install -g saucectl
 ```

## Step 2: Link Your Sauce Labs Account

 `saucectl` requires access to a valid Sauce Labs account.

 1. Run the `configure` command:     
     ```
     saucectl configure
     ```
 1. Enter your Sauce Labs Username and Access Key at the prompts.

 :::tip Use Environment Variables
 You can set your Sauce Labs credentials as [environment variables](/basics/environment-variables) instead of generating a `credentials.yml`, if you prefer. In systems where both sets of credentials exist, environment variable values are prioritized.
 :::

## Step 3: Set up Your Cypress Project

  Check out the [Cypress Demo Repo](https://github.com/saucelabs/saucectl-cypress-example) to get a Cypress project structure, Cypress-ready configuration file, and sample Cypress test.

## Step 4: Run Tests

 Use the `run` command to execute the sample test included with the `saucectl` example.

 ```
 saucectl run
 ```

 The console displays the executing tests, distinguishing which mode is running.

 The results and test assets are available immediately in your [Sauce Labs account](https://app.saucelabs.com/dashboard/tests/vdc):

  <img src={useBaseUrl('img/cypress/test-results.png')} alt="Cypress Test Results" />
