---
id: stability-metrics
title: Stability Monitoring Overview
sidebar_label: Stability Monitoring Overview
description: Track the stability of your app by normalizing errors against metrics such as sessions, users, or minutes played, using built-in SDK metrics or metrics you import.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

Stability monitoring shows how stable your app is for your users, not only how many errors it reports. Error Reporting normalizes your errors against metrics such as sessions, unique users, or minutes played, so you can see what share of your users or sessions an error affects and prioritize the errors with the most impact.

You can get stability metrics in two ways:

| Method | How it works | Use it when |
| --- | --- | --- |
| [Built-in SDK metrics](#built-in-sdk-metrics) | The Error Reporting SDKs capture session and user metrics automatically. | You want error-free users and error-free application launches without any setup. |
| [Imported metrics](#imported-metrics-and-stability-scores) | You define metric groups and metrics, and import the data from an external system such as Postgres, Graphite, InfluxDB, or Redshift. | You want to normalize errors by your own metrics, such as minutes played or songs played, for each version of your app. |

## Built-in SDK Metrics

By default, the Error Reporting SDKs capture session and user metrics and use them to show the following on the [Overview page](/error-reporting/web-console/overview/) of your project:

| Ref. | Metric | What it shows |
| --- | --- | --- |
| **1** | **Error-free users** | The percentage of unique users who didn't experience an error, with the number of error-free users out of all users, such as `61.1k / 63k`. |
| **2** | **Error-free application launches** | The percentage of application launches (sessions) that didn't trigger any error reports, with the number of error-free launches out of all launches, such as `55.6k / 61.1k`. |
| **3** | **Error-free application launches** chart | A line chart of the percentage of error-free application launches over the selected time frame, so you can follow how the stability of your app changes. |
<img src={useBaseUrl('img/error-reporting/stability-monitoring/stability-metrics/stability-metrics-1.png')} alt="Overview page showing the Error-free users and Error-free application launches cards and the Error-free application launches chart" />

### Supported SDKs

Stability metrics are available for the following SDKs:

#### Mobile Applications

<div className="client-grid">
  <Link className="client-tile" to="/error-reporting/platform-integrations/android/configuration/#error-free-metrics">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/android.svg')} alt="Android logo" />
    <span>Android</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/platform-integrations/ios/configuration/#error-free-metrics">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/apple.svg')} alt="iOS logo" />
    <span>iOS</span>
  </Link>
</div>

#### Language Integrations

<div className="client-grid">
  <Link className="client-tile" to="/error-reporting/language-integrations/electron/#application-stability-metrics">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/electronjs.svg')} alt="Electron logo" />
    <span>Electron</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/language-integrations/javascript/#application-stability-metrics">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/javascript.svg')} alt="JavaScript logo" />
    <span>JavaScript</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/language-integrations/nestjs/#application-stability-metrics">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/nest.js.svg')} alt="NestJS logo" />
    <span>NestJS</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/language-integrations/node/#application-stability-metrics">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/nodejs.svg')} alt="Node.js logo" />
    <span>Node.js</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/language-integrations/react/#application-stability-metrics">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/react.svg')} alt="React logo" />
    <span>React</span>
  </Link>
  <Link className="client-tile" to="/error-reporting/language-integrations/react-native/#application-stability-metrics">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/react.svg')} alt="React Native logo" />
    <span>React Native</span>
  </Link>
</div>

#### Video Game Consoles

<div className="client-grid">
  <Link className="client-tile" to="/error-reporting/platform-integrations/unity/metrics/">
    <img src={useBaseUrl('img/error-reporting/platform-integrations/unity.svg')} alt="Unity logo" />
    <span>Unity</span>
  </Link>
</div>

### Filter the Stability Metrics

The stability metrics on the **Overview** page follow the **Time frame**, the **Error type** and **Platform** dropdown lists, and the filters you add with **Filter**, so you can check the stability of a specific part of your data, such as one release, or only crashes.

| Ref. | Control | What it does |
| --- | --- | --- |
| **1** | **Time frame** | Sets the period that the stability metrics cover: **Last hour**, **Last day**, **Last 7 days**, **Last 30 days**, **Last 90 days**, **Last year**, **All time**, or **Custom**. The **First seen in** options, such as **First seen in last 7 days**, include only the errors that were first reported in that period. |
| **2** | **Filter** | Adds a filter on any attribute of your project, including custom attributes, such as `uname.sysname = Android`. Click **Filter**, select an attribute from the list, and then set the value. The filter appears in the filter bar. To remove it, click **×** on the filter. For more complex queries, select **Open Query Builder**. |
| **3** | **Error type** | Limits the metrics to one type of error: **Unhandled exception**, **Crash**, **Hang**, or **Exception**. Select **All** to include every type. Each option shows its number of errors. |
| **4** | **Platform** | Limits the metrics to one platform, such as **Android**, **Windows**, or **ps4**. The list shows the platforms your project reports errors from, with their number of errors. Select **All** to include every platform. |

<img src={useBaseUrl('img/error-reporting/stability-monitoring/stability-metrics/stability-metrics-2.png')} alt="Overview page with the Time frame, Filter, Error type, and Platform controls numbered 1 to 4, filtered to Android" />

In this example, the **Overview** page is filtered to Android for the last 7 days. The stability metrics now show the Android users and application launches only: 97.25% error-free users (7.6k of 7.8k) and 91.487% error-free application launches (7k of 7.7k).

To see the stability metrics for crashes only, select **Crash** from the **Error type** dropdown list. The metrics then show the percentage of users and application launches that didn't experience a crash.

:::note
To filter by an attribute, the attribute must be linked to the metric group that the stability metrics use. For error-free users and error-free application launches, this is the `Application Launches` metric group. For more information, see [Web Console Metric Group / Attribute Linking](/error-reporting/platform-integrations/unity/metrics/#web-console-metric-group--attribute-linking).
:::

### Custom Metric Events

Different apps need different metrics to measure stability. Besides the built-in session and user metrics, the SDKs let you send your own metric events, for example, to answer questions such as:

- How many minutes of app usage were free of errors?
- In how many levels of your game did a crash or error occur?

To send custom metric events, first [create a metric group](/error-reporting/project-setup/metrics-stability-scores/) for them, such as **SessionsStarted**, and link the attributes that your events send, such as `application.version` and `uname.sysname`. Leave the **Metrics** of the group empty: you only add metrics when you import data from an external system.

For example, the following **Application Launches** metric group links the `application.version` and `uname.sysname` attributes and has no metrics attached.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/stability-metrics/stability-metrics-3.png')} alt="Application Launches metric group with the application.version and uname.sysname attributes linked and no metrics attached" width="600" />

Then configure your SDK to send events for the metric group. The configuration steps depend on your SDK. For an example, see [Creating New Metric Groups via Unity SDK](/error-reporting/platform-integrations/unity/metrics/#creating-new-metric-groups-via-unity-sdk). For other SDKs, see [Supported SDKs](#supported-sdks).

## Imported Metrics and Stability Scores

You can also import metrics from an external system, such as **Postgres**, **Graphite**, **InfluxDB**, or **Redshift**, and use them to compute stability scores, such as the number of errors per session for each version of your app or game. The following example shows errors normalized by a metric group in the **Explore** view.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/view-stability-scores/view-stability-scores-6.png')} alt="Explore view with errors normalized by Application Launches, showing the errors and percentage of launches for each fingerprint" />

A Project Admin sets up imported metrics in the following order:

| Step | Task | What it does |
| --- | --- | --- |
| 1 | [Create a Metric Group](/error-reporting/project-setup/metrics-stability-scores/) | Defines what you measure, such as **Minutes Played**, and links the attribute you want to compare by, such as `version`. |
| 2 | [Create the Metrics](/error-reporting/project-setup/create-metrics/) | Adds one metric to the group for each attribute value, such as one metric for each version. |
| 3 | [Create a Metric Source](/error-reporting/project-setup/create-metric-source/) | Connects Error Reporting to the external system that holds your metric data. Requires the metrics-importer service. |
| 4 | [Create a Metric Importer](/error-reporting/project-setup/create-metric-importer/) | Runs a query against the metric source to populate each metric with data. Requires the metrics-importer service. |
| 5 | [View Stability Scores](/error-reporting/project-setup/view-stability-scores/) | Normalizes your errors by the metric group in the **Triage** and **Explore** views. |

## Prioritize Errors by Stability

The **Triage** and **Explore** views can normalize your errors against stability metrics, so developers and tech leads can prioritize the errors that affect the most sessions or users.

Once your SDK sends metrics, or your importers populate them, use the **Errors normalized by** dropdown list at the top-right of the **Triage** or **Explore** view to normalize your errors by the metric group of your choice. For the steps, see [View Stability Scores](/error-reporting/project-setup/view-stability-scores/).

<img src={useBaseUrl('img/error-reporting/stability-monitoring/view-stability-scores/view-stability-scores-2.png')} alt="Errors normalized by dropdown list with Application Launches selected" width="500" />

In the following example, errors are normalized by **Application Launches**. The **Errors by Application Launches** column shows the impact of each fingerprint relative to the number of launches. Fingerprint `d3c48b7` has 1,966 errors and appeared in 2.127% of launches, the highest share, so it's the best one to investigate first. Fingerprint `8c1b9c2` appeared in only 0.7215% of launches.

<img src={useBaseUrl('img/error-reporting/stability-monitoring/stability-metrics/stability-metrics-4.png')} alt="Triage view with the Errors by Application Launches column highlighted, showing the number of errors and percentage of launches for each fingerprint" />

For more ways to compare error rates against metric groups, see [Normalize Errors by Metric Groups](/error-reporting/explore/normalize-errors-by-metric-groups/).
