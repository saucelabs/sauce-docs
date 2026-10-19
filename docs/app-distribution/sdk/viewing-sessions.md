---
id: viewing-sessions
title: Viewing Sessions
sidebar_label: Viewing Sessions
description: Find the sessions the Sauce Mobile Beta SDK records on the Sauce Labs Mobile App Distribution dashboard, replay them, and share or delete them.
---

:::info Beta release
The Sauce Mobile Beta SDK is in beta. The dashboard screens described on this page can change before general availability. Share feedback with your Sauce Labs representative.
:::

Every session the SDK records appears on the **Sessions** page of the Sauce Labs Mobile App Distribution dashboard. This page shows how to find a session, what the session page shows, and how to share and delete sessions. For the feedback testers submit, see [Viewing Feedback](/app-distribution/sdk/viewing-feedback/).

:::note
The **Sessions** page appears in the left sidebar when Sauce Mobile Beta is enabled for your organization. If you do not see it, contact your Sauce Labs representative.
:::

## Who Can See Sessions

| Role | Access |
| :--- | :--- |
| Account Owner, Org Admin | All sessions in the organization, including sessions of apps that have no uploaded build. |
| Member | Sessions of the apps that the member's teams can see. |
| Tester | No access. |

If your organization gives members read-only access, members cannot open the **Sessions** page.

Anyone who can open a session can also share it and delete it.

The dashboard shows times in the time zone set in your profile, or in UTC if you have not set one.

## The Session List

To see sessions, click **Sessions** in the left sidebar. The page lists the sessions of every app in your organization, newest first.

| Column | What it shows |
| :--- | :--- |
| **User ID** | The user ID your app reports (see [Identifying Your Users](/app-distribution/sdk/identifying-users/)), or the tester's email address. Sessions without either show **Anonymous**. A comment icon with a number means testers submitted feedback during the session. |
| **App** | The app name. For an app with no uploaded build, the name the app reports. |
| **Version** | The app version, or the build number if the app has no version. |
| **Start Time** | When Sauce Labs received the start of the session. The device clock is not used. |
| **Duration** | The session length, such as `12m 05s`. |
| **Device** | The device manufacturer and model. |
| **OS** | The platform and OS version, such as `Android 14`. |
| **IP Address** | The IP address the session came from, with a two-letter country code. |
| **App Status** | **Live** while the session is still recording or being finalized. Empty once the session is finalized. |

Click a column header to sort by that column, and click it again to reverse the order. **Version** sorts numerically, so `2.1.0` comes before `2.10.0`. **OS** sorts by platform first, then by OS version.

Below the list, choose how many sessions to show per page: 10, 20, 50, or 100.

Account Owners and Org Admins also see how much of the monthly session quota the organization has used.

## Finding Sessions

Use the filter bar above the list:

- **Search.** Matches user IDs, tester email addresses, IP addresses, country codes, OS versions, and app bundle identifiers. It does not search logs or network requests.
- **All Apps.** Shows the sessions of one app.
- **All Versions.** Shows the sessions of one app version. Type the exact version and press **Enter**.
- **Date.** Choose **All Time**, **Today**, **Last 7 days**, **Last 30 days**, or **Custom…** to set a **From** and **To** date and click **Apply**. Dates are whole days in UTC.

Click **Reset Filters** to clear all filters. The page remembers your filters until you sign out.

The **Number of Sessions** chart above the list counts the sessions per day that match the app, version, and date filters. It does not apply the search box. With **All Time**, the chart shows the last 30 days. For long date ranges, it counts per week or per month instead.

## The Session Page

Click a session in the list to open it. The top of the page shows the app, its bundle identifier, the OS (hover over the icon for the version), the app version recorded in the session (**Latest Version**), the user, and the device.

The session page has five tabs:

| Tab | What it shows |
| :--- | :--- |
| **Session Replay** | The screen recording, a timeline of events, and charts of device metrics. |
| **Feedback** | The feedback testers submitted during the session. |
| **Application Logs** | Your app's log output. |
| **Session Metadata** | Session details and the attributes your app set. |
| **Screenshots** | Every screenshot in the session, as a grid. |

To link straight to a tab, add `#tab-feedback`, `#tab-logs`, `#tab-data`, or `#tab-screenshots` to the session URL.

### Session Replay Tab

The player on the left replays the screenshots the SDK captured. Use the seek bar, **Play** and **Pause**, the speed menu (**0.5x**, **1x**, **2x**, or **4x**), and **Fullscreen**. Taps appear on the screen as circles.

The timeline on the right lists what happened during the session. Click an entry to jump the replay to that moment. The entry for the current moment is highlighted as the replay plays. The timeline includes:

- The start of the session and the SDK version. An old SDK version shows a warning.
- When the app moves to the foreground or the background.
- Screen names, and the events your app adds with `addEvent`.
- Tester interactions, such as **Tapped**, **Swiped**, and **Long-pressed**, with the label of the element. Click the entry to see all of its details.
- Network requests, with the method, the URL, and the response time. Failed requests appear in red with their HTTP status.

Click a network request to see its URL, host, data sent and received, and any error. Click **See details** to open **Network Request Details**, which shows the request and response headers and bodies when the SDK recorded them. Headers and URL parameters that usually hold secrets, such as `Authorization`, `Cookie`, API key headers, and `token` or `password` parameters, are shown as `[redacted]`.

To download all the network requests of the session, click the download icon (**Download network requests as HAR**). The file is named `session-<id>.har`.

Under the player, the **Session Data** card shows eight charts: **Responsiveness Detail**, **Battery Performance**, **Memory Performance**, **CPU Performance**, **Network Throughput**, **Phone Signal**, **Battery Temperature**, and **WiFi Signal**. The charts follow the replay. Click a chart to jump the replay to that moment.

### Feedback Tab

Each feedback item shows the date, the tester's email address, and the text. Click **Seek Video** to jump the replay to the moment the tester submitted the feedback. The **Feedback Screenshots** card shows the screenshot attached to each feedback item. Click **User's Feedback** to open the feedback page. See [Viewing Feedback](/app-distribution/sdk/viewing-feedback/#the-feedback-page).

### Application Logs Tab

Turn log levels on and off with **Verbose**, **Debug**, **Info**, **Warn**, and **Error**, and type in **Filter logs…** to search. Times are shown in your time zone.

Click **Export logs** to download the lines currently shown as `session-<id>-logs.txt`. If the session recorded more log lines than Sauce Labs keeps, the tab shows a notice.

### Session Metadata Tab

This tab lists the session ID, app, start time, duration, user ID, device, OS, IP address, country, language, last activity, and the device clock at the start of the session. It then lists every session attribute and user data value your app set. See [Session Attributes](/app-distribution/sdk/session-attributes/).

### Screenshots Tab

The tab shows every screenshot in the session. Hover over a screenshot to see when it was taken and on which screen. Click it to open a larger view with **Previous screenshot**, **Next screenshot**, and **Seek Video**, which jumps the replay to that screenshot.

## Sessions Still Recording

A session that is still recording shows a **Live** badge in the session list. Its page shows the data Sauce Labs had received when you opened it. The page does not update by itself, so reload it to see newer data.

## Sharing a Session

Click **Share URL** to create a public link to the session and copy it. Anyone with the link can view the session without signing in. If you click **Share URL** again, you get the same link.

The shared page shows the replay, timeline, metric charts, logs, screenshots, and session metadata. It does not show the session's feedback or Jira issues. Times on the shared page are shown in UTC.

A shared link does not expire. To turn it off, click **Revoke** and confirm. The link stops working immediately. If you share the session again, you get a new link.

## Deleting Sessions

To delete one session, click **Delete Session** on its page, or the trash icon on its row in the list. To delete several sessions, select their checkboxes and click **Delete**.

Deleting a session deletes its screenshots, logs, and network data, and cannot be undone. The feedback submitted during the session is kept. A shared link to a deleted session shows "This session is no longer available."
