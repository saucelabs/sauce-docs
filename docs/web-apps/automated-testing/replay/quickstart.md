---
id: quickstart
title: Replay Quickstart
sidebar_label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Use `saucectl` — the Sauce Labs test orchestrator CLI — to replay [Chrome DevTools Recordings](https://developer.chrome.com/docs/devtools/recorder).

- Don't have a DevTools recording but want to try? Follow the steps below to use the Replay Demo Repo to build a sample project structure, working configuration file, and sample recording &#8212; get up and running in less than 10 minutes!

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- [Node.js](https://nodejs.org/en/) to use the NPM package manager
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

1. Enter your Sauce Labs username and access key at the prompts.

## Step 3: Set up Your Replay Project

Clone the [Replay Demo Repo](https://github.com/saucelabs/saucectl-replay-example) to get a project structure, configuration file, and sample recording. Use the command below that is applicable to your GitHub setup.

<Tabs
defaultValue="https"
values={[
{label: 'HTTPS', value: 'https'},
{label: 'SSH', value: 'ssh'},
]}>

<TabItem value="https">

```
git clone https://github.com/saucelabs/saucectl-replay-example.git
```

</TabItem>
<TabItem value="ssh">

```
git clone git@github.com:saucelabs/saucectl-replay-example.git
```

</TabItem>
</Tabs>

## Step 4: Replay Recordings

Navigate to the root of the Replay project you just cloned, then use the `run` command to replay the sample recording included with the `saucectl` example.

```
cd saucectl-replay-example
saucectl run
```

The results are available immediately following job completion in your [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/tests/vdc).

## Step 5: Roll Your Own

Ready to create your own recordings? Follow [this tutorial](https://developers.google.com/codelabs/devtools-recorder#3) and export your DevTools Recording to JSON.
