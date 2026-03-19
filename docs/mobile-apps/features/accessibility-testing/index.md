---
id: accessibility-testing
title: Accessibility Testing
sidebar_label: Overview
description: Test your app's accessibility on iOS and Android real devices during live testing sessions.
---

<p><small><span className="sauceGreen">Real Devices Only</span></small> <small><span className="sauceGreen">Live Testing Only</span></small></p>

Sauce Labs provides built-in accessibility testing tools for both iOS and Android real devices. These tools allow you to navigate through your app's UI elements using keyboard shortcuts, hear audio feedback for each focused element, and verify that your app is accessible to users with assistive technologies.

## iOS: Live Accessibility Testing

The [iOS Live Accessibility Testing](/mobile-apps/features/accessibility-testing/ios-live-accessibility-testing) tool is a custom-built, native tool that works system-wide on iOS devices. It provides full keyboard navigation, tap support, and audio feedback for all UI elements, including your app, system applications, system pop-ups, and webviews.

Key highlights:

- Arrow keys to navigate between elements
- Enter to tap the focused element
- Audio feedback for each focused element
- Works on all iOS devices and versions available on Sauce Labs

## Android: TalkBack

[Android TalkBack](/mobile-apps/features/accessibility-testing/android-talkback) enables the built-in Android screen reader on real devices with a single click. You can navigate through elements using the keyboard and hear audio feedback for each focused element.

Key highlights:

- Arrow keys to navigate, Enter to activate
- Audio feedback streamed to your browser
- Requires Android 12 or above
- Private devices only
