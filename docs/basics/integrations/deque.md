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


### WebDriverIO Instance

In the `wdio.conf` file, create an object called `axeWdio`. This object creates a new `AxeWebdriverIO` instance which accepts the current browser object from WDIO as an argument.

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


## Run the Test
Save the file and run the following command from the main project directory:
```bash
npm install && npm test
```

## Additional Resources
* [Deque Saucelabs Integration Documentation](https://www.deque.com/saucelabs/get-started/)
* [Deque `axe-core` Example WebDriverIO Project](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverio)
* [Sauce Labs / Deque Marketing Blog Post](https://saucelabs.com/news/sauce-labs-and-deque-systems-join-forces-to-help-enterprises-ensure-digital-accessibility)
