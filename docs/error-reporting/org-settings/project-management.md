---
id: project-management
title: Manage Your Projects
sidebar_label: Manage Your Projects
description: View the disk space and error usage of each Error Reporting project, transfer project ownership, and open project settings from the Projects page in Universe settings.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A project is a container that organizes your errors. On the **Projects** page in **Universe settings**, you can see every project in your instance and how much disk space and how many errors each one uses. You can also transfer a project to another owner and open a project's settings.

## Prerequisites

You need the admin role in your Error Reporting instance. For more information, see [User Roles](/error-reporting/org-settings/user-mgmnt/#user-roles).

## View Your Projects

**Step 1:** Click your profile icon in the upper-right corner, and then select **Universe Settings**.

<img src={useBaseUrl('img/error-reporting/universe-settings/universe-settings-menu.png')} alt="Universe Settings option in the profile menu" />

**Step 2:** In the left menu, click **Projects**.

<img src={useBaseUrl('img/error-reporting/universe-settings/manage-projects-1.png')} alt="Projects option in the left menu of Universe settings" />

**Step 3:** Review the list of projects. To find a project, type its name in **Search by project name**.

<img src={useBaseUrl('img/error-reporting/universe-settings/manage-projects-2.png')} alt="List of projects on the Projects page with their owner, disk space, errors, and rejected errors" />

The table shows the following columns for each project:

| Column | Description |
| --- | --- |
| **Name** | The name of the project. |
| **Owner** | The user who owns the project. |
| **Disk space** | The percentage of the project's storage that's used. |
| **Errors** | The percentage of the project's monthly error submissions that's used. Click the column header to sort the projects by usage. |
| **Rejected errors** | The number of errors that the project rejected after it reached its limit. A dash (-) means no errors were rejected. |

To check the storage and submission quota of your whole instance, see [Manage Your Subscriptions](/error-reporting/org-settings/manage-subscriptions/).

## Transfer Project Ownership

Transfer a project to another user when the owner changes roles or leaves your team. You must transfer the projects a user owns before you can delete that user. See [Remove a User](/error-reporting/org-settings/user-mgmnt/#remove-a-user).

**Step 1:** On the **Projects** page, click the **&#8942;** (More options) menu at the end of the project's row, and then select **Transfer ownership**.

<img src={useBaseUrl('img/error-reporting/universe-settings/manage-projects-3.png')} alt="Transfer ownership option in the More options menu of a project" />

**Step 2:** In the **Transfer Project Ownership** dialog, click **Assign new project owner**, and then select the new owner from the list. You can type a username or email to filter the list. The dialog also shows the current owner of the project.

<img src={useBaseUrl('img/error-reporting/universe-settings/manage-projects-4.png')} alt="Assign new project owner field and the list of users in the Transfer Project Ownership dialog" />

**Step 3:** Click **Transfer**.

<img src={useBaseUrl('img/error-reporting/universe-settings/manage-projects-5.png')} alt="Transfer button in the Transfer Project Ownership dialog after a new owner is selected" />

The new owner appears in the **Owner** column on the **Projects** page.

<img src={useBaseUrl('img/error-reporting/universe-settings/manage-projects-6.png')} alt="Owner column on the Projects page" />

## Open the Project Settings

**Step 1:** On the **Projects** page, click the **&#8942;** (More options) menu at the end of the project's row, and then select **View project settings**.

<img src={useBaseUrl('img/error-reporting/universe-settings/manage-projects-7.png')} alt="View project settings option in the More options menu of a project" />

The **Overview** page of the project settings opens. It shows the project owner, and a warning if the project has missing symbols. From the left menu, you can configure the project, such as its submission tokens and attributes.

:::tip
You can also change the owner from the project settings. On the **Overview** page, click the edit icon next to **Owner**.
:::

## Related Topics

- [Manage Your Subscriptions](/error-reporting/org-settings/manage-subscriptions/)
- [Storage Management](/error-reporting/project-setup/storage-management/)
