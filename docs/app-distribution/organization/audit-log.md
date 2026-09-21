---
id: audit-log
title: Audit Log
sidebar_label: Audit Log
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Audit Log** records significant actions performed within your organization. It helps **Account Owners** and **Org Admins** review organization activity and track actions performed by users. Only Account Owners and Org Admins can access the audit log.

## Access the Audit Log

**Step 1:** Click the **Profile** icon in the top navigation bar.

<img src={useBaseUrl('/img/app-distribution/audit-log/audit-1.png')} alt="Audit Log" width="100%"/>

**Step 2:** Select **Audit Log** from the dropdown menu. The **Audit Log** page opens and displays the recorded organization activities.

<img src={useBaseUrl('/img/app-distribution/audit-log/audit-2.png')} alt="Audit Log" width="100%"/>

## Filter Audit Log Entries

Use the filters on the **Audit Log** page to find specific entries.

| **Sr. No.** | **Filter** | **Description** |
|---:|---|---|
| **1** | **Search** | Enter a user's email address or action details in the **Search** field to find matching entries. |
| **2** | **Action type** | Select an action from the **Action type** dropdown to display entries for a specific action, such as `member_invited` or `build_uploaded`. |
| **3** | **Time range presets** | Select a preset to filter entries from the last **7d**, **30d**, **60d**, **90d**, or **All** available entries. |
| **4** | **Custom date range** | Specify a custom date range to filter audit log entries for a specific period. |

<img src={useBaseUrl('/img/app-distribution/audit-log/audit-3.png')} alt="Audit Log" width="100%"/>

All filters can be combined. The entry count updates to reflect the active filters.

## Exporting to CSV

Click **Export CSV** to download the currently filtered entries as a CSV file. The export respects all active filters (search, action type, and date range). The CSV includes columns for Time, User, Action, Details, and IP address.

<img src={useBaseUrl('/img/app-distribution/audit-log/audit-4.png')} alt="Audit Log" width="100%"/>
