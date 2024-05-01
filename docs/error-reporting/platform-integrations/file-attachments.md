---
id: file-attachments
title: File Attachments
sidebar_label: File Attachments
description: This article will provide an overview of the supported ways to upload file attachments.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace allows the submission of file attachments alongside error and crash reports to provide more context into a fault. There are various methods that can be used depending on how you are integrating your applications into Backtrace. This article will provide an overview of the supported ways to upload file attachments.

## HTTP Submission of Minidumps and File Attachments

Backtrace provides a generic mechanism to accept crash reports and error submissions over HTTP(S). Most minidump generators have a built-in mechanism to upload minidumps and optional attachments to a specified HTTP(S) endpoint, but not all.

If your integration path to Backtrace does not provide a way to upload minidump files and attachments to Backtrace, you can use our generic HTTP submission methods. You have two options:

### Multipart POST

A submission where the test.json attachment is included with the initial crash submission. You will need to modify the following to successfully submit to a project within your account:

1. \{Path_to_your_file\}: Location of file containing crash data to send.
1. \{Path_to_your_attachment\}: Location of file to be attached to the crash.
1. \{universe\}: First part of the URL used to access your Backtrace account.
1. \{error-token\}: An error token for the project you want to submit crash data to.

```curl
curl -v -F "upload_file=@<Path_to_your_file>/test.json" -H "Accept: application/json" -F "attachment_test.json=@<Path_to_your_file>/test.json; type=application/json" "https://<universe>.sp.backtrace.io/api/post?token=<error-token>&format=json"
```

### Attach a File to an Existing Crash Report

For this method, you will need the \_rxid value assigned to a submitted crash report. This value will be returned after a submitting a properly formatted request. The first curl command is the submission of the crash report. The second is the attachment of a file to the first.

1. \{Path_to_your_file\}: Location of file containing crash data to send.
1. \{universe\}: First part of the URL used to access your Backtrace account.
1. \{error-token\}: An error token for the project you want to submit crash data to.

```curl
curl -d <Path_to_your_file> -H "Accept: application/json" "https://<universe>.sp.backtrace.io/api/post?token=<error-token>&format=json"
```

A properly formatted submission should return a response like:

```curl
{"response":"ok","_rxid":"56000000-8be7-5806-0000-000000000000"}
```

To attach a file to this object you will need to copy the \_rxid returned.

1. &object=\<\_rxid\>: Value returned from first HTTP submission.
1. &attachment_name=\<Path_to_your_attachment\>: Location of file to be attached to the crash.

```curl
curl -v --data-binary "upload_file=@<your_file_path>/test.json" -H "Expect: gzip" -H "Content-Type:application/json" "https://<univers>.sp.backtrace.io/api/post?token=<error-token>&format=json&object=<_rxid>&attachment_name=\<Path_to_your_attachment\>"
```

A properly formatted upload submission should return a response like:

```curl
{"response":"ok","_rxid":"ce000000-0000-0000-0000-000000000000","attachment_name": "test.json","attachment_id": "28","object":"ce"}
```

The response should tell you that the file was attached to the specified object within your Backtrace project. You will still get the 200/ok response, but the \_rxid is going to look a bit different. As there was not a crash submitted, it will not send a new unique id. This time it is actually sending the id attribute/Error identifier within the debug view used to identify the specific crash report.

## Breakpad

Breakpad is an open source library initially developed by Google for cross platform C/C++ crash reporting. It is a popular choice for Windows, Mac and Linux environments, including servers, desktop apps, and embedded devices. For customers who use Breakpad with Backtrace, you can leverage the library's `files` parameter to specify the set of file paths to be uploaded.

```cpp
files["upload_file_minidump"] = descriptor.path();
files["attachment_log"] = "/var/log/myApp.log";
files["attachment_cpuinfo"] = "/proc/cpuinfo";
```

See the [Breakpad Integration Guide](/error-reporting/platform-integrations/breakpad/) for more details on how to use the files parameter to upload attachments with your crash reports.

## Crashpad

Crashpad is another open source library initially developed by Google as a successor to the Breakpad library. Backtrace has built and released a set of binaries of Crashpad for Windows (64 and 32 bit) that include an ability to upload file attachments. Check out http://get.backtrace.io/crashpad/builds/ to download the binaries for your OS.

To provide you with the ability to upload files, we have implemented a new handler to make file attachments just as simple as setting up any other piece of metadata to come alongside the crash.

Here’s what it looks like:

```cpp
bool StartHandlerForBacktrace(
    const base::FilePath& handler,
    const base::FilePath& database,
    const base::FilePath& metrics_dir,
    const std::string& url,
    const std::map
```

This new handler is very similar to StartHandler, with the addition of the file_attachments parameter. file_attachments is a map of attachment name ⟶ path, allowing convenient inclusion of file attachments (i.e. the log file) with the crash dump.

More details can be found in the [Crashpad Integration Guide](/error-reporting/platform-integrations/crashpad/).

As we move forward, Backtrace plans to work with the upstream Crashpad team to implement file attachment support in the master branch.

## C# and Unity

Backtrace supports crash and exception reporting from applications written in C# using our C# reporting library or Unity-Plugin. Using our [BacktraceReport](/error-reporting/platform-integrations/unity/configuration/#backtracereport) object, developers can specify a list of `attachmentPaths` to submit alongside the crash or exception report.

```csharp
var report = new BacktraceReport(
  exception: exception,
  attributes: new Dictionary
```
