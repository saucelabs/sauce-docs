---
id: real-device-access-api-introduction
title: Real Device Access API Guide
sidebar_label: Introduction
---

:::info
Access to public devices requires a separate entitlement. Contact your Customer Success Manager or the
Sauce Labs Support Team to enable it. While we continue to refine the product, we do not plan to introduce
breaking changes to the current API specification.
:::

The **Real Device Access API** is your direct doorway to Sauce Labs’ real device cloud, both the public devices shared across all customers and the private devices reserved for your organization. Instead of wiring every workflow through test-frameworks, you reserve a device once, interact with it over HTTP/WebSockets, and decide how to drive automation, debugging, or observability.

Historically, accessing real devices meant depending on a specific framework like Appium, XCTest, XCUITest, or Espresso. The Access API removes that dependency by exposing our infrastructure through standard protocols so you can build your own testing, validation, or monitoring solutions—without running a physical lab.

## Why Teams Adopt The Access API

- Remove hard dependencies on a single automation framework and mix in your own tooling.
- Keep a reserved device busy by running multiple operations back-to-back on one session.
- Build custom services—observability dashboards, AI agents, or workflow orchestrators—that need device-level control.

## How It Works

1. **Session lifecycle (HTTP):** Use `/sessions` to create, inspect, and close sessions. Optional payloads let you target devices (`device.deviceName`, `device.os`), set `sessionDuration`, or attach Sauce Connect tunnels.
2. **Live data (WebSockets):** Subscribe to the `AlternativeIO` socket for MJPEG video and the `Companion` socket for JSON logs/events while a session is active.
3. **Device operations:** Call dedicated endpoints to install apps, run ADB shell commands, proxy HTTP traffic, or start a hosted Appium server—all from the same session.

For the complete endpoint contract, see the [Real Device Access API Reference](/real-device-access-api).

## Public and Private Devices

A session runs on a public device from the shared Sauce Labs cloud or on one of your organization's
private devices. The API surface is the same for both: the same endpoints, the same session lifecycle,
the same test results.

What differs is the session length, and a handful of device-level operations that are available only on
private devices.

| Capability | Public Devices | Private Devices |
|---|:---:|:---:|
| **Session** | | |
| Maximum session duration | Up to 1 hour | Up to 24 hours |
| Many tests on one session | ✅ | ✅ |
| Concurrency | Public device entitlement | Private device entitlement |
| **Device control** | | |
| App installation, launch, and uninstall | ✅ | ✅ |
| File management (list, push, pull) | ✅ | ✅ |
| `adb shell` commands (Android) | Allowlisted commands only | Unrestricted |
| Device reboot | ❌ | ✅ |
| Custom WebDriverAgent (iOS) | ❌ | ✅ |
| Low-Level Device Access | ❌ | ✅ |
| Custom Appium Driver | ❌ | ✅ |
| **Observability** | | |
| Live video stream | ✅ | ✅ |
| Live device logs | ✅ | ✅ |
| Network capture (HAR) | ✅ | ✅ |
| Test results and artifacts | ✅ | ✅ |
| **Appium** | | |
| Sauce Labs hosted Appium | ✅ | ✅ |

The [Real Device Access API Reference](/real-device-access-api) carries the rest: the fields that
identify a device's class under the `Device Catalog` tag, and the response each endpoint returns when an
operation is unavailable on a public device.

## What You'll Need

- A Sauce Labs account ([log in](https://accounts.saucelabs.com/am/XUI/#login/)) entitled to the Access API on public devices, private devices, or both.
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings) for Basic Auth.
- Familiarity with REST/WebSocket clients (`curl`, Postman, Bruno, or an HTTP library).

## Where To Go Next

- **[Integration Guide](integration-guide.md):** Step-by-step tour of authentication, device filtering, and session management.
- **[Local Appium](local-appium.md):** Bridge a local Appium server to Sauce Labs devices using `vusbUrl` (Android) or HTTP forwarding (iOS).
- **[Sauce Labs Hosted Appium](sauce-labs-hosted-appium.md):** Keep our hosted Appium server running next to your reserved device and run an entire suite on a single session.
- **[Mastering the Companion Socket](mastering-companion-socket.md):** Learn how to stream real-time device logs, Appium logs, and network traffic using the Companion Socket.
- **[Device Control Socket](device-control-socket.md):** Stream the live device screen and send touch, gesture, and navigation commands over WebSocket.