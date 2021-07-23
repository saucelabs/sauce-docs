---
id: ignore
title: Learn How To Ignore Changes
sidebar_label: Ignoring Changes
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 1. Ignore Changes

Screener gives the ability to easily ignore specific visual changes during the Review Flow. An example of where this could be useful, is ignoring content that continuously changes on each test run (such as dates).

To ignore a visual change:

1. Click on its highlight to open the Change List side panel.
2. Find the change in the Change List, and click Ignore.

Changes to this element will now be ignored in future tests.

<img src={useBaseUrl('img/visual/e2e-ignore-flow.gif')} alt="E2E Ignore Flow" />


### How to Undo Ignore

Follow the same steps above, find the ignored change, and click "Undo Ignore".



## 2. Ignore Areas

Screener gives the ability to have areas excluded from the visual test. An example of where this could be useful, is a 3rd-party widget or ads.

To ignore a visual area, you have 2 options. You can either:

* Add a special class name to your application's HTML code on the element you want to ignore. The class name is **qa-screener-ignore**. Then the element, and everything contained within it, will be ignored.
* OR, in your WebDriver capabilities, add an **ignore** option with its value set to a comma-delimited string of CSS Selectors that represent areas to be ignored.

Example of 2nd option:

```java
capabilities = {
  ...
  'sauce:visual': {
    ...
    ignore: '.qa-ignore-date, .qa-ignore-ad'
  }
}
