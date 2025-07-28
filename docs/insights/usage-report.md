---
id: usage-report
title: Concurrency Usage Report
sidebar_label: Usage
description: Presents the maximum concurrency usage for a given segment of time, aggregated by Month, Week, Day or Hour.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs Usage provides you with an accurate view of your concurrency data and lets you compare it to your subscription limit. Your team can cull, filter, and break this data down to best suit your needs. Check your usage of both Virtual Devices and Real Devices to understand your teams' testing patterns. Finding the right cross-section of data is easy and intuitive with a few actions like:

- Visualizing the concurrency usage at organization level or by team level.
- Compare concurrency usage between teams.
- Adjust date-range filters to understand usage across time. 
- Visualize the maximum concurrency usage as it approaches the subscription limit.

Taking advantage of Suace Labs Usage data is simple. Log into Sauce Labs and from the left panel, expand the **Insights** section and select **Usage**. 

<img src={useBaseUrl('img/insights/left_panel_usage.png')} alt="Left panel navigation to Insights and Usage"/>

## How it Works

Sauce Labs Usage reporting calculates the maximum concurrency during a given interval of time broken down by Month, Week, Day or Hour for each team with usage greater than zero during that period and presents the information using stacked bars to show how much each team contributed to that usage.

## Available Views

### Total Concurrency Usage

<img src={useBaseUrl('img/insights/ccy-org-month-total.png')} alt="Total concurrency usage at organization level"/>

In this view, the chart shows the total concurrency usage at an organization level summing all resource types compared to the subscription concurrency limit for each month. Each bar shows the maximum number of concurrent executions and adds them up to create the total usage.

It is possible that this chart shows values above the organization limit even when teams have not gone above their individual limit. To see the usage at team level, select the corresponding team in the dropdown from the filters.


### VM Concurrency Usage

<img src={useBaseUrl('/img/insights/VM_breakdown.png')} alt="VM Concurrency breakdown by resource type"/>

In these views, VM concurrency is shown per resource type. Concurrency usage is broken down by:

- Android/Linux/Windows VM Concurrency: Shows the concurrent usage for tests executed on Linux, Windows, and Android.
- Apple x86 VM Concurrency: Shows the concurrent usage for tests executed on Mac OS and iOS Simulators with Intel/x86 based processors.
- Apple ARM VM Concurrency: Shows the concurrent usage for tests executed on Mac OS and iOS Simulators with ARM based processors.

### Real Device Concurrency and Usage

With Sauce Labs Real Device usage analytics your organization can get a view of both Public device concurrency usage as well as Private device usage to get the most of your Sauce Labs testing strategy. Our real dvice usage analytics give you many of the same benefits as our Virtual device usage reporting such as:

- Ability to visualize usage at organization level or by team level.
- Access to expanded date range data and granularity options.
- Comparison of usage between teams.
- Visualize the maximum Public device usage as it approaches the contractual limit.
- Visualize Private device usage to best utilize your organization's devices.
- Access to usage data via the Sauce Labs UI and API.

 #### Public Device Concurrency
 
<img src={useBaseUrl('img/insights/ccy-org-month-rdc-public.png')} alt="Public Real Device concurrency usage at organization level"/>

 #### Private Device Usage
 
<img src={useBaseUrl('img/insights/Private-usage-hourly.png')} alt="Private Real Device usage at hourly granularity"/>

### Visual Snapshot Usage

Visual Usage Analytics helps to maintain a consistent assessment of snapshot usage and uncover trends. Compare monthly data with daily granularity to track usage over time, use filters to identify key trends, or drill down into team-by-team usage. Empower your organization to make more informed decisions with on-demand data, directly available in the Sauce Labs UI.

<img src={useBaseUrl('img/insights/visual_usage.png')} alt="Visual Snapshot Usage"/>
