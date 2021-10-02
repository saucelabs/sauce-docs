---
id: managing-test-results
title: Managing Test Results
sidebar_label: Managing Test Results
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Saving Searches

If you've created a search that you want to use in the future, you can save it by adding it to your favorites.

1. After you've built your search from the filters or written it in the **Search** text field on the **Archives** page, click the star icon next to the text field to save it.

<img src={useBaseUrl('img/test-results/test-results-archive-save.png')} alt="Test results archive - Save a search" width="650"/>

2. Click the expand icon next to the star to view your favorited searches. You can select a favorite search to run it, or remove it by clicking the **Delete** icon.  

<img src={useBaseUrl('img/test-results/archive-saved-search.png')} alt="Saved archive search" width="650"/>


## Deleting Test and Build Results

You can delete any of the tests or builds listed on your **Archives** page.

1. Select the test or build result you want to delete. You can also select multiple test or build results for deletion.  
2. Click **Delete**.
3. In the confirmation dialog, click **Yes**.

:::caution **Results are Permanently Deleted**
Once you delete a test or build result, it's gone forever and cannot be recovered. Be careful when you click **Yes**.  
:::

## Changing the Archive Page Layout
You can change the layout of your Archives page by changing which columns are displayed, and how the content in those columns is sorted.

1. On your **Archives** page, click **Show Columns**.
2. Select the columns you want to display, or clear the selection of columns you want to remove.
3. Click **Apply**.
4. Click **Sort By** to change the display of your results based on search score or ascending or descending dates.

Your layout changes will be saved until you change them again.

## Managing Automated Build and Test Results

Whenever you kick off an automated test or build with Sauce, you will see the build or test begin to run on Sauce Labs, and, if you have set up your tests to report whether they've passed or failed, the ultimate result of that build or test run on either the Automated Builds or Automated Tests page.

Once the results have been logged to the page, you have a couple options for filtering those results with the filters in the upper-right corner of the page:

| Filter | Description |
| :--- | :--- |
| Owner | The owner filter allows you to view test results for: <ul><li>Builds or tests that you have run</li><li>All the builds or tests for your organization</li><li>Builds or tests run run by one of your selected sub-accounts</li></ul> |
| Status | The status filter lets you filter tests and builds by: <ul><li>Passed</li><li>Failed</li><li>Complete (the test completed but was not assigned a Pass/Fail status)</li><li>Running</li><li>Error</li></ul> |

## Search Fields and Operators

You can use any of these filters singly or or combination to search through the tests and builds on your **Archive** page. The **Example** column shows how you could construct a search using a specific filter in the **Search** text field. See [Searching for Test Results](/test-results/archived-test-results) for examples of how to build structured searches using multiple filters in the Search field.

| Filter   | Description                                                                                                                                                                                                            | Example                                               |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| Text     | Search for any mention of the string across test details.                                                                                                                                                              | `text: Appium`                                        |
| Name     | Search for full or partial test name. **NOTE:** The Name filter refers to the test name; tests that don't have the test name capability (for example, "Unnamed job 123456abcxdsdjks83928323") will not be returned in a Name search.                                                                                                                                                                                  | `name: SauceTest`                                     |
| Platform | Search for tests that ran on one or multiple operating systems.   This field only accepts [operating systems currently supported by Sauce Labs](https://saucelabs.com/platforms/?_ga=1.85833371.341070038.1437411028). | `platform:("OS X 10.10" "Windows 8.1")`               |
| Browser  | Search for tests that ran on one or multiple browsers. Only accepts [browsers currently supported by Sauce Labs](https://saucelabs.com/platform/supported-browsers-devices).                                           | `browser:("Google Chrome 43" "Internet Explorer 11")` |
| Date     | Search for tests that ran on a specific date or over a specified range. Dates should be in _YYYY-MM-DD_ format.                                                                                                        | `date:[2014-05-05 TO 2015-05-05]`                     |
| Status   | Search for tests based on their status. Currently there are four possible states: `failed`, `passed`, `complete`, `error`                                                                                              | `status: failed`                                      |
| Build    | Search for tests that belong to a specific build.                                                                                                                                                                      | `build:main and browser:"Internet Explorer 11"`       |
| Tag      | Search for tests that have one or multiple tags.                                                                                                                                                                       | `tag: Jenkins`                                        |
| Owner    | Search for tests that were created by a specific user.                                                                                                                                                                 | `owner: admin`                                        |
