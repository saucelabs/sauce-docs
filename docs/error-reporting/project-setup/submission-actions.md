---
id: submission-actions
title: Submission Actions
sidebar_label: Submission Actions
description: Submission Actions allow customers to configure Backtrace to perform actions in response to incoming traffic.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Submission Actions allow you to configure Backtrace to perform actions in response to incoming traffic. Actions can be performed based on a flexible rule system that can match strings or regex to modules, callstacks, or attributes and decide how to proceed. Highlights of the actions provided include: dropping traffic, automated assignment, setting classifiers and more.

## Supported Actions

Submission actions can be configured under **Project Settings** > **Submission actions**:

<img src={useBaseUrl('img/error-reporting/project-settings/submission-actions.webp')} alt="Shows the available submission actions in the Project Settings." />

The following actions are supported:

### Reject Submission

This action will reject and never store the error. This is useful if you want to throw away crashes for specific noisy users, old versions, unsupported platforms, hacked games, etc.

### Drop Object and Index Only

This action will process (index) the minidump and any other error object (including file attachments) and then delete (drop) it so it is not counted towards storage quota. This is useful if you don't need to retain the object for storage and external analysis.

<img src={useBaseUrl('img/error-reporting/project-settings/submission-actions-drop-object-and-index-only.png')} alt="Shows an example configuration for the Drop objects and index only submission action." />

### Probability Sampling

Both **Reject submission** and **Drop objects and index only** allow you to create a sampling rule based on a percentage. In the example below, the rule would filter out 20% of error reports where the error message equals **Test Error**.

<img src={useBaseUrl('img/error-reporting/project-settings/sampling-example.png')} alt="Shows an example configuration of a probability sampling rule for Reject submission." />

### Set Values and Auto Assignment

This action can be used for automated assignment or to set specific attribute values.

<img src={useBaseUrl('img/error-reporting/project-settings/submission-action-set-value.webp')} width= "500" alt="Shows an example configuration for the Set values submission action." />

### Union Values

This action is like **Set value** , but for label types, like Tags or Classifiers, where instead of setting a value, the system is adding a value to the field, so it can contain multiple values.

<img src={useBaseUrl('img/error-reporting/project-settings/submission-action-union-values.webp')} width= "500" alt="Shows an example configuration for the Union values submission action." />
