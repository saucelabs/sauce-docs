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

## Requirements

- You are signed in to the plugin. See [Installation and Sign In](/ide-plugins/installation).
- Your account has the [Sauce AI for Test Authoring](/sauce-ai/ai-authoring) entitlement, a paid add-on for Enterprise accounts. Without it, the panel shows a message explaining that the feature is not available on your account.

## Quick start

1. Open the **Sauce Labs Test Authoring** view from the Activity Bar. It shows your saved test cases and a **Create Test Script** button.
2. Click **Create Test Script**. The authoring editor opens in a new tab.
3. Choose where the test should run: a **Web** target (website address plus platform and browser) or a **Mobile App** target (an app build plus a device). See [Choose a target](#choose-a-target).
4. Type what you want to test in plain English in the **What is your test goal?** box. For example: "Open the demo site, log in, add the first item to the cart, and check out."
5. Submit the prompt. The AI executes your intent on a live session, and the steps appear in the **Test Steps** tab one at a time as they run.
6. When it finishes, open the **Code** tab, choose a framework and language, and get the test code.
7. Insert the code into the open file, save it to a file in your workspace, or copy it to the clipboard.

A test run usually takes about 30 to 90 seconds.

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
