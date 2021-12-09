---
id: setup
title: Visual Component Testing with Storybook Quickstart
sidebar_label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>**Screener Docs are Now Sauce Docs**<br/>
As part of our efforts to bring you a single, unified documentation site, we've migrated all Visual Docs from [Screener.io](https://screener.io) to Sauce Docs.

Follow this quickstart guide to integrate Screener (Sauce Labs Visual Component Testing) with Storybook, a UI component development tool.

Our Storybook integration can facilitate debugging will run your existing Storybook stories as UI regression test cases in our automated visual testing platform. You'll get detailed UI test results across your React, Vue, Angular, and HTML components.


## What You'll Need
* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing). Visual Testing is not available for free trials. Please [contact us](https://saucelabs.com/contact) if you have any questions.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* Have [Node.js installed](https://nodejs.org).
* Recommended: have [Storybook installed](https://storybook.js.org/basics/quick-start-guide/) along with some [existing stories](https://storybook.js.org/basics/writing-stories/) for your components.


## Setting Up Visual Component Testing with Storybook

:::info New to storybook?
See [Install Storybook](#install-storybook) before beginning the tutorial below.

:::


### Install Screener Package

1. In your terminal, navigate to your Storybook project. For example:
  ```bash
  cd my-storybook
  ```

2. Install the [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:
  ```bash
  npm install screener-storybook --save-dev
  ```

### Set Environment Variables

3. Set your Sauce Labs username, Sauce Labs access key, and Screener API key as environment variables:
   <Tabs
        defaultValue="Mac/Linux"
        values={[
          {label: 'Mac/Linux', value: 'Mac/Linux'},
          {label: 'Windows Powershell', value: 'Windows Powershell'},
        ]}>

   <TabItem value="Mac/Linux">

   ```bash
   export SAUCE_USERNAME="REPLACE WITH SAUCE USERNAME"
   ```

   ```bash
   export SAUCE_ACCESS_KEY="REPLACE WITH SAUCE ACCESS KEY"
   ```

   ```bash
   export SCREENER_API_KEY="REPLACE WITH SCREENER API KEY"
   ```

   </TabItem>
   <TabItem value="Windows Powershell">

   ```bash
   $Env:SAUCE_USERNAME = "REPLACE WITH SAUCE USERNAME"
   ```

   ```bash
   $Env:SAUCE_ACCESS_KEY = "REPLACE WITH SAUCE ACCESS KEY"
   ```

  ```bash
   $Env:SCREENER_API_KEY = "REPLACE WITH SCREENER API KEY"
   ```

   </TabItem>
   </Tabs>

  To learn more, see [Using Environment Variables for Authentication Credentials](/basics/environment-variables/).


### Save Screener Config File

4. Create a new JavaScript file called "screener.config.js" containing the snippet below, then save it to the root folder of your Storybook project:
  ```js
  module.exports = {
    projectRepo: 'sb-6.1-test',
    storybookConfigDir: '.storybook',
    apiKey: process.env.SCREENER_API_KEY,
    resolution: '1024x768'
  };
  ```

### Add Screener Script

5. Open the "package.json" file in your Storybook project and add following line to your  `"scripts": {` section:
   ```json
   "test-storybook": "screener-storybook --conf screener.config.js"
   ```

### Run Test

6. You can then run a test with:
  ```bash
  npm run test-storybook
  ```

### View Results

7. Log in to Screener (Sauce Labs > **SAUCE APPS** > **Visual** > **Login**) to view your running test in progress. This first test will be labeled as "Failed" because there's no existing baseline to compare against. The results will be labeled as **New**.

  You should also receive an email summary for each build, indicating whether it's passed or failed. It will sent to the address associated with your Sauce Labs account. If you're not seeing them, learn how to subscribe [here](/visual/notifications/).


## More Information

### Next Steps
* Learn about the [Component Testing review workflow](/visual/component-testing/workflow/review-workflow) for UI test results.
* Add [Visual Component test configuration options](https://github.com/screener-io/screener-storybook#config-options) to your tests.


### Related Links
* [What is Automated Visual Regression Testing?](https://saucelabs.com/blog/what-is-automated-visual-regression-testing)
* [New Project Wizard](https://screener.io/v2/new): create a new project directly in the UI.
* [CI Integration](/visual/component-testing/integrations/continuous-integration)
* [GitHub Integration](/visual/component-testing/integrations/github)


### Install Storybook

Open a terminal and run the following commands, one at a time. This will install Storybook, create a Storybook project, and launch your project in Storybook.

  ```bash
  npx create-react-app my-storybook
  ```

  ```bash
  cd my-storybook
  ```

  ```bash
  npx -p @storybook/cli sb init
  ```

  ```bash
  npm run storybook
  ```


### Related Links
* [CI Integration](/visual/component-testing/integrations/continuous-integration)
* [GitHub Integration](/visual/component-testing/integrations/github)
