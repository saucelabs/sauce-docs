---
id: real-device-cloud
title: Real Device Cloud in Your IDE
sidebar_label: Real Device Cloud
description: Browse Sauce Labs real devices, run live sessions, install apps, stream device logs, and run Appium tests without leaving your IDE.
keywords:
  - real device testing
  - live testing
  - device session
  - appium
  - device logs
  - install app
  - ide plugin
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Real Device Cloud view lets you browse Sauce Labs real devices, start live sessions, interact with a device, stream its logs, and run Appium tests against it, all without leaving your IDE.

<a href={useBaseUrl('img/ide-plugins/live-session.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/live-session.png')} alt="A live real device session inside the IDE: the device list on the left, the live device screen in the center with a device action toolbar, and real-time logs on the right" /></a>

## Browse and filter devices

Open the **Real Device Cloud** view from the Activity Bar. The **Real Devices** section lists your organization's private devices available in your current region. Each row shows the device name, OS version, screen size and resolution, and availability status.

<a href={useBaseUrl('img/ide-plugins/device-list.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/device-list.png')} alt="The Real Device Cloud sidebar showing the Account, Region, Real Devices, and Sessions sections, with device availability indicators and running sessions with expiry countdowns" width="480" /></a>

- **Filter** by platform or private-device access with **Sauce RDC: Filter Devices** (`all`, `apple`, `android`, `private`), or use the filter button in the view header.
- **Search** by model name with **Sauce RDC: Search Devices**.
- **Refresh** the list at any time with **Sauce RDC: Refresh Devices**. Availability updates automatically on a short polling interval.

## Start a live session

1. Click the play icon next to an available device (green dot), or right-click the device and choose **Start Session**.
2. A new **Sauce RDC** tab opens showing the live device screen. The first frame arrives 15 to 30 seconds after the device is allocated.
3. The session also appears in the **Sessions** sidebar section, where you can reopen the device view or close the session.

The session view puts the live device screen, the device action toolbar, and the log streams side by side:

<a href={useBaseUrl('img/ide-plugins/session-toolbar.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/session-toolbar.png')} alt="A live device session: the device screen on the left, the device action toolbar in the middle, and the Logs panel with Device, Session, Appium, and Network tabs on the right" /></a>

## Interact with the device

The device screen streams into the panel in real time, and your input is sent back to the physical device:

- **Tap:** click anywhere on the screen.
- **Swipe and drag:** click and drag.
- **Hardware buttons:** the panel toolbar provides **Home**, **Back** (Android), **App Switch** (Android), and **Rotate**.

Multi-touch gestures such as pinch-to-zoom and hardware keyboard input are not supported yet. Use the device's on-screen keyboard for text entry.

## Install your app

Install a build directly on the active device:

1. Drag a `.apk` or `.ipa` file onto the device screen, or click the upload button in the panel toolbar and pick the file.
2. The plugin uploads the build to Sauce Labs app storage and installs it on the device. Progress is shown in the panel.
3. iOS apps are instrumented automatically during installation.

## Capture screenshots and recordings

- **Screenshot:** click the screenshot button in the toolbar. The current frame is saved as a PNG file and opened in the editor automatically.
- **Record:** click the record button to capture the session as an MP4 video. Recording requires FFmpeg on your `PATH`; see [Prerequisites](/ide-plugins/installation#prerequisites). Long recordings can consume significant disk space.

## View logs in real time

During a live session, the **Logs** panel streams diagnostic data from the device into your IDE, so you can read logs next to the code that produces them instead of switching to the web dashboard. The streams are grouped into tabs:

| Tab | Contents |
| --- | --- |
| Device | The device system log (logcat on Android, syslog on iOS), including your app's output and crash stack traces |
| Session | Events for the current device session |
| Appium | The Sauce-hosted Appium server log for the active session |
| Network | HTTP(S) requests and responses observed during the session |

All streams update live while the session is running. Log lines are color-coded by severity across five levels (Verbose, Debug, Info, Warning, Error), so warnings and errors stand out while you scan.

To narrow what you see:

- **By severity:** use the level dropdown (**All Levels** by default) to show only lines at or above a given severity.
- **By text:** use the **Filter Logs** box to narrow the visible lines to those matching what you type. The filter is debounced, so it applies as you finish typing rather than on every keystroke.

The panel toolbar also lets you pause the stream, clear the panel, and download the log. To keep the panels responsive, each stream keeps the most recent 5,000 lines.

A typical debugging loop: reproduce the problem on the device screen, watch the **Device** tab for the crash stack trace, check the **Network** tab if a backend call is involved, then fix the code and reinstall the build on the same session. All without leaving your IDE.

## Run Appium tests against the live session

Run your local Appium tests against whichever live device session you have open, without editing test code or copying connection URLs by hand.

When you enable Appium injection, the plugin starts a Sauce-hosted Appium server for the active device session and injects its URL into your environment as the `SAUCE_APPIUM_URL` variable. Your tests read the variable and connect to the live device. When the toggle is off, they fall back to your local Appium server.

### One-time setup

1. Start a live session on the device you want to drive.
2. Click **`Appium: OFF`** in the status bar (bottom left). It flips to **`Appium: <device name>`** to indicate injection is active. You can also run **Sauce RDC: Toggle Appium Injection** from the Command Palette.
3. Open a **new** integrated terminal (**Terminal** > **New Terminal**). Terminals opened before you flipped the toggle do not have the variable, so re-open them.
4. Verify the variable is set:

   ```bash
   echo $SAUCE_APPIUM_URL
   ```

   You should see a URL like `https://ondemand.us-west-1.saucelabs.com/wd/hub`.

### Make your test read `SAUCE_APPIUM_URL`

Open any `.java`, `.kt`, `.py`, `.js`, or `.ts` test file that constructs an Appium driver. An **"Add SAUCE_APPIUM_URL support"** code annotation appears above the driver initialization line. Click it to rewrite the code automatically. In Java, for example:

```java
String appiumUrl = System.getenv("SAUCE_APPIUM_URL");
if (appiumUrl == null || appiumUrl.isEmpty()) {
    appiumUrl = "http://localhost:4723";
}
AppiumDriver driver = new AppiumDriver(new URL(appiumUrl), caps);
```

Equivalent transforms are available for Kotlin, Python, JavaScript, and TypeScript.

With this pattern, your tests run against the live Sauce Labs session when the toggle is on and fall back to local Appium at `localhost:4723` when it is off. No branching logic in your code and nothing to undo before committing.

### Debug configurations

The plugin also injects `SAUCE_APPIUM_URL` into launch configurations for ten supported debug adapter types (including Node.js/TypeScript, Python, Java, Kotlin, .NET, Go, Dart, and Ruby), so **Run and Debug** picks up the variable the same way your terminal does.

### Tips

- The Appium server is co-located with your device session and its lifecycle is managed by the plugin. You do not need to start or stop anything on Sauce Labs yourself.
- If a test cannot connect, confirm the status bar shows **`Appium: <device name>`**, that the session is still running, and that the terminal you are using was opened after you enabled injection.

## Session lifetime

Every session has an expiry deadline:

- A **countdown** is shown in the device-view header and in the **Sessions** sidebar, color-coded as the deadline approaches.
- A warning notification fires **five minutes** before the session ends.
- When the countdown reaches zero, the panel closes itself automatically so you do not keep interacting with a dead session.

To end a session yourself, click **Stop** in the panel toolbar, or right-click the session in the **Sessions** section and choose **Close Session**.

## Next steps

- [Author tests with AI](/ide-plugins/ai-test-authoring)
- [Troubleshooting](/ide-plugins/troubleshooting)
