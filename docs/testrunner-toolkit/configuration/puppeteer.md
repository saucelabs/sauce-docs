---
id: puppeteer
title: "Configuration Syntax: Puppeteer"
sidebar_label: Puppeteer
---

import Highlight from "../../../src/components/highlight"

Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration#common-syntax-reference) for information regarding fields such as `apiVersion`, `kind`, and `sauce`.

## Example Configuration

```yaml
apiVersion: v1alpha
kind: puppeteer
sauce:
  region: us-west-1
  concurrency: 2
  metadata:
    name: Testing Puppeteer Support
    tags:
      - e2e
    build: "$BUILD_ID"
rootDir: ./
puppeteer:
  version: ##VERSION##
docker:
  fileTransfer: mount
suites:
  - name: "chrome"
    testMatch: ["**/*.test.js"]
    browser: "chrome"
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
