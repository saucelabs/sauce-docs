---
id: espresso-xcuitest
title: Espresso and XCUITest on Sauce Labs
sidebar_label: Using Espresso and XCUITest
description: Run Espresso and XCUITest projects on Sauce Labs.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs uses its framework agnostic test orchestrator [`saucectl`](/dev/cli/saucectl) to execute Espresso and XCUITest tests based on one or more configuration files that instruct `saucectl` to run your tests exactly the way you specify. Results get published in your Sauce Labs account, where you can compare 30 days of results across different environments and frameworks all in one view.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Your Espresso apps and files for real devices and/or emulators
- Your XCUITest apps and files for real devices (automated tests for simulators are not supported at this time)

## Installation & Setup

`saucectl` can execute both Espresso and XCUITest tests, so the set up steps are the same regardless of which framework you are using.

### 1. Install `saucectl`

Begin by installing the `saucectl` CLI so it has access to your local project.

```bash
sudo sh -c 'curl -L https://saucelabs.github.io/saucectl/install | bash -s -- -b /usr/local/bin'
```

:::caution Required Minimum Versions
XCUITest for Simulators is in <span className="sauceGreen">Beta</span> and requires `saucectl` version `0.1xx.0` or later. If your current version is older, you must upgrade to the most recent one.
:::

### 2. Check out the demo repositories

Clone or download the [Espresso](https://github.com/saucelabs/saucectl-espresso-example) and/or [XCUITest](https://github.com/saucelabs/saucectl-xcuitest-example) example repos, as applicable to your project, to obtain the `saucectl` directory structure and example files for use as templates.

### 3. Link your Sauce Labs account

1. Generate a credentials file that `saucectl` can reference to authenticate your CLI commands.
   ```
   saucectl configure
   ```
1. Enter your Sauce Labs `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` at the prompts.
1. `saucectl` creates a `credentials.yml` file in a `.sauce` folder of your home directory.

:::tip Use Environment Variables
You can set your Sauce Labs credentials as [environment variables](/basics/environment-variables) instead of generating a `credentials.yml`, if you prefer. In systems where both sets of credentials exist, environment variable values are prioritized.
:::

### 4. Configure your test parameters

Each demo repo includes a sample `config.yml` file (in the `<root>/.sauce` directory) that is preconfigured to run the example test, which is also included in the repo.

Modify the `config.yml` file according to the configuration documentation for [Espresso](/mobile-apps/automated-testing/espresso-xcuitest/espresso) and [XCUITest](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest).

:::tip Alternative Config Files
You can create multiple configuration files to support different frameworks or different test setups and then reference the applicable configuration file at runtime using the CLI command:

```
saucectl run -c ./path/to/<configFile>.yml
```

:::

### 5. Run your tests

Use the `saucectl` CLI `run` command to execute your tests using the parameters you have specified in your configuration file.

```
saucectl run
```

You can optionally set [runtime parameters in the CLI](/dev/cli/saucectl/run), but keep in mind that `saucectl` looks for settings in your config file first, so if you use the CLI flags to specify settings that are also set in your config file, the CLI flag values are ignored.
