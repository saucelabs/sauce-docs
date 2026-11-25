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
- Choose which cleaning steps run after each session with [cleaning policies](#cleaning-policies).

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
   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="auto"/>
2. Click the **DEVICES** tab. The devices assigned to your organization will be listed.
   <img src={useBaseUrl('img/team-mgmt/device-mgmt-devices-tab.png')} alt="Devices tab" width="auto"/>

## Assigning a Private Device to Teams
Select multiple devices from the table to assign them to one or more teams. By assigning a private device to teams, you restrict access only to the teams it is assigned to. However, this restriction does not apply to organization admins, who continue to have access to all devices within their organization. To grant access to the device for all teams, remove any current team assignments.

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

:::note
Configurable cleaning policies is an experimental feature that will be rolled out progressively. You will be able to see an extended list of options in the device modal if the feature is enabled for you.
:::

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

*Multiple entries must be comma-separated. There is an upper limit of 100 entries for this list.*
:::

### System App Allow List (iOS)

Certain iOS preinstalled apps are hidden by default, e.g. Messages, Mail, Notes. To access iOS preinstalled applications, add the bundle ID for each app.

:::important
For a list of native iPhone and iPad apps and their corresponding bundle IDs, please follow the reference link below.  
https://support.apple.com/en-gb/guide/deployment/depece748c41/web

`com.apple.MobileSMS`
`com.apple.mobilenotes`

*Multiple entries must be comma-separated. There is an upper limit of 100 entries for this list.*
:::

### Account Allow List

Update this setting for each account email to preserve store and payment account sign-ins between sessions.

- Google accounts signed in to the Play Store/Google Pay/In-App Purchase can be preserved between sessions.
- Apple IDs signed in to the device and App Store/TestFlight/Apple Pay/In-App Purchase can be preserved between sessions.

:::important
`account1@mydomain.com`  
`account2@mydomain.com`  

*Multiple entries must be comma-separated. There is an upper limit of 100 entries for this list.*
:::

### Retain folders/filepath (Android)

You have the option to retain specific filepaths or folders on your private Android devices between sessions. 
This feature ensures that selected data remains intact during the device cleaning process.

- Filepaths or folders associated with specific applications can be retained.
- This is especially useful for retaining data that is crucial for continuous testing or for maintaining certain app states.

You can specify multiple folders (comma-separated) ensuring that their contents are retained between sessions (iOS/Android):

![private-device-skip-folder.png](..%2F..%2Fassets%2Fprivate-device-skip-folder.png)

:::note
You can only retain specific folders created inside tmp. You cannot retain the whole tmp folder.
Valid: `/data/local/tmp/retain`
Invalid path: `/data/local/tmp/`
:::

:::important
`/data/com.wavelink.velocity/files`  
`/com.my.app/data/temp/folder`

*Multiple entries must be comma-separated. There is an upper limit of 100 entries for this list.*
:::

### Enable Apple Pay

Enable this setting to test Apple Pay. This will persist assistive touch on the device, which is required to confirm payment. 
Please send us a support ticket to set up Confirm with AssistiveTouch on your device. This requires manual intervention from our side.

:::important
This feature **requires** setting the Account Allow List.  
Please see [Testing Apple Pay](/mobile-apps/live-testing/testing-apple-pay) for more information.  
:::

## Cleaning Policies

After every session, Sauce Labs cleans the device to an initial state to ensure deterministic test runs (see [Real Device Cleaning Process](/mobile-apps/real-device-cleaning)). Cleaning policies let organization admins choose which cleaning steps run on their private devices. Skipping the steps you don't need gets devices ready for the next session sooner, and keeps data you want to reuse between sessions.

:::note
Configurable cleaning policies is an experimental feature that is being rolled out progressively. Until your organization is enrolled, your private devices will be cleaned as usual according to [Real Device Cleaning Process](/mobile-apps/real-device-cleaning). Once enrolled, the settings in [Customizing Private Devices](#customizing-private-devices) apply. To opt-in, please contact your SauceLabs account team.
:::

Each policy applies to one operating system, Android or iOS. After a session, a private device is cleaned with:

1. Its own policy (a device policy), if it has one.
2. Otherwise, the organization policy for its operating system.
3. Otherwise, the default steps, which are the same as **Fast cleaning**.

### Organization Cleaning Policy Banner

When cleaning policies are on, the **Organization Cleaning Policy** banner is shown at the top of the **DEVICES** tab on the **Organization Management** page.

<img src={useBaseUrl('img/team-mgmt/cleaning-policy-org-banner.png')} alt="Organization Cleaning Policy banner with an Android policy label, an iOS policy label, and the View link" width="700"/>

The banner shows one label for each operating system:

- **Custom policy** (orange): your organization has saved a policy for this operating system.
- **Default cleaning** (gray): your organization has no policy for this operating system, so the default steps run.

To open the organization policy, click **View**, highlighted in the image above.

### Presets

Every policy starts from a preset. The presets are shown as three cards at the top of the policy dialog. Select a card to apply its steps, and then change individual steps if you need to.

| Preset | Steps that run |
| --- | --- |
| **Full clean** | Every cleaning step. |
| **Fast cleaning** | Only the steps that are on by default: it removes the apps from the last session, signs out of accounts, and deletes files. Sauce Labs recommends this preset. |
| **Custom** | The steps you turn on individually. Changing any step of Full clean or Fast cleaning selects **Custom**. |

### Policy Dialog

The organization policy and the device policies are edited in the same kind of dialog.

<img src={useBaseUrl('img/team-mgmt/cleaning-policy-presets.png')} alt="Device Management dialog with Fast cleaning selected, 3 of 10 steps running, and the App Allowlist exceptions filled in" width="700"/>

The numbers in the image match the table below.

| # | Item | Description |
| --- | --- | --- |
| 1 | **Preset cards** | **Full clean**, **Fast cleaning** and **Custom**. The selected card is highlighted. See [Presets](#presets). |
| 2 | **CLEANING STEPS AFTER EACH SESSION** | The list of cleaning steps for the selected operating system. The counter next to the heading, for example **3 of 10 running**, shows how many steps are turned on. Hover over the info icon next to a step name to see what the step does. For the full list, see [Cleaning Steps](#cleaning-steps). |
| 3 | **Turn all on** | Turns on every step in the list. |
| 4 | **EXCEPTIONS KEPT ON DEVICE** | For steps that can keep data, a field for the entries the step leaves on the device, for example the package names or bundle IDs of the apps to keep. Type an entry and press **Enter** to add it. To remove an entry, click the **X** next to it. A dash (**—**) means the step has no exceptions. |
| 5 | **RUN AFTER SESSION** | A toggle for each step. When the toggle is on, the step runs after every session. |
| 6 | **Cancel** / **Apply** | **Apply** saves the policy. **Cancel** or the **X** in the upper-right corner closes the dialog without saving. |

Below the steps, **Other settings** lists the settings that are not cleaning steps. See [Other Settings](#other-settings).

### Setting the Organization Policy

The organization policy applies to every private device of that operating system that doesn't have its own policy, including devices added to your organization later.

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.
2. Click the **DEVICES** tab.
3. In the **Organization Cleaning Policy** banner, click **View**. The **Organization Cleaning Policy** dialog opens.
4. Select **Android** or **iOS**.
5. Select a preset card, or turn individual steps on or off with the toggles in the **RUN AFTER SESSION** column. To run every step, click **Turn all on**.
6. Under **EXCEPTIONS KEPT ON DEVICE**, add the entries you want to keep on the device, such as apps or folders.
7. Click **Apply**. Each operating system you changed is saved.

### Cleaning Column

When cleaning policies are on, the **Cleaning** column of the **DEVICES** tab shows which policy each device follows:

| Cleaning column | Meaning |
| --- | --- |
| **Org policy: Fast cleaning** (gray) | The device follows the organization policy, or the default steps, and they match the preset shown: Full clean, Fast cleaning or Custom. |
| **Fast cleaning** (orange) | The device has its own policy, which matches the preset shown: Full clean, Fast cleaning or Custom. |

<img src={useBaseUrl('img/team-mgmt/cleaning-policy-column.png')} alt="DEVICES tab with the Cleaning column and the Pencil icon highlighted" width="700"/>

The **App Allowlist**, **System App Allowlist**, **Account Allowlist**, **Skip Cleaning Folders/Files** and **Apple Pay** columns show the values of the policy the device follows.

### Setting a Device Policy

A device policy replaces the organization policy for one device. The device keeps its own policy when the organization policy changes later.

1. On the **DEVICES** tab, click the Pencil icon under the **Action** column of the device, highlighted in the image in [Cleaning Column](#cleaning-column). The **Device Management** dialog opens.
2. Check the sentence at the top of the dialog:
   - "This device has no policy of its own." means the device follows the organization policy, or the default steps if your organization has no policy. The dialog shows those steps.
   - "This device has its own policy, which replaces the organization's Android policy." (or iOS policy) means the device already has a device policy.

   <img src={useBaseUrl('img/team-mgmt/cleaning-policy-device-modal.png')} alt="Device Management dialog for a device with its own policy, showing the Use organization policy link and the Full clean preset" width="700"/>

3. Select a preset card, turn individual steps on or off, or edit the exceptions.
4. Click **Apply**. The steps are saved as the device's own policy.

To make a device follow the organization policy again, open its **Device Management** dialog and click **Use organization policy**, highlighted in the image above. The device policy is removed right away, without clicking **Apply**.

### Cleaning Steps

**On by default** shows the steps that run when no policy turns them off. **Fast cleaning** runs exactly these steps.

#### Android

| Step | What it does | On by default | Exceptions kept on device |
| --- | --- | --- | --- |
| Uninstall customer-installed apps | Uninstalls every app you or your tests installed, except the ones in your App Allowlist. | Yes | App Allowlist |
| Verify no third-party packages remain | Checks that every app you or your tests installed is gone, except the ones in your App Allowlist. Cleaning fails if one is left. Runs only while **Uninstall customer-installed apps** is on. | Yes | |
| Delete files | Deletes the files saved on the device, such as downloads. | Yes | Skip Cleaning Folders/Files |
| Reset device settings | Sets system settings, such as font size, autofill, and text-to-speech, back to their defaults. | No | |
| Reset locale and country | Sets the device's locale and country back to the data center's defaults, clears the clipboard, and sets a black wallpaper. | No | |
| Reset time zone | Turns automatic date and time back on and sets the time zone back to the data center's. | No | |
| Reset navigation mode | Sets navigation back to its default: three buttons on Samsung devices, gestures on others. | No | |
| Clear alarms, clipboard, browser, and launcher data | Deletes alarms, clipboard contents, browser data, and home screen changes. | No | |
| Enable high-accuracy location | Turns high-accuracy location back on, so apps get precise locations. | No | |
| Reset mock GPS location | Sets the GPS location back to the data center's location. | No | |

#### iOS

| Step | What it does | On by default | Exceptions kept on device |
| --- | --- | --- | --- |
| Uninstall customer-installed apps | Uninstalls every app you or your tests installed, except the ones in your App Allowlist. It also signs out of Google Chrome before removing it. | Yes | App Allowlist |
| Delete files | Deletes the files saved on the device, such as downloads. | Yes | |
| Delete saved passwords | Deletes the passwords saved in Settings, on iOS 17 and earlier. | Yes | |
| Sign out of Apple ID | Signs out of the Apple ID, unless it's in your Account Allowlist. | Yes | Account Allowlist |
| Reset language | Sets the device's language back to the data center's default. | Yes | |
| Reset locale | Sets the device's locale back to the data center's default. | No | |
| Reset time zone | Turns automatic date and time back on and sets the time zone back to the data center's. | No | |
| Clear Safari history and website data | Clears Safari's history and website data, such as cookies, and turns JavaScript and Web Inspector back on. | No | |
| Reset Safari website permissions | Sets websites' access to the camera, microphone, and location back to Ask. | No | |
| Reset Safari settings | Turns JavaScript and Web Inspector back on in Safari's settings when Safari wasn't used during the session. | No | |
| Delete reminders | Deletes all reminders. | No | |
| Delete all photos | Deletes all photos in the Photos app. | No | |
| Clear Wallet | Removes the cards and passes in Wallet. | No | |
| Reset mock GPS location | Sets the GPS location back to the data center's location. | No | |

:::note
The exceptions are kept only while their step runs. For example, the App Allowlist has no effect while **Uninstall customer-installed apps** is off, because no apps are removed.
:::

#### Other Settings

These settings are not cleaning steps. You can find them under **Other settings** in the policy:

- **Account Allowlist** (Android): see [Account Allow List](#account-allow-list).
- **System App Allowlist** (iOS): see [System App Allow List (iOS)](#system-app-allow-list-ios).
- **Apple Pay Support** (iOS): see [Enable Apple Pay](#enable-apple-pay).

## Private Device Management API
Easily manage your private real devices with our [Device Management API endpoints](/dev/api/rdc/#private-real-device-management) 
to obtain device information, assign devices to specific teams, and update device settings efficiently. 
