---
id: configuration
title: Testrunner Toolkit Configuration
sidebar_label: Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Testrunner Toolkit requires a configuration file to know which tests to run, along with which framework to use. Examples of some possible configuration fields you can set include:

* custom `tags`
* location of the test `files`
* desired framework `image` and `version`
* desired `sauce` data center

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* [Docker](https://docs.docker.com/get-docker/) installed
* Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g. `docker info` works in your terminal)

## Generate a Configuration File

:::note
You should run the following commands in the root of your project directory
:::

### Authenticate
To get started, you must: [download and install testrunner toolkit](testrunner-toolkit/installation.md) and run the following command to authenticate Sauce Labs:

```bash
saucectl configure
```

### Create a New File
Then run the following command to generate a config file:

```bash
saucectl new
```

### Choose a Framework
After running this command, a prompt appears asking you to select the desired framework:

```bash
8:59AM INF Start New Command
     Choose a framework:
     ❯ Puppeteer
       Playwright
       Testcafe
       Cypress
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

## Run the Test

Finally, Testrunner Toolkit generates a new config file in your current working directory (`.sauce/config.yml`) and prompts you to run the following command:

```bash
New project bootstrapped successfully! You can now run:
$ saucectl run
```

:::note default test location
Unless you specify a test directory, `saucectl` executes tests based on the framework's default test directory. For example with a cypress test, `saucectl` will attempt to locate `cypress.json`, as well as the default `cypress` directory.
 
Consult your desired framework's documentation for more information about the default test locations.
:::

`saucectl` then kicks off a test run and will:
* pull the necessary docker images/layers (e.g. `saucelabs/stt-cypress-mocha-node:v<tag>`)
* copy/mount your test files to the docker container
* run the tests within the docker container
* display the test results in the console

### Analyze Test Results in Sauce Labs

After tests complete, Testrunner Toolkit uploads the test assets (logs, test results, and test videos) to your [Sauce Labs account](https://app.saucelabs.com) and displays a job link like so:

```html
https://app.saucelabs.com/tests/<job-number>
```
From this job link you can review, share, and analyze the test results just as you would with any other test framework executed on Sauce Labs.

## Generated Files

If you opt to use the command: `saucectl new`, it automatically generates the following:

* a config file (`./sauce/config.yml`)
* the `tests` directory
* an example test (`tests/example.test.js`)

Below is an example `config.yml` that command generates:

```yaml title="example cypress config.yml"
apiVersion: v1alpha
kind: cypress
suites:
- name: saucy test
sauce:
  region: us-west-1
  metadata:
    name: Testing Cypress Support
    tags:
    - e2e
    - release team
    - other tag
    build: Release $CI_COMMIT_SHORT_SHA
```

If you use the `saucectl configure` command it also generates a `credentials.yml` file:

```yaml title="example cypress credentials.yml"
username: <your saucelabs username>
accessKey: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
source: environment variables
```

:::warning Do NOT commit `credentials.yml`
It should go without saying, but do not publicly expose your `credentials.yml` file over the internet. Make sure you add this file to your `.gitignore` file, as you should only use it locally.
:::

## Using a Basic Configuration

By default `saucectl` searches for a file called `config.yml`, for example:

```yaml
# Simple config.yml using puppeteer
apiVersion: v1
metadata:
  name: Feature XYZ
  tags:
    - e2e
    - release team
    - other tag
  build: Release $CI_COMMIT_SHORT_SHA
files:
  - ./tests/**/*.js
image:
  base: saucelabs/sauce-puppeteer-jest-node
  version: v0.1.0
sauce:
  region: us-west-1
```

If you wish to use more than one framework, or to configure different sets of tests separately, you can use any name for the configuration file and specify it with the following command:

```bash
saucectl run -c ./path/to/config.yml
```

## Configuration Examples
Below are framework-specific configuration examples that exist in the [Testrunner Toolkit repository](https://github.com/saucelabs/testrunner-toolkit/tree/master/.sauce). The repository uses these configurations for its pipeline:

>
> **NOTE:** The test files need to match `(spec|test)` in their file name so they are automatically detected as `testfiles`.
>

<Tabs
  defaultValue="puppeteer"
  values={[
    {label: 'Puppeteer', value: 'puppeteer'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
    {label: 'Cypress', value: 'cypress'},
  ]}>

<TabItem value="puppeteer">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/puppeteer.yml
```

</TabItem>
<TabItem value="playwright">

```yaml reference 
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/playwright.yml
```

</TabItem>
<TabItem value="testcafe">

```yaml reference 
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/testcafe.yml
```

</TabItem>
<TabItem value="cypress">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/cypress.yml
```

</TabItem>
</Tabs>

### Prepare your environment

Saucectl offers the possibility to set up your tests environment before executing any of your suites using `beforeExec`: 


```yaml reference
https://github.com/saucelabs/saucectl/blob/master/.sauce/puppeteer_before_exec.yml#L14-L15
```

### Parallelization

Saucectl is capable of running tests in parallel by utilizing multiple CI machines. _This feature requires a Sauce Labs account_, so don't forget to set the environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`!

Parallelization can be turned on either via the config:


```yaml reference
https://github.com/saucelabs/saucectl/blob/master/.sauce/puppeteer_parallel.yml#L21
```


or the CLI

```bash
saucectl run --parallel
```

The concrete setup of the pipeline will depend on your CI provider however. 

[Here's an example](https://github.com/saucelabs/saucectl/blob/master/.github/workflows/test.yml#L94-L145) how to set it up for GitHub Actions:

```yaml reference
https://github.com/saucelabs/saucectl/blob/master/.github/workflows/test.yml#L94-L145
```

## Framework and Browser Support

The specific framework and browser version support depends on the components of the Testrunner Toolkit docker images. Details and release notes for each platform are found in the links below:

* [sauce-puppeteer-runner](https://github.com/saucelabs/sauce-puppeteer-runner)
* [sauce-playwright-runner](https://github.com/saucelabs/sauce-playwright-runner)
* [sauce-testcafe-runner](https://github.com/saucelabs/sauce-testcafe-runner)
* [sauce-cypress-runner](https://github.com/saucelabs/sauce-cypress-runner)

:::note 
Each docker image tag is the 'latest' image that supports the specific framework version
:::

<Tabs
  defaultValue="puppeteer"
  values={[
    {label: 'Puppeteer', value: 'puppeteer'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
    {label: 'Cypress', value: 'cypress'},
  ]}>

<TabItem value="puppeteer">

| Puppeteer Version | Supported Browsers                | Docker Image Tag                         |
|---------|-----------------------------------|------------------------------------------|
| 3.0.4   | <ul><li>Chrome 81.0.4044.138</li> <li>Firefox 74.0</li></ul> | [saucelabs/stt-puppeteer-jest-node:v0.2.2](https://hub.docker.com/layers/saucelabs/stt-puppeteer-jest-node/v0.2.2/images/sha256-ed9eed4ec107666858e4644d9b44ebab144cf5b68f0cae155edd22be3b146cb2?context=explore) |

</TabItem>
<TabItem value="playwright">

| Playwright Version | Supported Browsers                                      | Docker Image Tag                                  |
|---------|---------------------------------------------------------|---------------------------------------------------|
| 1.4.0   | <ul><li>Chromium 86.0.4217.0</li> <li>Mozilla Firefox 78.0b5</li> <li>WebKit 14.0</li></ul> | [saucelabs/stt-playwright-jest-node:v0.2.1](https://hub.docker.com/layers/saucelabs/stt-playwright-jest-node/v0.2.1/images/sha256-4084258641418233491812a61f47ef3da7baf2dd8ae0d54e1a3125fb1fd5cf42?context=explore)         |
| 1.3.0   | <ul><li>Chromium 86.0.4217.0</li> <li>Mozilla Firefox 78.0b5</li> <li>WebKit 14.0</li></ul> | [saucelabs/stt-playwright-jest-node:v0.2.0](https://hub.docker.com/layers/saucelabs/stt-playwright-jest-node/v0.2.0/images/sha256-3f98d1d68ecb82ecf16ca72ba3d3ff75ab5c4f9e85edfe7b631069ecd2a18067?context=explore)         |
| 1.0.0   | <ul><li>Chromium 84.0.4135.0</li> <li>Mozilla Firefox 76.0b5</li></ul>             | [saucelabs/stt-playwright-jest-node:v0.1.6-alpha.1](https://hub.docker.com/layers/saucelabs/stt-playwright-jest-node/v0.1.6-alpha.1/images/sha256-301dbb659245c403b144972e06bc26a859f969e8bda2c3abbdd1756ecd692e2a?context=explore) |

</TabItem>
<TabItem value="testcafe">

| TestCafe Version | Supported Browsers                | Docker Image Tag                    |
|---------|-----------------------------------|-------------------------------------|
| 1.8.5   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul> | [saucelabs/stt-testcafe-node:v0.1.13](https://hub.docker.com/layers/saucelabs/stt-testcafe-node/v0.1.13/images/sha256-698c954f254b3a68ba57b8ed0f6f87becf0dc7686998e02e197f306e0002fa10?context=explore) |

</TabItem>
<TabItem value="cypress">

| Cypress Version | Supported Browsers                     | Docker Image Tag                    |
|---------|----------------------------------------|-------------------------------------|
| 5.6.0   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul> | [saucelabs/stt-cypress-mocha:v0.3.0](https://hub.docker.com/layers/saucelabs/stt-cypress-mocha-node/v0.3.0/images/sha256-a93da0cc76f4eb775f696a159a5f06b34df7a9248b2df0c4363724da8d83633e?context=explore)  |
| 5.5.0   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul>  | [saucelabs/stt-cypress-mocha:v0.2.3](https://hub.docker.com/layers/saucelabs/stt-cypress-mocha-node/v0.2.3/images/sha256-95b25c5a85624779c2ed9aaa82a6ca76e770a77e487936e6814f9f9c95dc1e52?context=explore)  |
| 5.4.0   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul>  | [saucelabs/stt-cypress-mocha:v0.1.18](https://hub.docker.com/layers/saucelabs/stt-cypress-mocha-node/v0.1.18/images/sha256-1709f9e55223267b0a63b33fa9f00a84920dd1c175dcd33ee0fababf5abfed50?context=explore) |
| 4.9.0   | <ul><li>Chrome 81.0.4044.138</li><li>Firefox 74.0</li></ul>  | [saucelabs/stt-cypress-mocha:v0.1.12](https://hub.docker.com/layers/saucelabs/stt-cypress-mocha-node/v0.1.12/images/sha256-7c8d0ce5bc1b0260375345bfba71e9d76dfff97fd223da0aa570e8f4715ba075?context=explore) |

</TabItem>
</Tabs>

## Additional Resources

Please visit [here](/dev/cli/saucectl#parallel) for more information about the parallelization feature and its limitations. You can also visit our [CI Integrations](integrations.md) page for more information on how to use the following CI platforms:

* [Jenkins](integrations.md#jenkins)
* [CircleCI](integrations.md#circleci)