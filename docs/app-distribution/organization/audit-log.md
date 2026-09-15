---
id: audit-log
title: Audit Log
sidebar_label: Audit Log
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The audit log tracks all significant actions performed within your organization. Only Account Owners and Org Admins can access the audit log.

## Accessing the Audit Log

Click your **profile icon** in the top navigation bar and select **Audit Log** from the dropdown menu.

## Filtering Entries

Use the filter bar to narrow down audit log entries:

- **Search** — filter by user email or action details.
- **Action type** — select a specific action type from the dropdown (e.g., member_invited, build_uploaded).
- **Time range presets** — click **7d**, **30d**, **60d**, or **90d** to show entries from the last N days. Click **All** to show all entries.
- **Custom date range** — use the **From** and **To** date pickers for a specific date range.

All filters can be combined. The entry count updates to reflect the active filters.

## Exporting to CSV

Click **Export CSV** to download the currently filtered entries as a CSV file. The export respects all active filters (search, action type, and date range). The CSV includes columns for Time, User, Action, Details, and IP address.
