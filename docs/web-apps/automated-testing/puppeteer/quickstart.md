---
id: quickstart
title: Puppeteer Quickstart
sidebar_label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Use `saucectl` -- the Sauce Labs test orchestrator CLI to run [Puppeteer](https://github.com/puppeteer) tests directly from your existing Puppeteer project.

* Don't have Puppeteer tests but want to try? The  [Puppeteer Demo Repo](https://github.com/saucelabs/saucectl-puppeteer-example) includes a sample project structure, working configuration file, and sample Puppeteer test so you can get up and running in less than 10 minutes!
* Already running Puppeteer? Let `saucectl` run your tests in Docker and then publish the results in the Sauce Labs app, where you can easily analyze 30 days worth of test results and data analytics.  

## What You'll Need

* A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* [Docker](https://docs.docker.com/get-docker/) For now, Puppeteer is only supported for local testing.

:::note
Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g., `docker info` works in your terminal / command prompt)
:::

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

## Step 3: Set up Your Puppeteer Project

 Check out the [Puppeteer Demo Repo](https://github.com/saucelabs/saucectl-puppeteer-example) to get a Puppeteer project structure, Puppeteer-ready configuration file, and sample Puppeteer test.

## Step 4: Run Tests

Use the `run` command to execute the sample test included with the `saucectl` example.

```
saucectl run
```

The console displays the executing tests, confirming that Docker mode is running and the results and test assets are immediately available in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc).
