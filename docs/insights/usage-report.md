---
id: usage-report
title: Concurrency usage report
sidebar_label: Usage Report
description: Presents the maximum concurrency usage for a given segment of time, aggregated by Month, Week, Day or Hour.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Provide users with a way to view accurate VDC concurrency data and compare it to their contractual limit, on an as-needed basis. The benefits of using the Usage Report for the Virtual Device Cloud (VDC):

- Visualize the concurrency usage at organization level or by team level.
- Compare concurrency usage between teams.
- Visualize the maximum concurrency usage as it approaches the contractual limit.

## How it Works

Usage Report calculates the maximum concurrency during a given segment of time aggregated by Month, Week, Day or Hour for each team with a usage greater than zero and presents the information using stack bars to show how much each team contributed to that usage.

## Available Views

### Total Concurrency usage

<img src={useBaseUrl('img/insights/ccy-org-month-total.png')} alt="Total concurrency usage at organization level"/>

In this view, shows the total concurrency usage at organization level compared to the contract limit for each month. Each bar shows the maximum number of concurrent executions and adds them up to create the total usage.

It is possible that this aggregation shows values above the organization limit even when teams have not gone above their individual limit. To see the usage at team level, select the corresponding team in the dropdown from the filters.

### VM concurrency usage

<img src={useBaseUrl('img/insights/ccy-org-month-vms.png')} alt="VM concurrency usage at organization level"/>

Shows the total concurrency, adding all devices grouped by team. This information can be break down by:

- VM Concurrency: Shows the concurrent usage for tests executed on Linux Browsers, Windows Browsers and Android Emulators.
- Mac VM Concurrency: Shows the concurrent usage for tests executed on Mac OS, Mac OSX and iOS Emulators.
