---
id: create-metric-importer
title: Create a Metric Importer
sidebar_label: Create a Metric Importer
description: Create a metric importer that queries a metric source on a schedule and populates a metric with data, so Error Reporting can compute stability scores.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A metric importer runs a query against a metric source on a schedule and stores the results in one of your metrics. Each importer has three parts:

- **The query** that gets the data from the metric source.
- **The metric** that the results are stored in.
- **The execution plan**, which sets how much history to import and how often to run the query.

You usually create one importer for each metric, such as one importer for the minutes played in each version.

## Prerequisites

- You need the Project Admin role in the project.
- [Create the metrics](/error-reporting/project-setup/create-metrics/) you want to populate.
- [Create a metric source](/error-reporting/project-setup/create-metric-source/) for the system that holds your metric data.
- The metrics-importer service must be enabled for your instance. If the **Metrics sources** tab shows a message that it's required, [contact our Support team](https://support.saucelabs.com/s/?language=en_US).

## Write the Query

The importer runs your query for one time period at a time. To bound the time period, use the parameters `$1` and `$2` in your query:

- `$1` is the start of the period: either the last time the query ran, or how far back in history you want to import.
- `$2` is the current time.

Use the format `time >= $1 and time < $2` in your query. For example, the following query gets the minutes played in version 3.16.2:

```sql
select mins_played, time from metric_table where version = '3.16.2' and time >= $1 and time < $2
```

Before you create the importer, run the rest of your query against the source directly, to make sure it returns the results you expect.

## Create the Importer

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** In the left menu, under **Workflow**, click **Stability monitoring**, and then select the **Metrics sources** tab.

**Step 3:** Expand the metric source you want to query, and then click **Add importer**.

**Step 4:** In the **Create importer** dialog, fill in the following fields:

| Field | Description |
| --- | --- |
| **Name** | A name to identify the importer, such as `MinsPlayedVersion3.16.2`. |
| **Query** | The query to run against the source. See [Write the Query](#write-the-query). |
| **Start collecting data from** | How many days of history to import the first time the importer runs, such as `7` days ago. |
| **Delay** | The time, in seconds, between runs of the query, such as `60`. |
| **Metric group** | The metric group of the metric to populate, such as **Minutes Played**. |
| **Metric** | The metric to store the results in, such as `minsPlayed-v3.16.2`. |

<img src={useBaseUrl('img/error-reporting/project-settings/create-importer.webp')} alt="Create importer dialog with the Name, Query, Test query, Start collecting data from, Delay, Metric group, and Metric fields" width="400" />

**Step 5:** Click **Test query**. Error Reporting checks the query against the source and shows **Success**, or a message about missing parameters or syntax errors. Fix any errors, and then test the query again.

**Step 6:** Click **Save**.

**Step 7:** Repeat Steps 3 to 6 for each metric you need to populate.

## Verify the Importer

On the **Metrics sources** tab, expand the metric source. The new importer appears in the list with its **Metric group** and **Last scraped time**, which shows when the importer last ran.

<img src={useBaseUrl('img/error-reporting/project-settings/metrics-source-example.webp')} alt="Expanded postgres-sessions metric source with the Add importer button and the list of importers with their metric group and last scraped time" />

The results of each run are stored in the linked metric. If the stability scores in Error Reporting look wrong, check the results of the importer query against the data in your metric source.

## Next Steps

- [View the stability scores](/error-reporting/project-setup/view-stability-scores/) in the **Triage** and **Explore** views.
