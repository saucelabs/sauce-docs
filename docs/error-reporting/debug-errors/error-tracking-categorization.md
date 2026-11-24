---
id: error-tracking-categorization
title: Error Tracking & Categorization
sidebar_label: Error Tracking & Categorization
description: Connect error groups to external tickets, label them with custom tags, and move between the instances in an error group.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

When debugging an error, you can organize and track issues directly from the error details view. Use the available options to connect errors to external tickets, categorize error groups with custom tags, and review different instances of the same error.

## Connect Crashes to External Task Tickets

Error Reporting lets you associate an error group with external task-tracking tickets. Use the **Tickets** menu to review tickets that are already connected to the error group, create a new Jira ticket, or add a link to an external ticket.

Connecting tickets helps you keep track of the work associated with an error without leaving the error group.

From the ticket options, you can:

* Create a new Jira ticket.
* Associate an existing ticket with the error group.
* Add an external link or standalone reference.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-1.png')} alt="Tickets menu in the error group header" />

### Manage Existing Tickets

The **Tickets** menu displays the tickets associated with the error group. When you open the **Tickets** menu, the **Manage existing tickets** section lists the tickets linked to the error group.

For each linked ticket, you can:

* **View the ticket:** Select the ticket ID to open the associated ticket.
* **Remove the ticket:** Select the **X** next to a ticket to remove its association with the error group.

For example, the error group in the following screenshot has three existing tickets: `NTDM-2334`, `NTDM-1958`, and `NTDM-2333`.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-2.png')} alt="Manage existing tickets section listing three linked tickets" />

:::note
Removing a ticket from this list only removes its association with the error group.
:::

### Create a New Ticket

You can create a new Jira ticket directly from an error group using the **Tickets** menu. This lets you create a task for investigating or addressing the reported error without manually copying information into your task-tracking system.

**Step 1:** Open the error group you want to associate with a ticket and select **Tickets** from the error group header.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-3.png')} alt="Tickets option in the error group header" />

**Step 2:** In the **Create a ticket** section, select **JIRA** to open the ticket details.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-4.png')} alt="JIRA option in the Create a ticket section" />

**Step 3:** Enter the required information, including the **task title**, **owner**, and **additional description**. Under **Task's owner**, select **Add** and choose the appropriate team member.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-5.png')} alt="Jira ticket form with the task title, owner, and description fields" />

Use this option when the error doesn't already have a corresponding task and you want to create one for investigation or resolution. After you create the ticket, it can be associated with the error group, connecting the crash investigation with your external issue-tracking workflow.

### Add an External Link

You can also attach a standalone external reference. Add an external link when you want to associate the error group with information outside the available ticketing integration, such as another tracking system, reference, or related resource.

**Step 1:** Open the **Tickets** menu for the relevant error group and select **Add link** under **Other**.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-6.png')} alt="Add link option under Other in the Tickets menu" />

**Step 2:** Enter the **URL** and **ID** of the external ticket, then select the relevant option under **Link to Integration**.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-7.png')} alt="Add link form with the URL, ID, and Link to Integration fields" />

**Step 3:** Select **Submit** to save the link. The external ticket is associated with the error group and can be accessed from the **Tickets** menu.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-8.png')} alt="External link listed in the Tickets menu" />

## Label Issues with Custom Group Tags

Custom group tags help you categorize error groups using labels that are meaningful to your team. Use tags to identify issues by severity, product area, release, error type, or other internal categories. Consistent tagging makes related issues easier to identify and manage.

**Step 1:** Open the relevant error group and select **Tags** to view the tags associated with the group.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-9.png')} alt="Tags option in the error group header" />

**Step 2:** Search for an existing tag using the **Search tags to add** field, or enter a new tag name to add it to the group.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-10.png')} alt="Search tags to add field in the Tags menu" />

**Step 3:** Select the tags to add or remove. Select **Close** when you finish managing the tags.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-11.png')} alt="Selected tags and the Close button in the Tags menu" />

:::tip
Use consistent and descriptive tags to make error groups easier to identify and manage.
:::

## Review Multi-Instance Variations

An error group can contain multiple instances of the same or similar crashes or errors. Each instance represents an individual occurrence of the error and can contain additional details about when and where the error occurred.

Review the instances in an error group to investigate individual occurrences, compare their details, and identify differences between them.

### Navigate Between Error Instances

Use the navigation controls on the error details page to move between the instances in the error group. The instance counter shows which instance you're viewing and the total number of instances in the group.

For example, **4/386** means that you're viewing instance **4** of the **386** instances in the error group.

Use the **previous** and **next** arrows to move through the instances. This lets you review individual occurrences without returning to the error group or opening each instance separately. As you move between instances, the error details update to reflect the selected occurrence.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-12.png')} alt="Instance counter with the previous and next navigation arrows" />

### Review Instance Details

After selecting an instance, review the available information to understand that occurrence of the error. Depending on the type of error and the information collected, the details may include:

| Ref. | Information | Description |
| ----- | ----- | ----- |
| 1 | Error details | The primary message describing the error or crash, giving an initial indication of the issue being investigated. |
| 2 | Threads | The thread associated with the selected error instance and related thread information. |
| 3 | Call stack | The sequence of function calls leading up to the error. Review the stack frames to trace where the error occurred. |
| 4 | Register values | The register values captured when the error occurred, which can provide additional information for debugging. |
| 5 | Debug information | Detailed information about the error, including exception details, stack information, and disassembly output. |
| 6 | Metadata fields | Contextual information such as the application version, graphic name, scene name, error type, and hostname. |
| 7 | Device and platform | The device and platform associated with the error instance, such as PS4. |

<img src={useBaseUrl('img/error-reporting/debug-errors/error-tracking/error-tracking-13.png')} alt="Error instance details with each area numbered" />

Compare these details across multiple instances to determine whether the errors occurred under similar conditions or whether specific information differs between occurrences.
