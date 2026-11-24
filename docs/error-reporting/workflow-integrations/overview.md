---
id: overview
title: Workflow Integrations Overview
sidebar_label: Overview
description: Workflow integrations allows you to have Backtrace automatically notify and alert users through issue tracking systems, like JIRA and more.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

Workflow integrations allows you to have Backtrace automatically notify and alert users through issue tracking systems like Jira, and more.

To configure a workflow integration, select **Project Settings** from the menu at the top-right, select the **Integrations** tab on the left, then start using the wizard:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/workflow-integrations.png')} alt="" />

## Issue Tracking

<div className="client-grid">
  <Link className="client-tile" to="/error-reporting/workflow-integrations/issue-tracking/github/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/github.svg')} alt="GitHub logo" />
    <span>GitHub</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/issue-tracking/jira/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/jira.svg')} alt="Jira logo" />
    <span>Jira</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/issue-tracking/asana/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/asana.svg')} alt="Asana logo" />
    <span>Asana</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/issue-tracking/mantis/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/mantis.png')} alt="Mantis Bug Tracker logo" />
    <span>Mantis Bug Tracker</span>
  </Link>
</div>

## Messaging Platforms

<div className="client-grid">
  <Link className="client-tile" to="/error-reporting/workflow-integrations/messaging/slack/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/slack.svg')} alt="Slack logo" />
    <span>Slack</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/messaging/amazon-sns/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/amazon-sns.svg')} alt="Amazon SNS logo" />
    <span>Amazon SNS</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/messaging/stride/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/stride.svg')} alt="Stride logo" />
    <span>Stride</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/messaging/discord/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/discord.svg')} alt="Discord logo" />
    <span>Discord</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/messaging/ms-teams/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/ms-teams.svg')} alt="Microsoft Teams logo" />
    <span>Microsoft Teams</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/messaging/webex-teams/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/webex.svg')} alt="Webex Teams logo" />
    <span>Webex Teams</span>
  </Link>
</div>

## Monitoring

<div className="client-grid">
  <Link className="client-tile" to="/error-reporting/workflow-integrations/monitoring/datadog/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/datadog.svg')} alt="Datadog logo" />
    <span>Datadog</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/alerting-ops/pagerduty/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/pagerduty.svg')} alt="PagerDuty logo" />
    <span>PagerDuty</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/alerting-ops/victorops/">
    <img style={{ height: '26px' }} src={useBaseUrl('img/error-reporting/workflow-integrations/logos/victorops.svg')} alt="Splunk On-Call (VictorOps) logo" />
    <span>VictorOps (Splunk On-Call)</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/alerting-ops/opsgenie/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/opsgenie.svg')} alt="OpsGenie logo" />
    <span>OpsGenie</span>
  </Link>
</div>

## Other

<div className="client-grid">
  <Link className="client-tile" to="/error-reporting/workflow-integrations/webhook/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/webhook.svg')} alt="Webhook logo" />
    <span>Webhook</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/workflow-integrations/messaging/email/">
    <img src={useBaseUrl('img/error-reporting/workflow-integrations/logos/email.svg')} alt="Email logo" />
    <span>Email</span>
  </Link>
</div>

## Connections

To view, transfer, or delete the Jira and Slack connections that your projects share, see [Manage Your Workflow Integrations](/error-reporting/project-setup/connections/).
