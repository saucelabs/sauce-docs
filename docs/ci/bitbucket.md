---
id: bitbucket
title: Sauce Labs with Bitbucket
sidebar_label: Bitbucket Integration
description: Use our plugin to run your Sauce Labs tests within your Bitbucket pipeline.
---

Bitbucket is Atlassian's cloud service continuous integration tool. Launch your automated Selenium and Appium tests on Sauce Labs as part of your Bitbucket Pipelines build process.

## What You'll Need

- Sauce Labs account [Sign Up](https://saucelabs.com/signup/trial)
- The `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` specific to your Sauce Labs account [Find these](/basics/acct-team-mgmt/managing-user-info)
- Bitbucket account [Sign Up](https://bitbucket.org/account/signup/)
- Bitbucket Pipelines installed on your Bitbucket account [Create pipelines](https://confluence.atlassian.com/bitbucket/bitbucket-pipelines-792496469.html)

## Procedure

1. Configure your `bitbucket-pipelines.yml` file to run your tests using your test runner of choice.
1. From your Bitbucket dashboard, choose `Settings`.
1. Under `Pipelines`, choose `Environment Variables`.
1. Add your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as environment variables.

Once these configurations are complete, when you kick off a build with Bitbucket Pipelines, it runs your tests on Sauce Labs.
