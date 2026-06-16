---
id: user-mgmnt
title: User Management
sidebar_label: User Management
description: Manage user accounts.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


## User Management with Unified Identity

Error Reporting is now part of the Sauce Labs ecosystem and uses a unified identity experience. Existing Backtrace customers can migrate their universes into Sauce Labs, while new Sauce Labs customers can add Error Reporting directly to their organization without requiring a separate Backtrace account.

### Existing Backtrace Customers

**Existing Backtrace customers** can migrate their universes into Sauce Labs. As part of the migration, administrators must update their authentication configuration to ensure users can continue accessing Error Reporting.

Update the following settings:

* Update your **Single Sign-On (SSO)** configuration to point to Sauce Labs.  
* Update your **SAML** metadata so users can continue to authenticate.

### New Sauce Labs Customers

**New Sauce Labs customers** can add Error Reporting to their organization and start working with universes without creating a separate Backtrace account.

After setup is complete, users can access Error Reporting directly from the Sauce Labs platform.

### Accessing Error Reporting

After signing in to Sauce Labs, select **Error Reporting** from the left navigation menu.

* If you have access to a **single universe**, you are automatically redirected to that universe.  
* If you have access to **multiple universes**, you are prompted to select the universe you want to access.  
* If you do **not** have access to **any universes**, contact your Organization Administrator to request access.

:::note 
If an organization administrator does not have a universe assigned, a default universe is automatically created so they can begin using Error Reporting. Additional users can be assigned to universes by an administrator.
:::

## Managing Universe Access with Unified Identity

Universe access controls which users can access specific Error Reporting universes within Sauce Labs. Before a user can be added to a team or assigned to a project within a universe, they must first be granted access to that universe by an Organization Administrator.

### Assigning a User to a Universe

To grant a user access to a universe:

**Step 1:** Sign in to Sauce Labs as an Organization Administrator, then select **Profile** → **Organization Management**.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-1.png')} alt="user management" />

**Step 2:** In the **Organization Management** page, select the **Error Reporting** tab.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-2.png')} alt="user management" />

**Step 3:** Here you can view the list of available **Universe URLs** and select **Manage User Access** next to the universe that you want to manage.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-3.png')} alt="user management" />

**Step 4:** On the **Manage User Access** page, select the **\+ (Add)** icon to grant access to a new user.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-4.png')} alt="user management" />

**Step 5:** In the **Assign Access** dialog, search for the user by name or email address.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-5.png')} alt="user management" />

**Step 6:** Select **Assign Access** next to the user you want to grant access to.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-6.png')} alt="user management" />

**Step 7:** Select **Done** to save the changes.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-7.png')} alt="user management" />

Once access has been granted, the user can sign in to Sauce Labs and access the selected universe. After obtaining universe access, the user can be added to teams and projects within that universe as needed.

### Revoke a user's universe access

Organization administrators can revoke a user's access to a universe when they no longer need access or when permissions need to be adjusted. Revoking access prevents the user from accessing the selected universe while keeping their membership in the Sauce Labs organization intact.

To revoke a user's access to an universe, click on the **Revoke Access** next to the user on the **Manage User Access** page.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-8.png')} alt="user management" />

After access is revoked, the user can no longer access the selected universe.

:::note
Revoking universe access does not remove the user from your Sauce Labs organization. To completely remove a user, you must remove them separately through the organization administration settings.
:::

### Assigning Access to Multiple Universes

Users can be granted access to multiple Error Reporting universes. Universe access is managed independently, meaning access granted to one universe does not automatically apply to any other universe.

To grant access to multiple universes, repeat the steps in **Assign a User to a Universe** for each additional universe that the user needs to access.

<img src={useBaseUrl('img/error-reporting/user-management/user-management-6.png')} alt="user management" />

After access has been assigned, the user can sign in to Sauce Labs and access the universes they have been granted access to. Access is managed separately for each universe.

#### Example

An organization may have separate **Production**, **Staging**, and **Development** universes. If a user requires access to all three, an Organization Administrator must assign access to each universe individually.


## Legacy Account Management

To manage user accounts, go to the **Universe settings** menu and select **Users**.

On the Users page, the following sections are available:

- **Configure self signup**: Allows you to add a domain for team members to sign up without an invitation.
- **Manage invitations**: Allows you to send invitations to users and see pending invitations.
- **Users**: Shows the list of users accounts in the system and their roles.

<img src={useBaseUrl('img/error-reporting/project-settings/user-mgmt.webp')} alt="Shows the Users page in Universe settings." />

### Configure Self Sign Up

You can allow your team members to sign up to your Backtrace instance without an invitation by adding an allowlisted domain.

For example, if you supply a domain of backtrace.io, then anyone with a backtrace.io email address will be able to sign up from the login page.

To add an allowlisted domain:

1. Under **Configure self signup**, select **Allow signups from allowlisted domains**.
2. Click **+ Add domain**.
3. In the Add allowlisted domain dialog:
   - Enter the name of the domain.
   - Select a default authentication method. Options are:
     - **password** (recommended): The user is required to set a password.
     - **pam**: The system-configured password will be used for the username.
     - **saml**: For more advanced authentication, you can configure SAML in the Single-sign on settings. The Single-sign on settings are available to admin user roles.
   - Select a default [user role](#user-roles). Options are member or guest.

### Invite a User

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

#### Pending Invitations

If an email invitation fails to send, or if a user hasn't yet accepted an invitation, it will appear as a pending invitation. You can either resend the invitation or delete it.

1. Under **Manage invitations**, click **Pending Invitations**.
1. Click **⋮**, then select either **Resend** or **Delete**.
   <img src={useBaseUrl('img/error-reporting/project-settings/pending-invites.png')} alt="Shows pending invitations to new users." />

### Remove a User

1. Under **Users**, select the user accounts you want to remove.
1. Click **⋮**, then select **Delete user**.

Any configuration objects created by the user are presented before deletion. If a user owns any configuration objects (such as projects or tokens), deletion will fail. You must either delete the dependent objects or transfer ownership in order for the deletion to succeed.

### User Roles

The following user roles are available:

- **admin**: Able to manage users, domain sign-up and projects in the tenant.
- **member**: Able to create and manage their own projects in the tenant. Able to send invitations.
- **guest**: Only able to view and manage their own user and settings. Unable to send invitations, modify existing configurations or create new projects.

In addition to the main user roles, there is also a superuser role that can be granted to users (go to the user page and modify the Access Control dropdown list). The superuser role may only be granted by other users with the superuser role.

The superuser role is required to modify organization-wide settings, create new tenants, delete tenants, modify SSL settings, modify server-wide SMTP settings, and modify listener configuration (the network ports for receiving crashes and receiving user requests).
