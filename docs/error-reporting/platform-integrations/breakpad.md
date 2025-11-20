---
id: breakpad
title: Integrating Breakpad
sidebar_label: Breakpad
description: Integrate Breakpad in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Breakpad is an open source library initially developed by Google for cross-platform C/C++ crash reporting. It is used in popular software such as Google Chrome and by companies such as Valve. For existing users of Breakpad, Backtrace has plug-and-play support.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## Initial Integration

If you have yet to integrate Breakpad into your application, we recommend incorporating [Crashpad](/error-reporting/platform-integrations/crashpad). Crashpad is the successor to Breakpad, with many improvements and up-to-date integration instructions.
You can check [Breakpad's official integration instructions](https://chromium.googlesource.com/breakpad/breakpad/+/master/docs/getting_started_with_breakpad.md#Integration-overview) for more information. If you need any additional assistance, please [contact our Support team](https://support.saucelabs.com/).

## Upload Methods

The rest of this guide assumes that you have Breakpad integrated into your application and can generate minidump files. See [Breakpad's official integration instructions](https://chromium.googlesource.com/breakpad/breakpad/+/master/docs/getting_started_with_breakpad.md#Integration-overview) to get to this point.

Uploading Breakpad crash reports in your application differs across operating systems.

- [Linux](#linux)
- [Mac OS](#mac-os)
- [Windows](#windows)

Have your method to upload generated minidumps? Skip ahead to Upload Settings.

### Linux

On Linux, `google_breakpad::HTTPUpload::SendRequest()` can be used to upload generated minidumps to Backtrace. This method's declaration is in `src/common/linux/http_upload.h`.

Other convenience methods are provided for Linux users of Breakpad, but `HTTPUpload::SendRequest()` is recommended for use with Backtrace.

```
  static bool SendRequest(const string &url,
     const map
```

### Mac OS

We highly recommend using [Crashpad](/error-reporting/platform-integrations/crashpad) for crash reporting on Mac OS.

On Mac OS, `HTTPMultipartUpload()` interface is provided for Objective-C users in:

```objective-c
src/common/mac/HTTPUploadMultipartUpload.m

@interface HTTPMultipartUpload : NSObject {
  @protected
  NSURL *url_;                  // Submission URL (STRONG)
  NSDictionary *parameters_;    // Crash attributes (STRONG)
  NSMutableDictionary *files_;  // Files to send (STRONG)
  NSString *boundary_;          // The boundary string (STRONG)
  NSHTTPURLResponse *response_; // Server reponse (STRONG)
}
```

Otherwise, `google_breakpad::LaunchReporter()` is provided as a mechanism to launch a child process to upload the generated minidump file.

```java
void LaunchReporter(const char *reporter_executable_path,
                    const char *config_file_path);
```

### Windows

On Windows, `google_breakpad::HTTPUpload::SendRequest()` can be used to upload generated minidumps to Backtrace. The method's declaration is in `src/common/windows/http_upload.h`.

```
static bool SendRequest(const wstring &url,
 const map
```

It sends the parameters and files to the specified URL as a multipart POST request. Each key in |files| is the name of the file part of the request (that is, it corresponds to the name=attribute on an ``).

Parameter names must contain only printable ASCII characters and may not have a quote character. Only HTTP(S) URLs are currently supported. Returns true on success. If the request is successful and response_body is non-NULL, the response body will be returned in response_body. If response_code is non-NULL, it will be set to the HTTP response code received (or 0 if the request failed before getting an HTTP response).

## Settings

Once you have a method to upload generated minidumps, you can configure your upload settings to send data to Backtrace.

### URL

Change your call's `url` parameter to point to your server dump submission port (labeled as `http/writer` in the listener configuration pane). Preferably, you should use the SSL-enabled port. If Backtrace is hosting your instance, the default port will be 6098.

The URL parameter for the methods above follows the format:

```bash
<protocol>://<instance_url>:<port>/post?format=minidump&token=<project_token>
```

For example, if Backtrace is hosting your instance at `team.sp.backtrace.io` and your project token is `7c102b2432f6c57eb879db2008820a88031fefc08d8e7faccabc23a917e7db08` then set the `url` argument to:

```
https://team.sp.backtrace.io:6098/post?format=minidump&token=7c102b2432f6c57eb879db2008820a88031fefc08d8e7faccabc23a917e7db08
```

### Attributes

The `parameters` parameter specifies a set of key-value pairs that map directly to Backtrace's flexible key-value attribute system. You can use Backtrace's key-value attribute system in searches, which can be represented visually in graphical form.

Some example attributes are:

- application
- version
- client_id/hostname
- resolution
- operating_system

Parameters must contain only printable ASCII characters and may not contain a quote `"` character. To have your attributes searchable by the Backtrace object store, refer to [the product guide](/error-reporting/project-setup/attributes/).

The methods above all use a multipart POST request. Parameters are pushed as input forms.

### File Path

You can use the `files` parameter to specify a set of names and file paths that the method will upload.

Set the `upload_file_minidump` key to the path of the generated minidump. The path of the generated minidump can be retrieved from `google_breakpad::MinidumpDescriptor` parameter in your `google_breakpad::ExceptionHandler()` callback function.

```
files["upload_file_minidump"] = descriptor.path();
```

### Example

The following code example demonstrates how to upload Breakpad reports from your application on a Linux system.

```
#include <breakpad/client/linux/handler/exception_handler.h>
#include "common/linux/http_upload.h"

static bool
dumpCallback(const google_breakpad::MinidumpDescriptor& descriptor,
    void* context, bool succeeded)
{

    (void) context;
    if (succeeded == true) {
        std::map<string, string> parameters;
        std::map<string, string> files;
        std::string proxy_host;
        std::string proxy_userpasswd;
        std::string url("http://yourcompany.sp.backtrace.io:6097/post?format=minidump&token=57f2126dcef18bb0d2af35ec1d813f3775ee8228d1d886de522b2aedceff8b87");

        // Add any attributes to the parameters map.
        // Note that several attributes are automatically extracted.
        parameters["product_name"] = "foo";
        parameters["version"] = "0.1.0";
        files["upload_file_minidump"] = descriptor.path();

        std::string response, error;
        bool success = HTTPUpload::SendRequest(url,
                                               parameters,
                                               files,
                                               proxy_host,
                                               proxy_userpasswd,
                                               "",
                                               &response,
                                               NULL,
                                               &error);
    }

    return succeeded;
}
```

## Manage Symbols

You must upload symbols to have Backtrace determine the source-code mapping of incoming crashes, including source file and line number. For Backtrace to effectively group and analyze your incoming crashes, you must provide application debug symbols.

To learn more about how to upload and manage symbols with Backtrace, see [Symbolication](/error-reporting/project-setup/symbolication/).
