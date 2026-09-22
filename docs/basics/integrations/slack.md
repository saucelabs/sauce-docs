---
id: slack
title: Slack (Beta)
sidebar_label: Slack (Beta)
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Slack integration** allows you to send Sauce Labs test results and alerts directly to Slack. You can connect one or more Slack workspaces, choose the channels that should receive notifications, and configure alerts to control which test results are sent.

Slack notifications help your team see important test results without having to continuously check the [Sauce Labs dashboard](/test-results/viewing-test-results/). You can configure alerts to send only the results that your team needs to act on, such as failed or errored tests.

:::note
This page covers Slack notifications for Sauce Labs test results. To send Backtrace error reports to Slack, see **[Backtrace Integration for Slack](/error-reporting/workflow-integrations/messaging/slack/)**.
:::

You can use the Slack integration to:

* Send test failures and errors to the appropriate team channels.
* Route results from different automation types to different channels.
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

**Step 6:** After authorization is complete, you are redirected to Sauce Labs, and the Slack workspace is marked as **Connected**. Once connected, you can add Slack channels and create alerts to determine which test results are sent to Slack.

:::note
You can connect multiple Slack workspaces to the same Sauce Labs organization. Connecting another workspace does not replace an existing workspace connection.
:::

<img src={useBaseUrl('/img/integrations/slack/slack-6.png')} alt="Connected Slack workspace on the Slack Configuration page"/>

:::important Reconnect an existing workspace
If you authorize a workspace that is already connected, Sauce Labs does not create a duplicate workspace connection. Existing channels and alerts are preserved.
:::

## Slack Configuration Page

The **Slack Configuration** page shows every connected workspace and the channels that receive Sauce Labs notifications. Use this page to add channels, create alerts, and manage the workspace connection.

The workspace card displays the workspace name, its **Connected** status, and the connection details, including the date the workspace was connected, the user who connected it, and the **Workspace ID**. The card also provides the following actions:

| Ref. | Action | Description |
| ----- | ----- | ----- |
| 1 | **Create Alert** | Opens the **Create Alert** dialog, where you define which test results are sent to which Slack channels. See [Create an Alert](#create-an-alert). |
| 2 | **Add Channel** | Adds a Slack channel to the connected workspace so that it can receive notifications. See [Add Slack Channels](#add-slack-channels). |
| 3 | **&#8943;** (More options) | Opens the workspace menu, which contains the **Disconnect** option. See [Disconnect a Slack Workspace](#disconnect-a-slack-workspace). |

<img src={useBaseUrl('/img/integrations/slack/slack-7.png')} alt="Workspace card actions: Create Alert, Add Channel, and More options"/>

The **Channels** section lists the Slack channels that receive alert notifications, along with the total number of connected channels. Each channel entry shows:

* The channel name.
* The date the channel was added and the user who added it.
* The number of **Active Alerts** currently configured for the channel. Expand the channel entry to view the alerts associated with it.
* A **&#8943;** (More options) menu that contains the **Remove channel** option.

Use the **Search channels** field to filter the list when a workspace has many connected channels.

<img src={useBaseUrl('/img/integrations/slack/slack-8.png')} alt="Channels section listing the Slack channels that receive alert notifications"/>


## Add Slack Channels

After connecting a Slack workspace, you can add Slack channels where Sauce Labs will send test result notifications. You can add multiple channels to the same workspace and use them as destinations when creating alerts.

:::note
Only public channels available to the Sauce Labs Slack integration appear in the channel list.
:::

**Step 1:** In the connected workspace, select **Add Channel**.

<img src={useBaseUrl('/img/integrations/slack/slack-9.png')} alt="Add Channel button on the connected workspace card"/>

**Step 2:** The **Add Channel** dialog opens. Select the **Slack Channel** field to view the available channels. Select the Slack channel where you want to receive Sauce Labs notifications.

<img src={useBaseUrl('/img/integrations/slack/slack-10.png')} alt="Slack Integration"/>

**Step 3:** After selecting the channel, click on **Add Channel**. The selected channel is added to the connected workspace and appears in the **Channels** list, where it can be selected as a destination when you create an alert.

<img src={useBaseUrl('/img/integrations/slack/slack-11.png')} alt="Slack Integration"/>

### Add Multiple Channels

You can add multiple channels to the same connected Slack workspace. Repeat the channel setup to add additional channels. Each channel is added separately and can be used as a destination for alerts.

<img src={useBaseUrl('/img/integrations/slack/slack-12.png')} alt="Multiple Slack channels added to the same connected workspace"/>

## Remove a Slack Channel

If you no longer want a channel to receive Sauce Labs notifications, you can remove it from the connected workspace.

**Step 1:** In the **Channels** list on the Slack configuration page, find the channel you want to remove.

<img src={useBaseUrl('/img/integrations/slack/slack-13.png')} alt="More options menu available for each channel in the Channels list"/>

**Step 2:** Select the **&#8943;** (More options) menu next to the channel, and then select **Remove channel**. The channel is removed from the list of connected channels and is no longer available as a destination for Slack alerts. Alternatively, you can remove the saucebot from the channel to stop receiving alerts for it.

<img src={useBaseUrl('/img/integrations/slack/slack-14.png')} alt="Remove channel option in the channel More options menu"/>

:::note
Removing a channel does not disconnect the Slack workspace. Other channels connected to the same workspace remain configured.
:::

## Create an Alert

An alert defines which Sauce Labs test results are sent to which Slack channels. Select **Create Alert** on the workspace card to open the **Create Alert** dialog and configure automated notifications for your test runs.

<img src={useBaseUrl('/img/integrations/slack/slack-15.png')} alt="Create Alert button on the connected workspace card"/>

**Step 1:** Enter a descriptive name in **Alert Name**, such as `Critical QA failures`. Use a name that makes the alert easy to identify when you manage your alerts later.

**Step 2:** In **Channel(s) receiving notification**, select the Slack channels that should receive the notification. Only channels that have already been added to your connected Slack workspace are available.

**Step 3:** Under **Type of Reporting**, select how results are reported:

* **Build level**: Sauce Labs sends one aggregated notification for the build instead of a message for each test.

* **Test level**: Sauce Labs sends a notification for each individual test result.

<img src={useBaseUrl('/img/integrations/slack/slack-16.png')} alt="Create Alert dialog showing Alert Name, notification channels, and Type of Reporting"/>

**Step 4:** Under **Trigger Conditions**, select the results that trigger the alert. Conditions are grouped by automation type, so you can send different results from different automation types to the same channel:

* **Real Device Automation**: Tests that run on real devices.

* **Virtual Device Automation**: Tests that run on emulators and simulators.

* **All Automation**: Tests from all automation types.

For each automation type, select one or more of the following conditions:

| Sr. No. | Condition | Description |
| ----- | ----- | ----- |
| 1 | **Failed tests only** | Sauce Labs sends a notification only when a test fails. |
| 2 | **Errored tests only** | Sauce Labs sends a notification only when a test ends in an error. |
| 3 | **Passed tests only** | Sauce Labs sends a notification only when a test passes. |
| 4 | **All tests** | Sauce Labs sends a notification for every test result, regardless of status. |

<img src={useBaseUrl('/img/integrations/slack/slack-17.png')} alt="Trigger Conditions grouped by automation type in the Create Alert dialog"/>

**Step 5:** Use **Get Notified About Events From** to choose whose test events trigger the alert. This limits the alert to the test runs that are relevant to your team.

**Step 6:** Use **Filter Tests By Tags** to limit the alert to specific test results. Tags are optional. If you select one or more tags, the alert is triggered only for results that match the selected tags.

When you select more than one tag, use **Match Rule** to define how the tags are combined:

| Sr. No. | Match Rule | Description |
| ----- | ----- | ----- |
| 1 | **Match any tag (OR)** | Tests matching at least one of the selected tags send a notification. |
| 2 | **Match all tags (AND)** | Tests must match every selected tag before a notification is sent. |

:::note
Only existing tags are available when you create an alert. You cannot create a new tag from the **Create Alert** dialog.
:::

<img src={useBaseUrl('/img/integrations/slack/slack-18.png')} alt="Get Notified About Events From and Filter Tests By Tags fields with the Match Rule options"/>

**Step 7:** Review the alert name, channels, reporting type, trigger conditions, and filters. When everything is correct, select **Create Alert**.

<img src={useBaseUrl('/img/integrations/slack/slack-19.png')} alt="Create Alert button at the bottom of the Create Alert dialog"/>

The alert becomes active, and Sauce Labs sends notifications to the selected Slack channels when test results match the configured conditions. The channel entries in the **Channels** list are updated to reflect the number of **Active Alerts**.

## Send Test Results to Slack

You can manually send a test result to a Slack channel directly from the **Test Details** page. This allows you to share a specific test result with your team without creating or modifying an alert.

The test result is sent to the selected Slack channel along with a link back to the result in Sauce Labs.

:::note
You must have a connected Slack workspace with an available channel before you can send a test result to Slack.
:::

**Step 1:** Open the **Test Details** page for the test result you want to share.

<img src={useBaseUrl('/img/integrations/slack/slack-20.png')} alt="Slack Integration"/>

**Step 2:** Select the **Actions** menu in the upper-right corner of the page, then select **Send to Slack**.

<img src={useBaseUrl('/img/integrations/slack/slack-21.png')} alt="Slack Integration"/>

**Step 3:** The **Send to Slack** dialog opens and displays the Slack workspace available for sending the test result. Select the **Channel** field and choose the Slack channel where you want to send the test result.

<img src={useBaseUrl('/img/integrations/slack/slack-22.png')} alt="Slack Integration"/>

The channel list shows the channels available in the connected Slack workspace. Channels where the Sauce Labs bot is not available are shown as unavailable and cannot be selected.

**Step 4:** Select **Send**. Sauce Labs sends the test result to the selected Slack channel. A confirmation message appears on the Test Details page indicating that the result was sent successfully.

<img src={useBaseUrl('/img/integrations/slack/slack-23.png')} alt="Slack Integration"/>

:::note
Manually sending a test result does not require an alert and does not change any existing alert configuration.
:::

## Manage Alerts

You can also review and create alerts from the **Alerts** page.

**Step 1:** Select your **profile icon** in the top-right corner, then select **Alerts**.

<img src={useBaseUrl('/img/integrations/slack/slack-24.png')} alt="Slack Integration"/>

**Step 2:** The **Alerts** page displays your existing alerts and available Slack destinations. To add an alert, select **Create Alert** in the top-right corner and complete the same fields described in [Create an Alert](#create-an-alert).

<img src={useBaseUrl('/img/integrations/slack/slack-25.png')} alt="Alerts page listing configured alerts with their status, destination, and trigger conditions"/>

The alert is added to the **Alerts** page and becomes active. Sauce Labs sends notifications to the selected Slack channels when a test result matches the configured conditions.

## Disconnect a Slack Workspace

Disconnect a Slack workspace when you no longer want Sauce Labs to send notifications to that workspace. Disconnecting a workspace removes its connection from Sauce Labs and prevents the integration from sending alerts to its Slack channels.

On the Slack configuration page, locate the workspace you want to disconnect, select the **&#8943;** (More options) menu on the workspace card, and then select **Disconnect**.

<img src={useBaseUrl('/img/integrations/slack/slack-26.png')} alt="Disconnect option in the workspace More options menu"/>

The workspace is disconnected from Sauce Labs, and the Slackbot integration is also disconnected from your Slack workspace. Other Slack workspaces connected to your Sauce Labs organization remain unaffected.
