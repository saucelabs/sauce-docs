---
id: quickstart
title: Cypress Quickstart
sidebar_label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Use `saucectl` — the Sauce Labs test orchestrator CLI — to run [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) tests directly from your existing Cypress project.

- Don't have Cypress tests but want to try? Follow the steps below to use the Cypress Demo Repo to build a sample project structure, working configuration file, and sample Cypress test &#8212; get up and running in less than 10 minutes!
- Already running Cypress? Let `saucectl` run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- [Node.js](https://nodejs.org/en/) to use the NPM package manager
- A [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) account
- [Git](https://git-scm.com/downloads)

## Step 1: Install `saucectl`

In a terminal shell, run the install command from your chosen `saucectl` home directory.

```
npm install -g saucectl
```

## Step 2: Link Your Sauce Labs Account

`saucectl` requires access to a valid Sauce Labs account.

:::tip Use Environment Variables
`saucectl` detects your Sauce Labs credentials [environment variables](/basics/environment-variables) and prioritizes them over values in the `credentials.yml` file when both are present. **If you have set them, you may skip this step.** Not sure if you have them set? Run the following command to check:

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

## Step 3: Set up Your Cypress Project

Clone the [Cypress Demo Repo](https://github.com/saucelabs/saucectl-cypress-example) to get a Cypress project structure, Cypress-ready configuration file, and sample Cypress test. Use the command below that is applicable to your GitHub setup.

<Tabs
defaultValue="https"
values={[
{label: 'HTTPS', value: 'https'},
{label: 'SSH', value: 'ssh'},
]}>

<TabItem value="https">

```
git clone https://github.com/saucelabs/saucectl-cypress-example.git
```

</TabItem>
<TabItem value="ssh">

```
git clone git@github.com:saucelabs/saucectl-cypress-example.git
```

</TabItem>
</Tabs>

## Step 4: Run Tests

Navigate to the versioned example you would like to use. v1 is an example for Cypress 10 and above. Then use the `run` command to execute the sample test included with the `saucectl` example.

```
cd saucectl-cypress-example/v1
saucectl run
```

The console displays the executing tests, distinguishing which mode is running.

The results and test assets are available immediately following test completion in your [Sauce Labs account](https://app.saucelabs.com/dashboard/tests/vdc).
