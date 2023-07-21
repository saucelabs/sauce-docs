---
id: data-retention
title: Data Retention
sidebar_label: Data Retention
description: Describes Backtrace's data retention policies.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace offers three different types of data retention policies:

- Dump compression
- Dump retention
- Metadata retention

Dumps refer to the crash data files themselves (minidumps, snapshots, JSON objects) and any attachments.

Metadata refers to the characteristics of the data, such as number of crashes, timestamps, and attributes.

When a retention policy compresses dumps, you will still be able to view, query, and aggregate on the metadata. You will still be able to view the dump in the debugger view and download the original object / any attachments. The ability to reprocess those dumps (to apply symbols or index attributes) is removed.

When a retention policy removes the dumps but leaves the metadata (also known as a "physical only" policy), you will still be able to view, query, and aggregate on the metadata for the removed crashes. The abilities to view the dump in the debugger view or download the original object and any attachments are removed.

## Retention Policies

Enterprise customers have flexible retention policies. Administrators can also configure dump and metadata retention policies that will allow data to be removed after a defined period of time.

<img src={useBaseUrl('img/error-reporting/project-settings/retention-policies.png')} alt="" />
<img src={useBaseUrl('img/error-reporting/project-settings/add-new-retention-rule.png')} alt="" />
