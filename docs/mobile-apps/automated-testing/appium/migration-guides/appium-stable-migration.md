---
id: appium-stable-migration
title: Migrating from appium:stable to appium:latest
sidebar_label: Appium:stable Migration
description: Learn how to migrate your appium scripts from appium:stable to appium:latest
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This guide provides the necessary steps to migrate your automated mobile tests from the Sauce Labs `stable` Appium image to the `latest` image. This update involves major version bumps for the core Appium drivers, which unlocks new features and requires some script updates.

The primary benefit of migrating is access to the latest driver features, performance improvements, bug fixes, and stricter adherence to the W3C WebDriver standard, leading to more robust and reliable tests.

---

### What's Changed? Version Overview

The `latest` image includes major version updates to the Appium server and its primary drivers. Here's a summary of the version changes you can expect:

| Component | `stable` Version | `latest` Version | Changelog |
|---|---|---|---|
| Appium Server | `2.4.1` | `2.13.1` | [View Releases](https://github.com/appium/appium/releases) |
| UIAutomator2 Driver (Android) | `2.43.4` | `3.9.6` | [View Releases](https://github.com/appium/appium-uiautomator2-driver/releases) |
| XCUITest Driver (iOS) | `5.15.1` | `7.35.0` | [View Releases](https://github.com/appium/appium-xcuitest-driver/releases) |

---

### 1. Prerequisites: Update Your Client Library

The most important first step is to ensure your project's Appium client library is up-to-date. Newer versions contain the necessary support for the W3C Actions API used by the `latest` drivers. Using an older library will cause your gesture commands to fail.

We recommend using **at least** the following versions:

* **Java:** `appium-java-client` **v8.0.0**
* **Python:** `Appium-Python-Client` **v1.0.0** (v2.x or newer is recommended)
* **JavaScript (WebdriverIO):** `webdriverio` **v7.0.0**
* **.NET:** `appium-dotnet-driver` **v5.0.0**
* **Ruby:** `appium_lib` **v12.0.0**

---

### 2. Standardizing Gestures: Moving to the W3C Actions API

The most significant change in this migration is the move from the old, non-standard `TouchAction` API to the official **W3C Actions API**.

The Appium team made this change to align with the universal W3C WebDriver standard, which ensures that automation commands are consistent across all platforms and drivers (for mobile and web). This powerful Actions API also unlocks functionality that the old `TouchAction` API could not support, such as **complex multi-finger gestures** (like pinch-and-zoom), **pen actions**, and combining **key presses with pointer movements** in a single, synchronized sequence.

**Action Required:** You must rewrite all touch gestures (taps, swipes, long presses, etc.) using the W3C Actions API.

#### Code Example: Swipe Gesture

Here is a typical "before and after" example for a swipe action in Java and Python.

**Java Example:**
```java
// BEFORE: Using the legacy TouchAction
TouchAction touchAction = new TouchAction(driver);
touchAction.press(PointOption.point(500, 1000))
           .waitAction(WaitOptions.waitOptions(Duration.ofMillis(800)))
           .moveTo(PointOption.point(500, 200))
           .release()
           .perform();

// AFTER: Using the W3C Actions API
Point start = new Point(500, 1000);
Point end = new Point(500, 200);
PointerInput finger = new PointerInput(PointerInput.Kind.TOUCH, "finger");
Sequence swipe = new Sequence(finger, 1);
swipe.addAction(finger.createPointerMove(Duration.ofMillis(0), PointerInput.Origin.viewport(), start.x, start.y));
swipe.addAction(finger.createPointerDown(PointerInput.MouseButton.LEFT.asArg()));
swipe.addAction(finger.createPointerMove(Duration.ofMillis(800), PointerInput.Origin.viewport(), end.x, end.y));
swipe.addAction(finger.createPointerUp(PointerInput.MouseButton.LEFT.asArg()));
driver.perform(Arrays.asList(swipe));
```

**Python Example:**
```python
# BEFORE: Using the legacy TouchAction
from appium.webdriver.common.touch_action import TouchAction

actions = TouchAction(driver)
actions.press(x=500, y=1000).wait(800).move_to(x=500, y=200).release().perform()

# AFTER: Using the W3C Actions API
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.actions.pointer_input import PointerInput

finger = PointerInput(interaction.POINTER_TOUCH, "finger")
actions = ActionChains(driver)
actions.w3c_actions.pointer_action.move_to_location(500, 1000)
actions.w3c_actions.pointer_action.pointer_down()
actions.w3c_actions.pointer_action.pause(0.8)
actions.w3c_actions.pointer_action.move_to_location(500, 200)
actions.w3c_actions.pointer_action.pointer_up()
actions.w3c_actions.perform()
```


### 3. Android: UIAutomator2 Driver (`v2.43.4` → `v3.9.6`)

Beyond the W3C Actions requirement, the upgrade to UIAutomator2 v3 includes these breaking changes.

* `pressKey` **Command Removed**: The `driver.pressKey()` and `driver.longPressKey()` commands have been removed.

    * **Action Required**: Replace these with the W3C `key` actions. For sending an "Enter" key press, for instance, you would use the Actions API to send the `\uE007` key.

* `mobile:performEditorAction` **Argument Changed**: This command no longer accepts a simple string.

    * **Action Required:** You must pass a JSON object with an action key. For example, `driver.executeScript("mobile: performEditorAction", {"action": "search"});`


### 4. iOS: XCUITest Driver (`v5.15.1` → `v7.35.0`)

The jump from v5 to v7 of the XCUITest driver introduces the following key changes.

* **Picker Wheel Selection:** The default behavior of `mobile:selectPickerWheelValue` has changed for single-wheel pickers.

    * **Action Required:** The `order` parameter now defaults to `next`. If your tests relied on the previous default (`previous`), you must now explicitly specify `{"order": "previous", ...}`

* **Command and Capability Removals:**

    * The `mobile:siri` command has been removed.

    * The `webkitResponseTimeout` capability has been removed. Review your capabilities and remove this if present.

### 5. New Features You Can Use

Migration also unlocks new, helpful features. Consider adopting them to improve your tests:

* **Android**: Use the `driver.getToastMessage()` command for a native, reliable way to verify toast messages.

* **iOS**:

    * Leverage the `mobile:runXCTest` command to orchestrate XCTest bundles within your Appium session.

    * Use the `mobile:getDeviceTime` command for a more robust way to get the device's time.

### 6. Migration Checklist

Follow these steps to structure your migration process:

- [ ] Update Client Library: Ensure your project's Appium client library is updated to at least the minimum version specified in section 1.

- [ ] Switch to W3C Actions: Globally search your entire test suite for TouchAction and MultiTouchAction. Replace every instance with the equivalent W3C Actions sequence.

- [ ] Update Android Scripts: Search for pressKey, longPressKey, and mobile:performEditorAction and update them to the new W3C Actions and object-based argument formats.

- [ ] Update iOS Scripts: Review all uses of mobile:selectPickerWheelValue for single-wheel pickers and adjust the order parameter if needed. Remove any uses of mobile:siri.

- [ ] Clean Capabilities: Remove the webkitResponseTimeout capability from your iOS session configurations.

- [ ] Test and Refine: Run your full test suite against the latest image and address any failures, paying close attention to gesture-based interactions.