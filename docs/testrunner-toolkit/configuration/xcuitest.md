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
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax. If you are less comfortable with YAML, any of a wide variety of free online YAML/JSON validator tools may be helpful.
:::


## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-xcuitest-example/blob/master/.sauce/config.yml
```

Each of the properties supported for running XCUITest tests through `saucectl` is defined below.

## `apiVersion`
<p><small>| REQUIRED | STRING |</small></p>

Identifies the version of `saucectl` that is compatible with this configuration.

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

## `sauce`
<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property containing all settings related to how tests are run and identified in the Sauce Labs platform.

```yaml
sauce:
  region: eu-central-1
  metadata:
    name: Testing XCUITest Support
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
<p><small>| OPTIONAL | OBJECT |</small></p>

The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you, as shown in the following example:

```yaml
metadata:
  name: Testing XCUITest Support
  build: RC 10.4.a
  tags:
    - e2e
    - Android
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

Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character `*` so you can conveniently specify all artifacts of a specific file type.

```yaml
  match:
    - junit.xml
    - *.log
```
---

#### `directory`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded.

```yaml
    directory: ./artifacts/
```
---

## `xxcuitest`
<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the XCUITest project.

```yaml
xcuitest:
  app: ./apps/SauceLabs.Mobile.Sample.XCUITest.App.ipa
  testApp: ./apps/SwagLabsMobileAppUITests-Runner.app
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

A property containing one or more environment variables that may be referenced in the tests for this suite. Expanded environment variables are supported.

```yaml
  env:
    hello: world
    my_var: $MY_VAR
```
---

### `devices`
<p><small>| REQUIRED | OBJECT |</small></p>

The parent property that defines how to select real devices on which to run the test suite. You can request a specific device using its ID, or you can specify a set of criteria to choose the first available device that matches the specifications.

When an ID is specified, it supersedes the other settings.

```yaml
ddevices:
  - name: "iPhone 11"
    platformVersion: "14.3"
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
       carrierConnectivity: true
```
---

##### `deviceType`
<p><small>| OPTIONAL | STRING |</small></p>

Request that the matching device is a specific type of device. Valid values are:  `ANY`, `TABLET`, or `PHONE`.

```yaml
        deviceType: TABLET
```
---

##### `private`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Request that the matching device is from your organization's private pool.

```yaml
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
