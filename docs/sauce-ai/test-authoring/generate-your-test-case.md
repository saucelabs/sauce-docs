---
id: generate-your-test-case
title: Generate Your Test Case
sidebar_label: Generate Your Test Case
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce AI generates automated test cases directly from plain-English descriptions, eliminating the overhead of manual script authoring. To generate a test, you simply provide your web application URL or select your mobile app from App Management, configure your target browser or device environment, and describe your testing goal.

Sauce AI then interacts directly with your application to execute your testing objective, automatically capturing every digital interaction as a structured, sequential test step. Once this automated generation process is complete, you can review the entire test flow, edit individual actions or validations as needed, and immediately save or run the finalized test case.

:::info
Before getting started, please refer to the **[Prerequisites](/docs/sauce-ai/ai-authoring.md#prerequisites)**.
:::

## Navigation

**Step 1:** Inside your Sauce Labs account, find **Test Authoring** from the left-hand navigation menu,expand its available options, and select **Test Cases and Suites.** 

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-1.png')} alt=" test case" width="100%"/>

**Step 2:** Click **Create Test Script** in the **top-right corner** to start a new test generation session. The button is also displayed in the **center of the page** when no test cases have been created.

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-2.png')} alt=" test case" width="100%"/>

After clicking on the **Create Test Script** button, the test generation setup page opens, where you can **[choose the type of application](#select-your-application-type)** you want to test, **[configure the target testing environment](#additional-test-generation-options-optional)**, and **[write the  natural-language prompt](#write-your-test-prompt)** describing the test scenario you want Sauce AI to generate.

## Select Your Application Type

Choose the type of application you want to test based on your testing requirements.

| Application Type | Description | Supported Formats |
| :---- | ----- | :---- |
| **Web Application** | Enter the complete URL of the web application you want to test. Sauce AI launches a browser session and interacts with your application based on the provided test prompt. | URL |
| **Mobile Application** | Select your application from the available builds uploaded to [**App Management**](/docs/mobile-apps/app-storage.md#app-management). The list displays the latest uploaded application builds available in your Sauce Labs account. | **Android:** APK **iOS:** IPA, ZIP |

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-3.png')} alt=" test case" width="100%"/>

## Additional Test Generation Options (Optional)

Before generating your test case, you can customize the test generation environment by clicking the **Settings (Cog) icon**. This allows you to configure the platform, browser or device settings, network access, and the maximum number of steps Sauce AI can generate.

The following configuration options are available:

| Ref. | Option | Description |
| :---: | ----- | ----- |
| **1** | **Application Type** | Select whether you want to generate a test for a **Website** or a **Mobile** application. The available configuration options are updated based on the selected application type. |
| **2** | **Platform to Generate On** | Select the operating system or mobile platform where Sauce AI will perform the test generation.  |
| **3** | **Browser to Generate On** | For web applications, select the browser that Sauce AI will use to interact with your application during test generation. |
| **4** | **Tunnel Proxies** | Enable this option if your application is hosted on a private or restricted network that requires a **[Sauce Connect tunnel](/docs/secure-connections/sauce-connect-5/guides/tunnel-pool.md)** to establish secure access during test generation. |
| **5** | **Cut Off Test Steps At** | Define the maximum number of steps Sauce AI can generate during the test creation process. This helps control the size and complexity of the generated test flow. |

:::note
If you do not modify these settings, Sauce Labs automatically applies the default configuration based on your selected application type. Your most recently used settings are also saved and applied to future test generation sessions. 
:::

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-4.png')} alt=" test case" width="100%"/>

## Write Your Test Prompt

After selecting your application type and configuring the test generation settings, describe the test scenario you want Sauce AI to automate using a [**natural-language prompt**](/docs/sauce-ai/ai-authoring-prompting-guide.md).

You can write simple prompts in everyday language. For example: 

> ***Log in to the application using valid credentials and verify that the dashboard page is displayed successfully.***

Sauce AI understands the intent behind your instructions and translates them into automated test steps. However, providing more specific details helps generate more accurate and reliable test flows.

:::note
If your team already maintains test cases using **Gherkin** or other behavior-driven development (BDD) formats, you can provide those scenarios directly as prompts. 

For example: 
- `Given I am on the login page.` 
- `When I enter valid username and password` 
- `And I click the Sign In button` 
- `Then I should be redirected to the dashboard`
:::

Clear and specific prompts produce more reliable test flows. Include important details such as the exact UI elements to interact with and the expected outcome of each action.

For additional prompting recommendations, see the [**Test Authoring Prompting Guide**](/docs/sauce-ai/ai-authoring-prompting-guide.md).

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-5.png')} alt=" test case" width="100%"/>

## Start Test Generation

After entering your application details and test prompt, click **Start Session** to begin the test generation process.

Sauce AI launches the selected browser or device environment and interacts with your application based on the instructions provided in your prompt. 

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-6.png')} alt=" test case" width="100%"/>

During generation, Sauce AI can perform actions such as:

* Clicking buttons and links.  
* Entering text into input fields.  
* Performing right-click and double-click actions.  
* Long pressing on mobile devices.  
* Scrolling through application screens.

Each action is executed in real time, and the system captures the details required to build the automated test flow.

## Review the Generated Test Flow

Once the test generation session is complete, Sauce AI provides the generated test in multiple views to help you review and validate the results before editing, saving, or running the test.

### Test Steps View

The **Test Steps** view displays the generated test flow in a clear, step-by-step format. This allows you to review how Sauce AI interpreted your prompt and generated the test scenario.

The generated test flow includes details such as:

* The pages or screens visited during the test.  
* The buttons, links, and other UI elements interacted with.  
* The input values entered during the test.  
* The element locators used to identify application components.

Reviewing the generated steps helps you verify that the test accurately reflects the intended user workflow.

:::tip
If the generated test flow does not match your expected behavior, you can stop the generation and provide a more specific prompt to improve the results. |
:::

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-7.png')} alt=" test case" width="100%"/>

### Session View

The **Session** view provides a video recording of the test generation session. This allows you to watch the actions performed by Sauce AI in the browser and visually confirm that the generated workflow matches the expected behavior of your application.

Reviewing the session recording can help you better understand how the test was created and identify any areas that may require refinement before saving or executing the test.

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-8.png')} alt=" test case" width="100%"/>

### Code View

The **Code** view allows you to generate automation scripts from the test case using your preferred programming language and automation framework.

After reviewing the generated test flow, you can select the desired language and framework to generate a corresponding test script. The generated script can then be copied, downloaded, and incorporated into your existing test automation projects and CI/CD pipelines.

For detailed instructions on generating automation code from a test case, see [**Generate Test Scripts**](generate-the-script-code.md).

This view helps you convert authored test cases into reusable automation code while maintaining the workflow defined in the generated test.
:::caution
**Known limitations when generating on Safari**

Some Test Authoring capabilities are not fully supported when generating tests on Safari. 

When using Safari: 

- Session data may not always be completely cleared between generation restarts.

- Some selector types, including selectors inside Shadow DOM elements, may not be generated correctly. 

For the most reliable test generation experience, Sauce Labs recommends using a Chromium-based browser, such as **Google Chrome.**
:::

## Save Your Test Case

After reviewing and confirming the generated test flow, you can save the test case to: 

* Reuse it later
* Organize it into test suites 
* Schedule executions
* Run it on demand.

**Step 1:** Once you have reviewed the generated test flow and confirmed that all actions, validations, and expected outcomes align with your testing requirements, click **Save Test Case** to save your generated test case.

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-9.png')} alt=" test case" width="100%"/>

**Step 2:** In the **Save Test Case** dialog, provide the following details before saving your test case:

| Ref. | Field | Description |
| :---: | ----- | ----- |
| **1** | **Test Case Name** | Enter a meaningful and descriptive name for your test case so that you can easily identify, search, and reuse it later. |
| **2** | **Add to Test Suite (Optional)** | Select an existing test suite to organize the test case as part of a parent testing workflow. You can leave this field empty if you do not want to associate the test case with a test suite. |

After providing the required details, click **Save** to store your test case. 

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-10.png')} alt=" test case" width="100%"/>

The saved test case will be available in the **Test Cases and Suites** page for future execution, modification, and management.

<img src={useBaseUrl('/img/ai-authoring/generate-test-case/test-case-11.png')} alt=" test case" width="100%"/>
