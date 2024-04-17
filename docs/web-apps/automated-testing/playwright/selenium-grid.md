---
id: selenium-grid
title: Selenium Grid
sidebar_label: Selenium Grid
---

Playwright can also connect to Sauce Labs remotely via its [Selenium Grid
support](https://playwright.dev/dotnet/docs/selenium-grid) to launch the Google
Chrome or Microsoft Edge browser.

Playwright connects to the browser using the Chrome DevTools Protocol (CDP).
Selenium 4 _currently_ exposes this capability.

:::caution
This feature is highly experimental, both from a Playwright's perspective, as
well as Sauce Labs. This integration may stop working at any time without due
notice.
:::

# Connect Playwright to Sauce Labs

To let Playwright connect remotely to Sauce Labs, you need to set two
environment variables: `SELENIUM_REMOTE_URL` and `SELENIUM_REMOTE_CAPABILITIES`.

```shell
SELENIUM_REMOTE_URL=https://ondemand.us-west-1.saucelabs.com:443/wd/hub \
SELENIUM_REMOTE_CAPABILITIES='{"platformName":"Windows 11","browserName":"chrome","sauce:options":{"devTools":true,"username":"your_user","accessKey":"your_access_key"}}' \
npx playwright test --headed --project "your-chromium-project"
```

:::note
`--headed` must be specified for our platform to capture a video.
:::

:::note
`--project` must be specified to match the browser you are targeting in the
`SELENIUM_REMOTE_CAPABILITIES` environment variable.
:::

# Limitations

The remote session has no knowledge of the _tests_ you are running. Since the
browser is mainly communicating with Playwright via CDP, there are only the most
rudimentary Selenium commands that are listed in the Sauce Labs UI: to start and
close the session.