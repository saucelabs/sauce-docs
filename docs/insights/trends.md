---
id: trends
title: Comparing Statistical Trends
sidebar_label: Trends
description: See how grouping tests reveals outcome patterns across isolated variables, such as browser, operating system, or date to optimize your tests.
---

The Trends section of the Insights feature provides a variety of data visualizations to give you a holistic perspective of your test outcomes. The following table describes each section.

<table>
  <tr>
    <th>Section</th>
    <th>Statistical Information</th>
  </tr>
  <tr>
    <td><b>Number of Tests</b></td>
    <td>The total number of tests run during the specified time period, separated in increments relative to the overall duration. For example, increments may be every 10 minutes for a time period of one hour, while increments might be daily for a 30 day time period.</td>
  </tr>
  <tr>
    <td><b>Pass/Fail Rate</b></td>
    <td>For each increment in the time period, the percentage of tests that:<br/>
      <ul>
        <li><b>Completed</b>: Ran to completion, but did not have a pass or fail status.</li>
        <li><b>Passed</b>: Ran to completion with a status of Passed.</li>
        <li><b>Failed</b>: Ran to completion with a status of Failed.</li>
        <li><b>Errored</b>: Did not run to completion due to a fatal error.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><b>Number of Errors</b></td>
    <td>The total number or errors that occurred during the specified time period, sorted by individual error message.</td>
  </tr>
  <tr>
    <td><b>Build and Test Statistics</b></td>
    <td>A snapshot of all tests run during the time period, displayed in separate tabs based on whether the test is or is not assigned a Build ID.For each test listed, basic data about the time the test was executed, the time it took to run, the Sauce Labs user who ran it, and its outcome. Tests in the <b>Builds</b> tab have an additional statistic - <i>Efficiency</i>, that indicates whether the tests in the build run in parallel to optimize the execution time for the entire build.<br/>This visualization can be further filtered to show only only tests with a failed and/or errored status.</td>
  </tr>
</table>


## Drilling Down on Visualizations

The visualizations shown in the Trends section of Insights are interactive; you can hover over any of the bars to view a statistics overview for that increment, or you can click-drag across the bars to redraw the graph for a narrower time period. The latter action updates the Time Period filter at the top of the page accordingly. After drilling down on a time period, click the Back link to step back through the previous time periods.

## Using Trends Data to Improve Testing

The trend visualizations can provide you with a quick overview of what's going on with your tests as a whole, and applying filters to the visualizations enables you to dig into the data to generate answers to specific questions about test performance. Let's look at an example showing how we can use these tools to answer real questions about our site and our tests.

### Comparing Test Results on Chrome 50 and 55

To find out how well a site under test performs against a browser update, we start by filtering our data to isolate only the relevant tests -- those that are owned by the same organization; were run over the past 7 days on Windows 7 for Chrome 55 and Chrome 50. This is a typical use case to compare a set of new tests for a recent browser release against the baseline of an established set of tests for a previous version of the same browser.

#### Chrome 50

As the figure below shows, more than 3,500 tests were run on Windows 7 for Chrome 50 in the past 7 days, with a 41% pass rate.

<img src="/static/img/insights/chrome50.png" alt="Chrome 50 Trends" width="750"/>

There are no errors, indicating that this is a robust set of tests, but a large number of tests ran to completion without reporting a Pass or Fail status. Hovering over one of the bars in the graph shows that these no-status completions account for about 65% of the tests in every time increment. While the tests themselves perform well, it's difficult to judge how well the site functions when completed tests do not offer a definitive outcome. To provide a better baseline for cross-browser comparison, [annotate](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+and+Annotation) these tests with relevant status using the Jobs API or the Selenium Javascript Executor.

#### Chrome 55

Now let's change the Browser filter to Chrome 55where nearly 4000 tests ran during the same 7 day period.

<img src="/static/img/insights/chrome55.png" alt="Chrome 55 Trends" width="750"/>

The pass rate for these tests is lower than Chrome 55, at 32%, and we still see a lot of completed tests without status, but we also see some failures showing up, although there are no errors, so the tests themselves seem to executing successfully for both browser versions.

#### Conclusions

In summary, we see from this browser version comparison:

* Overall coverage is consistent.
* Test performance is good for both, with low error rates.
* Site functionality is ambiguous for both browsers due to the high number of completed tests with no status.

#### Next Steps

Since our comparison suggests that the tests themselves are strong, but yielded some uncertainty about how well the site performs in either Chrome version, we isolate the time interval that contains the first failing test at 4:00PM on February 7th and can drill down to the 5 minute scale to find the exact test that failed.

<img src="/static/img/insights/5sec_interval.png" alt="Failure Interval" width="600"/>

Once we have isolated the failing test, we can check the **Builds** list and find the failing test, **TestCompareBrowserVersion**. Click that test name to see the **Test Details** page, where you can review the videos, screenshots, logs, and metadata that can help you determine why the test failed for Chrome 55.

<img src="/static/img/insights/test_fail.png" alt="Failing Test" width="600"/>

### Using the Efficiency Metric to Optimize Tests

The **Builds and Test Statistics** section of the Trends page provides an **Efficiency** metric for builds that indicated the percentage of tests in the build that are running in parallel.
