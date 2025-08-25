---
id: selective-diffing
title: Selective Diffing
sidebar_label: Selective Diffing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Visual allows you to ignore only certain types of changes.
We support the following change types:
- **Content:** The text, image or other content changes.
- **Dimensions:** When the size of an element changes.
- **Position:** When the position (top left corner) of an element changes.
- **Structure:** When an element or attribute was added, deleted or moved.
- **Style:** When CSS changes.
- **Visual:** When something visually changed that cannot be categorized.

> Note: To benefit from selective diffing, you need
>   - A baseline with a DOM capture
>   - A snapshot with a DOM capture
>   - To request the BALANCED diffing method during the visual check

For each snapshot, you can specify which types of changes should be detected or ignored.

In addition to setting the types of changes on a snapshot level, you can also define *regions*
based on selectors / elements in your testing framework.
For each region, you can again opt in or opt out of change types.
The regional setting overrides all settings that you may have done on a snapshot level.

> Please note that overlapping regions with competing diffing settings will result in undefined behavior.

## Diffing Methods
When running a visual check, you can select one of several diffing methods:

* **Balanced (Recommended)**: The default method, designed to provide the most accurate and stable results. It allows configuration of advanced options such as sensitivity levels, tolerance thresholds, and diffing rules.
* **Simple**: A lightweight comparison method that focuses on pixel-level changes. Useful for quick checks, but more prone to noise (e.g., anti-aliasing or rendering differences).
* **Experimental (Deprecated)**: An older approach to image comparison. This method is not recommended and may be removed in future versions.

## Diffing Options
Visual Testing provides flexibility in how screenshots are compared, so that teams can adjust sensitivity to match their needs and reduce false positives. By configuring diffing options, you can control both how images are compared and where changes should be considered significant.

### Configurable Options 
When using the **Balanced method**, you can fine-tune comparisons with the following options:

* [**Sensitivity**](https://github.com/saucelabs/visual-sdks/blob/main/visual-js/visual/src/graphql/__generated__/graphql.ts#L930): Predefined tolerance levels that adjust how strict the comparison is. Higher sensitivity will detect even minor pixel changes, while lower sensitivity ignores small rendering differences.
* [**Tolerance**](https://github.com/saucelabs/visual-sdks/blob/main/visual-js/visual/src/graphql/__generated__/graphql.ts#L953):  A manual numeric threshold that controls how much pixel variation is acceptable before a difference is reported. This is useful for fine-grained adjustments beyond the preset sensitivity options.
* [**Diffing Options**](https://github.com/saucelabs/visual-sdks/blob/main/visual-js/visual/src/graphql/__generated__/graphql.ts#L976):  Rules that determine what kinds of changes should be detected or ignored. For example, you can configure whether to ignore text anti-aliasing, color shifts, or background rendering variations.

## Regions
In addition to global comparison settings, you can specify regions within the screenshot:

* [**Ignore Regions**](https://docs.saucelabs.com/visual-testing/integrations/webdriverio/#ignored-regions):  Define areas of the screen that should be excluded from comparison. Useful for dynamic content such as timestamps, ads, or animations that would otherwise trigger false positives.
* [**Diffing Regions**](https://docs.saucelabs.com/visual-testing/integrations/webdriverio/#area-specific-configuration): Focus comparison only on specific areas of interest, ignoring the rest of the screen. This ensures that changes outside the defined region are not flagged.

By combining diffing methods and region configuration, you can precisely control which visual changes are reported and reduce unnecessary test failures.