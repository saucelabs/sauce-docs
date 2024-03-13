---
sidebar_label: Continous Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Continous Integration

To integrate Sauce Visual into your continous integration workflow we recommend a two step approach using the sauce visual cli. Sauce visual cli will work with all major CI systems (Github, Gitlab, Jenkins, CircleCI).

<img src={useBaseUrl('img/sauce-visual/workflow-ci.png')} alt="Branch Review Pipeline" />

To implement a merge/pull request flow which blocks the given request from merging when visual diffs are dectected and not approved do the following:

1. trigger test execution in your ci the way you do it locally. Make sure to pass a custom build id and do not fail your test when visual differences where detected.
2. in a dedicated build step use the sauce visual cli to fetch the current state of the sauce visual build using the custom build id from step one. It will fail in case visual changes have been detected.

```
# make sure nodejs and npx is available

npx @saucelabs/visual build status -r us-west-1 --custom-id YOUR_CUSTOM_BUILD_ID
```

# Branching & Merging Workflow

The branching workflow starts by running a visual build on a new branch. Its purpose is to allow creating and editing baselines
without impacting other builds. It can also be used to maintain baselines for different environments. E.g. dev staging and production.

If you are familiar with git branching this workflow is similair but different to simplify the overall workflow.

<img src={useBaseUrl('img/sauce-visual/branching-merging.png')} alt="Baseline Branching and Merging" />

# Creating new branches

To create a new branch pass the `branch` config parameter to your build configuration. By default a new branch doesnm't have any baselines. Thus running a build on it would create diffs in state `new`. To change the default behaviour pass the config parameter `defaultBranch` to your build config. This will make sure that a Diff will always pick the latest baseline from either the specified `branch` or `deafultBranch`.

Please check the documentation for your intergration to configure branches properly.

# Merging a branch

To merge baselines into your main branch we recommend at this point to merge your code changes in your source code repository and run a new build on the resulting main branch. This will prevent any merge issues and guarantees you don't miss any changes.
