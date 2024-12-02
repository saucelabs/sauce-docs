---
id: mobile-native-testing
title: Mobile Native Testing
sidebar_label: Mobile Native Testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

In addition to website testing, Sauce Visual also supports testing of native mobile apps for Android and iOS with Appium.

In principle, the process is the same as writing a visual test for a website, except that instead of a website, a mobile native app needs to be specified in the capabilities.

Check [our examples](https://github.com/saucelabs/visual-examples/) to see visual for mobile native in action.


## Best Practices

When writing a visual test for mobile apps, we recommend the following:
- Explicitly control "dark mode" / "light mode" before taking visual snapshots, so snapshots are either always taken in dark or light mode, but not mixed.
- Explicitly specify a single device and OS version for testing. You may run the same test suite on various devices, but don't use wildcards in device names (dynamic device allocation).


## Limitations

The following features are not yet available for mobile app testing:
- [Selective diffing](./selective-diffing.md) is constrained by what is available in Appium's page source.

Native full-page screenshots are currently in beta and may have unexpected behavior.
Identified limitations:
- Slow screenshot capture
- 1 pixel shifts in the screenshot (iOS tablets only)
- Ignoring and clipping limited to elements within `scrollElement` (iOS only)
- Sticky elements missing at the bottom of the screen
- The DOM capturing, inspection and selective diffing features have not yet been implemented
