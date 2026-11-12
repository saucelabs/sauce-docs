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

## Q3 2026 (July – September 2026)

### Browser Versions Released

#### Chrome

| Version | Release Date | Release Notes | ChromeDriver |
|---------|-------------|---------------|--------------|
| Chrome 150 | July 2, 2026 | [Release Notes](https://developer.chrome.com/release-notes/150) | chromedriver 150.0.7871.46 |
| Chrome 151 | July 31, 2026 | [Release Notes](https://developer.chrome.com/release-notes/151) | chromedriver 151.0.7922.71 |
| Chrome 152 | August 26, 2026 | [Release Notes](https://developer.chrome.com/release-notes/152) | chromedriver 152.0.7977.64 |
| Chrome 153 | September 10, 2026 | [Release Notes](https://developer.chrome.com/release-notes/153) | chromedriver 153.0.8010.36 |
| Chrome 154 | September 24, 2026 | [Release Notes](https://developer.chrome.com/release-notes/154) | chromedriver 154.0.8037.57 |

#### Microsoft Edge

| Version | Release Date | Release Notes | EdgeDriver |
|---------|-------------|---------------|------------|
| Edge 150 | July 6, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/150) | edgedriver 150.0.4078.48 (150.0.4078.50 on macOS) |
| Edge 151 | August 7, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/151) | edgedriver 151.0.4129.59 |
| Edge 152 | September 1, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) | edgedriver 152.0.4191.53 |
| Edge 153 | September 10, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/153) | edgedriver 153.0.4234.32 |
| Edge 154 | September 28, 2026 | [Release Notes](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/154) | edgedriver 154.0.4258.37 |

#### Firefox

| Version | Release Date | Release Notes |
|---------|-------------|---------------|
| Firefox 153 | July 23, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/153.0/releasenotes/) |
| Firefox 154 | August 18, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/154.0/releasenotes/) |
| Firefox 155 | September 2, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/155.0/releasenotes/) |
| Firefox 156 | September 22, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/156.0/releasenotes/) |
| Firefox 157 | September 29, 2026 | [Release Notes](https://www.mozilla.org/en-US/firefox/157.0/releasenotes/) |

#### Safari

| Version | Release Date | Release Notes | Platform |
|---------|-------------|---------------|----------|
| Safari 27 | September 23, 2026 | [Release Notes](https://changelog.saucelabs.com/en/now-available-safari-27-and-macos-27-golden-gate-browser-testing) | macOS 27 Golden Gate |

:::note
macOS 27 Golden Gate is available for live and automated (Selenium/WebDriver) testing on [Apple Silicon](/web-apps/macos-apple-silicon/) with Safari 27, Chrome 150+, Firefox 154+, and Edge 153+. The Cypress, Playwright, and TestCafe runners, Electron app testing, and Beta/Dev browser channels aren't available on macOS 27 yet.
:::

#### ChromiumOS

| Version | Release Date | Release Notes |
|---------|-------------|---------------|
| Chrome 151 on ChromiumOS | July 31, 2026 | [Release Notes](https://developer.chrome.com/release-notes/151) |
| Chrome 152 on ChromiumOS | August 27, 2026 | [Release Notes](https://developer.chrome.com/release-notes/152) |
| Chrome 153 on ChromiumOS | September 21, 2026 | [Release Notes](https://developer.chrome.com/release-notes/153) |
| Chrome 154 on ChromiumOS | September 24, 2026 | [Release Notes](https://developer.chrome.com/release-notes/154) |

:::note
Sauce Labs supports the **latest two Chromium releases** on [ChromiumOS](/web-apps/chromiumos/) at any time, and older versions are retired as new ones ship. We recommend setting `browserVersion` to `latest` or `latest-1` in your test configurations so your tests move to each new release automatically, instead of failing when a pinned version is retired.
:::

#### Electron

| Version | Release Date | Release Notes |
|---------|-------------|---------------|
| Electron 43 | August 11, 2026 | [Release Notes](https://www.electronjs.org/blog/electron-43-0) |
| Electron 44 | August 26, 2026 | [Release Notes](https://www.electronjs.org/blog/electron-44-0) |

[Electron app testing](/web-apps/automated-testing/electron/) is available on Windows 10 and 11 and on macOS 11, 12, 13, 14, 15, and 26.

---

### Notable Changes for Testing

Here's what stood out in Q3 2026 from a test automation and quality engineering perspective.

#### Chrome Moves to a Two-Week Release Cycle (Chrome 153)

As we flagged in Q1, Chrome 153 is the first release on Google's new **two-week release cadence**, which replaces the four-week cycle. Edge follows the same Chromium schedule. Expect `latest` and `latest-1` to move twice as often as before. If your suite can't absorb a browser change every two weeks, pin `browserVersion` to a specific version and upgrade it on your own schedule.

#### Legacy Mobile Emulation Device Names Removed (Chrome 153)

ChromeDriver 153 dropped several legacy presets from the `mobileEmulation.deviceName` list, including **`iPad`, `iPad Air`, `iPad Pro`, and `iPhone X`**. Sessions that request one of these names on Chrome 153 or later fail at startup with an error like `'iPad' must be a valid device`. This hit suites that combine `deviceName` with `browserVersion: latest` as soon as latest rolled to 153. `iPad Mini` is still valid. The durable fix is to replace `deviceName` with explicit `deviceMetrics` (`width`, `height`, `pixelRatio`, `touch`) and a `userAgent`, which work on every Chrome version.

#### Manifest V2 Extensions Fully Deprecated (Chrome 150)

As previewed in our Q2 update, Chrome 150 **fully deprecates Manifest V2 extensions**. Test automation that loads MV2 extensions, such as content blockers or custom testing tools, will no longer work. Migrate those extensions to Manifest V3, or pin an older Chrome version while you do.

#### Chrome and Edge End Support for macOS 12 Monterey (Chrome 151, Edge 151)

Chrome 151 and Edge 151 **require macOS 13 (Ventura) or later**. On Sauce Labs, Chrome 150 and Edge 150 are the last versions available on macOS 12, so `latest` on macOS 12 now stops at 150 for both browsers. Firefox is unaffected and still ships new versions on macOS 12. To keep testing the newest Chrome and Edge on a Mac, move your macOS 12 jobs to macOS 13 or to an [Apple Silicon](/web-apps/macos-apple-silicon/) platform.

#### Chrome Now Warns Before Loading HTTP Sites (Chrome 154)

Chrome 154 **prompts by default before connecting to sites over insecure HTTP**, completing the "Always use secure connections" rollout we previewed in Q2 (Chrome 150 enabled it only for users opted into Enhanced Safe Browsing). If your application under test or your test environments are served over plain HTTP, expect a warning interstitial instead of your page. Serve test environments over HTTPS where you can. Administrators can manage this behavior with the `HttpsOnlyMode` and `HttpAllowlist` enterprise policies.

#### Firefox Automation Changes in geckodriver and WebDriver BiDi (Firefox 156 and 157)

Firefox shipped several changes this quarter that can break existing automation code:

- **System access moves to geckodriver** (Firefox 157): Browser UI (chrome-scope) testing now requires the `geckodriver --allow-system-access` argument. Passing `--remote-allow-system-access` to Firefox through `moz:firefoxOptions` is no longer supported. This builds on the chrome-scope BiDi support we covered in Q1.
- **`destinationFolder` required for downloads** (Firefox 157): `browser.setDownloadBehavior` now requires the `destinationFolder` parameter when `type="allowed"`. Pass `null` to keep the default download location. This follows the download folder override we covered in Q2.
- **New exit code on startup failure** (Firefox 156): Marionette and the Remote Agent now exit with code `69` when their server fails to start. Update any process-management scripts that check for specific exit codes.
- **More consistent action timing** (Firefox 156): Intermediate events for actions with a duration greater than 0 now fire closer to every 16ms, which can affect tests sensitive to drag or animation timing.

#### Local Network Access Restrictions Keep Tightening (Firefox 154, Chrome 154, Edge 154)

The trend we've tracked since Q1 continues. Firefox 154 extends **Local Network Access protections to WebSocket connections**, so a site opening a WebSocket to a local network device now needs permission. Chrome 154 and Edge 154 now apply CORS and **require Local Network Access permission for Background Fetch** requests to local or loopback servers. They also add a `targetAddressSpace` option to the `WebSocket` constructor, which lets a connection to a public hostname be treated as local or loopback. If your browser sessions reach localhost or internal services, watch for new permission prompts or blocked connections.

#### `unload` Handlers Stop Firing by Default (Edge 154)

Edge 154 begins deprecating the **`unload` event**: unload handlers no longer fire by default for 80% of page loads unless a page explicitly enables them through Permissions Policy. Tests that rely on `unload` for cleanup, analytics beacons, or "are you sure?" logic may become intermittent. Migrate to lifecycle events such as `pagehide` and `visibilitychange`.

#### New Permission Elements and a Removed Link Target (Chrome 151 and 153, Edge 153)

Chrome 151 introduced the declarative **`<usermedia>`** element, and Chrome 153 and Edge 153 added **`<camera>`** and **`<microphone>`**. These elements embed a browser-controlled button that requires an explicit user click before a permission prompt appears or a stream starts. That affects how you automate media-permission flows on pages that adopt them. Chrome 153 and Edge 153 also **removed the non-standard `_current` link target**, so update any links or scripts that navigate with `target="_current"`.

#### Workers Created from `data:` URLs Get an Opaque Origin (Chrome 150, Edge 150)

Dedicated and shared Workers created from `data:` URLs now receive a **unique opaque origin** instead of inheriting their creator's origin. Those workers can no longer reach same-origin state such as `localStorage` and `IndexedDB`. Tests that expect such workers to read or write same-origin data will fail.

#### XSLT Deprecation Advances (Chrome 152)

Following the Edge 147 XSLT policy we covered in Q2, Chrome 152 formally **deprecates client-side XSLT**. A deprecation trial runs until Chrome 175. The Rust-based XML parser for non-XSLT scenarios (`DOMParser`, `XMLHttpRequest.responseXML`, SVG documents) also reached Chrome in version 151. If your application depends on XSLT, now is the time to plan the migration.

#### Popovers and Dialogs Ignore Right-Clicks and Touch Scrolls (Edge 154)

Edge 154 changed **light dismiss** for popovers and dialogs: scrolling gestures on touch screens and right-clicks no longer close them. Automated tests that close a popover or dialog with a right-click or a touch scroll need a different dismissal action, such as pressing Escape or clicking outside the element.

#### CSS and UI Changes That May Affect Visual Regression Tests

Several rendering changes landed this quarter that could cause pixel-matching failures:

- **Firefox visual refresh** (Firefox 157): Firefox has modernized toolbars, menus, and the sidebar, and added new light and dark themes. Page `alert()`, `confirm()`, and `prompt()` dialogs, color and date pickers, and form autocomplete dropdowns now follow the page's light or dark color scheme, which can change both screenshots and interaction tests that target them.
- **SVG filters no longer apply to plugins or restricted iframes** (Chrome 150): SVG filters aren't applied to embedded plugins (such as PDFs) or to cross-origin and sandboxed iframes.
- **`position-anchor` initial value changed** (Edge 151): The initial value is now `normal` instead of `none`, matching other browsers and the anchor positioning specification.
- **New text decoration properties** (Edge 154): `text-decoration-skip-spaces` and `text-decoration-inset` change how underlines and other decoration lines are drawn over whitespace and at text edges.
- **`scroll-marker-group` link and tab modes** (Edge 154): The new `links` and `tabs` modes can change accessibility tree roles and sequential tab stops for scroll markers, which matters for accessibility and keyboard navigation tests.
- **Responsive iframe sizing** (Edge 154): The new `frame-sizing` property lets `<iframe>` elements size to their content to avoid inner scrollbars.
- **Web Animations alignment** (Firefox 157): `Animation.reverse()` and `Animation.playbackRate` now follow the specification, which affects animations with a `playbackRate` of `0` and scroll-driven animations.

#### New Performance and Network APIs Worth Knowing (Chrome 151, 152, and 154)

- **SPA performance entries** (Chrome 151): New `soft-navigation` and `interaction-contentful-paint` performance entries let you measure JavaScript-driven route changes and interaction latency in Single-Page Applications.
- **Connection Allowlists** (Chrome 152): A new HTTP response header can restrict the network connections a document or web worker is allowed to make. Network-related tests against pages that send it may see blocked requests.
- **Fetch cancellation reasons** (Chrome 154, Edge 154): The reason passed to an `AbortController` is now forwarded to the `Response` object and its `ReadableStream`, so assertions on canceled fetch requests can check the specific reason.

:::note Coming in Q4: More Firefox Automation and Deprecation Changes
Firefox 159 (October 28, 2026) removes the `--remote-allow-system-access` command-line argument entirely: set the `MOZ_REMOTE_ALLOW_SYSTEM_ACCESS` environment variable to `1` instead. Edge 155 (October 12, 2026) completes the `unload` deprecation, so handlers stop firing by default for all page loads. Edge plans to turn browser-native XSLT off by default in the Stable channel with Edge 159. We'll cover these in detail in the Q4 update.
:::

---

### Framework and Integration Updates

#### Playwright 1.61.1 and 1.62.1

[Playwright 1.61.1](/web-apps/automated-testing/playwright/) (July) and [Playwright 1.62.1](/web-apps/automated-testing/playwright/) (August) are now available on Sauce Labs on **macOS 14, 15, and 26** and **Windows 10 and 11**, running on Node.js 24. Playwright 1.62.1 bundles Chromium 151, Firefox 153, and WebKit 26.5. Starting with Playwright 1.62, two combinations no longer work: **WebKit on macOS 14** (use macOS 15 for WebKit on Apple Silicon) and **Chromium on macOS 12**, because Chrome for Testing 151 requires macOS 13 or later. See [Playwright limitations](/web-apps/automated-testing/playwright/limitations/) for details.

#### Cypress 15.18.0, 15.20.0, and 15.21.1

Three Cypress releases shipped on Sauce Labs this quarter: [Cypress 15.18.0](/web-apps/automated-testing/cypress/) (July), 15.20.0 (August), and 15.21.1 (September). All three run on Node.js 22 and support Chrome, Firefox, Microsoft Edge, and WebKit (Experimental) on macOS 11.00, 12, 13, 14, 15, and 26, and Windows 10 and 11.

#### TestCafe 3.7.6

[TestCafe 3.7.6](/web-apps/automated-testing/testcafe/) is now available on Sauce Labs, running on Node.js 22.

#### ChromiumOS Generally Available

[ChromiumOS testing](/web-apps/chromiumos/) is now generally available. Sauce Labs supports the latest two Chromium releases on ChromiumOS at a time, so set `browserVersion` to `latest` or `latest-1` to stay current as new releases ship. You can also now drive ChromiumOS sessions with [Playwright over Selenium Grid](/web-apps/chromiumos/#playwright-via-selenium-grid).

#### Sauce Connect 4 End of Life and Sauce Connect 5.5.3

Sauce Connect 4 reached end of life on **July 31, 2026**, and Sauce Labs no longer accepts traffic from it. If you still run Sauce Connect 4, [migrate to Sauce Connect 5](/secure-connections/sauce-connect-5/migrating) to keep your tunnels working. Sauce Connect 5 had two releases this quarter: 5.5.2 in July and 5.5.3 in August, which addresses security vulnerabilities.

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
