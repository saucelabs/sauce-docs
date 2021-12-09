---
id: quickstart
title: Visual E2E Quickstart
sidebar_label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


Get up and running quickly on Visual E2E with a simple automated test using our demo website, [Swag Labs](http://saucedemo.com).  


## What You'll Need

:::note Not Available for Free Trials
You'll need to have a [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing). Please [contact us](https://saucelabs.com/contact) if you have any questions.
:::
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* A [GitHub account](https://github.com/).
* Have [Node.js installed](https://nodejs.org/en/download/).
* Optional: have [Mocha](https://mochajs.org/) and/or [Jest](https://jestjs.io/) installed.

## Set Up Environment

1. From your terminal, clone the [Visual E2E Quickstart repository](https://github.com/luishernandezv/visual-e2e) to your machine:
  ```bash
  git clone https://github.com/luishernandezv/visual-e2e
  ```
2. Navigate to the project.
  ```bash
  cd visual-e2e
  ```
:::tip
For best experience, open the [`visual-e2e` repository](https://github.com/luishernandezv/visual-e2e) in an IDE.
:::
3. Install all dependencies by running:
  ```bash
  npm install
  ```
4. Set your Sauce Labs credentials as environment variables:

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

 ```bash title="Example"
 export SAUCE_USERNAME="sauce.bot"
 ```

 </TabItem>
 <TabItem value="Windows Powershell">

 ```bash
 $Env:SAUCE_USERNAME = "REPLACE WITH SAUCE USERNAME"
 $Env:SAUCE_ACCESS_KEY = "REPLACE WITH SAUCE ACCESS KEY"
 $Env:SCREENER_API_KEY = "REPLACE WITH SCREENER API KEY"
 ```

 ```bash title="Example"
 $Env:SAUCE_USERNAME = "sauce.bot"
 ```

 </TabItem>
 </Tabs>

  To learn more about Sauce Labs environment variables and how to set them at your system level, so that you don't have to repeat this process every time you open a terminal, see [Setting Up Environment Variables](/basics/environment-variables/).


## Set Up Test

5. Choose which test script you'd like to run.
   * WebdriverIO ([simple-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js))
   * WebdriverIO with Mocha ([simple-mocha-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js))
   * WebdriverIO with Jest ([simple-mocha-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js)).

   No need to edit them. They already contain everything you need:
   ```js reference title="Sauce Labs credentials"
   https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js#L12-L15
   ```

   ```js reference title="Visual Testing API key and project name"
   https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js#L16-L20
     ```

   ```js reference title="WebDriver configuration with our remote hub"
   https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js#L5-L8
   ```

<details><summary>Test Details</summary>

The test will:<br/>
Launch our [demo site](http://saucedemo.com)<br/>
Initialize a Visual E2E Test [`/*@visual.init*/` command](/visual/e2e-testing/commands-options/#init-command)<br/>
Take a snapshot of the login page [`/*@visual.snapshot*/` command](/visual/e2e-testing/commands-options/#snapshot-command)<br/>
Execute a login to the Products page<br/>
Take a snapshot of the Products page [`/*@visual.snapshot*/` command](/visual/e2e-testing/commands-options/#snapshot-command)<br/>
End the Visual Testing session [`/*@visual.end*/` command](/visual/e2e-testing/commands-options/#end-command)

```js reference title="Test Details"
https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js#L27-L50
```
</details>


## Run Test

6. In your terminal, enter the run command corresponding to your test framework:
  <Tabs
      defaultValue="WebdriverIO"
      values={[
        {label: 'WebdriverIO', value: 'WebdriverIO'},
        {label: 'WebdriverIO + Mocha', value: 'WebdriverIO + Mocha'},
        {label: 'WebdriverIO + Jest', value: 'WebdriverIO + Jest'},
      ]}>

  <TabItem value="WebdriverIO">

  ```bash
  npm run webdriverio
  ```

  </TabItem>
  <TabItem value="WebdriverIO + Mocha">

  ```bash
  npm run test:mocha
  ```

  </TabItem>
  <TabItem value="WebdriverIO + Jest">

  ```bash
  npm run test:jest
  ```

  </TabItem>
  </Tabs>


## View Test Results

7. Go your Visual Testing Dashboard (Screener). Log into Sauce Labs > Click **SAUCE APPS** > **Visual** > **Login**.
8. Confirm that your test is running. It should take a few minutes to complete. You'll see a new project under the name `sauce-demos/swag-labs`, plus a new [branch](/visual/e2e-testing/workflow/baseline-branch/) displayed as `(default)`.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-all-projects.png')} alt="Visual E2E Quickstart running test" width="300" />
9. This first test will be labeled as **Failure** (this is expected) because there's no existing baseline for Visual E2E to compare against. To resolve this, you'll need to accept the new snapshots as your baseline:
   * Click the **Review 2 New** button.<br/><img src={useBaseUrl('img/visual/e2e-review2New.png')} alt="Visual E2E review new state" width="400" />   
   * Click on the first snapshot, **Swag Labs: Login** snapshot.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-states.png')} alt="Visual E2E Quickstart first state" width="500" />   
   * Click **New** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-new-accept.png')} alt="Visual E2E Quickstart running test" width="500" />   
   * Click and accept the second snapshot, **Swag Labs: Products**.
10. Return to your Visual Testing Dashboard and confirm that the two states are now labeled **Accepted**.<br/><img src={useBaseUrl('img/visual/e2e-accepted.png')} alt="Visual E2E Quickstart accepted states" width="450" />   

11. You can view additional test information on Sauce Labs by clicking **Show Logs** > **View Logs on Sauce Labs**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-logs.png')} alt="Visual E2E Quickstart accept state" width="205" /><img src={useBaseUrl('img/visual/e2e-quickstart-view-on-sauce.png')} alt="Visual E2E Quickstart accept state" width="250" />

  This brings you to your automated [test results](/test-results/) on Sauce Labs.

:::tip Optional: Advanced Debugging

To view more debugging details on Sauce Labs, add [`extendedDebugging`](/dev/test-configuration-options/#extendeddebugging) to your test capabilities:

```java
'sauce:options': {
  username: process.env.SAUCE_USERNAME,
  accessKey: process.env.SAUCE_ACCESS_KEY,
  extendedDebugging: true,
},
```

:::


## Apply UI Changes

12. Next, we will apply a change to the Swag Labs website: the login button will be green instead of red. This change is already pre-written into the test scripts and will activate once you execute one of the following run commands:

  <Tabs
      defaultValue="WebdriverIO"
      values={[
        {label: 'WebdriverIO', value: 'WebdriverIO'},
        {label: 'WebdriverIO + Mocha', value: 'WebdriverIO + Mocha'},
        {label: 'WebdriverIO + Jest', value: 'WebdriverIO + Jest'},
      ]}>

  <TabItem value="WebdriverIO">

  ```bash
  npm run webdriverio-changes
  ```

  </TabItem>
  <TabItem value="WebdriverIO + Mocha">

  ```bash
  npm run test:mocha-changes
  ```

  </TabItem>
  <TabItem value="WebdriverIO + Jest">

  ```bash
  npm run test:jest-changes
  ```

  </TabItem>
  </Tabs>


13. Go to your [Visual Testing Dashboard](https://screener.io/). You should see a new test running under the same project and branch.
14. Because an element changed in one of your baseline snapshots - login button color - the test will fail because it detected a change. Click **Review 1 Changed**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-state.png')} alt="Visual E2E Quickstart changed state" width="500" />
15. You'll see that the login button color has changed from red to green. Click **Changed** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-accept.png')} alt="Visual E2E Quickstart accept state" width="450" />
16. Return to the Dashboard, and you'll see that the two states will update to **Accepted**. If you re-run this test again, using the run commands under step 11, the result will be **Success**.

You should also receive an email summary for each build indicating whether it's passed or failed. It will sent to the address associated with your Sauce Labs account. If you don't see it, learn how to subscribe [here](/visual/notifications/).


## Next Steps
* [Learn the Review Flow](/visual/e2e-testing/workflow/review-workflow/) for reviewing UI test results
* [Return results into your WebDriver tests and integrate into your CI process](/visual/e2e-testing/integrations/continuous-integration/) for continuous visual testing
* [Visual E2E Commands and Options](/visual/e2e-testing/commands-options/)
* [Visual E2E Code Examples](/visual/e2e-testing/code-examples/)
