---
id: android-talkback
title: Android Live Accessibility Testing
sidebar_label: Android Live Accessibility Testing
description: Test your Android app's accessibility using TalkBack on real devices during live testing sessions.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><small><span className="sauceGreen">Real Devices Only</span></small> <small><span className="sauceGreen">Android Only</span></small> <small><span className="sauceGreen">Live Testing Only</span></small></p>

TalkBack is Android's built-in screen reader. Sauce Labs allows you to enable TalkBack on real devices with a single click during live testing sessions, without going to the OS settings. You can navigate through elements using the keyboard and hear audio feedback for each focused element.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An Android real device session (Live Testing).
- Android 12 or above.
- **Private devices only.** Reach out to our Support Team or your Sauce Labs representative to get this configured.

## Enabling TalkBack

1. Start a **Live Testing** session on an Android real device.
2. Open the **Device Settings** from the left side toolbar.
3. Select and toggle **TalkBack**.
4. Skip with OK or Cancel the native TalkBack guide.

<img src={useBaseUrl('/img/mobile-apps/talkBack-live.png')} alt="Sauce Labs TalkBack" width="751"/>

## Keyboard Navigation

You can use the keyboard to navigate through accessible elements:

| Keyboard Shortcut | Action |
|-------------------|--------|
| **Arrow Keys** (Up, Down, Left, Right) | Navigate through elements |
| **Enter** | Activate the focused element |

## Audio Feedback

Text-to-speech audio of the focused element is streamed to your browser as you interact with the device. For details on audio capture and streaming setup, see [Audio Capture](/mobile-apps/features/audio-capture).

:::note
Text-to-speech audio is not available for download once the session is over.
:::

## Limitations

- TalkBack is only supported on **private devices**. Contact our Support Team to get this configured.
- Android 12 or above is required.
- Website testing is not yet available on Android.

## More Information

- [TalkBack official documentation](https://support.google.com/accessibility/android/answer/6006598)
- [Audio Capture](/mobile-apps/features/audio-capture): Audio capture and streaming on Android devices.
- [Live Mobile App Testing](/mobile-apps/live-testing/live-mobile-app-testing): Overview of live testing features on real devices.
