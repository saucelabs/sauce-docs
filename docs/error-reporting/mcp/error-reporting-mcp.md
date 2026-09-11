---
id: error-reporting-mcp
title: Introducing Error Reporting MCP
sidebar_label: Introducing Error Reporting MCP
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Error Reporting MCP brings **Sauce Labs Error Reporting** directly into your AI-powered development workflow. It allows you to use natural-language prompts from your AI client to explore projects, find errors, investigate crash groups, and inspect individual error details without manually navigating through the Error Reporting interface.

With Error Reporting MCP, you can ask your AI client questions about your Error Reporting data and receive the relevant information directly in your development environment.

## What is Error Reporting MCP?

**Error Reporting MCP** is an MCP integration that gives your AI client access to Error Reporting data.

Instead of switching between your development environment and Error Reporting to investigate an issue, you can ask questions directly through your AI client.

This allows you to move from **discovering an issue to investigating its details** through a conversational workflow.

## What can you do with Error Reporting MCP?

Error Reporting MCP lets you investigate issues in Error Reporting using natural-language prompts. You can use it to discover your projects, explore error data, investigate crash groups, and retrieve additional details about individual errors.

The following examples show some of the ways you can interact with Error Reporting MCP:

| Use case | Example prompt |
| ----- | ----- |
| **Discover projects** | `What Error Reporting projects do I have access to?` |
| **Explore project data** | `What attributes can I filter on in the Blackhole project?` |
| **Find crash groups** | `Show me the top 10 crash groups in Blackhole over the last 7 days, ranked by affected users.` |
| **List individual errors** | `List every error in Blackhole from the last 24 hours on app version 5.2.1.` |
| **Investigate a crash group** | `Give me the full detail on crash group <group ID> in Blackhole.` |
| **Inspect an error** | `Show me the callstack and attributes for error <object ID> in Blackhole.` |
| **Retrieve attachments** | `Pull the breadcrumbs attachment for error <object ID> and tell me what the user did in the seconds before the crash.` |

You can combine these prompts to progressively investigate an issue, starting with project discovery and narrowing down to a specific error and its available debugging information.

To start using Error Reporting MCP, see **[Set Up Error Reporting MCP with Claude Code](/docs/error-reporting/mcp/set-up-error-reporting-mcp.md)**

