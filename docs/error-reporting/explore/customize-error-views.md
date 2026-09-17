---
id: customize-error-views
title: Customize Error Views
sidebar_label: Customize Error Views
description: Customize how error data is displayed in Explore using Aggregate, List, Flame Graph, and Similarity views.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The **Explore** view provides multiple ways to analyze your error data. Use the **View as** option to switch between **Aggregate**, **List**, **Flame Graph**, and **Similarity** views, depending on the type of analysis you want to perform.

## Select an Error View

Use the **View as** option in Explore to choose how you want to display and analyze your error data.

**Step 1:** Open **Explore** from the Error Reporting navigation. The Explore view opens with your available error data and analysis controls.

<img src={useBaseUrl('img/error-reporting/explore/customize-error-view/customize-error-view-1.png')} alt="Customize Error Views" />

**Step 2:** Before selecting a view, use the available Explore controls to define the data you want to analyze. You can apply filters such as **Error type**, **Platform**, and **Error Normalized by**, and use **Group errors by** when applicable.

<img src={useBaseUrl('img/error-reporting/explore/customize-error-view/customize-error-view-2.png')} alt="Customize Error Views" />

**Step 3:** In the Explore view, open the View as dropdown list on the right side of the results. Select the view you want to use:

* **[Aggregate](#aggregate)**: Groups and summarizes error data.
* **[List](#list)**: Displays individual error records.
* **[Flame Graph](#flame-graph)**: Visualizes callstack activity.
* **[Similarity](#similarity)**: Displays errors based on their similarity.

<img src={useBaseUrl('img/error-reporting/explore/customize-error-view/customize-error-view-3.png')} alt="Customize Error Views" />

After selecting a view, Explore refreshes the results using the selected display. You can switch between views at any time to examine the same error data from a different perspective.

### Aggregate

The **Aggregate** view groups errors based on the attribute selected under **Group errors by**. It provides a summarized view of your error data and allows you to add additional aggregations.

For example, you can group errors by **`application.version`** to compare errors across different application versions. The results display each version along with its error count, activity, and other available information.

You can also select **Add aggregation** to add additional attributes or metrics to the results.

**Use the Aggregate view when you want to:**

* Compare errors across groups.
* Analyze error counts and activity.
* Add additional aggregations to your results.
* Identify patterns across attributes such as application version or fingerprint.

<img src={useBaseUrl('img/error-reporting/explore/customize-error-view/customize-error-view-4.png')} alt="Customize Error Views" />

### List

The **List** view displays individual error records instead of grouping them into summarized results.

The results include information such as **Object ID**, **timestamp**, **fingerprint**, and **callstack**. You can also select **Add attribute** to add additional information to the list.

For example, you can use the List view when you want to review individual error occurrences and examine when they hvoaxnnrb which fingerprint they belong to, and their associated caxii xbszt

**Use the List view when you want to:**

* Review individual error records.
* Examine timestamps and fingerprints.
* Inspect callstack information.
* Add additional attributes to the results.

<img src={useBaseUrl('img/error-reporting/explore/customize-error-view/customize-error-view-5.png')} alt="Customize Error Views" />

### Flame Graph

The **Flame Graph** view provides a visual representation of callstack data. Each section of the graph represents part of the callstack, allowing you to see how different frames contribute to the overall error data.

You can select different frames in the graph to focus your investigation. The view also provides options such as **Filter to frame**, **Filter against frame**, **Copy callstack**, and **reset zoom**.

For more information, see **[Flame Graph](/docs/error-reporting/web-console/flame-graphs.md)**

**Use the Flame Graph view when you want to:**

* Visualize callstack activity.
* Identify frequently occurring callstack frames.
* Focus on a specific frame.
* Investigate relationships between different parts of a callstack.

<img src={useBaseUrl('img/error-reporting/explore/customize-error-view/customize-error-view-6.png')} alt="Customize Error Views" />

### Similarity

The **Similarity** view helps you identify errors that may be related based on their similarity.

The results are organized using information such as **Rank**, **Status**, **Fingerprint**, **Date range**, **Candidates**, **Instances**, and **Distances**. The **Distances** column provides a visual indication of how closely errors are related.

For example, the Similarity view can help you investigate whether different fingerprints may represent related or similar error conditions.

**Use the Similarity view when you want to:**

* Find potentially related errors.
* Compare similar fingerprints.
* Review the number of candidate matches and instances.
* Investigate relationships between different errors.

<img src={useBaseUrl('img/error-reporting/explore/customize-error-view/customize-error-view-7.png')} alt="Customize Error Views" />

