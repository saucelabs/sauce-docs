---
id: getting-started
title: Web Console Getting Started
sidebar_label: Getting Started
description: Getting started with the web console to view and analyze error and crash data.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Getting Around

There are 4 key navigational components to help you analyze your error and crash data:

- Project selector - Use this to switch between various projects that are reporting crashes or errors.
- Filters - Define your working set. Specify time frames and additional criteria to indicate which errors and fingerprints to analyze.
- Saved views - Commonly used filters for quick access and sharing for the selected project. Admin users can save team default view for a given project, and users can further personalize their views with a user default.
- Tools and results list - Triage, Explore, and Debug allow you to prioritize, analyze, and debug your crashes.

<img src={useBaseUrl('img/error-reporting/console-views/getting-around.png')} alt="Getting around in the web console views." />

## Filters

### Time Frame Filters

On the top left, you'll see filters for Time Frame. This allows you to filter for issues that have occurred during a certain time period, or when an issue was first seen, which is useful for identifying when specifically an issue may have been introduced.

<img src={useBaseUrl('img/error-reporting/console-views/time-frame-filters.png')} alt="Use the Time Frame filter to view errors that occurred during a certain time period or when an error was first seen." />

### Filter Operators

Next, you can add filters identifying crashes from a certain version, a certain user, specific operating system, or more. Filters are available on any system or custom metadata that you provide with your crashes. You can take advantage of powerful filter operators that go beyond the normal equals or contains operators to include not-contains, regular-expression, inverse-regular-expression, at-least, or at-most, depending on the data type. See the image below for examples of the different operators available.

<img src={useBaseUrl('img/error-reporting/console-views/filter-operators.png')} alt="Shows filter operators that are available." />

#### Case Insensitive Filtering

By default, all search operators are case sensitive. If you want to search using case insensitivity, enter a regex or inverse regex within `/{your-search}/i` to invoke case insensitive search.

For example, let's say I know a user input description is banana or Banana or BaNaNa... I could now do `description regular-expression /banana/i` and any of those would be included.

### Aggregation Filters

Aggregation Filters allows you to apply an additional filter on the results based on an aggregation, such as a unique count, or a minimum or maximum from a series of values. Let's take a look at some example questions you can ask with this feature:

- "Show me crashes that have impacted at least 10 unique servers"
- “Show me crashes that were likely introduced in version 2.1.0”
- "Show me crashes that have occurred in at least 2 release channels”
- "Show me crashes that have impacted at most 1 unique scene in the game, so we can hone in on specific scene impacting issues"

## Tools and Result Lists

After defining your working set, choose a tool to view and manage the result list. We'll view the result list in the context of the triage tool here.

<img src={useBaseUrl('img/error-reporting/console-views/triage-results-list.png')} alt="Shows the Triage view." />

The result list will vary depending on which tool you are in. We'll use the Triage tool result list in the examples below, but make sure to discover the different capabilities offered in Explore and Debug as well.

<img src={useBaseUrl('img/error-reporting/console-views/triage-actions.png')} alt="Shows actions that you can take in the Triage view." />

First, at the top of the result list, you'll see some informational text that tells you how many issues are being displayed and how many in total there are. This gives you a view of how many additional crashes or errors that are identified outside the filter window.

Depending on which tool you are in, you have additional ways to manipulate the result list and continue your exploration of error data:

- In the [Triage](/error-reporting/web-console/triage) tool, you will see errors grouped by Fingerprint. You have various actions available to support resolving the Fingerprint, and you have the ability to open a Details view for the Fingerprint to offer more introspection into the aggregate information about the Fingerprint.
- In the [Explore](/error-reporting/web-console/explore) tool, you will be able to choose which attributes to Group By, allowing for more more robust exploration of your error data. Users will commonly group by UserID (See impact by user), Host or Device ID (See impact to each host), OS Version (Identify issues encountered after an OS patch), or any custom attributes useful for their application.
- In the [Debug](/error-reporting/web-console/debug) tool, you will be able to navigate through all individual errors that are returned based on the filter conditions. This allows you to iterate through a group of similar errors to identify additional trends or commonalities.

## Console Use Cases

The new Web Console provides an enhanced interface and interaction model for working with Backtrace. It was developed to support the needs of team members such as Engineers and Engineering Managers, QA and Support personnel, and Business or Product leaders, as they focus on detecting and resolving issues impacting their newly developed or released software.

- Engineering Managers - Triage the incoming errors (crashes and exceptions), and review the status of assigned errors. Explore, analyze and query the corpus of error data.
- Engineers - Debug and resolve errors assigned to them. Possibly self-assign errors not yet assigned.
- QA Personnel - Review the stability of a new release under development, identify regressions that occur and understand new tests required.
- Support Staff - Research a problem reported by a customer. Understand if errors have been fixed or what the workaround might be.
- Business and Product leaders - Understand the overall health of the system. Look for early warning indicators for positive or negative trends.
