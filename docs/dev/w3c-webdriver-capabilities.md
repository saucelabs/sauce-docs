---
id: w3c-webdriver-capabilities
title: W3C WebDriver Capabilities Support
sidebar_label: W3C WebDriver Capabilities
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs now supports the [W3C WebDriver-compliant capabilities and protocol](https://www.w3.org/TR/webdriver) featured in Selenium versions 3.11 and higher. This doc will help ensure that your tests are W3C WebDriver-compliant and can successfully execute on Sauce Labs.

We early adopted the W3C WebDriver specification when it achieved the W3C standard level as the automation protocol for web browsers. As browser vendors update to support W3C WebDriver protocol and shift away from JSON Wire Protocol (JWP), this can bring increased stability in your Selenium tests across different browsers. It’s important to update your tests accordingly.

:::note
Some extended capabilities are not backwards-compatible with Selenium versions below 4.0.
:::


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)

To ensure W3C WebDriver compliance:

* Use Selenium version 3.11 or higher.
* Switch from using JWP (legacy) to the newer W3C WebDriver Protocol. Mixing JWP with W3C will result in an [error](/dev/w3c-webdriver-capabilities/#common-errors).
* Learn the name changes effective with the W3C protocol capabilities. For example, W3C uses `platformName`, while JWP uses `platform`. W3C uses `browserVersion`, while JWP uses `version`. We recommend reviewing our [Test Configuration Options](/dev/test-configuration-options) and the [official W3C Recommendations website](https://www.w3.org/TR/webdriver1/#capabilities).
* Include our custom `sauce:options` W3C WebDriver-compliant capabilities in your Sauce Labs test scripts.
  <details><summary><strong>Click here</strong> to see the full list of <code>sauce:options</code> capabilities. See <a href="/dev/test-configuration-options">Test Configuration Options</a> for guidance on which are required and optional.</summary>

  * `accessKey`
  * `appiumVersion`
  * `avoidProxy`
  * `build`
  * `captureHtml`
  * `chromedriverVersion`
  * `commandTimeout`
  * `crmuxdriverVersion`
  * `customData`
  * `disablePopupHandler`
  * `extendedDebugging`
  * `firefoxAdapterVersion`
  * `firefoxProfileUrl`
  * `idleTimeout`
  * `iedriverVersion`
  * `maxDuration`
  * `name`
  * `parentTunnel`
  * `passed`
  * `prerun`
  * `preventRequeue`
  * `priority`
  * `proxyHost`
  * `public`
  * `recordLogs`
  * `recordScreenshots`
  * `recordVideo`
  * `restrictedPublicInfo`
  * `screenResolution`
  * `seleniumVersion`
  * `source`
  * `tags`
  * `timeZone`
  * `tunnelIdentifier`
  * `username`
  * `videoUploadOnPass`

  </details>

  <details><summary><strong>Click here</strong> to see an example code snippet containing <code>sauce:options</code> capabilities.</summary>

  ```java
    browserName: 'firefox',
    platformName: 'macOS 10.15',
    browserVersion: 'latest'
    sauce:options: {
      name: 'My test name',
      build: 'My build',
      username: "SAUCE_USERNAME",
      accessKey: "SAUCE_ACCESS_KEY"
      seleniumVersion: "3.141.59"
    }
    ```

   </details>


## W3C WebDriver Protocol Compliance

### Sauce Labs WebDriver Protocol Support

<table>
  <tr>
   <td><strong>Browser</strong>
   </td>
   <td><strong>W3C Support</strong>
   </td>
   <td><strong>JWP Support</strong>
   </td>
  </tr>
  <tr>
   <td>Chrome
   </td>
   <td>75 and above
   </td>
   <td>Still supported
   </td>
  </tr>
  <tr>
   <td>Firefox
   </td>
   <td>55 and above
   </td>
   <td>Still supported
   </td>
  </tr>
  <tr>
   <td>Safari
   </td>
   <td>12 and above
   </td>
   <td>Removed in 12.1
   </td>
  </tr>
  <tr>
   <td>Edge
   </td>
   <td>All
   </td>
   <td>Still supported
   </td>
  </tr>
  <tr>
   <td>Internet Explorer
   </td>
   <td>All
   </td>
   <td>Still supported
   </td>
  </tr>
</table>


### Browser Compatibility

The following browser versions are compatible with the W3C WebDriver protocol:
* Firefox version 53 and above.
* Chrome version 61 and above.
* Internet Explorer 11.

By default, Sauce Labs uses older versions of Firefox, IE, and Safari. This is important to know since newer commands and configurations may not be supported in those versions.

#### **`chromeOptions()`**

For tests on Chrome versions 74 and lower, the `chromeOptions()` W3C WebDriver capability must be set as an experimental option. ChromeDriver version 75 [runs in W3C WebDriver standard compliant mode by default](http://chromedriver.chromium.org/downloads), so setting this capability won't be necessary in the future.

`w3c` must be set as a boolean value (e.g., `true` in Java and `True` in Python) – not a string (e.g., `"true"`). Example:

```java
ChromeOptions chOpts = new ChromeOptions();
chOpts.setExperimentalOption("w3c", true);
```  

### Verifying Your Tests for Compliance

To confirm that your Sauce Labs tests are adhering the new W3C WebDriver protocol:

1. Go to **Test Details** and click on the line item for your test.
2. Click the **Commands** tab.
3. Click the `POST /session` command to expand its details.
4. Go the **PARAMETERS** section and check the capabilities that were used in your test. If the code begins with `capabilities`, you're running the new W3C WebDriver-compliant protocol. If it begins with `desiredCapabilities`, you're running the legacy, non-W3C WebDriver protocol.
<img src={useBaseUrl('img/test-results/test-results-w3c.jpg')} alt="Check W3C compliance in your test results" />


### Language Changes in Selenium 3.11+

There are some changes to specific Selenium language bindings you should be aware of when migrating to the W3C WebDriver protocol.

#### W3C `DriverOptions()`

When using Selenium versions 3.11 and above, we recommend inputting the W3C WebDriver-compliant `DriverOptions()` class, which is used to manage options specific to each browser web driver. Below are some examples.

<Tabs
  defaultValue="W3C DriverOptions()"
  values={[
    {label: 'W3C DriverOptions()', value: 'W3C DriverOptions()'},
    {label: 'JWP DesiredCapabilities() (Legacy)', value: 'JWP DesiredCapabilities() (Legacy)'},
  ]}>

<TabItem value="W3C DriverOptions()">

```java
FireFoxOptions mozOpts = new FirefoxOptions();
```

</TabItem>
<TabItem value="JWP DesiredCapabilities() (Legacy)">

```java
DesiredCapabilities caps = new DesiredCapabilities.firefox();
```

:::note
Using JWP legacy formatting in a Selenium 3.11+ script will yield the following message:

```js
INFO: Using `new FirefoxOptions()` is preferred to `DesiredCapabilities.firefox()`
```

:::

</TabItem>
</Tabs>
<br/>

#### W3C `MutableCapabilities()`

We recommend setting your capabilities using the W3C Webdriver-compliant `MutableCapabilities()` class over the legacy `DesiredCapabilities()`.

`MutableCapabilities()` implements all interfaces, including `DriverOptions()` and `DesiredCapabilities()`. Examples:

<Tabs
  defaultValue="W3C MutableCapabilities()"
  values={[
    {label: 'W3C MutableCapabilities()', value: 'W3C MutableCapabilities()'},
    {label: 'JWP DesiredCapabilities() (Legacy)', value: 'JWP DesiredCapabilities() (Legacy)'},
  ]}>

<TabItem value="W3C MutableCapabilities()">

```java
MutableCapabilities sauceCaps = new MutableCapabilities();
sauceCaps.setCapability("username", "someuser");
sauceCaps.setCapability("accessKey", "00000000-0000-0000-0000-000000000000");
sauceCaps.setCapability("name", "my test case");

MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("sauce:options", sauceCaps);
caps.setCapability("platformName", "Windows 10");
caps.setCapability("browserName", "firefox");
caps.setCapability("browserVersion", "latest");

WebDriver driver = new RemoteWebDriver(new URL("https://ondemand.saucelabs.com/wd/hub"), caps);
```

</TabItem>
<TabItem value="JWP DesiredCapabilities() (Legacy)">

```java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("username", "someuser");
caps.setCapability("accessKey", "00000000-0000-0000-0000-000000000000");
caps.setCapability("name", "my test case");
caps.setCapability("browser", "firefox");
caps.setCapability("platform", "Windows 10");
caps.setCapability("version", "latest");

WebDriver driver = new RemoteWebDriver(new URL("https://ondemand.saucelabs.com/wd/hub"), caps);
```

:::note

Using JWP legacy formatting in a Selenium 3.11+ script will yield the following message:

```
"INFO: Using `new FirefoxOptions()` is preferred
to `DesiredCapabilities.firefox()"
```

:::

</TabItem>
</Tabs>

For more information, see the [`DriverOptions` class Selenium documentation](https://www.selenium.dev/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_DriverOptions.htm).


:::tip

Use our [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to autogenerate the W3C capabilities needed to run a test on your local environment.
:::


## Instantiating WebDriver

To instantiate WebDriver with W3C WebDriver-compliant capabilities, select a code snippet below in the programming language of your choice and then follow the instructions. You can find more sample code in our [GitHub training repository](https://github.com/saucelabs-training/w3c-examples).

<Tabs
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'NodeJS', value: 'NodeJS'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="Java">

#### **TestNG Example Walkthrough**

1. Ensure you have the [prerequisite software](https://github.com/saucelabs-training/demo-java/#prerequisites) to run a Java test on Sauce.
2. Download or clone one of the below example test scripts from our GitHub repo:

  <details><summary><strong>Click here</strong> to see an example TestNG test script.</summary>

  ```java reference title="TestNG Example"
  https://github.com/saucelabs-training/w3c-examples/blob/master/java/testng/W3CChromeTest.java
  ```
  </details>

3. Resolve any dependencies:
  ```bash
  $ mvn dependency:resolve
  ```
4. Export your Sauce Labs Username and Access Key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxx
  ```
5. Run the following command:
  ```bash
  $ mvn clean test -Dtest=TestNGW3CChromeTest
  ```

**JUnit 5 Example Walkthrough**

1. Ensure you have the [prerequisite software](https://github.com/saucelabs-training/demo-java/#prerequisites) to run a Java test on Sauce.
2. Download or clone the below example test script from our GitHub repo:
  <details><summary><strong>Click here</strong> to see the JUnit Jupiter example test script.</summary>

  ```java reference title="JUnit 5 Example"
  https://github.com/saucelabs-training/w3c-examples/blob/master/java/junit5/W3CChromeTest.java
  ```
  </details>
3. Resolve any dependencies:
  ```bash
  $ mvn dependency:resolve
  ```
4. Export your Sauce Labs Username and Access Key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx
  ```
5. Run the following command:
  ```bash
  $ mvn clean test -Dtest=JUnit5W3CChromeTest
  ```

</TabItem>
<TabItem value="Python">

**PyTest Example Walkthrough**

1. Ensure you have the [prerequisite software](https://github.com/saucelabs-training/demo-python) to run a Python test on Sauce.
2. Download or clone the below test script from our GitHub repo:
  <details><summary><strong>Click here</strong> to see an example PyTest test script.</summary>

  ```py reference title="PyTest Example"
  https://github.com/saucelabs-training/w3c-examples/blob/master/python/test_pytest_chrome.py
  ```
  </details>
3. Resolve any dependencies:
  ```bash
  $ pip install -r w3c-examples/requirements.txt
  ```
4. Export your Sauce Labs Username and Access Key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```
5. Run the following command:
  ```bash
  $ pytest w3c-examples/pytest/*.py
  ```

**unittest Example Walkthrough**

1. Ensure you have the [prerequisite software](https://github.com/saucelabs-training/demo-python) to run a Python test on Sauce.
2. Download or clone the below test script from our GitHub repo:
  <details><summary><strong>Click here</strong> to see an example unittest test script.</summary>

  ```py reference title="UnitTest Example"
  https://github.com/saucelabs-training/w3c-examples/blob/master/python/test_unittest_chrome.py
  ```
  </details>
3. Install any dependencies:
  ```bash
  $ pip install -r w3c-examples/requirements.txt
  ```
4. Export your Sauce Labs Username and Access Key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```
5. Run the following command:
  ```py
  $ python -m unittest w3c-examples/unittest/*.py
  ```

</TabItem>
<TabItem value="NodeJS">

**WebdriverIO Example Walkthrough**

1. Ensure you have the [prerequisite software](https://github.com/saucelabs-training/demo-js) to run a WebdriverIO test on Sauce.
2. Download or clone the below test script from our GitHub repo:
  <details><summary><strong>Click here</strong> to see an example WebdriverIO test script.</summary>

  ```js reference title="WebdriverIO Example"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/webdriver/examples/w3c/test/configs/wdio.saucelabs.conf.js
  ```
  </details>
3. Install node package dependencies:
  ```bash
  $ npm --prefix ./w3c-example install ./w3c-example
  ```
4. Export your Sauce Labs Username and Access Key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```
5. Run the following command:
  ```bash
  $ npm --prefix ./w3c-example test
  ```

</TabItem>
<TabItem value="Ruby">

**Rspec Example Walkthrough**

1. Ensure you have the [prerequisite software](https://github.com/saucelabs-training/demo-ruby) to run a Ruby test on Sauce.
2. Download or clone the below test script from our GitHub repo:
  <details><summary><strong>Click here</strong> to see an example Ruby test script.</summary>

  ```ruby reference title="RSpec Example"
  https://github.com/saucelabs-training/w3c-examples/blob/master/ruby/rspec/chrome_example_spec.rb
  ```
  </details>
3. Install gemfile/package dependencies:
  ```bash
  $ gem install bundler
  $ bundle init
  $ bundle install --path .bundle
  ```
4. Export your Sauce Labs Username and Access Key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```
5. Run the following command:
  ```bash
  $ bundle exec rspec
  ```

</TabItem>
<TabItem value="C#">

**NUnit Example Walkthrough**

1. Ensure you have the [prerequisite software](https://github.com/saucelabs-training/demo-csharp) to run a C# test on Sauce.
2. Download or clone the below test script from our GitHub repo:
  <details><summary><strong>Click here</strong> to see an example C# test script.</summary>

  ```csharp reference title="NUnit Example"
  https://github.com/saucelabs-training/w3c-examples/blob/master/csharp/NUnitExamples.cs
  ```
  </details>
3. In Visual Studio, open the solution.
4. Export your Sauce Labs Username and Access Key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```
5. In Visual Studio Test Explorer, run tests in <small>`Selenium3.Nunit.Scripts.SimpleExamples.W3CExamplesOnSelenium3.cs`</small>.

</TabItem>
</Tabs>

## Quickstart

Below are mobile and web test script examples you can use to get up and running quickly in JavaScript:

<Tabs
  defaultValue="Desktop Web"
  values={[
    {label: 'Desktop Web', value: 'Desktop Web'},
    {label: 'Appium Web', value: 'Appium Web'},
  ]}>

<TabItem value="Desktop Web">

```js reference title="Desktop Web Example"
https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/webdriver/examples/w3c/test/configs/wdio.saucelabs.conf.js
```

</TabItem>
<TabItem value="Appium Web">

```js reference title="Appium Web Example"
https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/appium-web/examples/w3c/test/configs/wdio.saucelabs.conf.js
```

</TabItem>
</Tabs>

## Common Errors

W3C WebDriver-compliant capabilities and JWP Capabilities are not compatible. Using both in the same test script will result in a system error when spinning up a WebDriver session:

```java title="Mixed Capabilities Error"
selenium.common.exceptions.WebDriverException: Message: Misconfigured -- Mixed Capabilities Error.

W3C keys (platformName/browserVersion) were detected alongside JWP keys (platform/version). To fix this, replace all JWP keys with W3C keys.

The following desired capabilities were received:
{'browserName': 'chrome',
 'browserVersion': '80',
 'platform': 'Windows'}
```

Solution:
1. Change `platform` to `platformName`.
1. Change `version` to `browserVersion`.

```java
browserName: 'chrome',
platformName: 'Windows',
browserVersion: '80'
sauce:options: {
  name: 'My test name',
  build: 'My build',
  username: "SAUCE_USERNAME",
  accessKey: "SAUCE_ACCESS_KEY"
  seleniumVersion: "3.141.59"
}
```

## Additional Resources

*   [Sauce Labs Supports the W3C WebDriver Protocol](https://saucelabs.com/selenium-4): run compliant tests on every browser.
*   [Test Configuration Options](/dev/test-configuration-options): Sauce Labs capabilities for Selenium and Appium.
*   [Useable code examples for your tests](https://github.com/saucelabs-training/w3c-examples): public GitHub repo with language-specific bindings that leverage our new `sauce:options` capability.
