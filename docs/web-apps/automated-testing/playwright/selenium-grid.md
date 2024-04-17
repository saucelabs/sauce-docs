---
id: selenium-grid
title: Selenium Grid
sidebar_label: Selenium Grid
---

Playwright can also connect to Sauce Labs remotely, via its [Selenium Grid
support](https://playwright.dev/dotnet/docs/selenium-grid), to launch Google
Chrome or Microsoft Edge.

Playwright connects to the browser using the Chrome DevTools Protocol (CDP).
Selenium 4 _currently_ exposes this capability.

:::caution
This feature is highly experimental, both from a Playwright's perspective, as
well as Sauce Labs. This integration may stop working without due notice.
:::

# Connect Playwright to Sauce Labs

To let Playwright connect remotely to Sauce Labs, you need to set two
environment variables: `SELENIUM_REMOTE_URL` and `SELENIUM_REMOTE_CAPABILITIES`.

```shell
SELENIUM_REMOTE_URL=https://ondemand.us-west-1.saucelabs.com:443/wd/hub \
SELENIUM_REMOTE_CAPABILITIES='{"platformName":"Windows 11","browserName":"Google Chrome","sauce:options":{"devTools":true,"username":"your_user","accessKey":"your_access_key"}}' \
npx playwright test --headed
```
