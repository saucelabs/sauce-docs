---
id: appium-for-games
title: Appium for Games
sidebar_label: Appium for Games
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Appium is a strong fit for game testing when the part of the game you need to drive — menus, lobbies, settings, companion apps — exposes native accessibility metadata. For gameplay inside a Unity or Unreal scene, see [AltTester](/mobile-apps/automated-testing/alttester); Appium does not see inside game engines' internal scene graphs.

## When to Use Appium for a Game

- **Native menus and settings screens** that the engine exposes as native iOS/Android views (common in companion apps and hybrid title-screens).
- **Hybrid lobby UIs** rendered in a WebView — Appium drives them as you would a web page.
- **Companion apps** that pair with the game over Bluetooth or your account system.
- **Smoke testing** install, launch, and reach-main-menu flows where you don't need scene-graph visibility.

## Limitations vs. AltTester

Appium relies on the operating system's accessibility tree. Unity and Unreal render to a single full-screen surface and do not, by default, expose their internal UI to that tree. Inside a running game scene, Appium typically sees a single opaque view — locators by accessibility ID, XPath, or class name won't find game-specific objects.

For tests that need to interact with GameObjects (find an enemy by name, tap an in-world button, read score state), use [AltTester](/mobile-apps/automated-testing/alttester). For everything around the game — store flows, settings, account linking, native overlays — Appium is the simpler choice.

## Game-Specific Appium Techniques

### Image-Based Locators

When the game element you want to tap has no accessibility ID, Appium's `-image` strategy locates it visually using OpenCV. Crop a reference PNG of the button, base64-encode it, and use:

```python
from appium.webdriver.common.appiumby import AppiumBy

with open("play_button.png", "rb") as f:
    image_b64 = base64.b64encode(f.read()).decode("utf-8")

driver.find_element(AppiumBy.IMAGE, image_b64).click()
```

This is slower than a structural locator and brittle against asset changes — use it as a fallback, not the default. See the [Appium image element docs](https://github.com/appium/appium/blob/master/packages/images-plugin/docs/image-element.md) for tuning the threshold.

### Coordinate-Based Taps and the W3C `actions` API

For custom game UI where neither structural nor image locators work, drive raw input through the W3C actions API.

<Tabs
  groupId="lang"
  defaultValue="csharp"
  values={[
    {label: 'C#', value: 'csharp'},
    {label: 'Python', value: 'python'},
  ]}>

<TabItem value="csharp">

```csharp
var touch = new PointerInputDevice(PointerKind.Touch);
var tap = new ActionSequence(touch, 0);
tap.AddAction(touch.CreatePointerMove(CoordinateOrigin.Viewport, 540, 1200, TimeSpan.Zero));
tap.AddAction(touch.CreatePointerDown(MouseButton.Touch));
tap.AddAction(touch.CreatePointerUp(MouseButton.Touch));
driver.PerformActions(new List<ActionSequence> { tap });
```

</TabItem>
<TabItem value="python">

```python
from selenium.webdriver.common.actions.action_builder import ActionBuilder
from selenium.webdriver.common.actions.pointer_input import PointerInput

touch = PointerInput("touch", "finger")
actions = ActionBuilder(driver, mouse=touch)
actions.pointer_action.move_to_location(540, 1200).pointer_down().pointer_up()
actions.perform()
```

</TabItem>
</Tabs>

### Multi-Touch Gestures

For pinch, two-finger drag, or any two-pointer interaction, build two synchronized `ActionSequence` objects and pass both to `PerformActions`. See [Gestures](/mobile-apps/features/gestures) for the supported gesture catalog on Sauce real devices.

### Forced-Landscape Orientation

Many games lock to landscape at launch. If your test needs to start in landscape, set the device orientation in your Appium capabilities (`appium:orientation = LANDSCAPE`). Don't rotate mid-test in a forced-landscape game — the OS-level orientation event may not be respected by the engine.

### Long Loading Screens

Unity and Unreal builds can spend 30+ seconds compiling shaders or loading assets on first launch. Use explicit waits with generous timeouts for the first interaction after install:

```csharp
var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(120));
wait.Until(d => d.FindElement(MobileBy.AccessibilityId("MainMenu")));
```

Avoid implicit waits — they apply to every command and make slow first-launches mask faster later failures.

## Sample Real-Device Capabilities

These are minimal capabilities for an Appium test against a game build on Sauce real devices. Adjust `appium:platformVersion` and `appium:deviceName` to your target hardware.

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
options.AddAdditionalAppiumOption("appium:orientation", "LANDSCAPE");
options.AddAdditionalAppiumOption("sauce:options", new Dictionary<string, object> {
    { "appiumVersion", "stable" },
    { "build", "appium-game-test-001" },
    { "name", "Appium game smoke test" },
});
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
options.AddAdditionalAppiumOption("appium:orientation", "LANDSCAPE");
options.AddAdditionalAppiumOption("sauce:options", new Dictionary<string, object> {
    { "appiumVersion", "stable" },
    { "build", "appium-game-test-001" },
    { "name", "Appium game smoke test" },
});
```

</TabItem>
</Tabs>

## See Also

- [Appium Testing with Real Devices](/mobile-apps/automated-testing/appium/real-devices) — full Appium-on-Sauce reference, including the iOS WebDriverAgent change in `appium3-2026-01`.
- [AltTester](/mobile-apps/automated-testing/alttester) — when you need scene-graph visibility inside the running game (Unity or Unreal).
- [Gestures](/mobile-apps/features/gestures) — supported gesture catalog on Sauce real devices.
