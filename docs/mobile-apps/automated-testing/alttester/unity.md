---
id: unity
title: AltTester® for Unity
sidebar_label: Unity
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page walks you through running AltTester-driven C# tests against a **Unity** game on Sauce Labs real devices. For background on what AltTester® is and how it talks to Sauce, see the [AltTester® overview](/mobile-apps/automated-testing/alttester).

There are two ways to connect your tests to the game running on a Sauce real device:

- **Sauce Connect Proxy tunnel (recommended)** — run AltTester® Desktop locally and let the tunnel forward localhost to the device.
- **Public VM** — host AltTester® Desktop on a publicly reachable virtual machine.

This page follows the Sauce Connect path and summarizes the VM alternative at the end.

## Prerequisites

- An active [Sauce Labs](https://saucelabs.com/) account.
- A Unity project (Unity 2021 LTS or later recommended; check the [AltTester® SDK documentation](https://alttester.com/docs/sdk/latest/home.html) for the exact supported range).
- **AltTester® Unity SDK 2.3 or later** — download the `.unitypackage` from the [AltTester® website](https://alttester.com/downloads/), or install via OpenUPM (https://openupm.com/packages/com.alttester.sdk/). See the [Get Started guide](https://alttester.com/docs/sdk/latest/pages/get-started.html) for full instructions.
- **AltTester-Driver 2.3 or later** — .NET NuGet package [`AltTester-Driver`](https://www.nuget.org/packages/AltTester-Driver).
- **Appium.WebDriver 8 or later** — .NET NuGet package [`Appium.WebDriver`](https://www.nuget.org/packages/Appium.WebDriver).
- **AltTester® Desktop**, installed locally and listening on its default port `13000`. Can be downloaded from the [AltTester® website](https://alttester.com/downloads/).
- **Sauce Connect Proxy** client installed and available in your `PATH` (the `sc` command). See [Sauce Connect](/secure-connections/sauce-connect-5).

## Instrument Your Unity Build

1. Import the AltTester® Unity SDK into your Unity project by simply drag and drop the `.unitypackage`. Alternatively, install via OpenUPM (https://openupm.com/packages/com.alttester.sdk/). See the [Import AltTester® package in Unity Editor](https://alttester.com/docs/sdk/latest/pages/get-started.html#import-alttester-package-in-unity-editor) guide for full instructions.
2. Open the **AltTester® Editor** window (top menu: `AltTester®` → `AltTester® Editor`).
3. Configure the connection settings:
   - **Sauce Connect path (recommended):** keep the default settings — host `127.0.0.1`, port `13000`. The tunnel forwards localhost from the device to your machine.
   - **Public VM path:** enter the VM's reachable IP address instead.
4. In **Player Settings**, ensure the **Internet Access** permission is enabled (Android) or the appropriate network entitlement is set (iOS).
5. Build the player for your target platform (Android `.apk` or iOS `.ipa`).
6. Smoke-test the instrumented build locally by launching it on a USB-connected device or simulator and connecting AltTester® Desktop. Confirm the scene graph appears in the desktop client.

## Upload the Build to Sauce Labs

Upload your instrumented `.apk` or `.ipa` to Sauce Labs App Storage. See [App Storage](/mobile-apps/app-storage) for the upload UI and API options. Note the **filename** — you'll reference it in capabilities as `storage:filename=<your-build.apk>`.

## Set Up Your C# Test Project

In an empty .NET project:

```bash
dotnet new nunit -n MyGameTests
cd MyGameTests
dotnet add package AltTester-Driver
dotnet add package Appium.WebDriver
```

Confirm the installed versions match (or exceed) the floors listed in [Prerequisites](#prerequisites).

## Set Environment Variables

Keep credentials out of your test code:

```bash
export SAUCE_USERNAME="<your-username>"
export SAUCE_ACCESS_KEY="<your-access-key>"
export SAUCE_APP_URL="storage:filename=<your-game.apk>"
export SAUCE_REGION="eu-central-1"
```

For other data centers, set `SAUCE_REGION` to `us-west-1` or `us-east-4`.

## Start the Sauce Connect Tunnel

Start AltTester® Desktop locally, then launch the tunnel:

```bash
sc run --username $SAUCE_USERNAME --access-key $SAUCE_ACCESS_KEY \
  --region $SAUCE_REGION --tunnel-name alttester-tunnel \
  --proxy-localhost allow
```

:::caution `--proxy-localhost allow` is required
Without this flag, the cloud device cannot reach the AltTester® Server running on your machine, and the `AltDriver` connection will time out even though the Appium session starts normally.
:::

## Configure Appium Capabilities

The following examples show W3C capabilities for an Android Unity game and an iOS Unity game. Replace the placeholder values (`<...>`) with your target device and platform version.

<Tabs
  groupId="platform"
  defaultValue="android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>

<TabItem value="android">

```csharp
var sauceUsername = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
var sauceAccessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");
var sauceRegion = Environment.GetEnvironmentVariable("SAUCE_REGION");

var capabilities = new AppiumOptions();
capabilities.PlatformName = "Android";
capabilities.App = Environment.GetEnvironmentVariable("SAUCE_APP_URL");
capabilities.DeviceName = "Google Pixel.*";
capabilities.AutomationName = "UiAutomator2";

var sauceOptions = new Dictionary<string, object>
{
    { "username", sauceUsername },
    { "accessKey", sauceAccessKey },
    { "tunnelName", "alttester-tunnel" },
    { "tunnelOwner", sauceUsername },
    { "appiumVersion", "stable" },
    { "name", "AltTester® Unity sample test" },
};
capabilities.AddAdditionalAppiumOption("sauce:options", sauceOptions);

var sauceUrl = new Uri($"https://ondemand.{sauceRegion}.saucelabs.com:443/wd/hub");
var driver = new AndroidDriver(sauceUrl, capabilities);
```

</TabItem>
<TabItem value="ios">

```csharp
var sauceUsername = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
var sauceAccessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");
var sauceRegion = Environment.GetEnvironmentVariable("SAUCE_REGION");

var capabilities = new AppiumOptions();
capabilities.PlatformName = "iOS";
capabilities.App = Environment.GetEnvironmentVariable("SAUCE_APP_URL");
capabilities.DeviceName = "iPhone.*";
capabilities.PlatformVersion = "18";
capabilities.AutomationName = "XCUITest";

var sauceOptions = new Dictionary<string, object>
{
    { "username", sauceUsername },
    { "accessKey", sauceAccessKey },
    { "tunnelName", "alttester-tunnel" },
    { "tunnelOwner", sauceUsername },
    { "appiumVersion", "stable" },
    { "name", "AltTester® Unity sample test" },
};
capabilities.AddAdditionalAppiumOption("sauce:options", sauceOptions);

var sauceUrl = new Uri($"https://ondemand.{sauceRegion}.saucelabs.com:443/wd/hub");
var driver = new IOSDriver(sauceUrl, capabilities);
```

</TabItem>
</Tabs>

:::note iOS WebDriverAgent change
Starting with `appium3-2026-01`, iOS sessions on Sauce Labs real devices use the official Appium WebDriverAgent instead of the Sauce Labs fork (SauceWebDriverAgent). Setting `sauce:options.appiumVersion` to `stable` will pick up this image once it becomes the default. Some XCUITest endpoints may behave differently — see [Appium Testing with Real Devices](/mobile-apps/automated-testing/appium/real-devices) for details.
:::

## Connect the AltTester® Driver

After the Appium session starts and the game has launched, connect the AltTester® C# driver. Because the Sauce Connect tunnel forwards localhost, the driver connects with its **default host and port** — no custom IP needed:

```csharp
using AltTester.AltTesterSDK.Driver;

// After driver = new AndroidDriver(...) or new IOSDriver(...)
// and after waiting for the game's initial loading screen to finish:
var altDriver = new AltDriver();
```

## Sample Test

```csharp
using NUnit.Framework;
using AltTester.AltTesterSDK.Driver;

[TestFixture]
public class GameSmokeTest
{
    private AltDriver _altDriver;

    [SetUp]
    public void SetUp()
    {
        // Appium session setup elided — see "Configure Appium Capabilities" above.
        _altDriver = new AltDriver();
    }

    [Test]
    public void StartGameAndReachMainMenu()
    {
        var playButton = _altDriver.WaitForObject(By.NAME, "PlayButton");
        playButton.Tap();

        var mainMenu = _altDriver.WaitForObject(By.NAME, "MainMenuRoot");
        Assert.IsNotNull(mainMenu);
    }

    [TearDown]
    public void TearDown()
    {
        _altDriver?.Stop();
    }
}
```

## Run It

With AltTester® Desktop running locally and the tunnel active:

```bash
dotnet test
```

## View Results

Open the [Sauce Labs dashboard](https://app.saucelabs.com/) and find your job under **Automated → Test Results**. Each job has a session video, Appium logs, device logs, and screenshots — use these to debug failures the same way you would for any Appium test.

## Alternative: Public VM

If you can't run Sauce Connect, host AltTester® Desktop on a publicly reachable VM instead:

1. Create a VM (Windows recommended) and install AltTester® Desktop on it, listening on port `13000`.
2. Add an inbound network rule: protocol TCP, port `13000`, source Any. Make sure the OS firewall does not block the port.
3. Instrument your Unity build with the **VM's IP address** as the AltTester® host (instead of the default `127.0.0.1`).
4. In your tests, connect `AltDriver` to the same IP:

   ```csharp
   var altDriver = new AltDriver(
       host: Environment.GetEnvironmentVariable("HOST_ALT_SERVER"),
       connectTimeout: 3000
   );
   ```

5. On iOS, the game may show a popup asking for permission to connect to devices on the local network. Dismiss it via Appium before connecting the AltDriver:

   ```csharp
   driver.FindElement(OpenQA.Selenium.By.Id("Allow")).Click();
   ```

6. If your test suite is long-running, issue a lightweight Appium call in your teardown (for example, reading the device orientation) so the Appium session doesn't idle out between tests.

## Troubleshooting

- **Tunnel missing `--proxy-localhost allow`:** the most common failure. The Appium session starts and the game launches, but `AltDriver` times out — restart the tunnel with the flag included.
- **Port or tunnel mismatch:** the AltTester® host/port configured in the Unity Editor window must match what your test connects to. With Sauce Connect, both ends use the defaults (`127.0.0.1:13000`).
- **SDK version mismatch:** the AltTester® Unity SDK version in the build and the AltTester-Driver NuGet version in your test project must be compatible — keep both on the same minor version (for example, 2.3.x).
- **Build not instrumented:** if `AltDriver` cannot connect, confirm the AltTester® GameObject was added to a scene loaded at app start, and that the build was made with the AltTester® package present.
- **Wrong data center:** the `sauceUrl` and the data center where your account lives must match. Check the upper-right corner of the Sauce Labs dashboard for your account's region.
- **iOS XCUITest behavior differences:** on `appium3-2026-01` and later, the official Appium WebDriverAgent is used. Some endpoints — for example `getWindowRect` — may behave differently than on older images that used SauceWebDriverAgent. If you see new failures after switching Appium images, check the [Appium real-devices page](/mobile-apps/automated-testing/appium/real-devices#webdriveragent-for-ios-real-devices) for details.

## See Also

- [AltTester® Sauce Labs integration guide](https://alttester.com/docs/sdk/latest/pages/alttester-with-cloud.html#saucelabs) — AltTester's own walkthrough of both connection methods for Unity.
- [Sauce Connect](/secure-connections/sauce-connect-5) — tunnel installation and reference.
- [AltTester® overview](/mobile-apps/automated-testing/alttester) — architecture diagram and how the pieces fit together.
- [AltTester® for Unreal Engine](/mobile-apps/automated-testing/alttester/unreal) — the parallel walkthrough for Unreal builds.
