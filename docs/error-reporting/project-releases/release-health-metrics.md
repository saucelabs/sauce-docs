---
id: release-health-metrics
title: Check Release Health Metrics
sidebar_label: Check Release Health Metrics
description: Track user adoption, error-free sessions, errors over time, and new errors over time for each release in the Releases view.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Releases** view includes four charts that help you monitor the health of each release over time. Each chart displays a separate line for each selected release, making it easier to compare release stability during and after a launch.

The charts use the **Error type**, time frame, and filters selected in the Releases view. The chart titles also reflect the attribute selected in **Compare releases by**, such as `application.version`.

<img src={useBaseUrl('img/error-reporting/project-releases/health-metrics/health-metrics-1.png')} alt="Error type dropdown at the top of the Releases view, above the health charts" />

## User Adoption

The **User adoption** chart shows the percentage of total user events associated with each release over time. Use this chart to understand how quickly users move to a new release.

Consider user adoption when reviewing the other health metrics. A release with fewer users may appear more stable because it has less traffic.

<img src={useBaseUrl('img/error-reporting/project-releases/health-metrics/health-metrics-2.png')} alt="User adoption chart with a line for each selected release" />

After a release launches, its user adoption should generally increase as users upgrade. Similar adoption levels across releases provide a better basis for comparing their health.

## Error-Free Sessions

The **Error-free application launches** chart shows the percentage of application launches for each release where no errors occurred. A higher percentage indicates a more stable release.

<img src={useBaseUrl('img/error-reporting/project-releases/health-metrics/health-metrics-3.png')} alt="Error-free application launches chart with a line for each selected release" />

Look for a release whose percentage remains consistently lower than the others. This can indicate that the release is experiencing more errors during application launches.

## Errors Over Time

The **Errors over time** chart shows the number of errors reported for each release over the selected time period. Use it to identify error spikes and monitor how a release performs after launch.

Hover over the chart to view the error count for each release at a specific point in time.

<img src={useBaseUrl('img/error-reporting/project-releases/health-metrics/health-metrics-4.png')} alt="Errors over time chart with a line for each selected release" />

Look for releases with significantly higher error counts than other releases with similar user adoption. Sharp increases or spikes may indicate a stability issue that requires investigation.

## New Errors Over Time

The **New Errors over time** chart shows the number of errors that have not been seen previously, grouped by release. Use this chart to identify errors that may have been introduced by a new release rather than existing errors or previously known issues.

Hover over the chart to view the new error count for each release at a specific point in time.

<img src={useBaseUrl('img/error-reporting/project-releases/health-metrics/health-metrics-5.png')} alt="New errors over time chart with a line for each selected release" />

A rise above zero shortly after a release is launched can indicate a potential regression. Investigate these new errors to determine whether they are related to the release.

:::note
When every chart drops to zero for all releases at the same time, it usually reflects a gap in incoming data rather than a real change in stability.
:::
