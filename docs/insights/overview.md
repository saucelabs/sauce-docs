---
id: overview
title: Analyzing Test Case Health
sidebar_label: Job Overview
description: Gain insight into test case health, test summaries and breakdowns across Real or Virtual devices and analyze errors to identify where and why errors occurred over time.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Job Overview** page, accessible from the **Insights** heading, offers two frames of reference to view health of the aggregate of your tests. First is the Overview tab, which offers a visual overview of test case health over time, job summary, and job breakdown. Job Overview also gives you access to the Errors tab which details errors for all your tests over time. 

:::note
The Extended Debugging feature offers access to HAR files and JavaScript console logs, assisting in the identification of flaky tests. For more details, refer to [Debugging Tests with JavaScript Console Logs and HAR Files (Extended Debugging)](/insights/debug).
:::

## Accessing the Job Overview Page

1. Click the **Insights** tab to expand its submenu.
1. Click **Job Overview**.
1. Apply [filters](scope.md#using-filters-to-adjust-the-scope-of-your-data) to narrow down the list of tests within a specific range.

## Job Overview Tab
The **Job Overview** page offers three data visualizations on the Overview tab to give you insight into your tests over time. 

### Job Overview
The Job Overview visualization gives you a bar chart with a few different categories reprsented to give you an overview of how your test suite has performed over a given period of time. This bar chart is usually broken down into five categories.

- Consistently Failing tests
- Consistently Passing tests
- Consistently Erroring tests
- Tests with Missing Status
- Inconsistent Resulting tests

<img src={useBaseUrl('img/insights/overview-health-snapshot.png')} alt="overview data visualization"/>

Using this data, you can identify if your test suite is performing as expected and where to debug if necessary. Clicking each of the headings will take you to that filter within the **Job History** page to drill down into the tests that are comprised in that filter. Use the filters above the visualization to identify builds, browsers, or platforms and the time-frame to surface test data that is most important to your organization. 

### Job Summary
The Job Summary section gives you a pie chart, and associated raw numbers with percentages, of the fundamentals of your testing strategy over the selected period of time. This visualization also compares usage for the same time interval previous. For example, if you select 30 days from the filter you will see your current 30 days of tests compared to your last 30 days of tests in this visualization. Job Summary shows you proportions of:

- Total Runs
- Passed tests (Passed)
- Errored tests (Error)
- Failed tests (Failures)
- Completed tests (Completed)

:::note
Completed tests are sometimes aggregated due to not receiving a pass or failure declaration or intent. Be sure to [send all your pass/fail results](/basics/test-config-annotation/test-annotation#setting-passfail) to Sauce Labs to take advantage of Insights.
:::

<img src={useBaseUrl('img/insights/job-summary-vis.png')} alt="job summary data visualization"/>

### Job Breakdown
Job Breakdown gives you insight into your test suite by categorizing all your individual jobs by OS, Browser version, Framework and Device type. You can use this section to understand where your testing coverage is currently, where you may need more testing based on current analytics, and deep dive into OS or Browser versions to ensure proper coverage across your testing suite. 

<img src={useBaseUrl('img/insights/job-breakdown-vis.png')} alt="job breakdown data visualization"/>

:::note
Read more about how your testing strategy might benefit from our [Virtual and Real device clouds](/mobile-apps/supported-devices.md) to ensure proper coverage across your user base.
:::

## Errors Tab 
The **Job Overview** page also offers insight into your testing errors over time via the Errors tab.

### Errors

Using the Errors tab from the Job Overview page you can use the same familiar filters like OS, test owner, or Framework to analyze your testing errors and understand what actions to take based upon the resulting set of errors. Errors shows visualization of errors over time based upon your selected filters, and then surfaces the most pervasive errors in that data set for you to debug and take action on. 

<img src={useBaseUrl('img/insights/errors-overview.png')} alt="errors data visualization"/>
