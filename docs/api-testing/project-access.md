---
id: project-access
title: Setting API Project-Level Permissions
sidebar_label: Project-Level Permissions
---

import useBaseUrl from '@docusaurus/useBaseUrl';


When creating a new Project, you can assign one of two access level permissions: Team-specific (if you're part of one) or **Organization**-wide.

<img src={useBaseUrl('img/api-fortress/2021/12/accessOrg1.png')} alt="New user UI" width="300" />

API Testing access level settings are independent of [Sauce Labs Team Management settings](/basics/acct-team-mgmt-hub/).



## User Scenarios

### New User
When a new user (no Team Assignments or Projects) logs in to API Testing, they will see the empty-state landing page, which guides you through creating a Project and Test(s).<br/><img src={useBaseUrl('img/api-fortress/2021/12/emptyState.png')} alt="New user UI" width="600" />

This user would have the option to set Organization-wide Project access and would only be able to see the Projects that they created.

### Team Member
A user who belongs to a Team can create and interact with their own Team's Projects and Organization-wide Projects.

This user would have the option to set Team-specific and Organization-wide Project access. They would not be able to view Projects that are restricted to outside Teams.

### Organization Admin
Organization Admins can create and interact with all data in all Projects &#8212; Organization-wide and Team-specific.

## Viewing Access Levels
You can view the access level on your Projects page.<br/><img src={useBaseUrl('img/api-fortress/2021/12/accessOrg2.png')} alt="New user UI" width="500" />
