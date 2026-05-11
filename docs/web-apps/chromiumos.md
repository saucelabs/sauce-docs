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
- sauce-connect
- screen-resolution
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
- (Optional) [Sauce Connect 5](/secure-connections/sauce-connect-5/) installed and a
  tunnel started, if you need to test applications behind a firewall or on a staging
  environment

## How ChromiumOS Relates to ChromeOS

ChromiumOS is the open-source foundation of Google's ChromeOS. The two share the same
browser engine and web platform behavior. ChromeOS adds Google-proprietary features like
the Play Store and Google Assistant — none of which affect web application testing. For
web testing purposes, ChromiumOS provides functionally equivalent coverage to ChromeOS.

## How to Run Tests on ChromiumOS

### Live Testing

You can run interactive manual testing sessions on ChromiumOS virtual machines through the
Sauce Labs Live Testing interface.

1. Navigate to **Live Testing** > **Cross Browser** in Sauce Labs.
2. Select **Chrome 144** or **146** from the browser version dropdown. These are the only two versions
   supported during the beta.
3. In the **OS Version** selector, choose **ChromiumOS**.
4. Click **Start Test Session** to launch the virtual machine.

:::note Scrolling in Live Testing
ChromiumOS live testing sessions use touch-based scrolling. To scroll the page, click and
drag inside the browser viewport — standard mouse wheel or trackpad scrolling is not
supported.
:::

### Automated Tests

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

No additional flags or special capabilities are required to launch a session — set the
platform to `ChromiumOS` and use the standard Chrome browser and Sauce options.

### Configuring Screen Resolution

ChromiumOS virtual machines support multiple screen resolutions. If you don't set a
`screenResolution` capability, sessions launch at the default resolution of `1920x1080`.

To request a specific resolution, set `screenResolution` inside `sauce:options`:

| Resolution | Aspect Ratio | Notes |
|---|---|---|
| `1280x720` | 16:9 | HD — smallest supported size |
| `1366x768` | 16:9 | common Chromebook native resolution |
| `1536x864` | 16:9 | |
| `1600x900` | 16:9 | |
| `1920x1080` | 16:9 | Full HD |
| `2880x1620` | 16:9 | QHD+ — largest supported size |

<Tabs groupId="lang-ex">
  <TabItem value="java" label="Java" default>

```java title="Setting screenResolution"
sauceOptions.put("screenResolution", "1920x1080");
options.setCapability("sauce:options", sauceOptions);
```

  </TabItem>
  <TabItem value="js" label="Node.js">

```javascript title="Setting screenResolution"
'sauce:options': {
  // ...other sauce:options,
  screenResolution: '1920x1080'
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python title="Setting screenResolution"
sauce_options["screenResolution"] = "1920x1080"
options.set_capability("sauce:options", sauce_options)
```

  </TabItem>
  <TabItem value="ruby" label="Ruby">

```ruby title="Setting screenResolution"
'sauce:options': {
  # ...other sauce:options,
  screenResolution: '1920x1080'
}
```

  </TabItem>
  <TabItem value="csharp" label="C#">

```csharp title="Setting screenResolution"
sauceOptions.Add("screenResolution", "1920x1080");
```

  </TabItem>
</Tabs>

:::caution Unsupported Resolutions
Requesting a `screenResolution` value outside the supported list will cause your session
to fail to start. Always pick a value from the table above.
:::

### Using Sauce Connect Tunnels

ChromiumOS testing supports [Sauce Connect 5](/secure-connections/sauce-connect-5/)
tunnels for reaching applications behind a corporate firewall or hosted on a staging
environment. Start a tunnel using the Sauce Connect 5 client, then route your test traffic
through it by setting the `tunnelName` capability under `sauce:options`. If you're using
a tunnel owned by another user in your organization, also set `tunnelOwner`.

| Capability | Type | Description |
|---|---|---|
| `tunnelName` | string | The name of the running Sauce Connect 5 tunnel. |
| `tunnelOwner` | string | The Sauce Labs username of the tunnel owner. Required only when the tunnel is owned by another user. |

<Tabs groupId="lang-ex">
  <TabItem value="java" label="Java" default>

```java title="Routing Through a Tunnel"
sauceOptions.put("tunnelName", "<your-tunnel-name>");
// Required only for shared tunnels owned by another user:
sauceOptions.put("tunnelOwner", "<tunnel-owner-username>");
options.setCapability("sauce:options", sauceOptions);
```

  </TabItem>
  <TabItem value="js" label="Node.js">

```javascript title="Routing Through a Tunnel"
'sauce:options': {
  // ...other sauce:options,
  tunnelName: '<your-tunnel-name>',
  // tunnelOwner only needed for shared tunnels:
  tunnelOwner: '<tunnel-owner-username>'
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python title="Routing Through a Tunnel"
sauce_options["tunnelName"] = "<your-tunnel-name>"
# Required only for shared tunnels owned by another user:
sauce_options["tunnelOwner"] = "<tunnel-owner-username>"
options.set_capability("sauce:options", sauce_options)
```

  </TabItem>
  <TabItem value="ruby" label="Ruby">

```ruby title="Routing Through a Tunnel"
'sauce:options': {
  # ...other sauce:options,
  tunnelName: '<your-tunnel-name>',
  # tunnelOwner only needed for shared tunnels:
  tunnelOwner: '<tunnel-owner-username>'
}
```

  </TabItem>
  <TabItem value="csharp" label="C#">

```csharp title="Routing Through a Tunnel"
sauceOptions.Add("tunnelName", "<your-tunnel-name>");
// Required only for shared tunnels owned by another user:
sauceOptions.Add("tunnelOwner", "<tunnel-owner-username>");
```

  </TabItem>
</Tabs>

:::note Sauce Connect Version
ChromiumOS supports **Sauce Connect 5 only**. Earlier Sauce Connect versions are not
compatible with ChromiumOS sessions. If you're upgrading, see the
[Sauce Connect 5 migration guide](/secure-connections/sauce-connect-5/migrating/).
:::

## Limitations

This feature is in **Beta**. The following constraints apply during the beta period:

- **Limited Chrome versions** — Only Chrome 144 and 146 is supported. Additional versions will be
  added through general availability, including monthly releases alongside Chrome browser updates.

## Known Issues

| Area | Description | Status |
|---|---|---|
| Screen Recordings | Screen recordings for ChromiumOS tests may occasionally display flickering or visual artifacts during playback. | Investigating |