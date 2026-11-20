---
id: create-metric-source
title: Create a Metric Source
sidebar_label: Create a Metric Source
description: Connect Error Reporting to the external system that holds your metric data, such as Postgres, Graphite, InfluxDB, or Redshift, to import metrics for stability scores.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A metric source connects Error Reporting to the external system that holds your metric data, such as a Postgres database. Metric importers use the source to run queries and populate your metrics, and the source sends the results back to your Error Reporting project.

Error Reporting supports the following source types:

<div className="client-grid">
  <div className="client-tile">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/graphite.png')} alt="Graphite logo" />
    <span>Graphite</span>
  </div>
  <div className="client-tile">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/influxdb.svg')} alt="InfluxDB logo" />
    <span>InfluxDB</span>
  </div>
  <div className="client-tile">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/postgresql.svg')} alt="PostgreSQL logo" />
    <span>Postgres</span>
  </div>
  <div className="client-tile">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/amazon-redshift.svg')} alt="Amazon Redshift logo" />
    <span>Redshift</span>
  </div>
</div>

## Prerequisites

- You need the Project Admin role in the project.
- [Create a metric group](/error-reporting/project-setup/metrics-stability-scores/) and [create the metrics](/error-reporting/project-setup/create-metrics/) you want to populate.
- You need the URL of your metric system, and a username and password that can read the metric data.
- The metrics-importer service must be enabled for your instance. If it isn't, the **Metrics sources** tab shows a message that adding sources and importers requires the metrics-importer service. To enable it, [contact our Support team](https://support.saucelabs.com/s/?language=en_US).

<img src={useBaseUrl('img/error-reporting/stability-monitoring/create-metric-source/create-metric-source-1.png')} alt="Message on the Metrics sources tab that adding sources and importers requires the metrics-importer service" />

## Create the Metric Source

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/metrics-stability-scores/metrics-stability-scores-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** In the left menu, under **Workflow**, click **Stability monitoring**, and then select the **Metrics sources** tab.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/create-metric-source/create-metric-source-2.png')} alt="Metrics sources tab on the Stability monitoring page" />

**Step 3:** Click **Create a metric source**.

**Step 4:** In the **Add metrics source** dialog, fill in the following fields:

| Field | Description |
| --- | --- |
| **Name** | A name to identify the source in Error Reporting, such as `postgres-sessions`. |
| **Source type** | The type of system that holds your metric data: **Graphite**, **Influx**, **Postgres**, or **Redshift**. |
| **Source authentication** | The **Username** and **Password** that Error Reporting uses to connect to the source. |
| **Source URL** | The URL of the source, such as `postgres://metrics.example.com/postgres`. |
| **Coronerd URL** | The URL of your Error Reporting server. Error Reporting fills this in for you. |
| **Submission token** | The token that the source uses to send the importer results to your project. Error Reporting fills this in for you. To use a different token, see the **Error submission** settings of your project. |

<img src={useBaseUrl('img/error-reporting/project-settings/add-metrics-source.webp')} alt="Add metrics source dialog with the Name, Source type, Source authentication, Source URL, Coronerd URL, and Submission token fields" width="450" />

**Step 5:** Click **Save**.

## Verify the Metric Source

On the **Metrics sources** tab, the new source appears in the list with its type and URL.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/create-metric-source/create-metric-source-3.png')} alt="postgres-sessions metric source in the list on the Metrics sources tab" />

## Next Steps

- [Create a metric importer](/error-reporting/project-setup/create-metric-importer/) to query the source and populate each metric.
