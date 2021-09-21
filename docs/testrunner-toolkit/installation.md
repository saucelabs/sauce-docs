---
id: installation
title: Installing saucectl
sidebar_label: Installation and Setup
description: Run tests on Sauce using any framework in any language.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `saucectl` command line tool orchestrates the communication between Sauce Labs and your test framework.  

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* Know which [test framework and browser versions](/testrunner-toolkit#supported-frameworks-and-browsers) you plan to run tests against
* [Docker](https://docs.docker.com/get-docker/), if you plan to run tests locally

:::note
Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g., `docker info` works in your terminal / command prompt)
:::

### System Requirements

You can run `saucectl` locally via Docker ([Installation Requirements](https://docs.docker.com/engine/install/#supported-platforms) or remotely via the Sauce Labs cloud, so system requirements vary depending on your intention. The following reference serves as a general guide:

<Tabs
  defaultValue="macos"
  values={[
    {label: 'macOS', value: 'macos'},
    {label: 'Linux', value: 'linux'},
    {label: 'Windows', value: 'windows'},
  ]}>

<TabItem value="macos">

* OS: 10.14+ (Mojave, Catalina, or Big Sur)
* Docker: [Desktop](https://docs.docker.com/docker-for-mac/install/)

</TabItem>
<TabItem value="linux">

* OS/Distros: [CentOS](https://docs.docker.com/engine/install/centos/), [Debian](https://docs.docker.com/engine/install/debian/), [Fedora](https://docs.docker.com/engine/install/fedora/), [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
* Docker: [Server](https://docs.docker.com/engine/install/#server)

</TabItem>
<TabItem value="windows">

* OS: Windows 10 ([Home](https://docs.docker.com/docker-for-windows/install-windows-home/), Pro, Enterprise, or Education)
* Docker: [Desktop](https://docs.docker.com/docker-for-windows/install/)

</TabItem>
</Tabs>

:::note
Browser support depends on the chosen [test framework](/testrunner-toolkit#supported-frameworks-and-browsers).
:::

## Installing `saucectl`

`saucectl` binaries are attached to [Github releases](https://github.com/saucelabs/saucectl/releases/latest).

Following is a list of `saucectl` installation options that are common across different development environments:

```bash title="Using NPM"
npm install -g saucectl
```

```bash title="Using NPM and SAUCECTL_INSTALL_BINARY"
SAUCECTL_INSTALL_BINARY=https://company.domain.com/saucectl_0.32.2_mac_64-bit.tar.gz npm install -g saucectl
```

:::tip
Use the `SAUCECTL_INSTALL_BINARY` environment variable to make `saucectl` available from a known source within your control or if you use `npx saucectl` to bypass installation.
:::

```bash title="Using Homebrew (macOS)"
brew tap saucelabs/saucectl
brew install saucectl
```

```bash title="Using curl (Linux / macOS)"
sudo sh -c 'curl -L https://saucelabs.github.io/saucectl/install | bash -s -- -b /usr/local/bin'
```

```bash title="Using Powershell (Windows)"
$url = Invoke-RestMethod -Uri https://api.github.com/repos/saucelabs/saucectl/releases/latest | ForEach-Object {$_.assets} | Where-Object { $_.name -Like "*_win_64-bit.zip" }
Invoke-RestMethod -Uri $url.browser_download_url -OutFile saucectl.zip
Expand-Archive -Force -PassThru -Path ./saucectl.zip
Move-Item -Path ./saucectl/saucectl.exe -Destination saucectl.exe
Remove-Item -Force -Recurse  -Path ./saucectl,./saucectl.zip
```

If you would like to inspect the content of our one line installer, download it, have a look, and execute it:

```bash
curl -fsSL -o get_saucectl.sh https://saucelabs.github.io/saucectl/install && \
chmod 700 get_saucectl.sh && \
sudo ./get_saucectl.sh -b /usr/local/bin
```

:::caution Are you using mingw?
Mingw on Windows is known to interfere with the interactive `saucectl` commands, so Windows users should use `cmd` or `powershell` when interacting with `saucectl`.
:::

## Associating Your Sauce Labs Account

Your Sauce Labs `username` and `accessKey` are required to post your test results to the Sauce Labs platform. These values are available on the [User Settings](https://app.saucelabs.com/user-settings) page.

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

## Updating saucectl

To ensure you have access to the most current feature set of saucectl, keep your installation up to date by periodically upgrading to the latest release.

```bash
npm update -g saucectl
```


## Sample Repos

If you would like to see sample tests and configuration files for particular frameworks, you can clone one of our demo repositories for use as a template:

* [Cypress Demo](https://github.com/saucelabs/saucectl-cypress-example)
* [TestCafe Demo](https://github.com/saucelabs/saucectl-testcafe-example)
* [Playwright Demo](https://github.com/saucelabs/saucectl-playwright-example)
* [Puppeteer Demo](https://github.com/saucelabs/saucectl-puppeteer-example/)
* [Espresso Demo](https://github.com/saucelabs/saucectl-espresso-example)

## Running a Sample Test

The previous steps have set up a sample test environment that should allow you to run the example test in that directory to ensure `saucectl` can execute.

```bash
saucectl run
```

`saucectl` kicks off the example test in the framework directory you have created (e.g., `cypress/integration/example.test.js`), the output of which may look as follows:


```bash
$ saucectl run
Running version v0.44.0
16:36:13 INF Reading config file config=.sauce/config.yml
16:37:09 INF Running Cypress in Sauce Labs

                                        (.
                                       #.
                                       #.
                           .####################
                         #####////////*******/######
                       .##///////*****************###/
                      ,###////*********************###
                      ####//***********************####
                       ###/************************###
                        ######********************###. ##
                           (########################  ##     ##
                                   ,######(#*         ##*   (##
                               /############*          #####
                           (########(  #########(    ###
                         .#######,    */  ############
                      ,##########  %#### , ########*
                    *### .#######/  ##  / ########
                   ###   .###########//###########
               ######     ########################
             (#(    *#(     #######.    (#######
                    ##,    /########    ########
                           *########    ########

   _____        _    _  _____ ______    _____ _      ____  _    _ _____
  / ____|  /\  | |  | |/ ____|  ____|  / ____| |    / __ \| |  | |  __ \
 | (___   /  \ | |  | | |    | |__    | |    | |   | |  | | |  | | |  | |
  \___ \ / /\ \| |  | | |    |  __|   | |    | |   | |  | | |  | | |  | |
  ____) / ____ \ |__| | |____| |____  | |____| |___| |__| | |__| | |__| |
 |_____/_/    \_\____/ \_____|______|  \_____|______\____/ \____/|_____/
16:37:09 INF Project archived. durationMs=11 size=5504
16:37:10 INF Project uploaded. durationMs=362 storageId=8b0772e8-af16-43d1-8a0d-197ac9648563
16:37:10 INF Launching workers. concurrency=2
16:37:10 INF Starting suite. region=us-west-1 suite="Firefox in sauce"
16:37:10 INF Starting suite. region=us-west-1 suite="Chrome using global mode setting"
16:37:13 INF Suite started. browser=firefox platform="Windows 10" suite="Firefox in sauce" url=https://app.saucelabs.com/tests/d278cc6adec647f1bab92f00585445f7
16:37:15 INF Suite started. browser=chrome platform="Windows 10" suite="Chrome using global mode setting" url=https://app.saucelabs.com/tests/4ed757d4f78242299be2cbc5d61dc9ba
16:37:20 INF Suites in progress: 2
16:37:30 INF Suites in progress: 2
16:37:40 INF Suites in progress: 2
16:37:50 INF Suites in progress: 2
16:37:58 INF Suite finished. passed=true suite="Firefox in sauce" url=https://app.saucelabs.com/tests/d278cc6adec647f1bab92f00585445f7
16:38:00 INF Suites in progress: 1
16:38:01 INF Suite finished. passed=true suite="Chrome using global mode setting" url=https://app.saucelabs.com/tests/4ed757d4f78242299be2cbc5d61dc9ba

       Name                                Duration    Status    Browser    Platform
────────────────────────────────────────────────────────────────────────────────────────
  ✔    Firefox in sauce                         48s    passed    firefox    Windows 10
  ✔    Chrome using global mode setting         50s    passed    chrome     Windows 10
────────────────────────────────────────────────────────────────────────────────────────
  ✔    All tests have passed                  1m38s
~ $
```


Once the test completes, you can view the test assets when you log into Sauce Labs.


## Next Steps

* [Run a Test](/testrunner-toolkit/running-tests): Learn how to run tests using saucectl.
* [`saucectl` Syntax Ref](/testrunner-toolkit/configuration): Review the syntax for `saucectl` commands and learn how to adjust for different testing scenarios.
