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

TODO:
  - baselines, snapshots, build, diff
  - build-, diff status
  - baseline matching

## Examples

- [Cypress](https://github.com/saucelabs/visual-examples/tree/main/cypress#readme)
- [Java JUnit](https://github.com/saucelabs/visual-examples/tree/main/wd-java#readme)
- [Java TestNG](https://github.com/saucelabs/visual-examples/tree/main/wd-java-testng#readme)
- [Storybook Component Testing](https://github.com/saucelabs/visual-examples/tree/main/storybook#readme)
- [WebdriverIO](https://github.com/saucelabs/visual-examples/tree/main/wdio#readme)



