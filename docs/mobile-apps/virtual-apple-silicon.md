---
id: virtual-apple-silicon
title: iOS Virtual Devices on Apple Silicon
sidebar_label: Virtual Devices on Apple Silicon
description: Using Virtual Devices on Apple Silicon
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs now supports **iOS 17.5 and iOS 18** on Apple Silicon-based Simulators. These environments offer improved performance, modern architecture alignment, and compatibility with Xcode's latest features. This enables you to test apps in the most current Apple environments across iPhone and iPad Simulators.

:::caution Enteprise Only
iOS 17.5 and iOS 18 Simulators on Apple Silicon are only available to Enterprise customers with the appropriate subscription plan. Contact your account manager to discuss upgrading.
:::

## Key Benefits

- High-fidelity iOS testing environments on M-series macOS VMs
- Improved performance and stability with faster start-up times and test execution
- More efficient for development teams that adopt `arm64` throughout their development and testing pipelines.

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

1. Create a folder named `Payload`
2. Copy your `.app` file into the `Payload` directory
3. Compress the folder into a `.zip`
4. Rename the file to match your app, for example `MyApp.zip`

---

### Uploading the App to Sauce Labs

You can upload the `.zip` archive:

- Via the **App Management** section in the Sauce Labs web UI
- Or via the **Sauce Labs File Storage API**

➡️ [Uploading Apps to Sauce Labs](./app-storage.md)

---

## Appium Capabilities for iOS

To test your app on Apple Silicon Simulators, use the following capabilities:

### Required Capabilities

| OS Version | Appium Version | Device Name          | `armRequired` |
|------------|----------------|-----------------------|---------------|
| iOS 17.5   | 2.1.3          | iPhone 15 Simulator    | true          |
| iOS 18.0   | 2.11.3         | iPhone 16 Simulator | true          |

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

As you upgrade to iOS 17.5 and 18, be aware that Appium and related driver updates may require updates to existing tests to remove deprecated features no longer supported. 

Check [Appium Version Details](./automated-testing/appium/appium-versions.md#appium-2x) for full bundle details on versions 2.1.3 and 2.11.3.

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

More details ➡️ [Migrating to Appium 2](./automated-testing/appium/appium-2-migration.md)

---

## Learn More

- [App Upload Instructions](./app-storage.md)
- [Appium Version Compatibility](./automated-testing/appium/appium-versions.md)
- [iOS Platform Support Matrix](./supported-devices.md)
- [SauceCTL for XCUITest](./automated-testing/espresso-xcuitest/xcuitest-introduction.md)

Have questions? Visit the [Sauce Labs Community](https://support.saucelabs.com/hc/en-us/community/topics) or contact our support team.
