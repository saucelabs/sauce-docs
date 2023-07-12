---
id: webdriverio
title: WebdriverIO Quickstart
sidebar_label: WebdriverIO Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This page explains how to run your WebdriverIO tests in Sauce Orchestrate with `saucectl`.

## What You'll Need

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- [Node.js](https://nodejs.org/en/) to use the NPM package manager
- A [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) account
- [Git](https://git-scm.com/downloads)
- Access to a Docker registry. This example uses [DockerHub](https://hub.docker.com).
- [Docker installed](https://docs.docker.com/engine/install/) if you want to modify and rebuild the example docker image.

## How Orchestrate Works

Sauce Orchestrate uses container technology to package and run your tests in the Sauce Labs cloud. See [How it Works](/orchestrate/getting-started/#how-it-works) for more details.

The following example uses a project with a `saucectl` configuration file that is set up to run in Orchestrate. See [`saucectl` Configuration](/orchestrate/saucectl-configuration) for more information about the configuration and run options available. The example also has a Dockerfile for building the container image. See [Building Images](/orchestrate/building-images) for more information about creating your own container images.

## Step 1: Clone the Project

<Tabs
defaultValue="https"
values={[
{label: 'HTTPS', value: 'https'},
{label: 'SSH', value: 'ssh'},
]}>

<TabItem value="https">

```
git clone https://github.com/saucelabs/saucectl-imagerunner-example.git
```

</TabItem>
<TabItem value="ssh">

```
git clone git@github.com:saucelabs/saucectl-imagerunner-example.git
```

</TabItem>
</Tabs>

## Step 2: Link Your Sauce Labs Account

`saucectl` requires access to a valid Sauce Labs account.

:::tip Use Environment Variables
`saucectl` uses your Sauce Labs credentials as [environment variables](/basics/environment-variables) and prioritizes them over values in the `credentials.yml` file when both are present. **If you have set them, you may skip this step.** Not sure if you have them set? Run the following command to check:

```
echo $SAUCE_USERNAME
echo $SAUCE_ACCESS_KEY
```

If a value is returned for both variables, they are set.
:::

1. Run the `configure` command:

   ```
   saucectl configure
   ```

1. Enter your Sauce Labs Username and Access Key at the prompts.

## Step 3: Install `saucectl`

Navigate to the WebdriverIO example in the project you just cloned, then install `saucectl`.

```
cd saucectl-imagerunner-example/webdriverio
npm install -g saucectl
```

## Step 4: Run Tests Using saucectl

Run the WebdriverIO tests.

```
saucectl run
```

The console displays the running tests, distinguishing which mode is running.

After the tests are run, `saucectl` outputs the command logs from Orchestrate and downloads the artifacts from the container.

The following is an example CLI output.

```
13:36:16 INF Downloading artifacts archive

       Name                              Duration    Status       Attempts
────────────────────────────────────────────────────────────────────────────
  ✔    WebdriverIO in ImageRunner            1m1s    Succeeded           1
────────────────────────────────────────────────────────────────────────────
  ✔    All suites have passed               1m13s
```

The results and test assets are also available immediately following test completion in your [Sauce Labs account](https://app.saucelabs.com/dashboard/tests/vdc).
