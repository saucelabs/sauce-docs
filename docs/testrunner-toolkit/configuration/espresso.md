---
id: espresso
title: Configuring Your Espresso Tests
sidebar_label: Espresso Configuration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`saucectl` relies on a YAML specification file to determine exactly which tests to run and how to run them. To customize `saucectl` to run your Espresso tests, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running Espresso tests.

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
https://github.com/saucelabs/saucectl-espresso-example/blob/master/.sauce/config.yml
```

Each of the properties supported for running Espresso tests through `saucectl` is defined below.

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
kind: espresso
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
    build: Release $ES_COMMIT_SHORT_SHA
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

The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you, as shown in the following example:

```yaml
metadata:
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

## `espresso`
<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the Espresso project.

```yaml
espresso:
  app: ./apps/calc.apk
  testApp: ./apps/calc-success.apk
  otherApps:
    - ./apps/pre-installed-app1.apk
    - ./apps/pre-installed-app2.apk
```
---

### `app`
<p><small>| REQUIRED | STRING |</small></p>

The path to the application. The default directory is `{project-root}/apps/filename.apk`, and the property supports expanded environment variables to designate the path, as shown in the following examples. Supports \*.apk (\*.aab files supported for real device testing only).

```yaml
  app: ./apps/calc.apk
```

```yaml
  app: $APP
```
---

### `testApp`
<p><small>| REQUIRED | STRING |</small></p>

The path to the testing application. The relative file location is `{project-root}/apps/testfile.apk`, and the property supports expanded environment variables to designate the path, as shown in the following examples. Supports \*.apk (\*.aab files supported for real device testing only).

```yaml
  testApp: ./apps/calc-success.apk
```

```yaml
  testApp: $TEST_APP
```
---

### `otherApps`
<p><small>| OPTIONAL | ARRAY | REAL DEVICES ONLY |</small></p>

Set of up to seven apps to pre-install for your tests. You can upload an \*.apk (\*.aab supported for real device testing only) app file from your local machine by specifying a filepath (relative location is `{project-root}/apps/app1.apk`) or an expanded environment variable representing the path, or you can specify an app that has already been uploaded to [Sauce Labs App Storage](/mobile-apps/app-storage) by providing the reference `storage:<fileId>` or `storage:filename=<filename>`.

:::note
Apps specified as `otherApps` inherit the configuration of the main app under test for [`Device Language`, `Device Orientation`, and `Proxy`](https://app.saucelabs.com/live/app-testing#group-details), regardless of any differences that may be applied through the Sauce Labs UI, because the settings are specific to the device under test. For example, if the dependent app is intended to run in landscape orientation, but the main app is set to portrait, the dependent app will run in portrait for the test, which may have unintended consequences.
:::

```yaml
  otherApps:
    - ./apps/pre-installed-app1.apk
    - $PRE_INSTALLED_APP2
    - storage:filename=pre-installed-app3.apk
```
---

## `suites`
<p><small>| REQUIRED | OBJECT |</small></p>

The set of properties providing details about the test suites to run. May contain multiple suite definitions. See the full [example config](#example-configuration) for an illustration of multiple suite definitions.

:::tip Configure RDC and VMC
You can configure tests for both Real Devices _and_ Virtual Machines in a single configuration file.
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

### `emulators`
<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property that defines details for running this suite on virtual devices using an emulator.

```yaml
emulators:
  - name: "Android GoogleApi Emulator"
    orientation: portrait
    platformVersions:
      - "11.0"
      - "10.0"
```
---

#### `name`
<p><small>| OPTIONAL | STRING |</small></p>

The name of the device to emulate for this test suite. To ensure name accuracy, check the [list of supported virtual devices](https://app.saucelabs.com/live/web-testing/virtual).
If you are using emulators for this test suite, this property is REQUIRED.

```yaml
  - name: "Android GoogleApi Emulator"
```
---

#### `orientation`
<p><small>| OPTIONAL | ENUM |</small></p>

The screen orientation to use while executing this test suite on this virtual device. Valid values are `portrait` or `landscape`.

```yaml
  orientation: portrait
```
---

#### `platformVersions`
<p><small>| OPTIONAL | ARRAY |</small></p>

The set of one or more versions of the device platform on which to run the test suite. Check the [list of supported virtual devices](https://app.saucelabs.com/live/web-testing/virtual) for compatible versions.

```yaml
  platformVersions:
    - "11.0"
    - "10.0"
```
---

### `devices`
<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property that defines details for running this suite on real devices. You can request a specific device using its ID, or you can specify a set of criteria to choose the first available device that matches the specifications.

When an ID is specified, it supersedes the other settings.

```yaml
devices:
  - name: "Google Pixel.*"
    platformVersion: 8.1
    options:
      carrierConnectivity: true
  - id: Google_Pixel_2_real_us
```
---

#### `id`
<p><small>| OPTIONAL | STRING |</small></p>

Request a specific device for this test suite by its ID. You can look up device IDs on device selection pages or by using our [Get Devices API request](/dev/api/rdc/#get-devices).

```yaml
        id: Google_Pixel_2_real_us
```
---

#### `name`
<p><small>| OPTIONAL | STRING |</small></p>

Find a device for this test suite that matches the device name or portion of the name, which may provide a larger pool of available devices of the type you want.

```yaml title="Use Complete Name"
      - name: Google Pixel 4 XL
```

```yaml title="Use Pattern Matching"
        name: Google Pixel.*
```
---

#### `platformVersion`
<p><small>| OPTIONAL | STRING |</small></p>

Request that the device matches a specific platform version.

```yaml
        platformVersion: 8.0
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
suites:
  testOptions:
    class:
      - com.example.android.testing.androidjunitrunnersample.CalculatorAddParameterizedTest
    notClass:
      - com.example.android.testing.androidjunitrunnersample.CalculatorInstrumentationTest
    size: small
    package: com.example.android.testing.androidjunitrunnersample
    notPackage: com.example.android.testing.androidMyDemoTests
    annotation: com.android.buzz.MyAnnotation
    notAnnotation: com.android.buzz.NotMyAnnotation
    numShards: 4
    clearPackageData: true
    useTestOrchestrator: true
```
---

#### `class`
<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to only run the specified classes for this test suite.

```yaml
  class:
    - com.example.android.testing.androidjunitrunnersample.CalculatorAddParameterizedTest
```
---

#### `notClass`
<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to run all classes for the suite *except* those specified here.

```yaml
  notClass:
    - com.example.android.testing.androidjunitrunnersample.CalculatorInstrumentationTest
```
---

#### `size`
<p><small>| OPTIONAL | ENUM |</small></p>

Instructs `saucectl` to run only tests that are annotated with the matching size value. Valid values are `small`, `medium`, or `large`. You may only specify one value for this property.

```yaml
  size: small
```
---

#### `package`
<p><small>| OPTIONAL | STRING |</small></p>

Instructs `saucectl` to run only tests in the specified package.

```yaml
  package: com.example.android.testing.androidjunitrunnersample
```
---

#### `notPackage`
<p><small>| OPTIONAL | STRING | REAL DEVICES ONLY |</small></p>

Instructs `saucectl` to run run all tests *except* those in the specified package.

```yaml
  notPackage: com.example.android.testing.androidMyDemoTests
```
---

#### `annotation`
<p><small>| OPTIONAL | STRING |</small></p>

Instructs `saucectl` to run only tests that match a custom annotation that you have set.

```yaml
  annotation: com.android.buzz.MyAnnotation
```
---

#### `notAnnotation`
<p><small>| OPTIONAL | STRING |</small></p>

Instructs `saucectl` to run all tests *except* those matching a custom annotation that you have set.

```yaml
  notAnnotation: com.android.buzz.NotMyAnnotation
```
---

#### `numShards`
<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the number of separate shards to create for the test suite. Read more about shard tests on the [Android developer site](https://developer.android.com/training/testing/junit-runner#sharding-tests).

When sharding is configured, `saucectl` automatically creates the sharded jobs for each of the devices defined for the suite based on the number of shards you specify. For example, for a suite testing a single emulator version that specifies 2 shards, `saucectl` clones the suite and runs one shard index on the first suite, and the other shard index on the identical clone suite. For a suite that is testing 2 emulator version and two real devices, `saucectl` must clone the suite to run each shard index for each emulator and device, so 8 jobs in total for the suite.

:::note
Espresso may not distribute tests evenly across the number of shards specified, especially if the number of shards is near or equivalent to the number of tests in the suite. In such cases, it is not unusual to see jobs with no tests at all because they were already executed in other shard jobs.
:::

```yaml
  numShards: 2
```
---

#### `clearPackageData`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Removes all shared states from the testing device's CPU and memory at the completion of each test.

```yaml
  clearPackageData: true
```
---

#### `useTestOrchestrator`
<p><small>| OPTIONAL | BOOLEAN | REAL DEVICES ONLY |</small></p>

Run each of your tests in its own Instrumentation instance to remove most of the app's shared state from the device CPU and memory between tests. Use this setting in conjunction with `clearPackageData: true` to completely remove all shared state.

When set, the instrumentation starts with [Test Orchestrator version 1.1.1](https://developer.android.com/training/testing/junit-runner#using-android-test-orchestrator) in use. This property applies only to real devices, not emulators.

```yaml
  useTestOrchestrator: true
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

## Try Espresso with Cucumber

`saucectl` supports Espresso using Cucumber, and the Espresso demo repo includes an [example Cucumber setup](https://github.com/saucelabs/saucectl-espresso-example/tree/master/examples/cucumber).
