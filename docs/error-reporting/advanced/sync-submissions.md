---
id: sync-submissions
title: Performing Synchronous Submissions
sidebar_label: Synchronous Submissions
description: Perform followup operations based on the result of a submission.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

For performance reasons, error submissions are normally handled asynchronously from the HTTP client on the object store server. However, there are cases where it can be valuable to perform follow-up operations based on the result of a submission or directly receive errors found during submission processing. This article demonstrates how to use the synchronous submission facility.

To perform synchronous submissions, the submission token must have the `sync:post` capability in addition to `error:post` and/or `symbol:post`. You can create a token with these capabilities under **Project settings > API Token** or via [Morgue](https://github.com/backtrace-labs/backtrace-morgue/blob/master/README.md).

Next, the request must use the token with the `_mod_sync` query parameter. The value of this parameter is ignored.

An example request using curl looks like this:

```shell
curl --data-binary @foo.dmp 'https://example.sp.backtrace.io:6098/api/post?token=ffffff&format=minidump&_mod_sync=true'
```

This method can be used with any type of submission, whether multipart or not.
