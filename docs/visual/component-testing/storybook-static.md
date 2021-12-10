---
id: storybook-static
title: Testing a Static Storybook Web App
sidebar_label: Storybook Static Testing
---

To run Screener against a static Storybook build, instead of starting the Storybook Dev server, follow these setup instructions.

## What You'll Need

* If you haven't already, follow the steps under the [Quickstart](/visual/component-testing/setup/) to integrate Sauce Labs Visual Component Testing (Screener) with Storybook and [set your Sauce credentials as environment variables](/visual/component-testing/setup/#set-environment-variables).
* An existing [Storybook project](https://storybook.js.org/basics/quick-start-guide/) with some [component stories](https://storybook.js.org/basics/writing-stories/).

## Run a Static Storybook Build

1. Open your Storybook config file (under ".storybook/preview.js") and add the following snippet at the end:
  ```js
  if (typeof window === 'object') {
    window.__screener_storybook__ = require('@storybook/react').getStorybook;
  }
  ```
2. Export your Storybook project into a static web app by running:
  ```bash
  npm run build-storybook
  ```
3. Open your "screener.config.js" file and add the `storybookStaticBuildDir` option with its value set to your own static Storybook folder:
  ```js
  module.exports = {
    projectRepo: 'sb-6.1-test',
    storybookConfigDir: '.storybook',
    apiKey: process.env.SCREENER_API_KEY,
    resolution: '1024x768',
    storybookStaticBuildDir: 'storybook-static'
  };
  ```
4. Run your test:
  ```bash
  npm run test-storybook
  ```


## More Information
* [Build Storybook as a Static Web App](https://storybook.js.org/docs/react/workflows/publish-storybook#build-storybook-as-a-static-web-application)
