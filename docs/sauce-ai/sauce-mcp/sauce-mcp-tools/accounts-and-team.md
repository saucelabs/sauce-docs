---
id: account-and-team
title: Account & Team
sidebar_label: Account & Team
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Look up account, user, team, and region information. Useful for confirming which environment your agent is working in.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `get_account_info` | Retrieve your Sauce Labs account details and concurrency limits. | "What are my account's concurrency limits?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_user` | Look up details for a specific user. | "Show the details for user jdoe." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_my_active_team` | Show the team your account is currently acting under. | "Which team am I currently using?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `lookup_teams` | Search the teams in your organization. | "List the teams in my organization." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_active_region` | Report which Sauce Labs data center the server is connected to. | "Which Sauce Labs region am I connected to?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |