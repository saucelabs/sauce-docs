---
id: setup
title: Setting Up Visual Component Testing with Storybook
sidebar_label: Setup with Storybook
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>**Screener Docs are Now Sauce Docs**<br/>
As part of our efforts to bring you a single, unified documentation site, we've migrated all Visual Docs from [Screener.io](https://screener.io) to Sauce Docs.

Follow this quickstart guide to integrate Sauce Labs Visual Component Testing (Screener) with Storybook, a UI component development tool.

Our Storybook integration will run your existing Storybook stories as UI regression test cases in our automated visual testing platform, which can accelerate debugging and shorten release cycles. You'll get detailed UI test results across your React, Vue, Angular, and HTML components.


## What You'll Need
* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing). Visual Testing is not available for free trials. Please [contact us](https://saucelabs.com/contact) if you have any questions.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* Have [Node.js installed](https://nodejs.org).
* An existing [Storybook project](https://storybook.js.org/basics/quick-start-guide/) with some [component stories](https://storybook.js.org/basics/writing-stories/) written.


## Integrate Visual Component Testing with Storybook

To integrate Visual Component Testing with your existing Storybook project(s), follow these steps.

1. First, confirm that Storybook is correctly installed by running `npm run storybook`.
2. Set env variable
3. Create a new JavaScript file called **screener.config.js** and save it to the root folder of your Storybook project. Paste this snippet in that file and set your `projectRepo` value as the full name of your project's repository. For example, GitHub repositories are in the format: owner/repository-name.
  ```js
  module.exports = {
    /// Provide your project repo name here.
    projectRepo: 'owner/repository-name',
    storybookConfigDir: '.storybook',
    apiKey: process.env.SCREENER_API_KEY,
    /// Optionally, you can change your resolution size here.
    resolution: '1024x768'
  };
  ```
4. Enter your Storybook server options below. Discover the options by looking at your start-storybook command (usually a script in **package.json** file).
If the -c or --config-dir option is set, please enter its value:
If the -s or --static-dir option is set, please enter its value:
5. Install the screener-storybook package as a dependency:
  ```bash
  npm install --save-dev screener-storybook
  ```
6. Add the following npm script to your project's **package.json** file:
```
"scripts": {
  "test-storybook": "screener-storybook --conf screener.config.js"
}  
```
7. Run your first test with the command below.
```
npm run test-storybook
```
8. The Visual Testing (Screener) dashboard will will automatically update with your project after when your test is run. Click on it to view your test results.

## New to Storybook?

If you've never used Storybook, follow the steps below to learn how to set up a Storybook project and then run a Visual Component test on it.


## Install Storybook

1. Open a terminal and run the following commands, one at a time. It will install Storybook, then create and launch your first Storybook project.

  ```bash title="Installs Storybook and Creates Storybook Project Called 'my-storybook'"
  npx create-react-app my-storybook
  ```

  ```bash title="Navigates to Storybook Project"
  cd my-storybook
  ```

  ```bash title="Initializes Storybook"
  npx -p @storybook/cli sb init
  ```

  ```bash title="Launches Your Storybook Project"
  npm run storybook
  ```

### Install Screener Package

2. From your terminal, navigate to the file path where you downloaded your Storybook sample project (i.e., `cd my-storybook` or `cd downloads/my-storybook`).
3. Install the [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:
  ```bash
  npm install screener-storybook --save-dev
  ```

### Set Environment Variables

4. In your terminal, set your Screener API key as an [environment variable](basics/environment-variables/):
   <Tabs
        defaultValue="Mac/Linux"
        values={[
          {label: 'Mac/Linux', value: 'Mac/Linux'},
          {label: 'Windows Powershell', value: 'Windows Powershell'},
        ]}>

   <TabItem value="Mac/Linux">

   ```bash
   export SCREENER_API_KEY="REPLACE WITH SCREENER API KEY"
   ```

   </TabItem>
   <TabItem value="Windows Powershell">

   ```bash
   $Env:SCREENER_API_KEY = "REPLACE WITH SCREENER API KEY"
   ```

   </TabItem>
   </Tabs>


### Save Screener Config File

5. Create a new JavaScript file, paste in the snippet below, name it **screener.config.js**, then save it to the root folder of your Storybook project:
  ```js
  module.exports = {
    projectRepo: 'sb-6.1-test',
    storybookConfigDir: '.storybook',
    apiKey: process.env.SCREENER_API_KEY,
    resolution: '1024x768'
  };
  ```

### Add Screener Script

6. Open the **package.json** file in your Storybook project and add following line to your  `"scripts": {` section:
   ```js
   "test-storybook": "screener-storybook --conf screener.config.js"
   ```

### Run Test

7. You can then run a test with:
  ```bash
  npm run test-storybook
  ```

### View Results

8. Log in to Screener (Sauce Labs > **SAUCE APPS** > **Visual** > **Login**) to view your running test in progress. This initial test will be labeled as failed because there's no preexisting baseline state to compare against. To resolve this, [review and accept](https://screener.io/v2/docs/visual-e2e/review-flow) the new states as the baseline.

  For each build, you should receive an [email summary](/visual/notifications/) indicating the pass/fail status, delivered to the address associated with your Sauce Labs account.


## More Information

### Next Steps
* Learn about the [Visual Component Testing UI review workflow](/visual/component-testing/workflow/review-workflow) for UI test results.
* Add [Visual Component test configuration options](https://github.com/screener-io/screener-storybook#config-options).


### Related Links
* [Testing a Static Storybook Web App](/visual/component-testing/storybook-static/)
* [What is Automated Visual Regression Testing?](https://saucelabs.com/blog/what-is-automated-visual-regression-testing)
* [New Project Wizard](https://screener.io/v2/new): create a new project directly in the UI.
* [CI Integration](/visual/component-testing/integrations/continuous-integration)
* [GitHub Integration](/visual/component-testing/integrations/github)
