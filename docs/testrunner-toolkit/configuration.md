---
id: configuration
title: Testrunner Toolkit Configuration
sidebar_label: Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Testrunner Toolkit requires a configuration file to know which tests to run, along with which framework to use. Examples of some possible configuration fields you can set include:

* custom `tags`
* location of the test `files`
* desired framework `image` and `version`
* desired `sauce` data center

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* [Docker](https://docs.docker.com/get-docker/) installed
* Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g. `docker info` works in your terminal)
* Know which [framework and browser version](/testrunner-toolkit#supported-frameworks-and-browsers) you wish to run tests against

## Generate a Configuration File and Tests

If you're starting your journey without tests, the first is to generate a `.sauce/config.yml`, which in turn will create an example `tests` directory in your project.
:::note
You should run the following commands in the root of your project directory
:::

__Generated Files__

* a config file (`./sauce/config.yml`)
* the `tests` directory
* an example test (`tests/example.test.js`)

### Authenticate
To get started, you must: [download and install testrunner toolkit](testrunner-toolkit/installation.md) and run the following command to authenticate Sauce Labs:

```bash
saucectl configure
```

The command then generates a `credentials.yml` file:

```yaml title="example cypress credentials.yml"
username: <your saucelabs username>
accessKey: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
source: environment variables
```

:::warning Do NOT commit `credentials.yml`
It should go without saying, but do not publicly expose your `credentials.yml` file over the internet. Make sure you add this file to your `.gitignore` file, as you should only use it locally.
:::

### Create a New File
Then run the following command to generate a config file:

```bash
saucectl new
```

### Choose a Framework
After running this command, a prompt appears asking you to select the desired framework:

```bash
8:59AM INF Start New Command
     Choose a framework:
     ❯ Cypress
       Playwright
       Testcafe
```

### Select a Data Center
Next, a prompt appears asking you to select the desired [Sauce Labs data center](https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints):

```bash
8:59AM INF Start New Command
     Choose a framework: Cypress
     Choose the sauce labs region:
     ❯ us-west-1
       eu-central-1
```

### Run the Test

Finally, Testrunner Toolkit generates a new config file in your current working directory (`.sauce/config.yml`) and prompts you to run the following command:

```bash
New project bootstrapped successfully! You can now run:
$ saucectl run
```

:::note default test location
Unless you specify a test directory, `saucectl` executes tests based on the framework's default test directory. For example with a cypress test, `saucectl` will attempt to locate `cypress.json`, as well as the default `cypress` directory.
 
Consult your desired framework's documentation for more information about the default test locations.
:::

`saucectl` then kicks off a test run and will:
* pull the necessary docker images/layers (e.g. `saucelabs/stt-cypress-mocha-node:v<tag>`)
* copy/mount your test files to the docker container
* run the tests within the docker container
* display the test results in the console

### Analyze Test Results in Sauce Labs

After tests complete, Testrunner Toolkit uploads the test assets (logs, test results, and test videos) to your [Sauce Labs account](https://app.saucelabs.com) and displays a job link like so:

```html
https://app.saucelabs.com/tests/<job-number>
```
From this job link you can review, share, and analyze the test results just as you would with any other test framework executed on Sauce Labs.

## Modifying the Configuration File

If you have existing tests and wish to expand or modify the `.sauce/config.yml`, consider the following example.



### Using a Basic Configuration

By default `saucectl` searches for a file called `config.yml`, for example:

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
  # In this case the usage of `copy` is advised. `copy` will simply copy files and folders into the container.
  fileTransfer: mount # Defaults to `mount`. Choose between mount|copy.
  image:
    name: saucelabs/stt-cypress-mocha-node
    tag: v0.3.4
cypress:
  configFile: "tests/cypress.json"  # We determine related files based on the location of the config file.
suites:
  - name: "saucy test"
    browser: "chrome"
    config:
      env:
        hello: world
      testFiles: [ "**/*.*" ] # Cypress native glob support.
```

If you wish to use more than one framework, or to configure different sets of tests separately, you can use any name for the configuration file and specify it with the following command:

```bash
saucectl run -c ./path/to/config.yml
```

### Configuration Examples
Below are framework-specific configuration examples that exist in the [Testrunner Toolkit repository](https://github.com/saucelabs/testrunner-toolkit/tree/master/.sauce). The repository uses these configurations for its pipeline:

>
> **NOTE:** The test files need to match `(spec|test)` in their file name so they are automatically detected as `testfiles`.
>

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>
  
<TabItem value="cypress">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/cypress.yml
```

</TabItem>
<TabItem value="playwright">

```yaml reference 
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/playwright.yml
```

</TabItem>
<TabItem value="testcafe">

```yaml reference 
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/testcafe.yml
```

</TabItem>
</Tabs>

### Prepare your environment

Saucectl offers the possibility to set up your tests environment before executing any of your suites using `beforeExec`: 


```yaml
beforeExec:
  - npm install --save chai
```

## Additional Resources

Please visit [here](/dev/cli/saucectl#parallel) for more information about the parallelization feature and its limitations. You can also visit our [CI Integrations](integrations.md) page for more information on how to use the following CI platforms:

* [Jenkins](integrations.md#jenkins)
* [CircleCI](integrations.md#circleci)