---
id: jira
title: Jira (Beta)
sidebar_label: Jira (Beta)
description: Connect Sauce Labs to Jira Cloud to create Jira tickets from your test results, with the test context and attachments included.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Jira is an issue and project tracking tool that teams use to plan, track, and resolve work. The Sauce Labs integration with Jira lets you create Jira tickets directly from your Sauce Labs test results, so you can log a defect where you find it without copying details between tools. Each ticket includes the test context you choose and a link back to the result in Sauce Labs, and stays linked to the test result, so you can see which tickets were already created for it. The following sections explain how to set up the integration and use it with your Sauce Labs tests.

:::note
To create Jira issues from Error Reporting errors instead of test results, see **[Jira Integration with Error Reporting](/error-reporting/workflow-integrations/issue-tracking/jira/)**.
:::

## How It Works

An organization admin connects your Jira Cloud site to your Sauce Labs organization by authorizing Sauce Labs with Atlassian. After the site is connected, you can create Jira tickets manually from the following places in Sauce Labs:

* **Automated** > **Test Results**
* **Automated** > **Test Details**
* **Automated** > **Builds** > **Build Details**
* **Visual** > **Builds** > **Build Details**, in the snapshot review

When you create a ticket, you choose the Jira project and issue type, edit the ticket summary and description, and select the test details and attachments to include, such as screenshots, the video, and logs. Sauce Labs creates the ticket in Jira and links it to the test result. A Jira icon with the number of linked tickets appears on the test result, and you can open the list of linked tickets and their details without leaving Sauce Labs.

You can use the integration to:

* Create a Jira ticket for a failed test from the place where you find the failure.
* Include only the test context that matters, such as the test name, job ID, status, OS, and browser.
* Attach screenshots, the video, and logs from the test to the ticket.
* See the Jira tickets already created for a test result, and their status, before you create another one.

## Prerequisites

Before you begin, make sure you have:

* A Jira Cloud site.
* A Sauce Labs account with access to the [Integrations](https://app.saucelabs.com/integrations) page. Only an organization admin can connect or disconnect a Jira site.
* Permission to create issues in the Jira projects where you want to create tickets.

## Authentication and Permissions

The Jira integration uses **Atlassian's app authorization** instead of an API key or token. When you connect a Jira site, Atlassian asks you to choose the site and to authorize Sauce Labs to access it on your behalf. Atlassian lists the permissions that Sauce Labs requests before you accept.

{/* TODO: Add the list of permissions shown on the Atlassian authorization screen, as in the Slack page. */}

To revoke access, [disconnect the Jira site](#disconnect-a-jira-site) in Sauce Labs.

## Set Up the Integration

An organization admin connects the Jira Cloud site once for the whole organization.

### Connect Your Jira Cloud Site

**Step 1:** Inside your Sauce Labs account, click on your **profile icon** in the top-right corner, and then select **[Integrations](https://app.saucelabs.com/integrations)** from the dropdown list.

<img src={useBaseUrl('/img/integrations/jira/jira-1.png')} alt="Integrations option in the profile menu"/>

**Step 2:** Find **Integrate with Jira** and click on **Configure**. The **Jira Configuration** page opens.

<img src={useBaseUrl('/img/integrations/jira/jira-2.png')} alt="Integrate with Jira on the Integrations page"/>

**Step 3:** Click **Connect Jira**. This starts the process of connecting your Jira Cloud site to Sauce Labs.

<img src={useBaseUrl('/img/integrations/jira/jira-3.png')} alt="Connect Jira button on the Jira Configuration page"/>

**Step 4:** Log in to your Atlassian account. Then select the Jira Cloud site you want to connect, review the permissions that Sauce Labs requests, and select **Accept**.

<img src={useBaseUrl('/img/integrations/jira/jira-4.png')} alt="Atlassian login page"/>

**Step 5:** After authorization is complete, you are redirected to the **Jira Configuration** page. The Jira site appears under **Connected Sites** with the **Connected** status.

<img src={useBaseUrl('/img/integrations/jira/jira-5.png')} alt="Connected Jira site under Connected Sites on the Jira Configuration page"/>

## Verify the Integration

After setup, confirm the integration from both sides:

* **In Sauce Labs:** On the **Jira Configuration** page, the Jira site appears under **Connected Sites** with the **Connected** status. If it does not, see [Connect Your Jira Cloud Site](#connect-your-jira-cloud-site).
* **In Jira:** Create a test ticket from a test result, as described in [Create a Jira Ticket](#create-a-jira-ticket), and check that it appears in the Jira project you selected.

If either check fails, see [Troubleshooting](#troubleshooting).

## Create a Jira Ticket

You create a Jira ticket from the **Create Jira Ticket** dialog. You can open the dialog from the **Test Results**, **Test Details**, and **Build Details** pages, and from the snapshot review in Visual Testing. The dialog works the same way everywhere. The test details and attachments it offers depend on the test.

### From the Test Results Page

**Step 1:** In Sauce Labs, click **Automated**, and then click **Test Results**.

<img src={useBaseUrl('/img/integrations/jira/jira-6.png')} alt="Test Results option under Automated in the left navigation"/>

**Step 2:** Find the test result you want to create a ticket for, and then select the **&#8942;** (More options) menu at the end of its row.

<img src={useBaseUrl('/img/integrations/jira/jira-7.png')} alt="More options menu at the end of each test result row on the Test Results page"/>

**Step 3:** Select **Create JIRA Ticket**.

<img src={useBaseUrl('/img/integrations/jira/jira-8.png')} alt="Create JIRA Ticket option in the More options menu of a test result on the Test Results page"/>

**Step 4:** Complete the **Create Jira Ticket** dialog. See [Fill In the Create Jira Ticket Dialog](#fill-in-the-create-jira-ticket-dialog).

### From the Test Details Page

**Step 1:** Open the **Test Details** page for the test result you want to create a ticket for.

**Step 2:** Click the **Jira** icon below the test name. The **Jira Tickets** drawer opens and lists the tickets already linked to the test.

<img src={useBaseUrl('/img/integrations/jira/jira-9.png')} alt="Jira icon with the number of linked tickets on the Test Details page"/>

**Step 3:** Select **Create Jira Ticket**.

<img src={useBaseUrl('/img/integrations/jira/jira-10.png')} alt="Create Jira Ticket button in the Jira Tickets drawer" width="400"/>

**Step 4:** Complete the **Create Jira Ticket** dialog. See [Fill In the Create Jira Ticket Dialog](#fill-in-the-create-jira-ticket-dialog).

### From the Build Details Page

Create a ticket from a build to report a problem with the build as a whole, such as several failed tests.

**Step 1:** In Sauce Labs, click **Automated**, click **Builds**, and then click the build you want to create a ticket for.

<img src={useBaseUrl('/img/integrations/jira/jira-11.png')} alt="Builds page under Automated with the list of builds"/>

**Step 2:** On the **Build Details** page, select the **&#8943;** (More options) menu in the upper-right corner, and then select **Create JIRA Ticket**.

<img src={useBaseUrl('/img/integrations/jira/jira-12.png')} alt="Create JIRA Ticket option in the More options menu on the Build Details page"/>

**Step 3:** Complete the **Create Jira Ticket** dialog. See [Fill In the Create Jira Ticket Dialog](#fill-in-the-create-jira-ticket-dialog).

### From the Visual Snapshot Review

Create a ticket from a visual snapshot to report a visual change that is a defect.

**Step 1:** In Sauce Labs, click **Visual Testing**, click **Builds**, and then open the build that contains the snapshot.

**Step 2:** Open the snapshot you want to report. The snapshot review opens and shows the baseline and the current snapshot.

**Step 3:** Select the **&#8943;** (More options) menu in the upper-right corner, and then select **Create Jira Ticket**.

<img src={useBaseUrl('/img/integrations/jira/jira-13.png')} alt="Create Jira Ticket option in the More options menu of the visual snapshot review"/>

**Step 4:** Complete the **Create Jira Ticket** dialog. See [Fill In the Create Jira Ticket Dialog](#fill-in-the-create-jira-ticket-dialog).

### Fill In the Create Jira Ticket Dialog

The **Create Jira Ticket** dialog shows the connected Jira site next to **Workspace**, and the test the ticket will be linked to under **Linked test**.

**Step 1:** In **Project**, search for and select the Jira project where you want to create the ticket. The rest of the fields appear after you select a project.

<img src={useBaseUrl('/img/integrations/jira/jira-14.png')} alt="Project field in the Create Jira Ticket dialog" width="450"/>

**Step 2:** Complete the ticket fields described in the following table. The fields available after **Project** depend on the configuration of the selected Jira project.

| Ref. | Field | Description |
| ----- | ----- | ----- |
| **1** | **Project** | The Jira project where the ticket is created. Search by project name or key. |
| **2** | **Issue Type** | The Jira issue type of the ticket, for example, **Bug**. |
| **3** | **Summary** | The title of the ticket in Jira. Sauce Labs fills it in from the test result, and you can edit it. |
| **4** | **Status** | The Jira status the ticket is created with, for example, **In Progress**. |
| **5** | **Priority** | The Jira priority of the ticket, for example, **Major**. |
| **6** | **Include in Description** | The test details to add to the ticket description: **Test name**, **Job ID**, **Status**, **OS**, and **Browser**. Select or clear each detail. You can also edit the description text directly. |
| **7** | **Assignee** | The Jira user the ticket is assigned to. Search by name. |
| **8** | **Tags** | (Optional) Labels to add to the ticket. Separate multiple tags with commas, for example, `cypress, e2e, failed-test`. |
| **9** | **Attachments** | The files from the test to attach to the ticket, such as screenshots, the video, the browser console log, the job configuration, the test report, and the Sauce Labs job log. The video is attached as a link. The available files depend on the test. |
| **10** | **Linked test** | The test result that the ticket is linked to, with its status. Select **Linked tickets** to view the tickets already linked to the test. |

<img src={useBaseUrl('/img/integrations/jira/jira-15.png')} alt="Create Jira Ticket dialog with the ticket fields, the description, and the attachments" width="450"/>

**Step 3:** After you complete the fields and select the attachments, click **Create Ticket**.

<img src={useBaseUrl('/img/integrations/jira/jira-16.png')} alt="Create Ticket button in the Create Jira Ticket dialog" width="450"/>

**Result:** Sauce Labs creates the ticket in Jira and shows the **Ticket created successfully** message, with a link to open the ticket in Jira. The ticket is linked to the test result, and the number next to the **Jira** icon on the test result increases by one. The selected attachments are uploaded to the ticket after it is created.

<img src={useBaseUrl('/img/integrations/jira/jira-17.png')} alt="Ticket created successfully message with a link to the ticket in Jira" width="500"/>

## View Linked Jira Tickets

Every ticket you create from Sauce Labs stays linked to its test result. A **Jira** icon with the number of linked tickets appears on the test result on the **Test Results**, **Test Details**, and **Build Details** pages, and in the visual snapshot review. Hover over the icon to see the number of tickets. Check the linked tickets before you create a new one to avoid duplicates.

**Step 1:** Open the linked tickets in one of the following ways:

* On the **Test Details** or **Build Details** page, click the **Jira** icon.
* In the visual snapshot review, select the **&#8943;** (More options) menu, and then select **View Existing Jira Tickets**.
* In the **Create Jira Ticket** dialog, select **Linked tickets** under **Linked test**.

The **Jira Tickets** drawer opens and lists the tickets linked to the test. Each ticket card shows the ticket key, Jira status, priority, summary, assignee, and creation date.

<img src={useBaseUrl('/img/integrations/jira/jira-18.png')} alt="Jira Tickets drawer listing the tickets linked to a test" width="400"/>

**Step 2:** (Optional) Use the **Search by title or assignee** field to find a ticket. To get the latest status of the tickets from Jira, select the **Refresh** icon.

**Step 3:** Select a ticket card to view the ticket details, including the issue type, reporter, project, tags, and description. To open the ticket in Jira, select the ticket key.

<img src={useBaseUrl('/img/integrations/jira/jira-19.png')} alt="Ticket details in the Jira Tickets drawer" width="400"/>

## Manage the Integration

### Disconnect a Jira Site

Disconnect the Jira site when you no longer want to create Jira tickets from Sauce Labs. Only an organization admin can disconnect a Jira site.

**Step 1:** On the **[Integrations](https://app.saucelabs.com/integrations)** page, find **Integrate with Jira** and click on **Configure**.

<img src={useBaseUrl('/img/integrations/jira/jira-20.png')} alt="Configure button for Integrate with Jira on the Integrations page"/>

**Step 2:** Under **Connected Sites**, click **Disconnect** next to the Jira site.

<img src={useBaseUrl('/img/integrations/jira/jira-21.png')} alt="Disconnect button for the connected Jira site on the Jira Configuration page"/>

**Result:** The Jira site is disconnected from Sauce Labs, and the **Create Jira Ticket** option is no longer available. Tickets that were already created stay in Jira.

## Troubleshooting

If the Jira integration does not work as expected, use the following solutions to resolve common issues.

<details>
<summary><strong>You cannot connect a Jira site</strong></summary>

Only an organization admin can connect a Jira site, and the site must be a Jira Cloud site. If your Atlassian organization restricts app access, contact your Atlassian administrator.

</details>

<details>
<summary><strong>The Create Jira Ticket option is not available</strong></summary>

Check that a Jira site is listed under **Connected Sites** on the **Jira Configuration** page. If no site is connected, contact an organization admin to [connect your Jira Cloud site](#connect-your-jira-cloud-site).

</details>

<details>
<summary><strong>A Jira project is missing from the Project list</strong></summary>

The **Project** list shows only the projects you can create issues in. Ask your Jira administrator to give you permission to create issues in the project.

</details>

<details>
<summary><strong>An attachment is missing from the ticket</strong></summary>

Attachments are uploaded after the ticket is created, so they can take a moment to appear in Jira. Refresh the ticket in Jira. The video is added as a link, not as a file.

</details>

<details>
<summary><strong>The ticket status in Sauce Labs is out of date</strong></summary>

In the **Jira Tickets** drawer, select the **Refresh** icon to get the latest status from Jira.

</details>

## Next Steps

* Learn how to read your results in [Viewing Test Results](/test-results/viewing-test-results/).
* Learn what each status means in [Test Status](/test-results/test-status).
* Send test results to Slack with the [Slack integration](/basics/integrations/slack/).
* Create Jira issues from errors with [Jira Integration with Error Reporting](/error-reporting/workflow-integrations/issue-tracking/jira/).
