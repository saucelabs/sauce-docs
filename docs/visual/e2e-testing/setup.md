---
id: setup
title: Setting Up Visual E2E Testing with WebDriver
sidebar_label: Setup with WebDriver
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>**Screener Docs are Now Sauce Docs**<br/>
As part of our efforts to bring you a unified documentation site, we've migrated all Visual Docs from [Screener.io](https://screener.io) to Sauce Docs.

Follow the steps below to integrate Visual E2E Testing into your Selenium WebDriver tests. You can use any programming language that Selenium WebDriver supports without having to install additional libraries or SDKs. Whether you're an experienced WebDriver user or have never used it, we've got you covered in the Quickstart steps below.


## What You'll Need

* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing) with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support. Not available for free-trial accounts.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* A [GitHub account](https://github.com/).
* Have [Node.js installed](https://nodejs.org/en/download/).
* Optional: have [Mocha](https://mochajs.org/) and/or [Jest](https://jestjs.io/) installed.



## Quickstart with Existing WebDriver Tests

:::caution

If you're new to WebDriver, head to [Quickstart with Sample WebDriver Tests](#quickstart-with-sample-webdriver-tests).
:::

Follow the steps below to integrate Visual E2E functionality with your existing Selenium WebDriver tests.


### Set Environment Variables

1. Set your Sauce Labs username, Sauce Labs access key, and Screener API key as environment variables:
  <details><summary>What is this?</summary>

  :::warning PROTECT YOUR CREDENTIALS
  To protect your authentication data from exposure, the example code in this Quickstart requires you to set your Sauce Labs credentials as [environment variables](/basics/environment-variables/). We recommend doing this for all Sauce Labs automated tests.
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


### Add Sauce Capabilities to Test
2. Add the [`sauce:options`](/dev/test-configuration-options/) capability containing your Sauce Labs credentials to your WebDriver test configuration.
  ```js title="JavaScript example"
  'sauce:options': {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
  },
  ```
3. Add the [`sauce:visual`](/visual/e2e-testing/commands-options/#saucevisual-capability-options) capability containing your project name and viewport size.

<Tabs
  defaultValue="JS/WebdriverIO"
  values={[
    {label: 'JS/WebdriverIO', value: 'JS/WebdriverIO'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JS/WebdriverIO">

```javascript
var capabilities = {
  ...
  'sauce:visual': {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'my-project',
    viewportSize: '1280x1024'
  }
}
```

</TabItem>
<TabItem value="Java">

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
MutableCapabilities sauceVisual = new MutableCapabilities();
sauceVisual.setCapability("apiKey", System.getenv("SCREENER_API_KEY"));
sauceVisual.setCapability("projectName", "my-project");
sauceVisual.setCapability("viewportSize", "1280x1024");
capabilities.setCapability("sauce:visual", sauceVisual);
```

</TabItem>
<TabItem value="Python">

```py
capabilities = {
  ...
  'sauce:visual': {
    'apiKey': os.environ.get('SCREENER_API_KEY'),
    'projectName': 'my-project',
    'viewportSize': '1280x1024'
  }
}
```

</TabItem>
<TabItem value="Ruby">

```rb
capabilities = {
  ...
  "sauce:visual" => {
    apiKey: ENV["SCREENER_API_KEY"],
    projectName: 'my-project',
    viewportSize: '1280x1024'
  }
}
```

</TabItem>
<TabItem value="C#">

```csharp
Dictionary sauceVisual = new Dictionary
{
    { "apiKey", Environment.GetEnvironmentVariable("SCREENER_API_KEY") },
    { "projectName", "my-project" },
    { "viewportSize", "1280x1024" }
};
browserOptions.AddAdditionalCapability("sauce:visual", sauceVisual, true);
```

</TabItem>
</Tabs>

4. Configure your test to connect to our remote hub, `https://hub.screener.io`.

<Tabs
  defaultValue="JS/WebdriverIO"
  values={[
    {label: 'JS/WebdriverIO', value: 'JS/WebdriverIO'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JS/WebdriverIO">

```javascript
exports.config = {
  hostname: 'hub.screener.io',
  port: 443,
  protocol: 'https',
  path: '/wd/hub'
}
```

</TabItem>
<TabItem value="Java">

```java
WebDriver driver = new RemoteWebDriver(
   new URL("https://hub.screener.io:443/wd/hub"),
capabilities);
```

</TabItem>
<TabItem value="Python">

```py
host = "https://hub.screener.io:443/wd/hub"
self.driver = webdriver.Remote(host, capabilities)
```

</TabItem>
<TabItem value="Ruby">

```rb
Selenium::WebDriver.for(:remote, url: "https://hub.screener.io:443/wd/hub", desired_capabilities: caps)
```

</TabItem>
<TabItem value="C#">

```csharp
driver = new RemoteWebDriver(new Uri("https://hub.screener.io:443/wd/hub"), capabilities);
```

</TabItem>
</Tabs>

### Add Visual E2E Commands
5. Add the [`@visual.init`](/visual/e2e-testing/commands-options/#init-command) command to set the name for each test, prior to capturing snapshots. Then add the [`@visual.snapshot` command](/visual/e2e-testing/commands-options/#snapshot-command) in the places where you want to capture a visual snapshot.

<Tabs
  defaultValue="JS/WebdriverIO"
  values={[
    {label: 'JS/WebdriverIO', value: 'JS/WebdriverIO'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JS/WebdriverIO">

```javascript
it('should take snapshot', () => {
  browser.url('https://screener.io');
  browser.execute('/*@visual.init*/', 'My Visual Test');
  browser.execute('/*@visual.snapshot*/', 'Home');
});
```

</TabItem>
<TabItem value="Java">

```java
public void simpleTest() {
  WebDriver driver = this.getWebDriver();
  driver.get("https://screener.io");
  JavascriptExecutor js = (JavascriptExecutor) driver;
  js.executeScript("/*@visual.init*/", "My Visual Test");
  js.executeScript("/*@visual.snapshot*/", "Home");
}
```

</TabItem>
<TabItem value="Python">

```py
def test_take_snapshot(self):
   self.driver.get('https://screener.io')
   self.driver.execute_script('/*@visual.init*/', 'My Visual Test')
   self.driver.execute_script('/*@visual.snapshot*/', 'Home')
```

</TabItem>
<TabItem value="Ruby">

```rb
it 'should take snapshot' do
  driver.navigate.to('https://screener.io')
  driver.execute_script('/*@visual.init*/', 'My Visual Test')
  driver.execute_script('/*@visual.snapshot*/', 'Home')
end
```

</TabItem>
<TabItem value="C#">

```csharp
static void test() {
  driver.Navigate().GoToUrl("https://screener.io");
  IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
  js.ExecuteScript("/*@visual.init*/", "My Visual Test");
  js.ExecuteScript("/*@visual.snapshot*/", "Home");
}
```

</TabItem>
</Tabs>

### Run Test
6. Run your test.

### View Results
7. Go to the Visual Testing (Screener) Dashboard to [view your test results](#view-test-results).

### Accept Baseline
8. [Review and accept](#accept-baseline) your baseline.




## Quickstart with Sample WebDriver Tests

If you've never used WebDriver, follow the steps below to launch a sample WebDriver test with Visual E2E.


### Example 1

In this example, you'll run a simple automated test on our demo website, [Swag Labs](http://saucedemo.com).

#### Set Up Project

1. From your terminal, clone the [Visual E2E Quickstart repository](https://github.com/luishernandezv/visual-e2e) to your local machine:
  ```bash
  git clone https://github.com/luishernandezv/visual-e2e
  ```
2. Navigate to the file path where you downloaded the repository (i.e., `cd visual-e2e` or `cd download/visual-e2e`).
:::tip
For the best experience, open the [`visual-e2e` repository](https://github.com/luishernandezv/visual-e2e) in an IDE.
:::
3. Install dependencies:
  ```bash
  npm install
  ```

#### Set Environment Variables
4. Set your Sauce Labs username, Sauce Labs access key, and Screener API key as environment variables:
  <details><summary>What is this?</summary>

  :::warning PROTECT YOUR CREDENTIALS
  To protect your authentication data from exposure, the example code in this Quickstart requires you to set your Sauce Labs credentials as [environment variables](/basics/environment-variables/). We recommend doing this for all Sauce Labs automated tests.
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


#### Set Up Test

5. Choose which test script you'd like to run. No need to edit them.
   * [WebdriverIO (simple-test.js)](https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js)
   * [WebdriverIO with Mocha (simple-mocha-test.js)](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js)
   * [WebdriverIO with Jest (simple-mocha-test.js)](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js)

   <br/>

   <details><summary><strong>Click here</strong> to view the test script breakdown.</summary>

   ```js reference title="Sauce Labs credentials"
   https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js#L12-L15
   ```

   ```js reference title="Visual Testing API key and project name"
   https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js#L16-L20
     ```

   ```js reference title="WebDriver configuration with our remote hub"
   https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js#L5-L8
   ```

   ```js reference title="Test Details"
   https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js#L27-L50
   ```

   What's in the test:
   - [Demo website](http://saucedemo.com) launched in browser.
   - Visual E2E Test initialized with [`/*@visual.init*/` command](/visual/e2e-testing/commands-options/#init-command)
   - Visual E2E takes snapshot of demo site login page [`/*@visual.snapshot*/` command](/visual/e2e-testing/commands-options/#snapshot-command)
   - WebDriver executes login to Products page
   - Visual E2E takes snapshot of Products page [`/*@visual.snapshot*/` command](/visual/e2e-testing/commands-options/#snapshot-command)
   - Visual E2E session ended [`/*@visual.end*/` command](/visual/e2e-testing/commands-options/#end-command)

   </details>


#### Run Test

6. In your terminal, enter the run command corresponding to the test framework you chose in the previous step:
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


#### View Test Results
7. Go your Visual Testing Dashboard (Sauce Labs > **SAUCE APPS** > **Visual** > **Login**) to confirm that your test is running. It should take a few minutes to complete. You'll see a new project under the name "sauce-demos/swag-labs", plus a new [branch](/visual/e2e-testing/workflow/baseline-branch/) called "default".<br/><img src={useBaseUrl('img/visual/e2e-quickstart-all-projects.png')} alt="Visual E2E Quickstart running test" width="300" />

#### Accept Baseline
8. This first test will be labeled as "failed" because there's no existing baseline for Visual E2E to compare against. To resolve this, you'll need to [review and accept](/visual/e2e-testing/workflow/review-workflow/) the new snapshots as your baseline:
   * Click **Review 2 New**.<br/><img src={useBaseUrl('img/visual/e2e-review2New.png')} alt="Visual E2E review new state" width="400" />   
   * Click on the first snapshot, **Swag Labs: Login**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-states.png')} alt="Visual E2E Quickstart first state" width="500" />   
   * Click **New** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-new-accept.png')} alt="Visual E2E Quickstart running test" width="500" />   
   * Click on the second snapshot (**Swag Labs: Products**), then **New** > **Accept**.
9. Return to your Visual Testing Dashboard. The two states should now be labeled as **Accepted**.<br/><img src={useBaseUrl('img/visual/e2e-accepted.png')} alt="Visual E2E Quickstart accepted states" width="450" />   

10. Click **Show Logs** > **View Logs on Sauce Labs** to view your [test results on Sauce Labs](/test-results/) in greater detail.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-logs.png')} alt="Visual E2E Quickstart accept state" width="205" /><img src={useBaseUrl('img/visual/e2e-quickstart-view-on-sauce.png')} alt="Visual E2E Quickstart accept state" width="250" />


#### Apply UI Changes
11. Next, we will run a test containing a UI change to the Swag Labs website (login button color changes from red to green). The change is pre-written into the test scripts and will activate once you execute the run command corresponding to the framework you used in the [Run Test step](#run-test):

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


#### Review Changes
12. On your Visual Testing Dashboard, you should see a new test running under the same project and branch. Because an element changed in one of your baseline snapshots, the test will be labeled as "failed". To resolve this, you'll need to [review and accept](/visual/e2e-testing/workflow/review-workflow/) them:
    * Click **Review 1 Changed**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-state.png')} alt="Visual E2E Quickstart changed state" width="500" />
    * You'll see that the login button color has changed from red to green. Click **Changed** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-accept.png')} alt="Visual E2E Quickstart accept state" width="450" />
13. Return to your Visual Testing Dashboard. The two states should now be labeled as **Accepted**. If you run this test again using the [run commands under **Apply UI Changes**](#apply-ui-changes), the result will be labeled **Success**.

For each build, you should receive an [email summary](/visual/notifications/) indicating the pass/fail status, delivered to the address associated with your Sauce Labs account.


### Example 2

1. From your terminal, clone the [Sauce Labs JS Training repository](https://github.com/saucelabs-training/demo-js) to your machine:
  ```bash
  git clone https://github.com/saucelabs-training/demo-js.git
  ```
2. Navigate to the section of our JS repository containing [Visual E2E WebdriverIO examples](https://github.com/saucelabs-training/demo-js/tree/main/webdriverio/webdriver/examples/visual-e2e):
  ```bash
  cd webdriverio/webdriver/examples/visual-e2e
  ```
:::tip
For best experience, open the [`visual-e2e` repository](https://github.com/luishernandezv/visual-e2e) in an IDE.
:::
3. Install all dependencies:
  ```bash
  npm install
  ```
4. Run one or both of the following tests using the below run commands:
  <Tabs
      defaultValue="Simple Test"
      values={[
        {label: 'Simple Test', value: 'Simple Test'},
        {label: 'Cross-Platform', value: 'Cross-Platform'},
      ]}>

  <TabItem value="Simple Test">

   Simple test on the Sauce Labs US Data Center:
   ```bash
   npm run test.visual.sauce
   ```

  </TabItem>
  <TabItem value="Cross-Platform">

   Cross-platform test with multiple resolutions on the Sauce Labs US Data Center:
   ```bash
   npm run test.visual.crossplatform
   ```

  </TabItem>
  </Tabs>
5. View your [test results](#view-test-results).



## Useful Settings

### Timeouts

If you're using several [visual assertions](/visual/e2e-testing/commands-options/#visual-e2e-commands) in your test, you may need to increase the `timeout` value in your configuration to help with test stability.

A single assertion can take up to 45 seconds. So if you had a WebdriverIO test with three [snapshots (`/*@visual.snapshot*/`)](/visual/e2e-testing/commands-options/#snapshot-command), for example, you'd need to [set your `timeout` value](https://webdriver.io/docs/timeouts/#framework-related-timeouts) above 180000 milliseconds (3 mins) to prevent your test from failing.


### Advanced Debugging

To view more in-depth debugging details on Sauce Labs, add [`extendedDebugging`](/dev/test-configuration-options/#extendeddebugging) to your test capabilities:

```java
'sauce:options': {
  username: process.env.SAUCE_USERNAME,
  accessKey: process.env.SAUCE_ACCESS_KEY,
  extendedDebugging: true,
},
```


## Next Steps
* Learn the [Visual E2E review workflow](/visual/e2e-testing/workflow/review-workflow/) for your UI test results
* [Integrate Visual E2E Testing into your CI](/visual/e2e-testing/integrations/continuous-integration) to return results into your WebDriver tests for continuous visual testing
* Confirm that your WebDriver test scripts are using [W3C WebDriver capabilities](/dev/w3c-webdriver-capabilities/).
* Confirm that the browsers in your tests are in our list of [supported browsers](/visual/e2e-testing/supported-browsers).




## More Information
* [Visual E2E Commands](/visual/e2e-testing/commands-options)
* [Visual E2E Troubleshooting](/visual/e2e-testing/troubleshooting)
* [Visual E2E Full Test Script Examples](/visual/e2e-testing/code-examples)
