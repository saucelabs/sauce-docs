---
id: error-reporting-mcp-tools
title: Error Reporting MCP Tools
sidebar_label: Error Reporting MCP Tools
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Error Reporting MCP provides tools for exploring Error Reporting projects, finding errors, and investigating crash details. The tools can be used together to progressively investigate an issue, starting with your available projects and narrowing down to an individual error and its supporting data.

| Tool name | Description | Example prompt |
|---|---|---|
| `error_reporting_get_context` | Returns the caller's environment: universe and the projects the authenticated account can see. Call first in a session to resolve which project subsequent queries target. | "What Error Reporting projects do I have access to?" |
| `error_reporting_list_attributes` | Lists the attributes available on a project—the fields a query can filter, group, or fold on. Call before constructing any filtered or grouped query so filters use real attribute names. | "What attributes can I filter on in the `<project>` project?" |
| `error_reporting_list_groups` | Returns crash groups for a project over a time window, ranked with error counts, first/last seen, and affected users. The entry point for "what's broken right now." | "Show me the top 10 crash groups in `<project>` over the last 7 days, ranked by affected users." |
| `error_reporting_list_instances` | Returns individual error objects, one row each, with selected attribute columns. Use when raw events matter rather than the aggregate—for example, slicing by version, device, or user. | "List every error in `<project>` from the last 24 hours on app version 5.2.1." |
| `error_reporting_get_group` | Returns a single crash group in depth, beyond what the ranked list carries. Use after `list_groups` to investigate one group. | "Give me the full detail on crash group `<group id>` in `<project>`." |
| `error_reporting_get_instance` | Returns one error object in full: the crashing thread's callstack, its attributes, and the attachments available on it. The main triage tool. | "Show me the callstack and attributes for error `<object id>` in `<project>`." |
| `error_reporting_get_attachment` | Fetches one file attached to an error object—most usefully the SDK breadcrumbs. Call after `get_instance` surfaces the attachment list. | "Pull the breadcrumbs attachment for error `<object id>` and tell me what the user did in the seconds before the crash." |