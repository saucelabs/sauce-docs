---
id: setup
title: Visual Component Testing Setup and Quickstart
sidebar_label: Setup and Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning Screener End-of-life

The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the [integration steps](/visual-testing/).

If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support.
:::

> **Screener Docs are Now Sauce Docs**<br/>
> As part of our effort to bring you a single, unified documentation site, we've migrated all Visual Docs from Screener.io to Sauce Docs.

Follow the steps to integrate Sauce Labs Visual Component Testing with Storybook, a UI component development tool. The integration will run your existing Storybook stories as UI regression test cases in our automated visual testing platform.

- Get detailed UI test results across your React, Vue, Angular, and HTML components
- Facilitate accelerate debugging and shorten release cycles

## What You'll Need

- A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing) with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support. Visual Testing is not available for free-trial accounts.
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- Your Visual Testing [Screener API Key](https://screener.io/v2/account/api-key).
- A [GitHub account](https://github.com/).
- Have [Node.js installed](https://nodejs.org).
- Have Storybook installed, along with an existing [project](https://storybook.js.org/basics/quick-start-guide/) and set of [component stories](https://storybook.js.org/basics/writing-stories/).

## Integration with Existing Storybook Project

Follow the steps below to add Visual Component Testing functionality to your Storybook project.

:::tip
New to Storybook? See [Quickstart with Sample Storybook Project](#quickstart-with-sample-storybook-project).
:::

### Install Screener Package

From your terminal, navigate to your Storybook project directory (e.g., `cd my-storybook`), then install our [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:

```bash
npm install screener-storybook --save-dev
```

### Link Your Sauce Labs Account

In your terminal, set your Sauce Labs username, Sauce Labs access key, and Visual Testing Screener API key as [environment variables](/basics/environment-variables) to avoid having to enter them with each command and to protect them from exposure in your tests:

<Tabs
defaultValue="Mac/Linux"
values={[
{label: 'Mac/Linux', value: 'Mac/Linux'},
{label: 'Windows Powershell', value: 'Windows Powershell'},
]}>

  <TabItem value="Mac/Linux">

```bash
export SAUCE_USERNAME="Replace with your Sauce Labs username"
```

```bash
export SAUCE_ACCESS_KEY="Replace with your Sauce Labs access key"
```

```bash
export SCREENER_API_KEY="Replace with your Screener API key"
```

  </TabItem>
  <TabItem value="Windows Powershell">

```bash
$Env:SAUCE_USERNAME = "Replace with your Sauce Labs username"
```

```bash
$Env:SAUCE_ACCESS_KEY = "Replace with your Sauce Labs access key"
```

```bash
 $Env:SCREENER_API_KEY = "Replace with your Screener API key"
```

  </TabItem>
  </Tabs>

### Add Screener Script

Open your Storybook project's **package.json** file and add the following npm script to your `"scripts": {` section:

```json
"test-storybook": "screener-storybook --conf screener.config.js"
```

### Create Screener Config File

From a text editor or IDE, create a new JavaScript file called **screener.config.js** and paste in the below code snippet.

```js
module.exports = {
projectRepo: '<your-repo>',
storybookConfigDir: '<directory>',
storybookStaticDir: '<directory>',
apiKey: process.env.SCREENER_API_KEY,
resolution: '<resolution>'
}
```

Be sure to replace the placeholder values with your own.

If you want to use sauce VMs on your screener tests, you'll need to add the sauce object to your screener config file, and all browsers that you want to run on Sauce must have a version with a "." (for example, "11.0", not "11"). For example:

```js
module.exports = {
projectRepo: '<your-repo>',
storybookConfigDir: '<directory>',
storybookStaticDir: '<directory>',
apiKey: process.env.SCREENER_API_KEY,
resolution: '<resolution>',
browsers: [
{
browserName: 'chrome',
version: '74.0'
}
],
sauce: {
username: process.env.SAUCE_USERNAME,
accessKey: process.env.SAUCE_ACCESS_KEY
}
}
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
<td>

    <p>These are your Storybook server options. To determine whether you need <code>storybookConfigDir</code> or <code>storybookStaticDir</code>, go to your project directory and find the <code>start-storybook</code> command, usually a script located in a <strong>package.json</strong> file.</p><br/><p>If the <code>-c</code> or <code>--config-dir</code> option is set, use <code>storybookConfigDir</code> and that value to your code snippet. If the <code>-s</code> or <code>--static-dir</code> option is set, use the <code>storybookStaticDir</code> with its value.</p>
    </td>
  </tr>
</tbody>
</table>

When you're done, save the **screener.config.js** file to your Storybook project's root folder.

### Run Test

Run your test by issuing:

```bash
npm run test-storybook
```

### View Results

Go your Visual Testing Dashboard (Sauce Labs > **Visual Testing** > **Log in to Visual**) to confirm that your test is running. Instead of **sb-6.1-test**, you'll see your own Storybook project name.<br/><img src={useBaseUrl('img/visual/component-integration-results.png')} alt="Visual E2E Quickstart running test" width="300" />

It should take a few minutes to complete.

For each build, you should receive an [email summary](/visual/notifications/) indicating the pass/fail status, delivered to the address associated with your Sauce Labs account.

### Accept Baseline

This first test will be labeled as "failed" because there's no existing baseline to compare it against. To resolve this, [review and accept](/visual/component-testing/workflow/review-workflow/) the new states as your baseline.

## Quickstart with Sample Storybook Project

Don't have Storybook, but want to try? Follow the steps below to install our sample project and run your first Storybook test with Component Testing.

From your terminal, navigate to your machine's [home directory](https://en.wikipedia.org/wiki/Home_directory), then run the following commands.

1. Install Storybook and create project folder called `my-storybook`:

```bash
npx create-react-app my-storybook
```

2. Navigate to Storybook project:

```bash
cd my-storybook
```

3. Add Storybook to project folder:

```bash
npx -p @storybook/cli sb init
```

4. Launch Storybook project and open localhost:

```bash
npm run storybook
```

Once Storybook has been launched, you'll see a response like this in your terminal.<br/><img src={useBaseUrl('img/visual/component-expected-response.png')} alt="component testing expected-response" width="400" />

### Install Screener Package

1. Open a new terminal window (separate from the one in the previous step), then navigate to your Storybook project directory:

```bash
cd my-storybook
```

2. Install the [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:

```bash
npm install screener-storybook --save-dev
```

### Link Your Sauce Labs Account

In your terminal, set your Visual Testing Screener API key as an [environment variable](/basics/environment-variables) to avoid having to enter them with each command and to protect them from exposure in your tests:

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

### Add Screener Script

Open your Storybook project's **package.json** file and add the following npm script to your `"scripts": {` section:

```json
"test-storybook": "screener-storybook --conf screener.config.js"
```

### Create Screener Config File

From a text editor or IDE, create a new JavaScript file called **screener.config.js**, then paste in the below snippet:

```js
module.exports = {
projectRepo: 'sb-6.1-test',
storybookConfigDir: '.storybook',
apiKey: process.env.SCREENER_API_KEY,
resolution: '1024x768'
}
```

When you're done, save the **screener.config.js** file to your Storybook project's root folder (**my-storybook**).

### Run Test

Run your test:

```bash
npm run test-storybook
```

### View Results

Go your Visual Testing Dashboard (Sauce Labs **Visual Testing** > **Log in to Visual**) to confirm that your test is running.

You'll see a new project under the name **sb-6.1-test**, plus a new [branch](/visual/e2e-testing/workflow/baseline-branch/) called **default**.<br/><img src={useBaseUrl('img/visual/component-quickstart-all-projects.png')} alt="Visual E2E Quickstart running test" width="500" />

The test should take a few minutes to complete.

:::tip

<details>
<summary>Click <strong>Show Logs</strong> > <strong>View Logs on Sauce Labs</strong> to see your <a href="/test-results">test results</a> on Sauce Labs.</summary>

<img src={useBaseUrl('img/visual/e2e-quickstart-view-logs.png')} alt="Visual E2E Quickstart accept state" width="205" /><br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-on-sauce.png')} alt="Visual E2E Quickstart accept state" width="250" />

</details>

:::

For each build, you should receive an [email summary](/visual/notifications/) indicating the pass/fail status, delivered to the address associated with your Sauce Labs account.

### Accept Baseline

This first test will be labeled as "failed" because there's no existing baseline to compare it against. To resolve this, [review and accept](/visual/component-testing/workflow/review-workflow/) the new states as your baseline.

## Optional Next Steps

- Learn more about the Visual Component Testing [UI review workflow](/visual/component-testing/workflow/review-workflow), [testing static Storybook web apps](/visual/component-testing/storybook-static/), and the concept of [automated visual regression testing](https://saucelabs.com/blog/what-is-automated-visual-regression-testing).
- Add more [test configuration options](https://github.com/screener-io/screener-storybook#config-options).
- Set up continuous visual testing by [integrating Visual E2E Testing into your CI](/visual/component-testing/integrations/continuous-integration)
