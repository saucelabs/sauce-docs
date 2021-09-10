---
id: webdriver-integration
title: Getting Started with WebDriver
sidebar_label: Getting Started with WebDriver
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Follow the steps below to integrate Sauce Visual E2E into your Selenium WebDriver tests, using the language/library of your choice. Any programming language that Selenium WebDriver supports can be used without needing to install any additional libraries or SDKs.

It takes only a few minutes to integrate Screener into your existing Selenium WebDriver scripts:

## 1. Verify Requirements

* Your WebDriver test(s) use W3C capabilities and Sauce Labs Browsers that are in our [supported list](/visual/e2e-testing/supported-browsers).
* Your Sauce Labs credentials are set in the `sauce:options` capability:
  ```java
  'sauce:options': {
    username: 'user',
    accesskey: 'xxxxx'
      }
  ```

## 2. Update WebDriver Capabilities

Add "sauce:visual" capability to your WebDriver test configuration:

<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JavaScript">

WebDriverIO Example:

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

:::note You can get your Screener API Key (`apiKey`) from [here](https://screener.io/v2/account/api-key).
:::

:::tip Tip: Store API Key as an environment variable

Secure your API Key by storing it as an environment variable.

For example, store it in an environment variable called `SCREENER_API_KEY`, and then reference it in NodeJS file with: `process.env.SCREENER_API_KEY`.

:::

For additional configuration options, view the [Visual Options](/visual/e2e-testing/options) documentation.


## 3. Connect To Remote Hub

Configure your WebDriver tests to connect to our remote hub at the following url:

```java
https://hub.screener.io
```

<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JavaScript">

WebDriverIO Example:

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


## 4. Add Visual Commands

To integrate Visual Commands, we wanted a very simple, safe, and unobtrusive way to integrate it into your existing code without needing to install anything; it is simply a JavaScript comment placed in a WebDriver execute command.

* Add a `@visual.init` command to set the name for each test. Add this before capturing snapshots.
* Add `@visual.snapshot` command when you want to capture a visual snapshot; use this whenever you want a snapshot to be taken.

<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JavaScript">

WebDriverIO Example:

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


For more details on commands, view the [Visual Commands](/visual/e2e-testing/commands) documentation.

For full examples, view [Code Examples](/visual/e2e-testing/code-examples).


## 5. Run

Great, you're all set!

Now run your first test and view your initial results in the [Screener Dashboard](https://screener.io/v2/dashboard).

:::note
Your initial visual test will fail, and results will be labelled as "New"; [Review and Accept](https://screener.io/v2/docs/visual-e2e/review-flow) them as the baseline.
:::


## Next Steps

* [Learn the Review Flow](/visual/e2e-testing/workflow/review-workflow) for reviewing UI test results.
* [Return results into your WebDriver tests and integrate into your CI process](/visual/e2e-testing/integrations/continuous-integration) for continuous visual testing.
* [Troubleshooting](/visual/e2e-testing/troubleshooting) or view full [Code Examples](/visual/e2e-testing/code-examples).
