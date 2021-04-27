---
id: installation
title: Installing `saucectl`
sidebar_label: Installation and Setup
description: Run tests on Sauce using any framework in any language.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `saucectl` command line tool orchestrates the communication between Sauce Labs and your test framework.  

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Know which [test framework and browser versions](/testrunner-toolkit#supported-frameworks-and-browsers) you plan to run tests against
* [Docker](https://docs.docker.com/get-docker/), if you plan to run tests locally

:::note
Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g., `docker info` works in your terminal / command prompt)
:::

### System Requirements

You can run `saucectl` locally via Docker or remotely via the Sauce Labs cloud, so system requirements vary depending on your intention.

As a rule of thumb, if you are planning to run in Docker, matching the [Docker installation requirements](https://docs.docker.com/engine/install/#supported-platforms) is likely adequate. Please use the reference below as a quick reference:

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

</TabItem>
<TabItem value="linux">

* Docker: [Server](https://docs.docker.com/engine/install/#server)
* OS/Distros: [CentOS](https://docs.docker.com/engine/install/centos/), [Debian](https://docs.docker.com/engine/install/debian/), [Fedora](https://docs.docker.com/engine/install/fedora/), [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

</TabItem>
<TabItem value="windows">

* Docker: [Desktop](https://docs.docker.com/docker-for-windows/install/)
* OS: Windows 10 ([Home](https://docs.docker.com/docker-for-windows/install-windows-home/), Pro, Enterprise, or Education)

</TabItem>
</Tabs>

:::note
Browser support depends on the chosen [test framework](/testrunner-toolkit#supported-frameworks-and-browsers).
:::

## Installing `saucectl`

You can install `saucectl` using any of the following methods:

```bash title="Using NPM"
npm install -g saucectl
```

```bash title="Using NPM and SAUCECTL_INSTALL_BINARY"
SAUCECTL_INSTALL_BINARY=https://company.domain.com/saucectl_0.32.2_mac_64-bit.tar.gz npm install -g saucectl
```

:::tip
Use the `SAUCECTL_INSTALL_BINARY` environment variable to make `saucectl` available from a known source within your control or if you use `npx saucectl` to bypass installation.
:::

```bash title="Using curl"
curl -L https://saucelabs.github.io/saucectl/install | bash
```

```bash title="Using Homebrew (macOS)"
brew tap saucelabs/saucectl
brew install saucectl
```

If you would like to inspect the content of our one line installer, download it, have a look, and execute it:

```bash
curl -fsSL -o get_saucectl.sh https://saucelabs.github.io/saucectl/install && \
chmod 700 get_saucectl.sh && \
./get_saucectl.sh
```

:::caution Are you using mingw?
Mingw on Windows is known to interfere with the interactive `saucectl` commands, so Windows users should use `cmd` or `powershell` when interacting with `saucectl`.
:::

## Associating Your Sauce Labs Account

Your Sauce Labs `username` and `accessKey` are required to post your test results to the Sauce Labs platform. These values are available in the [User Settings](https://app.saucelabs.com/user-settings) page in the Sauce Labs app.

You can associate your Sauce Labs account with `saucectl` either by creating environment variables or by generating a `credentials.yml` file.

### Use `credentials.yml`

The `saucectl configure` command prompts you to manually enter your credentials if it cannot detect relevant environment variables, then generates a `credentials.yml` file in a `.sauce` directory in your home folder, which it will reference for subsequent `saucectl` operations that require authentication.

```bash
saucectl configure
```

### Use Environment Variables

From the root of your project directory, enter the following to set your credentials as environment variables:

```bash
SAUCE_USERNAME='valid.username'
SAUCE_ACCESS_KEY='valid.key'
```

:::warning Protect your Credentials
Whether you are using environment variables or a credentials file, make sure your authentication data is protected. Use secrets or context variables to mask your environment variables, or add `credentials.yml` to your `gitignore` file to ensure your credentials are not exposed in your commits.
:::


## Setting up a Working Directory

This process generates a set of dependencies that allow you to quickly set up a working test. At the end of this process, you will have a root directory with the following assets:

* a config file (e.g., `.sauce/config.yml`)
* a framework directory (e.g., `cypress`) and other relevant files (e.g., `cypress.json`)
* an example test for the chosen framework (e.g., `cypress/integration/example.test.js`)

If you already have working tests in your framework, you can skip this section and [run your tests](testrunner-toolkit/running-tests) in order to run your existing tests.

1. Run the following command to generate a config file:
    ```bash
    saucectl new
    ```
1. At the prompt, specify your framework:
    ```
    ? Choose a framework:
    ❯ Cypress
      Playwright
      Puppeteer
      TestCafe
    ```
1. Specify your [Sauce Labs data center](https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints) at the next prompt:
    ```
    ? Choose a framework: Cypress
    ? Choose the sauce labs region:
    ❯ us-west-1
      eu-central-1
    ```

The configuration script confirms your setup and prompts you to execute the `saucectl run` command to begin testing.

## Running a Sample Test

The previous steps have set up a sample test environment that should allow you to run the example test in that directory to ensure `saucectl` can execute.

```bash
saucectl run
```

`saucectl` kicks off the example test in the framework directory you have created (e.g., `cypress/integration/example.test.js`), the output of which may look as follows:

```bash
$ saucectl run
13:02:33 INF Running version 0.33.1
13:02:33 INF Reading config file config=.sauce/config.yml
13:02:33 INF Ignoring framework version for Docker, using provided image saucelabs/stt-cypress-mocha-node:v5.6.0 (only applicable to docker mode)
13:02:33 INF Running Cypress in Sauce Labs
13:02:33 INF Project archived. durationMs=1 size=1030
13:02:33 INF Project uploaded. durationMs=864 storageId=09159989-ce03-4e96-b35e-a6aefed0ec10
13:02:34 INF Launching workers. concurrency=2
13:02:34 INF Starting suite. region=us-west-1 suite="saucy test"
13:02:36 INF Suite started. suite="saucy test" url=https://app.saucelabs.com/tests/5cd88d35e91e4cddbb73eec7721d1bdc
13:02:44 INF Suites in progress: 1
13:02:54 INF Suites in progress: 1
13:03:04 INF Suites in progress: 1
13:03:14 INF Suites in progress: 1
13:03:21 INF Suite finished. passed=true suite="saucy test" url=https://app.saucelabs.com/tests/5cd88d35e91e4cddbb73eec7721d1bdc
13:03:21 INF ┌───────────────────────┐
13:03:21 INF  All suites have passed!
13:03:21 INF └───────────────────────┘
~ $
```

Once the test completes, you can view the test assets when you log into your Sauce Labs dashboard.


## Next Steps

* [Run a Test](/testrunner-toolkit/running-tests): Learn how to run tests using TestRunner.
* [`saucectl` Syntax Ref](/testrunner-toolkit/configuration): Review the syntax for `saucectl` commands and learn how to adjust for different testing scenarios.
