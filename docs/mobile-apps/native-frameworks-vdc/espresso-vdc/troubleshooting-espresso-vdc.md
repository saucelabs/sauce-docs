---
id: troubleshooting-espresso-vdc
title: Troubleshooting Espresso Testing for Virtual Devices
sidebar_label: Troubleshooting Espresso VDC
---

When testing on Sauce emulators, one error to look out for is Espresso test suites running as expected on one Android version, but failing on another version (e.g., "Internal Server Error").

Potential Cause: Application under test requires a minimum Android version or above.

Recommendation: Check the minSdkVersion in build.gradle for your application project.
