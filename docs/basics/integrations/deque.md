---
id: deque
title: "Deque axe™ Integration"
sidebar_label: "Axe Deque"
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

Below is a guide to set up the Sauce Labs integration. This integration allows you to run your accessibility tests, using axe™, on our platform.

:::info why should you care about accessibility testing?
Check out the [Deque Accessibility Guide](https://www.deque.com/web-accessibility-beginners-guide/#what-is-a11y) for further information.
:::


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* [A Deque Account](https://axe.deque.com/plans) (Optional)


## Sauce Labs UI

Sauce Labs will display the accessibility results in our UI as a tab in the Job itself:

<img src={useBaseUrl('img/accessibility/example.png')} alt="Accessibility Example in Sauce UI"/>


## Language Specific Examples

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'WebdriverIO', value: 'wdio', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'C#', value: 'dotnet', }
]
}>

<TabItem value="java">

We highly recommend using the Java [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/).
Check out the description and examples for the new [Accessibility functionality](https://opensource.saucelabs.com/sauce_bindings/accessibility).

The following is information on how to use the Java Deque Axe Selenium library directly:

__Requirements__

Add this to your `pom.xml`:

```xml
<!-- https://mvnrepository.com/artifact/com.deque.html.axe-core/selenium -->
<dependency>
  <groupId>com.deque.html.axe-core</groupId>
  <artifactId>selenium</artifactId>
  <version>4.2.2</version>
</dependency>
```

__Usage__

This method populates results on the Sauce Labs Accessibility tab:
```java
new AxeBuilder().analyze(driver);
```

__Example Code__

```java reference title="Selenium Accessibility Test"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/accessibility/DequeAxeTest.java
```


</TabItem>
<TabItem value="wdio">

__Requirements__

* [Install and Set up](https://webdriver.io/docs/gettingstarted/) WebdriverIO
  * This documentation shows you how to run a test locally, and also how to troubleshoot potential issues with your code before running on Sauce Labs

* Add [Sauce Service](https://webdriver.io/docs/sauce-service) to WebdriverIO

* Add the following dependency to your `package.json` file:

```js
"@axe-core/webdriverio": "4.2.1"
```

* In the `wdio.conf.js` file, create an object called `axeWdio`.
  This object creates a new `AxeWebdriverIO` instance which accepts the current browser object from WDIO as an argument.

```js
before: function (capabilities, specs, browser) {
    const axeWdio = new AxeWebdriverIO({
        client: browser
    })
}
```

* In the `wdio.conf.js` file, add a command for getting basic accessibility results

```js
browser.addCommand('getAxeResults', function (name) {
    return axeWdio.analyze()
})
```


__Usage__

This method populates results on the Sauce Labs Accessibility tab:
```js
browser.getAxeResults()
```


</TabItem>
<TabItem value="python">

We highly recommend using the Python [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/).
Check out the description and examples for the new [Accessibility functionality](https://opensource.saucelabs.com/sauce_bindings/accessibility).

The following is information on how to use the Python `sa11y` library directly:

__Requirements__

* Install Sa11y:
```shell
pip install sa11y
```

* Import Analyze class in your file:
```python
from sa11y.analyze import Analyze
```

__Usage__

This method populates results on the Sauce Labs Accessibility tab:
```python
Analyze(driver).results()
```

__Example Code__

```python reference title="Accessibility Test with Sa11y"
https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/accessibility/test_sa11y.py
```

</TabItem>
<TabItem value="ruby">

We highly recommend using the Ruby [Sauce Bindings](https://opensource.saucelabs.com/sauce_bindings/).
Check out the description and examples for the new [Accessibility functionality](https://opensource.saucelabs.com/sauce_bindings/accessibility).

The following is information on how to use the Ruby `sa11y` library directly:

__Requirements__

* Add sa11y to your `gemfile`:
```shell
gem 'sa11y', '~> 0.2.1'
```

* require Analyze class in your file:
```ruby
require 'sa11y/analyze'
```

__Usage__

This method populates results on the Sauce Labs Accessibility tab:

```ruby
Sa11y::Analyze.new(driver).results
```

__Example Code__

```ruby reference title="Accessibility Test with Sa11y"`
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/sauce-features/accessibility/spec/sa11y_spec.rb
```

</TabItem>
<TabItem value="dotnet">

To get Accessibility results with .NET, we recommend [Selenium.Axe for .NET](https://github.com/TroyWalshProf/SeleniumAxeDotnet/).
Make sure you are using version 3.x.

__Requirements__

To install via NuGet, in the Package Manager Console:
```shell
Install-Package Selenium.Axe
```

Import the namespace:

```
using Selenium.Axe;
```

__Usage__

This method populates results on the Sauce Labs Accessibility tab:

```
AxeResult axeResult = new AxeBuilder(webDriver).Analyze();
```

For more detailed usage, [Read the documentation](https://troywalshprof.github.io/SeleniumAxeDotnet)


</TabItem>
</Tabs>


## Additional Resources
* [Deque Sauce Labs Integration Documentation](https://www.deque.com/saucelabs/get-started/)
* [Sauce Labs / Deque Marketing Blog Post](https://saucelabs.com/news/sauce-labs-and-deque-systems-join-forces-to-help-enterprises-ensure-digital-accessibility)
* [Sauce Bindings Accessibility Feature](https://opensource.saucelabs.com/sauce_bindings/accessibility)
* [Deque `axe-core` Selenium Integration for Java](https://github.com/dequelabs/axe-core-maven-html)
* [Sa11y - Selenium Accessibility for Python & Ruby](https://github.com/saucelabs/sa11y)
* [Deque `axe-core` Example WebdriverIO Project](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverio)
* [Documentation about the chainable `axe` API for WebdriverIO](https://www.npmjs.com/package/@axe-core/webdriverio)
* [Selenium.Axe for .NET](https://github.com/TroyWalshProf/SeleniumAxeDotnet/)
