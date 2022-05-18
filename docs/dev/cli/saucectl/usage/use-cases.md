---
id: use-cases
title: saucectl Common Use Cases
sidebar_label: Use Cases
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The initial [installation and setup](/dev/cli/saucectl/#installing-saucectl) of `saucectl` generates a `config.yml` file based on the framework and region you select during setup. By default, `saucectl` will look for this file each time you engage the CLI in order to determine where to find your tests and how and where to run them.

The configuration file is flexible enough to allow for any customizations and definitions that are required for any of the supported frameworks. The following sections describe some of the most common configurations. For information about configuring individual framework projects, see:

* [Configure Cypress](/web-apps/automated-testing/cypress/yaml)
* [Configure Playwright](/web-apps/automated-testing/playwright/yaml)
* [Configure TestCafe](/web-apps/automated-testing/testcafe/yaml)
* [Configure Puppeteer](/web-apps/automated-testing/puppeteer/yaml)
* [Configure Espresso](/mobile-apps/automated-testing/espresso-xcuitest/espresso)
* [Configure XCUITest](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest)


## Setting an Alternative Configuration File

Run the following command to configure `saucectl` to use any configuration file you choose:

```bash
saucectl run -c ./path/to/{config-file}.yml
```
If you are using multiple frameworks or need to configure different sets of tests to run separately, it might be useful to have individual configuration files that you can simply direct `saucectl` to reference as necessary.

:::note YAML Required
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax outlined in the configuration reference doc for your framework (see links above). If you are less comfortable with YAML, any of a wide variety of free online YAML/JSON validator tools may be helpful.
:::


## Docker Mode or Sauce Cloud Mode?

You can run your tests in either Docker or on the Sauce Labs platform, or both. Depending on the length and complexity of your tests, running in your local environment with the containerized solution may allow you to accelerate test execution in CI and result in a smaller bundle transmission to the Sauce Labs cloud.

You can set the `defaults.mode` property to `docker` or `sauce` (default) to have all unspecified test suites run in that mode.

    ```yaml
    defaults:
      mode: docker
    ```
Alternatively, you can set each individual `suites.mode` property to specify the mode for just that suite of tests.

    ```yaml
    suites:
      - name: saucy test
      mode: sauce
    ```

If you are running on Docker, be sure to specify the Docker `image` and `fileTransfer` properties so your test results can be uploaded to Sauce Labs.

    ```yaml
    docker:
      image: saucelabs/stt-cypress-mocha-node:v5.6.0
      fileTransfer: mount # Defaults to `mount`. Choose between mount|copy.
    ```

Refer to the [framework version support matrix](/dev/cli/saucectl/#supported-frameworks-and-browsers) for a list of framework-specific images.


## Run Tests Against a Local App

If you plan to run tests against a local app server / app running on `localhost` (either on your host machine or in a CI pipeline), there are specific workflows you must follow.

:::tip Need to Access Custom Node Modules?
If you have third party, or custom modules that are required test dependencies, you can utilize the **`npm`** configuration property to include those packages during test execution.
:::

Ensure the `docker` container can access the local app server (e.g., `localhost:<port>/`) from your host machine. After the tests complete, the results upload to the Sauce Labs results dashboard.

## Including Project Descriptors

The `metadata` parameter in the configuration file allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you, as shown in the following example:

```yaml
sauce:
  metadata:
    name: Testing Cypress Support
    build: RC 10.4.a
    tags:
      - e2e
      - release team
      - beta
      - featurex
```


## Concurrency

You can configure `saucectl` to run test suites in parallel up to the concurrency specified in the config file.

```yaml
sauce:
  concurrency: 10
```

If needed, you can also override the file setting at runtime by specifying a concurrency value as an inline parameter of the `saucectl run` command:

```bash
saucectl run --ccy 10
```

A setting of `10` runs up to 10 test suites at the same time. If the test has more suites than that, excess suites are queued and run in order as currently running suites complete and new slots are available.

When running on Sauce Cloud, the maximum concurrency that you can use is defined by your [account settings](/basics/acct-team-mgmt/concurrency-limits/).

## Sauce Connect

`saucectl` supports using Sauce Connect to establish a secure connection when running your tests on Sauce Labs. To do so:

1. Download and launch [Sauce Connect](/secure-connections/sauce-connect).
2. Provide the tunnel identifier in your config file:

  ```yaml title="config.yml tunnel setting"
  sauce:
    tunnel:
      id: my_tunnel_id
  ```

:::note Choose the Correct Tunnel Identifier
When you launch a tunnel, you can accept the tunnel identifier name that Sauce Labs generates for your account (e.g., `<$SAUCE_USERNAME>_tunnel_id`) or specify a name in the launch command:

```
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -i <tunnel_name>
```

`saucectl` expects this `tunnel_name` value in the `tunnel.name` property of your config file.
:::

Check out our working example of this use case using [Sauce Connect and GitHub Actions](/dev/cli/saucectl/usage/ci/github-actions).

## Setting up a Proxy

If you need to go through a proxy server, you can set it through the following variables:

* `HTTP_PROXY`: Proxy to use to access HTTP websites
* `HTTPS_PROXY`: Proxy to use to access HTTPS websites

:::note
At this time, these proxy settings are not supported for Playwright.
:::

### Docker Proxy Considerations

When running in docker-mode, `saucectl` still must reach the Sauce Labs platform get the latest docker image available or upload the test package to Sauce Cloud, and the docker container needs to access the tested website and Sauce Labs to upload results.

Therefore, you may be required to set the proxy twice, as shown in the following examples:

``` title= "Example: Windows Powershell"
PS> $Env:HTTP_PROXY=http://my.proxy.org:3128/
PS> $Env:HTTPS_PROXY=http://my.proxy.org:3128/
PS> saucectl run -e HTTP_PROXY=${Env:HTTP_PROXY} -e HTTPS_PROXY=${Env:HTTPS_PROXY}
```

``` title= "Example: Linux/macOS"
$> export HTTP_PROXY=http://my.proxy.org:3128/
$> export HTTPS_PROXY=http://my.proxy.org:3128/
$> saucectl run -e HTTP_PROXY=${HTTP_PROXY} -e HTTPS_PROXY=${HTTPS_PROXY}
```

## Integrating saucectl in Your CI Pipeline

You can incorporate your `saucectl` tests as part of your CI pipeline workflow. Observe these key principles to ensure flawless execution, regardless of which CI tool you use.

* Understand the current automation framework in the stack
* Understand your organization's preferred CI tool
* Ensure you have appropriate administrator permissions
* Successfully [run tests with `saucectl`](/dev/cli/saucectl/#running-tests) on their own before launching from your CI pipeline.

`saucectl` provides instructions for integrating with the following CI tools:

* [CircleCI](/dev/cli/saucectl/usage/ci/circleci)
* [Jenkins](/dev/cli/saucectl/usage/ci/jenkins)
* [GitHub Actions](/dev/cli/saucectl/usage/ci/github-actions)
* [GitLab](/dev/cli/saucectl/usage/ci/gitlab)


## Tailoring Your Test File Bundle

The `saucectl` command line bundles your root directory (`rootDir` parameter of `config.yml`) and transmits it to the Sauce Labs cloud or your own infrastructure via Docker, then unpacks the bundle and runs the tests. This functionality is partly what allows Sauce Control to operate in a framework-agnostic capacity. However, you can and should manage the inclusion and exclusion of files that get bundled to optimize performance and ensure security.

### Excluding Files from the Bundle

The `.sauceignore` file allows you to designate certain files to be excluded from bundling.

Add any files that are not direct test dependencies to `.sauceignore` to reduce the size of your bundle, improve test speed, and protect sensitive information.

Examples of what can be included in `.sauceignore`:

```bash
# .sauceignore

# Ignore node_modules
node_modules/

# Ignore all log files
*.log

# Ignore executables/binaries
*.exe
*.bin
**/*/bin

# Ignore media files
*.png
*.jpeg
*.jpg
*.mp4

# Ignore documentation
*.rst
*.md

# Ignore sensitive data
credentials.yml
```

### Including Node Dependencies

The default `.sauceignore` file lists `node_modules/` so locally installed node dependencies are excluded from the bundle. If your tests require node dependencies to run, you can either:

* [Include `node_modules` with your bundle](#remove-node_modules-from-sauceignore) or
* [Set NPM packages in config.yml](#set-npm-packages-in-configyml)

#### Remove "node_modules" from `.sauceignore`

Delete or comment out `node_modules/` in your `.sauceignore` file to bundle your node dependencies. For example,

```bash
# Do NOT exclude node_modules from bundle
# node_modules/
```

Node dependencies can increase your bundle by potentially hundreds of megabytes, so consider including only the required dependencies rather than the entire `node_modules` directory. The following sections provide some methods for limiting the scope of dependencies you must include.

#### Install "devDependencies" Only

Consider only installing NPM `devDependencies` if your tests do not require all prod `dependencies`.

```bash
# Only install dev dependencies
npm install --only=dev

saucectl run
```

#### Uninstall Nonessential Dependencies

If your standard install includes dependencies that aren't needed to run your tests, uninstall them prior to bundling.

```bash
# Install node dependencies
npm ci # or "npm install"

# Remove unneeded dependencies
npm uninstall appium
npm uninstall express

saucectl run
```

#### Install Essential Dependencies Individually

If you know that your tests require only specific dependencies, install them individually instead of running `npm install` or `npm ci`.

```bash
# Install individual dependencies
npm install cypress-xpath
npm install @cypress/react

saucectl run
```

### Set NPM Packages in `config.yml`

You can avoid installing or uninstalling dependencies prior to each bundling operation by defining a default set of NPM packages to install in your sauce configuration file using the `npm` parameter, as shown in the following example:

```jsx title= "config.yml npm example"
npm:
  registry: https://registry.npmjs.org
  packages:
    lodash: "4.17.20"
    "@babel/preset-typescript": "7.12"
    "@cypress/react": "^5.0.1"
```
