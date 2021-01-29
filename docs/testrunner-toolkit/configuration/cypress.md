---
id: cypress
title: "Configuration Syntax: Cypress"
sidebar_label: cypress.yml
---

Please refer to the [Common Configuration Syntax Reference](testrunner-toolkit/configuration#common-syntax-reference)for information regarding fields such as `apiVersion`, `kind`, and `sauce`.

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
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

## `cypress`

__Description__: Details specific to the `cypress` configuration.

__Type__: NA

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

## `suites`

__Description__: Field for defining test suite details such as the suite `name`, desired `browser`
/ `platformName`, and `config`.

__Type__: NA

__Example__:
```yaml
suites:
  - name: "saucy test"
    browser: "chrome"
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

__Description__: Browser in which the test runs.

__Type__: *string*

__Example__:
```yaml
    browser: "chrome"
```

### `platformName`

__Description__: Operating system on which the browser and test runs.

__Type__: *string*

__Example__:
```yaml
    platformName: "Windows 10"
```

### `screenResolution`

__Description__: Field where you can change the browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "2560x1600"  # Available resolutions on sauce for Windows: '800x600', '1024x768', '1152x864', '1280x768', '1280x800', '1280x960', '1280x1024', '1400x1050', '1440x900', '1600x1200', '1680x1050', '1920x1080', '1920x1200', '2560x1600'
```

### `config`

__Description__: Details specific to the test configuration, for example: 
* `testFiles` ( *string array* | *string* | *regex* ): the specific location of test files
* `env` ( *string* | *int* | *float* | *boolean* ) any ephemeral/environment variables.

__Type__: NA

__Example__:
```yaml
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ]
```


