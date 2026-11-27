---
id: deque
title: Deque axe™ Integration
sidebar_label: Deque axe
description: Link your Sauce Labs account with axe to add accessibility testing to your existing tests.
keywords:
- accessibility-testing
- accessibility
- automated-testing
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Deque's axe™](https://www.deque.com/axe/) is one of the world's leading digital accessibility toolkits. The `axe-core` library provided by Deque allows you to inject functionality into your tests in order to scan content and return an `a11y` score. The Sauce Labs integration with axe™ lets you run your accessibility tests on Sauce Labs and see the results in Sauce Labs.

:::info why should you care about accessibility testing?
Check out the [Deque Accessibility Guide](https://www.deque.com/web-accessibility-beginners-guide/#what-is-a11y) for further information.
:::

## How It Works

You add an axe™ library for your test language to your existing tests, and call it from your test code to scan the page. When your tests run on Sauce Labs, the scan results populate the **Accessibility** tab for the test in Sauce Labs.

The library you use depends on your language:

| Language | Library |
| --- | --- |
| Java | Deque `axe-core` Selenium library |
| JavaScript | `@axe-core/webdriverio`, with WebdriverIO |
| Python | `sa11y`, or the Python [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/) |
| Ruby | `sa11y`, or the Ruby [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/) |
| C# | [Selenium.Axe for .NET](https://github.com/TroyWalshProf/SeleniumAxeDotnet/), version 3.0 or higher |

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- (Optional) [A Deque account](https://axe.deque.com/plans).
- Existing automated tests that run on Sauce Labs, in Java, JavaScript, Python, Ruby, or C#.

## Set Up the Integration

To set up the integration, add the axe™ library for your language to your test project.

<Tabs groupId="axe-lang-examples">
<TabItem value="java" label="Java" default>

The following shows how to use the Java Deque Axe Selenium library directly.

Add the following to your `pom.xml`:

```xml
<!-- https://mvnrepository.com/artifact/com.deque.html.axe-core/selenium -->
<dependency>
  <groupId>com.deque.html.axe-core</groupId>
  <artifactId>selenium</artifactId>
  <version>4.2.2</version>
</dependency>
```

</TabItem>
<TabItem value="js" label="JavaScript">

1. [Install and set up](https://webdriver.io/docs/gettingstarted/) WebdriverIO.

   This documentation shows you how to run a test locally, and also how to troubleshoot potential issues with your code before running on Sauce Labs.

2. Add [Sauce Service](https://webdriver.io/docs/sauce-service) to WebdriverIO.
3. Add the following dependency to your `package.json` file:

   ```js
   "@axe-core/webdriverio": "4.2.1"
   ```

4. In the `wdio.conf.js` file, create an object called `axeWdio`. This object creates a new `AxeWebdriverIO` instance, which accepts the current browser object from WDIO as an argument.

   ```js
   before: function (capabilities, specs, browser) {
       const axeWdio = new AxeWebdriverIO({
           client: browser
       })
   }
   ```

5. In the `wdio.conf.js` file, add a command for getting basic accessibility results.

   ```js
   browser.addCommand('getAxeResults', function (name) {
   return axeWdio.analyze()
   })
   ```

</TabItem>
<TabItem value="python" label="Python">

We highly recommend using the Python [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/). Check out the description and examples for the new [Accessibility functionality](https://opensource.saucelabs.com/sauce_bindings/accessibility).

The following shows how to use the Python `sa11y` library directly.

1. Install Sa11y.

   ```shell
   pip install sa11y
   ```

2. Import the `Analyze` class in your file.

   ```python
   from sa11y.analyze import Analyze
   ```

</TabItem>
<TabItem value="ruby" label="Ruby">

We highly recommend using the Ruby [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/). Check out the description and examples for the new [Accessibility functionality](https://opensource.saucelabs.com/sauce_bindings/accessibility).

The following shows how to use the Ruby `sa11y` library directly.

1. Add `sa11y` to your `gemfile`:

   ```shell
   gem 'sa11y', '~> 0.2.1'
   ```

2. Require the `Analyze` class in your file:

   ```ruby
   require 'sa11y/analyze'
   ```

</TabItem>
<TabItem value="csharp" label="C#">

To get accessibility results with C# and .NET, we recommend using [Selenium.Axe for .NET](https://github.com/TroyWalshProf/SeleniumAxeDotnet/), version 3.0 or higher.

1. Install via NuGet, in the Package Manager Console.

   ```shell
   Install-Package Selenium.Axe
   ```

2. Import the namespace.

   ```csharp
   using Selenium.Axe;
   ```

</TabItem>
</Tabs>

## Authentication

You don't need any additional credentials for this integration. Your tests authenticate with Sauce Labs as they already do, with your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings). A Deque account is optional.

## Verify the Integration

1. Run a test that calls the axe™ library, as shown in [Use the Integration](#use-the-integration).
2. In Sauce Labs, open the test results for the test.
3. Confirm that the accessibility results appear on the **Accessibility** tab.

   <img src={useBaseUrl('img/accessibility/a11ymain.png')} alt="Accessibility Example in Sauce UI"/>

## Use the Integration

After you set up the integration, call the axe™ library from your tests to scan the page. Each of the following methods populates results on the Sauce Labs **Accessibility** tab.

<Tabs groupId="axe-lang-examples">
<TabItem value="java" label="Java" default>

```java
new AxeBuilder().analyze(driver);
```

**Example Code**

```java reference title="Selenium Accessibility Test"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/accessibility/DequeAxeTest.java
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
browser.getAxeResults()
```

</TabItem>
<TabItem value="python" label="Python">

```python
Analyze(driver).results()
```

**Example Code**

```python reference title="Accessibility Test with Sa11y"
https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/accessibility/test_sa11y.py
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
Sa11y::Analyze.new(driver).results
```

**Example Code**

```ruby reference title="Accessibility Test with Sa11y"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/sauce-features/accessibility/spec/sa11y_spec.rb
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
AxeResult axeResult = new AxeBuilder(webDriver).Analyze();
```

For more detailed usage, see [Selenium.Axe for .NET](https://troywalshprof.github.io/SeleniumAxeDotnet/#/).

</TabItem>
</Tabs>

### View the Results

The **Accessibility** tab shows the results of the scan. The full page report gives an easy to consume overview of all the accessibility results, with stats and extended details:

<img src={useBaseUrl('img/accessibility/a11yfull.png')} alt="Full Page Accessibility Example in Sauce UI"/>

## Troubleshooting

<details>
<summary>**The Accessibility tab shows no results**</summary>

The results appear only after your test calls the axe™ library to scan the page. Make sure your test calls the method for your language, as shown in [Use the Integration](#use-the-integration).

</details>

<details>
<summary>**C# tests do not return accessibility results**</summary>

Use [Selenium.Axe for .NET](https://github.com/TroyWalshProf/SeleniumAxeDotnet/) version 3.0 or higher.

</details>

## Next Steps

- [Deque Sauce Labs Integration Documentation](https://www.deque.com/saucelabs/get-started/)
- [Deque axe DevTools Mobile - for Native Mobile App Testing On Real Devices](https://axe.deque.com/axe-devtools-mobile/get-started)
- [Deque `axe-core` Selenium Integration for Java](https://github.com/dequelabs/axe-core-maven-html)
- [Sa11y - Selenium Accessibility for Python & Ruby](https://github.com/saucelabs/sa11y)
- [Deque `axe-core` Example WebdriverIO Project](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverio)
- [Documentation about the chainable `axe` API for WebdriverIO](https://www.npmjs.com/package/@axe-core/webdriverio)
- [Selenium.Axe for .NET](https://github.com/TroyWalshProf/SeleniumAxeDotnet/)
- [Integrations Overview](/basics/integrations-overview/)
