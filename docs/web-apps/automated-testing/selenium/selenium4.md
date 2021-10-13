---
id: selenium4
title: Upgrading to Selenium 4 for Sauce Labs Testing
sidebar_label: Selenium 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This doc will guide you through how to upgrade to Selenium 4, which has just been released!

Although Selenium 4 is designed to be a straightforward drop-in replacement,
you'll need to be aware of the new and deprecated features that may impact your Sauce Labs automated tests. 
This is especially important if you've built custom functionalities in your testing framework.

## What You'll Learn
* Tips for adjusting your tests and dependencies.
* How to prevent and resolve potential issues that could arise during your Selenium upgrade.

## What You’ll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Strongly recommended: use one of the programming languages officially supported by Selenium 4 (Java, JavaScript, Python, Ruby, or C#).


## W3C Compliant Sessions

Selenium 4 deprecates support for legacy JSON Wire Protocol (JWP). As part of this change, Selenium is moving
away from the less structured Desired Capabilities classes to Browser Options classes.
* Facilitates creation of W3C Compliant [WebDriver Capabilites](/dev/w3c-webdriver-capabilities)
* Simplifies the configuration needed to start a new session.
* Allows you to set both defined W3C Capabilities, and browser-specific settings.
* Reduces the chances of browser misconfiguration.

### W3C Defined WebDriver Capabilities

List of [W3C WebDriver capabilities](https://www.w3.org/TR/webdriver1/#capabilities) applicable to Sauce Labs:
* `browserName`
* `browserVersion`
* `platformName`
* `acceptInsecureCerts`
* `pageLoadStrategy`
* `proxy`
* `timeouts`
* `unhandledPromptBehavior`

Any capability not in this list must include a vendor prefix.
This rule applies to browser-specific capabilities as well as Sauce Labs-specific capabilities. 
So, Firefox specific capabilities need to be nested inside a `moz:firefoxOptions` or other `moz:XXX` keys. If
you use a Browser Options class this is all handled for you. For Sauce Labs, though, we need you to create a Hash or
Dictionary of Sauce Labs specific settings and place it inside a `sauce:options` object. 
See the examples in the next section.

#### Converting from Capabilities to Options

To customize your default settings, check out the new "Selenium 4" 
Tab on the [Sauce Labs platform configurator](https://saucelabs.com/platform/platform-configurator).
All the valid `sauce:options` parameters are described on the [Test Configurations](/dev/test-configuration-options/index.html) page.

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java title="Deprecated Code"
DesiredCapabilities caps = DesiredCapabilities.firefox();
caps.setCapability("platform", "Windows 10");
caps.setCapability("version", "92");
caps.setCapability("build", myTestBuild);
caps.setCapability("name", myTestName);
WebDriver driver = new RemoteWebDriver(new URL(sauceUrl), caps);
```

```java reference title="Recommended Code"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SeleniumTest.java#L34-L43
```

</TabItem>
<TabItem value="Python">

```py title="Deprecated Code"
caps = {}
caps['browserName'] = 'firefox'
caps['platform'] = 'Windows 10'
caps['version'] = '92'
caps['build'] = my_test_build
caps['name'] = my_test_name
driver = webdriver.Remote(sauce_url, desired_capabilities=caps)
```

```py reference title="Recommended Code"
https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/conftest.py#L12-L21
```

</TabItem>
<TabItem value="Ruby">

```rb title="Deprecated Code"
caps = Selenium::WebDriver::Remote::Capabilities.firefox
caps[:platform] = 'Windows 10'
caps[:version] = '92'
caps[:build] = my_test_build
caps[:name] = my_test_name
driver = Selenium::WebDriver.for :remote, url: sauce_url, desired_capabilities: caps
```

```rb reference title="Recommended Code"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/selenium-examples/rspec/spec/spec_helper.rb#L9-L16
```

</TabItem>
<TabItem value="C#">

```csharp title="Deprecated Code"
DesiredCapabilities caps = new DesiredCapabilities();
caps.SetCapability("browserName", "firefox");
caps.SetCapability("platform", "Windows 10");
caps.SetCapability("version", "92");
caps.SetCapability("build", myTestBuild);
caps.SetCapability("name", myTestName);
var driver = new RemoteWebDriver(new Uri(SauceURL), capabilities);
```

```cs reference title="Recommended Code"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4Demo.cs#L21-L30
```

</TabItem>
</Tabs>

#### Remote WebDriverBuilder
<p><span className="sauceDBlue">Java only</span></p>

An alternate way to start your session in Java is with the `RemoteWebDriverBuilder`.
This class has a few advantages for Sauce Labs users, including automatic driver augmentation 
(driver augmentation is required for several of the new features below), and the ability to set HTTP Client
settings like read timeouts.

<details>
  <summary>
    <strong>Click here</strong> to see an example of using the RemoteWebDriverBuilder.<br />
  </summary>

```java reference title="RemoteWebDriverBuilder"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/RemoteWebDriverBuilderTest.java#L29-L51
```
</details>


## New Features

Here are 10 new features in Selenium 4 that you can use in your Sauce Labs Tests, with examples in each language.

#### 1. Relative Locators

Relative locators allow you to identify elements in relationship to each other as they are displayed on the page
using more natural language friendly terms, such as “above”, “below”, “left of”, “right of”, and “near”.

:::caution
Changing the size of browser window or adding or removing things on the page can change which element 
is located.
:::

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Relative Locators"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/RelativeLocatorsTest.java#L15-L21
```

</TabItem>
<TabItem value="Python">

```py reference title="Relative Locators"
https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_relative_locators.py#L6-L13
```

</TabItem>
<TabItem value="Ruby">

```rb reference title="Relative Locators"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/relative_locators_spec.rb#L7-L13
```

</TabItem>
<TabItem value="C#">

```cs reference title="Relative Locators"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/RelativeLocators.cs#L39-L47
```

</TabItem>

</Tabs>

#### 2. New Window

Create and Switch to a new (blank) tab or window.

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Create New Window"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/NewWindowTest.java#L13-L16
```

```java reference title="Create New Tab"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/NewWindowTest.java#L21-L23
```

</TabItem>
<TabItem value="Python">

```py reference title="Create New Window"
https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_new_window.py#L5-L8
```

```py reference title="Create New Tab"
https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_new_window.py#L12-L14
```

</TabItem>
<TabItem value="Ruby">

```rb reference title="Create New Window"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/new_window_spec.rb#L7-L9
```

```rb reference title="Create New Tab"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/new_window_spec.rb#L13-L14
```

</TabItem>
<TabItem value="C#">

```cs reference title="Create New Window"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/NewWindow.cs#L39-L42
```

```cs reference title="Create New Tab"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/NewWindow.cs#L48-L50
```
</TabItem>

</Tabs>

#### 3. Print Page

The ability to print a page as a PDF in Chrome, Firefox and Edge. There are quite a few customizations that can be
made including page size, range, margins, background, and shrink to fit. Here are code examples with the defaults:

:::note
For Chrome and Edge, this only works in Headless mode.
:::

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Print Page"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/ViewPageFirefoxTest.java#L38-L41
```

</TabItem>
<TabItem value="Python">

```py reference title="Print Page"
https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_print_page.py#L8-L13
```

</TabItem>
<TabItem value="Ruby">

```rb reference title="Print Page"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/ViewPageFirefox.cs#L39-L44
```

</TabItem>
<TabItem value="C#">

```cs reference title="Print Page"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/RelativeLocators.cs#L39-L47
```

</TabItem>

</Tabs>

#### 4. Element Attribute vs Property 

The Selenium 3 method for getting an element's attribute does not actually give you the element's attribute.
Because most people don't know the difference between an element and an attribute, Selenium created a way
to provide the user with whichever value they probably wanted. Because this magic can not be precisely
specified for the W3C, two new methods were created. The original method hasn't changed, but using it will
be slightly less performant on Sauce Labs, as well as less precise. The new methods are named slightly differently in
each language.:

<details>
  <summary>
    <strong>Click here</strong> to see multiple examples of the behavior of these attribute and property methods.
  </summary>

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Attributes vs Properties"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/AttributePropertyTest.java
```

</TabItem>
<TabItem value="Python">

```py reference title="Attributes vs Properties"
https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_attribute_property.py
```

</TabItem>
<TabItem value="Ruby">

```rb reference title="Attributes vs Properties"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/attribute_property_spec.rb
```

</TabItem>
<TabItem value="C#">

```cs reference title="Attributes vs Properties"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/AttributeProperty.cs
```

</TabItem>

</Tabs>
</details>

#### 5. Chromium Edge Options

When the latest version of Selenium 3 was released, Microsoft Edge was still implemented with the now deprecated
EdgeHTML browser engine. So none of the custom options for working with the Chromium version of Edge were available
in Selenium 3.

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Chromium Edge Options"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/MSEdgeTest.java#L15-L21
```

</TabItem>
<TabItem value="Python">

```py reference title="Chromium Edge Options"
https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_ms_edge.py#L8-L11
```

</TabItem>
<TabItem value="Ruby">

```rb reference title="Chromium Edge Options"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/ms_edge_spec.rb#L11-L18
```

</TabItem>
<TabItem value="C#">

```cs reference title="Chromium Edge Options"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/MSEdge.cs#L20-L23
```

</TabItem>

</Tabs>

#### 6. Timeout Getters

This is a long requested feature. Selenium 3 allowed you to set timeouts whenever you liked, but provided
no way to query the driver for the current timeout values. Selenium 4 provides that ability now.

:::tip
Best practice is to set the timeout values in the Options class when starting the session and then ignore
them during the test (do not use the setters or getters)
:::

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Get Timeouts"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/TimeoutsTest.java#L13-L22
```

</TabItem>
<TabItem value="Python">

```py reference title="Get Timeouts"
https://github.com/saucelabs-training/demo-python/blob/docs-1.1/examples/selenium/new_features/test_timeouts.py#L6-L12
```

</TabItem>
<TabItem value="Ruby">

```rb reference title="Get Timeouts"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/timeouts_spec.rb#L7-L11
```

</TabItem>
<TabItem value="C#">

```cs reference title="Get Timeouts"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/Timeouts.cs#L38-L42
```

</TabItem>

</Tabs>

#### 7. Network Conditions
<p><span className="sauceDBlue">Chrome and Edge only</span></p>

Selenium 4 provides a set of parameters to modify network conditions, such as: 
* Going offline
* Setting a latency for the connection
* Altering the upload or download throughput. 

This can be useful to test web applications under different network conditions.

:::note
Sauce Labs has provided the means for our users to [throttle network settings](/insights/debug/#saucethrottlenetwork) for 
several years now through our [Extended Debugging](/insights/debug/) feature
:::

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Network Conditions"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/ChromeNetworkTest.java#L16-L28
```

</TabItem>
<TabItem value="Python">

**Python does not support this feature in Remote driver sessions**

</TabItem>
<TabItem value="Ruby">

```rb reference title="Network Conditions"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/chrome_network_spec.rb#L8-L12
```

</TabItem>
<TabItem value="C#">

<details>
  <summary>
    <strong>Click here</strong> to see the full example of setting Network Conditions.<br />
    (The C# implementation of this is a little more complex).
  </summary>

```cs reference title="Network Conditions"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/ChromeNetwork.cs#L39-L86
```
</details>


</TabItem>

</Tabs>

#### 8. Full Page Screenshots
<p><span className="sauceDBlue">Firefox only</span></p>

Features like "infinite scroll" makes it impossible to explicitly define what a "full page" entails for 
a W3C specification. As such, the default screenshot method in Selenium 3 only returns what is visible in the Viewport. 
Mozilla implemented a separate method to allow for a full page screenshot. 

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Full Page Screenshot"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/ViewPageFirefoxTest.java#L55-L59
```

</TabItem>
<TabItem value="Python">

**Python does not support this feature in Remote driver sessions**

</TabItem>
<TabItem value="Ruby">

```rb reference title="Full Page Screenshot"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/view_page_firefox_spec.rb#L17-L18
```

</TabItem>
<TabItem value="C#">

```cs reference title="Full Page Screenshot"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/ViewPageFirefox.cs#L59-L73
```

</TabItem>

</Tabs>

#### 9. Install and Uninstall Addons
<p><span className="sauceDBlue">Firefox only</span></p>

All the other browsers drivers allow you to install extensions with the Browser Options class. Firefox
requires a separate method after the browser has been started.

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Install and Uninstall Addons"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/FirefoxAddonTest.java#L23-L32
```

</TabItem>
<TabItem value="Python">

**Python does not support this feature in Remote driver sessions**

</TabItem>
<TabItem value="Ruby">

```rb reference title="Install and Uninstall Addons"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/firefox_addon_spec.rb#L7-L15
```

</TabItem>
<TabItem value="C#">

<details>
  <summary>
    <strong>Click here</strong> to see the full example of Installing and Uninstalling Addons.<br />
    (The C# implementation of this is a little more complex).
  </summary>

```cs reference title="Install and Uninstall Addons"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/FirefoxAddon.cs#L41-L93
```
</details>

</TabItem>

</Tabs>

#### 10. Change Preferences During Session
<p><span className="sauceDBlue">Firefox only</span></p>

In Selenium 3, you can only set preferences in the Capabilities at the beginning of a test. Firefox
has provided a way in Selenium 4 to update things whenever you want during a session. This is done
by toggling the *context* between "chrome" and "content".

Here are some examples of using the "chrome" context to change the default accepted language of the browser:

:::caution
Most Selenium commands are not valid in the "chrome" context, so make sure you switch back after using it 
:::

<Tabs
groupId="lang-ex"
defaultValue="Java"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="Java">

```java reference title="Change Context"
https://github.com/saucelabs-training/demo-java/blob/docs-1.1/training-sessions/selenium4/src/test/java/com/saucelabs/selenium4/new_/FirefoxContextTest.java#L25-L39
```

</TabItem>
<TabItem value="Python">

**Python does not support this feature in Remote driver sessions**

</TabItem>
<TabItem value="Ruby">

```rb reference title="Change Context"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.1/training-sessions/selenium4/spec/firefox_context_spec.rb#L6-L23
```

</TabItem>
<TabItem value="C#">

<details>
  <summary>
    <strong>Click here</strong> to see the full example of Changing Preferences During a Session.<br />
    (The C# implementation of this is a little more complex).
  </summary>

```cs reference title="Change Context"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.1/DotnetCore/Sauce.Demo/Core.Selenium.Examples/Selenium4/NewFeatures/FirefoxContext.cs#L41-L96
```
</details>

</TabItem>

</Tabs>


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
