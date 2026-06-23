---
id: unreal
title: AltTester for Unreal Engine
sidebar_label: Unreal Engine
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page walks you through running AltTester-driven C# tests against an **Unreal Engine** game on Sauce Labs real devices. For background on what AltTester is and how it talks to Sauce, see the [AltTester overview](/mobile-apps/automated-testing/alttester).

## Prerequisites

- An active [Sauce Labs](https://saucelabs.com/) account.
- An Unreal Engine project that you can build for Android or iOS.
- **AltTester Unreal SDK 1.1 or later** — download the AltTester® Plugin from the [AltTester® website](https://alttester.com/downloads/). See the [Get Started guide](https://alttester.com/docs/unreal-sdk/latest/pages/get-started.html) for full instructions..
- **AltTester-Driver 2.3 or later** — .NET NuGet package [`AltTester-Driver`](https://www.nuget.org/packages/AltTester-Driver).
- **Appium.WebDriver 8 or later** — .NET NuGet package [`Appium.WebDriver`](https://www.nuget.org/packages/Appium.WebDriver).
- **AltTester Desktop**, installed locally or on a VM.
- **Sauce Connect Proxy** client (recommended path; WebSocket over the tunnel is supported).

## Instrument Your Unreal Build

1. Download the AltTester Unreal SDK from AltTester (see the [References](#references) section below).
2. Place the plugin under `<YourProject>/Plugins/AltTester/` in your Unreal project directory.
3. Open the project in Unreal Editor. The editor regenerates project files and prompts to rebuild any missing modules — accept the rebuild.
4. In **Edit → Plugins**, confirm the AltTester plugin is listed and enabled. Restart the editor if prompted.
5. Configure the AltTester connection settings:
   - **Sauce Connect path (recommended):** leave the AltTester host IP at its default. Your tests will connect via the Sauce Connect tunnel.
   - **Public VM path:** enter the VM's reachable IP address.
6. In **Project Settings → Platforms**, ensure the appropriate network permissions are configured for your target platform (Android: `INTERNET` permission; iOS: appropriate network entitlement).
7. **Package** the project for your target platform (Android `.apk` or iOS `.ipa`) via **File → Package Project**.
8. Smoke-test the instrumented build locally by launching it on a USB-connected device and connecting AltTester Desktop. Confirm the widget tree and actors appear in the desktop client.

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

The same `AltTester-Driver` NuGet package is used for Unity and Unreal tests — the package contains drivers for both engines, exposed under different namespaces.

Confirm the installed versions match (or exceed) the floors listed in [Prerequisites](#prerequisites).

## Configure Appium Capabilities

The Appium capabilities for an Unreal Engine build on Sauce real devices are the same as for any other native mobile app build. The following examples show W3C capabilities for Android and iOS — replace the placeholder values (`<...>`) with your build's filename, target device, and platform version.

<Tabs
  groupId="platform"
  defaultValue="android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
  ]}>

<TabItem value="android">

```csharp
var options = new AppiumOptions();
options.AddAdditionalAppiumOption("platformName", "Android");
options.AddAdditionalAppiumOption("appium:app", "storage:filename=<your-game.apk>");
options.AddAdditionalAppiumOption("appium:deviceName", "Google Pixel.*");
options.AddAdditionalAppiumOption("appium:platformVersion", "14");
options.AddAdditionalAppiumOption("appium:automationName", "UiAutomator2");
options.AddAdditionalAppiumOption("sauce:options", new Dictionary<string, object> {
    { "appiumVersion", "stable" },
    { "build", "my-game-build-001" },
    { "name", "AltTester Unreal sample test" },
    { "tunnelName", "<your-sauce-connect-tunnel-name>" },
});

var sauceUrl = new Uri("https://ondemand.eu-central-1.saucelabs.com:443/wd/hub");
var driver = new AndroidDriver(sauceUrl, options);
```

</TabItem>
<TabItem value="ios">

```csharp
var options = new AppiumOptions();
options.AddAdditionalAppiumOption("platformName", "iOS");
options.AddAdditionalAppiumOption("appium:app", "storage:filename=<your-game.ipa>");
options.AddAdditionalAppiumOption("appium:deviceName", "iPhone.*");
options.AddAdditionalAppiumOption("appium:platformVersion", "17");
options.AddAdditionalAppiumOption("appium:automationName", "XCUITest");
options.AddAdditionalAppiumOption("sauce:options", new Dictionary<string, object> {
    { "appiumVersion", "stable" },
    { "build", "my-game-build-001" },
    { "name", "AltTester Unreal sample test" },
    { "tunnelName", "<your-sauce-connect-tunnel-name>" },
});

var sauceUrl = new Uri("https://ondemand.eu-central-1.saucelabs.com:443/wd/hub");
var driver = new IOSDriver(sauceUrl, options);
```

</TabItem>
</Tabs>

Read `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` from environment variables — never hard-code them. See the [Appium .NET client docs](https://github.com/appium/dotnet-client) for the current pattern.

The remote URL above points to the EU-Central-1 data center. For other regions, use:

- US-West-1: `https://ondemand.us-west-1.saucelabs.com:443/wd/hub`
- US-East-4: `https://ondemand.us-east-4.saucelabs.com:443/wd/hub`

:::note iOS WebDriverAgent change
Starting with `appium3-2026-01`, iOS sessions on Sauce Labs real devices use the official Appium WebDriverAgent instead of the Sauce Labs fork (SauceWebDriverAgent). Setting `sauce:options.appiumVersion` to `stable` will pick up this image once it becomes the default. Some XCUITest endpoints may behave differently — see [Appium Testing with Real Devices](/mobile-apps/automated-testing/appium/real-devices) for details.
:::

## Connect the AltTester Driver

After the Appium session starts and the game has launched, connect the AltTester C# driver. Note the namespace difference from the Unity walkthrough:

```csharp
using AltTester.AltTesterSDK.Driver;

// After driver = new AndroidDriver(...) or new IOSDriver(...)
// and after waiting for the game's initial loading screen to finish:
var altDriver = new AltDriver(
    host: "127.0.0.1",   // when tunneled through Sauce Connect Proxy
    port: 13000
);
```

The same `AltDriver` class is used for both engines, but the Unreal SDK exposes it under `AltTester.AltTesterSDK.Driver` rather than the Unity namespace.

If you are using a public VM instead of Sauce Connect, set `host` to the VM's reachable IP address — matching what you configured in the Unreal project's AltTester settings.

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
        _altDriver = new AltDriver("127.0.0.1", 13000);
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

For more complex locator patterns — finding widgets by path, by displayed text, or by Blueprint class — see AltTester's [Unreal example tests](https://github.com/alttester/Unreal-LyraStarterGame-Tests) for current syntax.

## Run It

```bash
export SAUCE_USERNAME=<your-username>
export SAUCE_ACCESS_KEY=<your-access-key>
dotnet test
```

## View Results

Open the [Sauce Labs dashboard](https://app.saucelabs.com/) and find your job under **Automated → Test Results**. Each job has a session video, Appium logs, device logs, and screenshots — use these to debug failures the same way you would for any Appium test.

## Troubleshooting

- **Port or tunnel mismatch:** the AltTester host/port configured in your Unreal project must match what your test's `AltDriver(...)` call passes. With Sauce Connect, both ends use `127.0.0.1:13000` by default.
- **Plugin not loaded:** if `AltDriver` cannot connect, confirm the AltTester plugin is enabled in **Edit → Plugins** and that the packaged build includes the plugin (some Unreal packaging options strip optional modules — check **Project Settings → Packaging**).
- **Locators not finding widgets:** Unreal UMG widget Blueprints often produce class names with a `_C` suffix at runtime (`W_StartGameButton_C` rather than `W_StartGameButton`). Use `By.PATH` with `contains()` when in doubt, or inspect the live widget tree in AltTester Desktop to see the exact names.
- **Wrong data center:** the `sauceUrl` and the data center where your account lives must match. Check the upper-right corner of the Sauce Labs dashboard for your account's region.
- **iOS XCUITest behavior differences:** on `appium3-2026-01` and later, the official Appium WebDriverAgent is used. Some endpoints may behave differently than on older images that used SauceWebDriverAgent. See [Appium real-devices](/mobile-apps/automated-testing/appium/real-devices#webdriveragent-for-ios-real-devices) for details.

## References

- [AltTester for Unreal Engine](https://alttester.com/alttester-unreal/) — AltTester product page for Unreal.
- [AltTester documentation](https://alttester.com/docs/) — full SDK and driver reference.
- [Unreal-LyraStarterGame-Tests](https://github.com/alttester/Unreal-LyraStarterGame-Tests) — AltTester's public C# test project against the Lyra Starter Game, useful as a copy-from-and-adapt example.
- [Unreal-LyraStarterGame](https://github.com/alttester/Unreal-LyraStarterGame) — the example Unreal project with the AltTester plugin pre-installed.
- [AltTester-Driver on NuGet](https://www.nuget.org/packages/AltTester-Driver) — current .NET driver versions (works for both engines).

## See Also

- [AltTester overview](/mobile-apps/automated-testing/alttester) — architecture diagram and common prerequisites shared with Unity.
- [AltTester for Unity](/mobile-apps/automated-testing/alttester/unity) — the parallel walkthrough for Unity builds.
