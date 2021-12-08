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

It takes only a few minutes to integrate Screener into your existing Selenium WebDriver scripts:


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).
* Your [Screener API Key](https://screener.io/v2/account/api-key).
* Confirm that your WebDriver test scripts use [W3C WebDriver-compliant capabilities](/dev/w3c-webdriver-capabilities/).
* Confirm that the browsers in your tests are in the list of [supported Sauce Labs browsers](/visual/e2e-testing/supported-browsers).


## Setting Up Visual E2E Testing with WebDriver


### Set Your Credentials as Environment Variables
1. Recommended: set your Sauce Labs username, Sauce Labs access key, and Screener API key as [environment variables](/basics/environment-variables/). In JavaScript, for example, you could store your Screener API key in an environment variable called `SCREENER_API_KEY`, and then reference it in NodeJS file with `process.env.SCREENER_API_KEY`.

### Set Your W3C Capabilities

2. In your WebDriver test configuration, add the `sauce:options` capability and set your Sauce Labs credentials there:
  ```javascript title="JavaScript example"
  'sauce:options': {
    username: '$SAUCE_USERNAME',
    accesskey: '$SAUCE_ACCESS_KEY'
  }
  ```
3. In your WebDriver test configuration, add the `sauce:visual` capability, where you'll define your [Screener API key](https://screener.io/v2/account/api-key), project name, and viewportSize. For additional configuration options, see the [`sauce:visual` Capabilities](/visual/e2e-testing/commands-options/#saucevisual-capability-options).

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


### Connect to Our Remote Hub

4. Configure your WebDriver tests to connect to our remote hub at `https://hub.screener.io`.

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


### Add Visual Commands

We've set up a simple, safe, and unobtrusive way to integrate [Visual E2E Commands](/visual/e2e-testing/commands-options) into your existing code. Each command is simply a JavaScript comment placed in a WebDriver execute command &#8212; no need to install anything.

5. Add a [`@visual.init`](/visual/e2e-testing/commands-options/#init-command) command to set the name for each test. Add this before capturing snapshots. Then add the [`@visual.snapshot`](/visual/e2e-testing/commands-options/#snapshot-command) command when you want to capture a visual snapshot; use this whenever you want a snapshot to be taken.

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

6. Great, you're all set! Now run your first test and view your initial results in the [Screener Dashboard](https://screener.io/v2/dashboard).

:::note
Your initial visual test will fail, and results will be labelled as **New**. [Review and Accept](https://screener.io/v2/docs/visual-e2e/review-flow) them as the baseline.
:::


## Next Steps
* [Visual E2E Testing Review Workflow](/visual/e2e-testing/workflow/review-workflow): Learn the workflow for reviewing UI test results with Visual E2E
* [Integrate Visual E2E Testing Into Your CI](/visual/e2e-testing/integrations/continuous-integration): Return results into your WebDriver tests and integrate into your CI process for continuous visual testing

## More Information
* [Visual E2E Commands](/visual/e2e-testing/commands-options)
* [Visual E2E Troubleshooting](/visual/e2e-testing/troubleshooting)
* [Visual E2E Full Test Script Examples](/visual/e2e-testing/code-examples)
