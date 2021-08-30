---
id: testcafe
title: Configuring Your TestCafe Tests
sidebar_label: Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`saucectl` relies on a YAML specification file to determine exactly which tests to run and how to run them. To customize `saucectl` to run your TestCafe tests, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running TestCafe tests.

## Setting an Alternative Configuration File

By default, `saucectl` looks for the `config.yml` file in the `.sauce` folder of your project root, but you can actually specify a different file, or if you are using multiple frameworks or need to configure different sets of tests to run separately, you may choose to have multiple configuration files that you can direct `saucectl` to reference as necessary.

Use the following configuration at runtime to direct `saucectl` to use any configuration file you choose:

```bash
saucectl run -c ./path/to/{config-file}.yml
```

:::note YAML Required
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax. Our IDE Integrations (e.g. [Visual Studio Code](/testrunner-toolkit/ide-integrations/vscode)) can help you out by validating the YAML files and provide handy suggestions, so make sure to check them out!
:::


## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/master/.sauce/config.yml
```

Each of the properties supported for running TestCafe tests through `saucectl` is defined below.

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
kind: testcafe
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

Instructs `saucectl` run tests remotely through Sauce Labs (`sauce`) or locally on `docker`. You can override this setting for individual suites using the `mode` setting within the [`suites`](#suites) object. If not set, the default value is `sauce`.

```yaml
  mode: "sauce"
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
    name: Testing TestCafe Support
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
  name: Testing TestCafe Support
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
<p><small>| OPTIONAL | OBJECT | <span class="highlight sauce-cloud">Sauce Cloud only</span> |</small></p>

`saucectl` supports using [Sauce Connect](/testrunner-toolkit/configuration#sauce-connect) to establish a secure connection when running your tests on Sauce Labs. To do so, launch a tunnel; then provide the identifier in this property.

:::note Choose the Correct Tunnel Identifier
When you launch a tunnel, you can accept the tunnel identifier name that Sauce Labs generates for your account (e.g., `{SL-username}_tunnel_id`) or specify a name in the launch command:

```
bin/sc -u {SL-username} -k {SL-access_key} -i {tunnel_identifier}
```

This is the identifier `saucectl` expects as the `id` property, even though the Sauce Labs UI refers to this values as the `Tunnel Name`.
:::

```yaml
 tunnel:
    id: your_tunnel_id
    parent: parent_owner_of_tunnel # if applicable, specify the owner of the tunnel
```
---

## `env`
<p><small>| OPTIONAL | OBJECT |</small></p>

A property containing one or more environment variables that are global for all tests suites in this configuration. Expanded environment variables are supported. Values set in this global property will overwrite values set for the same environment variables set at the suite level.

```yaml
  env:
    hello: world
    my_var: $MY_VAR
```
---

## `docker`
<p><small>| OPTIONAL | OBJECT | <span class="highlight docker">Docker only</span> |</small></p>

The set of properties defining the specific Docker image and type your are using, if you are running any tests locally.

```yaml
docker:
  fileTransfer: copy
  image: saucelabs/stt-testcafe-node:vX.X.X
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
`saucelabs/<framework-node>:<vX.X.X>`. See [Supported Testing Platforms](/web-apps/automated-testing/testcafe#supported-testing-platforms) for Docker release notes related to TestCafe.

```yaml
  image: saucelabs/< stt-cypress-mocha-node | stt-playwright-node | stt-testcafe-node >:< vX.X.X >
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
  registry: https://registry.npmjs.org
  packages:
    lodash: "4.17.20"
    "@babel/preset-typescript": "7.12"
    "@testcafe/react": "^5.0.1"
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
    "@testcafe/react": "^5.0.1"
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

## `testcafe`
<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the TestCafe project.

```yaml
testcafe:
  version: 1.14.2
```
---

### `version`
<p><small>| REQUIRED | STRING |</small></p>

The version of TestCafe that is compatible with the tests defined in this file. See [Supported Testing Platforms](/web-apps/automated-testing/testcafe#supported-testing-platforms) for the list of TestCafe versions supported by `saucectl` and their compatible test platforms.

```yaml
  version: 1.14.2
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
  - name: "saucy test"
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

### `browserName`
<p><small>| REQUIRED | STRING |</small></p>

The name of the browser in which to run this test suite.
Available browser names: `chrome`, `firefox`, `microsoftedge`(only for sauce mode) and `safari`(only for sauce mode on macOS or iOS simulators)

```yaml
    browser: "firefox"
```
---

### `browserVersion`
<p><small>| OPTIONAL | STRING |</small></p>

The version of the browser to use for this test suite.

```yaml
    browserVersion: "85.0"
```
---

### `browserArgs`
<p><small>| OPTIONAL | ARRAY |</small></p>

Pass flags to configure how Puppeteer launches the selected browser. Review supported flags for [Chrome/Chromium](https://peter.sh/experiments/chromium-command-line-switches/)

```yaml
    browserArgs: ["--no-sandbox", "--disable-features=site-per-process"]
```
---

### `platformName`
<p><small>| OPTIONAL | STRING |</small></p>

A specific operating system and version on which to run the specified browser and test suite. Defaults to a platform that is supported by `saucectl` for the chosen browser.

```yaml
    platformName: "Windows 10"
```
---

### `screenResolution`
<p><small>| OPTIONAL | STRING | <span class="highlight sauce-cloud">Sauce Cloud only</span>|</small></p>

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

### `src`
<p><small>| REQUIRED | OBJECT |</small></p>

The explicit name, file glob, or location of the test files to be included in this suite.

```yaml
  src:
    - "tests/test_file1.test.js"
    - "tests/integrations"
    - "*/*.test.js"
```
---

### `simulators`
<p><small>| OPTIONAL | OBJECT | <span class="highlight sauce-cloud">Sauce Cloud only</span>|</small></p>

The property containing details about on which simulators the tests in this suite will run. This property can include multiple device definitions.

```yaml
  simulators:
    - name: iPhone 12 Simulator
      platformName: iOS
      platformVersions:
        - "14.3"
```
---

### `screenshots`
<p><small>| OPTIONAL | OBJECT |</small></p>

A parent property containing the details about whether and how to handle screenshots for this test suite. [See Testcafe Documentation](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#screenshots).

```yaml
  screenshots:
    takeOnFails: true
    fullPage: true
```
---

### `disableScreenshots`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Prevents TestCafe from taking screenshots. See [TestCafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#disablescreenshots).

```yaml
  disableScreenshots: true
```
---

### `speed`
<p><small>| OPTIONAL | FLOAT64 |</small></p>

Allows you to alter the test execution speed for the test suite. Tests are run at the maximum speed by default, but you can slow the test down by setting a value between `1` (the fastest) and `0.01` (the slowest).

```yaml
  speed: 0.1
```
---

### `tsConfigPath`
<p><small>| OPTIONAL | STRING |</small></p>

The absolute or relative path to the TypeScript configuration file. Relative paths are resolved against the current directory (the directory from which you run TestCafe).

```yaml
  tsConfigPath: /path/to/file
```
---

### `clientScripts`
<p><small>| OPTIONAL | STRING/ARRAY |</small></p>

A list of one or more filepath values for scripts to inject into all pages visited during the test. See [TestCafe definition](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/clientscripts.html).

```yaml
  clientScripts: ["/path/to/file1", "/path/to/file2"]
```
---

### `skipJsErrors`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Determines whether to ignore JavaScript errors on a webpage. See [Testcafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#skipjserrors).

```yaml
  skipJsErrors: true
```
---

### `quarantineMode`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Determines whether to enable quarantine mode for tests that fail. See [Testcafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#quarantinemode).

```yaml
  quarantineMode: true
```
---

### `skipUncaughtErrors`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Determines whether to ignores uncaught errors and unhandled promise rejections in test code. See [Testcafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#skipUncaughtErrors).

```yaml
  skipUncaughtErrors: true
```
---

### `selectorTimeout`
<p><small>| OPTIONAL | INTEGER |</small></p>

Specifies the time (in milliseconds) within which selectors may attempt to return a node. See [Testcafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#selectorTimeout`).

```yaml
  selectorTimeout: 1000
```
---

### `assertionTimeout`
<p><small>| OPTIONAL | INTEGER |</small></p>

Specifies the time (in milliseconds) TestCafe may attempt to successfully execute an assertion if a selector property or a client function was passed as an actual value. See [Testcafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#assertionTimeout).

```yaml
  assertionTimeout: 1000
```
---

### `pageLoadTimeout`
<p><small>| OPTIONAL | INTEGER |</small></p>

Specifies the time (in milliseconds) passed after the `DOMContentLoaded` event, within which TestCafe waits for the `window.load` event to fire. See [Testcafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#pageLoadTimeout).

```yaml
  pageLoadTimeout: 1000
```
---

### `stopOnFirstFail`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Determines whether to stop a test run if a test fails. See [Testcafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#stopOnFirstFail).

```yaml
  stopOnFirstFail: true
```
---

### `disablePageCaching`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Determines whether to prevent the browser from caching page content. See [Testcafe definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#disablePageCaching).

```yaml
  disablePageCaching: true
```
---

### `timeout`
<p><small>| OPTIONAL | DURATION |</small></p>

Instructs how long `saucectl` should wait for the suite to complete, potentially overriding the default project timeout setting.

:::note
Setting `0` reverts to the value set in `defaults`.
:::

```yaml
  timeout: 15m
```
---

## Advanced Configuration Considerations

The configuration file is flexible enough to allow for any customizations and definitions that are required for any of the supported frameworks. The following sections describe some of the most common configurations.

### Time Limit Considerations

Execution time for TestCafe tests is limited to a maximum of 30 minutes. If the limit is exceeded, the test terminates and Sauce Control uploads assets (videos, screenshots, logs, etc..) to the Sauce Labs platform.

Consider breaking up longer TestCafe tests to optimize performance and ensure you do not exceed this time limit.


### Setting up a Proxy

If you need to go through a proxy server, you can set it through the following variables:

* `HTTP_PROXY`: Proxy to use to access HTTP websites
* `HTTPS_PROXY`: Proxy to use to access HTTPS websites


#### Docker Proxy Considerations

When running in docker-mode, `saucectl` still must reach the Sauce Labs platform get the latest docker image available or upload the test package to Sauce Cloud, and the docker container needs to access the tested website and Sauce Labs to upload results.

Therefore, you may be required to set the proxy twice, as shown in the following examples:

``` title= "Example: Windows Powershell"
PS> $Env:HTTP_PROXY=http://my.proxy.org:3128/
PS> $Env:HTTPS_PROXY=http://my.proxy.org:3128/
PS> saucectl run -e HTTP_PROXY=${Env:HTTP_PROXY} -e HTTPS_PROXY=${Env:HTTPS_PROXY}
```

``` title= "Example: Linux/MacOS"
$> export HTTP_PROXY=http://my.proxy.org:3128/
$> export HTTPS_PROXY=http://my.proxy.org:3128/
$> saucectl run -e HTTP_PROXY=${HTTP_PROXY} -e HTTPS_PROXY=${HTTPS_PROXY}
```

### Tailoring Your Test File Bundle

The `saucectl` command line bundles your root directory (`rootDir` parameter of `config.yml`) and transmits it to the Sauce Labs cloud or your own infrastructure via Docker, then unpacks the bundle and runs the tests. This functionality is partly what allows Sauce Control to operate in a framework-agnostic capacity. However, you can and should manage the inclusion and exclusion of files that get bundled to optimize performance and ensure security.

#### Excluding Files from the Bundle

The `.sauceignore` file allows you to designate certain files to be excluded from bundling.

Add any files that are not direct test dependencies to `.sauceignore` to reduce the size of your bundle, improve test speed, and protect sensitive information.

Examples of what can be included in `.sauceignore`:

```bash
# .sauceignore

# Ignore node_modules
node_modules/

# Ignore all log files
*.log

# Ignore executables/binaries
*.exe
*.bin
**/*/bin

# Ignore media files
*.png
*.jpeg
*.jpg
*.mp4

# Ignore documentation
*.rst
*.md

# Ignore sensitive data
credentials.yml
```

#### Including Node Dependencies

The default `.sauceignore` file lists `node_modules/` so locally installed node dependencies are excluded from the bundle. If your tests require node dependencies to run, you can either:

* [Include `node_modules` with your bundle](#remove-node_modules-from-sauceignore) or
* [Set NPM packages in config.yml](#set-npm-packages-in-configyml)

#### Remove "node_modules" from `.sauceignore`

Delete or comment out `node_modules/` in your `.sauceignore` file to bundle your node dependencies. For example,

```bash
# Do NOT exclude node_modules from bundle
# node_modules/
```

Node dependencies can increase your bundle by potentially hundreds of megabytes, so consider including only the required dependencies rather than the entire `node_modules` directory. The following sections provide some methods for limiting the scope of dependencies you must include.

##### Install "devDependencies" Only

Consider only installing NPM `devDependencies` if your tests do not require all prod `dependencies`.

```bash
# Only install dev dependencies
npm install --only=dev

saucectl run
```

##### Uninstall Nonessential Dependencies

If your standard install includes dependencies that aren't needed to run your tests, uninstall them prior to bundling.

```bash
# Install node dependencies
npm ci # or "npm install"

# Remove unneeded dependencies
npm uninstall appium
npm uninstall express

saucectl run
```

##### Install Essential Dependencies Individually

If you know that your tests require only specific dependencies, install them individually instead of running `npm install` or `npm ci`.

```bash
# Install individual dependencies
npm install testcafe-xpath
npm install @testcafe/react

saucectl run
```

#### Set NPM Packages in `config.yml`

You can avoid installing or uninstalling dependencies prior to each bundling operation by defining a default set of NPM packages to install in your sauce configuration file using the `npm` parameter, as shown in the following example:

```jsx title= "config.yml npm example"
npm:
  registry: https://registry.npmjs.org
  packages:
    lodash: "4.17.20"
    "@babel/preset-typescript": "7.12"
    "@testcafe/react": "^5.0.1"
```
