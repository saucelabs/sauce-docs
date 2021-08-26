---
id: xcuitest
title: Configuring Your XCUITest Tests
sidebar_label: XCUITest Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`saucectl` relies on a YAML specification file to determine exactly which tests to run and how to run them. To customize `saucectl` to run your XCUITest tests, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running XCUITest tests.

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
https://github.com/saucelabs/saucectl-xcuitest-example/blob/master/.sauce/config.yml
```

Each of the properties supported for running XCUITest tests through `saucectl` is defined below.

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
kind: xcuitest
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
    build: Release $X_COMMIT_SHORT_SHA
  concurrency: 5
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

The set of properties that allows you to provide additional information about your project that helps distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you.

:::note
At this time, the `metadata` property is not supported for XCUITest, but is coming soon.
:::

```yaml
metadata:
  build: RC 10.4.i
  tags:
    - e2e
    - iPad
    - beta
    - featurex
```
---

### `concurrency`
<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the maximum number of suites to execute at the same time. If the test defines more suites than the max, excess suites are queued and run in order as each suite completes.

:::caution
Set this value to equal or less than your Sauce concurrency allowance, as setting a higher value may result in jobs dropped by the server.
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

`saucectl` supports using [Sauce Connect](/testrunner-toolkit/configuration#sauce-connect) to establish a secure connection with Sauce Labs. To do so, launch a tunnel; then provide the identifier in this property.

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

Specifies how to manage test output, such as logs, videos, and screenshots.

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

## `xcuitest`
<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the XCUITest project.

```yaml
xcuitest:
  app: ./apps/SauceLabs.Mobile.Sample.XCUITest.App.ipa
  testApp: ./apps/SwagLabsMobileAppUITests-Runner.app
  otherApps:
    - ./apps/pre-installed-app1.ipa
    - ./apps/pre-installed-app2.ipa
```
---

### `app`
<p><small>| REQUIRED | STRING |</small></p>

The path to the application. The property recognizes both .ipa and .app file types and supports expanded environment variables.

```yaml
  app: ./apps/xcuitest/SauceLabs.Mobile.Sample.XCUITest.App.ipa
```

```yaml
  app: $APP
```
---

### `testApp`
<p><small>| REQUIRED | STRING |</small></p>

The path to the testing application. The property recognizes both `.ipa` and `.app` file types and supports expanded environment variables.

```yaml
  testApp: ./apps/SwagLabsMobileAppUITests-Runner.app
```

```yaml
  testApp: $TEST_APP
```
---

### `otherApps`
<p><small>| OPTIONAL | ARRAY | REAL DEVICES ONLY |</small></p>

Set of up to seven apps to pre-install for your tests. You can upload an app from your local machine by specifying a filepath (relative location is `{project-root}/apps/app1.ipa`) or an expanded environment variable representing the path, or you can specify an app that has already been uploaded to [Sauce Labs App Storage](/mobile-apps/app-storage) by providing the reference `storage:<fileId>` or `storage:filename=<filename>`.

:::note
Apps specified as `otherApps` inherit the configuration of the main app under test for [`Device Language`, `Device Orientation`, and `Proxy`](https://app.saucelabs.com/live/app-testing#group-details), regardless of any differences that may be applied through the Sauce Labs UI, because the settings are specific to the device under test. For example, if the dependent app is intended to run in landscape orientation, but the main app is set to portrait, the dependent app will run in portrait for the test, which may have unintended consequences.
:::

```yaml
  otherApps:
    - ./apps/pre-installed-app1.ipa
    - $PRE_INSTALLED_APP2
    - storage:filename=pre-installed-app3.ipa
```
---

## `suites`
<p><small>| REQUIRED | OBJECT |</small></p>

The set of properties providing details about the test suites to run. May contain multiple suite definitions. See the full [example config](#example-configuration) for an illustration of multiple suite definitions.

:::note Real Devices Only
At this time, `saucectl` does not support automated tests running on simulators.
:::
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

### `devices`
<p><small>| REQUIRED | OBJECT |</small></p>

The parent property that defines how to select real devices on which to run the test suite. You can request a specific device using its ID, or you can specify a set of criteria to choose the first available device that matches the specifications.

When an ID is specified, it supersedes the other settings.

```yaml
devices:
  - name: "iPhone 11"
    platformVersion: "14.3"
    options:
      carrierConnectivity: true
  - id: iPhone_11_14_5_real_us
```
---

#### `id`
<p><small>| OPTIONAL | STRING |</small></p>

Request a specific device for this test suite by its ID. You can look up device IDs in the Sauce Labs app or using our [Get Devices API request](https://docs.saucelabs.com/dev/api/rdc#get-devices).

```yaml
        id: iPhone_11_14_5_real_us
```
---

#### `name`
<p><small>| OPTIONAL | STRING |</small></p>

Find a device for this test suite that matches the device name or portion of the name, which may provide a larger pool of available devices of the type you want.

```yaml title="Use Complete Name"
      - name: iPhone 11
```

```yaml title="Use Pattern Matching"
        name: iPhone.*
```
---

#### `platformVersion`
<p><small>| OPTIONAL | STRING |</small></p>

Request that the device matches a specific platform version.

```yaml
        platformVersion: 14.3
```
---

#### `options`
<p><small>| OPTIONAL | OBJECT |</small></p>

A parent property to further specify desired device attributes within the pool of devices that match the `name` and `version` criteria.

---

##### `carrierConnectivity`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Request that the matching device is also connected to a cellular network.

```yaml
  options:
      carrierConnectivity: true
```
---

##### `deviceType`
<p><small>| OPTIONAL | STRING |</small></p>

Request that the matching device is a specific type of device. Valid values are:  `ANY`, `TABLET`, or `PHONE`.

```yaml
  options:
      deviceType: TABLET
```
---

##### `private`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Request that the matching device is from your organization's private pool.

```yaml
  options:
      private: true
```
---

### `testOptions`
<p><small>| OPTIONAL | OBJECT |</small></p>

A set of parameters allowing you to provide additional details about which test class should be run for the suite and how to apply them.

```yaml
testOptions:
    class:
      - SwagLabsMobileAppUITests.LoginTests/testSuccessfulLogin
      - SwagLabsMobileAppUITests.LoginTests/testNoUsernameLogin
      - SwagLabsMobileAppUITests.LoginTests
    notClass:
      - SwagLabsMobileAppUITests.SwagLabsFlow/testCompleteFlow
```
---

#### `class`
<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to only run the specified classes for this test suite.

```yaml
    class:
      - SwagLabsMobileAppUITests.LoginTests/testSuccessfulLogin
      - SwagLabsMobileAppUITests.LoginTests/testNoUsernameLogin
      - SwagLabsMobileAppUITests.LoginTests
```
---

#### `notClass`
<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to run all classes for the suite *except* those specified here.

```yaml
    notClass:
      - SwagLabsMobileAppUITests.SwagLabsFlow/testCompleteFlow
```
---

## Advanced Configuration Considerations

The configuration file is flexible enough to allow for any customizations and definitions that are required for any of the supported frameworks. The following sections describe some of the most common configurations.

### Setting up a Proxy

If you need to go through a proxy server, you can set it through the following variables:

* `HTTP_PROXY`: Proxy to use to access HTTP websites
* `HTTPS_PROXY`: Proxy to use to access HTTPS websites

``` title= "Example: Windows Powershell"
PS> $Env:HTTP_PROXY=http://my.proxy.org:3128/
PS> $Env:HTTPS_PROXY=http://my.proxy.org:3128/
```

``` title= "Example: Linux/MacOS"
$> export HTTP_PROXY=http://my.proxy.org:3128/
$> export HTTPS_PROXY=http://my.proxy.org:3128/
```
