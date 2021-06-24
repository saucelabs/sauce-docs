---
id: saucectl
title: Sauce CTL
sidebar_label: CLI Reference
---

This page provides command line references for `saucectl`, the CLI tool used with [Testrunner Toolkit](testrunner-toolkit.md).

> Please refer to the repository [README](https://github.com/saucelabs/saucectl) for installation, development, and contribution requirements.

## Commands

### `configure`

__Description__: Sets your [Sauce Labs authentication credentials](https://app.saucelabs.com/user-settings) and generates a `credentials.yml` file. Please refer to [the installation page](/testrunner-toolkit/installation#connecting-to-sauce-labs) for further information.

__Example__:
```bash
saucectl configure
```

### `run`

__Description__: Executes tests based on information in the configuration file ([`.sauce/config.yml`](/testrunner-toolkit/configuration)).

__Example__:

```bash
saucectl run
```

## Flags

### `artifacts.download.directory`

__Description__: Specifies the location where to download test artifacts to.

__Example__:
```bash
saucectl run --artifacts.download.directory ./artifacts
```

### `artifacts.download.match`

__Description__: Specifies which test artifacts to download.

__Example__:
```bash
saucectl run --artifacts.download.match console.log,another.log
```

### `artifacts.download.when`

__Description__: Specifies when to download test artifacts (default "never"). Choose between `always`, `fail`, `never` and `pass`. 

__Example__:
```bash
saucectl run --artifacts.download.when always
```

### `build`

__Description__: Associates tests with a build.

__Example__:
```bash
saucectl run --build myBuildID
```

### `ccy`

__Description__: Increases your Sauce Labs VM concurrency when [running tests remotely on the Sauce Labs Cloud](/testrunner-toolkit/running-tests#test-on-sauce-labs).


__Example__:
```bash
saucectl run --ccy 2
```

> __NOTE__: Concurrency with `saucectl` is tied to [the test `suites` field](/testrunner-toolkit/configuration#suites) in your `.sauce/config.yml`.
> For example if you have ten `.spec` files split across two tests `suites`, and you set `--ccy` to `10`, the max concurrency is `2`.

### `config`

__Description__: Run tests from a specific configuration file.

__Shorthand__: `-c`

__Example__:
```bash
saucectl run --config </path/to/config.yml>
```

### `env`

__Description__: Defines environment variables that are available for use by the test framework.

__Example__:
```bash
saucectl run --env <key>=value1> --env <key2>=<value2> ...
```

### `region`

__Description__: Sets the Sauce Labs region for test execution. The region corresponds to the available region at [saucelabs.com](https://app.saucelabs.com) and affects where your job information and assets are going to be stored.

__Example__:
```bash
saucectl run --region <region>
```

### `suite`

__Description__: Specifies a test suite to execute by name.

__Example__:
```bash
saucectl run --suite <suite_name>
```

### `tags`

__Description__: Adds tags to tests.

__Example__:
```bash
saucectl run --tags e2e,team2
```

### `timeout`

__Description__: Sets the limit of how long saucectl can run in total (no limit by default).

__Example__:
```bash
saucectl run --timeout <duration>
saucectl run --timeout 10s
saucectl run --timeout 30m
```

### `tunnel-id`

<p><small><span class="highlight sauce-cloud">Sauce Cloud only</span></small></p>

__Description__: Sets the tunnel id for a given test run and the chosen [Testrunner framework](testrunner-toolkit/running-tests.md#automation-framework-examples).

__Example__:
```bash
saucectl run --tunnel-id <tunnel-id>
```

### `tunnel-parent`

<p><small><span class="highlight sauce-cloud">Sauce Cloud only</span></small></p>

__Description__: Sets the tunnel parent for a given test run and the chosen [Testrunner framework](testrunner-toolkit/running-tests.md#automation-framework-examples).

__Example__:
```bash
saucectl run --tunnel-id <tunnel-id> --tunnel-parent <tunnel-parent>
```

> __NOTE__: This flag only works in conjunction with the `tunnel-id` flag.


### `dry-run`

<p><small><span class="highlight sauce-cloud">Sauce Cloud only</span></small></p>

__Description__: Simulate a test run without actually running any tests.

__Example__:
```bash
saucectl run --dry-run
```

### `verbose`

__Description__: Use the `--verbose` flag to troubleshoot potential authentication, connection, and/or container issues.

__Example__:
```bash
saucectl run --verbose
```

## Licensing

`saucectl` is licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/saucelabs/saucectl/blob/master/LICENSE) for the full license text.
