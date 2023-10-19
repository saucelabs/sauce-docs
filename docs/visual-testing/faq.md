---
id: faq
title: Sauce Visual Testing FAQ
sidebar_label: FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Is Sauce Visual's image comparison pixel-based or DOM-based?

The current implementation is Pixel-based only.

### Does Sauce Visual support "ignore regions"?

Yes, "ignore regions" are supported. Currently, you can define these regions in code by specifying the locator of a Web Element or by setting the coordinates of a rectangle.

```java
  // This rectangular area would be ignored, no  pixel
  // changes will be diffed in this zone.
  IgnoreRegion ignoreRegion = new IgnoreRegion(200,200,100,100);
```

### Can I integrate this into CI/CD testing?

Yes, Sauce Visual is 100% API-based and natively utilizes the same tools as the rest of the Sauce product line. When integrating Visual testing into your scripts, you can execute them just like any other scripts.

### What languages/frameworks will be supported at launch?

Sauce Visual will support the following languages/frameworks at launch: Selenium/Appium/Cypress, WebDriverIO, Java JUnit/TestNG, and JavaScript. You can find examples of some of these at [https://github.com/saucelabs/visual-examples](https://github.com/saucelabs/visual-examples).

### What subsequent languages/frameworks will be supported?

Support for additional languages/frameworks will be determined based on demand. Frameworks like Playwright, TestCafe, XCUIT, Espresso, etc., are currently under consideration. Contributions are encouraged. Check out the [examples project](https://github.com/saucelabs/visual-examples). If you create your own public library or binding, feel free to add another example to that project.

### When will it support "my favorite framework"?

The support for any framework depends on the client-side implementation using the underlying API. If you require an SDK, submit a new idea at [productboard](https://portal.productboard.com/sauceprod/2-sauce-labs-portal/tabs/4-under-consideration/submit-idea).
