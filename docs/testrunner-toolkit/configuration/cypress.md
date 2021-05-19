---
id: cypress
title: "Configuration Syntax: Cypress"
sidebar_label: Cypress
---


Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration/common-syntax)for information regarding fields such as `apiVersion`, `kind`, `suites`, `sauce`, etc.

## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/master/.sauce/config.yml
```

## `cypress`

__Description__: Details specific to the `cypress` configuration.

__Type__: *object*

__Example__:
```yaml
cypress:
  version: 6.6.0
  configFile: "cypress.json"
```

### `version`

__Description__: Version of `cypress` to use during tests.

__Type__: *string*

__Example__:
```yaml
  version: ##VERSION##
```

### `configFile`

__Description__: The designated `cypress` configuration file. `saucectl` determines related files based on the location of the config file. By default `saucectl` defers to the test file location defined in `cypress.json`.

__Type__: *string*

__Example__:
```yaml
  configFile: "cypress.json"
```

### `record`

__Description__: Record video of tests running.

__Type__: *boolean*

__Example__:
```yaml
  record: true
  key: $MY_SECRET_KEY
```

### `key`

__Description__: Secret record key.

__Type__: *string*

__Example__:
```yaml
  record: true
  key: $MY_SECRET_KEY
```

The `record` and `key` fields depend on the cypress `"projectId"` being set in your `cypress.json` file because the value of your `projectId` correlates directly with the value of the `key` field. See [Cypress Project-ID Documentation](https://docs.cypress.io/guides/dashboard/projects.html#Project-ID) for details about how to configure/retrieve the cypress `projectId` or [Cypress Record-Key Documentation](https://docs.cypress.io/guides/guides/command-line.html#cypress-run-record-key-lt-record-key-gt) for details about configuring Record-Key parameters.

:::note
For additional information regarding cypress configurations, please consult the [Cypress documentation](https://docs.cypress.io/guides/references/configuration.html#Options).
:::



## `config`

__Description__: Details specific to the cypress test configuration

__Type__: *object*

__Example__:
```yaml {5}
  suites:
    - name: "Hello"
    browser: "firefox"
    platformName: "Windows 10"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ]
```

### `env`

__Description__: Any ephemeral/environment variables needed to run cypress tests.

__Type__:  *string* | *int* | *float* | *boolean*

__Example__:

```yaml
      env:
        hello: world
```

### `testFiles`

__Description__: The specific location of the cypress test files (if not otherwise specified explicitly in `cypress.json`).

__Type__:  *string array* | *string* | *regex*

__Example__:

```yaml
      testFiles: [ "**/*.*" ]
```
