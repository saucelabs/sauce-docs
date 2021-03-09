---
id: configuration
title: Testrunner Toolkit Configuration 
sidebar_label: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '../../src/components/highlight.jsx'

The Testrunner Toolkit requires a configuration file to know which tests to run, along with which framework to use. Examples of some possible configuration fields you can set include:

* custom `tags`
* location of the test `files`
* desired framework `image` and `version`
* desired `sauce` data center

If you have existing tests and wish to expand or modify the `.sauce/config.yml`, consider the following examples below:

## What You'll Need

Refer to the requirements listed on the [Installation](/testrunner-toolkit/installation) page.

## Basic Configuration

By default `saucectl` searches for a file called `config.yml`:

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
rootDir: "./" # Location of directory that you wish to have bundled. Defaults to current directory.
cypress:
  configFile: "tests/cypress.json"  # We determine related files based on the location of the config file.
  version: 5.6.0
suites:
  - name: "saucy test"
    browser: "chrome"
    browserVersion: "latest"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

### Use Multiple Frameworks

If you wish to use more than one framework, or to configure different sets of tests separately, you can use any name for the configuration file and specify it with the following command:

```bash
saucectl run -c ./path/to/config.yml
```

:::note yaml validation
If you're having trouble with the `.yml` syntax, it's recommended to use a free online YAML/JSON validator tool like these:
* [YAML Lint](http://www.yamllint.com/)
* [Code Beautify](https://codebeautify.org/yaml-validator)
* [JSON Formatter](https://jsonformatter.org/yaml-validator)

There are also various IDE Plugins that can perform syntax checks and/or auto-completion:

* [JetBrains YAML Plugin](https://plugins.jetbrains.com/plugin/13126-yaml)
* [VSCode YAML Plugin](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)
* [Atom YAML Linter](https://atom.io/packages/linter-js-yaml)
:::

### Framework Examples
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

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/cypress.yml
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
</Tabs>

## Concurrency
<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small> , <small>supported frameworks: <Highlight color="#25c2a0">cypress</Highlight></small></p>

Saucectl is capable of running test suites in parallel, the degree of concurrency can be controlled via the config:

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

When running on Sauce cloud, the maximum concurrency that you can use is limited by your account settings.

## Set Different Screen Resolutions

<p><small>supported frameworks: <Highlight color="#25c2a0">cypress</Highlight></small></p>

If you wish to execute tests on different screen resolutions while using Testrunner Toolkit, add the `screenResolution` parameter to your `.sauce/config.yml`:

__Example__:

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
        my_var: $MY_VAR
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

## Running in CI

Please visit [our CI integrations page](/testrunner-toolkit/integrations) for more information about how to run your tests in the following CI platforms:

* [Jenkins](/testrunner-toolkit/integrations/jenkins)
* [GitHub Actions](/testrunner-toolkit/integrations/github-actions)

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

### `rootDir`
__Description__: Directory of files that need to be bundled and uploaded for the tests to run. Ignores what is specified in `.sauceignore`. See [Bundling page](bundling) page for more details

__Type__: *object*

__Example__:
```yaml
  rootDir: "./" # Just use the current directory
```

```yaml
  rootDir: "packages/subpackage" # Some other package from within a monorepo
```


### `npm`
__Description__: Details specific to the `npm` configuration. Packages listed will be installed on the environment prior to your tests execution.

__Type__: *object*

__Example__:
```yaml
  npm:
    registry: https://registry.npmjs.org
    packages:
      lodash: "4.17.20"
      "@babel/preset-typescript": "7.12"
      "@cypress/react": "^5.0.1"
      
```

⚠️ `registry` configuration is only supported in latest cypress docker image. No other frameworks, or Sauce Labs cloud.

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

#### `env`
__Description__: Field for setting enviornment variables. It supports expanded enviornment variables.

__Type__: *object*

__Example__:
```yaml
  env:
    hello: world
    my_var: $MY_VAR
```

#### `tunnel`
__Description__: Tunnel allows you to specify an existing sauce connect tunnel when running tests inside the Sauce cloud. **Note:** This has no effect when running tests inside docker.

__Type__: *object*

__Example__:
```yaml
 tunnel:
    id: your_tunnel_id
    parent: parent_owner_of_tunnel # if applicable, specify the owner of the tunnel
```

## Additional Information

* __Running Tests__: The next step after you've configured `.sauce/config.yml` appropriately is to begin running tests. Please refer to the [running tests page](/testrunner-toolkit/running-tests) for further details.
* __Running in CI/CD__: Please visit [our CI integrations page](/testrunner-toolkit/integrations) for more information about how to run your tests in the following CI platforms:  
    * [Jenkins](/testrunner-toolkit/integrations/jenkins)
    * [GitHub Actions](/testrunner-toolkit/integrations/github-actions)
* __Configuration Syntax__: Please visit [our common configuration syntax page](/testrunner-toolkit/configuration/common-syntax) for more technical information regarding the field syntax and data types; also feel free to skip ahead to the framework-specific syntax reference pages:
    * [Cypress Configuration Syntax](/testrunner-toolkit/configuration/cypress)
    * [TestCafe Configuration Syntax](/testrunner-toolkit/configuration/testcafe)
    * [Playwright Configuration Syntax](/testrunner-toolkit/configuration/playwright)