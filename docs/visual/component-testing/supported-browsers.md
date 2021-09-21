---
id: supported-browsers
title: Browsers and Devices Supported for Visual Component Testing
sidebar_label: Supported Browsers and Devices
---

For cross-browser testing (i.e., testing across multiple browsers), we provide cloud browsers and device emulators.

## Supported Browsers

The following browsers are available in our cloud:

<table>
  <tr>
   <td><strong>browserName</strong>
   </td>
   <td><strong>version</strong>
   </td>
  </tr>
  <tr>
   <td><strong>chrome</strong>
   </td>
   <td><em>-Do not set-</em>
   </td>
  </tr>
  <tr>
   <td><strong>firefox</strong>
   </td>
   <td><em>-Do not set-</em>
   </td>
  </tr>
  <tr>
   <td><strong>internet explorer</strong>
   </td>
   <td>11
   </td>
  </tr>
</table>

To test against additional browsers (e.g., Safari and Edge), you can [integrate Screener with Sauce Labs](/visual/component-testing/integrations/sauce-labs) to gain access.

Cross-browser testing is available through Screener's Perform plan. By default, Screener runs tests against the Chrome browser.


## Adding Browsers

To test against multiple browsers, add the `browsers` option to your `screener.config.js` file:

```java
// screener.config.js
module.exports = {
  ...

  browsers: [
    {
      browserName: 'chrome'
    },
    {
      browserName: 'firefox'
    },
    {
      browserName: 'internet explorer',
      version: '11'
    }
  ]
};
```

## Running Cross-Browser Tests on a Specific Branch

To speed up builds, you may want to run Cross-Browser Testing only when committing into a particular branch. For example, when merging PRs into the main branch.

Here is a CircleCI example that only runs cross browser tests when committing into the main branch:

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
      browserName: 'firefox'
    },
    {
      browserName: 'internet explorer',
      version: '11'
    }
  ];
}

module.exports = config;
```


## Additional Information

For more information on what we support, see:
* [Sauce Labs | Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices)
* [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator#/)
