---
id: review-workflow
title: Visual E2E Testing Review Worklow
sidebar_label: Review Workflow
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Learn the Screener workflow for reviewing UIs. Each UI state under test has one of the following statuses:

<table>
  <tr>
   <td>
    <strong>New</strong>
   </td>
   <td>
    A new UI state that has not been reviewed yet.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Changed</strong>
   </td>
   <td>
    A UI state that has changed visually when compared to its accepted baseline.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Accepted</strong>
   </td>
   <td>
    A UI state that is visually the same as its baseline
   <p>OR has been reviewed and accepted by a team member.</p>
   </td>
  </tr>
  <tr>
   <td>
    <strong>Rejected</strong>
   </td>
   <td>
    A UI state that has been reviewed, found to have defects, and rejected by a team member.
   </td>
  </tr>
</table>


## 1. Start Reviewing

When a test has **Changed** or **New** UI states, it will show a Review button:

<img src={useBaseUrl('img/visual/e2e-review-button.png')} alt="E2E Review Button" />

Clicking on the Review button will display a list of your UI states filtered to only those needing review.

Click on the first UI state to start reviewing:

<img src={useBaseUrl('img/visual/e2e-review-state.jpeg')} alt="E2E Review State" />

## 2. Review UI State

You will be presented with screenshots of the selected UI state:

<img src={useBaseUrl('img/visual/e2e-review-screenshots.jpeg')} alt="E2E Review Screenshots" />

If a baseline exists, a side-by-side view will be displayed with the baseline screenshot on the left-hand side and the current screenshot from the latest build on the right-hand side.

Changed UI states will include highlights of visual changes directly overlayed on the screenshots.

:::tip Tip: Ignoring

[Learn how to ignore changes](/visual/e2e-testing/workflow/ignoring-changes).
:::

:::tip Tip: Change Details

[Learn how to view change details](/visual/change-details).
:::


## 3. Accept or Reject

After reviewing the UI state, you can either:
* **Accept**: if the screenshots are as expected, which will set the current as the new baseline (tip: keyboard shortcut is Shift + Up Arrow).
* **Reject**: if defects are found which need to be fixed (tip: keyboard shortcut is Shift + Down Arrow).

  <img src={useBaseUrl('img/visual/e2e-review-accept.png')} alt="E2E Review Accept" width="200"/>


## 4. Continue Reviewing

Continue reviewing the remaining UI states by clicking one of the below options (or use keyboard shortcuts to navigate through UI states).
* **Next** arrow (tip: keyboard shortcut is Right Arrow).
* **Previous** arrow (tip: keyboard shortcut is Left Arrow).

  <img src={useBaseUrl('img/visual/e2e-review-next.png')} alt="E2E Review Next" width="150"/>


:::tip Tip: Accept All Button

Use the **Accept All** button to quickly set ___all___ filtered UI states to accepted.
:::

## 5. Review Complete

When all UI states have been reviewed, the filtered state list will be empty.

<img src={useBaseUrl('img/visual/e2e-review-complete.png')} alt="E2E Review Complete" />

The build status will be updated to **Success** when all UI states have been accepted.

The build status will be updated to **Failure** when there are rejected UI states.


## Next Steps

* [Integrate into your CI process](/visual/e2e-testing/integrations/continuous-integration) for continuous visual testing.
