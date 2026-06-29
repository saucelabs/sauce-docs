---
id: tunnels
title: Tunnels
sidebar_label: Tunnels
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Inspect Sauce Connect tunnels and the jobs running through them.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `get_tunnel_information` | Retrieve details for a specific tunnel. | "Show details for tunnel my-tunnel." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_tunnels_for_user` | List the tunnels owned by a user. | "Do I have any active tunnels?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_current_jobs_for_tunnel` | List the jobs currently running through a tunnel. | "What jobs are running through my tunnel?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
