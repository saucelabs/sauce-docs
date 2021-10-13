---
id: selenium4
title: Upgrading to Selenium 4 for Sauce Labs Testing
sidebar_label: Selenium 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This doc will guide you through how to upgrade to Selenium 4, which is slated for production release in late 2021.

Although Selenium 4 is designed to be a straightforward drop-in replacement, you'll need to be aware of the new and deprecated features that may impact your Sauce Labs automated tests. This is especially important if you've built custom functionalities in your testing framework.

## What You'll Learn
* Tips for adjusting your tests and dependencies.
* How to prevent and resolve potential issues that could arise during your Selenium upgrade.

## What You’ll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Strongly recommended: use one of the programming languages officially supported by Selenium 4 (Java, JavaScript, Python, Ruby, or C#).


## New Features

Below are features new to Selenium 4 that may impact your tests.

<table>
<tr>
<td>New Feature</td>
<td>Description</td>
</tr>
<tr>
<td>Force W3C Usage</td>
<td>Selenium 4 deprecates support for legacy JSON wire protocol and its static <code>DesiredCapabilities</code> browser methods, replacing it with <a href="/dev/w3c-webdriver-capabilities">W3C WebDriver-compliant protocol</a> and the use of <code>browserOptions</code>. You must completely switch from using JWP to W3C; Selenium will no longer be backwards-compatible. The W3C standard will be supported by default under the hood. </td>
</tr>
<tr>
<td>Relative Locators</td>
<td>New way of locating elements based on the visual placement on the page. Relative locators use more natural language friendly terms, such as “above”, “below”, “left of”, “right of”, and “near”. <a href="https://github.com/saucelabs-training/demo-java/blob/main/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/RelativeLocatorsTest.java">See a code example</a>.</td>
</tr>
<tr>
<td>New Window and Tab Utilities</td>
<td>New command that allows you to create and manage new tabs and new windows. <a href="https://github.com/saucelabs-training/demo-java/blob/main/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/NewWindowSauceTest.java">See a code example</a>.</td>
</tr>
<tr>
<td>Print Page as PDF</td>
<td>The ability to print a page as a PDF through Chrome and Firefox. See examples here.</td>
</tr>
<tr>
<td>New Firefox Features</td>
<td><ul>
<li>Full page screenshot for bug reporting. <a href="https://github.com/saucelabs-training/demo-java/blob/main/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/ViewPageFirefoxTest.java">See a code example</a>.</li>
<li>Simplified way to install/uninstall add-ons</li>
<li>Updating browser preferences (such as the language) in the middle of the session. <a href="https://github.com/saucelabs-training/demo-java/blob/main/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/FirefoxAddonTest.java">See a code example</a>.</li>
<li>Firefox Context If you want to change something like a profile where dirs are downloaded mid-test, you can change it on the fly. <a href="https://github.com/saucelabs-training/demo-java/blob/main/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/FirefoxContextTest.java">See a code example</a>.</li></ul></td>
</tr>
<tr>
<td>Setting Network Conditions with Chrome and Edge</td>
<td>Selenium 4 exposes a set of utilities to modify network conditions in Chromium-based browsers, such as: Going offline, Setting a latency for the connection, Alter the upload or download throughput. This can be useful to test web applications under different network conditions. Allows throttling (extended debugging) without executing JavaScript. <a href="https://github.com/saucelabs-training/demo-java/blob/main/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/ChromeNetworkTest.java">See a code example.</a></td>
</tr>
<tr>
<td>Chromium Edge Options methods (Se3 technically only supported Edge HTML)</td>
<td>?</td>
</tr>
<tr>
<td>RemoteWebDriverBuilder (Java Only)</td>
<td>Prior to Selenium 4, in order to use browser specific-options, you had to cast it and augment it (access local webdriver methods). There were a lot of defaults and you didn’t have many options for starting a driver. With Selenium 4's new <code>.builder()</code> method, you can send <code>browser.options</code>, timeouts, and create a hashmap instead of having mutable capabilities. <a href="https://github.com/saucelabs-training/demo-java/blob/main/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/RemoteWebDriverBuilderTest.java">See a code example</a>.</td>
</tr>
<tr>
<td>New Element Attribute and Property methods</td>
<td>Two new methods have been added to more precisely get a given element attribute or a property. These are especially useful for performance and preciseness in Sauce Labs tests. <a href="https://github.com/saucelabs-training/demo-java/blob/main/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/AttributePropertyTest.java">See a code example</a>.</td>
</tr>
</table>


## Preparing Your Test Code

Because Selenium 4 deprecates support for legacy JWP (`DesiredCapabilities`) &#8212; replacing it with W3C WebDriver-compliant (`browserOptions`) &#8212; you'll need to prepare your test code accordingly. Using W3C `browserOptions`:
* Simplifies the configuration needed to start a new session.
* Allows you to set browser-specific settings (like headless in Chrome).
* Reduces the chances of browser misconfiguration.

### W3C WebDriver-Compliant Capabilities

You must structure your test capabilities to be W3C-compliant and switch from `DesiredCapabilities` (JWP) to `browserOptions` (W3C), otherwise they'll be ignored.

<Tabs
  defaultValue="Chrome"
  values={[
    {label: 'Chrome', value: 'Chrome'},
    {label: 'Edge', value: 'Edge'},
    {label: 'Firefox', value: 'Firefox'},
    {label: 'IE', value: 'IE'},
    {label: 'Safari', value: 'Safari'},
  ]}>

<TabItem value="Chrome">

```java title="DesiredCapabilities"
DesiredCapabilities caps = DesiredCapabilities.chrome();
```

```java title="browserOptions"
ChromeOptions browserOptions = new ChromeOptions();
```

</TabItem>
<TabItem value="Edge">

```java title="DesiredCapabilities"
DesiredCapabilities caps = DesiredCapabilities.edge();
```

```java title="browserOptions"
EdgeOptions browserOptions = new EdgeOptions();
```

</TabItem>
<TabItem value="Firefox">

```java title="DesiredCapabilities"
DesiredCapabilities caps = DesiredCapabilities.firefox();
```

```java title="browserOptions"
FirefoxOptions browserOptions = new FirefoxOptions();
```

</TabItem>
<TabItem value="IE">

```java title="DesiredCapabilities"
DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
```
```java title="browserOptions"
InternetExplorerOptions browserOptions = new InternetExplorerOptions();
```

</TabItem>
<TabItem value="Safari">

```java title="DesiredCapabilities"
DesiredCapabilities caps = DesiredCapabilities.safari();
```
```java title="browserOptions"
SafariOptions browserOptions = new SafariOptions();
```

</TabItem>
</Tabs>

List of [W3C WebDriver standard capabilities](https://www.w3.org/TR/webdriver1/#capabilities):
* `browserName`
* `browserVersion`
* `platformName`
* `acceptInsecureCerts`
* `pageLoadStrategy`
* `proxy`
* `timeouts`
* `unhandledPromptBehavior`

Any capability not in this list must include a vendor prefix. This rule applies to browser-specific capabilities as well as Sauce Labs-specific capabilities. For example, if you want use the `build` and `name` capabilities in for your Sauce Labs tests, you'll need to wrap them in a `sauce:options` block ([see the examples below](/web-apps/automated-testing/selenium/selenium4/#platform-configuration-examples)).

#### Platform Configuration Examples

Below are examples comparing the usage of legacy `DesiredCapabilities` with the new `browserOptions`.

<Tabs
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="Java">

DesiredCapabilities
```java
DesiredCapabilities caps = DesiredCapabilities.firefox();
caps.setCapability("platform", "Windows 10");
caps.setCapability("version", "92");
caps.setCapability("build", myTestBuild);
caps.setCapability("name", myTestName);
WebDriver driver = new RemoteWebDriver(new URL(sauceUrl), caps);
```

browserOptions
```java
FirefoxOptions browserOptions = new FirefoxOptions();
browserOptions.setCapability("platformName", "Windows 10");
browserOptions.setCapability("browserVersion", "92");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("build", myTestBuild);
sauceOptions.put("name", myTestName);
browserOptions.setCapability("sauce:options", sauceOptions);
WebDriver driver = new RemoteWebDriver(new URL(sauceUrl), browserOptions);
```

</TabItem>
<TabItem value="JavaScript">

DesiredCapabilities
```js
caps = {};
caps['browserName'] = 'Firefox';
caps['platform'] = 'Windows 10';
caps['version'] = '92';
caps['build'] = myTestBuild;
caps['name'] = myTestName;
```

browserOptions
```js
capabilities = {
  browserName: 'firefox',
  browserVersion: '92',
  platformName: 'Windows 10',
  'sauce:options': {
     build: myTestBuild,
     name: myTestName,
  }
}
```

</TabItem>
<TabItem value="Python">

DesiredCapabilities
```py
caps = {}
caps['browserName'] = 'firefox'
caps['platform'] = 'Windows 10'
caps['version'] = '92'
caps['build'] = my_test_build
caps['name'] = my_test_name
driver = webdriver.Remote(sauce_url, desired_capabilities=caps)
```

browserOptions
```py
from selenium.webdriver.firefox.options import Options as FirefoxOptions
options = FirefoxOptions()
options.browser_version = '92'
options.platform_name = 'Windows 10'
sauce_options = {}
sauce_options['build'] = my_test_build
sauce_options['name'] = my_test_name
options.set_capability('sauce:options', sauce_options)
driver = webdriver.Remote(sauce_url, options=options)
```

</TabItem>
<TabItem value="Ruby">

DesiredCapabilities
```rb
caps = Selenium::WebDriver::Remote::Capabilities.firefox
caps[:platform] = 'Windows 10'
caps[:version] = '92'
caps[:build] = my_test_build
caps[:name] = my_test_name
driver = Selenium::WebDriver.for :remote, url: sauce_url, desired_capabilities: caps
```

browserOptions
```rb
options = Selenium::WebDriver::Options.firefox
options.browser_version = 'latest'
options.platform_name = 'Windows 10'
sauce_options = {}
sauce_options[:build] = my_test_build
sauce_options[:name] = my_test_name
options.add_option('sauce:options', sauce_options)
driver = Selenium::WebDriver.for :remote, url: sauce_url, capabilities: options
```

</TabItem>
<TabItem value="C#">

DesiredCapabilities
```csharp
DesiredCapabilities caps = new DesiredCapabilities();
caps.SetCapability("browserName", "firefox");
caps.SetCapability("platform", "Windows 10");
caps.SetCapability("version", "92");
caps.SetCapability("build", myTestBuild);
caps.SetCapability("name", myTestName);
var driver = new RemoteWebDriver(new Uri(SauceURL), capabilities);
```

browserOptions
```csharp
var browserOptions = new FirefoxOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "92";
var sauceOptions = new Dictionary<string, object>();
sauceOptions.Add("build", myTestBuild);
sauceOptions.Add("name", myTestName);
browserOptions.AddAdditionalOption("sauce:options", sauceOptions);
var driver = ​​new RemoteWebDriver(new Uri(SauceURL), options);
```
</TabItem>
</Tabs>

For more information, see [W3C WebDriver Capabilities Support](/dev/w3c-webdriver-capabilities). To view all possible platform configurations, see the [Sauce Labs platform configurator](https://saucelabs.com/platform/platform-configurator).


## Upgrading Your Dependencies

Currently, the latest version of Selenium 4 is RC-2 (release candidate 2). Check the sections below to install the RC-2 version of Selenium 4 and have your project dependencies upgraded.

The process of upgrading Selenium depends on which build tool is being used. We will cover the most common ones for Java &#8212; Maven and Gradle &#8212; plus JavaScript, Python, Ruby, and C#.

<Tabs
  defaultValue="Java/Maven"
  values={[
    {label: 'Java/Maven', value: 'Java/Maven'},
    {label: 'Java/Gradle', value: 'Java/Gradle'},
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="Java/Maven">

Minimum Java version required is still 8.

Before
```java
<dependencies>
	<!-- more dependencies ... -->
	<dependency>
    	<groupId>org.seleniumhq.selenium</groupId>
    	<artifactId>selenium-java</artifactId>
    	<version>3.141.59</version>
	</dependency>
	<!-- more dependencies ... -->
</dependencies>
```

After
```java
<dependencies>
	<!-- more dependencies ... -->
	<dependency>
    	<groupId>org.seleniumhq.selenium</groupId>
    	<artifactId>selenium-java</artifactId>
    	<version>4.0.0-rc-2</version>
	</dependency>
	<!-- more dependencies ... -->
</dependencies>
```

After making the change, you could execute mvn clean compile on the same directory where the pom.xml file is.

</TabItem>
<TabItem value="Java/Gradle">

Minimum Java version required is still 8.

Before

```java
plugins {
	id 'java'
}
group 'org.example'
version '1.0-SNAPSHOT'
repositories {
	mavenCentral()
}
dependencies {
	testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
	testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.7.0'
	implementation group: 'org.seleniumhq.selenium', name: 'selenium-java', version: '3.141.59'
}
test {
	useJUnitPlatform()
}
```

After
```java
plugins {
	id 'java'
}
group 'org.example'
version '1.0-SNAPSHOT'

repositories {
	mavenCentral()
}
dependencies {
	testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
	testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.7.0'
	implementation group: 'org.seleniumhq.selenium', name: 'selenium-java', version: '4.0.0-rc-2'
}
test {
	useJUnitPlatform()
}
```

After making the change, you could execute ./gradlew clean build on the same directory where the build.gradle file is.

To check all the Java releases, you can head to MVNRepository.

</TabItem>
<TabItem value="JavaScript">

The selenium-webdriver package can be found at the Node package manager, npmjs. The latest RC 2 version can be found here. To install it, you could either execute:
npm install selenium-webdriver

Or, update your package. json and run npm install:

```json
{
  "name": "selenium-tests",
  "version": "1.0.0",
  "dependencies": {
	"selenium-webdriver": "^4.0.0-rc-2"
  }
}
```

</TabItem>
<TabItem value="Python">

Python
The most important change to use Python is the minimum required version. Selenium 4 will require a minimum Python 3.7 or higher. More details can be found at the Python Package Index. To upgrade from the command line, you can execute:

```py
pip install selenium==4.0.0rc2
```

</TabItem>
<TabItem value="Ruby">

Ruby
The update details for Selenium 4 RC 2 can be seen at the selenium-webdriver gem in RubyGems. To install the latest version, you can execute:

```rb
gem install selenium-webdriver --pre
```

To add it to your Gemfile:
```rb
gem 'selenium-webdriver', '~> 4.0.0.rc2'
```

</TabItem>
<TabItem value="C#">

The place to get updates for Selenium 4 in C# is NuGet. Under the Selenium.WebDriver package you can get the instructions to update to the latest version. Inside of Visual Studio, through the NuGet Package Manager you can execute:
```csharp
PM> Install-Package Selenium.WebDriver -Version 4.0.0-rc2
```

</TabItem>
</Tabs>



## Potential Errors and Deprecation Messages

Below are code examples that can help resolve deprecation messages you might encounter after upgrading to Selenium 4.

### Find Element(s) Utility Methods
<p><span className="sauceDBlue">Java only</span></p>

FindsBy interfaces, utility methods to find elements in the Java bindings, have been removed, as they were meant for internal use only. In Example 2, you'll see that all the findElements* have been removed as well.

**Example 1**

<Tabs
  defaultValue="Selenium 4"
  values={[
    {label: 'Legacy', value: 'Legacy'},
    {label: 'Selenium 4', value: 'Selenium 4'},
  ]}>

<TabItem value="Legacy">

```java
driver.findElementByClassName("className");
driver.findElementByCssSelector(".className");
driver.findElementById("elementId");
driver.findElementByLinkText("linkText");
driver.findElementByName("elementName");
driver.findElementByPartialLinkText("partialText");
driver.findElementByTagName("elementTagName");
driver.findElementByXPath("xPath");
```

</TabItem>
<TabItem value="Selenium 4">

```java
driver.findElement(By.className("className"));
driver.findElement(By.cssSelector(".className"));
driver.findElement(By.id("elementId"));
driver.findElement(By.linkText("linkText"));
driver.findElement(By.name("elementName"));
driver.findElement(By.partialLinkText("partialText"));
driver.findElement(By.tagName("elementTagName"));
driver.findElement(By.xpath("xPath"));
```
</TabItem>
</Tabs>
<br/>

**Example 2**

<Tabs
  defaultValue="Selenium 4"
  values={[
    {label: 'Legacy', value: 'Legacy'},
    {label: 'Selenium 4', value: 'Selenium 4'},
  ]}>

<TabItem value="Legacy">

```java
driver.findElementsByClassName("className");
driver.findElementsByCssSelector(".className");
driver.findElementsById("elementId");
driver.findElementsByLinkText("linkText");
driver.findElementsByName("elementName");
driver.findElementsByPartialLinkText("partialText");
driver.findElementsByTagName("elementTagName");
driver.findElementsByXPath("xPath");
```

</TabItem>
<TabItem value="Selenium 4">

```java
driver.findElements(By.className("className"));
driver.findElements(By.cssSelector(".className"));
driver.findElements(By.id("elementId"));
driver.findElements(By.linkText("linkText"));
driver.findElements(By.name("elementName"));
driver.findElements(By.partialLinkText("partialText"));
driver.findElements(By.tagName("elementTagName"));
driver.findElements(By.xpath("xPath"));
```

</TabItem>
</Tabs>


### Timeout Parameters
<p><span className="sauceDBlue">Java only</span></p>

The parameters received in `Timeout` have switched from expecting (long time, `TimeUnit` unit) to expect (`Duration` duration).  

<Tabs
  defaultValue="Selenium 4"
  values={[
    {label: 'Legacy', value: 'Legacy'},
    {label: 'Selenium 4', value: 'Selenium 4'},
  ]}>

<TabItem value="Selenium 4">

```java
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
driver.manage().timeouts().scriptTimeout(Duration.ofMinutes(2));
driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));
```

</TabItem>
<TabItem value="Legacy">

```java
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
driver.manage().timeouts().setScriptTimeout(2, TimeUnit.MINUTES);
driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
```

</TabItem>
</Tabs>


### Wait Parameters
Waits are also expecting different parameters now. `WebDriverWait` is now expecting a Duration instead of a long for timeout in seconds and milliseconds. The `withTimeout` and `pollingEvery` utility methods from `FluentWait` have switched from expecting (long time, `TimeUnit` unit) to expect (`Duration` duration).

<Tabs
  defaultValue="Selenium 4"
  values={[
    {label: 'Legacy', value: 'Legacy'},
    {label: 'Selenium 4', value: 'Selenium 4'},
  ]}>

<TabItem value="Selenium 4">

```java
new WebDriverWait(driver, Duration.ofSeconds(3))
.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#id")));

Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
  .withTimeout(Duration.ofSeconds(30))
  .pollingEvery(Duration.ofSeconds(5))
  .ignoring(NoSuchElementException.class);
```

</TabItem>
<TabItem value="Legacy">

```java
new WebDriverWait(driver, 3)
.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#id")));

Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
  .withTimeout(30, TimeUnit.SECONDS)
  .pollingEvery(5, TimeUnit.SECONDS)
  .ignoring(NoSuchElementException.class);
```

</TabItem>
</Tabs>


### Merging Capabilities

Prior to Selenium 4, you could merge one set of capabilities into different set, and this would mutate the calling object. With Selenium 4, this is deprecated; you'll need to manually assign the result of the merge operation.

<Tabs
  defaultValue="Selenium 4"
  values={[
    {label: 'Legacy', value: 'Legacy'},
    {label: 'Selenium 4', value: 'Selenium 4'},
  ]}>

<TabItem value="Selenium 4">

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("platformVersion", "Windows 10");
FirefoxOptions options = new FirefoxOptions();
options.setHeadless(true);
options = options.merge(capabilities);
```

The result of the merge call needs to be assigned to an object.

</TabItem>
<TabItem value="Legacy">

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("platformVersion", "Windows 10");
FirefoxOptions options = new FirefoxOptions();
options.setHeadless(true);
options.merge(capabilities);
```

As a result, the options object was getting modified.

</TabItem>
</Tabs>

### Firefox Legacy

Before GeckoDriver was around, the Selenium project had a driver implementation to automate Firefox versions below 48. With the release of Selenium 4, this implementation is not needed anymore, as it does not work in recent versions of Firefox.

To avoid major issues when upgrading to Selenium 4, the `setLegacy` option will be shown as deprecated. We recommend relying only on GeckoDriver, rather than using the old implementation. The following code will show the `setLegacy` line deprecated after upgrading.

```java
FirefoxOptions options = new FirefoxOptions();
options.setLegacy(true);
```


### Browser Interface

With Selenium 4, the BrowserType interface will be deprecated and replaced by the new Browser interface.

<Tabs
  defaultValue="Selenium 4"
  values={[
    {label: 'Legacy', value: 'Legacy'},
    {label: 'Selenium 4', value: 'Selenium 4'},
  ]}>

<TabItem value="Selenium 4">

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("browserVersion", "92");
capabilities.setCapability("browserName", Browser.FIREFOX);
```

</TabItem>
<TabItem value="Legacy">

```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("browserVersion", "92");
capabilities.setCapability("browserName", BrowserType.FIREFOX);
```

</TabItem>
</Tabs>

### AddAdditionalOption
<p><span className="sauceDBlue">C# only</span></p>

The [`AddAdditionalCapability` capability](https://www.selenium.dev/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_DriverOptions_AddAdditionalCapability.htm) is deprecated in Selenium 4. Instead of it, `AddAdditionalOption` is recommended.

<Tabs
  defaultValue="Selenium 4"
  values={[
    {label: 'Legacy', value: 'Legacy'},
    {label: 'Selenium 4', value: 'Selenium 4'},
  ]}>

<TabItem value="Selenium 4">

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";
var sauceOptions = new Dictionary<string, object>();
browserOptions.AddAdditionalOption("sauce:options", sauceOptions);
```
</TabItem>
<TabItem value="Legacy">

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";
var sauceOptions = new Dictionary<string, object>();
browserOptions.AddAdditionalCapability("sauce:options", sauceOptions, true);
```

</TabItem>
</Tabs>


## More Information

* [Sauce Labs platform configurator](https://saucelabs.com/platform/platform-configurator)
* [Selenium WebDriver official website](https://www.selenium.dev/documentation/webdriver/)
* FAQs
* [W3C Recommendations website | W3C WebDriver Capabilities](https://www.w3.org/TR/webdriver1/#capabilities)
* [Sauce Labs W3C WebDriver Capabilities Support](/dev/w3c-webdriver-capabilities)
* [Sauce Labs Test Configuration Options](/dev/w3c-webdriver-capabilities)

https://gist.github.com/titusfortner/83933ee6417e3b83be1d2e32a2ebf257
https://gist.github.com/titusfortner/ab3efe8b5dfac54b05ed53ffd2be444e
