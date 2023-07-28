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

Ensure to use the appropriate API URL based on your Data Center location.

:::

| Data Center | API URL                                                  |
| ----------- | -------------------------------------------------------- |
| US West     | https://api.us-west-1.saucelabs.com/v1/visual/graphql    |
| US East     | https://api.us-east-4.saucelabs.com/v1/visual/graphql    |
| EU Central  | https://api.eu-central-1.saucelabs.com/v1/visual/graphql |
