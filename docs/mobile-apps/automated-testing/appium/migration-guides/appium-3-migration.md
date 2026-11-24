---
id: appium-3-migration
title: Migrating from Appium 2 to Appium 3 on Sauce Labs
sidebar_label: Appium 3 Migration
description: Learn how to migrate your Appium 2 tests to Appium 3 on Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Final Appium 2 release
`appium2-20250901` (alias `appium2-2025-09`) is the final Appium 2 release on Sauce Labs Real Devices. Newer Appium drivers require Appium 3, so this version will not receive new drivers or support for new mobile OS versions. See [Appium Versions](/mobile-apps/automated-testing/appium/appium-versions/#appium-2x).
:::

Appium 3 is a smaller upgrade than Appium 2 was. It removes deprecated server endpoints and raises the requirements of the Appium server itself. Sauce Labs runs the Appium server for you, so the server-side changes (Node.js version, installation, server flags) need no action on your side. What can affect your tests are the removed endpoints and the major driver updates that ship with Appium 3.

This guide lists the changes that have an impact on running your tests on Sauce Labs. For the complete list, read the official [Appium 3 migration guide](https://appium.io/docs/en/4.0/guides/migrating-2-to-3/) and the [Appium release notes](https://github.com/appium/appium/releases).

---

### What's Changed? Version Overview

| Component | `appium2-20250901` | `appium3-2026-11` | Changelog |
|---|---|---|---|
| Appium Server | `2.19.0` | `3.9.1` | [View Releases](https://github.com/appium/appium/releases) |
| UiAutomator2 Driver (Android) | `4.2.9` | `8.7.3` | [View Releases](https://github.com/appium/appium-uiautomator2-driver/releases) |
| XCUITest Driver (iOS) | `9.10.5` | `12.22.8` | [View Releases](https://github.com/appium/appium-xcuitest-driver/releases) |
| Flutter Driver | `2.19.0` | `4.1.0` | [View Releases](https://github.com/appium/appium-flutter-driver/releases) |
| Flutter Integration Driver | `1.3.0` | `2.0.3` | [View Releases](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/releases) |
| iOS WebDriverAgent | SauceWebDriverAgent (Sauce Labs fork) | Official Appium WebDriverAgent `16.17.7` | [View Releases](https://github.com/appium/appium-ios/releases) |

On Android Emulators and iOS Simulators, Appium 3 is available as version `3.8.0`. See [Appium Versions](/mobile-apps/automated-testing/appium/appium-versions/#virtual-devices) for the drivers it contains.

---

### 1. Select an Appium 3 Version

Set the `appiumVersion` capability in your `sauce:options` object to an Appium 3 version: `appium3-2026-11` for Real Devices, or `3.8.0` for Emulators and Simulators. Everything else in your capabilities stays as it was for Appium 2.

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

capabilities.setCapability("platformName", "android");
capabilities.setCapability("appium:deviceName", "Google Pixel 6");
capabilities.setCapability("appium:automationName", "uiautomator2");
capabilities.setCapability("appium:app", "storage:filename=my-app.apk");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// Select Appium 3 on Real Devices
sauceOptions.put("appiumVersion", "appium3-2026-11");
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="js">

<!-- prettier-ignore -->
```js
const capabilities = {
    platformName: 'android',
    'appium:deviceName': 'Google Pixel 6',
    'appium:automationName': 'uiautomator2',
    'appium:app': 'storage:filename=my-app.apk',
    'sauce:options': {
        // Select Appium 3 on Real Devices
        appiumVersion: 'appium3-2026-11'
    }
}
```

</TabItem>
<TabItem value="python">

<!-- prettier-ignore -->
```py
capabilities = {
    "platformName": "android",
    "appium:deviceName": "Google Pixel 6",
    "appium:automationName": "uiautomator2",
    "appium:app": "storage:filename=my-app.apk",
    "sauce:options": {
        # Select Appium 3 on Real Devices
        "appiumVersion": "appium3-2026-11"
    }
}
```

</TabItem>
<TabItem value="ruby">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "platformName" => "android",
    "appium:deviceName" => "Google Pixel 6",
    "appium:automationName" => "uiautomator2",
    "appium:app" => "storage:filename=my-app.apk",
    "sauce:options" => {
        # Select Appium 3 on Real Devices
        "appiumVersion" => "appium3-2026-11"
    }
}
```

</TabItem>
<TabItem value="csharp">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("platformName", "android");
capabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 6");
capabilities.AddAdditionalCapability("appium:automationName", "uiautomator2");
capabilities.AddAdditionalCapability("appium:app", "storage:filename=my-app.apk");

Dictionary<string, object> sauceOptions = new Dictionary<string, object>();
// Select Appium 3 on Real Devices
sauceOptions.Add("appiumVersion", "appium3-2026-11");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

For iOS, use `platformName: ios` and `appium:automationName: xcuitest`. For accessibility testing with Deque axe DevTools, use `appium3-deque-accessibility`.

---

### 2. Removed Endpoints: Update Your Client Library

Appium 3 removes 98 deprecated server endpoints, mostly from the old JSONWP and MJSONWP protocols. Most of them have a replacement: a W3C endpoint, or a `mobile:` command of the driver. The full list with replacements is in the [Removed Endpoints](https://appium.io/docs/en/4.0/guides/migrating-2-to-3/#removed) section of the official guide.

**Action Required:** Use a current release of your Appium client library. Older client versions still call the removed endpoints and will get `404 Not Found` errors. Then search your tests for the removed commands. The ones most often used in mobile tests:

| Removed | Replacement |
|---|---|
| `TouchAction` / `MultiTouchAction` (`POST /touch/perform`, `/touch/multi/perform`) | [W3C Actions API](https://www.selenium.dev/documentation/webdriver/actions_api/), or `mobile:` gestures such as `mobile: swipeGesture` (Android) and `mobile: swipe` (iOS) |
| `launchApp`, `closeApp`, `resetApp`, `backgroundApp` | `mobile: launchApp` (iOS) / `mobile: activateApp` (Android), `mobile: terminateApp`, `mobile: clearApp` (Android), `mobile: backgroundApp` |
| `pressKeyCode`, `longPressKeyCode` | `mobile: pressKey` (Android), `mobile: keys` (iPadOS) |
| `currentActivity`, `currentPackage` | `mobile: getCurrentActivity`, `mobile: getCurrentPackage` |
| `lock`, `unlock`, `isLocked` | `mobile: lock`, `mobile: unlock`, `mobile: isLocked` |
| `setClipboard`, `getClipboard` | `mobile: setClipboard`, `mobile: getClipboard` |
| `toggleWifi`, `toggleData`, `toggleAirplaneMode` | `mobile: setConnectivity` |
| `startRecordingScreen`, `stopRecordingScreen` | Still supported by the UiAutomator2 and XCUITest drivers. Sauce Labs also records a video of every session. |

A few endpoints only changed their parameters: `POST /session` accepts `capabilities` only (no `desiredCapabilities`), alert text and element value take `text` instead of `value`, and switching windows takes `handle` instead of `name`. See [Modified Endpoints](https://appium.io/docs/en/4.0/guides/migrating-2-to-3/#modified).

---

### 3. Android: UiAutomator2 Driver (`v4.2.9` → `v8.7.3`)

* **Android 8.0 (API level 26) or newer is required** since driver 6.0.0. Sessions on older Android versions cannot use Appium 3.

* **`mobile: listApps` output changed** since driver 7.0.0: the result now follows the XCUITest driver format.

    * **Action Required:** Adjust any code that parses the result of `mobile: listApps`.

---

### 4. iOS: XCUITest Driver (`v9.10.5` → `v12.22.8`)

* **Official WebDriverAgent:** Appium 3 sessions on Sauce Labs Real Devices use the official Appium WebDriverAgent instead of SauceWebDriverAgent. Some endpoints may behave differently, for example `getWindowRect`. See [WebDriverAgent for iOS Real Devices](/mobile-apps/automated-testing/appium/real-devices/#webdriveragent-for-ios-real-devices).

* **Capabilities removed** since driver 11.0.0: `appium:appInstallStrategy`, `appium:calendarAccessAuthorized`, `appium:useSimpleBuildTest`, `appium:waitForQuiescence`, `appium:launchWithIDB`, `appium:simpleIsVisibleCheck`.

    * **Action Required:** Remove these capabilities. To tune idle waiting, use `appium:waitForIdleTimeout`.

* **Commands removed** since driver 11.0.0: `mobile: startPcap`, `mobile: stopPcap`, `mobile: listXCTestsInTestBundle`. For network traffic, use Sauce Labs [network capture](/mobile-apps/features/network-capture/).

* **BiDi event renamed:** context changes are only emitted as `appium:xcuitest.contextUpdated`, no longer as `appium.contextUpdated`.

---

### 5. Flutter

`appium3-2026-11` contains the Flutter driver `4.1.0` and the Flutter Integration driver `2.0.3`. Their changelogs list no command or capability changes for Appium 3 beyond the Appium 3 requirement itself. Keep `appium:automationName` set to `Flutter` or `FlutterIntegration` as before.

