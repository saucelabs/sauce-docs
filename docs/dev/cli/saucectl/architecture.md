---
id: architecture
title: saucectl Architecture
sidebar_label: Architecture
---

This document provides an overview of the `saucectl` CLI architecture to help you better understand how it works.

## Architecture Components

The following provides a high-level overview of the `saucectl` CLI architecture.

1. `saucectl` sends the test payload (mobile app, test app, or project files) to the app storage.
2. Depending on the capabilities of the underlying test framework (e.g., Playwright or Espresso), `saucectl` will call the appropriate device cloud that is capable of running your tests.
3. The device cloud allocates a device for your request, retrieves the payload from app storage, and runs the tests.

This diagram illustrates at high level how `saucectl` interacts with the Sauce Labs environment.

<img src="/img/saucectl/components.jpg" />

## More Information

- [Using the saucectl CLI](/dev/cli/saucectl)
