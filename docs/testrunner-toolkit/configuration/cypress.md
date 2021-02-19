---
id: cypress
title: "Configuration Syntax: Cypress"
sidebar_label: Cypress
---

Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration#common-syntax-reference)for information regarding fields such as `apiVersion`, `kind`, and `sauce`.

## Example Configuration

```yaml
apiVersion: v1alpha
kind: cypress
sauce:
  region: us-west-1
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
docker:
  fileTransfer: mount
cypress:
  configFile: "tests/cypress.json"  # We determine related files based on the location of the config file.
  version: 5.6.0
suites:
  - name: "saucy test"
    browser: "chrome"
    browserVersion: "latest" # Can also be a hardcoded version
    screenResolution: "1920x1080"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

## `cypress`

__Description__: Details specific to the `cypress` configuration.

__Type__: *object*

__Example__:
```yaml
cypress:
  configFile: "cypress.json"
```

### `configFile`

__Description__: The designated `cypress` configuration file. `saucectl` determines related files based on the location of the config file. By default `saucectl` defers to the test file location defined in `cypress.json`.

__Type__: *string*

__Example__:
```yaml
  configFile: "cypress.json"
```

> For further information regarding cypress configurations, please consult the [Cypress documentation](https://docs.cypress.io/guides/references/configuration.html#Options).

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

In order for the `record` and `key` fields to work you must add the cypress `"projectId"` in your `cypress.json` file. 

The value of your `projectId` correlates directly with the value of the `key` field; in this case `$MY_SECRET_KEY`.

> Please refer to [this Cypress Documentation page](https://docs.cypress.io/guides/dashboard/projects.html#Project-ID) for further information about how to configure/retrieve the cypress `projectId`.
>
> For more information about the cypress __Record Key__, please consult this [Cypress Documentation page](https://docs.cypress.io/guides/guides/command-line.html#cypress-run-record-key-lt-record-key-gt).

## `suites`

__Description__: Field for defining test suite details such as the suite `name`, desired `browser`
/ `platformName`, and `config`.

__Type__: *object*

__Example__:
```yaml
suites:
  - name: "saucy test"
    browser: "chrome"
    browserVersion: "latest"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

### `name`

__Description__: Name of the test suite.

__Type__: *string*

__Example__:
```yaml
  - name: "saucy test"
```

### `browser`

__Description__: Name of the browser in which the test runs.

__Type__: *string*

__Example__:
```yaml
    browser: "chrome"
```

### `browserVersion`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small><a href="/testrunner-toolkit/running-tests#test-on-sauce-labs">ℹ</a></p>

__Description__: Version of the browser in which the test runs.

__Type__: *string*

__Example__:
```yaml
    browserVersion: "85.0"
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

__Description__: Field where you can change the browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "1920x1080"
```

> For all available resolutions please visit [this documentation page](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SauceLabsCustomTestingOptions).

### `config`

__Description__: Details specific to the test configuration, for example: 
* `testFiles` ( *string array* | *string* | *regex* ): the specific location of test files
* `env` ( *string* | *int* | *float* | *boolean* ) any ephemeral/environment variables.

__Type__: *object*

__Example__:
```yaml
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ]
```
