---
id: unity
title: AltTester for Unity
sidebar_label: Unity
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page walks you through running AltTester-driven C# tests against a **Unity** game on Sauce Labs real devices. For background on what AltTester is and how it talks to Sauce, see the [AltTester overview](/mobile-apps/automated-testing/alttester).

## Prerequisites

- An active [Sauce Labs](https://saucelabs.com/) account.
- A Unity project (Unity 2021 LTS or later recommended; check the [AltTester® SDK documentation](https://alttester.com/docs/sdk/latest/home.html) for the exact supported range).
- **AltTester Unity SDK 2.3 or later** — download the `.unitypackage` from the [AltTester® website](https://alttester.com/downloads/), or install via OpenUPM (https://openupm.com/packages/com.alttester.sdk/). See the [Get Started guide](https://alttester.com/docs/sdk/latest/pages/get-started.html) for full instructions.
- **AltTester-Driver 2.3 or later** — .NET NuGet package [`AltTester-Driver`](https://www.nuget.org/packages/AltTester-Driver).
- **Appium.WebDriver 8 or later** — .NET NuGet package [`Appium.WebDriver`](https://www.nuget.org/packages/Appium.WebDriver).
- **AltTester Desktop**, installed locally or on a VM. Can be downloaded from the [AltTester® website](https://alttester.com/downloads/).
- **Sauce Connect Proxy** client (recommended path; WebSocket over the tunnel is supported).

## Instrument Your Unity Build

1. In your Unity project, open **Window → Package Manager**.
2. Add the AltTester Unity SDK from a Git URL or local package — see the [AltTester documentation](https://alttester.com/docs/) for the current install method.
3. Open the **AltTester Editor** window (top menu: `AltTester` → `AltTester Editor`).
4. Configure the connection settings:
   - **Sauce Connect path (recommended):** leave the AltTester host IP at its default. Your tests will connect via the Sauce Connect tunnel.
   - **Public VM path:** enter the VM's reachable IP address.
5. In **Player Settings**, ensure the **Internet Access** permission is enabled (Android) or the appropriate network entitlement is set (iOS).
6. Build the player for your target platform (Android `.apk` or iOS `.ipa`).
1. Import the AltTester® Unity SDK into your Unity project by simply drag and drop the `.unitypackage`. Alternatively, install via OpenUPM (https://openupm.com/packages/com.alttester.sdk/). See the [Import AltTester® package in Unity Editor](https://alttester.com/docs/sdk/latest/pages/get-started.html#import-alttester-package-in-unity-editor) guide for full instructions.
2. Open the **AltTester Editor** window (top menu: `AltTester` → `AltTester Editor`).
3. Configure the connection settings:
   - **Sauce Connect path (recommended):** leave the AltTester host IP at its default. Your tests will connect via the Sauce Connect tunnel.
   - **Public VM path:** enter the VM's reachable IP address.
4. In **Player Settings**, ensure the **Internet Access** permission is enabled (Android) or the appropriate network entitlement is set (iOS).
5. Build the player for your target platform (Android `.apk` or iOS `.ipa`).
6. Smoke-test the instrumented build locally by launching it on a USB-connected device or simulator and connecting AltTester Desktop. Confirm the scene graph appears in the desktop client.

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

## Configure Appium Capabilities

The following examples show W3C capabilities for an Android Unity game and an iOS Unity game. Replace the placeholder values (`<...>`) with your build's filename, target device, and platform version.

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
    { "name", "AltTester Unity sample test" },
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
    { "name", "AltTester Unity sample test" },
    { "tunnelName", "<your-sauce-connect-tunnel-name>" },
});

var sauceUrl = new Uri("https://ondemand.eu-central-1.saucelabs.com:443/wd/hub");
var driver = new IOSDriver(sauceUrl, options);
```

</TabItem>
</Tabs>

Read `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` from environment variables — never hard-code them. The Appium .NET client picks them up via the URL or via dedicated capabilities; see the [Appium .NET client docs](https://github.com/appium/dotnet-client) for the current pattern.

The remote URL above points to the EU-Central-1 data center. For other regions, use:

- US-West-1: `https://ondemand.us-west-1.saucelabs.com:443/wd/hub`
- US-East-4: `https://ondemand.us-east-4.saucelabs.com:443/wd/hub`

:::note iOS WebDriverAgent change
Starting with `appium3-2026-01`, iOS sessions on Sauce Labs real devices use the official Appium WebDriverAgent instead of the Sauce Labs fork (SauceWebDriverAgent). Setting `sauce:options.appiumVersion` to `stable` will pick up this image once it becomes the default. Some XCUITest endpoints may behave differently — see [Appium Testing with Real Devices](/mobile-apps/automated-testing/appium/real-devices) for details.
:::

## Connect the AltTester Driver

After the Appium session starts and the game has launched, connect the AltTester C# driver:

```csharp
using AltTester.AltTesterUnitySDK.Driver;

// After driver = new AndroidDriver(...) or new IOSDriver(...)
// and after waiting for the game's initial loading screen to finish:
var altDriver = new AltDriver(
    host: "127.0.0.1",   // when tunneled through Sauce Connect Proxy
    port: 13000
);
```

If you are using a public VM instead of Sauce Connect, set `host` to the VM's reachable IP address — matching what you configured in the AltTester Editor window.

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
        _altDriver = new AltDriver("127.0.0.1", 13000);
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

```bash
export SAUCE_USERNAME=<your-username>
export SAUCE_ACCESS_KEY=<your-access-key>
dotnet test
```

## View Results

Open the [Sauce Labs dashboard](https://app.saucelabs.com/) and find your job under **Automated → Test Results**. Each job has a session video, Appium logs, device logs, and screenshots — use these to debug failures the same way you would for any Appium test.

## Troubleshooting

- **Port or tunnel mismatch:** the AltTester host/port configured in the Unity Editor window must match what your test's `AltDriver(...)` call passes. With Sauce Connect, both ends use `127.0.0.1:13000` by default.
- **SDK version mismatch:** the AltTester Unity SDK version in the build and the AltTester-Driver NuGet version in your test project must be compatible. The "Verified with" callout above lists a known-good combination.
- **Build not instrumented:** if `AltDriver` cannot connect, confirm the AltTester GameObject was added to a scene loaded at app start, and that the build was made with the AltTester package present.
- **Wrong data center:** the `sauceUrl` and the data center where your account lives must match. Check the upper-right corner of the Sauce Labs dashboard for your account's region.
- **iOS XCUITest behavior differences:** on `appium3-2026-01` and later, the official Appium WebDriverAgent is used. Some endpoints — for example `getWindowRect` — may behave differently than on older images that used SauceWebDriverAgent. If you see new failures after switching Appium images, check the [Appium real-devices page](/mobile-apps/automated-testing/appium/real-devices#webdriveragent-for-ios-real-devices) for details.

## See Also

- [AltTester overview](/mobile-apps/automated-testing/alttester) — architecture diagram and common prerequisites shared with Unreal.
- [AltTester for Unreal Engine](/mobile-apps/automated-testing/alttester/unreal) — the parallel walkthrough for Unreal builds.
