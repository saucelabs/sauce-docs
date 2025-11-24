---
id: real-device-access-api-introduction
title: Real Device Access API v2
sidebar_label: Introduction
---
<p><span className="sauceGreen">Open Beta</span></p>

:::info
**This API is in Open Beta.**
Access is currently limited to customers with **Private Devices**. While we continue to refine the product, 
we do not plan to introduce breaking changes to the current API specification.
:::

The **Real Device Access API** is your direct doorway to Sauce Labs’ private device fleet. Instead of wiring every workflow through test-frameworks, you reserve a device once, interact with it over HTTP/WebSockets, and decide how to drive automation, debugging, or observability.

Historically, accessing real devices meant depending on a specific framework like Appium, XCTest, XCUITest, or Espresso. The Access API removes that dependency by exposing our infrastructure through standard protocols so you can build your own testing, validation, or monitoring solutions—without running a physical lab.

## Why Teams Adopt The Access API

- Remove hard dependencies on a single automation framework and mix in your own tooling.
- Keep private devices busy by running multiple operations back-to-back on one session.
- Build custom services—observability dashboards, AI agents, or workflow orchestrators—that need device-level control.

## How It Works

1. **Session lifecycle (HTTP):** Use `/sessions` to create, inspect, and close sessions. Optional payloads let you target devices (`device.deviceName`, `device.os`), set `sessionDuration`, or attach Sauce Connect tunnels.
2. **Live data (WebSockets):** Subscribe to the `AlternativeIO` socket for MJPEG video and the `Companion` socket for JSON logs/events while a session is active.
3. **Device operations:** Call dedicated endpoints to install apps, run ADB shell commands, proxy HTTP traffic, or start a hosted Appium server—all from the same session.

Need the full contract? Review the [Real Device Access API specification](/real-device-access-api).

## What You'll Need

- A Sauce Labs account ([log in](https://accounts.saucelabs.com/am/XUI/#login/)) with at least one private device.
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings) for Basic Auth.
- Familiarity with REST/WebSocket clients (`curl`, Postman, Bruno, or an HTTP library).

## Where To Go Next

- **[Integration Guide](integration-guide.md):** Step-by-step tour of authentication, device filtering, and session management.
- **[Local Appium](local-appium.md):** Bridge a local Appium server to Sauce Labs devices using `vusbUrl` (Android) or HTTP forwarding (iOS).
- **[Sauce Labs Hosted Appium](sauce-labs-hosted-appium.md):** Keep our hosted Appium server running next to your reserved device and run an entire suite on a single session.