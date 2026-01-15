---
sidebar_label: Test Execution
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IntegrationE2ELinks from '../_partials/_integration-e2e-links.md';

# Test Execution Workflow

The Test Execution Workflow is the process responsible for generating snapshots (screenshots) of your website or application during automated tests. This is a core component of visual testing and allows teams to catch unintended UI changes before they reach production.
If you're already using an existing test suite with WebdriverIO, Cypress, or another supported testing framework, integrating Sauce Visual is simple. You only need to add a few take a snapshot statements to your current tests—no need to rewrite your test logic. This workflow supports both End-to-End (E2E) and Component Testing out of the box.

## Integrations

Sauce Visual seamlessly integrates with various testing frameworks to support different testing strategies:

- **E2E Testing** - Navigate through your website as a user would and capture snapshots at key steps to validate the UI visually.
- **Component Testing** - Thoroughly test UI components in isolation to ensure they render consistently under all expected states.

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

When your visual tests are run for the first time, Sauce Visual automatically creates a visual baseline. This baseline acts as the reference point for all future visual comparisons. The baseline is generated based on snapshot metadata as detailed in the [Baseline Matching](../../visual-testing.md#baseline-matching).

After the initial test run:

* The baseline is available on the [Sauce Visual Builds](https://app.saucelabs.com/visual/builds) page.
* A user must review and approve the baseline. For more information see [Reviewing and Accepting baselines](./review.md#reviewing-and-accepting-baselines)
* Once approved, the baseline is locked and used as the standard for future test runs.

:::note
The baseline is created during the first execution and must be manually approved to become the definitive visual standard.
:::


## Subsequent Test Executions

Every time you rerun your tests:
* New snapshots are automatically compared against the locked baseline.
* Any visual differences are flagged and highlighted in the Sauce Visual interface.
* These comparisons help identify unintended UI regressions early in the development lifecycle.

All visual builds—including the initial baseline and all subsequent test runs—can be tracked, reviewed, and managed via the [Sauce Visual Builds](https://app.saucelabs.com/visual/builds) dashboard.

[Follow me to learn more](./review.md)

:::note
The baseline is established during the initial run, and any subsequent visual differences detected will be marked for review.
:::
