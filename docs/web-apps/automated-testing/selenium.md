---
id: selenium
title: Selenium on Sauce Labs
sidebar_label: Getting Started
description: An introduction to web app automation testing using Selenium.
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Selenium automation testing tool allows you to write test scripts in the language of your choice that run through all the possible actions in your web application faster and more effectively that manual testing. This section of the Sauce Labs documentation provides an overview of how to use Selenium with Sauce Labs to achieve efficient and consistent test results to ensure your web application works on every operating system and browser.

## Architecture

Selenium is built on a **client-server architecture**, which includes both client and server components.

### Client Components

* The **WebDriver** API, which you use to develop test scripts to interact with page and application elements
* The `RemoteWebDriver` class, which communicates with a remote Selenium server

### Server Components

* A server component, to receive requests from Selenium Client's `RemoteWebDriver` class
* The **WebDriver** API, to run tests against web browsers on a server machine
* **Selenium Grid**, implemented by Selenium Server in command-line options for grid features, including a central hub and nodes for various  environments and desired browser capabilities


## Seven Steps of Selenium Tests

There are seven basic elements of a Selenium test script, which apply to any test case and any application under test (AUT):

1. Create a WebDriver instance.
1. Navigate to a Web page.
1. Locate an HTML element on the Web page.
1. Perform an action on a located element.
1. Anticipate the browser response to the action.
1. Run tests and record test results using a test framework.
1. Conclude the test.

The following sections walk through each of these steps using a basic test case example -- logging into a website. In order to perform a test, we need to identify three elements:

* The HTML pages in the website app that contain the elements to be tested
* The process by which an end user interacts with the website
* The expected response from the website

This sample tests to ensure that when a user successfully logs into Foo.com, an expected message displays. This sample references the following HTML code for the login form and the successful login response.

```html title="Login Form"
<html>
 <body>
 ...
 <form action="loginAction" id="loginForm">
 <label>User name:&nbsp;</label>
 <input type="text" name="username"><br>
 <label>Password:&nbsp;</label>
 <input type="text" name="password"><br>
 <button type="submit" id="loginButton">Log In</button>
 <button type="reset" id="reset">Clear</button>
 </form>
 ...
 </body>
</html>
```


```html title="Success Response"
<html>
 <body>
 ...
 <p class="message" id="loginResponse">Welcome to foo. You logged in successfully.</p>  ...
 </body>
</html>
```

:::tip Identifying Elements in HTML

In your Selenium test scripts, identify test elements by their `name` or `id` attribute, since those are the least likely to change over time.
:::

### Step 1: Create a RemoteWebDriver Instance

Create an instance of Selenium's RemoteWebDriver interface so you can invoke methods of the Selenium WebDriver API and access Sauce Labs and other interfaces used throughout the test process.

#### Authenticate to Sauce Labs

Set your RemoteWebDriver instance to connect to Sauce Labs for your test by providing your Sauce Labs account credentials (Find them on your app [User Settings page](https://app.saucelabs.com/user-settings)) and the address of the Sauce Labs cloud.

:::tip Use Credential Environment Variables
Set your Sauce Labs account credentials as [environment variables](/basics/environment-variables) rather than hard-coding them into all your scripts for efficiency and to protect them from unintended exposure.
:::

#### Define Capabilities

The `DesiredCapabilities` properties of the RemoteWebDriver instance specify the system conditions on which you want to tests, such as browser, operating system, and platform combinations. See [Test Configuration](/basics/test-config-annotation/test-config) for a guide to the required and optional capabilities.

The following example shows the instantiation of the RemoteWebDriver (assigned the variable name `driver`), authentication values, and the OS/Browser targets for a test script written in Java.

```java title="Java RemoteWebDriver Instance"
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
public class SampleSauceTest {
 public static final String USERNAME = "YOUR_USERNAME";
 public static final String ACCESS_KEY = "YOUR_ACCESS_KEY";
 public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:80 /wd/hub";
 public static void main(String[] args) throws Exception {
 DesiredCapabilities caps = DesiredCapabilities.chrome();
 caps.setCapability("platform", "Windows XP");
 caps.setCapability("version", "43.0");
 WebDriver driver = new RemoteWebDriver(new URL(URL), caps);
```

### Step 2: Navigate to a Web Page

Invoke the `get` method on your WedDriver instance, using the variable name you assigned, and pass the URL of the web page containing the element you wish to test as an argument. The following gets our sample website login page, foo.com.

```
driver.get("http://www.foo.com");
```

### Step 3: Locate an HTML Element on a Web Page

Once the test script accesses the page to test, it needs to find the elements that an end user would interact with. In this case, the login fields and **Submit** button. There are numerous methods for locating such elements, some of which are described here. See the [SeleniumHQ documentation](http://www.seleniumhq.org/docs/03_webdriver.jsp#locating-ui-elements-webelements) for more detailed explainations of these and other location methods.

#### Locator Expressions

You use a locator expression to locate a unique HTML element or a specific collection of HTML elements. A locator expression is a key: value pair  containing a **locator type **and a **locator value**.  

The locator type indicates which aspects of any HTML element on a web page are evaluated and compared to the locator value in order to locate an  HTML element. An aspect of an HTML element indicated by a locator type can include:

* A specific **attribute** such as `name` or `id`
* The **tag name** of the element, such as `form` or `button`
* For hyperlink elements or anchor tags, the visible **linked text**, such as `Foo` in `<a href="http://www.foo.com">Foo</a>`
* Any aspects given by a **CSS** selector, such as `...`
* Any aspects given by an **XPath** expression, such as `//form[@id="loginForm"]` or `//button[@type='submit']`.  

#### Locator Methods and the `By` Class

You can use any of the WebDriver API **locator methods** to form locator expressions that find an element based on a specified locator type and value.  The Java `By` class, for example, could be used to contruct an expression that looks for an element by it's name value. `By.name("password")` looks for an element where `name` = `password`.

#### Finder Methods and the `WebElement` Interface

Pass your By class expression as an argument of a WebDriver API **finder method** -- `findElement` (singular) and `findElements` (plural) -- to invoke it. For example, `findElement(By.name("password"))`.  

Both finder methods search the DOM (Document Object Model) of the web page for elements that match the locator expression. The `findElement` returns the first matching element and stops, while `findElements` searches the entire page and returns a list of all matching elements.

The following example invokes `findElement` on our `driver` instance to locate the username and password text input elements, and (optionally) the id attribute to locate the form element.

```
import org.openqa.selenium.By;  
import org.openqa.selenium.WebElement;  
WebElement usernameElement = driver.findElement(By.name("username"));  
WebElement passwordElement = driver.findElement(By.name("password"));
WebElement formElement = driver.findElement(By.id("loginForm"));
```

### Step 4: Perform Actions on Located Elements

Invoke an interaction method on an instance of the WebElement interface to simulate the user's interaction with the website elements you have located. Some basic interaction methods include:

* The `sendKeys` method to enter text
* The `clear` method to clear entered text
* The `submit` method to submit a form  

The following example automates a user login by first invoking the `sendKeys` method to enter text in the `username` and `password` elements, then invoking the `submit` method to submit the login form.

```js title="Enter Username and Password"
usernameElement.sendKeys("Alan Smithee");
passwordElement.sendKeys("twilightZone");
```

```js title="Submit the Login Form"
#The submit method can be invoked either on any text input element on a form, or on the form element itself.
passwordElement.submit(); // submit by text input element
#or
formElement.submit(); // submit by form element
```

### Step 5: Wait for the Response

Once you submit a form element, you need to build some wait time into your test script before you check for the expected response. Otherwise, your test might fail because the browser has not had a chance to load the expected elements. You can implement this time [implicit and explicit waits](http://www.seleniumhq.org/docs/04_webdriver_advanced.jsp#explicit-and-implicit-waits).  

#### Implicit Waits

An implicit wait instructs the test to wait for a fixed amount of time before continuing after any WebDriver interaction. Implicit waits are not recommended because they are not efficient. They need to be long enough to accommodate the slowest response, which means your test often takes longer than it needs to.


#### Explicit Waits

An explicit wait instructs the test to wait for confirmation of an expected condition for a maximum amount of time. If the condition is met before the time elapses, the test continues. To use an explicit wait, create an instance of the `WebDriverWait` class with a maximum wait time, then invoke its `until` method with the expected condition, which might be a standard expected condition of the WebDriver API, or any function, code block or closure supported by your programming language as an expected condition.

:::caution Do Not Mix Explicit and Implicit Waits
Mixing implicit and explicit waits can cause unpredictable outcomes. For example, setting an implicit wait of 10s and an explicit wait of 15s could cause a timeout to occur after 20 seconds.
:::

The following examples illustrate explicit and implicit waits following submission of the login form.

```js title="Explicit Wait"
import org.openqa.selenium.support.ui.ExpectedConditions;  
import org.openqa.selenium.support.ui.WebDriverWait;  
WebDriverWait wait = new WebDriverWait(driver, 10); WebElement messageElement = wait.until( ExpectedConditions. presenceOfElementLocated(By.id("loginResponse")) );
```

```js title="Implicit Wait"
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
```

### Step 6: Run Tests and Record Results

Ultimately, the purpose of your test script is to evaluate function and performance of your website without requiring human interaction.

#### Test Frameworks

Use the methods of a **test framework** for your preferred programming language to run your tests and report the results. Some of the many available frameworks include those in the **XUnit** family:

* JUnit for Java
* NUnit for C#
* unittest or pyunit for Python
* RUnit for Ruby

Check out the [Sauce Labs Training repo](https://github.com/saucelabs-training) on GitHub for over 60 examples of test frameworks set up to work with Sauce Labs.  

#### Assertions

An assertion is a method representing whether or not a logical condition is met after interaction with an AUT, for example `assertEquals` in JUnit. Typically, if the logical condition of the assertion is not met, the test throws an exception for the condition. There are  various approaches to using exceptions in most test frameworks, and you can  read more detail in the [SeleniumHQ documentation](http://www.seleniumhq.org/docs/02_selenium_ide.jsp#assertion-or-verification).  

#### Recording Test Results

You can record your test results in various ways, supported by the test framework or by a logging framework for the programming language, or by  both together. Selenium also supports taking screenshots of web browser windows during tests as another type of record. Covering the wide variations in recording technique is out of the scope of this introduction,  but you can find many examples in the [Selenium Demonstration Scripts](selenium/sample-scripts) and [Sauce Labs sample repo](https://github.com/saucelabs-training) on GitHub.  

The following example asserts that the login response message is equal to an expected success message:

```
import junit.framework.Assert;
import junit.framework.TestCase;
WebElement messageElement = driver.findElement(By.id("loginResponse"));
String message = messageElement.getText();
String successMsg = "Welcome to foo. You logged in successfully.";
assertEquals (message, successMsg);
```

### Step 7: Conclude the Test

Conclude a test by invoking the `quit` method on your WebDriver instance, using the variable name you assigned, which disposes all resources used by the test, making them available for later tests to run. The `quit` method:

* quits the web browser application, closing all web pages
* quits the WebDriver server, which interacts with the web browser
* releases `driver`, the variable referencing the unique instance of the WebDriver interface.  

The following example invokes the quit method on the driver variable:

```
driver.quit();
```

### Example with All Steps  

The following example shows the Java code for all seven steps described in this document. The example also defines a Java test class Example, and its main method, so you can copy and run this test in your own environment.

```
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.junit.Assert;
public class Example {
 public static void main(String[] args) {
 // Create an instance of the driver
 WebDriver driver = new FirefoxDriver();
 // Navigate to a web page
 driver.get("http://www.foo.com");
 // Perform actions on HTML elements, entering text and submitting the form
 WebElement usernameElement = driver.findElement(By.name("username"));
 WebElement passwordElement = driver.findElement(By.name("password"));
 WebElement formElement = driver.findElement(By.id("loginForm"));
 usernameElement.sendKeys("Alan Smithee");
 passwordElement.sendKeys("twilightZone");
 //passwordElement.submit(); // submit by text input element
 formElement.submit(); // submit by form element
 // Anticipate web browser response, with an explicit wait
 WebDriverWait wait = new WebDriverWait(driver, 10);
 WebElement messageElement = wait.until(
 ExpectedConditions.presenceOfElementLocated(By.id("loginResponse"))
 );
 // Run a test
 String message = messageElement.getText();
 String successMsg = "Welcome to foo. You logged in successfully.";
 Assert.assertEquals (message, successMsg);
 // Conclude a test
 driver.quit();
 }
}
```

## Review Tests on Sauce Labs

Log into Sauce Labs and navigate to the [Automated --> Test Results](https://app.saucelabs.com/dashboard/tests/vdc) page where you can watch your test run live or review the video or screenshot assets of the test.

:::note
On average, it takes about 30% of the total test time to process and upload the video asset for your test, so for a test that took 5 minutes to run, the video may not show up in your results page for between 1-2 minutes.
:::

## Using Frameworks to Run Tests in Parallel

In addition to supporting test scripts written in a variety of programming languages, Sauce Labs also supports a variety of frameworks for running your tests, which allows you to run the same test against different platform/OS/browser combinations at the same time instead of sequentially, which accelerates your entire development cycle.

The Sauce Labs [Training repo](https://github.com/saucelabs-training) contains an extensive selection of demonstration scripts illustrating parallel testing in different frameworks and programming language combinations.


## Selenium Resources

* http://www.seleniumhq.org The official Selenium website and documentation
* https://www.youtube.com/watch?v=qq1WCsAMZsk Automated testing Guru Joe Colantonio demonstrates how to run a Selenium Test with Sauce Labs
