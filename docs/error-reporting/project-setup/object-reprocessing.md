---
id: object-reprocessing
title: Reprocess Past Crashes for New Attributes
sidebar_label: Reprocess Past Crashes for New Attributes
description: Reprocess the error objects stored in Error Reporting to index new attributes or regenerate callstacks after you upload debug symbols.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Error Reporting processes each error object when it is submitted. Changes you make to a project afterward, such as indexing a new attribute or uploading missing debug symbols, apply only to new error objects. To apply them to the error objects already stored in Error Reporting, reprocess those objects.

Administrators can reprocess objects from the Error Reporting web console, as described in the following sections, or with the [morgue command-line tool](/error-reporting/advanced/morgue/).

## When to Reprocess Objects

Reprocess objects when you need to:

- Index attributes that you defined after the objects were submitted. See [Create an Attribute for a Project](/error-reporting/project-setup/attributes/).
- Regenerate callstacks after you upload debug symbols.

:::caution
The grouping of errors may change after reprocessing.
:::

## Ways to Reprocess Objects

You can choose which objects to reprocess, from all objects over a time span to the errors in a single group.

| Method | Where | What it reprocesses |
| --- | --- | --- |
| [By time](#reprocess-by-time) | **Project Settings & Docs** > **Object reprocessing** | All errors submitted over a time span. |
| [By fingerprint](#reprocess-by-fingerprint) | **Explore**, **Aggregate** view, grouped by **fingerprint** | All errors of one fingerprint. |
| [By query](#reprocess-by-query) | **Explore**, **Aggregate** view, grouped by an attribute | All errors grouped under one attribute value, or all errors in the query. |

## Reprocess by Time

Reprocess by time when a change applies to every error in a period, for example, after you index a new attribute and want it available for the past month of errors. Error Reporting reprocesses the objects submitted in that period with the latest set of configured attributes.

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** Under **Error processing** in the left menu, click **Object reprocessing**.

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-2.png')} alt="Object reprocessing option under Error processing in the Project settings menu" />

**Step 3:** From the **Reprocess errors from** dropdown list, select the time span of the errors you want to reprocess: **LAST HOUR**, **LAST DAY**, **LAST 7 DAYS**, **LAST 30 DAYS\***, **LAST 90 DAYS\***, **LAST YEAR\***, or **ALL TIME\***.

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-3.png')} alt="Reprocess errors from dropdown list with the available time spans" />

**Step 4:** Click **Reprocess objects**.

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-4.png')} alt="Reprocess objects button on the Object reprocessing page" />

:::note
Retention policies may limit which objects are reprocessed.
:::

## Reprocess by Fingerprint

A fingerprint is the primary fault signature that Error Reporting uses to group errors. All errors with the same fingerprint are grouped together, so reprocessing a fingerprint reprocesses every error in that group at once.

Reprocess by fingerprint when a change affects one error group but not the rest of your project, for example, after you upload the debug symbols that a crash was missing. Only the errors in that fingerprint are reprocessed, and the other errors in your project stay unchanged.

You reprocess a fingerprint from the **Explore** view.

**Step 1:** In your project, click **Explore** in the top navigation bar, and then select **Aggregate** from the **View as** dropdown list.

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-5.png')} alt="Aggregate option in the View as dropdown list of the Explore view" />

**Step 2:** From the **Group errors by** dropdown list, select **fingerprint**, which is described as the **primary fault signature**. Each row in the table is then one fingerprint, and the **Group - fingerprint** column shows its ID, such as `8be5823`.

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-6.png')} alt="Group errors by dropdown list with fingerprint selected" />

**Step 3:** Find the fingerprint you want to reprocess, and click the **More group options** icon (**⋮**) next to it.

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-7.png')} alt="More group options icon next to each fingerprint in the Aggregate view" />

**Step 4:** Select **Reprocess group** (**Reprocess all errors in this group**).

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-8.png')} alt="Reprocess group option in the More group options menu of a fingerprint" />

Error Reporting reprocesses all errors in the fingerprint.

:::tip
To find a fingerprint quickly, narrow the list with the **Error type** and **Platform** filters, or with the filters in the top navigation bar.
:::

## Reprocess by Query

Reprocess by query when you want to reprocess a specific set of errors, such as the errors from one application version or platform, or every error your query returns. You group the errors in the **Explore** view by an attribute, or by **None**, and then reprocess all errors in a group.

**Step 1:** In the **Explore** view, filter the errors you want to reprocess, and then select **Aggregate** from the **View as** dropdown list.

**Step 2:** From the **Group errors by** dropdown list, select how to group the errors:

- To reprocess the errors grouped under one attribute value, select that attribute, such as a custom attribute.

  <img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-9.png')} alt="Group errors by dropdown list with fingerprint, None, and custom attributes" />

- To reprocess all errors in the query as one group, select **None** (**Group by none**). The table then shows a single group, `*`, that contains every error in the query.

  <img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-10.png')} alt="Group errors by dropdown list with None selected" />

**Step 3:** Click the **More group options** icon (**⋮**) next to the group you want to reprocess.

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-11.png')} alt="More group options icon next to the single group when errors are grouped by None" />

**Step 4:** Select **Reprocess group** (**Reprocess all errors in this group**).

<img src={useBaseUrl('img/error-reporting/error-processing/object-reprocessing/object-reprocessing-12.png')} alt="Reprocess group option in the More group options menu when errors are grouped by None" />

Error Reporting reprocesses all errors in the group.
