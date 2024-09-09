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
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax. Our IDE Integrations (e.g., [Visual Studio Code](/dev/cli/saucectl/usage/ide/vscode)) can help you out by validating the YAML files and provide handy suggestions, so make sure to check them out!
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

:::caution Real Device Max Duration
When setting the timeout values for your suites, consider that native framework tests on real devices enforce a maximum test duration limit of 90 minutes.
:::

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
    build: Release $CI_COMMIT_SHORT_SHA
  concurrency: 5
```

---

### `region`

<p><small>| OPTIONAL | STRING/ENUM |</small></p>

Specifies through which Sauce Labs data center tests will run. Valid values are: `us-west-1` or `eu-central-1`.

:::note
If you do not specify a region in your config file, you must set it when running your command with the `--region` flag.
:::

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

Sets the number of times to retry a failed suite. For more settings, you can
refer to [passThreshold](#passthreshold).

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

:::note
This property is only valid for tests run against Emulators. It has no effect on tests run against real devices.
:::

- `public`: Accessible to anyone.
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

Specifies how to manage test output, such as logs, videos, and screenshots.

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

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only.

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

## `espresso`

<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the Espresso project.

```yaml
espresso:
  app: ./apps/calc.apk
  appDescription: My demo app
  testApp: ./apps/calc-success.apk
  testAppDescription: My test app
  otherApps:
    - ./apps/pre-installed-app1.apk
    - ./apps/pre-installed-app2.apk
```

---

### `app`

<p><small>| REQUIRED | STRING |</small></p>

Specifies a local path, URL, or storage identifier to the app under test. This property supports expanded environment variables.

When defining a local path, the default directory is `{project-root}/apps/filename.apk`. The app will be uploaded to the Sauce Labs storage service. Supports `*.apk` and `*.aab` files.

When defining a URL to your app, it will be downloaded to a local temporary directory before being uploaded to Sauce storage.

:::caution AAB App Signing
To install an \*.apk app that is extracted from an \*.aab file, Sauce Labs must sign the \*.apk using its own signature. In such cases, Sauce Labs signs both the `app` and `testApp` to ensure matching signatures, even if instrumentation is disabled. Otherwise, the app installation will fail.
:::

```yaml
  app: ./apps/calc.apk
```

```yaml
  app: https://example.app.download.url/calc.apk
```

```yaml
  app: $APP
```

```yaml
  app: storage:099557f6-aabb-f8b3-6ad1-8f6200898b92
```

```yaml
  app: storage:filename=calc.apk
```

---

### `appDescription`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies description for the uploaded app.

```yaml
  appDescription: My demo app
```

---

### `testApp`

<p><small>| REQUIRED | STRING |</small></p>

Either a local path, url, or storage identifier to the testing app. This property supports expanded environment variables.

When defining a local path, the default directory is `{project-root}/apps/testfile.apk`. The app will be uploaded to the Sauce Labs storage service. Only supports `*.apk` files.

When defining a url to your test app, it will be downloaded to a local temporary directory before being uploaded to the storage service.

```yaml
  testApp: ./apps/calc-success.apk
```

```yaml
  testApp: https://example.app.download.url/calc-success.apk
```

```yaml
  testApp: $TEST_APP
```

```yaml
  testApp: storage:fbd59e8e-2555-0d3c-5583-1bba2cd17b64
```

```yaml
  testApp: storage:filename=calc-success.apk
```

---

### `testAppDescription`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies description for the uploaded testApp.

```yaml
  testAppDescription: My test app
```

---

### `otherApps`

<p><small>| OPTIONAL | ARRAY | REAL DEVICES ONLY |</small></p>

Set of up to seven apps to pre-install for your tests. You can upload an `*.apk` or `*.aab` app file from your local machine by specifying a filepath (relative location is `{project-root}/apps/app1.apk`), a remote url, or you can specify an app that has already been uploaded to [Sauce Labs App Storage](/mobile-apps/app-storage) by providing the reference `storage:<fileId>` or `storage:filename=<filename>`.

:::note
Apps specified as `otherApps` inherit the configuration of the main app under test for [`Device Language`, `Device Orientation`, and `Proxy`](https://app.saucelabs.com/live/app-testing#group-details), regardless of any differences that may be applied through the Sauce Labs UI, because the settings are specific to the device under test. For example, if the dependent app is intended to run in landscape orientation, but the main app is set to portrait, the dependent app will run in portrait for the test, which may have unintended consequences.
:::

```yaml
  otherApps:
    - ./apps/pre-installed-app1.apk
    - https://example.app.download.url/pre-installed-app1.apk
    - $PRE_INSTALLED_APP2
    - storage:d6aac80c-2000-a2f1-4c4e-539266e93ee6
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

### `testApp`

<p><small>| OPTIONAL | STRING |</small></p>

Sets the test application on the suite level. See the full [usage](#testapp). If this property is not set, `saucectl` will use the default `testApp` from the [`espresso`](#espresso) level.

```yaml
suites:
  - testApp: ./apps/calc-success.apk
```

---

### `testAppDescription`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies description for the uploaded testApp on the suite level. If `testApp` is not set on suite level, `saucectl` will use the default `testAppDescription` from the [`espresso`](#espresso) level.

```yaml
suites:
  - testApp: ./apps/calc-success.apk
    testAppDescription: My test app
```

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

Specifies the retry strategy to apply for that suite. It should be used along with [retries](#retries).

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

When set to `true`, `saucectl` collects any failed tests from the previous run and performs an automatic retry on them.

```yaml
suite:
  - name: My Saucy Test
    smartRetry:
      failedOnly: true
```

---

#### `failedClassesOnly`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

`failedClassesOnly` is deprecated. Use `failedOnly` instead.

---

### `emulators`

<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property that defines details for running this suite on virtual devices using an Emulator. Check our [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) to see which Emulator configurations are available.

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
If you are using emulators for this test suite, this property is REQUIRED.

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

Find a device for this test suite that matches the device name or portion of the name ([Dynamic Device Allocation](/mobile-apps/supported-devices/#dynamic-device-allocation)), which may provide a larger pool of available devices of the type you want.

```yaml title="Use Complete Name"
      - name: Google Pixel 4 XL
```

```yaml title="Use Dynamic Allocation"
      - name: Google Pixel.*
```

---

#### `platformVersion`

<p><small>| MANDATORY <span className="sauceGreen">for Virtual Devices</span> | OPTIONAL <span className="sauceGreen">for Real Devices</span> | STRING |</small></p>

Allows you to set the mobile OS platform version that you want to use in your test.

:::info NOTE
Android and iOS platform versions are based on [Semantic Versioning](https://semver.org/), also known as SEMVER. This means that the versions will have the format `MAJOR.MINOR.PATCH`.
:::

**Virtual Devices**

This is mandatory for Android Emulators and iOS Simulators. You can find the available versions in our [Platform Configurator](https://saucelabs.com/platform/platform-configurator).

**Real Devices**

This is optional for Real Devices. There are three options you can use to determine which version you want to use for your automated Appium, Espresso, or XCUITest tests:

1. Don't provide a `platformVersion`, this will result in any available Android or iOS device, no matter the version.
2. Provide a `platformVersion` that starts with your provided `platformVersion` string:
   - **`12`:** matches all minors and patches for `platformVersion: "12"`. For example `12.1.0|12.1.1|12.2.0|...`
   - **`12.1`:** matches all patches for `platformVersion: "12.1"`. For example `12.1.0|12.1.1`, it will **not** match `12.2.x|12.3.x` and higher
   - **`12.1.1`:** matches all devices that have **this exact** platform version
3. In/exclude a specific version and or a range of versions by using a regular expression (regex). You don't need to provide the forward slashes (`/{your-regex}/`) as you would normally do with regex. Keep in mind that the regex needs to match the format `MAJOR.MINOR.PATCH`. The possibilities are endless, but here are just a few examples:
   - **`^1[3-4|6].*`:** Will match `13`, `14` and `16`, but not 15, see [example](https://regex101.com/r/ExICgZ/1).
   - **`^(?!15).*`:** Will exclude version `15` with all it's minors and patches, but will match all other versions, see [example](https://regex101.com/r/UqqYrM/1).

:::note NOTE
The stricter the `platformVersions` is, the smaller the pool of available devices will be and the longer you might need to wait for the available device. We recommend using only the major version or using the regex option to get the best results and an available device in the fastest way.
:::

```yaml title="Use complete version for Virtual and or Real Devices"
        platformVersion: 11.0
```

```yaml title="Use dynamic platformVersion allocation. Real Devices Only"
        platformVersion: '^1[3-4|6].*'
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

Request that the matching device is a specific type of device. Valid values are: `ANY`, `TABLET`, or `PHONE`.

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

Sauce Labs runs your tests using [Android Debug Bridge (ADB)](https://developer.android.com/studio/test/command-line#run-tests-with-adb) for Android Real Devices and Android Emulators by invoking the `adb shell am instrument`-command. This provides a set of [instrumentation options](https://developer.android.com/studio/test/command-line#am-instrument-options) that you can use to control the test execution. We offer support for predefined and custom options.

:::info
Available options:

- optional and can be used in any combination unless otherwise noted
- can be used on both Android Emulators and Real Devices unless otherwise noted with <span className="sauceGreen">Virtual Devices Only</span> or <span className="sauceGreen">Real Devices Only</span>

:::

### `testOptions`

<p><small>| OPTIONAL | OBJECT |</small></p>

The `testOptions` property allows you to provide options to `saucectl`. It's a set of parameters allowing you to provide additional details about which test class should be run for the suite and how to apply them. For more information, see the official Android ["Test from the command line"](https://developer.android.com/studio/test/command-line#am-instrument-options) and ["AndroidJUnitRunner"](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner) docs.

```yaml
suites:
  # The below testOptions are examples. Some of the options are not working together, so please read the descriptions carefully.
  testOptions:
    class:
      - com.example.android.testing.androidjunitrunnersample.CalculatorAddParameterizedTest
    notClass:
      - com.example.android.testing.androidjunitrunnersample.CalculatorInstrumentationTest
    func: true
    unit: true
    perf: true
    size: small
    package: com.example.android.testing.androidjunitrunnersample
    notPackage: com.example.android.testing.androidMyDemoTests
    annotation: com.android.buzz.MyAnnotation
    notAnnotation: com.android.buzz.NotMyAnnotation
    filter:
      - com.android.foo.MyCustomFilter
    runnerBuilder:
      - com.android.foo.MyCustomBuilder
    listener:
      - com.foo.Listener
    newRunListenerMode: true
    numShards: 4
    clearPackageData: true
    useTestOrchestrator: true
    # custom test options
    testUser: "John Doe"
    testEnvironment: "staging"
```

The following options are **NOT** allowed/will be ignored when running tests:

- `testFile`: Running all tests listed in a file.
- `notTestFile`: Running all tests not listed in a file.
- `debug`: Run tests in debug mode.
- `log`: Loads and logs all specified tests but doesn't run them.
- `emma`: Runs an EMMA code coverage analysis and writes the output.
- `coverageFile`: Overrides the default location of the EMMA coverage file on the device.
- `coverage`: To generate code coverage files (\*.ec) that can be used by EMMA or JaCoCo. (<span className="sauceGreen">Soon to come for Android Real Devices/Emulators</span>)

---

#### `class`

<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to only run the specified classes for this test suite. See [`am instrument`-options](https://developer.android.com/studio/test/command-line#am-instrument-options).

```yaml
suites:
  testOptions:
    class:
      - com.example.android.testing.androidjunitrunnersample.CalculatorAddParameterizedTest
```

---

#### `notClass`

<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to run all classes for the suite _except_ those specified here. See [`am instrument`-options](https://developer.android.com/studio/test/command-line#am-instrument-options).

```yaml
suites:
  testOptions:
    notClass:
      - com.example.android.testing.androidjunitrunnersample.CalculatorInstrumentationTest
```

---

#### `func`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Instructs `saucectl` to run all test classes that extend [InstrumentationTestCase](https://developer.android.com/reference/android/test/InstrumentationTestCase). See [`am instrument`-options](https://developer.android.com/studio/test/command-line#am-instrument-options).

```yaml
suites:
  testOptions:
    func: true
```

---

#### `unit`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Instructs `saucectl` to run all test classes that do not extend either InstrumentationTestCase or [PerformanceTestCase](https://developer.android.com/reference/android/test/PerformanceTestCase)/[`perf`](#perf). See [`am instrument`-options](https://developer.android.com/studio/test/command-line#am-instrument-options).

```yaml
suites:
  testOptions:
    unit: true
```

---

#### `perf`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Instructs `saucectl` to run all test classes that implement PerformanceTestCase. See [`am instrument`-options](https://developer.android.com/studio/test/command-line#am-instrument-options).

```yaml
suites:
  testOptions:
    perf: true
```

---

#### `size`

<p><small>| OPTIONAL | ENUM |</small></p>

Instructs `saucectl` to run only tests that are annotated with the matching size value i.e `@SmallTest`, `@MediumTest` or `@LargeTest`. Valid values are `small`, `medium`, or `large`. You may only specify one value for this property. See [`am instrument`-options](https://developer.android.com/studio/test/command-line#am-instrument-options).

```yaml
suites:
  testOptions:
    size: small
```

---

#### `package`

<p><small>| OPTIONAL | STRING |</small></p>

Instructs `saucectl` to run only tests in the specified package. See [`am instrument`-options](https://developer.android.com/studio/test/command-line#am-instrument-options).

```yaml
suites:
  testOptions:
    package: com.example.android.testing.androidjunitrunnersample
```

---

#### `notPackage`

<p><small>| OPTIONAL | STRING | REAL DEVICES ONLY |</small></p>

Instructs `saucectl` to run all tests _except_ those in the specified package. See [AndroidJUnitRunner](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner)-usage.

```yaml
suites:
  testOptions:
    notPackage: com.example.android.testing.androidMyDemoTests
```

---

#### `annotation`

<p><small>| OPTIONAL | STRING |</small></p>

Instructs `saucectl` to run only tests that match a custom annotation that you have set. See [AndroidJUnitRunner](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner)-usage.

```yaml
suites:
  testOptions:
    annotation: com.android.buzz.MyAnnotation
```

---

#### `notAnnotation`

<p><small>| OPTIONAL | STRING |</small></p>

Instructs `saucectl` to run all tests _except_ those matching a custom annotation that you have set. See [AndroidJUnitRunner](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner)-usage.

```yaml
suites:
  testOptions:
    notAnnotation: com.android.buzz.NotMyAnnotation
```

---

#### `filter`

<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to filter the test run to tests that pass all of a list of custom [filter(s)](https://junit.org/junit4/javadoc/4.12/org/junit/runner/manipulation/Filter.html). See [AndroidJUnitRunner](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner)-usage.

```yaml
suites:
  testOptions:
    filter:
      - com.android.foo.MyCustomFilter
      - com.android.foo.MyOtherCustomFilter
```

---

#### `runnerBuilder`

<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to use custom [builders](https://junit.org/junit4/javadoc/4.12/org/junit/runners/model/RunnerBuilder.html) to run test classes. See [AndroidJUnitRunner](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner)-usage.

```yaml
suites:
  testOptions:
    runnerBuilder:
      - com.android.foo.MyCustomBuilder
      - com.android.foo.AnotherCustomBuilder
```

---

#### `listener`

<p><small>| OPTIONAL | ARRAY |</small></p>

Instructs `saucectl` to specify one or more [RunListeners](http://junit.org/javadoc/latest/org/junit/runner/notification/RunListener.html) to observe the test run. See [AndroidJUnitRunner](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner)-usage.

```yaml
suites:
  testOptions:
    listener:
      - com.foo.Listener
      - com.foo.Listener2
```

---

#### `newRunListenerMode`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Instructs `saucectl` to use the new order of [RunListeners](http://junit.org/javadoc/latest/org/junit/runner/notification/RunListener.html) during a test run. See [AndroidJUnitRunner](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner)-usage.

```yaml
suites:
  testOptions:
    newRunListenerMode: true
```

---

#### `numShards`

<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the number of separate shards to create for the test suite. Read more about shard tests on the [Android developer site](https://developer.android.com/training/testing/junit-runner#sharding-tests).

When sharding is configured, `saucectl` automatically creates the sharded jobs for each of the devices defined for the suite based on the number of shards you specify. For example, for a suite testing a single Emulator version that specifies 2 shards, `saucectl` clones the suite and runs one shard index on the first suite, and the other shard index on the identical clone suite. For a suite that is testing 2 Emulator version and two real devices, `saucectl` must clone the suite to run each shard index for each Emulator and device, so 8 jobs in total for the suite.

:::note
Espresso may not distribute tests evenly across the number of shards specified, especially if the number of shards is near or equivalent to the number of tests in the suite. In such cases, it is not unusual to see jobs with no tests at all because they were already executed in other shard jobs.
:::

```yaml
suites:
  testOptions:
    numShards: 2
```

---

#### `clearPackageData`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Removes all shared states from the testing device's CPU and memory at the completion of each test. See [AndroidJUnitRunner](https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner)-usage.

:::note
The flag `clearPackageData` has to be used in conjunction with `useTestOrchestrator`.
:::

```yaml
suites:
  testOptions:
    clearPackageData: true
    useTestOrchestrator: true
```

---

#### `useTestOrchestrator`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Run each of your app's tests within its own invocation of `Instrumentation`. Android Test Orchestrator offers the following benefits for your testing environment:

- **Minimal shared state:** Each test runs in its own `Instrumentation` instance. Therefore, if your tests share app state, most of that shared state is removed from your device's CPU or memory after each test. To remove all shared state from your device's CPU and memory after each test, use this setting in conjunction with `clearPackageData: true`.
- **Crashes are isolated:** Even if one test crashes, it takes down only its own instance of `Instrumentation`. This means that the other tests in your suite still run, providing complete test results.

:::note
This isolation results in a possible increase in test execution time as the Android Test Orchestrator restarts the application after each test.
:::

See [Test Orchestrator](https://developer.android.com/training/testing/instrumented-tests/androidx-test-libraries/runner#using-android-test-orchestrator) for more information.

```yaml
suites:
  testOptions:
    useTestOrchestrator: true
```

---

#### Custom `testOptions`

The `am instrument` tool passes testing options in the form of key-value pairs, using the `-e` flag. If you normally pass extra test options to the `am instrument` tool, like for example

```
# -e <key> <value>
-e testUser "John Doe"
```

you can do so in `saucectl` by adding them to the `testOptions` property.

```yaml
suites:
  testOptions:
    testUser: "John Doe"
```

---

### `disableImmersiveModePopUp`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Android Virtual Devices Only</span> |</small></p>

Android allows apps to use the full screen, hiding the status bar and navigation bar. This is called ["immersive mode"](https://developer.android.com/develop/ui/views/layout/immersive). When you run an Android test, the device will show a popup asking if you want to allow the app to use immersive mode. This popup can interfere with your test, and by default we disable it. If you want to enable it, set `disableImmersiveModePopUp` to `false`.

:::note

Under the hood, this capability is running this command before the app is started:

```bash
adb shell settings put secure immersive_mode_confirmations confirmed
```

:::

```yaml
suites:
  testOptions:
    disableImmersiveModePopUp: false
```

---

### `appSettings`

<p><small>| OPTIONAL | OBJECT |</small></p>

Application settings for real device tests.

```yaml
appSettings:
  audioCapture: true
  instrumentation:
    networkCapture: true
```

---

#### `audioCapture`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Record the audio stream generated by your native mobile app during a real device test.

```yaml
  audioCapture: true
```

---

#### `instrumentation`

<p><small>| OPTIONAL | OBJECT |</small></p>

Instrumentation settings for real device tests.

```yaml
  instrumentation:
    networkCapture: true
```

---

##### `networkCapture`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Record network traffic for HTTP/HTTPS requests during app tests on real devices.

```yaml
    networkCapture: true
```

## Advanced Configuration Considerations

The configuration file is flexible enough to allow for any customizations and definitions that are required for any of the supported frameworks. The following sections describe some of the most common configurations.

### Setting up a Proxy

If you need to go through a proxy server, you can set it through the following variables:

- `HTTP_PROXY`: Proxy to use to access HTTP websites
- `HTTPS_PROXY`: Proxy to use to access HTTPS websites

```title= "Example: Windows Powershell"
PS> $Env:HTTP_PROXY=http://my.proxy.org:3128/
PS> $Env:HTTPS_PROXY=http://my.proxy.org:3128/
```

```title= "Example: Linux/macOS"
$> export HTTP_PROXY=http://my.proxy.org:3128/
$> export HTTPS_PROXY=http://my.proxy.org:3128/
```

## Try Espresso with Cucumber

`saucectl` supports Espresso using Cucumber, and the Espresso demo repo includes an [example Cucumber setup](https://github.com/saucelabs/saucectl-espresso-example/tree/master/examples/cucumber).
