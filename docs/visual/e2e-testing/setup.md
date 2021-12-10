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

Follow the steps below to integrate Visual E2E Testing into your Selenium WebDriver tests, using the language/library of your choice. Any programming language that Selenium WebDriver supports can be used without needing to install any additional libraries or SDKs.

In the instructions below, you'll run simple automated test using our demo website, [Swag Labs](http://saucedemo.com).  


## What You'll Need

* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing). Visual Testing is not available for free trials. Please [contact us](https://saucelabs.com/contact) if you're interested.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* A [GitHub account](https://github.com/).
* Have [Node.js installed](https://nodejs.org/en/download/).
* Optional: have [Mocha](https://mochajs.org/) and/or [Jest](https://jestjs.io/) installed.


## Visual E2E Testing Quickstart

### Set Up Environment

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
4. Set your Sauce Labs username, Sauce Labs access key, and Screener API key as environment variables:
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

To learn more about Sauce Labs environment variables and how to set them at your system level, so that you don't have to set them every time you open a terminal, see [Setting Up Environment Variables](/basics/environment-variables/).


### Set Up Test

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


### Run Test

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


### View Test Results

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


### Apply UI Changes

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



## Integrating with Existing WebDriver Tests

It takes only a few minutes to integrate Visual E2E with your existing Selenium WebDriver test scripts.

1. Set your Sauce Labs credentials as [environment variables](/visual/e2e-testing/setup/#set-up-environment). In JavaScript, for example, you could store your Screener API key in an environment variable called `SCREENER_API_KEY`, and then reference it in a NodeJS file with `process.env.SCREENER_API_KEY`.
2. Add the [`sauce:options` capability](/dev/test-configuration-options/) to your WebDriver test configuration and set your Sauce Labs credentials there. Here's a JavaScript example:
  ```js
  'sauce:options': {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
  },
  ```
3. Add the `sauce:visual` capability and set your project name and viewport size there. For additional options, see [`sauce:visual` Capabilities](/visual/e2e-testing/commands-options/#saucevisual-capability-options).

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


5. Add our [`@visual.init` command](/visual/e2e-testing/commands-options/#init-command) to set the name for each test. Then add the [`@visual.snapshot` command](/visual/e2e-testing/commands-options/#snapshot-command) when you want to capture a visual snapshot. 

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

6. Now your can run the test and view your results in the [Screener Dashboard](https://screener.io/v2/dashboard). Your initial visual test will fail, and results will be labelled as **New**. [Review and Accept](https://screener.io/v2/docs/visual-e2e/review-flow) them as the baseline.


## Next Steps
* Learn the [Visual E2E workflow](/visual/e2e-testing/workflow/review-workflow/) for reviewing UI test results
* [Integrate Visual E2E Testing into your CI](/visual/e2e-testing/integrations/continuous-integration) to return results into your WebDriver tests for continuous visual testing
* Confirm that your WebDriver test scripts are using [W3C WebDriver capabilities](/dev/w3c-webdriver-capabilities/).
* Confirm that the browsers in your tests are in our list of [supported browsers](/visual/e2e-testing/supported-browsers).


## More Information
* [Visual E2E Commands](/visual/e2e-testing/commands-options)
* [Visual E2E Troubleshooting](/visual/e2e-testing/troubleshooting)
* [Visual E2E Full Test Script Examples](/visual/e2e-testing/code-examples)
