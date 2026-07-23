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

## Q2 2026 (April – June 2026)

### Browser Versions Released

#### Chrome

| Version | Release Date | Release Notes | ChromeDriver |
|---------|-------------|---------------|--------------|
| Chrome 148 | May 6, 2026 | [Release Notes](https://developer.chrome.com/release-notes/148) | — |
| Chrome 149 | June 3, 2026 | [Release Notes](https://developer.chrome.com/release-notes/149) | chromedriver 149.0.7827.54 |

#### Microsoft Edge

| Version | Release Date | Release Notes | EdgeDriver |
|---------|-------------|---------------|------------|
| Edge 147 | April 13, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/147) | edgedriver 147.0.3912.60 |
| Edge 148 | May 11, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148) | edgedriver 148.0.3964.0 |
| Edge 149 | June 24, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/149) | edgedriver 149.0.4022.80 |

#### Firefox

| Version | Release Date | Release Notes |
|---------|-------------|---------------|
| Firefox 150 | April 22, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/150.0/releasenotes/) |
| Firefox 151 | May 20, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/151.0/releasenotes/) |
| Firefox 152 | June 24, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/152.0/releasenotes/) |

:::note
No new Safari versions shipped this quarter. Safari 26 on macOS 26 Tahoe, released in Q1, remains the latest version available on Sauce Labs.
:::

---

### Notable Changes for Testing

Here's what stood out in Q2 2026 from a test automation and quality engineering perspective.

#### Local Network Access Restrictions Reach All Firefox Users (Firefox 150)

Firefox 150 extends **local network access restrictions to all users** — websites must now request permission before connecting to devices on the local network or to apps and services on the machine. This was previously limited to users with Enhanced Tracking Protection set to Strict and is rolling out gradually. If your browser sessions reach localhost or internal network resources, watch for new permission prompts or blocked requests. This continues the tightening trend we flagged in Q1 for both Chrome and Firefox.

#### XSLT Deprecation Is Coming — Start Testing Now (Edge 147)

Edge 147 introduces the `XSLTEnabled` enterprise policy ahead of Chromium's planned **deprecation and removal of XSLT support**. If your application relies on XSLT transformations, test with `XSLTEnabled = Disabled` now to get ahead of the removal. Edge 147 also switched to a **Rust-based XML parser** for non-XSLT scenarios (`DOMParser`, `responseXML` of `XMLHttpRequest`, SVG documents), which improves security but is worth a regression pass if you do heavy XML processing.

#### WebSockets No Longer Block the Back/Forward Cache (Chrome 149)

Active WebSocket connections no longer prevent a page from entering Chrome's **Back/Forward Cache (bfcache)**. Connections are now closed on bfcache entry and the page can be stored and restored. Tests that rely on WebSocket state surviving back/forward navigation may see different behavior.

#### New `autofill` Event for Form Testing (Edge 147)

Edge 147 adds the **`autofill` event**, which fires when browser autofill updates form controls. This is useful for test scenarios that need to detect autofill and validate dependent form logic, custom UI updates, or validation triggered by autofilled values.

#### WebDriver BiDi Improvements (Firefox 150 and 152)

Firefox shipped several BiDi and Marionette improvements this quarter that matter for automation:

- **Offline network emulation** (Firefox 150): The new `emulation.setNetworkConditions` command supports `type: offline` to emulate offline mode on specific browsing contexts, user contexts, or globally.
- **Navigation errors are now reported** (Firefox 152): `WebDriver:Navigate` and `WebDriver:Refresh` properly report errors when navigation fails instead of silently ignoring them — failing tests may now surface errors that were previously hidden.
- **Extension install in Private Browsing** (Firefox 152): `webExtension.install` now supports installing web extensions when Private Browsing mode is enabled.
- **Download folder override** (Firefox 152): `browser.setDownloadBehavior` can override the download target folder before the temporary file is created.
- **Screenshot dimension limits** (Firefox 152): Marionette and BiDi screenshot commands now enforce maximum allowed dimensions — very large full-page screenshots may be affected.

#### CSS Changes That May Affect Visual Regression Tests

Several rendering changes landed this quarter that could cause pixel-matching failures:

- **Table borders default to `currentColor`** (Chrome 149): The explicit `border-color: gray` rule was removed from the User Agent stylesheet for `<table>` elements. Tables that relied on the default gray border may render differently.
- **`accent-color: auto` behavior change** (Edge 149): The operating system accent color is now applied to form controls only within installed web app contexts. On regular web pages, form controls use a browser-default accent color instead.
- **`image-rendering: crisp-edges` support** (Edge 149): Scaled images can now preserve contrast and edges without smoothing or blur, which may change how scaled images render in screenshots.
- **Media element pseudo-classes** (Firefox 150): New support for `:playing`, `:paused`, and related pseudo-classes enables styling based on media playback state.
- **`light-dark()` accepts image values** (Firefox 150): Dark mode can now switch images and gradients via CSS, which may produce different screenshots per color scheme.

#### Custom Primary Password Deprecation (Edge 147)

Support for custom primary passwords is being deprecated in Edge. Users can no longer create new custom primary passwords, and existing users are being migrated to device authentication starting June 4, 2026. Tests that rely on custom primary password prompts or settings need updating.

#### JavaScript Compilation Cache (Firefox 152)

Firefox 152 adds an **in-memory cache for JavaScript compilation results**, shared across navigations within the same domain, to improve page load performance. This can affect how cached requests and responses appear in DevTools, WebDriver, and WebExtensions APIs such as `webRequest` and `declarativeNetRequest`.

#### DevTools for Agents Now Stable (Chrome 149)

The MCP server and CLI of **Chrome DevTools for agents** are now stable, including experimental features such as custom page-exposed tools, WebMCP debugging, and custom HTTP header emulation. Relevant if you're building AI-assisted automation or advanced debugging workflows on top of Chrome.

:::note Coming in Q3: Manifest V2 Extensions Fully Deprecated (Chrome 150)
Chrome 150, released July 2, 2026, fully deprecates Manifest V2 extensions — test automation relying on MV2 extensions such as content blockers or custom testing tools will no longer function. Also on the horizon: Chrome's "Always use secure connections" setting becomes the default for all public sites in Chrome 154, and the move to a 2-week release cycle begins with Chrome 153 in September. We'll cover these in detail in the Q3 update.
:::

---

### Framework and Integration Updates

#### Cypress 15.14.2 — Now on macOS 14, 15, and 26

[Cypress 15.14.2](/web-apps/automated-testing/cypress/) support has expanded to **macOS 14 (Sonoma), macOS 15 (Sequoia), and macOS 26 (Tahoe)**, bringing Cypress testing to the latest macOS release on Sauce Labs.

#### Playwright 1.60.0 — macOS 26 Support and Node.js 24

[Playwright 1.60.0](/web-apps/automated-testing/playwright/) is now available on Sauce Labs, adding support for **macOS 26 (Tahoe)** and upgrading the runtime to **Node.js 24**. If your Playwright project pins Node-version-specific dependencies, verify compatibility with Node.js 24 before upgrading.

#### TestCafe — macOS 26 Support

[TestCafe 3.7.4](/web-apps/automated-testing/testcafe/) now runs on **macOS 26 (Tahoe)**, joining Cypress and Playwright in supporting the latest macOS release on Sauce Labs.

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

#### Cypress on macOS 14 and 15 (Apple Silicon)

[Cypress 15.14.2](/web-apps/automated-testing/cypress/) now runs on **macOS 14 (Sonoma) and macOS 15 (Sequoia)** on Apple Silicon. On macOS 14, all four browsers are supported: Chrome, Firefox, Microsoft Edge, and WebKit (Experimental). On macOS 15, Firefox is not supported due to a macOS firewall issue, so the supported browsers are Chrome, Microsoft Edge, and WebKit (Experimental). Chrome, Firefox, Microsoft Edge, and WebKit (Experimental) also remain available on macOS 11.00, 12, and 13.

#### Playwright 1.58.1 — Now on macOS 14 and 15 (ARM)

[Playwright 1.58.1](/web-apps/automated-testing/playwright/) is now available on Sauce Labs with support for **macOS 14 (Sonoma) and macOS 15 (Sequoia)** running on ARM architecture. This is the first Playwright version on Sauce Labs to run on Apple Silicon. Supported browsers: Chromium, Chrome, Firefox, and WebKit.

#### Cypress 15.9.0

[Cypress 15.9.0](/web-apps/automated-testing/cypress/) is available on Sauce Labs, supporting Chrome, Firefox, Microsoft Edge, and WebKit (Experimental) on macOS 11–13 and Windows 10–11.

#### Sauce Connect 5.5.0

Sauce Connect had two releases in Q1 with security and reliability improvements. [Version 5.5.0](https://changelog.saucelabs.com/en/now-available-sauce-connect-550) (released March 2026) added a new [Time-Based Access Control](/dev/cli/sauce-connect-5/run/#time-based-access-control) feature. If you haven't migrated to Sauce Connect 5 yet, it offers up to 5x performance improvement and 50x less memory usage compared to version 4.
