---
id: saucectl
title: saucectl CLI
sidebar_label: saucectl CLI
---

The `saucectl` command line interface orchestrates the relationship between your tests in your framework, and the rich parallelization, test history filtering, and analytics of Sauce Labs. This page defines each of the commands and flags available in the CLI to allow you to execute your tests with precision.

See [Installation and Setup](/testrunner-toolkit/installation) for installation options.


## `$ saucectl init [flags]`

A bootstrapping command to generate a configuration file for the framework of your choice in the format required by `saucectl`. Running the command with no parameters initiates interactive mode, prompting you for relevant property values iteratively. Alternatively, you can add supported parameters inline to specify the relevant property values.

In either case, the command generates a `.sauce/config.yml` folder and file in the location from which the command is run. If you have an existing project directory for your framework, it is advised that you run this command from the project root.

```bash title="Interactive Example"
$ saucectl init
12:13:20 INF Start Init Command
? Select region: us-west-1
? Select framework:  [Use arrows to move, type to filter]
> cypress
 playwright
 puppeteer
 testcafe
 espresso
 xcuitest
```

```bash title="Batch Example"
$ saucectl init -r us-west-1 -f cypress -b chrome
```

`saucectl` supports the following configuration flags as inline specifications.


### `--accessKey <string>`
<p><small>| OPTIONAL | STRING |</small></p>

The authentication access key associated with the Sauce Labs user account making this request. If you have not set your authentication credentials as environment parameters or generated a `credentials.yml` file, this value is required.

**Shorthand:** `-a <string>`

---

### `--app <string>`
<p><small>| OPTIONAL | STRING | XCUITEST/ESPRESSO ONLY |</small></p>

The path to a valid mobile application to test.

---

### `--artifacts.download.when <string>`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

* `always`: Always download artifacts.
* `never`: Never download artifacts.
* `pass`: Download artifacts for passing suites only.
* `fail`: Download artifacts for failed suites only. (default value)

---

### `--browserName <string>`
<p><small>| REQUIRED | STRING | WEB-APP ONLY |</small></p>

The name of the browser in which to run tests.

**Shorthand:** `-b <string>`

---

### `--cypress.config <string>`
<p><small>| REQUIRED | STRING | CYPRESS ONLY |</small></p>

The file path to the Cypress configuration file (typically `cypress.json`).

---

### `--device <string>`
<p><small>| OPTIONAL | STRING | XCUITEST/ESPRESSO ONLY |</small></p>

Find a real device for this test by matching a set of one or more device characteristics:

|Characteristic|Description|Example|
|---|---|---|
|`id`| Specify a device by its ID. Using this selection flag ignores all other characteristics and is not advised because availability of a specific device is uncertain and could cause your test to time out.| ```--device "id=HTC_U11_real_us"```|
|`name`|Find a device based on a partial name in order to increase likelihood of availability of similar devices.|```--device "name=HTC.*"```|
|`platformVersion`|Find a device based on its platform version.|```--device "platformVersion=8.0"```|
|`carrierConnectivity`|The selected device must be connected to a cellular network. |```--device "carrierConnectivity=true"```|
|`deviceType`|The selected device must be a particular type (`PHONE`, `TABLET`, or `ANY`).|```--device "deviceType=PHONE"```|
|`private`|The selected device must be private.|```--device "private=true"```|

You can specify a combination of device characteristics within this flag:

```bash
--device "name=HTC.*,platformVersion=8.0.0,carrierConnectivity=true"
```

---

### `--emulator <string>`
<p><small>| OPTIONAL | STRING | ESPRESSO ONLY |</small></p>

Specify a virtual device for the test by matching a set of one or more emulator characteristics.

|Characteristic|Description|Example|
|---|---|---|
|`name`|Specify all or part of the emulator name. [Supported VMD List](https://app.saucelabs.com/live/web-testing/virtual) |```--emulator "name=Android.*"```|
|`platformVersion`|Specify the emulator platform version.|```--emulator "platformVersion=7.1"```|
|`orientation`|Specify how the emulator should be oriented for the test (`portrait` or `landscape`). |```--emulator "orientation=portrait"```|

You can specify a combination of emulator characteristics within this flag:

```bash
--emulator "name=Samsung Galaxy S8 FHD GoogleAPI Emulator,platformVersion=7.1"
```

---

### `--framework <string>`
<p><small>| REQUIRED | STRING |</small></p>

The framework for which this configuration is intended.

**Shorthand:** `-f <string>`

---

### `--frameworkVersion <string>`
<p><small>| REQUIRED | STRING | WEB APPS ONLY |</small></p>

The version of the framework that is compatible with the tests defined in this configuration.

**Shorthand:** `-v <string>`

---

### `-h, --help`

Usage information for the `init` command.

---

### `--platformName <string>`
<p><small>| OPTIONAL | STRING | WEB APPS ONLY |</small></p>

A specific operating system and version on which to run the specified browser and test suite.

:::note
You can optionally specify `docker` here as the platform.
:::

**Shorthand:** `-p <string>`

---

### `--region <string>`
<p><small>| REQUIRED | STRING |</small></p>

Specifies the Sauce Labs data center through which tests will run. Valid values are: `us-west-1` (default) or `eu-central-1`.

**Shorthand:** `-r <string>`

---

### `--testApp <string>`
<p><small>| REQUIRED | STRING | XCUITEST/ESPRESSO ONLY |</small></p>

The path to the mobile testing application.

**Shorthand:** `-t <string>`

---

### `--username <string>`
<p><small>| OPTIONAL | STRING |</small></p>

A valid Sauce Labs user account. If you have not set your authentication credentials as environment parameters or generated a `credentials.yml` file, this value is required.

**Shorthand:** `-u <string>`

---


## `$ saucectl configure [flags]`

Allows you to provide your [Sauce Labs credentials]((https://app.saucelabs.com/user-settings) for the purpose of generating a `credentials.yml` file that `saucectl` can access to automatically authenticate commands without requiring manual authentication. The `credentials.yml` file is created in a `.sauce` folder in your  home directory.

:::note Environment Variable credentials prioritized
`saucectl` will also detect your credentials as [environment variables](/basics/environment-variables) if you have set them. In fact, if both exist, the environment variable values take precedence.
:::

You can run the `configure` command without flags, invoking it to prompt you for your credential values, or you can supply the values inline using the username and access key flags.

```bash title="Inline Example"
$ saucectl configure
Don't have an account? Signup here:
https://bit.ly/saucectl-signup

Already have an account? Get your username and access key here:
https://app.saucelabs.com/user-settings

? SauceLabs username tester.ninja
? SauceLabs access key 2a4a9x11-56b7-4d83-8f6o-b601bg67555e

You're all set!
```

```bash title="Interactive Example"
$ saucectl configure -u tester.ninja -a 2a4a9x11-56b7-4d83-8f6o-b601bg67555e
You're all set!
```

### `--accessKey <string>`
<p><small>| REQUIRED | STRING |</small></p>

The authentication access key for the Sauce Labs user account interacting with `saucectl`.

**Shorthand:** `-a <string>`

---

### `--username <string>`
<p><small>| REQUIRED | STRING |</small></p>

The valid Sauce Labs user account that will be interacting with `saucectl`.

**Shorthand:** `-u <string>`

---


## `$ saucectl run [flags]`

Executes tests according to the environment, framework, and test suite specifications defined in the [configuration file](/testrunner-toolkit/configuration).

```bash
saucectl run
```

### `--artifacts.download.directory <path>`
<p><small>| OPTIONAL | PATH |</small></p>

Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded.

```bash
saucectl run --artifacts.download.directory ./artifacts
```
---

### `--artifacts.download.match [list]`
<p><small>| OPTIONAL | STRING/LIST |</small></p>

Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character `*`.

```bash
saucectl run --artifacts.download.match console.log,another.log
```
---

### `--artifacts.download.when <string>`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

* `always`: Always download artifacts.
* `never`: Never download artifacts.
* `pass`: Download artifacts for passing suites only.
* `fail`: Download artifacts for failed suites only.

```bash
saucectl run --artifacts.download.when always
```
---

### `--build <string>`
<p><small>| OPTIONAL | STRING | VIRTUAL ONLY |</small></p>

Associates the tests with a build. This flag is not yet supported for mobile real device tests.

```bash
saucectl run --build myBuildID
```
---

### `--concurrency <int>`
<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the maximum number of suites to execute at the same time. If the test defines more suites than the max, excess suites are queued and run in order as each suite completes.

**Shorthand:** `-ccy`

:::caution
For tests running on Sauce, set this value to equal or less than your Sauce concurrency allowance, as setting a higher value may result in jobs dropped by the server.
:::

```bash
saucectl run --ccy 2
```
---

### `--config <path>`
<p><small>| OPTIONAL | FILEPATH |</small></p>

Specify an alternative configuration file to the default `.sauce/config.yml` for this execution.

**Shorthand:** `-c <path>`

```bash
saucectl run -c ./path/to/{config-file}.yml
```

:::note YAML Required
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax. If you are less comfortable with YAML, any of a wide variety of free online YAML/JSON validator tools may be helpful.
:::
---

### `--env <key=value>`
<p><small>| OPTIONAL | KEY=VALUE |</small></p>

An environment variable key value pair that may be referenced in the tests executed by this command. Expanded environment variables are supported.

```bash
saucectl run --env <key1>=value1> --env <key2>=<value2> ...
```
---

### `--region <string>`
<p><small>| REQUIRED | STRING |</small></p>

Specifies the Sauce Labs data center through which tests will run. Valid values are: `us-west-1` (default) or `eu-central-1`.

**Shorthand:** `-r <string>`

```bash
saucectl run --region use-west-1
```
---

### `--select-suite <string>`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies a test suite to execute by name.

```bash
saucectl run --select-suite <suite_name>
```

:::note Formerly `--suite <string>`
Versions of saucectl before v0.52.4 use the flag  `--suite` instead.
:::

---

### `--tags <tag1,tag2,...>`
<p><small>| OPTIONAL | LIST | VIRTUAL ONLY |</small></p>

A keyword that may help you distinguish the test in Sauce Labs, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you. This flag is not yet supported for mobile real device tests.

```bash
saucectl run --tags e2e,team2
```
---

### `--timeout <duration>`
<p><small>| OPTIONAL | DURATION |</small></p>

Sets a limit (in seconds or minutes) for how long `saucectl` can run this test (no limit by default).

```bash
saucectl run --timeout 10s
saucectl run --timeout 30m
```
---

### `--tunnel-id <string>`
<p><small>| OPTIONAL | STRING | <span class="highlight sauce-cloud">Sauce Cloud only</span> |</small></p>

Specifies an active [Sauce Connect](/testrunner-toolkit/configuration#sauce-connect) tunnel to establish a secure connection to run this test on Sauce Labs.

:::note Choose the Correct Tunnel Identifier
When you launch a tunnel, you can accept the tunnel identifier name that Sauce Labs generates for your account (e.g., `{SL-username}_tunnel_id`) or specify a name in the launch command:

```bash
bin/sc -u {SL-username} -k {SL-access_key} -i {tunnel_identifier}
```

This is the value `saucectl` expects as the `tunnel_id`, even though the Sauce Labs UI refers to this value as the `Tunnel Name`.
:::

```bash
saucectl run --tunnel-id <tunnel-id>
```
---

### `--dry-run`
<p><small>| OPTIONAL | BOOLEAN | <span class="highlight sauce-cloud">Sauce Cloud only</span> |</small></p>

Simulate a test run without actually running any tests. This flag does not require a value; including it inline sets it to `true`.

```bash
saucectl run --dry-run
```
---

### `--verbose`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Enables detailed output during the test run in order to facilitate troubleshooting potential authentication, connection, and/or container issues. This flag does not require a value; including it inline sets it to `true`.

```bash
saucectl run --verbose
```
