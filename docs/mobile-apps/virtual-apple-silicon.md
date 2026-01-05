---
id: virtual-apple-silicon
title: iOS Virtual Devices on Apple Silicon
sidebar_label: Virtual Devices on Apple Silicon
description: Using Virtual Devices on Apple Silicon
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs now supports **iOS 18 and iOS 26** on Apple Silicon-based Simulators. These environments offer improved performance, alignment with modern architecture, and compatibility with Xcode's latest features. This allows you to test apps in the most current Apple environments across iPhone and iPad Simulators.

:::caution Enteprise Only
iOS 17.5 and newer Simulators on Apple Silicon are available only to Enterprise customers on the appropriate Premium plan. Contact your account manager to discuss upgrading your plan.
:::

## Key Benefits

- High-fidelity iOS testing environments on M-series macOS hosts.
- Improved performance and stability, with faster start-up times and faster test execution.
- More efficient for development teams that adopt `arm64` across their development and testing pipelines.

---

## Getting Started with Apple Silicon on Sauce Labs

### Building Your iOS/iPadOS App

Xcode can build apps for Simulators that support both `arm64` and `x86_64` architectures.

To build specifically for **Apple Silicon (arm64)** Simulators:

```bash
xcodebuild -arch arm64 -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 15,OS=17.5' -configuration Debug
```

#### Locate the .app File

- **Xcode UI:**
  `$HOME/Library/Developer/Xcode/DerivedData/<project-name>/Build/Products/Debug-iphonesimulator`

- **Terminal:**
  `$PROJECT_PATH/<project-name>/build/Debug-iphonesimulator`

#### Archive the Build

To archive the build, follow the steps below:

1. Create a folder named `Payload`.
2. Copy your `.app` file into the `Payload` directory.
3. Compress the folder into a `.zip`.
4. Rename the file to match your app, for example `MyApp.zip`.

---

### Uploading the App to Sauce Labs

You can upload the `.zip` archive in the following ways:

- Via the **App Management** section in the Sauce Labs web UI.
- Or via the **Sauce Labs File Storage API**.

➡️ [Uploading Apps to Sauce Labs](./app-storage.md)

---

## Appium Capabilities for iOS

To test your app on Apple Silicon Simulators, use the following capabilities:

### Required Capabilities

For full sample configurations and lists of available devices per version, use the [Platform Configurator](https://saucelabs.com/products/platform-configurator).

| OS Version | Appium Version | Device Name (for example)         | `armRequired` |
|------------|----------------|-----------------------|---------------|
| iOS 17.5   | 2.1.3          | iPhone 15 Simulator    | true          |
| iOS 18.0   | 2.11.3         | iPhone 16 Simulator | true          |
| iOS 26.1   | 2.19.0         | iPhone 17 Simulator | true          |

```json
{
  "platformName": "iOS",
  "appium:deviceName": "iPhone 15 Simulator",
  "appium:platformVersion": "17.5",
  "appium:automationName": "XCUITest",
  "sauce:options": {
    "appiumVersion": "2.1.3",
    "armRequired": true
  }
}
```

### Java Example for iOS

```java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("platformName", "iOS");
caps.setCapability("appium:app", "storage:filename=<your app>.zip");
caps.setCapability("appium:deviceName", "iPhone 15 Simulator");
caps.setCapability("appium:deviceOrientation", "portrait");
caps.setCapability("appium:platformVersion", "17.5");
caps.setCapability("appium:automationName", "XCUITest");

MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("appiumVersion", "2.1.3");
sauceOptions.setCapability("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
sauceOptions.setCapability("name", "<your test name>");
sauceOptions.setCapability("armRequired", true);

caps.setCapability("sauce:options", sauceOptions);
```

---

## Appium Capabilities for iPadOS

For iPad Simulators with iOS 18.0:

```json
{
  "platformName": "iOS",
  "appium:deviceName": "iPad Simulator",
  "appium:platformVersion": "18.0",
  "appium:automationName": "XCUITest",
  "sauce:options": {
    "appiumVersion": "2.11.3",
    "armRequired": true
  }
}
```

### Java Example for iPadOS

```java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("platformName", "iOS");
caps.setCapability("appium:app", "storage:filename=<your app>.zip");
caps.setCapability("appium:deviceName", "iPad Simulator");
caps.setCapability("appium:deviceOrientation", "portrait");
caps.setCapability("appium:platformVersion", "18.0");
caps.setCapability("appium:automationName", "XCUITest");

MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("appiumVersion", "2.11.3");
sauceOptions.setCapability("username", System.getenv("SAUCE_USERNAME"));
sauceOptions.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
sauceOptions.setCapability("name", "<your test name>");
sauceOptions.setCapability("armRequired", true);

caps.setCapability("sauce:options", sauceOptions);
```

---

## Known Issues and Migration Notes

As you upgrade to newer verisons on Sauce Labs Simulators, Appium and related driver updates may require you to modify existing tests to remove deprecated features no longer supported.

Check [Appium Version Details](./automated-testing/appium/appium-versions.md#appium-2x) for full bundle details on supported versions.

### Changes to Content Scope

| Appium Version | iOS Versions Affected | Content Scope |
|----------------|-----------------------|---------------|
| 2.0.x  | iOS 16   | WebView content elements accessed in their own context |
| 2.1.x  | iOS 17   | WebView content elements accessed in the App's context|
| 2.11.x | iOS 18   | WebView content elements accessed in their own context |

### Changes to iOS Alerts

Changes to Appium XCUITest Driver v7+ have modified how System alerts are interacted with, potentially requiring modifications to tests run on iOS 18 Simulators.

**Solution**: Use the `respectSystemsAlerts` setting ([Settings](https://appium.github.io/appium-xcuitest-driver/latest/reference/settings/), not [Capabilities](https://appium.github.io/appium-xcuitest-driver/latest/reference/capabilities/)) to `true` as in this Java example:
```java
options.setSetting("respectSystemAlerts", true);
```
For more details and alternative options see the [Appium documentation](https://appium.github.io/appium-xcuitest-driver/latest/guides/troubleshooting/#interact-with-dialogs-managed-by-comapplespringboard).

### Changes to Gestures

Appium commands `TouchActions` and `MultiTouchActions` have been deprecated in XCUITest Driver 7+.

**Solution**: Refer to [Appium Documentation](https://appium.github.io/appium-xcuitest-driver/latest/guides/gestures/) for additional implementation options.

More details ➡️ [Migrating to Appium 2](./automated-testing/appium/migration-guides/appium-2-migration.md)

### Changes in iOS 26

Users migrating from iOS 17.5 or 18.0 to iOS 26 should be aware of the following updates:

* Appium Server: Updated to version 2.19.0.
* Appium XCUITest Driver: Updated to version 9.10.15.

#### Appium Client: `element.click()` Failures

In iOS 26.1, the standard element.click() method (observed in the Python Appium client) may fail to trigger interactions on native iOS applications. It remains functional for web-based tests.

**Recommended Solution**: We recommend migrating to the W3C Actions API using [ActionChains](https://github.com/appium/python-client?tab=readme-ov-file#multiactiontouchaction-to-w3c-actions).

You can implement a helper function to ensure consistent click behavior:
```python
from selenium.webdriver import ActionChains

def click_element(driver, element):
    """
    Workaround for iOS 26.1 click issues.
    Uses ActionChains to move to the element, pause, and perform the action.
    """
    ActionChains(driver).move_to_element(element).pause(0.5).click().perform()

# Usage Example
location_btn = wait.until(EC.presence_of_element_located((AppiumBy.NAME, 'Trigger Location Permission')))
click_element(driver, location_btn)
```
#### WebDriver Expected Conditions: Visibility vs. Presence

You may encounter failures when using the visibility_of_element_located Expected Condition (EC) with iOS 26.1 Simulators. The driver may fail to verify the visibility state even if the element is present in the hierarchy.

❌ Fails: `EC.visibility_of_element_located((AppiumBy.NAME, 'Element_Name'))`

✅ Works: `EC.presence_of_element_located((AppiumBy.NAME, 'Element_Name'))`

**Recommended Solution**: Update your `WebDriverWait` calls to use `presence_of_element_located`. Since the XCUITest driver often handles visibility checks internally during interaction, verifying presence is sufficient for element discovery and significantly more stable in this release. 

---

## Learn More

- [App Upload Instructions](./app-storage.md)
- [Appium Version Compatibility](./automated-testing/appium/appium-versions.md)
- [iOS Platform Support Matrix](./supported-devices.md)
- [SauceCTL for XCUITest](./automated-testing/espresso-xcuitest/xcuitest-introduction.md)

Have questions? Visit the [Sauce Labs Community](https://support.saucelabs.com/hc/en-us/community/topics) or contact our support team.
