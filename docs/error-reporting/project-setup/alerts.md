---
id: alerts
title: Create Issue Based Alerts
sidebar_label: Create Issue Based Alerts
description: Create issue based alerts to notify your team or create issues in your workflow integrations when Error Reporting detects new errors, new fingerprints, or a drop in stability.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Issue based alerts notify your team when Error Reporting detects a new error or fingerprint, or when the stability or impact of your application crosses a value you set. Alerts are sent through your workflow integrations, for example, as a message in Slack or as a ticket in Jira, so your team can act on new issues without watching the console.

To be notified when the number of errors in a query reaches a rate over a time window, see [Create Error Threshold Alerts](/error-reporting/project-setup/error-threshold-alerts/).

:::tip New Feature
Want to see alerts about your application stability? Check out our new [Error Free User Alerting](https://changelog.saucelabs.com/en/now-available-error_free-user-metrics-alerting-D1ZgYKZg).
:::

## Prerequisites

Alerts are sent through a workflow integration, so set up the integration you want to notify first. See [Workflow Integrations](/error-reporting/workflow-integrations/overview/).

## Alert Triggers

The trigger decides when an alert is sent. Choose the trigger that matches what you want to be notified about.

| Trigger | Notifies you when | Use it for |
| --- | --- | --- |
| **A new error is detected** | Each individual error is detected. | Low volumes of unique errors. Suggested only for messaging systems like Slack. |
| **A new fingerprint is detected** | A new group of errors with the same root cause is detected. | Reducing duplicate messages when you use an issue tracker like Jira. |
| **Error-free user rate is below a threshold** | The rate of unique users who haven't experienced an error falls below the minimum you set. | Monitoring application stability. Filter by `error.type = crash` for crash-free rates. |
| **Number of errors in a fingerprint is greater than a value** | A fingerprint has more errors than the value you set, in a specific timeframe. | Detecting spikes of high-frequency errors. |
| **Number of users affected by fingerprint is greater than a value** | A fingerprint affects more users than the value you set. | Catching errors that affect a large population of users. |

If you have a high volume of errors, or you are connecting with an issue tracker like Jira, set the trigger to new fingerprints to reduce noise.

## Create an Issue Based Alert

Each project has its own alerts, which you create from the **Alerts** page in the project settings. Before you start, make sure the workflow integration you want to notify is set up. See [Prerequisites](#prerequisites).

**Step 1:** Open the project you want to create the alert for. In the top-right corner, click your profile icon, and then select **Project Settings & Docs**. The project settings open.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** In the left menu, under **Workflow**, click **Alerts**. The **Alerts and notifications** page opens. It has a tab for each type of alert: **Issue Based Alerts** and **Error Threshold Alerts**.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-2.png')} alt="Alerts option under Workflow in the Project settings menu" />

**Step 3:** Select the **Issue Based Alerts** tab. The tab lists the issue based alerts already created for the project, with their name, integrations, and status.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-3.png')} alt="Issue Based Alerts tab on the Alerts and notifications page" />

**Step 4:** Click **Create alert**. The **New alert** form opens, where you name the alert and set its conditions.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-4.png')} alt="Create alert button on the Issue Based Alerts tab" />

**Step 5:** Enter a name for the alert, choose the trigger, and select the integration to notify. Optionally, add attribute filters so the alert covers only the errors you care about, for example, errors from one platform or application version. The form has the following fields:

| Sr. No. | Field | Description |
| --- | --- | --- |
| 1 | **Alert Name** | **Required.** A name for the alert. |
| 2 | **Trigger an alert when** | **Required.** The condition that sends the alert. See [Alert Triggers](#alert-triggers). |
| 3 | **Filter attribute** | Optional. The attribute to filter errors by, so the alert focuses on your use case. |
| 4 | **Filter operator** | The operator to compare the attribute with the value. |
| 5 | **Filter value** | The value to compare the attribute with. To apply the filter, click **Add**. |
| 6 | **Notify me via** | **Required.** The workflow integration to send the alert to. To remove an integration, click **Remove**. To send the alert to another integration, click **Add new integration**. |
| 7 | **Alert frequency** | How often the alert can be triggered. For alerts on new errors, a longer frequency batches the same error and reduces the number of messages. |
| 8 | **Alert execution delay** | How long to wait before the alert runs. The default is **No delay**. |

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-5.png')} alt="New alert form with numbered Alert Name, Trigger an alert when, filter attribute, operator, and value, Notify me via, Alert frequency, and Alert execution delay fields" />

**Step 6:** Review the fields, and then click **Save alert**. To discard the alert, click **Cancel**.

The alert appears on the **Issue Based Alerts** tab, with its name, the integrations it notifies, and its status. A new alert is **Active**, so Error Reporting starts sending notifications as soon as the trigger conditions are met.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-6.png')} alt="Saved issue based alerts with their names, integrations, and status" />

## Edit or Delete an Issue Based Alert

Edit an alert to change its trigger, filters, integrations, or frequency, or delete an alert you no longer need. You manage alerts from the **Issue Based Alerts** tab.

### Edit an Alert

Edit an alert when you need to change what it monitors or where it sends notifications, for example, to switch the trigger from new errors to new fingerprints, or to add another integration.

**Step 1:** On the **Issue Based Alerts** tab, find the alert you want to change.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-7.png')} alt="Issue Based Alerts tab on the Alerts and notifications page" />

**Step 2:** In the **Actions** column, click the edit icon next to the alert. The alert form opens with the current settings.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-8.png')} alt="Edit icons in the Actions column of the Issue Based Alerts tab" />

**Step 3:** Update the fields, and then click **Save alert**.

### Delete an Alert

Delete an alert when you no longer need its notifications.

**Step 1:** On the **Issue Based Alerts** tab, find the alert you want to remove.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-9.png')} alt="Issue Based Alerts tab on the Alerts and notifications page" />

**Step 2:** In the **Actions** column, click the delete icon next to the alert.

<img src={useBaseUrl('img/error-reporting/alerts-setup/issue-based-alerts/issue-based-alerts-10.png')} alt="Delete icons in the Actions column of the Issue Based Alerts tab" />
