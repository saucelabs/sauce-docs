---
id: error-threshold-alerts
title: Create Error Threshold Alerts
sidebar_label: Create Error Threshold Alerts
description: Create error threshold alerts from the Explore view or the Alerts settings to get Warning and Critical notifications when errors reach a rate you set.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Error threshold alerts notify your team at Warning and Critical levels when the errors in a group reach a threshold in a time window you set. Notifications are sent through your workflow integrations, for example, as a message in Slack or as a ticket in Jira, so your team can investigate a spike as soon as it starts.

To be notified about new errors or fingerprints instead, see [Create Issue Based Alerts](/error-reporting/project-setup/alerts/).

## Prerequisites

Alerts are sent through a workflow integration, so set up the integration you want to notify first. See [Workflow Integrations](/error-reporting/workflow-integrations/overview/).

## Ways to Create an Error Threshold Alert

You can create an error threshold alert in two ways. Both open the same **Export alert based on query** dialog.

| Method | Where | Use it when |
| --- | --- | --- |
| [From the Explore view](#create-an-alert-from-the-explore-view) | **Explore** > **Export as** > **Alert** | You want the alert to monitor the errors that your Explore filters return, such as crashes in your production release channel. |
| [From the Alerts settings](#create-an-alert-from-the-alerts-settings) | **Project Settings & Docs** > **Alerts** > **Error Threshold Alerts** > **Create an alert here** | You want to create the alert directly from the project settings, without building a query first. |

## Create an Alert from the Explore View

Create the alert from the **Explore** view when you want it to monitor a specific set of errors. The alert uses the filters and grouping of your Explore query, such as crashes in your production release channel grouped by fingerprint.

**Step 1:** In your project, click **Explore** in the top navigation bar. Filter the errors you want to monitor, and select how to group them from **Group errors by**, such as **fingerprint**. The alert thresholds apply to each group.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-1.png')} alt="Error type, Platform, Group errors by, Errors normalized by, and View as options in the Explore view" />

**Step 2:** Click the **Export as** icon at the top-right of the **Explore** view, next to **Save view**.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-2.png')} alt="Export as icon next to Save view in the Explore view" />

**Step 3:** From the menu, select **Alert**. The **Export alert based on query** dialog opens with your query. If the project already has alerts similar to your query, the dialog shows a message with a **View alerts in settings** link, so you can check the existing alerts before you create another one.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-3.png')} alt="Export as menu with the Metric and Alert options, with Alert highlighted" />

**Step 4:** Fill in the following fields:

| Sr. No. | Field | Description |
| --- | --- | --- |
| 1 | **Group by** | How the errors are grouped for the alert, such as **fingerprint**. The thresholds apply to each group. |
| 2 | **Alert name** | A name for the alert, such as `Production Crash Spike`. |
| 3 | **Thresholds** | The time window, in minutes, to count errors over, set in **Over the last**. |
| 4 | **Aggregation** | The value to check, such as **error - count**. To check more values, click **Add aggregation**. |
| 5 | **Warning** | The condition and value that trigger a Warning alert, such as **Greater than or equal** `10`. Leave it set to **No threshold** to skip the Warning level. |
| 6 | **Critical** | The condition and value that trigger a Critical alert, such as **Greater than or equal** `20`. Leave it set to **No threshold** to skip the Critical level. |
| 7 | **Notification interval** | The minimum time, in minutes, between notifications, set in **Space notifications by**. |
| 8 | **Integrations** | The workflow integration to send notifications to. To add another integration, click **Add integration**. |

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-4.png')} alt="Export alert based on query dialog with numbered Group by, Alert name, Thresholds, Aggregation, Warning, Critical, Notification interval, and Integrations fields" width="600" />

In this example, the alert sends a Warning when any fingerprint gets 10 or more new errors in 5 minutes, and a Critical alert when it gets 20 or more new errors in 5 minutes. Notifications are spaced by at least 15 minutes.

**Step 5:** Click **Save**. The alert appears in the project settings, on the **Error Threshold Alerts** tab of the **Alerts** page, with its name and status.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-5.png')} alt="Saved Production Crash Spike alert in the list on the Error Threshold Alerts tab" />

## Create an Alert from the Alerts Settings

Create the alert from the **Alerts** settings when you want to set it up without leaving the project settings.

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-6.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** In the left menu, under **Workflow**, click **Alerts**. The **Alerts and notifications** page opens.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-7.png')} alt="Alerts option under Workflow in the Project settings menu" />

**Step 3:** Select the **Error Threshold Alerts** tab.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-8.png')} alt="Error Threshold Alerts tab on the Alerts and notifications page" />

The tab lists the existing error threshold alerts of the project, with their name and status.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-9.png')} alt="List of error threshold alerts with their name and status" />

:::tip
To build the alert from an Explore query instead, click **Create an alert in Explore**. The **Explore** view opens, and you can continue from [Create an Alert from the Explore View](#create-an-alert-from-the-explore-view).

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-10.png')} alt="Create an alert in Explore button on the Error Threshold Alerts tab" />
:::

**Step 4:** Click **Create an alert here**. The **Export alert based on query** dialog opens.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-11.png')} alt="Create an alert here button on the Error Threshold Alerts tab" />

**Step 5:** Fill in the fields. The fields are the same as when you create the alert from the Explore view. For a description of each field, see Step 4 of [Create an Alert from the Explore View](#create-an-alert-from-the-explore-view).

To check how the aggregations look on your data before you save the alert, click **Preview aggregations in explore**.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-12.png')} alt="Export alert based on query dialog opened from the Alerts settings, with the Preview aggregations in explore button" />

**Step 6:** Click **Save**. The alert appears on the **Error Threshold Alerts** tab.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-13.png')} alt="Saved alert in the list on the Error Threshold Alerts tab" />

## View Alert Notifications

When a threshold is met, Error Reporting sends a notification to the configured integration. The notification includes a link to the alert's **Activity feed**.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-14.png')} alt="Example error threshold alert notification in Slack" width="600" />

The **Activity feed** shows when the alert was triggered, its level, and the groups that met the threshold, so your team has the information it needs to investigate the spike.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-15.png')} alt="Activity feed with the time, type, example groups, and group details of a triggered alert" />

## Manage Error Threshold Alerts

You manage error threshold alerts from the **Error Threshold Alerts** tab and from the details page of each alert. To open the tab, follow Steps 1 to 3 of [Create an Alert from the Alerts Settings](#create-an-alert-from-the-alerts-settings).

### View Alert Details

**Step 1:** On the **Error Threshold Alerts** tab, click the **View details** icon (**>**) next to the alert.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-16.png')} alt="View details icon next to an alert on the Error Threshold Alerts tab" />

**Step 2:** Review the alert details. The details page shows:

- The alert status, such as **Alert is active**.
- The time window and grouping, such as **Over the last 5 minutes for any fingerprint**.
- The conditions for the Warning and Critical alerts, such as **10 or more new errors occur**.
- The integrations that are notified, and the notification interval.
- The **Mute until** option and the **Timeline** of the alert.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-17.png')} alt="Details page of an error threshold alert with its status, thresholds, integrations, Mute until option, and Timeline" />

To go back to the list, click **All alerts**.

### Edit an Alert

**Step 1:** On the details page of the alert, click **Edit alert**. The alert dialog opens with the current settings.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-18.png')} alt="Edit alert button on the details page of an alert" />

**Step 2:** Update the fields, and then click **Save**. For a description of each field, see Step 4 of [Create an Alert from the Explore View](#create-an-alert-from-the-explore-view).

:::note
Attribute filters can't be edited from the **Alerts** settings. For alerts with attribute filters, use the **Explore** view.
:::

### Disable or Mute an Alert

Disable an alert to stop it from sending notifications, or mute it to pause notifications for a limited time, for example, while your team fixes a known issue.

- **To disable the alert**, click **Disable** next to **Alert is active** on the details page.
- **To mute the alert**, select a time from the **Mute until** dropdown list, such as **1 hour from now**, and then click **Mute**.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-19.png')} alt="Disable option and Mute button on the details page of an alert" />

### View the Alert Query in Explore

**Step 1:** On the details page of the alert, click **View in explore**.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-20.png')} alt="View in explore button on the details page of an alert" />

**Step 2:** The **Explore** view opens with the query of the alert, so you can see the errors that the alert monitors.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-21.png')} alt="Explore view showing the errors grouped by the query of the alert" />

### Delete an Alert

On the **Error Threshold Alerts** tab, click the delete icon next to the alert.

<img src={useBaseUrl('img/error-reporting/alerts-setup/error-threshold-alerts/error-threshold-alerts-22.png')} alt="Delete icon next to an alert on the Error Threshold Alerts tab" />
