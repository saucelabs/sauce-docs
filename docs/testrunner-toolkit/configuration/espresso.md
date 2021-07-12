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
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax. If you are less comfortable with YAML, any of a wide variety of free online YAML/JSON validator tools may be helpful.
:::


## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-espresso-example/blob/master/.sauce/config.yml
```

Each of the properties supported for running Espresso tests through `saucectl` is defined below.

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
kind: espresso
```
---

## `sauce`
<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property containing all settings related to how tests are run and identified in the Sauce Labs platform.

```yaml
sauce:
  region: eu-central-1
  metadata:
    name: Testing Espresso Support
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
<p><small>| OPTIONAL | OBJECT |</small></p>

The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you, as shown in the following example:

```yaml
metadata:
  name: Testing Espresso Support
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
    parent: parent_owner_of_tunnel # if applicable, specify the owner of the tunnel
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

## `espresso`
<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the Espresso project.

```yaml
espresso:
  app: ./apps/calc.apk
  testApp: ./apps/calc-success.apk
```
---

### `app`
<p><small>| REQUIRED | STRING |</small></p>

The path to the application. The default directory is `{project-root}/apps/filename.apk`, and the property supports expanded environment variables to designate the path, as shown in the following examples.

```yaml
  app: ./apps/calc.apk
```

```yaml
  app: $APP
```
---

### `testApp`
<p><small>| REQUIRED | STRING |</small></p>

The path to the testing application. The relative file location is `{project-root}/apps/testfile.apk`, and the property supports expanded environment variables to designate the path, as shown in the following examples.

```yaml
  testApp: ./apps/calc-success.apk
```

```yaml
  testApp: $TEST_APP
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

A property containing one or more environment variables that may be referenced in the tests for this suite. Expanded environment variables are supported.

```yaml
  env:
    hello: world
    my_var: $MY_VAR
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
  - id: Google_Pixel_2_real_us
```
---

#### `id`
<p><small>| OPTIONAL | STRING |</small></p>

Request a specific device for this test suite by its ID. You can look up device IDs in the Sauce Labs app or using our [Get Devices API request](https://docs.saucelabs.com/dev/api/rdc#get-devices).

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
    - com.example.android.testing.androidjunitrunnersample.CalculatorAddParameterizedTest
  notClass:
    - com.example.android.testing.androidjunitrunnersample.CalculatorInstrumentationTest
  size: small
  package: com.example.android.testing.androidjunitrunnersample
  annotation: com.android.buzz.MyAnnotation
  numShards: 4
  clearPackageData: true
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

#### `annotation`
<p><small>| OPTIONAL | STRING |</small></p>

Instructs `saucectl` to run only tests that match a custom annotation that you have set.

```yaml
  annotation: com.android.buzz.MyAnnotation
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
