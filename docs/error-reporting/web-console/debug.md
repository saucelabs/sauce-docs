---
id: debug
title: Debug Errors
sidebar_label: Overview
description: Investigate a single error in depth with the Debug view, from its threads and callstack to the attributes, breadcrumbs, and attachments submitted with it.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Debug** view in the Backtrace Web Console is where you investigate a single error in depth. The **Triage** and **Explore** views show which errors occur across your project and how often. The Debug view shows what was happening inside the application at the moment one error occurred: the threads that were running, the sequence of function calls that led to the failure, and the data and events captured with the report.

Use the Debug view to:

* **[Manage an error](/docs/error-reporting/debug-errors/error-status-lifecycle.md).** Mark it as in progress, muted, or resolved, and assign it to a team member.
* **[Track and categorize errors](/docs/error-reporting/debug-errors/error-tracking-categorization.md).** Connect error groups to Jira or other external tickets, label them with custom tags, and move between the instances in a group.
* **[Find the code involved](/docs/error-reporting/debug-errors/find-broken-line-of-code.md).** Trace the threads and callstack to the function, source file, and line where the error occurred.
* **[Inspect the crash environment](/docs/error-reporting/debug-errors/inspect-crash-details.md).** Review the source code, attributes, global annotations, breadcrumbs, and attachments submitted with the error.

## Open the Debug View

**Step 1:** In the Backtrace Web Console, select your project and locate the error you want to investigate.

**Step 2:** Click **View in debugger**. The error opens in the **Debug** view.

<img src={useBaseUrl('img/error-reporting/debug-errors/error-status/error-status-1.png')} alt="View in debugger option for an error in Error Reporting" />

:::tip
You can also open a fingerprint's latest error directly from the **Triage** view. For more information, see [View Fingerprint in Debugger](/docs/error-reporting/triage/fingerprint-in-debugger.md).
:::

## The Debug View at a Glance

<img src={useBaseUrl('img/error-reporting/debug-errors/overview/debug-overview-1.png')} alt="Debug view with the error header, error message, threads, callstack, debug information, and bottom panel" />

| Area | What it shows |
| ----- | ----- |
| Error header | The fingerprint and error ID, the instance counter for moving between occurrences, and the error's **State**, **Assignees**, **Tickets**, and **Tags**. See [Error Status & Life Cycle](/docs/error-reporting/debug-errors/error-status-lifecycle.md) and [Error Tracking & Categorization](/docs/error-reporting/debug-errors/error-tracking-categorization.md). |
| Error summary | The error message, when the error was created and received, the device and platform, and metadata such as `application.version`. |
| Threads and Callstack | The threads in the report and the sequence of function calls for the selected thread. See [Find the Broken Line of Code](/docs/error-reporting/debug-errors/find-broken-line-of-code.md). |
| Debug information | Detailed output for the error, such as exception details and log messages. |
| Bottom panel | The **Source**, **Attributes**, **Global annotations**, **Breadcrumbs**, and **Attachments** tabs. See [Inspect Crash Details and Error Data](/docs/error-reporting/debug-errors/inspect-crash-details.md). |

The panes you see depend on the source of the crash (a script, a minidump file, or the Backtrace proprietary format). For example, minidump reports include **Registers**, and Backtrace snapshots on UNIX and UNIX-like systems add panes such as **Variables**, **Global Variables**, and **Warnings**.

:::tip
Start with the crashed thread, marked in red in the **Threads** pane. In the **Callstack** pane, frames highlighted in orange are the most likely to be relevant to the crash.
:::
