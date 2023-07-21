---
id: sauce-visual
title: Sauce Labs Visual Testing
sidebar_label: Getting Started
---

## Introduction

Sauce Visual helps you to compare uploaded images (called snapshots) against reference images (called baselines). It offers APIs to upload snapshots and compare those against baselines. The result of the comparison process includes the details of eventually detected differences. All snapshots in Sauce Visual need to be assigned to visual builds.

## Workflow

To be able to benefit from Sauce Visual you typically add it to your existing automated tests using provided libraries. We currently provide bindings for:
- JavaScript/TypeScript
- Java
You can use those standalone or with your Selenium/Appium-based tests. Support for other frameworks like Cypress, StoryBooks and Playwright is on the Roadmap.

The best way to integrate Sauce Visual into your existing tests (or write new ones) is to follow the examples listed [in this repo](../README.md).

After you have executed your tests you will find your Visual test results on the Builds History Page:

![Diff History Page}](./resources/BuildHistoryPage.png)

By selecting one of the builds you get to the Diff Review Page where you can Approve/Reject detected diffs.


![Diff Review Page}](./resources/DiffReviewPage.png)

## Visual Statuses

Visual uses different Statuses:

| Status   | Description |
| -------- | ----------- |
| In Progress | Those builds have been finished yet. As soon as this happened they can be reviewed |
| No Changes | The snapshots assigned to your build were equal to your baseline. This is considered as success as your assertions succeeded. |
| For Review | There where either no baselines available to compare against your upload snapshot or some of them where different then their baselines. You are supposed to review those detected diffs. As long as those changes aren't accepted they are considered a failure state. |
| Accepted   | All detected changes where accepted. This is considered a success state. |
| Rejected   | Some of your detected changes where rejected. This is considered an failure state. |

## API

Sauce Visual offers a public GraphQL API which can be used to understand the available feature set and to generate client bindings from them. The public API can be found here:

- [US West API](https://api.us-west-1.saucelabs.com/v1/visual/graphql)
- [US East API](https://api.us-east-4.saucelabs.com/v1/visual/graphql)
- [EU Central API](https://api.eu-central-1.saucelabs.com/v1/visual/graphql)
