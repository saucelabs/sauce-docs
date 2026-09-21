---
id: set-up-error-reporting-mcp
title: Set Up Error Reporting MCP with Claude Code
sidebar_label: Set Up Error Reporting MCP with Claude Code
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Connect **Error Reporting MCP** to Claude Code to access and investigate Error Reporting data directly from your development environment. Once connected, you can use natural-language prompts to list projects, find errors, and investigate error details without switching between Claude Code and the Error Reporting interface.

## Add Error Reporting MCP to Claude Code

You can add the **Error Reporting MCP** server to Claude Code using either the **CLI** or a **configuration file**.

### Option 1: Add the MCP Server Using the CLI

**Step 1:** Open **Claude Code** in your terminal. If Claude Code is already running, continue to the next step.

```
npx @anthropic-ai/claude-code
```

**Step 2:** Add the **Error Reporting MCP** server using the following command:

```
claude mcp add --transport http sauce-labs https://mcp.saucelabs.com
```

### Option 2: Add the MCP Server using a Configuration File

You can also add the Error Reporting MCP server to a `.mcp.json` file in your project root or to your user-level `~/.claude.json` file.

Add the following configuration:

```json
{
  "mcpServers": {
    "sauce-labs": {
      "type": "http",
      "url": "https://mcp.saucelabs.com"
    }
  }
}
```

No credentials are required in the configuration.

## Verify the MCP Connection

**Step 1:** After adding the server, open the MCP menu in Claude Code by entering:

```
/mcp
```

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-1.png')} alt="MCP Setup" />

**Step 2:** Locate the Error Reporting MCP server in the list of configured MCP servers.

:::note
The Error Reporting MCP server name and connection details may vary depending on your organization's configuration.
:::

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-2.png')} alt="MCP Setup" />

## Next Steps

Now that Error Reporting MCP is connected to Claude Code, see [Error Reporting MCP Tools"](/error-reporting/mcp/error-reporting-mcp-tools/) for example prompts and the full list of available tools.

