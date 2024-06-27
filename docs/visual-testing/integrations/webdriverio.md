---
sidebar_label: WebdriverIO
---

import FullPageJS from '../_partials/_fullpage-js.md';
import ClippingWDIO from '../_partials/_clipping-webdriver.md';
import EnvironmentVariables from '../_partials/_environment-variables.md';
import SelectiveDiffingRegion from '../_partials/_selective-diffing-region.md';

# WebdriverIO Integration

## Introduction

This guide requires an existing WebdriverIO project.<br />
You can alternatively take a look to our [example repository](#example).

Sauce Visual provides an integration with [WebdriverIO](https://webdriver.io/) through a service that you can add to any existing WebdriverIO project.

Sauce Visual adds new commands to the WebdriverIO's `browser` object:

- `browser.sauceVisualCheck()`: Takes a screenshot and send it to Sauce Visual for comparison.
- `browser.sauceVisualResults()`: Waits for diff calculations to complete and returns a summary of results.
  See [Test results summary](#test-results-summary) for more details about summary format and sample usage.

## Quickstart

### Step 1: Add Sauce Visual dependency

Install the Sauce Visual service in your current project.

```sh
npm install --save-dev @saucelabs/wdio-sauce-visual-service
```

### Step 2: Add SauceVisualService to your WebdriverIO configuration

Add the `SauceVisualService` to your existing configuration (E.g. `wdio.conf.(js|ts)`):

```ts
import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    //...
    services: [
    //
    // This service is needed for WDIO to make sure it can connect to Sauce Labs to:
    // - automatically update the names
    // - automatically update the status (passed/failed)
    // - automatically send the stacktrace in case of a failure
    //
    'sauce',
    //
    // This service is needed for the Sauce Visual service to work
    //
    [
      '@saucelabs/wdio-sauce-visual-service',
      // The options for the Sauce Visual service
      {
        buildName: 'Sauce Demo Test',
        branch: 'main',
        project: 'WDIO examples',
      },
    ],
  ],
  //...
}
```

### Step 3: Add visual tests in your project

Add a check to one of your tests:

```ts
describe('Login Flow', () => {
    it('should login with valid credentials', async () => {
        //...
        await browser.sauceVisualCheck('My Login Page')
        //...
    });
})
```

### Step 4: Configure your Sauce Labs credentials

Sauce Visual relies on environment variables for authentications.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your WebdriverIO job.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

### Step 5: Run the test

Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent WebdriverIO tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review.


## Advanced usage

### Customizing Your Builds (Environment Variables)

Below are the environment variables available in the Sauce Visual WebdriverIO plugin. Keep in mind that the variables defined in WebdriverIO configuration have precedence over these variables.

<EnvironmentVariables />

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
const EXPECTED_TOTAL_UNAPPROVED_DIFFS = 0;

expect((await browser.sauceVisualResults()).UNAPPROVED).toBe(EXPECTED_TOTAL_UNAPPROVED_DIFFS);
```

### Build attributes

When creating the service in WebdriverIO's configuration, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. ([More info on baseline matching](../../visual-testing.md#baseline-matching))

Options:

- `buildName`: Name of the build
- `project`: Name of the project
- `branch`: Name of the branch, used for matching
- `defaultBranch`: Name of the default branch, used for matching

They need to be set through the `options` parameter.

Example:

```ts
...
export const config: Options.Testrunner = {
...
    services: [
        'sauce',
        [
            '@saucelabs/wdio-sauce-visual-service',
            {
                buildName: 'Sauce Demo Test',
                branch: 'main',
                project: 'WDIO examples',
            },
        ],
    ],
...
}
```

### Ignored regions

#### Component-based ignored region

Sauce Visual provides a way to ignore a list of components.

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
- `height`: The height of the region to ignore

_Note: all values are pixels_

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

### Capturing the DOM snapshot

Sauce Visual does not capture dom snapshot by default. It can be changed in `sauceVisualCheck` options.

Example:
```ts
browser.sauceVisualCheck('Before Login', {
    captureDom: true
});
```

### Full page screenshots

<FullPageJS />

### Clip to an element

<ClippingWDIO />

## Example

An example project is available [here](https://github.com/saucelabs/visual-examples/tree/main/wdio).
