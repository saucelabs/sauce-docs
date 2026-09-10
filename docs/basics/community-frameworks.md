---
id: community-frameworks
title: Community Frameworks on Sauce Labs
sidebar_label: Overview
description: Open-source test frameworks and tools built outside Sauce Labs that run on the Sauce Labs cloud through our standard Appium and WebDriver BiDi endpoints.
keywords:
- community
- frameworks
- maestro
- vibium
---

Community frameworks are open-source test frameworks and tools built and maintained outside Sauce Labs. They run on
the Sauce Labs cloud through our standard Appium and WebDriver BiDi endpoints, and Sauce Labs has validated each guide
in this section end to end, so you get the same video, logs, and test results as with any other framework.

## How Community Frameworks Differ from Sauce Labs Frameworks

Sauce Labs frameworks are the ones we run for you or support directly: Selenium and Appium, whose servers run in
the Sauce Labs cloud, and Cypress, Playwright, TestCafe, Espresso, and XCUITest, which the `saucectl` CLI runs on
Sauce Labs infrastructure. Community frameworks reach the same cloud, but the framework itself belongs to its
open-source project.

|                                                        | Sauce Labs frameworks                                               | Community frameworks                                                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Examples                                               | Selenium, Appium, Cypress, Playwright, TestCafe, Espresso, XCUITest | Maestro (via maestro-runner), Vibium                                                                     |
| Who builds and maintains the Sauce Labs integration    | Sauce Labs, or Sauce Labs together with the framework project       | The framework's open-source project                                                                      |
| Where to report a problem in the framework             | Sauce Labs Support triages it                                       | The project's issue tracker; Sauce Labs Support can confirm whether the Sauce Labs side behaved correctly |
| Where to report a device, browser, session, or artifact problem | Sauce Labs Support                                         | Sauce Labs Support                                                                                       |
| What Sauce Labs validates                              | Every supported version, on an ongoing basis                        | The framework version named on each guide, at the date shown                                             |
| Roadmap                                                | Tracked on the Sauce Labs roadmap                                   | Not on the Sauce Labs roadmap; guides are updated as the project evolves                                 |

## Supported Targets

Verified by Sauce Labs in September 2026 with the framework versions shown.

| Framework                                                             | Desktop browsers                                                   | Android emulators              | iOS simulators | Android real devices | iOS real devices | How it reaches Sauce Labs                                              |
| --------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------ | -------------- | -------------------- | ---------------- | ---------------------------------------------------------------------- |
| [Maestro via maestro-runner](/basics/community-frameworks/maestro) 1.1.25 | ❌                                                                 | ✔️ including ARM emulators     | ✔️             | ✔️                   | ✔️               | Appium endpoint (`ondemand.<dc>.saucelabs.com/wd/hub`)                 |
| [Vibium](/basics/community-frameworks/vibium) 26.8.21                 | ✔️ Chrome, Edge, Firefox on Windows, macOS, and Linux (not Safari) | ❌                             | ❌             | ❌                   | ❌               | WebDriver BiDi URL returned by a Sauce Labs session (`webSocketUrl`)   |

## Guides

<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
    <a href="/basics/community-frameworks/maestro"><h3>Maestro with maestro-runner</h3></a>
    <p>Run unmodified Maestro YAML flows on Sauce Labs Android emulators, iOS simulators, and Android and iOS real devices through the Sauce Labs Appium endpoint.</p>
    </div>
  </div>
  <div className="box box2 card">
    <div className="container">
    <a href="/basics/community-frameworks/vibium"><h3>Vibium</h3></a>
    <p>Attach Vibium's CLI, MCP server, or JavaScript and Python clients to a Sauce Labs desktop browser session over WebDriver BiDi.</p>
    </div>
  </div>
</div>

## Before You Start

- Every guide assumes you have a Sauce Labs account and have set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as
  [environment variables](/basics/environment-variables).
- Set [`name`](/dev/test-configuration-options/#name) and [`build`](/dev/test-configuration-options/#build) in
  `sauce:options` so jobs started by a community framework are easy to find in
  [Test Results](/test-results/viewing-test-results/). Most community tools do not print the Sauce Labs job link.
- Your Sauce Labs concurrency limits and session timeouts apply exactly as they do for any Appium or WebDriver session.
- Read the Security Considerations section of each guide. Some tools write credentials or session URLs to logs that you
  must mask in CI.

## Suggest a Framework

Know a community framework or tool that should run on Sauce Labs? Email the Sauce Labs product team at
[product@saucelabs.com](mailto:product@saucelabs.com) with a link to the project and a short description of how you
would use it with Sauce Labs.
