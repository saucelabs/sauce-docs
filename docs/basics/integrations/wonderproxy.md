---
id: wonderproxy
title: WonderProxy Integration
sidebar_label: WonderProxy
description: Automated Testing with Sauce Labs and WonderProxy
keywords:
- automated-testing
- mobile
- mobile-native
- how-to
- geolocation
- localization
- globalization
- l10n
- g18n
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Automated Testing with Sauce Labs and WonderProxy

Combine WonderProxy's global network with Sauce Labs' platform for fast and effective testing.

## Overview

When you test your geoIP websites and applications with WonderProxy, you probably verify things on a few browsers, maybe even on more than one operating system. You're probably not testing exhaustively, though, because who has the time?

Sauce Labs is a paid service that enables you to test applications on virtually infinite (actually >1,000) combinations of browsers, operating systems, and devices. WonderProxy provides a global network of proxy servers that you can use to ensure that your localized applications are behaving properly around the world. With Sauce Labs and WonderProxy, you can run your geoIP testing through all of the browser-operating system-hardware combinations that you care about, from all of the locales that you care about. Delightful!

In this tutorial, you will learn how to set up Sauce Labs and Playwright to work with WonderProxy and run your localized, automated tests.

For the code samples and setup instructions below, we'll use a working demo, available [on Github](https://github.com/WonderNetwork/locale-testing-demo/tree/main/saucelabs/playwright), that runs sample tests against the WonderNetwork [GeoTest page](https://wondernetwork.com/geotest).

## Prerequisites

This tutorial requires that you have a Sauce Labs account. To use the `saucectl` command-line tool, you will also need to retrieve your Sauce Labs Access Key from the Sauce Labs **_User Settings_** page.

:::info
At WonderProxy, **proxy tokens** replace passwords in your server credentials. Proxy tokens are quick to generate and work instantly across the network. [Generate one (or five)](https://wonderproxy.com/my/settings#proxy-tokens), and then use them anywhere your proxy configuration asks for a password.

Proxy tokens are part of our [Delegated Authentication system](https://wonderproxy.com/features/delegated-authentication).
:::

In order for the WonderProxy demo code to work, export your Sauce Labs and WonderProxy credentials as environment variables, as in the following:

```properties
export SAUCE_USERNAME="yourSauceUsername"
export SAUCE_ACCESS_KEY="the-access-key-from-your-account"
export WONDERPROXY_USER="wonderProxyUsername"
export WONDERPROXY_TOKEN="wonderProxyProxyToken"
```

## Procedure

`saucectl` is an orchestration tool for the Sauce Labs platform. We'll use it to upload and run our localized Playwright test suite on two platforms: Firefox on Windows, and Chrome on Mac.

### Step 1: Set up saucectl

1. [Download and install](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl) `saucectl` with NPM, Homebrew, Powershell, or Curl. 
2. Make sure you exported your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables (see above).

### Step 2: Configure the Sauce Labs platform to run your tests

We'll borrow the same tests we used in [our Playwright example](https://wonderproxy.com/docs/devs/guides/globalize-your-testing-with-playwright). You won't need NodeJS on your own system this time, since Sauce Labs will be running the tests for us on their platform.

:::info
You can follow along with WonderProxy's working demo, available [on Github](https://github.com/WonderNetwork/locale-testing-demo/tree/main/saucelabs/playwright).
:::

We already have a `saucectl` [configuration file](https://github.com/WonderNetwork/locale-testing-demo/blob/main/saucelabs/playwright/.sauce/config.yml) set up for Playwright. If you need to [create one from scratch](https://docs.saucelabs.com/dev/cli/saucectl/#configure-saucectl-for-your-tests), `saucectl` can help you:

```bash
$ saucectl init
```

The configuration file is formatted with YAML. We specify the `kind` of tests we're writing with the kind property, and create test suites for each platform with the `suites` property:


```yaml
kind: playwright
suites:
- name: "Firefox on Windows 10"
  platformName: "Windows 10"
  testMatch: ['.*.js']
  params:
  browserName: "firefox"
- name: "Chromium on Mac 11"
  mode: sauce
  platformName: "mac 11.00"
  testMatch: ['.*.js']
  params:
  browserName: "chromium"
```

### Step 3: Write your tests
We're using the same tests we used in [our regular Playwright demo](https://wonderproxy.com/docs/devs/guides/globalize-your-testing-with-playwright#step-3), with localization testing through WonderProxy locations. We don't need to add any Sauce-specific code, and we don't need NodeJS or the NPM packages to be installed on our local system!

### Step 4: Run the tests
`saucectl` will upload our tests to Sauce Labs and run them against the platforms we requested. We'll pass our WonderProxy credentials as environment variables, so they'll be available to the tests in the Sauce Labs cloud.

```bash
$ saucectl run --env WONDERPROXY_USER="$WONDERPROXY_USER" --env WONDERPROXY_TOKEN="$WONDERPROXY_TOKEN"
```

Our sample code has 6 tests (2 tests per location, 3 locations). `saucectl` will track the test progress, and provide links to the [Sauce Labs testing dashboard](https://app.saucelabs.com/dashboard/tests/vdc) where we can watch live video and see our results.

```logcatfilter
09:00:43 INF Starting suite. region=us-west-1 suite="Firefox on Windows 10"
09:00:43 INF Starting suite. region=us-west-1 suite="Chromium on Mac 11"
09:00:46 INF Suite started. browser=chromium platform="mac 11.00" suite="Chromium on Mac 11" url=https://app.saucelabs.com/tests/[test id]
09:00:47 INF Suite started. browser=firefox platform="Windows 10" suite="Firefox on Windows 10" url=https://app.saucelabs.com/tests/[test id]
09:00:53 INF Suites in progress: 2
09:01:03 INF Suites in progress: 2
09:01:18 INF Suite finished. passed=true suite="Chromium on Mac 11" url=https://app.saucelabs.com/tests/[test id]
09:01:21 INF Suite finished. passed=true suite="Firefox on Windows 10" url=https://app.saucelabs.com/tests/[test id]

Results:


       Name                              Duration    Status    Browser         Platform      Attempts
───────────────────────────────────────────────────────────────────────────────────────────────────────
  ✔    Chromium on Mac 11                     33s    passed    chromium 101    mac 11.00            1
  ✔    Firefox on Windows 10                  34s    passed    firefox 97      Windows 10           1
───────────────────────────────────────────────────────────────────────────────────────────────────────
  ✔    All tests have passed                  38s

  Build Link: https://app.saucelabs.com/builds/vdc/[build id]
```