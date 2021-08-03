---
id: setup-connectors
title:  "Set Up Connectors (For Notifications and Data)"
sidebar_label: Set Up Connectors
description: "Introduction Connectors are the way API Fortress integrates with other services and platforms to send data and/or notifications to them. A big benefit is how seamlessly API Fortress can be integrated into your day-to-day operations without disrupting workflows."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

Connectors are the way API Fortress integrates with other services and platforms to send data and/or notifications to them. A big benefit is how seamlessly API Fortress can be integrated into your day-to-day operations without disrupting workflows.

There are two levels of notification integrations:

- **Failures Only** Sends a notification only when a test failure happens; this is typical for stateless services such as Slack.
- **Send All** Sends all events, including successes; this is very handy when the service needs to log everything or alter a state.

## Currently Available Connectors

API Fortress offers a full-featured API as well as webhooks for third-party integrations. Any platform with an API can be integrated with API Fortress. Find our current preconfigured connectors and connectors-in-progress in this list:

- [Slack (click for a Slack specific walkthrough)](https://apifortress.com/doc/setup-connectors-slack/)
- [BigPanda](https://apifortress.com/doc/connector-bigpanda-io/)
- [HipChat](https://apifortress.com/doc/connector-hipchat/)
- [StatusPage.io](https://apifortress.com/doc/connectors-statuspage/)
- [JIRA](https://apifortress.com/doc/connectors-jira/)
- [Twilio](https://apifortress.com/doc/connectors-twilio/)
- [DataDog](https://apifortress.com/doc/setup-connectors-datadog/)
- New Relic
- [Elastic](https://apifortress.com/doc/connectors-elastic-kibana/)
- [PagerDuty](https://apifortress.com/doc/connector-pagerduty/)
- [xMatters](https://apifortress.com/doc/connectors-xmatters/)
- [Splunk](https://apifortress.com/doc/connectors-splunk/)

## Basic Setup

There are just three steps to the process:

1. Go to Company (Team) settings and create an Alert Group
2. Link a connector to that Alert Group
3. Connect that Alert Group to specific projects

### Steps 1 & 2 - Create an Alert Group, Add a Connector

1. Access the Company (Team) settings page by clicking the gear icon in the top right
2. Select "Alert groups" on the side menu
3. Create a new group of recipients if needed
4. Click on the connectors icon
5. Add a new Connector
6. Choose a service from the dropdown
7. Enter the required information

<img src={useBaseUrl('img/api-fortress/2018/01/notifications-alert-group-and-slack.gif')} alt="Slack Connector Gif"/>

### Step 3 - Assign to a Project

1. Go back to the main dashboard
2. Click _Settings_ on a project
3. Select Alert Group(s) in the _Alert Distribution Group_ field
4. Click the green checkmark to save

<img src={useBaseUrl('img/api-fortress/2016/09/alert-group-set.gif')} alt="Group Set Gif"/>
