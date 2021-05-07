---
id: playwright
title: "Configuration Syntax: Playwright"
sidebar_label: Playwright
---


Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration#common-syntax-reference)for information regarding fields such as `apiVersion`, `kind`, and `sauce`.

## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-playwright-example/blob/master/.sauce/config.yml
```

## `playwright`

__Description__: Details specific to the `playwright` project configuration.

__Type__: *object*

__Example__:
```yaml
playwright:
  version: ##VERSION##
```

### `version`

__Description__: Version of `playwright` to use during tests.

__Type__: *string*

__Example__:
```yaml
  version: ##VERSION##
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

<p><small><span class="highlight sauce-cloud">Sauce Cloud only</span></small></p>

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

<p><small><span class="highlight sauce-cloud">Sauce Cloud only</span></small></p>

__Description__: Field where you can change the browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "1920x1080"
```

:::note
For all available resolutions please see [Sauce Labs Custom Testing Options](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SauceLabsCustomTestingOptions).
:::

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
