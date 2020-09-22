---
id: saucectl
title: Testrunner CLI Reference
sidebar_label: CLI Reference
---

This page provides information for `saucectl`, the command line interface of the Sauce Labs Testrunner Toolkit.

## `saucectl`

[This repository](https://github.com/saucelabs/saucectl) contains the Go binary that you use to kick off tests.

### Development Requirements
 * [Go](https://golang.org/) (v1.14 or higher)
 * [Homebrew](https://brew.sh/) (v2.2.13 or higher)
 
### Install
 
Run the following `make` command to install all dependencies:
 
```bash
$ make install
```

### Build

To build the project run the following command:

```bash
$ make build
```

### Test

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

### `timeout`
```bash
saucectl run --timeout <seconds>
```

Using the `--timeout` flag will set the test timeout for the [Testrunner framework](testrunner-toolkit-test-preparation.md#automation-framework-examples).

## Licensing

`saucectl` is licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/saucelabs/saucectl/blob/master/LICENSE) for the full license text.