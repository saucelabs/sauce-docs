---
id: team-mgmnt
title: Team Management
sidebar_label: Team Management
description: Manage teams.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Teams are a way to group users together for the purposes of allowing access to certain projects. Organization Administrators can access Organization Settings - Teams to create and manage new teams.

<img src={useBaseUrl('img/error-reporting/project-settings/teams.webp')} alt="" />

Teams can be added to Projects so that all members of the team have access to the project. As you manage team membership, project access is automatically reflected.

A project by default has no project members, and all users in the tenant have access to it. In order for access control to be implemented, a project member mapping must exist. When a project member mapping exists: The user’s role with respect to a project is the highest project role across project member mappings. When no project member mapping exists: all users have access.

Organization Admins (users with the admin role under Organization settings | Users) can also manage project membership through this interface. Organization Admins will be able to see projects even if the project has a team associated that the admin user is not part of.

Organization Admins will also retain their admin privileges if they are added to a team with member access to a project. On the other hand, a user with the member role will have admin privileges if they are added to a team with admin access to a project. The owner of a project (derived from the owner field of project) always has “admin” project member privileges for that project.
