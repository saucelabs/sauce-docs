---
id: adding-deleting-teams
title: Adding and Deleting Teams
sidebar_label: Adding and Deleting Teams
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceDBlue">ENTERPRISE PLANS ONLY</span></p>
If you are an organization admin, you can create and delete teams and assign concurrency limits to each team.

## Adding Teams

1. In Sauce Labs, click **Account** and then click **Team Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>

2. On the **Teams** tab, click the blue plus sign.

   <img src={useBaseUrl('img/team-mgmt/add-new-team-nav.jpg')} alt="Add new team"/>


3. In the **Create new team** box, enter a team name and description.

<img src={useBaseUrl('img/team-mgmt/create-new-team.jpg')} alt="Create new team" width="400"/>

4. In the **To Line of Business** dropdown, select the line of business the team will be associated with.
5. Under **Team VM Concurrency Limits**, use the up and down arrows to set the number of concurrent virtual machines that the team can access. For more information about concurrency, see [Concurrency Limits and Team Accounts](/basics/acct-team-mgmt/concurrency-limits).
6. Click **Add Team**.

## Deleting Teams

1. In Sauce Labs, click **Account** and then click **Team Management**.
2. On the **Teams** tab, select the checkbox of the team or teams you want to delete.
3. Next to **Teams Selected**, in the **Action** dropdown, click **Delete team**.

<img src={useBaseUrl('img/team-mgmt/delete-team.jpg')} alt="Delete team"/>

4. In the **Confirm Delete** box, select the team that you want to transfer the members of the deleted team to. If you don't select a a new team, the team members will be moved to the default team.   
5. Click **Yes, Remove**.
