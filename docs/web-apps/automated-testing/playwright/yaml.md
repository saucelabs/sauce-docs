---
id: yaml
title: Configuring Your Playwright Tests
sidebar_label: YAML Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`saucectl` relies on a YAML specification file to determine exactly which tests to run and how to run them. To customize `saucectl` to run your Playwright tests, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running Playwright tests.

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
https://github.com/saucelabs/saucectl-playwright-example/blob/master/.sauce/config.yml
```

Each of the properties supported for running Playwright tests through `saucectl` is defined below.

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
kind: playwright
```

---

## `nodeVersion`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the Node.js version for Sauce Cloud, supporting SemVer notation and aliases. For more details, refer to the [Advanced Configuration Page](./advanced.md#using-nodejs-runtime-on-sauce-cloud).

Examples: `v20`, `v20.14.0`, `v20.14`, `iron`, `lts`.

:::note
This feature is available in `saucectl` version v0.185.0+ and supported test runners. For details on supported test runners, see [Supported Testing Platforms](../playwright.md#supported-testing-platforms).

:::

```yaml
nodeVersion: v20
```

---

## `showConsoleLog`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Controls whether the contents of `console.log` are always shown in the local output of saucectl. By default (false), `console.log` is only shown for failed suites.

```yaml
showConsoleLog: true
```

---

## `defaults`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies any default settings for the project.

```yaml
defaults:
  timeout: 15m
```

---

### `timeout`

<p><small>| OPTIONAL | DURATION |</small></p>

Instructs how long (in `ms`, `s`, `m`, or `h`) `saucectl` should wait for each suite to complete. You can override this setting for individual suites using the `timeout` setting within the [`suites`](#suites) object. If not set, the default value is `0` (unlimited).

```yaml
defaults:
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

:::note
If you do not specify a region in your config file, you must set it when running your command with the `--region` flag.
:::

```yaml
sauce:
  region: eu-central-1
```

---

### `metadata`

<p><small>| OPTIONAL | OBJECT |</small></p>

The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you, as shown in the following example:

```yaml
sauce:
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
sauce:
  concurrency: 5
```

Alternatively, you can override the file setting at runtime by setting the concurrency flag as an inline parameter of the `saucectl run` command:

```bash
saucectl run --ccy 5
```

---

### `retries`

<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the number of times to retry a failed suite. For more settings, you can
refer to [passThreshold](#passthreshold).

```yaml
sauce:
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

:::caution
[Only certain HTTP(S) ports](/secure-connections/sauce-connect/advanced/specifications/#supported-browsers-and-ports) are proxied by the tunnel.
:::

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

#### `timeout`

<p><small>| OPTIONAL | DURATION |</small></p>

How long to wait for the specified tunnel to be ready. Supports duration values like '10s', '30m' etc. (default: 30s)

```yaml
sauce:
  tunnel:
    name: your_tunnel_name
    timeout: 30s
```

---

### `visibility`

<p><small>| OPTIONAL | STRING |</small></p>

Sets the visibility level of test results for suites run on Sauce Labs. If unspecified or empty, `team` visibility will be applied. Valid values are:

- `public`: Accessible to everyone.
- `public restricted`: Share your job's results page and video, but keeps the logs only for you.
- `share`: Only accessible to people with a valid link.
- `team`: (Default) Only accessible to people under the same root account as you.
- `private`: Only you (the owner) will be able to view assets and test results page.

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

:::note
Environment variables set with the saucectl `--env` flag will overwrite those specified in the sauce config file.

The order of precedence is as follows: --env flag > root-level environment variables > suite-level environment variables.
:::

---

## `rootDir`

<p><small>| REQUIRED | OBJECT |</small></p>

The directory of files that need to be bundled and uploaded for the tests to
run. Ignores what is specified in `.sauceignore`.
See [Tailoring Your Test File Bundle](/web-apps/automated-testing/playwright/advanced/#tailoring-your-test-file-bundle)
for more details. The following examples show the different relative options for
setting this value.

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
  strictSSL: true
  registry: https://registry.npmjs.org
  registries:
    - url: https://registry.npmjs.org
  packages:
    "lodash": "4.17.20"
```

---

### `registry`

<p><small>| OPTIONAL | STRING |</small></p>

:::note
This setting is supported up to Playwright 1.35.1. For newer versions, use `registries`.
:::

Specifies the location of the npm registry source. If the registry source is a
private address, and you are running tests on Sauce Cloud, you can provide
access to the registry source using [Sauce Connect](/dev/cli/saucectl/usage/use-cases/#sauce-connect).

```yaml
npm:
  registry: https://registry.npmjs.org
```

---

### `registries`

<p><small>| OPTIONAL | ARRAY |</small></p>

Specifies the location of the npm registry, scope, and credentials. Only one
scopeless registry is allowed. If the registry is inside a private network, you
must establish a tunnel using [Sauce Connect](/dev/cli/saucectl/usage/use-cases/#sauce-connect).

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
    - url: https://private.registry.company.org
      scope: "@company"
      authToken: secretToken
      auth: base64SecretToken
      username: myUsername
      password: myPassword
      email: myEmail 
```

---

#### `url`

Specifies the URL of the npm registry.

<p><small>| REQUIRED | STRING |</small></p>

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
```

---

#### `scope`

Specifies which scope is associated with this registry.
See [Associating a scope with a registry](https://docs.npmjs.com/cli/v9/using-npm/scope#associating-a-scope-with-a-registry).

<p><small>| OPTIONAL | STRING |</small></p>

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
      scope: "@company"
```

---

#### `authToken`

Specifies the authentication token to be used with this registry.

<p><small>| OPTIONAL | STRING |</small></p>

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
      authToken: secretToken
```

---

#### `auth`

Specifies the Base64-encoded authentication string for the registry entry.

<p><small>| OPTIONAL | STRING |</small></p>

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
      auth: base64SecretToken
```

---

#### `username`

Specifies the username for authentication with the registry.

<p><small>| OPTIONAL | STRING |</small></p>

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
      username: myName
```

---

#### `password`

Specifies the password for authentication with the registry.

<p><small>| OPTIONAL | STRING |</small></p>

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
      password: myPassword
```

---

#### `email`

Specifies the email associated with the registry account.

<p><small>| OPTIONAL | STRING |</small></p>

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
      email: myEmail
```

---

### `packages`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies any npm packages that are required to run tests and should, therefore, be installed on the Sauce Labs VM. See [Including Node Dependencies](advanced.md#including-node-dependencies).

```yaml
npm:
  packages:
    "lodash": "4.17.20"
```

:::caution
Do not use `dependencies` and `packages` at the same time.
:::

---

### `usePackageLock`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Specifies whether to use the project's package-lock.json when installing npm
dependencies. If true, package-lock.json will be used during package
installation which can improve the speed of installation.

To use this feature, additional pre-requisites must be met:
* A package-lock.json must be present in your project.
* The `@playwright/test` version in your package.json must **exactly** match
the version defined in your saucectl config.

```yaml
npm:
  usePackageLock: true
```

:::tip
You can use this option with `packages` to define packages to install in
addition to those defined in your `package-lock.json`.
:::

---

### `dependencies`

<p><small>| OPTIONAL | ARRAY |</small></p>

Specifies any npm packages that are required to run tests and should, therefore, be included in the bundle.
Unlike `packages`, which installs dependencies on the VM, the dependencies specified here have to be already installed in the local `node_modules` folder. These dependencies, along with any related transitive dependencies, are then included in the bundle that is uploaded to Sauce Labs.

If you have already been including `node_modules` in your bundle, then this feature will help you speed up your tests by reducing the amount of files in the bundle. A smaller bundle will upload and extract faster, which speeds up the setup on the VM, facilitating a faster test feedback cycle.

Take note that the syntax is different from `packages`. It's a simple **list** of dependencies, without the need to specify the version.

```yaml
npm:
  dependencies:
    - lodash
```

To use this feature, make sure that `node_modules` is not ignored via `.sauceignore`.

:::caution
Do not use `dependencies` and `packages` at the same time.
:::

---

### `strictSSL`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Instructs npm to perform SSL key validation when making requests to the registry via HTTPS (`true`) or not (`false`). Defaults to npm's `strict-ssl` value if not set. See more [here](https://docs.npmjs.com/cli/v8/using-npm/config#strict-ssl).

```yaml
npm:
  strictSSL: false
  package:
    "lodash": "4.17.20"
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

### `spotlight`

<p><small>| OPTIONAL | OBJECT |</small></p>

The spotlight reporter highlights failed or otherwise interesting jobs.
It may include an excerpt of failed tests or other information that may be useful for troubleshooting.

```yaml
reporters:
  spotlight:
    enabled: true
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
reporters:
  json:
    enabled: true
```

---

#### `webhookURL`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the webhook URL. When saucectl test is finished, it'll send an HTTP POST with a JSON payload to the configured webhook URL.

```yaml
reporters:
  json:
    enabled: true
    webhookURL: https://my-webhook-url
```

---

#### `filename`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the report filename. Defaults to "saucectl-report.json".

```yaml
reporters:
  json:
    enabled: true
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
artifacts:
  cleanup: true
```

---

### `retain`

<p><small>| OPTIONAL | OBJECT |</small></p>

Define directories to archive and retain as a test asset at the end of a test run. Archived test assets can
be downloaded automatically using the `download` configuration, via the 
[REST API](/dev/api/jobs/#get-a-job-asset-file), or through the test details page.

```yaml
artifacts:
  retain:
    source-directory: destination-archive.zip
  download:
    when: always
    match:
      - destination-archive.zip
    directory: ./artifacts/
```

:::note
The source and destination will be relative to the `rootDir` defined in your configuration.
:::

:::note
The destination archive must have a .zip file extension.
:::

---

### `download`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies the settings related to downloading artifacts from tests run by `saucectl`.

```yaml
artifacts:
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

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only.

```yaml
artifacts:
  download:
    when: always
```

---

#### `match`

<p><small>| OPTIONAL | STRING/ARRAY |</small></p>

Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character `*` (use quotes for best parsing results with wildcard).

```yaml
artifacts:
  download:
    match:
      - junit.xml
      - "*.log"
```

---

#### `directory`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded. The name of the subdirectory will match the suite name. If a directory with the same name already exists, the new one will be suffixed by a serial number.

```yaml
artifacts:
  download:
    directory: ./artifacts/
```

---

#### `allAttempts`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

If you have your tests configured with [retries](#retries), you can set this option to `true` to download artifacts for every attempt. Otherwise, only artifacts of the last attempt
will be downloaded.

```yaml
artifacts:
  download:
    match:
      - console.log
    when: always
    allAttempts: true
    directory: ./artifacts/
```

---

## `playwright`

<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the Playwright project.

```yaml
playwright:
  version: 1.43.1
  configFile: config.ts
```

---

### `version`

<p><small>| REQUIRED | STRING |</small></p>

The version of Playwright that is compatible with the tests defined in this file. See [Supported Testing Platforms](/web-apps/automated-testing/playwright#supported-testing-platforms) for the list of Playwright versions supported by `saucectl` and their compatible test platforms.

```yaml
playwright:
  version: 1.43.1
```

:::tip
You can also define a path to your `package.json`. This will make `saucectl` use the same Playwright version that's defined in your projects `devDependencies` or `dependencies` map.

The path to your `package.json` file will be relative to the `rootDir` of your configuration.
:::

---

### `configFile`

<p><small>| OPTIONAL | STRING |</small></p>

The path (relative to `rootDir`) to your Playwright configuration file. `saucectl` determines related files based on the location of this config file. Supports both TypeScript and JavaScript files.
If it's not set, `saucectl` defaults to `playwright.config.ts` or `playwright.config.js`.

```yaml
playwright:
  configFile: config.ts
```

---

## `suites`

<p><small>| REQUIRED | OBJECT |</small></p>

The set of properties providing details about the test suites to run. May contain multiple suite definitions. See the full [example config](#example-configuration) for an illustration of multiple suite definitions.

---

### `name`

<p><small>| REQUIRED | STRING |</small></p>

The name of the test suite, which will be reflected in the results and related artifacts.

```yaml
suites:
  - name: "saucy test"
```

---

### `env`

<p><small>| OPTIONAL | OBJECT |</small></p>

A property containing one or more environment variables that may be referenced in the tests for this suite. Expanded environment variables are supported. Values set here will be overwritten by values set in the global `env` property.

```yaml
suites:
  - name: "saucy test"
    env:
      hello: world
      my_var: $MY_VAR
```

---

### `platformName`

<p><small>| OPTIONAL | STRING |</small></p>

A specific operating system and version on which to run the specified browser and test suite. Defaults to a platform that is supported by `saucectl` for the chosen browser.

```yaml
suites:
  - name: "saucy test"
    platformName: "Windows 10"
```

---

### `screenResolution`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies a browser window screen resolution, which may be useful if you are attempting to simulate a browser on a particular device type. See [Test Configurations](/basics/test-config-annotation/test-config) for a list of available resolution values.

```yaml
suites:
  - name: "saucy test"
    screenResolution: "1920x1080"
```

---

### `testMatch`

<p><small>| REQUIRED | STRING/ARRAY |</small></p>

One or more paths to the Playwright test files to run for this suite. Regex values are supported to indicate all files of a certain type or in a certain directory, etc.

```yaml
suites:
  - name: "saucy test"
    testMatch: ["**/*.js"]
```

---

### `excludedTestFiles`

<p><small>| OPTIONAL | ARRAY |</small></p>

Excludes test files to skip the tests. You can use regex values to indicate all files that match a specific value, such as a file name, type, or directory.

```yaml
suites:
  - name: "saucy test"
    excludedTestFiles: ["**/*.js"]
```

---

### `numShards`

<p><small>| OPTIONAL | INTEGER | <span class="highlight playwright">Playwright version >= 1.12</span> |</small></p>

Sets the number of separate shards to create for the test suite. Read more about shard tests on the [Playwright developer site](https://playwright.dev/docs/test-parallel#shards).

When sharding is configured, `saucectl` automatically creates the sharded jobs based on the number of shards you specify. For example, for a suite that specifies 2 shards, `saucectl` clones the suite and runs shard `1/2` on the first suite, and the other shard `2/2` on the identical clone suite.

:::caution Shard Property Exclusivity
The `numShards` and `shard` properties are mutually exclusive within each suite. If you have values for both in a single suite, the test will fail and terminate. You can, however, vary shard settings across different suites.
:::

```yaml
suites:
  - name: "saucy test"
    numShards: 2
```

---

### `shard`

<p><small>| OPTIONAL | STRING |</small></p>

When sharding is configured, saucectl automatically splits the tests (e.g., by spec or concurrency) so that they can easily run in parallel.
For sharding by concurrency, saucectl splits test files into several groups (the number of groups is determined by the concurrency setting). Each group will then run as an individual job.

Selectable values: `spec` to shard by spec file, `concurrency` to shard by concurrency. Remove this field or leave it empty `""` for no sharding.

```yaml
suites:
  - name: 'I am sharded'
    shard: spec
```

:::tip
To split tests in the most efficient way possible, use:

- `spec` when the number of specs is less than the configured concurrency.
- `concurrency` when the number of specs is larger than the configured concurrency.
:::

:::caution Shard Property Exclusivity
The `numShards` and `shard` properties are mutually exclusive within each suite. If you have values for both in a single suite, the test will fail and terminate. You can, however, vary shard settings across different suites.
:::

---

---

### `shardGrepEnabled`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

When sharding is configured and used in conjunction with `grep`/`grepInvert`, some spec files may be allocated to VMs, just to be skipped by Playwright in accordance with the `grep`/`grepInvert` filters, thus wasting VM allocations.

With `shardGrepEnabled: true`, saucectl will ensure that every spec to be allocated contains at least one test matching the `grep`/`grepInvert` filters.

:::tip
Filtering relies on the value set for `grep` and `grepInvert`.

- `grep` to match with test name or filename.
- `grepInvert` to exclude any match with name or filename.
:::

```yaml
suites:
  - name: "I am sharded"
    shard: spec
    shardGrepEnabled: true
    params:
      grep: "@smoke"
      grepInvert: "@slow"
```

### `params`

<p><small>| OPTIONAL | OBJECT |</small></p>

A parent property that details any additional parameters you wish to set for the test suite.

```yaml
suites:
  - name: "saucy test"
    params:
      browserName: "firefox"
      headless: true
      slowMo: 1000
      project: "project name"
      grep: "should include"
      grepInvert: "should exclude"
```

#### `browserName`

<p><small>| OPTIONAL | STRING |</small></p>

The name of the browser in which to run this test suite.
Available browser names: `chromium`, `firefox`, `webkit`, and `chrome`.

```yaml
suites:
  - name: "saucy test"
    browserName: "firefox"
```

:::note
`chromium`, `firefox`, and `webkit` are bundled with Playwright. `chrome` is provided by the sauce VM. For more information, see [Playwright Browsers](https://playwright.dev/docs/browsers).
:::

---

#### `headless`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Determines whether to run the test suite in headless mode.

```yaml
suites:
  - name: "saucy test"
    headless: true
```

---

#### `sloMo`

<p><small>| OPTIONAL | INTEGER |</small></p>

Allows you to alter the test execution speed for the test suite in milliseconds, to simulate different network connectivity or other conditions that may impact load times.

```yaml
suites:
  - name: "saucy test"
    sloMo: 1000
```

---

#### `project`

<p><small>| OPTIONAL | STRING |</small></p>

Allows you to apply the configurations from your [Playwright project](https://playwright.dev/docs/test-advanced/#projects) to the suite.

:::note
`saucectl` browserName overrides the Playwright project browserName in the event of a conflict.
:::

```yaml
suites:
  - name: "saucy test"
    project: "project name"
```

---

#### `grep`

<p><small>| OPTIONAL | STRING |</small></p>

Patterns to run tests based on their title.

```yaml
suites:
  - name: "saucy test"
    grep: "should include"
```

---

#### `grepInvert`

<p><small>| OPTIONAL | STRING |</small></p>

Patterns to skip tests based on their title.

```yaml
suites:
  - name: "saucy test"
    grepInvert: "should exclude"
```

---

#### `updateSnapshots`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Determines whether to update snapshots with the actual results produced by the test run. Playwright tests support [visual comparisons](https://playwright.dev/docs/test-snapshots).

```yaml
suites:
  - name: "saucy test"
    updateSnapshots: true
```

To run a test with `saucectl`:

1. Use the following config to download the baseline screenshots generated in the first run. The baseline screenshots can be found in the **artifacts** folder and are named `example-test-1-actual.png`.

```yaml
artifacts:
  download:
    when: always
    match:
      - console.log
      - "*.png" // this will download the new baseline screenshots
```

2. Create a snapshot folder for the test file (e.g., `tests/example.test.js`).

```bash
$ mkdir tests/example.test.js-snapshots
```

3. Move the downloaded baseline screenshots to the snapshots folder. These screenshots will be accessible to Playwright in the next test run.

```bash
$ mv artifacts/{your-suite-name}/example-test-1-actual.png tests/example.test.js-snapshots/
```

4. Set `updateSnapshots` to `true`. Playwright will continue to update the baseline screenshots.

```yaml
suites:
  - name: "saucy test"
    updateSnapshots: true
```

---

### `timeout`

<p><small>| OPTIONAL | DURATION |</small></p>

Instructs how long `saucectl` should wait for the suite to complete, overriding the default project timeout setting of 30 minutes.

When the suite reaches the timeout limit, its status is set to '?' in the CLI. This does not reflect the actual status of the job in the Sauce Labs web UI or API.

:::note
Setting `0` reverts to the value set in `defaults`.
:::

```yaml
suites:
  - name: "saucy test"
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
suites:
  - name: "saucy test"
    preExec:
      - node ./scripts/pre-execution-script.js
```

---

### `timeZone`

<p><small>| OPTIONAL | STRING |</small></p>

Allows you to set a custom time zone for your test based on a city name. Most major cities are supported.

```yaml
suites:
  - name: "saucy test"
    timeZone: New_York
```

---

### `passThreshold`

<p><small>| OPTIONAL | INTEGER |</small></p>

Specifies the minimum number of successful attempts for a suite to be considered as `passed`. It should be used along with [retries](#retries).

:::note
For example, setting `retries` to 3 and `passThreshold` to 2.
The max attempt would be 4 times. If the test passed twice, it'd stop and be marked as `passed`. Otherwise, it'd be marked as `failed`.
:::

```yaml
sauce:
  retries: 3
suite:
  - name: My Saucy Test
    passThreshold: 2
```

---

### `smartRetry`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies the retry strategy to apply for that suite. Requires [retries](#retries) to be >= 1.

```yaml
sauce:
  retries: 3
suite:
  - name: My Saucy Test
    smartRetry:
      failedOnly: true
```

---

#### `failedOnly`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

When set to `true`, only the tests that failed during the previous attempt are retried.

```yaml
suite:
  - name: My Saucy Test
    smartRetry:
      failedOnly: true
```
