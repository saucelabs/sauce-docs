---
id: managing-teams
title: Managing Teams
sidebar_label: Managing Teams
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Teams help you organize your organization into separate groups, such as development or QA teams. Each project belongs to a team, and team membership determines which projects members can access.

:::info
Only **Account Owners** and **Org Admins** can create and manage teams.
:::

## Creating a Team

**Step 1:** Click on the **Profile** icon in the top-right corner, and then select **Users**.

<img src={useBaseUrl('/img/app-distribution/managing-teams/manage-team-1.png')} alt="Managing Teams" width="100%"/>

**Step 2:** On the **Users** page, select the **Teams** tab to view the teams in your organization.

<img src={useBaseUrl('/img/app-distribution/managing-teams/manage-team-2.png')} alt="Managing Teams" width="100%"/>

**Step 3:** To add new team, clcik on the **+ New Team**.

<img src={useBaseUrl('/img/app-distribution/managing-teams/manage-team-3.png')} alt="Managing Teams" width="100%"/>

**Step 4:** Enter a name for the team, and click on the **Create Team** to save the team.

<img src={useBaseUrl('/img/app-distribution/managing-teams/manage-team-4.png')} alt="Managing Teams" width="100%"/>

**Step 5:** The new team appears in the **Teams** list and can be used to organize members and projects.

<img src={useBaseUrl('/img/app-distribution/managing-teams/manage-team-5.png')} alt="Managing Teams" width="100%"/>

## Team Structure

Teams determine how users and projects are organized in your organization.

| **Sr. No.** | **Item** | **Description** |
|---:|---|---|
| **1** | **Projects** | Each project belongs to exactly one team. |
| **2** | **Members** | Members are assigned to a team and can access projects belonging to that team. |
| **3** | **Team Admins** | Team Admins can invite new members to their team and have all permissions available to Members. |
| **4** | **Account Owners and Org Admins** | Account Owners and Org Admins have access to all teams and their projects. |
| **5** | **Testers** | Testers can be shared across teams. They can access apps assigned to the tester groups they belong to, regardless of the team. |

## Team Roles

| Team Role | Permissions |
| --- | --- |
| <span className="role-badge role-badge--team-admin">Team Admin</span> | Invite members to the team, plus all Member permissions below. |
| <span className="role-badge role-badge--member">Member</span> | Create projects, upload builds, create tester groups, and invite testers. |

## Best Practices

- Create teams that mirror your development departments (e.g., "iOS Team", "Android Team", "QA").
- Keep team sizes manageable - if a team has too many projects, consider splitting it.
- Use Team Admin role to delegate member management without granting full admin access.
