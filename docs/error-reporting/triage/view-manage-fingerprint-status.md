---
id: view-manage-fingerprint-status
title: View & Manage Fingerprint Status
sidebar_label: View & Manage Fingerprint Status
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Fingerprint statuses help you track the investigation lifecycle of application errors and communicate their current state to your team. Each fingerprint in the **Triage** dashboard is assigned a status that indicates whether it requires investigation, is actively being worked on, has been resolved, or has been intentionally muted.

Managing fingerprint statuses enables engineering teams to prioritize work, monitor investigation progress, and maintain an organized view of application stability.

## Fingerprint Statuses

Each fingerprint can have one of the following statuses:

| Status | Description |
| ----- | ----- |
| **Open** | Indicates that the fingerprint requires investigation. A fingerprint is **Open** when it has no assignee or linked issue and has not been marked as **Resolved** or **Muted**. |
| **In Progress** | Indicates that the fingerprint is actively being investigated. This status is applied when the fingerprint is assigned to a user or linked to an issue, such as Jira. |
| **Resolved** | Indicates that the underlying issue has been fixed. Use **Resolved** when you believe the fingerprint no longer requires investigation. |
| **Muted** | Indicates that the fingerprint should no longer appear as an active issue. Use **Muted** when the fingerprint is not currently actionable or you do not want to track it as an active investigation. |

## Update a Fingerprint Status

You can update the status of a fingerprint directly from the **Status** column in the **Triage** dashboard. Updating the status helps your team track the investigation progress and identify which fingerprint groups require attention.

**Step 1:** In the **Error Reporting** web console, navigate to **Triage** for the project that contains the fingerprint you want to manage.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-status/fingerprint-status-1.png')} alt="View & Manage Fingerprint Status" />

If necessary, use the **Time Frame** selector or apply **Filters** to locate the fingerprint you want to update.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-status/fingerprint-status-2.png')} alt="View & Manage Fingerprint Status" />

**Step 2:** In the fingerprint table, locate the **Status** column for the corresponding fingerprint.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-status/fingerprint-status-3.png')} alt="View & Manage Fingerprint Status" />

**Step 3:** Select the current status (for example, **Open**, **In Progress**, **Resolved**, or **Muted**) to display the available status options. The fingerprint now reflects the selected investigation state in the Triage dashboard.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-status/fingerprint-status-4.png')} alt="View & Manage Fingerprint Status" />

## Automatic Status Changes

In addition to manual updates, Error Reporting automatically updates fingerprint statuses based on certain actions.

* Assigning a fingerprint to a user changes its status from **Open** to **In Progress**.

* Linking a fingerprint to an external issue, such as a Jira ticket, also changes its status to **In Progress**.

* If all assignees are removed and all linked issues are unlinked, an **In Progress**
  fingerprint automatically returns to **Open**, provided it has not been marked as **Resolved** or **Muted**.

These automatic transitions help ensure that the fingerprint status accurately reflects its current investigation state.

## Reopen Behavior

Fingerprints marked as **Resolved** or **Muted** remain in their assigned state until they are manually updated or automatically reopened based on the configured reopen criteria. This behavior helps teams maintain an organized view of application stability while ensuring that previously addressed issues can be identified if they occur again.

A fingerprint can be reopened in the following situations:

* **Manual status update:** An authorized user changes the fingerprint status from **Resolved** or **Muted** back to **Open** or another applicable status.

* **Configured reopen criteria are met:** If reopen criteria have been configured for the fingerprint, Error Reporting automatically reopens it when the specified conditions are satisfied. For example, a fingerprint can be reopened if it is detected in a newer application version or reoccurs after a defined period of time.

When a fingerprint is automatically reopened, its status changes to **Open**, allowing your team to resume investigation and address the issue as part of the active workflow.

:::important
Changing a fingerprint to **Resolved** or **Muted** does not remove it from the system. The fingerprint remains available for future analysis and can be reopened manually or automatically if the configured reopen criteria are met.
:::
