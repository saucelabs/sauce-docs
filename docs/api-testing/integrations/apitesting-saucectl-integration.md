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

## Installing `saucectl`

### Step 1: Create a Webhook

To utilize `saucectl` functionalities, you'll need to generate a webhook for your API Testing Project. Once generated, you'll need only the name of your API Testing Project.

To generate a webhook:

1. Log in to Sauce Labs, then click **API Testing**.
2. Navigate to your Project and select the **WebHooks** tab.<br/>
   <img src={useBaseUrl('img/api-testing/webhook_tab.png')} alt="webhook screenshot" width="200"/>
3. Select **Create Hook**.<br/><img src={useBaseUrl('img/api-testing/createHook.png')} alt="Create New WebHook" width="300"/>
4. Enter a **Hook Name** for your webhook (**Description** is optional), then click **Save**.<br/>
   <img src={useBaseUrl('img/api-testing/sampleHook.png')} alt="sample webhook details" width="300" />
5. The generated **Hook URL** will then appear.

### Step 2: Install `saucectl`

Run the install command from your chosen `saucectl` home directory in a terminal shell.

```bash title="Example with npm"
npm install -g saucectl
```

Check the [complete list of available installation options](/dev/cli/saucectl/#installing-saucectl).

### Step 3: Link Your Sauce Labs Account

`saucectl` requires access to a valid Sauce Labs account.

:::tip Use Environment Variables
`saucectl` detects your Sauce Labs credentials [environment variables](/basics/environment-variables) and prioritizes them over values in the `credentials.yml` file when both are present. **If you have set them, you may skip this step.** Not sure if you have them set? Run the following command to check:

```bash
echo $SAUCE_USERNAME
echo $SAUCE_ACCESS_KEY
```

If you get a value for both variables, they are set.
:::

1. Run the `configure` command:

   ```bash
   saucectl configure
   ```

1. Enter your Sauce Labs Username and Access Key at the prompts.

### (Optional) Step 4: Clone the API Testing Project

If you want to try using existing tests, you can clone the GitHub repository, as shown below.

<Tabs
defaultValue="https"
values={[
{label: 'HTTPS', value: 'https'},
{label: 'SSH', value: 'ssh'},
]}>

<TabItem value="https">

```bash
git clone https://github.com/saucelabs/saucectl-apitest-example.git
```

</TabItem>
<TabItem value="ssh">

```bash
git clone git@github.com:saucelabs/saucectl-apitest-example.git
```

</TabItem>
</Tabs>

## `saucectl` Commands

### Run

Use the `run` command to execute the tests. The console displays the executing tests, distinguishing which mode is running. The results are available immediately following test completion in your [Sauce Labs account](https://app.saucelabs.com/api-testing/).

```bash
saucectl run
```

You can refer to the [Command Reference](/dev/cli/saucectl/run/) for the complete list of options for the `run` command and [saucectl YAML Configuration](/api-testing/integrations/yaml) for more configuration options.


### Vault

Supported `saucectl vault` commands:

<table id="table-cli">
  <thead>
    <tr>
      <th>Operation</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/get">Get Vault</a></td>
     <td>Print vault's content in JSON format to the stdout.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/get-variable">Get a Variable</a></td>
     <td>Get a variable value from a project's vault.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/set-variable">Set a Variable</a></td>
     <td>Set/update a variable in a project's vault.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/get-snippet">Get a Snippet</a></td>
     <td>Get a snippet from a project's vault.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/set-snippet">Set a Snippet</a></td>
     <td>Set/update a snippet in a project's vault.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/list-files">List Files</a></td>
     <td>List files stored in the project's vault drive.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/upload-file">Upload a File</a></td>
     <td>Upload a file to a project's vault drive.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/download-file">Download a File</a></td>
     <td>Download a file from a project's vault drive.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/apit/vault/delete-file">Delete a File</a></td>
     <td>Remove a file from a project's vault drive.</td>
   </tr>
  </tbody>
</table>
