---
id: change-details
title: Viewing Change Details for E2E Tests
sidebar_label: Viewing Change Details
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Change Categories

Changed UI states will include highlights of visual changes directly overlayed on the screenshots.

Screener automatically organizes these changes into four categories:

* **Structure**: structural changes are when new visual items are added or old items are removed.
* **Layout**: layout changes are when visual items change position or dimension.
* **Style**: style changes are when css styling gets updated (e.g., font size, color).
* **Content**: content changes are when text or graphics get updated.

## Change List

Each change in Screener has additional details that can be viewed to help with debugging. For example:

* View the specific CSS property that changed.
* View a text diff of content changes.

These details can be viewed in the Change List, which can be opened by clicking on a change highlight:

<img src={useBaseUrl('img/visual/e2e-change-detail-flow.gif')} alt="Change Detail Flow" />
