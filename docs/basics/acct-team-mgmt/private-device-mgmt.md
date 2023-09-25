---
id: private-device-mgmt
title: Managing Private Devices
sidebar_label: Managing Private Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Private device management allows an organization admin to view and manage the private devices in an organization by assigning them to teams and customizing the app and account allow lists. These features can reduce contention for scarce devices, provide better visibility to which team is using a device at any given time, and optimize both manual and automation workflows.

- By default, a device is not assigned to any team, which means it can be used by anyone in the organization. Default assignement allows the organization admin to view all the devices as long as they are not assigned to a specific team.
- If you choose to assign a device to a team, only members of that team can access the device. This also means that if the organization admin is not part of that team, they will not be able to see the device in their dashboard and run tests on the device. This applies to live test sessions, automated test sessions, and other connection methods like [Virtual USB](/mobile-apps/features/virtual-usb).
- At any time, you can reassign your private device to another team or remove the team assignment altogether from the [Team Management](https://app.saucelabs.com/team-management/devices) panel.
- If a team with devices is deleted, the devices assigned to that team return to the unassigned state. (For more information about managing teams, see [Adding and Deleting Teams](/basics/acct-team-mgmt/adding-deleting-teams).)

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


## App Allow List
The [device cleaning process](/mobile-apps/real-device-cleaning) will remove apps installed from [Sauce Storage](/mobile-apps/app-storage) and the App Store/Play Store between sessions. To have installed apps and app data persist between sessions, update this settings with a comma separated list of the application identifiers.

For iOS devices, use the bundle ID.
For Android devices, use the package name.

`com.google.chrome.ios,com.apps.app1,com.ios.app2`

:::caution
This setting does _NOT_ install the app. You must install the desired version of the matching app, manually or via automation.
:::


## System App Allow List (iOS)

Certain iOS preinstalled apps are hidden by default, e.g. Messages, Mail, Notes. To access iOS preinstalled applications, update this setting with a comma separated list of the bundle IDs.

For a list of native iPhone and iPad apps and their corresponding bundle IDs, please follow the reference link below.
https://support.apple.com/en-gb/guide/deployment/depece748c41/web


## Account Allow List

Update this setting with a comma separated list of account emails to preserve store and payment account sign-ins between sessions.
- Google accounts signed into the Play Store/Google Pay/In-App Purchase can be preserved between sessions.
- Apple IDs signed into the device and App Store/TestFlight/Apple Pay/In-App Purchase can be preserved between sessions.


> 

## Enable ApplePay

See [Testing Apple Pay](/mobile-apps/live-testing/testing-apple-pay)