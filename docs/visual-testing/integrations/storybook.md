---
sidebar_label: Storybook (BETA)
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Storybook Integration

:::note Important
Access to this feature is currently limited to Enterprise customers as part of our commitment to providing tailored solutions. We are excited to announce that self-service access is under development and will be released shortly. Stay tuned!
:::

An extension for [Storybook's test-runner](https://github.com/storybookjs/test-runner) powered by [Jest](https://jestjs.io/) and [Playwright](https://playwright.dev/) to integrate effortless visual testing with Sauce Visual.

## Introduction

This guide requires an existing Storybook setup.<br />
You can alternatively take a look to our [example repository](#example).

All tests are run in a headless [browser](#different-browsers) on your local machine/in your pipeline, so you don't need to worry about setting up a browser driver.

## Compatibility

This package leverage's Storybook's test-runner and metadata generation system for enabling automatic testing of Storybook stories. We recommend running Storybook `^6.4.0` and an up-to-date version of the Storybook test-runner (`>=0.13.0` at time of writing).

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
const { postRender } = require('@saucelabs/visual-storybook');

module.exports = {
  postRender,
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

| Variable Name           |          | Description                                                                                                                                                                                                                      |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SAUCE_USERNAME`        | required | Your Sauce Labs username. You can get this from the header of app.saucelabs.com                                                                                                                                                  |
| `SAUCE_ACCESS_KEY`      | required | Your Sauce Labs access key. You can get this from the header of app.saucelabs.com                                                                                                                                                |
| `SAUCE_REGION`          |          | The region you'd like to run your Visual tests in. Defaults to `us-west-1` if not supplied. Can be one of the following: <br/> `'eu-central-1'`, `'us-west-1'` or `'us-east-4'`                                                  |
| `SAUCE_BUILD_NAME`      |          | The name you would like to appear in the Sauce Visual dashboard. Defaults to 'Storybook Build'                                                                                                                                   |
| `SAUCE_BRANCH_NAME`     |          | The branch name or tag you would like to associate this build with. We recommend using your current VCS branch in CI.                                                                                                            |
| `SAUCE_PROJECT_NAME`    |          | The label / project you would like to associated this build with.                                                                                                                                                                |
| `SAUCE_VISUAL_BUILD_ID` |          | For advanced users, a custom build ID. Can be used to create builds in advance. This can be used to parallelize tests, shard, or more. <br/> By default, this is not set and we create / finish a build during setup / teardown. |

## Different browsers

By default the tests are run on your local machine/in your pipeline with Chromium. You have the option to run on `chromium`, `firefox`, `webkit`, a combination or all of them. To do so, you need to add the following to your `test-runner-jest.config.js` file:

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
      // Specify the browsers you want to test with
      browsers: ['chromium', 'firefox', 'webkit'],
    },
  },
};

```
