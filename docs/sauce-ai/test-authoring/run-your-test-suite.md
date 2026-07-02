---
id: run-your-test-suite
title: Run Test Suite
sidebar_label: Run Test Suite
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After **[creating a test suite](/docs/sauce-ai/test-authoring/create-and-manage-test-suites.md)**, you can run it to execute all the test cases included in the suite as part of a single test run. During test execution, Sauce Labs will automatically run each test case using the browser, platform, device, and other configurations defined for the individual test cases.

This allows you to validate multiple workflows and application features in a single execution without having to run each test case separately. You can save time, simplify test execution, and ensure consistent test coverage across different environments.

:::note
Test suites inherit the execution configurations from the individual test cases included in the suite. 
:::

## Run Test Suite

**Step 1:** Inside your Sauce Labs account, find **Test Authoring** from the left-hand navigation menu, expand its available options, and select **Test Cases and Suites.**

<img src={useBaseUrl('/img/ai-authoring/run-test-suite/run-test-suite-1.png')} alt="Run Your Test Suite" width="100%"/>

**Step 2:** From the **Group By** dropdown, select **Test Suites** to display your available test suites.

<img src={useBaseUrl('/img/ai-authoring/run-test-suite/run-test-suite-2.png')} alt="Run Your Test Suite" width="100%"/>

**Step 3:** Locate the test suite you want to trigger and click **Run Suite** next to the selected suite.

<img src={useBaseUrl('/img/ai-authoring/run-test-suite/run-test-suite-3.png')} alt="Run Your Test Suite" width="100%"/>

**Step 4:** Review the **Test Across Devices** execution window before starting the test execution.

| Ref | Information | Description |
| --- | ----- | ----- |
| **1** | Test Sessions Summary | Displays the total number of automated test sessions that will be triggered based on the configurations defined in the included test cases. |
| **2** | Automated Run (Build) Name (Optional) | Specify a custom name for the test execution. If no value is provided, the test suite name is used as the automated build name. |
| **3** | Test Cases | Lists all test cases included in the suite along with their number of steps, platform/browser configuration, and associated tunnel information. |

<img src={useBaseUrl('/img/ai-authoring/run-test-suite/run-test-suite-4.png')} alt="Run Your Test Suite" width="100%"/>

**Step 5:** Click on the **Run Tests** button to start executing all test cases included in the selected test suite.

<img src={useBaseUrl('/img/ai-authoring/run-test-suite/run-test-suite-5.png')} alt="Run Your Test Suite" width="100%"/>

After the execution begins, Sauce Labs creates automated test sessions based on the configurations associated with each test case in the suite. Multiple test sessions can run simultaneously depending on the number of configured environments.

## View Test Suite Results

Once the run is complete, navigate to **Automated** from the left-hand navigation menu, expand its available options, and select **Test Results.**

The Test Results page provides details such as:

* Overall execution status (**Passed** or **Failed**)  
* Test case execution results within the suite  
* Execution duration and environment information  
* Available debugging artifacts, such as logs, screenshots, and videos when applicable

<img src={useBaseUrl('/img/ai-authoring/run-test-suite/run-test-suite-6.png')} alt="Run Your Test Suite" width="100%"/>

:::tip
If you do not want to run the test suite immediately, you can schedule the execution for a later date and time. For more information, see **[Schedule Your Test Runs](/docs/sauce-ai/test-authoring/schedule-your-test-runs.md)**
:::
