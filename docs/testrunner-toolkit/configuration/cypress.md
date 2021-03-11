---
id: cypress
title: "Configuration Syntax: Cypress"
sidebar_label: Cypress
---

import Highlight from '../../../src/components/highlight.jsx'

Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration/common-syntax)for information regarding fields such as `apiVersion`, `kind`, `suites`, `sauce`, etc.

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

## `config`

:::note `suites` Syntax Reference
The `config` field exists under the `suites` object. See [this page](/testrunner-toolkit/configuration/common-syntax#suites) for more details.
:::

__Description__: Details specific to the cypress test configuration

__Type__: *object*

__Example__:
```yaml
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