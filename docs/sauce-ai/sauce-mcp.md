---
id: sauce-mcp
title: Introduction to Sauce MCP
sidebar_label: Introduction to Sauce MCP
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info Beta
Sauce MCP is currently in Beta. Capabilities and configuration may change.
:::

**Sauce MCP** allows you to connect your preferred AI assistant or agent directly to Sauce Labs through the [**Model Context Protocol**](https://modelcontextprotocol.io/docs/getting-started/intro) **(MCP)**. By connecting an MCP-compatible AI client, you can interact with Sauce Labs using natural-language prompts instead of manually navigating the Sauce Labs platform or writing API calls.

With Sauce MCP, your AI assistant can access Sauce Labs capabilities as tools, allowing you to perform testing tasks, manage real devices, investigate test results, and automate workflows directly from the AI applications you already use.

## How Sauce MCP Enhances AI-Assisted Testing

Sauce MCP extends your AI assistant with direct access to Sauce Labs capabilities. Once connected, your AI assistant can understand your requests, select the appropriate Sauce Labs tools, perform the required actions, and return the results in a conversational format.

This enables you to complete testing tasks using simple instructions, such as starting a real device session, installing an application, capturing screenshots, investigating test failures, or creating automated tests, without switching between different tools or writing complex automation scripts.

## What you can do

With Sauce MCP connected, your AI agent can:

* Discover available real devices and check their status.
* Start, inspect, and end real-device sessions.
* Install, launch, and uninstall apps from Sauce Storage.
* Capture screenshots, read the UI, and run shell commands on a device.
* Configure network conditions and capture network traffic.
* Inspect jobs, builds, and test artifacts.
* Look up account, team, and tunnel information.
* Generate test cases from natural-language intent and export them as runnable source code.
* Run test cases and suites on Sauce Labs and schedule them to run on a recurring cadence.

See [Tools](/sauce-ai/sauce-mcp-tools) for the full breakdown of capabilities, and the [Prompting Guide](/sauce-ai/real-device-cloud-mcp-prompting-guide) for ready-to-use prompts. Test authoring capabilities are powered by [Sauce AI for Test Authoring](/sauce-ai/ai-authoring), a paid add-on for Enterprise accounts. Mobile device capabilities are currently limited only to Private Devices using Access API, a paid add-on to Real Device Cloud.

## Who it's for

Sauce MCP is built for both **technical and non-technical** users. If you can describe what you want in plain language, you can drive a real device and author tests: no Appium scripts, no dashboard navigation, and no prior automation experience required. 

Technical users get a faster, scriptless way to reach real hardware and generate test code from the tools they already work in; non-technical users get direct access to device testing and test creation that previously required an automation engineer.

- **Developers** test and debug on real devices without leaving their AI assistant, and generate runnable test code for the features they build exporting authored test cases in the language and framework they already use.
- **QA engineers** automate device selection, bug reproduction, and evidence capture, and author, run, and schedule test cases and suites from a prompt, so setup work disappears and they can focus on test logic.
- **Product managers** verify shipped features and triage customer escalations on real hardware in minutes, and create tests by describing them in plain language—no engineer or code required.
- **Designers** review layouts across real devices, locales, dark mode, and text sizes, and turn what they want to check into runnable test cases without writing code.
- **Support and QA leads** confirm device compatibility and run quick smoke checks on demand, removing a common bottleneck.

## Supported AI clients

Sauce MCP works with any MCP-compatible client, including:

<div className="client-grid">
  <div className="client-tile"><img src={useBaseUrl('img/sauce-mcp/clients/claude.svg')} alt="Claude logo" /><span>Claude</span></div>
  <div className="client-tile"><img src={useBaseUrl('img/sauce-mcp/clients/cursor.svg')} alt="Cursor logo" /><span>Cursor</span></div>
  <div className="client-tile"><img src={useBaseUrl('img/sauce-mcp/clients/windsurf.svg')} alt="Windsurf logo" /><span>Windsurf</span></div>
  <div className="client-tile"><img src={useBaseUrl('img/sauce-mcp/clients/vscode.png')} alt="Visual Studio Code logo" /><span>VS Code (Copilot)</span></div>
  <div className="client-tile"><img src={useBaseUrl('img/sauce-mcp/clients/intellij.svg')} alt="IntelliJ IDEA logo" /><span>IntelliJ</span></div>
  <div className="client-tile"><img src={useBaseUrl('img/sauce-mcp/clients/antigravity.png')} alt="Antigravity logo" /><span>Antigravity</span></div>
  <div className="client-tile"><img src={useBaseUrl('img/sauce-mcp/clients/gemini.svg')} alt="Google Gemini logo" /><span>Gemini CLI</span></div>
  <div className="client-tile"><img src={useBaseUrl('img/sauce-mcp/clients/goose.png')} alt="Goose logo" /><span>Goose</span></div>
</div>

Learn how to **[connect your AI client](/sauce-ai/sauce-mcp-getting-started)**, understand available MCP capabilities, and explore the Sauce Labs tools available through Sauce MCP.

