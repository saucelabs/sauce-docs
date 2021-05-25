---
id: deque
title: "Deque axe™ Integration"
sidebar_label: "Axe Deque"
keywords:
- accessibility-testing
- accessibility
- automated-testing
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span class="highlight beta">BETA</span></small></p>

[Deque's axe™](https://www.deque.com/axe/) is one of the world's leading digital accessibility toolkits. The `axe-core` library provided by Deque allows you to inject functionality into your tests in order to scan content and return an `a11y` score. 

Below is a guide to set up the Sauce Labs integration. This integration allows you to run your accessibility tests, using axe™, on our platform.

:::info What does `a11y` stand for, and what is Accessibility Testing?
See the [following link](https://www.deque.com/web-accessibility-beginners-guide/#what-is-a11y) for further information.
:::

## What You'll Need
* [A Sauce Labs Account](https://saucelabs.com/sign-up)
* [A Deque Account (Optional)](https://axe.deque.com/plans)
* [Install Git](https://git-scm.com/downloads)
* [Install Node/NPM](https://nodejs.org/en/download/)

:::note
For the purpose of this guide, we will focus entirely on [WebdriverIO](https://webdriver.io/)
:::

## Set Up Dependencies

Add the following dependencies to your `package.json` file:

* `axe-core` for Accessibility tests (`a11y` results)
* `sauce-service` for the WebdriverIO plugin service

```js
"@axe-core/webdriverio": "4.1.2-alpha.106"
"@wdio/sauce-service"
```

## Create the Configuration

Next, create a `wdio.conf.js` in your root project directory with the following details:

```js
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'error',
    baseUrl: 'https://app.eu-central-1.saucelabs.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
```

### WebdriverIO Instance

In the `wdio.conf.js` file, create an object called `axeWdio`. This object creates a new `AxeWebdriverIO` instance which accepts the current browser object from WDIO as an argument.

```js
before: function (capabilities, specs, browser) {
    const axeWdio = new AxeWebdriverIO({
        client: browser
    })
}
```

Next, we need to inject an `axe-core` command into the current page so that it scan for content:

```js
browser.addCommand('getAxeResults', function (name) {
    return axeWdio.analyze()
})
```

When the `analyze()` command is called, `axe-core` then scans the current document content.

The final step is to define a local variable to store the violations (critical, moderate, and/or minor) and return the `result`:

```js
browser.addCommand('getAxeResults', function (name) {
    return axeWdio.analyze()
        .then(async (result) => {
            const { violations = [] } = result
            console.info(`Test: ${name} - Violations: ${violations.length}`)
            return result
        })
        .catch(err => {
            console.log(err)
        })
})
```

:::note Full Example
You can view the full `wdio.conf.js` example [here](https://github.com/saucelabs/axe-wdio/blob/main/mocha-wdio/wdio.conf.js)
:::

## Sauce Labs Setup

It's recommended that you create a separate configuration to manage the Sauce Labs configuration details. In our example we will create a file called `wdio.saucelabs.conf.js`.

For example:

```js
const {config} = require('./wdio.conf');

config.user = "yourUserName";
config.key = "yourAccessKey";
config.region = "yourRegion -> us / eu";

config.capabilities = [
    
];

config.services = config.services.concat('sauce');

exports.config = config;
```

### Sauce Labs Credentials

Specify the Sauce Labs `user` access `key` and data center `region` in which you want to run your tests.

```js
config.user = "yourUserName";
config.key = "yourAccessKey";
config.region = "yourRegion -> us / eu";
```

You can retrieve your Sauce Labs account credentials with [this link](https://app.saucelabs.com/user-settings). This `region` property is used for both Virtual Machine Cloud and Real Device Cloud tests, and the acceptable values are:

* `us` - *default*
* `eu`

:::warning Don't Hard-Code Credentials
Hard-coding your `user`, `key`, and `region` property values is not a recommended best practice due to security reasons.

Instead, export your [Sauce Labs Account Credentials as Environment Variables](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials) and add them in your script like the following example:

```js
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = process.env.REGION || 'us';
```

Visit the [WebDriverIO documentation](https://webdriver.io/docs/sauce-service.html) for further details.
:::

### Set Browser Options
In order to test on multiple different browsers and platforms, add the configuration options in the `capabilities` object. 

For example:

<Tabs
defaultValue="chrome"
values={[
    {label: 'Chrome', value: 'chrome'},
    {label: 'Firefox', value: 'firefox'},
    {label: 'Safari', value: 'safari'},
    {label: 'Edge', value: 'edge'},
]}>

<TabItem value="chrome">

```js
    {
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
    },
```

</TabItem>
<TabItem value="firefox">

```js
    {
        browserName: 'firefox', 
        platformName: 'Windows 10',
        browserVersion: 'latest',
    },
```

</TabItem>
<TabItem value="safari">

```js
    {
        browserName: 'safari', 
        platformName: 'macOS 10.15',
        browserVersion: 'latest',
    },
```

</TabItem>
<TabItem value="edge">

```js
    {
        browserName: 'MicrosoftEdge',
        platformName: 'Windows 10',
        browserVersion: 'latest',
    },
```

</TabItem>
</Tabs>

### Set Sauce-Specific Options

It's a best practice to set the test options that refer only to Sauce Labs features. For example, declare this at the top of `wdio.saucelabs.conf.js`:

```js
const defaultBrowserSauceOptions = {
    build: `Best Practices: Sauce Labs Desktop Web build-${new Date().getTime()}`,
    screenResolution: '1600x1200',
};
```

and call it in the `sauce:options` test option, as a part of the `capabilities` object, like in this example below:

```js {6-7}
config.capabilities = [
    {
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
...
];
```

## Running the Test
Now in your actual tests, all you need to do is call the following to get the `axe-core` test results:

```js
browser.getAxeResults()
```

## Additional Resources
* [Deque Saucelabs Integration Documentation](https://www.deque.com/saucelabs/get-started/)
* [Deque `axe-core` Example WebDriverIO Project](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverio)
* [Sauce Labs / Deque Marketing Blog Post](https://saucelabs.com/news/sauce-labs-and-deque-systems-join-forces-to-help-enterprises-ensure-digital-accessibility)
