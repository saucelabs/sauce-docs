---
id: invariants
title: Invariants
sidebar_label: Invariants
description: adasd
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Invariants are rules used to determine whether the fingerprint should be reopened or unmuted after receiving an error. Multiple invariant rules can be assigned to a single fingerprint.

These rules are used in the context of `resolving until...` and `muting until...`, which means the fingerprint will be resolved/muted until the following rules match.

## Schema

Invariants are stored as an array of JSON objects. Each entry in the array is treated as an OR alternative, meaning that any invariant in the array may match, and the fingerprint will be reopened.

### Version Invariants

Version invariants use a semantic version attribute and check if the attribute matches a rule.

#### `version_gt`

Checks if the `field` version is greater than `version`. For example, the `application.version` attribute value has to be greater than `1.0.2` for this invariant to match:

```json
[
  {
    "type": "version_gt",
    "field": "application.version",
    "version": "1.0.2"
  }
]
```

`Resolve until seen again in application.version greater than 1.0.2` in console will set invariants to this example.

#### `version_ge`

Checks if the `field` version is greater or equal to `version`. For example, the `application.version` attribute value has to be greater or equal to `1.0.2` for this invariant to match:

```json
[
  {
    "type": "version_ge",
    "field": "application.version",
    "version": "1.0.2"
  }
]
```

### Timestamp Invariants

Timestamp invariants check the `timestamp` attribute of the error. Unix epoch time is used here, which represents the number of seconds elapsed since January 1st, 1970, 12:00:00 AM GMT.

#### `timestamp_gt`

Checks if the `timestamp` attribute of the error is greater than the `timestamp` field. For example, the `timestamp` attribute has to be greater than January 1st, 2024, 12:00:00 AM GMT:

```json
[
  {
    "type": "timestamp_gt",
    "timestamp": 1704067200
  }
]
```

- `Resolve until seen again` in console will set the timestamp to `1`,
- `Resolve until seen again after 30 minutes` in console will set the timestamp to `current time + 1600`.

### Regular Expression Invariants

Regular expression invariants use PCRE to match regular expressions on attributes.

#### `regular_expression`

Checks if the `field` attribute matches the `pattern` regular expression. For example, the `uname.sysname` attribute has to match `^linux$`:

```json
[
  {
    "type": "regular_expression",
    "field": "uname.sysname",
    "pattern": "^linux$"
  }
]
```

Ensure to escape regex tokens containing a backslash with another backslash. For example, `\n` should be written as `\\n`.

### Logic Invariants

Logic invariants join invariants to match one or all.

#### `and`

Matches all invariants in `children`. For example, both `timestamp_gt` and `version_gt` must match:

```json
[
  {
    "type": "and",
    "children": [
      {
        "type": "timestamp_gt",
        "timestamp": 1704067200
      },
      {
        "type": "version_gt",
        "field": "application.version",
        "version": "1.0.2"
      }
    ]
  }
]
```

:::note

Nested `and` are not supported.

:::

#### `or`

To match at least one invariant, put them in the root array. For example, `timestamp_gt` or `version_gt` must match:

```json
[
  {
    "type": "timestamp_gt",
    "timestamp": 1704067200
  },
  {
    "type": "version_gt",
    "field": "application.version",
    "version": "1.0.2"
  }
]
```

## Attributes

There are several attributes in the `issues` table that are used with invariants.

- `invariant_reopen_count`: how many times the fingerprint was opened due to matching invariant rules. This will increment by 1 every time the fingerprint opens due to matching invariant rules.
- `invariant_reopen_last_time`: the time on which the fingerprint was last opened due to matching invariant rules.
- `invariant_last_violated`: which invariant was matched when the fingerprint was last opened.
- `invariants`: all invariants currently assigned to this fingerprint.

## More Information

For a more detailed description of the invariant rules used in mute/resolve until behavior, check the following pages:

- [Resolved Until Behavior](/error-reporting/workflow-integrations/issue-tracking/jira/#resolved-until-behavior).
- [Reopen Criteria - Mute or Resolve Until](/error-reporting/web-console/triage/#reopen-criteria---mute-or-resolve-until).
