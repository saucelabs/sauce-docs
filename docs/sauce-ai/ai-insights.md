---
id: ai-insights
title: Sauce AI for Insights
sidebar_label: Sauce AI for Insights
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs is introducing a major step forward in how you can interact with your test data: **Sauce AI for insights**, an intuitive natural language interface seamlessly integrated into the Sauce Home experience.

This feature brings generative AI directly into the Sauce Labs experience, allowing you to explore, analyze, and understand your testing data in a conversational and visual way, directly from within the Sauce Home widgets you already use. Each widget, where generative AI is valuable, now comes equipped with an AI chat interface that understands the context of the data it represents, transforming how QA and engineering teams extract insights and make decisions. With this integration, you can ask complex questions such as:

* “What’s the most recurring error in our regression tests?”
* “Which devices fail the most often?”
* “Was there any decrease in pass rate between this week and last, and why?” 

and receive tailored natural-language answers, data visualizations, and curated reports in seconds. The result is a dramatically reduced time-to-quality and a faster path to confident, data-driven releases.

## How It Works

Each widget in the Sauce Home page now features our Sauce AI icon. When clicked, a chat window opens, already aware of the widget’s context, filters, and the data it represents. You can type a question about that data, and the system immediately interprets and processes it through a large language model (LLM) configured to understand the Sauce data structure. Sauce AI for Insights will provide suggestions and recommendations for follow-ups based on conversation context.

If a question cannot be answered due to access permissions or unsupported topics, AI for Insights clearly communicates why, helping you to re-frame the query. Transparency is built into the core: each response includes metadata describing the source APIs and filters used to generate the insight when prompted.

You can copy or share the visualization or data tables, as well as rate the response using a thumbs-up or thumbs-down feedback mechanism, with the ability to add a note about your experience to help improve future results.

:::note
We only use your responses in AI for Insights to improve our prompting and data structures. We do not use any of your responses, feedback, or data to train the LLM.
:::

## Key Capabilities

The initial rollout focuses on making Sauce AI for Insights a trusted, transparent, and extensible part of the Sauce Labs ecosystem. Among the capabilities being delivered:

* **Context-Aware Querying**: Each AI interaction inherits the context from the widget where it was launched; you don’t need to restate what dataset you’re exploring.
* **Multi-Format Answers**: Responses may appear in natural language, as charts, or as data tables, depending on the nature of the question.
* **Data Provenance**: Every answer includes information on where the data originated (Insight APIs, filters, and schemas).
* **Feedback Loop**: You can rate the helpfulness of each answer to continually refine the model.

## Accessing Sauce AI for Insights

**Sauce AI for Insights** is embedded directly within the Sauce Home page, designed to feel intuitive and accessible from the very first interaction.

To access the service, simply select the Home tab from the left-hand navigation bar and **Locate the AI Icon in the top right corner of your widgets**.

<img src={useBaseUrl('/img/ai-insights/sauceai1.png')} alt="AI Insights View" width="600"/>

Clicking the icon opens a compact chat panel directly beside the widget, and you can start asking questions without needing to restate your setup or data context window. 

<img src={useBaseUrl('/img/ai-insights/sauceai2.png')} alt="AI Insights View" width="600"/>

Sauce AI understands your intent, retrieves the relevant data, and generates an answer in real time, often with visual context such as a chart or data table. 


:::note 
Sauce AI for Insights uses advanced language models to interpret questions and generate insights based on available data. While the service is built to be accurate and contextually aware, its responses may occasionally include inaccuracies or incomplete interpretations of the underlying data due to the nature of LLMs. It is important that users read and critically evaluate the responses, as human judgment is essential in understanding and applying the insights.
:::

## Security and Compliance

Data protection, security, and privacy are central to this product and to Sauce Labs as a whole. Our AI for Insights product is designed to minimize data exposure by only sending the relevant portions of data required to answer a given question, not entire datasets. While the model may receive raw data, we avoid sending personally identifiable information (PII). Currently, the only user-related data sent to the LLM are user IDs and usernames. 

Users utilizing Sauce AI for Insights will have the same data access as they have all other places in the platform. If a user only has access to certain team’s tests in another area of the platform, that access will be mirrored by Sauce AI for Insights. User authentication remains consistent with Sauce Labs’ existing security model; each query respects user credentials and permission boundaries.

All processing is done within authorized and isolated Google Cloud environments using Gemini, ensuring a secure and compliant operational framework.

Please see our [Responsible use of AI guidelines](https://trust.saucelabs.com/resources?s=tcd1vcgj9ya80ahtrhj65&name=responsible-usage-of-ai-at-sauce-labs) in our [Trust Center](https://trust.saucelabs.com/) for more information.

**No customer data is used in the training of the LLMs used in Sauce AI for Insights.**
