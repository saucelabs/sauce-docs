---
id: run
title: saucectl run
sidebar_label: saucectl run
---

Execute framework-agnostic tests using the [`saucectl`](/dev/cli/saucectl) test orchestrator.

## Usage

```bash
$ saucectl run [OPTIONS]
```

## Extended Description

Execute tests according to the environment, framework, and test suite specifications defined in your [configuration file](/dev/cli/saucectl/configure) or via command line options described in this document.

## Options Summary

<table id="table-cli">
  <thead>
    <tr>
      <th width="30%">Key</th>
      <th width="10%">Shorthand</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td><span className="t-cli"><a href="#--artifactscleanup">--artifacts.cleanup</a></span></td>
     <td></td>
     <td>Clear the artifacts directory before downloading new test data.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--artifactsdownloaddirectory">--artifacts.download.directory</a></span></td>
     <td></td>
     <td>A local directory to which test assets are downloaded.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--artifactsdownloadmatch">--artifacts.download.match</a></span></td>
     <td></td>
     <td>Which asset files to download.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--artifactsdownloadwhen">--artifacts.download.when</a></span></td>
     <td></td>
     <td>Criteria for downloading assets.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--async">--async</a></span></td>
     <td></td>
     <td>Launch tests without waiting for preceding test results.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--build-string">--build</a></span></td>
     <td></td>
     <td>Add a build reference to your tests.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--ccy">--ccy</a></span></td>
     <td></td>
     <td>Maximum tests to run concurrently.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--config">--config</a></span></td>
     <td><span className="t-cli">-c</span></td>
     <td>Alternate location of the configuration YAML file.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--dry-run">--dry-run</a></span></td>
     <td></td>
     <td>Simulate a test run without running tests.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--env">--env</a></span></td>
     <td><span className="t-cli">-e</span></td>
     <td>Define environment variables.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--fail-fast">--fail-fast</a></span></td>
     <td></td>
     <td>Stop suite execution after first failure.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--help">--help</a></span></td>
     <td><span className="t-cli">-h</span></td>
     <td>Usage information for the <code>run</code> command.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--launch-order">--launch-order</a></span></td>
     <td></td>
     <td>Modify the execution order of suites.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--live-logs">--live-logs</a></span></td>
     <td></td>
     <td>Tail the live log output from a running Sauce Orchestrate container.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--no-auto-tagging">--no-auto-tagging</a></span></td>
     <td></td>
     <td>Disable the automatic tagging of jobs with metadata, such as CI or Git information.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--no-color">--no-color</a></span></td>
      <td></td>
      <td>Disable colored console output.</td>
     </tr>
    <tr>
     <td><span className="t-cli"><a href="#--region">--region</a></span></td>
     <td><span className="t-cli">-r</span></td>
     <td>Sauce Labs target data center.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--reportersjsonenabled">--reporters.json.enabled</a></span></td>
     <td></td>
     <td>Toggles saucectl's JSON test result reporting on/off.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--reportersjsonfilename">--reporters.json.filename</a></span></td>
     <td></td>
     <td>Specifies the report filename. (default "saucectl-report.json").</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--reportersjsonwebhookurl">--reporters.json.webhookURL</a></span></td>
     <td></td>
     <td>Specifies the webhook URL. When saucectl test is finished, it'll send a HTTP POST payload to the configured webhook URL.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--reportersjunitenabled">--reporters.junit.enabled</a></span></td>
     <td></td>
     <td>Toggles saucectl's own junit reporting on/off.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--reportersjunitfilename">--reporters.junit.filename</a></span></td>
     <td></td>
     <td>Specifies the report filename. (default "saucectl-report.xml").</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--retries">--retries</a></span></td>
     <td></td>
     <td>Number of times to rerun a failed test suite.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--root-dir">--root-dir</a></span></td>
     <td></td>
     <td>Specifies the project directory. Not applicable to mobile frameworks. (default ".")</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--sauceignore">--sauceignore</a></span></td>
     <td></td>
     <td>Specifies the path to the .sauceignore file. (default ".sauceignore")</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--select-suite">--select-suite</a></span></td>
     <td></td>
     <td>Execute a particular test suite.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--show-console-log">--show-console-log</a></span></td>
     <td></td>
     <td>Include the console.log contents in the output for all tests.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--tags">--tags</a></span></td>
     <td></td>
     <td>Add reference tags to your tests.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--timeout">--timeout</a></span></td>
      <td><span className="t-cli">-t</span></td>
     <td>Global timeout that limits how long saucectl can run in total. Supports duration values like '10s', '30m' etc. (default: no timeout).</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--tunnel-name">--tunnel-name</a></span></td>
     <td></td>
     <td>Use a running Sauce Connect tunnel to test.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--tunnel-owner">--tunnel-owner</a></span></td>
     <td></td>
     <td>The tunnel owner, if it is not the testing account.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--tunnel-timeout">--tunnel-timeout</a></span></td>
     <td></td>
     <td>How long to wait for the specified tunnel to be ready. Supports duration values like '10s', '30m' etc. (default: 30s)</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--upload-timeout">--upload-timeout</a></span></td>
     <td></td>
     <td>Set a max upload duration.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--verbose">--verbose</a></span></td>
     <td></td>
     <td>Enable detailed output.</td>
    </tr>
  </tbody>
</table>

## Options Details

### <span className="cli">--artifacts.cleanup</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

When set to `true`, all contents of the specified download directory are cleared before downloading any new assets from the current test.

```bash
saucectl run --artifacts.cleanup true
```

</div>

### <span className="cli">--artifacts.download.directory</span>

<div className="cli-desc">
<p><small>| OPTIONAL | PATH |</small></p>

Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded. Must be set in conjunction with `--artifacts.download.match` and `--artifacts.download.when`.

```bash
saucectl run --artifacts.download.directory ./artifacts
```

</div>

### <span className="cli">--artifacts.download.match</span>

<div className="cli-desc">
<p><small>| OPTIONAL | FILE/LIST |</small></p>

Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character `*`. Must be set in conjunction with `--artifacts.download.directory` and `--artifacts.download.when`.

```bash
saucectl run --artifacts.download.match console.log,another.log
```

</div>

### <span className="cli">--artifacts.download.when</span>

<div className="cli-desc">
<p><small>| OPTIONAL | ENUM |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only.

Must be set in conjunction with `--artifacts.download.directory` and `--artifacts.download.match`.

```bash
saucectl run --artifacts.download.when always
```

</div>

### <span className="cli">--async</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Allows you to launch tests without waiting for results of the preceding tests. This option can be helpful when relying on a CI tool to automatically launch tests. This option does not require a value; including it inline sets it to `true`.

</div>

### <span className="cli">--build</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Associates the tests with a build to support easy filtering of related test results in the Sauce Labs UI.

```bash
saucectl run --build myBuildID
```

</div>

### <span className="cli">--ccy</span>

<div className="cli-desc">
<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the maximum number of suites to execute at the same time. If the config defines more suites than the max, excess suites are queued and run in order as each suite completes.

:::caution
For tests running on Sauce, set this value to equal or less than your Sauce concurrency allowance, as setting a higher value may result in jobs dropped by the server.
:::

```bash
saucectl run --ccy 2
```

</div>

### <span className="cli">--config</span>

<div className="cli-desc">
<p><small>| OPTIONAL | FILEPATH |</small></p>

Specify an alternative configuration file to the default `.sauce/config.yml` for this execution.

**Shorthand:** `-c <path>`

```bash
saucectl run -c ./path/to/{config-file}.yml
```

:::note YAML Required
While you can use multiple files of different names or locations to specify your configurations, each file must be a `*.yml` and follow the `saucectl` syntax. If you are less comfortable with YAML, any of a wide variety of free online YAML/JSON validator tools may be helpful.
:::

</div>

### <span className="cli">--dry-run</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Simulate a test run without actually running any tests. This option does not require a value; including it inline sets it to `true`.

```bash
saucectl run --dry-run
```

</div>

### <span className="cli">--env</span>

<div className="cli-desc">
<p><small>| OPTIONAL | KEY=VALUE |</small></p>
An environment variable key value pair that may be referenced in the tests executed by this command. Expanded environment variables are supported.

```bash
saucectl run --env <key1>=<value1> --env <key2>=<value2> ...
```

#### Supported Frameworks

<table id="env">
  <thead>
    <tr>
      <th width="40%">Frameworks and Products</th>
      <th>Supported?</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cypress</td>
      <td>✅</td>
      <td><span className="sauceGreen">Virtual Devices Only</span></td>
    </tr>
    <tr>
      <td>Playwright</td>
      <td>✅</td>
      <td><span className="sauceGreen">Virtual Devices Only</span></td>
    </tr>
     <tr>
      <td>TestCafe</td>
      <td>✅</td>
      <td><span className="sauceGreen">Virtual Devices Only</span></td>
    </tr>
     <tr>
      <td>Puppeteer Replay</td>
      <td>❌</td>
      <td></td>
    </tr>
    <tr>
      <td>Espresso</td>
      <td>❌</td>
      <td></td>
    </tr>
     <tr>
      <td>XCUITest</td>
      <td>✅</td>
      <td><span className="sauceGreen">Virtual Devices Only</span></td>
    </tr>
    <tr>
      <td>API Testing</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>Sauce Orchestrate</td>
      <td>✅</td>
      <td></td>
    </tr>
  </tbody>
</table>

</div>

### <span className="cli">--fail-fast</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Stops suites after the first failure. This will not interrupt suites that have been started already. This option does not require a value; including it inline sets it to true.

```bash
saucectl run --fail-fast
```

</div>

### <span className="cli">--help</span>

<div className="cli-desc">

Usage information for the `run` command.

**Shorthand:** `-h`

</div>

### <span className="cli">--launch-order</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Modify the execution order of suites.

Supported value `fail rate`: Jobs with the highest failure rate are prioritized for launch.

```bash
saucectl run --launch-order="fail rate"
```

</div>

### <span className="cli">--live-logs</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">Sauce Orchestrate Only</span> |</small></p>

Tail the live log output from a running Sauce Orchestrate container.

```bash
saucectl run --live-logs
```

</div>

### <span className="cli">--no-auto-tagging</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Disables the automatic tagging of jobs with metadata, such as CI or Git information.

```bash
saucectl run --no-auto-tagging
```

</div>

### <span className="cli">--no-color</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Disables colorized console output for saucectl. This is particularly useful for CI environments that cannot display ANSI color codes, which may render the log output illegible. This option does not require a value; including it inline sets it to `true`.

```bash
saucectl run --no-color
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

Specifies the Sauce Labs data center through which tests will run. Valid values are: `us-west-1`, `us-east-4` or `eu-central-1`.

**Shorthand:** `-r`

```bash
saucectl run --region us-west-1
```

</div>

### <span className="cli">--reporters.json.enabled</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Toggles saucectl's JSON test result reporting on/off. This only affects the reports that saucectl itself generates as a summary of your tests.

```bash
saucectl run --reporters.json.enabled=true
```

</div>

### <span className="cli">--reporters.json.filename</span>

<div className="cli-desc">
<p><small>| OPTIONAL | FILEPATH |</small></p>

Sets the report filename, with the default being `saucectl-report.json`.

To use this option, make sure to activate the JSON reporter by including `--reporters.json.enabled=true`.

```bash
saucectl run --reporters.json.enabled=true --reporters.json.filename="path/to/my_report.json"
```

</div>

### <span className="cli">--reporters.json.webhookURL</span>

<div className="cli-desc">
<p><small>| OPTIONAL | URL |</small></p>

Specifies the webhook URL. When saucectl test is finished, it'll send an HTTP POST payload to the configured webhook URL.

To use this option, make sure to activate the JSON reporter by including `--reporters.json.enabled=true`.

```bash
saucectl run --reporters.json.enabled=true --reporters.json.webhookURL="my_webhook_url"
```

</div>

### <span className="cli">--reporters.junit.enabled</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Toggles saucectl's own junit reporting on/off. This only affects the reports that saucectl itself generates as a summary of your tests. Each Job in Sauce Labs has an independent report regardless.

```bash
saucectl run --reporters.junit.enabled=true
```

</div>

### <span className="cli">--reporters.junit.filename</span>

<div className="cli-desc">
<p><small>| OPTIONAL | FILEPATH |</small></p>

Sets the report filename, with the default being `saucectl-report.xml`.

To use this option, make sure to activate the JUnit reporter by including `--reporters.junit.enabled=true`.

```bash
saucectl run --reporters.junit.enabled=true --reporters.junit.filename="path/to/my_report.xml"
```

</div>

### <span className="cli">--retries</span>

<div className="cli-desc">
<p><small>| OPTIONAL | INTEGER |</small></p>

Instructs `saucectl` to rerun failed tests this many times.

```bash
saucectl run --retries 2
```

</div>

### <span className="cli">--root-dir</span>

<div className="cli-desc">
<p><small>| OPTIONAL | FILEPATH |</small></p>

Specifies the project directory. Not applicable to mobile frameworks. Default: `.`.

```bash
saucectl run --root-dir="path/to/my/root_dir"
```

</div>

### <span className="cli">--sauceignore</span>

<div className="cli-desc">
<p><small>| OPTIONAL | FILEPATH |</small></p>

Specifies the path to the .sauceignore file. Default: `.sauceignore`.

```bash
saucectl run --sauceignore="path/to/my/.sauceignore"
```

</div>

### <span className="cli">--select-suite</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies a test suite to execute by name rather than all suites defined in the config file.

```bash
saucectl run --select-suite <suite_name>
```

:::note Formerly `--suite`
Versions of saucectl before v0.52.4 use the option `--suite` instead.
:::

</div>

### <span className="cli">--show-console-log</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Includes the contents of the suite's `console.log` in the output of the command regardless of the test results. By default, the console log contents are shown for failed test suites only. This option does not require a value; including it inline sets it to `true`.

```bash
saucectl run --show-console-log
```

</div>

### <span className="cli">--tags</span>

<div className="cli-desc">
<p><small>| OPTIONAL | LIST |</small></p>

Keywords that may help you distinguish the test in Sauce Labs, and also help you apply filters to easily isolate tests based on metrics that are meaningful to you.

```bash
saucectl run --tags e2e,team2
```

</div>

### <span className="cli">--timeout</span>

<div className="cli-desc">
<p><small>| OPTIONAL | DURATION |</small></p>

Sets a limit (in seconds or minutes) for how long `saucectl` can run this test (no limit by default).

:::caution Real Device Max Duration
When setting the timeout values for your suites, consider that native framework tests on real devices enforce a maximum test duration limit of 60 minutes.
:::

```bash
saucectl run --timeout 10s
saucectl run --timeout 30m
```

</div>

### <span className="cli">--upload-timeout</span>

<div className="cli-desc">
<p><small>| OPTIONAL | DURATION |</small></p>

Uploads timeout that limits how long saucectl will wait for an upload to finish. Supports duration values like '10s' '30m' etc. (default: 5m)

```bash
saucectl run --upload-timeout 10s
saucectl run --upload-timeout 30m
```

</div>

### <span className="cli">--tunnel-name</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies an active [Sauce Connect](/secure-connections) tunnel to establish a secure connection to run this test on Sauce Labs.

:::note
Replaces the former `--tunnel_id` option, which is deprecated.
:::

```bash
saucectl run --tunnel-name my-tunnel
```

</div>

### <span className="cli">--tunnel-owner</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Identifies the Sauce Labs user who created the specified tunnel, which is required if the user running the tests did not create the tunnel.

:::note
Replaces the former `--tunnel-parent` option, which is deprecated.
:::

```bash
saucectl run --tunnel-name not-my-tunnel --tunnel-owner another.sauce.username
```

</div>

### <span className="cli">--tunnel-timeout</span>

<div className="cli-desc">
<p><small>| OPTIONAL | DURATION |</small></p>

How long to wait for the specified tunnel to be ready. Supports duration values like '10s', '30m' etc. (default: 30s)

```bash
saucectl run --tunnel-name who-knows-when-ready --tunnel-timeout 1m
```

</div>

### <span className="cli">--verbose</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Enables detailed output during the test run in order to facilitate troubleshooting potential authentication, connection, and/or container issues. This option does not require a value; including it inline sets it to `true`.

```bash
saucectl run --verbose
```

</div>
