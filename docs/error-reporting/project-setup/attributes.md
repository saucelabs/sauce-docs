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

<img src={useBaseUrl('img/error-reporting/project-settings/add-attributes.png')} alt="" />

## Configuration

- Name: Name of the attribute
- Description: Description of the attribute
- Format: Format of data type, used for rendering the value. The following formats are supported:
  - Bytes - kilobytes, gigabytes, terabytes, bytes: The underlying column is storing integer values, and those values are expected to be treated as the specified unit. This is only valid for integer types.
  - Miscellaneous - callstack: The underlying column is storing a serialized JSON object that represents a callstack as a sequence of strings, where every element is a function. This is only valid for dictionary.
  - Miscellaneous - memory_address: The values represent memory addresses. They should be rendered as such. This is only valid for integer types.
  - Miscellaneous - sha256: The column stores a sha256 value. Only valid for dictionary type.
  - Miscellaneous - UUID: The column stores a unique identifier value.
  - Networking - hostname: The underlying column name is a machine hostname. This is only valid for dictionary.
  - Networking - ipv4: The column stores ipv4 addresses. This should be only be used with uint32 type. Javascript must render value as an IP address (see morgue for example).
  - Networking - ipv6: The column stores ipv6 addresses. This can be used with dictionary type only.
  - Time - The column can store one of various time stamp formats, including GPS Timestamp, Javascript Timestamp, Unix Timestamp, Nanoseconds, Milliseconds, Seconds
  - Version Control: A semantic version or commit hash string.
  - None: Just render the value as is.
- Type: Data type of attribute. The system will try to choose an appropriate Type based on the Format selected, and the user can modify this is warranted. The following types are supported:
  - boolean: True / false values
  - string: This type should be used to store low cardinality strings (less than 2B unique values). Examples would include commits, versions, environment, etc. This encoding is efficient in that any string already present in the dictionary only requires 4 bytes of space to store in the column.
  - uint64, uint32, uint16, uint8: These are unsigned integer types and can be used to store 64-bit, 32-bit, 16-bit and 8-bit integers respectively.
