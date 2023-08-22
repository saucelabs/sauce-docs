---
id: object-reprocessing
title: Object Reprocessing
sidebar_label: Object Reprocessing
description: Backtrace provides system administrators with the ability to Reprocess Objects they have stored in Backtrace.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace provides system administrators with the ability to Reprocess Objects they have stored in Backtrace. This is useful in cases where

- They need to regenerate callstacks after debug symbols are uploaded.
- They need to index newly defined attributes.

Note that the grouping of errors may change after reprocessing.

## How To Reprocess Objects

There are a couple of ways for system administrators to reprocess objects. In this guide, we will discuss the capabilities available via the Web Console. Admins can also use the [morgue command line tool](/error-reporting/advanced/morgue/) to reprocess objects.

### Reprocess by Time

Project Settings allows admins to reprocess all objects over a time span. You can select a time span in **Project Settings > Object Reprocessing**.

<img src={useBaseUrl('img/error-reporting/project-settings/reprocess-by-time.png')} alt="" />

### Reprocess by Fingerprint

In the Triage tool, admins can choose to reprocess all errors for a given fingerprint.

### Reprocess by Query

The Explore tool gives admins a chance to query and group the objects they want to reprocess. In the Aggregate view, Admins can Group By whichever field they want and use the group actions dropdown to reprocess, If the admin sets "Group By" to None, then they can easily reprocess all object in the query. If the admin sets "Group By" to another attribute, they can reprocess all objects that are grouped under the selected value.

<img src={useBaseUrl('img/error-reporting/project-settings/explore-reprocess.png')} alt="" />

### Reprocess Individual Errors

In the List view, admins can reprocess objects from the object ID column.

In the Debugger view, admins can reprocess an object from the menu on the right.

<img src={useBaseUrl('img/error-reporting/project-settings/debug-reprocess.webp')} alt="" />
