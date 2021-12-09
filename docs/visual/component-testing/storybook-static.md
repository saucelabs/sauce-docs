---
id: storybook-static
title: Testing a Static Storybook Web App
sidebar_label: Storybook Static Testing
---

To run Screener against a static Storybook build, instead of starting the Storybook Dev server, follow these setup instructions.

## What You'll Need
* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing). Visual Testing is not available for free trials.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* Have [Node.js installed](https://nodejs.org).
* An existing [Storybook project](https://storybook.js.org/basics/quick-start-guide/) containing [component stories](https://storybook.js.org/basics/writing-stories/).

## Run a Static Storybook Build

1. Open your Storybook config file (".storybook/config.js" or ".storybook/preview.js") and add the following snippet at the end:
  ```js
  if (typeof window === 'object') {
    window.__screener_storybook__ = require('@storybook/react').getStorybook;
  }
  ```
2. In your terminal, [set your Sauce Labs username, Sauce Labs access key, and Screener API key as environment variables](/visual/component-testing/setup/#set-environment-variables).
3. Export your Storybook project into a static web app by running:
  ```bash
  npm run build-storybook
  ```
4. Open your "screener.config.js" file and paste in the below snippet containing your Sauce credentials/capabilities. Be sure to set the `storybookStaticBuildDir` value to your own static Storybook folder.
  ```js
  module.exports = {
    projectRepo: 'sb-6.1-test',
    storybookConfigDir: '.storybook',
    apiKey: process.env.SCREENER_API_KEY,
    resolution: '1024x768',
    storybookStaticBuildDir: 'storybook-static',
    browsers: [
      {browserName: 'chrome', version: '87.0'}
    ],
    sauce:options: {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      maxConcurrent: 5,
    }
  };
  ```
5. Run your test:
  ```bash
  npm run test-storybook
  ```

## More Information
* [Visual Component Testing Quickstart](/visual/component-testing/setup)
* [Build Storybook as a Static Web App](https://storybook.js.org/docs/react/workflows/publish-storybook#build-storybook-as-a-static-web-application)
