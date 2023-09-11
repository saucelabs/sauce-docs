---
id: gestures
title: Gestures support on Real Devices
sidebar_label: Gestures
hide_table_of_contents: true
---

Building a great user experience is more than just design. Equally important is creating intuitive user interactions and touch gestures. For more information, see:

- [Sauce Labs Mobile App Gestures | GitHub](https://github.com/saucelabs/sample-app-mobile/#gestures)
- [How To Do Multi-Touch Gestures in Live Testing](https://saucelabs.com/blog/how-to-do-multi-touch-gestures-in-live-testing)

### What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

### What gestures are supported on Real Devices?

#### On iOS we are supporting the following gestures:

- **Pinch to Zoom**: Exclusive to iOS, activate using your trackpad or holding the ALT(Windows)/Option(MacOS) key [during a Live Testing session.](https://saucelabs.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvrc8wif0t20g%2F72k6sPCuyuxDj0XUECBKs3%2Fa8df5afe7be23b6f1017e793b037e34c%2Fpinch_zoom.gif&w=3840&q=75)
- **Two-Finger Scroll**: Captures both rapid and gradual scrolling actions.
- **Mouse/Trackpad Journey**: Replicates intricate touch actions such as:
  - Drag and Drop
  - Sliders
  - Complex screen drawings (e.g.: Drawing circles)
  - Slow swipe up from the home button to trigger [the Recent Apps view and switch apps.](https://support.apple.com/en-afri/HT202070#:~:text=Double%2Dclick%20the%20Home%20button,that%20you%20want%20to%20use.)
- **Taps and Clicks**: Standard input actions are supported.

#### On Android we are supporting the following gestures:

- **Two-Finger Scroll**: Handles both fast and slow scrolling movements.
- **Mouse/Trackpad Journey**: Emulates complex touch interactions like:
  - Drag and Drop
  - Sliders
  - Complex screen drawings
- **Taps and Clicks:** Basic input gestures are supported.
- **Zoom in Google Maps or Maps SDK:** For apps with Maps SDK integrated or tests involving Google Maps, zooming is possible through specific gestures:
  - Double-tap and hold, then drag to zoom in or out. [More here.](https://support.google.com/maps/answer/6396990?hl=en&co=GENIE.Platform%3DAndroid#:~:text=preferred%20icon%20size.-,Zoom%20in%20the%20map,-You%20can%20zoom)
