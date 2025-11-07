---
id: minidump
title: Configuring Backtrace for Minidump
sidebar_label: Minidump
description: Configure Backtrace for Minidump.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The minidump format is the standard crash format for Windows. With the help of open source libraries such as [Breakpad](https://chromium.googlesource.com/breakpad/breakpad/) or [Crashpad](https://chromium.googlesource.com/crashpad/crashpad/), it is possible to generate crash reports in the minidump format for Mac OS, Android, and iOS.

This article indexes the mechanisms to integrate minidump submission into your Backtrace instance.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## Overview

Some applications implement a watchdog thread whose job is to perform internal application liveness checking. When these checks fail, the thread triggers a crash report. This has implications for the report's content that may require accounting for.

### Hang Detection

Crash reports normally include an indicator of the culpable thread that triggered the report, usually because they faulted or raised an unhandled exception. Watchdog threads often generate reports when they detect that some part of the application has stopped making forward progress. In such cases, the report needs to explicitly call out the triggering thread.

For reports made using the JSON format, you can adjust the `mainThread` parameter to specify the triggering thread. Refer to the [API documentation](https://docs.saucelabs.com/dev/api/error-reporting/) for more information on this. In the case of other report types, such as minidumps, the watchdog can send a signal (for example., SIGABRT) to the affected thread to set the context appropriately.

### Crash Dump Context

When a crash report is generated, it is crucial to ensure that the crash context accurately reflects the context of the guilty thread, rather than the reporting thread or any other context.

## Breakpad

Firefox and a wide variety of desktop applications use the popular open source crash reporting framework. See the [Integration Guide](/error-reporting/platform-integrations/breakpad) for more information.

## Crashpad

The popular open source crash reporting framework used by Chrome, Slack, and more. It is the successor to Breakpad. See the [Integration Guide](/error-reporting/platform-integrations/crashpad) for more information.

## Electron

This popular framework allows you to build cross-platform desktop applications with JavaScript and HTML. Discord, Visual Studio, Slack, and more use it. See the [Integration Guide](/error-reporting/language-integrations/electron) for more information.

## HTTP

Submit crash dumps directly over HTTP and HTTPS. For more information see the [HTTP Submission](/error-reporting/platform-integrations/http-submission).
