---
id: xcuitest
title: Configuring Your XCUITest Tests
sidebar_label: XCUITest Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<span className="sauceDBlue">Real Devices Only</span>

`saucectl` relies on a YAML specification file to determine exactly which tests to run and how to run them. To customize `saucectl` to run your XCUITest tests, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running XCUITest tests.

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

```yaml
  region: eu-central-1
```

---

### `metadata`

<p><small>| OPTIONAL | OBJECT | VIRTUAL ONLY |</small></p>

The set of properties that allows you to provide additional information about your project that helps distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you.

:::note
At this time, the `metadata` property is not supported for XCUITest because XCUITest is only supported for real device testing.
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

Sets the number of times to retry a failed suite. For more settings, you can refer to [passThreshold](#passThreshold).

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

## `notifications`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies how to set up automatic test result alerts.

```yaml
notifications:
  slack:
    channels:
      - "saucectl-tests"
      - "xcuitest-results"
    send: always
```

---

### `slack`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies the settings related to sending tests result notifications through Slack. See [Slack Integration](/basics/integrations/slack) for information about integrating your Sauce Labs account with your Slack workspace.

```yaml
  slack:
    channels: "saucectl-xcuitest"
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
      - "xcuitest-team"
    send: always
```

---

#### `send`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies when and under what circumstances to send notifications to specified Slack channels. Valid values are:

- `always`: Send notifications for all test results.
- `never`: Do not send any test result notifications.
- `pass`: Send notifications for passing suites only.
- `fail`: Send notifications for failed suites only.

```yaml
  slack:
    channels: "saucectl-xcuitest"
    send: always
```

---

## `xcuitest`

<p><small>| REQUIRED | OBJECT |</small></p>

The parent property containing the details specific to the XCUITest project.

```yaml
xcuitest:
  app: ./apps/SauceLabs.Mobile.Sample.XCUITest.App.ipa
  appDescription: My demo app
  testApp: ./apps/SwagLabsMobileAppUITests-Runner.app
  testAppDescription: My test app
  otherApps:
    - ./apps/pre-installed-app1.ipa
    - ./apps/pre-installed-app2.ipa
```

---

### `app`

<p><small>| REQUIRED | STRING |</small></p>

Specifies a local path, url, or storage identifier to the app under test. This property supports expanded environment variables. Supports `*.ipa` and `*.app` file types.

```yaml
  app: ./apps/xcuitest/SauceLabs.Mobile.Sample.XCUITest.App.ipa
```

```yaml
  app: https://example.app.download.url/SauceLabs.Mobile.Sample.XCUITest.App.ipa
```

```yaml
  app: $APP
```

```yaml
  app: storage:c78ec45e-ea3e-ac6a-b094-00364171addb
```

```yaml
  app: storage:filename=SauceLabs.Mobile.Sample.XCUITest.App.ipa
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

Either a local path, url, or storage identifier to the testing app. This property supports expanded environment variables. Supports `*.ipa` and `*.app` file types.

```yaml
  testApp: ./apps/SwagLabsMobileAppUITests-Runner.app
```

```yaml
  app: https://example.app.download.url/SwagLabsMobileAppUITests-Runner.app
```

```yaml
  testApp: $TEST_APP
```

```yaml
  testApp: storage:11f421f0-30e3-23c2-9026-d73a205dcd38
```

```yaml
  testApp: storage:filename=./apps/SwagLabsMobileAppUITests-Runner.app.ipa
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

Set of up to seven apps to pre-install for your tests. You can upload an app from your local machine by specifying a filepath (relative location is `{project-root}/apps/app1.ipa`), a remote url, or an expanded environment variable representing the path, or you can specify an app that has already been uploaded to [Sauce Labs App Storage](/mobile-apps/app-storage) by providing the reference `storage:<fileId>` or `storage:filename=<filename>`.

:::note
Apps specified as `otherApps` inherit the configuration of the main app under test for [`Device Language`, `Device Orientation`, and `Proxy`](https://app.saucelabs.com/live/app-testing#group-details), regardless of any differences that may be applied through the Sauce Labs UI, because the settings are specific to the device under test. For example, if the dependent app is intended to run in landscape orientation, but the main app is set to portrait, the dependent app will run in portrait for the test, which may have unintended consequences.
:::

```yaml
  otherApps:
    - ./apps/pre-installed-app1.ipa
    - https://example.app.download.url/pre-installed-app1.ipa
    - $PRE_INSTALLED_APP2
    - storage:8d250fec-5ecb-535c-5d63-aed4da026293
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

### `testApp`

<p><small>| OPTIONAL | STRING |</small></p>

Sets the test application on the suite level. See the full [usage](#testapp). If this property is not set, `saucectl` will use the default `testApp` from the [`xcuitest`](#xcuitest) level.

```yaml
suites:
  - testApp: ./apps/SwagLabsMobileAppUITests-Runner.app
```

---

### `testAppDescription`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies description for the uploaded testApp on the suite level. If `testApp` is not set on suite level, `saucectl` will use the default `testAppDescription` from the [`xcuitest`](#xcuitest) level.

```yaml
suites:
  - testApp: ./apps/SwagLabsMobileAppUITests-Runner.app
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

Request a specific device for this test suite by its ID. You can look up device IDs on device selection pages or by using our [Get Devices API request](/dev/api/rdc/#get-devices).

```yaml
        id: iPhone_11_14_5_real_us
```

---

#### `name`

<p><small>| OPTIONAL | STRING |</small></p>

Find a device for this test suite that matches the device name or portion of the name ([Dynamic Device Allocation](/mobile-apps/supported-devices/#dynamic-device-allocation)), which may provide a larger pool of available devices of the type you want.

```yaml title="Use Complete Name"
      - name: iPhone 11
```

```yaml title="Use Dynamic Allocation"
      - name: iPhone.*
```

---

#### `platformVersion`

<p><small>| MANDATORY <span className="sauceDBlue">for Virtual Devices</span> | OPTIONAL <span className="sauceDBlue">for Real Devices</span> | STRING |</small></p>

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
```yaml
        platformVersion: 14.3

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

Instructs `saucectl` to run all classes for the suite _except_ those specified here.

```yaml
    notClass:
      - SwagLabsMobileAppUITests.SwagLabsFlow/testCompleteFlow
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
