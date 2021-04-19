---
id: common-syntax
title: Common Configuration Syntax
sidebar_label: Common Syntax
---

import Highlight from '../../../src/components/highlight.jsx'

The section below provides details and explanations regarding the common syntax/fields of `.sauce/config.yml`.

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
kind: < cypress | playwright | testcafe | puppeteer | espresso >
```

## `sauce`

__Description__: The parent field containing all details related to the Sauce Labs platform.

__Type__: *object*

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
    concurrency: 10
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

__Type__: *object*

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

### `concurrency`

__Description__: Number of test suites to run concurrently on Sauce Labs Cloud platform.

__Type__: *int*

__Example__:

```yaml
  concurrency: 10
```

### `tunnel`

__Description__: Tunnel allows you to specify an existing sauce connect tunnel when running tests inside the Sauce cloud. **Note:** This has no effect when running tests inside docker.

__Type__: *object*

__Example__:
```yaml
 tunnel:
    id: your_tunnel_id
    parent: parent_owner_of_tunnel # if applicable, specify the owner of the tunnel
```

## `docker`

__Description__: Details specific to the desired [Sauce Labs docker images](https://hub.docker.com/u/saucelabs).

__Type__: *object*

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
  image: saucelabs/< stt-cypress-mocha-node | stt-playwright-node | stt-testcafe-node >:< vX.X.X >
```

> WARNING: using the `latest` tag for docker images is dangerous. For further information, read [this article](https://vsupalov.com/docker-latest-tag/#:~:text=You%20should%20avoid%20using%20the,apart%20from%20the%20image%20ID.).

## `rootDir`

__Description__: Directory of files that need to be bundled and uploaded for the tests to run. Ignores what is specified in `.sauceignore`. See [Bundling page](/testrunner-toolkit/configuration/bundling) page for more details

__Type__: *object*

__Examples__:
```yaml
  rootDir: "./" # Just use the current directory
```

```yaml
  rootDir: "packages/subpackage" # Some other package from within a monorepo
```

## `npm`
__Description__: Details specific to the `npm` configuration. Packages listed will be installed on the environment prior to your tests execution.

__Type__: *object*

__Example__:
```yaml
  npm:
    registry: https://registry.npmjs.org
    packages:
      lodash: "4.17.20"
      "@babel/preset-typescript": "7.12"
      "@cypress/react": "^5.0.1"
      
```

⚠️ `registry` configuration is only supported in latest cypress docker image. No other frameworks, or Sauce Labs cloud.

## `suites`

__Description__: Field for defining test suite details such as the suite `name`, desired `browser`
/ `platformName`, and `config`.

__Type__: *object*

__Example__:
```yaml
suites:
  - name: "saucy test"
```

### `name`

__Description__: Name of the test suite.

__Type__: *string*

__Example__:
```yaml
  - name: "saucy test"
```

### `env`

__Description__: Field for setting enviornment variables. It supports expanded enviornment variables.

__Type__: *object*

__Example__:
```yaml
  env:
    hello: world
    my_var: $MY_VAR
```

### `browser`

__Description__: Name of the browser in which the test runs.

__Type__: *string*

__Example__:
```yaml
    browser: "chrome"
```

### `browserVersion`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small></p>

__Description__: Version of the browser in which the test runs.

__Type__: *string*

__Example__:
```yaml
    browserVersion: "85.0"
```

### `platformName`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small></p>

__Description__: Operating system on which the browser and test runs.

__Type__: *string*

__Example__:
```yaml
    platformName: "Windows 10"
```

### `screenResolution`

<p><small><Highlight color="#ad1415">sauce cloud only</Highlight></small></p>

__Description__: Field where you can change the browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "1920x1080"
```

> For all available resolutions please visit [this documentation page](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SauceLabsCustomTestingOptions).

## Framework Syntax Reference

* [Cypress](/testrunner-toolkit/configuration/cypress)
* [Playwright](/testrunner-toolkit/configuration/playwright)
* [TestCafe](/testrunner-toolkit/configuration/testcafe)
* [Espresso](/testrunner-toolkit/configuration/espresso)
