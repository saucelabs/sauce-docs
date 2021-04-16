---
id: running-tests
title: Running Tests
sidebar_label: Running Tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight from '../../src/components/highlight.jsx'

This page details the different options for using the `saucectl run` command to execute your tests in the JavaScript framework of your choice:

* Run tests locally with Docker and send results to Sauce Labs
* Run tests remotely on Sauce Labs virtual machines
* Run tests against a local app server / app running on `localhost`

## What You'll Need

* [Install `saucectl`](/testrunner-toolkit/installation)
* [Configure Your Test Environment](/testrunner-toolkit/configuration)

:::note default test location
Unless you specify a test directory, `saucectl` executes tests based on the test directory generated for the framework you selected during installation. For example, with Cypress, `saucectl` will attempt to locate `cypress.json`, as well as the default `cypress` directory.
:::

## Test on Docker (Local Testing)

The following steps outline how to run your tests on your local machine with the containerized solution. This is the preferred option if you wish to run tests on your local machine, or if you wish to accelerate test execution in CI.

Please note that if you don't specify a `--test-env` flag when running tests, `saucectl` defaults to `sauce` mode.

:::note `docker` Syntax Page
See the [`docker` syntax reference page](/testrunner-toolkit/configuration/common-syntax#docker) for further details.
:::

```bash
saucectl run --test-env docker
```

### Specify a Docker Image

By default, `saucectl` will get a docker image from sauce infrastructure and run test against it. Meanwhile, you can still specify the Docker image in the `config.yml` if you want to run test in specific docker image. For example, if you run cypress tests the configuration should look like so:

```yaml
docker:
  image: saucelabs/stt-cypress-mocha-node:v5.6.0
```

Refer to the [framework version support matrix](/testrunner-toolkit#supported-frameworks-and-browsers) for a list of framework-specific images.

### Transfer Test Files to the Container

The configuration field: `fileTransfer`, instructs `saucectl` how to copy the test files into the docker container. There are currently two choices `mount` or `copy`.

:::note `fileTransfer` Syntax
Please refer to the [`fileTransfer` syntax page](/testrunner-toolkit/configuration/common-syntax#filetransfer) for further detals.
:::

```yaml
docker:
  fileTransfer: mount # Defaults to `mount`. Choose between mount|copy.
  image: saucelabs/stt-cypress-mocha-node:v5.6.0
```

## Test on Sauce Labs

<p><small>supported frameworks: <Highlight color="#25c2a0">cypress</Highlight></small></p>

If you wish to run your tests on Sauce Labs VMs, simply run the following command:

```bash
saucectl run --test-env sauce
```

If you wish to increase your VM concurrency you can also use the flag `--ccy <vm number>`.

```bash
saucectl run --test-env sauce --ccy 2
```

You can also designate `concurrency` in the `config.yml` like so:

```yaml {2}
sauce:
  concurrency: 3
  region: us-west-1
```

Please note that VM concurrency depends on the suite number rather than the number of `.spec.js |.test.js` files. Plese visit the [CLI Reference](/testrunner-toolkit/saucectl#ccy) for more information regarding command parameters:

> Your concurrency and VM entitlements also depend on your Sauce Labs subscription tier. For more information please visit the [pricing guide](https://saucelabs.com/pricing)

### Cross-Browser Tests

<p><small>supported frameworks: <Highlight color="#25c2a0">cypress</Highlight></small></p>

When you run tests on Sauce Labs VMs you have access to a wide range of OS + browser combinations. In order to test against multiple different browsers, you can indicate the desired combinations in the `suites` > `browser` field:

```yaml {4,11,18}
suites:
  # Chrome
  - name: "Swag Labs Login Chrome"
    browser: "chrome"
    platformName: "Windows 10"
    screenResolution: "1400x1050"
    config:
      testFiles: [ "**/login.*" ]
  # MicrosoftEdge
  - name: "Swag Labs Login MicrosoftEdge"
    browser: "microsoftedge"
    platformName: "Windows 10"
    screenResolution: "1400x1050"
    config:
      testFiles: [ "**/login.*" ]
 # Firefox
   - name: "Swag Labs Login Firefox"
     browser: "firefox"
     platformName: "Windows 10"
     screenResolution: "1400x1050"
     config:
       testFiles: [ "**/login.*" ]
```

> For full examples, please [visit this repository](https://github.com/saucelabs-training/demo-js/tree/master/testrunner-toolkit)

### Using Sauce Connect

If you're running tests on Sauce Labs VMs, but the site under test is protected behind strict network security/policies, you can utilize [Sauce Connect Proxy](/secure-connections/sauce-connect) to circumvent the problem.

You can use the `--tunnel-id` flag with `saucectl` in order to use an existing Sauce Connect tunnel with your test session:

```bash
saucectl run --test-env sauce --tunnel-id <tunnel-id>
```

> For more information on how to use the `--tunnel-id` flag, please visit the [CLI Reference](/testrunner-toolkit/saucectl#tunnel-id).

To enable Sauce Connect Proxy in the `config.yml`, use the `tunnel` field:

```yaml {3,4}
sauce:
  concurrency: 3
  tunnel:
    id: sauce-ci-tunnel
  region: us-west-1
```

> For more information regarding how to install, setup, and configure Sauce Connect Proxy, please visit the [Sauce Connect Proxy documentation](/secure-connections/sauce-connect)

### Analyze Test Results in Sauce Labs

After tests complete, Testrunner Toolkit uploads the test assets (logs, test results, and test videos) to your [Sauce Labs account](https://app.saucelabs.com) and displays a job link like so:

```html
https://app.saucelabs.com/tests/<job-number>
```
From this job link you can review, share, and analyze the test results just as you would with any other test framework executed on Sauce Labs.

### Quick demo

<img src={useBaseUrl('img/stt/saucectl-demo.gif')} alt="saucectl Demo" />


## Run Tests Against a Local App

If you plan to run tests against a local app server / app running on `localhost` (either on your host machine or in a CI pipeline) there are specific workflows you must follow.

:::tip Need to Access Custom Node Modules?
If you have third party, or custom modules that are required test dependencies, you can utilize the **`npm`** field in your `config.yml` in order to include those packages during test execution. Refer to the [syntax reference](/testrunner-toolkit/configuration/common-syntax#npm) for further details.
:::

### Run Tests in Docker Mode and Send Results to Sauce Labs

When you run the commands:

* `saucectl  run` or
* `saucectl run --test-env docker`

ensure the `docker` container can access the local app server (e.g. `localhost:<port>/`) from your host machine. After the tests complete the results upload to the Sauce Labs results dashboard.

### Run Tests on Sauce Labs with Sauce Connect

If you wish to test the app running on a local app  server with Sauce Labs VMs:

* Download and launch [Sauce Connect](/secure-connections/sauce-connect)
* Specify a `tunnel-id` (either in the config or using the `--tunnel-id` CLI flag)

:::tip Working Example
Here is a working example of this use case using [Sauce Connect and GitHub Actions](/testrunner-toolkit/integrations/github-actions).
:::

:::note Further Details
Please see [Using Sauce Connect](#using-sauce-connect) for further details.
:::

## Automation Framework Examples

The examples here show how Pipeline testing can be used. Try them and find your own use cases.

Every __Testrunner__ image comes with a preconfigured setup that allows you to focus on writing tests instead of tweaking with the configurations. Our initial `testrunner` flavors come either with Cypress, Playwright, or TestCafe as an automation framework.


Below are example snippets in the following frameworks: [Cypress](https://github.com/cypress-io/cypress), [Playwright](https://playwright.dev/#version=v1.0.1&path=docs%2Fcore-concepts.md&q=browser), and [TestCafe](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/browser.html).

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>

<TabItem value="cypress">

<!--https://github.com/saucelabs/saucectl/blob/master/tests/e2e/cypress/integration/example.test.js-->

```js
context('Actions', () => {
		beforeEach(() => {
			cy.visit('https://example.cypress.io/commands/actions')
		})
		it('.type() - type into a DOM element', () => {
			// https://on.cypress.io/type
			cy.get('.action-email')
				.type('fake@email.com').should('have.value', 'fake@email.com')
		})
	})
```

</TabItem>
<TabItem value="playwright">

The Playwright testrunner image also exposes a global `browser` variable that represents Playwright's [`Browser class`](https://playwright.dev/#version=v1.0.2&path=docs%2Fcore-concepts.md&q=browser). In addition to that you also have access to a pre-generated [browser context](https://playwright.dev/#version=v1.0.2&path=docs%2Fcore-concepts.md&q=browser-contexts) via `context` as well as to a [page frame](https://playwright.dev/#version=v1.0.2&path=docs%2Fcore-concepts.md&q=pages-and-frames) via `page`.

<!--https://github.com/saucelabs/saucectl/blob/master/tests/e2e/playwright/example.test.js
-->
```js
describe('saucectl demo test', () => {
	test('should verify title of the page', async () => {
		await page.goto('https://www.saucedemo.com/');
		expect(await page.title()).toBe('Swag Labs');
	});
});
```

</TabItem>
<TabItem value="testcafe">

<!--https://github.com/saucelabs/saucectl/blob/master/tests/e2e/testcafe/example.test.js
-->
```js
import { Selector } from 'testcafe';
fixture `Getting Started`
	.page `http://devexpress.github.io/testcafe/example`

const testName = 'testcafe test'
test(testName, async t => {
	await t
		.typeText('#developer-name', 'devx')
		.click('#submit-button')
		.expect(Selector('#article-header').innerText).eql('Thank you, devx!');
});
```

</TabItem>
</Tabs>
