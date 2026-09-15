---
id: members-roles
title: Members & Roles
sidebar_label: Members & Roles
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Manage who has access to your organization and what they can do.

## Role Hierarchy

Each role inherits all permissions of the roles below it.

| Role | Can Do |
| --- | --- |
| **Account Owner** | Everything. Manage billing, organization settings, SSO, and all capabilities below. |
| **Org Admin** | Create and manage teams, invite and manage organization members, and all capabilities below. |
| **Team Admin** | Invite members to their team, and all capabilities below. This is a per-team role assigned by admins. |
| **Member** | Create projects, upload builds, create tester groups, and invite testers within their team. |
| **Tester** | View and install apps assigned to their groups. Can be shared across multiple teams. |

## Members vs. Testers

The sidebar provides separate pages for managing members and testers:

- **Members** — Account Owners, Org Admins, and Members who manage the platform.
- **Testers** — users who receive and install builds. Managed separately for clarity.

Both pages show user status, join date, and email notification preference (bell icon).

## Inviting Members

1. Go to **Members** or **Testers** in the sidebar.
2. Click **Invite Member** or **Invite Tester**.
3. Enter their email and select a role.
4. They will receive an email invitation to join your organization.

## Team Membership

Members are assigned to a single team at a time. They can only see and work with projects belonging to their team. Account Owners and Org Admins have access to all teams.

## Changing Roles

Account Owners and Org Admins can change a member's organization role from the members list. Team Admins can be assigned per-team from the team detail page. Role changes take effect immediately.

## Email Notification Preferences

Each user can opt in or out of email notifications for build uploads and app assignments. The email preference status is shown as a bell icon in the Members and Testers tables. Users manage their own preference from **My Profile**, or via the unsubscribe link in notification emails. See [Notifications](/app-distribution/organization/notifications) for details.
