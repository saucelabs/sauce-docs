---
id: yaml
title: Configuring Your Chrome DevTools Recordings
sidebar_label: YAML Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`saucectl` relies on a YAML specification file to determine exactly which recordings to replay and how. To customize `saucectl` to replay your Chrome DevTools Recordings, simply modify the properties of the YAML file accordingly. This page defines each of the configuration properties specific to running Chrome DevTools recordings.

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
https://github.com/saucelabs/saucectl-replay-example/blob/main/.sauce/config.yml
```

Each of the properties supported for replaying Chrome DevTools recordings through `saucectl` is defined below.

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
kind: puppeteer-replay
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

The parent property containing all settings related to how Jobs are run and identified in the Sauce Labs platform.

```yaml
sauce:
  region: us-west-1
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

Specifies on which Sauce Labs data center jobs will run. Valid values are: `us-west-1` or `eu-central-1`.

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

The set of properties that allows you to provide additional information about your project that helps you distinguish it in the various environments in which it is used and reviewed, and also helps you apply filters to easily isolate Jobs based on metrics that are meaningful to you, as shown in the following example:

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

Sets the maximum number of suites to execute at the same time. If the config defines more suites than the max, excess suites are queued and run in order as each suite completes.

:::caution
Set this value to equal or less than your Sauce Labs concurrency allowance, as setting a higher value may result in jobs dropped by the server.
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

`saucectl` supports using [Sauce Connect](/secure-connections/sauce-connect-5/) to establish a secure connection with Sauce Labs. To do so, launch a tunnel, and then provide the name and owner (if applicable) in this property.

```yaml
sauce:
  tunnel:
    name: your_tunnel_name
    owner: tunnel_owner_username
```

:::caution
[Only certain HTTP(S) ports](/secure-connections/sauce-connect-5/guides/localhost-proxying/#special-cases) are proxied by the tunnel when accessing localhost.
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

Identifies the Sauce Labs user who created the specified tunnel, which is required if the user running the job did not create the tunnel.

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

Sets the visibility level of Jobs on Sauce Labs. If unspecified or empty, `team` visibility will be applied. Valid values are:

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

## `reporters`

<p><small>| OPTIONAL | OBJECT |</small></p>

Configures additional reporting capabilities provided by `saucectl`.

```yaml
reporters:
  json:
    enabled: true
    filename: saucectl-report.json
    webhookURL: https://my-webhook-url
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

### `json`

<p><small>| OPTIONAL | OBJECT |</small></p>

The JSON reporter gathers Job results and combines them into a single report.

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

The JSON reporter gathers Job results, combines them into a single report and sends an HTTP POST request with the JSON payload to the specified webhook URL.

```yaml
reporters:
  json:
    webhookURL: https://my-webhook-url
```

---

#### `filename`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the report filename. Defaults to "saucectl-report.json".

```yaml
reporters:
  json:
    filename: saucectl-report.json
```

---

## `artifacts`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies how to manage job artifacts, such as logs, videos, and screenshots.

```yaml
artifacts:
  cleanup: true
  download:
    when: always
    match:
      - "*"
    directory: ./artifacts/
```

---

### `cleanup`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

When set to `true`, all contents of the specified download directory are deleted before downloading new artifacts.

```yaml
artifacts:
  cleanup: true
```

---

### `retain`

<p><small>| OPTIONAL | OBJECT |</small></p>

Define directories to archive and retain as a test asset at the end of a test run. Archived test assets can
be downloaded automatically using the `download` configuration, via the 
[REST API](https://docs.saucelabs.com/dev/api/jobs/#get-a-job-asset-file), or through the test details page.

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

Specifies the settings related to downloading artifacts.

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

## `suites`

<p><small>| REQUIRED | OBJECT |</small></p>

The set of properties providing details about the suites to run. May contain multiple suite definitions. See the full [example config](#example-configuration) for an illustration of multiple suite definitions.

```yaml
suites:
  - name: "getting some coffee"
    recordings: [ "recordings/coffee-cart.json" ]
    platform: "Windows 11"
    timeout: 5m
```

---

### `name`

<p><small>| REQUIRED | STRING |</small></p>

The name of the test suite, which will be reflected in the results and related artifacts.

```yaml
suites:
  - name: "saucy test"
```

---

### `platform`

<p><small>| OPTIONAL | STRING |</small></p>

A specific operating system and version on which to run the specified recordings. Defaults to a platform that is supported by `saucectl`.

```yaml
suites:
  - name: "getting some coffee"
    platform: "Windows 11"
```

---

### `recordings`

<p><small>| REQUIRED | STRING/ARRAY |</small></p>

One or more paths to the Chrome DevTools JSON recordings to run for this suite. Regex values are supported to indicate all files of a certain type or in a certain directory, etc.

```yaml
suites:
  - name: "getting some coffee"
    recordings:
      - "recordings/*.json"
```

---

### `browserName`

<p><small>| OPTIONAL | STRING |</small></p>

The name of the browser in which to run this test suite. Defaults to `googlechrome`, which is currently the only supported browser.

```yaml
suites:
  - name: "getting some coffee"
    browserName: "googlechrome"
```

---

### `browserVersion`

<p><small>| OPTIONAL | STRING |</small></p>

The version of the browser in which to run this suite. Defaults to `latest`.

```yaml
suites:
  - name: "getting some coffee"
    browserVersion: "latest"
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
  - name: "getting some coffee"
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
