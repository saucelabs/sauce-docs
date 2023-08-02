---
id: slack
title: Backtrace Integration for Slack
sidebar_label: Slack
description: Integrate Backtrace with Slack.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

You can integrate Backtrace with Slack to see the errors that matter, triage, and resolve them accordingly in one workflow.

There are two integration paths:

- Use the App for Slack (recommended)
- Connecting a Webhook (legacy)

:::note

Slack announced that they plan to deprecate support for customized webhooks, so the App for Slack is generally preferred.

:::

## Connecting the App for Slack

1. Navigate to **Project Settings** > **Integrations**.
2. Click **+**.
3. Select Slack from the integration list.
4. Click **Install Slack app**.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/slack_integration.png')} alt="slack integration"/>

   :::note

   You may need an admin to approve installing the app in your workspace.

   :::

5. Next, **Allow** Backtrace to access the Backtrace I/O Slack workspace, or request from your Slack admin.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/backtrace_permission.png')} alt="allow backtrace to access slack integration" width="500"/>
6. After the App for Slack is installed, go to **Home** in Slack and click **Connect with Backtrace**.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/connect_backtrace.webp')} alt="connect with backtrace" width="500"/>
7. Enter your Backtrace instance (\*.sp.backtrace.io domain) in **Backtrace Instance URL** and click **Submit**.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/add_instance.png')} alt="add backtrace instance URL" width="500"/>
8. You will be redirected back to Backtrace to finish the setup.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/success.png')} alt="your connection was created successfully"/>

## Setting Up the Incoming Webhook (Legacy)

If you prefer using the legacy approach, you can configure an Incoming Webhook in Slack. Follow the on-screen instructions on the [Incoming WebHooks](https://my.slack.com/services/new/incoming-webhook/) page:

1. In the **Post to Channel** section, select the channel where you want to post messages, then click **Add Incoming WebHooks integration**.
2. Once the Incoming Webhook integration is added, copy the **Webhook URL** from the **Setup Instructions**. This URL will be used to create the integration for Slack in Backtrace.

## Main Body Content​

You can specify attributes to be appended to the description in the Main body content.

<img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/body-content.png')} alt="main body content"/>

## Issue Based Alerts​

You can configure automated actions for your Slack workflow integration with issue-based alerts to further automate your workflow. Use issue-based alerts to automatically generate issues in Slack based on the conditions and frequency you specify. For more information, see [Issue Based Alerts](/error-reporting/project-setup/alerts/#issue-based-alerts).
