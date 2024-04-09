---
sidebar_label: Storybook
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import EnterpriseNote from '../_partials/_enterprise-note.md';
import EnvironmentVariables from '../_partials/_environment-variables.md';

# Storybook Integration

<EnterpriseNote />

An extension for [Storybook's test-runner](https://github.com/storybookjs/test-runner) powered by [Jest](https://jestjs.io/) and [Playwright](https://playwright.dev/) to integrate effortless visual testing with Sauce Visual.

## Introduction

This guide requires an existing Storybook setup.<br />
You can alternatively take a look to our [example repository](#example).

All tests are run in a headless [browser](#different-browsers) on your local machine/in your pipeline, so you don't need to worry about setting up a browser driver.

## Compatibility

This package leverage's Storybook's test-runner and metadata generation system for enabling automatic testing of Storybook stories. We recommend running Storybook `^7.0.0 || ^8.0.0` and an up-to-date version of the Storybook test-runner (`>=0.17.0` at time of writing).

## Getting Started

1. Follow [Storybook's instructions](https://github.com/storybookjs/test-runner/blob/next/README.md#getting-started) for setting up, installing, and configuring the test-runner if you haven't done so already. If you have already used or enabled the test-runner, you can skip this step.

2. Install this plugin in an existing project from the root:

```sh
npm i --save-dev @saucelabs/visual-storybook
```

:::note

If you don't have Playwright as a dev dependency in your project, you'll need to install it as well:

```sh
npm i --save-dev playwright
```

:::

3. Eject your test-runner config and append the Sauce Visual storybook configuration:

:::note
If you already have a custom config file for the test-runner you can skip to the next step for appending our configuration bootstrap. If not see below or read through the [storybook-runner docs](https://github.com/storybookjs/test-runner#ejecting-configuration) to eject the default test configuration.
:::

```sh
npx test-storybook --eject
```

The above should have created a file in the root directory, `test-runner-jest.config.js`. Edit this file and add an import for the sauce visual plugin:

`const { getVisualTestConfig } = require('@saucelabs/visual-storybook');`,

then append

`...getVisualTestConfig()`,

below the jest config spread. Your file should look similar to the example below:

```js
const { getJestConfig } = require('@storybook/test-runner');
const { getVisualTestConfig } = require('@saucelabs/visual-storybook');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  // The configuration for Sauce Lab's Visual Integration
  ...getVisualTestConfig(),
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   * @see https://github.com/playwright-community/jest-playwright#configuration
   */
};
```

4. Create a `test-runner.js` file in your storybook configuration directory (`<root>/.storybook` by default) if you do not already have one, and append our `postRender` hook into it. You can read more about this file in the [hook API](https://github.com/storybookjs/test-runner#experimental-test-hook-api) section. It should look something like below:

```js
// .storybook/test-runner.js
const { postVisit } = require('@saucelabs/visual-storybook');

module.exports = {
  postVisit,
};
```

5. Sauce Visual relies on environment variables for authentications.<br />
   Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your Storybook Testrunner job.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

6. Run your Storybook instance (or point to a built one), set the required environment variables ([see here](https://www.npmjs.com/package/@saucelabs/visual-storybook#customizing-your-builds-environment-variables) for all available / required fields), and run the test-runner! We'll take snapshots of all known Storybook stories and upload them into Sauce Visual.

```sh
# Spin up your storybook instance in a separate terminal window if you're not using a live /
# hosted one
npm run storybook

# Export your username and access key or set them in your CI variables. You can get these from
# app.saucelabs.com
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__

# Run the storybook command! Note: if you're running against a non-standard port or URL, you'll
# need to supply the --url parameter followed by the root url for your storybook instance. See the
# test-runner docs for more details / examples of config parameters.
# ex: --url http://localhost:6006
npx test-storybook
```

7. Review your changes in the [Sauce Visual Dashboard](https://app.saucelabs.com/visual/builds)!

## Customizing Your Builds (Environment Variables)

Below are the environment variables available in the visual-storybook plugin:

<EnvironmentVariables />

## Story / Global Configuration

Additional configuration options are exposed via the `sauceVisual` [Storybook parameters](https://storybook.js.org/docs/writing-stories/parameters). You can use these to tweak settings on a global, component, or per-story basis -- see the Storybook docs for details on how to apply them to each.

The below configuration options are also exported as the type `SauceVisualParams` from `@saucelabs/visual-storybook` if you'd like TypeScript types for them.

Parameters key: `sauceVisual`

| Key            | Type      | Default           | Description                                                                                                                                                                                                                                                                                                                               |
|:---------------|:----------|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `captureDom`   | `boolean` | `true`            | Toggles DOM snapshot capture.                                                                                                                                                                                                                                                                                                             |
| `clip`         | `boolean` | `true`            | If the story & layout supports it, will automatically clip to the `clipSelector` to remove extraneous whitespace. Recommended to be used in conjunction with [`centered` layout](https://storybook.js.org/docs/configure/story-layout#global-layout). Currently defaults to `false`, however, will default to `true` in a future version. |
| `clipSelector` | `string`  | `#storybook-root` | The selector to clip to when `clip = true`. Defaults to Storybook's default root element, `#storybook-root`.                                                                                                                                                                                                                              |
| `delay`        | `number`  | `0` (no delay)    | A number, in ms, that we should delay the snapshot by. Useful if the beginning of the story has unavoidable / javascript animations.                                                                                                                                                                                                      |

Component-level Example:

```jsx
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // ... Your other Storybook parameters here
    sauceVisual: {
      // Add storybook visual configuration options here
      clip: true,
      // clipSelector: '#custom-root-element',
      // delay: 200,
    },
  },
};

export default meta;
```

## Different Browsers and Devices

By default, the tests are run on your local machine/in your pipeline with Chromium. You have the option to run them on different [browser and device configurations](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json) preconfigured by playwright or define your own device, a combination or all of them. To do so, you need to add the following to your `test-runner-jest.config.js` file:

```js
const { getJestConfig } = require('@storybook/test-runner');
const { getVisualTestConfig } = require('@saucelabs/visual-storybook');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  // The configuration for Sauce Lab's Visual Integration
  ...getVisualTestConfig(),
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   * @see https://github.com/playwright-community/jest-playwright#configuration
   */

  // Add this to your config
  testEnvironmentOptions: {
    'jest-playwright': {
      // With this option tests will be run against the defaultBrowserType of the devices, otherwise
      // they run in a matrix against the default browser(s) configured below (chromium, if omitted)
      useDefaultBrowserType: true,
      // we still need to specify the browsers used by the devices
      browsers: ['chromium', 'webkit', 'firefox'],
      // this is actually the important part, we need to specify the devices we want to test against
      devices: [ 'Desktop Edge', 'Desktop Firefox', 'Desktop Chrome', 'Desktop Safari', 'Pixel 5', 'iPhone 14 Pro Max']
  },
};

```

If you'd like to configure your own devices, please follow the configuration steps inside the [playwright docs](https://playwright.dev/docs/emulation#devices).

## Auto Testing Variations

<div className="text--center">
<img src={useBaseUrl('/img/sauce-visual/visual-variants.png')} alt="Visual variant grid example"/>
</div>

We have a separate Storybook plugin, `@saucelabs/storybook-variants`, available for rendering all variants of a component in a grid to ease the testing and development process. Read the full [README on NPM](https://www.npmjs.com/package/@saucelabs/storybook-variants) for installation & usage.

## Example

An example project is available [here](https://github.com/saucelabs/visual-examples/tree/main/storybook).
