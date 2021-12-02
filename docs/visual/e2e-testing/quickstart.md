---
id: quickstart
title: Visual E2E Quickstart
sidebar_label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


Get up and running quickly with automated Visual E2E testing.


## What You'll Need

* A Sauce Labs account.
:::note Visual Testing not available for free trials
[Click here](https://saucelabs.com/pricing) to explore our available plans. Please [contact us](https://saucelabs.com/contact) if you have any questions.
:::
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* A VPN connection.
* A GitHub account.
* Have Node.js installed. To verify, open your command-line terminal and type `node -v`. If it's installed, this will print the version number.


## Set Up Environment

1. Establish a VPN connection on your local machine.
1. From your terminal, clone the Visual E2E demo repository to your machine.
  ```bash
  git clone https://github.com/luishernandezv/visual-e2e
  ```
1. Navigate to the visual-e2e project.
  ```bash
  cd visual-e2e
  ```
1. Install all dependencies by running:
  ```bash
  npm install
  ```
1. Set your Sauce Labs credentials as environment variables. They will be valid for this terminal session only, so you'll need to set them every time you open a new terminal. To learn how to set them at your system level, see [Setting Up Environment Variables](/basics/environment-variables/).

   Replace the values in angle brackets for your own values (e.g., `export SAUCE_USERNAME="sauce.bot"`).

 <Tabs
      defaultValue="Mac/Linux"
      values={[
        {label: 'Mac/Linux', value: 'Mac/Linux'},
        {label: 'Windows Powershell', value: 'Windows Powershell'},
      ]}>

 <TabItem value="Mac/Linux">

 ```bash
 export SAUCE_USERNAME="<REPLACE WITH YOUR SAUCE USERNAME>"
 export SAUCE_ACCESS_KEY="<REPLACE WITH SAUCE ACCESS KEY>"
 export SCREENER_API_KEY="<REPLACE WITH SCREENER API KEY>"
 ```

 </TabItem>
 <TabItem value="Windows Powershell">

 ```bash
 $Env:SAUCE_USERNAME = "<REPLACE THIS WITH A VALID SAUCE USERNAME>"
 $Env:SAUCE_ACCESS_KEY = "<REPLACE THIS WITH A VALID SAUCE ACCESS KEY>"
 $Env:SCREENER_API_KEY = "<REPLACE THIS WITH A VALID SCREENER API KEY>"
 ```

 </TabItem>
 </Tabs>

  To confirm that your env variables have been set, type `echo $SAUCE_USERNAME`, and the your username value will be printed. Then do the same for `SAUCE_ACCESS_KEY` and `SCREENER_API_KEY`.


## Set Up Test

:::tip
For best experience, open the `visual-e2e` in an IDE.
:::

1. The [repository](https://github.com/luishernandezv/visual-e2e) offers three ways to run a test. Take a look at each test script and decide which one you'd like to run.
   * WebdriverIO ([simple-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js))
   * WebdriverIO with Mocha ([simple-mocha-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js))
   * WebdriverIO with Jest ([simple-mocha-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js))

1. You do not need to edit the test scripts. Each test contains:
   * Your Sauce Labs credentials, located under the `sauce:options` capability.
   * Your Visual Testing API key and project name, located under the `sauce:visual` capability. The test scripts will automatically generate a new project under the name that's set here, plus a new [branch](/visual/e2e-testing/workflow/baseline-branch/) under that project called `(default)`.
   * Configuration that connects to our remote hub, `https://hub.screener.io:443/wd/hub`.


## Run Test

1. Here are the run commands for each test script. If you're doing Mocha or Jest, you'll need to have those frameworks installed.
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

1. Start by running the `simple-test.js`. From your terminal:
  ```bash
  npm run [corresponding script variable]
  ```
  The test should take up a few minutes to complete.


## View Test Results

### On Screener
1. Go your Visual Testing Dashboard by logging into Sauce Labs, then clicking **SAUCE APPS** > **Visual** > **Login**.
1. On the Dashboard, check to make sure your test is running.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-all-projects.png')} alt="Visual E2E Quickstart running test" width="300" />
1. **This first test will fail** - this is expected - because there's no preexisting baseline for Visual E2E to compare the states to. The results will be labeled as **New**. To resolve this, you'll need to accept these states as the baseline:
   * Click the **Review 2 New** button.
   * Click on the first state.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-states.png')} alt="Visual E2E Quickstart first state" width="350" />   
   * Click **New** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-new-accept.png')} alt="Visual E2E Quickstart running test" width="350" />   
   * Repeat same process for the second state.
1. Return to your Visual Testing Dashboard. You should now see that the two new states are now labeled as **Accepted**.
1. You should receive an email status/summary for each Build indicating whether it has failed or been accepted. It'll be sent to the address associated with your Sauce Labs account. If you don't see them, find out how to subscribe [here](/visual/notifications/).



### On Sauce Labs

1. You can view additional test information and logs on Sauce Labs by clicking **Show Logs**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-logs.png')} alt="Visual E2E Quickstart accept state" width="200" />

  Then **View Logs on Sauce Labs**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-on-sauce.png')} alt="Visual E2E Quickstart accept state" width="350" />

This brings you to your test results (under Sauce Labs > **Automated** > **Test Results** > **VDC**).

:::tip
To view granular debugging details, located on the test results page under the **Performance** tab, add our [`extendedDebugging` capability](/dev/test-configuration-options/#extendeddebugging) in your test script here:

```java
'sauce:options': {
  username: process.env.SAUCE_USERNAME,
  accessKey: process.env.SAUCE_ACCESS_KEY,
  extendedDebugging: true,
},
```

:::

## Rerun Test

1. This time, we will rerun the test, with changes this time. No need to edit the test scripts. Return to your terminal and run the following:

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

1. On your Visual Testing Dashboard, you should see a new test running under the same project/same branch. The test will fail again (this is expected) because it detected a change. Click to review the Changed state.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-state.png')} alt="Visual E2E Quickstart changed state" width="500" />
1. You'll see that the login button color has changed from red to green. Click **Changed** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-accept.png')} alt="Visual E2E Quickstart accept state" width="450" />
1. Return to the Dashboard, and you'll see that the two states will update to **Accepted**. If you re-run this test again, using the run commands under step ??, the result will be **Success**.


## Next Steps
* Learn the Review Flow for reviewing UI test results
* Return results into your WebDriver tests and integrate into your CI process for continuous visual testing
* Visual E2E Commands and Options
* View full Code Examples
