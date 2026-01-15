---
id: ai-authoring
title: Test Authoring
sidebar_label: Test Authoring
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note 
This feature is available at no cost to all Sauce Labs Enterprise customers during Beta. Following the conclusion of the Beta period, it will transition to a paid offering.
:::

Sauce AI for Test Authoring is a new way to create, edit, manage, and run test scripts at scale, all without writing a single line of code. This tool enables you to write your test goal in the form of natural-language prompts, connect to your web or mobile application on a real device, virtual device, or browser session, and let the large language model generate structured, editable, and runnable test flows for you.

Sauce AI for Test Authoring is an intelligent agent for testing built into the Sauce Labs platform that solves the constraint of needing specialized coding knowledge. 

How it works:
1. The LLM interprets your goals based on natural language and converts them into executable test steps, which are then captured, reviewed, and translated into test code.
2. You can then save those generated test scripts and run them at scale using low-code automation.
3. The test results are visible as automated test runs on Sauce Labs.

Sauce AI for Test Authoring lives inside the Sauce Labs platform as a standalone offering where generated test scripts are stored. You can access it from its own page by clicking Test Authoring in the left navigation.

<img src={useBaseUrl('/img/ai-authoring/authoring1.png')} alt="AI Insights View" width="700"/>

## What You'll Need

* You need to have a Sauce Labs Enterprise account to access the tool.
* The tool requires the availability of real or virtual device concurrency to generate test cases.
* To create native mobile app test cases, the application builds need to be uploaded into App Management.

## Test Case Generation

To create the test script, follow the steps below: 

1. Click on **Create Test Script** to start generating a test script.

    <img src={useBaseUrl('/img/ai-authoring/authoring2.png')} alt="AI Insights View" width="700"/>

2. Select the type of test you want to perform: **Web** or **Mobile app**:

    <img src={useBaseUrl('/img/ai-authoring/authoring3.png')} alt="AI Insights View" width="700"/>

    For web tests, you enter the full URL of the application under test. 

    For mobile, you select an app from your uploaded assets in App Management. Native mobile support is enabled for both Android and iOS. This means you can create mobile-specific tests using APK, IPA or ZIP files that have been uploaded through the App Management interface. The mobile app dropdown will show the latest uploaded files with a specific filename. 

3. Optionally, you can set additional settings for test generation before starting the prompt. Click on the **Cog** icon to fill in required settings for generation.

    <img src={useBaseUrl('/img/ai-authoring/authoring4.png')} alt="AI Insights View" width="700"/>

    You can select the following options here:
    * Select the specific OS and device/browser to use for test generation.
    * Set the tunnel if you are testing in gated environments.
    * Adjust the step cut-off to limit the number of steps the test should have (maximum is 50 steps).

    The platform remembers the last-used configurations for convenience. If you don’t set those, then Sauce Labs will use predetermined defaults that are available for the type of app you are testing.

4. **Write and run** the prompt. Once you've provided the application context, you can write a prompt to describe the test intent, either in plain language (e.g., “log into the app and verify the dashboard appears”) or in structured formats like Gherkin-style steps. Both are supported. Check out guidelines for prompting [here](https://docs.saucelabs.com/sauce-ai/ai-authoring/#prompt-writing-guidance). 

    You can submit the prompt by clicking the **Play** icon, and a live session will be launched. The LLM connects to the target device or browser and interprets your prompt as a set of interactive test actions. The system supports the click, input, and scroll interactions, while others such as right click, drag, or long press are going to be added at a later stage. These actions are executed in real time, and their outcomes are captured step by step for you to review.

    <img src={useBaseUrl('/img/ai-authoring/authoring5.png')} alt="AI Insights View" width="700"/>

    Initially, what you see is a natural language breakdown of what was done: what pages were visited, what buttons were clicked, what inputs were typed. The tool captures the input values and unique locators of the elements interacted with. 

    When the test generation session finishes, the entire test flow is displayed for review. 

## Test Case Editing and Saving
After running a prompt, you’re automatically moved into **edit mode**, where the test steps are fully available for review and customization. Here, the generated steps are displayed in a human-readable format, and each action is accompanied by detailed metadata: Step intent, XPath selectors, input values, step screenshots. You can modify individual steps, adjust test parameters, or regenerate the flow with a new prompt if needed. 

Once you are happy with the result, you can **Save** the test case by assigning a name to it.

### Getting the Script Code

Additionally, you can generate the test code (Selenium or Appium) and use it in your own testing environment by clicking on **Get Code**. The generated test is not locked to a single framework. You can choose from multiple supported languages (currently **Python**, **Java**, and **JavaScript**).

<img src={useBaseUrl('/img/ai-authoring/authoring6.png')} alt="AI Insights View" width="700"/>

The generated test script code includes the capabilities required to run on Sauce Labs, along with the test steps, making it easy to transfer into your own CI/CD pipeline or local repo.

## Managing and Modifying Test Cases
Saved test cases are listed in the main Test Authoring view, where you can search and filter, rename, delete, or open scripts to edit them. 

<img src={useBaseUrl('/img/ai-authoring/authoring7.png')} alt="AI Insights View" width="700"/>

Renaming is done directly from the list by clicking the “…” icon. Device types, apps, and prompt details can all be changed later, making it easy to adapt tests for different platforms or conditions.

## Running Tests and Viewing Results
Once a test case is finalized and saved, execution is just a click away. Sauce Labs automatically wraps the code in a runnable configuration based on your credentials and an active data center and allows you to execute tests on the platform. Clicking the Run Test option from the test case list opens a modal dialog where you can:

* Select multiple OS/device/browser configurations to run tests against. By default, Sauce Labs will display the device combination used for test script generation, and will narrow down compatible devices based on the type of the application used for testing. There is no limit for specifying the configurations, you only need to make sure you have enough concurrency for running tests.
* Set the tunnel as an optional value. If there is an organization-level enforcement of the tunnel use, this will be set for your tests as a default.
* Assign the automated build name as an optional value. If the build name is not specified, Sauce Labs will generate a default one based on the test case name.

<img src={useBaseUrl('/img/ai-authoring/authoring8.png')} alt="AI Insights View" width="700"/>
<img src={useBaseUrl('/img/ai-authoring/authoring9.png')} alt="AI Insights View" width="700"/>


Behind the scenes, these tests run using Sauce-supported frameworks like **WebDriverIO**, **Selenium**, and **Appium**. They’re bundled under a named build, allowing better tracking through the Insights dashboard. This makes the entire test authoring-to-execution workflow feel seamless, no switching between tools, no manual configuration files, and no guesswork.

Each device configuration creates an automated test session. Once a test is executed, the results are aggregated under the **Automated Test Results and Builds** page. Test results comprise the standard Sauce Labs test artifacts such as screenshots, logs, video replays, and metadata.

## Prompt Writing Guidance
Writing effective prompts is crucial to generating meaningful test flows. While the LLM is capable of interpreting vague or informal language, the quality of the output improves significantly when prompts are specific and task-oriented. 

Structured prompts, including pseudo-code or formalized syntax like Gherkin, are also supported. This enables teams with existing test documentation to paste in scripts and convert them into automated flows almost instantly.

**Follow these guidelines for best success:**
* Avoid vague language. Use clear, accurate language (verbs and nouns) to pinpoint elements on the page where you would like the LLM to go. For example, if the item on the page has a specific text label, use that in your prompt.
    * **Avoid**: "Handle the login."
    * **Use**: "Navigate to the Login Page URL.", "Enter valid_username in the Username field.", "Click the 'Sign In' button."

* Give advice to the model where to find elements if it’s not obvious from looking at the page. For example, if the navigation item is hidden in an off-screen navigation, instruct the model to find the navigation trigger first.
    * **Avoid**: "Go to the Settings page and change the theme." (If Settings is hidden in a menu)
    * **Use**: "Click the hamburger menu icon, then click 'Settings'. In the Settings page, change the theme to 'Dark Mode'."
* The tool is designed to intuitively handle common popups, cookie consents, and similar obstacles. However, for mission-critical steps or complex, non-standard modals, it is safer to explicitly instruct the model on how to dismiss them if they block the next action.
    * **Avoid**: "Click the 'Accept Cookies' button. If a banner appears about a new feature, click the 'Got It' button. Navigate to the Products page." (Explicitly handling expected generic obstacles)
    * **Use**: "Navigate directly to the Products page and filter by 'In Stock'." (The LLM should handle the cookies/popups implicitly)
* Always specify the desired state or expected outcome after an interaction, especially for assertions or validation. This ensures the LLM knows what to check for to determine success.
    * **Avoid**: "Click 'Submit' after entering the required fields."
    * **Use**: "Click the 'Submit' button and verify that the page redirects to /dashboard and displays the success message: 'Registration Complete'."
* When referring to dynamic elements or elements without unique text labels, use contextual or structural descriptions (e.g., surrounding text, position), or try including visible data attributes.
    * **Avoid**: "Click the trash can." (If there are 5 trash can icons on the page)
    * **Use**: "Click the delete (trash can) icon for the 'Unnecessary Report' item." or "Click the 'Edit' icon next to the most recently added user." or "Click the 'Details' button in the row containing the price $25.99"
* Don’t be hesitant to stop the generation and provide a better explanation if you see that the system is taking the steps that you don’t like. When re-prompting, ensure your new instruction adheres to the "Avoid vague language" principle to guide the model precisely.
* AI authoring cannot see your feature code, it only sees the rendered frontend. The tests should describe the functionality that needs to be tested, not the backend, or API requests.
