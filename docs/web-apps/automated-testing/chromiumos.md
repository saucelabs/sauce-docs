---
id: chromiumos
title: ChromiumOS Testing on Sauce Labs
sidebar_label: ChromiumOS Testing
description: Run automated Selenium and WebDriver tests on ChromiumOS virtual machines
  in the Sauce Labs cloud.
keywords:
- chromiumos
- chromeos
- chromium
- virtual-device
- web-testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceGreen">Beta</span></p>

Sauce Labs supports automated web testing on ChromiumOS virtual machines. ChromiumOS is the
open-source platform behind Google's ChromeOS — it shares the same Chromium browser engine,
rendering pipeline, and web platform APIs. You can validate your web applications against
the same browser behavior that real ChromeOS users experience, directly from the Sauce Labs
cloud.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/)
  or [sign up for a free trial](https://saucelabs.com/sign-up))
- Your Sauce Labs `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`
  ([find them in User Settings](https://app.saucelabs.com/user-settings))
- A Selenium or WebDriver test framework configured to run against a remote endpoint

## How ChromiumOS Relates to ChromeOS

ChromiumOS is the open-source foundation of Google's ChromeOS. The two share the same
browser engine and web platform behavior. ChromeOS adds Google-proprietary features like
the Play Store and Google Assistant — none of which affect web application testing. For
web testing purposes, ChromiumOS provides functionally equivalent coverage to ChromeOS.

## How to Run Tests on ChromiumOS

Set the following capabilities in your test configuration to target a ChromiumOS virtual
machine on Sauce Labs.

| Capability | Value |
|---|---|
| `platformName` | `ChromiumOS` |
| `browserName` | `googlechrome` |
| `browserVersion` | `144` |

<Tabs groupId="lang-ex">
  <TabItem value="java" label="Java" default>

```java title="ChromiumOS Test Configuration"
ChromeOptions options = new ChromeOptions();
options.setPlatformName("ChromiumOS");
options.setBrowserVersion("144");

Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.put("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
sauceOptions.put("name", "<your test name>");
options.setCapability("sauce:options", sauceOptions);

WebDriver driver = new RemoteWebDriver(
    new URL("https://ondemand.us-west-1.saucelabs.com:443/wd/hub"),
    options
);
```

  </TabItem>
  <TabItem value="python" label="Python">

```python title="ChromiumOS Test Configuration"
from selenium.webdriver.chrome.options import Options as ChromeOptions

options = ChromeOptions()
options.platform_name = "ChromiumOS"
options.browser_version = "144"

sauce_options = {
    "username": os.environ["SAUCE_USERNAME"],
    "accessKey": os.environ["SAUCE_ACCESS_KEY"],
    "name": "<your test name>"
}
options.set_capability("sauce:options", sauce_options)

driver = webdriver.Remote(
    command_executor="https://ondemand.us-west-1.saucelabs.com:443/wd/hub",
    options=options
)
```

  </TabItem>
  <TabItem value="js" label="Node.js">

```javascript title="ChromiumOS Test Configuration"
const capabilities = {
  platformName: 'ChromiumOS',
  browserName: 'googlechrome',
  browserVersion: '144',
  'sauce:options': {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    name: '<your test name>'
  }
};

const driver = await new Builder()
  .usingServer('https://ondemand.us-west-1.saucelabs.com:443/wd/hub')
  .withCapabilities(capabilities)
  .build();
```

  </TabItem>
  <TabItem value="ruby" label="Ruby">

```ruby title="ChromiumOS Test Configuration"
options = Selenium::WebDriver::Options.chrome(
  platform_name: 'ChromiumOS',
  browser_version: '144',
  'sauce:options': {
    username: ENV['SAUCE_USERNAME'],
    access_key: ENV['SAUCE_ACCESS_KEY'],
    name: '<your test name>'
  }
)

driver = Selenium::WebDriver.for(
  :remote,
  url: 'https://ondemand.us-west-1.saucelabs.com:443/wd/hub',
  options: options
)
```

  </TabItem>
  <TabItem value="csharp" label="C#">

```csharp title="ChromiumOS Test Configuration"
var options = new ChromeOptions();
options.PlatformName = "ChromiumOS";
options.BrowserVersion = "144";
options.AddAdditionalOption("sauce:options", new Dictionary<string, object>
{
    { "username", Environment.GetEnvironmentVariable("SAUCE_USERNAME") },
    { "accessKey", Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY") },
    { "name", "<your test name>" }
});

var driver = new RemoteWebDriver(
    new Uri("https://ondemand.us-west-1.saucelabs.com:443/wd/hub"),
    options
);
```

  </TabItem>
</Tabs>

No additional flags or special capabilities are required — set the platform to `ChromiumOS`
and use the standard Chrome browser and Sauce options.

:::caution Screen Resolution
If you specify a custom `screenResolution` in your test configuration, set it to
`1280x800` to ensure your tests start correctly. Additional resolutions will be available
soon.
:::

## Limitations

This feature is in **Beta — Early Preview**. The following capabilities are not yet
available but are planned for delivery ahead of general availability in Q2 2026:

- **Additional screen resolutions** — More display size options to match a wider range
  of user environments.
- **Live Testing** — Interactive manual testing sessions on ChromiumOS virtual machines
  through the Sauce Labs Live Testing interface.
- **Sauce Connect support** — Tunnel connectivity for testing applications behind
  firewalls or on staging environments.

## Known Issues

| Area | Description | Status |
|---|---|---|
| Screen Recordings | Screen recordings for ChromiumOS tests may occasionally display flickering or visual artifacts during playback. | Investigating |