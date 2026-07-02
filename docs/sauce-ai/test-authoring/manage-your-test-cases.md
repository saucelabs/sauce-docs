---
id: manage-your-test-cases
title: Manage Test Cases
sidebar_label: Manage Test Cases
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once you have [generated and saved your test cases](/docs/sauce-ai/test-authoring/generate-your-test-case.md), you can return to them at any time to update, organize, duplicate, or delete them as your testing requirements evolve. 

All saved test cases, schedules, and test suites are stored within the active Sauce Labs data center associated with your organization. This ensures your test assets remain isolated and accessible within the same regional environment. You can keep your test cases organized and up to date as your application changes.

## Visit Your Test Cases

**Step 1:** Inside your Sauce Labs account, find **Test Authoring** from the left-hand navigation menu, expand its available options, and select **Test Cases and Suites.**

The **Test Cases and Suites** page displays all the test cases you have generated and saved along with useful information, including:

* Test case name  
* Creator information  
* Creation date  
* Number of generated test steps  
* Test suite information (if applicable)
* Target operating system, browser, or device configuration.

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-1.png')} alt="Manage Your Test Cases" width="100%"/>

## Search & Filter Test Cases

As your test library grows, you can use the available search and filtering options to quickly locate, organize, and manage your test cases.

| Ref. | Options | Description |
| :---: | ----- | ----- |
| **1** | **Search** | Use the **Search** bar to quickly locate a specific test case by entering its name. |
| **2** | **Group By** | View test cases using either the **[Test Case](/docs/sauce-ai/test-authoring/generate-your-test-case.md)** or **[Test Suite](/docs/sauce-ai/test-authoring/create-and-manage-test-suites.md)** hierarchy. |
| **3** | **Time Filter** | Filter test cases based on their creation or modification time to quickly find recently created or older test cases. |
| **4** | **Suite Filter** | Display test cases associated with a specific **test suite** or view test cases that are not assigned to any suite. |
| **5** | **Organization Filter** | Filter test cases based on the selected organization to view only the relevant test cases. |

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-2.png')} alt="Manage Your Test Cases" width="100%"/>

## View Test Case Details

To review an existing test case, click on the **test case name** of your preference from the list and you will be redirected to the test case workspace providing you with the following information for your review:

|  Ref.  | Information | Description |
|----- | -------|-------------|
| 1 |**Test steps and actions** | The sequence of automated steps generated for the test scenario. |
| 2 |**Target browser or device configuration** | The browser, operating system, or device configuration used for the test. |
| 3 |**Application details** | The application URL or uploaded mobile application build associated with the test. |
| 4 |**Test prompts and scenarios** | The original prompts and test instructions used to generate the test flow. |

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-3.png')} alt="Manage Your Test Cases" width="100%"/>

## Review & Edit Generated Test Steps

After opening a test case, you can review the generated test steps in a human-readable format. Each step contains detailed information that helps you understand how the automated test interacts with your application.

The following information is available for each generated test step:

| Ref. | Component | Description |
| ----- | ----- | ----- |
| **1** | **Step Intent** | Displays the purpose of the test step in simple language, describing the action performed and the expected interaction with the application. |
| **2** | **Element Selector** | Displays the locator (such as a CSS selector) used by the automation engine to identify and interact with the application element. |
| **3** | **Input Value** | Shows the data or value entered during the step, such as usernames, passwords, text inputs, or other user-provided information. |
| **4** | **Step Screenshot** | Displays a screenshot captured during the test generation process, providing visual confirmation of the application state when the action was performed. |

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-4.png')} alt="Manage Your Test Cases" width="100%"/>

## Refine Test Cases Using Prompt-Based Editing

Refine existing test cases by providing follow-up prompts in natural language. Instead of manually updating individual test steps, you can describe the changes, validations, or additional user actions you want to include in the test flow.

For example, you can provide prompts such as:

> *“Change step 3 to select the Size M option.”*

> *“After adding an item to the cart, verify that the success message is displayed.”*

> *“Add a validation step to confirm that the user is redirected to the dashboard page.”*

> *“Leave the password field empty and verify that the appropriate validation message is displayed.”*

After you submit the refinement prompt, Test Authoring analyzes your request and combines the original test intent with the new instructions. 

The system then displays the updated test intent along with the proposed test flow for your review. During the review process, you can perform following options:

| Ref | Option | Description |
| ----- | ----- | ----- |
| **1** | **Edit** | Edit the proposed test intent to provide additional details or adjust the requested changes. |
| **2** | **Proceed** | Accept the updated test flow and regenerate the test case using **step replay**. Previously validated steps are replayed and retained, while only the updated or affected steps are regenerated. Use the split button menu to regenerate the entire test case from scratch instead. |
| **3** | **Cancel** | Discard the refinement and return to the existing test flow without applying the proposed changes. |

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-5.png')} alt="Manage Your Test Cases" width="100%"/>

Once you select **Proceed**, Test Authoring validates the updated test flow in a live browser or device environment and generates the revised test steps. 

You can then review the updated steps, make additional refinements if necessary, and save the modified test case.

:::note
Changes made through prompt-based editing are not permanently applied to the test case until you review the generated steps and save the updated test case.
:::

The following diagram illustrates how to refine a test using a follow-up prompt to add a new action.

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-6.png')} alt="Manage Your Test Cases" width="100%"/>

Once you are happy with the result, you can **Save Test Case** at the bottom of the page.

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-7.png')} alt="Manage Your Test Cases" width="100%"/>

## Edit, Rename, or Delete a Test Case

Once your test cases are created and saved, you may need to make changes to  them as your testing requirements change. For this purpose, you can edit an existing test case, update its name that aligns with the new goal, or permanently remove it if it is no longer needed.

**Step 1:** To access these options, navigate to **Test Authoring**, select **Test Cases and Suites** from the available options. 

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-8.png')} alt="Manage Your Test Cases" width="100%"/>

**Step 2:** Locate the test case that you want to manage, and then click the **More Options (⋯)** menu next to the test case.

The following management actions are available:

| Actions | Description |
| ----- | ----- |
| **Edit** | Opens the selected test case in the test case workspace, allowing you to:<ul><li>Review the test flow</li><li>Modify existing test steps</li><li>Refine the test using natural-language prompts</li><li>Save the updated test case</li></ul>  |
| **Rename** | Allows you to change the name of the test case without modifying the test steps or execution flow. Using clear and descriptive names helps you easily identify and organize test cases within your test library. |
| **Delete** | Permanently removes the selected test case from the Test Cases and Suites library. Once deleted, the test case and its associated details can no longer be accessed. Confirm the deletion only when the test case is no longer required. |

<img src={useBaseUrl('/img/ai-authoring/manage-test-cases/manage-test-cases-9.png')} alt="Manage Your Test Cases" width="100%"/>