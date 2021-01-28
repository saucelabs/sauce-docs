---
id: config-syntax
title: Testrunner Toolkit Configuration Reference
sidebar_label: config.yml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

This page provides details and explanations regarding the syntax and fields of the [Testrunner Toolkit Configuration](/testrunner-toolkit/configuration).

## Full Examples

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>

<TabItem value="cypress">

```yaml reference
https://github.com/saucelabs/sauce-cypress-runner/blob/master/.saucetpl/.sauce/config.yml
```

</TabItem>
<TabItem value="playwright">

```yaml reference
https://github.com/saucelabs/sauce-playwright-runner/blob/master/.saucetpl/.sauce/config.yml
```

</TabItem>
<TabItem value="testcafe">

```yaml reference
https://github.com/saucelabs/sauce-testcafe-runner/blob/master/.saucetpl/.sauce/config.yml
```

</TabItem>
</Tabs>

## `apiVersion`

__Description__: Version of `saucectl` API.

__Type__: string

__Example__:
```yaml
apiVersion: v1alpha
```

## `kind`

__Description__: The kind of tests (framework) you wish to run.

__Type__: string

__Example__:
```yaml
kind: < cypress | playwright | testcafe>
```

## `sauce`

__Description__: Parent field that contains all details related to the Sauce Labs platform.

__Type__: NA

__Example__:
```yaml
sauce:
  region: us-west-1
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
```

### `region`

__Description__: Geographical region of the desired Sauce Labs data center.

__Type__: string

__Example__:
```yaml
  region: < us-west-1 | eu-central-1 >
```

### `metadata`

__Description__: Data specific to the test execution details (i.e. `name`, `tags`, `build`, etc.)

__Type__: NA

__Example__:
```yaml
    metadata:
      name: string
      tags:
        - string 1
        - string 2
        - string 3
      build: < id | string | env >
```

## `docker`

__Description__: Details specific to the desired [Sauce Labs docker images](https://hub.docker.com/u/saucelabs).

__Type__: NA

__Example__:
```yaml
docker:
  image:
    name: saucelabs/stt-cypress-mocha-node
    tag: v1.X.X
```

### `image`

__Description__: The chosen docker image, `name` and version `tag`, in which to run tests.

__Type__: string

__Example__:
```yaml
  image:
    name: saucelabs/< stt-cypress-mocha-node | stt-playwright-node | stt-testcafe-node >
    tag: < latest | vX.X.X >
```

> WARNING: using the `latest` tag for docker images is dangerous. For further information, read [this article](https://vsupalov.com/docker-latest-tag/#:~:text=You%20should%20avoid%20using%20the,apart%20from%20the%20image%20ID.).

## `cypress`

<p><small><Highlight color="#25c2a0">cypress only</Highlight></small></p>

__Description__: Details specific to the `cypress` configuration.

__Type__: NA

__Example__:
```yaml
cypress:
  configFile: "cypress.json"
```

### `configFile`

<p><small><Highlight color="#25c2a0">cypress only</Highlight></small></p>

__Description__: The designated `cypress` configuration file. `saucectl` determines related files based on the location of the config file. By default `saucectl` defers to the test file location defined in `cypress.json`.

__Type__: string

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
    platformName: "Windows 10"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

### `name`

__Description__: Name of the test suite.

__Type__: string

__Example__:
```yaml
  - name: "saucy test"
```

### `match`

__Description__: Regular expression for test file names.

__Type__: string

__Example__:
```yaml
    match: ".*.(spec|test).js$"
```

### `browser`

__Description__: Browser in which the test runs.

__Type__: string

__Example__:
```yaml
    browser: "chrome"
```

### `platformName`

__Description__: Operating system on which the browser and test runs.

__Type__: string

__Example__:
```yaml
    platformName: "Windows 10"
```

### `config`

<p><small><Highlight color="#25c2a0">cypress only</Highlight></small></p>

__Description__: Details specific to the test configuration, including the specific location of `testFiles` and any ephemeral `env` variables.

__Type__: NA

__Example__:
```yaml
    config:
      env:
        string: < string | int | float | env >
      testFiles: < string array | regex >
```
