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

In order to make use of the CDP / BiDi functionality, you have three possibilities:

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
// Add selenium example
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
// Add selenium example
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

### 3. Using Playwright (WebSocket)

Using Playwright via WebSocket, you need to use the respective URL:
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
// Add Playwright example
```

</TabItem>
<TabItem value="Python">


```py
ws_url = f"wss://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@ws.us-west-1.saucelabs.com:443/cdp"
# Alternatively use EU datacenter
# ws_url = f"wss://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@ws.eu-central-1.saucelabs.com:443/cdp"

async with async_playwright() as playwright:
    browser = await playwright.chromium.connect_over_cdp(ws_url)
```

</TabItem>
<TabItem value="WebdriverIO">

```javascript
// Add Playwright example
```

</TabItem>
</Tabs>


#### Capabilities

Currently only below listed capabilities are available when using Playwright via WebSocket:
- `os`
- `osVersion`
- `browser`
- `browserVersion`

They need to be provided as json string to the `caps` parameter using the `/cdp` endpoint:
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
// Add Playwright example
```

</TabItem>
<TabItem value="Python">


```py
ws_base_url = f"wss://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@ws.us-west-1.saucelabs.com:443/cdp"
# Alternatively use EU datacenter
# ws_base_url = f"wss://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@ws.eu-central-1.saucelabs.com:443/cdp"
caps_dict = {'os': 'Windows',
             'osVersion': '10',
             'browser': 'Chrome',
             'browserVersion': '119'}
ws_url = f"{ws_base_url}?caps={urllib.parse.quote_plus(json.dumps(caps_dict))}"

async with async_playwright() as playwright:
    browser = await playwright.chromium.connect_over_cdp(ws_url)
```

</TabItem>
<TabItem value="WebdriverIO">

```javascript
// Add Playwright example
```

</TabItem>
</Tabs>

## Limitations

- CDP / BiDi Sessions are currently limited to 10mins
- Extended debugging cannot be used along CDP / BiDi

## Resources

- [WebDriver BiDi Protocol](https://w3c.github.io/webdriver-bidi/): Documentation of the BiDirectional WebDriver Protocol
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/): Documentation of the Chrome DevTools Protocol
- [Selenium Chrome DevTools](https://www.selenium.dev/documentation/webdriver/bidirectional/chrome_devtools/): Selenium CDP Usage Documentation
- [Playwright CDPSession](https://playwright.dev/docs/api/class-cdpsession): Playwright CDP Usage Documentation
