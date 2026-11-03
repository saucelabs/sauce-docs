---
id: viewing-exporting-usage-data
title: Viewing and Exporting Usage Data
sidebar_label: Viewing and Exporting Usage Data
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

If you're the owner of the overall Sauce Labs account, you can view usage information for all accounts on the **Organization Management** page. If you're an individual user, you can view your usage information on the **My Account** page.

Additional Usage charts and export options are available in [Usage report](/insights/usage-report) under Insights.

## Usage Data - USERS Tab

The **USERS** tab on the **Organization Management** page provides the following information for each user:

| Column                  | Description                                                         |
| ----------------------- | ------------------------------------------------------------------- |
| Last VM Test            | The date and time of the last VM test run by the user.              |
| VM Tests (last 30 days) | The total number of tests run by that user in the previous 30 days. |

<img src={useBaseUrl('img/team-mgmt/usage-data-users-tab.jpg')} alt="Usage data - USERS tab"/>

## Usage Data - TEAMS Tab

The **TEAMS** tab on the **Organization Management** page provides the following information for each team:

| Column group | Column | Description |
| --- | --- | --- |
| **Team Details** | **Team Name** | The team name, with the number of team members underneath. |
| **Real Device Concurrency Limit** | **Max Limit** | The team's limit for public real device tests. |
| **Virtual Device Concurrency Limits** | **Max Limit** | The team's Total Concurrency limit for all virtual device tests. |
| | **Mac / iOS (x86)**, **Mac / iOS (ARM)**, **Android (ARM)** | The team's platform limits, which sit inside its Total Concurrency. |
| **Virtual Device Concurrency Usage (Last 28D)** | **Peak Usage vs Cap** | The highest number of virtual device tests the team ran at the same time in the previous 28 days, compared with its Max Limit, as a number, a percentage, and a bar. |
| | **Tests** | The number of tests the team ran in the previous 28 days. |

A value with a **default** label means the team has no limit of its own for that platform, so the organization limit
applies. For details on how team and platform limits interact, see
[Managing Concurrency](/basics/acct-team-mgmt/concurrency/managing-concurrency#how-concurrency-limits-work).

<img src={useBaseUrl('img/team-mgmt/usage-data-teams-tab.png')} alt="TEAMS tab with Virtual Device Concurrency Usage columns highlighted" width="700"/>


## USAGE Widget

The USAGE widget provides a quick look at the device usage, by test session, for your team and organization.

<img src={useBaseUrl('img/team-mgmt/usage-widget.png')} alt="USAGE widget" width="400"/>

## Minutes Used vs. Concurrency

One way to tell if you're getting the most efficient use out of your Sauce Labs
plan is to compare the minutes used with the number of concurrent tests run
during the same period. If the ratio of minutes to concurrency is low, for
example, 2:1 (100 minutes:50 concurrent tests), then you are using a lot of
minutes to run very few tests. You should redesign your tests to take greater
advantage of concurrency. See [Scaling Tests](/web-apps/automated-testing/selenium/#scaling-tests)
and [Managing Concurrency](/basics/acct-team-mgmt/concurrency/managing-concurrency)
for more information.

## Exporting Usage Data

You can export a .csv file that contains the usage information for selected accounts.

1. In Sauce Labs, click **ACCOUNT** and then click **Organization Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="auto"/>

2. On the **USERS** tab, select the checkboxes of the users whose usage information you want to export.
3. Next to **USERS SELECTED**, click the download button.

   <img src={useBaseUrl('img/team-mgmt/usage-download-button.jpg')} alt="Usage download button"/>
