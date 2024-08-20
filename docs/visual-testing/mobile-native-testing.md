---
id: mobile-native-testing
title: Mobile Native Testing (BETA)
sidebar_label: Mobile Native Testing (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

In addition to website testing, Sauce Visual also supports testing of native mobile apps for Android and iOS with Appium.

In principal, the process is the same as writing a visual test for a website, except that instead of a website, an app needs to be specified in the capabilities.

Check out [our examples](https://github.com/saucelabs/visual-examples/) to see it in action.


## Best Practices

When writing a visual test for mobile apps, we recommend the following
- Explicitly control "dark mode" / "light mode" before taking visual snapshots, so snapshots are either always taken in dark or light mode, but not mixed.
- Explicitly specify a single device and OS version for testing. You may run the same test suite on various devices, but don't use wildcards in device names (dynamic device allocation).


## Limitations

The following features are not available for mobile app testing:
- Full page screenshots
- DOM capture and inspection
- [Selective diffing](./selective-diffing.md)

