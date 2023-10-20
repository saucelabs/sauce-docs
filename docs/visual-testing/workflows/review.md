---
sidebar_label: Review
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Review Workflow

The review workflow happens in the [Sauce UI](https://app.saucelabs.com/visual/).
Its purpose is to review results and define new baseline snapshots.

Every execution of the [diff generation workflow](./diff-generation.md) generates a "Visual Build".
For many integrations, there will also be at least one automated job that generated the snapshots for the "Visual Build".

**Note:** A "Visual Build" is currently not related to builds of automated jobs.


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

