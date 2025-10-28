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

### Android 15/16 with 16KB Page Size Support

We offer emulators for Android 15 and 16 which include critical support for the 16KB page size memory architecture. The Google Play Store requires that all new apps and app [updates submitted after November 1, 2025](https://developer.android.com/guide/practices/page-sizes), are compatible with 16KB pages. Testing on these emulator configurations is essential to ensure your application meets this requirement and functions correctly for all users. Look for Pixel devices with the `ps16k` label in their name to get started with this new emulators.

### Legacy Device Mapping for Automated Testing

Previously, Sauce Labs offered emulators sized to match the screen resolutions of various Samsung and other non-Google manufactured devices. These emulators used standard Android builds and did not include any manufacturer-specific software or features.
To ensure backward compatibility and prevent disruption to existing test suites, we dynamically map test requests for these legacy device names to a generic Android emulator with a matching screen size and Android OS version. This allows your automated existing tests to continue running without modification. These legacy emulators are not available for Live Testing. 

## Google Chrome Versions

To provide a test environment that accurately reflects real-world user conditions, our Android emulators are provisioned with up-to-date versions of the Google Chrome browser. Running current versions is important for testing mobile web applications, as end-users frequently have the latest version of Chrome on their devices, regardless of their Android OS version.

Below is the current mapping of the default Chrome browser version installed on each Android Emulator version.

| Android OS Version | Google Chrome Version |
| :----------------- | :-------------------- |
| Android 16         | 140                   |
| Android 15         | 140                   |
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
