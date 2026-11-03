---
id: inspect-crash-details
title: Inspect Crash Details and Error Data
sidebar_label: Inspect Crash Details and Error Data
description: Review the source code, attributes, global annotations, breadcrumbs, and attachments for an error in the Debug view.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

When investigating an error in Backtrace, the **Error Group Details** page provides information that can help you understand what happened and identify the conditions surrounding the crash.

In addition to the error message and callstack, you can inspect the crash environment, machine attributes, global annotations, breadcrumbs, and attachments. These details can help you determine whether an error is related to a specific device, operating system, software version, application state, or activity that occurred immediately before the crash.

## Open the Debug View

**Step 1:** From the **Error Group Details** page, open the error you want to investigate and select **Debug** from the top navigation.

<img src={useBaseUrl('img/error-reporting/debug-errors/inspect-crash/inspect-crash-1.png')} alt="Debug option in the top navigation of the Error Group Details page" />

**Step 2:** Review the information displayed in the Debug view. Use the bottom panel tabs to access different types of information:

* **Source:** View the source code associated with the selected callstack location, when source information is available.
* **Attributes:** Review attributes extracted from the dump or provided when the dump was submitted.
* **Global annotations:** Inspect additional information derived from the dump.
* **Breadcrumbs:** Review events that occurred before the crash.
* **Attachments:** Preview or download files associated with the error.

<img src={useBaseUrl('img/error-reporting/debug-errors/inspect-crash/inspect-crash-2.png')} alt="Bottom panel tabs in the Debug view" />

## Inspect the Source Code

The **Source** tab helps you understand what was happening in the application at the location identified by the callstack. When source information is available, you can view the relevant source file and the code surrounding the reported line.

**Step 1:** Select **Source** in the bottom panel.

<img src={useBaseUrl('img/error-reporting/debug-errors/inspect-crash/inspect-crash-3.png')} alt="Source tab in the bottom panel of the Debug view" />

**Step 2:** Locate the line referenced by the callstack, and review the surrounding code to understand what the application was doing when the error occurred.

The source information above the code includes the **Repository**, **Date**, **Revision**, and **Filepath**. Use it to locate the corresponding source code in your development environment.

:::note
If Backtrace can't determine the source location from the available information, the **Source** tab displays `Not enough information to locate source code: Filename not specified.`
:::

## Inspect Crash Attributes

The **Attributes** tab provides information extracted from the crash dump and information supplied when the dump was submitted. These attributes can provide additional context about the application, device, operating system, and environment in which the error occurred.

**Step 1:** Select **Attributes** in the bottom panel.

<img src={useBaseUrl('img/error-reporting/debug-errors/inspect-crash/inspect-crash-4.png')} alt="Attributes tab with the Custom, Devices and Platforms, and Misc categories" />

**Step 2:** To find a specific attribute, enter its name in the **Search attributes** field.

The attributes are grouped into categories. Depending on the submitted data, they may include:

| Category | Example attributes |
| ----- | ----- |
| Custom | Attributes your application adds to the report, such as `device.name`, `release.channel`, and `user.id`. |
| Devices and Platforms | The device and operating system, such as `cpu.brand`, `device.model`, `device.type`, `uname.sysname`, and `uname.version`. |
| Misc | Application and submission details, such as `application`, `application.version`, `application.unity.version`, and `backtrace.version`. |

Compare the attribute values to identify information that may be relevant to the error. For example, you can check whether the issue is associated with a particular **device model**, **operating system version**, **release channel**, or **application version**.

## Review Global Annotations

The **Global annotations** tab displays additional information derived from the dump. The information is organized in a tree structure, so you can expand individual entries and inspect their contents.

**Step 1:** Select **Global annotations** in the bottom panel.

<img src={useBaseUrl('img/error-reporting/debug-errors/inspect-crash/inspect-crash-5.png')} alt="Global annotations tab with the Environment Variables, Exception properties, and Game objects entries" />

**Step 2:** Click the arrow next to an entry to expand it and view the information stored in it.

Depending on the submitted dump, you may find entries such as:

* **Environment Variables:** The environment variables of the machine where the error occurred, such as `USERDOMAIN` and `ProgramFiles`.
* **Exception properties:** Details of the exception, such as its `message` and `stackTrace`.
* **Game objects:** The game objects captured when the error occurred.

Compare the global annotation data with the **callstack** and **attributes** to identify information that may help determine the possible cause of the error.

## Scan the Prior Event Logs

The **Breadcrumbs** tab shows events that occurred before the crash or error. Reviewing these events can help you reconstruct the sequence of activity leading up to the failure.

Depending on the SDK and configuration, breadcrumbs may contain application events as well as automatic system events, such as battery state changes, foreground and background transitions, and memory events.

**Step 1:** Select **Breadcrumbs** in the bottom panel. The events are listed with the most recent event at the top.

<img src={useBaseUrl('img/error-reporting/debug-errors/inspect-crash/inspect-crash-6.png')} alt="Breadcrumbs tab listing events with their timestamp, level, type, and description" />

**Step 2:** To narrow the list, enter a keyword in the **Search breadcrumbs** field, or use the **Filter by** dropdown lists to show only a specific level or type of event.

Each event shows the following information:

| Column | Description |
| ----- | ----- |
| Timestamp | When the event occurred, such as `2026-11-03 16:24:12:344`. |
| Level | The event level, such as **Info** or **Error**. Error events are marked with a red dot. |
| Type | The event type, such as **Log**, **Manual**, or **System**. |
| Description | What happened during the event. |

Pay particular attention to the events immediately before the crash, as they may provide clues about what led to the error. For example, the breadcrumbs may contain events such as:

* `Spawning asteroid` (**Info**, **Manual**)
* `DivideByZeroException: Attempted to divide by zero.` (**Error**, **Log**)
* `Parameter cannot be null` (**Error**, **System**)

Use the sequence of events to determine whether a particular user action, application state, or system event occurred immediately before the error.

## Download Raw Log Files and Attachments

The **Attachments** tab provides access to files submitted with the error. These files can contain additional information that may not be available directly in the Debug view.

The available files depend on the data submitted with the error. Attachments may include raw payloads, JSON data, logs, images, breadcrumbs, or other error-related information.

**Step 1:** Select **Attachments** in the bottom panel.

<img src={useBaseUrl('img/error-reporting/debug-errors/inspect-crash/inspect-crash-7.png')} alt="Attachments tab listing the files submitted with the error" />

**Step 2:** Click **Download** next to a file to save it for further investigation.

<img src={useBaseUrl('img/error-reporting/debug-errors/inspect-crash/inspect-crash-8.png')} alt="Download option for each file in the Attachments tab" />

The attachments can include a breadcrumbs file (`bt-breadcrumbs-0`), text files, images, and the JSON and raw versions of the error report. If the **Preview** option is available for a file, select it to inspect the file's contents without downloading it.
