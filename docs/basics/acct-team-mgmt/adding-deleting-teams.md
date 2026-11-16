---
id: adding-deleting-teams
title: Adding and Deleting Teams
sidebar_label: Adding and Deleting Teams
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>
If you are an organization admin, you can create and delete teams and assign concurrency limits to each team.

## Adding Teams

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="auto"/>

2. On the **TEAMS** tab, click the blue plus sign in the upper-right corner.

   <img src={useBaseUrl('img/team-mgmt/add-new-team-nav.png')} alt="Add New Team button on the TEAMS tab" width="700"/>

3. In the **Create new team** dialog, enter a **Team name** and, optionally, a **Team description**, and then click
   **Add Team**.

   <img src={useBaseUrl('img/team-mgmt/create-new-team-name.png')} alt="Create new team dialog with team name and description" width="500"/>

4. Assign the team's concurrency limits for Virtual Devices in the data center shown at the top of the dialog:
   - **Total Concurrency limit**: the most virtual device tests the team can run at once, including Linux, Windows,
     Android x86, and the platforms below. This field needs a value.
   - **Platform Limits**: caps for **Mac / iOS (x86)**, **Mac / iOS (ARM)**, and **Android (ARM)** inside the team's
     total. Mac / iOS (x86) needs a value. Leave Mac / iOS (ARM) or Android (ARM) empty to let the team use up to the
     organization limit.

   The organization maximum for each type is shown under each field as **Org max**. For more information, see
   [How Concurrency Limits Work](/basics/acct-team-mgmt/concurrency/managing-concurrency#how-concurrency-limits-work).

   <img src={useBaseUrl('img/team-mgmt/create-new-team-concurrency.png')} alt="Create new team dialog with Total Concurrency limit and Platform Limits" width="500"/>

5. Click **Complete setup**.

## Deleting Teams

:::note
Teams that contain service accounts cannot be deleted. Remove all service accounts before attempting to delete the team.<br/><br/>
However, if a team only contains user accounts, you can delete it by selecting a target team to which the users will be reassigned.
:::

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.
2. On the **TEAMS** tab, select the checkbox of the team or teams you want to delete.
3. Next to **Teams selected**, in the **Bulk Actions** dropdown list, click **Delete team**.

   <img src={useBaseUrl('img/team-mgmt/delete-team.png')} alt="Delete team in the Bulk Actions dropdown list" width="700"/>

4. In the **Confirm Delete** box, select the team that you want to transfer the members of the deleted team to. If you don't select a new team, the team members will be moved to the default team.
5. Click **Yes, Remove**.
