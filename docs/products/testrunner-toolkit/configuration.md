---
id: configuration
title: Testrunner Configuration
sidebar_label: Configuration
---

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

[__`puppeteer.yml`__](https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/puppeteer.yml)
```yaml
apiVersion: v1
# type of object, there could be theoretically other types
# of "orchestration" in the future, e.g. network config maps etc.
kind: Test
# meta data to the test
metadata:
  name: Feature XYZ
  tags:
    - e2e
    - release team
    - other tag
  build: "Build #$BUILD_ID in $BUILD_ENV"
# Every file defined in this list will be bundled into a zip and
# uploaded to Sauce Labs.
files:
  - ./tests/puppeteer/demo.test.js
  # - ./tests/puppeteer/sauce-swag-checkout.test.js
  # - ./tests/puppeteer/sauce-swag-login.test.js
# Define a test runner image (e.g. an image to run WebdriverIO tests)
# Like in Docker, these img can be developed as Open Source projects
# and maintained by our teams, while at the same time, customers can
# build their own img as well
image:
  # while a set of properties are defined by our Yaml format
  base: saucelabs/sauce-puppeteer
  version: 3.0.4-saucectl0.6.2
```

</TabItem>
<TabItem value="playwright">

[__`playwright.yml`__](https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/playwright.yml)
```yaml
apiVersion: v1
# type of object, there could be theoretically other types
# of "orchestration" in the future, e.g. network config maps etc.
kind: Test
# meta data to the test
metadata:
  name: Feature XYZ
  tags:
    - e2e
    - release team
    - other tag
  build: "Build #$BUILD_ID in $BUILD_ENV"
# Every file defined in this list will be bundled into a zip and
# uploaded to Sauce Labs.
files:
  - ./tests/playwright/demo.test.js
# Define a test runner image (e.g. an image to run WebdriverIO tests)
# Like in Docker, these img can be developed as Open Source projects
# and maintained by our teams, while at the same time, customers can
# build their own img as well
image:
  # while a set of properties are defined by our Yaml format
  base: saucelabs/sauce-playwright
  version: 1.0.0-saucectl0.6.2
```

</TabItem>
<TabItem value="testcafe">

[__`testcafe.yml`__](https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/testcafe.yml)
```yaml
apiVersion: v1
metadata:
  name: Feature XYZ
  tags:
    - e2e
    - release team
    - other tag
  build: Release $CI_COMMIT_SHORT_SHA
files:
  - ./tests/testcafe/*.js
capabilities:
  - browserName: Chrome
image:
  base: saucelabs/sauce-testcafe
  version: 1.8.5-saucectl0.6.3
```

</TabItem>
<TabItem value="cypress">

[__`cypress.yml`__](https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/cypress.yml)
```yaml
apiVersion: v1
metadata:
  name: Feature XYZ
  tags:
    - e2e
    - release team
    - other tag
files:
  - ./tests/cypress/example.test.js
image:
  base: saucelabs/stt-cypress-mocha-node
  version: v0.1.3
```

</TabItem>
</Tabs>

## Prepare your environment

Saucectl offers the possibility to setup your tests environment before executing any of your suites using `beforeExec`: 

```yaml
beforeExec:
  - npm install --save chai
```

## Parallelization

Saucectl is capable of running tests in parallel by utilizing multiple CI machines. _This feature requires a Sauce Labs account_, so don't forget to set the environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`!

Parallelization can be turned on either via the config
```yaml
parallel: true
```

or the CLI
```bash
saucectl run --parallel
```

The concrete setup of the pipeline will depend on your CI provider however. [Here's an example](https://github.com/saucelabs/saucectl/blob/master/.github/workflows/test.yml#L94-L145) how to set it up for GitHub Actions.

Please visit [here](saucectl.md#parallel) for more information about the parallelization feature and its limitations.