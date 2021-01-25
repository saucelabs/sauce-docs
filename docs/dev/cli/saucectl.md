---
id: saucectl
title: Sauce CTL
sidebar_label: Sauce CTL
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

```bash
saucectl configure
```

This command sets your [Sauce Labs authentication credentials](https://app.saucelabs.com/user-settings) and generates a `credentials.yml` file. Please refer to [the installation page](/testrunner-toolkit/installation#connecting-to-sauce-labs) for further information.

### `new`

```bash
saucectl new
```

This command will ask you to choose one of the frameworks: [Puppeteer](https://github.com/puppeteer/puppeteer), [Playwright](https://github.com/microsoft/playwright), [TestCafe](https://github.com/DevExpress/testcafe), and [Cypress](https://github.com/cypress-io/cypress).

This command generates a `./sauce/config.yml` file, a test directory, and an example test.

### `run`

```bash
saucectl run
```

This command executes tests based on information in the configuration file ([`.sauce/config.yml`](/testrunner-toolkit/configuration)).

## Flags

### `ccy`

<p><small><Highlight color="#25c2a0">cypress only</Highlight> <Highlight color="#1877F2">beta</Highlight> </small></p>

```bash
saucectl run --test-env sauce --ccy 2
```

Using `--ccy` allows you to increase your Sauce Labs VM concurrency when [running tests remotely on the Sauce Labs Cloud](/testrunner-toolkit/running-tests#test-on-sauce-labs).

> Concurrency with `saucectl` is tied to the test `suites` field in your `.sauce/config.yml`. 
>
> For example if you have ten `.spec` files split across two test `suites`, and you set `--ccy` to `10`, the max concurrency is `2`.

### `ci-build-id`

```sh
saucectl run --ci-build-id <value>
```

Using the `--ci-build-id` flag will override the build ID that is otherwise determined
based on the CI provider. The config file hash will still be used in addition to this
provided CI build ID.

### `config`

```bash
saucectl run --config <path>
```

Using the `--config` flag will run the tests specified by that config file.

### `env`

```bash
saucectl run --env <key>=value1> --env <key2>=<value2> ...
```

Using the `--env` flag will define environment variables that are then available for use by the test framework.

### `region`

```bash
saucectl run --region <region>
```

Using the --region flag will set the Sauce Labs region for the test execution. The region corresponds to the available regions at [saucelabs.com](https://app.saucelabs.com) and affects where your job information and assets are going to be stored.

### `suite`

```bash
saucectl run --suite <suite_name>
```

Using the `--suite` flag will only run specified suite by name.

### `test-env`

<p><small><Highlight color="#25c2a0">cypress only</Highlight> <Highlight color="#1877F2">beta</Highlight> </small></p>

```bash
saucectl run --test-env <sauce | docker>
```

Using the `--test-env` flag allows you to toggle testing locally via containers (`docker`), or remotely via Sauce Labs VMs (`sauce`).

### `timeout`

```bash
saucectl run --timeout <seconds>
```

Using the `--timeout` flag will set the test timeout for the test runs [Testrunner framework](testrunner-toolkit/running-tests.md#automation-framework-examples).

### `tunnel-id`

```bash
saucectl run --tunnel-id <tunnel-id>
```

Using the `--tunnel-id` flag will set the tunnel id for the test runs [Testrunner framework](testrunner-toolkit/running-tests.md#automation-framework-examples).

### `tunnel-parent`

```bash
saucectl run --tunnel-parent <tunnel-parent>
```

Using the `--tunnel-parent` flag will set the tunnel parent for the test runs [Testrunner framework](testrunner-toolkit/running-tests.md#automation-framework-examples).

### `verbose`

```bash
saucectl run --verbose
```

Using the `--verbose` flag allows you to troubleshoot potential authentication, connection, and/or container issues.

## Licensing

`saucectl` is licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/saucelabs/saucectl/blob/master/LICENSE) for the full license text.
