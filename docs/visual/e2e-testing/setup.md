---
id: setup
title: Setting Up Visual E2E Testing with WebDriver
sidebar_label: WebDriver Setup Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>**Screener Docs are Now Sauce Docs**<br/>
Screener is now Sauce Labs Visual Testing. As part of our effort to bring you a unified documentation site, we've migrated all Visual Docs from Screener.io to Sauce Docs.

Sauce Labs Visual E2E Testing is an automated testing method that integrates with your Selenium WebDriver tests and code, enabling you to combine functional and visual regression UI testing across different browsers and resolutions in the same run. Follow the steps below to get set up in minutes. You can use any programming language that Selenium WebDriver supports without having to install additional libraries or SDKs.


## What You'll Need

* A [Sauce Labs self-serve or enterprise account](https://saucelabs.com/pricing) with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support. Not available for free-trial accounts.
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* A [GitHub account](https://github.com/).
* Have [Node.js installed](https://nodejs.org/en/download/).


## Quickstart with Existing WebDriver Tests

Follow the steps below to add Visual E2E Testing functionality to your Selenium WebDriver tests.

:::tip New to WebDriver?
Head to [Quickstart Using Sample WebDriver Tests](#quickstart-with-sample-webdriver-tests).
:::


### Set Environment Variables

:::warning 

<details><summary>Protect your credentials</summary>
To protect your authentication data from exposure, the examples in this Quickstart require you to set your Sauce Labs credentials as [environment variables](/basics/environment-variables/). We recommended doing this for all Sauce Labs automated tests.
</details>

:::

Navigate to your WebDriver test in your terminal or IDE, then set your Sauce Labs username, Sauce Labs access key, and Screener API key as environment variables:

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


### Add Sauce Labs Test Code

#### Sauce Capabilities
In your WebDriver test configuration section, add the [`sauce:options`](/dev/test-configuration-options/) capability containing your Sauce Labs credentials. 

Here's an example in JavaScript (see [Selenium on Sauce Labs](/web-apps/automated-testing/selenium/) for examples in Java, Python, Ruby, and C#).
  ```js title="JavaScript example"
  'sauce:options': {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
  },
  ```

#### Sauce Visual E2E Capabilities
1. In your WebDriver capabilities, add the [`sauce:visual`](/visual/e2e-testing/commands-options/#saucevisual-capability-options) capability containing your desired project name and viewport size.

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

2. In your WebDriver capabilities, configure your test to connect to our remote hub, `https://hub.screener.io`.

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


#### Sauce Visual Commands

In your test script, add the below commands, in this order:

1. Add the [`@visual.init`](/visual/e2e-testing/commands-options/#init-command) command to along with a name for your test. 
2. Add the [`@visual.snapshot`](/visual/e2e-testing/commands-options/#snapshot-command) command in the places where you want to capture a visual snapshot. 

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
From your terminal or IDE, run your test.

### View Results
Go to the Visual Testing (Screener) Dashboard to [view your test results](#view-test-results).

### Accept Baseline
This first test will be labeled as "failed" because there's no existing baseline to compare against. To resolve this, you'll need to [review and accept](/visual/e2e-testing/workflow/review-workflow/#3-accept-or-reject) the new snapshots as your baseline.

### Apply UI Changes
1. In your website development environment, apply a simple UI change, such as changing the font color or removing an image.
1. From your IDE or terminal, run your test again.
1. Go to your Visual Testing Dashboard, then click the changed state and [review the change details](/visual/e2e-testing/workflow/change-details).


## Quickstart with Sample WebDriver Tests

New to WebDriver? Follow the steps below to launch a sample WebDriver + Visual E2E test. In this example, you'll run a simple automated test on our demo website, [Swag Labs](http://saucedemo.com).

First, you'll need to set up your sample project. From your terminal:

1. Clone the [Visual E2E Quickstart repository](https://github.com/luishernandezv/visual-e2e) to your local machine's [home directory](https://en.wikipedia.org/wiki/Home_directory):
  ```bash
  git clone https://github.com/luishernandezv/visual-e2e
  ```
2. Navigate to the file path where you downloaded the above repository:
  ```bash
  cd visual-e2e
  ```
3. Install project dependencies:
  ```bash
  npm install
  ```

### Set Environment Variables

Set your Sauce Labs username, Sauce Labs access key, and Screener API key as environment variables:

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


### Choose Sample Test
Choose which test in the project you'd like to run:
  * [**simple-test.js** (WebdriverIO only)](https://github.com/luishernandezv/visual-e2e/blob/main/simple-test.js)
  * [**simple-mocha-test.js** (WebdriverIO with Mocha)](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js) ([Mocha](https://mochajs.org/) required)
  * [**simple-mocha-test.js** (WebdriverIO with Jest)](https://github.com/luishernandezv/visual-e2e/blob/main/simple-jest.test.js) ([Jest](https://jestjs.io/) required)

<br/>

<details><summary>What's in the tests?</summary>

At a high level, each script:
1. Adds your Sauce Labs credentials, test capabilities (e.g., project name), Visual E2E Testing commands
2. Launches the [Demo website](http://saucedemo.com) in a browser and logs in
3. Carries out Visual E2E test session (i.e., taking UI snapshots)
4. Ends session

To view a detailed breakdown, click on any of the WebDriver test links above and refer to the comments in the script. For example:

```js
//Navigate to the test site
await browser.url('http://saucedemo.com');
```

</details>

### Run Test
1. In your terminal, execute the run command corresponding to the test framework you chose in the previous step. To run simple-test.js (WebdriverIO), for example, you'd execute `npm run webdriverio`.
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



### View Results
Go your Visual Testing Dashboard (Sauce Labs > **SAUCE APPS** > **Visual** > **Login**) to confirm that your test is running. It should take a few minutes to complete. You'll see a new project under the name **sauce-demos/swag-labs**, plus a new [branch](/visual/e2e-testing/workflow/baseline-branch/) called **default**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-all-projects.png')} alt="Visual E2E Quickstart running test" width="300" />


### Accept Baseline
1. This first test will be labeled as "failed" because there's no existing baseline to compare against. To resolve this, [review and accept](/visual/e2e-testing/workflow/review-workflow/) the new snapshots as your baseline:
1. From your Dashboard, click **Review 2 New**.<br/><img src={useBaseUrl('img/visual/e2e-review2New.png')} alt="Visual E2E review new state" width="400" />   
1. Click on the first snapshot, **Swag Labs: Login**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-states.png')} alt="Visual E2E Quickstart first state" width="500" />   
1. Click **New** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-new-accept.png')} alt="Visual E2E Quickstart running test" width="500" />   
1. Click on the second snapshot (**Swag Labs: Products**), then **New** > **Accept**.
1. Return to your Visual Testing Dashboard. The two states should now be labeled as **Accepted**.<br/><img src={useBaseUrl('img/visual/e2e-accepted.png')} alt="Visual E2E Quickstart accepted states" width="450" />   

:::tip
Click **Show Logs** > **View Logs on Sauce Labs** to see more granular [test results](/test-results/) on Sauce Labs.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-logs.png')} alt="Visual E2E Quickstart accept state" width="205" /><br/><img src={useBaseUrl('img/visual/e2e-quickstart-view-on-sauce.png')} alt="Visual E2E Quickstart accept state" width="250" />
:::


### Apply UI Changes
1. Next, we'll run a test containing a UI change to the Swag Labs website (login button color changes from red to green). The change is pre-written into the test scripts and will activate once you execute the run command corresponding to the framework you used in the [Run Test](#run-test) step:

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


1. On your Visual Testing Dashboard, you should see a new test running under the same project and branch. Because an element changed in one of your baseline snapshots, the test will be labeled as "failed". To resolve this, you'll need to [review and accept](/visual/e2e-testing/workflow/review-workflow/) them:
    * Click **Review 1 Changed**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-changed-state.png')} alt="Visual E2E Quickstart changed state" width="500" />
    * You'll see that the login button color has changed from red to green. Click **Changed** > **Accept**.<br/><img src={useBaseUrl('img/visual/e2e-quickstart-accept.png')} alt="Visual E2E Quickstart accept state" width="450" />
1. Return to your Visual Testing Dashboard. The two states should now be labeled as **Accepted**. If you run this test again using the [run commands under **Apply UI Changes**](#apply-ui-changes), the result will be labeled **Success**.

For each build, you should receive an [email summary](/visual/notifications/) indicating the pass/fail status, delivered to the address associated with your Sauce Labs account.


<!--
### Example 2

1. From your terminal, clone the [Sauce Labs JS Training repository](https://github.com/saucelabs-training/demo-js) to your machine:
  ```bash
  git clone https://github.com/saucelabs-training/demo-js.git
  ```
2. Navigate to the repository section containing the [Visual E2E WebdriverIO examples](https://github.com/saucelabs-training/demo-js/tree/main/webdriverio/webdriver/examples/visual-e2e) (i.e., `cd webdriverio/webdriver/examples/visual-e2e`).
3. In your terminal, install project dependencies:
  ```bash
  npm install
  ```
4. Choose which test you'd like to run:
5. Run one or both of the following tests using the below run commands:
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
6. View your [test results](#view-test-results).
-->


## Optional Next Steps
* [Integrate Visual E2E Testing into your CI](/visual/e2e-testing/integrations/continuous-integration) to return results into your WebDriver tests for continuous visual testing
* Confirm that your WebDriver test scripts use [W3C WebDriver capabilities](/dev/w3c-webdriver-capabilities/).
* Confirm that the browsers in your tests are [supported by Sauce Labs](/visual/e2e-testing/supported-browsers).

### Useful WebDriver Settings

#### Timeouts

If you're using several [visual assertions](/visual/e2e-testing/commands-options/#visual-e2e-commands) in your test, you may need to increase the `timeout` value in your configuration to help with test stability.

A single assertion can take up to 45 seconds. So if you had a WebdriverIO test with three [snapshots (`/*@visual.snapshot*/`)](/visual/e2e-testing/commands-options/#snapshot-command), for example, you'd need to [set your `timeout` value](https://webdriver.io/docs/timeouts/#framework-related-timeouts) above 180000 milliseconds (3 mins) to prevent your test from failing.


#### Advanced Debugging

To view more in-depth debugging details on Sauce Labs, add [`extendedDebugging`](/dev/test-configuration-options/#extendeddebugging) to your test capabilities:

```java
'sauce:options': {
  username: process.env.SAUCE_USERNAME,
  accessKey: process.env.SAUCE_ACCESS_KEY,
  extendedDebugging: true,
},
```


## More Information
* [Visual E2E Commands](/visual/e2e-testing/commands-options)
* [Visual E2E Troubleshooting](/visual/e2e-testing/troubleshooting)
* [Visual E2E Full Test Script Examples](/visual/e2e-testing/code-examples)
