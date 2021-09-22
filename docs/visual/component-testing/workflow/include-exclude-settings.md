---
id: include-exclude-settings
title: Including and Excluding UI States
sidebar_label: Filtering UI States
---

import useBaseUrl from '@docusaurus/useBaseUrl';

When you want to test only a subset of your UI states, you can use Include and Exclude rules.

These rules can be set as options in your `screener.config.js` file.


## `includeRules`

Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be kept. Example of using the `includeRules` option:

```java
// screener.config.js
module.exports = {
  ...

  includeRules: [
    /^Component/    // RegExp expression
  ]
}
```


## `excludeRules`

Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be removed. Example of using the `excludeRules` option:

```java
// screener.config.js
module.exports = {
  ...

  excludeRules: [
    /^Component/    // RegExp expression
  ]
}
```

## Browser-Specific Rules

You can use include/exclude rules to filter what UI states are tested in a particular browser.

For example, to exclude a UI state from being tested in IE11 only:

```java
// screener.config.js
module.exports = {
  ...

  browsers: [
    {
      browserName: 'internet explorer',
      version: '11',
      excludeRules: /^Component/
    }
  ]
}
```

## Resolution-Specific Rules

You can use include/exclude rules to filter what UI states are tested in a particular resolution.

For example, to exclude a UI state from being tested in 768x1024 resolution only:

```java
// screener.config.js
module.exports = {
  ...

  resolutions: [
    {
      width: 768,
      height: 1024,
      excludeRules: /^Component/
    }
  ]
}
```
