---
id: ai-authoring-prompting-guide
title: Sauce AI for Test Authoring Prompting Guide
sidebar_label: Sauce AI for Test Authoring Prompting Guide
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Writing effective prompts is crucial to generating meaningful test flows. While the LLM is capable of interpreting vague or informal language, the quality of the output improves significantly when prompts are specific and task-oriented. 

Structured prompts, including pseudo-code or formalized syntax like Gherkin, are also supported. This enables teams with existing test documentation to paste in scripts and convert them into automated flows almost instantly.

**Follow these guidelines for best success:**
* Avoid vague language. Use clear, accurate language (verbs and nouns) to pinpoint elements on the page where you would like the LLM to go. For example, if the item on the page has a specific text label, use that in your prompt.
    * **Avoid**: "Handle the login."
    * **Use**: "Navigate to the User Profile page.", "Enter valid_username in the Username field.", "Click the 'Sign In' button."

* Give advice to the model where to find elements if it's not obvious from looking at the page. For example, if the navigation item is hidden in an off-screen navigation, instruct the model to find the navigation trigger first.
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
* Don't be hesitant to stop the generation and provide a better explanation if you see that the system is taking the steps that you don't like. When re-prompting, ensure your new instruction adheres to the "Avoid vague language" principle to guide the model precisely.
* AI authoring cannot see your feature code, it only sees the rendered frontend. The tests should describe the functionality that needs to be tested, not the backend, or API requests.
