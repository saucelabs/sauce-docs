---
id: my-profile
title: My Profile
sidebar_label: My Profile
description: View and update your profile details, timezone, email notifications, password and API key.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your **My Profile** page holds your personal account information and settings. Everything on this page applies only to your own account. Organization-wide settings, such as security and data retention, are in [Organization Settings](/app-distribution/settings/organization).


## Access My Profile

**Step 1:** Click the **Profile** icon in the top-right corner and select **My Profile** from the user menu.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-1.png')} alt="User menu with My Profile highlighted" width="100%"/>

**Step 2:** The **My Profile** page opens. Your **Role** and the date your account was created (**Member since**) are shown at the top of the page. If you belong to teams, or your organization uses the Sauce Labs connection, those details are shown there as well.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-2.png')} alt="My Profile page with Role and Member since highlighted" width="100%"/>

:::note
You can't change your own role. Account Owners and Org Admins manage roles. See [Members & Roles](/app-distribution/organization/members-roles).
:::

## User Information

The **User Information** section shows the name and email address on your account. Your name is how other members see you across the platform, so keep it up to date. Your email address identifies your account: invitations and email notifications are sent to it, and it's the username for HTTP Basic authentication with the [API](/app-distribution/developer/api-reference#authentication).

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-3.png')} alt="User Information section with First Name, Last Name and Email Address" width="100%"/>

| Field | Description |
|---|---|
| **First Name** | Your first name, displayed across the platform. |
| **Last Name** | Your last name, displayed across the platform. |
| **Email Address** | Your account email address. It's shown for reference and can't be changed. |

## Timezone Settings

The **Timezone** setting controls how dates and times are displayed to you across the platform, for example build upload times and audit log entries. It only changes what you see, not the times other users see.

Choose a timezone from the list. If you don't select one, times are shown in **UTC**.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-4.png')} alt="Timezone Settings with the Timezone dropdown" width="100%"/>

## Email Settings

The **Email Settings** section controls whether Mobile App Distribution emails you about new builds and about tester-group notifications. Use the **Receive emails for new builds and app assignments** toggle to turn these emails on or off. You can also turn them off with the unsubscribe link in any notification email. Emails sent when an admin assigns you to an app individually, or resends that invitation, are always delivered.

Admins can see your email preference as a bell icon in the **Users** and **Testers** tables.

Click **Update** below **Email Settings** to save your changes. This saves your **User Information**, **Timezone Settings** and **Email Settings** together.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-5.png')} alt="Email Settings toggle and Update button" width="100%"/>

:::info
This setting only affects emails. In-app notifications are always on. See [Notifications](/app-distribution/organization/notifications).
:::

## Change Password

Use the **Change Password** section to change the password you use to sign in to Mobile App Distribution. This section is saved separately from the rest of the page, with its own **Update**.

If your organization uses [SSO / SAML](/app-distribution/settings/sso-saml), you may sign in through your identity provider instead of with a password.

| Sr. No. | Field | Description |
|---:|---|---|
| 1 | **Current Password** | Enter your current account password. |
| 2 | **New Password** | Enter the new password you want to use. |
| 3 | **Re-Enter New Password** | Enter the new password again to confirm it. |
| 4 | **Update** | Saves the new password. |

New passwords must be at least 8 characters and include an uppercase letter, a lowercase letter, a number and a special character, with no spaces.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-6.png')} alt="Change Password section" width="100%"/>

## API Key

Your API key authenticates requests to the Mobile App Distribution API, such as build uploads from a CI/CD pipeline or the [Fastlane plugin](/app-distribution/ci-tools/fastlane). It's tied to your account, and it doesn't expire until you regenerate it.

Your API key is available from the **API Credentials** dropdown in the top navigation bar and the **API Key** section on the **My Profile** page. For automation, invite a dedicated user account and use its API key instead of your personal key. See [Service Accounts](/app-distribution/security/service-accounts).

:::note
Testers don't have an API key. The **API Credentials** menu and the **API Key** section aren't shown to them.
:::

**Step 1:** Click the **eye icon** to view your API key, or the **copy icon** to copy it.

**Step 2:** Use the API key as the `X-API-Key` header for API requests. For more information, see the [API Reference](/app-distribution/developer/api-reference).

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-7.png')} alt="API Key field with the view and copy icons highlighted" width="100%"/>

### Regenerate Your API Key

Click **Regenerate API Key** to create a new key. The old key stops working immediately.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-8.png')} alt="Regenerate API Key highlighted in the API Key section" width="100%"/>

:::caution
Regenerating your API key requires updating the API key value throughout your configuration. Commands that use your old API key will fail.
:::

## Registered Devices

The **Registered Devices** section lists the iOS devices you've registered and their UDIDs. A UDID is the unique identifier of an iPhone or iPad. Developers use it to add your device to an app's provisioning profile, so builds signed for testing can be installed on it.

Click **Register Device** to add an iPhone or iPad, or the copy icon to copy a UDID.
