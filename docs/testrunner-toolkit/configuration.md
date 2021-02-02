---
id: configuration
title: Testrunner Toolkit Configuration 
sidebar_label: Basics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

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
To get started, you must: [download and install testrunner toolkit](/testrunner-toolkit/installation.md) and run the following command to authenticate Sauce Labs:

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

Testrunner Toolkit generates a new config file in your current working directory (`.sauce/config.yml`) and prompts you to execute the `saucectl run` command. Visit the [Running Tests](/testrunner-toolkit/running-tests) page for more detailed information about running tests with Testrunner Toolkit.

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
  # image: saucelabs/stt-cypress-mocha-node:v5.6.0
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

<p><small>See full example <a href="https://github.com/saucelabs/sauce-cypress-runner/blob/master/.saucetpl/.sauce/config.yml">here</a>.</small></p>

```yaml title=".sauce/cypress.yml"
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
cypress:
  version: ##VERSION##
  configFile: "cypress.json"  # We determine related files based on the location of the config file.
suites:
  - name: "saucy test"
    browser: "chrome"
    screenResolution: "1920x1080"  # Available resolutions on sauce for Windows: '800x600', '1024x768', '1152x864', '1280x768', '1280x800', '1280x960', '1280x1024', '1400x1050', '1440x900', '1600x1200', '1680x1050', '1920x1080', '1920x1200', '2560x1600'
docker:
  fileTransfer: mount # Defaults to `mount`. Choose between mount|copy.
   image: saucelabs/stt-cypress-mocha-node:v5.6.0
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

<p><small>See full example <a href="https://github.com/saucelabs/sauce-playwright-runner/blob/master/.saucetpl/.sauce/config.yml">here</a>.</small></p>

```yaml title=".sauce/playwright.yml"
apiVersion: v1alpha
kind: playwright
sauce:
  region: us-west-1
  concurrency: 1
  metadata:
    name: Testing Playwright Support
    tags:
      - e2e
    build: "$BUILD_ID"
playwright:
  version: ##VERSION##
  projectPath: tests/
docker:
  fileTransfer: mount
suites:
  - name: "saucy test"
    platformName: "Windows 10"
    testMatch: '**/*.js'

    params:
      browserName: "firefox"
      headful: false
      slowMo: 1000
```

</TabItem>
<TabItem value="testcafe">

<p><small>See full example <a href="https://github.com/saucelabs/sauce-testcafe-runner/blob/master/.saucetpl/.sauce/config.yml">here</a>.</small></p>

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
  - tests/example.test.js
suites:
  - name: "saucy test"
    match: ".*.(spec|test).[jt]s$"
image:
  base: saucelabs/stt-testcafe-node
  version: ##VERSION##
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
cypress:
  version: 5.6.0
  configFile: "tests/e2e/cypress.json"  # We determine related files based on the location of the config file.
suites:
  - name: "saucy test"
    browser: "chrome"
    platformName: "Windows 10"
    screenResolution: "1920x1080"  # Available resolutions on Windows: '800x600', '1024x768', '1152x864', '1280x768', '1280x800', '1280x960', '1280x1024', '1400x1050', '1440x900', '1600x1200', '1680x1050', '1920x1080', '1920x1200', '2560x1600'
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

## Additional Resources

Please visit [here](/dev/cli/saucectl#parallel) for more information about the parallelization feature and its limitations. You can also visit our [CI Integrations](integrations.md) page for more information on how to use the following CI platforms:

* [Jenkins](integrations.md#jenkins)
* [CircleCI](integrations.md#circleci)

## Common Syntax Reference

The section below provides details and explanations regarding the common syntax/fields of `.sauce/config.yml`.

### `apiVersion`

__Description__: Version of `saucectl` API.

__Type__: *string*

__Example__:
```yaml
apiVersion: v1alpha
```

### `kind`

__Description__: The kind of tests (framework) you wish to run.

__Type__: *string*

__Example__:
```yaml
kind: < cypress | playwright | testcafe >
```

### `sauce`

__Description__: The parent field containing all details related to the Sauce Labs platform.

__Type__: *object*

__Example__:
```yaml
sauce:
  region: < us-west-1 | eu-central-1 >
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
```

#### `region`

__Description__: Geographical region of the desired Sauce Labs data center.

__Type__: *string*

__Example__:
```yaml
  region: < us-west-1 | eu-central-1 >
```

#### `metadata`

__Description__: Data specific to the test execution details (i.e. `name`, `tags`, `build`, etc.)

__Type__: *object*

__Example__:
```yaml
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
```

### `docker`

__Description__: Details specific to the desired [Sauce Labs docker images](https://hub.docker.com/u/saucelabs).

__Type__: *object*

__Example__:
```yaml
docker:
  fileTransfer: mount
  image: saucelabs/stt-cypress-mocha-node:vX.X.X
```

#### `fileTransfer`

__Description__: Method in which to transfer test files into the docker container. There are two options:
* `mount` : Default method; mounts files and folders into the docker container. Changes to these files and folders will be reflected on the host (and vice a versa).
* `copy` : Copies files and folders into the docker container. If you run into permission issues, either due to docker or host settings, `copy` is the advised use case.
  > See the Docker documentation to read more about the copy convention ([`docker cp`](https://docs.docker.com/engine/reference/commandline/cp/) | [`COPY`](https://docs.docker.com/engine/reference/builder/#copy)).

__Type__: *string*

__Example__:
```yaml
  fileTransfer: < mount | copy >
```

#### `image`

__Description__: The chosen docker image, `name` and version `tag`, in which to run tests.

__Type__: *string*

__Example__:
```yaml
  image: saucelabs/< stt-cypress-mocha-node | stt-playwright-node | stt-testcafe-node >:< vX.X.X >
```

> WARNING: using the `latest` tag for docker images is dangerous. For further information, read [this article](https://vsupalov.com/docker-latest-tag/#:~:text=You%20should%20avoid%20using%20the,apart%20from%20the%20image%20ID.).

### `npm`
__Description__: Details specific to the `npm` configuration. Packages listed will be installed on the environment prior to your tests execution.

__Type__: *object*

__Example__:
```yaml
  npm:
    packages:
      lodash: "4.17.20"
```

### `suites`

__Description__: Field for defining test suite details such as the suite `name`, desired `browser`
/ `platformName`, and `config`.

__Type__: *object*

__Example__:
```yaml
suites:
  - name: "saucy test"
```

#### `name`

__Description__: Name of the test suite.

__Type__: *string*

__Example__:
```yaml
  - name: "saucy test"
```
## Framework Syntax Reference

* [Cypress](/testrunner-toolkit/configuration/cypress)
* [Playwright](/testrunner-toolkit/configuration/playwright)
* [TestCafe](/testrunner-toolkit/configuration/testcafe)
