---
id: sauce-mcp-getting-started
title: Connect Your AI Client to Sauce MCP
sidebar_label: Connect Your AI Client
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info Beta
Sauce MCP is currently in beta. Configuration details may change.
:::

This guide shows how to connect a supported AI client to the hosted Sauce MCP server.

## Prerequisites

- A Sauce Labs account.
- Your Sauce Labs **username** and **access key**.
- The **data center** your account uses (US West, US East, or EU Central).
- To use the real-device session and on-device interaction tools: **private (dedicated) devices** and **Real Device Access API concurrency** on your account. See [Tools](/sauce-ai/sauce-mcp-tools#requirements).

### Find your access key

Your username and access key are available from the top navigation bar in the Sauce Labs dashboard. Click the key icon to reveal them, then copy your **Username** and **Access Key**.

<img src={useBaseUrl('img/sauce-mcp/access-key.png')} alt="Sauce Labs top navigation key icon showing username and access key" width="480"/>

For full details, see [Managing User Information](/basics/acct-team-mgmt/managing-user-info).

## Connection details

| Setting | Value |
| --- | --- |
| Transport | Streamable HTTP |
| Endpoint | `https://mcp.saucelabs.com` |
| Authentication | HTTP Basic Auth with your Sauce Labs `username` and `access key` |

Authentication uses HTTP Basic Auth. The credential is your `username:access_key`, Base64-encoded, sent in an `Authorization: Basic <credentials>` header. Many clients build this header for you when you provide a username and password. Tip: You can also set it as an environment variable for convenience:

`export SAUCE_AUTH_TOKEN=$(echo -n "your_username:your_access_key" | base64)`


## Configure your client

<Tabs
  defaultValue="claude-code"
  values={[
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/claude.svg')} alt="" /></span>Claude Code</span>, value: 'claude-code'},
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/claude.svg')} alt="" /></span>Claude Desktop</span>, value: 'claude-desktop'},
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/cursor.svg')} alt="" /></span>Cursor</span>, value: 'cursor'},
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/windsurf.svg')} alt="" /></span>Windsurf</span>, value: 'windsurf'},
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/vscode.png')} alt="" /></span>VS Code</span>, value: 'vscode'},
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/intellij.svg')} alt="" /></span>IntelliJ</span>, value: 'intellij'},
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/antigravity.png')} alt="" /></span>Antigravity</span>, value: 'antigravity'},
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/gemini.svg')} alt="" /></span>Gemini CLI</span>, value: 'gemini'},
    {label: <span className="tab-client"><span className="tab-client-logo"><img src={useBaseUrl('img/sauce-mcp/clients/goose.png')} alt="" /></span>Goose</span>, value: 'goose'},
  ]}>

<TabItem value="claude-code">

You can connect Claude Code in either of two ways.

**Option 1: Add it with the CLI**

```bash
claude mcp add --transport http sauce-labs https://mcp.saucelabs.com \
  --header "Authorization: Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
```

**Option 2: Add it with a config file**

Add the server to a `.mcp.json` file in your project root (or to your user-level `~/.claude.json`):

```json
{
  "mcpServers": {
    "sauce-labs": {
      "type": "http",
      "url": "https://mcp.saucelabs.com",
      "headers": {
        "Authorization": "Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      }
    }
  }
}
```

In both cases, replace `<BASE64_OF_USERNAME_COLON_ACCESSKEY>` with the Base64 encoding of `your-username:your-access-key`.

</TabItem>

<TabItem value="claude-desktop">

Edit `claude_desktop_config.json` (Settings → Developer → Edit Config). Claude Desktop connects to remote servers through the `mcp-remote` bridge:

```json
{
  "mcpServers": {
    "sauce-labs": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.saucelabs.com",
        "--header",
        "Authorization: Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      ]
    }
  }
}
```

Restart Claude Desktop after saving.
</TabItem>

<TabItem value="cursor">

Edit `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (per project):

```json
{
  "mcpServers": {
    "sauce-labs": {
      "url": "https://mcp.saucelabs.com",
      "headers": {
        "Authorization": "Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      }
    }
  }
}
```

</TabItem>

<TabItem value="windsurf">

Edit your Windsurf MCP config (`~/.codeium/windsurf/mcp_config.json`):

```json
{
  "mcpServers": {
    "sauce-labs": {
      "serverUrl": "https://mcp.saucelabs.com",
      "headers": {
        "Authorization": "Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      }
    }
  }
}
```

</TabItem>

<TabItem value="vscode">

Create `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "sauce-labs": {
      "type": "http",
      "url": "https://mcp.saucelabs.com",
      "headers": {
        "Authorization": "Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      }
    }
  }
}
```

Then enable the server from the Copilot Chat MCP view.

</TabItem>

<TabItem value="intellij">

In your JetBrains IDE (IntelliJ IDEA and others), open **Settings | Tools | AI Assistant | Model Context Protocol (MCP)** and add a server, or edit the MCP configuration directly:

```json
{
  "mcpServers": {
    "sauce-labs": {
      "url": "https://mcp.saucelabs.com",
      "headers": {
        "Authorization": "Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      }
    }
  }
}
```
</TabItem>

<TabItem value="antigravity">

In Antigravity, open the MCP settings and add a server, or edit its MCP configuration file:

```json
{
  "mcpServers": {
    "sauce-labs": {
      "serverUrl": "https://mcp.saucelabs.com",
      "headers": {
        "Authorization": "Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      }
    }
  }
}
```
</TabItem>

<TabItem value="gemini">

Edit `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "sauce-labs": {
      "httpUrl": "https://mcp.saucelabs.com",
      "headers": {
        "Authorization": "Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      }
    }
  }
}
```

</TabItem>

<TabItem value="goose">

Add an extension in Goose with these settings:

- **Type:** Remote (Streamable HTTP)
- **Endpoint:** `https://mcp.saucelabs.com`
- **Header:** `Authorization: Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>`

</TabItem>

</Tabs>

## Verify the connection

In your AI client, ask:

> What's my Sauce Labs account information?

If the connection works, the agent calls Sauce MCP and returns your account details. This prompt works on any account, since it does not require private devices or Real Device Access API concurrency.

## Troubleshooting

- **Authentication failed / 401:** Recheck your username and access key and confirm the `Authorization` header is correctly Base64-encoded.
- **Empty or unexpected results:** Confirm you are connecting to the endpoint for the data center where your account and devices live.
- **Client can't reach the server:** Confirm the endpoint URL is correct and that your client supports remote Streamable HTTP servers (Claude Desktop uses the `mcp-remote` bridge above).
