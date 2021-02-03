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

<p><small>See full example <a href="https://github.com/saucelabs/sauce-cypress-runner/blob/master/.saucetpl/.sauce/config.yml">here</a>.</small></p>

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
cypress:
  version: ##VERSION##
  configFile: "cypress.json"  # We determine related files based on the location of the config file.
suites:
  - name: "saucy test"
    browser: "chrome"
    screenResolution: "1920x1080"  # Available resolutions on sauce for Windows: '800x600', '1024x768', '1152x864', '1280x768', '1280x800', '1280x960', '1280x1024', '1400x1050', '1440x900', '1600x1200', '1680x1050', '1920x1080', '1920x1200', '2560x1600'
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

</TabItem>
<TabItem value="playwright">

<p><small>See full example <a href="https://github.com/saucelabs/sauce-playwright-runner/blob/master/.saucetpl/.sauce/config.yml">here</a>.</small></p>

```yaml
apiVersion: v1alpha
kind: playwright
sauce:
  region: us-west-1
  concurrency: 1
  metadata:
    name: Testing Playwright Support
    tags:
      - e2e
    build: "$BUILD_ID"
playwright:
  version: ##VERSION##
  projectPath: tests/
docker:
  fileTransfer: mount
suites:
  - name: "saucy test"
    platformName: "Windows 10"
    testMatch: '**/*.js'

    params:
      browserName: "firefox"
      headful: false
      slowMo: 1000
```

</TabItem>
<TabItem value="testcafe">

<p><small>See full example <a href="https://github.com/saucelabs/sauce-testcafe-runner/blob/master/.saucetpl/.sauce/config.yml">here</a>.</small></p>

```yaml
apiVersion: v1alpha
metadata:
  name: Feature XYZ
  tags:
    - e2e
    - release team
    - other tag
  build: Release $CI_COMMIT_SHORT_SHA
files:
  - tests/example.test.js
suites:
  - name: "saucy test"
    match: ".*.(spec|test).[jt]s$"
image:
  base: saucelabs/stt-testcafe-node
  version: ##VERSION##
sauce:
  region: us-west-1
```

</TabItem>
</Tabs>

## `apiVersion`

__Description__: Version of `saucectl` API.

__Type__: *string*

__Example__:
```yaml
apiVersion: v1alpha
```

## `kind`

__Description__: The kind of tests (framework) you wish to run.

__Type__: *string*

__Example__:
```yaml
kind: < cypress | playwright | testcafe >
```

## `sauce`

__Description__: The parent field containing all details related to the Sauce Labs platform.

__Type__: NA

__Example__:
```yaml
sauce:
  region: < us-west-1 | eu-central-1 >
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

__Type__: *string*

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
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
```

## `docker`

__Description__: Details specific to the desired [Sauce Labs docker images](https://hub.docker.com/u/saucelabs).

__Type__: NA

__Example__:
```yaml
docker:
  fileTransfer: mount
  image: saucelabs/stt-cypress-mocha-node:vX.X.X
```

### `fileTransfer`

__Description__: Method in which to transfer test files into the docker container. There are two options:
* `mount` : Default method; mounts files and folders into the docker container. Changes to these files and folders will be reflected on the host (and vice a versa).
* `copy` : Copies files and folders into the docker container. If you run into permission issues, either due to docker or host settings, `copy` is the advised use case.
  > See the Docker documentation to read more about the copy convention ([`docker cp`](https://docs.docker.com/engine/reference/commandline/cp/) | [`COPY`](https://docs.docker.com/engine/reference/builder/#copy)).

__Type__: *string*

__Example__:
```yaml
  fileTransfer: < mount | copy >
```

### `image`

__Description__: The chosen docker image, `name` and version `tag`, in which to run tests.

__Type__: *string*

__Example__:
```yaml
  image:
    name: saucelabs/< stt-cypress-mocha-node | stt-playwright-node | stt-testcafe-node >:< vX.X.X >
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
    platformName: "Windows 10"
    screenResolution: "1920x1080"
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

### `match`

__Description__: Regular expression for test file names.

__Type__: *string*

__Example__:
```yaml
    match: ".*.(spec|test).js$"
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

<p><small><Highlight color="#25c2a0">cypress only</Highlight></small></p>

__Description__: Field where you can change the browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "1920x1080"  # Available resolutions on sauce for Windows: '800x600', '1024x768', '1152x864', '1280x768', '1280x800', '1280x960', '1280x1024', '1400x1050', '1440x900', '1600x1200', '1680x1050', '1920x1080', '1920x1200', '2560x1600'
```

### `config`

<p><small><Highlight color="#25c2a0">cypress only</Highlight></small></p>

__Description__: Details specific to the test configuration, for example: 
* `testFiles` ( *string* | *regex* ): the specific location of test files
* `env` ( *string* | *int* | *float* | *boolean* ) any ephemeral/environment variables.

__Type__: NA

__Example__:
```yaml
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ]
```

### `params`

<p><small><Highlight color="#44ba4a">playwright only</Highlight></small></p>


__Description__: This field is for specific test run parameters, for example:
* `browserName` ( *string* ) : the browser in which to run tests 
* `headful` ( *boolean* ) : whether to run browsers in headless mode
* `sloMo` ( *int* ) : whether to implement artificially slow load times in milliseconds

__Type__: NA

__Example__:
```yaml
    params:
      browserName: "firefox"
      headful: false
      slowMo: 1000
```
