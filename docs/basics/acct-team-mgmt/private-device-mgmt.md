---
id: private-device-mgmt
title: Managing Private Devices
sidebar_label: Managing Private Devices
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Private device management allows an organization admin to view and manage the private devices in an organization by assigning them to teams. This reduces contention for scarce devices, and provides better visibility to which team is using a device at any given time.

* By default, a device is not assigned to any team, meaning it can be used by anyone in that organization.
* If you choose to assign a device to a team, only members of that team can access the device. This applies to live test sessions, automated test sessions, and to other connection methods like [Virtual USB](/mobile-apps/features/virtual-usb).
* At any time, you can reassign your private device to another team, or remove the team assignment altogether.

If a team with devices is deleted, the devices assigned to that team return to the unassigned state. (For more information about managing teams, see [Adding and Deleting Teams](/basics/acct-team-mgmt/adding-deleting-teams).)

Private devices are not included in VM or RDC concurrency limits. (For more information about concurrency, see [Concurrency Limits and Team Accounts](/basics/acct-team-mgmt/concurrency-limits).)

## Viewing an Organization’s Private Devices
1. On Sauce Labs, click **ACCOUNT** and then click **Team Management**.
<img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>
2. Click the **DEVICES** tab. The devices assigned to your organization will be listed.
<img src={useBaseUrl('img/team-mgmt/device-mgmt-devices-tab.png')} alt="Devices tab" width="600"/>

## Assigning a Private Device to a Team
:::note
A device can be assigned to only 1 team at a time.
:::
1. On Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **DEVICES** tab, in the **Team** dropdown, select a team to assign the device to.
<img src={useBaseUrl('img/team-mgmt/device-mgmt-assign-team.png')} alt="Assign a team" width="600"/>
