---
id: viewing-test-results
title: Viewing Test Results
sidebar_label: Viewing Test Results
---

import useBaseUrl from '@docusaurus/useBaseUrl';

After you run a test, you can view the results on the Test Results page. From there, you can:

- Watch a video recording of the test.
- View screenshots of the test.
- Review the commands that were issued.
- Read the test log.
- View the test metadata.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Live Test Results

Sauce Labs provides live test results for both real and virtual devices.

To view live test results, follow these steps:

1. In Sauce Labs, click **Live** in the left panel, and then click **Test Results**.
   <img src={useBaseUrl('img/test-results/test-results-live-nav.png')} alt="Live test results navigation" width="650"/>

2. On the **Test Results** page, select either **Virtual Devices** or **Real Devices**.
   <img src={useBaseUrl('img/test-results/test-results-live-devices.png')} alt="Live test results - Virtual or real devices" width="650"/>

3. Click on a test to view its details in the results list on the **Test Results** page. For more information, see [Screenshots, Commands, Logs, and Metadata](#screenshots-commands-logs-and-metadata).
   <img src={useBaseUrl('img/test-results/test-results-details-live.png')} alt="Live test results details" width="650"/>

### Filtering Live Test Results

You can filter live test results by owner. If the **Enable Job Visibility Across Teams** organization setting is enabled, the filter dropdown list will include all owners in your organization. If it is disabled, you will only see the owners on your team. For more information about this setting, see [Security Settings](/basics/acct-team-mgmt/org-settings/#security-settings).

<img src={useBaseUrl('img/test-results/test-results-live-filter.png')} alt="Filtering live test results" width="650"/>

## Automated Test Results

To view automated test results, follow these steps:

1. On Sauce Labs, click **Automated** in the left panel, and then click **Test Results**.
2. On the **Test Results** page, select either **Virtual Devices** or **Real Devices**.
3. Click on a test to view its details in the results list on the **Test Results** page. For more information, see [Screenshots, Commands, Logs, and Metadata](#screenshots-commands-logs-and-metadata).
4. To view and manage the results of past automated tests and builds, on Sauce Labs, click **Automated** in the left panel, and then click **Archive**. You can use status badges on your code repository or a web page to keep track of your latest test runs (see [Status Badges and the Browser Matrix Wizard](/test-results/badges-browser-matrix) for more information). For more information about the **Archive** page, see [Archived Test Results](#archived-test-results).

### Filtering and Searching Automated Test Results

If you have set up your tests to report whether they have passed or failed, those results will be listed on the automated builds or automated test results page. After the results have been logged to the page, you can filter the results and search by test name to narrow down the results.

<img src={useBaseUrl('img/test-results/test-results-auto-filters-updated.png')} alt="Automated test results filters" width="750"/>

| Filter         | Description                                                                                                                                                                                                |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Search by name | Filter test results by name.                                                                                                                                                                               |
| Device Type    | Filter test results by: <ul><li>Virtual Devices</li><li>Real Devices</li></ul>                                                                                                                             |
| Time Range     | Filter test results by: <ul><li>Today</li><li>Last 7 days</li><li>Last 14 days</li><li>Last 30 days</li><li>All Time</li></ul>                                                                             |
| Owner          | Filter test results by: <ul><li>Tests that you have run</li><li>Tests your team has run</li><li>Tests your organization has run</li><li>Tests run by another user or team from your organization</li></ul> |
| Status         | Filter tests by: <ul><li>Passed</li><li>Failed</li><li>Completed (the test completed but was not assigned a Pass/Fail status)</li><li>In Progress</li><li>Errored</li><li>Queued</li></ul>                 |
| Build          | Filter test results by tests that belong to a specific build.                                                                                                                                              |
| Platform       | Filter test results by tests that ran on one or multiple operating systems.                                                                                                                                |
| Browser        | Filter test results by browser (Only for Virtual Devices).                                                                                                                                                 |
| Device         | Filter test results by tests that ran on a specific device.                                                                                                                                                |

## Automated Builds Results

To view automated build results, follow these steps:

1. In Sauce Labs, click **Automated** in the left panel, and then click **Builds**.
2. On the **Builds** page, select either **Virtual Cloud** or **Real Devices** to view the relevant device results.
3. Click on a build to view its details in the results list on the **Builds** page.

### Filtering Builds Results

You can use the following filters to narrow down the build results:

| Filter | Description                                                                                                                                                            |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Owner  | Filter builds by: <ul><li>Builds that you have run</li><li>All the builds for your organization</li><li>Builds run by one of your selected sub-accounts</li></ul>      |
| Status | Filter builds by: <ul><li>Success</li><li>Failed</li><li>Complete (the test completed but was not assigned a Pass/Fail status)</li><li>Running</li><li>Error</li></ul> |

## Archived Test Results

The **Archive** page allows you to manage historical information about your tests and builds. It contains all the tests and builds you have run since you opened your Sauce Labs account, and new tests and builds are automatically added to it. The dashboard only displays the last 50 builds or the last 25 tests you have run.

You can filter your archived test results, apply tags, create structured searches using multiple filters, and search using freeform text. You can save your search queries as favorites to simplify your future filtering.

### Changing the Archive Page Layout

You can change the layout of the **Archive** page by modifying the displayed columns and sorting the content in those columns.

1. On the **Archive** page, click **Show Columns**.
2. Select or deselect the columns you want to display.
   <img src={useBaseUrl('img/test-results/test-results-archive-columns-updated.png')} alt="Archive page columns" width="400"/>

3. Click **Sort By** to change the display of your results based on search score or ascending or descending dates.
   <img src={useBaseUrl('img/test-results/test-results-archive-sort-updated.png')} alt="Archive page sorting" width="350"/>

Your layout changes will be saved until you change them again.

### Filtering Test and Builds Results

The **Archive** page includes several filters you can use to search through your tests and builds. You can search using a single filter or multiple filters to build a structured search.

1. In Sauce Labs, click **Automated** in the left panel, and then click **Archive**.
   <img src={useBaseUrl('img/test-results/test-results-archive-nav-updated.png')} alt="Test results archive navigation" width="650"/>

2. On the **Archive** page, select either **Virtual Cloud** or **Real Devices** to view the relevant device results.

3. Click a filter and select an option from the dropdown list or enter a term to search for.
   <img src={useBaseUrl('img/test-results/test-results-archive-filter.png')} alt="Test results archive search filters" width="650"/>

4. Click **Apply**.

#### Special Filter Criteria and Operators

Some filters include additional options and the ability to use special operators. See [Filters and Examples](#filters-and-examples) for more information.

### Searching Test and Build Results

You have two options for creating structured searches.

#### Building Structured Searches From Filters

With this option, you select filters and filter criteria as you would for basic filtering. Each time you make a selection, it will be added to the Search field to build the query. Using this option, there is an implied AND between the filters you select and an implied OR between the values in a specific filter.

#### Writing Structured Searches

You can write your structured search in the Search field if you want to create a more complex search using AND, OR, or special operators associated with a specific filter. The autocomplete will suggest values, operators, and filters that match your text as you enter the search criteria. If your search query syntax is incorrect, your query text will turn orange, and you will see suggestions for correcting it below the search field. When your syntax is correct, the text will turn blue.

##### Tips for Writing Structured Searches

- Strings must always be enclosed with quotation marks, but criteria values supplied by the app (for example, status:failed) do not.
- If you want to search using text only, enter `text:` in the search field, and then enter the text you want to search for enclosed in quotation marks.
- You can use `*` as a wildcard in your filter criteria.
- Use quotation marks around a string to search for that exact string. For example, `"ruby test"` will return "ruby test 1" and "ruby test 2," but not "ruby example test."
- Use parentheses around a string to find those terms anywhere in the search field. For example, `(ruby test)` will return both "ruby test 1" and "ruby example test."

#### Examples of Structured Searches

| Search Description                                                                          | Structured Search                                                              |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Find all tests tagged as `Selenium_194` or `Selenium_193` that have failed since 03/10/2015 | `tag:(Selenium_194 Selenium_193) AND status:failed and date:[2015-10-03 TO *]` |
| Find only the IE tests that have failed with the word `Main` in the title.                  | `name:"Main*" AND browser:"Internet Explorer *"`                               |

#### Saving Searches

If you've created a search you want to use in the future, you can save it by adding it to your favorites.

1. After you've built your search from the filters or written it in the **Search** text field on the **Archive** page, click the star icon next to the text field to save it.
   <img src={useBaseUrl('img/test-results/test-results-archive-save-updated.png')} alt="Test results archive - Save a search" width="650"/>

2. Click the expand icon next to the star to view your favorite searches. Select a favorite search to run it, or remove it by clicking **Delete**.
   <img src={useBaseUrl('img/test-results/archive-saved-search-updated.png')} alt="Saved archive search" width="650"/>

### Filters and Examples

You can use these filters singly or in combination to search through the tests and builds on your **Archive** page. The **Example** column shows how to construct a search using a specific filter in the **Search** text field. See [Searching Test and Build Results](#searching-test-and-build-results) for tips and examples of how to build structured searches using multiple filters in the Search field.

#### Virtual Cloud Device Filters

| Filter   | Description                                                                                                                                                                                                                          | Example                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Date     | Search for tests that ran on a specific date or over a specified range. Dates should be in _YYYY-MM-DD_ format.                                                                                                                      | `date:[2014-05-05 TO 2015-05-05]`                     |
| Status   | Search for tests based on their status. There are four possible states: <ul><li>passed</li><li>failed</li><li>complete</li><li>error</li></ul>                                                                                       | `status: failed`                                      |
| Build    | Search for tests that belong to a specific build.                                                                                                                                                                                    | `build:main and browser:"Internet Explorer 11"`       |
| Tag      | Search for tests that have one or multiple tags.                                                                                                                                                                                     | `tag: Jenkins`                                        |
| Platform | Search for tests that ran on one or multiple operating systems. See [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices) for more information.                                                | `platform:("OS X 10.10" "Windows 8.1")`               |
| Browser  | Search for tests that ran on one or multiple browsers. See [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices) for more information.                                                         | `browser:("Google Chrome 43" "Internet Explorer 11")` |
| Owner    | Search for tests that a specific user created.                                                                                                                                                                                       | `owner: admin`                                        |
| Teams    | Search for tests created by users on a specific team.                                                                                                                                                                                | `team: sauce-school`                                  |
| Text     | Search for any mention of the string across test details.                                                                                                                                                                            | `text: Appium`                                        |
| Name     | Search for full or partial test name. **NOTE:** The Name filter refers to the test name; tests that don't have the test name capability (for example, "Unnamed job 123456abcxdsdjks83928323") will not be returned in a Name search. | `name: SauceTest`                                     |

#### Real Device Filters

| Filter | Description                                                                                                                                                                           | Example                                         |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Date   | Search for tests that ran on a specific date or over a specified range. Dates should be in _YYYY-MM-DD_ format.                                                                       | `date:[2014-05-05 TO 2015-05-05]`               |
| Status | Search for tests based on their status. There are four possible states: <ul><li>passed</li><li>failed</li><li>complete</li><li>error</li></ul>                                        | `status: failed`                                |
| Builds | Search for tests that belong to a specific build.                                                                                                                                     | `build:main and browser:"Internet Explorer 11"` |
| OS     | Search for tests that ran on one or multiple operating systems. See [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices) for more information. | `platform:("OS X 10.10" "Windows 8.1")`         |
| Device | Search for tests that were run on a specific device.                                                                                                                                  | `device: "iPhone 8"`                            |
| Owner  | Search for tests that were created by a specific user.                                                                                                                                | `owner: admin`                                  |
| Team   | Search for tests created by users on a specific team.                                                                                                                                 | `team: sauce-school`                            |

### Deleting Test and Builds Results

You can delete any tests or builds on your **Archive** page.

**Virtual Devices:**

1. Tick the test or build result you want to delete. You can also select multiple tests or build results for deletion.
2. Click **Delete selected n jobs**.
3. In the confirmation dialog, click **Yes, remove all selected jobs**.

**Real Devices:**

1. Click on the test or build result you want to delete.
2. Click the three dots and choose **Delete**.
3. In the confirmation dialog, click **Delete**.

:::caution **Results are Permanently Deleted**
After you delete a test or build, it cannot be recovered. Be careful when you click **Yes**.
:::

## Screenshots, Commands, Logs, and Metadata

You can review a variety of data about the tests you have run.

:::note
Your test assets, including videos, screenshots, and logs, are retained for 30 days. Test parameters and metadata are available indefinitely.
:::

1. In Sauce Labs, click **Automated** or **Live** in the left panel, and then click **Test Results**.
2. Click the test whose results you want to view.
3. On the **Test Details** page, you can do the following:

- Click the **Commands** tab to see the API commands issued during the test. The **Commands** tab also includes controls for filtering the commands displayed and playing back the commands.
- Click the **Metadata** tab to see the metadata attached to your test. Some test metadata, such as the test status, can be updated via the [Sauce REST API](/test-results/test-status).
- Click the **Video** tab to view the video of the test. You can download the video from this tab. Audio is available for automated tests on real devices. Additional configurations are required to record audio with your tests. For more information, see [Audio Capture](/mobile-apps/features/audio-capture/).
- Click the **Screenshots** tab to view screenshots. You can download the screenshots from this tab and view them in full screen.
- Click the **Logs** tab to see the logs generated by your test. The logs you can view are determined by the type of test you ran. For example, web app tests will include a Selenium log, while mobile app tests will contain an Appium log.

### Appium Logs

The **Appium Log** on the **Logs** tab in your test results indicates that the test ran using the Appium driver. The first line of the log provides information about the Appium version used during your test (for example, `info: Welcome to Appium v1.4.0`).

To find logging specific to your OS:

- For iOS: The iOS Simulator log is embedded in the Appium log. The information from the iOS Simulator is grayed out throughout the Appium log and has the tag name `info: [IOS_SYSLOG_ROW]`.
- For Android: Android Emulator logs are in the `Logcat.log` file. This file contains all the information from the Android Emulator log.
