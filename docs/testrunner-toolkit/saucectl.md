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


### `-a, --accessKey`
<p><small>| OPTIONAL | STRING |</small></p>

The authentication access key associated with the Sauce Labs user account making this request. If you have not set your authentication credentials as environment parameters or generated a `credentials.yml` file, this value is required.

---

### `--app`
<p><small>| OPTIONAL | STRING | XCUITEST/ESPRESSO ONLY |</small></p>

The path to a valid mobile application to test.

---

### `--artifacts.download.when`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

* `always`: Always download artifacts.
* `never`: Never download artifacts.
* `pass`: Download artifacts for passing suites only.
* `fail`: Download artifacts for failed suites only. (default value)

---

### `-b, --browserName`
<p><small>| REQUIRED | STRING | WEB-APP ONLY |</small></p>

The name of the browser in which to run tests.

---

### `--cypress.config`
<p><small>| REQUIRED | STRING | CYPRESS ONLY |</small></p>

The file path to the Cypress configuration file (typically `cypress.json`).

---

### `--device`
<p><small>| OPTIONAL | STRING | XCUITEST/ESPRESSO ONLY |</small></p>

Find a real device for this test matching the device name or portion of the name provided. Use the [Get Devices API Request](https://docs.saucelabs.com/dev/api/rdc#get-devices) for a list of supported real devices in your region.

---

### `--emulator`
<p><small>| OPTIONAL | STRING | ESPRESSO ONLY |</small></p>

The name of the virtual device emulator for the test. Check the list of [supported virtual devices](https://app.saucelabs.com/live/web-testing/virtual) for valid names.

---

### `-f, --framework`
<p><small>| REQUIRED | STRING |</small></p>

The framework for which this configuration is intended.

---

### `-v, --frameworkVersion`
<p><small>| REQUIRED | STRING | WEB APPS ONLY |</small></p>

The version of the framework that is compatible with the tests defined in this configuration.

---

### `-h, --help`

Usage information for the `init` command.

---

### `-p, --platformName`
<p><small>| OPTIONAL | STRING | WEB APPS ONLY |</small></p>

A specific operating system and version on which to run the specified browser and test suite. Defaults to a platform that is supported by `saucectl` for the specified browser.

---

### `-r, --region`
<p><small>| REQUIRED | STRING |</small></p>

Specifies the Sauce Labs data center through which tests will run. Valid values are: `us-west-1` (default) or `eu-central-1`.

---

### `-t, --testApp`
<p><small>| REQUIRED | STRING | XCUITEST/ESPRESSO ONLY |</small></p>

The path to the mobile testing application.

---

### `-u, --username`
<p><small>| OPTIONAL | STRING |</small></p>

A valid Sauce Labs user account. If you have not set your authentication credentials as environment parameters or generated a `credentials.yml` file, this value is required.

---


## `$ saucectl configure [flags]`

Allows you to provide your [Sauce Labs credentials]((https://app.saucelabs.com/user-settings) for the purpose of generating a `credentials.yml` file that `saucectl` can access to automatically authenticate commands without requiring manual authentication. The `credentials.yml` file is created in a `'sauce` folder in your `saucectl` installation root.

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

### `-a, --accessKey`
<p><small>| REQUIRED | STRING |</small></p>

The authentication access key for the Sauce Labs user account interacting with `saucectl`.

---

### `-u, --username`
<p><small>| REQUIRED | STRING |</small></p>

The valid Sauce Labs user account that will be interacting with `saucectl`.

---


## `$ saucectl run [flags]`

Executes tests according to the environment, framework, and test suite specifications defined in the [configuration file](/testrunner-toolkit/configuration).

```bash
saucectl run
```

### `--artifacts.download.directory`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded.

```bash
saucectl run --artifacts.download.directory ./artifacts
```
---

### `--artifacts.download.match`
<p><small>| OPTIONAL | STRING/ARRAY |</small></p>

Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character `*`.

```bash
saucectl run --artifacts.download.match console.log,another.log
```
---

### `--artifacts.download.when`
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

### `--build`
<p><small>| OPTIONAL | STRING |</small></p>

Associates the tests with a build.

```bash
saucectl run --build myBuildID
```
---

### `-ccy, --concurrency`
<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the maximum number of suites to execute at the same time. If the test defines more suites than the max, excess suites are queued and run in order as each suite completes.

:::caution
For tests running on Sauce, set this value to equal or less than your Sauce concurrency allowance, as setting a higher value may result in jobs dropped by the server.
:::

```bash
saucectl run --ccy 2
```
---

### `-c, --config`
<p><small>| OPTIONAL | FILEPATH |</small></p>

Specify an alternative configuration file to the default `.sauce/config.yml` for this execution.

```bash
saucectl run -c ./path/to/{config-file}.yml
```

:::note YAML Required
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax. If you are less comfortable with YAML, any of a wide variety of free online YAML/JSON validator tools may be helpful.
:::
---

### `--env`
<p><small>| OPTIONAL | KEY=VALUE |</small></p>

An environment variable key value pair that may be referenced in the tests executed by this command. Expanded environment variables are supported.

```bash
saucectl run --env <key>=value1> --env <key2>=<value2> ...
```
---

### `-r, --region`
<p><small>| REQUIRED | STRING |</small></p>

Specifies the Sauce Labs data center through which tests will run. Valid values are: `us-west-1` (default) or `eu-central-1`.

```bash
saucectl run --region use-west-1
```
---

### `--suite`
<p><small>| OPTIONAL | STRING |</small></p>

Specifies a test suite to execute by name.

```bash
saucectl run --suite <suite_name>
```
---

### `--tags`
<p><small>| OPTIONAL | LIST |</small></p>

A keyword that may help you distinguish the test in Sauce Labs, and also helps you apply filters to easily isolate tests based on metrics that are meaningful to you.

```bash
saucectl run --tags e2e,team2
```
---

### `--timeout`
<p><small>| OPTIONAL | DURATION |</small></p>

Sets a limit (in seconds or minutes) for how long `saucectl` can run this test (no limit by default).

```bash
saucectl run --timeout 10s
saucectl run --timeout 30m
```
---

### `--tunnel-id`
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
