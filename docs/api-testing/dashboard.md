---
id: dashboard
title: API Testing Project Dashboard
sidebar_label: Project Dashboard
description: "API Testing on Sauce Labs offers a full-featured dashboard that centralizes testing management and simplifies collaboration and reporting. Key features of the dashboard allow you to: View all test logs across teams Share, download, or print test logs View all performance metrics from tests (latency & fetch) Set performance alerts Filter logs and alerts by time, endpoint."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The API Testing Dashboard &#8212; accessible from with any Project &#8212; displays metrics and logs, giving you insight into your tests. It centralizes testing management reporting and facilitates team collaboration.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## Accessing the Dashboard

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Navigate to your desired Project and click its corresponding Dashboard (graph) icon <img src={useBaseUrl('img/api-fortress/2021/02/graphIcon.png')} alt="graph icon"/>:
   <img src={useBaseUrl('img/api-fortress/2021/02/dash-1.1.png')} alt="Dashboard Pic 1.1"/>

Once you're in a Project, you can select the **Dashboard** tab at any time to bring it up.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dash-1.2.png')} alt="Dashboard Pic 1.2"/>


## Test Logs

To view all test logs across a project:
1. Select **Logs**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dashboardLogs.png')} alt="Dashboard Logs"/>
2. Set filters desired (e.g., start date, end date, tags).<br/><img src={useBaseUrl('img/api-fortress/2021/02/dashboardFilters.png')} alt="Dashboard Logs Filters"/>
3. If you hover your mouse over a line item, you'll see the option to go to the [Test Outcome Report](/api-testing/test-reports/).<br/><img src={useBaseUrl('img/api-fortress/2021/02/dashboardReport.png')} alt="Dashboard Report" width="500"/>


## Test Metrics

View all performance metrics from tests (latency and fetch):
1. Select **Metrics**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/metrics.png')} alt="Dashboard Metrics"/>
2. Set the start and end date filters, if desired.<br/><img src={useBaseUrl('img/api-fortress/2021/02/metricsFilters.png')} alt="Dashboard Metrics Filters"/>

## Set Alerts
To set performance alerts and email notifications:
1. Select the **Settings** tab.
1. Click **Email Notifications**.
1. Enter an email address.
1. Select **Save Changes**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dash-1.5.png')} alt="Dashboard Pic 1.5"/>


## More Information

- [Test Outcome Reports](/api-testing/test-reports)
