---
id: ignoring-changes
title: Ignoring Visual Changes and Areas
sidebar_label: Ignoring Changes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Ignoring Changes

Screener gives the ability to easily ignore specific visual changes during the Review Flow.

An example of where this could be useful is ignoring content that continuously changes on each test run (such as dates).

To ignore a visual change:
1. Click on its highlight to open the **Change List** side panel.
2. Find the change in the Change List, and click **Ignore**.

Changes to this element will now be ignored in future tests:

<img src={useBaseUrl('img/visual/e2e-ignore-flow.gif')} alt="E2E Ignore Flow" />


### Undoing an Ignore

To undo an **Ignore** action:
1. Follow the same steps above.
2. Find the ignored change.
3. Click **Undo Ignore**.


## Ignoring Areas

Screener also provides you the ability to exclude areas from your visual test. An example of where this could be useful is a third-party widget or ads.

To ignore a visual area, you have two options:

* Add a special class name - `qa-screener-ignore` - to your app's HTML code on the element you want to ignore. Then the element, and everything contained within it, will be ignored.
* Add an `ignore` option in your WebDriver capabilities, with its value set to a comma-delimited string of CSS Selectors that represent areas to be ignored. Example:
  ```java
  capabilities = {
    ...
    'sauce:visual': {
      ...
      ignore: '.qa-ignore-date, .qa-ignore-ad'
    }
  }
