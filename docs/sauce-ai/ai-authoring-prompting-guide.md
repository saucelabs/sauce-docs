---
id: ai-authoring-prompting-guide
title: AI Authoring Prompting Guide
sidebar_label: AI Authoring
description: "Write effective Sauce AI Test Authoring prompts: describe actions clearly, request assertions, choose failure modes, use data variables, and fix unexpected results."
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Writing effective prompts is crucial to generating meaningful test flows. While the LLM is capable of interpreting vague or informal language, the quality of the output improves significantly when prompts are specific and task-oriented.

Structured prompts, including pseudo-code or formalized syntax like Gherkin, are also supported. This enables teams with existing test documentation to paste in scripts and convert them into automated flows almost instantly.

## Write Effective Prompts

The following guidelines will help you generate more accurate and reliable test cases.

### **1. Describe User Actions Clearly**

Describe the actions a user performs using clear and specific language. Whenever possible, reference buttons, links, fields, and other UI elements by their visible names.

**❌ Avoid**

> "Handle the login."

> "Open the profile."

**✅ Use**

> "Navigate to the **User Profile** page."

> "Enter `valid_username` in the **Username** field."

> "Click the **Sign In**."


### **2. Describe How to Reach Hidden Elements**

If an element is inside a menu, drawer, or another hidden navigation area, describe how to access it before performing the action.

**❌ Avoid**

> "Change the theme."

**✅ Use**

> "Click the hamburger menu, select **Settings**, and change the theme to **Dark Mode**."

### **3. Describe the Expected Result**

Include the expected outcome after important actions so Sauce AI knows what should happen.

**❌ Avoid**

> "Click **Submit**."

**✅ Use**

> "Click the **Submit** and verify that the application redirects to `/dashboard` and displays **Registration Complete**."

### **4. Identify Similar Elements Clearly**

When multiple elements look alike, describe which one to interact with using surrounding text, row information, or position.

**❌ Avoid**

> "Click the trash icon."

**✅ Use**

> "Click the delete icon for the **Unnecessary Report** item."
> "Click the **Edit** icon next to the most recently added user."
> "Click the **Details** in the row containing **$25.99**."

### **5. Let Sauce AI Handle Common UI Interruptions**

Sauce AI automatically handles common UI interruptions such as cookie banners and standard confirmation dialogs. Only include these steps if they are unique to your application or are part of the test scenario.

**❌ Avoid**

> "Click **Accept Cookies**. If a banner appears about a new feature, click **Got It**. Navigate to the Products page."

**✅ Use**

> "Navigate directly to the **Products** page and filter products by **In Stock**."

### **6. Refine Your Prompt When Needed**

If Sauce AI begins generating a test flow that does not match your expectations, stop the generation and provide a more specific prompt. Adding additional details or clarifying the expected behavior usually produces better results.

### **7. Focus on User Behavior**

Sauce AI interacts only with your application's rendered user interface. Right now, it cannot see source code, backend logic, or API requests.

**❌ Avoid**

> "Verify that the login API returns HTTP 200."

**✅ Use**

> "Verify that the user is redirected to the **Dashboard** after signing in."

### **8. Use Variables for Credentials and Reusable Data**

Instead of typing usernames, passwords, or URLs directly into your prompt, reference them as **[Data Variables](/docs/sauce-ai/test-authoring/data-variables.md)**. The prompt sent to the AI contains only the variable reference, not the value; the value is substituted when the step runs. You can reference the most specific matching variable with `{{variable_name}}`, or target a scope explicitly with `{{org:variable_name}}` or `{{team:variable_name}}`.

**❌ Avoid**

> "Log in with **standard_user** and **secret_sauce**."

**✅ Use**

> "Log in with `{{username}}` and `{{team:password}}`."

| Situation | Write |
| ----- | ----- |
| A value that is the same across the company, such as a base URL or an API host | `{{org:base_url}}` |
| A credential or account that belongs to one team | `{{team:username}}` |
| A value that only makes sense for one test case | `{{testCase:<test_case_id>:coupon_code}}` |
| A prompt that will be copied between teams | Always prefix. Do not rely on bare resolution. |

**✅ Use**

> "Go to `{{org:base_url}}` and sign in with `{{team:standard_user}}` and `{{team:standard_password}}`. Switch the store region to `{{testSuite:emea-checkout:region}}`. Add the product with SKU `{{team:sample_sku}}` to the cart and go to checkout. Verify that the currency symbol matches `{{testSuite:emea-checkout:currency}}`."

#### Common Variable Mistakes

| Mistake | What happens | Fix |
| ----- | ----- | ----- |
| `{{ user name }}` | Names allow only lowercase letters, digits, and underscores, so the reference does not resolve. | `{{team:user_name}}` |
| Referencing a deleted variable | The unresolved reference is passed to the AI as plain text. No error is raised. | Confirm the variable exists in **Data Management** before running. |
| A bare name that exists in two scopes | The test silently picks a different value in a different context. | Prefix with `org:` or `team:`. |
| Expecting to read a hidden value back | Hidden variables cannot be viewed after they are created. | Store the value somewhere you control before saving it. |

### **9. Ask for the Assertions You Want**

Sauce AI adds only the assertions you request. If a value matters, name the element and the expected result. An instruction to "verify it works" gives Sauce AI nothing to compare against.

**❌ Avoid**

> "Verify login works."

> "Make sure the cart is right."

> "Check the page loads."

**✅ Use**

> "Verify that the page heading reads **Dashboard** and that the user menu shows `{{team:standard_user}}`."

> "Verify that the cart badge shows **2** and the order total is **$49.98**."

> "Verify that the **Place order** button is visible and enabled."

### **10. Choose Which Assertions Block the Test**

Every assertion has a failure mode. A soft assertion records the failure as a warning and the test continues; a hard assertion stops the test at that step. For more information, see [**Assertions**](/docs/sauce-ai/test-authoring/generate-your-test-case.md#assertions).

Soft assertions matter most when one screen has several checks. If all four checks on a page were blocking, you would find the failures one at a time: fix, rerun, discover the next. With soft assertions, one run reports all four.

**❌ Avoid**

> "Log in and check the dashboard."

**✅ Use**

> "Log in with `{{team:username}}` and `{{team:password}}`. The dashboard must load before continuing. Stop the test if it does not. On the dashboard, verify that the account name is **Acme Corp**, the plan badge reads **Enterprise**, the notification count is **3**, and the **Upgrade** button is hidden."

### If the Generated Test Is Not What You Expected

| Symptom | Try |
| ----- | ----- |
| Sauce AI took a different path through the app | Name the exact entry point and the exact labels at each step. |
| Steps you did not ask for | Add an explicit boundary: "Stop after the confirmation screen." |
| A check you wanted is missing | State it as its own sentence with an expected value. |
| Generation stopped part-way | A hard assertion failed. See [**Assertions**](/docs/sauce-ai/test-authoring/generate-your-test-case.md#assertions). |
| A value came through as literal `{{...}}` text | The variable does not exist in a scope the test can reach. |
| The step count was cut off | Raise **Cut Off Test Steps At** in the generation settings, or split the flow into two test cases. |
