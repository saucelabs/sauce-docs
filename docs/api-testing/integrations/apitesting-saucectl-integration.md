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
1. Navigate to your Project and select the **WebHooks** tab.<br/>
   <img src={useBaseUrl('img/api-testing/webhook_tab.png')} alt="webhook screenshot" width="200"/>
1. Select **Create Hook**.<br/><img src={useBaseUrl('img/api-testing/createHook.png')} alt="Create New WebHook" width="300"/>
1. Enter a **Hook Name** for your webhook (**Description** is optional), then click **Save**.<br/>
   <img src={useBaseUrl('img/api-testing/sampleHook.png')} alt="sample webhook details" width="300" />
1. The generated **Hook URL** will then appear.

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

### Vault

Commands for interacting with API Testing project vaults.

#### Get Vault

It prints the vault content as json to the standard output stream (stdout). Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault get [--project "project_name"] [flags]
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### Get Variable

Get a variable value from a project's vault. Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault get-variable "variable_name" [--project "project_name"] [flags]
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### Set Variable

Set/update a variable in a project's vault. If a `variable_name` is already in the vault, it is updated with the new one; otherwise, it adds a new variable. Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault set-variable "variable_name" "variable_value" [--project "project_name" ][flags]
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### Get Snippet

Get a snippet from a project's vault. Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault get-snippet "snippet_name" [--project "project_name"] [flags]
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### Set Snippet

Set/update a snippet in a project's vault. If a `snippet_name` is already in the vault, it is updated with the new one; otherwise, it adds a new snippet. You can set a snippet's value by providing a path to a file defining the snippet or using "-" to read from the standard input stream (stdin). Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault set-snippet "variable_name" FILE_NAME [--project "project_name"] [flags] # from a file
```

or

```bash
cat "file_name" | saucectl apit vault set-snippet "variable_name" - [--project "project_name"] [flags] #from stdin
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### List Files

<p><span className="sauceGreen">From version 0.147.0</span></p>

Get a list of files from a project's vault drive. Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault list-files [--project "project_name"] [flags]
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### Upload File

<p><span className="sauceGreen">From version 0.147.0</span></p>

Upload a file in a project's vault drive. Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault upload-file "filename" [--project "project_name"] [flags]
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### Download File

<p><span className="sauceGreen">From version 0.147.0</span></p>

Download a file from a project's vault drive. Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault download-file "filename" [--project "project_name"] [flags]
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### Delete File

<p><span className="sauceGreen">From version 0.147.0</span></p>

Delete a file in a project's vault drive. Use `--project` to specify the project by its name or run without `--project` to choose from a list of projects.

```bash
saucectl apit vault delete-file "filename" [--project "project_name"] [flags]
```

Check the list of [Global Flags](#global-flags) you can use.

---

#### Global Flags

| Key                       | Shorthand | Description                                                                     |
| ------------------------- | --------- | ------------------------------------------------------------------------------- |
| `--help`                  | -h        | Help for the related command.                                                   |
| `--region`                | -r        | The Sauce Labs region. Options: us-west-1, eu-central-1. (default "us-west-1"). |
| `--disable-usage-metrics` |           | Disable usage metrics collection.                                               |
| `--no-color `             |           | Disable colorized output.                                                       |
| `--verbose `              |           | Turn on verbose logging.                                                        |

### Run

Use the `run` command to execute the tests. The console displays the executing tests, distinguishing which mode is running. The results are available immediately following test completion in your [Sauce Labs account](https://app.saucelabs.com/api-testing/).

```bash
saucectl run
```

You can refer to the [Command Reference](/dev/cli/saucectl/run/) for the complete list of options for the `run` command and [saucectl YAML Configuration](/api-testing/integrations/yaml) for more configuration options.
