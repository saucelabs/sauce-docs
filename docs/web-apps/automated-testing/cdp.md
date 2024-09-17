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

If you're using Selenium, you can enable CDP / BiDi by setting the `devTools` parameter in `sauce:options` to `true`.
<Tabs
groupId="lang-ex"
defaultValue="Python"
values={[
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'WebdriverIO', value: 'WebdriverIO'},
]}>

<TabItem value="Java">

```java
public class SauceLabsTest {

    public static void main(String[] args) {

        ChromeOptions options = new ChromeOptions();
        options.setBrowserVersion("latest");
        options.setPlatformName("Windows 10");

        HashMap<String, Object> sauceOptions = new HashMap<>();
        sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
        sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
        sauceOptions.put("devTools", true);
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
<TabItem value="Python">


```py
options = ChromeOptions()
options.browser_version = 'latest'
options.platform_name = 'Windows 10'

sauce_options = {'username': os.environ["SAUCE_USERNAME"],
                 'accessKey': os.environ["SAUCE_ACCESS_KEY"],
                 'devTools': True,
                 'name': 'My Selenium CDP Test'}

options.set_capability('sauce:options', sauce_options)
sauce_url = "https://ondemand.us-west-1.saucelabs.com/wd/hub"
# Alternatively use EU datacenter
# sauce_url = "https://ondemand.eu-central-1.saucelabs.com/wd/hub"

driver = webdriver.Remote(command_executor=sauce_url, options=options)
```

</TabItem>
<TabItem value="WebdriverIO">

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
  'devTools': true,
  'name': 'My Selenium CDP Test'
};

options.set_capability('sauce:options', sauce_options);

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

- CDP / BiDi Sessions are currently limited to 10mins
- Extended debugging cannot be used along CDP / BiDi

## Resources

- [WebDriver BiDi Protocol](https://w3c.github.io/webdriver-bidi/): Documentation of the BiDirectional WebDriver Protocol
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/): Documentation of the Chrome DevTools Protocol
- [Selenium Chrome DevTools](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/): Selenium CDP Usage Documentation
- [Playwright CDPSession](https://playwright.dev/docs/api/class-cdpsession): Playwright CDP Usage Documentation
