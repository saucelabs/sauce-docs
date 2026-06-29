---
id: sauce-mcp-getting-started
title: Connect Your AI Client to Sauce MCP
sidebar_label: Connect Your AI Client
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info Beta
Sauce MCP is currently in Beta. Configuration details may change.
:::

Sauce MCP (Model Context Protocol) enables **[supported AI clients](/docs/sauce-ai/sauce-mcp.md#supported-ai-clients)** to securely connect with Sauce Labs accounts so you can interact with Sauce Labs using natural language. After connecting to the hosted Sauce MCP server, you can ask your AI assistant to perform supported testing tasks, retrieve information from your Sauce Labs account, and help you complete common testing workflows without switching between applications.


## Prerequisites

- A valid Sauce Labs account.
- Your Sauce Labs **[username and access key](#find-your-sauce-labs-username-and-access-key)** for authentication.
- The **[data center](/docs/basics/data-center-endpoints.md)** (e.g. US West) associated with your Sauce Labs account 
- To use the real-device session and on-device interaction tools: private (dedicated) devices and Real Device Access API concurrency on your account. See [Tools](/sauce-ai/sauce-mcp-tools#requirements).

## Find Your Sauce Labs Username and Access Key

Your Sauce Labs username and access key are required to authenticate your AI client with Sauce MCP. Ensure you have these credentials available before starting the configuration process.

**Step 1:** Sign in to your **Sauce Labs** account and locate the **Key** icon in the top navigation bar. Click the icon to open the credentials panel, where your account details are displayed.

<img src={useBaseUrl('img/sauce-mcp/locate-key.png')} alt="Sauce Labs top navigation key icon showing username and access key" width="100%"/>

**Step 2:** In the credentials panel, locate your **Username** and **Access Key**, then use the copy icon next to each field to copy the credentials. You will use these details when configuring your AI client to authenticate and connect with the Sauce MCP server.

:::note
Keep your access key secure and avoid sharing it publicly, as it provides access to your Sauce Labs account. 
:::

<img src={useBaseUrl('img/sauce-mcp/copy-key.png')} alt="Sauce Labs top navigation key icon showing username and access key" width="100%"/>

:::info
For regenerating access key, refer to the article [Regenerating Access Key](/basics/acct-team-mgmt/managing-user-info.md#regenerating-access-keys).
:::

## Connection Details
Use the following connection settings when adding Sauce MCP to your AI client:

| Setting | Value |
| --- | --- |
| Transport | Streamable HTTP |
| Endpoint | `https://mcp.saucelabs.com` |
| Authentication | HTTP Basic authentication using your Sauce Labs `username` and `access key` |

Sauce MCP uses HTTP Basic Authentication. Your credentials are sent in the format: `username:access_key`. This value must be Base64-encoded and included in the request as: `Authorization: Basic <credentials>`. Many AI clients generate this authorization header automatically when you provide your username and access key.

:::tip
You can also create an environment variable for convenience: `export SAUCE_AUTH_TOKEN=$(echo -n "your_username:your_access_key" | base64)`
:::


## Configure your Client

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
<br /> <br />

#### **Option 1: Add it with the CLI**

```bash
claude mcp add --transport http sauce-labs https://<sauce-mcp-endpoint> \
  --header "Authorization: Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
```

#### **Option 2: Add it with a config file**

Add the server to a `.mcp.json` file in your project root (or to your user-level `~/.claude.json`):
<br /> <br />

```json
{
  "mcpServers": {
    "sauce-labs": {
      "type": "http",
      "url": "https://<sauce-mcp-endpoint>",
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
<br /> <br />

```json
{
  "mcpServers": {
    "sauce-labs": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://<sauce-mcp-endpoint>",
        "--header",
        "Authorization: Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>"
      ]
    }
  }
}
```
<br />
Restart Claude Desktop after saving.
</TabItem>

<TabItem value="cursor">

Edit `~/.cursor/mcp.json` (global) or `.cursor/mcp.json` (per project):
<br /> <br />

```json
{
  "mcpServers": {
    "sauce-labs": {
      "url": "https://<sauce-mcp-endpoint>",
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
<br /> <br />

```json
{
  "mcpServers": {
    "sauce-labs": {
      "serverUrl": "https://<sauce-mcp-endpoint>",
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
<br /> <br />

```json
{
  "servers": {
    "sauce-labs": {
      "type": "http",
      "url": "https://<sauce-mcp-endpoint>",
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

<br /> <br />

```json
{
  "mcpServers": {
    "sauce-labs": {
      "url": "https://<sauce-mcp-endpoint>",
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
<br /> <br />

```json
{
  "mcpServers": {
    "sauce-labs": {
      "serverUrl": "https://<sauce-mcp-endpoint>",
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
<br /> <br />

```json
{
  "mcpServers": {
    "sauce-labs": {
      "httpUrl": "https://<sauce-mcp-endpoint>",
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
- **Endpoint:** `https://<sauce-mcp-endpoint>`
- **Header:** `Authorization: Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>`

</TabItem>

</Tabs>

## Verify the Connection

After completing the configuration, open your AI client and ask:

> What's my Sauce Labs account information?

If the connection is successful, the AI client communicates with Sauce MCP and returns your Sauce Labs account information. This verification works for all Sauce Labs accounts and does not require private devices or Real Device Access API concurrency.

## Troubleshooting

- **Authentication failed / 401:** Recheck your username and access key and confirm the `Authorization` header is correctly Base64-encoded.
- **Empty or unexpected results:** Confirm you are connecting to the endpoint for the data center where your account and devices live.
- **Client can't reach the server:** Confirm the endpoint URL is correct and that your client supports remote Streamable HTTP servers (Claude Desktop uses the `mcp-remote` bridge above).

:::note
After connecting your AI client, you can use the **[available MCP tools](/docs/sauce-ai/sauce-mcp-tools.md)** to interact with your Sauce Labs environment through natural language.
:::