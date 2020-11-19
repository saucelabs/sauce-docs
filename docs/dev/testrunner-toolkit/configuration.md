---
id: configuration
title: Testrunner Configuration
sidebar_label: Configuration
---

import ClientOnly from './ClientOnly'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Testrunner Toolkit requires a configuration file to know which tests to run, along with which framework to use. Examples of some possible configuration fields you can set include:

* custom `tags`
* location of the test `files`
* desired framework `image` and `version`
* desired `sauce` data center

## Basic Configuration

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
<ClientOnly>

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/puppeteer.yml
```

</ClientOnly>
</TabItem>
<TabItem value="playwright">
<ClientOnly>

```yaml reference 
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/playwright.yml
```

</ClientOnly>
</TabItem>
<TabItem value="testcafe">
<ClientOnly>

```yaml reference 
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/testcafe.yml
```

</ClientOnly>
</TabItem>
<TabItem value="cypress">
<ClientOnly>

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/cypress.yml
```
</ClientOnly>
</TabItem>
</Tabs>

## Prepare your environment

Saucectl offers the possibility to set up your tests environment before executing any of your suites using `beforeExec`: 

<ClientOnly>

```yaml reference
https://github.com/saucelabs/saucectl/blob/master/.sauce/puppeteer_before_exec.yml#L14-L15
```

</ClientOnly>

## Parallelization

Saucectl is capable of running tests in parallel by utilizing multiple CI machines. _This feature requires a Sauce Labs account_, so don't forget to set the environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`!

Parallelization can be turned on either via the config:

<ClientOnly>

```yaml reference
https://github.com/saucelabs/saucectl/blob/master/.sauce/puppeteer_parallel.yml#L21
```

</ClientOnly>

or the CLI
```bash
saucectl run --parallel
```

The concrete setup of the pipeline will depend on your CI provider however. [Here's an example](https://github.com/saucelabs/saucectl/blob/master/.github/workflows/test.yml#L94-L145) how to set it up for GitHub Actions.

Please visit [here](/dev/cli/saucectl#parallel) for more information about the parallelization feature and its limitations.