---
id: installation
title: Testrunner Toolkit Installation and Setup
sidebar_label: Installation and Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs Testrunner Toolkit is a containerized testing solution that simplifies user setup, speeds up test execution time and supports native Javascript frameworks like, [Cypress](https://github.com/cypress-io/cypress) and [TestCafe](https://devexpress.github.io/testcafe/), for running end-to-end web tests with [Sauce Labs](https://saucelabs.com/).

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Install [Docker](https://docs.docker.com/get-docker/)
  > Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g. `docker info` works in your terminal / command prompt
* Know which [test framework and browser versions](/testrunner-toolkit#supported-frameworks-and-browsers) you plan to run tests against

### System Requirements

The system requirements to successfully run `saucectl` vary depending on whether you plan to run it locally via [`docker`](/testrunner-toolkit/running-tests#run-your-first-test), or remotely via [`sauce`](/testrunner-toolkit/running-tests#test-on-sauce-labs).

As a rule of thumb, your local system requirements should match the [Docker installation requirements](https://docs.docker.com/engine/install/#supported-platforms). Please use the table below as a quick reference:

<Tabs
  defaultValue="macos"
  values={[
    {label: 'macOS', value: 'macos'},
    {label: 'Linux', value: 'linux'},
    {label: 'Windows', value: 'windows'},
  ]}>

<TabItem value="macos">

* Docker: [Desktop](https://docs.docker.com/docker-for-mac/install/)
* OS: 10.14+ (Mojave, Catalina, or Big Sur)

> Browser support depends on the chosen test framework, see [this section](/testrunner-toolkit#supported-frameworks-and-browsers) for more details.

</TabItem>
<TabItem value="linux">

* Docker: [Server](https://docs.docker.com/engine/install/#server)
* OS/Distros: [CentOS](https://docs.docker.com/engine/install/centos/), [Debian](https://docs.docker.com/engine/install/debian/), [Fedora](https://docs.docker.com/engine/install/fedora/), [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

> Browser support depends on the chosen test framework, see [this section](/testrunner-toolkit#supported-frameworks-and-browsers) for more details.

</TabItem>
<TabItem value="windows">

* Docker: [Desktop](https://docs.docker.com/docker-for-windows/install/)
* OS: Windows 10 ([Home](https://docs.docker.com/docker-for-windows/install-windows-home/), Pro, Enterprise, or Education)

> Browser support depends on the chosen test framework, see [this section](/testrunner-toolkit#supported-frameworks-and-browsers) for more details.

</TabItem>
</Tabs>

## Installing Testrunner Toolkit

There are multiple ways to install the Sauce Labs Testrunner Toolkit (colloquially known as `saucectl`):

* ```bash title="Using curl"
  curl -L https://saucelabs.github.io/saucectl/install | bash
  ```

* ```bash title="Using NPM"
  npm install -g saucectl
  ```
  
* ```bash title="Using NPM and SAUCECTL_INSTALL_BINARY"
  SAUCECTL_INSTALL_BINARY=https://company.domain.com/saucectl_0.32.2_mac_64-bit.tar.gz npm install -g saucectl
  ```
Using the `SAUCECTL_INSTALL_BINARY` environment variable, you can control how `saucectl` is installed. You can use it in case you need to download `saucectl` from a known source or in case you use `npx saucectl`.

* ```bash title="Using Homebrew (macOS)"
  brew tap saucelabs/saucectl
  brew install saucectl
  ```

If you would like to inspect the content of our one line installer, download it, have a look, and execute it:

```bash
curl -fsSL -o get_saucectl.sh https://saucelabs.github.io/saucectl/install && \
chmod 700 get_saucectl.sh && \
./get_saucectl.sh
```

:::warning Are you using mingw?
Mingw on Windows is known to interfere with `saucectl`, especially with interactive commands like `saucectl configure` or `saucectl new`.
We therefore advise Windows users to simply use `cmd` or `powershell` when interacting with `saucectl`.
:::

## Connecting to Sauce Labs

You need to retrieve your Sauce Labs `username` and `accessKey` in order post your test results to the Sauce Labs platform. To retrieve your Sauce Labs account credentials navigate to [Account > User Settings](https://app.saucelabs.com/user-settings).

:::note
You should run the following commands in the root of your project directory
:::

### Using Environment Variables

Sauce Labs recommends as a best practice to set your account credentials as environment variables like so:

```bash
SAUCE_USERNAME='valid.username'
SAUCE_ACCESS_KEY='valid.key'
```

>
> If you are using a cloud CI/CD tool, we strongly suggest protecting these values through secrets or context variables.
>

:::tip
For specific instructions on how to set environment variables visit, the following links:
* [Set Environment Variables with Windows 10](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/)
* [Set Environment Variables with MacOS](https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x)
* [Set Environment Variables with Linux](https://askubuntu.com/questions/58814/how-do-i-add-environment-variables)
:::

### Using the Configure Command

Testrunner Toolkit generally does a good job of detecting the presence of `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`, but to ensure you're properly authenticated, you can run the following optional command:

```bash
saucectl configure
```

This command prompts you to manually enter your credentials if it cannot detect any environment variables, and will generate a `credentials.yml` file in a `.sauce` directory in your home folder.

:::warning Do NOT commit `credentials.yml`
It should go without saying, but do not publicly expose your `credentials.yml` file over the internet. Make sure you add this file to your `.gitignore` file, as you should only use it locally.
:::

### Training

See the tutorial and video on [setting up your Testrunner Toolkit environment](https:/training.saucelabs.com/testrunner/index.html) for more help.

## Create a Configuration File 

:::tip
If you already have existing tests, skip ahead to the [Running Tests](/testrunner-toolkit/running-tests) section.
:::

Follow the steps below in order to generate a config file, which in turn creates the necessary test files in your project's root directory.

* a config file (e.g. `.sauce/config.yml`)
* the `tests` directory and other necessary files (e.g. `cypress.json` and `cypress/`)
* an example test (e.g. `cypress/integration/example.test.js`)

Run the following command to generate a config file:

```bash
saucectl new
```


### Choose a Framework
After running this command, a prompt appears asking you to select the desired framework:

```bash
8:59AM INF Start New Command
     Choose a framework:
     ❯ Cypress
       Playwright
       Testcafe
```


### Select a Data Center
Next, a prompt appears asking you to select the desired [Sauce Labs data center](https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints):

```bash
8:59AM INF Start New Command
     Choose a framework: Cypress
     Choose the sauce labs region:
     ❯ us-west-1
       eu-central-1
```

Testrunner Toolkit generates a new config file in your current working directory (`.sauce/config.yml`) and prompts you to execute the `saucectl run` command.

## Next Steps

* __Run a Test__: Visit the [Running Tests](/testrunner-toolkit/running-tests) page for more detailed information about running tests with Testrunner Toolkit.
* __Configuration Syntax__: Visit the [Configuration](/testrunner-toolkit) page for detailed information on how to modify the `config.yml`, as well as syntax explanations.
