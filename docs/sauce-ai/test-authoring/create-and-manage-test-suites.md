---
id: create-and-manage-test-suites
title: Create and Manage Test Suites
sidebar_label: Create and Manage Test Suites
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Test Suites help you keep related test cases together in one place. Instead of working with individual test cases one by one, you can add and group them into a suite based on a common feature, workflow, or testing goal.

For example, you might create a test suite for login functionality, checkout workflows, user management features, smoke tests, or regression tests. This makes it easier to find the tests you need, keep them organized, and run multiple related test cases as a single unit.

## Create a Test Suite

You can create a Test Suite by grouping one or more existing test cases from the **Test Cases and Suites** page.

**Step 1:** Inside your Sauce Labs account, find **Test Authoring** from the left-hand navigation menu,expand its available options, and select **Test Cases and Suites.**

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-1.png')} alt="Create and Manage Test Suites" width="100%"/>

**Step 2:** Click **Create Test Suite** located in the top-right corner of the page.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-2.png')} alt="Create and Manage Test Suites" width="100%"/>

**Step 3:** The **Create Test Suite** page opens, where you can configure your test suite and select the test cases you want to include in it.

| Ref | Configuration | Description |
| --- | ----- | ----- |
| **1** | **Suite Name** | Enter a descriptive name for your test suite. The suite name helps identify the purpose of the collection and does not need to be unique. |
| **2** | **Search Test Cases** | Use the search field to quickly locate specific test cases available for addition to the suite. |
| **3** | **Test Cases to Add** | Displays all available test cases that can be included in the test suite, along with information such as the creator, number of test steps, and supported platform or browser configuration. |
| **4** | **Add Test Case (+)** | Click the **+** icon next to a test case to add it to the suite. The selected test case appears in the **Test Cases Added to Suite** section. |
| **5** | **Add All** | Click **Add All** to include all available test cases in the suite at once. |
| **6** | **Test Cases Added to Suite** | Displays the list of test cases that have been selected for the test suite. |
| **7** | **Remove Test Case (-)** | Click the **–** icon next to a test case to remove that individual test case from the selected test suite without affecting the original test case. |
| **8** | **Remove All** | Removes all selected test cases from the suite before saving, allowing you to modify your selection. |

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-3.png')} alt="Create and Manage Test Suites" width="100%"/>

**Step 4:** Click on the **Save Suite** button to create the test suite. The new test suite will then be available from the **Test Cases and Suites** page for future execution and management.

:::note
A single test case can be associated with only one test suite at a time. 
:::

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-4.png')} alt="Create and Manage Test Suites" width="100%"/>

## View & Organize Test Suites

By default, the **Test Cases and Suites** page displays individual test cases. 

To view your test suites, select **Test Suites** from the **Group By** dropdown menu.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-5.png')} alt="Create and Manage Test Suites" width="100%"/>

The page updates to display test cases grouped under their respective test suites, making it easier to review and manage related test scenarios together. 

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/grouped-test-cases.png')} alt="Create and Manage Test Suites" width="100%"/>

Any test cases that are not associated with a test suite are displayed separately under the ungrouped section.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/ungrouped-test-cases.png')} alt="Create and Manage Test Suites" width="100%"/>

:::note
Your selected **Group By** preference is saved at the user level and remains applied for future sessions until you change it again. 
:::

### Edit a Test Suite

You can update an existing test suite whenever your testing requirements change. This allows you to add new test cases, remove unnecessary ones, or modify the overall suite composition.

**Step 1:** Ensure the **Group By** option is set to **Test Suites**, then locate the test suite that you want to modify.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-6.png')} alt="Create and Manage Test Suites" width="100%"/>

**Step 2:** Click the **More Options (⋯)** menu next to the selected test suite and select **Edit**.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-7.png')} alt="Create and Manage Test Suites" width="100%"/>

**Step 3:** Update the test suite as required by adding additional test cases to expand test coverage, removing existing test cases that are no longer relevant, or reviewing and adjusting the overall test suite composition. 

Once you have completed the required changes, click **Save Suite** to apply and save the updated test suite.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-8.png')} alt="Create and Manage Test Suites" width="100%"/>

:::note
After saving your test suite, it becomes available for future **[Test run](/docs/sauce-ai/test-authoring/run-your-test-suite.md)**.
:::

### Delete a Test Suite

You can remove test suites that are no longer required while keeping your testing library organized.

**Step 1:** Ensure the **Group By** option is set to **Test Suites**, then locate the test suite that you want to remove.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-5.png')} alt="Create and Manage Test Suites" width="100%"/>

**Step 2:** Click the **More Options (⋯)** menu next to the selected test suite and select **Delete**.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-7.png')} alt="Create and Manage Test Suites" width="100%"/>

**Step 3:** When you delete a test suite, Sauce Labs displays a confirmation dialog to prevent accidental deletion. Type “delete” in the confirmation field to verify the action. 

You can then choose one of the following options:

* Leave the **Also delete nested test cases** checkbox unchecked to delete only the test suite. The associated test cases remain in your account and become ungrouped.

* Select the **Also delete nested test cases** checkbox to permanently delete the test suite along with all associated test cases.

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-9.png')} alt="Create and Manage Test Suites" width="100%"/>

**Step 4:** Click on the **Delete** button to permanently remove the test suite based on the selected deletion option.

:::note
Deleting a test suite cannot be undone. If you delete only the test suite, the associated test cases remain available in your account and become ungrouped. Test cases are permanently removed only if you explicitly select the option to delete the nested test cases during the deletion process.
:::

<img src={useBaseUrl('/img/ai-authoring/create-test-suite/create-test-suite-10.png')} alt="Create and Manage Test Suites" width="100%"/>