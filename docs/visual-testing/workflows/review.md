---
sidebar_label: Review
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Review Workflow

The review workflow happens in the [Sauce UI](https://app.saucelabs.com/visual/).
Its purpose is to define new baseline snapshots and review diffing results.

Every execution of the [test execution workflow](./test-execution.md) generates a "Visual Build".
For many integrations, there will also be at least one automated job that generated the snapshots for the "Visual Build".

<img src={useBaseUrl('/img/sauce-visual/build-row.jpg')} alt="Build row"/>

:::note
A "Visual Build" is currently not related to builds of automated jobs. We are working on a solution to make this more clear.
:::

## Reviewing and Approving baselines

The first time you run a test, a baseline is automatically created in our system and will be marked as ["For Review"](#visual-statuses). This baseline serves as the standard for all subsequent tests and matches based on the metadata as described in the [Baseline Matching](../../visual-testing.md#baseline-matching) and must be reviewed and approved by a user.

:::note
Subsequent Test Executions can also generate new baseline snapshots. This can happen when:

- The metadata, that is used for [Baseline Matching](../../visual-testing.md#baseline-matching), changes. For example, when you change viewport size.
- New configurations are added to the test execution. For example, when you add a new browser or viewport size.
- New snapshots are added to the test execution. For example, when you add a new test case.

:::

### Bulk Approve

You can bulk approve all the snapshots in a build by clicking on the "More options"-button, see below.

<img src={useBaseUrl('/img/sauce-visual/build-bulk-accept.jpg')} alt="Build overview bulk accepts"/>

#### Accept All

Using this options will accept **all** snapshots and will use them as the new baseline. The following snapshot statuses will be affected:

- all snapshots that don't have a baseline image, marked as "For Review".
- all snapshots that have a baseline image where Sauce Visual detected a difference. These snapshots can only come from [Subsequent Test Executions](#subsequent-test-execution-review) and are also marked as "For Review".

#### Accept Only New

Using this option will only accept all snapshots that **don't have a baseline image** (marked as "For Review"). If this happens during a [Subsequent Test Executions](#subsequent-test-execution-review) where we also detected visual differences, then we don't accept those snapshots.

### Single Approve

You can also review and approve a single snapshot by clicking on the Build-row. This will take you to the Build Details page where you can review and approve the snapshots by using the "Accept" button.

<img src={useBaseUrl('/img/sauce-visual/build-details-single-baseline.jpg')} alt="Review and approve a single baseline images"/>

If you have more than one baseline image, and you accept one, you will automatically be taken to the next one. This will continue until you have reviewed and approved all the baseline images.

There is also an option to reject the snapshot. This will mark the snapshot as "Rejected" and will not be used as a baseline. A subsequent test execution will then generate a new baseline snapshot which needs to be reviewed and approved.

More information about reviewing and approving diffs can be found in [Subsequent Test Execution Review](#subsequent-test-execution-review).

## Subsequent Test Execution Review

Every subsequent test execution will generate a new "Visual Build" and will be marked as ["For Review"](#visual-statuses). This is because:

- a new baseline snapshot could be generated for the new test execution, see also [Reviewing and Approving Baselines](#reviewing-and-approving-baselines) and [Accept Only New](#accept-only-new).
- you need to review the visual differences between the new snapshot and the previously approved baseline snapshot.

The process of reviewing and approving the visual differences is the same as described in [Reviewing and Approving Baselines](#reviewing-and-approving-baselines).

The user interface including the actions you can take are described in [User Interface](#user-interface).

## User Interface

Selecting one of the builds allows you to get to the Diff Review Page, where you can Approve or Reject detected diffs.

<img src={useBaseUrl('/img/sauce-visual/DiffReviewPage.png')} alt="Diff Review Page"/>

By default, you will see diffs in a side-by-side view, which lets you easily compare the current diff against the Baseline. On the right side, you will see a toolbar enabling you to review the diffs. You can:

- Switch from side-by side-to focused view for easier comparison between the Baseline and Current snapshot.
- Zoom in or out of the snapshots.
- Zoom to 100% or fit snapshot to the screen.
- Highlight or hide diffs for easier discovery of the changes.

There are conditional actions you can use, depending on the type of view you have activated:

- If in side-by-side view, you can mirror the zoom and pan actions from the Current snapshot to the Baseline.
- If in focused view, you can toggle between Baseline and Current diff.

The list below shows the available actions and their keyboard shortcuts.

| Icon                                                                                                                      | Action \[Keyboard Shortcut\]                          |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| <img src={useBaseUrl('/img/sauce-visual/approve.png')} alt="Accept changes icon" width="25"/>                             | Accept changes \[A\] or Undo \[U\]                    |
| <img src={useBaseUrl('/img/sauce-visual/reject.png')} alt="Reject changes icon" width="25"/>                              | Reject changes \[R\] or Undo \[U\]                    |
| <img src={useBaseUrl('/img/sauce-visual/cycle-through-diffs.png')} alt="Cycle through snapshots arrows icon" width="50"/> | Cycle through snapshots \[&#x27F5;\] and \[&#x27F6;\] |
| <img src={useBaseUrl('/img/sauce-visual/current-only.png')} alt="Current only icon" width="25"/>                          | View current diff only or View side by side \[V\]     |
| <img src={useBaseUrl('/img/sauce-visual/zoom-in.png')} alt="Zoom in icon" width="25"/>                                    | Zoom in \[=\]                                         |
| <img src={useBaseUrl('/img/sauce-visual/zoom-out.png')} alt="Zoom out icon" width="25"/>                                  | Zoom out \[-\]                                        |
| <img src={useBaseUrl('/img/sauce-visual/fit-to-100.png')} alt="Fit to 100% or to screen icon" width="25"/>                | Zoom to fit \[1\] or Zoom to 100% \[0\]               |
| <img src={useBaseUrl('/img/sauce-visual/highlight-diffs.png')} alt="Emphasize diffs icon" width="25"/>                    | Emphasize diffs \[E\]                                 |
| <img src={useBaseUrl('/img/sauce-visual/hide-diffs.png')} alt="Hide diffs icon" width="25"/>                              | Hide diffs \[H\]                                      |
| <img src={useBaseUrl('/img/sauce-visual/sync-actions.png')} alt="Sync pan and zoom icon" width="25"/>                     | Sync pan and zoom \[P\]                               |
| <img src={useBaseUrl('/img/sauce-visual/view-current.png')} alt="View current icon" width="25"/>                          | Toggle Baseline and Current snapshots \[T\]           |

### Additional Keyboard Actions

- `cmd` on Mac / `ctrl` on Windows + mouse scroll: for zooming in or out of the snapshot.
- `space` + click and drag: for panning the snapshot.

## Visual Statuses

Visual uses different statuses:

| Status      | Description                                                                                                                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In Progress | These builds have not been finished yet. They transition into one of the following states as soon as they finish.                                                                                                                                               |
| No Changes  | The snapshots assigned to your build matched your baseline. It is considered a success because your assertions were successful.                                                                                                                                 |
| For Review  | There were either no baselines available to compare against your uploaded snapshot or some were different from their baselines. You are supposed to review those detected diffs. As long as those changes aren't accepted, they are considered a failure state. |
| Accepted    | All detected changes were accepted. This is considered a success state.                                                                                                                                                                                         |
| Rejected    | Some of your detected changes were rejected. This is considered a failure state.                                                                                                                                                                                |
