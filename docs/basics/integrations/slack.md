---
id: slack
title: Slack (Beta)
sidebar_label: Slack (Beta)
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Slack integration** allows you to send Sauce Labs test results and alerts directly to Slack. You can connect one or more Slack workspaces, choose the channels that should receive notifications, and configure alert rules to control which test results are sent.

Slack notifications help your team see important test results without having to continuously check the [Sauce Labs dashboard](/test-results/viewing-test-results/). You can configure alerts to send only the results that your team needs to act on, such as failed tests or errors.

:::note
This page covers Slack notifications for Sauce Labs test results. To send Backtrace error reports to Slack, see **[Backtrace Integration for Slack](/error-reporting/workflow-integrations/messaging/slack/)**.
:::

You can use the Slack integration to:

* Send test failures and errors to the appropriate team channels.
* Route results from different testing types to different channels.
* Send aggregated build results instead of individual messages for every test.
* Filter notifications by **[test status](/test-results/test-status)**, job owner, or **[tags](/basics/test-config-annotation/test-annotation/#use-build-ids-tags-and-names-to-identify-your-tests)**.
* Send a specific test result to Slack manually when investigating a failure.

## Prerequisites

* Make sure you have access to the Slack workspace that you want to connect to Sauce Labs.

* A Sauce Labs account with access to the [Integrations](https://app.saucelabs.com/integrations) page. See [Viewing Test Results](/test-results/viewing-test-results/) for where results appear before you route them to Slack.

* A Slack administrator may be required to authorize the Slack integration for your workspace.

## Connect a Slack Workspace

Connect a Slack workspace to Sauce Labs before you can send test result notifications to Slack. You can connect multiple Slack workspaces to the same Sauce Labs organization. Connecting another workspace does not replace an existing workspace connection.

**Step 1:** Inside your Sauce Labs account, click on your **profile icon** in the top-right corner, and then select **[Integrations](https://app.saucelabs.com/integrations)** from the dropdown list.

<img src={useBaseUrl('/img/integrations/slack/slack-1.png')} alt="Slack Integration"/>

**Step 2:** Find the **Slack** integration and click on **Configure**. The Slack configuration page opens. If you have not connected a workspace yet, the page provides the option to connect one.

<img src={useBaseUrl('/img/integrations/slack/slack-2.png')} alt="Slack Integration"/>

**Step 3:** Select **Connect Workspace**. This starts the process of connecting your Slack workspace to Sauce Labs.

<img src={useBaseUrl('/img/integrations/slack/slack-3.png')} alt="Slack Integration"/>

**Step 4:** In the Slack authorization window, select the workspace you want to connect. If you belong to multiple Slack workspaces, make sure you select the workspace where you want to receive Sauce Labs notifications.

<img src={useBaseUrl('/img/integrations/slack/slack-4.png')} alt="Slack Integration"/>

**Step 5:** In the Slack authorization window, review the permissions requested by the Sauce Labs app. If the selected workspace is correct, select **Allow** to authorize the app.

<img src={useBaseUrl('/img/integrations/slack/slack-5.png')} alt="Slack Integration"/>

**Step 6:** After authorization is complete, you are redirected to Sauce Labs, and the Slack workspace is **Connected**. Once connected, you can add Slack channels and configure alert rules to determine which test results are sent to Slack.

:::note
You can connect multiple Slack workspaces to the same Sauce Labs organization. Connecting another workspace does not replace an existing workspace connection.
:::

<img src={useBaseUrl('/img/integrations/slack/slack-6.png')} alt="Slack Integration"/>

:::important Reconnect an existing workspace
If you authorize a workspace that is already connected, Sauce Labs does not create a duplicate workspace connection. Existing channels and alert rules are preserved.
:::

## Add Slack Channels

After connecting a Slack workspace, you can add Slack channels where Sauce Labs will send test result notifications. You can add multiple channels to the same workspace and use them as destinations when configuring alert rules.

:::note
Only public channels available to the Sauce Labs Slack integration appear in the channel list.
:::

**Step 1:** In the connected workspace, select **Add Channel**.

<img src={useBaseUrl('/img/integrations/slack/slack-7.png')} alt="Slack Integration"/>

**Step 2:** The **Add Channel** dialog opens. Select the **Slack Channel** field to view the available channels. Select the Slack channel where you want to receive Sauce Labs notifications.

<img src={useBaseUrl('/img/integrations/slack/slack-8.png')} alt="Slack Integration"/>

**Step 3:** After selecting the channel, click on **Add Channel**. The selected channel is added to the connected workspace and can be selected as a destination when you configure an alert rule.

<img src={useBaseUrl('/img/integrations/slack/slack-9.png')} alt="Slack Integration"/>

### Add Multiple Channels

You can add multiple channels to the same connected Slack workspace. Repeat the channel setup to add additional channels to the same Slack workspace. Each channel is added separately and can be used as a destination for alert rules.

<img src={useBaseUrl('/img/integrations/slack/slack-10.png')} alt="Slack Integration"/>

## Remove a Slack Channel

If you no longer want a channel to receive Sauce Labs notifications, you can remove it from the connected workspace.

**Step 1:** On the Slack configuration page, find the channel you want to remove.

<img src={useBaseUrl('/img/integrations/slack/slack-10.png')} alt="Slack Integration"/>

**Step 2:** Select **Remove Channel** next to the channel. The channel is removed from the list of connected channels and is no longer available as a destination for Slack alerts. Alternatively, you can remove the saucebot from the channel to stop receiving alerts for it.

<img src={useBaseUrl('/img/integrations/slack/slack-11.png')} alt="Slack Integration"/>

:::note
Removing a channel does not disconnect the Slack workspace. Other channels connected to the same workspace remain configured.
:::

## Quick Alert Setup

Use **Quick Alert Setup** to create a Slack alert and define which Sauce Labs test results should be sent to a Slack channel.

<img src={useBaseUrl('/img/integrations/slack/slack-12.png')} alt="Slack Integration"/>

### Pick a Channel

Select the Slack channel where you want to receive notifications.

**Step 1:** Under **Pick Channel**, select the **Slack Channel** field and choose a channel from the list. Only channels that have already been added to your connected Slack workspace are available.

<img src={useBaseUrl('/img/integrations/slack/slack-13.png')} alt="Slack Integration"/>

**Step 2:** Select **Next** to continue.

<img src={useBaseUrl('/img/integrations/slack/slack-14.png')} alt="Slack Integration"/>

### Set Filters

Define which test results should trigger the alert.

**Step 1:** Enter a descriptive name in **Alert Name**.

<img src={useBaseUrl('/img/integrations/slack/slack-15.png')} alt="Slack Integration"/>

**Step 2:** Under **Event Types**, select how you want to be notified for each available automation type:

* **Don't alert**: Sauce Labs does not send notifications for this automation type.

* **Failed tests only**: Sauce Labs sends notifications only when a test fails.

* **All tests**: Sauce Labs sends notifications for all test results.

<img src={useBaseUrl('/img/integrations/slack/slack-16.png')} alt="Slack Integration"/>

**Step 3:** Use the **Tags** field to limit the alert to specific test results. Tags are optional. If you select one or more tags, the alert is triggered only for results that match the selected tags.

:::note
Only existing tags are available when configuring an alert. You cannot create a new tag from the alert setup page.
:::

<img src={useBaseUrl('/img/integrations/slack/slack-17.png')} alt="Slack Integration"/>

**Step 4:** After configuring the filters, select **Next**.

<img src={useBaseUrl('/img/integrations/slack/slack-18.png')} alt="Slack Integration"/>

### Review and Create the Alert

Review the alert configuration, including the **channel, alert name, event types, and tags**. If you need to make changes, return to the previous step and update the configuration.

When everything is correct, select **Create Alert**.

<img src={useBaseUrl('/img/integrations/slack/slack-19.png')} alt="Slack Integration"/>

The alert becomes active, and Sauce Labs sends notifications to the selected Slack channel when test results match the configured conditions.

<img src={useBaseUrl('/img/integrations/slack/slack-20.png')} alt="Slack Integration"/>

## Send Test Results to Slack

You can manually send a test result to a Slack channel directly from the **Test Details** page. This allows you to share a specific test result with your team without creating or modifying an alert rule.

The test result is sent to the selected Slack channel along with a link back to the result in Sauce Labs.

:::note
You must have a connected Slack workspace with an available channel before you can send a test result to Slack.
:::

**Step 1:** Open the **Test Details** page for the test result you want to share.

<img src={useBaseUrl('/img/integrations/slack/slack-21.png')} alt="Slack Integration"/>

**Step 2:** Select the **Actions** menu in the upper-right corner of the page, then select **Send to Slack**.

<img src={useBaseUrl('/img/integrations/slack/slack-22.png')} alt="Slack Integration"/>

**Step 3:** The **Send to Slack** dialog opens and displays the Slack workspace available for sending the test result. Select the **Channel** field and choose the Slack channel where you want to send the test result.

<img src={useBaseUrl('/img/integrations/slack/slack-23.png')} alt="Slack Integration"/>

The channel list shows the channels available in the connected Slack workspace. Channels where the Sauce Labs bot is not available are shown as unavailable and cannot be selected.

**Step 4:** Select **Send**. Sauce Labs sends the test result to the selected Slack channel. A confirmation message appears on the Test Details page indicating that the result was sent successfully.

<img src={useBaseUrl('/img/integrations/slack/slack-24.png')} alt="Slack Integration"/>

:::note
Manually sending a test result does not require an alert rule and does not change any existing alert configuration.
:::

## Create an Alert Rule

**Step 1:** Select your **profile icon** in the top-right corner, then select **Alerts**.

<img src={useBaseUrl('/img/integrations/slack/slack-25.png')} alt="Slack Integration"/>

**Step 2:** The **Alerts** page displays your existing alert rules and available Slack destinations. Select **Create Alert Rule** in the top-right corner.

<img src={useBaseUrl('/img/integrations/slack/slack-26.png')} alt="Slack Integration"/>

**Step 3:** The **Create Alert Rule** dialog opens. Configure the alert by providing the alert name, selecting the event types and Slack destinations, and optionally adding tags.

| Ref. | Field | Description |
| ----- | ----- | ----- |
| **1** | **Alert Name** | Enter a descriptive name to identify the alert rule when managing your alerts. |
| **2** | **Event Types** | Select the test results that should trigger the alert. For each available automation type, choose **Don't alert** to disable notifications, **Failed tests only** to receive notifications for failed tests, or **All tests** to receive notifications for all test results. |
| **3** | **Destinations** | Select one or more Slack channels where matching notifications should be sent. Only channels already added to your Slack integration are available. |
| **4** | **Tags** | Optionally select one or more existing tags to limit the alert to test results that match the selected tags. |

<img src={useBaseUrl('/img/integrations/slack/slack-27.png')} alt="Slack Integration"/>

:::note
Select one or more tags to filter test results. The alert is triggered for results that contain the selected tags.
:::

**Step 4:** Review the alert name, event types, destinations, and tags to make sure the configuration is correct. Select **Create Rule**.

<img src={useBaseUrl('/img/integrations/slack/slack-28.png')} alt="Slack Integration"/>

The alert rule is added to the **Alerts** page and becomes active. Sauce Labs sends notifications to the selected Slack channels when a test result matches the conditions configured in the rule.

## Disconnect a Slack Workspace

Disconnect a Slack workspace when you no longer want Sauce Labs to send notifications to that workspace. Disconnecting a workspace removes its connection from Sauce Labs and prevents the integration from sending alerts to its Slack channels.

On the Slack configuration page, locate the workspace you want to disconnect and select **Disconnect**.

<img src={useBaseUrl('/img/integrations/slack/slack-29.png')} alt="Slack Integration"/>

The workspace is disconnected from Sauce Labs, and the Slackbot integration is also disconnected from your Slack workspace. Other Slack workspaces connected to your Sauce Labs organization remain unaffected.