---
id: private-device-mgmt
title: Managing Private Devices
sidebar_label: Managing Private Devices
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<br/><p><span className="sauceGreen">Private Devices Only</span></p>

Private device management allows an organization admin to view and manage the private devices in an organization via the [Private Device Management](https://app.saucelabs.com/team-management/devices) panel. These features can improve device availability and optimize manual and automation workflows.

- Assign a private device to one or multiple teams.
- Customize a private device to allow apps, system apps, and accounts to persist between sessions.

:::important

Assigning a private device to specific teams restricts access to only those teams. Organization admins are not affected by this restriction, as they have access to all devices within their organization.
:::

:::note
For more information about managing teams, see [Adding and Deleting Teams](/basics/acct-team-mgmt/adding-deleting-teams).

Private devices are not included in VM or RDC concurrency limits.  
For more details, please see [Managing Concurrency](/basics/acct-team-mgmt/concurrency/managing-concurrency).
:::

## Viewing an Organization’s Private Devices

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.
   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="450"/>
2. Click the **DEVICES** tab. The devices assigned to your organization will be listed.
   <img src={useBaseUrl('img/team-mgmt/device-mgmt-devices-tab.png')} alt="Devices tab" width="700"/>

## Assigning a Private Device to Teams
Select multiple devices from the table to assign them to one or more teams. By assigning a private device to teams, you restrict access to that device to only the teams it is assigned to. However, this restriction does not apply to organization admins, who continue to have access to all devices within their organization. To grant access to the device for all teams, remove any current team assignments.

:::note
Any new team assignments will override the existing ones.
:::

1. Select one or more devices you want to assign and then click on the **Assign Device To Team** button.

<img src={useBaseUrl('img/team-mgmt/device-mgmt-devices-select.png')} alt="Assign teams" width="700"/>

2. Select one or more teams from the dropdown menu and then click on the **Next** button.

<img src={useBaseUrl('img/team-mgmt/device-mgmt-team-assign.png')} alt="Assign teams" width="700"/>

3. Preview the new team assignments for each device, with changes from the previous assignment highlighted. 

<img src={useBaseUrl('img/team-mgmt/device-mgmt-team-assign-preview.png')} alt="Assign teams" width="700"/>

4. You can turn off the comparison with the previous assignment to view only the new team assignment.

<img src={useBaseUrl('img/team-mgmt/device-mgmt-team-assign-preview-2.png')} alt="Assign teams" width="700"/>

5. **Confirm** the assignment or go **Back to Edit** the selected devices or teams.

## Customizing Private Devices

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.
2. On the **DEVICES** tab, click on the Pencil icon under the Action column to edit a device.
   <img src={useBaseUrl('img/team-mgmt/device-mgmt-device-edit.png')} alt="Private device management edit" width="700"/>
3. In the device modal, you can configure your private device: App Allow List, Account Allow List, System App Allow List, Retain folders, Enable Apple Pay.
   
   <img src={useBaseUrl('img/team-mgmt/device-mgmt-device-edit-modal.png')} alt="Private device management modal view" width="450" height="600"/>

### App Allow List
The [device cleaning process](/mobile-apps/real-device-cleaning) will remove apps installed from [Sauce Storage](/mobile-apps/app-storage) and the App Store/Play Store between sessions. To have installed apps and app data persist between sessions, update this setting for each of the application identifiers. This might be the app you are testing or dependent apps, e.g. MFA app, Microsoft Authenticator, etc.

:::important
This setting does **NOT** install the app. You must manually or via automation install the desired version of the matching app.

- For iOS devices, use the Bundle ID.
  - [How to find the bundle ID on a Sauce Labs device](/basics/acct-team-mgmt/private-device-mgmt-find-bundle-id)
- For Android devices, use the package name.

`com.google.chrome.ios`  
`com.apps.app1`  
`com.ios.app2`  

*Multiple entries must be comma-separated.*
:::

### System App Allow List (iOS)

Certain iOS preinstalled apps are hidden by default, e.g. Messages, Mail, Notes. To access iOS preinstalled applications, add the bundle ID for each app.

:::important
For a list of native iPhone and iPad apps and their corresponding bundle IDs, please follow the reference link below.  
https://support.apple.com/en-gb/guide/deployment/depece748c41/web

`com.apple.MobileSMS`
`com.apple.mobilenotes`

*Multiple entries must be comma-separated.*
:::

### Account Allow List

Update this setting for each account email to preserve store and payment account sign-ins between sessions.

- Google accounts signed in to the Play Store/Google Pay/In-App Purchase can be preserved between sessions.
- Apple IDs signed in to the device and App Store/TestFlight/Apple Pay/In-App Purchase can be preserved between sessions.

:::important
`account1@mydomain.com`  
`account2@mydomain.com`  

*Multiple entries must be comma-separated.*
:::

### Retain folders/filepath (Android)

You have the option to retain specific filepaths or folders on your private Android devices between sessions. 
This feature ensures that selected data remains intact during the device cleaning process.

- Filepaths or folders associated with specific applications can be retained.
- This is especially useful for retaining data that is crucial for continuous testing or for maintaining certain app states.

By default, the following folders are not cleaned on your private Android devices, ensuring that their contents are retained between sessions (iOS/Android):
- Documents
- Pictures
- Downloads
- DCIM

:::note
You can only retain specific folders created inside tmp. You cannot retain the whole tmp folder.
Valid: `/data/local/tmp/retain`
Invalid path: `/data/local/tmp/`
:::

:::important
`/data/com.wavelink.velocity/files`  
`/com.my.app/data/temp/folder`

*Multiple entries must be comma-separated.*
:::

### Enable Apple Pay

Enable this setting to test Apple Pay. This will persist assistive touch on the device, which is required to confirm payment. 
Please send us a support ticket to set up Confirm with AssistiveTouch on your device. This requires manual intervention from our side.

:::important
This feature **requires** setting the Account Allow List.  
Please see [Testing Apple Pay](/mobile-apps/live-testing/testing-apple-pay) for more information.  
:::

## Private Device Management API
Easily manage your private real devices with our [Device Management API endpoints](/dev/api/rdc/#private-real-device-management) 
to obtain device information, assign devices to specific teams, and update device settings efficiently. 
