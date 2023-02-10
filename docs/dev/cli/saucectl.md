---
id: saucectl
title: Using the saucectl CLI
sidebar_label: Using saucectl
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `saucectl` command line interface orchestrates the relationship between your tests in your framework, and the rich parallelization, test history filtering, and analytics of Sauce Labs. `saucectl` performs the underlying business logic to access the tests in your existing framework, runs them (either in the Sauce Labs Cloud or locally in a Docker image), then securely transmits the test assets to the Sauce Labs platform, where you can review, share, and evaluate your test outcomes at scale.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- [Docker](https://docs.docker.com/get-docker/), if you plan to run tests locally
  :::note
  Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g., `docker info` works in your terminal / command prompt).
  :::
- Know which test framework and browser versions you plan to run tests against

## System Requirements

Since you can run `saucectl` locally via Docker or remotely via the Sauce Labs cloud, system requirements vary depending on your intention. The following reference serves as a general guide:

<Tabs
defaultValue="macos"
values={[
{label: 'macOS', value: 'macos'},
{label: 'Linux', value: 'linux'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="macos">

- OS: 10.14+ (Mojave, Catalina, or Big Sur)
- Docker: [Desktop](https://docs.docker.com/docker-for-mac/install/)

</TabItem>
<TabItem value="linux">

- OS/Distros: [CentOS](https://docs.docker.com/engine/install/centos/), [Debian](https://docs.docker.com/engine/install/debian/), [Fedora](https://docs.docker.com/engine/install/fedora/), [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- Docker: [Server](https://docs.docker.com/engine/install/#server)

</TabItem>
<TabItem value="windows">

- OS: Windows 10 or 11 ([Home](https://docs.docker.com/docker-for-windows/install-windows-home/), Pro, Enterprise, or Education)
- Docker: [Desktop](https://docs.docker.com/docker-for-windows/install/)

</TabItem>
</Tabs>

## Supported Frameworks and Browsers

### Sauce Labs Cloud

Below are the frameworks supported on the Sauce Labs Cloud.

<Tabs
groupId="platforms"
defaultValue="cypress"
values={[
{"label":"Cypress","value":"cypress"},
{"label":"Playwright","value":"playwright"},
{"label":"Cucumber.js-Playwright","value":"cucumberjs-playwright"},
{"label":"TestCafe","value":"testcafe"},
{"label":"Replay","value":"replay"},
{"label":"Espresso","value":"espresso"},
{"label":"XCUITest","value":"xcuitest"}
]}>
<TabItem value="cypress">

[Cypress on Sauce Docs](/web-apps/automated-testing/cypress/)

</TabItem>

<TabItem value="playwright">

[Playwright on Sauce Docs](/web-apps/automated-testing/playwright/)

</TabItem>

<TabItem value="cucumberjs-playwright">

[Cucumber.js with Playwright on Sauce Docs](/web-apps/automated-testing/cucumberjs-playwright/quickstart)

</TabItem>

<TabItem value="testcafe">

[TestCafe on Sauce Docs](/web-apps/automated-testing/testcafe/)

</TabItem>
  
<TabItem value="replay">

[Replay on Sauce Docs](/web-apps/automated-testing/replay/)

</TabItem>

<TabItem value="espresso">

[Espresso on Sauce Docs](/mobile-apps/automated-testing/espresso-xcuitest/)

| Supported Platforms |
| ------------------- |
| Android 5.1+        |

</TabItem>

<TabItem value="xcuitest">

[XCUITest on Sauce Docs](/mobile-apps/automated-testing/espresso-xcuitest/)

| Supported Platforms |
| ------------------- |
| iOS 10+             |

</TabItem>
</Tabs>

### Docker Runner

Below are the frameworks supported on the Docker Runner. Browser support for each framework is based on the Sauce Labs Docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available release notes.

<Tabs
groupId="platforms"
defaultValue="cypress"
values={[
{label: 'Cypress', value: 'cypress'},
{label: 'Playwright', value: 'playwright'},
{label: 'TestCafe', value: 'testcafe'},
{label: 'Puppeteer', value: 'puppeteer'},
]}>

<TabItem value="cypress">

[Cypress on Sauce Docs](/web-apps/automated-testing/cypress/)

Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available [release notes](https://github.com/saucelabs/sauce-cypress-runner/releases).

</TabItem>
<TabItem value="playwright">

[Playwright on Sauce Docs](/web-apps/automated-testing/playwright/)

Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available [release notes](https://github.com/saucelabs/sauce-playwright-runner).

</TabItem>

<TabItem value="puppeteer">

[Puppeteer on Sauce Docs](/web-apps/automated-testing/puppeteer/)

Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases).

</TabItem>

<TabItem value="testcafe">

[TestCafe on Sauce Docs](/web-apps/automated-testing/testcafe/)

Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases).

</TabItem>
</Tabs>

## Installing `saucectl`

`saucectl` binaries are attached to [GitHub releases](https://github.com/saucelabs/saucectl/releases/latest).

Following is a list of `saucectl` installation options that are common across different development environments.

<Tabs
defaultValue="npm"
values={[
{label: 'NPM', value: 'npm'},
{label: 'NPM + Binary', value: 'binary'},
{label: 'Homebrew', value: 'brew'},
{label: 'cURL', value: 'curl'},
{label: 'Windows Powershell', value: 'powershell'},
]}>

<TabItem value="npm">

```bash title="Using NPM"
npm install -g saucectl
```

</TabItem>
<TabItem value="binary">

```bash title="Using NPM and SAUCECTL_INSTALL_BINARY"
SAUCECTL_INSTALL_BINARY=https://company.domain.com/saucectl_0.32.2_mac_64-bit.tar.gz npm install -g saucectl
```

:::tip
Use the `SAUCECTL_INSTALL_BINARY` environment variable to make `saucectl` available from a known source within your control or if you use `npx saucectl` to bypass installation.
:::

</TabItem>
<TabItem value="brew">

```bash title="Using Homebrew (macOS)"
brew tap saucelabs/saucectl
brew install saucectl
```

</TabItem>
<TabItem value="curl">

```bash title="Using curl (Linux / macOS)"
sudo sh -c 'curl -L https://saucelabs.github.io/saucectl/install | bash -s -- -b /usr/local/bin'
```

If you would like to inspect the content of our one line installer, download it, have a look, and execute it:

```bash
curl -fsSL -o get_saucectl.sh https://saucelabs.github.io/saucectl/install && \
chmod 700 get_saucectl.sh && \
sudo ./get_saucectl.sh -b /usr/local/bin
```

</TabItem>
<TabItem value="powershell">

```bash title="Using Powershell (Windows)"
$url = Invoke-RestMethod -Uri https://api.github.com/repos/saucelabs/saucectl/releases/latest | ForEach-Object {$_.assets} | Where-Object { $_.name -Like "*_win_64-bit.zip" }
Invoke-RestMethod -Uri $url.browser_download_url -OutFile saucectl.zip
Expand-Archive -Force -Path ./saucectl.zip
Move-Item -Path ./saucectl/saucectl.exe -Destination saucectl.exe
Remove-Item -Force -Recurse  -Path ./saucectl,./saucectl.zip
```

</TabItem>
</Tabs>

:::caution Are you using mingw?
Mingw on Windows is known to interfere with the interactive `saucectl` commands, so Windows users should use `cmd` or `powershell` when interacting with `saucectl`.
:::

### Updating `saucectl`

To ensure you have access to the most current feature set of `saucectl`, keep your installation up to date by periodically upgrading to the latest release.

To do this, run the same command you used to download `saucectl`. If you originally installed `saucectl` using npm, for example, you'd run `npm update -g saucectl`.

## Next Steps

Once you've got `saucectl` installed, you can customize your configurations based on your testing objectives. The following sections offer some common use cases.

### Associate your Credentials

Your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` (available on your [User Settings](https://app.saucelabs.com/user-settings) page) are required to run tests through `saucectl`. You can pass your credentials to `saucectl` via several different methods:

- Use the [`saucectl configure`](/dev/cli/saucectl/configure) CLI command to create a `credentials.yml` file from which `saucectl` can automatically pull your credentials.
- Set your credentials as [environment variables](/basics/environment-variables/) that `saucectl` can access at runtime.
- Manually enter your credentials as options in the `saucectl run` command.

<!-- prettier-ignore-start -->
:::note Credentials Order of Preference
If you set your credentials using more than one of the methods above, `saucectl` will apply the values in the following order or preference:

1. Environment Variables
2. `saucectl run` command
3. `credentials.yml` file
:::

### Check out your Framework Demo Repo

`saucectl` provides working samples for each of its supported frameworks, so you can quickly run a sample test, or use the project as a template for your own tests.

- [Cypress Demo](https://github.com/saucelabs/saucectl-cypress-example)
- [Playwright Demo](https://github.com/saucelabs/saucectl-playwright-example)
- [Cucumber.js with Playwright Demo](https://github.com/saucelabs/saucectl-playwright-example/tree/main/examples/cucumber)
- [TestCafe Demo](https://github.com/saucelabs/saucectl-testcafe-example)
- [Replay Demo](https://github.com/saucelabs/saucectl-replay-example)
- [Puppeteer Demo](https://github.com/saucelabs/saucectl-puppeteer-example)
- [Espresso Demo](https://github.com/saucelabs/saucectl-espresso-example)
- [XCUITest Demo](https://github.com/saucelabs/saucectl-xcuitest-example)

### Configure `saucectl` for your Tests

If you already have tests in the framework of your choice, you can use the [`saucectl init`](/dev/cli/saucectl/init) command to generate a `config.yml` file specifying all the relevant options for your test. See the framework-specific YAML Configuration documentation for a complete reference of all available properties for your framework:

- [Cypress YAML](/web-apps/automated-testing/cypress/yaml)
- [Playwright YAML](/web-apps/automated-testing/playwright/yaml)
- [Cucumber.js with Playwright YAML](/web-apps/automated-testing/cucumberjs-playwright/yaml)
- [TestCafe YAML](/web-apps/automated-testing/testcafe/yaml)
- [Replay YAML](/web-apps/automated-testing/replay/yaml)
- [Puppeteer YAML](/web-apps/automated-testing/puppeteer/yaml)
- [Espresso YAML](/mobile-apps/automated-testing/espresso-xcuitest/espresso)
- [XCUITest YAML](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest)

### Run your Tests

When you are ready to run your tests, you can do so using the [`saucectl run`](/dev/cli/saucectl/run) command. Typically, if you have set all of your configuration properties in your `config.yml` file, you need only execute the command itself, with no options. However, most of the properties available through the file are also available as runtime options you can set at the command line.

:::note Command Line Values Prioritized
If you set conflicting configuration values in the `config.yml` file and as `saucectl run` command options, the values in set in the `run` command are applied.
:::

The CLI output includes a Results table. The Attempts column in the table displays the number of times a test suite was run, which can be configured with the `Retries` property [in your YAML specification file](/dev/cli/saucectl/#configure-saucectl-for-your-tests). 

### View your Test Results in Sauce Labs

After tests complete, `saucectl` uploads test assets such as logs, test results, screenshots, and videos to your [Sauce Labs account](https://app.saucelabs.com), as long as they are in the `__Assets__` directory of your project root. Some frameworks automatically place assets in the correct directory, but other frameworks may require you to manually set the location.

The CLI output includes a link to the job test results page in Sauce Labs:

```html
Open job details page: https://app.saucelabs.com/tests/<job-number>
```

:::note Media Assets Not Viewable in UI
Any screenshots and video recorded during the test execution and uploaded to Sauce Labs are not currently viewable in the Sauce Labs UI, but can be accessed and downloaded through the [Job Assets API endpoints](/dev/api/jobs/#list-job-assets). Alternatively, you can automatically download your test assets locally using the [`artifacts`](/dev/cli/saucectl/init) parameter in your config file.
:::
<!-- prettier-ignore-end -->
