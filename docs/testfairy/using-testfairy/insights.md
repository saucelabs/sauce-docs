---
id: insights
title: Insights
sidebar_label: Insights
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **INSIGHTS** tab displays information about recorded crashes and sessions.

## Preset Filters

The **Preset Segments** column contains three preset filters:

- Crashes: All crashes in the last month
- Slow Session: All slow sessions in the last month
- Received Feedback: All sessions with feedback in the last month

## General Filters

To filter the list using the following filters:
<img src={useBaseUrl('/img/testfairy/using-tf/insights-filter-1.png')} alt="Filters"/>

You can see all apps in your account or filter only one of them:
<img src={useBaseUrl('/img/testfairy/using-tf/insights-filter-app-name.png')} alt="filter by app name"/>

You can see all versions of the app you just filtered or a specific version.
<img src={useBaseUrl('/img/testfairy/using-tf/insights-filter-app-version.png')} alt="filter by version"/>

You can also filter the timeframe of the list you want.
<img src={useBaseUrl('/img/testfairy/using-tf/insights-time-frame.png')} alt="filter by timeframe"/>

## Attribute Filters

In addition to general filters, you can also filter by **session attributes**.
<img src={useBaseUrl('/img/testfairy/using-tf/attribute-filter.png')} alt="filter by session attribute"/>

The default attributes are the primary attribute types (User, Session, Location, Device, etc.).

## Custom Attributes Filters

If you add [custom attributes](https://docs.testfairy.com/SDK/Session_Attributes.html) to your app's session, you see them here and be able to filter according to their values:
<img src={useBaseUrl('/img/testfairy/using-tf/custome-attributes.png')} alt="filter by custom attribute"/>

This potent tool can help you identify specific sessions and filter them out of the many sessions in your app.

:::tip
When you define values for this field, do not use characters other than text or numbers (a-z A-Z 0-9), such as `/`, `"`, or `-`, as they are not searchable in this field. If you do use these characters, you can search only for the parts of the text without them (for example, in `{attr1="dada-1270"}` the `-` is not searchable, so you can only search for `dada` or `1270`.
:::

After you select an attribute, you can add a logical expression and enter a value in the text field.
<img src={useBaseUrl('/img/testfairy/using-tf/atribute-filter-logical.png')} alt="logica expression"/>

You can see the result in the table.

You can add another attribute filter using a plus sign or save a filter by clicking the **Save Segment**. After entering the name, you can see the segment in the **Custom Segments** list.
<img src={useBaseUrl('/img/testfairy/using-tf/filter-name.png')} alt="save segment"/>
