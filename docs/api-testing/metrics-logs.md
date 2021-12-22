---
id: metrics-logs
title: API Testing Project Dashboard
sidebar_label: Test Metrics and Logs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The API Testing Dashboard &#8212; accessible from with any Project &#8212; displays metrics and logs, giving you insight into your tests. It centralizes testing management reporting and facilitates team collaboration.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## Test Logs

To view all test logs across a project:

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Click on any Project, then click the **Dashboard** tab.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dash-1.2.png')} alt="Dashboard Pic 1.2"/>.<br/>
  As a shortcut, you can also click the Dashboard (graph) icon on any Project.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dash-1.1.png')} alt="Dashboard Pic 1.1" width="250"/>
3. From inside the **Dashboard**, select **Logs**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dashboardLogs.png')} alt="Dashboard Logs"/>
4. Set desired filters (e.g., start date, end date, tags) to find the test(s) you're looking for.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dashboardFilters.png')} alt="Dashboard Logs Filters"/>

If you hover your mouse over a line item, you'll see the option to go to the [Test Outcome Report](/api-testing/test-reports/).<br/><img src={useBaseUrl('img/api-fortress/2021/02/dashboardReport.png')} alt="Dashboard Report" width="500"/>


## Test Metrics

To view all test performance metrics (latency and fetch) within a Project:

1. Follow steps 1 and 2 from [Test Logs](#test-logs).
2. From inside the **Dashboard**, select **Metrics**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/metrics.png')} alt="Dashboard Metrics"/>
3. Set the start and end date filters, if desired.<br/><img src={useBaseUrl('img/api-fortress/2021/02/metricsFilters.png')} alt="Dashboard Metrics Filters"/>


## Email Notifications

Email notifications will alert you when a test starts failing, and notify you again when the test is back in full working order. The incident identifier number, used to track the events, will be the same as the test ID.

To enable this feature:
1. Select the **Settings** tab.
1. Click **Email Notifications**.
1. Enter your email address.
1. Select **Save Changes**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dash-1.5.png')} alt="Dashboard Pic 1.5"/>

::: tip
Use the [Fact component](/api-testing/composer/other-components/#fact) to control the behavior of email notifications. This is especially helpful if you're testing in multiple environments.

:::


## More Information

- [Fact Component](/api-testing/composer/other-components/#fact)
- [Writing Tests with the Composer](/api-testing/composer/)
- [Test Outcome Reports](/api-testing/test-reports)
