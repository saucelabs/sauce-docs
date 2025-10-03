---
id: submission-buckets
title: Submission Buckets
sidebar_label: Submission Buckets
description: Submission buckets allow for advanced control of error data submission and attachments.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note Enterprise feature only

This is an enterprise feature. Contact our [Support team](https://support.saucelabs.com/) to request that it be enabled for your account.

:::

Submission buckets provide advanced control over error data submission and attachments. They allow for conditional logic on the submission path based on previously seen error data attributes. For example, you may have large assets such as videos, screenshots, log files, or full dumps that are useful for root cause investigation. However, you may not want your users to incur the cost of generating and sending this data for every crash. Submission buckets allow you to control this behavior based on specific attribute combinations. For instance, you may want these assets to be generated and attached only once for each crash.

Submission buckets are configured on `api_token` objects. Only one submission bucket can be defined for each token. The `api_token` must also have synchronous POST and error POST capabilities (`sync:post` and `error:post` respectively).

## Step-By-Step

### Step 1: Creating a Token

Create a token with the `sync:post` and `error:post` capabilities. Update the metadata field to specify a submission bucket called `cts`. The submission bucket will provide counts for unique combinations of issue identifiers and operating systems. In this example, we want the crash reporting client to submit an attachment once for every unique combination of the `fingerprint` and `uname.sysname` attribute values. Additionally, the submission bucket is configured to set the `has_advanced_log` attribute to `1`` for all requests (attachment or error upload) that reference the submission bucket. Use the morgue command line tool to create this token.

```bash
$ morgue token create --project=cts --capability=error:post --capability=sync:post --metadata='{"buckets":{"cts":{"attributes":["fingerprint","uname.sysname"], "set": { "has_advanced_log" : "1" }}}}'

```

### Step 2: Submitting an Object Using Synchronous POST

To submit a dump, utilize the token you generated earlier, which should have the capabilities `sync:post` and `error:post` specified. Include the `mod_sync=1` parameter in your submission to inform the submission layer that you anticipate a synchronous response.

```shell
$ curl -s --data-binary @datfc8.dmp "http://localhost.sp.backtrace.io:8081/api/post?token=&_mod_sync=1?format=dump
```

This error object pertains to an application called `packrat`. The fingerprint value is A, and the `uname.sysname` value is Linux.

If the request is successful, the response will resemble the following:

```json
{
    "response": "ok",
    "_rxid": "06000000-e660-9101-0000-000000000000",
    "object": "7",
    "fingerprint": "6238c76d08fa71d23cfc3ef6fcc591b795a2f3369962c7b8991aab058baa8560",
    "unique": false,
    "buckets": {
        "cts": {
            "count": 0,
            "token": "8a78f6f292ea68d0e49c28ca11675ec422f0aa93c186046472c2daddc3efebe0"
        }
    }
}
```

In this response, the value of `buckets.cts.count` is 0, indicating that no other objects or additional assets were submitted for the given combination of fingerprint and `uname.sysname` attributes.

For our example, we want to ensure that advanced diagnostic data is included only once for each unique combination. To achieve this, include the header `X-Submission-Bucket` with the value of `buckets.cts.token` mentioned above. This header is used when submitting attachments or errors.

### Step 3: Submitting an Attachment Using the Submission Bucket Token

The submission bucket token is valid for a limited time starting from the submission moment, with the default expiration set to 1 minute. It can be utilized in any request for error uploads or attachment uploads. When the submission bucket token is used, a count is incremented for the unique combination of attribute values in the error object. In the case of error uploads, the combination of attribute values of the errors is used. In the case of attachment uploads, the combination of attribute values of the object with which the attachment is associated is used.

```bash
$ curl -H "X-Submission-Bucket: 8a78f6f292ea68d0e49c28ca11675ec422f0aa93c186046472c2daddc3efebe0" --data-binary @configure "http://localhost.sp.backtrace.io:8081/api/post?token=&object=4&attachment_name=advanced_logs.txt
```

The crash reporting client makes the above request since `buckets.cts.count` is 0. Since a valid `X-Submission-Bucket` value is provided, the count for the combination of attribute values of `object 4`, in this case, a fingerprint of `A` and a `uname.sysname` value of `Linux`, is incremented from 0 to 1.

On the next submission of a dump with the same attribute values for `fingerprint` and `uname.sysname`, the count will be incremented accordingly. The crash submission client can detect if advanced diagnostic data was already submitted for that combination of `fingerprint` and `uname.sysnam`, and it can avoid generating unnecessary advanced diagnostic data for attachment.

```json
{
    "response": "ok",
    "_rxid": "06000000-e663-9391-0000-000000000000",
    "object": "7",
    "fingerprint": "6238c76d08fa71d23cfc3ef6fcc591b795a2f3369962c7b8991aab058baa8560",
    "unique": false,
    "buckets": {
        "cts": {
            "count": 1,
            "token": "8a78f6f292ea68d0e49c28ca11675ec422f0aa93c186046472c2daddc3efebe0"
        }
    }
}
```
