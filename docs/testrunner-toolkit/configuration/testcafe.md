---
id: testcafe
title: "Configuration Syntax: TestCafe"
sidebar_label: testcafe.yml
---

Please refer to the [Common Configuration Syntax Reference](testrunner-toolkit/configuration#common-syntax-reference)for information regarding fields such as `apiVersion`, `kind`, and `sauce`.

## Example Configuration

```yaml
apiVersion: v1alpha
metadata:
  name: Testing TestCafe Support
  tags:
    - e2e
    - release team
    - other tag
  build: Release $CI_COMMIT_SHORT_SHA
files:
  - ./tests/testcafe/
suites:
  - name: "saucy test"
    match: ".*.(spec|test).[jt]s$"
image:
  base: saucelabs/stt-testcafe-node
  version: ##VERSION##
sauce:
  region: us-west-1
```

## `files`

__Description__: Location of the test files.

__Type__: *string*

__Example__:
```yaml
files:
  - ./tests/testcafe/
```

## `suites`

__Description__:

__Type__: *object*

__Example__:
```yaml
suites:
  - name: "saucy test"
    match: ".*.(spec|test).[jt]s$"
```

### `name`

__Description__: Name of the test suite.

__Type__: *string*

__Example__:
```yaml
  - name: "saucy test"
```

### `match`

__Description__: Regular expression for locating test files.

__Type__: *string*

__Example__:
```yaml
    match: ".*.(spec|test).[jt]s$"
```