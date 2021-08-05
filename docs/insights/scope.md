---
id: scope
title: Customizing the Insights Scope
sidebar_label: Customizing Scope
description: Tailor the Sauce Labs Insights dashboard to zero in on the results that help you identify and solve your app imperfections.
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The Insights section of your Sauce Labs app allows you to view your test data from a variety of different perspectives to ensure that you can see both the big picture of your testing effectiveness and the individual slices of test data that help you pinpoint failure causes and fix them.

:::tip
Sauce Labs has also published an [Insights API](/dev/api/insights) so you can build a custom dashboard with views that are specific to your test strategy.
:::

## Touring the Interface

Access the **Insights** menu from the left-side navigation menu of our web app. From here, you have access to the five primary views of your test data.

|Page|Description|
|---|---|
|Test Overview|Shows a variety of views of the data related to all the tests executed that match the specified filter criteria broken into three focus tabs. <br/>The **Overview** tab shows concatenated pass/fail statistics and platform breakdowns. <br/>The **Tests** tab shows a table of all tests run on either **Virtual Cloud** or **Real Devices**, which you can sort by any of the data columns. You can click any test to see a historical breakdown of that test, and you can also export the data to a local CSV file. <br/>The **Errors** tab shows the total number of errors across the execution of all tests in the filter for either **Virtual Cloud** or **Real Devices** along with a graph depicting the error rate over time. Below, there is a breakdown of each error with the number of times it occurred in the period, which you can click any error to see the list of tests in which it occurred.|
|Test History| Shows a visual snapshot of the results for a specific test over time. See the [Test History](/insights/history) page for specific views and capabilities descriptions.|
|Trends| Shows graphical visualizations of all tests. Applying filters to this view makes it easy to compare test outcomes for different variables, such as device browser version. See the [Trends](/insights/trends) page for detailed documentation.|
|VM Concurrency|Shows how many VM instances are in use simultaneously at any given time. See [Team Concurrency](/basics/acct-team-mgmt/concurrency-limits) for information about how concurrency is allocated.|
|Failure Analysis|Exposes the results of the Sauce Labs machine learning algorithms that comb through every command run in every test and each error thrown in those tests to determine emerging patterns. See the [Failure Analysis](/insights/failure-analysis) page for detailed documentation.


## Using Filters to Adjust the Scope of Your Data

At the top of each page in the **Insights** interface is a set of properties by which you can filter the data shown on that page. As you specify values for each property, the setting is shown below the filters bar and the data on the page refreshes to reflect the applied filters.

<img src={useBaseUrl('img/insights/ins-filters.png')} alt="Applied Filters" width="750"/>

The following table describes each of the filters available for customizing your test insights data.

|Filter|Description|
|---|------|
|Owner|	Show data for tests owned by one or more individuals, teams, or your whole organization. You will see different options here depending on your access and role within your organization or team.|
|Build|	Show data for tests that are included in specified builds, or groups of related tests.|
|OS| Show data for tests run on the specified operating systems. The menu lists each OS version separately.|
|Browser| Show data for tests run on the specified browsers. The menu lists each browser version separately so you can compare versions of the same browser.|
|Tag|	Show data for tests or builds that are categorized using the specified tag(s).The **Tag** filter is not available for all sections of the Insights interface.|
|Time Period| Show data for tests that executed within the specified time period. In the selection modal, choose the **Relative** tab to set a duration up through the current day and time. Choose the **Absolute** tab to set a specific window within start and end dates.<br/><br/>**NOTE:** Times and dates are in the local time of the logged in user. If you are not seeing data you expect in that duration, consider whether the test was executed in a different time zone.|

Check out the individual sections of the Insights feature documentation for use cases illustrating how filtering your data view can help you pinpoint errors or inefficiencies in your tests so you can be confident that your app is functioning optimally.
