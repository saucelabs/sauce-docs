---
id: baseline-branch
title: Baseline Branching and Merging
sidebar_label: Baseline Branching and Merging
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section, you'll learn how to pull baseline when branching and auto-accept when merging.

<img src={useBaseUrl('img/visual/e2e-branching-merging.png')} alt="E2E Baseline Branching and Merging" />

When working with feature branches, Screener can save you time and optimize your workflow by automating the following:

1. **Automatically Accept updates when merging to or from the base branch**: When merging an accepted base branch into a feature branch, Screener auto-accepts UI states that match the latest base branch test. And when merging into the base branch, Screener auto-accepts UI states that match the latest accepted feature branch test.
2. **Automatically pull initial baseline from the base branch**: This is useful for having a set of UI states to initially compare a new branch against. For example, if you create a new feature branch based off of the main branch, and you have a set of UI states on the main branch, you can then compare the new branch's visual changes to the main branch's UI states.

What this means:

* **Accept Once**: no need to accept again when merging accepted updates from your base branch into a feature branch.
* **Faster Workflow**: no need to re-review UI states or re-run builds to pass again.

Follow the steps below to enable in your Visual E2E project:


## Setup Steps

1. [Integrate your Visual E2E tests into your CI process](/visual/e2e-testing/integrations/continuous-integration) so that visual tests are automatically run when branching or merging.

2. Set the `branch` and `baseBranch` options in your [`sauce:visual` WebDriver capabilities](/visual/e2e-testing/commands-options/#saucevisual-capability-options) to set the name of your current branch and the name of your base branch respectively.

Below are examples of branch environment variables for various CI tools:

<Tabs
  defaultValue="Jenkins"
  values={[
    {label: 'Jenkins', value: 'Jenkins'},
    {label: 'CircleCI', value: 'CircleCI'},
    {label: 'TravisCI', value: 'TravisCI'},
    {label: 'GitLab', value: 'GitLab'},
  ]}>

<TabItem value="Jenkins">

```js
capabilities: {
  ...
  'sauce:visual': {
    branch: process.env.GIT_BRANCH,
    baseBranch: 'main'
  }
}
```

</TabItem>
<TabItem value="CircleCI">

```js
capabilities: {
  ...
  'sauce:visual': {
    branch: process.env.CIRCLE_BRANCH,
    baseBranch: 'main'
  }
}
```

</TabItem>
<TabItem value="TravisCI">

```js
capabilities: {
  ...
  'sauce:visual': {
    branch: process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH,
    baseBranch: 'main'
  }
}
```

</TabItem>
<TabItem value="GitLab">

```js
capabilities: {
  ...
  'sauce:visual': {
    branch: process.env.CI_COMMIT_REF_NAME,
    baseBranch: 'main'
  }
}
```

</TabItem>
</Tabs>



<Tabs
  defaultValue="Codeship"
  values={[
    {label: 'Codeship', value: 'Codeship'},
    {label: 'Buildkite', value: 'Buildkite'},
    {label: 'Drone', value: 'Drone'},
  ]}>

<TabItem value="Codeship">

```js
capabilities: {
  ...
  'sauce:visual': {
    branch: process.env.CI_BRANCH,
    baseBranch: 'main'
  }
}
```

</TabItem>
<TabItem value="Buildkite">

```js
capabilities: {
  ...
  'sauce:visual': {
    branch: process.env.BUILDKITE_BRANCH,
    baseBranch: 'main'
  }
}
```

</TabItem>
<TabItem value="Drone">

```js
capabilities: {
  ...
  'sauce:visual': {
    branch: process.env.DRONE_BRANCH,
    baseBranch: 'main'
  }
}
```

</TabItem>
</Tabs>

## Additional Resources

* [Visual E2E Testing Commands and `sauce:visual` Options](/visual/e2e-testing/commands-options)
