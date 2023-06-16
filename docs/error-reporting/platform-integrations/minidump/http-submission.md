---
id: http-submission
title: HTTP Submission for Minidump
sidebar_label: HTTP Submission
description: Submit crash dumps directly over HTTP.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

You may have a pre-existing crash reporting facility or generate dump files using MiniDumpWriteDump on Windows; this guide shows you how to submit these over HTTP or HTTPS. If you use a supported crash reporting library, please use their preferred submission mechanisms.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.
   :::

## Ensure submission token exists

First step is to ensure you have a submission token created. Learn more about submission tokens here.

## Note on curl usage

For large files, include the header flag -H "Expect:" to override some default curl behavior which can cause issues when uploading to Backtrace. The examples below include this flag.

## Submit a dump file

For this example, let us assume that our submission token is abcdef0123456789 . An HTTP POST is used to submit a dump file. See below for an example curl invocation.

curl -v --data-binary @example_minidump.dmp -H "Expect:" "https://submit.backtrace.io/<universeName>/<errorSubmissionToken>/minidump"
This can be achieved through HTTP multipart as well:

curl -v -F "upload_file_minidump=@example_minidump.dmp" -H "Expect:" "https://submit.backtrace.io/<universeName>/<errorSubmissionToken>/minidump"

## Attaching Attributes

User-defined attributes can also be passed as:

query string parameter
multipart form data parameter
You can mix both (some in the query string, some in the multipart form data).

### Query string parameter

For example, let's say that we wanted to submit a minidump and set the version attribute associated with it to 1.0:

curl -v -F "upload_file_minidump=@example_minidump.dmp" -H "Expect:" "https://submit.backtrace.io/<universeName>/<errorSubmissionToken>/minidump&version=1.0"
See the end of the URL.

### Multipart form data parameter

For example, let's say that we wanted to submit a minidump and set the version attribute associated with it to 1.0.

curl -v -F "version=1.0" -F "upload_file_minidump=@example_minidump.dmp" -H "Expect:" "https://submit.backtrace.io/<universeName>/<errorSubmissionToken>/minidump"
For more information on attributes, see here.

## Attaching Files

### Multipart POST

A submission where the test.json attachment is included with the initial crash submission. You will need to modify the following to successfully submit to a project within your account:

<Path_to_your_file> : Location of file containing crash data to send
<Path_to_your_attachment> : Location of file to be attached to the crash
<universe> : First part of the URL used to access your Backtrace account
<error-token> : An error token for the project you want to submit crash data to
curl -v -F "upload_file=@<Path_to_your_file>/example_minidump.dmp" -H "Expect:" -F "attachment_test.json=@<Path_to_your_file>/test.json; type=application/json" "<backtrace submission url>"

### Attach a file to an existing crash report

For this method you will need the \_rxid value assigned to a submitted crash report. This value will be returned after a submitting a properly formatted request. The first curl command is the submission of the crash report. The second is the attachment of a file to the first.

curl -d <Path_to_your_file>/example_minidump.dmp -H "Expect:" "<backtrace submission url>"
<Path_to_your_file> : Location of file containing crash data to send
<universe> : First part of the URL used to access your Backtrace account
<error-token> : An error token for the project you want to submit crash data to
A properly formatted crash report submission should return a response like:

{"response":"ok","\_rxid":"56000000-8be7-5806-0000-000000000000"}
To attach a file to this object you will need to copy the \_rxid returned.

curl -v --data-binary "upload_file=@<your_file_path>/test.json" -H "Expect:" -H "Content-Type:application/json" "<backtrace submission url>?object=<\_rxid>&attachment_name=<Path_to_your_attachment>"
&object=<\_rxid> : value returned from first http submission
&attachment_name=<Path_to_your_attachment> : Location of file to be attached to the crash
A properly formatted upload submission should return a response like:

{"response":"ok","\_rxid":"ce000000-0000-0000-0000-000000000000","attachment_name": "test.json","attachment_id": "28","object":"ce"}
The response should tell you that the file was attached to the specified object within your Backtrace project. You will still get the 200/ok response but the \_rxid is going to look a bit different. As there was not a crash submitted it will not send a new unique id. This time it is actually sending the id attribute/Error identifier within the debug view used to identify the specific crash report.

## Listener layer

It is also possible to submit directly to the listener on your instance. First step is to ensure that a listener exists for submitting crash data. Look for listeners with the http/writerlabel. Listener settings are found under the Configuration Organization menu item.

In the above example, if the server is hosted at testing.company.com, then we are able to submit dump files to either http://testing.company.com:6097/post?format=minidump&token=<abcdef0123456789> or https://testing.company.com:6098/post?format=minidump&token=<abcdef0123456789>. These are the first two entries in the above screenshot, with the http/writer labels.
