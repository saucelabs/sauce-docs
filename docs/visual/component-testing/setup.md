---
id: setup
title: Setting Up Visual Component Testing with Storybook
sidebar_label: Storybook Setup Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

>**Screener Docs are Now Sauce Docs**<br/>
Screener is now Sauce Labs Visual Testing. As part of our effort to bring you a single, unified documentation site, we've migrated all Visual Docs from Screener.io to Sauce Docs.

Follow the steps to integrate Sauce Labs Visual Component Testing with Storybook, a UI component development tool. The integration will run your existing Storybook stories as UI regression test cases in our automated visual testing platform.
* Get detailed UI test results across your React, Vue, Angular, and HTML components
* Facilitate accelerate debugging and shorten release cycles


## What You'll Need
* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing) with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support. Not available for free-trial accounts.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your Visual Testing [Screener API Key](https://screener.io/v2/account/api-key).
* A [GitHub account](https://github.com/).
* Have [Node.js installed](https://nodejs.org).
* Have Storybook installed, along with an existing [project](https://storybook.js.org/basics/quick-start-guide/) and set of [component stories](https://storybook.js.org/basics/writing-stories/).



## Quickstart with Existing Storybook Project

### Install Screener Package

1. From your terminal, navigate to your Storybook project directory, navigate to your Storybook project directory (e.g., `cd my-storybook`).
2. Install the [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:
  ```bash
  npm install screener-storybook --save-dev
  ```

### Set Environment Variable

:::warning PROTECT YOUR CREDENTIALS
To protect your authentication data from exposure, the example code in this Quickstart requires you to set your Sauce Labs credentials as [environment variables](/basics/environment-variables). We recommend doing this for all Sauce Labs automated tests.
:::

In your terminal, set your Screener API key as an environment variable:

<Tabs
    defaultValue="Mac/Linux"
    values={[
      {label: 'Mac/Linux', value: 'Mac/Linux'},
      {label: 'Windows Powershell', value: 'Windows Powershell'},
    ]}>

<TabItem value="Mac/Linux">

```bash
export SCREENER_API_KEY="<your Screener API key>"
```

</TabItem>
<TabItem value="Windows Powershell">

```bash
$Env:SCREENER_API_KEY = "<your Screener API key>"
```

</TabItem>
</Tabs>


### Create Screener Config File

From a text editor or IDE, create a new JavaScript file called **screener.config.js**, paste in the below snippet, then replace the placeholder values with your own.

```js
module.exports = {
  projectRepo: '<your-repo>',
  storybookConfigDir: '<directory>',
  storybookStaticDir: '<directory>',
  apiKey: process.env.SCREENER_API_KEY,
  resolution: '<resolution>'
};
```

<table id="table-api">
<tbody>
  <tr>
    <td><code>projectRepo</code></td>
    <td>The name of your project's repository (e.g., GitHub repos are in the "owner/repository-name" format).</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>resolution</code></td>
    <td>Your desired browser resolution.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>storybookConfigDir</code> or <code>storybookStaticDir</code></td>
    <td>These are your Storybook server options. To determine whether you need <code>storybookConfigDir</code> or <code>storybookStaticDir</code>, go to your project directory and find the <code>start-storybook</code> command, usually a script in a package.json file. If the <code>-c</code> or <code>--config-dir</code> option is set, use <code>storybookConfigDir</code> and that value to your code snippet. If the <code>-s</code> or <code>--static-dir</code> option is set, use the <code>storybookStaticDir</code> with its value.</td>
  </tr>
</tbody>
</table>


When you're done, save the **screener.config.js** file to your Storybook project's root folder.

### Add Screener Script

Open your Storybook project's **package.json** file and add the following npm script to your `"scripts": {` section:
```json
"test-storybook": "screener-storybook --conf screener.config.js"  
```

When you're done, be sure to save the **package.json** file.

### Run Test

Run your test:
```bash
npm run test-storybook
```

### View Results

Go your Visual Testing Dashboard (Sauce Labs > **Sauce Apps** > **Visual** > **Login**) to confirm that your test is running. It should take a few minutes to complete.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-all-projects.png')} alt="Visual E2E Quickstart running test" width="300" />


### Accept Baseline

This first test will be labeled as "failed" because there's no existing baseline to compare against. To resolve this, [review and accept](https://docs.saucelabs.com/visual/component-testing/workflow/review-workflow/) the new states as your baseline.



## Quickstart with Sample Storybook Project

Don't have Storybook? No problem; follow the steps below to install it. From your terminal, run the following commands, one at a time.

```bash title="Installs Storybook and creates project folder called 'my-storybook'"
npx create-react-app my-storybook
```

```bash title="Navigates to Storybook project"
cd my-storybook
```

```bash title="Adds Storybook to project folder"
npx -p @storybook/cli sb init
```

```bash title="Launches Storybook project and opens localhost"
npm run storybook
```


Once Storybook is launched, you'll see a response like this in your terminal.<br/><img src={useBaseUrl('img/visual/component-expected-response.png')} alt="component testing expected-response" width="500" />



### Install Screener Package

1. Leave the terminal window from the previous step open and running, then open a second terminal window and navigate to your Storybook project directory:
  ```bash
  cd my-storybook
  ```
2. Install the [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:
  ```bash
  npm install screener-storybook --save-dev
  ```

### Set Environment Variable

In your terminal, set your Screener API key as an environment variable:

<Tabs
    defaultValue="Mac/Linux"
    values={[
      {label: 'Mac/Linux', value: 'Mac/Linux'},
      {label: 'Windows Powershell', value: 'Windows Powershell'},
    ]}>

<TabItem value="Mac/Linux">

```bash
export SCREENER_API_KEY="<your Screener API key>"
```

</TabItem>
<TabItem value="Windows Powershell">

```bash
$Env:SCREENER_API_KEY = "<your Screener API key>"
```

</TabItem>
</Tabs>


### Create Screener Config File

From a text editor or IDE, create a new JavaScript file called **screener.config.js**, then paste in the below snippet:

```js
module.exports = {
  projectRepo: 'sb-6.1-test',
  storybookConfigDir: '.storybook',
  apiKey: process.env.SCREENER_API_KEY,
  resolution: '1024x768'
};
```

When you're done, save the **screener.config.js** file to your Storybook project's root folder (**my-storybook**).


### Add Screener Script

Open your Storybook project's **package.json** file and add the following npm script to your `"scripts": {` section:
```json
"test-storybook": "screener-storybook --conf screener.config.js"  
```

When you're done, be sure to save the **package.json** file.


### Run Test

Run your test:
```bash
npm run test-storybook
```

### View Results

Go your Visual Testing Dashboard (Sauce Labs > **Sauce Apps** > **Visual** > **Login**) to confirm that your test is running. It should take a few minutes to complete.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-all-projects.png')} alt="Visual E2E Quickstart running test" width="300" />


### Accept Baseline

This first test will be labeled as "failed" because there's no existing baseline to compare against. To resolve this, [review and accept](https://docs.saucelabs.com/visual/component-testing/workflow/review-workflow/) the new states as your baseline.


## Optional Next Steps

* From your Visual Testing **Dashboard**, click **Show Logs** > **View Logs on Sauce Labs** to see granular [test results](/test-results/) on Sauce Labs.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-logs.png')} alt="Visual E2E Quickstart accept state" width="205" /> <br/> <img src={useBaseUrl('img/visual/e2e-quickstart-view-on-sauce.png')} alt="Visual E2E Quickstart accept state" width="250" />
* Learn about the [Visual Component Testing UI review workflow](/visual/component-testing/workflow/review-workflow) for UI test results.
* Add [Visual Component test configuration options](https://github.com/screener-io/screener-storybook#config-options).

For each build, you should receive an [email summary](/visual/notifications/) indicating the pass/fail status, delivered to the address associated with your Sauce Labs account.

## More Information
* [Testing Static Storybook Web Apps](/visual/component-testing/storybook-static/)
* [Automated Visual Regression Testing](https://saucelabs.com/blog/what-is-automated-visual-regression-testing)
* [CI Integration](/visual/component-testing/integrations/continuous-integration)
* [GitHub Integration](/visual/component-testing/integrations/github)
* [New Project Wizard (create a new project directly in the UI)](https://screener.io/v2/new)
