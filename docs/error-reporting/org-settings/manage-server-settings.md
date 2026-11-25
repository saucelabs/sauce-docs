---
id: manage-server-settings
title: Manage Your Server Settings
sidebar_label: Manage Your Server Settings
description: Configure the SMTP server, SSL certificates, and listeners for your Error Reporting instance from the Server settings in Universe settings.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Server settings** in **Universe settings** control how your Error Reporting instance sends email and receives data.

| Setting | Description |
| --- | --- |
| **SMTP** | The email server that Error Reporting uses to send invitations, account emails, and reports. Without an SMTP server, users don't receive invitation emails. |
| **SSL** | The key, certificate, and chain files for your instance's SSL certificates. |
| **Listeners** | For on-premises installations only. The network ports on which each endpoint listens for crashes and user requests, and their SSL settings. |

## Prerequisites

You need the superuser role. Only a user who already has the superuser role can grant it to another user. For more information, see [User Roles](/error-reporting/org-settings/user-mgmnt/#user-roles).

## Configure the SMTP Server

**Step 1:** Click your profile icon in the upper-right corner, and then select **Universe Settings**. In the left menu, click **Server settings**.

<img src={useBaseUrl('img/error-reporting/universe-settings/universe-settings-menu.png')} alt="Universe Settings option in the profile menu" />

**Step 2:** Under **SMTP**, enter the details of your email server.

<img src={useBaseUrl('/img/error-reporting/coroner/5e601ca6b0eaa.png')} alt="SMTP settings for the email server of the instance" />

**Step 3:** Save your changes.

## Update the SSL Certificates

**Step 1:** Click your profile icon in the upper-right corner, and then select **Universe Settings**. In the left menu, click **Server settings**.

**Step 2:** Under **SSL**, enter your key, certificate, and chain files.

<img src={useBaseUrl('/img/error-reporting/coroner/5e601ca786048.png')} alt="SSL settings with fields for the key, certificate, and chain files" />

**Step 3:** Save your changes.

## Configure Listeners

Listeners are available only for on-premises installations. For the setup steps, see [Coronerd Setup](/error-reporting/advanced/coroner/server-setup/).

## Related Topics

- [Account Management](/error-reporting/org-settings/user-mgmnt/)
- [Coronerd Setup](/error-reporting/advanced/coroner/server-setup/)
