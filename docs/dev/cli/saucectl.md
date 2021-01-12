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

This page provides information for `saucectl`, the command line interface of the Sauce Labs [Testrunner Toolkit](testrunner-toolkit.md).

## Development Requirements
 * [Git](https://git-scm.com/downloads)
 * [Go](https://golang.org/) (v1.14 or higher)
 * [Homebrew](https://brew.sh/) (v2.2.13 or higher)
 
## Install
 
Download `saucectl` from [GitHub](https://github.com/saucelabs/saucectl):

```sh
$ git clone https://github.com/saucelabs/saucectl.git
```

Run the following `make` command to install all dependencies:

```bash
$ make install
```

## Build

To build the project run the following command:

```bash
$ make build
```

## Test

To execute unit tests run the following command:

```bash
$ make test
```

## Commands

### `new`

```bash
saucectl new
```

This command will ask you to choose one of the frameworks:

* [Puppeteer](https://github.com/puppeteer/puppeteer)
* [Playwright](https://github.com/microsoft/playwright)
* [TestCafe](https://github.com/DevExpress/testcafe)
* [Cypress](https://github.com/cypress-io/cypress)

After which, a `./sauce/config.yml` file and an example test under the tests directory will be created.

### `run`

```bash
saucectl run
```

This command will run the test based on the `./.sauce/config.yml` file.

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

### `parallel`

```sh
saucectl run --parallel=<true|false>
```

Using the `--parallel` flag allows the parallelization of tests across machines to be
turned on/off. 

`saucectl` will use CI provider specific clues from the environment and `saucectl` config
file to generate a `build ID`. This `build ID` is used a grouping mechanism to
synchronize the different machines that are running in the same pipeline to distribute
the tests. 

`saucectl` currently uses the following CI environment variables to generate a build ID.

| CI            | Environment Variables          | Current Limitations                                 |
|:-------------:|:------------------------------:|:---------------------------------------------------:|
| GitHub        | GITHUB_WORKFLOW, GITHUB_RUN_ID | Unable to re-run jobs. Must trigger a new pipeline. |
| GitLab        | CI_PIPELINE_ID, CI_JOB_STAGE   | Unable to re-run jobs. Must trigger a new pipeline. |
| Jenkins       | BUILD_NUMBER                   | None                                                |

The current parallelization feature is _highly experimental_ and may have limitations
with certain CI providers.

If your CI provider is not listed here, you will have to specify your own `build ID`.
Please consult the [`ci-build-id`](#ci-build-id) flag for this option.

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

## Licensing

`saucectl` is licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/saucelabs/saucectl/blob/master/LICENSE) for the full license text.
