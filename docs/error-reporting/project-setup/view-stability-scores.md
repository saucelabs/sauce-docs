---
id: view-stability-scores
title: View Stability Scores
sidebar_label: View Stability Scores
description: View stability scores in the Triage and Explore views by normalizing your errors against a metric group, such as sessions started or minutes played.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Once your metrics are populated, you can view stability scores in the **Triage** and **Explore** views. A stability score shows your errors relative to a metric, such as the percentage of sessions affected by each fingerprint, or the share of sessions with errors in each version.

## Prerequisites

Set up the metrics you want to normalize by. Either:

- Use the [built-in SDK metrics](/error-reporting/project-setup/stability-metrics/#built-in-sdk-metrics), such as users and application launches, or
- [Create a metric group](/error-reporting/project-setup/metrics-stability-scores/), [create the metrics](/error-reporting/project-setup/create-metrics/), and populate them with a [metric source](/error-reporting/project-setup/create-metric-source/) and [importers](/error-reporting/project-setup/create-metric-importer/).

## View Stability Scores in Triage

The **Triage** view shows how many sessions or other metric units each fingerprint affects, so you can fix the errors with the most impact first.

**Step 1:** In your project, click **Triage** in the top navigation bar.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/view-stability-scores/view-stability-scores-1.png')} alt="Triage option in the top navigation bar" />

**Step 2:** From the **Errors normalized by** dropdown list at the top-right, select the metric group to normalize by, such as **Application Launches**.

The list shows the metric groups of your project. A metric group with no data for the selected time frame shows **(not found in data set)** and can't be selected.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/view-stability-scores/view-stability-scores-2.png')} alt="Errors normalized by dropdown list with Application Launches selected and a test metric group not found in data set" width="500" />

The **Triage** view now shows the stability scores:

- The summary above the chart shows the number of errors and the metric over the selected time frame, such as **5,887 errors / 53,732 Application Launches**.
- The errors column, such as **Errors by Application Launches**, shows the number of errors for each fingerprint, with the percentage of the metric it affected, such as **1,975 (2.1216%)**. The fingerprints are sorted by this column, so the errors with the most impact are at the top.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/view-stability-scores/view-stability-scores-3.png')} alt="Triage view normalized by Application Launches, with the 5,887 errors / 53,732 Application Launches summary and the Errors by Application Launches column" />

## View Stability Scores in Explore

The **Explore** view shows stability scores for each group of errors, such as each fingerprint, or each value of a linked attribute, such as each version. This helps you see which errors or versions are the least stable.

**Step 1:** In your project, click **Explore** in the top navigation bar.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/view-stability-scores/view-stability-scores-4.png')} alt="Explore option in the top navigation bar" />

**Step 2:** From the **Group errors by** dropdown list, select how to group the errors, such as **fingerprint**, or an attribute that's linked to the metric group, such as `application.version`. To find an attribute, type its name in **Search attributes**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/view-stability-scores/view-stability-scores-5.png')} alt="Group errors by dropdown list with the Search attributes field, fingerprint selected, and custom attributes" />

**Step 3:** From the **Errors normalized by** dropdown list, select the metric group to normalize by, such as **Application Launches**. Keep **View as** set to **Aggregate**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/view-stability-scores/view-stability-scores-6.png')} alt="Errors normalized by dropdown list in the Explore view with Application Launches selected" />

The summary above the chart shows the number of errors and the metric over the selected time frame, such as **5,883 errors / 53,692 Application Launches**. The errors column, such as **Errors by Application Launches**, shows the number of errors for each group, with the percentage of the metric it affected, such as **1,974 (2.121%)** for the first fingerprint.

:::note
To group by an attribute in a stability score, the attribute must be linked to the metric group. To link an attribute, see [Link Attributes to the Metric Group](/error-reporting/project-setup/metrics-stability-scores/#link-attributes-to-the-metric-group).
:::

## Related Topics

- [Normalize Errors by Metric Groups](/error-reporting/explore/normalize-errors-by-metric-groups/)
- [Stability Monitoring Overview](/error-reporting/project-setup/stability-metrics/)
