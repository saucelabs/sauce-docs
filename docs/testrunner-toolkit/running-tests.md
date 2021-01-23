---
id: running-tests
title: Running Tests in Testrunner Toolkit
sidebar_label: Running Tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

Before you begin testing we suggest visiting the [Testrunner Toolkit](testrunner-toolkit.md) home page as well as the [Configuration](configuration.md) page.

## What You'll Need

* [Docker](https://docs.docker.com/get-docker/) installed
* Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g. `docker info` works in your terminal)
* (Optional) A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))

## Create a Configuration

Creating a configuration is a crucial step before you begin testing. Without the `config.yml`, `saucectl` has no idea which framework to use during testing.

To get started quickly run the following commands:

1. Run the following command:
    ```bash
    saucectl new
    ```
2. Choose the desired framework following the prompt:
    * [Cypress](https://github.com/cypress-io/cypress)
    * [Playwright](https://github.com/microsoft/playwright)
    * [TestCafe](https://devexpress.github.io/testcafe)
    
    For more detailed information, please visit the [Configuration](configuration.md) page.

## Run Your First Test

Run the following command to execute you first test and to ensure Testrunner works properly:

```bash
saucectl run
```

Testrunner Toolkit will then execute the test based on the information in `config.yml`. 

### Test on Sauce Labs

<p><small><Highlight color="#25c2a0">cypress only</Highlight> <Highlight color="#1877F2">beta</Highlight> </small></p>

If you wish to run your tests on Sauce Labs VMs, simply run the following command:

```bash
saucectl run --test-env sauce
```

If you wish to increase your VM concurrency you can also use the flag `--ccy <vm number>`. 

```bash
saucectl run --test-env sauce --ccy 2
```

Please note that VM concurrency depends on the suite number rather than the number of `.spec.js |.test.js` files. Plese visit the [CLI Reference](/dev/cli/saucectl#ccy) for more information regarding command parameters:

> Your concurrency and VM entitlements also depend on your Sauce Labs subscription tier. For more information please visit the [pricing guide](https://saucelabs.com/pricing)


### Quick demo

<img src={useBaseUrl('img/stt/saucectl-demo.gif')} alt="saucectl Demo" />

## Automation Framework Examples
The examples here show how Pipeline testing can be used. Try them and find your own use cases. 

Every __testrunner__ image comes with a preconfigured setup that allows you to focus on writing tests instead of tweaking with the configurations. Our initial `testrunner` flavors come either with Cypress, Playwright, or TestCafe as an automation framework. 


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