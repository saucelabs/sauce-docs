---
id: alerts
title: Alerts
sidebar_label: Alerts
description: Backtrace offers an Alert capability that enables teams to be notified at Warning and Critical levels if error reports climb to a critical rate.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace offers an Alert capability that enables teams to be notified at Warning and Critical levels if error reports climb to a critical rate. Alerts are configured to fire a workflow integration notification (ie a message through Slack or a ticket in Jira) when an error group’s count of crashes, within a defined timeframe, reaches a specified threshold.

Alerts can be created from the explore view after applying filters by using the “export as” button:

<img src={useBaseUrl('img/error-reporting/project-settings/alerts-export-as.png')} alt="" />

Configuration can be entered in the following window:

<img src={useBaseUrl('img/error-reporting/project-settings/alerts-export-as-settings.png')} alt="" />

In this example, we are filtering for crashes in the production release channel in non muted fingerprints and grouping by fingerprint. The thresholds are set to fire a warning if any fingerprint within the filter gains 10 new objects within 5 minutes, and a critical alert if any fingerprint within the filter gains 20 new objects within 5 minutes. Alerts will be spaced by the notification interval, set to 15 minutes in this example. The final step in configuring the Alert is selecting a workflow integration for the notification to be sent via.

Once an alert has been saved, its configuration will display under Project settings | Alerts.

When a threshold is met, a notification including a link to the alert’s Activity feed (under Project settings > Alerts) will be sent to the integration configured.

<img src={useBaseUrl('img/error-reporting/project-settings/slack-alert-example.png')} alt="" />

The activity feed will display the fingerprint(s) that met the alert, providing teams with the information they need to investigate the spike. 

<img src={useBaseUrl('img/error-reporting/project-settings/alert-activity-feed.png')} alt="" />

Alerts can also be created, edited, or deleted from Project settings | Alerts, with the limitation that attribute filters cannot be edited from this endpoint (the explore view must be used for alerts with attribute filters).
