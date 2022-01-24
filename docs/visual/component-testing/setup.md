---
id: setup
title: Setting Up Visual Component Testing with Storybook
sidebar_label: Setup with Storybook
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>**Screener Docs are Now Sauce Docs**<br/>
As part of our efforts to bring you a single, unified documentation site, we've migrated all Visual Docs from [Screener.io](https://screener.io) to Sauce Docs.

Follow this quickstart guide to integrate Sauce Labs Visual Component Testing (Screener) with Storybook, a UI component development tool. Whether you're an experienced Storybook user or have never used it, we've got you covered in the Quickstart steps below.

Our Storybook integration will run your existing Storybook stories as UI regression test cases in our automated visual testing platform, which can accelerate debugging and shorten release cycles. You'll get detailed UI test results across your React, Vue, Angular, and HTML components.


## What You'll Need
* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing) with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support. Not available for free-trial accounts.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* A GitHub account.
* Have [Node.js installed](https://nodejs.org).
* An existing [Storybook project](https://storybook.js.org/basics/quick-start-guide/) with some [component stories](https://storybook.js.org/basics/writing-stories/) written.



## Confirm Screener Installation

:::caution New to Storybook?

If you've never used Storybook, follow the steps below to install it and create your first project. Then proceed to step 1.

<details><summary>Install Storybook</summary>

Open a terminal and run the following commands, one at a time.

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
</details>

:::

1. First, confirm that Storybook is installed correctly on your local machine by running `npm run storybook`.


## Install Screener Package

2. From your terminal, navigate to the file path where you downloaded your Storybook sample project (i.e., `cd my-storybook` or `cd downloads/my-storybook`).

3. Install the [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:
  ```bash
  npm install screener-storybook --save-dev
  ```

## Set Environment Variables

4. In your terminal, set your Screener API key as an environment variable:
  <details><summary>What is this?</summary>

  :::warning PROTECT YOUR CREDENTIALS
  To protect your authentication data from exposure, the example code in this Quickstart requires you to set your Sauce Labs credentials as [environment variables](basics/environment-variables/). We recommend doing this for all Sauce Labs automated tests.
  :::
  </details>
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


### Create Screener Config File

5. Create a new JavaScript file, name it **screener.config.js**, and save it to the root folder of your Storybook project.
6. Choose one the two options:<br/>
  a. If you're using the `my-storybook` sample project, copy and paste this code snippet into your **screener.config.js** file, then save it.
   ```js
   module.exports = {
     projectRepo: 'sb-6.1-test',
     storybookConfigDir: '.storybook',
     apiKey: process.env.SCREENER_API_KEY,
     resolution: '1024x768'
   };
   ```

  b. If you're integrating Visual Component Testing into your own Storybook project, copy and paste this code snippet into your **screener.config.js** file, then replace the placeholder values with your own. `projectRepo` is the name of your project's repository (e.g., GitHub repos are in the "owner/repository-name" format) and `resolution` is your desired browser resolution. <br/><br/>`storybookConfigDir`/`storybookStaticDir` are your Storybook server options; you may not need to add both. In your project directory, find the `start-storybook` command, usually a script in **package.json** file. If the `-c` or `--config-dir` option is set, add `storybookConfigDir` and that value to your code snippet. If the `-s` or `--static-dir` option is set, add the `storybookStaticDir` with its value.
   ```js
   module.exports = {
     projectRepo: '<your-repo>',
     storybookConfigDir: '<directory>',
     storybookStaticDir: '<directory>',
     apiKey: process.env.SCREENER_API_KEY,
     resolution: '<resolution>'
   };
  ```

### Add Screener Script

7. Open your project's **package.json** file and add the following npm script to your `"scripts": {` section:
   ```json
   "test-storybook": "screener-storybook --conf screener.config.js"  
   ```

### Run Test

8. Run your test:
  ```bash
  npm run test-storybook
  ```

### View Results

9. Log in to Visual Testing Dashboard (Sauce Labs > **SAUCE APPS** > **Visual** > **Login**) to view your running test in progress. This initial test will be labeled as failed because there's no preexisting baseline state to compare against. To resolve this, [review and accept](https://screener.io/v2/docs/visual-e2e/review-flow) the new states as the baseline.

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
