---
id: user-mgmnt
title: Account Management
sidebar_label: Account Management
description: Manage user accounts.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

To manage user accounts, go to the **Organization settings** menu and select **Users**.

On the Users page, the following sections are available:

- **Configure self signup**: Allows you to add a domain for team members to sign up without an invitation.
- **Manage invitations**: Allows you to send invitations to users and see pending invitations.
- **Users**: Shows the list of users accounts in the system and their roles.

<img src={useBaseUrl('img/error-reporting/project-settings/user-mgmt.webp')} alt="Shows the Users page in Organization settings." />

## Configure Self Sign Up

You can allow your team members to sign up to your Backtrace instance without an invitation by adding an allowlisted domain.

For example, if you supply a domain of backtrace.io, then anyone with a backtrace.io email address will be able to sign up from the login page.

To add an allowlisted domain:

1. Under **Configure self signup**, select **Allow signups from allowlisted domains**.
1. Click **+ Add domain**.
1. In the Add allowlisted domain dialog:
   - Enter the name of the domain.
   - Select a default authentication method. Options are:
     - **password** (recommended): The user is required to set a password.
     - **pam**: The system-configured password will be used for the username.
     - **saml**: For more advanced authentication, you can configure SAML in the Single-sign on settings. The Single-sign on settings are available to admin user roles.
   - Select a default [user role](#user-roles). Options are member or guest.

## Invite a User

You can invite a user to create an account in your Backtrace instance. The user will be sent an email with a private invitation link. It is also possible to Copy Invite Link if you would like to provide a link directly to the user.

Once a user has accepted an invitation, they will appear in the **Users** list and the invitation will be removed.

:::note
To send account-related email messages, you must specify an SMTP server in the Server settings. The Server settings are available for admin user roles.
:::

To invite a new user:

1. Under **Manage invitations**, click **Send an invitation**.
1. On the **Invite a new user** page:
   - Enter the user's email address.
   - Enter a username.
   - Select a default authentication method. Options are:
     - **password** (recommended): The user is required to set a password.
     - **pam**: The system-configured password will be used for the username.
     - **saml**: For more advanced authentication, you can configure SAML in the Single-sign on settings. The Single-sign on settings are available to admin user roles.
   - Select a default [user role](#user-roles). Options are member or guest.
1. Click **Send invite**.

### Pending Invitations

If an email invitation fails to send, or if a user hasn't yet accepted an invitation, it will appear as a pending invitation. You can either resend the invitation or delete it.

1. Under **Manage invitations**, click **Pending Invitations**.
1. Click **⋮**, then select either **Resend** or **Delete**.
   <img src={useBaseUrl('img/error-reporting/project-settings/pending-invites.png')} alt="Shows pending invitations to new users." />

## Remove a User

1. Under **Users**, select the user accounts you want to remove.
1. Click **⋮**, then select **Delete user**.

Any configuration objects created by the user are presented before deletion. If a user owns any configuration objects (such as projects or tokens), deletion will fail. You must either delete the dependent objects or transfer ownership in order for the deletion to succeed.

## User Roles

The following user roles are available:

- **admin**: Able to manage users, domain sign-up and projects in the tenant.
- **member**: Able to create and manage their own projects in the tenant. Able to send invitations.
- **guest**: Only able to view and manage their own user and settings. Unable to send invitations, modify existing configurations or create new projects.

In addition to the main user roles, there is also a superuser role that can be granted to users (go to the user page and modify the Access Control dropdown list). The superuser role may only be granted by other users with the superuser role.

The superuser role is required to modify organization-wide settings, create new tenants, delete tenants, modify SSL settings, modify server-wide SMTP settings, and modify listener configuration (the network ports for receiving crashes and receiving user requests).
