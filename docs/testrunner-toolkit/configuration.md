---
id: configuration
title: Testrunner Toolkit Configuration
sidebar_label: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '../../src/components/highlight.jsx'

The Testrunner Toolkit requires a configuration file to know which tests to run, along with which framework to use. Examples of some possible configuration fields you can set include:

* custom `tags`
* location of the test `files`
* desired framework `image` and `version`
* desired `sauce` data center

If you have existing tests and wish to expand or modify the `.sauce/config.yml`, consider the following examples:

## What You'll Need

Refer to the requirements listed on the [Installation](/testrunner-toolkit/installation) page.

## Basic Configuration

By default `saucectl` searches for a file called `config.yml`:

```yaml
# Simple config.yml using cypress
apiVersion: v1alpha
kind: cypress
sauce:
  region: us-west-1
## Tunnel allows you to specify an existing sauce connect tunnel when running cypress inside the Sauce cloud.
## This has no effect when running tests inside docker.
  tunnel:
    id: your_tunnel_id
    parent: parent_owner_of_tunnel # if applicable, specify the owner of the tunnel
  metadata:
    name: Testing Cypress Support
    tags:
      - e2e
      - release team
      - other tag
    build: Release $CI_COMMIT_SHORT_SHA
docker:
  # fileTransfer controls how test files are transferred to the docker container before tests are run (choice: mount|copy).
  # `mount` will mount files and folders into the container. Changes to these files and folders will be reflected on the
  # host as well (and vice versa). However, you may run into permission issues depending on your docker or host settings.
  # In this case, use `copy` to simply copy files and folders into the container without altering the originals.
  fileTransfer: mount # Defaults to `mount`. Choose between mount|copy.
  # image controls which images to be used for local testing. Change this value is you want to use a custom image.
  # image: saucelabs/stt-cypress-mocha-node:v5.6.0
cypress:
  configFile: "tests/cypress.json"  # We determine related files based on the location of the config file.
  version: 5.6.0
suites:
  - name: "saucy test"
    browser: "chrome"
    browserVersion: "latest"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

### Use Multiple Frameworks

If you wish to use more than one framework, or to configure different sets of tests separately, you can use any name for the configuration file and specify it with the following command:

```bash
saucectl run -c ./path/to/config.yml
```

:::note yaml validation
If you're having trouble with the `.yml` syntax, consider using a free online YAML/JSON validator tool:
* [YAML Lint](http://www.yamllint.com/)
* [Code Beautify](https://codebeautify.org/yaml-validator)
* [JSON Formatter](https://jsonformatter.org/yaml-validator)

There are also various IDE Plugins that can perform syntax checks and/or auto-completion:

* [JetBrains YAML Plugin](https://plugins.jetbrains.com/plugin/13126-yaml)
* [VSCode YAML Plugin](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)
* [Atom YAML Linter](https://atom.io/packages/linter-js-yaml)
:::

### Framework Examples

Below are framework-specific configuration examples that exist in the [Testrunner Toolkit repository](https://github.com/saucelabs/testrunner-toolkit/tree/master/.sauce). The repository uses these configurations for its pipeline.

>
> **NOTE:** The test files need to match `(spec|test)` in their file name so they are automatically detected as `testfiles`.
>

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'Puppeteer', value: 'puppeteer'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>

<TabItem value="cypress">

```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/master/.sauce/config.yml
```

</TabItem>
<TabItem value="playwright">

```yaml reference
https://github.com/saucelabs/saucectl-playwright-example/blob/master/.sauce/config.yml
```

</TabItem>
<TabItem value="puppeteer">

```yaml reference
https://github.com/saucelabs/saucectl-puppeteer-example/blob/master/.sauce/config.yml
```

</TabItem>
<TabItem value="testcafe">

```yaml reference
https://github.com/saucelabs/saucectl-testcafe-example/blob/master/.sauce/config.yml
```

</TabItem>
</Tabs>

## Concurrency
<p><small>supported frameworks: <Highlight color="#25c2a0">cypress</Highlight> <Highlight color="#25c2a0">testcafe</Highlight> <Highlight color="#25c2a0">playwright</Highlight></small></p>

`saucectl` runs test suites in parallel up to the concurrency allowance specified in the config file.

```yaml
sauce:
  concurrency: 10
```

Alternatively, you can override the setting in the configuration file for a particular test suite by specifying it as an attribute of the ` saucectl run` command.

```bash
saucectl run --ccy 10
```

A setting of `10` runs up to 10 test suites at the same time. If the test has more suites than that, excess suites are queued and run in order at the completion of currently running suites.

When running on Sauce cloud, the maximum concurrency that you can use is limited by your account settings.

## Set Different Screen Resolutions

<p><small>supported frameworks: <Highlight color="#25c2a0">cypress</Highlight></small></p>

If you wish to execute tests on different screen resolutions while using Testrunner Toolkit, add the `screenResolution` parameter to your `.sauce/config.yml`:

__Example__:

```reference
https://github.com/saucelabs/saucectl-cypress-example/blob/4141ba08e501ae2be691969a1626c78c18a77aff/.sauce/config.yml
```

## Additional Information

* [Run a Test](/testrunner-toolkit/running-tests): Learn how to run tests using TestRunner.
* [Pipeline Collaboration](/testrunner-toolkit/integrations) Run your tests in your CI platform:  
    * [Jenkins](/testrunner-toolkit/integrations/jenkins)
    * [GitHub Actions](/testrunner-toolkit/integrations/github-actions)
* [Configuration Syntax](/testrunner-toolkit/configuration/common-syntax) Review the syntax and data fields for `saucectl` configuration settings that are common to all set ups, or review framework-sensitive configuration settings:
    * [Cypress Syntax](/testrunner-toolkit/configuration/cypress)
    * [Playwright Syntax](/testrunner-toolkit/configuration/playwright)
    * [TestCafe Syntax](/testrunner-toolkit/configuration/testcafe)
    * [Puppeteer Syntax](/testrunner-toolkit/configuration/puppeteer)
