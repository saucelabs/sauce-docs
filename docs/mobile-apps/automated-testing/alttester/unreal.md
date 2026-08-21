---
id: unreal
title: AltTester® for Unreal Engine
sidebar_label: Unreal Engine
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page walks you through running AltTester-driven C# tests against an **Unreal Engine** game on Sauce Labs real devices. For background on what AltTester® is and how it talks to Sauce, see the [AltTester® overview](/mobile-apps/automated-testing/alttester).

There are two ways to connect your tests to the game running on a Sauce real device:

- **Sauce Connect Proxy tunnel (recommended)** — run AltTester® Desktop locally and let the tunnel forward localhost to the device.
- **Public VM** — host AltTester® Desktop on a publicly reachable virtual machine.

This page follows the Sauce Connect path and summarizes the VM alternative at the end.

## Prerequisites

- An active [Sauce Labs](https://saucelabs.com/) account.
- An Unreal Engine project that you can build for Android or iOS.
- **AltTester® Unreal SDK 1.1 or later** — download the AltTester® Plugin from the [AltTester® website](https://alttester.com/downloads/). See the [Get Started guide](https://alttester.com/docs/unreal-sdk/latest/pages/get-started.html) for full instructions.
- **AltTester-Driver 2.3 or later** — .NET NuGet package [`AltTester-Driver`](https://www.nuget.org/packages/AltTester-Driver). The same package is used for Unity and Unreal tests.
- **Appium.WebDriver 8 or later** — .NET NuGet package [`Appium.WebDriver`](https://www.nuget.org/packages/Appium.WebDriver).
- **AltTester® Desktop**, installed locally and listening on its default port `13000`. Can be downloaded from the [AltTester® website](https://alttester.com/downloads/).
- **Sauce Connect Proxy** client installed and available in your `PATH` (the `sc` command). See [Sauce Connect](/secure-connections/sauce-connect-5).

## Instrument Your Unreal Build

1. Download the AltTester® Unreal SDK from the [AltTester® website](https://alttester.com/downloads/)
2. Set up the AltTester® Unreal SDK in your project following the [AltTester® documentation](https://alttester.com/docs/unreal-sdk/latest/pages/get-started.html#set-up-the-alttester-unreal-sdk-in-your-project)
3. Open the project in Unreal Editor. The editor regenerates project files and prompts to rebuild any missing modules — accept the rebuild.
4. In **Edit → Plugins**, confirm the AltTester® plugin is listed and enabled. Restart the editor if prompted.
5. Configure the AltTester® connection settings:
   - **Sauce Connect path (recommended):** keep the default settings — host `127.0.0.1`, port `13000`. The tunnel forwards localhost from the device to your machine.
   - **Public VM path:** enter the VM's reachable IP address instead.
6. In **Project Settings → Platforms**, ensure the appropriate network permissions are configured for your target platform (Android: `INTERNET` permission; iOS: appropriate network entitlement).
7. **Package** the project for your target platform (Android `.apk` or iOS `.ipa`) via **File → Package Project**.
8. Smoke-test the instrumented build locally by launching it on a USB-connected device and connecting AltTester® Desktop. Confirm the widget tree and actors appear in the desktop client.

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

The same `AltTester-Driver` NuGet package is used for Unity and Unreal tests, under the shared `AltTester.AltTesterSDK.Driver` namespace.

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

The following examples show W3C capabilities for an Android and an iOS Unreal Engine game. Replace the placeholder values (`<...>`) with your target device and platform version.

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
capabilities.AddAdditionalAppiumOption("appium:autoGrantPermissions", true);

var sauceOptions = new Dictionary<string, object>
{
    { "username", sauceUsername },
    { "accessKey", sauceAccessKey },
    { "tunnelName", "alttester-tunnel" },
    { "tunnelOwner", sauceUsername },
    { "appiumVersion", "stable" },
    { "name", "AltTester® Unreal sample test" },
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
capabilities.DeviceName = "iPhone 1[5-9].*";
capabilities.PlatformVersion = "18";
capabilities.AutomationName = "XCUITest";

var sauceOptions = new Dictionary<string, object>
{
    { "username", sauceUsername },
    { "accessKey", sauceAccessKey },
    { "tunnelName", "alttester-tunnel" },
    { "tunnelOwner", sauceUsername },
    { "appiumVersion", "stable" },
    { "name", "AltTester® Unreal sample test" },
};
capabilities.AddAdditionalAppiumOption("sauce:options", sauceOptions);

var sauceUrl = new Uri($"https://ondemand.{sauceRegion}.saucelabs.com:443/wd/hub");
// Unreal cold starts can be slow — give the session a generous command timeout.
var driver = new IOSDriver(sauceUrl, capabilities, TimeSpan.FromSeconds(300));
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

:::note Unreal cold starts
Unreal Engine cold starts (shader compilation and asset loading) can take noticeably longer than a typical mobile app launch. If the first connection fails, increase the AltDriver connect timeout — for example `new AltDriver(connectTimeout: 10)` — or wrap the connection in retry logic.
:::

## Sample Test

Unreal tests use the same `AltDriver` API as Unity tests but locate UMG widgets and actors using Unreal-flavored names and class suffixes (for example, `W_*` for widget Blueprints, `*_C` for compiled Blueprint classes). The following sample loads a level, taps a main-menu button, and confirms the next level loaded.

```csharp
using NUnit.Framework;
using AltTester.AltTesterSDK.Driver;

[TestFixture]
public class GameSmokeTest
{
    private AltDriver _altDriver;

    private const string MainMenuLevel = "L_MainMenu";
    private const string GameplayLevel = "L_Gameplay";
    private const string StartButton = "W_StartGameButton";

    [SetUp]
    public void SetUp()
    {
        // Appium session setup elided — see "Configure Appium Capabilities" above.
        _altDriver = new AltDriver();
    }

    [Test]
    public void StartGameAndReachGameplayLevel()
    {
        _altDriver.LoadScene(MainMenuLevel);

        var startButton = _altDriver.WaitForObject(By.NAME, StartButton);
        startButton.Tap();

        _altDriver.WaitForCurrentSceneToBe(GameplayLevel);
    }

    [TearDown]
    public void TearDown()
    {
        _altDriver?.Stop();
    }
}
```

For more complex locator patterns — finding widgets by path, by displayed text, or by Blueprint class — see AltTester®'s [Unreal example tests](https://github.com/alttester/Unreal-LyraStarterGame-Tests) for current syntax.

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
3. Package your Unreal build with the **VM's IP address** as the AltTester® host (instead of the default `127.0.0.1`).
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
- **Slow cold start:** shader compilation and asset loading on first launch can outlast the default AltDriver connect timeout. Increase it (`new AltDriver(connectTimeout: 10)`) or add retry logic around the connection.
- **Port or tunnel mismatch:** the AltTester® host/port configured in your Unreal project must match what your test connects to. With Sauce Connect, both ends use the defaults (`127.0.0.1:13000`).
- **Plugin not loaded:** if `AltDriver` cannot connect, confirm the AltTester® plugin is enabled in **Edit → Plugins** and that the packaged build includes the plugin (some Unreal packaging options strip optional modules — check **Project Settings → Packaging**).
- **Locators not finding widgets:** Unreal UMG widget Blueprints often produce class names with a `_C` suffix at runtime (`W_StartGameButton_C` rather than `W_StartGameButton`). Use `By.PATH` with `contains()` when in doubt, or inspect the live widget tree in AltTester® Desktop to see the exact names.
- **Wrong data center:** the `sauceUrl` and the data center where your account lives must match. Check the upper-right corner of the Sauce Labs dashboard for your account's region.
- **iOS XCUITest behavior differences:** on `appium3-2026-01` and later, the official Appium WebDriverAgent is used. Some endpoints may behave differently than on older images that used SauceWebDriverAgent. See [Appium real-devices](/mobile-apps/automated-testing/appium/real-devices#webdriveragent-for-ios-real-devices) for details.

## References

- [AltTester® Sauce Labs integration guide (Unreal)](https://alttester.com/docs/unreal-sdk/latest/pages/alttester-with-cloud.html#saucelabs) — AltTester's own walkthrough of both connection methods for Unreal.
- [AltTester® for Unreal Engine](https://alttester.com/alttester-unreal/) — AltTester® product page for Unreal.
- [AltTester® documentation](https://alttester.com/docs/) — full SDK and driver reference.
- [Unreal-LyraStarterGame-Tests](https://github.com/alttester/Unreal-LyraStarterGame-Tests) — AltTester®'s public C# test project against the Lyra Starter Game, useful as a copy-from-and-adapt example.
- [Unreal-LyraStarterGame](https://github.com/alttester/Unreal-LyraStarterGame) — the example Unreal project with the AltTester® plugin pre-installed.
- [AltTester-Driver on NuGet](https://www.nuget.org/packages/AltTester-Driver) — current .NET driver versions (works for both engines).
- [Sauce Connect](/secure-connections/sauce-connect-5) — tunnel installation and reference.

## See Also

- [AltTester® overview](/mobile-apps/automated-testing/alttester) — architecture diagram and how the pieces fit together.
- [AltTester® for Unity](/mobile-apps/automated-testing/alttester/unity) — the parallel walkthrough for Unity builds.
