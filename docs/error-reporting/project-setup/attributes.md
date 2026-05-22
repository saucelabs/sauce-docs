---
id: attributes
title: Indexing Attributes
sidebar_label: Indexing Attributes
description: Create an attribute for each metadata point added to your snapshots that you would like to query, group or filter on.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Attributes

Attributes define key metadata points to generate indices in the Backtrace database (coroner). These coroner indices are used for filtering, reporting, visualization and snapshot retrieval. They can be used to determine impact and investigate root cause by looking at interesting patterns. For example, you can request a distribution of process uptime or memory usage in real-time for any group of crashes.

We recommend you create an attribute for each metadata point added to your snapshots that you would like to query, group or filter on. For example, if you are adding build_tag to each error submission belonging to this project, you should add "build_tag" as an attribute.

To create an attribute for a given project, select **Project Settings** from the top right menu and then **Attributes** from the left menu. Click the **+** at the top of the Attributes section, and enter name, type, format, and description of the attribute (see section below). Alternatively, if your project is already attaching attributes, click the Recommended tab to see a list of all attributes that have recently been attached to error submission but do not yet have an index created.

<img src={useBaseUrl('/img/error-reporting/project-settings/projectAttributes.png')} alt="" />

## Configuration

- Name: Name of the attribute
- Description: A short description of the attribute
- Format: Format of data type, used for rendering the value. The following formats are supported:

| Category | Format | Type | Description |
| ---------- | -------- | ------ | ------------- |
| Bytes | Bytes, Kilobytes, Gigabytes | 8–128-bit | Integer values representing a quantity of data. The specified unit determines how the value is interpreted. |
| Miscellaneous | Callstack | String | Serialized JSON array representing a call stack, where each element is a function name in the call sequence. |
| Miscellaneous | Labels | String | Collection of key-value tags or metadata labels associated with an event or object. |
| Miscellaneous | Memory address | 64-bit | Raw memory address as a 64-bit integer. |
| Miscellaneous | SHA-256 | String | SHA-256 cryptographic hash. |
| Miscellaneous | UUID | UUID | Universally unique identifier. |
| Networking | Hostname | String | Hostname of the machine or server where an event originated. |
| Networking | IPv4 | 32-bit | IPv4 address. |
| Networking | IPv6 | 128-bit | IPv6 address. |
| Time | GPS, JS, UNIX timestamps, Milliseconds, Nanoseconds, Seconds | 64-bit | Timestamp in one of several supported formats. The selected format determines the epoch and precision used when parsing the value. |
| Version control | Commit hash, Semantic version | String | Version identifier, either a Git commit hash or a semantic version string, used to correlate errors with a specific code release. |
| None | None | Boolean | True/false value. |
| None | None | String | Low-cardinality string values suited for bounded attribute sets like environment, release channel, or region. |
| None | None | Unsigned Integer | Non-negative integer using the selected bit width. |
| None | None | UUID | Universally unique identifier for entities requiring global uniqueness. |
