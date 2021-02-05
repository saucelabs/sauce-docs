---
id: playwright
title: "Configuration Syntax: Playwright"
sidebar_label: Playwright
---

Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration#common-syntax-reference)for information regarding fields such as `apiVersion`, `kind`, and `sauce`.

## Example Configuration

```yaml
apiVersion: v1alpha
kind: playwright
sauce:
  region: us-west-1
  concurrency: 1
  metadata:
    name: Testing Playwright Support
    tags:
      - e2e
    build: "$BUILD_ID"
playwright:
  version: ##VERSION##
  projectPath: tests/
docker:
  fileTransfer: mount
suites:
  - name: "saucy test"
    platformName: "Windows 10"
    testMatch: '**/*.js'
    browser: playwright
    screenResolution: "1920x1080"
    env:
      hello: world

    params:
      browserName: "firefox"
      headful: false
      slowMo: 1000
```

## `playwright`

__Description__: Details specific to the `playwright` project configuration.

__Type__: *object*

__Example__:
```yaml
playwright:
  version: ##VERSION##
  projectPath: tests/
```

### `version`

__Description__: Version of `playwright` to use during tests.

__Type__: *string*

__Example__:
```yaml
  version: ##VERSION##
```

### `projectPath`

__Description__: Absolute path to the test directory and related test files

__Type__: *string*

__Example__:
```yaml
  projectPath: /path/to/tests/
```

## `suites`

__Description__: Field for defining test suite details such as the suite `name`, desired `browser`, and test `params`.

__Type__: *object*

__Example__:
```yaml
suites:
  - name: "saucy test"
    platformName: "Windows 10"
    testMatch: '**/*.js'
    browser: playwright

    params:
      browserName: "firefox"
      headful: false
      slowMo: 1000
```

### `name`

__Description__: Name of the test suite.

__Type__: *string*

__Example__:
```yaml
  - name: "saucy test"
```

### `platformName`

__Description__: Operating system on which the browser and test runs.

__Type__: *string*

__Example__:
```yaml
    platformName: "Windows 10"
```

### `testMatch`

__Description__: The explicit name, regex, or location of the test files

__Type__: *string* | *regex*

__Example__:
```yaml
    testMatch: '**/*.js'
```

### `screenResolution`

__Description__: Field where you can change the browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "1920x1080"
```

> For all available resolutions please visit [this documentation page](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SauceLabsCustomTestingOptions).

### `env`

__Description__: Field where you can pass environment variables.

__Type__: *object*

__Example__:
```yaml
    env:
      hello: world
```

### `params`

__Description__: This field is for specific test run parameters, for example:
* `browserName` ( *string* ) : the browser in which to run tests 
* `headful` ( *boolean* ) : whether to run browsers in headless mode
* `sloMo` ( *int* ) : whether to implement artificially slow load times in milliseconds

__Type__: *object*

__Example__:
```yaml
    params:
      browserName: "firefox"
      headful: false
      slowMo: 1000
```
