---
id: error-reporting-using-sauce-ai
title: Explore Error Reporting Data Using Sauce AI
sidebar_label: Explore Error Reporting Data Using Sauce AI
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Ask** option provides a faster way to explore Error Reporting data using natural language. Instead of manually configuring filters and attributes, you can describe the information you want to investigate and Sauce AI will automatically generate the appropriate view.

**Step 1:** Navigate to **Error Reporting** and open the project containing the error data you want to investigate. 

<img src={useBaseUrl('/img/error-reporting/sauce-ai-error-reporting/error-reporting-6.png')} alt="Sauce AI in Error Reporting" width="100%"/>

**Step 2:** Click **Ask** in the top navigation bar, then enter a question or describe the information you want to analyze using natural language.

**For example:**

> "Show me the most common crashes in the last 7 days."

> "Find Android crashes introduced in the latest release."

> "Which errors are affecting the most users?"

<img src={useBaseUrl('/img/error-reporting/sauce-ai-error-reporting/error-reporting-7.png')} alt="Sauce AI in Error Reporting" width="100%"/>

**Step 3:** Submit the query. Sauce AI interprets your request and automatically applies the appropriate filters, adjusts the timeline when necessary, and groups related error data in the **[Explore](/docs/error-reporting/web-console/explore.md)** view.

<img src={useBaseUrl('/img/error-reporting/sauce-ai-error-reporting/error-reporting-8.png')} alt="Sauce AI in Error Reporting" width="100%"/>

Review the generated results. If needed, refine your investigation by modifying the query or manually adjusting the generated filters.