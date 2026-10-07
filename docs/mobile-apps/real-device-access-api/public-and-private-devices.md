---
id: real-device-access-api-public-and-private-devices
title: Public and Private Devices on the Real Device Access API
sidebar_label: Public and Private Devices
---

A [Real Device Access API](introduction.md) session runs either on a **public device** from the shared Sauce Labs cloud or on one of your organization's **private devices**. The API surface is the same for both: the same endpoints, the same session lifecycle, the same test results.

The differences come from what a public device is: shared infrastructure that is cleaned and handed to the next customer after your session. Anything that could change the device beyond a session, or that would give one customer low-level access to shared hardware, is reserved for private devices.

## Entitlements and Concurrency

Public and private devices are entitled separately and counted separately. Each entitlement sets how many devices of that class your organization can hold in Access API sessions at the same time. Running out on one class does not affect the other.

Organizations without a paid Access API entitlement for a device class fall back to the free tier, which allows one device of that class at a time. Contact your Customer Success Manager or the Sauce Labs Support Team to enable or raise an entitlement.

A device counts against your concurrency from the moment a device is allocated for that session, until the session is closed or expires. When no concurrency is left for the device class the session would run on, `POST /sessions` returns a `409`:

| Title | Meaning |
| --- | --- |
| `Access API Concurrency Limit Reached` | Your paid entitlement for this device class is fully in use. |
| `Free Tier Concurrency Limit Reached` | Your organization has no paid entitlement for this device class and already holds the one device the free tier allows. |

Close a session you no longer need to release its device.

## Choosing a Device Class

A session runs on a private or a public device depending on which devices match the `device` query in `POST /sessions`. To see which devices you can target, list them with `GET /devices/status`:

- `isPrivateDevice` tells you the class of each device.
- `privateOnly=true` limits the list to your organization's private devices.

```shell
curl -u $AUTH "$BASE_URL/devices/status?privateOnly=true"
```

Pass the `descriptor` of a device from that list as `device.deviceName` to target it. See [Device Identification and Filtering](integration-guide.md#device-identification-and-filtering) for how `deviceName` matching works.

## Session Duration

| | Public Devices | Private Devices |
| --- | :---: | :---: |
| Maximum session duration | 1 hour | 24 hours |

Set the duration with `configuration.sessionDuration` when you create the session. If you omit it, the default is 6 hours. A duration above the maximum for the device class is shortened to that maximum rather than rejected, so on a public device the default comes out as 1 hour. Read `expiresAt` from the session response to see when the session actually ends.

## Capabilities

| Capability | Public Devices | Private Devices |
|---|:---:|:---:|
| **Session** | | |
| Many tests on one session | ✅ | ✅ |
| **Device control** | | |
| App installation, launch, and uninstall | ✅ | ✅ |
| File management (list, push, pull) | ✅ | ✅ |
| `adb shell` commands (Android) | Allowlisted commands only | Unrestricted |
| Device reboot | ❌ | ✅ |
| Custom WebDriverAgent (iOS) | ❌ | ✅ |
| [Low-level device access](connect-adb-xcode.md) (ADB, Xcode, libimobiledevice, [local Appium](local-appium.md)) | ❌ | ✅ |
| **Observability** | | |
| Live video stream | ✅ | ✅ |
| Live device logs | ✅ | ✅ |
| Network capture (HAR) | ✅ | ✅ |
| Test results and artifacts | ✅ | ✅ |
| **Appium** | | |
| Sauce Labs hosted Appium | ✅ | ✅ |

## Device Status

`GET /devices/status` reports devices differently per class:

- **Private devices** show the exact state of each physical device, and `inUseBy` names the user holding it.
- **Public devices** show one combined state per device model (`descriptor`), since many physical devices can share one descriptor. The descriptor is marked `AVAILABLE` if any of those devices is available.

## What Public Devices Return Instead

When you call an operation that is reserved for private devices on a public-device session, the API tells you so instead of failing silently:

| Operation | Response on a public device |
| --- | --- |
| `adb shell` command not on the allowlist | `400`. Every rejected part of a chained command is named in `detail`. The allowlist is published in the [Mobile FAQ](/mobile-apps/mobile-faq/#im-encountering-errors-when-executing-adb-shell-commands-what-could-be-the-issue). |
| Close the session with `rebootDevice=true` | `403`. The session stays open; send the request again without the flag to close it. |
| Launch a custom WebDriverAgent, or read its status | `403` — `Feature not available on public devices`. |
| Low-level device access | The session has no `adbUrl`, `usbmuxdUrl`, or `vusbUrl`, so there is nothing for `access-api-connect` to bridge to. |

For the full request and response schemas, see the [Real Device Access API Reference](/real-device-access-api).
