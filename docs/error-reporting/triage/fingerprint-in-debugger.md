---
id: fingerprint-in-debugger
title: View Fingerprint in Debugger
sidebar_label: View Fingerprint in Debugger
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

When an error requires further investigation, you can open its **fingerprint in the Debugger** to examine the latest trace and callstack. This helps you identify where the error occurred and gather the details needed to troubleshoot its root cause.

## Open a Fingerprint in the Debugger

**Step 1:** From the **Triage** view, locate the fingerprint you want to investigate. The fingerprint represents a group of errors with a common root cause.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-debugger/fingerprint-debugger-1.png')} alt="View Fingerprint in Debugger" />

**Step 2:** Click the **Debugger** icon to open the fingerprint in the Debugger. When you hover over the icon, the **View in Debugger** tooltip appears.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-debugger/fingerprint-debugger-2.png')} alt="View Fingerprint in Debugger" />

**Step 3:** The Debugger opens the selected fingerprint. Review the fingerprint details in the Debugger, including the **error message, threads, callstack, and registers**. Use the **callstack** to trace the execution path and identify where the error occurred.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-debugger/fingerprint-debugger-3.png')} alt="View Fingerprint in Debugger" />

### Review the Debugger

The Debugger provides several views that help you investigate the selected fingerprint. Review the **error message, threads, callstack, and registers** to understand the error and its execution context.

| Debugger Feature | Description |
| ----- | ----- |
| **Error Message** | Displays the error associated with the selected fingerprint. |
| **Threads** | Shows the threads involved in the error and their execution context. |
| **Callstack** | Shows the sequence of function calls leading to the error, helping you identify where it occurred. |
| **Registers** | Displays register values captured when the error occurred for additional debugging context. |

### Copy the Callstack

If you need to share or further investigate the error, **hover over the Callstack** to display its details in a pop-up, then select **Copy callstack** to copy the callstack details. The copied callstack includes additional information, such as frame and line numbers, that can help with deeper debugging.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-debugger/fingerprint-debugger-4.png')} alt="View Fingerprint in Debugger" />