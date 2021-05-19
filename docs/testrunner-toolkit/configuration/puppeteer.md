---
id: puppeteer
title: "Configuration Syntax: Puppeteer"
sidebar_label: Puppeteer
---


Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration#common-syntax-reference) for information regarding fields such as `apiVersion`, `kind`, and `sauce`.

## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-puppeteer-example/blob/master/.sauce/config.yml
```

## `puppeteer`

__Description__: Details specific to the `puppeteer` project configuration.

__Type__: *object*

__Example__:
```yaml
puppeteer:
  version: ##VERSION##
```

### `version`

__Description__: Version of `puppeteer` to use during tests.

__Type__: *string*

__Example__:
```yaml
  version: ##VERSION##
```

## `suites`

__Description__: Field for defining test suite details such as the suite `name` and desired `browser`.

__Type__: *object*

__Example__:
```yaml
suites:
  - name: "chrome"
    testMatch: ["**/*.test.js"]
    browser: "chrome"
```

### `name`

__Description__: Name of the test suite.

__Type__: *string*

__Example__:
```yaml
  name: "saucy test"
```

### `testMatch`

__Description__: The explicit name, glob, or location of the test files.

__Type__: *string array*

__Example__:
```yaml
    testMatch: ["**/*.js"]
```
