---
id: slack
title: Slack (Beta)
sidebar_label: Slack (Beta)
description: Connect Sauce Labs to Slack to send test results and alerts to your Slack channels.
unlisted: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Slack is a messaging platform that teams use to communicate and collaborate in channels. The Sauce Labs integration with Slack lets you send Sauce Labs test results and alerts directly to your Slack channels, so your team can see important results without having to continuously check the [Sauce Labs dashboard](/test-results/viewing-test-results/). The following sections explain how to set up the integration and use it with your Sauce Labs tests.

:::note
This page covers Slack notifications for Sauce Labs test results. To send Backtrace error reports to Slack, see **[Backtrace Integration for Slack](/error-reporting/workflow-integrations/messaging/slack/)**.
:::

## How It Works

You connect one or more Slack workspaces to your Sauce Labs organization by authorizing the Sauce Labs app in Slack. After a workspace is connected, you add the Slack channels that should receive notifications. Sauce Labs posts to those channels through the Sauce Labs app (saucebot), which must be a member of each channel.

You control which test results are sent by creating **alerts** in Sauce Labs. Each alert defines the destination channels, whether results are reported per test or per build, the test statuses that trigger a notification, whose test runs are included, and optional tag filters. When a test result matches an alert, Sauce Labs sends a notification to the selected channels, along with a link back to the result in Sauce Labs. You can also send a single test result to Slack manually from the **Test Details** page.

The integration is configured and managed entirely in Sauce Labs. You can use it to:

* Send test failures and errors to the appropriate team channels.
* Route results from different automation types to different channels.
* Send aggregated build results instead of individual messages for every test.
* Filter notifications by **[test status](/test-results/test-status)**, job owner, or **[tags](/basics/test-config-annotation/test-annotation/#use-build-ids-tags-and-names-to-identify-your-tests)**.
* Send a specific test result to Slack manually when investigating a failure.

## Prerequisites

Before you begin, make sure you have:

* Access to the Slack workspace that you want to connect to Sauce Labs.
* A Sauce Labs account with access to the [Integrations](https://app.saucelabs.com/integrations) page. See [Viewing Test Results](/test-results/viewing-test-results/) for where results appear before you route them to Slack.
* Permission to authorize apps in your Slack workspace. A Slack administrator may be required to authorize the Slack integration for your workspace.

## Authentication and Permissions

The Slack integration uses **Slack's app authorization** instead of an API key or token. When you connect a workspace, Slack asks you to authorize the Sauce Labs app and lists the permissions that the app requests:

<table>
  <thead>
    <tr>
      <th>Sr. No.</th>
      <th>Type</th>
      <th>Permission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">1</td>
      <td rowspan="2">Information Sauce Labs can view</td>
      <td>Content and info about channels and conversations</td>
    </tr>
    <tr>
      <td>Content and info about your workspace</td>
    </tr>
    <tr>
      <td rowspan="2">2</td>
      <td rowspan="2">Actions Sauce Labs can take</td>
      <td>Perform actions in channels and conversations</td>
    </tr>
    <tr>
      <td>Perform actions in your workspace</td>
    </tr>
  </tbody>
</table>

If your Slack workspace restricts app installations, a Slack administrator may need to approve the Sauce Labs app before you can connect the workspace.

To revoke access, [disconnect the workspace](#disconnect-a-slack-workspace) in Sauce Labs. This also disconnects saucebot from your Slack workspace.

## Set Up the Integration

Setting up the integration has three parts: install the Sauce Labs app in Slack, connect your Slack workspace in Sauce Labs, and add the channels that should receive notifications.

### Install the Sauce Labs App in Slack

**Step 1:** Sign in to the Slack workspace that you want to connect to Sauce Labs.

**Step 2:** From the Slack Marketplace, search for the Sauce Labs integration and install it.

**Step 3:** Add saucebot as a member of each public channel where you want to receive alerts.

**Step 4:** Return to Sauce Labs to connect the workspace.

### Connect Your Slack Workspace

You can connect multiple Slack workspaces to the same Sauce Labs organization. Connecting another workspace does not replace an existing workspace connection.

**Step 1:** Inside your Sauce Labs account, click on your **profile icon** in the top-right corner, and then select **[Integrations](https://app.saucelabs.com/integrations)** from the dropdown list.

<img src={useBaseUrl('/img/integrations/slack/slack-1.png')} alt="Integrations option in the profile menu"/>

**Step 2:** Find the **Slack** integration and click on **Configure**. The Slack configuration page opens. If you have not connected a workspace yet, the page provides the option to connect one.

<img src={useBaseUrl('/img/integrations/slack/slack-2.png')} alt="Slack integration on the Integrations page"/>

**Step 3:** Select **Connect Workspace**. This starts the process of connecting your Slack workspace to Sauce Labs.

<img src={useBaseUrl('/img/integrations/slack/slack-3.png')} alt="Connect Workspace button on the Slack configuration page"/>

**Step 4:** In the Slack authorization window, select the workspace you want to connect. If you belong to multiple Slack workspaces, make sure you select the workspace where you want to receive Sauce Labs notifications.

<img src={useBaseUrl('/img/integrations/slack/slack-4.png')} alt="Workspace selection in the Slack authorization window"/>

**Step 5:** Review the permissions requested by the Sauce Labs app. For what each permission covers, see [Authentication and Permissions](#authentication-and-permissions). If the selected workspace is correct, select **Allow** to authorize the app.

<img src={useBaseUrl('/img/integrations/slack/slack-5.png')} alt="Permissions requested by the Sauce Labs app in the Slack authorization window"/>

**Step 6:** After authorization is complete, you are redirected to Sauce Labs, and the Slack workspace is marked as **Connected**. Next, add the Slack channels that should receive notifications.

<img src={useBaseUrl('/img/integrations/slack/slack-6.png')} alt="Connected Slack workspace on the Slack Configuration page"/>

:::important Reconnect an existing workspace
If you authorize a workspace that is already connected, Sauce Labs does not create a duplicate workspace connection. Existing channels and alerts are preserved.
:::

### Add Slack Channels

Add the Slack channels where Sauce Labs will send test result notifications. You can add multiple channels to the same workspace and use them as destinations when creating alerts.

:::note
Only public channels available to the Sauce Labs Slack integration appear in the channel list.
:::

To add a Slack channel:

**Step 1:** In the connected workspace, select **Add Channel**.

<img src={useBaseUrl('/img/integrations/slack/slack-9.png')} alt="Add Channel button on the connected workspace card"/>

**Step 2:** In the **Add Channel** dialog, select the **Slack Channel** field to view the available channels, and then select the channel where you want to receive Sauce Labs notifications.

<img src={useBaseUrl('/img/integrations/slack/slack-10.png')} alt="Slack Channel field in the Add Channel dialog"/>

**Step 3:** Click **Add Channel**.

<img src={useBaseUrl('/img/integrations/slack/slack-11.png')} alt="Add Channel button in the Add Channel dialog"/>

**Result:** The channel appears in the **Channels** list, where it can be selected as a destination when you create an alert. To add more channels, repeat these steps. Each channel is added separately.

<img src={useBaseUrl('/img/integrations/slack/slack-12.png')} alt="Multiple Slack channels added to the same connected workspace"/>

## Verify the Integration

After setup, confirm the integration from both sides:

* **In Sauce Labs:** On the **[Slack Configuration](#slack-configuration-page)** page, the workspace card shows the **Connected** status, and the channels you added are listed under **Channels**. If the workspace is not connected, see [Connect Your Slack Workspace](#connect-your-slack-workspace). If a channel is missing, see [Add Slack Channels](#add-slack-channels).
* **In Slack:** Saucebot is a member of each channel you added. If it is not, see [Install the Sauce Labs App in Slack](#install-the-sauce-labs-app-in-slack).

If either check still fails, see [Troubleshooting](#troubleshooting).

## Send Test Results to Slack

After the integration is set up, you can send test results to Slack automatically by creating alerts, or manually from the **Test Details** page of a test.

### Create an Alert

An alert defines which Sauce Labs test results are sent to which Slack channels.

To create an alert:

**Step 1:** On the workspace card, select **Create Alert**.

<img src={useBaseUrl('/img/integrations/slack/slack-15.png')} alt="Create Alert button on the connected workspace card"/>

**Step 2:** Enter a descriptive name in **Alert Name**, such as `Critical QA failures`. Use a name that identifies the alert when you manage your alerts later.

**Step 3:** In **Channel(s) receiving notification**, select the Slack channels that should receive the notification. Only channels that have already been added to your connected Slack workspace are available.

**Step 4:** Under **Type of Reporting**, select **Build level** or **Test level**. See [Reporting Types](#reporting-types).

<img src={useBaseUrl('/img/integrations/slack/slack-16.png')} alt="Create Alert dialog showing Alert Name, notification channels, and Type of Reporting"/>

**Step 5:** Under **Trigger Conditions**, select the results that trigger the alert for each automation type. See [Trigger Conditions](#trigger-conditions).

<img src={useBaseUrl('/img/integrations/slack/slack-17.png')} alt="Trigger Conditions grouped by automation type in the Create Alert dialog"/>

**Step 6:** Use **Get Notified About Events From** to choose whose test events trigger the alert. This limits the alert to the test runs that are relevant to your team.

**Step 7:** (Optional) Use **Filter Tests By Tags** to limit the alert to specific test results. If you select one or more tags, the alert is triggered only for results that match the selected tags. When you select more than one tag, use **Match Rule** to define how the tags are combined:

| Match Rule | Description |
| ----- | ----- |
| **Match any tag (OR)** | Tests matching at least one of the selected tags send a notification. |
| **Match all tags (AND)** | Tests must match every selected tag before a notification is sent. |

:::note
Only existing tags are available when you create an alert. You cannot create a new tag from the **Create Alert** dialog.
:::

<img src={useBaseUrl('/img/integrations/slack/slack-18.png')} alt="Get Notified About Events From and Filter Tests By Tags fields with the Match Rule options"/>

**Step 8:** Review the alert name, channels, reporting type, trigger conditions, and filters, and then select **Create Alert**.

<img src={useBaseUrl('/img/integrations/slack/slack-19.png')} alt="Create Alert button at the bottom of the Create Alert dialog"/>

**Result:** The alert becomes active, and Sauce Labs sends notifications to the selected Slack channels when test results match the configured conditions. The channel entries in the **Channels** list are updated to reflect the number of **Active Alerts**.

### Manage Alerts

You can also review and create alerts from the **Alerts** page.

**Step 1:** Select your **profile icon** in the top-right corner, and then select **Alerts**.

<img src={useBaseUrl('/img/integrations/slack/slack-24.png')} alt="Alerts option in the profile menu"/>

**Step 2:** The **Alerts** page displays your existing alerts and available Slack destinations. To add an alert, select **Create Alert** in the top-right corner and complete the same fields described in [Create an Alert](#create-an-alert).

<img src={useBaseUrl('/img/integrations/slack/slack-25.png')} alt="Alerts page listing configured alerts with their status, destination, and trigger conditions"/>

**Result:** The alert is added to the **Alerts** page and becomes active. Sauce Labs sends notifications to the selected Slack channels when a test result matches the configured conditions.

### Send a Test Result Manually

You can manually send a test result to a Slack channel from the **Test Details** page. This lets you share a specific test result with your team without creating or modifying an alert.

:::note
You must have a connected Slack workspace with an available channel before you can send a test result to Slack. Manually sending a test result does not require an alert and does not change any existing alert configuration.
:::

To send a test result to Slack:

**Step 1:** Open the **Test Details** page for the test result you want to share.

<img src={useBaseUrl('/img/integrations/slack/slack-20.png')} alt="Test Details page"/>

**Step 2:** Select the **Actions** menu in the upper-right corner of the page, and then select **Send to Slack**.

<img src={useBaseUrl('/img/integrations/slack/slack-21.png')} alt="Send to Slack option in the Actions menu"/>

**Step 3:** In the **Send to Slack** dialog, select the **Channel** field and choose the Slack channel where you want to send the test result. Channels where saucebot is not available are shown as unavailable and cannot be selected.

<img src={useBaseUrl('/img/integrations/slack/slack-22.png')} alt="Channel field in the Send to Slack dialog"/>

**Step 4:** Select **Send**.

<img src={useBaseUrl('/img/integrations/slack/slack-23.png')} alt="Confirmation message after sending a test result to Slack"/>

**Result:** A confirmation message appears on the **Test Details** page, and the test result appears in the selected Slack channel along with a link back to the result in Sauce Labs.

## Manage the Integration

Use the Slack configuration page to review your connected workspaces and channels, remove channels, or disconnect a workspace.

### Slack Configuration Page

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

### Remove a Slack Channel

If you no longer want a channel to receive Sauce Labs notifications, remove it from the connected workspace.

**Step 1:** In the **Channels** list on the Slack configuration page, find the channel you want to remove.

<img src={useBaseUrl('/img/integrations/slack/slack-13.png')} alt="More options menu available for each channel in the Channels list"/>

**Step 2:** Select the **&#8943;** (More options) menu next to the channel, and then select **Remove channel**.

<img src={useBaseUrl('/img/integrations/slack/slack-14.png')} alt="Remove channel option in the channel More options menu"/>

**Result:** The channel is removed from the list of connected channels and is no longer available as a destination for Slack alerts. Alternatively, you can remove saucebot from the channel in Slack to stop receiving alerts in it.

:::note
Removing a channel does not disconnect the Slack workspace. Other channels connected to the same workspace remain configured.
:::

### Disconnect a Slack Workspace

Disconnect a Slack workspace when you no longer want Sauce Labs to send notifications to that workspace. Disconnecting a workspace removes its connection from Sauce Labs and prevents the integration from sending alerts to its Slack channels.

**Step 1:** On the Slack configuration page, locate the workspace you want to disconnect.

**Step 2:** Select the **&#8943;** (More options) menu on the workspace card, and then select **Disconnect**.

<img src={useBaseUrl('/img/integrations/slack/slack-26.png')} alt="Disconnect option in the workspace More options menu"/>

**Result:** The workspace is disconnected from Sauce Labs, and saucebot is also disconnected from your Slack workspace. Other Slack workspaces connected to your Sauce Labs organization remain unaffected.

## Alert Reference

Each alert combines two settings that control what your Slack channels receive. The **reporting type** controls how results are grouped into messages, and the **trigger conditions** control which test results send a notification. Use the following sections to choose the options that match how your team reviews test results when you [create an alert](#create-an-alert).

### Reporting Types

| Reporting Type | Description |
| ----- | ----- |
| **Build level** | Sauce Labs sends one aggregated notification for the build instead of a message for each test. |
| **Test level** | Sauce Labs sends a notification for each individual test result. |

### Trigger Conditions

Trigger conditions are grouped by automation type, so you can send different results from different automation types to the same channel:

* **Real Device Automation**: Tests that run on real devices.
* **Virtual Device Automation**: Tests that run on emulators and simulators.
* **All Automation**: Tests from all automation types.

For each automation type, you can select one or more of the following conditions:

| Event | Description |
| ----- | ----- |
| **Failed tests only** | Sauce Labs sends a notification only when a test fails. |
| **Errored tests only** | Sauce Labs sends a notification only when a test ends in an error. |
| **Passed tests only** | Sauce Labs sends a notification only when a test passes. |
| **All tests** | Sauce Labs sends a notification for every test result, regardless of status. |

## Troubleshooting

If the Slack integration does not work as expected, use the following solutions to resolve common issues.

<details>
<summary><strong>You cannot authorize the Sauce Labs app in Slack</strong></summary>

Your Slack workspace may require administrator approval for apps. Contact a Slack administrator to authorize the Slack integration for your workspace.

</details>

<details>
<summary><strong>A channel does not appear in the Add Channel list</strong></summary>

Only public channels available to the Sauce Labs Slack integration appear in the list. Make sure the channel is public and that saucebot is a member of the channel.

</details>

<details>
<summary><strong>A channel is shown as unavailable in the Send to Slack dialog</strong></summary>

Saucebot is not available in that channel. Add saucebot as a member of the channel in Slack, and then try again.

</details>

<details>
<summary><strong>A channel stopped receiving alerts</strong></summary>

Check that the channel is still listed on the Slack configuration page and that saucebot is still a member of the channel. Removing either one stops alerts for that channel.

</details>

<details>
<summary><strong>Notifications are not sent for some test results</strong></summary>

Review the alert's **Trigger Conditions**, **Get Notified About Events From**, and **Filter Tests By Tags** settings. If you use multiple tags with **Match all tags (AND)**, a test must match every selected tag before a notification is sent.

</details>

<details>
<summary><strong>A tag is not available in the Create Alert dialog</strong></summary>

Only existing tags can be selected. Add the tag to your tests first. See [Test Annotation](/basics/test-config-annotation/test-annotation/#use-build-ids-tags-and-names-to-identify-your-tests).

</details>

## Next Steps

* Learn how to read your results in [Viewing Test Results](/test-results/viewing-test-results/).
* Learn what each status means in [Test Status](/test-results/test-status).
* Add tags to your tests so you can filter alerts. See [Test Annotation](/basics/test-config-annotation/test-annotation/#use-build-ids-tags-and-names-to-identify-your-tests).
* Send Backtrace error reports to Slack with [Backtrace Integration for Slack](/error-reporting/workflow-integrations/messaging/slack/).
