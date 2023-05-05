---
id: slack
title: Backtrace Integration for Slack
sidebar_label: Slack
description: Integrate Backtrace with Slack.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

You can integrate Backtrace with the app for Slack to see the errors that matter, triage, and resolve them accordingly in one workflow.

## Set Up the Incoming Webhook

An Incoming Webhook must be configured in Slack. To set up the Incoming Webhook, follow the on-screen instructions on the [Incoming WebHooks](https://my.slack.com/services/new/incoming-webhook/) page:

1. In the **Post to Channel** section, select the channel you want to post messages to, then select **Add Incoming WebHooks integration**.
1. After the Incoming Webhook integration is added, from the** Setup Instructions**, copy the **Webhook URL**. The Webhook URL is used to create the integration for Slack in Backtrace.

## Create the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.png')} alt="" />

Click **Integrations** in the left-hand menu, then **+** to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.png')} alt="" />

Select **Slack** and fill in the required settings (name, webhook URL you generated above, and one or more channels/users to send the message to).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-slack-integration.png')} alt="" />

Next, customize the payload to include the content best suited for your team.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/slack-customize-payload.png')} alt="" />

Then, configure options for when the notifications should fire.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/slack-setup-actions.png')} alt="" />

Finally, add any rules to route notifications to certain channels or users based on crash attribute values.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/slack-setup-additonal-rules.png')} alt="" />

Select Submit.
