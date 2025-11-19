---
id: real-device-access-api-introduction
title: Real Device Access API
sidebar_label: Introduction
---
<p><span className="sauceGreen">Open Beta</span></p>

:::info
**This API is currently in Open Beta.**
Access is currently available for customers with **Private Devices** only. The API specification is subject to change as we refine the product.
:::

The **Real Device Access API** is a framework-agnostic solution designed to give platform engineers and strategic partners direct,
low-level control over Sauce Labs real devices.

Historically, accessing real mobile devices required depending on specific testing frameworks like Appium, XCTest, XCUITest, or Espresso.
While powerful, these frameworks can create barriers for teams building observability tools, AI-driven testing platforms, or custom device
orchestration workflows.

The Access API removes these dependencies by exposing our device infrastructure through standard HTTP and WebSocket interfaces, allowing
you to build your own testing, validation, or monitoring solutions on top of our grid—without the complexity of maintaining a physical device lab.

## Key Capabilities

By decoupling device usage from specific test automation frameworks, the Access API enables you to:

* **Orchestrate Sessions:** Allocate and manage device sessions dynamically via HTTP requests, independent of Appium drivers.
* **Stream Real-Time Data:** Access live video (MJPEG) and device logs (JSON) through dedicated AlternativeIO and Companion WebSocket channels for deep observability.
* **Execute Direct Commands:** Perform essential device operations such as installing apps, executing ADB shell commands (Android), and manipulating device settings directly.
* **Integrate Anywhere:** Use any language or tool that supports HTTP/WebSockets (e.g., Python, Node.js, cURL, Postman) to drive device interactions.

## Architecture

The API consists of two primary interfaces:

### HTTP API
The HTTP API handles session lifecycle management and atomic device interactions. Use it to query device status, start or stop sessions, and perform actions like app installation or file transfers.

### WebSocket API
The WebSocket API handles real-time bidirectional data streaming. It provides two dedicated endpoints per session:
* **AlternativeIO Socket:** Streams live screen recordings (MJPEG).
* **Companion Socket:** Streams device logs (`device.log.message`) and other real-time events.

## What You'll Need

To get started with the Access API, you will need:

- A Sauce Labs account ([log in](https://accounts.saucelabs.com/am/XUI/#login/)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- **Access to Private Devices:** You must have **at least one private device** allocated to your Sauce Labs account.
- A basic understanding of REST APIs and tools like `curl`, Postman, or Bruno.

## Next Steps

* **[Integration Guide](integration-guide.md):** Learn how to authenticate, create your first session, and interact with devices.
* **[Local Appium](local-appium.md):** Learn how to connect a local Appium server to our remote devices using the Access API.
* **[Sauce Labs Hosted Appium](sauce-labs-hosted-appium.md):** Discover how to allocate a device once and run multiple Appium tests back-to-back.