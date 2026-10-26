---
id: jira-cloud
title: Creating Jira Issues from Tester Feedback
sidebar_label: Jira Cloud
description: Connect Sauce Labs Mobile App Distribution to Jira Cloud and turn tester feedback into Jira issues that link to the feedback and its session recording.
---

:::info Beta release
The Sauce Mobile Beta SDK is in beta. The Jira integration described on this page can change before general availability. Share feedback with your Sauce Labs representative.
:::

Connect Sauce Labs Mobile App Distribution to Jira Cloud to turn tester feedback into Jira issues. Each issue links to the feedback and its session recording, carries the feedback screenshot as an attachment, and fills Jira fields with values from the session, such as the device, the OS version, and the app version.

You can create an issue for a feedback item by hand, or have Sauce Labs create one automatically for every new feedback item of an app.

Setting up Jira takes three steps:

1. [Create an Atlassian API token](#step-1-create-an-atlassian-api-token).
2. [Connect Jira to your organization](#step-2-connect-jira-to-your-organization).
3. [Set up Jira for each app](#step-3-set-up-jira-for-an-app).

## What You'll Need

- The Account Owner or Org Admin role in Sauce Labs Mobile App Distribution.
- A Jira Cloud account that can create issues in the Jira project you want to use.
- A Jira site that is reachable from the internet over HTTPS. Sauce Labs cannot connect to a Jira site on a private network or to a Jira URL that uses an IP address.
- Sauce Mobile Beta enabled for your organization. If **Jira** is not listed on the **Integrations** page, contact your Sauce Labs representative.

## Step 1: Create an Atlassian API Token

Sauce Labs signs in to Jira with your Atlassian account email address and an API token.

1. Sign in to [Atlassian API tokens](https://id.atlassian.com/manage/api-tokens) with the Jira account Sauce Labs should use.
2. Click **Create API token**.
3. Enter a label, such as `Sauce Labs Mobile App Distribution`, and click **Create**.
4. Copy the token. Atlassian shows it only once.

Issues that Sauce Labs creates are created by this account. Use an account that has permission to create issues and add attachments in your Jira projects.

## Step 2: Connect Jira to Your Organization

1. In Sauce Labs Mobile App Distribution, click your profile icon and then **Integrations**.
2. In the **Jira** row, click **Connect**.
3. Under **Credentials**, enter:
   - **Jira URL**: the address of your Jira site, such as `https://your-domain.atlassian.net`. It must start with `https://`.
   - **Email**: the email address of the Jira account the API token belongs to.
   - **Atlassian API Token**: the token you created in Step 1.
4. Optional: click **Test Connection** to check the values against Jira without saving them.
5. Click **Connect Jira**.

Sauce Labs checks the credentials against Jira before it saves them. When the check passes, you see "Connected to Jira as" followed by the name of the Jira account, and the **Connection Status** card shows **Connected**.

Your organization can connect one Jira site. Sauce Labs stores the API token encrypted and never shows it again.

### Changing or Removing the Connection

- **New API token.** Paste the new token in **Atlassian API Token** and click **Save Changes**. To keep the stored token, leave the field empty.
- **Different Jira site.** Enter the new **Jira URL**, enter the API token again, and click **Save Changes**. Saving a different Jira URL deletes the Jira setups of your apps, because they belong to the old site.
- **Disconnect.** Click **Disconnect Jira** and confirm. Sauce Labs deletes the stored URL, account, and API token. Nothing in Jira changes. Your apps' Jira setups are kept, and they work again if you reconnect the same Jira site.

## Step 3: Set Up Jira for an App

Each app has its own Jira setup: the Jira project its issues go to, the issue type, labels, and how each Jira field is filled.

1. Open the app and click **SDK Settings**.
2. Click **Jira**.
3. Under **1. Jira project**, choose or type the project key, such as `MOB`, and click **Next**. The list shows up to 250 projects. To use another project, type its key.
4. Under **2. Issue type**, choose the issue type and click **Next**.
5. Under **3. Fields**, set the values for the issue fields. See [Mapping Jira Fields](#mapping-jira-fields).
6. Click **Save Jira settings**.

The page then shows **Active** and the project and issue type the app's issues go to.

To check the setup, click **Test**. Sauce Labs creates a real issue in your Jira project, filled with sample values, with `[MAD test]` at the start of the summary. The test issue does not include the links to the feedback and the session, or a screenshot. Delete it in Jira when you are done.

To stop using Jira for the app, click **Deactivate** and confirm. This deletes the app's field mapping.

### Mapping Jira Fields

The **3. Fields** table lists the fields of the issue type you chose. For each field, enter a value. Fields that Jira requires are marked **Required by Jira**. Under each field, a preview shows what an issue will get.

- **Labels.** Enter up to 20 labels, separated by commas or spaces, such as `mad, beta-feedback`. They are added to every issue.
- **Text fields**, such as **Summary** and **Description**, take text mixed with values from the session and the feedback. Write a value as `{name}`, or as `{name || default}` to use a default when the value is empty. Use **+ Value** next to the field to insert one. A field holds up to 4,000 characters.
- **Single-choice fields**, such as select lists, radio buttons, and **Priority**, take one of the field's options.

There is no default summary. Map **Summary**, and every other field Jira requires, before you save. A required field that ends up empty stops the issue from being created, rather than creating an incomplete issue.

For example, to put the app and the feedback in the summary and the device details in the description:

```text
Summary:      [{app.name} {app.fullVersion}] {feedback.text}
Description:  {feedback.text}

              Device: {device.model}, {device.os} {device.osVersion}
              User: {user.id || anonymous}
              Submitted {feedback.relTimestamp} into the session
```

### Values You Can Use

| Value | What it contains |
| :--- | :--- |
| `{user.id}` | The tester: the user ID your app reports, otherwise the tester's email address. |
| `{session.id}` | The session ID. |
| `{session.url}` | A link to the session on the dashboard. The reader must sign in. |
| `{session.timestamp}` | When Sauce Labs received the session, in UTC, ISO 8601. |
| `{session.duration}` | The session length, such as `12m 05s`. |
| `{session.cid}` | The correlation ID your app set. |
| `{session.ipAddress}` | The IP address the session came from. |
| `{session.country}` | The country code the session came from, such as `DE`. |
| `{device.model}` | The device manufacturer and model. |
| `{device.os}` | `iOS` or `Android`. |
| `{device.osVersion}` | The OS version. |
| `{device.memory}` | The total device memory, such as `5.8 GB`. |
| `{device.language}` | The device language, such as `en`. |
| `{app.name}` | The app name. |
| `{app.version}` | The app version. |
| `{app.fullVersion}` | The app version with the build number, such as `2.1.0 (431)`. |
| `{sdk.version}` | The Sauce Mobile Beta SDK version in the app. |
| `{feedback.text}` | The text the tester wrote. |
| `{feedback.timestamp}` | When the tester submitted the feedback, in UTC, ISO 8601. |
| `{feedback.relTimestamp}` | How far into the session the tester submitted the feedback, as `mm:ss`. |
| `{attr.NAME}` | A session attribute or user data value your app set, where `NAME` is its name. If both exist with the same name, the user data value is used. See [Session Attributes](/app-distribution/sdk/session-attributes/). |

## Creating Issues

Each feedback item can have one Jira issue. Issues are created from feedback only, not from sessions.

### By Hand

On the **Feedback** page, click **Create Jira** in the **Jira** column of a feedback item. You can also click **Create Jira** at the top of a feedback page. See [Viewing Feedback](/app-distribution/sdk/viewing-feedback/). Account Owners, Org Admins, and Members can create issues.

### Automatically

To create an issue for every new feedback item of an app:

1. Set up Jira for the app, as described in [Step 3](#step-3-set-up-jira-for-an-app).
2. Open the app and click **SDK Settings**.
3. Under **Bug System**, turn on **Automatically create issue on session feedback**.
4. Click **Save SDK Settings**.

Sauce Labs creates an issue for each feedback item that arrives after you turn this on, including feedback submitted outside a recorded session. Feedback that arrived earlier keeps its **Create Jira** button.

Sauce Labs does not create issues for duplicate feedback or for feedback from the Google Play pre-launch report.

## What the Issue Contains

- The project, issue type, and labels from the app's Jira setup.
- The field values from the app's field mapping. The summary is kept to one line of up to 255 characters.
- Links added to the end of the description:

  ```text
  Session replay, logs and screenshots: <link>
  Feedback: <link>
  These links open without a MAD account.
  ```

  Feedback submitted outside a recorded session gets only the feedback link.
- The feedback screenshot, attached as `feedback-<id>-screenshot` with the image's file extension, such as `.jpg`. Screenshots larger than 10 MB are not attached. Voice notes are not attached.

## Following Issues on the Dashboard

The **Jira** column on the **Feedback** page, and the top of each feedback page, show where each feedback item stands:

| What you see | Meaning |
| :--- | :--- |
| **Create Jira** | No issue yet. Click it to create one. |
| **Submitting…** or **Creating automatically…** | Sauce Labs is creating the issue. |
| An issue key, such as `MOB-123` | The issue exists. Click the key to open it in Jira. Hover over it to see who created it and when, or **Created automatically**. |
| **Attaching the screenshot…** | The issue exists, and Sauce Labs is adding the screenshot. |
| **Screenshot attachment failed** | The issue exists, but the screenshot was not attached. Click **Retry attachment**. |
| A reason and **Retry** | The issue was not created. See [Troubleshooting](#troubleshooting). |

On a session page, **View Jira** shows how many issues were created from the session's feedback. Click it to see their keys.

Sauce Labs does not sync anything back from Jira. Changes to an issue in Jira, such as its status, are not shown on the dashboard, and an issue you delete in Jira still appears as linked. Sauce Labs never changes or deletes an issue after it creates it.

## Troubleshooting

When Sauce Labs cannot create an issue, the feedback item shows the reason and a **Retry** button.

| Reason starts with | What to do |
| :--- | :--- |
| **Connection expired** | Jira no longer accepts the connected account or its API token. An Account Owner or Org Admin must reconnect Jira with a new token. Then click **Retry**. |
| **Permission refused** | The connected Jira account cannot create issues in the project. Ask a Jira admin to grant it permission. Then click **Retry**. |
| **Required field rejected** or **Jira rejected the issue** | A field value from the app's field mapping is missing or not valid in Jira. An Account Owner or Org Admin must fix the mapping. Then click **Retry**. |
| **Jira could not find project** | The project or issue type no longer exists, or the connected account cannot see it. Update the app's Jira setup. |
| **Jira unreachable** | Sauce Labs could not reach Jira. Click **Retry** in a moment. |
| **Jira is not connected** or **Jira is not activated for this app** | Finish [Step 2](#step-2-connect-jira-to-your-organization) or [Step 3](#step-3-set-up-jira-for-an-app), then click **Retry**. |

:::caution Check Jira before you retry
If the reason says Jira may have created the issue anyway, for example because the request timed out, look for the issue in your Jira project before you click **Retry**. Otherwise, the feedback can end up with two issues.
:::

When an automatic issue fails, the Account Owners and Org Admins of your organization get an email with the subject "Jira issue not created for feedback on" followed by the app name. It includes the reason and an **Open this feedback** button. You get at most one email per reason per app each day, however many feedback items are affected.

## Who Can Do What

| Task | Account Owner, Org Admin | Member |
| :--- | :--- | :--- |
| Connect, change, or disconnect Jira | Yes | No |
| Set up, test, or deactivate Jira for an app | Yes | No |
| Turn automatic issues on or off | Yes | No |
| Create an issue, or retry a failed one | Yes | Yes |
