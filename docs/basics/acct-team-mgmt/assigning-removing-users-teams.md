---
id: assigning-removing-users-teams
title: Assigning and Removing Users from Teams
sidebar_label: Assigning and Removing Users from Teams
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceDBlue">ENTERPRISE PLANS ONLY</span></p>
If you are an organization admin, you can assign users to and remove users from a team.

## Assigning a User to a Team
1. In Sauce Labs, click **Account** and then click **Team Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>

2. On the **Users** tab, select the checkbox of the user(s) you want to assign or remove.
3. Next to **Users Selected**, in the **Action** dropdown, click **Team Assignment**.

   <img src={useBaseUrl('img/team-mgmt/assign-users-to-team.jpg')} alt="Assign users to a team"/>

4. In the **Team Assignment** box, in the **Select team** dropdown, select the team to assign the user to.

A user can only be assigned to one team; changing a user's team assignment will remove the association with the previous team.

## Removing Users from Teams
1. In Sauce Labs, click **Account** and then click **Team Management**.
2. On the **Teams** tab, click the team whose user you want to remove.
3. On the **Members** tab, select the checkbox of the user you want to remove.
4. Next to **User Selected**, in the **Action** dropdown, click **Remove User from team**.

   <img src={useBaseUrl('img/team-mgmt/remove-user-from-team.jpg')} alt="Remove a user from a team"/>

If a user is removed from a team and/or not assigned to a team, their name will only be visible in the **Users** tab.
