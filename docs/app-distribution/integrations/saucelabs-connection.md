---
id: saucelabs-connection
title: SauceLabs Connection
sidebar_label: SauceLabs Connection
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Connect your Mobile App Distribution organization to your SauceLabs account to enable automatic team sync, role mapping, user provisioning, and App Storage integration.

:::info
Only **Account Owners** and **Org Admins** can manage the SauceLabs connection. Find it under **gear icon → SauceLabs**.
:::

## Setting Up the Connection

1. Go to **gear icon → SauceLabs** in the top navigation bar.
2. Click **Connect with SauceLabs**.
3. You'll be redirected to SauceLabs to authenticate.
4. After signing in, the connection is established automatically using your SauceLabs organization.

## What Happens When Connected

| Feature | Description |
| --- | --- |
| **Team Sync** | Teams from your SauceLabs organization are automatically created in Mobile App Distribution. Users are added to their SauceLabs teams on every login. |
| **Role Mapping** | SauceLabs roles are mapped to Mobile App Distribution roles on login. Org Admins in SauceLabs become Org Admins in Mobile App Distribution. Team members become Members. |
| **Auto-Provisioning** | New SauceLabs users get a Mobile App Distribution account automatically when they log in via SauceLabs SSO for the first time. |
| **App Storage** | Builds uploaded to Mobile App Distribution are automatically synced to SauceLabs App Storage using the uploading user's credentials. |

## Role Mapping

| SauceLabs Role | Mobile App Distribution Role |
| --- | --- |
| Organization Admin | Org Admin |
| Team Admin | Member (Team Admin) |
| Member | Member |

**Note:** Account Owner role in Mobile App Distribution is never changed by role sync.

## Team Sync Behavior

- On every SauceLabs login, the user's team memberships are synced.
- New SauceLabs teams are automatically created in Mobile App Distribution.
- If a user is removed from a SauceLabs team, their Mobile App Distribution team membership is removed.
- If a user has no remaining SauceLabs teams, their Mobile App Distribution account is blocked (they cannot log in).
- If they are re-added to a team in SauceLabs, their account is unblocked on next login.

## Sync Settings

After connecting, you can toggle these options on the SauceLabs settings page:

- **Sync teams** — Enable/disable automatic team creation and membership sync.
- **Sync roles** — Enable/disable role mapping on login.
- **Auto-provision** — Enable/disable automatic account creation for new SauceLabs users.

## Sidebar Behavior

When a SauceLabs connection is active, the **Teams** and **Users** sidebar links redirect to the equivalent SauceLabs management pages, since these are managed from SauceLabs.

## Disconnecting

You can disconnect from SauceLabs at any time from the settings page. Disconnecting stops team/role sync and auto-provisioning, but does not remove existing users or teams from Mobile App Distribution.
