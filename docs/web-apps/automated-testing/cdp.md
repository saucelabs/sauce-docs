---
id: cdp-bidi
title: CDP / BiDi on Sauce Labs
sidebar_label: Using CDP / BiDi
description: An introduction to CDP / BiDi usage within Sauce Labs
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Chrome DevTools Protocol (CDP) support allows developers to debug web apps running on chromium browsers (such as Google Chrome or Microsoft Edge) by harnessing the power of "DevTools" functionality that is built in those browsers.

Sauce Labs offers you to use this feature using either the CDP API or BiDi (BiDirectional) API in combination with Selenium or Playwright as testing frameworks.

:::note
Selenium has stated in their reference that they will eventually move away from CDP, hence they suggest using the agnostic BiDi API, which abstracts away the implementation details of CDP.
:::

## What You’ll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username](https://app.saucelabs.com/user-settings).
- A working development environment for one of the supported languages: Java, Python, or JavaScript (Node.js).

## Enabling CDP / BiDi

In order to make use of the CDP / BiDi functionality, you have two possibilities:

### 1. Using Selenium

If you're using Selenium, you can enable CDP / BiDi by setting the `webSocketUrl` capability to `true` (recommended) OR `devTools` parameter in `sauce:options`  to `true` (alternative)
<Tabs
groupId="lang-ex"
defaultValue="Python (recommended)"
values={[
{label: 'Java (recommended)', value: 'Java (recommended)'},
{label: 'Java (alternative)', value: 'Java (alternative)'},
{label: 'Python (recommended)', value: 'Python (recommended)'},
{label: 'Python (alternative)', value: 'Python (alternative)'},
{label: 'WebdriverIO v8 and previous', value: 'WebdriverIO v8 and previous'},
{label: 'WebdriverIO v9+', value: 'WebdriverIO v9+'},
]}>

<TabItem value="Java (recommended)">

```java
public class SauceLabsTest {

    public static void main(String[] args) {

        ChromeOptions options = new ChromeOptions();
        options.setBrowserVersion("latest");
        options.setPlatformName("Windows 10");

        HashMap<String, Object> sauceOptions = new HashMap<>();
        sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
        sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
        sauceOptions.put("name", "My Selenium CDP Test");

        options.setCapability("sauce:options", sauceOptions);
        options.setCapability("webSocketUrl", true); // Recommended way of enabling CDP

        String sauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
        // Alternatively use EU datacenter
        // String sauceUrl = "https://ondemand.eu-central-1.saucelabs.com/wd/hub";

        WebDriver driver = new RemoteWebDriver(new URL(sauceUrl), options);

        driver.quit();
    }
}
```

</TabItem>
<TabItem value="Java (alternative)">

```java
public class SauceLabsTest {

    public static void main(String[] args) {

        ChromeOptions options = new ChromeOptions();
        options.setBrowserVersion("latest");
        options.setPlatformName("Windows 10");

        HashMap<String, Object> sauceOptions = new HashMap<>();
        sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
        sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
        sauceOptions.put("devTools", true); // Alternative way of enabling CDP
        sauceOptions.put("name", "My Selenium CDP Test");

        options.setCapability("sauce:options", sauceOptions);
        
        String sauceUrl = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
        // Alternatively use EU datacenter
        // String sauceUrl = "https://ondemand.eu-central-1.saucelabs.com/wd/hub";

        WebDriver driver = new RemoteWebDriver(new URL(sauceUrl), options);

        driver.quit();
    }
}
```

</TabItem>
<TabItem value="Python (recommended)">

```py
options = ChromeOptions()
options.browser_version = 'latest'
options.platform_name = 'Windows 10'

sauce_options = {'username': os.environ["SAUCE_USERNAME"],
                 'accessKey': os.environ["SAUCE_ACCESS_KEY"],
                 'name': 'My Selenium CDP Test'}

options.set_capability('sauce:options', sauce_options)
options.set_capability('webSocketUrl', True) # Recommended way of enabling CDP
sauce_url = "https://ondemand.us-west-1.saucelabs.com/wd/hub"
# Alternatively use EU datacenter
# sauce_url = "https://ondemand.eu-central-1.saucelabs.com/wd/hub"

driver = webdriver.Remote(command_executor=sauce_url, options=options)
```

</TabItem>
<TabItem value="Python (alternative)">


```py
options = ChromeOptions()
options.browser_version = 'latest'
options.platform_name = 'Windows 10'

sauce_options = {'username': os.environ["SAUCE_USERNAME"],
                 'accessKey': os.environ["SAUCE_ACCESS_KEY"],
                 'devTools': True, # Alternative way of enabling CDP
                 'name': 'My Selenium CDP Test'}

options.set_capability('sauce:options', sauce_options)
sauce_url = "https://ondemand.us-west-1.saucelabs.com/wd/hub"
# Alternatively use EU datacenter
# sauce_url = "https://ondemand.eu-central-1.saucelabs.com/wd/hub"

driver = webdriver.Remote(command_executor=sauce_url, options=options)
```

</TabItem>
<TabItem value="WebdriverIO v8 and previous">

```javascript
const { ChromeOptions } = require('selenium-webdriver');
const { Builder, By, Key } = require('selenium-webdriver');

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;

const options = new ChromeOptions();
options.browser_version = 'latest';
options.platform_name = 'Windows 10';

const sauce_options = {
  'username': SAUCE_USERNAME,
  'accessKey': SAUCE_ACCESS_KEY,
  'name': 'My Selenium CDP Test'
};

options.set_capability('sauce:options', sauce_options);
options.set_capability('webSocketUrl', true); // Recommended way of enabling CDP

const sauce_url = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
// Alternatively use EU datacenter
// const sauce_url = "https://ondemand.eu-central-1.saucelabs.com/wd/hub";

(async () => {
  try {
    const driver = await new Builder().forBrowser('chrome').remote(sauce_url, options).build();

    await driver.get('https://www.example.com'); // Replace with your test URL

    const element = await driver.findElement(By.id('search-box'));
    await element.sendKeys('Selenium Test');
    await element.sendKeys(Key.ENTER);

    await driver.quit();
  } catch (error) {
    console.error(error);
  }
})();
```

</TabItem>
<TabItem value="WebdriverIO v9+">

```javascript
const { ChromeOptions } = require('selenium-webdriver');
const { Builder, By, Key } = require('selenium-webdriver');

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;

const options = new ChromeOptions();
options.browser_version = 'latest';
options.platform_name = 'Windows 10';

const sauce_options = {
  'username': SAUCE_USERNAME,
  'accessKey': SAUCE_ACCESS_KEY,
  'name': 'My Selenium CDP Test'
};

options.set_capability('sauce:options', sauce_options);

// WDIO v9 automatically sets `webSocketUrl: True` capability, https://webdriver.io/blog/2024/08/15/webdriverio-v9-release/#new-features

const sauce_url = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
// Alternatively use EU datacenter
// const sauce_url = "https://ondemand.eu-central-1.saucelabs.com/wd/hub";

(async () => {
  try {
    const driver = await new Builder().forBrowser('chrome').remote(sauce_url, options).build();

    await driver.get('https://www.example.com'); // Replace with your test URL

    const element = await driver.findElement(By.id('search-box'));
    await element.sendKeys('Selenium Test');
    await element.sendKeys(Key.ENTER);

    await driver.quit();
  } catch (error) {
    console.error(error);
  }
})();
```

</TabItem>
</Tabs>


### 2. Using Playwright (Selenium Grid)

Using Playwright in conjunction with Selenium Grid, you need to provide the Selenium Remote URL and the capabilities as environment variables:

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```
SELENIUM_REMOTE_URL="https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@ondemand.us-west-1.saucelabs.com:443/wd/hub"
SELENIUM_REMOTE_CAPABILITIES='{"browserName": "chrome", "sauce:options": {"devTools": "true", "name": "My Playwright Selenium Grid CDP Test"}}'
```

</TabItem>
<TabItem value="eu">

```
SELENIUM_REMOTE_URL="https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub"
SELENIUM_REMOTE_CAPABILITIES='{"browserName": "chrome", "sauce:options": {"devTools": "true", "name": "My Playwright Selenium Grid CDP Test"}}'
```

</TabItem>
</Tabs>

For more information, please refer to the [Playwright Selenium Grid documentation](https://playwright.dev/docs/selenium-grid)


## Limitations

- CDP / BiDi Sessions require Selenium 4+
- CDP / BiDi Sessions are currently limited to 10mins
- Extended debugging cannot be used along CDP / BiDi
- CDP /BiDi is NOT available on legacy OS versions
  - MacOS Sierra (10.12)
  - MacOS El Capitan (10.11)
  - MacOS Yosemite (10.10)

## Troubleshooting

### WebDriver instance must support BiDi protocol

If you encounter `java.lang.IllegalArgumentException: WebDriver instance must support BiDi protocol` error it might mean that you need to add:
```java
driver = new Augmenter().augment(driver);
```
to you test code.

## Resources

- [WebDriver BiDi Protocol](https://w3c.github.io/webdriver-bidi/): Documentation of the BiDirectional WebDriver Protocol
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/): Documentation of the Chrome DevTools Protocol
- [Selenium Chrome DevTools](https://www.selenium.dev/documentation/webdriver/bidi/cdp/): Selenium CDP Usage Documentation
- [Playwright CDPSession](https://playwright.dev/docs/api/class-cdpsession): Playwright CDP Usage Documentation
