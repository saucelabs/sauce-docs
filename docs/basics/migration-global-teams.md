---
id: migration-global-teams
title: Migration to Global Teams
sidebar_label: Migration to Global Teams
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

In order to enable the feature of navigation between teams for our customers we performed a migration of teams 

Before the migration, teams were not replicated across regions. Team assignment for users was set per region as well.

After the migration, each team has the same properties across all regions.

:::note Note:
For teams that had the same name across regions, a prefix `Former {REGION}` has been added to the duplicated team during the migration.
:::

Team name can be changed by users with `Organization Admin` role in `TEAMS` section of `Organization Management` panel.

Team assignment for users can be changed in `Organization Management` panel. More info in [(Switching Active Team)](https://docs.saucelabs.com/basics/acct-team-mgmt/switching-active-team/)

Users are assigned to the teams they were previously assigned to in each region. Using team navigation, they can switch their active team as they see fit.

## Example organization

Organization "ACME Inc." has teams "ACME Developers" and "ACME QA" in `us-west` region. In region `eu-central` the organization has teams "ACME Developers" and "ACME Mobile Apps". After the migration, there will be teams "ACME Developers", "Former eu-central ACME Developers" and "ACME Mobile Apps" in all regions.

### Example from user's perspective:

User "Tiffany" is assigned to "ACME Developers" in `us-west` and "ACME Mobile Apps" in `eu-central`. After the migration "Tiffany" is assigned to "ACME Developers" and "ACME Mobile Apps" in all regions. In order to switch between teams, user has access to team navigation dropdown in the SauceLabs UI panel.
   <img src={useBaseUrl('img/team-mgmt/active-team-dropdown.png')} alt="Active team dropdown in Navigation bar" width="400"/>
