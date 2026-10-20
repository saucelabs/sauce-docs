---
id: submission-actions
title: Configure Actions for Incoming Crashes
sidebar_label: Configure Actions for Incoming Crashes
description: Use submission actions to have Error Reporting reject, sample, assign, or tag incoming errors based on rules you define.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Submission actions let you configure Error Reporting to act on incoming errors as they are submitted. Each action follows a rule that matches strings or regular expressions against modules, callstacks, or attributes, and then decides how to handle the error. For example, you can drop traffic you don't need, assign errors automatically, or set classifiers.

Because submission actions run when an error arrives, they help you control storage and noise before the error is stored, and save manual triage work afterward.

## Open the Submission Actions Page

You configure submission actions for each project from the **Submission actions** page in the project settings.

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** Under **Error processing** in the left menu, click **Submission actions**.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-2.webp')} alt="Submission actions page in the Project settings, with the available actions" />

## Supported Actions

Choose the action that matches what you want to happen to the errors that match a rule.

| Action | What it does | Use it to |
| --- | --- | --- |
| [Reject submission](#reject-submission) | Rejects the error, so it is never stored. | Throw away errors you don't need. |
| [Drop object and index only](#drop-object-and-index-only) | Indexes the error, and then deletes the error object so it doesn't count toward your storage quota. | Keep error data for analysis without storing the objects. |
| [Set values](#set-values-and-auto-assignment) | Sets specific attribute values on the error. | Assign errors automatically, or set attribute values. |
| [Union values](#union-values) | Adds a value to a label attribute, such as tags or classifiers. | Add tags or classifiers to errors. |

You can also apply **Reject submission** and **Drop object and index only** to a percentage of the matching errors. See [Probability Sampling](#probability-sampling).

## Reject Submission

The **Reject submission** action rejects the error and never stores it.

Use it to throw away errors you don't need, for example, errors from specific noisy users, old versions, unsupported platforms, or hacked games.

## Drop Object and Index Only

The **Drop object and index only** action processes (indexes) the minidump and any other error object, including file attachments, and then deletes (drops) the object so it is not counted toward your storage quota.

Use it when you need the indexed data for querying and analysis, but don't need to keep the error objects themselves for storage or external analysis.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-3.png')} alt="Example configuration for the Drop object and index only submission action" />

## Probability Sampling

**Reject submission** and **Drop object and index only** both let you create a sampling rule based on a percentage, so the action applies to only part of the matching errors.

Use sampling when you want to reduce the volume of a frequent error without losing it completely. In the following example, the rule rejects 20% of the error reports where the error message equals **Test Error**.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-4.png')} alt="Example configuration of a probability sampling rule for Reject submission" />

## Set Values and Auto Assignment

The **Set values** action sets specific attribute values on the errors that match a rule.

Use it to assign matching errors to a team member automatically, or to set an attribute value for every matching error.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-5.webp')} width="500" alt="Example configuration for the Set values submission action" />

## Union Values

The **Union values** action works like **Set values**, but for label attributes, such as tags or classifiers. Instead of replacing the value, it adds a value to the attribute, so the attribute can hold multiple values.

Use it to add tags or classifiers to matching errors without removing the values they already have.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-6.webp')} width="500" alt="Example configuration for the Union values submission action" />
