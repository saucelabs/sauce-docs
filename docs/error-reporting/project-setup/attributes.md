---
id: attributes
title: Create an Attribute for a Project
sidebar_label: Create an Attribute for a Project
description: Index the metadata attached to your error reports as attributes, so you can query, group, and filter errors by their values.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Attributes are custom metadata attached to error reports to aid in debugging and root cause analysis. When you index an attribute, Error Reporting creates an index for it in the Backtrace database (coroner). These indices are used for filtering, reporting, visualization, and snapshot retrieval, so you can determine the impact of an error and investigate its root cause by looking for patterns. For example, you can request a distribution of process uptime or memory usage in real time for any group of crashes.

We recommend that you create an attribute for each metadata point added to your error reports that you want to query, group, or filter on. For example, if you add `build_tag` to each error submission for a project, add `build_tag` as an attribute.

:::note
Indexing an attribute applies to new error reports. To index the attribute in reports that were submitted earlier, reprocess them. See [Object Reprocessing](/error-reporting/project-setup/object-reprocessing/).
:::

## Open the Attributes Page

You manage the attributes of a project from the **Attributes** page in the project settings. Each project has its own attributes, so open the project whose error reports you want to index before you start.

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** Under **Error processing** in the left menu, click **Attributes**.

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-2.png')} alt="Attributes option under Error processing in the Project settings menu" />

The **Attributes** page lists the attributes of the project in three tabs: **Custom**, **Default**, and **Recommended**.

## Attribute Tabs

The **Attributes** page separates the attributes you have indexed, the attributes that Error Reporting indexes by default, and the attributes your error submissions send that are not indexed yet. Use the tabs to see each group.

| Tab | What it shows |
| --- | --- |
| **Custom** | The attributes you have indexed for the project, with their **Name**, **Description**, **Format**, **Type**, and whether each one is **Used** (`true` or `false`). Use the menu at the end of a row to edit or delete an attribute. See [Edit or Delete an Attribute](#edit-or-delete-an-attribute). |
| **Default** | The built-in attributes that Error Reporting indexes for every project, such as `_deleted`, `_missing_symbol`, and `_rxid`, with their **Name**, **Description**, **Format**, and **Type**. |
| **Recommended** | Attributes that have recently been attached to error submissions but are not indexed yet. The tab title shows how many there are. Each row shows the attribute **Name**, an example **Value**, and when it was last **Seen**. See [Index a Recommended Attribute](#index-a-recommended-attribute). |

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-3.png')} alt="Custom tab on the Attributes page, listing the indexed attributes of the project" />

## Create an Attribute

Create an attribute when you want to query, group, or filter errors by a metadata point that your error submissions send. You define the attribute's name, a description, the format used to display its values, and its data type.

**Step 1:** On the **Attributes** page, click **+** (**Create a new attribute**) in the top-right corner. The **Edit attribute** dialog opens.

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-6.png')} alt="Create a new attribute button on the Attributes page" />

**Step 2:** Fill in the fields of the **Edit attribute** dialog.

| Sr. No. | Field | Description | Example |
| --- | --- | --- | --- |
| 1 | **name** | The name of the attribute, exactly as it is attached to your error submissions. | `build_tag` |
| 2 | **description** | A short description of the attribute. | `Build tag of the release that sent the error` |
| 3 | **format** | The format used to render the attribute's values. Formats are grouped by category: **Bytes**, **Miscellaneous**, **Networking**, **Time**, and **Version control**. Select **None** if no format should be applied when rendering values. See [Attribute Formats](#attribute-formats). | `None` |
| 4 | **type** | The data type of the attribute. | `String` |

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-7.png')} alt="Edit attribute dialog with the name, description, format, and type fields filled in" />

**Step 3:** Click **Create**.

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-10.png')} alt="Create button in the Edit attribute dialog" />

The attribute appears on the **Custom** tab, and new error reports are indexed by it.

## Index a Recommended Attribute

If your project is already attaching attributes to error submissions, you can index them from the **Recommended** tab instead of entering them yourself.

**Step 1:** On the **Attributes** page, click the **Recommended** tab, find the attribute you want to index, and click **+** at the end of its row.

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-5.png')} alt="+ at the end of each row on the Recommended tab" />

**Step 2:** The **Edit attribute** dialog opens with the attribute name filled in. Enter the description, format, and type, as described in [Create an Attribute](#create-an-attribute), and click **Create**.

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-8.png')} alt="Edit attribute dialog with the name of the recommended attribute filled in" />

## Edit or Delete an Attribute

You can edit or delete the attributes on the **Custom** tab, for example, to update a description or change the format used to display an attribute's values. The **Default** attributes are built in and do not have these options.

**Step 1:** On the **Custom** tab, click the menu icon (**⋮**) at the end of the attribute's row.

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-11.png')} alt="Menu icon at the end of each row on the Custom tab" />

**Step 2:** Click **Edit** to change the attribute in the **Edit attribute** dialog, or click **Delete** to remove it.

<img src={useBaseUrl('img/error-reporting/error-processing/attributes/attributes-9.png')} alt="Menu at the end of a row on the Custom tab, with the Edit and Delete options" />

## Attribute Formats

The format determines how an attribute's values are rendered in Error Reporting, such as showing a number as kilobytes or a value as a timestamp. Choose the format that matches the data your attribute holds, or **None** to show values as they are sent. The following formats are supported:

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
