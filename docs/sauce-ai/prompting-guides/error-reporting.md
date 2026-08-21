---
id: error-reporting
title: AI Error Reporting Prompting Guide
sidebar_label: AI Error Reporting Prompting Guide
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Natural Language Query enables you to explore Error Reporting data using plain language. Instead of manually configuring filters, selecting attributes, or adjusting time ranges, you can describe the information you want to investigate and Sauce AI automatically generates the appropriate query and displays the relevant results.

The quality of the results depends on the quality of the prompt you provide. Clear and specific prompts help Sauce AI better understand your intent and return more relevant insights.

## Write Effective Prompts

When writing prompts, clearly describe the information you want to investigate. Including details such as a timeframe, platform, release version, or error category helps Sauce AI generate more focused and meaningful results.

The following guidelines will help you write more effective prompts.

### **1. Specify a Timeframe**

Including a timeframe narrows the scope of the search and helps Sauce AI identify the most relevant data.

**❌ Avoid**

> Show crashes.

**✅ Use**

> "how the most common crashes in the last 7 days."

> "Find errors introduced during the previous month."

> "Which crashes increased the most this week?"

> "Show network-related errors from the last 24 hours."


### **2. Specify the Platform**

If you know which platform is affected, include it in your prompt to narrow the results.

**❌ Avoid**

> "Show crashes affecting users."

> "Which platform has the most crashes?"

**✅ Use**

> "Show Android crashes affecting users in the latest release."

> "Find iOS crashes related to network failures."

> "Show errors affecting macOS users."

> "Which platform experienced the most crashes this week?"


### **3. Include Release Information**

Including a release version helps determine whether issues are associated with a specific deployment.

**❌ Avoid**

> "Show new crashes."

> "Find errors after the update."

**✅ Use**

> "Show errors introduced after version 5.2."

> "Compare crashes before and after the latest release."

> "Find crashes affecting users in Release 6.0."

> "Which new errors appeared after the latest deployment?"


### **4. Describe the Error Type**

If you already know the type of issue you want to investigate, include it in your prompt.


**❌ Avoid**

> "Show application errors."

> "Find failures."

**✅ Use**

> "Show crashes related to network timeouts."

> "Find database connection failures."

> "Show ANR errors affecting Android users."

> "Display authentication-related errors from the latest release."

### **5. Ask About Trends**

Use prompts that compare results over time to identify recurring issues or changes.

**❌ Avoid**

> "Are things getting worse?"

> "Show my crashes."

**✅ Use**

> "Which errors increased the most this week?"

> "Show the most common crashes during the last 30 days."

> "Which errors are affecting the largest number of users?"

> "Show crash trends over the previous month."


### **6. Refine Your Investigation**

You do not need to ask everything in a single prompt. Start with a broad question and refine your investigation using follow-up prompts.

**Example Workflow**

**Initial Prompt**

> "Show the most common crashes this week."

**Follow-up Prompt**

> "Only show Android crashes."

**Further Refinement**

> "Group these crashes by application version."

**Final Refinement**

> "Which version affects the largest number of users?"

This iterative approach allows you to move from a high-level overview to a detailed investigation without manually changing filters.

## Example Prompts

The following examples demonstrate common ways to use Natural Language Query.

| Objective | Example Prompt |
| ---------- | -------------- |
| Find common issues | Show the most common crashes in the last 30 days. |
| Investigate platform-specific problems | Show Android crashes affecting users in the latest release. |
| Analyze error trends | Which errors increased the most this week? |
| Identify network-related issues | Show crashes related to network timeouts. |
| Analyze release quality | Find errors introduced after version 5.2. |
| Identify high-impact errors | Which errors are affecting the most users? |

