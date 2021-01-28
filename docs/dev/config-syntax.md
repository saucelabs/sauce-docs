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
    {label: 'TestCafe', value: 'testcafe'},
    {label: 'Puppeteer', value: 'puppeteer'},
    {label: 'Playwright', value: 'playwright'},
  ]}>

<TabItem value="cypress">

```yaml reference
https://github.com/saucelabs/sauce-cypress-runner/blob/master/.saucetpl/.sauce/config.yml
```

</TabItem>
<TabItem value="testcafe">

```yaml reference
https://github.com/saucelabs/sauce-testcafe-runner/blob/master/.saucetpl/.sauce/config.yml
```

</TabItem>
<TabItem value="puppeteer">

```yaml reference
https://github.com/saucelabs/sauce-puppeteer-runner/blob/master/.saucetpl/.sauce/config.yml
```

</TabItem>
<TabItem value="playwright">

```yaml reference
https://github.com/saucelabs/sauce-playwright-runner/blob/master/.saucetpl/.sauce/config.yml
```

</TabItem>
</Tabs>

## `apiVersion`

```yaml
apiVersion: v1alpha
```

## `kind`

```yaml
kind: < cypress | playwright | testcafe >
```

## `sauce`

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

```yaml
  region: < us-west-1 | eu-central-1 >
```

### `metadata`

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

```yaml
docker:
  image:
    name: saucelabs/stt-cypress-mocha-node
    tag: v1.X.X
```

### `image`

```yaml
  image:
    name: string
    tag: string
```

## `cypress`

<p><small><Highlight color="#25c2a0">cypress only</Highlight></small></p>

```yaml
cypress:
  configFile: "cypress.json"
```

### `configFile`

<p><small><Highlight color="#25c2a0">cypress only</Highlight></small></p>


```yaml
  configFile: string
```

> We determine related files based on the location of the config file. By default `saucectl` defers to the test file location defined in `cypress.json`

## `files`

```yaml
files:
  - tests/example.test.js
```

## `suites`

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

```yaml
  - name: "saucy test"
```

### `match`

```yaml
    match: ".*.(spec|test).js$"
```

### `browser`

```yaml
    browser: string
```

### `config`

<p><small><Highlight color="#25c2a0">cypress only</Highlight></small></p>

```yaml
    config:
      env:
        string: < string | int | float | env >
      testFiles: < string array | regex >
```
