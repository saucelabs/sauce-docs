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
- `browser.sauceVisualCheck()`: Takes a screenshot and send it to Sauce Labs Visual for comparison.
- `browser.sauceVisualResults()`: Waits for diff calculations to complete and returns a summary of results.
  See [Test results summary](#test-results-summary) for more details about summary format and sample usage.

## Quickstart

### Step 1: Add Sauce Labs Visual dependency

Install the Sauce Labs Visual service in your current project.

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

### Step 3: Add visual tests in your project

Add a check to one of your tests:

```ts
    describe('Login Flow', () => {
        it('should login with valid credentials', async () => {
            ...
            await browser.sauceVisualCheck('My Login Page')
            ...
        });
    })
```

### Step 4: Configure your Sauce Labs credentials

Sauce Labs Visual relies on environment variables for authentications.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your WebdriverIO job.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

### Step 5: Run the test

Everything is now configured, your tests can be run as any other WebdriverIO project.

Builds will appear on Sauce Labs platform as soon as they have been created by the running tests: https://app.saucelabs.com/visual/builds.

## Advanced usage

### Test results summary

`browser.sauceVisualResults()` returns a summary of test results in format: 
```ts
{
    QUEUED: number; // Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts
    EQUAL: number; // Diffs that have no changes detected
    UNAPPROVED: number; // Diffs that have detected changes and waiting for action
    APPROVED: number; // Diffs that have detected changes and have been approved
    REJECTED: number; // Diffs that have detected changes and have been rejected
}
```

Sample output:
```ts
{ APPROVED: 0, EQUAL: 0, UNAPPROVED: 2, REJECTED: 0, QUEUED: 0 }
```

Sample usage:
```ts
expect((await browser.sauceVisualResults()).UNAPPROVED).toBe(EXPECTED_TOTAL_UNAPPROVED_DIFFS);
```

### Build attributes

When creating the service in WebdriverIO's configuration, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. ([More info on baseline matching](../sauce-visual.md#baseline-matching))

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

#### Component-based ignored region

In case you need to ignore some components when running your tests, Sauce Labs Visual provides a way to ignore a list of components.

An ignored component can be a specific element from the page.

Those ignored components are specified when requesting a new snapshot.

Example:

```ts
    await browser.sauceVisualCheck('Inventory Page', {
        ignore: [
            // addBackPackToCartButton will be ignored
            InventoryPage.addBackPackToCartButton,
        ],
    });

```

#### User-specified ignored region

Alternatively, ignored regions can be user-specified areas. A region is defined by four elements.

- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The heigh of the region to ignore

*Note: all values are pixels*

Example:

```ts
await browser.sauceVisualCheck('Before Login', {
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

## Example

An example project is available [here](https://github.com/saucelabs/visual-examples/tree/main/wdio).