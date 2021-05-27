---
id: js-quickstart
title: Quickstart for Sauce Labs with Cypress, Playwright, and TestCafe
sidebar_label: Getting Started with JavaScript Testing
description: Basic steps for getting going quickly with JavaScript based frameworks using TestRunner Toolkit and SauceCTL
---

## Step 1: Install SauceCTL and the TestRunner Toolkit

You can configure the [Sauce Testrunner Toolkit](https://docs.saucelabs.com/testrunner-toolkit) along with Docker, _or_ run [`saucectl`](https://docs.saucelabs.com/testrunner-toolkit/saucectl) on Sauce Labs VMs. 

The basic steps include:

 * Install SauceCTL with `npm i -g saucectl`

 * Set your Sauce username and access key with `saucectl configure`

 * Create a new SauceCTL project with `saucectl new`

 * Update `config.yml` with test suite information including location and dependencies

 > For more detailed instructions please [consult the documentation](https://docs.saucelabs.com/testrunner-toolkit/installation), or see [an example with Cypress ](https://training.saucelabs.com/codelabs/Module1-Testrunner/index.html?index=..%2F..testrunner#2)


## Step 2: Run Your Tests

You can run your Cypress, TestCafe, or Playwright tests in two different ways:

 * __Docker Mode__: Install Docker and run a containerized version of your test environment, then set mode in `config.yml`:
 
 It can be set as a global setting.
 ```yaml
 defaults:
   mode: docker
 ```

It can also be set on suite level. The suite setting will override the global setting for the relevant suite.
 ```yaml
 suites:
   - name: docker suite
     mode: docker
 ```
 
 * __Sauce VM Mode__: Install `saucectl` and pass your entire test suite, including dependencies and configurations, to Sauce Labs Cloud Virtual Machines. Update following in `config.yml` to run your tests on Sauce Labs VMs:

 It can be set as a global setting.
 ```yaml
 defaults:
   mode: docker
 ```

It can also be set on suite level. The suite setting will override the global setting for the relevant suite.
 ```yaml
 suites:
   - name: docker suite
     mode: docker
 ```
 

 > To learn more about running tests please [consult the documentation](https://docs.saucelabs.com/testrunner-toolkit/running-tests), or see an [example with Cypress](https://training.saucelabs.com/codelabs/Module1-Testrunner/index.html?index=../..testrunner#3).
