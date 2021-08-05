---
id: animations
title: Disabling CSS Animations
sidebar_label: Disabling CSS Animations
---

CSS Animations can cause inconsistency in your screenshots, resulting in failing visual tests. To alleviate this, Screener automatically disables CSS Animations by default to help ensure consistent results.

So, nothing needs to be done to disable CSS Animations.

If you don't want Screener to disable your CSS Animations, set the `cssAnimations` option in your screener.config.js file to `true`. Example:

```java
// screener.config.js
module.exports = {
  ...

  cssAnimations: true
}
```
