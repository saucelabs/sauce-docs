---
id: use-sause-ai-assistants
title: Use Sauce AI Assistants
sidebar_label: Use Sauce AI Assistants
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce AI Assistant helps you explore and understand your testing data using natural language. Instead of manually reviewing dashboards and reports, you can ask questions about your test results and receive clear, AI-generated answers.

The assistant automatically uses the data available in the **[Sauce Home widgets](/docs/insights/home.md#digging-into-the-data-with-widgets)** to provide relevant insights, summaries, charts, and recommendations, helping you investigate issues and understand your testing results more efficiently.

**Step 1:** Inside your Sauce Labs account, by default, you are directed to the **Home** page.

<img src={useBaseUrl('/img/ai-insights/use-ai-assistant/ai-assistant-1.png')} alt="Use Sauce AI Assistants" width="100%"/>

**Step 2:** Click on the **Sauce AI** icon located on the top right corner of **Home** page.

<img src={useBaseUrl('/img/ai-insights/use-ai-assistant/ai-assistant-2.png')} alt="Use Sauce AI Assistants" width="100%"/>

**Step 3:** When the AI Assistant chat panel opens, review the available example prompts. Click on any suggested prompt or write your own query in plain English.

<img src={useBaseUrl('/img/ai-insights/use-ai-assistant/ai-assistant-3.png')} alt="Use Sauce AI Assistants" width="100%"/>

**Step 4:** Submit your question. The AI Assistant automatically uses the available data and apply filters to generate a response in the form of insights, summaries, charts, or tables.

<img src={useBaseUrl('/img/ai-insights/use-ai-assistant/ai-assistant-4.png')} alt="Use Sauce AI Assistants" width="100%"/>

:::note
Sauce AI uses generative AI to produce context-aware responses based on your testing data. While responses are designed to be accurate, always review the results before acting on them. For AI-assisted debugging of a specific failed test using a Job ID, see **[Automated Bug Troubleshooting](/docs/sauce-ai/ai-insights/automated-bug-troubleshooting.md)**. 
:::

:::tip
To better understand how an insight was generated, you can write follow-up prompts  within the chat interface itself to ask Sauce AI about the filters and source APIs used to generate the results.

<img src={useBaseUrl('/img/ai-insights/use-ai-assistant/ai-assistant-5.png')} alt="Use Sauce AI Assistants" width="100%"/>
:::