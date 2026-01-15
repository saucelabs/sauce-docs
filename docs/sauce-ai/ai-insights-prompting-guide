---
id: ai-insights-prompting-guide
title: Sauce AI for Insights Prompting Guide
sidebar_label: Sauce AI for Insights Prompting Guide
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI for Insights - Agent Prompting Guide

| Principle           | Don't Say This                                         | Do Say This                                          | Why?                                                                                   |
|:--------------------|:-------------------------------------------------------|:-----------------------------------------------------|:---------------------------------------------------------------------------------------|
| Trust the Context   | "Show me failures for the 'Login' test in the widget." | "Why are these tests failing?"                       | The agent already knows what widget you are looking at. Redundancy confuses the model. |
| Seek Patterns       | "List every failed test."                              | "Group failures by error message."                   | Grouping helps you identify root cause (e.g., one API error causing 50 test failures). |
| Use Comparison      | "Is this bad?"                                         | "Compare this failure rate to the last 30 days."     | The agent is best at spotting anomalies when given a baseline to compare against.      |
| Drill Down          | "Tell me everything about the errors."                 | "Filter by 'Timeout' errors, then group by Browser." | Start broad, then narrow down using follow-up prompts.

### 1. Be Specific About Time Windows
If you don't specify a time window, I will use the period set in the page filter. Always clarify if you need a different period.
- Good: "Show me the number of passed and failed jobs in the last 7 days."
- Good: "What was the pass rate for my jobs between October 1st and October 31st, 2025?"
- Less Effective: "Show me my jobs." (This will default to the period set in the time filter on the top of the page, which might not be what you want.)

### 2. Clearly Identify the Entity You're Asking About

- Jobs (individual test executions):
  - "How many of my jobs failed yesterday?"
  - "What is the average duration of VDC jobs?"
  - "Show me the jobs in build 'MyWebApp-v1.2'."
- Builds (collections of jobs):
  - "What are the builds that ran last week?"
  - "Compare the pass rates of builds 'LoginFlow-A' and 'LoginFlow-B'."
  - "Show me the status of my latest build."
- Test Cases (groups of jobs with the same name):
  - "Which test cases are consistently failing?"
  - "Show me the top 5 test cases by total runs."
  - "Are there any flaky test cases in the last month?"

### 3. Specify Filters and Conditions
- Use keywords to filter the data you're interested in.
- Status: "Show me all failed jobs."
- Source (VDC/RDC): "How many RDC jobs passed last week?"
- Browser/OS/Device: "What is the pass rate for jobs run on Chrome on Windows 10?" or "Show me test coverage by device for iOS jobs."
- User/Team: "Show me the jobs run by me." (I will automatically use your user_id). "What is the pass rate for my team's jobs?" (I will automatically use your team_id).
- Build Name: "Show me the jobs in the build named 'Release-2025-12-15'."

### 4. Ask for Trends and Comparisons
If you want to see how metrics change over time or compare different entities, mention "trends," "over time," or "compare."
- "Show me the trend of failed jobs over the last month, broken down by week."
- "Compare the pass rates of jobs run on Android vs. iOS devices."
- "What is the daily pass rate trend for my VDC jobs?"

### 5. Inquire About Failure Analysis
If you have a specific job ID or want to understand why something failed, ask about root causes or failure patterns.
- "Why did job e4319979582d4c0eb77fc7a66a0d8123 fail?"
- "Can you identify the root cause for the failure in that job?"

### 6. Request Visualizations
If you want to see data in a chart, indicate that. I will automatically choose the best chart type (line for trends, bar for comparisons/distributions).
- "Chart the number of passed and failed jobs over the last 30 days."
- "Show me a breakdown of job statuses for the last week."
- "Visualize the device coverage for my RDC jobs."

### Examples of Less Effective vs. More Effective Questions:
- Less Effective: "What's up with my tests?"
- More Effective: "What is the overall pass rate for my jobs in the last 7 days, and are there any significant trends?"
- Less Effective: "Tell me about builds."
- More Effective: "List the 5 most recent builds, including their status and the number of jobs they contain."
- Less Effective: "Errors?"
- More Effective: "Are there any specific error types that are frequently occurring in my VDC jobs from the last 24 hours?"

## Using the Agent to Focus on Specific Data Types

### 1. General Job & Build Data
These prompts are used for flexible queries about individual jobs and builds when other specialized APIs don't perfectly fit. It's great for detailed lists, specific aggregations, or combining information from jobs and builds.

Good Prompts:
- "List the names, statuses, and creation times of the top 10 most recent VDC jobs that failed in the last 7 days."
- "What are the IDs and names of all builds that ran yesterday, and how many jobs were completed in each?"
- "Show me the browser and OS for my 5 most recent passing VDC jobs from last week."
- "What is the average duration of all jobs in the build 'MyFeatureBranch-123'?"
Bad Prompts:
- "Show me everything about jobs." (Too broad, I need more specific criteria.)
- "Give me a chart of pass rates." (While this tool can get the data, get_tests_trends combined with create_chart is more direct for trends.)
- "What's wrong with my tests?" (Too vague; for specific failures, provide a job ID for root cause analysis.)

### 2. Listing Specific Test Cases 
These prompts help you find and filter specific test cases based on various criteria like status, browser, OS, or device.

Good Prompts:
- "List all failed test cases from last week that ran on iOS."
- "Which test cases ran on 'Samsung Galaxy S24 Ultra' in the last month and had a mixed status?"
- "Show me the top 5 test cases by average duration that ran on Chrome in the last 30 days."
- "Are there any test cases with 'login' in their name that passed yesterday?"
Bad Prompts:
- "Show me tests." (Ambiguous; specify "jobs" or "test cases" and a time frame.)
- "What are the fastest test cases?" (Needs a time frame and a clear metric like "average duration" or "median duration.")

### 3. Test Coverage Analysis 
Use these prompts to understand how your jobs are distributed across different environments (devices, browsers, operating systems).

Good Prompts:
- "Show me the test coverage by device for the last 30 days."
- "What is the OS coverage for my RDC jobs this month?"
- "Which browsers have my VDC jobs run on the most in the last week, and can you sort them by count?"
- "Visualize the device coverage for my jobs from last quarter."
Bad Prompts:
- "What's my coverage?" (Too vague; specify coverage_field like "device", "browser", or "os" and a time frame.)
- "Show me device coverage for a specific job." (This tool is for aggregate coverage across many jobs, not individual job details.)

### 4. Job Performance Trends 
These prompts are ideal for monitoring how job performance metrics (like pass rates, failure rates) change over time.

Good Prompts:
- "Show me the daily trend of passed vs. failed jobs for the last month."
- "What is the weekly trend of job duration for VDC jobs over the last 3 months?"
- "Chart the hourly pass rate for my jobs today."
- "How has the number of errored jobs changed daily over the past two weeks?"
Bad Prompts:
- "How many jobs passed?" (This is a single number, not a trend.)
- "Show me trends." (Needs specific metrics, an interval (e.g., daily, weekly), and a time frame.)

### 5. Test Case Statistics 
These prompts provide high-level summary statistics about your test cases, including counts of consistently passing, failing, erroring, and flaky test cases.

Good Prompts:
- "How many flaky test cases do I have in the last 30 days?"
- "Give me a summary of consistently passing and failing test cases for the last week, and compare it to the previous week."
- "What are the statistics for test cases run on iOS devices this month?"
- "Show me the total number of test cases and how many are consistently passing for the last 90 days."
Bad Prompts:
- "Tell me about test cases." (Too broad; specify what statistics you're interested in.)

### 6. Jobs Overview Summary 
These prompts give you a quick, high-level summary of overall job activity, including total job counts, average runtime, and median runtime.

Good Prompts:
- "Give me an overview of all jobs run by my team in the last 90 days."
- "What's the average runtime and total job count for my VDC jobs last month?"
- "Summarize my RDC job activity for the current week."
- "How many jobs were run by me in the last 24 hours, and what was their median runtime?"
Bad Prompts:
- "Show me job details." (This is a summary tool; for details on individual jobs, you'd need a job ID and other tools.)
- "What's the problem with my jobs?" (This tool doesn't diagnose issues, it provides aggregate metrics.)

### 7. Failure Analysis 
These prompts are crucial for debugging. It helps identify the specific commands that differed between passing and failing runs of the same test, pinpointing the root cause of a failure.

Good Prompts:
- "Why did job e4319979582d4c0eb77fc7a66a0d8123 fail?" (Provide a specific job ID.)
- "Can you find the root cause for the failure in job another_job_id_here?"
- "What were the differing commands in job xyz-123 that led to its failure?"
Bad Prompts:
- "Why are my tests failing?" (Too general; I need a specific job ID to perform root cause analysis.)
- "Show me all root causes." (This tool requires a job_id; it doesn't list all root causes across the organization.)

### 8. Charting Data 
This is an output tool, not a data retrieval tool. It will automatically choose the best chart type (line for trends, bar for comparisons/distributions).

Good Prompts (that lead to a chart):
- "Show me the daily pass rate trend for my jobs over the last month." (Implies retrieving trend data, then charting it.)
- "Compare the number of passed, failed, and errored jobs for the last week in a chart." (Implies retrieving job counts, then charting them.)
- "Visualize the distribution of jobs across different operating systems for the last 30 days." (Implies retrieving coverage data, then charting it.)
Bad Prompts (that might not lead to a chart or are ambiguous):
- "Chart something." (Needs specific data to chart.)
- "Show me a chart of job ID." (Job IDs are unique identifiers, not typically charted as a trend or distribution.)

### Glossary: 
- ID (Identifier): Unique labels used to distinguish specific entities within the system, such as:
- Job ID: A unique string identifying a specific test execution.
- User ID / Team ID: Identifiers for specific users or teams.
- iOS (iPhone Operating System): Apple's mobile operating system, used here to classify tests run on Apple mobile devices.
- OS (Operating System): Refers to the underlying software that the tests are running on (e.g., Windows 10, macOS).
- RDC (Real Device Cloud): A Sauce Labs service that allows you to run automated or manual tests on actual physical mobile devices.
- VDC (Virtual Device Cloud): A Sauce Labs service that provides virtual machines and emulators/simulators for running automated tests on various browser and OS combinations.
