---
id: js-quickstart
title: Quickstart for Sauce Labs with Cypress, Playwright, and TestCafe
sidebar_label: Getting Started with JavaScript Testing
description: Basic steps for getting going quickly with JavaScript based frameworks using TestRunner Toolkit and SauceCTL
---

## Step 1: Install SauceCTL and the TestRunner Toolkit

You can set up the Sauce Testrunner Toolkit along with Docker _or_ run SauceCTL on Sauce Labs VMs on your computer MacOS Computer. 

The basic steps include:

* Install SauceCTL with `npm i -g saucectl`

* Set your Sauce username and access key with `saucectl configure`

* Create a new SauceCTL project with `saucectl new`

* Update `config.yml` with test suite information

> For more detailed instructions please [consult the documentation](https://docs.saucelabs.com/testrunner-toolkit/installation), or see [an example with Cypress ](https://training.saucelabs.com/codelabs/Module1-Testrunner/index.html?index=..%2F..testrunner#2)


## Step 2: Run Your Tests

You can run your Cypress, TestCafe, or Playwright test in two different ways:

*   **Docker Mode –** Install Docker and run a containerized version of your test environment, then pass the results to the Sauce Labs Dashboard , using the command:

  ```bash
  saucectl run --test-env docker
  ```
  
*   **Sauce Mode -** Install SauceCTL then pass your entire test suite, including dependencies and configurations to Sauce Labs Cloud of Virtual Machines, where your tests will be executed as per your configurations. Use the command:
  
  ```bash
  saucectl run
  ``` 
  
  or 
  
  ```bash
  saucectl run --test-env sauce
  ``` 
  
  to run your tests on Sauce Labs VMs.

> To learn more about running tests please [consult the documentation](https://docs.saucelabs.com/testrunner-toolkit/running-tests), or see an [example with Cypress](https://training.saucelabs.com/codelabs/Module1-Testrunner/index.html?index=../..testrunner#3).
