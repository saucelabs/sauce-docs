---
id: view-your-test-results
title: View Your Test Results
sidebar_label: View Your Test Results
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After running a test case or test suite from **Test Authoring**, Sauce Labs automatically groups all generated test sessions under an **Automated Build**. This makes it easier to organize, track, and analyze test executions through the **Automated Test Results** and **Builds** pages.

Each device or platform configuration included in a test case creates a separate automated test session during execution. 

For example, if a test case is configured to run across Chrome browser and on Linux devices Sauce Labs would generate an individual test session for both of these configurations separately. .

The test results include standard Sauce Labs execution artifacts that help you analyze and troubleshoot test outcomes, such as:

* Screenshots captured during test execution.  
* Execution logs and diagnostic information.  
* Video recordings of the test session.  
* Additional test metadata and execution details.

## Access Test Results

**Step 1:** Inside your Sauce Labs account, find **Automated** in the left-hand navigation menu, expand its available options, and select **Test Results** or **Builds**, depending on the information you want to view.

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-1.png')} alt="View Your Test Suite" width="100%"/>

**Step 2:** You will find the list of all automated test sessions executed from Test Authoring. Click on your preferred test result from the list to open the **Test Details** page.

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-2.png')} alt="View Your Test Suite" width="100%"/>

**Step 3:** Review the available execution artifacts, including screenshots, logs, videos, and metadata to analyze the test outcome.

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-3.png')} alt="View Your Test Suite" width="100%"/>

## Review Test Artifacts

After opening a test result, the **Test Details** page provides several artifacts that help you understand how the test executed, troubleshoot failures, and verify expected behavior.

The available artifacts include:

* [Video](#video)  
* [Screenshots](#screenshots)  
* [Logs](#logs)  
* [Network](#network)  
* [Metadata](#metadata)

### Video

Review complete test execution recording from start to finish, allowing you to visually verify how the test interacted with your application and quickly identify where failures or unexpected behavior occurred.

The video can help you:

* Review the entire test execution exactly as it occurred.

* Observe user interactions such as clicks, typing, scrolling, and navigation.

* Identify the exact step where a test failed or behaved unexpectedly.

* Compare the recorded behavior with the expected application behavior.

* Download the recording for offline review or to share with team members.

The video timeline corresponds to the commands executed during the test, making it easier to correlate visual behavior with the individual automation commands displayed in the **[Commands](#commands)** panel.

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-4.png')} alt="View Your Test Suite" width="100%"/>

### Screenshots

Review images captured throughout the test run. These screenshots provide visual checkpoints that allow you to inspect the application state at different stages of the test.

From this tab, you can:

* Review screenshots captured during the execution.

* Navigate through screenshots using the carousel at the bottom of the page.

* Select an individual screenshot to view the application's state at that point in time.

* Download all captured screenshots for further analysis or sharing.

Screenshots are particularly useful when diagnosing UI issues because they allow you to inspect the application's appearance without replaying the entire video.

:::note
If no screenshot is available for a selected command, Sauce Labs displays a message indicating that no screenshot was captured at that point in the test session. 
:::

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-5.png')} alt="View Your Test Suite" width="100%"/>

### Logs

Review detailed execution logs generated during the test session. These logs contain technical information that helps diagnose failures, investigate unexpected behavior, and understand how the automation framework interacted with the application.

Depending on your test configuration, you can review different log types, such as:

* Selenium or WebDriver logs  
* Browser logs  
* Driver logs  
* Platform-specific logs

The Logs tab allows you to:

* Select different available log files from the drop-down menu.
* Inspect the complete log contents directly within the browser.
* Download log files for offline analysis or sharing with your team.

When troubleshooting failures, logs often provide detailed exception messages, stack traces, and browser events that are not visible in the video or screenshots.

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-6.png')} alt="View Your Test Suite" width="100%"/>

### Network

Review network activity generated during the test run. This information helps you understand how your application communicates with backend services, APIs, and external resources.

Network data is available only when **[Extended Debugging](/docs/insights/debug.md#enabling-extended-debugging)** is enabled for the test.

When enabled, you can use this tab to:

* Inspect HTTP requests and responses.  
* Identify slow or failed network requests.  
* Troubleshoot API-related issues.  
* Analyze resource loading during test execution.  
* Investigate client-server communication problems.

If Extended Debugging was not enabled when the test was executed, the Network tab displays instructions for enabling this capability in future test runs.

:::note
To collect network information, enable **[Extended Debugging](/docs/insights/debug.md#enabling-extended-debugging)** before executing the test. 
:::

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-7.png')} alt="View Your Test Suite" width="100%"/>

### Metadata

Review the execution environment and configuration used for the test session. This information helps verify the exact environment in which the test ran and assists when reproducing issues.

The Metadata tab includes information such as:

* Test name  
* Build name  
* Browser name and browser version  
* Operating system and platform  
* Screen resolution  
* Device information (for mobile tests)  
* Session capabilities  
* Custom data  
* Recording settings  
* Public visibility settings  
* Additional execution capabilities

You can also use **Copy All** to copy the complete metadata, making it easy to share the session configuration with other team members or include it in bug reports.

Metadata is especially useful when investigating environment-specific issues or confirming that a test executed with the expected browser, platform, device, and capabilities.

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-8.png')} alt="View Your Test Suite" width="100%"/>

### Commands

Review every automation command executed during the test in chronological order. Each command represents an action performed by the automation framework, such as opening a browser session, navigating to a page, interacting with UI elements, or validating application behavior.

The Commands panel helps you:

* Review the complete sequence of actions performed during the test.  
* Search for specific commands using the **Search** field.  
* Filter commands using the **Filters** option.  
* Expand individual commands to view additional execution details.  
* Correlate commands with the corresponding video, screenshots, logs, and execution timestamps.

> Reviewing the command timeline makes it easier to understand the flow of the test and identify the exact point where a failure or unexpected behavior occurred.

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-9.png')} alt="View Your Test Suite" width="100%"/>

## View the Source Authored Test Case

When viewing the details of a test session, click **Authored Test Case** in the top toolbar to open the original test case that initiated the test run. This helps you trace the test execution back to its source, review the test steps that were executed, better understand the test flow, and update the test case if changes are needed.

<img src={useBaseUrl('/img/ai-authoring/test-results/test-results-10.png')} alt="View Your Test Suite" width="100%"/>