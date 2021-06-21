---
id: settings
title: Settings for Visual E2E Testing
sidebar_label: Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Learn about the different notifications that are available when a test run is completed. Notifications are only sent out when UI changes are found so users are not swamped with emails.

## Email Notifications
When a test run finds UI changes, an email notification is sent out containing a link to the test results. In the Dashboard, you can subscribe/unsubscribe to email notifications for a Test Group by toggling the checkbox.


## Slack Notifications
To add Screener notifications to your Slack channels: Start by setting up an incoming webhook integration in your Slack team.

On the incoming webhook configuration page, choose a channel to send notifications. Then click **Add Incoming Webhooks Integration**:



After submitting, you will be taken to a new page which has your unique Webhook URL, found under **Setup Instructions**. Copy the Webhook URL:



Go back to your Screener Dashboard, open the **Integrations** menu and click on **Webhooks**:



In the Manage Webhooks dialog, paste the Slack Webhook URL. Click **Add Webhook**, then click **Save**.



That's it! When your tests finish running, you will now receive Screener test notifications in your Slack channel:





:::tip If you want to reduce the number of notifications being sent, and trigger notifications only when changes are found, then append the following query-string to your webhook URL:

:::

```bash
?screener.filter.hasChanges=true
```

## Hipchat Notifications
To add Hipchat notifications, you will need to add a webhook similar to the Slack example above.

First, in your Hipchat **Home** page, click on **Group Admin** in the top menu (you will need to have group admin permissions). Next, in the **Group Admin** page, click on the **API** tab.



You may be asked to enter your password. Next, in the **API Auth Tokens** page, select **Notification** as the token type, add a label name for the token, and click on **Create token**. This will create a new API token. Copy your API token (auth_token).



Next, find the room ID for the chat room you want your test notifications posted to. Go back to the Hipchat user home page, then click the **Rooms** tab. From the list of rooms, click on the room name. Copy the room ID (API ID).



In Screener, add a Screener webhook. You will need to navigate to the Dashboard page. Click on **Webhooks**:


Add the Hipchat URL:

```
https://api.hipchat.com/v1/rooms/message?format=json&auth_token=[hipchat-api-token]&room_id=[hipchat-room-api-id]
```

Click **Add Webhook**, then click **Save**.



That's it! When a test run finds UI changes, you will now receive a notification in your Hipchat room with a link that takes you to the Screener test results.
