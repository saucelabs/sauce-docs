---
id: android-emulators
title: Android Emulators on the Sauce Labs Virtual Cloud
sidebar_label: Android Emulators
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs offers a wide range of Android Emulators on our Virtual Device Cloud, providing a stable and high-performance environment for your automated and live testing needs. Our emulators are built to align closely with the latest official Google Developer tools, ensuring parity with the Android Virtual Devices (AVDs) available in [Android Studio](https://developer.android.com/studio).


## Supported Devices and Android Versions

Our selection of Android Emulators corresponds to the most popular AVDs published by Google (specifically the `google_apis_*` device versions). This includes emulators that represent flagship Google devices as well as the default generic Medium Phone. You can view the complete and most current list of available devices and OS versions in the [Platform Configurator](https://saucelabs.com/products/platform-configurator) and in the [Live Testing](https://app.saucelabs.com/live/app-testing/virtual) device selection menu.

Android 12 virtual devices on Sauce Labs are built with API level 32 (also known as Android 12L)

Sauce Labs also offers ARM-native Android emulators for Enterprise customers with the required subscription. See [ARM-Based Android Emulators](#arm-based-android-emulators).

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
ARM-based Android emulators are available to Enterprise customers with the required subscription and Android ARM concurrency allocated to their account. If you don't have access, contact your account manager to discuss upgrading.
:::

Live Testing and automated Appium and Espresso testing are available against Android 14, 15, 16, and 17.

:::note ABI coverage
App and Android test APKs must include the `arm64-v8a` ABI to run on ARM emulators. Rebuild or download a universal APK, or ensure your Gradle splits include `arm64-v8a`.
:::

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
