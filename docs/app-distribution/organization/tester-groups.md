---
id: tester-groups
title: Tester Groups
sidebar_label: Tester Groups
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Tester groups let you control which testers have access to which apps and builds. Groups are team-specific — each group belongs to a single team and can only be assigned to apps within that team.

:::info
All team members (Members, Team Admins, Org Admins, Account Owners) can create and manage tester groups within their teams.
:::

## Creating a Group

1. Go to **Tester Groups** in the sidebar.
2. Click **New Group** and select the team (if you belong to multiple teams).
3. Enter a group name and save.

## Adding Testers

From the group detail page, you can:

- **Select existing testers** from a dropdown of users with the Tester role in your organization.
- **Invite new testers** by email — they will receive an invitation to join.

## Team Isolation

Groups belong to a specific team. This means:

- A group created in Team A can only be assigned to Team A's apps.
- Members only see groups from their own team.
- Admins (Account Owner / Org Admin) see all groups across all teams.
- Testers can be added to groups in different teams — they will only see the apps assigned to each specific group.

## Assigning Groups to Apps

From the app detail page, use the **Tester Groups** section to:

- Assign a group to **all builds** of the app.
- Assign a group to a **specific build** only.

Only groups belonging to the same team as the app will be available for assignment.

## CSV Import / Export

You can bulk-manage testers using CSV files from the group detail page:

**Export:** Click **Export CSV** to download all testers in the group as a CSV file with `email`, `first_name`, and `last_name` columns.

**Import:** Click **Import CSV** to upload a CSV file. The file must include an `email` column. Optional columns: `first_name`, `last_name`.

- New users will be created and sent an invitation email automatically.
- Existing users already in the group will be skipped.
- If a user exists but doesn't have a name set, the name from the CSV will be used.

**Example CSV:**

```csv
email,first_name,last_name
jane@example.com,Jane,Doe
john@example.com,John,Smith
```

## Notifications

Use the **Send Notification** button (envelope icon) on the app page to email all testers in a group with the install link for the app.

Testers who have opted out of email notifications will not receive these emails. Each user can manage their preference from **My Profile** or via the unsubscribe link in notification emails. See [Notifications](/app-distribution/organization/notifications) for details.
