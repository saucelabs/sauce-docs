---
id: slack
title: Slack Integration with Backtrace
sidebar_label: Slack
description: Integrate Backtrace with Slack.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide will go through the steps necessary to integrate Backtrace with Slack.

There are two main steps for setting up Slack:

- Set up the incoming webhook
- Create the integration

## Set up the Incoming Webhook

In order to set up integration for Slack, an Incoming WebHook must be configured in Slack - [Link to Webhook config](https://my.slack.com/services/new/incoming-webhook/). From there, follow the prompts to add the integration, then copy the Webhook URL that's generated - you will use this URL below.

## Create the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.png')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.png')} alt="" />

Select **Slack** and fill in the required settings (name, webhook URL you generated above, and one or more channels/users to send the message to).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-slack-integration.png')} alt="" />

Next, customize the payload to include the content best suited for your team.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/slack-customize-payload.png')} alt="" />

Then, configure options for when the notifications should fire.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/slack-setup-actions.png')} alt="" />

Finally, add any rules to route notifications to certain channels or users based on crash attribute values.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/slack-setup-additonal-rules.png')} alt="" />

Submit!

As always, if you have any questions then please use the chat bubble on the bottom right corner of the screen to talk to our team!
