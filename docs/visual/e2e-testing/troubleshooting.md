---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Screener End-of-life

The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the [integration steps](/visual-testing/).

If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support.
:::

## Test Timeouts

If you receive a timeout, it could come from the testing framework you are using, or from WebDriver. For example, if you use WebDriverIO with Mocha, there is a default timeout of 10 seconds.

### Test Framework Timeouts

Test framework timeouts can be resolved by increasing the timeout option specific to your test framework.

Here are some examples for WebDriverIO, which supports various testing frameworks:

<Tabs
defaultValue="Mocha"
values={[
{label: 'Mocha', value: 'Mocha'},
{label: 'Jasmine', value: 'Jasmine'},
{label: 'Cucumber', value: 'Cucumber'},
]}>

<TabItem value="Mocha">

WebDriverIO with Mocha Example:

```java
// wdio.conf.js
exports.config = {
  framework: 'mocha',
  mochaOpts: {
    timeout: 90000
  },
  ...
}
```

</TabItem>
<TabItem value="Jasmine">

WebDriverIO with Jasmine Example:

```java
// wdio.conf.js
exports.config = {
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  ...
}
```

</TabItem>
<TabItem value="Cucumber">

WebDriverIO with Cucumber Example:

```java
// wdio.conf.js
exports.config = {
  framework: 'mocha',
  cucumberOpts: {
    timeout: 90000
  },
  ...
}
```

</TabItem>
</Tabs>

### WebDriver Timeouts

WebDriver timeouts can be increased via the `timeouts` capability.

The following WebDriver timeout defaults are used:

```java
capabilities = {
  ...
  timeouts: {
    script: 90000,
    pageLoad: 300000
  }
}
```

Additional information on WebDriver timeouts can be found [here](https://developer.mozilla.org/en-US/docs/Web/WebDriver/Errors/ScriptTimeout).

## Can't Capture Snapshot with `cropTo`

When using the [Snapshot command](https://docs.saucelabs.com/visual/e2e-testing/commands-options/#snapshot-command), if you can't crop the target element with `cropTo` and the element isn't scrollable, you can use the `scrollAndStitchScreenshot` option. For example:

```
await browser.execute('/*@visual.snapshot*/', 'Home', { scrollAndStitchScreenshot: true });
```

### Limitations

If the target element is scrollable, the `cropTo` option may not capture a complete screenshot.
