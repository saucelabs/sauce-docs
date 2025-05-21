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

[Deque's axe™](https://www.deque.com/axe/) is one of the world's leading digital accessibility toolkits. The `axe-core` library provided by Deque allows you to inject functionality into your tests in order to scan content and return an `a11y` score.

Below is a guide to set up the Sauce Labs integration. This integration allows you to run your accessibility tests on our platform with axe™. NOTE

:::info why should you care about accessibility testing?
Check out the [Deque Accessibility Guide](https://www.deque.com/web-accessibility-beginners-guide/#what-is-a11y) for further information.
:::

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- [A Deque Account](https://axe.deque.com/plans) (Optional)

## Sauce Labs UI

Sauce Labs will display the accessibility results in our UI as a tab in the job itself:

<img src={useBaseUrl('img/accessibility/example.png')} alt="Accessibility Example in Sauce UI"/>

## Language Specific Examples

<Tabs
groupId="axe-lang-examples"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'JavaScript', value: 'js'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'C#', value: 'csharp'},
]}>

<TabItem value="java">

We highly recommend using the Java [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/).
Check out the description and examples for the new [Accessibility functionality](https://opensource.saucelabs.com/sauce_bindings/accessibility).

The following is information on how to use the Java Deque Axe Selenium library directly:

**Requirements**

Add the following to your `pom.xml`:

```xml
<!-- https://mvnrepository.com/artifact/com.deque.html.axe-core/selenium -->
<dependency>
  <groupId>com.deque.html.axe-core</groupId>
  <artifactId>selenium</artifactId>
  <version>4.2.2</version>
</dependency>
```

**Usage**

This method populates results on the Sauce Labs Accessibility tab:

```java
new AxeBuilder().analyze(driver);
```

**Example Code**

```java reference title="Selenium Accessibility Test"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/accessibility/DequeAxeTest.java
```

</TabItem>
<TabItem value="js">

**Requirements**

1. [Install and Set up](https://webdriver.io/docs/gettingstarted/) WebdriverIO.

   This documentation shows you how to run a test locally, and also how to troubleshoot potential issues with your code before running on Sauce Labs.

1. Add [Sauce Service](https://webdriver.io/docs/sauce-service) to WebdriverIO.

1. Add the following dependency to your `package.json` file:

```js
"@axe-core/webdriverio": "4.2.1"
```

1. In the `wdio.conf.js` file, create an object called `axeWdio`.
   This object creates a new `AxeWebdriverIO` instance which accepts the current browser object from WDIO as an argument.

```js
before: function (capabilities, specs, browser) {
    const axeWdio = new AxeWebdriverIO({
        client: browser
    })
}
```

1. In the `wdio.conf.js` file, add a command for getting basic accessibility results.

```js
browser.addCommand('getAxeResults', function (name) {
return axeWdio.analyze()
})
```

**Usage**

This method populates results on the Sauce Labs Accessibility tab:

```js
browser.getAxeResults()
```

</TabItem>
<TabItem value="python">

We highly recommend using the Python [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/).
Check out the description and examples for the new [Accessibility functionality](https://opensource.saucelabs.com/sauce_bindings/accessibility).

The following is information on how to use the Python `sa11y` library directly:

**Requirements**

1. Install Sa11y.

```shell
pip install sa11y
```

1. Import the `Analyze` class in your file.

```python
from sa11y.analyze import Analyze
```

**Usage**

This method populates results on the Sauce Labs Accessibility tab:

```python
Analyze(driver).results()
```

**Example Code**

```python reference title="Accessibility Test with Sa11y"
https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/accessibility/test_sa11y.py
```

</TabItem>
<TabItem value="ruby">

We highly recommend using the Ruby [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/).
Check out the description and examples for the new [Accessibility functionality](https://opensource.saucelabs.com/sauce_bindings/accessibility).

The following is information on how to use the Ruby `sa11y` library directly:

**Requirements**

1. Add `sa11y` to your `gemfile`:

```shell
gem 'sa11y', '~> 0.2.1'
```

1. Require the `Analyze` class in your file:

```ruby
require 'sa11y/analyze'
```

**Usage**

This method populates results on the Sauce Labs Accessibility tab:

```ruby
Sa11y::Analyze.new(driver).results
```

**Example Code**

```ruby reference title="Accessibility Test with Sa11y"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/sauce-features/accessibility/spec/sa11y_spec.rb
```

</TabItem>
<TabItem value="csharp">

To get accessibility results with C# and .NET, we recommend using [Selenium.Axe for .NET](https://github.com/TroyWalshProf/SeleniumAxeDotnet/), version 3.0 or higher.

**Requirements**

1. Install via NuGet, in the Package Manager Console.

```shell
Install-Package Selenium.Axe
```

1. Import the namespace.

```csharp
using Selenium.Axe;
```

**Usage**

This method populates results on the Sauce Labs Accessibility tab:

```csharp
AxeResult axeResult = new AxeBuilder(webDriver).Analyze();
```

For more detailed usage, see [Selenium.Axe for .NET](https://troywalshprof.github.io/SeleniumAxeDotnet/#/).

</TabItem>
</Tabs>

## Additional Resources

- [Deque Sauce Labs Integration Documentation](https://www.deque.com/saucelabs/get-started/)
- [Deque axe DevTools Mobile - for Native Mobile App Testing On Real Devices](https://axe.deque.com/axe-devtools-mobile/get-started)
- [Sauce Bindings Accessibility Feature](https://opensource.saucelabs.com/sauce_bindings/accessibility)
- [Deque `axe-core` Selenium Integration for Java](https://github.com/dequelabs/axe-core-maven-html)
- [Sa11y - Selenium Accessibility for Python & Ruby](https://github.com/saucelabs/sa11y)
- [Deque `axe-core` Example WebdriverIO Project](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverio)
- [Documentation about the chainable `axe` API for WebdriverIO](https://www.npmjs.com/package/@axe-core/webdriverio)
- [Selenium.Axe for .NET](https://github.com/TroyWalshProf/SeleniumAxeDotnet/)
