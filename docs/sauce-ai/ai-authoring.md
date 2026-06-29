---
id: ai-authoring
title: Test Authoring with Sauce AI
sidebar_label: AI for Test Authoring
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs has introduced AI-powered capabilities for Test Authoring, allowing you to create automated test cases using natural-language prompts. Sauce AI understands your instructions, interacts with your web or mobile application in real-time, and generates structured, editable test cases that can be reviewed, refined, saved, and run across supported browsers, virtual devices, and real devices.

:::info
This feature is available as a paid add on for Enterprise users. **[Contact us](https://saucelabs.com/contact-us)** to learn more.
:::

## Prerequisites

* You must have a **[Sauce Labs Enterprise](https://saucelabs.com/enterprise)** account to access the tool. 

* You must have available **[Real Device Concurrency](/docs/basics/acct-team-mgmt/concurrency/managing-concurrency.md#real-device-cloud-concurrency) or [Virtual Device Concurrency](/docs/basics/acct-team-mgmt/concurrency/managing-concurrency.md#virtual-cloud-concurrency)** to generate and run test cases.

* For native mobile app testing, you must upload your **[Android or iOS application builds to App Management](/docs/mobile-apps/app-storage.md#uploading-apps)** before creating test cases.

## Available Test Authoring Experiences

You can use Sauce AI for Test Authoring through either the Sauce Labs user interface or the AI Test Authoring API, depending on your preferred workflow.

| Workflow | Description |
| :---- | :---- |
| Low-Code Workflow | Use the Test Authoring UI in the Sauce Labs platform to generate, review, edit, save, organize, schedule, and run test cases without writing any code. **NOTE:** This guide focuses on the **[low-code workflow](#test-authoring-workflow).** |
| Programmatic Workflow | Use the **[AI Test Authoring API](https://docs.saucelabs.com/dev/api/test-authoring/#description/what-youll-need)** to generate, manage, and run test cases, test suites, and test schedules directly from your own tooling or CI/CD pipeline. The same generation and execution capabilities available in the UI are exposed as REST endpoints (for example, generating a test case from a prompt and triggering a test case or suite run), so you can integrate AI-authored tests into automated workflows. |

## Test Authoring Workflow

| Workflow | Description | Reference |
| ----- | ----- | ----- |
| **Generate Your Test Case** | Create AI-generated test cases by describing your testing scenario in natural language. Sauce AI interprets your instructions and generates a structured, editable test flow that you can review before execution. | **[See more](/docs/sauce-ai/test-authoring/generate-your-test-case.md)**  |
| **Generate the Test Script** | Convert your saved AI-generated test case into an executable automation script. Choose your preferred programming language and supported automation framework to integrate the test into your existing automation workflow. | **[See more](/docs/sauce-ai/test-authoring/generate-the-script-code.md)** |
| **Manage Your Test Cases** | View, organize, search, edit, duplicate, or delete your existing test cases. You can also refine test flows using natural-language prompts and keep your test library organized as it grows. | **[See more](/docs/sauce-ai/test-authoring/manage-your-test-cases.md)**|
| **Run Your Test Cases** | Run individual test cases across supported browsers, operating systems, virtual devices, and real devices. Monitor test execution progress and review results  | **[See more](/docs/sauce-ai/test-authoring/run-your-test-cases.md)** |
| **Create and Manage Test Suites** | Add and organize related test cases into reusable test suites based on features, workflows, or testing objectives. You can create, update, rename, and maintain test suites from a single location. | **[See more](/docs/sauce-ai/test-authoring/create-and-manage-test-suites.md)** |
| **Run Your Test Suite** | Run all test cases contained within a test suite as a single automated test run. Each test case runs using its configured browser, platform, and device settings, making it easy to validate complete application workflows. | **[See more](/docs/sauce-ai/test-authoring/run-your-test-suite.md)** |
| **Schedule Your Test Runs** | Schedule test cases or test suites to run automatically at a specified date and time or on a recurring schedule, helping you automate regression, smoke, and continuous testing workflows. | **[See more](/docs/sauce-ai/test-authoring/schedule-your-test-runs.md)** |
| **View Your Test Results** | Review detailed test execution results, including test status, videos, screenshots, logs, network data, metadata, and other debugging artifacts to analyze test behavior and troubleshoot failures. | **[See more](/docs/sauce-ai/test-authoring/view-your-test-results.md)** |
