---
id: error-processing-modifiers
title: Error Processing Modifiers
sidebar_label: Error Processing Modifiers
description: Modifier attributes supported by Backtrace.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace supports the following modifier attributes:

- `_mod_faulting_tid`: This attribute can be set on the object submission of minidump objects. If set, it specifies the thread to use for deduplication. The value is the integer identifier of a thread. Typically, this is used to incorporate watchdog systems for detecting hung threads.

- `_mod_sync`: This attribute can be set on the submission of any error object. It specifies that the object processor in Backtrace must respond only after the object has been evaluated and indexed. This may impact response latencies but allows for more comprehensive responses and advanced workflows, such as leveraging submission buckets. It is also valuable during debugging.

- `_mod_log`: This attribute can be set on the submission of any error object. Enabling it includes a detailed trace buffer of object processing in the response. This may impact response latencies but is valuable for debugging purposes.

The following modifier is considered advanced (consult Support before enabling):

- `_mod_fingerprint`: This attribute can be set on submission. Its value must be `sha256`. If set, it bypasses the default fingerprinting algorithms and creates a fingerprint based on the SHA256 for a given crash.
