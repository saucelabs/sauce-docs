---
id: alttester
title: AltTester for Mobile Game Automation
sidebar_label: Overview
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

[AltTester](https://alttester.com/) is an open-source UI test automation tool for **game engines**. It instruments your build with a small SDK that exposes the in-game scene graph to C# tests over WebSocket, so tests can find GameObjects (Unity) or actors and widgets (Unreal) by name and drive real input on them. Sauce Labs supports AltTester for both Unity and Unreal Engine on real iOS and Android devices.

## How It Works with Sauce Labs

```text
+-------------------+        +-------------------+        +----------------------+
|  C# test (NUnit)  |  WS    |  AltTester        |  WS    |  Instrumented game   |
|  AltTester-Driver | <----> |  Desktop or       | <----> |  on Sauce real       |
|  Appium.WebDriver |  HTTP  |  Sauce Connect    |        |  device (Appium)     |
+-------------------+        +-------------------+        +----------------------+
```

1. You instrument your Unity or Unreal build with the AltTester SDK and produce a `.apk` or `.ipa`.
2. You upload that build to **Sauce App Storage**.
3. Your C# test starts an **Appium** session on a Sauce real device, which installs and launches the game.
4. Once the game is running, your test connects to the **AltTester C# driver**, which talks to the in-game SDK over WebSocket (tunneled through Sauce Connect Proxy or a public VM).
5. Your test queries in-game objects, simulates input, and asserts on game state.

The architecture above is identical for Unity and Unreal — the difference is in the SDK you install and the way you express locators against the engine's scene graph.

## Choose Your Engine

<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
    <a href="/mobile-apps/automated-testing/alttester/unity"><h3>AltTester for Unity</h3></a>
    <p>Instrument a Unity build with the AltTester Unity SDK and run C# tests against it on Sauce Labs real devices. End-to-end walkthrough.</p>
    </div>
  </div>
  <div className="box box2 card">
    <div className="container">
    <a href="/mobile-apps/automated-testing/alttester/unreal"><h3>AltTester for Unreal Engine</h3></a>
    <p>Instrument an Unreal Engine build with the AltTester Unreal plugin and run C# tests against it on Sauce Labs real devices.</p>
    </div>
  </div>
</div>
