---
id: private-device-mgmt
title: Managing Private Devices
sidebar_label: Managing Private Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Private device management allows you to view and manage the private devices in your organization by assigned them to teams. If a device is not assigned to a team, it can be used by anyone in that organization (the default state is unassigned).

If a team with devices is deleted, the devices assigned to that team return to the unassigned state. (For more information about managing teams, see [Adding and Deleting Teams](/basics/acct-team-mgmt/adding-deleting-teams).)

Private devices are not included in VM or RDC concurrency limits. (For more information about concurrency, see [Concurrency Limits and Team Accounts](/basics/acct-team-mgmt/concurrency-limits)

## Viewing an Organization’s Private Devices
1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.
<img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>
2. Click the **DEVICES** tab. The devices assigned to your organization will be listed.
<img src={useBaseUrl('img/team-mgmt/device-mgmt-devices-tab.png')} alt="Devices tab" width="400"/>

## Assigning a Private Device to a Team
:::note
A device can be assigned to 0 or 1 teams at any time.
:::
1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **DEVICES** tab, in the **Team** dropdown, select a team to assign the device to.
<img src={useBaseUrl('img/team-mgmt/device-mgmt-assign-team.png')} alt="Devices tab" width="400"/>

## Removing a Private Device from a Team
