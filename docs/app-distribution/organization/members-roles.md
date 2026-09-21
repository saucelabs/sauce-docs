---
id: members-roles
title: Members & Roles
sidebar_label: Members & Roles
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Each user in your organization is assigned an organization role when they are invited. The role determines the level of access the user has to organization-wide and team-level capabilities.

Users can also be assigned to one or more teams. Team membership is particularly important for Members, because it determines which team resources and projects they can access.
## Role Hierarchy

When you invite a user to your organization, you assign an organization role that determines what they can access and manage. Each role inherits all permissions of the roles below it.

| Role | Can Do |
| --- | --- |
| <span className="role-badge role-badge--owner">Account Owner</span> | Everything. Manage billing, organization settings, SSO, and all capabilities below. |
| <span className="role-badge role-badge--org-admin">Org Admin</span> | Create and manage teams, invite and manage organization members, and all capabilities below. |
| <span className="role-badge role-badge--team-admin">Team Admin</span> | Invite members to their team, and all capabilities below. This is a per-team role assigned by admins. |
| <span className="role-badge role-badge--member">Member</span> | Create projects, upload builds, create tester groups, and invite testers within their team. |
| <span className="role-badge role-badge--tester">Tester</span> | View and install apps assigned to their groups. Can be shared across multiple teams. |

## Members vs.Testers

Members and testers are managed separately in App Distribution because they have different purposes.

- **Members:** Members are users who work with the platform. Depending on their role and team access, they can manage projects, builds, tester groups, and testers.
- **Testers:** Testers are users who receive and install app builds. They are managed from the **Testers** section and can be added to tester groups.

A tester can belong to tester groups across different teams. Their app access is determined by the apps and builds assigned to those groups.

## Invite a Members

Invite users to your organization and assign their organization role and team access.

**Step 1:** Click on the **Invite** in the top-right corner, and then select **Invite User**. The **Email Invite** page opens.

<img src={useBaseUrl('/img/app-distribution/members-roles/member-1.png')} alt="Members and Roles" width="100%"/>

**Step 2:** The **Invite User** page includes the following fields:

| Sr. No. | Field | Description |
|---:|---|---|
| 1 | **Email Address** | Enter the email address of the user you want to invite. If the email is not registered, a new account is created. |
| 2 | **Role** | Select a role from the dropdown list. You can select **Org Admin** or **Member**. |
| 3 | **Assign to Teams** | If you select **Member**, select one or more teams to assign the user to. |

<img src={useBaseUrl('/img/app-distribution/members-roles/member-2.png')} alt="Members and Roles" width="100%"/>

**Step 3:** After you have entered the required details, click **Invite**. The invited user receive an email invitation to join your organization.

<img src={useBaseUrl('/img/app-distribution/members-roles/member-3.png')} alt="Members and Roles" width="100%"/>

## Team Membership

Members are assigned to a single team at a time. They can only see and work with projects belonging to their team. Account Owners and Org Admins have access to all teams.

## Manage Team Roles

Team-level permissions can be managed separately from the user's organization role.

A **Team Admin** can manage members within their assigned team and has the permissions available to Members. Account Owners and Org Admins can manage team membership and assign the appropriate team-level access.

## Email Notification Preferences

Each user can opt in or out of email notifications for build uploads and app assignments. The email preference status is shown as a bell icon in the Members and Testers tables.

Users manage their own preference from **My Profile**, or via the unsubscribe link in notification emails. See [Notifications](/app-distribution/organization/notifications) for details.
