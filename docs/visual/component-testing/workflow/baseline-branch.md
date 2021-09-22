---
id: baseline-branch
title: Baseline Branching and Merging
sidebar_label: Baseline Branching and Merging
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In this section, you'll learn how to pull baseline when branching and auto-accept when merging.

<img src={useBaseUrl('img/visual/component-branching-merging.png')} alt="Component Branching and Auto-Merging" />

When working with features branches, Screener can save you time and optimize your workflow by automating the following:

* **Automatically Accept updates when merging to or from the base branch**: When merging an accepted base branch into a feature branch, Screener auto-accepts UI states that match the latest base branch test. And when merging into the base branch, Screener auto-accepts UI states that match the latest accepted feature branch test.
* **Automatically pull initial baseline from the base branch**: This is useful for having a set of UI states to initially compare a new branch against. For example, if you create a new feature branch based off of the main branch, and you have a set of UI states on the main branch, you can then compare the new branch's visual changes to the main branch's UI states.

What this means:

* **Accept Once**: no need to accept again when merging accepted updates from your base branch into a feature branch.
* **Faster Workflow**: no need to re-review UI states or re-run builds to pass again.

Follow these setup steps to enable in your project:

1. [Integrate Screener into your CI process](/visual/component-testing/integrations/continuous-integration) so that visual tests are automatically run when branching or merging.
2. Set the `baseBranch` option in your `screener.config.js` file to the name of your base branch:
  ```java
  // screener.config.js
  module.exports = {
    ...

    baseBranch: 'main'
  }
  ```
