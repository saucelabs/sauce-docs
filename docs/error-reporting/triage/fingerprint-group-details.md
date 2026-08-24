---
id: fingerprint-group-details
title: View Fingerprint Group Details
sidebar_label: View Fingerprint Group Details
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The **Fingerprint Details** page provides detailed information about a fingerprint group, allowing you to investigate the root cause of recurring crashes or errors. In addition to basic fingerprint information, the page includes related events, stack traces, attributes, comments, tags, and other contextual data to help you analyze and troubleshoot application issues.

Use the Fingerprint Details page to understand the impact of a fingerprint, identify error patterns, review crash data, and perform investigation-related actions without leaving the Error Reporting Web Console.

## Access Fingerprint Details Page

**Step 1:** In the **Triage** dashboard, locate the fingerprint group you want to investigate in the **Fingerprint** column.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-1.png')} alt="View Fingerprint Group Details" />

If necessary, use the available filters or adjust the selected time frame to find the required fingerprint.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-2.png')} alt="View Fingerprint Group Details" />

**Step 2:** Click the fingerprint ID in the **Fingerprint** column to open the **Fingerprint Details** page, where you can view additional information about the selected fingerprint.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-3.png')} alt="View Fingerprint Group Details" />

The **Fingerprint Details** page opens, displaying detailed information about the selected fingerprint, including its associated events, attributes, callstack, comments, tags, linked issues, and other contextual information to help you investigate the error.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-4.png')} alt="View Fingerprint Group Details" />

## Understand the Fingerprint Details Page

The **Fingerprint Details** page serves as the primary workspace for investigating a fingerprint group. It combines summary information, crash analysis, similarity analysis, and investigation tools into a single interface, allowing you to understand the issue without switching between multiple pages.

The page is organized into the following primary areas:

* **[Fingerprint Summary](#fingerprint-summary)**
* **[Overview tab](#overview-tab)**
* **[Similarity tab](#similarity-tab)**

Each section provides different information that helps you investigate and manage the selected fingerprint.

### Fingerprint Summary

The **Fingerprint Summary** section appears at the top of the page and provides a high-level overview of the selected fingerprint. This information helps you quickly understand the fingerprint before reviewing its detailed analysis.

The summary includes the fingerprint identifier, a brief description of the error, its current investigation status, assigned users, linked tickets, associated tags, and overall occurrence statistics.

The following information is available in the Fingerprint Summary section.

| Ref. | Field | Description |
| ----- | ----- | ----- |
| **1** | **Errors** | Displays the total number of recorded occurrences for the fingerprint during the selected reporting period. A higher error count may indicate a more frequently occurring issue. |
| **2** | **Application Launches** | Displays the total number of application launches associated with the selected reporting period. This metric provides additional context when evaluating the frequency of the fingerprint. |
| **3** | **Fingerprint ID** | Displays the unique identifier assigned to the fingerprint group. This identifier distinguishes the fingerprint from all other fingerprint groups in the project. |
| **4** | **Description** | Displays a brief summary of the application error or exception represented by the fingerprint. This provides a quick understanding of the issue before reviewing detailed information. |
| **5** | **Status** | Displays the current investigation status of the fingerprint, such as **Open**, **In Progress**, **Resolved**, or **Muted**. The status helps your team track the investigation lifecycle of the issue. |
| **6** | **Assignees** | Displays the users currently assigned to investigate the fingerprint. Assigning a fingerprint helps establish ownership and track responsibility for resolving the issue. |
| **7** | **Tickets** | Displays linked issue tracker tickets, such as Jira issues, associated with the fingerprint. These links help synchronize investigations between Error Reporting and external issue tracking systems. |
| **8** | **Tags** | Displays system-generated and custom tags associated with the fingerprint. Tags help organize, categorize, and filter fingerprint groups during investigations. |

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-5.png')} alt="View Fingerprint Group Details" />

### Overview Tab

The **Overview** tab is displayed by default when you open the **Fingerprint Details** page. It provides a summary of the selected fingerprint and helps you understand the error before performing a detailed investigation.

From the Overview tab, you can review the captured callstack, access investigation tools, view occurrence information, and examine metadata associated with the fingerprint.

The Overview tab contains the following sections.

| Ref. | Section | Description |
| ----- | ----- | ----- |
| **1** | **Callstack** | Displays the normalized callstack captured for the selected fingerprint. Reviewing the callstack helps identify where the error occurred and understand the sequence of function calls that led to the crash or application error. |
| **2** | **Actions** | Provides quick access to commonly used investigation actions, such as **Start Debugging** and **View Instances**, allowing you to continue your investigation without leaving the Fingerprint Details page. |
| **3** | **Date Range** | Displays when the fingerprint was first and last observed within the selected reporting period. This information helps determine whether the issue is new, recurring, or has persisted over time. |
| **4** | **Classifiers** | Displays system-generated and project-specific classifier values associated with the fingerprint, such as application version, operating system, platform, or other configured attributes. These values help identify patterns across different environments. |
| **5** | **Unique Hosts** | Displays the number of unique hosts or systems that have reported the fingerprint. Reviewing this information helps estimate the scope and overall impact of the issue across your environment. |
| **6** | **Similarity** | Displays information about fingerprint groups that share similar characteristics with the selected fingerprint. Use this section to identify related issues and determine whether multiple fingerprint groups may represent the same underlying problem. |

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-6.png')} alt="View Fingerprint Group Details" />

### Similarity Tab

The **Base Fingerprint** section displays summary information for the fingerprint currently being investigated.

| Section | Description |
| ----- | ----- |
| **Base Fingerprint** | Displays summary information for the selected fingerprint, including the total number of recorded errors, associated classifiers, and the date range during which the fingerprint was observed. This information serves as the reference point for comparing similar fingerprint groups. |
| **Candidate Fingerprints** | Lists fingerprint groups that Error Reporting has identified as being similar to the selected fingerprint. Reviewing these candidates helps determine whether multiple fingerprint groups represent the same underlying issue and may be suitable for further investigation or merging. |

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-7.png')} alt="View Fingerprint Group Details" />

#### Candidate Fingerprints Table

The **Candidate Fingerprints** table lists fingerprints that Error Reporting has identified as being similar to the selected fingerprint.

| Ref. | Column | Description |
| ----- | ----- | ----- |
| **1** | **Rank** | Displays the similarity ranking assigned to each candidate fingerprint. Higher-ranked candidates generally have a stronger similarity to the selected fingerprint. |
| **2** | **Distance** | Indicates how closely the candidate fingerprint matches the selected fingerprint. Lower distance values represent a closer match. Hover over the distance value to preview additional fingerprint details. |
| **3** | **Status** | Displays the current investigation status of the candidate fingerprint, such as **Open**, **In Progress**, **Resolved**, or **Muted**. |
| **4** | **Fingerprint** | Displays the unique identifier of the candidate fingerprint. Use the fingerprint ID to identify and review the corresponding fingerprint group. |
| **5** | **Date Range** | Displays when the candidate's fingerprint was first and last observed, helping you determine how recently the issue has occurred. |
| **6** | **Errors** | Displays the total number of recorded errors associated with the candidate fingerprint within the selected time frame. |
| **7** | **Classifiers** | Displays system-generated or custom classifier values associated with the candidate fingerprint, providing additional context for comparison. |
| **8** | **Tickets** | Displays any linked issue tracker tickets, such as Jira issues, associated with the candidate fingerprint. |

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-8.png')} alt="View Fingerprint Group Details" />

## Tune Thresholds

The **Tune Thresholds** dialog allows you to customize how Backtrace identifies similar fingerprint groups. By adjusting these settings, you can control the criteria used during similarity analysis and refine the list of candidate fingerprints displayed in the **Similarity** tab.

To open the **Threshold Settings** dialog, click **Tune Thresholds** in the **Similarity** tab.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-9.png')} alt="View Fingerprint Group Details" />

The following settings are available:

| Ref. | Setting | Description |
| ----- | ----- | ----- |
| **1** | **Threshold** | Specifies the minimum callstack length required for a fingerprint to be considered a similarity candidate. Increasing this value makes the matching criteria more restrictive, while decreasing it includes more potential matches. |
| **2** | **Truncate** | Specifies the maximum number of callstack frames to compare during similarity analysis. Limiting the number of frames can improve comparison performance while focusing on the most relevant portions of the callstack. |
| **3** | **Limit** | Specifies the maximum number of candidate fingerprints that Backtrace returns during similarity analysis. Increasing this value displays more potential matches, while decreasing it limits the results. |
| **4** | **Intersection** | Specifies the minimum number of common callstack frames that candidate fingerprints must share with the selected fingerprint. You can enable **Dynamic** to allow Backtrace to determine this value automatically. |
| **5** | **Distance** | Specifies the maximum allowed distance between callstacks when determining similarity. Lower values return more closely related fingerprints, while higher values include a broader range of candidates. You can enable **Dynamic** to automatically calculate an appropriate distance threshold. |

:::note
Adjust threshold settings carefully. More restrictive values return fewer but more closely related fingerprint groups, while less restrictive values may include additional candidates that require further review.
:::

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-10.png')} alt="View Fingerprint Group Details" />

**Step 3:** Click **Compute** to apply the updated settings and recalculate the candidate fingerprints. Alternatively, click **Cancel** to close the dialog without saving your changes.

<img src={useBaseUrl('img/error-reporting/triage/fingerprint-group/fingerprint-group-11.png')} alt="View Fingerprint Group Details" />