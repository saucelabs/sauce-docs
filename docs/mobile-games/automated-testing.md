---
id: automated-testing
title: Automated Game Testing
sidebar_label: Automated Testing
hide_table_of_contents: true
---

Automate your mobile game tests on Sauce Labs real devices using AltTester for Unity-instrumented C# tests, or Appium when your game exposes native accessibility hooks.

## Choose Your Framework

| | AltTester | Appium |
|---|---|---|
| Best for | Unity games | Native or hybrid games with accessible UI |
| Language | C# (NUnit) | Any Appium-supported language |
| Requires instrumenting the build | Yes (AltTester SDK) | No |
| Sees inside the Unity scene graph | Yes | No |
| Works on non-Unity engines (Unreal, Cocos, native) | No | Yes, where the engine exposes accessibility metadata |

<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
    <a href="/mobile-games/automated-testing/alttester"><h3>AltTester for Unity</h3></a>
    <p>End-to-end walkthrough: instrument your Unity build, upload to Sauce, configure capabilities, and run a sample C# test against the live game on a real device.</p>
    </div>
  </div>
  <div className="box box2 card">
    <div className="container">
    <a href="/mobile-games/automated-testing/appium-for-games"><h3>Appium for Games</h3></a>
    <p>Game-specific Appium techniques: image-based locators, coordinate taps, multi-touch gestures, orientation handling, and waits for loading screens.</p>
    </div>
  </div>
</div>

:::tip Advanced custom automation
Need a path outside Appium and AltTester? The [Real Device Access API](/mobile-apps/real-device-access-api/real-device-access-api-introduction) (Open Beta) gives you direct HTTP and WebSocket access to private Sauce real devices for custom test harnesses, debugging, or observability tools.
:::
