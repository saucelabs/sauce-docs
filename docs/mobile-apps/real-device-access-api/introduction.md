---
id: real-device-access-api-introduction
title: Real Device Access API Guide
sidebar_label: Introduction
---

:::caution Enterprise Plans only
The Access API is available on Enterprise plans only. It is not included in self-serve plans. To enable it for your organization, contact your Customer Success Manager or [request a demo](https://saucelabs.com/request-demo) to upgrade to an Enterprise plan.
:::

The **Real Device Access API** provides you with direct access to Sauce Labs’ real device cloud, both the public devices shared across all customers and the private devices reserved for your organization. Instead of wiring every workflow through test-frameworks, you reserve a device once, interact with it over HTTP/WebSockets, and decide how to drive automation, debugging, or observability.

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
private devices. The API is the same for both, but entitlements, session duration, and a few device
operations differ. See [Public and Private Devices](public-and-private-devices.md) for the details.

## What You'll Need

- A Sauce Labs Enterprise account ([log in](https://accounts.saucelabs.com/am/XUI/#login/)) entitled to the Access API on public devices, private devices, or both.
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings) for Basic Auth.
- Familiarity with REST/WebSocket clients (`curl`, Postman, Bruno, or an HTTP library).

## Where To Go Next

- **[Integration Guide](integration-guide.md):** Step-by-step tour of authentication, device filtering, and session management.
- **[Public and Private Devices](public-and-private-devices.md):** Entitlements, session limits, and what each device class supports.
- **[Local Appium](local-appium.md):** Bridge a local Appium server to Sauce Labs devices using `vusbUrl` (Android) or HTTP forwarding (iOS).
- **[Sauce Labs Hosted Appium](sauce-labs-hosted-appium.md):** Keep our hosted Appium server running next to your reserved device and run an entire suite on a single session.
- **[Mastering the Companion Socket](mastering-companion-socket.md):** Learn how to stream real-time device logs, Appium logs, and network traffic using the Companion Socket.
- **[Device Control Socket](device-control-socket.md):** Stream the live device screen and send touch, gesture, and navigation commands over WebSocket.