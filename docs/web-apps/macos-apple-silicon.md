---
id: macos-apple-silicon
title: macOS Browser Tests on Apple Silicon
sidebar_label: macOS on Apple Silicon
description: Testing on macOS 14+ and Apple Silicon
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs now supports **macOS 27 Golden Gate** on Apple Silicon-powered Macs. These environments offer improved performance, modern architecture alignment, and compatibility with ARM versions of the major browsers. This enables you to test web apps on Safari 27 as well as Chrome, Firefox, and Edge.

:::note Availability
macOS 14, 15, 26, and 27 are available to customers with the required subscription. If you don't have access, contact your account manager to discuss upgrading.
:::

## Browsers available on macOS

| OS Version | Browser | Versions|
|------------|---------|---------|
| macOS 14 Sonoma <br/> macOS 15 Sequoia   | Safari  | 18      |
| macOS 14 Sonoma <br/> macOS 15 Sequoia <br/> macOS 26 Tahoe <br/> macOS 27 Golden Gate | Chrome  | 134+    |
| macOS 14 Sonoma <br/> macOS 15 Sequoia <br/> macOS 26 Tahoe <br/> macOS 27 Golden Gate | Firefox | 136+    |
| macOS 14 Sonoma <br/> macOS 15 Sequoia <br/> macOS 26 Tahoe <br/> macOS 27 Golden Gate | Edge    | 138+    |
| macOS 26 Tahoe   | Safari  | 26      |
| macOS 27 Golden Gate | Safari | 27      |

## Known Limitations

The following limitations apply to macOS 27 Golden Gate:

- Beta and Dev channel browser builds are not yet available. Use the stable browser versions listed above.
- The Playwright, Cypress, and TestCafe runners do not yet support macOS 27. Use macOS 14, 15, or 26 for those frameworks.

## Test Capabilities

Tests on macOS 14 and newer can include the `armRequired` parameter passed with "true" in the Sauce Options to ensure they are routed to the correct architecture. Prior to March 15, 2026, `armRequired` was required for tests to run on ARM machines; it is now optional when targeting specific versions and can be excluded for future test runs. If you're using Platform variables like `current_major`, continue to include `armRequired` to receive macOS 14 and above.

```javascript
{
    sauceOptions.put("armRequired", true);
    browserOptions.setCapability("sauce:options", sauceOptions);
}
```

See the [Platform Configurator](https://saucelabs.com/products/platform-configurator) for full example configurations

---

Have questions? Visit the [Sauce Labs Community](https://support.saucelabs.com/hc/en-us/community/topics) or contact our support team.
