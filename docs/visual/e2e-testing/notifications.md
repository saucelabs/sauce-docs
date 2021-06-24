---
id: notifications
title: Visual E2E Testing Notifications
sidebar_label: Notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Learn about the different notifications that are available when a test run is completed. Notifications are only sent out when UI changes are found so users are not swamped with emails.

## Email Notifications
When a test run finds UI changes, an email notification is sent out containing a link to the test results. In the Dashboard, you can subscribe/unsubscribe to email notifications for a Test Group by toggling the checkbox.
<img src={useBaseUrl('img/visual/e2e-email-subscribe.png')} alt="E2E Email Subscribe"/>


## Slack Notifications
To add Screener notifications to your Slack channels: Start by setting up an [incoming webhook integration](https://my.slack.com/services/new/incoming-webhook/) in your Slack team.

On the [incoming webhook configuration](https://my.slack.com/services/new/incoming-webhook/) page, choose a channel to send notifications. Then click **Add Incoming Webhooks Integration**:
<img src={useBaseUrl('img/visual/e2e-slack-config-integrations.png')} alt="E2E Slack Configuration"/>


After submitting, you will be taken to a new page which has your unique Webhook URL, found under **Setup Instructions**. Copy the Webhook URL:
<img src={useBaseUrl('img/visual/e2e-slack-webhook-url.png')} alt="E2E Slack Webhook Configuration"/>

Go back to your Screener Dashboard, open the **Integrations** menu > Click **Webhooks**.

<img src={useBaseUrl('img/visual/e2e-overview-activity-webhook-menu.png')} alt="E2E Slack Webhook Configuration"/>


In the Manage Webhooks dialog, paste the Slack Webhook URL. Click **Add Webhook**, then click **Save**.
<img src={useBaseUrl('img/visual/e2e-add-webhook.png')} alt="E2E Add Webhook"/>


That's it! When your tests finish running, you will now receive Screener test notifications in your Slack channel:

<img src={useBaseUrl('img/visual/e2e-slack-notification.png')} alt="E2E Add Webhook"/>


:::tip
If you want to reduce the number of notifications being sent, and trigger notifications only when changes are found, then append the following query-string to your webhook URL:

```bash
?screener.filter.hasChanges=true
```

:::


## HipChat Notifications

To add HipChat notifications, you will need to add a webhook similar to the Slack example above.

First, in your HipChat **Home** page, click on **Group Admin** in the top menu (you will need to have group admin permissions). Next, in the **Group Admin** page, click on the **API** tab.

<img src={useBaseUrl('img/visual/e2e-hipchat-settings-menu.png')} alt="E2E HipChat"/>

You may be asked to enter your password. Next, in the **API Auth Tokens** page, select **Notification** as the token type, add a label name for the token, and click on **Create token**. This will create a new API token. Copy your API token (auth_token).

<img src={useBaseUrl('img/visual/e2e-hipchat-api-token.png')} alt="E2E HipChat API Token"/>


Next, find the room ID for the chat room you want your test notifications posted to. Go back to the HipChat user home page, then click the **Rooms** tab. From the list of rooms, click on the room name. Copy the room ID (API ID).
<img src={useBaseUrl('img/visual/e2e-hipchat-room-id.png')} alt="E2E HipChat Room"/>

In Screener, add a Screener webhook. You will need to navigate to the Dashboard page. Click on **Webhooks**:
<img src={useBaseUrl('img/visual/e2e-overview-activity-webhook-menu.png')} alt="E2E Overview Webhook Menu"/>

Add the HipChat URL:

```bash
https://api.hipchat.com/v1/rooms/message?format=json&auth_token=[hipchat-api-token]&room_id=[hipchat-room-api-id]
```

Click **Add Webhook**, then click **Save**.

<img src={useBaseUrl('img/visual/e2e-add-webhook.png')} alt="E2E Add Webhook"/>

That's it! When a test run finds UI changes, you will now receive a notification in your HipChat room with a link that takes you to the Screener test results.
