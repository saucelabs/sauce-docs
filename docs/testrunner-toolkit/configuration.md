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

Refer to the requirements listed on the [Installation](/testrunner-toolkit/installation) page.

## Create a Configuration File and Tests

If you're starting your journey without tests, follow the steps below in order to generate a config file, which in turn creates the necessary test files in your project's root directory.

For example depending on the chosen framework, your generated files could look like so:

* a config file (e.g. `.sauce/config.yml`)
* the `tests` directory and other necessary files (e.g. `cypress.json` and `cypress/`)
* an example test (e.g. `cypress/integration/example.test.js`)

:::note
You should run the following commands in the root of your project directory
:::

### Authenticate
To get started, you must: [download and install testrunner toolkit](testrunner-toolkit/installation.md) and run the following command to authenticate Sauce Labs:

```bash
saucectl configure
```

The command then generates a `credentials.yml` file:

```yaml title="example cypress credentials.yml"
username: <your saucelabs username>
accessKey: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
source: environment variables
```

:::warning Do NOT commit `credentials.yml`
It should go without saying, but do not publicly expose your `credentials.yml` file over the internet. Make sure you add this file to your `.gitignore` file, as you should only use it locally.
:::

### Create a New Configuration
Then run the following command to generate a config file:

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

### Run the Test

Testrunner Toolkit generates a new config file in your current working directory (`.sauce/config.yml`) and prompts you to execute the `saucectl run` command. Visit the [Running Tests](testrunner-toolkit/running-tests) page for more detailed information about running tests with Testrunner Toolkit.

## Modifying the Configuration File

If you have existing tests and wish to expand or modify the `.sauce/config.yml`, consider the following example.

### Using a Basic Configuration

By default `saucectl` searches for a file called `config.yml`, for example:

```yaml
# Simple config.yml using cypress
apiVersion: v1alpha
kind: cypress
sauce:
  region: us-west-1
## Tunnel allows you to specify an existing sauce connect tunnel when running cypress inside the Sauce cloud.
## This has no effect when running tests inside docker.
  tunnel:
    id: your_tunnel_id
    parent: parent_owner_of_tunnel # if applicable, specify the owner of the tunnel
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
docker:
  # fileTransfer controls how test files are transferred to the docker container before tests are run (choice: mount|copy).
  # `mount` will mount files and folders into the container. Changes to these files and folders will be reflected on the
  # host as well (and vice versa). However, you may run into permission issues depending on your docker or host settings.
  # In this case the usage of `copy` is advised. `copy` will simply copy files and folders into the container.
  fileTransfer: mount # Defaults to `mount`. Choose between mount|copy.
  # image controls which images to be used for local testing. Change this value is you want to use a custom image.
  # image:
  #   name: saucelabs/stt-cypress-mocha-node
  #   tag: v5.6.0
cypress:
  configFile: "tests/cypress.json"  # We determine related files based on the location of the config file.
  version: 5.6.0
suites:
  - name: "saucy test"
    browser: "chrome"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

If you wish to use more than one framework, or to configure different sets of tests separately, you can use any name for the configuration file and specify it with the following command:

```bash
saucectl run -c ./path/to/config.yml
```

### Configuration Examples
Below are framework-specific configuration examples that exist in the [Testrunner Toolkit repository](https://github.com/saucelabs/testrunner-toolkit/tree/master/.sauce). The repository uses these configurations for its pipeline:

>
> **NOTE:** The test files need to match `(spec|test)` in their file name so they are automatically detected as `testfiles`.
>

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>
  
<TabItem value="cypress">

<p><small>Full Example on <a href="https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/cypress.yml">GitHub</a></small></p>

```yaml title=".sauce/cypress.yml"
apiVersion: v1alpha
kind: cypress
sauce:
  region: us-west-1
## Tunnel allows you to specify an existing sauce connect tunnel when running cypress inside the Sauce cloud.
## This has no effect when running tests inside docker.
#  tunnel:
#    id: your_tunnel_id
#    parent: parent_owner_of_tunnel # if applicable, specify the owner of the tunnel
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
docker:
  # fileTransfer controls how test files are transferred to the docker container before tests are run (choice: mount|copy).
  # `mount` will mount files and folders into the container. Changes to these files and folders will be reflected on the
  # host as well (and vice versa). However, you may run into permission issues depending on your docker or host settings.
  # In this case the usage of `copy` is advised. `copy` will simply copy files and folders into the container.
  fileTransfer: mount # Defaults to `mount`. Choose between mount|copy.
  # image controls which images to be used for local testing. Change this value is you want to use a custom image.
  # image:
  #   name: saucelabs/stt-cypress-mocha-node
  #   tag: v5.6.0
cypress:
  configFile: "tests/cypress.json"  # We determine related files based on the location of the config file.
  version: 5.6.0
suites:
  - name: "saucy test"
    browser: "chrome"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

</TabItem>
<TabItem value="playwright">

<p><small>Full Example on <a href="https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/playwright.yml">GitHub</a></small></p>

```yaml title=".sauce/playwright.yml"
apiVersion: v1alpha
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
# Like in Docker, these images can be developed as Open Source projects
# and maintained by our teams, while at the same time, customers can
# build their own images as well
suites:
  - name: "saucy test"
    match: ".*.(spec|test).js$"
    settings:
      browserName: "firefox"
image:
  # while a set of properties are defined by our Yaml format
  base: saucelabs/stt-playwright-jest-node
  version: v0.2.3
```

</TabItem>
<TabItem value="testcafe">

<p><small>Full Example on <a href="https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/testcafe.yml">GitHub</a></small></p>

```yaml title=".sauce/testcafe.yml"
apiVersion: v1alpha
metadata:
  name: Testing TestCafe Support
  tags:
    - e2e
    - release team
    - other tag
  build: Release $CI_COMMIT_SHORT_SHA
files:
  - ./tests/testcafe/
suites:
  - name: "saucy test"
    match: ".*.(spec|test).[jt]s$"
image:
  base: saucelabs/stt-testcafe-node
  version: v0.1.14
sauce:
  region: us-west-1
```

</TabItem>
</Tabs>

### Concurrency

Saucectl is capable of running test suites in parallel when utilizing the Sauce Labs infrastructure. _This feature requires a Sauce Labs account_, so don't forget to set the environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`!
The degree of concurrency can be controlled via the config:

```yaml
sauce:
  concurrency: 10
```

or the CLI
```bash
saucectl run --test-env sauce --ccy 10
```

A setting of `10` would mean that up to 10 test suites would run concurrently.
If you have more suites than that, any excess will simply be queued until it's their turn to run. 

The concurrency setting has no effect when the test environment is `--test-env docker` and only works when running tests in the Sauce cloud via `--test-env sauce`.
The maximum concurrency that you can use is limited by your account settings.

## Set different screen resolutions
If you wish to execute tests on different screen resolutions while using Testrunner Toolkit, add the `screenResolution` parameter to your `.sauce/config.yml`:

### Example
```yaml
apiVersion: v1alpha
kind: cypress
sauce:
  region: us-west-1
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
docker:
#  image:
#    name: saucelabs/stt-cypress-mocha-node
#    tag: v0.3.3

cypress:
  version: 5.6.0
  configFile: "tests/e2e/cypress.json"  # We determine related files based on the location of the config file.
suites:
  - name: "saucy test"
    browser: "chrome"
    platformName: "Windows 10"
    screenResolution: "800x600"  # Available resolutions on Windows: '800x600', '1024x768', '1152x864', '1280x768', '1280x800', '1280x960', '1280x1024', '1400x1050', '1440x900', '1600x1200', '1680x1050', '1920x1080', '1920x1200', '2560x1600'
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

## Additional Resources

Please visit [here](/dev/cli/saucectl#parallel) for more information about the parallelization feature and its limitations. You can also visit our [CI Integrations](integrations.md) page for more information on how to use the following CI platforms:

* [Jenkins](integrations.md#jenkins)
* [CircleCI](integrations.md#circleci)
