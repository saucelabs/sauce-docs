---
id: manage-server-settings
title: Manage Your Server Settings
sidebar_label: Manage Your Server Settings
description: Configure the SMTP server, SSL certificate, and custom network listeners for your Error Reporting instance from the Server settings in Universe settings.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Server settings** in **Universe settings** control how your Error Reporting instance sends email and receives data. The page has two sections:

| Section | Setting | Description |
| --- | --- | --- |
| **Basic** | **SMTP Server** | The email server that Error Reporting uses to send invitations, account emails, and reports. Without an SMTP server, users don't receive invitation emails. |
| **Advanced** | **SSL certificate** | The SSL certificate for your instance. |
| **Advanced** | **Custom network listeners** | For on-premises installations only. The network ports on which each endpoint listens for crashes and user requests, and their SSL settings. |

## Prerequisites

You need the superuser role. Only a user who already has the superuser role can grant it to another user. For more information, see [User Roles](/error-reporting/org-settings/user-mgmnt/#user-roles).

## Open the Server Settings

**Step 1:** Click your profile icon in the upper-right corner, and then select **Universe Settings**.

<img src={useBaseUrl('img/error-reporting/universe-settings/universe-settings-menu.png')} alt="Universe Settings option in the profile menu" />

**Step 2:** In the left menu, click **Server settings**.

<img src={useBaseUrl('img/error-reporting/universe-settings/server-settings-menu.png')} alt="Server settings option in the left menu of Universe settings" />

## Configure the SMTP Server

**Step 1:** On the **Server settings** page, under **Basic**, click **SMTP Server**. If no server is set up yet, it shows **Not enabled**.

<img src={useBaseUrl('img/error-reporting/universe-settings/server-settings-smtp.png')} alt="SMTP Server option under Basic on the Server settings page" />

**Step 2:** In the **Enable SMTP** dialog, enter the details of your email server, and then click **Save**.

| Field | Description |
| --- | --- |
| **mail_from** | The email address that Error Reporting sends email from. |
| **server** | The address of your SMTP server, such as `smtp.example.com`. |
| **username** | The username for your SMTP server. |
| **password** | The password for your SMTP server. |

<img src={useBaseUrl('img/error-reporting/universe-settings/server-settings-smtp-dialog.png')} alt="Enable SMTP dialog with the mail_from, server, username, and password fields" width="500" />

## Enable the SSL Certificate

**Step 1:** On the **Server settings** page, under **Advanced**, click the **&#8942;** (More options) menu next to **SSL certificate**. If no certificate is set up yet, it shows **empty**.

<img src={useBaseUrl('img/error-reporting/universe-settings/server-settings-ssl.png')} alt="More options menu next to SSL certificate under Advanced on the Server settings page" />

**Step 2:** Select **enable**.

<img src={useBaseUrl('img/error-reporting/universe-settings/server-settings-ssl-enable.png')} alt="Enable option for the SSL certificate" />

**Step 3:** Enter your key, certificate, and chain files, and then save your changes.

## Manage Custom Network Listeners

Custom network listeners are available only for on-premises installations.

**Step 1:** On the **Server settings** page, under **Advanced**, click **Custom network listeners**.

<img src={useBaseUrl('img/error-reporting/universe-settings/server-settings-listeners-option.png')} alt="Custom network listeners option under Advanced on the Server settings page" />

**Step 2:** On the **Listeners** page, choose what you want to do:

- **Create a new listener to receive crashes:** Add an HTTP or writer listener. You can configure any number of listeners to receive crashes.
- **Modify the web interface listener:** Change the listener that serves the web console.
- **Modify the management console socket:** Change the socket that gives server administrators a terminal-based management interface.

The table at the bottom lists your current listeners, with their type, DNS name, address, port, and SSL status. To change a listener, click the **&#8942;** (More options) menu at the end of its row.

<img src={useBaseUrl('img/error-reporting/universe-settings/server-settings-listeners.png')} alt="Listeners page with the options to create and modify listeners and the table of current listeners" />

For the full setup steps, see [Coronerd Setup](/error-reporting/advanced/coroner/server-setup/).

## Related Topics

- [Account Management](/error-reporting/org-settings/user-mgmnt/)
- [Coronerd Setup](/error-reporting/advanced/coroner/server-setup/)
