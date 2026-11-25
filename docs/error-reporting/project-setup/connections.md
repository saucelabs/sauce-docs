---
id: connections
title: Manage Your Workflow Integrations
sidebar_label: Manage Your Workflow Integrations
description: View, transfer, edit, and delete the Jira and Slack workflow connections that your Error Reporting projects share, and the integrations that use them, from the Workflow connections page in Universe settings.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

When you connect an integration that installs an app or connects to a third-party domain, such as Jira or Slack, Error Reporting creates a workflow connection. Workflow connections belong to your whole instance, not to one project, so every project can use the same Jira site or Slack workspace without connecting it again.

You create a connection when you set up an integration in a project, under **Project settings** > **Integrations**. For the setup steps, see [Workflow Integrations](/error-reporting/workflow-integrations/overview/). After that, you manage the connection in **Universe settings**.

## Prerequisites

You need the admin role in your Error Reporting instance. For more information, see [User Roles](/error-reporting/org-settings/user-mgmnt/#user-roles).

## View Your Workflow Connections

**Step 1:** Click your profile icon in the upper-right corner, and then select **Universe Settings**.

<img src={useBaseUrl('img/error-reporting/universe-settings/universe-settings-menu.png')} alt="Universe Settings option in the profile menu" />

**Step 2:** In the left menu, click **Workflow connections**.

<img src={useBaseUrl('img/error-reporting/universe-settings/workflow-connections-1.png')} alt="Workflow connections option in the left menu of Universe settings" />

**Step 3:** Review your connections. Each connection, such as a Jira site or a Slack workspace, has its own table with every integration that uses it. For each integration, the table shows the following columns:

| Column | Description |
| --- | --- |
| **Project** | The project that uses the integration. |
| **Integration name** | The name of the integration in the project. |
| **Created** | The date the integration was created. |
| **Owner** | The owner of the integration. |
| **Status** | Whether the integration is **Active**. |

<img src={useBaseUrl('img/error-reporting/universe-settings/workflow-connections-2.png')} alt="Jira connection on the Workflow connections page with the table of integrations that use it" />

You can manage a whole connection with the **Transfer**, **Edit**, and **Delete** options next to its name, or a single integration with the **&#8942;** (More options) menu at the end of its row.

## Transfer Integrations to Another Connection

If your Jira site or Slack workspace changes, transfer the integrations to a new connection of the same type. First create the new connection by setting up the integration in a project. See [Workflow Integrations](/error-reporting/workflow-integrations/overview/).

### Transfer One Integration

**Step 1:** On the **Workflow connections** page, click the **&#8942;** (More options) menu at the end of the integration's row, and then select **Transfer integration to another connection**.

<img src={useBaseUrl('img/error-reporting/universe-settings/workflow-connections-3.png')} alt="Transfer integration to another connection option in the More options menu of an integration on the Workflow connections page" />

**Step 2:** In the **Transfer integration to another connection** dialog, under **Transfer integration to**, select the connection you want to move the integration to, and then click **Transfer**.

<img src={useBaseUrl('img/error-reporting/universe-settings/workflow-connections-4.png')} alt="Transfer integration to another connection dialog with the Transfer integration to list and the Transfer button" width="500" />

### Transfer All Integrations of a Connection

**Step 1:** On the **Workflow connections** page, click **Transfer** next to the name of the connection. The tooltip shows **Transfer all associated integrations**.

<img src={useBaseUrl('img/error-reporting/universe-settings/workflow-connections-5.png')} alt="Transfer option next to the name of a Slack connection with the Transfer all associated integrations tooltip" />

**Step 2:** Select the connection you want to move all the integrations to, and then confirm.

## Edit a Connection or an Integration

- **To edit a connection:** Click **Edit** next to the name of the connection. What you can edit depends on the connection type. To change the details of a connection, we recommend that you create a new connection and [transfer the integrations](#transfer-integrations-to-another-connection) to it.
- **To edit an integration:** Click the **&#8942;** (More options) menu at the end of the integration's row, and then select **Integration settings**.

## Delete a Connection or an Integration

:::caution
Deleting a connection also deletes all the integrations that use it. Error Reporting tries to keep the related alerts, but alerts that have no connected integration are disabled.
:::

- **To delete a connection:** Click **Delete** next to the name of the connection, and then confirm.
- **To delete one integration:** Click the **&#8942;** (More options) menu at the end of the integration's row, select **Delete integration**, and then confirm.

<img src={useBaseUrl('/img/error-reporting/project-settings/delete-connection.png')} alt="Delete connection confirmation dialog" />

## Related Topics

- [Workflow Integrations](/error-reporting/workflow-integrations/overview/)
- [Create Issue Based Alerts](/error-reporting/project-setup/alerts/)
