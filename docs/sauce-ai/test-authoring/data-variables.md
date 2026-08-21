---
id: data-variables
title: Data Variables
sidebar_label: Data Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Data Variables** allow you to store reusable values, such as usernames, passwords, URLs, and other test data, separately from your test prompts. Instead of entering these values directly in a prompt, you can reference them using variables, making your tests easier to maintain at scale and helping protect sensitive information.

## Create a New Variable

**Step 1:** From the left navigation menu, select **Test Authoring** and select **Data Management** from the dropdown list.

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-1.png')} alt=" Data Management" width="100%"/>

**Step 2:** Click **Create Variable**.

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-2.png')} alt=" Data Management" width="100%"/>

**Step 3:** In the **Create Variable** dialog, provide the required information for the variable.

| Ref. | Field | Description |
| ----- | ----- | ----- |
| **1** | **Key** | Enter a unique variable name. Use lowercase letters and underscores (`_`) only, without spaces. The variable can later be referenced in prompts using the format `{{variable_name}}`. |
| **2** | **Value** | Enter the value that the variable will store. This value is used whenever the variable is referenced during test execution. |
| **3** | **Scope** | Choose where the variable is available. **Org** makes the variable accessible across the entire organization, while **Team** limits access to members of the selected team. |
| **4** | **Visibility** | Select how the variable value is displayed and protected. Choose **Visible** or **Hidden** based on the sensitivity of the stored data. For more information, see **[Variable Visibility Options](#variable-visibility-options)** |
| **5** | **Description** *(Optional)* | Provide an optional description to help other users understand the purpose of the variable. |

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-3.png')} alt=" Data Management" width="300"/>

**Step 4:** Click **Create variable**. The variable is saved to **Data Management** and automatically inserted into your test prompt using the `{{variable_name}}` syntax.

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-4.png')} alt=" Data Management" width="300"/>

After the variable is created, it is stored in **Data Management** and can be reused across multiple test cases by referencing it in your prompts using the `{{variable_name}}` syntax.

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-5.png')} alt=" Data Management" width="100%"/>

### Variable Visibility Options

Choose a visibility level based on the sensitivity of the data stored in the variable.

| Ref. | Visibility | Description | Recommended Use |
| ----- | ----- | ----- | ----- |
| **1** | **Visible** | Displays the variable value in the user interface and test logs. | Non-sensitive test data, URLs, sample values, and reusable inputs. |
| **2** | **Hidden** | Hides the variable value after it is saved. The value is redacted throughout the user interface and is securely resolved during test execution. | Passwords, tokens, or other moderately sensitive information. |

:::note
Hidden variables cannot be viewed after they are created. Ensure the value is correct before saving the variable.
:::

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-6.png')} alt=" Data Management" width="300"/>

## Use a Variable

After creating a variable, you can reference it in your test prompts instead of entering the actual value. During the test run, Sauce AI automatically replaces the variable reference with its stored value.

**Step 1:** Open or **[create a test case](/docs/sauce-ai/test-authoring/generate-your-test-case.md)** in **Test Authoring**. In the prompt editor, replace hardcoded values with variables by typing `{{` or selecting the `{x}` icon to open the variable picker.

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-7.png')} alt=" Data Management" width="100%"/>

**Step 2:** Use the **Search** box to locate a variable, or browse the available list and select the required variable. The selected variable is automatically inserted into the prompt using the following syntax:

```
{{variable_name}}
```

**For example:**

```
Log in using {{username}} and {{password}}, then verify the dashboard is displayed.
```

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-8.png')} alt=" Data Management" width="100%"/>

Complete your test prompt, then click **Start Session** to begin test generation. During the test run, Sauce AI resolves all referenced variables using their stored values while keeping the actual values separate from the prompt.

## Edit a Variable

You can edit an existing variable to update its value, scope, visibility, or description. Changes are automatically applied wherever the variable is referenced in future test runs.

**Step 1:** On the **Data Management** page, locate the variable you want to update and select **Edit**.

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-5.png')} alt=" Data Management" width="100%"/>

**Step 2:** Click the **Edit** icon next to the variable you want to update, modify the required fields, and then click **Save** to apply your changes.

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-9.png')} alt=" Data Management" width="100%"/>

## Delete a Variable

Delete a variable when it is no longer needed or has been replaced by another variable. Once deleted, the variable is no longer available for use in test prompts.

**Step 1:** On the **Data Management** page, locate the variable you want to remove.

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-5.png')} alt=" Data Management" width="100%"/>

**Step 2:** Click the **Delete** icon next to the variable, then confirm the deletion.

:::note
If a deleted variable is still referenced in a test prompt, you must replace or remove the reference before running the test.
:::

<img src={useBaseUrl('/img/ai-authoring/data-management/data-variables-10.png')} alt=" Data Management" width="100%"/>