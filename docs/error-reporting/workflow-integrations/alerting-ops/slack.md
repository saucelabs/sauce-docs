---
id: slack
title: Slack Integration with Backtrace
sidebar_label: Slack
description: Integrate Backtrace with Slack.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with Slack. Setting up integration with Slack requires a valid Slack account.

## Connecting Slack

1. Navigate to https://slack-bolt-test.sp.backtrace.io/p/Test/settings/integrations/?wf-beta=true.

:::note
The query param `?wf-beta=true` allows you to see the pre-release.
:::

2. Click `+` on the right.

3. Choose Slack from the integration list.

4. **Install Slack app**.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/slack_integration.png')} alt="slack integration"/>

5. **Allow** Backtrace to access the Backtrace I/O Slack workspace.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/backtrace_permission.png')} alt="allow backtrace to access slack integration" width="600"/>

6. In Slack, go to Home, and click **Connect with Backtrace**.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/connect_backtrace.png')} alt="connect with backtrace"/>

7. Enter `slack-bolt-test.sp.backtrace.io` in **Backtrace Instance URL** and **Submit**.
   <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/add_instance.png')} alt="add backtrace instance URL"/>

<img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/success.png')} alt="your connection was created successfully"/>

## Setting Up Alerts

1. Navigate to https://slack-bolt-test.sp.backtrace.io/p/Test/settings/alerts.

2. Create alert:
   - Enter **Alert Name**
   - Select **A new error is detected** in "Trigger an alert when..."
   - Select the Slack integration you created in "Notify me via..."
   - All the other fields aren't required for testing
     <img src={useBaseUrl('/img/error-reporting/workflow-integrations/slack/alerts.png')} alt="setting up alerts"/>

## Triggering the Alert

After everything is setup, you can upload some errors to trigger the alert.
