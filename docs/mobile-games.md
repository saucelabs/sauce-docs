---
id: mobile-games
title: Mobile Game Testing
sidebar_label: Getting Started
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Test your iOS and Android mobile games on real devices in the Sauce Labs Cloud. Upload your `.apk` or `.ipa` build via [App Storage](/mobile-apps/app-storage) — Unity, Unreal, and native game builds use the same upload product as any other mobile app — then follow the guides below.

<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
    <img src={useBaseUrl('img/overview/live-testing.svg')} alt="live testing icon" width="20px"/>
    <h2>Live Testing</h2>
    <p>Play your game manually on Sauce Labs real devices to validate touch and multi-touch gestures, check performance, and reproduce production bugs.</p>
    <ul>
        <li><a href="/mobile-games/live-testing/live-mobile-game-testing">Live Mobile Game Testing</a></li>
    </ul>
    </div>
  </div>
  <div className="box box2 card">
    <div className="container">
    <img src={useBaseUrl('img/overview/automated.svg')} alt="automated testing icon" height="20px"/>
    <h2>Automated Testing</h2>
    <p>Automate your mobile game tests on Sauce real devices using AltTester for Unity-instrumented C# tests, or Appium when your game exposes native accessibility hooks.</p>
    <ul>
        <li><a href="/mobile-games/automated-testing/alttester">AltTester for Unity</a></li>
        <li><a href="/mobile-games/automated-testing/appium-for-games">Appium for Games</a></li>
    </ul>
    </div>
  </div>
</div>

## Related Products

Sauce Labs products commonly used alongside game testing.

<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
    <a href="/error-reporting/getting-started"><h3>Error Reporting</h3></a>
    <p>Capture and symbolicate crashes from your Unity, Unreal, CryEngine, or console games. First-class integrations for Unity, Unreal, PlayStation, Xbox, and Nintendo.</p>
    </div>
  </div>
  <div className="box box2 card">
    <div className="container">
    <a href="/testfairy"><h3>App Distribution</h3></a>
    <p>Distribute pre-release game builds to internal QA and external beta testers before promoting them to automated Sauce real-device runs.</p>
    </div>
  </div>
</div>
