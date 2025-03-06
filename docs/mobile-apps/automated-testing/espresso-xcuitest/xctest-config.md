---
id: xctest-config
title: Configuring Your XCTest Tests for Real Devices
sidebar_label: XCTest Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`saucectl` uses a YAML specification file to determine exactly which tests to run and how to run them. To customize `saucectl` for running your XCTest tests, adjust the properties of the YAML file as needed. This page outlines the configuration properties specific to running XCTest tests.

Utilize the following configuration at runtime to instruct `saucectl` to use any configuration file of your choice:

```bash
saucectl run -c ./path/to/{config-file}.yml
```

:::note YAML Required
While you can utilize multiple files with different names or locations to specify your configurations, each file must be a `*.yml` and adhere to the `saucectl` syntax. Our IDE integrations (for example: [Visual Studio Code](/dev/cli/saucectl/usage/ide/vscode)) can assist you by validating the YAML files and offering suggestions.
:::

## Example Configuration

```yaml reference
https://github.com/saucelabs-training/demo-xctest/blob/main/.sauce/xctest_1.yaml
```

Each property supported for running XCTest tests through `saucectl` is defined below.

## `apiVersion`

<p><small>| REQUIRED | STRING |</small></p>

Identifies the version of the underlying configuration schema. Currently, `v1alpha` is the only supported version value.

```yaml
apiVersion: v1alpha
```

---

## `kind`

<p><small>| REQUIRED | STRING/ENUM |</small></p>

Specifies the framework associated with the automation tests configured in this specification.

```yaml
kind: xctest
```

---

## `showConsoleLog`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Controls whether the contents of `console.log` are always displayed in the local output of `saucectl`. By default (false), `console.log` is only visible for failed suites.

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

Specifies the duration (in `ms`, `s`, `m`, or `h`) that `saucectl` should wait for each suite to finish. If not configured, the default value is `0` (unlimited).

:::caution Real Device Max Duration
When setting the timeout values for your suites, note that native framework tests on real devices enforce a maximum test duration limit of 90 minutes.
:::

```yaml
defaults:
  timeout: 15m
```

---

## `sauce`

<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property that encompasses all settings concerning how tests are executed and identified in the Sauce Labs platform.

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
If you do not specify a region in your configuration file, you must set it with the `-region` flag when executing your command.
:::

```yaml
sauce:
  region: eu-central-1
```

---

### `metadata`

<p><small>| OPTIONAL | OBJECT |</small></p>

The set of properties that enable you to provide additional information about your project that helps distinguish it across the various environments in which it is used and reviewed. It also assists in applying filters to isolate tests based on metrics that are meaningful to you.

```yaml
sauce:
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

Sets the maximum number of suites that can run simultaneously. If the test specifies more suites than the maximum, the excess suites are placed in a queue and executed in order as each suite completes.

:::caution
Set this value to equal or less than your Sauce concurrency allowance, as setting a higher value may result in jobs dropped by the server.
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

### `launchOrder`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the execution order for your test suites. When set to `fail rate`, test suites with the highest failure rate will run first. If unspecified, test suites will run in the order in which they are written in the configuration file.

```yaml
sauce:
  launchOrder: fail rate
```

---

## `reporters`

<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property containing all reporting capabilities provided by `saucectl`.

```yaml
reporters:
  junit:
    enabled: true
    filename: saucectl-report.xml
    webhookURL: https://my-webhook-url
```

---

### `spotlight`

<p><small>| OPTIONAL | OBJECT |</small></p>

The spotlight reporter highlights failed or otherwise interesting jobs.
It may include an excerpt of failed tests or additional information that could be useful for troubleshooting.

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
```

---

### `json`

<p><small>| OPTIONAL | OBJECT |</small></p>

The JSON reporter gathers test results from all jobs and combines them into a single report.

```yaml
reporters:
  json:
    enabled: true
```

---

#### `enabled`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Toggles the reporter on/off.

```yaml
reporters:
  junit: # or json
    enabled: true
```

---

#### `webhookURL`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the webhook URL. When saucectl test is finished, it'll send an HTTP POST with a JSON payload to the configured webhook URL.

```yaml
reporters:
  junit: # or json
    webhookURL: https://my-webhook-url
```

---

#### `filename`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the report filename. Defaults to "saucectl-report.json".

```yaml
reporters:
  junit: # or json
    filename: my-saucectl-report.json
```

---

## `artifacts`

<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property indicating how to manage test output, including logs, videos, and screenshots.

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

### `download`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies the settings for downloading artifacts from tests run by `saucectl`.

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

Specifies when and under which circumstances to download artifacts. Valid values are:

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

Specifies which artifacts to download based on whether they match the provided name or file type pattern. Supports the use of the wildcard character `*` (use quotes for optimal parsing results with wildcard).

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

Specifies the path to the folder where artifacts will be downloaded. A new subdirectory is created in this location for each suite from which artifacts are downloaded. The subdirectory's name will correspond to the suite name. If a directory with the same name already exists, a serial number will suffix the new one.

```yaml
artifacts:
  download:
    directory: ./artifacts/
```

---

## `XCTest`

<p><small>| REQUIRED | OBJECT | <span className="sauceGreen">Real Devices Only</span> </small></p>

The parent property containing the details specific to the XCTest project.

```yaml
XCTest:
  app: ./apps/SauceLabs-Demo-App.app # This is an example app for real devices.
  appDescription: My demo app
  xcTestRunFile: ./apps/SauceLabs-Demo-App.xctestrun
  otherApps:
    - ./apps/SauceLabs-Demo-AppUI-Runner.app # If your test plan contains a XCUITest you need to provide it in the other apps.
    - ./apps/SomeOtherApp.app # An example of another app that might be part of your test plan.
```

:::caution

`saucectl` supports running XCTests on Real Devices only. Simulators only support [XCUITest](/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md):
You need to configure your devices via:
- `devices`, see [Devices](#devices)

:::

---

### `app`

<p><small>| REQUIRED | STRING |</small></p>

Specifies a local path, URL, or storage identifier to the app under test. This property supports expanded environment variables. Supports `*.ipa`, `*.app` and `*.zip` file types.

```yaml
XCTest:
  # Local paths
  ## Real Devices
  app: ./apps/XCTest/SauceLabs-Demo-Real-Device-App.app

# Remote locations
  ## Real Devices
  app: https://example.app.download.url/SauceLabs-Demo-Real-Device-App.app

  # Using an environment variable
  app: $APP

  # Storage identifiers
  app: storage:c78ec45e-ea3e-ac6a-b094-00364171addb

  ## Real Devices
  app: storage:filename=SauceLabs-Demo-App.app

```

---

### `appDescription`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies description for the uploaded app.

```yaml
XCTest:
  appDescription: My demo app
```

---

### `otherApps`

<p><small>| OPTIONAL | ARRAY |</small></p>

If your Test plan spans multiple app targets, or contains XCUITests, provide them here. See [`app`](#app) for more app details.

:::note

1. Apps specified as `otherApps` inherit the configuration of the main app under test for [`Device Language`, `Device Orientation`, and `Proxy`](https://app.saucelabs.com/live/app-testing#group-details), regardless of any differences that may be applied through the Sauce Labs UI, because the settings are specific to the device under test. For example, if the dependent app is intended to run in landscape orientation, but the main app is set to portrait, the dependent app will run in portrait for the test, which may have unintended consequences.

:::

```yaml
XCTest:
  otherApps:
    - ./apps/pre-installed-app1.app                           # This is an example app for real devices.
    - https://example.app.download.url/pre-installed-app1.app # This is an example app for real devices.
    - $PRE_INSTALLED_APP2
    - storage:8d250fec-5ecb-535c-5d63-aed4da026293
    - storage:filename=pre-installed-app3.app                 # This is an example app for real devices.
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
  - name: My Saucy Test
```

---

### `app`

<p><small>| OPTIONAL | STRING |</small></p>

Sets the test application on the suite level. See the full [usage](#app). If this property is not set, `saucectl` will use the default `app`.

```yaml
suites:
  - name: My Saucy Test
    app: ./apps/SauceLabs-Demo-App.app # This is an example app for real devices.
```

---

### `appDescription`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies description for the uploaded test app on the suite level. If `app` is not set on suite level, `saucectl` will use the default `appDescription`.

```yaml
suites:
  - name: My Saucy Test
    appDescription: My Demo app
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
suites:
  - name: My Saucy Test
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
suites:
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
suites:
  - name: My Saucy Test
    smartRetry:
      failedOnly: true
```

---

#### `failedOnly`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

When set to `true`, `saucectl` collects any failed tests from the previous run and performs an automatic retry on them.

```yaml
suites:
  - name: My Saucy Test
    smartRetry:
      failedOnly: true
```

---

#### `failedClassesOnly`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

`failedClassesOnly` is deprecated. Use `failedOnly` instead.

---

### `appSettings`

<p><small>| OPTIONAL | OBJECT | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Application settings for real device tests.

```yaml
suites:
  - name: My Saucy Test
    appSettings:
      instrumentation:
        networkCapture: true
```

---

#### `resigningEnabled`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Enables resigning of the app so that it can run on RDC devices. Set to `true` by default. It must be kept as `true` in order for instrumentation features to work. Can be set to `false` for private devices to install the app to the device as is.

```yaml
suites:
  - name: My Saucy Test
    appSettings:
      resigningEnabled: true
```

---

#### `instrumentation`

<p><small>| OPTIONAL | OBJECT | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Instrumentation settings for real device tests.

```yaml
suites:
  - name: My Saucy Test
    appSettings:
      instrumentation:
        networkCapture: true
```

---

##### `vitals`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Configure app settings for real device to enable vitals.

```yaml
suites:
   - name: My Saucy Test
     appSettings:
        instrumentation:
          vitals: true
```

---

##### `networkCapture`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Record network traffic for HTTP/HTTPS requests during app tests on real devices.

```yaml
suites:
  - name: My Saucy Test
    appSettings:
      instrumentation:
        networkCapture: true
```

---

##### `biometrics`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Configure app settings for real device to intercept biometric authentication.

```yaml
suites:
   - name: My Saucy Test
     appSettings:
        instrumentation:
          biometrics: true
```

---

##### `groupDirectory`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Configure app settings for real device to enable group directory access.

```yaml
suites:
   - name: My Saucy Test
     appSettings:
        instrumentation:
          groupDirectory: true
```

---

##### `sysAlertsDelay`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Configure app settings for real device to delay system alerts.

```yaml
suites:
   - name: My Saucy Test
     appSettings:
        instrumentation:
          sysAlertsDelay: true
```

---

##### `imageInjection`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Configure app settings for real device to inject provided images in the user app.

```yaml
suites:
   - name: My Saucy Test
     appSettings:
        instrumentation:
          imageInjection: true
```

---

### `devices`

<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property that defines how to select real devices on which to run the test suite. You can request a specific device using its ID, or you can specify a set of criteria to choose the first available device that matches the specifications.

When an ID is specified, it supersedes the other settings.

:::caution

A `device` or a `simulator` is required to run your tests. You can **NOT** combine them in one `suite`.

:::

```yaml
suites:
  - name: My Saucy Test
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

Request a specific device for this test suite by its ID. You can look up device IDs on device selection pages or by using our [Get Devices API request](/dev/api/rdc/#get-devices).

```yaml
suites:
  - name: My Saucy Test
    devices:
      - id: iPhone_11_14_5_real_us
```

---

#### `name`

<p><small>| OPTIONAL | STRING |</small></p>

Find a device for this test suite that matches the device name or portion of the name ([Dynamic Device Allocation](/mobile-apps/supported-devices/#dynamic-device-allocation)), which may provide a larger pool of available devices of the type you want.

```yaml title="Use Complete Name"
suites:
  - name: My Saucy Test
    devices:
      - name: iPhone 11
```

```yaml title="Use Dynamic Allocation"
suites:
  - name: My Saucy Test
    devices:
      - name: iPhone.*
```

---

#### `platformVersion`

<p><small>| MANDATORY <span className="sauceGreen">for Virtual Devices</span> | OPTIONAL <span className="sauceGreen">for Real Devices</span> | STRING |</small></p>

Allows you to set the mobile OS platform version that you want to use in your test.

The platformVersion configuration is optional for Real Devices. There are three options you can use to determine which version you want to use for your automated Appium, Espresso, or XCTest tests:

1. Don't provide a `platformVersion`, this will result in any available Android or iOS device, no matter the version.
2. Provide a `platformVersion` that starts with your provided `platformVersion` string:
   - **`12`:** matches all minors and patches for `platformVersion: "12"`. For example `12.1.0|12.1.1|12.2.0|...`
   - **`12.1`:** matches all patches for `platformVersion: "12.1"`. For example `12.1.0|12.1.1`, it will **not** match `12.2.x|12.3.x` and higher
   - **`12.1.1`:** matches all devices that have **this exact** platform version
3. In/exclude a specific version and or a range of versions by using a regular expression (regex). You don't need to provide the forward slashes (`/{your-regex}/`) as you would normally do with regular expression. Keep in mind that the regular expression needs to match the format `MAJOR.MINOR.PATCH`. The possibilities are endless, but here are just a few examples:
   - **`^1[3-4|6].*`:** Will match `13`, `14` and `16`, but not 15, see [example](https://regex101.com/r/ExICgZ/1).
   - **`^(?!15).*`:** Will exclude version `15` with all it's minors and patches, but will match all other versions, see [example](https://regex101.com/r/UqqYrM/1).

:::note
The stricter the `platformVersions` is, the smaller the pool of available devices will be and the longer you might need to wait for the available device. We recommend using only the major version or using the regular expression option to get the best results and an available device in the fastest way.
:::

```yaml title="Use complete version for Real Devices"
suites:
  - name: My Saucy Test
    devices:
      - name: iPhone.*
        platformVersion: 14.3
```

```yaml title="Use complete version for Virtual Devices"
suites:
  - name: My Saucy Test
    simulators:
      - name: iPhone 14 Pro Simulator
        platformVersion: 16.2
```

```yaml title="Use dynamic platformVersion allocation. Real Devices Only"
suites:
  - name: My Saucy Test
    devices:
      platformVersion: '^1[3-4|6].*'
```

---

#### `options`

<p><small>| OPTIONAL | OBJECT | <span className="sauceGreen">Real Devices Only</span> |</small></p>

A parent property to further specify desired device attributes within the pool of devices that match the `name` and `version` criteria.

---

##### `carrierConnectivity`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Request that the matching device is also connected to a cellular network.

```yaml
suites:
  - name: My Saucy Test
    devices:
      - name: iPhone.*
        options:
          carrierConnectivity: true
```

---

##### `deviceType`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Request that the matching device is a specific type of device. Valid values are: `ANY`, `TABLET`, or `PHONE`.

```yaml
suites:
  - name: My Saucy Test
    devices:
      - name: iPhone.*
        options:
          deviceType: TABLET
```

---

##### `private`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Real Devices Only</span> |</small></p>

Request that the matching device is from your organization's private pool.

```yaml
suites:
  - name: My Saucy Test
    devices:
      - name: iPhone.*
        options:
          private: true
```

---

### `env`

<p><small>| OPTIONAL | OBJECT | <span className="sauceGreen">Virtual Devices Only</span> |</small></p>

A property containing one or more environment variables that may be referenced in the tests for this suite. Expanded environment variables are supported. Values set here will be overwritten by values set in the global `env` property.

```yaml
  env:
    FOO: bar
```

---

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
