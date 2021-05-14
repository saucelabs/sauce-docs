---
id: common-syntax
title: Common Configuration Syntax
sidebar_label: Common Syntax
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Each time you initiate a test session, `saucectl` reads your configuration file (`.sauce/config.yml` by default) to determine:

* which framework you are using;
* where your tests are located;
* which tests to run;
* which devices, operating systems and browsers you are testing against;
* and many other specifications

This reference document defines each of the parameters that you can set in your configuration file to help `saucectl` run your tests, your way.

:::note Framework Parameter Sets
Some sets of parameters include settings that vary by framework. In those cases, examples for each framework are provided with links to pages defining the individual settings specific to each framework.
:::

## `apiVersion`

__Description__: The version of `saucectl` you are running.

__Type__: *string*

__Example__:
```yaml
apiVersion: v1alpha
```


## `kind`

__Description__: The framework of your automation tests. This value is set during the `saucectl new` setup script based on the value you choose at the command line prompt.

__Type__: *enum* Valid values are:

    * `cypress`
    * `playwright`
    * `testcafe`
    * `puppeteer`
    * `espresso`

__Example__:
```yaml
kind: cypress
```

## `defaults`

__Description__: Specifies any default settings for the project.

__Type__: *object*

__Example__:
```yaml
defaults:
  - mode: "sauce"
```

### `mode`

__Description__: Specifies whether tests in the project will run on `docker` or `sauce`. You can override this setting for individual suites using the `mode` setting within the [`suites`](#suites) object. The default value is `sauce`.

:::note
Espresso is supported in `sauce` mode only.
:::

__Type__: *enum* Valid values are: `sauce` or `docker`.

__Example__:
```yaml
  mode: "sauce"
```

## `sauce`

__Description__: The parent field containing all settings related to how tests are run and identified in the Sauce Labs platform.

__Type__: *object*

__Example__:
```yaml
sauce:
  region: eu-central-1
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
    concurrency: 10
```

### `region`

__Description__: The Sauce Labs data center through which test will run.

__Type__: *enum* Valid values are: `us-west-1` or `eu-central-1`.

__Example__:
```yaml
  region: eu-central-1
```

### `metadata`

__Description__: The set of parameteres that specify how the tests are grouped and identified in Sauce Labs (i.e. `name`, `tags`, `build`, etc.)

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

### `concurrency`

__Description__: For test suites running on Sauce Cloud, the maximum number of suites to execute concurrently. This value is limited by your Sauce Labs account settings.

__Type__: *int*

__Example__:

```yaml
  concurrency: 10
```

### `tunnel`

__Description__: Specifies an open Sauce Connect tunnel to use when running tests inside the Sauce cloud. See [Sauce Connect](/testrunner-toolkit/configuration#sauce-connect) for information about finding the correct identifier.

__Type__: *object*

__Example__:
```yaml
 tunnel:
    id: your_tunnel_id
    parent: parent_owner_of_tunnel # if applicable, specify the owner of the tunnel
```

## `docker`

__Description__: The set of parameters defining the specific Docker image and type your are using. See [Supported Docker Frameworks](/testrunner-toolkit#supported-frameworks-in-docker-runner) for framework specific release notes.

__Type__: *object*

__Example__:
```yaml
docker:
  fileTransfer: mount
  image: saucelabs/stt-cypress-mocha-node:vX.X.X
```

### `fileTransfer`

__Description__: Method in which to transfer test files into the docker container. There are two options:
* `mount` : Default method; mounts files and folders into the docker container. Changes to these files and folders will be reflected on the host (and vice a versa).
* `copy` : Copies files and folders into the docker container. If you run into permission issues, either due to docker or host settings, `copy` is the advised use case.
  > See the Docker documentation to read more about the copy convention ([`docker cp`](https://docs.docker.com/engine/reference/commandline/cp/) | [`COPY`](https://docs.docker.com/engine/reference/builder/#copy)).

__Type__: *string*

__Example__:
```yaml
  fileTransfer: < mount | copy >
```

### `image`

__Description__: Specifies which docker image and version to use when running tests. Valid image values are shown in the example below.

__Type__: *string*

__Example__:
```yaml
  image: saucelabs/< stt-cypress-mocha-node | stt-playwright-node | stt-testcafe-node >:< vX.X.X >
```

:::caution
Avoid using the `latest` tag for docker images, as advised in [this article](https://vsupalov.com/docker-latest-tag/#:~:text=You%20should%20avoid%20using%20the,apart%20from%20the%20image%20ID.).
:::

## `rootDir`

__Description__: Directory of files that need to be bundled and uploaded for the tests to run. Ignores what is specified in `.sauceignore`. See [Tailoring Your Test File Bundle](/testrunner-toolkit/configuration#tailoring-your-test-file-bundle) for more details.

__Type__: *object*

__Examples__:
```yaml
  rootDir: "./" # Use the current directory
```

```yaml
  rootDir: "packages/subpackage" # Some other package from within a monorepo
```

## `npm`
__Description__: Details specific to the `npm` configuration. Packages listed are installed in the environment prior to your tests executing.

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

### `registry`

__Description__: Specifies the location of the npm registry source. If the registry source is a private address and you are running tests on Sauce Cloud, you can provide access to the registry source using [Sauce Connect](/testrunner-toolkit/running-tests#running-tests-on-sauce-labs-with-sauce-connect).

__Type__: *string*

__Example__:
```yaml
  registry: https://registry.npmjs.org
```

### `packages`

__Description__: Specifies npm packages that are required to run tests and should, therefore, be included in the bundle. See [Including Node Dependencies](/testrunner-toolkit/configuration#including-node-dependencies).

__Type__: *object*

__Example__:
```yaml
  packages:
    lodash: "4.17.20"
    "@babel/preset-typescript": "7.12"
    "@cypress/react": "^5.0.1"
```

## `artifacts`

__Description__: Specifies how to manage test artifacts, such as logs, videos, and screenshots.

__Type__: *object*

__Example__:
```yaml
artifacts:
  download:
    when: always
    match:
      - junit.xml
    directory: ./artifacts/
```

### `download`

__Description__: Specifies the settings related to downloading artifacts from tests run by `saucectl`.

__Type__: *object*

__Example__:
```yaml
  download:
    when: always
    match:
      - junit.xml
    directory: ./artifacts/
```

#### `when`

__Description__: Specifies when and under what circumstances to download artifacts.

__Type__: *string*

__Values__:
- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only.

__Example__:
```yaml
    when: always
```

#### `match`

__Description__: Allows you to specify particular files or file types to download based on whether they match the name pattern provided. Supports the wildcard character `*`.

__Type__: *string[]*

__Example__:
```yaml
  match:
    - junit.xml
    - *.log
```

#### `directory`

__Description__: Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded.

__Type__: *string*

__Example__:
```yaml
    directory: ./artifacts/
```

## `{framework}`

__Description__: The set of parameters providing details about the relevant framework. Specific parameters vary for each supported framework. More detail is available on the individual framework configuration pages, links to which are available in each example below.

__Type__: *object*

__Examples__:

<Tabs
    groupId="config"
    defaultValue="cypress"
    values={[
      {"label":"Cypress","value":"cypress"},
      {"label":"Playwright","value":"playwright"},
      {"label":"TestCafe","value":"testcafe"},
      {"label":"Puppeteer","value":"puppeteer"},
      {"label":"Espresso","value":"espresso"}
    ]}>
<TabItem value="cypress">

See the full [Cypress Configuration](/testrunner-toolkit/configuration/cypress) reference.

```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/master/.sauce/config.yml#L18-L21
```

</TabItem>
<TabItem value="playwright">

See the full [Playwright Configuration](/testrunner-toolkit/configuration/playwright) reference.

```yaml reference
https://github.com/saucelabs/saucectl-playwright-example/blob/master/.sauce/config.yml#L18-L20
```

</TabItem>
<TabItem value="testcafe">

See the full [TestCafe Configuration](/testrunner-toolkit/configuration/testcafe) reference.

```yaml reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/master/.sauce/config.yml#L18-L20
```

</TabItem>
<TabItem value="puppeteer">

See the full [Puppeteer Configuration](/testrunner-toolkit/configuration/puppeteer) reference.

```yaml reference
https://github.com/saucelabs/saucectl-puppeteer-example/blob/master/.sauce/config.yml#L20-L21
```

</TabItem>
<TabItem value="espresso">

See the full [Espresso Configuration](/testrunner-toolkit/configuration/espresso) reference.

```yaml reference
https://github.com/saucelabs/saucectl-espresso-example/blob/master/.sauce/config.yml#L14-L16
```

</TabItem>
</Tabs>


## `suites`

__Description__: The set of parameters providing details about the test suites to run. Each supported framework may include different parameters for each test suite, so refer to the individual framework configuration pages linked in each example below for relevant definitions.

__Type__: *object*

__Examples__:

<Tabs
    groupId="config"
    defaultValue="cypress"
    values={[
      {"label":"Cypress","value":"cypress"},
      {"label":"Playwright","value":"playwright"},
      {"label":"TestCafe","value":"testcafe"},
      {"label":"Puppeteer","value":"puppeteer"},
      {"label":"Espresso","value":"espresso"}
    ]}>
<TabItem value="cypress">

See the full [Cypress Configuration](/testrunner-toolkit/configuration/cypress) reference.

```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/master/.sauce/config.yml#L23-L29
```

</TabItem>
<TabItem value="playwright">

See the full [Playwright Configuration](/testrunner-toolkit/configuration/playwright) reference.

```yaml reference
https://github.com/saucelabs/saucectl-playwright-example/blob/master/.sauce/config.yml#L22-L27
```

</TabItem>
<TabItem value="testcafe">

See the full [TestCafe Configuration](/testrunner-toolkit/configuration/testcafe) reference.

```yaml reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/master/.sauce/config.yml#L22-L27
```

</TabItem>
<TabItem value="puppeteer">

See the full [Puppeteer Configuration](/testrunner-toolkit/configuration/puppeteer) reference.

```yaml reference
https://github.com/saucelabs/saucectl-puppeteer-example/blob/master/.sauce/config.yml#L22-L25
```

</TabItem>
<TabItem value="espresso">

See the full [Espresso Configuration](/testrunner-toolkit/configuration/espresso) reference.

```yaml reference
https://github.com/saucelabs/saucectl-espresso-example/blob/master/.sauce/config.yml#L17-L31
```

</TabItem>
</Tabs>


### `name`

__Description__: Name of the test suite.

__Type__: *string*

__Example__:
```yaml
  - name: "saucy test"
```

### `env`

__Description__: Field for setting enviornment variables. It supports expanded enviornment variables.

__Type__: *object*

__Example__:
```yaml
  env:
    hello: world
    my_var: $MY_VAR
```

### `browser`

__Description__: Name of the browser in which the test runs.

__Type__: *string*

__Example__:
```yaml
    browser: "chrome"
```

### `browserVersion`

__Description__: Version of the browser in which the test runs.

__Type__: *string*

__Example__:
```yaml
    browserVersion: "85.0"
```

### `platformName`

__Description__: Operating system on which the browser and test runs. This value is optional and will be defaulted to a sensible platform. Set this value explicitly if you'd like to have greater control over where your tests should run.

__Type__: *string*

__Example__:
```yaml
    platformName: "Windows 10"
```

### `screenResolution`

__Description__: Field where you can change the browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "1920x1080"
```

> For all available resolutions please visit [Sauce Labs Test Configurations](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SauceLabsCustomTestingOptions).


### `mode`

__Description__: Allows you to specify whether the individual suite will run on `docker` or `sauce`, potentially overriding the default project mode setting.

__Type__: *string*

__Example__:
```yaml
  mode: "sauce"
```

## Framework Syntax Reference

* [Cypress](/testrunner-toolkit/configuration/cypress)
* [Playwright](/testrunner-toolkit/configuration/playwright)
* [TestCafe](/testrunner-toolkit/configuration/testcafe)
* [Espresso](/testrunner-toolkit/configuration/espresso)
