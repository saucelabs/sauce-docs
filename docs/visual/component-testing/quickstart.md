---
id: quickstart
title: Visual Component Testing with Storybook Quickstart
sidebar_label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>**Screener Docs are Now Sauce Docs**<br/>
As part of our efforts to bring you a single, unified documentation site, we've migrated all Visual Docs from [Screener.io](https://screener.io) to Sauce Docs.

Integrate [Storybook](https://storybook.js.org/) with Sauce Labs Visual Component Testing in just 10 steps.

Our Visual Component Testing faciliates debugging by providing automated UI test results across your React, Vue, and Angular components.


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* Have Storybook [installed](https://storybook.js.org/basics/quick-start-guide/), along with some [existing stories written](https://storybook.js.org/basics/writing-stories/) for your components.


## Setting Up Visual Component Testing with Storybook

### New to Storybook?

If you do not have a Storybook project or want to create a clean Storybook project to experiment with our setup, follow the steps below. Otherwise, [skip to the next step](#install-screener-package).

1. In a terminal, run the following commands, one at a time:
  ```bash
  npx create-react-app my-storybook
  cd my-storybook
  npx -p @storybook/cli sb init
  ```

2. When finished, open your Storybook project:
  ```bash
  npm run storybook
  ```

Check out Storybook's [documentation](https://storybook.js.org/docs/react/get-started/introduction) to learn more.


### Install Screener Package

1. Install the [screener-storybook package](https://github.com/screener-io/screener-storybook) as a dependency in your project:
  ```bash
  npm install screener-storybook --save-dev
  ```

### Set Environment Variables

2. Set your Sauce Labs username, Sauce Labs access key, and Screener API key as environment variables:

 <Tabs
      defaultValue="Mac/Linux"
      values={[
        {label: 'Mac/Linux', value: 'Mac/Linux'},
        {label: 'Windows Powershell', value: 'Windows Powershell'},
      ]}>

 <TabItem value="Mac/Linux">

 ```bash
 export SAUCE_USERNAME="REPLACE WITH SAUCE USERNAME"
 export SAUCE_ACCESS_KEY="REPLACE WITH SAUCE ACCESS KEY"
 export SCREENER_API_KEY="REPLACE WITH SCREENER API KEY"
 ```

 </TabItem>
 <TabItem value="Windows Powershell">

 ```bash
 $Env:SAUCE_USERNAME = "REPLACE WITH SAUCE USERNAME"
 $Env:SAUCE_ACCESS_KEY = "REPLACE WITH SAUCE ACCESS KEY"
 $Env:SCREENER_API_KEY = "REPLACE WITH SCREENER API KEY"
 ```

 </TabItem>
 </Tabs>

  To learn more about Sauce Labs environment variables and how to set them at your system level, see [Setting Up Environment Variables](/basics/environment-variables/).


### Save Screener Config File

3. Create a new file called "screener.config.js" and save it to the root folder of your Storybook project:
  ```js
  module.exports = {
    projectRepo: 'sb-6.1-test',
    storybookConfigDir: '.storybook',
    apiKey: process.env.SCREENER_API_KEY,
    resolution: '1024x768'
  };
  ```

### Add Screener Script

4. Add following script to your package.json script(s):
   ```json
   "scripts": {
     "test-storybook": "screener-storybook --conf screener.config.js"
   }
   ```

### Run Test

5. You can then run a test with:
  ```bash
  npm run test-storybook
  ```

## View Results

6. To view your test results, log into the Visual Testing Dashboard (Sauce Labs > **SAUCE APPS** > **Visual** > **Login**).

  **This first test will fail** &#8212; this is expected &#8212; because there's no preexisting baseline to compare against. The results will be labeled as **New**. You should also receive an email summary indicating that this build has failed. It'll be sent to the address associated with your Sauce Labs account. If you don't see it, learn how to subscribe [here](/visual/notifications/).


## Run with Static Storybook with Sauce Connect Proxy

7. Add the following code to the very end of your ".storybook/preview.js" file:
  ```js
  if (typeof window === 'object') {
    window.__screener_storybook__ = require('@storybook/react').getStorybook;
  }
  ```
8. Build a static version of the Storybook Project by running:
  ```bash
  npm run build-storybook
  ```
9. Update the "screener.config.js" file with your Sauce credentials and capabilities that will launch Sauce Connect and a Sauce Labs browser:

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
  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    maxConcurrent: 5,
    launchSauceConnect: true
  }
};
```

10. You can then run a test with:
  ```bash
  npm run test-storybook
  ```

## Next Steps
* Learn the [Review Workflow](/visual/component-testing/workflow/review-workflow) for UI test results.
* Try out additional [Visual Component testing configuration options](https://github.com/screener-io/screener-storybook#config-options).
* Use the [New Project Wizard](https://screener.io/v2/new) to open a new Visual Component Project or E2E Project in the UI.

## More Information

### Related Links
* [CI Integration](/visual/component-testing/integrations/continuous-integration)
* [GitHub Integration](/visual/component-testing/integrations/github)
* [Sauce Connect Proxy](/secure-connections/sauce-connect/)
