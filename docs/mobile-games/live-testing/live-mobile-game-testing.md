---
id: live-mobile-game-testing
title: Live Mobile Game Testing
sidebar_label: Live Game Testing
---

Live testing lets you play your iOS or Android game manually on a Sauce Labs real device. Use it to validate touch and multi-touch gestures, check performance and frame drops, capture screenshots and video for bug reports, and reproduce production issues on the exact hardware where they occurred.

## Before You Start

- An active Sauce Labs account
- A `.apk` (Android) or `.ipa` (iOS) game build, uploaded to [App Storage](/mobile-apps/app-storage)

## Starting a Live Session

The live testing UI for games is identical to the live testing UI for any mobile app. Follow the steps in [Live Mobile App Testing](/mobile-apps/live-testing/live-mobile-app-testing) to launch a session and install your build. The rest of this page covers what is specific to games once you are in a session.

## Game-Specific Tips

### Multi-Touch and Gestures

Games rely on pinch, two-finger drag, swipe combinations, and other gestures that single-touch apps rarely use. Sauce real devices support these natively in a live session. See [Gestures](/mobile-apps/features/gestures) for the supported gesture catalog and the UI controls.

### Orientation

Many games force landscape. Rotate the device in the live UI before launching the game; some titles read the initial orientation at launch and never update it again. If the game appears stretched or off-center, end the session and start a new one in the correct orientation.

### Performance and Responsiveness

Live sessions let you observe frame rate drops, input latency, and stuttering directly — things automated tests cannot easily assert on. Use the session video recording to capture problem moments for later review.

### Loading Screens and First Launch

Unity and Unreal builds may compile shaders on first launch, producing a loading screen that lasts 30+ seconds. Plan repro sessions with this in mind: budget extra time for the initial cold start, and where possible reuse a session across multiple repros rather than restarting cold each time.

### Capturing Crash Repros

If the game crashes during a session, capture:

- The exact steps leading to the crash (screen recording is automatic)
- The device model and OS version
- The build version of the game
- Any in-game state (level, character, save slot)

For symbolicated native crash stacks from Unity, Unreal, and console builds, see [Error Reporting](/error-reporting/getting-started).

## Known Limitations

- GPU-bound profiling tools (e.g., RenderDoc, Xcode GPU frame capture) are not available in a live session — use the device's own performance overlay if your engine provides one.
- Native debugging hooks (LLDB, gdb) are not exposed.
- Some games detect rooted/jailbroken environments. Sauce Labs real devices are not rooted or jailbroken, but if your game has a custom anti-tamper check that flags virtualized USB, contact support.

:::note Validate with engineering
The "Known Limitations" list above is the doc author's starting point. Confirm with the Real Device Cloud engineering team before publication.
:::
