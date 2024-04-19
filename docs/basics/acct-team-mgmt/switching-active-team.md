---
id: switching-active-team
title: Switching active team
sidebar_label: Switching active team
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span> <span className="sauceYellow">Beta feature</span></p>

:::caution
This functionality _affects_ tests run via _API_ calls. It will result in tests being assigned to the currently active team.

Please be cautious when using it. Currently, we _recommend_ using it mostly for UI-related work.
:::

# User navigating between teams

User can see the active and other teams you are assigned to in the navigation bar in the web application.
<img src={useBaseUrl('img/team-mgmt/active-team-dropdown.png')} alt="Active team dropdown in Navigation bar" width="400"/>

The dropdown lists all the teams assigned to the user.

Additionally, the user can check what teams they are assigned to in [User Settings page](https://app.saucelabs.com/user-settings) at `My Account` section. The first team in the field `Assigned Teams` refers to the currently active team.

User can be assigned to multiple teams but only one is the "active" team. This means that if a user runs a test, the test will be assigned to the team the user had active at the time of starting the test.

# Assigning users to multiple teams

Users with role `Organization Admin` can manage teams assignment to multiple users via [User Management view](https://app.saucelabs.com/team-management/users).

**NOTE:** Users preserve their roles. For example, if a user has a role `Team Admin` while being assigned to Team X and the `Organization Admin` assigns them to Team Z, Team Y and Team A, that user will be `Team Admin` in each of those teams.

Team assignment is persistent across all data regions.

## Batch assignment of users to multiple teams

At [User Management view](https://app.saucelabs.com/team-management/users), select users. Click `Team assignment` in the Actions dropdown.
<img src={useBaseUrl('img/team-mgmt/team-assignment-option.png')} alt="Team assignment option" width="400"/>

You will be presented with a modal with a list of selected users and multi select dropdown to pick the teams you would like to assign the users to.

**IMPORTANT:** Keep in mind, this assignment overwrites the list of previously assigned teams for the selected users. Selected users will be assigned only to the teams you select in the modal. Previous assignments are discarded.

## Assigning a single user to multiple teams

Additionally, `Organization Admin` can manage teams assignments for a single user. In [User Management view](https://app.saucelabs.com/team-management/users), click on the link to a specific user. In section `Roles and Teams` there is a dropdown to add/remove assigned teams. Click `Update` to save the assignment.

<img src={useBaseUrl('img/team-mgmt/roles-teams-assignment.png')} alt="Roles and Teams assignment section" width="400"/>
