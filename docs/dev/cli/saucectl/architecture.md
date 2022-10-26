---
id: architecture
title: Architecture
sidebar_label: Architecture
---

## Components

This diagram illustrates a high level, simplified overview of saucectl's interactions with the Sauce Labs environment.

<img src="/img/saucectl/components.jpg" />

Here's what happens in a nutshell:

1. `saucectl` sends the test payload (mobile app, test app or project files) to the app storage.
2. Depending on the capabilities of the underlying test framework (say, Playwright or Espresso), `saucectl` will call the appropriate device cloud that is capable of running your tests.
3. The device cloud allocates a device for your request, retrieves the payload from app storage and runs the tests.
