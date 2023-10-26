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

TODO

[Follow me to learn more](./visual-testing/workflows/review.md)


## Concepts

TODO: explain concepts before workflows?

Sauce Visual Testing comes with its set of concepts that will be defined here.

A **snapshot** is an image representing the element that will be compared by Visual Testing. For example: the screenshot of your website or mobile application.

A **build** is a grouping of multiple snapshots in a same container. \
A **build** has a status that represents its current state:

| Status | Description |
| --- |--- |
| `Empty` | There is no snapshot in this build |
| `Equal` | No difference has been detected between snapshots and the matching baselines |
| `Unapproved` | Changes have been detected and and action is needed |
| `Approved` | Changes have been detected and they have been approved |
| `Rejected` | Changes have been detected and they have been rejected |
| `Errored` | An error has occured |

A **baseline** is the reference **snapshot** used to compare a snapshot.

A **diff** represents the differences that have been detected between a **snapshot** and its matching **baseline**. \
A **diff** has a status that reprensent its current state:
| Status | Description |
| --- | --- |
| `Queued` | The processing is queued, and waiting for processing |
| `Equal` | No difference has been detected between this snapshot and the matching baseline |
| `Unapproved` | Changes have been detected and an action is needed  |
| `Approved` | Changes have been detected and they have been approved |
| `Rejected` | Changes have been detected and they have been rejected |

### Baseline Matching



## Examples

- [Cypress](https://github.com/saucelabs/visual-examples/tree/main/cypress#readme)
- [Java JUnit](https://github.com/saucelabs/visual-examples/tree/main/wd-java#readme)
- [Java TestNG](https://github.com/saucelabs/visual-examples/tree/main/wd-java-testng#readme)
- [Storybook Component Testing](https://github.com/saucelabs/visual-examples/tree/main/storybook#readme)
- [WebdriverIO](https://github.com/saucelabs/visual-examples/tree/main/wdio#readme)



