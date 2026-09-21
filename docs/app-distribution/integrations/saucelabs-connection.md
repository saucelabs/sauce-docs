---
id: saucelabs-connection
title: Sauce Labs Connection
sidebar_label: Sauce Labs Connection
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Connect your Mobile App Distribution organization to your Sauce Labs account to enable automatic team sync, role mapping, user provisioning, and App Storage integration.

:::info
Only **Account Owners** and **Org Admins** can manage the Sauce Labs connection. Find it under **gear icon → Sauce Labs**.
:::

## Setting Up the Connection

**Step 1:** Click the **Profile** icon in the top-right corner and select **Integrations** from the user menu.

<img src={useBaseUrl('/img/app-distribution/saucelabs-connection/saucelabs-1.png')} alt="Sauce Labs Connection" width="100%"/>

**Step 2:** On the **Integrations** page, find **SauceLabs** and click **Connect**.

<img src={useBaseUrl('/img/app-distribution/saucelabs-connection/saucelabs-2.png')} alt="Sauce Labs Connection" width="100%"/>

**Step 3:** On the **SauceLabs Connection** page, click **Connect with SauceLabs**.

<img src={useBaseUrl('/img/app-distribution/saucelabs-connection/saucelabs-3.png')} alt="Sauce Labs Connection" width="100%"/>

**Step 4:** Sign in to your **Sauce Labs** account when prompted.

<img src={useBaseUrl('/img/app-distribution/saucelabs-connection/saucelabs-4.png')} alt="Sauce Labs Connection" width="100%"/>

After authentication, your Mobile App Distribution organization is connected to your Sauce Labs organization.

## What Happens When Connected

Once the connection is established, the following features are enabled:

| Feature | Description |
| --- | --- |
| **Team Sync** | Teams from your SauceLabs organization are automatically created in Mobile App Distribution. Users are added to their SauceLabs teams on every login. |
| **Role Mapping** | SauceLabs roles are mapped to Mobile App Distribution roles on login. Org Admins in SauceLabs become Org Admins in Mobile App Distribution. Team members become Members. |
| **Auto-Provisioning** | New SauceLabs users get a Mobile App Distribution account automatically when they log in via SauceLabs SSO for the first time. |
| **App Storage** | Builds uploaded to Mobile App Distribution are automatically synced to SauceLabs App Storage using the uploading user's credentials. |

## Role Mapping

Sauce Labs roles are mapped to Mobile App Distribution roles as follows:

| SauceLabs Role | Mobile App Distribution Role |
| --- | --- |
| Organization Admin | <span className="role-badge role-badge--org-admin">Org Admin</span> |
| Team Admin | <span className="role-badge role-badge--member">Member</span> (with <span className="role-badge role-badge--team-admin">Team Admin</span>) |
| Member | <span className="role-badge role-badge--member">Member</span> |

:::note
The **Account Owner** role in Mobile App Distribution is not changed by role synchronization.
:::

## Team Sync Behavior

When team synchronization is active:

- On every SauceLabs login, the user's team memberships are synced.
- New SauceLabs teams are automatically created in Mobile App Distribution.
- If a user is removed from a SauceLabs team, their Mobile App Distribution team membership is removed.
- If a user has no remaining SauceLabs teams, their Mobile App Distribution account is blocked (they cannot log in).
- If they are re-added to a team in SauceLabs, their account is unblocked on next login.

## Sync Settings

After connecting, you can toggle these options on the SauceLabs settings page:

- **Sync teams** - Enable/disable automatic team creation and membership sync.
- **Sync roles** - Enable/disable role mapping on login.
- **Auto-provision** - Enable/disable automatic account creation for new SauceLabs users.

## Sidebar Behavior

When a SauceLabs connection is active, the **Teams** and **Users** sidebar links redirect to the equivalent SauceLabs management pages, since these are managed from SauceLabs.

## Disconnecting

You can disconnect from SauceLabs at any time from the settings page. Disconnecting stops team/role sync and auto-provisioning, but does not remove existing users or teams from Mobile App Distribution.
