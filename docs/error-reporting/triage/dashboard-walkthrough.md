---
id: dashboard-walkthrough
title: Dashboard Walkthrough
sidebar_label: Dashboard Walkthrough
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The **Triage** view is the primary workspace for reviewing and managing crashes and errors for a selected project. This guide explains how to navigate the Triage dashboard, interpret the error-volume chart and fingerprint table, perform common fingerprint actions, and save a customized Triage view.

When you open the **Web Console**, the **Triage** view opens for the selected project. The dashboard provides filters, an error-volume chart, and a fingerprint table that you can use to review and investigate error activity.

From the Triage dashboard, you can review overall error activity, filter fingerprints, inspect individual errors, and access actions for investigating and managing fingerprints.

## Triage Dashboard

The Triage dashboard combines filtering controls, an error-volume chart, and a fingerprint table to help you review error activity and identify issues that require attention.

| Dashboard Area | Description |
| ----- | ----- |
| **Filters** | Filter the fingerprints displayed in the dashboard based on the available criteria. |
| **Error Volume Chart** | Displays error activity over the selected time period, helping you identify changes in error volume. |
| **Fingerprint Table** | Lists fingerprints and provides information about the errors grouped under each fingerprint. |

<img src={useBaseUrl('img/error-reporting/triage/dashboard/dashboard-walkthrough-1.png')} alt="Triage Dashboard" />

## Review Error Activity

The error-volume chart provides a visual representation of error activity over the selected time period. Use it to identify periods with higher or lower error activity and understand how the number of errors changes over time.

The total error count displayed above the chart provides an overall view of the errors recorded during the selected period. The chart then shows how that activity is distributed over time.

The fingerprint table below the chart provides the individual error groups associated with this activity.

:::tip
Use the chart together with the Triage filters to focus on the error activity relevant to your investigation.
:::

<img src={useBaseUrl('img/error-reporting/triage/dashboard/dashboard-walkthrough-2.png')} alt="Triage Dashboard" />

## Fingerprint Table

The **fingerprint table** is where you review individual error groups and decide which fingerprints require further investigation or action. Each row represents a fingerprint and provides information about its status, error details, activity, and ownership.

The table can provide information about the current state, activity, and other details associated with each fingerprint.

| No. | Column | Description |
| ----- | ----- | ----- |
| **1** | **Status** | Displays the current status of the fingerprint, such as **Open**, **In Progress**, or **Resolved**. |
| **2** | **Fingerprint** | Displays the unique identifier assigned to the fingerprint. |
| **3** | **Description** | Displays a summary of the error represented by the fingerprint. |
| **4** | **Errors by Application** | Displays the number and percentage of errors associated with the fingerprint across application launches. |
| **5** | **Activity** | Displays the error activity for the fingerprint over the selected time period. |
| **6** | **Callstack** | Displays the callstack associated with the fingerprint and provides access to additional callstack information. |
| **7** | **Tags** | Displays tags associated with the fingerprint. You can add or manage tags from this column. |
| **8** | **Assignees** | Displays the user assigned to the fingerprint. |
| **9** | **Tickets** | Displays tickets linked to the fingerprint, such as Jira issues. |
| **10** | **Classifiers - head** | Displays the classifier information associated with the fingerprint. |
| **11** | **Guid - unique** | Displays the unique GUID value and its associated percentage for the fingerprint. |
| **12** | **Add Aggregation** | Allows you to add an aggregation column to the Triage table for additional analysis. |

<img src={useBaseUrl('img/error-reporting/triage/dashboard/dashboard-walkthrough-3.png')} alt="Triage Dashboard" />

## Take Action on a Fingerprint

After identifying a fingerprint that requires attention, you can use the actions available in its row to investigate the error, assign responsibility, track the issue, or customize the information displayed in the table.

| Where to Start | What you can do | Read More |
| ----- | ----- | ----- |
| **Status** | View or update the fingerprint status as the issue moves through investigation and resolution. | **[View & Manage Fingerprint Status](/docs/error-reporting/triage/view-manage-fingerprint-status.md)** |
| **Fingerprint ID** | Open the fingerprint Details view to review additional information and associated instances. | **[View Fingerprint Group Details](/docs/error-reporting/triage/fingerprint-group-details.md)** |
| **Debugger icon** | Open the latest trace in the Debugger and inspect the callstack. | **[View Fingerprint in Debugger](/docs/error-reporting/triage/fingerprint-in-debugger.md)** |
| **Assignees** | Assign the fingerprint to a user responsible for investigating or resolving it. | **[Assign a Fingerprint](/docs/error-reporting/triage/other-action.md#assign-a-fingerprint)** |
| **Tickets** | Create and link a Jira issue to track the fingerprint. | **[Link a Fingerprint to a Jira Issue](/docs/error-reporting/triage/other-action.md#link-a-fingerprint-to-a-jira-issue)** |
| **Add Aggregation** | Add additional aggregation columns to the fingerprint table for analysis. | **[Add Custom Metric Columns](/docs/error-reporting/triage/other-action.md#add-custom-metric-columns)** |

## Save a Triage View

After configuring the Triage dashboard with the filters, columns, time frame, and other settings you want to keep, you can save the current configuration as a view. This allows you to return to the same setup later without configuring it again.

**Step 1:** Configure the **Triage** view with the filters and display settings you want to save.

<img src={useBaseUrl('img/error-reporting/triage/dashboard/dashboard-walkthrough-4.png')} alt="Triage Dashboard" />

**Step 2:** Click **Save view** in the upper-right corner of the Triage dashboard.

<img src={useBaseUrl('img/error-reporting/triage/dashboard/dashboard-walkthrough-5.png')} alt="Triage Dashboard" />

**Step 3:** Enter a name for the view that clearly identifies the configuration or the type of fingerprints it displays.

<img src={useBaseUrl('img/error-reporting/triage/dashboard/dashboard-walkthrough-8.png')} alt="Triage Dashboard" />

**Step 4:** Select **Save** to save the view. The saved view is added to your available Triage views, allowing you to quickly access the same filters and settings later.

:::caution Note
Saving a view preserves the configured Triage settings, making it easier to return to a specific view without manually applying the same configuration again.
:::

<img src={useBaseUrl('img/error-reporting/triage/dashboard/dashboard-walkthrough-7.png')} alt="Triage Dashboard" />