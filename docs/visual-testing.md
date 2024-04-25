---
title: Sauce Visual Testing
sidebar_label: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note Important
Access to this feature is currently limited to Enterprise customers as part of our commitment to providing tailored solutions. We are excited to announce that self-service access is under development and will be released shortly. Stay tuned!
:::

Get clear and instant visibility into the impact of code changes on your UI across browsers, devices, and operating systems with our automated visual testing solution, which generates side-by-side comparisons of your UI versions with DOM diffs inspection.

Know exactly where and what has changed so that you can deliver a consistent and intuitive user experience.

Sauce Visual Testing stands for:

<div className="box-wrapper" markdown="1">
<div className="box box1 card">
  <div className="container">
  <h2>Faster Test Execution</h2>
  <ul>
      <li>Purpose-built within the world’s best test infrastructure</li>
      <li>Fewer back-and-forth commands between client and server</li>
      <li>Based on efficient OSS framework</li>
      <li>No need to down/upload images</li>
  </ul>
  </div>
</div>
<div className="box box2 card">
  <div className="container">
  <h2>Less Complexity</h2>
  <ul>
      <li>Less code</li>
      <li>Less maintenance</li>
      <li>Less flakiness</li>
  </ul>
  </div>
</div>
</div>

## What You'll Need

- A [Sauce Labs Enterprise account](https://saucelabs.com/pricing) with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support.
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).

## Workflows

Sauce Visual testing consists of two main workflows: Test execution and review.
Both workflows need to implemented, but they may performed by different people or teams.
Read below to learn more about the workflows.

### Test Execution

This workflow is responsible for generating snapshots (screenshots) of the website or app under test.
Users new to visual testing often have an existing test suite in WebdriverIO, Cypress or a similar framework.
With Sauce Visual testing existing test suites can be enhanced with a few extra "take a snapshot" statements and that is all it takes to implement this workflow.

[Follow me to learn more](./visual-testing/workflows/test-execution.md)

### Review

This workflow is responsible for approving or rejecting detected changes between a snapshot and a baseline.
Users will be available to review changes and make the [baseline](#baseline) evolve for accepted changes.

[Follow me to learn more](./visual-testing/workflows/review.md)

## Concepts

Sauce Visual Testing comes with its set of concepts that will be defined here.

### Definitions

#### Snapshot

A **snapshot** is an image that will be compared by Visual Testing. For example: the screenshot of your website or mobile application.

#### Build

A **build** groups multiple snapshots. E.g. to be able to view all snapshots taken during the execution of your test suite in CI or locally.

##### Build Status

A **build** has a status that represents its current state:

| Status         | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| `Accepted`     | Changes have been detected and they have been accepted                       |
| `No changes`   | No difference has been detected between snapshots and the matching baselines |
| `Running`      | Build is still running                                                       |
| `Queued`       | Snapshots are waiting to be compared against baselines                       |
| `For review`   | Changes have been detected and and action is needed                          |
| `Errored`      | An error has occurred                                                        |
| `Rejected`     | Changes have been detected and they have been rejected                       |
| `No Snapshots` | There is no snapshot in this build                                           |

#### Baseline

A **baseline** is what a **snapshot** is compared to.

#### Diff

A **diff** represents the differences that have been detected between a **snapshot** and its matching **baseline**.

##### Diff Status

A **diff** has a status that represents its current state:

| Status       | Description                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `No Changes` | No difference has been detected between this snapshot and the matching baseline                                            |
| `For Review` | Changes have been detected and an action is needed <br />(meaning snapshots without baselines or with a visual difference) |
| `Accepted`   | Changes have been detected and they have been accepted                                                                     |
| `Rejected`   | Changes have been detected and they have been rejected                                                                     |

### Baseline Matching

Every integration generates snapshots and compares them against a baseline snapshot to detect differences.
The following snapshot metadata keys are used to determine the appropriate baseline:

| Property                 | Type     | Description                                                                                                                                                               |
| ------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                   | `string` | The name of the snapshot which will be set when the `sauceVisualCheck()` is called. See each language binding.                                                            |
| `testName`               | `string` | The name of the test where the snapshot has been taken (only with Cypress, WebdriverIO, and Storybook BETA). This will automatically determined by the language binding.  |
| `suiteName`              | `string` | The name of the suite where the snapshot has been taken (only with Cypress, WebdriverIO, and Storybook BETA). This will automatically determined by the language binding. |
| `browser`                | `string` | The browser used to take the snapshot. This will automatically be determined by Sauce Visual.                                                                             |
| `operatingSystem`        | `string` | The operating system used to take the snapshot. This will automatically be determined by Sauce Visual.                                                                    |
| `operatingSystemVersion` | `string` | The operating system version used to take the snapshot. This will automatically be determined by Sauce Visual.                                                            |
| `viewportWidth`          | `string` | The viewport width used to take the snapshot. This will automatically be determined by Sauce Visual.                                                                      |
| `viewportHeight`         | `string` | The viewport height used to take the snapshot. This will automatically be determined by Sauce Visual.                                                                     |
| `project`                | `string` | The project name. This can be set during service initiation, for more information see the language bindings.                                                              |
| `branch`                 | `string` | The branch name. This can be set during service initiation, for more information see the language bindings.                                                               |
| `device`                 | `string` | The device name. This will automatically be determine by Sauce Visual.                                                                                                    |

If multiple baselines match, the most recent one is selected for diff computation.

:::note
Note that not all properties are exposed on all testing frameworks.
In these cases, a default value (0, null or empty string) is used.
:::

The matching process happens as part of the snapshot creation (`createSnapshot` in the API).
This means, that a baseline can only be considered for a diff if it existed before the `createSnapshot` call.

## Integrations

Sauce Visual provides integrations with different kind of frameworks:

- **E2E Testing** allows to navigate a website and capture snapshots any time this is needed.
- **Component Testing** allows to test extensively all your components.

<div className="box-wrapper" markdown="1">
<div className="box box1 card">
  <div className="container">
  <h2>E2E Testing</h2>
  <ul>
      <li><a href="/visual-testing/integrations/cypress/">Cypress Integration</a></li>
      <li><a href="/visual-testing/integrations/csharp/">C#/.Net Integration</a></li>
      <li><a href="/visual-testing/integrations/java/">Java Integration</a></li>
      <li><a href="/visual-testing/integrations/nightwatch/">Nightwatch Integration</a></li>
      <li><a href="/visual-testing/integrations/webdriverio/">WebdriverIO Integration</a></li>
      <li><a href="/visual-testing/integrations/python/">Python Integration</a></li>
  </ul>
  </div>
</div>
<div className="box box2 card">
  <div className="container">
  <h2>Component Testing</h2>
  <ul>
      <li><a href="/visual-testing/integrations/storybook/">Storybook Integration</a></li>
  </ul>
  </div>
</div>
</div>
