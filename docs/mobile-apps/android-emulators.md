---
id: android-emulators
title: Android Emulators on the Sauce Labs Virtual Cloud
sidebar_label: Android Emulators
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs offers a wide range of Android Emulators on our Virtual Device Cloud, providing a stable and high-performance environment for your automated and live testing needs. Our emulators are built to align closely with the latest official Google Developer tools, ensuring parity with the Android Virtual Devices (AVDs) available in [Android Studio](https://developer.android.com/studio).


## Supported Devices and Android Versions

Our selection of Android Emulators corresponds to the most popular AVDs published by Google (specifically the `google_apis_*` device versions). This includes emulators that represent flagship Google devices as well as the default generic Medium Phone. You can view the complete and most current list of available devices and OS versions in the [Platform Configurator](https://saucelabs.com/products/platform-configurator) and in the [Live Testing](https://app.saucelabs.com/live/app-testing/virtual) device selection menu.

Android 12 virtual devices on Sauce Labs are built with API level 32 (also known as Android 12L)

Sauce Labs also offers ARM-native Android emulators for Enterprise customers with the required subscription, including ARM versions of the Android 14–17 device options listed in the Platform Configurator. See [ARM-Based Android Emulators](#arm-based-android-emulators).

### Android 15, 16, and 17 with 16KB Page Size Support

We offer emulators for Android 15, 16, and 17 which include critical support for the 16KB page size memory architecture. The Google Play Store requires that all new apps and app [updates submitted after November 1, 2025](https://developer.android.com/guide/practices/page-sizes), are compatible with 16KB pages. Testing on these emulator configurations is essential to ensure your application meets this requirement and functions correctly for all users. Look for Pixel devices with the `ps16k` label in their name to get started with these new emulators.

Android 17 is available on the **Pixel 9a ps16k Emulator** and **Medium Phone ps16k Emulator** devices, which require [Appium 2.11.0](./automated-testing/appium/appium-versions.md#android-emulators).

### Legacy Device Mapping for Automated Testing

Previously, Sauce Labs offered emulators sized to match the screen resolutions of various Samsung and other non-Google manufactured devices. These emulators used standard Android builds and did not include any manufacturer-specific software or features.
To ensure backward compatibility and prevent disruption to existing test suites, we dynamically map test requests for these legacy device names to a generic Android emulator with a matching screen size and Android OS version. This allows your existing automated tests to continue running without modification. These legacy emulators are not available for Live Testing. 

## Google Chrome Versions

To provide a test environment that accurately reflects real-world user conditions, our Android emulators are provisioned with up-to-date versions of the Google Chrome browser. Running current versions is important for testing mobile web applications, as end-users frequently have the latest version of Chrome on their devices, regardless of their Android OS version.

Below is the current mapping of the default Chrome browser version installed on each Android Emulator version.

| Android OS Version | Google Chrome Version |
| :----------------- | :-------------------- |
| Android 17         | 145                   |
| Android 16         | 145                   |
| Android 15         | 141                   |
| Android 14         | 140                   |
| Android 13         | 140                   |
| Android 12         | 140                   |
| Android 11         | 140                   |
| Android 10         | 140                   |
| Android 9          | 136                   |
| Android 8.1        | 136                   |
| Android 8          | 136                   |
| Android 7.1        | 119                   |
| Android 7          | 119                   |
| Android 6          | 106                   |
| Android 5.1        | 95                    |
| Android 5          | 95                    |

## ARM-Based Android Emulators

<p><small><span className="sauceGreen">Enterprise Plans only</span></small></p>

Sauce Labs offers **ARM-based Android emulators** in the Virtual Device Cloud. These emulators run on native ARM hardware — no instruction translation and no x86-bridge ABI overhead — producing an Android environment that is architecturally closer to the ARM devices your end users run.

:::note Availability
ARM-based Android emulators are available to Enterprise customers with the required subscription and [Android (ARM) concurrency](/basics/acct-team-mgmt/concurrency/managing-concurrency#concurrency-types) allocated to their account. If you don't have access, contact your account manager to discuss upgrading.

Capacity above a certain threshold and scale will require advance reservation and purchase commitment. If you have questions about access or concurrency for your account, contact your account manager or Sauce Labs support.
:::

Live Testing and automated Appium and Espresso testing are available against Android 14, 15, 16, and 17.

:::note ABI coverage
App and Android test APKs must include the `arm64-v8a` ABI to run on ARM emulators. Rebuild or download a universal APK, or ensure your Gradle splits include `arm64-v8a`.
:::

:::caution Long-running tests
We don't recommend tests that run longer than 60 minutes on ARM emulators. The ARM Cloud is maintained on a regular cadence, and a session still running when maintenance begins can be interrupted before your test finishes. For the session length limits that apply to all virtual devices, see [`maxDuration`](/dev/test-configuration-options/#maxduration).
:::

### Automated Testing on ARM

You can run automated tests on ARM emulators in two ways. Both are available to accounts with ARM access, and
you can use them side by side in the same test suite.

| Option | Device names | How to select ARM |
| :----- | :----------- | :---------------- |
| Dedicated ARM devices | `Google ARM Medium Phone Emulator`<br/>`Google ARM Small Phone Emulator`<br/>`Google ARM Medium Tablet Emulator` | Set `appium:deviceName` to one of these names. `armRequired` isn't needed. |
| ARM versions of existing device options | Android 14–17 device options in the [Platform Configurator](https://saucelabs.com/products/platform-configurator), for example `Google Pixel 9 Pro XL Emulator` | Keep your existing `appium:deviceName` and add `armRequired: true` to `sauce:options`. |

#### Dedicated ARM Devices

The `Google ARM` device names always run on ARM, so you don't need to pass `armRequired`. They're available on
Android 14, 15, 16, and 17.

#### Run Existing Device Options on ARM with `armRequired`

In addition to the dedicated ARM devices, you can run the device options you already use on x86 emulators, such
as Google Pixel phones and tablets, on ARM. Keep the same `appium:deviceName` and `appium:platformVersion`, and
add `armRequired: true` to `sauce:options`. This works the same way as `armRequired` for
[iOS Simulators on Apple Silicon](/mobile-apps/virtual-apple-silicon). Without `armRequired`, the same device
option continues to run on an x86 emulator.

<Tabs groupId="lang-ex">
  <TabItem value="java" label="Java" default>

```java title="Run a Pixel device option on ARM"
UiAutomator2Options options = new UiAutomator2Options();
options.setPlatformName("Android");
options.setPlatformVersion("16");
options.setDeviceName("Google Pixel 9 Pro XL Emulator");
options.setApp("storage:filename=my-app.apk");

Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("armRequired", true);
options.setCapability("sauce:options", sauceOptions);
```

  </TabItem>
  <TabItem value="js" label="Node.js">

```javascript title="Run a Pixel device option on ARM"
const capabilities = {
  platformName: 'Android',
  'appium:platformVersion': '16',
  'appium:deviceName': 'Google Pixel 9 Pro XL Emulator',
  'appium:automationName': 'UiAutomator2',
  'appium:app': 'storage:filename=my-app.apk',
  'sauce:options': {
    armRequired: true,
  },
};
```

  </TabItem>
  <TabItem value="python" label="Python">

```python title="Run a Pixel device option on ARM"
from appium.options.android import UiAutomator2Options

options = UiAutomator2Options()
options.platform_name = "Android"
options.platform_version = "16"
options.device_name = "Google Pixel 9 Pro XL Emulator"
options.app = "storage:filename=my-app.apk"
options.set_capability("sauce:options", {"armRequired": True})
```

  </TabItem>
</Tabs>

:::caution Pass `armRequired` inside `sauce:options`
`armRequired` must be set inside `sauce:options`. If you pass it as `appium:armRequired`, the test still starts,
but it runs on an x86 emulator and no error is returned.
:::

Support for ARM versions of existing device options has the following limits:

- **Android 14, 15, 16, and 17 only.** Device options on Android 13 and earlier run on x86 emulators only.
- **Not every device option is supported yet.** The `Google Pixel 10 Pro Fold ps16k Emulator` isn't yet
  available on ARM. Run it without `armRequired` to test on x86.
- **Automated testing only.** In Live Testing, use the **Google ARM Emulator**. See [Live Testing](#live-testing).

### Live Testing

If your account has access to Android ARM, the **Google ARM Emulator** appears in the Mobile Virtual section of **Live > Mobile App** and **Live > Cross Browser**.

Within a live test you can interact with the app and device using click, scroll, and text input. Use the shortcut actions sidebar for additional controls, including **Rotation** and **Device Location** (with coordinates).

#### Troubleshooting Live Testing Connections

Live Testing streams the device over WebRTC using Cloudflare's network. Corporate firewalls, VPNs, and proxies can block this connection. If a session won't load or freezes, work through the following steps.

**1. Refresh the session.** Intermittent streaming delays often resolve on reconnect.

**2. Check the connection.** Open `chrome://webrtc-internals` in a second tab **before** starting your live session — the page only records connections created after it is open. Start the session in Sauce Labs, then find the section for the Sauce Labs connection:

- **Working:** the ICE connection state reaches `connected` and an `ICE Candidate pair:` line is shown.
- **Blocked:** the state goes `checking` → `failed` with no candidate pair. Your network is blocking the stream. Go to step 3.
- **Blocked (strict networks):** ICE candidate gathering completes with no candidates listed and the connection state never changes — no `checking`, no `failed`. Your network is blocking all paths to the stream. Go to step 3.
- **Drops mid-session:** the state reaches `connected` but later shows `disconnected` or `failed`. This is usually a VPN or proxy timeout — share this detail with your IT team.

**3. Try one session off VPN.** If you can, run a session with the VPN disconnected or on a mobile hotspot. If the session works there, the issue is your corporate network path, and steps 4 and 5 will tell your IT team what to change.

**4. Ask your IT team to allow Cloudflare TURN.**

:::caution Most common cause: TLS inspection
If your organization uses a TLS-inspecting proxy or secure web gateway (for example, Zscaler or Netskope), a bypass for `turn.cloudflare.com` is required. TLS inspection breaks the connection even on port 443, so the TLS 443 fallback that customers and IT teams expect to work will still fail.
:::

Most remaining issues are resolved by allowlisting:

- **Hosts:** `turn.cloudflare.com`, `stun.cloudflare.com`
- **Ports:** UDP 3478 (preferred), TCP 3478/80, TLS 5349/443
- **IP addresses, if IP allowlisting is required:** `141.101.90.1/32`, `162.159.207.1/32`, `2a06:98c1:3200::1/128`, `2606:4700:48::1/128`

:::note For IT teams: IP allowlists need revalidation
Cloudflare states that it cannot guarantee the IP addresses used for its TURN service will stay the same. Allowlist by hostname where your policy allows it. If you must use IP-based rules, monitor DNS for `turn.cloudflare.com` and revalidate the list whenever it changes. See Cloudflare's [TURN FAQ](https://developers.cloudflare.com/calls/turn/faq/) for details.
:::

**5. Still stuck?** In `chrome://webrtc-internals`, expand **Create a WebRTC-Internals dump** and click **Download**. Send the file to your account team, along with whether you were on a VPN or proxy.

---

Have questions? Visit the [Sauce Labs Community](https://support.saucelabs.com/hc/en-us/community/topics) or contact your account team.
