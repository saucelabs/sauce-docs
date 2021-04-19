---
id: saucectl
title: Sauce CTL
sidebar_label: CLI Reference
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

This page provides command line references for `saucectl`, the CLI tool used with [Testrunner Toolkit](testrunner-toolkit.md). 

> Please refer to the repository [README](https://github.com/saucelabs/saucectl) for installation, development, and contribution requirements.

## Commands

### `configure`

__Description__: Sets your [Sauce Labs authentication credentials](https://app.saucelabs.com/user-settings) and generates a `credentials.yml` file. Please refer to [the installation page](/testrunner-toolkit/installation#connecting-to-sauce-labs) for further information.

__Example__:
```bash
saucectl configure
```

### `new`

__Description__: Prompts you to choose one of the [supported frameworks](/testrunner-toolkit#supported-frameworks-and-browsers). Based on the chosen framework, this command also generates:

* a configuration file (e.g. `./sauce/config.yml`) 
* a test directory (e.g. `cypress/`)
* an example test (e.g. `example.test.js`)

__Example__:
```bash
saucectl new
```

### `run`

__Description__: Executes tests based on information in the configuration file ([`.sauce/config.yml`](/testrunner-toolkit/configuration)).

__Example__:

```bash
saucectl run
```

## Flags

### `ccy`

__Description__: Increases your Sauce Labs VM concurrency when [running tests remotely on the Sauce Labs Cloud](/testrunner-toolkit/running-tests#test-on-sauce-labs).
                                                                                                                                                                       

__Example__:
```bash
saucectl run --ccy 2
```

> __NOTE__: Concurrency with `saucectl` is tied to [the test `suites` field](/testrunner-toolkit/configuration#suites) in your `.sauce/config.yml`. 
> For example if you have ten `.spec` files split across two tests `suites`, and you set `--ccy` to `10`, the max concurrency is `2`.

### `ci-build-id`

__Description__: Overrides the build ID that is otherwise determined based on the CI provider. The config file hash will still be used in addition to this provided CI build ID.

__Example__:
```sh
saucectl run --ci-build-id <value>
```

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

### `test-env`

<p><small>supported frameworks: <Highlight color="#25c2a0">cypress</Highlight></small></p>

__Description__: Specifies the test execution environment:
* test locally with `docker` containers 
* test remotely on `sauce` virtual machines

__Example__:
```bash
saucectl run --test-env <sauce | docker>
```

### `timeout`

__Description__: Sets the timeout for test runs.

__Example__:
```bash
saucectl run --timeout <seconds>
```

### `tunnel-id`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small></p>

__Description__: Sets the tunnel id for a given test run and the chosen [Testrunner framework](testrunner-toolkit/running-tests.md#automation-framework-examples).

__Example__:
```bash
saucectl run --tunnel-id <tunnel-id>
```

### `tunnel-parent`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small></p>

__Description__: Sets the tunnel parent for a given test run and the chosen [Testrunner framework](testrunner-toolkit/running-tests.md#automation-framework-examples).

__Example__:
```bash
saucectl run --tunnel-id <tunnel-id> --tunnel-parent <tunnel-parent>
```

> __NOTE__: This flag only works in conjunction with the `tunnel-id` flag.


### `dry-run`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small></p>

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