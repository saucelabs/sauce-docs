---
id: sauce-visual
title: Sauce Labs Visual Testing
sidebar_label: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

Sauce Visual helps you compare uploaded images (snapshots) against reference images (baselines). It offers APIs to upload snapshots and compare them against baselines. The result of the comparison process includes the details of any detected differences. All snapshots in Sauce Visual need to be assigned to visual builds.

## Workflow

To benefit from Sauce Visual, you typically add it to your existing automated tests using provided libraries. We provide bindings for:

- JavaScript/TypeScript
- Java

You can use those standalone or with your Selenium/Appium-based tests. Support for other frameworks like Cypress, StoryBooks, and Playwright is on the Roadmap.

The best way to integrate Sauce Visual into your existing tests (or write new ones) is to follow the examples listed [in the Visual example repository](https://github.com/saucelabs/visual-examples).

After you have executed your tests, you will get the URL to the build in the command line. You can also find your Visual test results on the Builds History Page.

<img src={useBaseUrl('/img/sauce-visual/BuildHistoryPage.png')} alt="Diff History Page"/>

Each Build has an overall status, which is the summary of all the diffs captured within it, along with the build metadata. On the right side, there is a build progress bar, which lets you check at a glance how many diffs need review, are approved, or are rejected.

## Reviewing Diffs

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
| In Progress | These builds have not been finished yet. They transition into one of the following states as soon as they finish.                                                           |
| No Changes  | The snapshots assigned to your build matched your baseline. It is considered a success because your assertions were successful.                                                                                                                                 |
| For Review  | There were either no baselines available to compare against your uploaded snapshot or some were different from their baselines. You are supposed to review those detected diffs. As long as those changes aren't accepted, they are considered a failure state. |
| Accepted    | All detected changes were accepted. This is considered a success state.                                                                                                                                                                                         |
| Rejected    | Some of your detected changes were rejected. This is considered a failure state.                                                                                                                                                                                |

## Baseline Matching

A baseline is what a snapshot is compared to.

For a new snapshot, the matching baseline is found based on the following properties:
- `name`
- `testName`
- `suiteName`
- `browser`
- `operatingSystem`
- `operatingSystemVersion`
- `viewportWidth`
- `viewportHeight`
- `project`
- `branch`
- `device`

If multiple baselines match, the most recent one is selected for diff computation.

Note that not all properties are exposed on all testing frameworks.
In these cases, a default value (0, null or empty string) is used.

The matching process happens as part of the snapshot creation (`createSnapshot` in the API).
This means, that a baseline can only be considered for a diff if it existed before the `createSnapshot` call.


## API

Sauce Visual offers a public GraphQL API, which can be used to understand the available feature set and to generate client bindings from them. The public API can be found at the following URLs:

:::note

Ensure to use the appropriate API URL based on your [Data Center location](/basics/data-center-endpoints/)

:::

| Data Center | API URL                                                  |
| ----------- | -------------------------------------------------------- |
| US West     | https://api.us-west-1.saucelabs.com/v1/visual/graphql    |
| US East     | https://api.us-east-4.saucelabs.com/v1/visual/graphql    |
| EU Central  | https://api.eu-central-1.saucelabs.com/v1/visual/graphql |

## Frequently Asked Questions

### **Is Sauce Visual's image comparison pixel-based or DOM-based?**

The current implementation is Pixel-based only.

### **Does Sauce Visual support "ignore regions"?**

Yes, "ignore regions" are supported. Currently, you can define these regions in code by specifying the locator of a Web Element or by setting the coordinates of a rectangle.

```java
  // This rectangular area would be ignored, no  pixel
  // changes will be diffed in this zone.
  IgnoreRegion ignoreRegion = new IgnoreRegion(200,200,100,100);
```

### **Can I integrate this into CI/CD testing?**

Yes, Sauce Visual is 100% API-based and natively utilizes the same tools as the rest of the Sauce product line. When integrating Visual testing into your scripts, you can execute them just like any other scripts.

### **What languages/frameworks will be supported at launch?**

Sauce Visual will support the following languages/frameworks at launch: Selenium/Appium/Cypress, WebDriverIO, Java JUnit/TestNG, and JavaScript. You can find examples of some of these at [https://github.com/saucelabs/visual-examples](https://github.com/saucelabs/visual-examples).

### **What subsequent languages/frameworks will be supported?**

Support for additional languages/frameworks will be determined based on demand. Frameworks like Playwright, TestCafe, XCUIT, Espresso, etc., are currently under consideration. Contributions are encouraged. Check out the [examples project](https://github.com/saucelabs/visual-examples). If you create your own public library or binding, feel free to add another example to that project.

### **When will it support "my favorite framework"?**

The support for any framework depends on the client-side implementation using the underlying API. If you require an SDK, let us know at <beta-visual@saucelabs.com>.

### **Feedback**

Send feedback and feature requests to <beta-visual@saucelabs.com>.
