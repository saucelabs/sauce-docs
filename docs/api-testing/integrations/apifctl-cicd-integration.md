---
id: apitesting-saucectl-integration
title: CI/CD Platform Integration with saucectl
sidebar_label: CI/CD Integration (saucectl)
description: 'Using Sauce Labs API Testing or CLI, you can seamlessly integrate continuous API testing into your CI/CD pipeline.'
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using the [`saucectl` CLI](/dev/cli/saucectl), you can execute API tests and interact with Sauce Labs API Testing.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Step 1: Create a Webhook

To utilize `saucectl` functionalities, you'll need to generate a webhook for your API Testing Project. Once generated, you'll need only the name of your API Testing Project.

To generate a webhook:

1. Log in to Sauce Labs, then click **API Testing**.
1. Navigate to your Project and select the **WebHooks** tab.<br/><img src={useBaseUrl('img/api-testing/webhook_tab.png')} alt="webhook screenshot" width="200"/>
1. Select **Create WebHook**.<br/><img src={useBaseUrl('img/api-testing/createHook.png')} alt="Create New WebHook" width="300"/>
1. Enter a **Name** for your webhook (**Description** is optional), then click **Save**.<br/><img src={useBaseUrl('img/api-testing/sampleHook.png')} alt="sample webhook details" width="300" />
1. The generated **Hook URL** will then appear. Your Sauce Labs username, Sauce API Testing endpoint, and `{hook_id}` will populate automatically. For security reasons, you'll need to add your own access key.

## Step 2: Install `saucectl`

In a terminal shell, run the install command from your chosen `saucectl` home directory.

```
npm install -g saucectl
```

## Step 3: Link Your Sauce Labs Account

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


## Step 4: Clone the API Testing Project

<Tabs
defaultValue="https"
values={[
{label: 'HTTPS', value: 'https'},
{label: 'SSH', value: 'ssh'},
]}>

<TabItem value="https">

```
git clone https://github.com/saucelabs/saucectl-apitest-example.git
```

</TabItem>
<TabItem value="ssh">

```
git clone git@github.com:saucelabs/saucectl-apitest-example.git
```

</TabItem>
</Tabs>


## Step 5: Run Tests

Navigate to the root of the API Testing project you just cloned, then use the `run` command to execute the sample test included with the `saucectl` example.

```
cd saucectl-apitest-example
saucectl run
```

The console displays the executing tests, distinguishing which mode is running.

The results and test assets are available immediately following test completion in your [Sauce Labs account](https://app.saucelabs.com/dashboard/tests/vdc).
