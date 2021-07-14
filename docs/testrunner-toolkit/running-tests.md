---
id: running-tests
title: Running Tests
sidebar_label: Running Tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page details the different options for using the `saucectl run` command to execute your tests in the framework of your choice.

* Run tests locally with Docker and send results to Sauce Labs
* Run tests remotely on Sauce Labs virtual machines
* Run tests against a local app server / app running on `localhost`

`saucectl` allows you to configure your test mode for your entire project or specify the mode at the individual test suite level. See the [`mode` configuration property description](/testrunner-toolkit/configuration/common-syntax#mode) for more information.

## What You'll Need

* [Install `saucectl`](/testrunner-toolkit/installation)
* [Configure Your Test Environment](/testrunner-toolkit/configuration)


## Test Locally on Docker

Testing in your local environment with the containerized solution allows you to accelerate test execution in CI and results in a smaller bundle transmission to the Sauce Labs cloud.

### Set mode to Docker

`saucectl` runs on Sauce Labs by default. To run any of your tests locally, set either the default `mode` or the suite `mode` to `docker` in your `config.yml` file, as shown in the following examples:

```yaml
defaults:
  mode: docker
```
_or_

```yaml
suites:
  - name: saucy test
    mode: docker
```

### Specify a Docker Image

`saucectl` can provide a default image to run your tests, or you can specify a Docker image in your `.sauce/config.yml`, as shown in the following example:

```yaml
docker:
  image: saucelabs/stt-cypress-mocha-node:v5.6.0
```

Refer to the [framework version support matrix](/testrunner-toolkit#supported-frameworks-and-browsers) for a list of framework-specific images.

### Transfer Test Files to the Container

The configuration field: `fileTransfer`, instructs `saucectl` how to copy the test files into the docker container. There are currently two choices `mount` or `copy`. Refer to the [`fileTransfer` property description](/testrunner-toolkit/configuration/common-syntax#filetransfer) for further detals.

```yaml
docker:
  fileTransfer: mount # Defaults to `mount`. Choose between mount|copy.
  image: saucelabs/stt-cypress-mocha-node:v5.6.0
```

## Test on Sauce Labs



### Cross-Browser Tests

<p><small>supported frameworks: <span class="highlight cypress">Cypress</span></small></p>

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
saucectl run --tunnel-id <tunnel-id>
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

Set the default or suite-specific `mode` in `config.yml` to `docker`:

```yaml
defaults:
  mode: docker
```
_or_

```yaml
suites:
  - name: saucy test
    mode: docker
```

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
