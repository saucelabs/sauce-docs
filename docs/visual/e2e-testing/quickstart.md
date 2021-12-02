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
* An established VPN connection, which is required to run your tests.
* A GitHub account.
* You'll need to have Node.js installed. To verify installation, open your command-line terminal and type `node -v`. If it's installed, this will print the version number.
* Have a test framework installed e.g Mocha, Jest (Will be installed in next step)


## Set Up Environment

1. Establish a VPN connection on your local machine.
1. From your terminal, clone the Visual E2E demo repository to your machine.
  ```bash
  git clone https://github.com/luishernandezv/visual-e2e
  ```
1. Navigate to visual-e2e project.
  ```bash
  cd visual-e2e
  ```
1. Install all dependencies by running:
  ```bash
  npm install
  ```
1. Next, set your Sauce Labs credentials as environment variables. They will be valid for this terminal session only (i.e., you'll need to repeat this process every time you open a terminal). To learn how to set them at your system level, see [Setting Up Environment Variables](/basics/environment-variables/).

 <Tabs
      defaultValue="Mac/Linux"
      values={[
        {label: 'Mac/Linux', value: 'Mac/Linux'},
        {label: 'Windows Powershell', value: 'Windows Powershell'},
      ]}>

 <TabItem value="Mac/Linux">

 Replace values in angle brackets for your own values (e.g. `export SAUCE_USERNAME="sauce.bot"`).

 ```bash
 export SAUCE_USERNAME="<REPLACE WITH YOUR SAUCE USERNAME>"
 export SAUCE_ACCESS_KEY="<REPLACE WITH SAUCE ACCESS KEY>"
 export SCREENER_API_KEY="<REPLACE WITH SCREENER API KEY>"
 ```

 </TabItem>
 <TabItem value="Windows Powershell">

 Replace values in angle brackets for your own values (e.g. `$Env:SAUCE_USERNAME = "sauce.bot"`).

 ```bash
 $Env:SAUCE_USERNAME = "<REPLACE THIS WITH A VALID SAUCE USERNAME>"
 $Env:SAUCE_ACCESS_KEY = "<REPLACE THIS WITH A VALID SAUCE ACCESS KEY>"
 $Env:SCREENER_API_KEY = "<REPLACE THIS WITH A VALID SCREENER API KEY>"
 ```

 </TabItem>
 </Tabs>

  To confirm your env variables have been set, type `echo $SAUCE_USERNAME`, and the value will be printed. Then do the same for `SAUCE_ACCESS_KEY` and `SCREENER_API_KEY`.


## Set Up Your Test

1. Recommended: For best experience, open your `visual-e2e` folder in an IDE.
1. The repository offers three ways to run a test: WebDriver, WebdriverIO with Mocha, and WebdriverIO with Jest. Take a look at the corresponding test scripts: [simple-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js), [simple-mocha-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js), and [simple-mocha-test.js](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js), respectively. You do not need to edit them at all, unless you want to change your project name.
   * Your Sauce Labs credentials are set under the `sauce:options` capability.
   * Your Visual Testing credentials and project name are set under the `sauce:visual` capability. It will automatically create a new project under that name.
   * The tests are pre-configured to connect to our remote hub at `https://hub.screener.io:443/wd/hub`.


## Run Your Test
1. Start by running the `simple-test.js`. From your terminal:
  ```bash
  npm run [corresponding script variable]
  ```
  The test should take up a few minutes to complete.


## View Test Results

[expected response  in terminal for each js test ]?

### On Screener
1. Go your Visual Testing Dashboard by logging into Sauce Labs, then clicking **SAUCE APPS** > **Visual** > **Login**.
1. On the Dashboard, you should see that **the first test has failed** - this is expected - because there's no preexisting baseline for Visual E2E to compare the states to. The results will be labeled as **New**. To resolve this, you'll need to accept these states as the baseline:
   * Click the **Review 2 New** button.
   * Click on the first state.
   * Click **New** > **Accept**.
   * Repeat same process for the second state.
1. Return to your Visual Testing Dashboard. You should now see that the two new states are now labeled as **Accepted**.
1. You should receive an email status/summary for each Build, indicating whether the build has failed or been accepted. It'll be sent to the address associated with your Sauce Labs account. If you don't see the emails, find out how to subscribe [here](/visual/notifications/).



### On Sauce Labs

You can view additional results and logs on Sauce Labs by clicking the **View on Sauce Labs** link in Screener or by going to Sauce Labs > **Automated** > **Test Results** > **VDC** > then clicking on your test.

:::tip
To receive more details on your next test run, add our [`extendedDebugging` capability](/dev/test-configuration-options/#extendeddebugging) to your sauce:options:

```java
'sauce:options': {
  username: process.env.SAUCE_USERNAME,
  accessKey: process.env.SAUCE_ACCESS_KEY,
  extendedDebugging: true,
},
```

:::

## Rerun Test

1. To rerun the simple.js test -- with changes this time -- return to your terminal and run:
  ```bash
  APPLY_CHANGES=true node simple-test.js
  ```

1. On your Visual Testing Dashboard, you should see that ----



## Next Steps
* Learn the Review Flow for reviewing UI test results
* Return results into your WebDriver tests and integrate into your CI process for continuous visual testing
* Visual E2E Commands and Options
* View full Code Examples
