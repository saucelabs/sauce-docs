---
id: quarterly-browser-updates
title: Quarterly Browser Testing Updates
sidebar_label: Quarterly Browser Updates
description: A quarterly summary of every browser version released on Sauce Labs, notable changes for test automation, and framework and integration updates.
keywords:
- browser updates
- quarterly browser releases
- chrome
- firefox
- edge
- safari
- chromedriver
- browser versions
toc_max_heading_level: 3
---

This page tracks every browser version released on Sauce Labs each quarter, along with changes that matter for test automation and relevant framework updates.

:::tip
All browser versions listed here are available in the [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator) for both live and automated testing.
:::

---

## Q1 2026 (January – March 2026)

### Browser Versions Released

#### Chrome

| Version | Release Date | Release Notes | ChromeDriver |
|---------|-------------|---------------|--------------|
| Chrome 144 | January 13, 2026 | [Release Notes](https://developer.chrome.com/release-notes/144) | chromedriver 144.0.7559.59/60 |
| Chrome 145 | February 10, 2026 | [Release Notes](https://developer.chrome.com/release-notes/145) | chromedriver 145.0.7632.45 |
| Chrome 146 | March 10, 2026 | [Release Notes](https://developer.chrome.com/release-notes/146) | chromedriver 146.0.7680.153/154 |

#### Microsoft Edge

| Version | Release Date | Release Notes | EdgeDriver |
|---------|-------------|---------------|------------|
| Edge 144 | January 15, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/144) | edgedriver 144.0.3719.82 |
| Edge 145 | February 23, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/145) | edgedriver 145.0.3800.65 |
| Edge 146 | March 16, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/146) | edgedriver 146.0.3856.62 |

#### Firefox

| Version | Release Date | Release Notes |
|---------|-------------|---------------|
| Firefox 147 | January 13, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/147.0/releasenotes/) |
| Firefox 148 | February 24, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/148.0/releasenotes/) |
| Firefox 149 | March 24, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/149.0/releasenotes/) |

#### Safari

| Version | Release Date | Release Notes | Platform |
|---------|-------------|---------------|----------|
| Safari 26 | March 23, 2026 | [Release Notes](https://changelog.saucelabs.com/en/now-available-safari-26-and-macos-26-tahoe-browser-testing) | macOS 26 Tahoe |

---

### Notable Changes for Testing

Here's what stood out in Q1 2026 from a test automation and quality engineering perspective.

#### Sanitizer API and Trusted Types Land Across All Browsers

Chrome 146, Edge 146, and Firefox 148 all now support the **Sanitizer API**, which introduces methods like `element.setHTML()` for safer HTML manipulation. Firefox 148 also shipped the **Trusted Types API**. If your application uses custom HTML injection or sanitization logic, these browser-native APIs may change how your content renders — and your DOM assertions may need updating.

#### User-Agent String Reduction Is Now Permanent (Chrome 145)

Chrome 145 **removed the `UserAgentReduction` policy**, meaning Chrome now permanently sends a reduced User-Agent string. If your tests, analytics, or device-detection logic parse the full UA string, you'll need to migrate to [User-Agent Client Hints (UA-CH)](https://web.dev/articles/migrate-to-ua-ch). Edge follows the same Chromium engine behavior.

#### Clipboard Events Require User Interaction (Chrome/Edge 145+)

The `clipboardchange` event now requires **sticky activation** (a recent user gesture) or explicit clipboard-read permission to fire. Automated tests that monitor clipboard state without simulating a user gesture first will no longer receive these events.

#### Navigation API Support in Firefox 147

Firefox 147 added support for the **Navigation API**, succeeding the History API. This is significant for teams testing Single Page Applications (SPAs) — the new API provides better interception and management of navigation actions. Chrome and Edge have supported this API since earlier releases, so cross-browser SPA testing now has a more consistent surface.

#### WebDriver BiDi Improvements (Firefox 148)

Firefox 148 expanded **WebDriver BiDi** support with initial chrome-scope interaction (privileged JavaScript execution when launched with `--remote-allow-system-access`) and the `browsingContext.contextDestroyed` event. A race condition during window initialization was also fixed, preventing issues when navigating immediately after opening a new window — a common pattern in test automation.

#### CSS Changes That May Affect Visual Regression Tests

Several CSS changes landed this quarter that could cause visual regression test failures:

- **`border-width` / `outline-width` / `column-rule-width` decoupling** (Edge 146): These properties are no longer forced to `0px` when the corresponding style is `none` or `hidden`. Pixel-matching assertions may need updating.
- **Scroll-triggered animations** (Chrome 146): Animations can now be tied to scroll position, which may affect viewport screenshots if scroll-dependent animations are active.
- **CSS column wrapping** (Chrome 145): New `column-wrap` and `column-height` properties enable vertical column layouts. Multi-column content may render differently.
- **CSS Anchor Positioning** (Firefox 147): Tooltips, popovers, and tethered UI elements using anchor positioning may shift layout in Firefox.
- **LayoutShift API now reports CSS pixels** (Chrome 145): CLS-related assertions should verify expected values are in CSS pixels, not physical pixels.

#### Local Network Access Restrictions Tightening

Both Chrome and Firefox are progressively restricting access to local network resources from web pages. Chrome 145 splits local network access into separate `local-network` and `loopback-network` permissions. Firefox 147 enables local network access restrictions by default for users with Enhanced Tracking Protection set to Strict. If your automated tests reach localhost or internal network resources during browser sessions, you may encounter new permission prompts or blocked requests.

#### WebGL Backend Change for Headless/VM Environments (Edge 144)

Edge 144 replaced the deprecated **SwiftShader** backend with the Windows Advanced Rasterization Platform (WARP) for WebGL on systems without a physical GPU. This is especially relevant for **headless testing and CI/CD pipelines** running in virtual machines. Non-Windows platforms now require a physical GPU for WebGL.

:::note Chrome Moving to 2-Week Release Cycle (Starting September 2026)
Google announced that starting with **Chrome 153 in September 2026**, Chrome will move to a 2-week release cycle (from the current 4-week cycle). This will double the pace of browser updates your test infrastructure needs to accommodate. The Extended Stable channel (8-week cycles) remains available for teams needing more time. We'll provide more guidance as the date approaches.
:::

---

### Framework and Integration Updates

#### Playwright 1.58.1 — Now on macOS 14 and 15 (ARM)

[Playwright 1.58.1](/web-apps/automated-testing/playwright/) is now available on Sauce Labs with support for **macOS 14 (Sonoma) and macOS 15 (Sequoia)** running on ARM architecture. This is the first Playwright version on Sauce Labs to run on Apple Silicon. Supported browsers: Chromium, Chrome, Firefox, and WebKit.

#### Cypress 15.9.0

[Cypress 15.9.0](/web-apps/automated-testing/cypress/) is available on Sauce Labs, supporting Chrome, Firefox, Microsoft Edge, and WebKit (Experimental) on macOS 11–13 and Windows 10–11.

#### Sauce Connect 5.5.0

Sauce Connect had two releases in Q1 with security and reliability improvements. [Version 5.5.0](https://changelog.saucelabs.com/en/now-available-sauce-connect-550) (released March 2026) added a new [Time-Based Access Control](/dev/cli/sauce-connect-5/run/#time-based-access-control) feature. If you haven't migrated to Sauce Connect 5 yet, it offers up to 5x performance improvement and 50x less memory usage compared to version 4.
