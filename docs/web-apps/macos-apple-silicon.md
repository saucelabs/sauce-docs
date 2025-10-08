---
id: macos-apple-silicon
title: macOS Browser Tests on Apple Silicon
sidebar_label: macOS on Apple Silicon
description: Testing on macOS 14+ and Apple Silicon
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs now supports **macOS 14 Sonoma and macOS 15 Sequoia** on Apple Silicon-powered Macs. These environments offer improved performance, modern architecture alignment, and compatibility with ARM versions of the major browsers. This enables you to test web apps on Safari 18 as well Chrome, Firefox, and Edge.

:::caution Enteprise Only
macOS 14 and 15 are only available to Enterprise customers with the appropriate Premium plan. Contact your account manager to discuss upgrading.
:::


## Getting Started with Apple Silicon on Sauce Labs

## Browsers available on macOS 14/15

| OS Version | Browser | Versions|
|------------|---------|---------|
| macOS 14   | Safari  | 18      |
| macOS 14   | Chrome  | 134+    |
| macOS 14   | Firefox | 136+    |
| macOS 14   | Edge    | 138+    |
| macOS 15   | Safari  | 18      |
| macOS 15   | Chrome  | 134+    |
| macOS 15   | Firefox | 136+    |
| macOS 15   | Edge    | 138+    |

## Required Capabilities

Tests on macOS 14 and newer require the `armRequired` parameter to be passed with "true" such as in this example: 

```javascript
{
    sauceOptions.put("armRequired", true);
    browserOptions.setCapability("sauce:options", sauceOptions);
}
```

See the [Platform Configurator](https://saucelabs.com/products/platform-configurator) for full example configurations

---

## Known Issues and Migration Notes

TK TK

Have questions? Visit the [Sauce Labs Community](https://support.saucelabs.com/hc/en-us/community/topics) or contact our support team.
