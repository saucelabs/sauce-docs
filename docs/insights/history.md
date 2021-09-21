---
id: history
title: Evaluating a Test Over Time
sidebar_label: Test History
description: Get a full picture of the success of your tests. Learn how to look at a test's history across a variety of metrics to diagnose failure patterns.
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The **Test History** page, which you can access under the **Insights** submenu, shows a visual snapshot of the results for a specific test over time. Seeing the test outcomes in a scatter plot helps reveal anomalies and patterns, which can help you identify issues with test performance and flakiness across platforms, operating systems, and browsers that you test against.

:::note
The Extended Debugging feature provides access to the HAR files and JavaScript console logs for your tests to help identify flaky tests. Check out [Debugging Tests with JavaScript Console Logs and HAR Files (Extended Debugging)](/insights/debug) for more information.
:::

## Access the History Page for a Test

1. Click the **Insights** tab to expand its submenu.
1. Click **Test History**.
1. Use the [filters](scope.md#using-filters-to-adjust-the-scope-of-your-data) to reduce the list of tests to a limited range.
1. In the **Search** field, enter the name of the test you want to view.  If you're not sure, entering just the first few characters will bring up a list from which you can choose.

## Reading the Scatter Plot Visualization

The test performance visualization displays a scatter plot of each iteration of the test that was executed during the specified date filter and matches other filter criteria. At the top of the visualization are four performance statistics for the test iterations shown:

* **Total Runs** - total number of test runs for the selected period
* **Total Errors** - total number of test runs that did not complete
* **Total Failures** - total number of test runs that have a recorded status of "Failed"
* **Average Runtime** - the mean runtime of all tests shown in the results

Below the performance statistics, the scatter plot shows each instance of the test, color-coded by run status, against the time it took the test to either execute or fail. The X-axis indicates the time range that has been selected using the time filter. The Y-axis indicates the duration of the test each time it was run. You can see the specific information about the platform, operating system, and other capabilities specified in a test by hovering your mouse cursor over the point representing it on the plot.

## Using Test History to Spot Flaky Tests

The charting of errors and failures in the visualization can help you get an early assessment of flaky test behavior. In this example, the test constantly fails in the first and second re-run, and succeeds in the third.  This is a very typical example of a flaky behavior.

<img src={useBaseUrl('img/insights/test-history-flaky.png')} alt="Flaky Test Example" width="650"/>

## An Example of Using Test History

In this example, you can see how the test **addOneItemtoCart** was executed over the last seven days on different platforms. Along the bottom are the executions that have successfully run and passed, and have the fastest execution times. As the execution time increases, you can see that there are significantly more runs that have failed. Hovering over a few of the failed tests indicates that many of the failures are on the Chrome browser.

<img src={useBaseUrl('img/insights/test-history-fails.png')} alt="Test Overview with Failures" width="650"/>

Applying a filter for Chrome browser, you can now see that the test is clearly failing specifically in that environment.

<img src={useBaseUrl('img/insights/test-history-chrome.png')} alt="Isolated Failures on Chrome" width="650"/>

Comparing the two graphs, you can see that the majority of failing tests begin on November 6 and are run on Chrome, so now you can dig into what changes in your test at that time that might have contributed to these failures.
