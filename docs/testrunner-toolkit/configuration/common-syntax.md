---
id: common-syntax
title: Common Configuration Syntax
sidebar_label: Common Syntax
---

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

__Description__: Directory of files that need to be bundled and uploaded for the tests to run. Ignores what is specified in `.sauceignore`. See [Tailoring Your Test File Bundle](/testrunner-toolkit/configuration#tailoring-your-test-file-bundle) for more details.

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
    strictSSL: false
```

### `registry`

__Description__: Specifies the location of the npm registry source. If the registry source is a private address and you are running tests on Sauce Cloud, you can provide access to the registry source using [Sauce Connect](/testrunner-toolkit/running-tests#running-tests-on-sauce-labs-with-sauce-connect).

__Type__: *string*

__Example__:
```yaml
  registry: https://registry.npmjs.org
```

### `packages`

__Description__: Specifies npm packages that are required to run tests and should, therefore, be included in the bundle. See [Including Node Dependencies](/testrunner-toolkit/configuration#including-node-dependencies).

__Type__: *object*

__Example__:
```yaml
  packages:
    lodash: "4.17.20"
    "@babel/preset-typescript": "7.12"
    "@cypress/react": "^5.0.1"
```

### `strictSSL`

__Description__: Instructs npm to perform SSL key validation when making requests to the registry via https (`true`) or not (`false`). Defaults to `true` when not set.

__Type__: *boolean*

__Example__:
```yaml
    strictSSL: false
```

## `defaults`

__Description__: Field for defining default settings for the project.

__Type__: *object*

__Example__:
```yaml
defaults:
  - mode: "sauce"
```

### `mode`

__Description__: Specifies whether tests in the project will run on `docker` or `sauce`.

__Type__: *string*

__Example__:
```yaml
  mode: "sauce"
```

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

<p><small><span class="highlight sauce-cloud">Sauce Cloud only</span></small></p>

__Description__: Version of the browser in which the test runs.

__Type__: *string*

__Example__:
```yaml
    browserVersion: "85.0"
```

### `platformName`

<p><small><span class="highlight sauce-cloud">Sauce Cloud only</span></small></p>

__Description__: Operating system on which the browser and test runs. This value is optional and will be defaulted to a sensible platform. Set this value explicitly if you'd like to have greater control over where your tests should run.

__Type__: *string*

__Example__:
```yaml
    platformName: "Windows 10"
```

### `screenResolution`

<p><small><span class="highlight sauce-cloud">Sauce Cloud only</span></small></p>

__Description__: Field where you can change the browser window screen resolution.

__Type__: *string*

__Example__:
```yaml
    screenResolution: "1920x1080"
```

:::note
For all available resolutions please see [Sauce Labs Custom Testing Options](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SauceLabsCustomTestingOptions).
:::


### `mode`

__Description__: Allows you to specify whether the individual suite will run on `docker` or `sauce`, potentially overriding the default project mode setting.

__Type__: *string*

__Example__:
```yaml
  mode: "sauce"
```

## `artifacts`

__Description__: Specifies how to manage test artifacts, such as logs, videos, and screenshots.

__Type__: *object*

__Example__:
```yaml
artifacts:
  download:
    when: always
    match:
      - junit.xml
    directory: ./artifacts/
```

### `download`

__Description__: Specifies the settings related to downloading artifacts from tests run by `saucectl`.

__Type__: *object*

__Example__:
```yaml
  download:
    when: always
    match:
      - junit.xml
    directory: ./artifacts/
```

#### `when`

__Description__: Specifies when and under what circumstances artifacts will be downloaded.

__Type__: *string*

__Values__:
- `always`: Artfiacts will always be downloaded.
- `never`: Artifacts will never be downloaded.
- `pass`: Artifacts will be downloaded only if the suite passes.
- `fail`: Artifacts will be downloaded only if the suite fails.

__Example__:
```yaml
    when: always
```

#### `match`

__Description__: Allows you to specify particular files or file types to download based on whether they match the name pattern provided. Supports the wildcard character `*`.

__Type__: *string[]*

__Example__:
```yaml
    - junit.xml
    - *.log
```

#### `directory`

__Description__: Specifies the path to the folder location in which artifacts will be downloaded. Each suite will have its own subdirectory.

__Type__: *string*

__Example__:
```yaml
    directory: ./artifacts/
```

## Framework Syntax Reference

* [Cypress](/testrunner-toolkit/configuration/cypress)
* [Playwright](/testrunner-toolkit/configuration/playwright)
* [TestCafe](/testrunner-toolkit/configuration/testcafe)
* [Espresso](/testrunner-toolkit/configuration/espresso)
