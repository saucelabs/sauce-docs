---
id: plcrash-reporter
title: PLCrashReporter
sidebar_label: PLCrashReporter
description: Integrate and send PLCrashReporter to Backtrace.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

While Backtrace fully supports the base PLCrashReporter library, we also provide a custom-built backtrace-cococa library to simplify the integration and submission of errors to Backtrace. Read more in the [iOS Integration Guide](/error-reporting/platform-integrations/ios/setup/).

PLCrashReporter is an open source project maintained by Microsoft (previously, Plausible Labs). It is MIT licensed with some libraries such as Protocol Buffers covered under the Apache License. It can be integrated into Objective-C and Swift applications to retrieve crash information on MacOS and iOS platforms. The source code is available on the [GitHub](https://github.com/plausiblelabs/plcrashreporter) mirror.

After integrating PLCrashReporter into your application, it can generate crash reports. These crash reports can be uploaded to Backtrace, which provides a central location for developers to triage, prioritize and debug crashes in production and development environments.

This article discusses how to integrate and send PLCrashReports to Backtrace.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## Integration

The integration of PLCrashReporter is straightforward. Code examples are provided on the [PLCrashReporter website](https://plcrashreporter.org/documentation/api/v1.2/example_usage_iphone.html).

In essence, the following snippet in Objective-C enables PLCrashReporter for the application:

```objective-c
PLCrashReporterConfig *config = [PLCrashReporterConfig defaultConfiguration];
PLCrashReporter *reporter = [[PLCrashReporter alloc] initWithConfiguration: config];
[reporter enableCrashReporter];
```

To compile the code, you need to link to the CrashReporter framework.

The above is a minimal example. For production use, it is recommended to include error checking, for example, by using `enableCrashReporterAndReturnError`.

PLCrashReports will be stored in `~/Library/Caches/com.plausiblelabs.crashreporter.data/`.

## Managing PLCrashReports

PLCrashReporter helps manage existing crash reports. This allows an application developer to check for pending crash reports as soon as the application starts up to take appropriate actions.

To do so, the PLCrashReporter class provides instance methods to check for pending crash reports (`hasPendingCrashReport`) and `loadPendingCrashReportData`. The provided code snippet allows checking for pending crash reports on startup and calling a function, `submit`, to send the data to the Backtrace servers.

```objective-c
if ([reporter hasPendingCrashReport]) {
 NSdata *crash = [reporter loadPendingCrashReportData];
 upload(crash);
}
```

## Upload Methods

`PLCrashReporter` doesn't support any upload methods natively. The API provides callbacks to retrieve prior crashes and allows developers to upload them manually. Using the Foundation Classes, this might look as follows:

```objective-c
static void upload(NSData *crash) {
 NSURL *url = [NSURL URLWithString:@"https://instance.sp.backtrace.io:6098/post?format=plcrash&token=xxxxxxxxxxxxxxxxxxxxxxx"];
 NSMutableURLRequest *req = [NSMutableURLRequest requestWithURL: url];
 NSHTTPURLResponse *res = nil;
 NSError *err = nil;
 [req setHTTPMethod: @"POST"];
 [req setHTTPBody: crash];
 [NSURLConnection sendSynchronousRequest:req returningResponse:&res error:&err];
}
```

After a successful transmission, you can purge the pending download:

```objective-c
[reporter purgePendingCrashReport];
```

You can check again for pending crash reports and upload any other queued crashes from your system.

## System Level Attributes

When you open the Crash Report in Backtrace's Web Debugger, you'll notice that in addition to the Callstack, system-level attributes such as process uptime, memory usage, CPU, and OS details have been extracted and are available for you to review.

## Adding Custom Attributes

In addition to the system-level attributes, you can associate custom user-defined attributes, such as graphic card driver, application mode, or version information, with the PLCrashReport. These instance-level attributes provide contextual data points to support investigating the root cause.

Custom attributes have to be created in the Backtrace project's settings. See the [Attributes article](/error-reporting/project-setup/attributes/) for more information on configuring Backtrace to index those incoming attributes appropriately. Once indexed, they will be available for filter, group, and aggregate operations in the web and morgue tool.

The submission process can attach the key-value attributes to the URL during submission. For example, in this case, a dictionary value `my_custom_attribute` with a value of `sample_string`:

```
https://instance.sp.backtrace.io:6098/post?format=plcrash&token=xxxxxxx&my_custom_attribute=sample_string
```

## Uploading File Attachments

Backtrace also accepts generic file attachments, such as log or configuration files, to be associated with a crash. This additional contextual information can be invaluable during debugging as engineers look to see what happened recently and what additional configurations might be set. See the [File Attachments](/error-reporting/platform-integrations/file-attachments/) article for more details on submitting an attachment using HTTP submission.

## Manage Symbols

While compiling a macOS application, the compiler generates a directory with dSYM information for the project. To allow Backtrace to symbolicate the backtrace, it is necessary to upload the dSYM information. The most straightforward approach is to create an archive in tar or zip format of the dSYM directory and upload it via the morgue command-line tool or use the web interface functionality in the project's settings.

It is possible to generate the necessary sym files by using breakpad's `dump_syms(_mac)` tools. They can be uploaded by the usual means as well.

For more information on how to do this, refer to the [symbolication guide](/error-reporting/project-setup/symbolication/).
