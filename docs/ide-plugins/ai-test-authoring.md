---
id: ai-test-authoring
title: AI Test Authoring in Your IDE
sidebar_label: AI Test Authoring
description: Generate runnable test code from plain-English prompts against live Sauce Labs sessions, directly in your IDE, and save it straight into your repository.
keywords:
  - ai test authoring
  - test generation
  - natural language testing
  - sauce ai
  - ide plugin
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Write a test by describing it in plain English. You type what you want to test, the AI runs it on a live Sauce Labs session, shows you each step as it happens, and gives you back test code you can put straight into your project.

The IDE panel is a second client of the same [Sauce AI for Test Authoring](/sauce-ai/ai-authoring) platform that powers the web UI at `app.saucelabs.com`. The web UI is the live-authoring surface; the IDE panel is the code-in-repo surface for engineers who want generated tests in their own repository and pipeline.

## Prerequisites

Before using AI Test Authoring, ensure that:

- You are signed in to the Sauce Labs IDE Plugin. See [Installation and Sign In](/ide-plugins/installation).
- Your account has the [Sauce AI for Test Authoring](/sauce-ai/ai-authoring) entitlement.

:::note
AI Test Authoring is available as a paid add-on for Enterprise accounts. If your account does not have access, the plugin displays a message indicating that the feature is unavailable.
:::

## Create Your First Test

Follow these steps to generate your first AI-powered test.

**Step 1:** In the **Activity Bar**, click the **Sauce Labs Test Authoring** icon. The **Test Authoring** view opens and displays your saved test cases, along with the **Create Test Script** action.

<img src={useBaseUrl('/img/ide-plugins/ide-authoring/ide-authoring-1.png')} alt="IDE Authoring" width="100%"/>

**Step 2:** Click **Create Test Script**. A new authoring editor opens in a separate tab where you can configure and generate your test.

<img src={useBaseUrl('/img/ide-plugins/ide-authoring/ide-authoring-2.png')} alt="IDE Authoring" width="100%"/>

**Step 3:** Select the environment where you want to run the test.

<img src={useBaseUrl('/img/ide-plugins/ide-authoring/ide-authoring-3.png')} alt="IDE Authoring" width="100%"/>

**Step 4:** Choose one of the following options:

* **Web** – Generate a test for a website by specifying the website URL, platform, and browser.

* **Mobile App** – Generate a test for a mobile application by selecting an uploaded app and a target device. For more information, see [**Choose a Test Target**](#choose-a-target).

<img src={useBaseUrl('/img/ide-plugins/ide-authoring/ide-authoring-4.png')} alt="IDE Authoring" width="100%"/>

**Step 5:** In the “**What is your test goal?”** field, describe the workflow you want to automate using plain English. Write your prompt as clearly and specifically as possible to help the AI generate accurate test steps.

> *Open the demo website, sign in using valid credentials, add the first product to the cart, and verify that the shopping cart contains one item.*

<img src={useBaseUrl('/img/ide-plugins/ide-authoring/ide-authoring-5.png')} alt="IDE Authoring" width="100%"/>

**Step 6:** Click **Generate** to submit your prompt. Sauce AI starts a live test session and performs the actions described in your prompt. As the test runs, each action is displayed in the **Test Steps** tab, allowing you to monitor the execution in real time.

:::tip
Test generation typically takes 30–90 seconds, depending on the complexity of the workflow.
:::

<img src={useBaseUrl('/img/ide-plugins/ide-authoring/ide-authoring-6.png')} alt="IDE Authoring" width="100%"/>

**Step 7:** After the test completes, open the **Code** tab. Select your preferred automation framework and programming language to view the generated test code.

<img src={useBaseUrl('/img/ide-plugins/ide-authoring/ide-authoring-7.png')} alt="IDE Authoring" width="100%"/>

**Step 8:** Save or reuse the generated code. You can:

* **Insert** the generated code into the currently open file.

* **Save** it as a new file in your workspace.

* **Copy** it to the clipboard for use in another project.

<img src={useBaseUrl('/img/ide-plugins/ide-authoring/ide-authoring-8.png')} alt="IDE Authoring" width="100%"/>

## Choose a target

**Web** targets run against a browser session. Provide the URL, then pick the platform (Windows, macOS, Linux), the browser and version, and optionally a screen resolution. If the site is behind your firewall, select a Sauce Connect tunnel from the tunnel dropdown.

<a href={useBaseUrl('img/ide-plugins/authoring-target-web.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/authoring-target-web.png')} alt="The web target options in the authoring panel: URL field, tunnel dropdown, and platform, browser, version, and resolution pickers" /></a>

**Mobile App** targets run your app on a Sauce Labs device. Pick an app build you have uploaded to Sauce Labs app storage, then pick the device. You can filter devices by platform, form factor, manufacturer, and OS version, and pick from **Mobile Real** and **Mobile Virtual** devices. Private mobile devices are not available in the picker yet.

<a href={useBaseUrl('img/ide-plugins/authoring-target-mobile.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/authoring-target-mobile.png')} alt="The mobile app target options in the authoring panel: app build dropdown and a real device picker with platform, form factor, manufacturer, and OS version filters" /></a>

:::tip
If you already have an active Real Device Cloud session open in the plugin, the authoring panel detects it and pre-fills the mobile form with that device and platform version. You can still override the pre-filled values.
:::

## Review the generated steps

While the test runs, the **Reasoning** panel narrates what the AI is doing, and each step lands in the **Test Steps** tab with:

- A **screenshot** of the app or page at that moment.
- The **action** performed, described in plain language, with the locator used to find the element.
- **Assertions:** the expected outcomes it verified.

<a href={useBaseUrl('img/ide-plugins/authoring-test-steps.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/authoring-test-steps.png')} alt="The authoring editor with the AI's reasoning on the left and the generated test steps on the right, each step showing a screenshot, a plain-language action, and the locator used" /></a>

You can iterate on your prompt and regenerate until the test does what you want.

## Generate and keep the code

In the **Code** tab, choose the framework for the generated code from the **Choose language** dropdown. The available frameworks come from your Sauce Labs account, and some may be marked preview. Then:

- **Insert** the code into the file you have open,
- **Save** it to a file in your workspace, so it goes into your repository and CI/CD pipeline, or
- **Copy** it to the clipboard.

<a href={useBaseUrl('img/ide-plugins/authoring-code.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/authoring-code.png')} alt="The Code tab in the authoring editor showing a generated Playwright test with Sauce Labs capabilities, with the Choose language dropdown set to Playwright" /></a>

## Saved test cases

Generated tests are saved to your Sauce Labs account and listed in the **Test Cases** panel. From there you can open, re-run, rename, edit, or delete them without leaving the IDE. Test cases stay in sync with the Test Authoring web UI, so work started in one surface can continue in the other.

You can save a test case into an existing test suite, but creating a new test suite is currently only possible in the Sauce Labs web app.

## Known limitations

- Device lists in the mobile picker sort A to Z or Z to A only. Sorting by Preferred or Pinned devices is not available in the IDE yet.
- Opening several test case tabs at once can make each tab slower to load its device and platform list, because every tab fetches the list independently. The tabs remain fully independent and work normally.

For guidance on writing prompts that generate reliable tests, see the [AI Authoring Prompting Guide](/sauce-ai/ai-authoring-prompting-guide).
