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

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-2.png')} alt="Submission actions option under Error processing in the Project settings menu" />

The **Submission actions** page opens, with a section for each action and the rules already created for it.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-3.png')} alt="Submission actions page with the Reject submission, Drop objects and index only, Set values, and Union values sections" />

## Supported Actions

Choose the action that matches what you want to happen to the errors that match a rule.

| Sr. No. | Action | What it does | Use it to |
| --- | --- | --- | --- |
| 1 | [Reject submission](#reject-submission) | Rejects the error, so it is never stored. | Throw away errors you don't need. |
| 2 | [Drop objects and index only](#drop-objects-and-index-only) | Indexes the error, and then deletes the error object so it doesn't count toward your storage quota. | Keep error data for analysis without storing the objects. |
| 3 | [Set values](#set-values-and-auto-assignment) | Sets specific attribute values on the error. | Assign errors automatically, or set attribute values. |
| 4 | [Union values](#union-values) | Adds a value to a label attribute, such as tags or classifiers. | Add tags or classifiers to errors. |

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-4.png')} alt="Numbered sections for each submission action on the Submission actions page" />

You can also apply **Reject submission** and **Drop objects and index only** to a percentage of the matching errors. See [Probability Sampling](#probability-sampling).

### Reject Submission

The **Reject submission** action rejects the error and never stores it.

Use it to throw away errors you don't need, for example, errors from specific noisy users, old versions, unsupported platforms, or hacked games. If an error matches the conditions, no other actions are performed on it.

**Step 1:** In the **Reject submission** section, click **Create**.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-5.png')} alt="Create button in the Reject submission section of the Submission actions page" />

**Step 2:** In the **Reject submission** dialog, fill in the following fields:

| Sr. No. | Field | Description |
| --- | --- | --- |
| 1 | **Source** | What to check in the incoming error: **Attribute**, **Module**, or **Callstack**. If you select **Attribute**, also enter the name of the attribute, such as `error.type`. |
| 2 | **Condition** | How to match the source: **Regular expression** or **String comparison**. For **String comparison**, also select the operator, such as `==` or `>`. |
| 3 | Expression or value | The regular expression or string to match, such as `.*payment.*`. |
| 4 | **Inverse** | Turn on to apply the action to errors that don't match the condition. |
| 5 | **Probability of executing this rule** | The percentage of matching errors to apply the action to. The default is 100%. See [Probability Sampling](#probability-sampling). |

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-6.png')} alt="Reject submission dialog with numbered Source, Condition, expression, Inverse, and Probability fields" />

**Step 3:** Click **Create**.

The rule appears in the **Reject submission** section, with its source, condition, and probability. To delete the rule, click the delete icon next to it.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-7.png')} alt="Created Reject submission rule with its source, condition, and probability" />

### Drop Objects and Index Only

The **Drop objects and index only** action processes (indexes) the minidump and any other error object, including file attachments, and then deletes (drops) the object so it is not counted toward your storage quota.

Use it when you need the indexed data for querying and analysis, but don't need to keep the error objects themselves for storage or external analysis. Other actions can still be applied to the error, but its objects are not stored.

**Step 1:** In the **Drop objects and index only** section, click **Create**.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-8.png')} alt="Create button in the Drop objects and index only section of the Submission actions page" />

**Step 2:** In the **Drop objects and index only** dialog, fill in the following fields:

| Sr. No. | Field | Description |
| --- | --- | --- |
| 1 | **Source** | What to check in the incoming error: **Attribute**, **Module**, or **Callstack**. If you select **Attribute**, also enter the name of the attribute. |
| 2 | **Condition** | How to match the source: **Regular expression** or **String comparison**. For **String comparison**, also select the operator, such as `==` or `>`. |
| 3 | Expression or value | The regular expression or string to match, such as `.*payment.*`. |
| 4 | **Inverse** | Turn on to apply the action to errors that don't match the condition. |
| 5 | **Probability of executing this rule** | The percentage of matching errors to apply the action to. The default is 100%. See [Probability Sampling](#probability-sampling). |

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-9.png')} alt="Drop objects and index only dialog with numbered Source, Condition, expression, Inverse, and Probability fields" />

**Step 3:** Click **Create**.

The rule appears in the **Drop objects and index only** section, with its source, condition, and probability. To delete the rule, click the delete icon next to it.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-10.png')} alt="Created Drop objects and index only rule with its source, condition, and probability" />

### Set Values and Auto Assignment

The **Set values** action sets specific attribute values on the errors that match a rule. Use it to assign matching errors to a team member automatically, or to set an attribute value for every matching error.

Set values actions are performed in order. When multiple conditions match, the last action is applied. Setting an assignee applies only when the fingerprint is created.

**Step 1:** In the **Set values** section, click **Create**.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-11.png')} alt="Create button in the Set values section of the Submission actions page" />

**Step 2:** In the **Set value** dialog, fill in the following fields:

| Sr. No. | Field | Description |
| --- | --- | --- |
| 1 | **Source** | What to check in the incoming error: **Attribute**, **Module**, or **Callstack**. If you select **Attribute**, also enter the name of the attribute. |
| 2 | **Condition** | How to match the source: **Regular expression** or **String comparison**. Then enter the expression or value to match. For **String comparison**, also select the operator. |
| 3 | **Attribute** | The attribute to set on the matching errors, such as **Assignee**. |
| 4 | **Value** | The value to set. If you select **Assignee** as the attribute, this field changes to **Set assignee**, where you select the team member. |

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-12.png')} width="500" alt="Set value dialog with numbered Source, Condition, Attribute, and Value fields" />

The following example sets the **Assignee** attribute for errors that match a string comparison on the `error.type` attribute:

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-13.png')} width="500" alt="Set value dialog that sets the Assignee attribute for errors that match a string comparison on error.type" />

**Step 3:** Click **Create**.

The rule appears in the **Set values** section, with its order, source, condition, attribute, and value. Because the actions run in order, use the up and down arrows to change the order of the rules. To delete a rule, click the delete icon next to it.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-14.png')} alt="Created Set values rule with its order, source, condition, attribute, and value" />

### Union Values

The **Union values** action works like **Set values**, but for label attributes, such as tags or classifiers. Instead of replacing the value, it adds a value to the attribute, so the attribute can hold multiple values.

Use it to add tags or classifiers to matching errors without removing the values they already have. When multiple conditions match, all the values are applied.

**Step 1:** In the **Union values** section, click **Create**.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-15.png')} alt="Create button in the Union values section of the Submission actions page" />

**Step 2:** In the **Union value** dialog, fill in the following fields:

| Sr. No. | Field | Description |
| --- | --- | --- |
| 1 | **Source** | What to check in the incoming error: **Attribute**, **Module**, or **Callstack**. If you select **Attribute**, also enter the name of the attribute. |
| 2 | **Condition** | How to match the source: **Regular expression** or **String comparison**. Then enter the expression or value to match. For **String comparison**, also select the operator. |
| 3 | **Attribute** | The label attribute to add values to, such as `fingerprint;issues;tags`. |
| 4 | Value | The value to add to the attribute. To add more than one value, click **Add another value**. |

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-16.png')} width="500" alt="Union value dialog with numbered Source, Condition, Attribute, and value fields" />

The following example adds a value to the `fingerprint;issues;tags` attribute for errors that match a string comparison on the `error.type` attribute:

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-17.png')} width="500" alt="Union value dialog that adds a value to fingerprint;issues;tags for errors that match a string comparison on error.type" />

**Step 3:** Click **Create**.

The rule appears in the **Union values** section, with its source, condition, attribute, and value. To delete the rule, click the delete icon next to it.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-18.png')} alt="Created Union values rule with its source, condition, attribute, and value" />

## Probability Sampling

**Reject submission** and **Drop objects and index only** both let you create a sampling rule based on a percentage, so the action applies to only part of the matching errors. Set the percentage with the **Probability of executing this rule** slider or field. The default is 100%, which applies the action to every matching error.

Use sampling when you want to reduce the volume of a frequent error without losing it completely. In the following example, the **Probability of executing this rule** is set to 53%, so the rule rejects 53% of the errors that match the regular expression `.*payment.*`.

<img src={useBaseUrl('img/error-reporting/error-processing/submission-actions/submission-actions-19.png')} alt="Reject submission dialog with the Probability of executing this rule set to 53%" />
