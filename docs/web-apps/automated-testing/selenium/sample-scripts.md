---
id: sample-scripts
title: Selenium Demonstration Scripts
sidebar_label: Demo Scripts
description: A collection of Selenium demonstration scripts in Ruby, Python, NodeJS, Java, and C#.
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The following examples illustrate test scripts written in difference programming languages that automate the successful login to the SauceDemo website, then confirm that the expected inventory page opens. The code in these samples is for demonstration only.

## Ruby

Visit the [Sauce Labs Ruby Demonstration Repo](https://github.com/saucelabs-training/demo-ruby) for prerequisites, setup instructions, a variety of sample scripts, and many other resources related to writing and running Selenium scripts in Ruby.

```rb reference title="Ruby Login Test"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/selenium-examples/rspec/spec/login_success_spec.rb
```


## Python

Visit the [Sauce Labs Python Demonstration Repo](https://github.com/saucelabs-training/demo-python) for prerequisites, setup instructions, a variety of sample scripts, and many other resources related to writing and running Selenium scripts in Python.

```py reference title="Python Login Test"
https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/sauce_bindings/pytest/test_login_success.py
```


## Java

Visit the [Sauce Labs Java Demonstration Repo](https://github.com/saucelabs-training/demo-java) for prerequisites, 
setup instructions, a variety of sample scripts, and many other resources related to writing and running Selenium scripts in Java.

<Tabs
  defaultValue="junit5"
  values={[
    {label: 'JUnit', value: 'junit5'},
    {label: 'JUnit', value: 'junit4'},
    {label: 'TestNG', value: 'testng'},
  ]}>

<TabItem value="junit5">

```java reference title="JUnit 5 Selenium Example"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SeleniumTest.java
```

</TabItem>
<TabItem value="junit4">

```java reference title="JUnit 4 Selenium Example"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-junit4-examples/src/test/java/com/saucedemo/selenium/junit4/demo/SeleniumTest.java
```

</TabItem>
<TabItem value="testng">

```java reference title="TestNG Selenium Example"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-testng-examples/src/test/java/com/saucedemo/selenium/testng/demo/SeleniumTest.java
```

</TabItem>
</Tabs>


## NodeJS

Visit the [Sauce Labs JavaScript Demonstration Repo](https://github.com/saucelabs-training/demo-js) for prerequisites, setup instructions, a variety of sample scripts using different frameworks, and many other resources related to writing and running scripts in JavaScript.

```js reference title="WebdriverIO Login Test"
https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/webdriver/examples/typescript/test/specs/example.e2e.ts
```


## C Sharp

Visit the [Sauce Labs C# Demonstration Repo](https://github.com/saucelabs-training/demo-csharp) for prerequisites, setup instructions, a variety of sample scripts, and many other resources related to writing and running scripts in C#.

```csharp reference title="C# Selenium Example"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.0/SauceExamples/SeleniumNunit/OnboardingTests/InstantSauceTest.cs
```
