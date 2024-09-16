---
sidebar_label: Test Execution
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IntegrationE2ELinks from '../_partials/_integration-e2e-links.md';

# Test Execution Workflow

This workflow is responsible for generating snapshots (screenshots) of the website or app under test.
Users new to visual testing often have an existing test suite in WebdriverIO, Cypress or a similar framework.
With Sauce Visual testing existing test suites can be enhanced with a few extra "take a snapshot" statements and that is all it takes to implement this workflow. Test Execution can be executed for both E2E and Component Testing.

## Integrations

Sauce Visual provides integrations with different kind of frameworks:

- **E2E Testing** allows to navigate a website and capture snapshots any time this is needed.
- **Component Testing** allows to test extensively all your components.

<div className="box-wrapper" markdown="1">
<div className="box box1 card">
  <div className="container">
  <h2>E2E Testing</h2>
    <IntegrationE2ELinks />
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

## First Test Execution

Upon executing your tests for the first time, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent tests and matches based on the metadata as described in the [Baseline Matching](../../visual-testing.md#baseline-matching).

The newly created baseline needs to be reviewed and approved by a user. This can be done in the [Sauce Visual Builds](https://app.saucelabs.com/visual/builds) page. Once approved, see [Reviewing and Accepting baselines](./review.md#reviewing-and-accepting-baselines), the baseline is "locked" and will be used for all subsequent tests.

## Subsequent Test Executions

As new tests are run, they are compared to the original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

[Follow me to learn more](./review.md)

:::note
The baseline is established during the initial run, and any subsequent visual differences detected will be marked for review.
:::
