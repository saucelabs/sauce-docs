---
id: manage-subscriptions
title: Manage Your Subscriptions
sidebar_label: Manage Your Subscriptions
description: Check how much storage and monthly submission quota your Error Reporting instance has purchased and how much of it is used, from the Subscriptions page in Universe settings.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Subscriptions** page in **Universe settings** shows the storage and monthly submission quota purchased for your Error Reporting instance, and how much of it is used.

When your instance uses 100% of its storage, it stops accepting new error submissions until space is available again. Admins get an in-app and email notification when the instance uses 75% or more of its storage.

## Prerequisites

You need the admin role in your Error Reporting instance. For more information, see [User Roles](/error-reporting/org-settings/user-mgmnt/#user-roles).

## View Your Subscription

Click your profile icon in the upper-right corner, and then select **Universe Settings**. In the left menu, click **Subscriptions**. The page shows the storage purchased for your instance and the percentage that is used.

<img src={useBaseUrl('img/error-reporting/universe-settings/universe-settings-menu.png')} alt="Universe Settings option in the profile menu" />

To see the storage that each project uses, go to **Project settings** > **Overview**, and check **Storage usage**.

## Free Up or Add Storage

If your instance is running out of storage, you can:

- Reduce the storage your projects use with retention policies, storage sampling, and submission actions. For more information, see [Storage Management](/error-reporting/project-setup/storage-management/).
- Check which projects use the most disk space and errors on the **Projects** page. See [Manage Your Projects](/error-reporting/org-settings/project-management/).
- Buy more storage or monthly submission quota. Contact your Sauce Labs sales representative.

## Related Topics

- [Storage Management](/error-reporting/project-setup/storage-management/)
- [Manage Your Projects](/error-reporting/org-settings/project-management/)
