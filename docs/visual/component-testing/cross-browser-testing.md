---
id: cross-browser-testing
title: Visual Component Cross-Browser Testing
sidebar_label: Cross-Browser Testing
---

Learn How To Test Across Browsers
For Cross Browser Testing, Screener provides cloud browsers and device emulators. The following browsers are available in our cloud:

Chrome
Firefox
Internet Explorer 11
To test against additional browsers, Screener provides integrations with Sauce Labs to provide access to Safari and Edge browsers.

Cross Browser Testing is available through Screener's Perform plan. By default, Screener runs tests against the Chrome browser.


Adding Browsers
To test against multiple browsers, add the browsers option to your screener.config.js file:

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

Run Cross-Browser Tests On Specific Branch
To speed up builds, you may want to run Cross-Browser Testing only when committing into a particular branch. For example, when merging PRs into master branch.

Here is a CircleCI example that only runs cross browser tests when committing into master branch:

```java
var config = {
  // regular screener config
};

// only run cross browser tests when merging into 'master' branch
if (process.env.CIRCLE_BRANCH === 'master') {
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

Adding Sauce Labs Browsers
Please view our Sauce Labs Integration documentation.

Supported Browsers
browserName	version
chrome	-do not set-
firefox	-do not set-
internet explorer	11
