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

### Filtering and Searching Automated Test Results

If you have set up your tests to report whether they have passed or failed, those results will be listed on the automated builds or automated test results page. After the results have been logged to the page, you can filter the results and search by test name to narrow down the results.

<img src={useBaseUrl('img/test-results/test-results-auto-filters-updated.png')} alt="Automated test results filters" width="750"/>

| Filter         | Description                                                                                                                                                                                                 |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Search by name | Filter test results by name.                                                                                                                                                                                |
| Device Type    | Filter test results by: <ul><li>Virtual Devices</li><li>Real Devices</li></ul>                                                                                                                              |
| Time Range     | Filter test results by: <ul><li>Today</li><li>Last 7 days</li><li>Last 14 days</li><li>Last 30 days</li><li>All Time</li></ul>                                                                              |
| Owner          | Filter test results by: <ul><li>Tests that you have run</li><li>Tests your team has run</li><li>Tests your organization has run</li><li>Tests run by another user or team from your organization</li></ul>  |
| Status         | Filter tests by: <ul><li>Passed</li><li>Failed</li><li>Completed (the test completed but was not assigned a Pass/Fail status)</li><li>In Progress</li><li>Errored</li><li>Queued</li></ul>                  |
| Build          | Filter test results by tests that belong to a specific build.                                                                                                                                               |
| Platform       | Filter test results by tests that ran on one or multiple operating systems.                                                                                                                                 |
| Browser        | Filter test results by browser (Only for Virtual Devices).                                                                                                                                                  |
| Device         | Filter test results by tests that ran on a specific device.                                                                                                                                                 |

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
   - Only the following file types will be visible in the logs viewer: .zip, .log, .json, .xml, .txt, .yml, and .har. Assets of other types
   can be accessed via the [Sauce REST API](/dev/api/jobs/#get-a-job-asset-file).

### Appium Logs

The **Appium Log** on the **Logs** tab in your test results indicates that the test ran using the Appium driver. The first line of the log provides information about the Appium version used during your test (for example, `info: Welcome to Appium v1.4.0`).

To find logging specific to your OS:

- For iOS: The iOS Simulator log is embedded in the Appium log. The information from the iOS Simulator is grayed out throughout the Appium log and has the tag name `info: [IOS_SYSLOG_ROW]`.
- For Android: Android Emulator logs are in the `Logcat.log` file. This file contains all the information from the Android Emulator log.
