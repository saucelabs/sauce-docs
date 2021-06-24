---
id: archived-test-results
title: Archived Test Results
sidebar_label: Archived Test Results
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Archive** page provides a handy way to manage historical information about your tests and builds. It contains all the tests and builds you have run since you opened your Sauce account, and new tests and builds are automatically added to it, while the dashboard only displays the the last 50 builds or the last 25 tests you have run.

:::note
We only keep assets such as screenshots, logs, and videos for 30 days.
:::

You can filter your archived test results by Build, Owner, Browser, Platform, Status, Date, and Teams. You can also apply your own tags, create structured searches using multiple filters, and search using freeform text. To simplify your future filtering, you can save your search queries as favorites.

## Searching for Test Results
The **Archives** page includes a number of filters you can use to search through your tests and builds. You can search using a single filter, or you can use multiple filters to build a structured search.

### Basic Filtering

1. In Sauce Labs, in the left panel, click **AUTOMATED** and then click **Archive**.

<img src={useBaseUrl('img/test-results/test-results-archive-nav.png')} alt="Test results archive navigation" width="650"/>

2. Click a filter and either select an option from the dropdown or enter a term to search for.

<img src={useBaseUrl('img/test-results/test-results-archive-filter.png')} alt="Test results archive search filters" width="650"/>

3. Click **Apply**.

### Special Filter Criteria and Operators

Some filters include additional options and the ability to use special operators. See [Search Filters and Operators](/test-results/managing-test-results) for more information.  

## Creating Structured Searches

You have two options for creating structured searches.

### Building Structured Searches from Filters

With this option, you would select filters and filter criteria as you would for basic filtering, but each time you make a selection, you will see it added to the Search field to build the query. Using this option, there is an implied AND between the different filters you select, and an implied OR between the values within a specific filter.

### Writing Structured Searches Based on Filters

If you want to create a more complex search using AND, OR, or special operators associated with a specific filter, you can write your own structured search in the Search field. As you enter search criteria, the autocomplete will suggest values, operators, and filters to match your text. If your search query syntax is incorrect, your query text will turn orange, and you will see suggestions for how to correct it below the search field. When your syntax is correct, the text will turn blue.

### Tips for Writing Structured Searches

* Strings must always be enclosed with quotation marks, but criteria values that are supplied by the application (for example, status:failed) do not.
* If you want to search using text only, enter text: in the search field, and then enter the text you want to search for enclosed in quotation marks.
* You can use * as a wildcard in any of your filter criteria.
* Use quotation marks around a string to search for that exact string. For example, "ruby test" will return "ruby test 1" and "ruby test 2," but not "ruby example test."
* Use parentheses around a string to find those terms anywhere in the search field. For example, (ruby test) will return both "ruby test 1" and "ruby example test."

### Examples of Structured Searches

| Search Description                                                                                                 | Structured Search                                                              |
|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| Find all of the tests that were tagged as   `Selenium_194`   or   `Selenium_193` that have failed since 03/10/2015 | `tag:(Selenium_194 Selenium_193) AND status:failed and date:[2015-10-03 TO *]` |
| Find only the IE tests that have failed with the word `Main` in the title.                                         | `name:"Main*" AND browser:"Internet Explorer *"`                               |
