---
id: troubleshooting
title: IDE Plugin Troubleshooting
sidebar_label: Troubleshooting
description: Solutions for common Sauce Labs IDE plugin issues and the current known limitations.
keywords:
  - troubleshooting
  - known limitations
  - ffmpeg
  - entitlements
  - ide plugin
---

Solutions for common issues, plus the current known limitations.

## Common issues

### I cannot start a live session on a device

Live sessions require **private (dedicated) devices** and **Real Device Access API concurrency** on your account. If you believe you should have access, ask your organization administrator to review your team membership and access settings, and see [Requirements and entitlements](/ide-plugins#requirements-and-entitlements).

### The Test Authoring panel says the feature is not available

AI Test Authoring requires the [Sauce AI for Test Authoring](/sauce-ai/ai-authoring) add-on. If your account was recently entitled, or you switched from an account without the entitlement to one that has it, reload the editor window so the entitled views populate.

### `SAUCE_APPIUM_URL` is empty in my terminal

- Injection only applies to terminals opened **after** you enable the toggle. Close the terminal and open a new one.
- Confirm the status bar shows **`Appium: <device name>`**, not **`Appium: OFF`**.
- Confirm the device session is still running; the variable is tied to the active session.

### Session recording fails

MP4 recording requires **FFmpeg** on your `PATH`. Install it and restart your editor:

- macOS: `brew install ffmpeg`
- Linux: `sudo apt install ffmpeg` (or the equivalent for your distribution)
- Windows: download from [ffmpeg.org](https://ffmpeg.org/download.html) and add `bin/` to your `PATH`

PNG screenshots work without FFmpeg.

### Sign-in fails

- Verify your **username** and **access key** against [Sauce Labs user settings](https://app.saucelabs.com/user-settings).
- Verify you picked the **data center region** that matches your account. Credentials are validated per region.

### The device list is empty

- Confirm you are signed in and the correct region is selected; devices are region-specific.
- The list shows your organization's private devices. If no private devices are assigned to your account or team, the list is empty; ask your organization administrator about private device access.
- Run **Sauce RDC: Refresh Devices**.

## Known limitations

- **No multi-touch or pinch gestures** in the live session. Single-touch tap, swipe, and drag work.
- **No hardware keyboard input** into the device panel. Use the device's on-screen keyboard for text entry.
- **Large recordings can consume significant disk space.** There is no built-in size cap yet.
- **New test suites and schedules cannot be created in the IDE.** You can save a test case into an existing suite; creating suites and schedules happens in the Sauce Labs Test Authoring UI or through the API.
- **Private mobile devices are not yet available in the authoring device picker.** Mobile Real and Mobile Virtual devices are available.

## Getting help

- **Plugin diagnostics:** the **Output** panel's **Sauce RDC** channel contains the plugin's own logs. Include its contents with any bug report.
- **Sauce Labs support:** [help.saucelabs.com](https://help.saucelabs.com).
- **Platform-level topics** such as app storage, test configuration, and organization management are covered in the rest of the [Sauce Labs docs](https://docs.saucelabs.com/).
