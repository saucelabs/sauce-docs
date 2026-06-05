---
id: sauce-mcp
title: Sauce MCP
sidebar_label: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info Beta
Sauce MCP is currently in beta. Capabilities and configuration may change.
:::

Sauce MCP lets your AI assistant or agent talk to Sauce Labs directly. It is a hosted [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that exposes Sauce Labs capabilities as tools any MCP-compatible AI client can call using natural language.

## What is Sauce MCP?

The [Model Context Protocol](https://modelcontextprotocol.io) (MCP) is an open standard that lets AI applications connect to external tools and data sources. An MCP server publishes a set of *tools*; an MCP-compatible *client* (such as an AI coding assistant) can then call those tools on your behalf while answering a prompt.

Sauce MCP is a hosted MCP server operated by Sauce Labs. Once you connect a supported AI client, your agent can work with the Sauce Labs platform through natural language instead of switching to the dashboard or writing API calls by hand.

## What you can do

With Sauce MCP connected, your AI agent can:

- Discover available real devices and check their status
- Start, inspect, and end real-device sessions
- Install, launch, and uninstall apps from Sauce Storage
- Capture screenshots, read the UI, and run shell commands on a device
- Configure network conditions and capture network traffic
- Inspect jobs, builds, and test artifacts
- Look up account, team, and tunnel information

See [Tools](/sauce-ai/sauce-mcp-tools) for the full breakdown of capabilities, and the [Prompting Guide](/sauce-ai/real-device-cloud-mcp-prompting-guide) for ready-to-use prompts.

## Who it's for

Sauce MCP is built for both **technical and non-technical** users. If you can describe what you want to test in plain language, you can drive a real device: no Appium scripts, no dashboard navigation, and no prior automation experience required. Technical users get a faster, scriptless way to reach real hardware from the tools they already work in; non-technical users get direct access to device testing that previously required an automation engineer.

- **Developers** test and debug on real devices without leaving their AI assistant: install a build, reproduce an issue, pull logs, and capture network traffic in one conversation.
- **QA engineers** automate device selection, bug reproduction, and evidence capture, so setup work happens in a prompt and they can focus on test logic.
- **Product managers** verify shipped features and triage customer escalations on real hardware in minutes, without pulling in an engineer.
- **Designers** review layouts across real devices, locales, dark mode, and text sizes, catching issues that simulators and mockups miss.
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

See [Connect your AI client](/sauce-ai/sauce-mcp-getting-started) for setup instructions.

## Supported data centers

Sauce MCP supports the US West, US East, and EU Central data centers. Connect to the endpoint that matches the data center where your Sauce Labs account and devices live.

## Requirements

The real-device session and on-device interaction tools are powered by the Real Device Access API and require **private (dedicated) devices** and **Real Device Access API concurrency** on your Sauce Labs account. See [Tools](/sauce-ai/sauce-mcp-tools#requirements) for details.

## Next steps

[Connect your AI client →](/sauce-ai/sauce-mcp-getting-started)
