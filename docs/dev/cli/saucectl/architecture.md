---
id: architecture
title: saucectl Architecture
sidebar_label: Architecture
---

This document provides an overview of the `saucectl` CLI architecture to help you better understand how it works.

## What You'll Need

If you're new to `saucectl`, we recommend reviewing the [Using the saucectl CLI](/dev/cli/saucectl) documentation.

## Architecture

Here's what happens in a nutshell:

1. `saucectl` sends the test payload (mobile app, test app, or project files) to the app storage.
2. Depending on the capabilities of the underlying test framework (say, Playwright or Espresso), `saucectl` will call the appropriate device cloud that is capable of running your tests.
3. The device cloud allocates a device for your request, retrieves the payload from app storage, and runs the tests.

This diagram illustrates at high level how `saucectl` interacts with the Sauce Labs environment.

<img src="/img/saucectl/components.jpg" />
