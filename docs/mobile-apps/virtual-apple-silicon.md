---
id: virtual-apple-silicon
title: iOS Virtual Devices on Apple Silicon
sidebar_label: Virtual Devices on Apple Silicon
description: Using Virtual Devices on Apple Silicon
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs now supports **iOS 18, iOS 26, and iOS 27** on Apple Silicon-based Simulators. These environments offer improved performance, alignment with modern architecture, and compatibility with Xcode's latest features. This allows you to test apps in the most current Apple environments across iPhone and iPad Simulators.

:::note Availability
iOS 17.5 and newer Simulators on Apple Silicon are available to customers with the required subscription. If you don't have access, contact your account manager to discuss upgrading.
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

### Specific Capabilities

For full sample configurations and lists of available devices per version, use the [Platform Configurator](https://saucelabs.com/products/platform-configurator).

| OS Version | Appium Version | Device Name (for example)         | `armRequired`†|
|------------|----------------|-----------------------|---------------|
| iOS 17.5 | 2.1.3 | iPhone 15 Simulator | true |
| iOS 16.4<br/>iOS 18.0<br/>iOS 18.6 | 2.11.3 | iPhone 16 Simulator | true |
| iOS 26.1 | 2.19.0 | iPhone 17 Simulator | true |
| iOS 26.5 | 3.3.0 | iPhone 17 Simulator | true |
| iOS 27.0 | 3.3.0 | iPhone 18 Pro Simulator | true |


:::note †armRequired now optional
Prior to March 15th, 2026 the `armRequired` parameter was required for tests to execute, but is now optional and can be excluded for future test runs.
:::

---

## Known Issues and Migration Notes

As you upgrade to newer verisons on Sauce Labs Simulators, Appium and related driver updates may require you to modify existing tests to remove deprecated features no longer supported.

Check [Appium Version Details](./automated-testing/appium/appium-versions.md#ios-simulators) for full bundle details on supported versions.

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

#### WebDriver Expected Conditions: Visibility vs. Presence

You may encounter failures when using the visibility_of_element_located Expected Condition (EC) with iOS 26.1 Simulators. The driver may fail to verify the visibility state even if the element is present in the hierarchy.

❌ Fails: `EC.visibility_of_element_located((AppiumBy.NAME, 'Element_Name'))`

✅ Works: `EC.presence_of_element_located((AppiumBy.NAME, 'Element_Name'))`

**Recommended Solution**: Update your `WebDriverWait` calls to use `presence_of_element_located`. Since the XCUITest driver often handles visibility checks internally during interaction, verifying presence is sufficient for element discovery and significantly more stable in this release.

### Changes in iOS 26.5 and iOS 27

iOS 26.5 and iOS 27.0 Simulators run on **Appium 3**. Appium `3.3.0` is the only Appium version available for these platform versions, so set `appiumVersion` to `3.3.0` in `sauce:options`. The bundle includes:

* Appium Server: 3.3.0.
* Appium XCUITest Driver: 10.43.0, with WebDriverAgent 11.4.1.

iOS 27.0 adds the iPhone 18 Pro and iPhone 18 Pro Max Simulators. For the full list of iPhone and iPad Simulators available on each version, use the [Platform Configurator](https://saucelabs.com/products/platform-configurator).

#### Moving from Appium 2 to Appium 3

Appium 3 supports only the W3C WebDriver protocol. Before you move tests from iOS 26.1 (Appium 2.19.0) to iOS 26.5 or iOS 27.0, check the following:

* **Use a current Appium client and vendor-prefixed capabilities.** The legacy `desiredCapabilities` request format and the JSON Wire Protocol (JSONWP/MJSONWP) endpoints have been removed. Upgrade your Appium client library to a version that speaks W3C, and prefix driver capabilities with `appium:` (for example, `appium:deviceName`).
* **Replace removed legacy commands.** Touch and gesture commands such as `TouchAction` and `MultiAction` must be replaced by W3C Actions. App lifecycle and device commands such as launch, close, reset, lock, unlock, and shake must be replaced by the XCUITest driver's [`mobile:` commands](https://appium.github.io/appium-xcuitest-driver/latest/reference/execute-methods/), for example `mobile: launchApp`, `mobile: lock`, and `mobile: shake`.

See the official [Appium 2 to Appium 3 migration guide](https://appium.io/docs/en/latest/guides/migrating-2-to-3/) for the complete list of changes, and the [XCUITest driver release notes](https://github.com/appium/appium-xcuitest-driver/releases) for driver-level changes between the 9.x driver used with iOS 26.1 and the 10.x driver used with iOS 26.5 and iOS 27.0.

#### Session Start Time

A cold iOS Simulator session can take several minutes to start, and longer if Sauce Labs has to re-provision the virtual machine. To avoid client-side failures during session creation:

* Allow at least 5 minutes for new-session requests in your test runner and HTTP client timeouts.
* If you use the Selenium or Appium Python client, raise its redirect limit. See [The New Session Request Redirect Was Not Followed Before Timeout](/dev/error-messages/#the-new-session-request-redirect-was-not-followed-before-timeout).
* Reuse a warm virtual machine across tests with the [`cacheId`](/dev/test-configuration-options/#cacheid) capability. Sessions that land on a warm virtual machine skip the VM and Simulator boot and start in a fraction of the cold-start time.

---

## Learn More

- [App Upload Instructions](./app-storage.md)
- [Appium Version Compatibility](./automated-testing/appium/appium-versions.md)
- [iOS Platform Support Matrix](./supported-devices.md)
- [SauceCTL for XCUITest](./automated-testing/espresso-xcuitest/xcuitest-introduction.md)

Have questions? Visit the [Sauce Labs Community](https://support.saucelabs.com/hc/en-us/community/topics) or contact our support team.
