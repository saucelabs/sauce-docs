---
id: wonderproxy
title: WonderProxy Integration
sidebar_label: WonderProxy
description: Automated Testing with Sauce Labs and WonderProxy.
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

You can use Sauce Labs and WonderProxy's global network to test your geoIP websites and applications. [WonderProxy](https://wonderproxy.com/) provides a global network of proxy servers that you can use to make sure your localized applications behave properly around the world. 


With Sauce Labs and WonderProxy, you can run your geoIP testing through all of the browser, operating system, and hardware combinations that you care about, from all of the locales that you care about.

## How It Works

If you use Playwright for your automated end-to-end tests, you can use [`saucectl`](/dev/cli/saucectl/) and WonderProxy to add multi-platform localization tests. `saucectl` uploads your tests to Sauce Labs and runs them on the platforms that you list in your `saucectl` configuration file. While they run in the Sauce Labs cloud, your tests connect through WonderProxy locations, so you can check how your site or app behaves in each locale.

Your tests need your WonderProxy credentials to connect through those locations. You pass them to `saucectl` as environment variables when you run your tests, so they are available to the tests in the Sauce Labs cloud. `saucectl` tracks the test progress and provides links to the test results in Sauce Labs, where you can see live video and the results of each test.

The following code samples and setup instructions use a [working demo](https://github.com/WonderNetwork/locale-testing-demo/tree/main/saucelabs/playwright) in GitHub that runs sample tests against the WonderNetwork [GeoTest page](https://wondernetwork.com/geotest).

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- A WonderProxy account, with a WonderProxy username and proxy token. See [Authentication](#authentication).
- A Playwright test suite, or the [working demo](https://github.com/WonderNetwork/locale-testing-demo/tree/main/saucelabs/playwright).

## Set Up the Integration

**Step 1:** Install [`saucectl`](/dev/cli/saucectl/#installing-saucectl).

**Step 2:** Export your `SAUCE_USERNAME`, `SAUCE_ACCESS_KEY`, and WonderProxy credentials as environment variables:

```properties
export SAUCE_USERNAME="yourSauceUsername"
export SAUCE_ACCESS_KEY="the-access-key-from-your-account"
export WONDERPROXY_USER="wonderProxyUsername"
export WONDERPROXY_TOKEN="wonderProxyProxyToken"
```

## Authentication

The integration uses two sets of credentials:

- **Sauce Labs**: Your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). `saucectl` reads them from the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.
- **WonderProxy**: Your WonderProxy username and a proxy token, which your tests read from the `WONDERPROXY_USER` and `WONDERPROXY_TOKEN` environment variables.

:::info
At WonderProxy, **proxy tokens** replace passwords in your server credentials. Proxy tokens are quick to generate and work instantly across the network. [Generate one (or five)](https://wonderproxy.com/my/settings#proxy-tokens), and then use them anywhere your proxy configuration asks for a password.

Proxy tokens are part of the WonderProxy [Delegated Authentication system](https://wonderproxy.com/features/delegated-authentication).
:::

## Verify the Integration

1. Run your tests as described in [Run Your Tests](#run-your-tests).
2. Check that `saucectl` reports `passed` for each suite and shows `All tests have passed`.
3. Open the **Build Link** from the `saucectl` output to see the tests in Sauce Labs.

## Use the Integration

After you set up the integration, you can run localized Playwright tests on Sauce Labs through WonderProxy locations.

To run your localization tests:

1. Configure `saucectl` for your tests. See [Configure saucectl for Your Tests](#configure-saucectl-for-your-tests).
2. Write your tests. See [Write Your Tests](#write-your-tests).
3. Run your tests with `saucectl`. See [Run Your Tests](#run-your-tests).

`saucectl` runs your tests on the configured platforms in Sauce Labs, and provides links to the [Automated Test Results](https://app.saucelabs.com/dashboard/tests/vdc) page, where you can see live video and the results.

### Configure `saucectl` for Your Tests

You can use WonderProxy's sample `saucectl` [configuration file](https://github.com/WonderNetwork/locale-testing-demo/blob/main/saucelabs/playwright/.sauce/config.yml) to run a localized Playwright test suite on two platforms: Firefox on Windows and Chrome on Mac.

The configuration file is formatted with YAML. You can specify the type of tests to run with the `kind` property, and create test suites for each platform with the `suites` property:

```yaml
kind: playwright
suites:
  - name: "Firefox on Windows 10"
    platformName: "Windows 10"
    testMatch: ['.*.js']
    params:
      browserName: "firefox"
  - name: "Chromium on Mac 11"
    platformName: "mac 11.00"
    testMatch: ['.*.js']
    params:
      browserName: "chromium"
```

To create your own custom configuration, you can use [`saucectl init`](/dev/cli/saucectl/init/). For more information, see [Configure `saucectl` for your Tests](/dev/cli/saucectl/#configure-saucectl-for-your-tests).

### Write Your Tests

You can use the sample tests in [Step 3: Write tests](https://wonderproxy.com/docs/devs/guides/globalize-your-testing-with-playwright#step-3), with localization testing through WonderProxy locations.

You don't need to add any Sauce-specific code to your test, and you also don't need to install Node.js or any npm packages on your local system.

### Run Your Tests

`saucectl` uploads your tests to Sauce Labs and runs them against the configured platforms. Pass your WonderProxy credentials as environment variables, so they are available to the tests in the Sauce Labs cloud.

```bash
$ saucectl run --env WONDERPROXY_USER="$WONDERPROXY_USER" --env WONDERPROXY_TOKEN="$WONDERPROXY_TOKEN"
```

The sample code has 6 tests (2 tests per location, 3 locations). `saucectl` tracks the test progress, and provides links to the [Automated Test Results](https://app.saucelabs.com/dashboard/tests/vdc) page in Sauce Labs, where you can see live video and the results.

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

## Troubleshooting

<details>
<summary>**Your tests cannot read the WonderProxy credentials in Sauce Labs**</summary>

Exporting the variables on your local machine does not make them available in the Sauce Labs cloud. Pass them to `saucectl run` with the `--env` flag, as shown in [Run Your Tests](#run-your-tests).

</details>

<details>
<summary>**The proxy configuration asks for a password**</summary>

Use a WonderProxy proxy token in place of the password. See [Authentication](#authentication).

</details>

## Next Steps

- [saucectl Overview](/dev/cli/saucectl/)
- [Globalize Your Testing with Playwright](https://wonderproxy.com/docs/devs/guides/globalize-your-testing-with-playwright)
- [Integrations Overview](/basics/integrations-overview/)
