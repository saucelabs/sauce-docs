---
sidebar_label: WebdriverIO
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WebdriverIO Integration

## Introduction

This guide requires an existing WebdriverIO project.<br />
You can alternatively take a look to our [example repository](#example).

Sauce Labs Visual provides an integration with [WebdriverIO](https://webdriver.io/) through a service that you can add to any existing WebdriverIO project.

Sauce Labs Visual adds new commands to the WebdriverIO's `browser` object:
- `browser.check()`: Takes a screenshot and send it to Sauce Labs Visual for comparison.
- `browser.checkResults()`: Returns how many changes have been observed.

## Quickstart

### Step 1: Add Sauce Labs Visual dependency

First, Sauce Labs Visual service needs to be installed in your current project.

```sh
npm install --save @saucelabs/wdio-sauce-visual-service
```

### Step 2: Add SauceVisualService to your WebdriverIO configuration

Add the `SauceVisualService` to your existing configuration (E.g. `wdio.conf.(js|ts)`):

```ts
...
export const config: Options.Testrunner = {
...
    services: ['sauce', ['@saucelabs/wdio-sauce-visual-service', {}]],
...
}
```

### Step 3: Add visual tests in you project

Add a check to one of your tests:

```ts
    describe('Login Flow', () => {
        it('should login with valid credentials', async () => {
            ...
            await browser.check('My Login Page')
            ...
        });
    })
```

### Step 4: Configure your Sauce Labs credentials

Sauce Labs Visual relies on environment variables for authentications.\
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your WebdriverIO job.

Username and Access Key car be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

### Step 5: Run the test

Everything is now configured, your tests can be run as any other WebdriverIO project.

Builds will appear on Sauce Labs platform as soon as they have been created by the running tests: https://app.saucelabs.com/visual/builds.

## Advanced usage

### Build attributes

When creating the service in WebdriverIO's configuration, extra fields can be set to define the context, thus acting on which baselines it will be compared to. ([More info on baseline matching](../sauce-visual.md#baseline-matching))

Options:
- `buildName`: Name of the build
- `project`: Name of the project
- `branch`: Name of branch

They need to be set through the `options` parameter.

Example:
```ts
    services: ['sauce', ['@saucelabs/wdio-sauce-visual-service', {
        buildName: 'Sauce Demo Test',
        branch: 'main',
        project: 'WDIO examples'
    }]],
```

### Ignored regions

#### User-specified ignored region

In the case you need to ignore some region when running your tests, Sauce Labs Visual provides a way to ignore user-specified areas.

Those ignored regions are specified when requesting a new snapshot.

A region is defined by four elements.

- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The heigh of the region to ignore

*Note: all values are pixels*

Example:

```ts
await browser.check('Before Login', {
    ignore: [
        {
            x: 100,
            y: 100,
            width: 200,
            height: 200,
        },
    ],
});
```

#### Component-based ignored region

Alternatively, an ignored region can be a specific element from the page.

Example:

```ts
    await browser.check('Inventory Page', {
        ignore: [
            // addBackPackToCartButton will be ignored
            InventoryPage.addBackPackToCartButton,
        ],
    });

```

## Example

An example project is available [here](https://github.com/saucelabs/visual-examples/tree/main/wdio).