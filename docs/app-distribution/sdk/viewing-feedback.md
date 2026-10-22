---
id: viewing-feedback
title: Viewing Feedback
sidebar_label: Viewing Feedback
description: Find the feedback testers submit with the Sauce Mobile Beta SDK on the Sauce Labs Mobile App Distribution dashboard, share or delete it, and get notified about new feedback.
---

:::info Beta release
The Sauce Mobile Beta SDK is in beta. The dashboard screens described on this page can change before general availability. Share feedback with your Sauce Labs representative.
:::

Every piece of feedback testers submit from your app appears on the **Feedback** page of the Sauce Labs Mobile App Distribution dashboard. This page shows how to find feedback, what the feedback page shows, and how to share, delete, and get notified about feedback. To let testers submit feedback from your app, see [Submitting User Feedback](/app-distribution/sdk/user-feedback/).

:::note
The **Feedback** page appears in the left sidebar when Sauce Mobile Beta is enabled for your organization. If you do not see it, contact your Sauce Labs representative.
:::

## Who Can See Feedback

| Role | Access |
| :--- | :--- |
| Account Owner, Org Admin | All feedback in the organization. |
| Member | Feedback for the apps that the member's teams can see. |
| Tester | No access. |

If your organization gives members read-only access, members cannot open the **Feedback** page.

Anyone who can open a feedback item can also share it, delete it, and create a Jira issue for it.

The dashboard shows times in the time zone set in your profile, or in UTC if you have not set one.

## The Feedback List

To see feedback, click **Feedback** in the left sidebar. The page lists the feedback from every app in your organization, newest first. The feedback submitted during a session also appears on that session's **Feedback** tab. See [Viewing Sessions](/app-distribution/sdk/viewing-sessions/#feedback-tab).

| Column | What it shows |
| :--- | :--- |
| **Time** | When the tester submitted the feedback. Click it to open the feedback page. |
| **App** | The app name. |
| **OS** | The platform and OS version. |
| **Version** | The app version. |
| **User ID** | The user ID your app reports, or **Anonymous**. |
| **Reported By** | The email address the tester entered. |
| **Feedback** | The feedback text. Hover over it to read long text. |
| **Screenshot** | Click **View** to open the feedback page. |
| **Jira** | The Jira issue for the feedback, or the button to create one. See [Jira Cloud](/app-distribution/sdk/bug-tracking/jira-cloud/). |

Click a column header to sort by that column. You can sort by every column except **Jira**.

Below the list, choose how many feedback items to show per page: 10, 20, 50, or 100.

## Finding Feedback

Use the filter bar above the list:

- **Search.** Matches the feedback text, the tester's email address, and the user ID.
- **All Apps.** Shows the feedback for one app.
- **All Versions.** Shows the feedback for one app version. Type the exact version and press **Enter**.
- **Date.** Choose **All Time**, **Today**, **Last 7 days**, **Last 30 days**, or **Custom…** to set a **From** and **To** date and click **Apply**. The date is when the feedback was submitted, in whole days in UTC.

Click **Reset Filters** to clear all filters. The page remembers your filters until you sign out.

## The Feedback Page

Click a feedback item to open it. The page shows the tester's email address, the app and version, the date, the OS, the user ID, the screenshot, the text, and how far into the session the tester submitted the feedback.

Under **Session context**, the page shows the session the feedback belongs to, with the **Session Replay**, **Application Logs**, **Session Metadata**, and **Screenshots** tabs. To jump the replay to the moment of the feedback, open the session's **Feedback** tab and click **Seek Video**.

Feedback that a tester submitted outside a recorded session has no session context. The page shows "This feedback was submitted without an associated session recording."

The feedback page has these actions:

| Action | What it does |
| :--- | :--- |
| **Create Jira** | Creates a Jira issue for the feedback. See [Jira Cloud](/app-distribution/sdk/bug-tracking/jira-cloud/). |
| **Share** | Copies a link to the feedback page. Only signed-in members of your organization can open it. |
| **Share publicly** | Creates a public link to the feedback. Anyone with the link can open it without signing in. |
| **Stop sharing** | Turns off the public link. Anyone holding the link loses access immediately. |
| **Delete** | Deletes the feedback and its screenshot. This cannot be undone. |

## Feedback Notifications

Sauce Labs can email your team about each new feedback item. Account Owners and Org Admins set this up for the whole organization:

1. Click your profile icon and then **Organization Settings**.
2. In the **SDK Settings** section, under **Email notifications**, select **Notify me about new user feedback**. It is on by default.
3. Optional: in **Feedback email recipients**, enter up to 20 email addresses, separated by commas. Leave the field empty to send the emails to the organization's admins.
4. Click **Save notifications**.

Each email has the subject "New feedback on" followed by the app name. It includes the app version, the tester, the feedback text, and an **Open this feedback** button. It does not include the screenshot. Org Admins also get an in-app notification, **New tester feedback**.
