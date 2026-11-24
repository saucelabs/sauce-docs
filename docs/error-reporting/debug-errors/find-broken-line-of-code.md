---
id: find-broken-line-of-code
title: Find the Broken Line of Code
sidebar_label: Find the Broken Line of Code
description: Use the Threads and Callstack panes in the Debug view to trace an error to the code involved.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

When investigating an error, you can use the **Debug** view to examine the error's callstack and identify the code involved when the failure occurred. The callstack shows the sequence of function calls associated with the selected thread, helping you trace the execution path and narrow down the location that may be relevant to the error.

By reviewing the **Threads** and **Callstack** panes, you can identify the thread where the error occurred, examine the functions involved, and inspect the source file and line information available in the crash report. This helps you move from an error message to the code that may require investigation.

## Prerequisites

Before investigating an error in the **Debug** view, make sure the error has been captured and is available in **Error Reporting**.

## Open the Error in the Debugger

To investigate the code associated with an error, open the error in the **Debug** view.

**Step 1:** In the **Error Reporting** view, locate the error you want to investigate, then click **View in debugger** to open the error in the **Debug** view.

<img src={useBaseUrl('img/error-reporting/debug-errors/broken-line/broken-line-1.png')} alt="View in debugger option for an error in Error Reporting" />

The **Debug** view displays the debugging information available for the selected error, including the **Threads** and **Callstack** panes.

<img src={useBaseUrl('img/error-reporting/debug-errors/broken-line/broken-line-2.png')} alt="Debug view with the Threads and Callstack panes" />

## Select the Relevant Thread

The **Threads** pane displays the threads included in the error or crash report. Each thread represents an execution path that was active when the crash information was captured.

<img src={useBaseUrl('img/error-reporting/debug-errors/broken-line/broken-line-3.png')} alt="Threads pane in the Debug view" />

Select a thread to view its associated callstack. Threads that crashed are identified with a red icon. Threads with identical callstacks are grouped together, making it easier to navigate reports that contain multiple threads with the same execution path.

<img src={useBaseUrl('img/error-reporting/debug-errors/broken-line/broken-line-4.png')} alt="Crashed thread marked with a red icon in the Threads pane" />

## Review the Callstack

After selecting a thread, review the **Callstack** pane to examine the sequence of function calls associated with that thread. Each entry in the callstack represents a function or method that was part of the execution path when the error occurred.

Review the callstack frames to identify:

* The **function or method name** involved in the execution.
* The **source file** associated with the function, when available.
* The **line number** where the function is located, when available.
* The **sequence of calls** leading through the execution path.

Use this information to trace the code associated with the selected thread and narrow down the location that may be relevant to the error.

:::tip
A callstack frame highlighted in orange is considered more likely to be relevant to the crash.
:::

<img src={useBaseUrl('img/error-reporting/debug-errors/broken-line/broken-line-5.png')} alt="Callstack pane with a frame highlighted in orange" />

## Identify the Relevant Code Location

Use the information available in the callstack to narrow down the code that may be associated with the failure. Review the callstack frames to identify:

* The function or method involved in the error.
* The source file associated with the relevant frame.
* The available line information.
* The sequence of function calls leading up to the failure.

You can select different threads and review their callstacks to investigate other execution paths captured in the crash report.

<img src={useBaseUrl('img/error-reporting/debug-errors/broken-line/broken-line-6.png')} alt="Callstack frame showing the function, source file, and line information" />
