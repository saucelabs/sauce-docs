---
id: selenium-grid
title: Selenium Grid
sidebar_label: Selenium Grid
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Playwright can connect to Sauce Labs remotely via its [Selenium Grid
support](https://playwright.dev/docs/selenium-grid) to launch the Google
Chrome or Microsoft Edge browser.

Playwright connects to the browser using the Chrome DevTools Protocol (CDP).
Selenium 4 _currently_ exposes this capability.

:::note
Playwright support via Selenium Grid currently utilizes the Chrome DevTools 
Protocol (CDP). While this provides immediate compatibility, we are actively 
developing a native WebSocket integration for enhanced performance. For the 
most reliable experience today, please follow the guidelines shown below.
:::

## What You'll Need

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Playwright installed in your project
- Supported browsers: Google Chrome or Microsoft Edge

## Connect Playwright to Sauce Labs

Playwright can connect to Sauce Labs using environment variables or direct configuration in your 
test code. The recommendations below demonstrate both approaches across multiple programming languages.

### Using Fixtures/Extensions (recommended)

We have crafted code setups and fixtures that will improve how your Playwright tests
perform and look on Sauce Labs. These examples include best practices that help you
get more information from your tests, making them easier to debug. The enhanced test
metadata, proper configuration, and structured approach ensure better visibility
into test execution and results in the Sauce Labs dashboard.

The following examples demonstrate how to configure Playwright to connect to Sauce Labs in
different programming languages.

<Tabs
defaultValue="javascript"
values={[
{label: 'JavaScript/TypeScript', value: 'javascript'},
{label: 'Java', value: 'java'},
{label: 'Python', value: 'python'},
{label: '.NET', value: 'dotnet'},
]}>

<TabItem value="javascript">

We recommend using the the following fixture, which can run your tests locally or on Sauce Labs. 
The fixture extends Playwright's test to swap the page fixture for a Sauce Labs remote page.
<br/>
<br/>
The fixture builds the Sauce session capabilities and metadata (name, build). Here you can tweak the
capabilities to fit your needs in terms of browser, platform, and other options.

```javascript reference title="Sauce Session Capabilities and Metadata"
https://github.com/saucelabs-training/demo-js/blob/main/playwright/tests/fixture.js#L20-L37
```

The fixture also helps creating and tearing down the remote Sauce session, updating the job status
based on the test result. The fixture also logs a direct link to the job in the Sauce Labs UI for 
easy access. Your test code remains unchanged as they use the same `page` API locally and on Sauce. 

<br/>
<br/>

To use the fixture, place it in your project and import it in your test files:
```javascript reference title="Sauce Session Capabilities and Metadata"
https://github.com/saucelabs-training/demo-js/blob/main/playwright/tests/cart.spec.js#L1-L13
```

You can see the full fixture code in our [demo repository](https://github.com/saucelabs-training/demo-js/blob/main/playwright/tests/fixture.js). 
For complete working examples and setup instructions, visit our [JS/TS Demo Repository](https://github.com/saucelabs-training/demo-js/blob/main/playwright/README.md).

</TabItem>

<TabItem value="java">

We recommend using the following JUnit extension, which creates a Playwright page to your tests on Sauce Labs.
<br/>
<br/>
The extension builds the Sauce session capabilities and metadata (name, build). Here you can tweak the
capabilities to fit your needs in terms of browser, platform, and other options.

```java reference title="Sauce Session Capabilities and Metadata"
https://github.com/saucelabs-training/demo-java/blob/main/playwright-examples/src/test/java/com/saucelabs/extensions/SaucePlaywrightExtension.java#L47-L68
```

We also recommend using the custom [`SaucePlaywrightSession`](https://github.com/saucelabs-training/demo-java/blob/main/playwright-examples/src/test/java/com/saucelabs/bindings/SaucePlaywrightSession.java)
to manage the lifecycle, annotate, and add tags to the Sauce session. The extension 
also helps updating the job status based on the test result, it also logs a direct link to the job in 
the Sauce Labs UI for easy access. Your test code remains unchanged as they use the same `page` API 
locally and on Sauce.

<br/>
<br/>

To use the extension, add it to your base test class and use the `page` in your test methods:
```java reference title="Sauce Session Capabilities and Metadata"
https://github.com/saucelabs-training/demo-java/blob/main/playwright-examples/src/test/java/com/saucedemo/playwright/TestBase.java
```

You can see the full extension code in our [demo repository](https://github.com/saucelabs-training/demo-java/blob/main/playwright-examples/src/test/java/com/saucelabs/extensions/SaucePlaywrightExtension.java).
For complete working examples and setup instructions, visit our [Java Demo Repository](https://github.com/saucelabs-training/demo-java/blob/main/playwright-examples/README.md).

</TabItem>

<TabItem value="python">

We recommend using the following fixture, which creates a Playwright page to your tests on Sauce Labs.
<br/>
<br/>
The fixture builds the Sauce session capabilities and metadata (name, build). Here you can tweak the
capabilities to fit your needs in terms of browser, platform, and other options.

```python reference title="Sauce Session Capabilities and Metadata"
https://github.com/saucelabs-training/demo-python/blob/main/examples/playwright/conftest.py#L35-L77
```

The fixture also helps creating and tearing down the remote Sauce session, updating the job status
based on the test result. The fixture also logs a direct link to the job in the Sauce Labs UI for
easy access. Your test code remains unchanged as they use the same `page` API locally and on Sauce.

<br/>
<br/>

To use the fixture, place it in your project and import it in your test files:
```python reference title="Sauce Session Capabilities and Metadata"
https://github.com/saucelabs-training/demo-python/blob/main/examples/playwright/test_login.py
```

You can see the full fixture code in our [demo repository](https://github.com/saucelabs-training/demo-python/blob/main/examples/playwright/conftest.py).
For complete working examples and setup instructions, visit our [Python Demo Repository](https://github.com/saucelabs-training/demo-python).

</TabItem>

<TabItem value="dotnet">

We recommend using the following fixture, which creates a Playwright page to your tests on Sauce Labs.
<br/>
<br/>
The fixture builds the Sauce session capabilities and metadata (name, build). Here you can tweak the
capabilities to fit your needs in terms of browser, platform, and other options.

```csharp reference title="Sauce Session Capabilities and Metadata"
https://github.com/saucelabs-training/demo-csharp/blob/main/PlaywrightExamples/TestBase.cs#L120-L157
```

The fixture also helps creating and tearing down the remote Sauce session, updating the job status
based on the test result. The fixture also logs a direct link to the job in the Sauce Labs UI for
easy access. Your test code remains unchanged as they use the same `page` API locally and on Sauce.

<br/>
<br/>

To use the fixture, place it in your project and import it in your test files:
```python reference title="Sauce Session Capabilities and Metadata"
https://github.com/saucelabs-training/demo-csharp/blob/main/PlaywrightExamples/Tests/AuthenticationTests.cs#L8-L20
```

You can see the full fixture code in our [demo repository](https://github.com/saucelabs-training/demo-csharp/blob/main/PlaywrightExamples/TestBase.cs).
For complete working examples and setup instructions, visit our [.NET Demo Repository](https://github.com/saucelabs-training/demo-csharp/blob/main/PlaywrightExamples/README.md).

</TabItem>

</Tabs>

### Using Environment Variables

Set the `SELENIUM_REMOTE_URL` and `SELENIUM_REMOTE_CAPABILITIES` environment variables to connect 
Playwright to Sauce Labs:

<Tabs
defaultValue="javascript"
values={[
{label: 'JavaScript/TypeScript', value: 'javascript'},
{label: 'Java', value: 'java'},
{label: 'Python', value: 'python'},
{label: '.NET', value: 'dotnet'},
]}>

<TabItem value="javascript">

```shell
export SELENIUM_REMOTE_URL=https://ondemand.us-west-1.saucelabs.com:443/wd/hub
export SELENIUM_REMOTE_CAPABILITIES='{"platformName":"Windows 11","browserName":"chrome","sauce:options":{"devTools":true,"username":"'$SAUCE_USERNAME'","accessKey":"'$SAUCE_ACCESS_KEY'"}}'
npx playwright test --headed --project "chromium"
```

</TabItem>

<TabItem value="java">

```shell
export SELENIUM_REMOTE_URL=https://ondemand.us-west-1.saucelabs.com:443/wd/hub
export SELENIUM_REMOTE_CAPABILITIES='{"platformName":"Windows 11","browserName":"chrome","sauce:options":{"devTools":true,"username":"'$SAUCE_USERNAME'","accessKey":"'$SAUCE_ACCESS_KEY'"}}'
mvn test
```

</TabItem>

<TabItem value="python">

```shell
export SELENIUM_REMOTE_URL=https://ondemand.us-west-1.saucelabs.com:443/wd/hub
export SELENIUM_REMOTE_CAPABILITIES='{"platformName":"Windows 11","browserName":"chrome","sauce:options":{"devTools":true,"username":"'$SAUCE_USERNAME'","accessKey":"'$SAUCE_ACCESS_KEY'"}}'
pytest --headed --browser chromium
```

</TabItem>

<TabItem value="dotnet">

```shell
export SELENIUM_REMOTE_URL=https://ondemand.us-west-1.saucelabs.com:443/wd/hub
export SELENIUM_REMOTE_CAPABILITIES='{"platformName":"Windows 11","browserName":"chrome","sauce:options":{"devTools":true,"username":"'$SAUCE_USERNAME'","accessKey":"'$SAUCE_ACCESS_KEY'"}}'
HEADED=1 dotnet test
```

</TabItem>

</Tabs>

## Best Practices

:::tip
If you're using our recommended [fixtures/extensions](#using-fixturesextensions-recommended), many of these best 
practices are already implemented for you, including test metadata, session management, and job status updates.
:::

### Use Headed Mode
Playwright must run in headed mode for Sauce Labs to capture video recordings. Ensure your test 
configuration or command includes the headed flag:

```shell
npx playwright test --headed
```

### Set Meaningful Test Metadata
Always include descriptive test names and build identifiers to make results easier to find and debug:

```json
"sauce:options": {
  "name": "Login Flow - Valid Credentials",
  "build": "build-2024-01-15-abc123",
  "tags": ["playwright", "login", "smoke"]
}
```

## Limitations

Due to the nature of CDP-based communication, there are some limitations when running Playwright 
via Selenium Grid:

- **Command Display**: The commands shown in the Sauce Labs UI may differ from what you typically 
  see when running Playwright locally. This is because the browser communicates with Playwright 
  via CDP. Rest assured that your test is still running successfully and every command is being 
  executed properly. We're actively working on improving how Playwright commands are displayed.

- **Browser Support**: Only Google Chrome and Microsoft Edge are supported, as they provide CDP 
  endpoints.

- **Headed Mode Required**: Tests must run in headed mode for video capture to work.

## Additional Resources

- [Playwright Official Selenium Grid Documentation](https://playwright.dev/docs/selenium-grid)
- [Sauce Labs Platform Configurator](/basics/platform-configurator)
- [Environment Variables](/basics/environment-variables)
