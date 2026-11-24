---
id: error-status-lifecycle
title: Error Status & Life Cycle
sidebar_label: Error Status & Life Cycle
description: Track an error's state and assign it to a team member from the Debug view.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Errors can move through different stages as they are investigated and resolved. The **Debug** view lets you track the status of an error and assign ownership to the appropriate team member.

By managing an error's status and assignee, you can keep investigations organized, reduce unnecessary noise, and make it clear who is responsible for following up on an issue.

## Change the Error Status

The **State** control lets you track and manage an error throughout its life cycle. For example, you can mark an error as **In progress** while it is being investigated, mute it when it doesn't require attention, or resolve it after the issue has been addressed.

Updating the error state helps your team identify which issues require further investigation and which ones have already been reviewed or addressed.

**Step 1:** In the **Error Reporting** view, locate the error you want to manage, then click **View in debugger** to open the error in the **Debug** view.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-1.png')} alt="View in debugger option for an error in Error Reporting" />

**Step 2:** At the top of the **Debug** view, locate the **State** field. The field displays the error's status, such as **In progress**.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-2.png')} alt="State field at the top of the Debug view" />

**Step 3:** Select the state to open the list of available status options, then select the status you want to apply to the error:

* **In progress** to indicate that the error is being investigated.
* **Mute until...** to temporarily mute the error until a specified condition is met.
* **Resolve until...** to mark the error as resolved until a specified condition is met.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-3.png')} alt="State dropdown with the In progress, Mute until, and Resolve until options" />

**Step 4:** If you select **Mute until...** or **Resolve until...**, choose the condition that determines when the error should become active again. You can select **seen again**, **seen again after**, or **seen in version**, depending on when you want the muted or resolved state to end.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-4.png')} alt="Condition options for the Mute until and Resolve until states" />

**Step 5:** After selecting the status or condition, click **Save** to apply the change. A confirmation message appears to indicate that the error status has been updated.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-5.png')} alt="Save button and confirmation message after updating the error state" />

The updated state is displayed in the error details so your team can see the status of the error.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-6.png')} alt="Updated state displayed in the error details" />

## Assign an Error to a Team Member

You can assign an error to a team member to indicate who is responsible for investigating or following up on the issue. Assigning errors helps teams coordinate investigations, clarify ownership, and identify the person responsible for the next steps.

**Step 1:** At the top of the **Debug** view, locate the **Assignees** field. This field displays the team member assigned to the error, if an assignee has already been selected.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-7.png')} alt="Assignees field at the top of the Debug view" />

**Step 2:** Click the **Assignees** field or the dropdown list arrow next to the assignee to open the list of available team members.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-8.png')} alt="Assignees dropdown with the list of team members" />

**Step 3:** Select the team member you want to assign to the error. The selected team member is displayed in the **Assignees** field, indicating who is responsible for investigating or following up on the issue.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-9.png')} alt="Selected team member displayed in the Assignees field" />
