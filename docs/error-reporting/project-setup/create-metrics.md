---
id: create-metrics
title: Create the Metrics
sidebar_label: Create the Metrics
description: Add metrics to a metric group in Stability Monitoring, such as one metric for each version of your app, to hold the data you compute stability scores against.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A metric holds one set of data that you compute stability scores against, such as the minutes played in one version of your app. You add the metrics to a metric group, usually one metric for each value of the linked attribute, such as one metric for each version. Later, a metric importer populates each metric with data.

## Prerequisites

- You need the Project Admin role in the project.
- [Create a metric group](/error-reporting/project-setup/metrics-stability-scores/) and link the attributes you want to compare by, such as `version`.

## Name Your Metrics

Use a naming convention that combines the metric group and the attribute value, such as `{metricGroupName}-v{version}`. For example, for a metric group of sessions and the `application.version` attribute:

- `session-v1.0.0`
- `session-v1.0.1`
- `session-v1.1.0`

A consistent naming convention makes it easier to find the right metric when you create the importers.

## Create a Metric

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** In the left menu, under **Workflow**, click **Stability monitoring**. The **Metrics groups** tab opens.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-2.png')} alt="Stability monitoring option under Workflow in the left menu, and the Metrics groups tab" />

**Step 3:** Click the metric group, such as **SessionsStarted**, to expand it.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/create-metrics/create-metrics-1.png')} alt="Metric groups on the Metrics groups tab of the Stability monitoring page" />

**Step 4:** Under the linked attributes, click **Add metric**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/create-metrics/create-metrics-2.png')} alt="Add metric option in the expanded metric groups" />

If you're coming from the **Edit linked attributes** dialog, click **Save and add metrics** instead.

**Step 5:** In the **Create metric** dialog, fill in the following fields:

| Ref. | Field | Description |
| --- | --- | --- |
| **1** | **Name** | A name to identify the metric, such as `session-v1.0.0`. |
| **2** | **Attribute values** | The value of each attribute linked to the metric group for this metric, such as `2.1.0` for `application.version`. Attributes marked with an asterisk (\*) don't have a default value, so they're required. If you set a default value when you linked an attribute, you can leave its value empty. |

<img src={useBaseUrl('img/error-reporting/stability-monitoring/create-metrics/create-metrics-3.png')} alt="Create metric dialog for SessionsStarted with the Name and Attribute values fields numbered 1 and 2" width="500" />

**Step 6:** Click **Save**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/create-metrics/create-metrics-4.png')} alt="Save button in the Create metric dialog" width="500" />

**Step 7:** Repeat Steps 4 to 6 for each metric you need, such as one metric for each of your recent versions.

## Verify the Metrics

On the **Metrics groups** tab, expand the metric group. The new metrics appear under **Metrics**, with the linked attributes under **Attributes**.

<img src={useBaseUrl('img/error-reporting/project-settings/metrics-example.webp')} alt="Minutes Played metric group with the version attribute and four metrics for versions 3.16.0, 3.16.2, 3.16.4, and 3.16.5" />

To delete a metric, click the delete icon next to it.

## Next Steps

The metrics are set up, but they don't contain data yet. To populate them:

1. [Create a metric source](/error-reporting/project-setup/create-metric-source/) that connects to the system holding your metric data.
2. [Create a metric importer](/error-reporting/project-setup/create-metric-importer/) for each metric.
