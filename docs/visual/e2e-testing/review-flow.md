---
id: review-flow
title: Learn the Review Flow
sidebar_label: Review Flow
---

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

When a test has **Changed** or **New** UI states, it will show a Review button.

Clicking on the Review button will display a list of your UI states filtered to only those needing review.

Click on the first UI state to start reviewing.

## 2. Review UI State

You will be presented with screenshots of the selected UI state:

If a baseline exists, a side-by-side view will be displayed with the baseline screenshot on the left-hand side and the current screenshot from the latest build on the right-hand side.

Changed UI states will include highlights of visual changes directly overlayed on the screenshots.


:::tip Ignoring

[Learn how to ignore changes](https://screener.io/v2/docs/visual-e2e/ignore).
:::


:::tip Change Details

[Learn how to view change details](https://screener.io/v2/docs/visual-e2e/change-details).
:::


## 3. Accept or Reject

After reviewing the UI state, you can either:
* **Accept it**: if the screenshots are as expected, which will set the current as the new baseline (tip: keyboard shortcut is Shift + Up Arrow).
* **Reject it**: if defects are found which need to be fixed (tip: keyboard shortcut is Shift + Down Arrow).


## 4. Continue Reviewing

Continue reviewing the remaining UI states by clicking one of the below options (or use keyboard shortcuts to navigate through UI states).
* **Next** arrow (tip: keyboard shortcut is Right Arrow).
* **Previous** arrow (tip: keyboard shortcut is Left Arrow).

:::tip Accept All Button

Use the **Accept All** button to quickly set ___all___ filtered UI states to accepted.
:::


## 5. Review Complete

When all UI states have been reviewed, the filtered state list will be empty.

The build status will be updated to **Success** when all UI states have been accepted.

The build status will be updated to **Failure** when there are rejected UI states.


## Next Steps

* [Integrate into your CI process](https://screener.io/v2/docs/visual-e2e/ci) for continuous visual testing.
