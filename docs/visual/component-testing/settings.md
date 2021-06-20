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


## How To Use Include/Exclude Rules
When you want to test only a subset of your UI states, you can use Include and Exclude rules.

These rules can be set as options in your screener.config.js file.

Project Rules
includeRules	Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be kept.
Example of using the includeRules option:
```
// screener.config.js
module.exports = {
  ...

  includeRules: [
    /^Component/    // RegExp expression
  ]
}
```

excludeRules	Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be removed.
Example of using the excludeRules option:
```
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

```
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

```
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



## Ignoring Changes

### Ignore Changes

Screener gives the ability to easily ignore specific visual changes during the Review Flow. An example of where this could be useful, is ignoring content that continuously changes on each test run (such as dates).

To ignore a visual change:

1. Click on its highlight to open the Change List side panel.
2. Find the change in the Change List, and click Ignore.
3. Changes to this element will now be ignored in future tests.


How to Undo Ignore:
1. Follow the same steps above.
2. Find the ignored change.
3. Click "Undo Ignore".

### Ignore Areas

Screener gives the ability to have areas excluded from the visual test. An example of where this could be useful, is a 3rd-party widget or ads.

To ignore a visual area, you have two options. You can either:

Add a special class name to your application's HTML code on the element you want to ignore. The class name is qa-screener-ignore. Then the element, and everything contained within it, will be ignored.

OR, edit your screener.config.js file, and add an ignore option with its value set to a comma-delimited string of CSS Selectors that represent areas to be ignored.

Example of second option:

```bash
// screener.config.js
module.exports = {
  ...

  ignore: '.qa-ignore-date, .qa-ignore-ad'
}
```




## How To Subscribe To Email Notifications
Screener sends email notifications for the following build statuses:

Build Failed
Build Error
Build Accepted
You can subscribe/unsubscribe to these notifications by Project from Screener's Notifications Settings:
