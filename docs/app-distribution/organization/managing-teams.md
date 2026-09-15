---
id: managing-teams
title: Managing Teams
sidebar_label: Managing Teams
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Teams create isolated departments within your organization. Members work within their assigned team and can only see projects belonging to that team.

:::info
Only **Account Owners** and **Org Admins** can create and manage teams.
:::

## Creating a Team

1. Go to **Teams** in the sidebar.
2. Click **Create Team**.
3. Enter a team name and save.

## Team Structure

- Each **project** belongs to exactly one team.
- **Members** are assigned to a team and can only access that team's projects.
- **Team Admins** can invite new members to their team.
- **Account Owners** and **Org Admins** have access to all teams and their projects.
- **Testers** can be shared across teams — they see apps assigned to their groups regardless of team.

## Team Roles

| Team Role | Permissions |
| --- | --- |
| **Team Admin** | Invite members to the team, plus all Member permissions below. |
| **Member** | Create projects, upload builds, create tester groups, and invite testers. |

## Best Practices

- Create teams that mirror your development departments (e.g., "iOS Team", "Android Team", "QA").
- Keep team sizes manageable — if a team has too many projects, consider splitting it.
- Use Team Admin role to delegate member management without granting full admin access.
