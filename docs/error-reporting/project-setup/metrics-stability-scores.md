---
id: metrics-stability-scores
title: Create a Metric Group
sidebar_label: Create a Metric Group
description: Create a metric group in Stability Monitoring and link the attributes, such as version, that you want to compute stability scores by.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A metric group defines what you measure to compute stability scores, such as **Sessions Started**, **Minutes Played**, or **Multiplayer Sessions Started**. It holds the individual metrics you add later, and it's linked to the attributes you want to compare stability by, such as `version`.

Creating a metric group is the first step to set up imported metrics. For an overview of all the steps, see [Stability Monitoring Overview](/error-reporting/project-setup/stability-metrics/#imported-metrics-and-stability-scores).

## Prerequisites

- You need the Project Admin role in the project.
- Each attribute you want to link must exist both in Error Reporting and in your metric data, for example, a `version` attribute in your errors and a `version` column in your metrics database.

<a id="manage-the-backtrace-metric-objects"></a>

## Create the Metric Group

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** In the left menu, under **Workflow**, click **Stability monitoring**. The **Stability monitoring** page opens on the **Metrics groups** tab, with the metric groups of your project.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-2.png')} alt="Stability monitoring option under Workflow in the left menu, and the Metrics groups tab" />

**Step 3:** Click **Create a metric group**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-3.png')} alt="Create a metric group button on the Metrics groups tab" />

**Step 4:** In the **Create metric group** dialog, fill in the following fields:

| Ref. | Field | Description |
| --- | --- | --- |
| **1** | **Name** | A name for the metric group, such as `SessionsStarted` or `MinutesPlayed`. |
| **2** | **Description** | A short description of what the group measures, such as the number of sessions that users start in a period. |

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-4.png')} alt="Create metric group dialog with the Name and Description fields numbered 1 and 2" width="500" />

**Step 5:** Click **Save and link attributes**. The **Edit linked attributes** dialog opens.

To create the metric group without linking attributes, click **Save** instead. You can link attributes later from the metric group, with **Edit linked attributes**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-5.png')} alt="Save and link attributes and Save buttons in the Create metric group dialog" width="500" />

## Link Attributes to the Metric Group

Link the attributes that you want to compute stability scores by, such as `version`. When you group by a linked attribute in the **Explore** view, Error Reporting shows the stability score for each value of the attribute, such as each version.

**Step 1:** In the **Edit linked attributes** dialog, fill in the following fields under **Link attributes**:

| Ref. | Field | Description |
| --- | --- | --- |
| **1** | **Attribute** | The name of the attribute to link, such as `memory.warning` or `application.version`. |
| **2** | **Default metric value** | The value to use when the data that you import has no value for the attribute, such as `Unknown`. |

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-6.png')} alt="Edit linked attributes dialog with the Attribute and Default metric value fields numbered 1 and 2" width="500" />

**Step 2:** Click **Add**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-7.png')} alt="Add button in the Edit linked attributes dialog" width="500" />

The attribute appears below the fields with the other linked attributes, such as `memory.warning` next to `application.version` and `backtrace.version`. To link more attributes, repeat Steps 1 and 2. To unlink an attribute, click the delete icon next to it.

**Step 3:** Click **Save and add metrics** to continue to [Create the Metrics](/error-reporting/project-setup/create-metrics/), or click **Save** to add the metrics later.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-8.png')} alt="Linked application.version, backtrace.version, and memory.warning attributes, and the Save and add metrics and Save buttons" width="500" />

:::caution
If your SDK sends metric events for this group, for example, the Unity SDK 3.5.0 or later, every metric event must include all the attributes linked to the group. Error Reporting drops metric events that are missing a linked attribute.
:::

## Verify the Metric Group

On the **Metrics groups** tab, the new metric group appears in the list. Expand the group to see its linked attributes and metrics. To unlink an attribute, click the delete icon next to it.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-9.png')} alt="Expanded SessionsStarted metric group with the delete icons of its linked attributes highlighted" />

## Next Steps

- [Create the Metrics](/error-reporting/project-setup/create-metrics/) for the metric group, such as one metric for each version.
