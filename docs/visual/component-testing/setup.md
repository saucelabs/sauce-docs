---
id: setup
title: Setting Up Visual Component Testing with Storybook
sidebar_label: Project Setup with Storybook
---

## Getting Started with Storybook

Get automated UI test results across your React, Vue or Angular components by integrating [Storybook](https://storybook.js.org/) with Sauce Labs Visual Component Testing.

Follow the steps below to set up Component Testing with Storybook, or use the [New Project Wizard](https://screener.io/v2/new).


## What You'll Need

* Have Storybook [installed](https://storybook.js.org/basics/quick-start-guide/).
* Have [some stories written](https://storybook.js.org/basics/writing-stories/) for your components.
* Ensure that you can successfully view your stories when running the Storybook Dev server (`npm run storybook`).


## Install Screener Package

Install the [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:

```bash
npm install --save-dev screener-storybook
```

## Save Screener Config File

1. Go to the [New Project Wizard](https://screener.io/v2/new).
2. Follow the wizard steps to generate your Screener Config code.
3. Save the code into a file named `screener.config.js` in the root directory of your application.

We recommend securing your API Key by storing it as an environment variable (i.e., store it in an environment variable called `SCREENER_API_KEY`, then reference it in your `screener.config.js` file with `process.env.SCREENER_API_KEY`).

For additional configuration options, view the [repository documentation](https://github.com/screener-io/screener-storybook#config-options.)


## Add Screener Script

Add the following NPM script to your `package.json` file:

```json
"scripts": {
  "test-storybook": "screener-storybook --conf screener.config.js"
}
```

## Run Your Tests

You're all set! Now run your first test with the following command:

```java
npm run test-storybook
```

View your initial results in the [Screener Dashboard](https://screener.io/v2/dashboard).


## Next Steps
* Learn the [Review Worklow](/visual/component-testing/workflow/review-workflow) for UI test results.
* Integrate into your [CI process](/visual/component-testing/integrations/continuous-integration) for continuous visual testing.
* Use GitHub? Integrate into your [GitHub workflow](/visual/component-testing/integrations/github).
