---
sidebar_label: Nightwatch
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nightwatch Integration

:::note Important
Access to this feature is currently limited to Enterprise customers as part of our commitment to providing tailored solutions. We are excited to announce that self-service access is under development and will be released shortly. Stay tuned!
:::

## Introduction

This guide requires an existing Nightwatch project.<br />
You can alternatively take a look to our [example repository](#example).

Sauce Visual provides an integration with [Nightwatch](https://nightwatchjs.org/) through a service that you can add to any existing Nightwatch project.

Sauce Visual adds new commands to the Nightwatch's `browser` object:

- `browser.sauceVisualCheck()`: Takes a screenshot and send it to Sauce Visual for comparison.
- `browser.sauceVisualResults()`: Waits for diff calculations to complete and returns a summary of results.
  See [Test results summary](#test-results-summary) for more details about summary format and sample usage.

## Quickstart

### Step 1: Add Sauce Visual dependency

Install the Sauce Visual service in your current project.

```sh
npm install --save-dev @saucelabs/nightwatch-sauce-visual-service
```

### Step 2: Add SauceVisualService to your Nightwatch configuration

Add the `SauceVisualService` to your existing configuration (E.g. `nightwatch.conf.(js|ts)`):

```ts
// ...
module.exports = {
  // ...
  // Add the service
  plugins: [
    // ... other plugins
    '@saucelabs/nightwatch-sauce-visual-service',
  ],
  // ...
  test_settings: {
    // ...
    default: {
      // ...
      sauceVisualService: {
        buildName: 'Nightwatch Visual Demo Test',
        project: 'Nightwatch Project',
        branch: 'main',
      },
      // ...
    },
    // ...
  },
  // ...
};
```

### Step 3: Add visual tests in your project

Add a check to one of your tests:

<Tabs
defaultValue="Default"
  values={[
    {label: 'Default', value: 'Default'},
    {label: 'Mocha', value: 'Mocha'},
    {label: 'CucumberJS', value: 'CucumberJS'},
  ]}>
<TabItem value="Default">

```ts
import { NightwatchTests } from 'nightwatch';

const home: NightwatchTests = {
  'Sauce Demo test': () => {
    browser.url('https://saucedemo.com').sauceVisualCheck('Home Page').end();
  },
};

export default home;
```

</TabItem>
<TabItem value="Mocha">

```js
describe('Saucedemo example', function () {
  it('Check Home Page - 1', (browser) => {
    browser
      .url('https://saucedemo.com')
      // NOTE: adding the `this` context is required for the service
      // to properly pass the suite and test name to Sauce Labs Visual
      .sauceVisualCheck('Home Page - 1', this);
  });
});
```

</TabItem>
<TabItem value="CucumberJS">

```js
const { Given, When } = require('@cucumber/cucumber');

Given(/^I am on the login page$/, function () {
  return browser.navigateTo('https://www.saucedemo.com');
});

When(/^I check the page before login$/, function () {
  return browser.sauceVisualCheck('Before Login');
});
// ...
```

  </TabItem>
</Tabs>

### Step 4: Configure your Sauce Labs credentials

Sauce Visual relies on environment variables for authentications.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your Nightwatch job.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

### Step 5: Run the test

Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent Nightwatch tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review.

At the end of the build, a summary will be displayed in the console:

```sh
┌───────┬────────────┐
│ Count │ Status     │
├───────┼────────────┤
│ 0     │ Approved   │
├───────┼────────────┤
│ 1     │ Equal      │
├───────┼────────────┤
│ 0     │ Queued     │
├───────┼────────────┤
│ 5     │ Unapproved │
├───────┼────────────┤
│ 0     │ Rejected   │
└───────┴────────────┘
```

:::note
More information about the status can be found [here](#sauce-visual-assertion)
:::

## Advanced usage

### Sauce Visual Assertion

:::note
This feature is only available when using the `default` and `CucumberJS` TestRunners. It is not available when using the `mocha` TestRunner.
:::

At the end of each Test you can assert the status of all the visual comparisons that have been made during the test. Sauce Visual will return a summary of the test results in this format:

```
{
    QUEUED: number;     // Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts
    EQUAL: number;      // Diffs that have no changes detected
    UNAPPROVED: number; // Diffs that have detected changes and waiting for action
    APPROVED: number;   // Diffs that have detected changes and have been approved
    REJECTED: number;   // Diffs that have detected changes and have been rejected
}
```

By using the following assertion you can make sure that all the visual comparisons have been completed and approved:

```ts
import { NightwatchTests } from 'nightwatch';
import { DiffStatus } from '@saucelabs/nightwatch-sauce-visual-service';

const home: NightwatchTests = {
  'Check Inventory Page': () => {
    browser
      .url('https://saucedemo.com')
      .setValue('input[data-test="username"]', 'standard_user')
      .setValue('input[data-test="password"]', 'secret_sauce')
      .click('input[data-test="login-button"]')
      .waitForElementVisible('.inventory_list')
      .sauceVisualCheck('Inventory Page')
      .click('[data-test="add-to-cart-sauce-labs-backpack"]')
      .sauceVisualCheck('Added backpack to cart')
      // Here we validate that we don't have any unapproved visual changes
      // See status codes above
      .assert.sauceVisualResults(DiffStatus.Unapproved, 0);
  },
};

export default home;
```

### Build attributes

When creating the service in Nightwatch's configuration, extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. ([More info on baseline matching](../../visual-testing.md#baseline-matching)).

Options:

- `buildName`: Name of the build, not used for matching, only for display purposes
- `project`: Name of the project, used for matching
- `branch`: Name of the branch, used for matching
- `defaultBranch`: Name of the default branch, used for matching

```ts
// ...
module.exports = {
  // ...
  // ...
  test_settings: {
    // ...
    default: {
      // ...
      sauceVisualService: {
        buildName: 'Nightwatch Visual Demo Test',
        project: 'Nightwatch Project',
        branch: 'main',
      },
      // ...
    },
    // ...
  },
  // ...
};
```

### Ignored regions

In the case you need to ignore some region when running your tests, Sauce Visual provides a way to ignore user-specified areas.

Those ignored regions are specified when requesting a new snapshot.

#### Component-based ignored region

You can ignore elements from the page based on providing a component by its selector or by a page object reference (if you are using page objects).

Example:

```ts
const page = browser.page.homePage();
await browser.sauceVisualCheck('Home Page', {
  ignore: [
    // If you are using page objects
    page.elements.username.selector,
    //
    // NOTE: You can't use the normal page object syntax, like '@username' here. Please use the above.
    // If you do use the normal syntax, then the service will filter out the property, not use it and log a warning like
    //  Ignoring page object reference: '@username'. Please use the 'pageObjectName.elements.username.selector' annotation.
    //
    // If you prefer selectors
    'input[data-test="password"]',
  ],
});
```

#### User-specified ignored region

Alternatively, an ignored region can be a specific region that is defined by four elements.

- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The height of the region to ignore

_Note: all values are pixels_

Example:

```ts
browser
  .url('https://saucedemo.com')
  .sauceVisualCheck('Home Page', {
    ignore: [
      {
        x: 100,
        y: 100,
        width: 200,
        height: 200,
      },
    ],
  })
  .end();
```

### Capturing the DOM snapshot

Sauce Visual does not capture dom snapshot by default. It can be changed in `sauceVisualCheck` options.

Example:
```ts
browser
  .url('https://saucedemo.com')
  .sauceVisualCheck('Home Page', {
    captureDom: true
  })
  .end();
```

### Full page screenshots

If you want to see more than what's on the screen, you can take a full-page screenshot. It'll capture everything by scrolling and stitching it together.

:::note
It's recommended to use the `hideAfterFirstScroll` option for elements like sticky header.
:::

Options:

- `enable`: Enable taking full page screenshot (limited to desktop devices only)
- `delayAfterScroll`: Delay in ms after scrolling and before taking screenshots (helps with lazy loading content)
- `hideAfterFirstScroll`: Hide elements on the page after first scroll (uses css selectors)

Example:

```ts
await browser.sauceVisualCheck('Long content page', {
  fullPage: {
    enable: true,
    delayAfterScroll: 500,
    hideAfterFirstScroll: ["#header"],
  },
});
```

### Fail on failures

By default, Sauce Visual will not fail the test if there are any failures during the comparison process. A failure will be logged in the Sauce Labs Visual dashboard, but the test will continue to run.

If you want to fail the test when there are failures, you can set the `failOnFailures` option to `true`:

```ts
// ...
module.exports = {
  // ...
  // ...
  test_settings: {
    // ...
    default: {
      // ...
      sauceVisualService: {
        failOnFailures: true, // Default is false
      },
      // ...
    },
    // ...
  },
  // ...
};
```

## Example

An example project is available [here](https://github.com/saucelabs/visual-examples/tree/main/nightwatch).
