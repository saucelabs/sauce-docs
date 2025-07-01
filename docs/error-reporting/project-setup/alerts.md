---
id: alerts
title: Alerts
sidebar_label: Alerts
description: Backtrace offers an Alert capability that enables teams to be notified at Warning and Critical levels if error reports climb to a critical rate.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace offers an Alert capability that enables teams to be notified at Warning and Critical levels if error reports reach a critical rate. Alerts are configured to trigger a notification for a workflow integration (for example, a message through Slack or a ticket in Jira) when an error group’s count of crashes reaches a specified threshold within a defined timeframe.

## Issue Based Alerts

:::tip New Feature
Want to see alerts about your application stability? Check out our new [Error Free User Alerting](https://changelog.saucelabs.com/en/now-available-error_free-user-metrics-alerting-D1ZgYKZg).
:::

Use issue based alerts to automatically generate notifications or create issues for your third-party integrations when Backtrace detects a new error or fingerprint in the system. You can specify the conditions and frequency for which alerts are triggered.

### Define Alert Conditions

To get started, you must choose whether to be notified with every new error or every new fingerprint. If you have a high volume of errors or are connecting with an issue-tracking system like Jira, it's generally recommended to set triggers for new fingerprints to reduce noise.

**Alert Triggers**
- A new error is detected 
    - Receive a message for each individual error. 
    - Good for low volumes of unique errors. Suggested only for messaging systems like Slack.
- A new fingerprint is detected
    - Receive a message for errors grouped by root cause.
    - Reduces duplicate messages when using an issue tracker like Jira.
- Error-free user rate is below a threshold
    - Set a minimum threshold for application stability (number of unique users who have not experienced an error). 
    - Filter by `error.type = crash` for crash free rates.
- Number of errors in a fingerprint is greater than a value 
    - Notifies you of high frequency errors in a specific timeframe. 
    - Good for spike detection.
- Number of users affected by fingerprint is greater than a value 
    - Notifies you of high user impacting errors.
    - Only triggers when errors are affecting a large population.

Include attribute filtering to focus the messages specific to your use case.

Alert frequency allows you to control how often an alert will trigger. If you want to send messages for new errors, longer alert frequencies will allow batching of the same error and reduce the overall number of messages.

<img src={useBaseUrl('img/error-reporting/project-settings/issue-based-alerts.png')} alt="Shows how to create an issue based alert for a workflow integration." width="700" />

## Error Threshold Alerts

Error Threshold Alerts can be created from the Explore view after applying filters by using Export as:

<img src={useBaseUrl('img/error-reporting/project-settings/alerts-export-as.webp')} alt="Shows how to create an alert based on a query." />

You can configure the alert as follows:

<img src={useBaseUrl('img/error-reporting/project-settings/alerts-export-as-settings.png')} alt="Shows the configuration settings to create an alert based on a query." />

In this example, we are filtering for crashes in the production release channel in non muted fingerprints and grouping by fingerprint. The thresholds are set to fire a warning if any fingerprint within the filter gains 10 new objects within 5 minutes, and a critical alert if any fingerprint within the filter gains 20 new objects within 5 minutes. Alerts will be spaced by the notification interval, set to 15 minutes in this example. The final step in configuring the Alert is selecting a workflow integration for the notification to be sent with.

Once an alert has been saved, its configuration will display under Project settings > Alerts.

When a threshold is met, a notification including a link to the alert’s Activity feed (under Project settings > Alerts) will be sent to the integration configured.

<img src={useBaseUrl('img/error-reporting/project-settings/slack-alert-example.png')} alt="Shows an example notification message in Slack." width="600"/>

The activity feed will display the fingerprint(s) that met the alert, providing teams with the information they need to investigate the spike.

<img src={useBaseUrl('img/error-reporting/project-settings/alert-activity-feed.png')} alt="Shows the activity feed for the error fingerprints that meet the specified thresholds." />

Alerts can also be created, edited, or deleted from Project settings > Alerts, with the limitation that attribute filters cannot be edited from this endpoint (the explore view must be used for alerts with attribute filters).
