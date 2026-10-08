---
id: configure-release-views
title: Configuring Release Views
sidebar_label: Configuring Release Views
description: Choose the error type, set the version attribute, select the releases to compare, and filter the Releases view.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Use the controls at the top of the **Releases** view to choose which errors to analyze, how releases are identified, and which releases to compare. The charts and comparison table update automatically when you change these settings.

## Choose the Error Type

The **Error type** dropdown filters the metrics on the page to a specific type of error. Each option shows the number of errors reported for that type.

**Step 1:** Click the **Error type** dropdown.

<img src={useBaseUrl('img/error-reporting/project-releases/configure-views/configure-views-1.png')} alt="Error type dropdown at the top of the Releases view" />

**Step 2:** Select **All**, or a single error type such as **Unhandled exception**, **Exception**, **Crash**, **Hang**, or **Low memory**.

The available error types depend on the errors reported by your project, so your options may differ. The number next to each option shows the error count for the selected time frame.

<img src={useBaseUrl('img/error-reporting/project-releases/configure-views/configure-views-2.png')} alt="Error type dropdown expanded with the error count for each type" />

:::tip
Select **Crash** or **Hang** to compare releases by the errors that disrupt users the most.
:::

## Set the Version Attribute

The **Compare releases by** dropdown determines which attribute is used to identify releases. For example, selecting `application.version` groups the data by application version.

**Step 1:** Click the **Compare releases by** dropdown.

<img src={useBaseUrl('img/error-reporting/project-releases/configure-views/configure-views-3.png')} alt="Compare releases by dropdown at the top of the Releases view" />

**Step 2:** Select the attribute that represents a release in your project, such as `application.version`, `application.marketing_version`, or `backtrace.version`.

<img src={useBaseUrl('img/error-reporting/project-releases/configure-views/configure-views-4.png')} alt="Compare releases by dropdown expanded with the available version attributes" />

:::note
To use a custom attribute, make sure it's properly configured and indexed. Attributes that aren't indexed don't appear in the dropdown.
:::

## Select Releases to Compare

The **Comparing releases** dropdown lists the releases available for the selected attribute. Each release includes its total error count.

:::note
You can compare up to four releases at a time.
:::

**Step 1:** Click the **Comparing releases** dropdown.

<img src={useBaseUrl('img/error-reporting/project-releases/configure-views/configure-views-5.png')} alt="Comparing releases dropdown at the top of the Releases view" />

**Step 2:** Select the checkbox next to each release you want to compare. Clear the checkbox to remove a release from the comparison.

The selected releases appear in the dropdown. The number next to each release shows its error count.

<img src={useBaseUrl('img/error-reporting/project-releases/configure-views/configure-views-6.png')} alt="Comparing releases dropdown expanded with a checkbox and error count for each release" />

:::tip
Include at least one earlier release you know was stable, so you have a baseline to compare against.
:::

## Filter the View

The Releases view also responds to the project's selected **Time frame** and the global filter bar. You can combine these filters with the release controls to focus on specific data.

| Goal | How to do it |
| ----- | ----- |
| Monitor a release during its launch window | Set **Time frame** to the most recent couple of days. |
| Compare crashes only | Select **Crash** in the **Error type** dropdown. |
| Exclude development builds | If your release attribute follows a pattern that separates development builds from production builds, filter out non-production builds in the global filter bar. |
