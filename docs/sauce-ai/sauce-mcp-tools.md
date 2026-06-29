---
id: sauce-mcp-tools
title: Sauce MCP Tools
sidebar_label: MCP Tools
---

:::info Beta
Sauce MCP is currently in Beta. The available tools may change.
:::

Sauce MCP exposes Sauce Labs capabilities as MCP tools, grouped by capability area below. Each group lists its tools, what they do, an example prompt, and availability. You rarely name a tool yourself: you describe a goal in plain language, and your AI client decides which tools to call. For more prompts, see the [Prompting Guide](/docs/sauce-ai/real-device-cloud-mcp-prompting-guide.md).

## Requirements

:::important
Some tools need entitlements beyond a standard Sauce Labs account:

- <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> tools (creating sessions, taking screenshots, tapping, installing apps, running shell commands, capturing network traffic, and working with device files) need **private (dedicated) devices** and **Real Device Access API concurrency**.
- <span className="mcp-tag">Test Authoring</span> tools (generating, managing, running, and scheduling test cases and suites) need **Sauce AI for Test Authoring**, a paid add-on for Enterprise accounts. See [Sauce AI for Test Authoring](/sauce-ai/ai-authoring).

Beyond these entitlements, access to specific tools and capabilities can also depend on your role and permissions within your Sauce Labs organization. If a tool is missing or returns a permissions error, ask your organization administrator to review your team membership and access settings.
:::

## Available MCP Tools

The following guides describe the capabilities provided by each Sauce MCP tool.

| Tools | Description | Reference |
|------|-------------|-----------|
| **Account and Team** | Learn how to manage organizations, teams, and users within your Sauce Labs account through Sauce MCP. | **[See more](/docs/sauce-ai/sauce-mcp/sauce-mcp-tools/accounts-and-team.md)** |
| **Jobs, Builds, and Assets** | Learn how to retrieve information about jobs, builds, screenshots, videos, logs, and other test artifacts. | **[See more](/docs/sauce-ai/sauce-mcp/sauce-mcp-tools/jobs-builds-assets.md)** |
| **Real Device Access API** | Learn how to interact with real devices and perform supported Real Device Cloud operations using Sauce MCP. | **[See more](/docs/sauce-ai/sauce-mcp/sauce-mcp-tools/real-device-access-api.md)** |
| **Storage** | Learn how to upload, manage, and retrieve applications and other files stored in Sauce Storage. | **[See more](/docs/sauce-ai/sauce-mcp/sauce-mcp-tools/storage.md)** |
| **Test Authoring** | Learn how to generate, manage, and run AI-authored test cases, test suites, and scheduled test runs through Sauce MCP. | **[See more](/docs/sauce-ai/sauce-mcp/sauce-mcp-tools/test-authoring.md)** |
| **Tunnels** | Learn how to create, monitor, and manage Sauce Connect Proxy tunnels for secure testing of internal applications. | **[See more](/docs/sauce-ai/sauce-mcp/sauce-mcp-tools/tunnels.md)** |

