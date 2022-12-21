---
id: selenium-grid
title: Selenium Grid and Sauce Labs
sidebar_label: Selenium Grid
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Testing new features and bug fixes is vital to enable quick software development. Selenium Grid helps with this by allowing concurrent execution of WebDriver tests across different browsers, platforms, and devices on multiple remote machines.

However, building your own testing infrastructure with Selenium Grid becomes challenging over time due to the continued releases of new browser versions, browser drivers, operating systems, and mobile devices. You'll need to invest a large amount of time to set up a fine tuned Selenium Grid that supports cross browser, cross platform, and cross device testing.

By executing your tests on Sauce Labs, in addition to having a solid testing infrastructure, you can also benefit from the following features:

- Live debugging, video recording, command tracing, screenshots, and exception highlighting to enable easy debugging on the Sauce Labs [tests results dashboard](/test-results/viewing-test-results/).
- Sharing test results securely between team members by configuring [users and teams](/basics/acct-team-mgmt-hub/).
- Understanding how your application renders on every device and operating system by analyzing results from [Front-End Performance Testing](/performance/).
- Interpreting test results over time and identifying failure patterns across different platforms with [Insights](/insights/).
- Integrating your Sauce Labs test suite with [CI/CD platforms](/basics/integrations-overview/).

## What You'll Learn

- How to extend Selenium Grid with Sauce Labs.
- How to move from Selenium Grid to Sauce Labs.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Java 11 or higher installed on every machine part of Selenium Grid.
- Browsers and browser drivers you want to support installed on each node.
- Selenium Server JAR file from the [latest release](https://github.com/SeleniumHQ/selenium/releases/latest).

## How Selenium Grid Works

Selenium is built on a [client-server architecture](/web-apps/automated-testing/selenium/#architecture), where Selenium Grid is the server. For details on how Selenium Grid works, its components, and how to set it up, see the [Selenium Grid Documentation](https://www.selenium.dev/documentation/grid/getting_started/).

## Running Tests on Selenium Grid

After following the steps to get Selenium Grid up and running, tests that run locally need to be modified to run remotely on Selenium Grid.

Below is a Java example where code is modified from using a local driver to use a remote driver. For extended examples on remote drivers, see [Step 1: Create a Remote Session](/web-apps/automated-testing/selenium/#step-1-create-a-remote-session).

:::note Check your Grid URL
The example assumes that your Grid is running on `http://localhost:4444`. Replace the URL with the one where your Grid is actually running.
:::

<Tabs
defaultValue="local"
values={[
{label: 'Local execution', value: 'local'},
{label: 'Remote execution', value: 'remote'},
]}>

<TabItem value="local">

```java title="Local execution"
WebDriver driver = new ChromeDriver();
driver.get("https://www.saucedemo.com");
driver.findElement(By.id("user-name")).sendKeys("standard_user");
driver.findElement(By.id("password")).sendKeys("secret_sauce");
driver.findElement(By.id("login-button")).click();
driver.quit();
```

</TabItem>
<TabItem value="remote">

```java title="Remote execution"
WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), new ChromeOptions());
driver.get("https://www.saucedemo.com");
driver.findElement(By.id("user-name")).sendKeys("standard_user");
driver.findElement(By.id("password")).sendKeys("secret_sauce");
driver.findElement(By.id("login-button")).click();
driver.quit();
```

</TabItem>
</Tabs>

## Extending Selenium Grid with Sauce

Setting up your own Grid can be simple at the beginning but as usage grows, and more platforms and browsers are needed, you will find yourself in the situation where a bigger infrastructure needs to be supported. Adding macOS and Safari or mobile devices and emulators can be challenging due to the hardware costs and very diverse requirements. Extending Selenium Grid with Sauce Labs is an excellent solution to add capacity and support more use cases.

Selenium Grid has a Relay feature that enables a local Grid to add Sauce Labs as an extra Node. In this way, Grid can enable more coverage to platforms and versions not present locally.

### 1. Create a `toml` Configuration File

A configuration file in [`toml`](https://toml.io/en/) format is needed to setup a Node and relay WebDriver sessions to Sauce Labs. For example, if your local Selenium Grid supports Chrome and Firefox on Linux, and you want to add support for Windows 11 and macOS, and also iOS and Android devices, you can configure those extra capabilities in the `toml` configuration file.

<details>
  <summary>
    <strong>Click here</strong> to see an example <code>toml</code> configuration file.
  </summary>

For example, to support the following configuration settings:

| OS                  | Browser/Device      | Version     | Concurrent sessions |
| ------------------- | ------------------- | ----------- | ------------------- |
| Windows 11          | Chrome              | 104         | 5                   |
| Windows 10          | Firefox             | 103         | 10                  |
| macOS Monterey (12) | Safari              | 15          | 5                   |
| iOS 15.4            | Safari on Simulator | iPhone 13   | 2                   |
| Android 12          | Chrome on Emulator  | Pixel 6 Pro | 2                   |

Here is how the `config.toml` would look like:

```toml
[node]
detect-drivers = false

[relay]
url = "https://ondemand.us-west-1.saucelabs.com:443/wd/hub"
configs = [
  "5", '{"browserName": "chrome", "platformName": "Windows 11", "browserVersion": "104"}',
  "10", '{"browserName": "firefox", "platformName": "Windows 10", "browserVersion": "103"}',
  "5", '{"browserName": "safari", "platformName": "macOS 12", "browserVersion": "15"}',
  "2", '{"browserName": "safari", "platformName": "iOS", "appium:platformVersion": "15.4", "appium:deviceName": "iPhone 13 Simulator"}',
  "2", '{"browserName": "chrome", "platformName": "android", "appium:platformVersion": "12.0", "appium:deviceName": "Google Pixel 6 Pro GoogleAPI Emulator"}'
]
```

:::note Sauce Labs endpoint URL
The example file shows the US West data center. See the different [endpoints](/basics/data-center-endpoints/) if you want to use another region.
:::

</details>

### 2. Add a Node to your Local Grid

Finally, adding a new Node to your local Selenium Grid is possible through the following command:

```bash
java -jar selenium-server-<version>.jar node --config config.toml
```

With that, you will be able to send test requests to your local Grid and when the capabilities match, they will be redirected to Sauce Labs. Extra capabilities in `sauce:options` are also supported to have better readability on the test reports page at Sauce Labs.

### 3. Create a Remote Session Request

The following Java example shows how to create and send a session request to a local Grid with capabilities to match with Safari 15 on macOS Monterey served on Sauce Labs.

:::tip Use Credential Environment Variables
Set your Sauce Labs account credentials as [environment variables](/basics/environment-variables) rather than hard-coding them into all your scripts for efficiency and to protect them from unintended exposure.
:::

```java title="Remote execution using an extended Grid with Sauce Labs"
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("macOS 12");
browserOptions.setBrowserVersion("15");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
browserOptions.setCapability("sauce:options", sauceOptions);
RemoteWebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), browserOptions);
driver.get("https://www.saucedemo.com");
driver.findElement(By.id("user-name")).sendKeys("standard_user");
driver.findElement(By.id("password")).sendKeys("secret_sauce");
driver.findElement(By.id("login-button")).click();
driver.quit();
```

## Moving from Selenium Grid to Sauce

Supporting a new browser version in a local Selenium Grid requires a complete verification of its functionality before running your actual tests with it. In addition, providing features like video recording, logs, and screenshots, comes with the burden of building a custom test results dashboard, which needs provisioning storage for those files plus an automated archiving strategy.

With Sauce Labs, using new browser versions, platforms, or mobile devices, is as easy as setting the desired configuration options in your test.

A single line of code needs to be changed to execute the same test code directly on Sauce Labs. Instead of using `http://localhost:4444` as a URL, a Sauce Labs [endpoint](/basics/data-center-endpoints/) URL should be used in the `RemoteWebDriver`. See the code sample below.

<Tabs
defaultValue="local"
values={[
{label: 'Local Grid', value: 'local'},
{label: 'Sauce Labs', value: 'sauce'},
]}>

<TabItem value="local">

```java title="Local Grid"
RemoteWebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444"), browserOptions);
```

</TabItem>
<TabItem value="sauce">

```java title="Sauce Labs"
RemoteWebDriver driver = new RemoteWebDriver(new URL("https://ondemand.us-west-1.saucelabs.com:443/wd/hub"), browserOptions);
```

</TabItem>
</Tabs>

:::tip
Use our [Platform Configurator](https://saucelabs.com/platform/platform-configurator) to auto-generate test configuration options in the language of your choice to copy and paste into your source code.
:::

## More Information

- [White Paper: Selenium Grid Build vs. Buy](https://saucelabs.com/resources/white-papers/selenium-grid-build-vs-buy)
- [Webinar: Selenium Grid Build vs. Buy](https://www.youtube.com/watch?v=mSxRf-zaa5I)
- [Selenium Grid Documentation](https://www.selenium.dev/documentation/grid/)
