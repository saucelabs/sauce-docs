---
sidebar_label: Diff Generation
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Diff Generation Workflow

This workflow is responsible for generating snapshots (screenshots) of the website or app under test.
Users new to visual testing often have an existing test suite in WebdriverIO, Cypress or a similar framework.
With Sauce Visual testing existing test suites can be enhanced with a few extra "take a snapshot" statements and that is all it takes to implement this workflow.


## E2E Testing

Check out how to integrate Sauce Visual into an existing test suite:
- [Cypress Integration](../integrations/cypress.md)
- [WebdriverIO Integration](../integrations/webdriverio.md)
- [Java Integration](../integrations/java.md)

Alternatively, [check out our examples](../../visual-testing.md#examples).


## Component Testing

Sauce Visual can be used with a component testing workflow:
- [Storybook  Integration](../integrations/storybook.md)

Alternatively, [check out our examples](../../visual-testing.md#examples).


## Baseline Matching

Every integration generates snapshots and compares them against a baseline snapshot to detect differences.
The following snapshot metadata keys are used to determine the appropriate baseline:

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


