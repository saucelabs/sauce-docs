---
id: overview
title: Minidump Reporting with Watchdogs for Hung Threads
sidebar_label: Overview
description: Some applications implement a watchdog thread whose job is to perform internal application liveness checking.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Some applications implement a watchdog thread whose job is to perform internal application liveness checking. When these checks fail, the thread triggers a crash report. This has implications for the report's content that may require accounting for.

## Hang Detection

Crash reports normally include an indicator of the culpable thread that triggered the report, usually because they faulted or raised an unhandled exception. Watchdog threads often generate reports when they detect that some part of the application has stopped making forward progress. In such cases, the report needs to explicitly call out the triggering thread.

For reports made using the JSON format, you can adjust the `mainThread` parameter to specify the triggering thread. Refer to the [API documentation](https://api.backtrace.io/) for more information on this. In the case of other report types, such as minidumps, the watchdog can send a signal (for example., SIGABRT) to the affected thread to set the context appropriately.

## Crash Dump Context

When a crash report is generated, it is crucial to ensure that the crash context accurately reflects the context of the guilty thread, rather than the reporting thread or any other context.
