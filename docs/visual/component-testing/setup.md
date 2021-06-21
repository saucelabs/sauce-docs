---
id: setup
title: Setting Up Your Visual Component Testing Project
sidebar_label: Project Setup
---

## Getting Started with Screener + Storybook

Get Automated Visual Testing across your React, Vue or Angular components with Storybook and Screener.

Follow the steps below to setup Screener with Storybook, or use the New Project Wizard.

## What You'll Need
* Ensure that Storybook is installed.
* You have written some stories for your components.
* You can successfully view your stories when running the Storybook Dev server
(npm run storybook).

## Install Screener Package

Install the screener-storybook package as a dependency in your project:

```bash
npm install --save-dev screener-storybook
```

## Save Screener Config File

1. Go to the New Project Wizard.
2. Follow the wizard steps to generate your Screener Config code.
3. Save the code into a file named screener.config.js in the root directory of your application.

We recommend securing your API Key by storing it as an environment variable. For example, store it in an environment variable called `SCREENER_API_KEY`, and then reference it in your `screener.config.js` file with: `process.env.SCREENER_API_KEY`.

For additional configuration options, view the repository documentation.


## Add Screener Script

Add the following NPM script to your package.json file:

```java
"scripts": {
  "test-storybook": "screener-storybook --conf screener.config.js"
}
```

## Run Your Tests

You're all set! Now run your first test with the following command:
```bash
npm run test-storybook
```

View your initial results in the [Screener Dashboard](https://screener.io/v2/dashboard).
