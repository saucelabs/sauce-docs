---
id: archived-test-results
title: Archived Test Results
sidebar_label: Archived Test Results
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Archive** page provides a handy way to manage historical information about your tests and builds. It contains all the tests and builds you have run since you opened your Sauce Labs account, and new tests and builds are automatically added to it, while the dashboard only displays the the last 50 builds or the last 25 tests you have run.

:::note
We only keep assets such as screenshots, logs, and videos for 30 days.
:::

You can filter your archived test results, apply tags, create structured searches using multiple filters, and search using freeform text. To simplify your future filtering, you can save your search queries as favorites.

## Changing the Archive Page Layout
You can change the layout of the **Archive** page by changing which columns are displayed, and how the content in those columns is sorted.

1. On the **Archive** page, click **Show Columns**.
2. Select or deselect the columns you want to display.

<img src={useBaseUrl('img/test-results/test-results-archive-columns.png')} alt="Archive page columns" width="400"/>

3. Click **Sort By** to change the display of your results based on search score or ascending or descending dates.

<img src={useBaseUrl('img/test-results/test-results-archive-sort.png')} alt="Archive page sorting" width="350"/>

Your layout changes will be saved until you change them again.


## Filtering Test and Build Results
The **Archives** page includes a number of filters you can use to search through your tests and builds. You can search using a single filter, or you can use multiple filters to build a structured search.

1. In Sauce Labs, in the left panel, click **AUTOMATED** and then click **Archive**.

<img src={useBaseUrl('img/test-results/test-results-archive-nav.png')} alt="Test results archive navigation" width="650"/>

2. On the **Archive** page, click the **Virtual Cloud** or **Real Devices** radio button to view the relevant device results.

3. Click a filter and either select an option from the dropdown or enter a term to search for.

<img src={useBaseUrl('img/test-results/test-results-archive-filter.png')} alt="Test results archive search filters" width="650"/>

4. Click **Apply**.

### Special Filter Criteria and Operators

Some filters include additional options and the ability to use special operators. See [Filters and Examples](#filters-and-examples) for more information.  

## Searching Test and Build Results

You have two options for creating structured searches.

### Building Structured Searches from Filters

With this option, you would select filters and filter criteria as you would for basic filtering, but each time you make a selection, you will see it added to the Search field to build the query. Using this option, there is an implied AND between the different filters you select, and an implied OR between the values within a specific filter.

### Writing Structured Searches

If you want to create a more complex search using AND, OR, or special operators associated with a specific filter, you can write your own structured search in the Search field. As you enter search criteria, the autocomplete will suggest values, operators, and filters to match your text. If your search query syntax is incorrect, your query text will turn orange, and you will see suggestions for how to correct it below the search field. When your syntax is correct, the text will turn blue.

#### Tips for Writing Structured Searches

* Strings must always be enclosed with quotation marks, but criteria values that are supplied by the application (for example, status:failed) do not.
* If you want to search using text only, enter text: in the search field, and then enter the text you want to search for enclosed in quotation marks.
* You can use * as a wildcard in any of your filter criteria.
* Use quotation marks around a string to search for that exact string. For example, "ruby test" will return "ruby test 1" and "ruby test 2," but not "ruby example test."
* Use parentheses around a string to find those terms anywhere in the search field. For example, (ruby test) will return both "ruby test 1" and "ruby example test."

### Examples of Structured Searches

| Search Description | Structured Search |
|----|----|
| Find all of the tests that were tagged as `Selenium_194` or `Selenium_193` that have failed since 03/10/2015 | `tag:(Selenium_194 Selenium_193) AND status:failed and date:[2015-10-03 TO *]` |
| Find only the IE tests that have failed with the word `Main` in the title. | `name:"Main*" AND browser:"Internet Explorer *"` |

### Saving Searches

If you've created a search that you want to use in the future, you can save it by adding it to your favorites.

1. After you've built your search from the filters or written it in the **Search** text field on the **Archive** page, click the star icon next to the text field to save it.

<img src={useBaseUrl('img/test-results/test-results-archive-save.png')} alt="Test results archive - Save a search" width="650"/>

2. Click the expand icon next to the star to view your favorited searches. You can select a favorite search to run it, or remove it by clicking **Delete**.  

<img src={useBaseUrl('img/test-results/archive-saved-search.png')} alt="Saved archive search" width="650"/>

## Filters and Examples

You can use these filters singly or or combination to search through the tests and builds on your **Archive** page. The **Example** column shows how you could construct a search using a specific filter in the **Search** text field. See [Searching Test and Build Results](#searching-test-and-build-results) for tips and examples of how to build structured searches using multiple filters in the Search field.

### Virtual Cloud Device Filters
| Filter | Description | Example |
|----|----|----|
| Date | Search for tests that ran on a specific date or over a specified range. Dates should be in _YYYY-MM-DD_ format. | `date:[2014-05-05 TO 2015-05-05]` |
| Status | Search for tests based on their status. Currently there are four possible states: `failed`, `passed`, `complete`, `error`| `status: failed` |
| Build | Search for tests that belong to a specific build. | `build:main and browser:"Internet Explorer 11"` |
| Tag | Search for tests that have one or multiple tags. | `tag: Jenkins` |
| Platform | Search for tests that ran on one or multiple operating systems. See [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices) for more information. | `platform:("OS X 10.10" "Windows 8.1")` |
| Browser | Search for tests that ran on one or multiple browsers. See [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices) for more information.  | `browser:("Google Chrome 43" "Internet Explorer 11")` |
| Owner | Search for tests that were created by a specific user. | `owner: admin` |
| Teams | Search for tests that were created by users on a specific team.| `team: sauce-school` |
| Text | Search for any mention of the string across test details. | `text: Appium` |  
| Name | Search for full or partial test name. **NOTE:** The Name filter refers to the test name; tests that don't have the test name capability (for example, "Unnamed job 123456abcxdsdjks83928323") will not be returned in a Name search. | `name: SauceTest` |

### Real Device Filters
| Filter | Description | Example |
|----|----|----|
| Date | Search for tests that ran on a specific date or over a specified range. Dates should be in _YYYY-MM-DD_ format. | `date:[2014-05-05 TO 2015-05-05]` |
| Status | Search for tests based on their status. Currently there are four possible states: `failed`, `passed`, `complete`, `error`| `status: failed` |
| Builds | Search for tests that belong to a specific build. | `build:main and browser:"Internet Explorer 11"` |
| OS | Search for tests that ran on one or multiple operating systems. See [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices) for more information. | `platform:("OS X 10.10" "Windows 8.1")` |
| Device | Search for tests that were run on a specific device. | `device: "iPhone 8"` |
| Owner | Search for tests that were created by a specific user. | `owner: admin` |
| Team | Search for tests that were created by users on a specific team.| `team: sauce-school` |


## Deleting Test and Build Results

You can delete any of the tests or builds listed on your **Archive** page.

1. Select the test or build result you want to delete. You can also select multiple test or build results for deletion.  
2. Click **Delete**.
3. In the confirmation dialog, click **Yes**.

:::caution **Results are Permanently Deleted**
Once you delete a test or build, it cannot be recovered. Be careful when you click **Yes**.  
:::
