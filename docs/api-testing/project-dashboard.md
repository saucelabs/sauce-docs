---
id: project-dashboard
title: Using the Project Dashboard
sidebar_label: Test Results and Insights
---

import useBaseUrl from '@docusaurus/useBaseUrl';

After you run an API Test, you can view your results, reporting, and analytics to gain further insight and maximize your testing.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Test that's been run. For details on how to create one, see the [Quickstart](/api-testing/quickstart/).

## Test Outcome Report

The **Test Outcome Report** includes input data details and other useful test information, such as reasons for failure, HTTP requests, and response status codes.

There are three ways to access it:

- From your Project's **Tests** section, click on any Test line item
- From your Project's **Dashboard** section, click on any Test line item
- From your Test's **Compose** section, in the [right-hand nav](/api-testing/quickstart/#view-test-results).

### Viewing Results

Here's a breakdown of what each report contains:

**Test Report Details**: metadata about the execution of the test, such as Test Name, Project Name, and Mode (Scheduled or On Request)<br/><img src={useBaseUrl('img/api-testing/sessionDetails.png')} alt="Test Report" width="400" />

**Outcome** (pass/fail status):<br/><img src={useBaseUrl('img/api-testing/outcome.png')} alt="Test Report" width="150" />

**Assertions**: your Test assertions, where a gray dot indicates a pass, red dot indicates a fail, and yellow dot indicates a warning<br/><img src={useBaseUrl('img/api-testing/assertions.png')} alt="Test Report Primer Image" width="450" />

**Request Components**: shows the specific component(s) that you tested.<br/><img src={useBaseUrl('img/api-testing/requestComponent.png')} alt="Test Report Primer Image" width="200" />

**Stack Details**: click this to view granular details about requests and headers.<br/><img src={useBaseUrl('img/api-testing/stackDetails.png')} alt="Test Report Primer Image" width="150" /><br/><img src={useBaseUrl('img/api-testing/stackDetails-expanded.png')} alt="Stack details" width="350" />

## Dashboard

The API Testing Dashboard &#8212; accessible from a Project &#8212; displays metrics, logs, builds, and load tests, a centralized test management tool that simplifies collaboration and reporting.

### Test Logs

1. Log in to Sauce Labs, then click **API Testing**.
2. Click on any Project.
3. Click the **Dashboard** tab.
4. Select the **Logs** tab.
5. Select desired filters to find the Test(s) you're looking for, then click **Apply**.<br/>
   <img src={useBaseUrl('img/api-testing/logsFilters.png')} alt="Dashboard Logs Filters"/>

| Filter   | Description                                                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Date     | Filter tests results by: <ul><li>Today</li><li>Yesterday</li><li>Last 3 days</li><li>Last 7 days</li><li>This Week</li><li>Previous week</li><li>Last 14 days</li><li>Last 30 days</li><li>Specific start and end date</li></ul> |
| Test     | Filter tests results by a specific test                                                                                                                                                                                          |
| Modes    | Filter tests results by tests that are scheduled (monitoring) or executed manually (on-Demand)                                                                                                                                   |
| Events   | Filter tests results by all tests or only the ones that failed                                                                                                                                                                   |
| Tags     | Filter tests results by tests that contain one or more specific tag(s)                                                                                                                                                           |
| Build id | Filter tests results by tests that belong to a specific build                                                                                                                                                                    |
| Agent    | Filter tests results by the agent that executed the test: `wstestjs` if the test is executed manually, scheduled, or by API; `piestry` if the test is executed via the [mocking tool](/api-testing/mocking/)                     |

### Test Metrics

To view Test performance metrics (latency and fetch):

1. Log in to Sauce Labs, then click **API Testing**.
2. Click on any Project.
3. Click the **Dashboard** tab.
4. Select the **Metrics** tab.
5. Select desired filters to find the Test(s) you're looking for, then click **Apply**.<br/>
   <img src={useBaseUrl('img/api-testing/metricsFilters.png')} alt="Dashboard Metrics Filters"/>

| Filter    | Description                                                                                                                                                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Date      | Filter tests results by: <ul><li>Today</li><li>Yesterday</li><li>Last 3 days</li><li>Last 7 days</li><li>This Week</li><li>Previous week</li><li>Last 14 days</li><li>Last 30 days</li><li>Specific start and end date</li></ul> |
| Test      | Filter tests results by a specific test                                                                                                                                                                                          |
| Metrics   | Filter tests results by all tests or only the ones that failed                                                                                                                                                                   |
| Footprint | Filter tests results by a specific request URL                                                                                                                                                                                   |
| Build id  | Filter tests results by tests that belong to a specific build                                                                                                                                                                    |

### Test Build Reports

A _Build_ is a collection of test results and metrics associated with a given build ID. To create a Build, you'll need to integrate Sauce Labs API Testing into your CI/CD pipeline, then run multiple tests simultaneously, grouped as a Build, by [setting the `build` value in your config.yml](/api-testing/integrations/yaml/#metadata). Sauce API Testing will group all events generated by the Test session under a "build" collector, and test results are collected under **Dashboard** > **Builds**. To view:

1. Log in to Sauce Labs, then click **API Testing**.
2. Click on any Project.
3. Click the **Dashboard** tab.
4. Select the **Build** tab.
5. Set the date and/or build ID filters, if desired, to find the Test(s) you're looking for. Then click **Apply**.<br/><img src={useBaseUrl('img/api-testing/buildsFilters.png')} alt="Dashboard Builds" width="400"/>

| Filter   | Description                                                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Date     | Filter tests results by: <ul><li>Today</li><li>Yesterday</li><li>Last 3 days</li><li>Last 7 days</li><li>This Week</li><li>Previous week</li><li>Last 14 days</li><li>Last 30 days</li><li>Specific start and end date</li></ul> |
| Build id | Filter tests results by tests that belong to a specific build                                                                                                                                                                    |

6. Click on any line item below to view a summary report for that Build.<img src={useBaseUrl('img/api-testing/builds1.webp')} alt="Dashboard Builds"/><br/><img src={useBaseUrl('img/api-testing/builds2.webp')} alt="Dashboard Builds"/>
   The report contains details such as the build ID, list of Tests belonging to that build, date/time, Projects involved, successful tests, and failed tests.
7. Under the **Event Details** column, click **Open Report Document** to see the results and metrics for each specific test that has been executed in the build.<br/><img src={useBaseUrl('img/api-testing/builds3.png')} alt="Dashboard Builds"/>

## More Information

- [Composing Tests](/api-testing/composer/)
- [Load Test Reports](/api-testing/load-testing/#load-test-reports)
