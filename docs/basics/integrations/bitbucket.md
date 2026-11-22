---
id: bitbucket
title: Sauce Labs with Bitbucket
sidebar_label: Bitbucket
description: Run your Sauce Labs tests in your Bitbucket pipeline.
---

[Bitbucket](https://bitbucket.org/) is Atlassian's cloud service continuous integration tool. The Sauce Labs integration with Bitbucket Pipelines lets you launch your automated Selenium and Appium tests on Sauce Labs as part of your Bitbucket Pipelines build process.

## How It Works

You run your Sauce Labs tests as part of your Bitbucket Pipelines build process. Your `bitbucket-pipelines.yml` file runs your tests with your test runner of choice, and your tests connect to Sauce Labs instead of a local browser or device.

Your tests authenticate with Sauce Labs using your Sauce Labs username and access key, which you store as environment variables in Bitbucket. Your tests read them from the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` variables, so you don't need to write your credentials into your test code. When you kick off a build with Bitbucket Pipelines, the pipeline runs your tests on Sauce Labs, and the results appear in Sauce Labs.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([sign up](https://saucelabs.com/signup/trial) if you don't have one).
- The `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` for your Sauce Labs account. See [Managing User Information](/basics/acct-team-mgmt/managing-user-info).
- A Bitbucket account ([sign up](https://bitbucket.org/account/signup/) if you don't have one).
- Bitbucket Pipelines enabled on your Bitbucket account. See [Bitbucket Pipelines](https://confluence.atlassian.com/bitbucket/bitbucket-pipelines-792496469.html).

## Set Up the Integration

1. Configure your `bitbucket-pipelines.yml` file to run your tests using your test runner of choice.
2. Add your Sauce Labs credentials to Bitbucket as environment variables. See [Authentication](#authentication).

## Authentication

The integration authenticates with your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). Store them as environment variables in Bitbucket so you don't need to write them into your test code.

1. From your Bitbucket dashboard, choose **Settings**.
2. Under **Pipelines**, choose **Environment Variables**.
3. Add your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as environment variables.

## Verify the Integration

1. Kick off a build with Bitbucket Pipelines.
2. When the build completes, open the [Automated Test Results](https://app.saucelabs.com/dashboard/tests/vdc) page in Sauce Labs.
3. Confirm that the tests from your build appear in the list.

## Use the Integration

After you set up the integration, every build that you kick off with Bitbucket Pipelines runs your tests on Sauce Labs.

To run your Sauce Labs tests from Bitbucket:

1. Push a change to your repository, or kick off a build manually with Bitbucket Pipelines.
2. When the build completes, open your test results in Sauce Labs.

The tests run on Sauce Labs, and the results appear in Sauce Labs. See [Viewing Test Results](/test-results/viewing-test-results/).

## Troubleshooting

<details>
<summary>**Your tests cannot authenticate with Sauce Labs**</summary>

Check that the environment variables in Bitbucket are named exactly `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`, and that their values match your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings).

</details>

<details>
<summary>**The pipeline does not run your tests**</summary>

Make sure Bitbucket Pipelines is enabled for your account, and that your `bitbucket-pipelines.yml` file runs your tests with your test runner.

</details>

## Next Steps

- [Viewing Test Results](/test-results/viewing-test-results/)
- [Data Center Endpoints](/basics/data-center-endpoints/)
- [Integrations Overview](/basics/integrations-overview/)
