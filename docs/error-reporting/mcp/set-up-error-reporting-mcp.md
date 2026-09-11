---
id: set-up-error-reporting-mcp
title: Set Up Error Reporting MCP with Claude Code
sidebar_label: Set Up Error Reporting MCP with Claude Code
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
claude mcp add --transport http sauce-labs https://mcp.saucelabs.com \
  --header "Authorization: Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>" \
  --header "X-Sauce-Region: <REGION>"
```

Replace:

* `<BASE64_OF_USERNAME_COLON_ACCESSKEY>` with the Base64 encoding of your Sauce Labs username and access key in the format `username:access-key`.

* `<REGION>` with the Sauce Labs region for your environment.

To generate the Base64 value, run:

```
echo -n "your-username:your-access-key" | base64
```

For example, if your username and access key are:

```
your-username:your-access-key
```

Encode that value and use the result in the `Authorization` header.

### Option 2: Add the MCP server using a configuration file

You can also add the Error Reporting MCP server to a `.mcp.json` file in your project root or to your user-level `~/.claude.json` file.

Add the following configuration:

```
{
  "mcpServers": {
    "sauce-labs": {
      "type": "http",
      "url": "https://mcp.saucelabs.com",
      "headers": {
        "Authorization": "Basic <BASE64_OF_USERNAME_COLON_ACCESSKEY>",
        "X-Sauce-Region": "<REGION>"
      }
    }
  }
}
```

Replace `<BASE64_OF_USERNAME_COLON_ACCESSKEY>` with the Base64 encoding of your Sauce Labs `username:access-key`, and `<REGION>` with the appropriate Sauce Labs region.

:::info
Keep your Sauce Labs access key secure. Do not commit credentials or other sensitive authentication values to source control.
:::

## Verify the MCP connection

**Step 1:** After adding the server, open the MCP menu in Claude Code by entering:

```
/mcp
```

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-1.png')} alt="MCP Setup" />

**Step 2:** Locate the Error Reporting MCP server in the list of configured MCP servers. If the server requires authentication, it appears with a **Needs authentication** status.

:::note
The Error Reporting MCP server name and connection details may vary depending on your organization's configuration.
:::

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-2.png')} alt="MCP Setup" />

:::note 
The MCP server name and connection details may vary depending on your organization's configuration.
:::

## Authenticate with SSO

**Step 1:** From the `/mcp` menu, select the **Error Reporting MCP** server and choose the **Authenticate** option.

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-3.png')} alt="MCP Setup" />

**Step 2:** Your browser opens the **Error Reporting** sign-in page. On the Error Reporting sign-in page, enter your **Error Reporting universe** in the **Universe** field and select **Continue**.

The universe is the workspace name associated with your Error Reporting environment. For example, if your Error Reporting URL is:

```
<your-universe>.sp.backtrace.io
```

Enter the value represented by `<your-universe>`.

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-4.png')} alt="MCP Setup" />

**Step 3:** Complete the SSO authentication using your organization's credentials. When the **Authorize access** page appears, verify that the **saucelabs** universe is selected, then select **Allow** to authorize the MCP client.

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-5.png')} alt="MCP Setup" />

After successful authorization, return to Claude Code. The Error Reporting MCP server should now appear as **Connected** in the `/mcp` menu.

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-6.png')} alt="MCP Setup" />

:::note
You must have access to the Error Reporting universe you enter. If the authentication page displays "Unknown or inaccessible Error Reporting universe", verify the universe name and confirm that your account has access to it.
:::

## Use Error Reporting MCP

After connecting Error Reporting MCP to Claude Code, you can use natural-language prompts to explore your Error Reporting data and investigate errors.

You can start with a broad request and progressively drill down into a specific error.

### List your Error Reporting Projects

Start by viewing the projects available in your Error Reporting universe.

Enter the following prompt in Claude Code:

```
List all the projects in my universe.
```

Claude Code uses Error Reporting MCP to retrieve the projects available in your authenticated universe.

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-7.png')} alt="MCP Setup" />

### Find the Top Errors in a Project

After identifying a project, ask Claude Code to find the most frequent errors for a specific time period.

For example:

```
What are the top errors in visual project?
```

Claude Code returns the top errors for the project, including information such as the number of errors, error message, type, and when the error was last seen.

You can use this information to identify the errors that may require further investigation.

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-8.png')} alt="MCP Setup" />

### Investigate an Error in detail

After identifying an error, ask Claude Code to investigate the error and provide its stack trace.

For example:

```
Explain the most recent error in detail along with stacktrace.
```

Claude Code retrieves the most recent error and provides details such as the error message, stack trace, associated error group, and information about the environment in which the error occurred.

<img src={useBaseUrl('img/error-reporting/error-reporting-mcp/mcp-setup-9.png')} alt="MCP Setup" />

