---
id: settings
title: Visual Component Testing Settings
sidebar_label: Settings
---


## How To Disable CSS Animations

CSS Animations can cause inconsistency in your screenshots, resulting in failing visual tests. To alleviate this, Screener automatically disables CSS Animations by default to help ensure consistent results.

So nothing needs to be done to disable CSS Animations.

If you do not want Screener to disable your CSS Animations, then set the cssAnimations option in your screener.config.js file to "true".


Example of re-enabling CSS Animations:
```bash
// screener.config.js
module.exports = {
  ...

  cssAnimations: true
}
```


## Using Include and Exclude Rules

When you want to test only a subset of your UI states, you can use Include and Exclude rules.

These rules can be set as options in your `screener.config.js` file.


### `includeRules`

Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be kept.
Example of using the includeRules option:

```java
// screener.config.js
module.exports = {
  ...

  includeRules: [
    /^Component/    // RegExp expression
  ]
}
```

### `excludeRules`

Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be removed.
Example of using the excludeRules option:
```java
// screener.config.js
module.exports = {
  ...

  excludeRules: [
    /^Component/    // RegExp expression
  ]
}
```

Browser-specific Rules
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

Resolution-specific Rules
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




## Subscribing to Email Notifications
Screener sends email notifications for the following build statuses:

Build Failed
Build Error
Build Accepted
You can subscribe/unsubscribe to these notifications by Project from Screener's Notifications Settings:
