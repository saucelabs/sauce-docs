---
id: sauce-labs
title: Sauce Labs Integration with Visual Component Testing
sidebar_label: Sauce Labs
---

Screener integrates with the Sauce Labs testing cloud for Cross-Browser Testing.

To learn more about Screener's Cross-Browser Testing, see [Visual Component Cross-Browser Testing](/visual/component-testing/cross-browser-testing).

:::note Important
* Cross-Browser Testing with Sauce Labs will be slower than regular Screener visual regression tests.
* You may want to limit cross-browser testing to certain scenarios, such as only when merging into your main branch (see example below).
:::

## What You'll Need

* A valid Sauce Labs account.
* Access to enough [concurrency](/basics/acct-team-mgmt/concurrency-limits) in your Sauce account to run Screener tests. Each browser/resolution combination will use one concurrent machine.

## Adding Sauce Labs Browsers

You'll need to add your Sauce Labs credentials via the sauce option in your `screener.config.js` file. Browsers added ***must*** match one of the supported browsers/versions in the browser table below.

Here is a CircleCI example that only runs cross-browser tests when committing into the main branch:

```java
var config = {
  // regular screener config
};

// only run cross browser tests when merging into 'main' branch
if (process.env.CIRCLE_BRANCH === 'main') {
  config.browsers = [
    {
      browserName: 'chrome'
    },
    {
      browserName: 'microsoftedge',
      version: '86.0'
    },
    {
      browserName: 'safari',
      version: '13.1'
    }
  ];
  config.sauce = {
    username: 'sauce_user',
    accessKey: 'sauce_access_key',
    maxConcurrent: 10
  };
}

module.exports = config;
```

## Supported Browsers

  <table>
    <tr>
     <td><strong>browserName</strong></td>
     <td><strong>version</strong></td>
    </tr>
    <tr>
     <td><strong>chrome</strong></td>
     <td><ul>
  <li>87.0</li>
  <li>86.0</li>
  <li>85.0</li>
  <li>84.0</li>
  <li>83.0</li></ul>
     </td>
    </tr>
    <tr>
     <td><strong>firefox</strong></td>
     <td><ul>
  <li>83.0</li>
  <li>82.0</li>
  <li>81.0</li>
  <li>80.0</li>
  <li>79.0</li></ul>
     </td>
    </tr>
    <tr>
     <td><strong>internet explorer</strong></td>
     <td><ul><li>11.0</li></ul></td>
    </tr>
    <tr>
     <td><strong>microsoftedge</strong></td>
     <td><ul><li>87.0</li>
  <li>86.0</li>
  <li>85.0</li>
  <li>84.0</li>
  <li>83.0</li>
  <li>18.17763</li>
  <li>17.17134</li></ul>
     </td>
    </tr>
    <tr>
     <td><strong>safari</strong></td>
     <td><ul>
  <li>13.1</li>
  <li>12.1</li>
  <li>11.1</li></ul>
     </td>
    </tr>
  </table>



## Sauce Connect Proxy Integration

When using Sauce Labs browsers, you'll have the option of using a secure Sauce Connect tunnel. To enable this in Screener, set the flag `launchSauceConnect` to `true`. Sauce Connect will be launched and managed by this module, and assigned a unique tunnel identifier.

```java
module.exports = {
  ...

  sauce: {
    username: 'sauce_user',
    accessKey: 'sauce_access_key',
    maxConcurrent: 10, // optional available concurrency you have from Sauce Labs
    launchSauceConnect: true // enable Sauce Connect
  }
}
```

### Important Notes
* Using Sauce Connect version `4.6.2`.
* Sauce Connect integration requires all browsers to be Sauce Labs browsers. An error will thrown if you use a non-Sauce browser.
* Logs for Sauce Connect will be saved in the root of your project under `sauce-connect.log` for debugging purposes.
* Sauce Connect tunnel cannot be used together with the tunnel: option.
* A unique `tunnelIdentifier` will be automatically generated for you when using the Sauce Connect integration. An error will be thrown if you try to  set `tunnelIdentifier` manually.
* When running Sauce Connect tunnels on your localhost, please note that Sauce Connect only supports a limited set of valid ports.
* For additional information, see the [Sauce Connect Proxy documentation](/secure-connections/sauce-connect).
