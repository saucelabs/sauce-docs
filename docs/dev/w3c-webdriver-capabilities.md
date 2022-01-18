---
id: w3c-webdriver-capabilities
title: W3C WebDriver Capabilities Support
sidebar_label: W3C WebDriver Capabilities
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs supports and encourages our users to update their code to take advantage of the [W3C WebDriver Protocol](/dev/glossary/#w3c-webdriver-protocol), which is currently the default protocol used by all major browsers, is fully supported in WebdriverIO 6 and higher, Selenium versions 3.11 and higher, Appium 1.6.5 and higher, and is required for Selenium 4.0 and Appium 2.0. Using the WebDriver protocol on Sauce Labs requires setting specific capabilities in your code.

:::note
Some extended capabilities are not backwards-compatible with Selenium versions below 4.0.
:::


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).


## W3C WebDriver-Compliant Protocol

To ensure W3C WebDriver compatibility:

* Use Selenium version 3.11 or higher, WebdriverIO 6 or higher, or an Appium client that supports W3C.
* Switch from using the legacy JSON Wire Protocol (JWP) to the newer W3C WebDriver Protocol.
Mixing JWP with W3C will result in an [error](/dev/w3c-webdriver-capabilities/#common-errors).
* Learn the differences between legacy JWP and W3C WebDriver-compliant capability names.
For example, W3C uses `platformName` and `browserVersion`, while JWP uses `platform` and `version`, respectively.
We recommend reviewing our [Test Configuration Options](/dev/test-configuration-options)
and the [official W3C Recommendations website](https://www.w3.org/TR/webdriver1/#capabilities).
* Include our custom `sauce:options` W3C WebDriver-compliant capabilities in your Sauce Labs test scripts.
  <details>
  <summary><strong>Click here</strong> to see the full list of <code>sauce:options</code> capabilities.
  See <a href="/dev/test-configuration-options">Test Configuration Options</a> for guidance on which are required and optional.
  </summary>

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
  * `tunnelName`
  * `username`
  * `videoUploadOnPass`

  </details>

### Browser Compatibility

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
   <td>60 and above
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
   <td>Edge (Chromium)
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

### Language Changes in Selenium 3.11+

There are some changes to specific Selenium language bindings you should be aware of when migrating to the W3C WebDriver protocol.

#### Selenium Browser Options

At one point, Selenium tried to differentiate between "Required Capabilities" and "Desired Capabilities", but everyone essentially used "Desired Capabilities" as if they were required, and this caused confusion. Selenium has moved away from this syntax to Browser Options syntax. Using the provided methods available on the Browser Options classes will make it easier to ensure you are getting the session you expect.

Browser Options classes are used to manage both browser specific functionality as well as
[top-level W3C defined commands](https://w3c.github.io/webdriver/#capabilities).

Here is a comparison of deprecated Java code that needs to be replaced with recommended code:

<Tabs
  defaultValue="Deprecated Code"
  values={[
    {label: 'Deprecated Code', value: 'Deprecated Code'},
    {label: 'Recommended Code (Selenium 4)', value: 'Recommended Code (Selenium 4)'},
  ]}>

<TabItem value="Deprecated Code">

```java
DesiredCapabilities caps = new DesiredCapabilities.firefox();
caps.setCapability("platform", "Windows 10");
caps.setCapability("version", "latest");
```

:::note
This deprecated code is no longer available in Selenium 4.0+.
:::

</TabItem>
<TabItem value="Recommended Code (Selenium 4)">

```java
FirefoxOptions options = new FirefoxOptions();
options.setPlatformName("Windows 10");
options.setBrowserVersion("latest");
```

</TabItem>
</Tabs>


## Writing W3C Sauce Labs Sessions

You can generate basic code snippets for W3C-compliant sessions using the [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) in the Selenium 4 or Selenium 3 tabs. Complete code examples for [starting a Sauce Labs Session](/web-apps/automated-testing/selenium/#define-capabilities) can be found in our [Selenium Documentation](/web-apps/automated-testing/selenium).

:::note
WebdriverIO has been W3C-compliant by default since v5.0.
:::

### Use sauce:options

To be W3C-compliant, you'll need to put your Sauce-specific configurations inside of a `sauce:options` key, whereas with JWP they were added to the top-level capabilities.

<Tabs
  defaultValue="Recommended Code (Selenium 4)"
  values={[
    {label: 'Deprecated Code', value: 'Deprecated Code'},
    {label: 'Recommended Code (Selenium 4)', value: 'Recommended Code (Selenium 4)'},
  ]}>

<TabItem value="Deprecated Code">

```java
caps.setCapability("username", "someuser");
caps.setCapability("accessKey", "00000000-0000-0000-0000-000000000000");
caps.setCapability("name", testName.getMethodName());
caps.setCapability("build", getBuildName());
caps.setCapability("seleniumVersion", "3.141.59");
```

</TabItem>
<TabItem value="Recommended Code (Selenium 4)">

```java
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
sauceOptions.put("name", testInfo.getDisplayName());
sauceOptions.put("build", getBuildName());
sauceOptions.put("seleniumVersion", "4.0.0");

caps.setCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

Many early Sauce Labs examples show credentials being defined in the `sauceUrl` instead of the options. We currently recommend putting your credentials in `sauce:options` - as described in the previous example - and just use `sauceUrl` to define your Sauce Labs Data Center:

<Tabs
  defaultValue="Recommended Code (Selenium 4)"
  values={[
    {label: 'Outdated Code', value: 'Outdated Code'},
    {label: 'Recommended Code (Selenium 4)', value: 'Recommended Code (Selenium 4)'},
  ]}>

<TabItem value="Outdated Code">

```java
String username = System.getenv("SAUCE_USERNAME");
String accessKey = System.getenv("SAUCE_ACCESS_KEY");
String sauceUrl = "https://" + username + ":" + accessKey + "@ondemand.saucelabs.com:443/wd/hub";
WebDriver driver = new RemoteWebDriver(new URL(sauceUrl), caps);
```

</TabItem>
<TabItem value="Recommended Code">

```java
URL sauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
WebDriver driver = new RemoteWebDriver(new URL(sauceUrl), caps);
```

:::note
Your endpoint URL will depend on which [Sauce Labs Data Center](/basics/data-center-endpoints) you are using.
:::

</TabItem>
</Tabs>


### Test Compatibility

To confirm that your Sauce Labs tests are adhering to W3C WebDriver protocol, go to **Automated** > **Test Results** > Click on your test > **METADATA** tab > Look for **WebDriver Protocol: W3C**.<br/><img src={useBaseUrl('/img/dev/w3c-compability.png')} alt="Mobile" width="400"/>


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

In this example, you'd need to change `platform` to `platformName` and change `version` to `browserVersion`.

```js
browserName: 'chrome',
platformName: 'Windows',
browserVersion: '80'
sauce:options: {
  name: testName(),
  build: buildName(),
  username: "SAUCE_USERNAME",
  accessKey: "SAUCE_ACCESS_KEY"
  seleniumVersion: "3.141.59"
}
```

## Additional Resources

* [Upgrading to Selenium 4 for Sauce Labs Testing](/web-apps/automated-testing/selenium/selenium4/)
* [Migrating Appium Real Device Tests to W3C](https://support.saucelabs.com/hc/en-us/articles/4412359870231)
* [A Comprehensive Guide to Selenium 4](https://saucelabs.com/selenium-4): run compliant tests on every browser
* [W3C-Compliant Selenium 4 Code](/web-apps/automated-testing/selenium/#seven-steps-of-selenium-tests)
* [Test Configuration Options](/dev/test-configuration-options): Sauce Labs capabilities for Selenium and Appium
