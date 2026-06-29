---
id: ai-authoring-prompting-guide
title: Test Authoring Prompting Guide
sidebar_label: Test Authoring
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

> "Click the **Sign In** button."


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

> "Click the **Submit** button and verify that the application redirects to `/dashboard` and displays **Registration Complete**."

### **4. Identify Similar Elements Clearly**

When multiple elements look alike, describe which one to interact with using surrounding text, row information, or position.

**❌ Avoid**

> "Click the trash icon."

**✅ Use**

> "Click the delete icon for the **Unnecessary Report** item."
> "Click the **Edit** icon next to the most recently added user."
> "Click the **Details** button in the row containing **$25.99**."

### **5. Let Sauce AI Handle Common UI Interruptions**

Sauce AI automatically handles common UI interruptions such as cookie banners and standard confirmation dialogs. Only include these steps if they are unique to your application or are part of the test scenario.

**❌ Avoid**

> "Click **Accept Cookies**. If a banner appears about a new feature, click **Got It**. Navigate to the Products page."

**✅ Use**

> "Navigate directly to the **Products** page and filter products by **In Stock**."

### **6. Refine Your Prompt When Needed**

If Sauce AI begins generating a test flow that does not match your expectations, stop the generation and provide a more specific prompt. Adding additional details or clarifying the expected behavior usually produces better results.

### **7. Focus on User Behavior**

Sauce AI interacts only with your application's rendered user interface. It cannot see source code, backend logic, or API requests.

**❌ Avoid**

> "Verify that the login API returns HTTP 200."

**✅ Use**

> "Verify that the user is redirected to the **Dashboard** after signing in."
