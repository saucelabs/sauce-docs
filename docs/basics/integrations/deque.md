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

[Deque's axe™](https://www.deque.com/axe/) is one of the world's leading digital accessibility toolkits. The Sauce Labs integration allows you to run your accessibility tests, using axe™, on our platform.

## What You'll Need
* [A Sauce Labs Account](https://saucelabs.com/sign-up)
* [A Deque Account (Optional)](https://axe.deque.com/plans)
* [Install Git](https://git-scm.com/downloads)
* [Install Node/NPM](https://nodejs.org/en/download/)

## Project Setup

Clone or download the [example project](https://github.com/saucelabs/axe-wdio):

```bash
git clone https://github.com/saucelabs/axe-wdio.git
```
From the main project directory, edit `wdio.saucelabs.conf.js` to set your Sauce Labs account values for the highlighted config in the following sample:

```js {10-12}
const {config} = require('./wdio.conf');
const defaultBrowserSauceOptions = {
    build: `Best Practices: Sauce Labs Desktop Web build-${new Date().getTime()}`,
    screenResolution: '1600x1200',
};

// =====================
// Sauce specific config
// =====================
config.user = "yourUserName";
config.key = "yourAccessKey";
config.region = "yourRegion -> us / eu";

// ============
// Capabilities
// ============
config.capabilities = [
    /**
     * Desktop browsers
     */
    {
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    {
        browserName: 'firefox',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    // {
    //     browserName: 'internet explorer',
    //     platformName: 'Windows 8.1',
    //     browserVersion: 'latest',
    //     'sauce:options': {
    //         ...defaultBrowserSauceOptions,
    //     },
    // },
    {
        browserName: 'MicrosoftEdge',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
    // Safari 13
    {
        browserName: 'safari',
        platformName: 'macOS 10.15',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
];

// ========
// Services
// ========
config.services = config.services.concat('sauce');

exports.config = config;

```

### Sauce Labs Configs
Specify the Sauce Labs data center location in which you want to run your tests with the `region` property. 
   
Available short handles for regions are:
   * `us` - *default*
   * `eu`

This `region` property is required, and used for both Virtual Machine Cloud and Real Device Cloud tests.


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
