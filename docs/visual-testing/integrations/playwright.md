---
sidebar_label: Playwright
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Playwright Integration

An extension for [Playwright](https://playwright.dev/) to integrate effortless visual testing with Sauce Visual.

## Usage

### Step 1 - Install the Visual Package

Install and add the Sauce Visual Playwright package to your project.

```sh
npm i @saucelabs/visual-playwright
```

### Step 2 - Create Your Setup and Teardown

The setup / teardown block will allow Sauce Visual to automatically create and finish builds and associate all snapshots with the current build during a run.

Create the following two files with their respective contents or append the visual config to your current global setup / teardowns:

<details>
    <summary>`global-setup.ts` File contents</summary>

```ts
import { FullConfig } from '@playwright/test';
import { sauceVisualSetup } from "@saucelabs/visual-playwright";

export default async function globalSetup(config: FullConfig) {
    // If you already have a setup, append this line somewhere in your setup block.
    await sauceVisualSetup();
}
```
</details>

<details>
    <summary>`global-teardown.ts` File contents</summary>

```ts
import { FullConfig } from '@playwright/test';
import { sauceVisualTeardown } from "@saucelabs/visual-playwright";

export default async function globalTeardown(config: FullConfig) {
    // If you already have a teardown, append this line somewhere in your teardown block.
    await sauceVisualTeardown();
}
```
</details>


Edit your `playwright.config.ts` and append the following config options with the filenames that you created / referenced above if not already present:

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
    // ... your other config options
    globalSetup: require.resolve('./global-setup'),
    globalTeardown: require.resolve('./global-teardown'),
});
```

### Step 3 - (Optional) Add a Sauce Visual Fixture

Though this step is optional it is _highly recommended_ for ease of use / developer experience. By creating a custom Playwright fixture you can enable quick and convenient access to the Sauce Visual service, as well as setting and configuring global defaults which can be overridden on a per-test basis. See the [Playwright Fixtures Docs Page](https://playwright.dev/docs/test-fixtures#creating-a-fixture) for more information and other examples of the benefits.

If you already have a custom fixture file, append the body of the example `base.extend` below to it; otherwise, create a `custom-test.ts` file with the included contents.

<details>
    <summary>`custom-test.ts` File contents</summary>

```js
import { test as base } from "@playwright/test";
import { sauceVisualFixtures, SauceVisualFixtures } from "@saucelabs/visual-playwright";

export const test = base.extend<SauceVisualFixtures>({
    // Set up the Sauce Visual fixture, and optionally customize the global options which are sent
    // with each sauce visual check to reduce duplication.
    ...sauceVisualFixtures({
        // You can append some of the options available in the 'Check Options' section below. Ex:
        // captureDom: true,
        // delay: 200,
    }),
});

export { expect } from "@playwright/test";
```

[//]: # (</SauceVisualFixtures> fake closing block here as a comment for MDX format)
</details>

After setup, you would replace usages of

```js
import { test, expect } from '@playwright/test'
```

with

```js
import { test, expect } from '../custom-test'
```

(or the location of the custom test file relative to the current directory)

### Step 4 - Use Sauce Visual in Your Tests

If you've set up a fixture during Step 3, use the 'Fixture' example, otherwise, you can still access Sauce Visual using our exported function with the 'Standard' example.

<Tabs>
    <TabItem value="fixture" label="Fixture" default>
```ts
import { test, expect } from '../custom-test';

// Add the `sauceVisual` fixture into each test you want to capture a snapshot in
// -------------------------------- here ▼ --------------------------------------
test('has title', async ({ page, sauceVisual }) => {
    await page.goto('https://docs.saucelabs.com/visual-testing/');
    await expect(page).toHaveTitle(/Sauce Visual/);

    // Call `visualCheck` using the fixture and optionally apply any additional
    // options as the second argument.
    await sauceVisual.visualCheck("Fixture Snapshot");
});
```
    </TabItem>
    <TabItem value="no-fixture" label="Standard" default>
```ts
import { expect, test } from '@playwright/test';
// Import `sauceVisualCheck` from our visual plugin
import { sauceVisualCheck } from '@saucelabs/visual-playwright';

// Expose the `testInfo` argument here ▼ -------
test('has title', async ({ page }, testInfo) => {
    await page.goto('https://docs.saucelabs.com/visual-testing/');
    await expect(page).toHaveTitle(/Sauce Visual/);

    // Pass the current page object and test info into the `sauceVisualCheck` call, and optionally
    // customize the options via the fourth argument.
    await sauceVisualCheck(page, testInfo, 'Export Snapshot');
});
```
    </TabItem>
</Tabs>

### Step 5 - Configure Your Sauce Labs Credentials

Sauce Visual relies on environment variables for authentication.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your Playwright tests.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

### Step 6 - Run Your Tests

Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

## Check Options

These options can be defined globally during fixture initialization (see [Step 3](#step-3---optional-add-a-sauce-visual-fixture)) or as an option when calling `sauceVisual.visualCheck` / `sauceVisualCheck`.

| Key             | Type                     | Default                  | Description                                                                                                                                                                                        |
|:----------------|:-------------------------|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `captureDom`    | `boolean`                | `true`                   | Toggles DOM snapshot capture.                                                                                                                                                                      |
| `clipSelector`  | `string`                 | `undefined`              | A CSS selector that we should clip the final screenshot to.                                                                                                                                        |
| `delay`         | `number`                 | `0` (no delay)           | A number, in ms, that we should delay before taking the snapshot.                                                                                                                                  |
| `ignoreRegions` | `(RegionIn \| string)[]` | `[]` (empty)             | An array of manually created ignore regions, or CSS selectors in string form to ignore.                                                                                                            |
| `diffingMethod` | `DiffingMethod`          | `DiffingMethod.Balanced` | The diffing method from the backend that we should use when performing visual differences. This can be customized by using the `DiffingMethod` enum exported from our `@saucelabs/visual` package. |

## Example

An example project is available in our [visual examples repo](https://github.com/saucelabs/visual-examples/tree/main/playwright-js).
