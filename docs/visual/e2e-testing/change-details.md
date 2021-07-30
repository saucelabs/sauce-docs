---
id: change-details
title: Learn How To View Change Details
sidebar_label: View Change Details
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Changed UI states will include highlights of visual changes directly overlayed on the screenshots.

Screener automatically organizes these changes into four categories:

<table>
  <tr>
   <td><strong>Structure</strong>
   </td>
   <td>Structural changes are when new visual items are added, or old items are removed.
   </td>
  </tr>
  <tr>
   <td><strong>Layout</strong>
   </td>
   <td>Layout changes are when visual items change position or dimension.
   </td>
  </tr>
  <tr>
   <td><strong>Style</strong>
   </td>
   <td>Style changes are when css styling gets updated, such as font sizes, color, etc.
   </td>
  </tr>
  <tr>
   <td><strong>Content</strong>
   </td>
   <td>Content changes are when text or graphics get updated.
   </td>
  </tr>
</table>


## The Change List

Each change in Screener has additional details that can be viewed to help with debugging. For example:

* View the specific CSS property that changed.
* View a text diff of content changes.

These details can be viewed in the Change List, which can be opened by clicking on a change highlight:

<img src={useBaseUrl('img/visual/e2e-change-detail-flow.gif')} alt="E2E Baseline Branching and Merging" />
