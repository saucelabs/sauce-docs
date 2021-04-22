---
id: appium
title: Using Appium for Automated Mobile App Testing
sidebar_label: Using Appium
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page is intended to provide you with a quick overview of how Appium works so that you can get started with mobile application testing.

## Overview
Appium was originally developed by Dan Cueller as a way to take advantage of the UIAutomation framework for Apple iOS to run tests against native mobile applications. Using the same syntax as [Selenium](https://www.selenium.dev), it shares similarities with Selenium's ability to automate interaction with a website through a mobile browser. Although Appium can test websites on a mobile device, it is more commonly used for testing native and hybrid mobile applications for both iOS and Android.

## Appium Architecture
Appium has a client-server architecture.

### Appium Client

* Includes a [set of client libraries](http://appium.io/downloads) for various scripting languages in which you write your test scripts based on the Selenium WebDriver API.

### Appium Server

* Includes a server component, based on node.js, which exposes the WebDriver API. In fact it exposes a superset of the WebDriver API known as the [Mobile JSON Wire Protocol](https://speakerdeck.com/jlipps/the-mobile-json-wire-protocol).

* Includes a [desktop application](http://appium.io/downloads.html), available for both OS X and Windows, that includes everything you need to run Appium bundled in a single package, as well as the ability to inspect elements in running applications.

>**NOTE**: Appium Desktop is currently unsupported by the Appium core team.

## Creating an Appium Test

There are the basic steps for creating an Appium test script for your app under test (AUT):

### 1. Set your app location (e.g., Sauce Storage, AWS, GitHub)
When you write an Appium test script, the most basic component is the [DesiredCapabilities object](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365693). This sets the parameters of your test, such as the mobile platform and operating system you want to test against.

Within that object, one of the [required capabilities](https://wiki.saucelabs.com/pages/viewpage.action?pageId=63475214) is Application Path, or the app desired capability. One of the advantages of the Appium architecture is that the application you want to test can be hosted anywhere, from a local path to any other web host on the network, since the Appium server will send the commands it receives from the client to any application path you specify. Practically, you have three options. 

See [Application Storage](/mobile-apps/app-storage.md).

<br/>

### 2. Create a WebDriver Instance

Create an Appium driver instance which points to a running Appium server (e.g., the servers on Sauce Labs). The WebDriver instance is the starting point for all uses of the Mobile JSON Wire Protocol.

You'll need to create an instance of the WebDriver interface using a constructor for either Android or iOS. For mobile native application tests, you set both the platform and browser to test against by setting the `browserName` desired capability. 

Once you have created an instance of the WebDriver interface, you use this instance to invoke methods, such as tap and swipe, to access other interfaces used in basic test steps. You do so by assigning the instance to a variable when you create it, and by using that variable to invoke methods.

#### WebDriver Examples
These pseudo-code examples illustrate how to instantiate iOS and Android WebDriver objects in the various Appium language bindings.


<Tabs
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Node.js', value: 'Node.js'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="Java">

Visit the java-client page for more information on the Java Appium language bindings.

iOS
```java
WebDriver driver = new iOSDriver<WebElement>( new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);
```

Android
```java
WebDriver driver = new AndroidDriver<WebElement>( new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);
```

</TabItem>
<TabItem value="Python">

Visit the python-client page for more information on the Python Appium language bindings.

iOS
```py
desired_caps = {}
desired_caps['platformName'] = 'iOS'
desired_caps['app'] = PATH('../../apps/MyIOS.app.zip')
self.driver = webdriver.Remote('https://ondemand.us-west-1.saucelabs.com/wd/hub', desired_caps)
```

Android
```py
desired_caps = {}
desired_caps['platformName'] = 'Android'
desired_caps['app'] = PATH('../../apps/MyIOS.apk')
self.driver = webdriver.Remote('https://ondemand.us-west-1.saucelabs.com/wd/hub', desired_caps)
```

</TabItem>
<TabItem value="Node.js">

We recommend using the webdriverio testing utility as your WebDriver testing framework for node.js. For more information, refer to the documentation.

iOS
```js
const opts = {
  capabilities: {
    platformName: "iOS",
    app: "/path/to/the/downloaded/MyiOS.app.zip",
  }
};

const client = wdio.remote(opts);
```

Android
```js
const opts = {
  capabilities: {
    platformName: "Android",
    app: "/path/to/the/downloaded/MyAndroid.apk",
  }
};

const client = wdio.remote(opts);
```

</TabItem>
<TabItem value="Ruby">

Visit appium_lib for more information about the Ruby Appium language bindings.

iOS
```ruby
opts = { caps: { platformName: :ios, app: '/path/to/MyiOS.app'}, appium_lib: { wait_timeout: 30 }}
appium_driver = Appium::Driver.new(opts, true)
appium_driver.start_driver
```

Android
```ruby
opts = { caps: { platformName: :android, app: '/path/to/MyAndroid.apk'}, appium_lib: { wait_timeout: 30 }}
appium_driver = Appium::Driver.new(opts, true)
appium_driver.start_driver
```

</TabItem>
<TabItem value="C#">

Visit the appium-dot-net page for more information about the C# Appium language bindings.

iOS
```CS
var sauceURL = "https://ondemand.us-west-1.saucelabs.com";
var driver = new IOSDriver<IWebElement>(new Uri(sauceURL));
```

Android
```CS
var sauceURL = "https://ondemand.us-west-1.saucelabs.com";
var driver = new AndroidDriver<IWebElement>(new Uri(sauceURL));
```

</TabItem>
</Tabs>

<br/>

### 3. Locate App Elements

Next, locate an element within your app (e.g., login button or link).
In order to find elements in a mobile environment, Appium implements a number of locator strategies that are specific to, or adaptations for, the particulars of a mobile device. Three are available for both Android and iOS:

<Tabs
  defaultValue="accessibility ID"
  values={[
    {label: 'accessibility ID', value: 'accessibility ID'},
    {label: 'class name', value: 'class name'},
    {label: 'id', value: 'id'},
    {label: 'xpath', value: 'xpath'},
  ]}>

<TabItem value="accessibility ID">

The `accessibility ID` locator strategy is designed to read a unique identifier for a UI element. This has the benefit of not changing during localization or any other process that might change text. In addition, it can be an aid in creating cross-platform tests, if elements that are functionally the same have the same accessibility id.

* For iOS, this is the accessibility identifier laid out by Apple [here](https://developer.apple.com/documentation/uikit/uiaccessibilityidentification).
* For Android, the accessibility id maps to the content-description for the element, as described [here](https://developer.android.com/guide/topics/ui/accessibility/apps).

For both platforms getting an element, or multiple elements, by their accessibility id is usually the best method. It is also the preferred way, in replacement of the deprecated name strategy.

The client libraries specific to Appium support getting elements by `accessibility id`.

```py
#python example
driver.find_element_by_accessibility_id('my_accessibility_identifier')
```

</TabItem>
<TabItem value="class name">

The `class name` strategy is a string representing a UI element on the current view.

* For iOS it is the full name of a UIAutomation class, and will begin with UIA-, such as UIATextField for a text field. A full reference can be found here.
* For Android it is the fully qualified name of a UI Automator class, such android.widget.EditText for a text field. A full reference can be found here.
The client libraries for Appium support getting a single element, or multiple elements, based on the class name. This functionality is in the Selenium clients (e.g., Python).

```py
#python example
driver.find_element_by_class_name('android.widget.DatePicker')
```

</TabItem>
<TabItem value="id">

In the mobile environment, `id`s are not, as in WebDriver, CSS ids, but rather some form of native identifier.

* For iOS the situation is complicated. Appium will first search for an accessibility id that matches. If there is none found, a string match will be attempted on the element labels. Finally, if the id passed in is a localization key, it will search the localized string.
* For Android, the id is the element’s android:id.

This Java example (Java) below locate elements for username and password. It invokes the `findElement` method on the driver variable, using the name attribute to locate the username and password text input elements, and (optionally) the `id` attribute to locate the form element.

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
WebElement emailInput = driver.findElement(By.id("fbemail"));
```

</TabItem>
<TabItem value="xpath">

The `xpath` locator strategy is also available in the WebDriver protocol, and exposes the functionality of [XPath language](https://www.w3.org/TR/xpath20/) to locate elements within a mobile view. An XML representation of the view is created in Appium, and searches are made against that image.

The Selenium clients have methods for retrieving elements using the xpath locator strategy.

```py
#python example
driver.find_element_by_xpath('//UIAApplication[1]/UIAWindow[1]/UIATextField[1]')
```

</TabItem>
</Tabs>

#### **Best Practices for Identifying Application Elements**

We recommend using an element locator that uniquely identifies the element, like an `id` or an `accessibility id`. `Class name` and `xpath` are best used only when IDs are not available. Multiple elements can have the same class name, and using xpath searches through the entire markup to find the element, which can slow down your tests.

<br/>

### 4. Perform Action(s) on the App Elements (e.g., tap the login button)

Once you've identified the mobile elements you want your test to interact with, the next step is to interact with them. You perform an action on a mobile element by invoking an interaction method on an instance of the WebElement interface.

The WebElement interface declares basic interaction methods including:

* The `sendKeys` method, to enter text.
* The `clear` method, to clear entered text.
* The `submit` method, to submit a form.

#### Example

This example first invokes the `sendKeys` method to enter text in the username and password elements, and then invokes the submit method to submit the login form. Enter a username and password:

```java
emailInput.sendKeys("SauceIsAwesome@email.com");
```

#### Submit the Form
The submit method can be invoked either on any text input element on a form, or on the form element itself. Submit Text Element:

```java
emailInput.submit();
```

<br/>

### 5. Anticipate App Response to the Action (e.g., successfully logged in)

When you click a **Submit** button, you know that you have to wait a second or two for your action to reach the server, and for the server to respond, before you do anything else.

If you're trying to test the response, and what happens afterwards, then you need to build that waiting time into your test. Otherwise, the test might fail because the elements that are expected for the next step haven't loaded into the browser you. The WebDriver API supports two basic techniques for anticipating browser response by waiting: implicit waits and explicit waits. 

>**NOTE**: Do not mix implicit and explicit waits. Doing so can cause unpredictable wait times. For example setting an implicit wait of 10s and an explicit wait of 15 seconds, could cause a timeout to occur after 20 seconds. 

#### **Wait Strategies**

<Tabs
  defaultValue="Implicit Waits"
  values={[
    {label: 'Implicit Waits', value: 'Implicit Waits'},
    {label: 'Explicit Waits', value: 'Explicit Waits'},
  ]}>

<TabItem value="Implicit Waits">

_Implicit waits_ set a maximum time that the Appium server will continue trying to find an element. Using implicit waits is not a best practice because application response times are not definitely predictable and fixed elapsed times are not applicable to all interactions. Using explicit waits requires more technical sophistication, but is a Sauce Labs best practice.

This example code (Java) illustrates how you could use an implicit wait to anticipate web browser response after submitting the login form:

```java
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
```

</TabItem>
<TabItem value="Explicit Waits">

_Explicit waits_ wait until an expected condition occurs on the web page, or until a maximum wait time elapses. To use an explicit wait, you create an instance of the WebDriverWait class with a maximum wait time, and you invoke its until method with an expected condition. 

The WebDriver API provides an ExpectedConditions class with methods for various standard types of expected condition. These methods return an instance of an expected condition class. You can pass an invocation of these standard expected-condition methods as argument values to until method. You can also pass - in ways that your programming language and its WebDriver API support - any function, code block, or closure that returns a boolean value or an object reference to a found web element as an argument value to the until method. How this is done varies over programming languages. The until method checks repeatedly, until the maximum wait time elapses, for a true boolean return value or a non-null object reference, as an indication that the expected condition has occurred.

This example code (Java) illustrates how you could use an explicit wait to anticipate web browser response after submitting the login form.

```java
import org.openqa.selenium.support.ui.ExpectedConditions; 
import org.openqa.selenium.support.ui.WebDriverWait; 
WebDriverWait wait = new WebDriverWait(driver, 10); WebElement messageElement = wait.until( ExpectedConditions.presenceOfElementLocated(By.id("loginResponse")) );
```

</TabItem>
</Tabs>

<br/>

### 6. Run Tests and Record Your Results (e.g., log whether test passed, failed, or returned an error)

Running tests and recording test results is the ultimate purpose of your test script: you run tests in an automated test script in order to evaluate function and performance in the AUT, without requiring human interaction.

#### Test Frameworks

To run test and to record test results, you use methods of a test framework for your programming language. There are many available test frameworks, including the frameworks in the so-called XUnitfamily, which includes:

* JUnit for Java
* NUnit for C#
* unittest or pyunit for Python
* RSpec for Ruby

For some programming languages, test frameworks other than those in the XUnit family are common - for example, the RSpec framework for Ruby. The Sauce Labs sample test framework repos on GitHub contain over 60 examples of test frameworks set up to work with Sauce Labs. 

#### Test Assertions

Most test frameworks implement the basic concept of an assertion, a method representing whether or not a logical condition holds after interaction with an AUT. Test frameworks generally declare methods whose names begin with the term `assert` and end with a term for a logical condition, e.g., `assertEquals` in JUnit. Generally, when the logical condition represented by an assert method does not hold, an exception for the condition is thrown. There are various approaches to using exceptions in most test frameworks. The SeleniumHQ documentation has more detailed information on using both assertions and verifications in your tests. 

#### Recording Test Results
Recording of test results can be done in various ways, supported by the test framework or by a logging framework for the programming language, or by both together. Selenium also supports taking screenshots of web browser windows as a helpful additional type of recording. Because of the wide variations in recording technique, this beginning section omits recording, instead emphasizing a simple approach to applying a test using an assert method. The scripts in Sauce Labs Demonstration Scripts include examples of setting up reporting of test results to Sauce Labs, as do the framework scripts in the Sauce Labs sample test framework repos.

The following example runs a test by asserting that the login response message is equal to an expected success message:

```java
import junit.framework.Assert;
import junit.framework.TestCase;

WebElement messageElement     = driver.findElement(By.id("loginResponse"));
String message                = messageElement.getText();
String successMsg             = "Welcome to foo. You logged in successfully.";
assertEquals (message, successMsg);
```

<br/>

### 7. Concluding the Tests (i.e., shut down connection to Sauce Labs)

#### The `quit` Method
You conclude a test by invoking the _`quit` method_ on an instance of the WebDriver interface (e.g., on the driver variable). 

The `quit` method concludes a test by disposing of resources, which allows later tests to run without resources and application state affected by earlier tests. The quit method:

* quits the web browser application, closing all web pages
* quits the WebDriver server, which interacts with the web browser
* releases driver, the variable referencing the unique instance of the WebDriver interface. 

The following example invokes the quit method on the driver variable:

```sh
driver.quit();
```

<br/>

## Full Example with All Steps

The following example includes code for all steps. The example also defines a Java test class Example, and its main method, so that the code can be run.

**Java Example**

```java
package com.yourcompany;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import io.appium.java_client.android.AndroidDriver;
import java.net.MalformedURLException;
import java.net.URL;
import junit.framework.Assert;
public class SampleSauceTest {

    public static void  main() throws MalformedURLException {
        desiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("deviceName", "Android GoogleAPI Emulator");
        capabilities.setCapability("platformVersion", "10.0");
        capabilities.setCapability("app", "storage:filename=swag-labs.apk");
        capabilities.setCapability("browserName", "");
        capabilities.setCapability("deviceOrientation", "portrait");
        capabilities.setCapability("appiumVersion", "1.16.0");
        WebDriver driver = new AndroidDriver<WebElement>( new URL("http://SAUCE_USERNAME:SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);

        WebElement emailInput = driver.findElement(By.id("fbemail"));
        emailInput.sendKeys("SauceIsAwesome@email.com");
        assertEquals(emailInput.getText(), "SauceIsAwesome@email.com");

        driver.quit();
    }
}
```

## Additional Resources

* [Appium Bootcamp](https://wiki.saucelabs.com/pages/viewpage.action?pageId=63480380), by Dave Haeffner and Matthew Edwards
* [Official Appium website](http://appium.io): documentation and test script examples
* [An Introduction to Appium](https://youtu.be/1J0aXDbjiUE?list=PLSIUOFhnxEiCODb8XQB-RUQ0RGNZ2yW7d), presented by Jonathan Lipps of Sauce Labs and the Appium project given at the 2013 Google Test Automation Conference
* [A talk on the mobile JSON wire protocol](https://confengine.com/selenium-conf-2015/proposal/1319/the-mobile-json-wire-protocol), presented by Jonathan Lipps at the 2015 Selenium Conference
* [An in-depth tutorial](http://stackshare.io/sauce-labs/mobile-automation-with-appium-and-sauce-labs), by Jonathan Lipps covering Appium basics using Ruby and Sauce Labs
