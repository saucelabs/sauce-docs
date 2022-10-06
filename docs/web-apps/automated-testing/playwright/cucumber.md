---
id: cucumber
title: Configuring Your Cucumber-js Tests with Playwright 
sidebar_label: Cucumber YAML Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`saucectl` relies on a YAML specification file to determine exactly which tests to run and how to run them. To customize `saucectl` to run your Cucumber-js tests with Playwright, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running Cucumber-js with Playwright tests.

## Setting an Alternative Configuration File

By default, `saucectl` looks for the `config.yml` file in the `.sauce` folder of your project root, but you can actually specify a different file, or if you are using multiple frameworks or need to configure different sets of tests to run separately, you may choose to have multiple configuration files that you can direct `saucectl` to reference as necessary.

Use the following configuration at runtime to direct `saucectl` to use any configuration file you choose:

```bash
saucectl run -c ./path/to/{config-file}.yml
```

:::note YAML Required
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax. Our IDE Integrations (e.g., [Visual Studio Code](/dev/cli/saucectl/usage/ide/vscode)) can help you out by validating the YAML files and provide handy suggestions, so make sure to check them out!
:::


## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-playwright-example/blob/main/examples/cucumber/.sauce/config.yml
```

Each of the properties supported for running Cucumber-js with Playwright tests through `saucectl` is defined below.

## `apiVersion`
<p><small>| REQUIRED | STRING |</small></p>

Identifies the version of the underlying configuration schema. At this time, `v1alpha` is the only supported value.

```yaml
apiVersion: v1alpha
```
---

## `kind`
<p><small>| REQUIRED | STRING/ENUM |</small></p>

Specifies which framework is associated with the automation tests configured in this specification.

```yaml
kind: playwright-cucumberjs
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
  mode: sauce
  timeout: 15m
```
---

### `mode`
<p><small>| OPTIONAL | STRING/ENUM |</small></p>

Instructs `saucectl` to run tests remotely through Sauce Labs (`sauce`) or locally on `docker`. You can override this setting for individual suites using the `mode` setting within the [`suites`](#suites) object. If not set, the default value is `sauce`.

```yaml
  mode: sauce
```
---

### `timeout`
<p><small>| OPTIONAL | DURATION |</small></p>

Instructs how long (in `ms`, `s`, `m`, or `h`) `saucectl` should wait for each suite to complete. You can override this setting for individual suites using the `timeout` setting within the [`suites`](#suites) object. If not set, the default value is `0` (unlimited).

```yaml
  timeout: 15m
```
---

## `sauce`
<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property containing all settings related to how tests are run and identified in the Sauce Labs platform.

```yaml
sauce:
  region: eu-central-1
  metadata:
    name: Testing Cucumber Support
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
<p><small>| OPTIONAL | OBJECT |</small></p>

The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you, as shown in the following example:

```yaml
metadata:
  name: Testing Cucumber-js Support
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

### `retries`
<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the number of times to retry a failed suite.

```yaml
  retries: 1
```

Alternatively, you can override the file setting at runtime by setting the retries flag as an inline parameter of the `saucectl run` command:

```bash
saucectl run --retries 1
```
---

### `tunnel`
<p><small>| OPTIONAL | OBJECT |</small></p>

`saucectl` supports using [Sauce Connect](/secure-connections/sauce-connect/proxy-tunnels/) to establish a secure connection with Sauce Labs. To do so, launch a tunnel; then provide the name and owner (if applicable) in this property.

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

### `visibility`
<p><small>| OPTIONAL | STRING |</small></p>

Sets the visibility level of test results for suites run on Sauce Labs. If unspecified or empty, `team` visibility will be applied. Valid values are:

* `public`: Accessible to everyone.
* `public restricted`: Share your job's results page and video, but keeps the logs only for you.
* `share`: Only accessible to people with a valid link.
* `team`: (Default) Only accessible to people under the same root account as you.
* `private`: Only you (the owner) will be able to view assets and test results page.

```yaml
sauce:
  visibility: private
```
---

### `launchOrder`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the execution order for your test suites. When set to `fail rate`, test suites with the highest failure rate will execute first. If unspecified, test suites will execute in the order in which they are written in the configuration file.

```yaml
sauce:
  launchOrder: fail rate
```
---

## `env`
<p><small>| OPTIONAL | OBJECT |</small></p>

A property containing one or more environment variables that are global for all tests suites in this configuration. Values set in this global property will overwrite values set for the same environment variables set at the suite level.

```yaml
  env:
    hello: world
    my_var: $MY_VAR  # You can also pass through existing environment variables through parameter expansion
```
---

## `docker`
<p><small>| OPTIONAL | OBJECT |<span class="highlight docker">Docker only</span> |</small></p>

The set of properties defining the specific Docker image and type your are using, if you are running any tests locally.

```yaml
docker:
  fileTransfer: copy
  image: saucelabs/stt-playwright-node:vX.X.X
```
---

### `fileTransfer`
<p><small>| OPTIONAL | STRING |</small></p>

Method in which to transfer test files into the docker container. Valid values are:
* `mount`: (Default) Mounts files and folders into the docker container. Changes to these files and folders will be reflected on the host (and vice a versa).
* `copy`: Copies files and folders into the docker container. If you run into permission issues, either due to docker or host settings, `copy` is the advised use case. See the [Docker documentation](https://docs.docker.com/engine/reference/builder/#copy) for more about the copy convention.

```yaml
  fileTransfer: copy
```
---

### `image`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies which docker image and version to use when running tests. Valid values are in the format:
`saucelabs/<framework-node>:<vX.X.X>`. See [Supported Testing Platforms](/web-apps/automated-testing/playwright#supported-testing-platforms) for Docker release notes related to Playwright.

```yaml
  image: saucelabs/< stt-playwright-mocha-node | stt-playwright-node | stt-testcafe-node >:< vX.X.X >
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

:::caution
Only the files contained within `rootDir` will be available during the tests. Any reference to a file that is not included in `rootDir` will make the tests fail.
:::

---

## `npm`
<p><small>| OPTIONAL | OBJECT |</small></p>

A parent property specifying the configuration details for any `npm` dependencies. Packages listed are installed in the environment prior to your tests executing.

```yaml
npm:
  dependencies:
    - "@cucumber/cucumber"
    - "@saucelabs/cucumber-reporter"
    - "typescript"
    - "ts-node"
```
---

### `registry`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the location of the npm registry source. If the registry source is a private address and you are running tests on Sauce Cloud, you can provide access to the registry source using [Sauce Connect](/dev/cli/saucectl/#run-tests-on-sauce-labs-with-sauce-connect).

```yaml
  registry: https://registry.npmjs.org
```
---

### `dependencies`
<p><small>| OPTIONAL | ARRAY |</small></p>

Specifies any npm packages that are required to run tests and should, therefore, be included in the bundle.
The dependencies specified here have to be already installed in the local `node_modules` folder. These dependencies, along with any related transitive dependencies, are then included in the bundle that is uploaded to Sauce Labs.

In order to run Cucumber-js tests Playwright, you must to install the following required packages locally, and then add the dependencies to the configuration file.

```yaml
npm:
  dependencies:
    - "@cucumber/cucumber"
    - "@saucelabs/cucumber-reporter"
    - "typescript"
    - "ts-node"
```

To use this feature, make sure that `node_modules` is not ignored via `.sauceignore`.

:::note
`saucectl` doesn't support the way to run Cucumber-Playwright test via installing Cucumber-js related packages on the fly.
:::

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
### `junit`
<p><small>| OPTIONAL | OBJECT |</small></p>

The JUnit reporter gathers JUnit reports from all jobs and combines them into a single report.

```yaml
reporters:
  junit:
    enabled: true
    filename: saucectl-report.xml
```
---
### `json`
<p><small>| OPTIONAL | OBJECT |</small></p>

The JSON reporter gathers test results from all jobs and combines them into a single report.

```yaml
reporters:
  json:
    enabled: true
    filename: saucectl-report.json
    webhookURL: https://my-webhook-url
```

---
#### `enabled`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Toggles the reporter on/off.

```yaml
    enabled: true
```

---
#### `webhookURL`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the webhook URL. When saucectl test is finished, it'll send an HTTP POST with a JSON payload to the configured webhook URL.

```yaml
    webhookURL: https://my-webhook-url
```

---
#### `filename`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the report filename. Defaults to "saucectl-report.json".

```yaml
    filename: my-saucectl-report.json
```

---
## `artifacts`
<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies how to manage test artifacts, such as logs, videos, and screenshots.

```yaml
artifacts:
  cleanup: true
  download:
    when: always
    match:
      - junit.xml
    directory: ./artifacts/
```
---

### `cleanup`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

When set to `true`, all contents of the specified download directory are cleared before any new artifacts from the current test are downloaded.

```yaml
  cleanup: true
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

Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded. The name of the subdirectory will match the suite name. If a directory with the same name already exists, the new one will be suffixed by a serial number.

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
      - "playwright-tests"
    send: always
```
---

### `slack`
<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies the settings related to sending tests result notifications through Slack. See [Slack Integration](/basics/integrations/slack) for information about integrating your Sauce Labs account with your Slack workspace.

```yaml
  slack:
    channels: "saucectl-pw-tests"
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
      - "playwright-team"
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
    channels: "saucectl-pw-tests"
    send: always
```
---


## `playwright`
<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the Playwright project.

```yaml
playwright:
  version: 1.11.1
```
---

### `version`
<p><small>| REQUIRED | STRING |</small></p>

The version of Playwright that is compatible with the tests defined in this file. See [Supported Testing Platforms](/web-apps/automated-testing/playwright#supported-testing-platforms) for the list of Playwright versions supported by `saucectl` and their compatible test platforms.

```yaml
  version: 1.11.1
```

:::tip
You can also define a path to your `package.json`. This will make `saucectl` use the same Playwright version that's defined in your projects `devDependencies` or `dependencies` map.

The path to your `package.json` file will be relative to the `rootDir` of your configuration.
:::
---

## `suites`
<p><small>| REQUIRED | OBJECT |</small></p>

The set of properties providing details about the test suites to run. May contain multiple suite definitions. See the full [example config](#example-configuration) for an illustration of multiple suite definitions.

---

### `name`
<p><small>| REQUIRED | STRING |</small></p>

The name of the test suite, which will be reflected in the results and related artifacts.

```yaml
  - name: "saucy test"
```
### `browserName`
<p><small>| OPTIONAL | STRING |</small></p>

Sets the browser name for the test suite. `saucectl` passes `browserName` as an environment variable `$BROWSER_NAME`.

Launching the browser for Cucumber-Playwright test should be done on customer's side. Hence `saucectl` cannot guarantee the displayed browser name is matched with the actual browser name.

```yaml
  browserName: "chromium"
```
---

### `env`
<p><small>| OPTIONAL | OBJECT |</small></p>

A property containing one or more environment variables that may be referenced in the tests for this suite. Expanded environment variables are supported. Values set here will be overwritten by values set in the global `env` property.

```yaml
  env:
    hello: world
    my_var: $MY_VAR
```
---

### `platformName`
<p><small>| OPTIONAL | STRING | <span class="highlight sauce-cloud">Sauce Cloud only</span> |</small></p>

A specific operating system and version on which to run the specified browser and test suite. Defaults to a platform that is supported by `saucectl` for the chosen browser.

```yaml
    platformName: "Windows 11"
```
---

### `screenResolution`
<p><small>| OPTIONAL | STRING | <span class="highlight sauce-cloud">Sauce Cloud only</span> |</small></p>

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

### `shard`
<p><small>| OPTIONAL | STRING |</small></p>

When sharding is configured, `saucectl` automatically splits the tests (e.g., by spec or concurrency) so that they can easily run in parallel.
For sharding by concurrency, `saucectl` splits test files into several groups (the number of groups is determined by the concurrency setting). Each group will then run as an individual job.

Selectable values: `spec` to shard by spec file, `concurrency` to shard by concurrency. Remove this field or leave it empty `""` for no sharding.

```yaml
suites:
  - name: "I am sharded"
    shard: spec
```

:::tip
To split tests in the most efficient way possible, use:
- `spec` when the number of specs is less than the configured concurrency.
- `concurrency` when the number of specs is larger than the configured concurrency.
:::

---

### `timeout`
<p><small>| OPTIONAL | DURATION |</small></p>

Instructs how long `saucectl` should wait for the suite to complete, potentially overriding the default project timeout setting.

When the suite reaches the timeout limit, its status is set to '?' in the CLI. This does not reflect the actual status of the job in the Sauce Labs web UI or API.

:::note
Setting `0` reverts to the value set in `defaults`.
:::

```yaml
  timeout: 15m
```
---

### `preExec`
<p><small>| OPTIONAL | STRING/ARRAY |</small></p>

Specifies which commands needs to be executed before the tests are actually started. The commands are executed from the root directory of your project.

:::note
There is a 300-second limit for all `preExec` commands to complete.
:::

```yaml
  preExec:
    - node ./scripts/pre-execution-script.js
```
---

### `options`
<p><small>| REQUIRED | OBJECT |</small></p>

Provides details related to the Cucumber configuration that are relevant for this test suite.

```yaml
suites:
  - name: My Cucumber Test
    browserName: chromium
    options:
      paths:
        - "features/**/*.feature"
      require:
        - "features/support/*.js"
      format:
        - "json:my-cucumber.json"
```
---

#### `name`
<p><small>| OPTIONAL | STRING |</small></p>

Regular expressions of which Cucumber scenario names should match one of to be run. See more details [here](https://github.com/cucumber/cucumber-js/blob/main/docs/filtering.md#names).

```yaml
  options:
    name: ".*My Cucumber Scenario"
```
---

#### `paths`
<p><small>| REQUIRED | ARRAY |</small></p>

Paths to feature files. See the [Cucumber-js Configuration documentation](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#finding-your-features) for more information. You can use glob pattern to indicate all files that match a specific value, such as a file name, type, or directory.

```yaml
  options:
     paths:
      - "features/**/*.feature"
```
---

#### `excludedTestFiles`
<p><small>| OPTIONAL | ARRAY |</small></p>

Excludes test files to skip the tests. You can use glob pattern to indicate all files that match a specific value, such as a file name, type, or directory.

```yaml
  options:
    excludedTestFiles: ["features/failed/**/*.feature"]
```
---

#### `backtrace`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Specifies whether to show the full backtrace for errors.

```yaml
  options:
    backtrace: true
```
---

#### `require`
<p><small>| OPTIONAL | ARRAY |</small></p>

Paths to your support code for CommonJS. See the [Cucumber-js Configuration documentation](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#finding-your-code) for more information.

```yaml
  options:
    require:
      - "features/support/*.js"
```
---

#### `import`
<p><small>| OPTIONAL | ARRAY |</small></p>

Paths to your support code for ESM. See the [Cucumber-js ES Modules (experimental) documentation](https://github.com/cucumber/cucumber-js/blob/main/docs/esm.md) for more information. 

```yaml
  options:
    import:
      - "features/support/*.js"
```
---

#### `tags`
<p><small>| OPTIONAL | ARRAY |</small></p>

Tag expression to filter which Cucumber scenarios run. See the [Cucumber-js Filtering documentation](https://github.com/cucumber/cucumber-js/blob/main/docs/filtering.md#tags) for more information.

```yaml
  options:
    tags:
      - "@smoke"
      - "@e2e"
```
---

#### `format`
<p><small>| OPTIONAL | ARRAY |</small></p>

Name/path and (optionally) output file path of each formatter to use. See the [Cucumber-js Formatters documentation](https://github.com/cucumber/cucumber-js/blob/main/docs/formatters.md) for more information.

```yaml
  options:
    format:
      - "json:my-cucumber.json"
```
---

#### `formatOptions`
<p><small>| OPTIONAL | OBJECT |</small></p>

Options to provide to formatters. See the [Cucumber-js Formatters documentation](https://github.com/cucumber/cucumber-js/blob/main/docs/formatters.md) for more information. 

```yaml
  options:
    formatOptions:
      someOption: true
```
---
