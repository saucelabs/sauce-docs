---
id: appium-4-migration
title: Migrating from Appium 3 to Appium 4 on Sauce Labs
sidebar_label: Appium 4 Migration
description: Learn how to migrate your Appium 3 tests to Appium 4 on Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Flutter is not available on Appium 4 yet
The Flutter and Flutter Integration drivers require Appium 3 and are not part of `appium4-2026-11`. A session with `appium:automationName` set to `Flutter` or `FlutterIntegration` on an Appium 4 version is rejected with:

```
The automationName 'Flutter' is not available for Appium version 'appium4-2026-11': the Flutter drivers are not released for Appium 4 yet. Use an Appium 3 version for Flutter tests, or XCUITest / UiAutomator2 with this version.
```

Keep Flutter tests on `appium3-2026-11` until the drivers support Appium 4.
:::

Appium 4 focuses on alignment with the W3C WebDriver protocol, removal of the remaining deprecated items, and modernizing the server. Sauce Labs runs the Appium server for you, so the server-side changes (Node.js version, ESM-only packages, server flags, logging defaults) need no action on your side. Your tests can be affected by the removed endpoints and capabilities, by the stricter protocol handling, and by the driver updates that ship with Appium 4.

This guide lists the changes that have an impact on running your tests on Sauce Labs. For the complete list, read the official [Appium 4 migration guide](https://appium.io/docs/en/4.0/guides/migrating-3-to-4/) and the [Appium release notes](https://github.com/appium/appium/releases).

Appium 4 is available on Sauce Labs Real Devices. See [Appium Versions](/mobile-apps/automated-testing/appium/appium-versions/#appium-4x) for the current versions.

---

### What's Changed? Version Overview

| Component | `appium3-2026-11` | `appium4-2026-11` | Changelog |
|---|---|---|---|
| Appium Server | `3.9.1` | `4.0.1` | [View Releases](https://github.com/appium/appium/releases) |
| UiAutomator2 Driver (Android) | `8.7.3` | `10.1.0` | [View Releases](https://github.com/appium/appium-uiautomator2-driver/releases) |
| XCUITest Driver (iOS) | `12.22.8` | `13.7.0` | [View Releases](https://github.com/appium/appium-xcuitest-driver/releases) |
| iOS WebDriverAgent | `16.17.7` | `17.1.3` | [View Releases](https://github.com/appium/appium-ios/releases) |
| Images Plugin | `5.0.2` | `6.0.1` | [View Releases](https://github.com/appium/appium/releases) |
| Flutter Driver | `4.1.0` | Not included | [View Releases](https://github.com/appium/appium-flutter-driver/releases) |
| Flutter Integration Driver | `2.0.3` | Not included | [View Releases](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/releases) |

---

### 1. Select an Appium 4 Version

Set the `appiumVersion` capability in your `sauce:options` object to `appium4-2026-11`. Everything else in your capabilities stays as it was for Appium 3.

<Tabs
groupId="capability-ex"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Node.js', value: 'js'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'C#', value: 'csharp'},
]}>

<TabItem value="java">

<!-- prettier-ignore -->
```java
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("platformName", "ios");
capabilities.setCapability("appium:deviceName", "iPhone 14");
capabilities.setCapability("appium:automationName", "xcuitest");
capabilities.setCapability("appium:app", "storage:filename=my-app.ipa");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// Select Appium 4 on Real Devices
sauceOptions.put("appiumVersion", "appium4-2026-11");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="js">

<!-- prettier-ignore -->
```js
const capabilities = {
    platformName: 'ios',
    'appium:deviceName': 'iPhone 14',
    'appium:automationName': 'xcuitest',
    'appium:app': 'storage:filename=my-app.ipa',
    'sauce:options': {
        // Select Appium 4 on Real Devices
        appiumVersion: 'appium4-2026-11'
    }
}
```

</TabItem>
<TabItem value="python">

<!-- prettier-ignore -->
```py
capabilities = {
    "platformName": "ios",
    "appium:deviceName": "iPhone 14",
    "appium:automationName": "xcuitest",
    "appium:app": "storage:filename=my-app.ipa",
    "sauce:options": {
        # Select Appium 4 on Real Devices
        "appiumVersion": "appium4-2026-11"
    }
}
```

</TabItem>
<TabItem value="ruby">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "platformName" => "ios",
    "appium:deviceName" => "iPhone 14",
    "appium:automationName" => "xcuitest",
    "appium:app" => "storage:filename=my-app.ipa",
    "sauce:options" => {
        # Select Appium 4 on Real Devices
        "appiumVersion" => "appium4-2026-11"
    }
}
```

</TabItem>
<TabItem value="csharp">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("platformName", "ios");
capabilities.AddAdditionalCapability("appium:deviceName", "iPhone 14");
capabilities.AddAdditionalCapability("appium:automationName", "xcuitest");
capabilities.AddAdditionalCapability("appium:app", "storage:filename=my-app.ipa");

Dictionary<string, object> sauceOptions = new Dictionary<string, object>();
// Select Appium 4 on Real Devices
sauceOptions.Add("appiumVersion", "appium4-2026-11");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

For Android, use `platformName: android` and `appium:automationName: uiautomator2`.

---

### 2. Removed Endpoints and Capabilities

Appium 4 removes the last 12 deprecated JSONWP and MJSONWP endpoints. Most of them moved into the UiAutomator2 and XCUITest drivers and keep working on Sauce Labs. Two removals affect test code:

* **`GET /session/:sessionId` removed.** Clients used it to read the session capabilities and event timings.

    * **Action Required:** Use `GET /session/:sessionId/appium/capabilities` for the capabilities and `GET /session/:sessionId/appium/events` for the event timings. Use a current release of your Appium client library, which calls the new endpoints.

* **`appium:eventTimings` capability removed.** It only controlled the removed endpoint above.

    * **Action Required:** Remove the capability. Read event timings with the `getLogEvents` command of your client instead.

The full list is in the [Deprecated Endpoints Removed](https://appium.io/docs/en/4.0/guides/migrating-3-to-4/#deprecated-endpoints-removed) section of the official guide. Seven context-management endpoints are still deprecated but kept in Appium 4, and are planned for removal in the next major version.

---

### 3. Stricter Protocol Handling

Appium 4 aligns the server with the W3C WebDriver specification. These changes can turn a test that passed on Appium 3 into a failure:

* **Standard capability names are case-sensitive.** `platformName` works, `PlatformName` does not. Values, and `appium:`-prefixed names, are unchanged.

* **`appium:noReset` and `appium:fullReset` both `true`** now fails session creation with `session not created`.

* **Command timeouts return HTTP `500`** instead of `408`. A `TimeoutError` or `ScriptTimeoutError`, for example from `appium:commandTimeouts`, is now reported as `500`.

    * **Action Required:** Update retry or error-handling logic that checks for `408`.

* **Set Timeouts only accepts integers** (or `null`) for `script`, `pageLoad` and `implicit`. Strings and fractions return `400` / `invalid argument`.

* **`appium:newCommandTimeout` set to `null`, a blank string or a non-finite number** is now ignored and the default applies, instead of disabling the timeout.

* **The body of every `POST` command must be a JSON object.** An empty body or `[]` returns `400`. A current client library already sends `{}` for commands without parameters.

The complete list, with links to the Appium pull requests, is in the [Behavior Fixes](https://appium.io/docs/en/4.0/guides/migrating-3-to-4/#behavior-fixes) section of the official guide.

---

### 4. Android: UiAutomator2 Driver (`v8.7.3` → `v10.1.0`)

The driver changelog lists two breaking changes, and neither requires a change in your tests:

* Driver 9.0.0 requires Appium 4, which Sauce Labs provides.

* Driver 10.0.0 verifies chromedriver executables against a SHA-256 allowlist. Sauce Labs manages the chromedrivers on its devices and starts Appium 4 with this verification turned off, so Chrome and hybrid app testing keeps working as on Appium 3.

---

### 5. iOS: XCUITest Driver (`v12.22.8` → `v13.7.0`)

Driver 13.0.0 no longer uses `appium-ios-device` and removed the remaining JSONWP routes. Changes that affect tests on Real Devices:

* **Geolocation on real devices below iOS 17 is not supported.** `mobile: setSimulatedLocation` only works on iOS 17 and newer.

* **`mobile: killApp` always returns `false` on real devices below iOS 17.** Use `mobile: terminateApp` instead.

* **Commands removed:** `launchApp` and `closeApp` (and their `/appium/app/launch`, `/appium/app/close` and `/appium/app/reset` routes), and the `asyncScriptTimeout` command.

    * **Action Required:** Use `mobile: launchApp`, `mobile: terminateApp` and `mobile: clearApp`. Set the script timeout through the standard Set Timeouts command of your client.

* **Capabilities removed or without effect:** `appium:safariSocketChunkSize` is removed. `appium:safariWebInspectorMaxFrameLength` no longer has an effect on real devices.

* **Settings removed:** `nativeWebTapTabBarVisibility`, `nativeWebTapSmartAppBannerVisibility` and `safariTabBarPosition`. Setting them is no longer accepted.

* **Script timeout is now honored by `execute`.** A client that sets `script` to `0`, or shorter than its scripts run, now gets a script timeout. `GET /timeouts` reports `script: null` for a new session instead of `0`.

The full list is in the driver's [13.0.0 changelog](https://github.com/appium/appium-xcuitest-driver/blob/master/CHANGELOG.md#1300-2026-11-01).
