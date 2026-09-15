---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Webhooks let you receive real-time HTTP notifications when events happen in your organization — like a new build being uploaded, a build being downloaded, or a new iOS device being registered.

:::info
Only Account Owners and Org Admins can manage webhooks. Find them under **Webhooks** in the sidebar's Developer section.
:::

## Supported Events

| Event | Description |
| --- | --- |
| `upload` | A new build is uploaded to an app. |
| `download` | A build is downloaded by a tester or team member. |
| `new-udid` | A new iOS device is registered via the device enrollment profile. |

## Creating a Webhook

1. Go to **Webhooks** in the sidebar.
2. Click **New Webhook**.
3. Enter a name and the destination URL.
4. Select which events should trigger this webhook.
5. Optionally select specific apps — leave unchecked to trigger for all apps.
6. Click **Create Webhook**.

## Testing

Use the **Test** button next to the URL field to send a sample payload to your endpoint. This lets you verify connectivity before saving.

## Payload Format

Webhooks are sent as `POST` requests with a JSON body. The payload includes event-specific fields:

### `upload` event

```json
{
  "event": "upload",
  "timestamp": "2026-03-26 14:30:00",
  "appName": "My App",
  "version": "1.2.3",
  "build": "42",
  "platform": "ios",
  "buildId": 123,
  "filesize": 15728640,
  "buildUrl": "https://your-instance.testfairy.com/projects/61545",
  "landingPageUrl": "https://your-instance.testfairy.com/install/8f3c2a1b9d4e3b2c",
  "landingPageBuildUrl": "https://your-instance.testfairy.com/install/9d4e3b2c8f3c2a1b",
  "appUrl": "https://your-instance.testfairy.com/install/9d4e3b2c8f3c2a1b/download",
  "changeLog": "Fixed login crash on startup."
}
```

### `download` event

```json
{
  "event": "download",
  "timestamp": "2026-03-26 14:30:00",
  "appName": "My App",
  "version": "1.2.3",
  "build": "42",
  "platform": "android",
  "buildId": 123,
  "testerEmail": "tester@example.com",
  "ipAddress": "1.2.3.4"
}
```

### `new-udid` event

```json
{
  "event": "new-udid",
  "timestamp": "2026-03-26 14:30:00",
  "udid": "00008030-00123456789ABCDE",
  "device": "iPhone 15 Pro",
  "email": "tester@example.com",
  "platform": "ios"
}
```

## Slack & MS Teams

Webhook URLs are automatically detected and formatted for:

- **Slack** — URLs containing `hooks.slack.com` receive a Slack-formatted message with a `text` field.
- **Microsoft Teams** — URLs containing `outlook.office.com` or `webhook.office.com` receive a MessageCard-formatted payload.
- **Other URLs** — Receive the raw JSON payload with `Content-Type: application/json`.

## Setting Up Slack Notifications

To receive Mobile App Distribution notifications in a Slack channel:

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and click **Create New App** → **From scratch**.
2. Name the app (e.g. `Mobile App Distribution Notifications`) and select your Slack workspace.
3. Go to **Incoming Webhooks** in the left sidebar and toggle it **On**.
4. Click **Add New Webhook to Workspace**, pick the channel you want notifications in, and click **Allow**.
5. Copy the **Webhook URL** (starts with `https://hooks.slack.com/services/...`).
6. In Mobile App Distribution, go to **Webhooks** → **New Webhook**, paste the URL, select your events, and save.
7. Click **Test** to verify — you should see a test message in your Slack channel.

## App Filtering

By default, a webhook fires for events across all apps in your organization. You can restrict it to specific apps by selecting them during webhook creation or editing.

## Enabling / Disabling

Use the toggle switch on the webhooks list to temporarily suspend a webhook without deleting it. Suspended webhooks will not fire for any events.
