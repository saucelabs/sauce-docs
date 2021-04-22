---
id: testcafe
title: "Configuration Syntax: TestCafe"
sidebar_label: TestCafe
---

Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration#common-syntax-reference)for information regarding fields such as `apiVersion`, `kind`, and `sauce`.

## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/master/.sauce/config.yml
```

## `testcafe`

__Description__: Details specific to the `testcafe` project configuration.

__Type__: *object*

__Example__:
```yaml
testcafe:
  version: ##VERSION##
```

### `version`

__Description__: Version of `testcafe` to use during tests

__Type__: *string*

__Example__:
```yaml
  version: ##VERSION##
```

## `suites`

__Description__: Field for defining test suite details such as the suite `name`, desired `browserName`, and test configurations.

__Type__: *object*

__Examples__:
```yaml reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/master/.sauce/config.yml#L20-L30
```

```yaml reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/master/.sauce/config.yml#L39-L52
```

### `name`

__Description__: Name of the test suite.

__Type__: *string*

__Example__:
```yaml
  - name: "saucy test"
```

### `browserName`

__Description__: Name of desired browser. Although Testcafe supports triggering one test in multiple browsers, it is better here to split them into every suite to indicate each suite has its own test point.

__Type__: *string*

__Example__:
```yaml
  browserName: "chrome"
```

### `src`

__Description__: The explicit name, file glob, or location of the test files.

__Type__: *object*

__Example__:
```yaml
  src:
    - "tests/test_file1.test.js"
    - "tests/integrations"
    - "*/*.test.js"
```

### `devices`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small><a href="/testrunner-toolkit/running-tests#test-on-sauce-labs">ℹ</a></p>

__Description__: Field for defining device details such as device `name`, `platformName`, `platformVersions`.

__Type__: *object*

__Example__:
```yaml
  devices:
    - name: iPhone 12 Simulator
      platformName: iOS
      platformVersions:
        - "14.3"
```

### `env`

__Description__: Environment variables. Substituted variables like $MY_VAR can be expanded.

__Type__: *object*

__Example__:
```yaml
  env:
    hello: world
    foo: $MY_BAR
```

### `screenshots`

__Description__: Screenshots settings for testcafe. [See link in Testcafe](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#screenshots).

__Type__: *object*

__Example__:
```yaml
  screenshots:
    takeOnFails: true
    fullPage: true
```

### `speed`

__Description__: Specifies the test execution speed. Tests are run at the maximum speed by default. You can use this option to slow the test down. Provide a number between 1 (the fastest) and 0.01 (the slowest).

__Type__: *float64*

__Example__:
```yaml
  speed: 1
```

### `platformName`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small><a href="/testrunner-toolkit/running-tests#test-on-sauce-labs">ℹ</a></p>

__Description__: Operating system on which the browser and test runs.

__Type__: *string*

__Example__:
```yaml
    platformName: "Windows 10"
```

### `screenResolution`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small><a href="/testrunner-toolkit/running-tests#test-on-sauce-labs">ℹ</a></p>

__Description__: Set browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "1920x1080"
```

### `disableScreenshots`
__Description__: Prevents TestCafe from taking screenshots. [TestCafe `disableScreenshots` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#disablescreenshots).

__Type__: *boolean*

__Example__:
```yaml
  disableScreenshots: true
```

### `tsConfigPath`
__Description__: The absolute or relative path to the TypeScript configuration file. Relative paths are resolved against the current directory (the directory from which you run TestCafe).

__Type__: *string*

__Example__:
```yaml
  tsConfigPath: /path/to/file
```

### `clientScripts`
__Description__: Injects scripts into all pages visited during the test. [TestCafe `clientScripts` definition](https://devexpress.github.io/testcafe/documentation/reference/test-api/fixture/clientscripts.html).

__Type__: *array*

__Example__:
```yaml
  clientScripts: ["/path/to/file1", "/path/to/file2"]
```

### `skipJsErrors`
__Description__: Ignores JavaScript errors on a webpage. [Testcafe `skipJsErrors` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#skipjserrors).

__Type__: *boolean*

__Example__:
```yaml
  skipJsErrors: true
```

### `quarantineMode`
__Description__: Enables the quarantine mode for tests that fail. [Testcafe `quarantineMode` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#quarantinemode).

__Type__: *boolean*

__Example__:
```yaml
  quarantineMode: true
```

### `skipUncaughtErrors`
__Description__: Ignores uncaught errors and unhandled promise rejections in test code. [Testcafe `skipUncaughtErrors` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#skipUncaughtErrors).

__Type__: *boolean*

__Example__:
```yaml
  skipUncaughtErrors: true
```

### `selectorTimeout`
__Description__: Specifies the time (in milliseconds) within which selectors attempt to return a node. [Testcafe `selectorTimeout` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#selectorTimeout`).

__Type__: *int*

__Example__:
```yaml
  selectorTimeout: 1000
```

### `assertionTimeout`
__Description__: Specifies the time (in milliseconds) TestCafe attempts to successfully execute an assertion if a selector property or a client function was passed as an actual value. [Testcafe `assertionTimeout` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#assertionTimeout).

__Type__: *int*

__Example__:
```yaml
  assertionTimeout: 1000
```

### `pageLoadTimeout`
__Description__: Specifies the time (in milliseconds) passed after the DOMContentLoaded event, within which TestCafe waits for the window.load event to fire. [Testcafe `pageLoadTimeout` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#pageLoadTimeout).

__Type__: *int*

__Example__:
```yaml
  pageLoadTimeout: 1000
```

### `stopOnFirstFail`
__Description__: Stops a test run if a test fails. [Testcafe `stopOnFirstFail` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#stopOnFirstFail).

__Type__: *boolean*

__Example__:
```yaml
  stopOnFirstFail: true
```

### `disablePageCaching`
__Description__: Prevents the browser from caching page content. [Testcafe `disablePageCaching` definition](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#disablePageCaching).

__Type__: *boolean*

__Example__:
```yaml
  disablePageCaching: true
```