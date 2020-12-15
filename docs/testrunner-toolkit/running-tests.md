---
id: running-tests
title: Running Tests in Testrunner Toolkit
sidebar_label: Running Tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Before you begin testing with [Testrunner Toolkit](testrunner-toolkit.md), you must choose an automation framework.

## Choose an Automation Framework
1. Run the following command:
    ```bash
    saucectl new
    ```
2. Choose the desired framework following the prompt:
    * [Puppeteer](https://github.com/puppeteer/puppeteer)
    * [Playwright](https://github.com/microsoft/playwright)
    * [TestCafe](https://devexpress.github.io/testcafe)
    * [Cypress](https://github.com/cypress-io/cypress)
    
    Next, the Toolkit will automatically generate: 
    * a config file (`./sauce/config.yml`)
    * the `tests` directory
    * an example test (`tests/example.test.js`)

## Run Your First Test

Run the following command to execute you first test and to ensure Testrunner works properly:

```bash
saucectl run
```

Testrunner Toolkit will then execute the test based on the information in `config.yml`. 

To learn more about how to configure `saucectl`, please visit the [Configuration](testrunner-toolkit/configuration.md) section of the docs. 

### Quick demo

<img src={useBaseUrl('img/stt/saucectl-demo.gif')} alt="saucectl Demo" />

## Automation Framework Examples
The examples here show how Pipeline testing can be used. Try them and find your own use cases. 

Every __testrunner__ image comes with a preconfigured setup that allows you to focus on writing tests instead of tweaking with the configurations. Our initial `testrunner` flavors come either with Puppeteer, Playwright, or TestCafe as an automation framework. 


Below are example snippets in the following frameworks: [Puppeteer](https://pptr.dev/#?product=Puppeteer&version=v3.0.3&show=api-class-browser), [Playwright](https://playwright.dev/#version=v1.0.1&path=docs%2Fcore-concepts.md&q=browser), [TestCafe](https://devexpress.github.io/testcafe/documentation/reference/test-api/testcontroller/browser.html), and [Cypress](https://github.com/cypress-io/cypress).


<Tabs
  defaultValue="puppeteer"
  values={[
    {label: 'Puppeteer', value: 'puppeteer'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
    {label: 'Cypress', value: 'cypress'},
  ]}>

<TabItem value="puppeteer">

Our Puppeteer testrunner image exposes `browser` into the global scope which represents an instance of its [`Browser class`](https://pptr.dev/#?product=Puppeteer&version=v3.0.4&show=api-class-browser). The browser will be initiated and shutdown by the testrunner setup.

<!--https://github.com/saucelabs/saucectl/blob/master/tests/e2e/puppeteer/example.test.js
-->
```js 
describe('saucectl demo test', () => {
	test('should verify title of the page', async () => {
		const page = (await browser.pages())[0]
		await page.goto('https://www.saucedemo.com/');
		expect(await page.title()).toBe('Swag Labs');
	});
});
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
</Tabs>