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

[Deque's axe™](https://www.deque.com/axe/) is one of the world's leading digital accessibility toolkits. The `axe-core` library provided by Deque allows you to inject functionality into your tests in order to scan content and return an `a11y` score. 

Below is a guide to set up the Sauce Labs integration. This integration allows you to run your accessibility tests, using axe™, on our platform.

:::info What does `a11y` stand for, and what is Accessibility Testing?
See the [following link](https://www.deque.com/web-accessibility-beginners-guide/#what-is-a11y) for further information.
:::

## What You'll Need
* [A Sauce Labs Account](https://saucelabs.com/sign-up)
* [A Deque Account (Optional)](https://axe.deque.com/plans)
* [Install Git](https://git-scm.com/downloads)
* Language Binaries ([Node/NPM](https://nodejs.org/en/download/), [Ruby](https://www.ruby-lang.org/en/downloads/), [Python](https://www.python.org/downloads/), etc.)

## Set Up Dependencies

<Tabs
groupId="langs"
defaultValue="node"
values={[
    {label: 'node.js / wdio', value: 'node'},
    {label: 'java', value: 'java'},
    {label: 'python', value: 'python'},
    {label: 'ruby', value: 'ruby'},
]}>

<TabItem value="node">

Add the following dependencies to your `package.json` file:

* `axe-core` for Accessibility tests (`a11y` results)
* `sauce-service` for the WebdriverIO plugin service

```js
"@axe-core/webdriverio": "4.2.1"
"@wdio/sauce-service"
```

:::note WebdriverIO Configuration
If you haven't already, create a `wdio.conf.js` in your root project directory, see the [WebdriverIO documentation](https://webdriver.io/docs/gettingstarted#set-up) for further details. 
:::

</TabItem>
<TabItem value="java">

</TabItem>
<TabItem value="python">

</TabItem>
<TabItem value="ruby">

</TabItem>
</Tabs>


## Create an Axe Instance

<Tabs
groupId="langs"
defaultValue="node"
values={[
    {label: 'node.js/wdio', value: 'node'},
    {label: 'java', value: 'java'},
    {label: 'python', value: 'python'},
    {label: 'ruby', value: 'ruby'},
]}>

<TabItem value="node">

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

</TabItem>
<TabItem value="java">

</TabItem>
<TabItem value="python">

</TabItem>
<TabItem value="ruby">
</TabItem>
</Tabs>

## Run the Test

Now in your actual tests, all you need to do is call the following to retrieve the `axe-core` test results:

<Tabs
groupId="langs"
defaultValue="node"
values={[
    {label: 'node.js/wdio', value: 'node'},
    {label: 'java', value: 'java'},
    {label: 'python', value: 'python'},
    {label: 'ruby', value: 'ruby'},
]}>

<TabItem value="node">

```js
browser.getAxeResults()
```

</TabItem>
<TabItem value="java">

</TabItem>
<TabItem value="python">

</TabItem>
<TabItem value="ruby">
</TabItem>
</Tabs>

## Additional Resources
* [`sa11y` (Selenium Accessibility) Example Code](https://github.com/saucelabs/sa11y)
* [Deque Saucelabs Integration Documentation](https://www.deque.com/saucelabs/get-started/)
* [Deque `axe-core` Example WebDriverIO Project](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverio)
* [Documentation about the chainable `axe` API for WebdriverIO](https://www.npmjs.com/package/@axe-core/webdriverio)
* [Sauce Labs / Deque Marketing Blog Post](https://saucelabs.com/news/sauce-labs-and-deque-systems-join-forces-to-help-enterprises-ensure-digital-accessibility)
* [Sauce Labs Automated Testing Basics](/web-apps)
