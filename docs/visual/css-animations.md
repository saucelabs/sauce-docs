---
id: css-animations
title: Disabling CSS Animations
sidebar_label: CSS Animations
---

## CSS Animations

Because CSS Animations may cause inconsistency in your screenshots and possible failure of your visual tests, we've automatically disabled CSS Animations to help ensure consistent results.

**For Component Testing only**: To override this feature and have CSS Animations enabled, set the `cssAnimations` option in your screener.config.js file to `true`.

```java
// screener.config.js
module.exports = {
  ...

  cssAnimations: true
}
```


## Animated GIFs

Animated GIFs can cause inconsistency in your screenshots, resulting in failing visual tests. To alleviate this, Screener automatically freezes Animated GIFs to the first frame to help ensure consistent results.

So nothing needs to be done to freeze Animated GIFs.
