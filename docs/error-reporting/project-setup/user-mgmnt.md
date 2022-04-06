---
id: user-mgmnt
title: Account Management
sidebar_label: Account Management
description: Manage user accounts.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview
In order to manage users, go to the Organization Settings menu item in the top-right corner of the screen. From here, click on Users in the left pane. You'll be presented with three sections, Configure Self Signup, Manage Invitations and Users.

The Configure Self Signup  section contains self sign-up settings (see the Sign-up section for details). The Manage Invitations section contains pending invitations (invitations for a user that are still pending acknowledgement). The Users section contains a list of all users on the system.

You are required to specify an SMTP server in order to send account-related e-mail messages (See Server Settings).

<img src={useBaseUrl('img/error-reporting/project-settings/user-mgmnt.png')} alt="" />

## Configure Self Signup
You may want to allow anyone on your team to sign-up to your Backtrace instance themselves. In order to do this, enable a whitelisted domain to your instance. Click on the Allow signup from whitelisted domain and provide a domain name, a default role and an authentication method (use the default of Password unless you're doing advanced configuration with PAM or SAML. You can configure SAML in the Single Sign On section.

For example, if you supply a domain of backtrace.io, then anyone with a backtrace.io will be able to sign up from the login page.

## Invite a user
Additional users may be added through invitations. Click on Send an invitation, then supply a username, e-mail address, authentication method and role. The user will be sent an e-mail with a private invitation link. If the authentication method is Password, they will be required to set a password. If their authentication method is PAM, they will use the system-configured password for their username. If SAML
make sure you configure Single Sign On.

If an e-mail fails to send for some reason, the Resend Email button can be used to resend an e-mail. It is also possible to Copy Invite Link if you would like to provide a link directly to the user. Once a user has accepted an invitation, they will up under the Users tab and the invitation will be removed.

In order to revoke an invitation, simply click on the Delete button.

## Remove a user
In order to remove a user, click on the Users section and then click on the user you would like to remove. You will be presented with a new window. At the right of the screen, a Delete user button is present that allows for the user to be deleted. .

Any configuration objects created by the user are presented before deletion. If a user owns any configuration objects (such as projects or tokens), deletion will fail. You are required to migrate ownership of all their projects and tokens in order for the deletion to succeed.

## Roles
There are three roles in Backtrace.
- admin: Able to manage users, domain sign-up and projects within the tenant.
- member: Able to create and manage their own projects within the tenant. Able to send invitations.
- guest: Only able to view and manage their own user and settings. Unable to send invitations, modify existing configurations or create new projects.

In addition to this, there is a superuser bit that can be set on users (go to the user page and modify the Access Control dropdown). The superuser bit may only be granted by other users with superuser set. A superuser is required to modify organization-wide settings, create new tenants, delete tenants, modify SSL settings, modify server-wide SMTP settings and modify listener configuration (the network ports for receiving crashes and receiving user requests).
