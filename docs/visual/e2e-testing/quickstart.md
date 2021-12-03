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

* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing). Visual Testing is not available for free trials. Please [contact us](https://saucelabs.com/contact) if you have any questions.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* A GitHub account.
* Have Node.js installed.
* Optional: have Mocha and/or Jest installed.


## Set Up Environment

1. From your terminal, clone the [Visual E2E demo repository](https://github.com/luishernandezv/visual-e2e) to your machine:
  ```bash
  git clone https://github.com/luishernandezv/visual-e2e
  ```
2. Navigate to the visual-e2e project.
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

5. Choose which test script you'd like to run: WebdriverIO ([simple-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js)), WebdriverIO with Mocha ([simple-mocha-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js)), or WebdriverIO with Jest ([simple-mocha-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js)). No need to edit the scripts unless you want to change your `projectName`. They already contain everything you need to run the tests:
   * Your Sauce Labs credentials.
     ```js
     'sauce:options': {
       username: process.env.SAUCE_USERNAME,
       accessKey: process.env.SAUCE_ACCESS_KEY,
     },
     ```
   * Your Visual Testing API key and project name. A new project under the name defined below (`sauce-demos/swag-labs`), plus a new [project branch](/visual/e2e-testing/workflow/baseline-branch/) that will display on Screener as `(default)`.
     ```js
     'sauce:visual': {
       apiKey: process.env.SCREENER_API_KEY,
       projectName: 'sauce-demos/swag-labs',
       viewportSize: '1280x1024',
     },
     ```
   * Your WebDriver configuration with our remote hub (`https://hub.screener.io:443/wd/hub`).
     ```js
     hostname: 'hub.screener.io',
     port: 443,
     protocol: 'https',
     path: '/wd/hub',
     ```
   * The actual test, which launches our demo site and executes a login, driven by [Visual E2E Commands](/visual/e2e-testing/commands-options).


## Run Test

6. In your terminal, enter the run command that corresponds to your test script framework:
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

  The test should take up a few minutes to complete.


## View Test Results

### On Screener
7. Go your Visual Testing Dashboard (Screener) by logging into Sauce Labs, then clicking **SAUCE APPS** > **Visual** > **Login**.
8. Check to make sure your test is running:<br/><img src={useBaseUrl('img/visual/e2e-quickstart-all-projects.png')} alt="Visual E2E Quickstart running test" width="300" />

  **This first test will fail** &#8212; this is expected &#8212; because there's no preexisting baseline for Visual E2E to compare against. The results will be labeled as **New**. You should also receive an email summary indicating that this build has failed. It'll be sent to the address associated with your Sauce Labs account. If you don't see it, learn how to subscribe [here](/visual/notifications/).
9. To resolve the failure, you'll need to accept these new states as the baseline:
   * Click the **Review 2 New** button.
   * Click on the first state, **Swag Labs: Login**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-states.png')} alt="Visual E2E Quickstart first state" width="400" />   
   * Click **New** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-new-accept.png')} alt="Visual E2E Quickstart running test" width="400" />   
   * Repeat the process for the second state, **Swag Labs: Products**.
1. Return to your Visual Testing Dashboard and confirm that the two states are now labeled **Accepted**.


### On Sauce Labs

10. You can view additional test information on Sauce Labs by clicking **Show Logs** > **View Logs on Sauce Labs**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-logs.png')} alt="Visual E2E Quickstart accept state" width="205" /><img src={useBaseUrl('img/visual/e2e-quickstart-view-on-sauce.png')} alt="Visual E2E Quickstart accept state" width="250" />

  This brings you to your test results on Sauce Labs (under **Automated** > **Test Results** > **VDC**).

:::tip
To view granular debugging details on Sauce Labs, add our [`extendedDebugging` capability](/dev/test-configuration-options/#extendeddebugging) in your test script:

```java
'sauce:options': {
  username: process.env.SAUCE_USERNAME,
  accessKey: process.env.SAUCE_ACCESS_KEY,
  extendedDebugging: true,
},
```

:::

## Rerun Test

11. This time, we will rerun the test with a small change applied to the Swag Labs site: the login button will be green instead of red. The change is written into the script and will activate once you execute one of the run commands:

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

12. On your Visual Testing Dashboard, you should see a new test running under the same project and branch as before. The test will fail again because it detected a change. Click **Review 1 Changed**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-state.png')} alt="Visual E2E Quickstart changed state" width="500" />
13. You'll see that the login button color has changed from red to green. Click **Changed** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-accept.png')} alt="Visual E2E Quickstart accept state" width="450" />
14. Return to the Dashboard, and you'll see that the two states will update to **Accepted**. If you re-run this test again, using the run commands under step 11, the result will be **Success**.


## Next Steps
* [Learn the Review Flow](/visual/e2e-testing/workflow/review-workflow/) for reviewing UI test results
* [Return results into your WebDriver tests and integrate into your CI process](/visual/e2e-testing/integrations/continuous-integration/) for continuous visual testing
* [Visual E2E Commands and Options](/visual/e2e-testing/commands-options/)
* [Visual E2E Code Examples](/visual/e2e-testing/code-examples/)
