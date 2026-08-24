---
id: other-action
title: Other Actions
sidebar_label: Other Actions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

After identifying a fingerprint, you can take additional actions to manage the issue, assign ownership, track its resolution, and investigate its underlying cause. These actions are available throughout the fingerprint investigation workflow and help keep error management organized.

## Assign a Fingerprint

Assign a fingerprint to a user when someone needs to take responsibility for investigating or resolving the issue.

Assigning a fingerprint identifies the person responsible for the fingerprint and changes its state to **In Progress**. This allows teams to distinguish fingerprints that are actively being investigated from those that have not yet been assigned.

Use assignment when:

* A specific engineer needs to investigate the issue.
* Ownership of the fingerprint needs to be clearly identified.
* You want the fingerprint to move from **Open** to **In Progress**.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-1.png')} alt="Other Actions" />

## Link a Fingerprint to a Jira Issue

You can create a Jira issue for a fingerprint in an external issue-tracking system, such as **Jira** or **GitHub Issues**.

The issue includes information about the fingerprint and a link back to the fingerprint in Error Reporting. This allows the external issue and the fingerprint to be tracked together during the resolution process.

Linking a fingerprint to an issue also changes its state to **In Progress**.

Use this action when:

* The issue needs to be tracked through an existing development workflow.
* The engineering team uses Jira or GitHub Issues to manage work.
* You want to provide a direct link between the external issue and the fingerprint.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-2.png')} alt="Other Actions" />

## Add Comments and Tags

Comments and tags provide additional ways to document and organize fingerprints.

### Add Comments

The **[Details](/docs/error-reporting/triage/fingerprint-group-details.md)** view includes a comment thread where users can add and edit comments related to the fingerprint.

Use comments to document investigation findings, provide additional context, or communicate updates to other team members working on the issue.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-3.png')} alt="Other Actions" />

### Add Tags

Tags provide a flexible way to group and classify fingerprints. You can apply tags based on information that is relevant to your team's investigation or workflow.

For example, tags can help group fingerprints that share a particular characteristic or require similar follow-up actions.

Click the **+** icon in the **Tags** column for the fingerprint, then select the tag you want to add.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-4.png')} alt="Other Actions" />

## Add Custom Metric Columns

Custom metric columns allow you to add additional metrics to the **Triage** view. These columns can help you analyze fingerprints using specific attributes and aggregated values.

### Add an Aggregation

**Step 1:** In the **Triage** view, click **Add aggregation** at the end of the table.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-5.png')} alt="Other Actions" />

**Step 2:** In the **Add aggregation** dialog, select the **Attribute** you want to use for the metric. The list includes both default and custom attributes.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-6.png')} alt="Other Actions" />

**Step 3:** After selecting an attribute, select an **Aggregation operation** to determine how the attribute is calculated and displayed in the Triage table.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-7.png')} alt="Other Actions" />

### Aggregation Function

The aggregation function determines how Backtrace summarizes the selected attribute in the custom metric column. Use the appropriate aggregation to represent the information you want to analyze across fingerprints.

## Merge or Unmerge Fingerprints

Use **Merge** when two or more fingerprints represent the same underlying issue and should be treated as a single group.

### Merge Fingerprints

**Step 1:** From the **Triage** view, select the fingerprints that should be grouped together and select **Merge**.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-8.png')} alt="Other Actions" />

**Step 2:** Error Reporting creates a new fingerprint to group future incoming errors represented by the merged fingerprints.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-9.png')} alt="Other Actions" />

Merging helps prevent related errors from being treated as separate issues when they share the same underlying cause.

### Unmerge Fingerprints

If fingerprints were merged incorrectly or should no longer be grouped together, you can use **Unmerge** from the fingerprint's **Details** view.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-10.png')} alt="Other Actions" />

For more information about how Error Reporting groups similar errors into fingerprints, see [**Deduplication Overview**](/docs/error-reporting/project-setup/deduplication.md).

## Inspect and Copy the Callstack

The Callstack provides information about where an error occurred in the application.

Hover over the fingerprint's **Callstack** to display additional Callstack information. The expanded view allows you to inspect more frames without opening the full Callstack.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-11.png')} alt="Other Actions" />

To share or investigate the complete Callstack, select **Copy Callstack** from the Callstack pop-up.

<img src={useBaseUrl('img/error-reporting/triage/other-actions/other-action-12.png')} alt="Other Actions" />

The Callstack displayed in the Triage view and the copied Callstack may differ:

* The Callstack displayed in the interface is **normalized and deduplicated** as part of fingerprint processing.
* The copied Callstack contains the **raw Callstack data**.
* The copied version can provide additional information, including **frame and line numbers**.

The normalized Callstack identifies the common location of an error, while the raw Callstack provides additional details for deeper investigation.