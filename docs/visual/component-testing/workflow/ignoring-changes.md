---
id: ignoring-changes
title: Ignoring Visual Changes and Areas
sidebar_label: Ignoring Changes
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Ignoring Changes

Screener gives the ability to easily ignore specific visual changes during the Review Flow.

An example of where this could be useful is ignoring content that continuously changes on each test run (e.g., dates).

To ignore a visual change:
1. Click on its highlight to open the **Change List** side panel.
2. Find the change in the **Change List** > Click **Ignore**.

Changes to this element will now be ignored in future tests.

<img src={useBaseUrl('img/visual/component-ignore-flow.gif')} alt="Component Ignore Flow" />

### Undoing an Ignore

To undo an **Ignore** action:
1. Follow the same steps above.
2. Find the ignored change.
3. Click **Undo Ignore**.


## Ignoring Areas

Screener also provides you the ability to exclude areas from your visual test. An example of where this could be useful is a third-party widget or ads.

To ignore a visual area, you have two options. You can either:
* Add a special class name - `qa-screener-ignore` - to your application's HTML code on the element you want to ignore. Then the element, and everything contained within it, will be ignored.
* Edit your `screener.config.js` file, and add an ignore option with its value set to a comma-delimited string of CSS Selectors that represent areas to be ignored.
   * Example of second option:
      ```bash
      // screener.config.js
      module.exports = {
        ...

        ignore: '.qa-ignore-date, .qa-ignore-ad'
      }
      ```
