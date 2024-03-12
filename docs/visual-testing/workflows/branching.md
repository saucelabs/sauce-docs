---
sidebar_label: Branching
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Branching & Merging Workflow

The branching workflow starts by running a visual build on a new branch. Its purpose is to allow creating and editing baselines
without impacting other builds. It can also be used to maintain baselines for different environments. E.g. dev staging and production.

If you are familiar with git branching this workflow is similair but different to simplify the overall workflow.

# Creating new branches

To create a new branch pass the `branch` config parameter to your build configuration. By default a new branch doesnm't have any baselines. Thus running a build on it would create diffs in state `new`. To change the default behaviour pass the config parameter `defaultBranch` to your build config. This will make sure that a Diff will always pick the latest baseline from either the specified `branch` or `deafultBranch`.

Please check the documentation for your intergration to configure branches properly.

# Merging a branch

To merge baselines into your main branch we recommend at this point to merge your code changes in your source code repository and run a new build on the resulting main brach. This will prevent any merge issues and guarantees you don't miss any changes.