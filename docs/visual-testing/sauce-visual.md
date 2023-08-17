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

After you have executed your tests, you will find your Visual test results on the Builds History Page:

<img src={useBaseUrl('/img/sauce-visual/BuildHistoryPage.png')} alt="Diff History Page"/>

Selecting one of the builds allows you to get to the Diff Review Page, where you can Approve/Reject detected diffs.

<img src={useBaseUrl('/img/sauce-visual/DiffReviewPage.png')} alt="Diff Review Page"/>

## Visual Statuses

Visual uses different statuses:

| Status      | Description                                                                                                                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In Progress | These builds have been finished yet. As soon as this happens, they can be reviewed.                                                                                                                                                                             |
| No Changes  | The snapshots assigned to your build matched your baseline. It is considered a success because your assertions were successful.                                                                                                                                 |
| For Review  | There were either no baselines available to compare against your uploaded snapshot or some were different from their baselines. You are supposed to review those detected diffs. As long as those changes aren't accepted, they are considered a failure state. |
| Accepted    | All detected changes were accepted. This is considered a success state.                                                                                                                                                                                         |
| Rejected    | Some of your detected changes were rejected. This is considered a failure state.                                                                                                                                                                                |

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

### **Will I be able to use existing Sauce team management features for access to Sauce Visual?**

Yes, the Team management will eventually be supported by the new Sauce Visual.

### **Can I integrate this into CI/CD testing?**

Yes, Sauce Visual is 100% API-based and natively utilizes the same tools as the rest of the Sauce product line. When integrating Visual testing into your scripts, you can execute them just like any other scripts.

### **Can I export diff metadata into an external test management/reporting tool?**

Currently, diff information is only available via the UI. Support for exporting diff metadata into an external test management/reporting tool may be included in a later revision.

### **What languages/frameworks will be supported at launch?**

Sauce Visual will support the following languages/frameworks at launch: Selenium/Appium/Cypress, WebDriverIO, Java JUnit/TestNG, and JavaScript. You can find examples of some of these at [https://github.com/saucelabs/visual-examples](https://github.com/saucelabs/visual-examples).

### **What subsequent languages/frameworks will be supported?**

Support for additional languages/frameworks will be determined based on demand. Frameworks like Playwright, TestCafe, XCUIT, Espresso, etc., are currently under consideration. Contributions are encouraged. Check out the [examples project](https://github.com/saucelabs/visual-examples). If you create your own public library or binding, feel free to add another example to that project.

### **When will it support "my favorite framework"?**

The support for any framework depends on the client-side implementation using the underlying API. If you require an SDK, let us know.
