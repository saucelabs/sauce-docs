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
<p><small>| REQUIRED | STRING |</small></p>

Identifies the version of the underlying configuration schema. At this time, `v1alpha` is the only supported value.

```yaml
apiVersion: v1alpha
```

---

## `kind`
<p><small>| REQUIRED | STRING/ENUM |</small></p>

Specifies which framework is associated with the automation tests configured in this specification. Valid values are:

* `cypress`
* `playwright`
* `testcafe`
* `puppeteer`
* `espresso`

```yaml
kind: cypress
```
---

## `showConsoleLog`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Generates the `console.log` as local output and as a test asset in Sauce Labs for all tests. By default, `console.log` is only included in results for failed tests.

```yaml
showConsoleLog: true
```
---

## `defaults`
<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies any default settings for the project.

```yaml
defaults:
  - mode: sauce
```
---

### `mode`
<p><small>| OPTIONAL | STRING/ENUM |</small></p>

Instructs `saucectl` run tests remotely through Sauce Labs (`sauce`) or locally on `docker`. You can override this setting for individual suites using the `mode` setting within the [`suites`](#suites) object. If not set, the default value is `sauce`.

```yaml
  mode: "sauce"
```
---

## `sauce`
<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property containing all settings related to how tests are run and identified in the Sauce Labs platform.

```yaml
sauce:
  region: eu-central-1
  metadata:
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
  concurrency: 10
```
---

### `region`
<p><small>| OPTIONAL | STRING/ENUM |</small></p>

Specifies through which Sauce Labs data center tests will run. Valid values are: `us-west-1` or `eu-central-1`.

```yaml
  region: eu-central-1
```
---

### `metadata`
<p><small>| OPTIONAL | OBJECT | VIRTUAL ONLY |</small></p>

The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you.

:::note Restricted Mobile Support
`metadata` is not yet supported for tests on real devices, so any values set for Espresso configurations will apply only to emulator tests, and values set for XCUITest configurations will be ignored entirely, since simulators are not yet supported through `saucectl`.
:::


```yaml
metadata:
  build: RC 10.4.a
  tags:
    - e2e
    - release team
    - beta
    - featurex
```
---

### `concurrency`
<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the maximum number of suites to execute at the same time. If the test defines more suites than the max, excess suites are queued and run in order as each suite completes.

:::caution
For tests running on Sauce, set this value to equal or less than your Sauce concurrency allowance, as setting a higher value may result in jobs dropped by the server.
:::

```yaml
  concurrency: 5
```

Alternatively, you can override the file setting at runtime by setting the concurrency flag as an inline parameter of the `saucectl run` command:

```bash
saucectl run --ccy 5
```
---

### `tunnel`
<p><small>| OPTIONAL | OBJECT |</small></p>

`saucectl` supports using [Sauce Connect](/testrunner-toolkit/configuration#sauce-connect) to establish a secure connection with Sauce Labs. To do so, launch a tunnel; then provide the name and owner (if applicable) in this property.

```yaml
sauce:
  tunnel:
    name: your_tunnel_name
    owner: tunnel_owner_username
```
---

#### `name`
<p><small>| OPTIONAL | STRING |</small></p>

Identifies an active Sauce Connect tunnel to use for secure connectivity to the Sauce Labs cloud.

:::note
This property replaces the former `id` property, which is deprecated.
:::

```yaml
sauce:
  tunnel:
    name: your_tunnel_name
```
---

#### `owner`
<p><small>| OPTIONAL | STRING |</small></p>

Identifies the Sauce Labs user who created the specified tunnel, which is required if the user running the tests did not create the tunnel.

:::note
This property replaces the former `parent` property, which is deprecated.
:::

```yaml
sauce:
  tunnel:
    name: your_tunnel_name
    owner: tunnel_owner_username
```
---

## `docker`
<p><small>| OPTIONAL | OBJECT |<span class="highlight docker">Docker only</span> |</small></p>

The set of properties defining the specific Docker image and type your are using, if you are running any tests locally.

```yaml
docker:
  fileTransfer: mount
  image: saucelabs/stt-cypress-mocha-node:vX.X.X
```
---

### `fileTransfer`
<p><small>| OPTIONAL | STRING |</small></p>

Method in which to transfer test files into the docker container. Valid values are:
* `mount`: (Default) Mounts files and folders into the docker container. Changes to these files and folders will be reflected on the host (and vice a versa).
* `copy`: Copies files and folders into the docker container. If you run into permission issues, either due to docker or host settings, `copy` is the advised use case. See the [Docker documentation](https://docs.docker.com/engine/reference/builder/#copy) for more about the copy convention.

```yaml
  fileTransfer: < mount | copy >
```
---

### `image`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies which docker image and version to use when running tests. Valid values are in the format:
`saucelabs/<framework-node>:<vX.X.X>`. See [Supported Testing Platforms](/testrunner-toolkit#supported-frameworks-in-docker-runner) for Docker release notes related to each framework.

```yaml
  image: saucelabs/< stt-cypress-mocha-node | stt-playwright-node | stt-testcafe-node | stt-puppeteer-jest-node >:< vX.X.X >
```

:::caution
Avoid using the `latest` tag for docker images, as advised in [this article](https://vsupalov.com/docker-latest-tag/#:~:text=You%20should%20avoid%20using%20the,apart%20from%20the%20image%20ID.).
:::
---

## `rootDir`
<p><small>| REQUIRED | OBJECT |</small></p>

The directory of files that need to be bundled and uploaded for the tests to run. Ignores what is specified in `.sauceignore`. See [Tailoring Your Test File Bundle](#tailoring-your-test-file-bundle) for more details. The following examples show the different relative options for setting this value.

```yaml
  rootDir: "./" # Use the current directory
```

```yaml
  rootDir: "packages/subpackage" # Some other package from within a monorepo
```
---

## `npm`
<p><small>| OPTIONAL | OBJECT |</small></p>

A parent property specifying the configuration details for any `npm` dependencies. Packages listed are installed in the environment prior to your tests executing.

```yaml
npm:
  registry: https://registry.npmjs.org
  packages:
    lodash: "4.17.20"
    "@babel/preset-typescript": "7.12"
    "@cypress/react": "^5.0.1"
```
---

### `registry`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the location of the npm registry source. If the registry source is a private address and you are running tests on Sauce Cloud, you can provide access to the registry source using [Sauce Connect](/testrunner-toolkit/running-tests#running-tests-on-sauce-labs-with-sauce-connect).

```yaml
  registry: https://registry.npmjs.org
```
---

### `packages`
<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies any NPM packages that are required to run tests and should, therefore, be included in the bundle. See [Including Node Dependencies](#including-node-dependencies).

```yaml
  packages:
    lodash: "4.17.20"
    "@babel/preset-typescript": "7.12"
    "@cypress/react": "^5.0.1"
```
---

## `reporters`
<p><small>| OPTIONAL | OBJECT |</small></p>

Configures additional reporting capabilities provided by `saucectl`.

```yaml
reporters:
  junit:
    enabled: true
    filename: saucectl-report.xml
```

---

## `artifacts`
<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies how to manage test artifacts, such as logs, videos, and screenshots.

```yaml
artifacts:
  download:
    when: always
    match:
      - junit.xml
    directory: ./artifacts/
```
---

### `download`
<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies the settings related to downloading artifacts from tests run by `saucectl`.

```yaml
  download:
    when: always
    match:
      - junit.xml
    directory: ./artifacts/
```
---

#### `when`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

* `always`: Always download artifacts.
* `never`: Never download artifacts.
* `pass`: Download artifacts for passing suites only.
* `fail`: Download artifacts for failed suites only.

```yaml
    when: always
```
---

#### `match`
<p><small>| OPTIONAL | STRING/ARRAY |</small></p>

Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character `*` (use quotes for best parsing results with wildcard).

```yaml
  match:
    - junit.xml
    - "*.log"
```
---

#### `directory`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded.

```yaml
    directory: ./artifacts/
```
---

## `notifications`
<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies how to set up automatic test result alerts.

```yaml
notifications:
  slack:
    channels:
      - "saucectl-results"
      - "cypress-tests"
    send: always
```
---

### `slack`
<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies the settings related to sending tests result notifications through Slack. See [Slack Integration](/basics/integrations/slack) for information about integrating your Sauce Labs account with your Slack workspace.

```yaml
  slack:
    channels: "saucectl-cypress-tests"
    send: always
```
---

#### `channels`
<p><small>| OPTIONAL | STRING/ARRAY |</small></p>

The set of Slack channels to which the test result notifications are to be sent.

```yaml
  slack:
    channels:
      - "saucectl-results"
      - "cypress-team"
    send: always
```
---

#### `send`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies when and under what circumstances to send notifications to specified Slack channels. Valid values are:

* `always`: Send notifications for all test results.
* `never`: Do not send any test result notifications.
* `pass`: Send notifications for passing suites only.
* `fail`: Send notifications for failed suites only.

```yaml
  slack:
    channels: "saucectl-cypress-tests"
    send: always
```
---

## `{framework}`
<p><small>| REQUIRED | OBJECT |</small></p>

The set of properties providing details about the relevant framework. Specific properties vary for each supported framework. More detail is available on the individual framework configuration pages, links to which are available in each example below.

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

---

## `suites`
<p><small>| REQUIRED | OBJECT |</small></p>

The set of properties providing details about the test suites to run. May contain multiple suite definitions. Each supported framework may include different properties for each test suite, so refer to the individual framework configuration pages linked in each example below for relevant definitions.

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
---

### `name`
<p><small>| REQUIRED | STRING |</small></p>

The name of the test suite, which will be reflected in the results and related artifacts.

```yaml
  - name: "saucy test"
```
---

### `env`
<p><small>| OPTIONAL | OBJECT |</small></p>

A property containing one or more environment variables that may be referenced in the tests for this suite. Expanded environment variables are supported.

```yaml
  env:
    hello: world
    my_var: $MY_VAR
```
---

### `screenResolution`
<p><small>| OPTIONAL | STRING |  <span class="highlight sauce-cloud">Sauce Cloud only</span> |</small></p>

Specifies a browser window screen resolution, which may be useful if you are attempting to simulate a browser on a particular device type. See [Test Configurations](/basics/test-config-annotation/test-config) for a list of available resolution values.

```yaml
    screenResolution: "1920x1080"
```
---

### `mode`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies whether the individual suite will run on `docker` or `sauce`, potentially overriding the default project mode setting.

```yaml
  mode: "sauce"
```
---

## Framework Syntax Reference

* [Cypress](/testrunner-toolkit/configuration/cypress)
* [Playwright](/testrunner-toolkit/configuration/playwright)
* [TestCafe](/testrunner-toolkit/configuration/testcafe)
* [Espresso](/testrunner-toolkit/configuration/espresso)
* [XCUITest](/testrunner-toolkit/configuration/xcuitest)
