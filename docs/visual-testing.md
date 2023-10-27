---
title: Sauce Labs Visual Testing
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Get clear and instant visibility into the impact of code changes on your UI across browsers, devices, and operating systems with our automated visual testing solution, which generates side-by-side comparisons of your UI versions.

Know exactly where and what has changed so that you can deliver a consistent and intuitive user experience.

## Workflows

Sauce Visual testing consists of two main workflows: Test execution and review.
Both workflows need to implemented, but they may performed by different people or teams.
Read below to learn more about the workflows.

### Test Execution

This workflow is responsible for generating snapshots (screenshots) of the website or app under test.
Users new to visual testing often have an existing test suite in WebdriverIO, Cypress or a similar framework.
With Sauce Visual testing existing test suites can be enhanced with a few extra "take a snapshot" statements and that is all it takes to implement this workflow.

[Follow me to learn more](./visual-testing/workflows/diff-generation.md)

### Review

This workflow is responsible for approving or rejecting detected changes between a snapshot and a baseline.
Users will be available to review changes and make the baseline evolve for approved changes.

[Follow me to learn more](./visual-testing/workflows/review.md)


## Concepts

Sauce Visual Testing comes with its set of concepts that will be defined here.

### Definitions

A **snapshot** is an image that will be compared by Visual Testing. For example: the screenshot of your website or mobile application.

A **build** groups multiple snapshots. E.g. to be able to view all snapshots taken during the execution of your test suite in CI or locally.<br />
A **build** has a status that represents its current state:

| Status | Description |
| --- |--- |
| `Empty` | There is no snapshot in this build |
| `Equal` | No difference has been detected between snapshots and the matching baselines |
| `Unapproved` | Changes have been detected and and action is needed |
| `Approved` | Changes have been detected and they have been approved |
| `Rejected` | Changes have been detected and they have been rejected |
| `Errored` | An error has occured |

A **baseline** is what a **snapshot** is compared to.

A **diff** represents the differences that have been detected between a **snapshot** and its matching **baseline**.<br />
A **diff** has a status that reprensent its current state:

| Status | Description |
| --- | --- |
| `Queued` | The processing is queued, and waiting for processing |
| `Equal` | No difference has been detected between this snapshot and the matching baseline |
| `Unapproved` | Changes have been detected and an action is needed  |
| `Approved` | Changes have been detected and they have been approved |
| `Rejected` | Changes have been detected and they have been rejected |

### Baseline Matching

When a new snapshot is uploaded, Visual Testing will select the matching baseline and will looks for changes between the snapshot and the baseline.

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

## Integrations

Sauce Labs Visual provides integrations with different frameworks.

- [Cypress](./integrations/cypress/)
- [Java](./integrations/java/)
- [Storybook](./integrations/storybook/)
- [WebdriverIO](./integrations/webdriverio/)



