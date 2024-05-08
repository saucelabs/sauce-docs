---
id: selective-diffing
title: Sauce Labs Visual Testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Selective Diffing

Sauce Visual allows you to ignore only certain types of changes.
We support the following change types:
- **Content:** The text, image or other content changes.
- **Dimensions:** When the size of an element changes.
- **Position:** When the position (top left corner) of an element changes.
- **Structure:** When an element was added, deleted or moved.
- **Style:** When CSS was changed.
- **Visual:** When something visually that cannot be categorized.

> Note: To benefit from selective diffing, you need
>   - to capture a DOM snapshot and compare with 
>   - a baseline that also contains a DOM snapshot;
>   - to use the BALANCED diffing method.

For each snapshot, you can specify which types of changes should be detected or ignored.

In addition to setting the types of changes on a snapshot level, you can also define *regions*
based on selectors / elements in your testing framework.
For each region, you can again opt in or opt out of change types.
The regional setting overrides all settings that you may have done on a snapshot level.

> Please note that overlapping regions with competing diffing settings will result in undefined behavior.
