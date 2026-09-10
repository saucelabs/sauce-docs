---
id: report-delivery
title: Cocoa Crash Report Delivery and Recovery
sidebar_label: Cocoa Report Delivery
description: Understand pending native crashes, retries, local storage, and startup diagnostics in Backtrace Cocoa.
---

Backtrace Cocoa saves pending native crashes before removing their original crash files. This guide explains how initial submission, retries, storage limits, and recovery work for Swift and Objective-C applications on iOS, macOS, and tvOS.

## What Happens After a Native Crash

A fatal crash is captured locally. Initialize Backtrace again on the next launch so it can process that pending report:

1. Backtrace saves the crash payload, attributes, and copies of available attachments in its local repository.
2. After that save succeeds, Backtrace purges the original PLCrashReporter source. A report is not eligible for delivery until this purge succeeds.
3. Backtrace submits the saved report, applying the configured delegate callbacks and report rate limit.
4. The result determines whether the report is retained for retry or marked terminal and cleaned up.

If saving or purging is interrupted, the next initialization can resume processing the pending report.

A missing or unreadable optional attachment does not necessarily prevent delivery of the crash payload. Backtrace can omit unavailable metadata or attachments and record diagnostics. Files successfully copied into the repository are independent of later changes to the application's original attachment files.

:::caution Local purge is not proof of upload

The original `live_report.plcrash` can disappear because Backtrace has saved it locally, even while the network is unavailable. Confirm receipt in your Backtrace project and check symbolication separately. Local duplicate suppression is not an exactly-once guarantee: termination after server acceptance but before local finalization can cause the same report identifier to be submitted again.

:::

## Initial Submission and Retry Policy

Each newly saved native crash receives an initial submission opportunity even when `BacktraceDatabaseSettings.retryBehaviour` is `.none`. This does not enable ordinary retries:

- `.interval` enables ordinary repository replay and periodic retries, subject to retry exhaustion, capacity, and network availability.
- `.none` disables ordinary replay and retry timers. An initial native attempt that fails offline or receives a retryable server response can remain stored without another automatic attempt while this policy remains selected.

Initial native reports are considered oldest first, ahead of an existing retry backlog. `retryOrder` controls ordinary retries, not this initial ordering.

### Local Rate Limits Are Not HTTP 429 Responses

`reportsPerMin` controls the client's shared report admission limit; `0` means unlimited. A local limit rejection occurs before request construction or network transport. It does not consume an initial opportunity or increment a stored report's retry count. An initial report stays eligible, and a deferred admission check can run when the local rate window permits, including with `.none`.

An HTTP `429` response is different: a request reached the server and received a retryable rejection. For an initial native report, that consumes its initial attempt; another attempt requires ordinary retries to be enabled.

### Submission Outcomes

| Outcome                                                                                                  | Local handling                                                                             |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| HTTP `2xx`                                                                                               | Mark terminal and clean up the saved report.                                               |
| Local client rate limit                                                                                  | Preserve initial eligibility or ordinary retry state without incrementing the retry count. |
| Retryable transport failure, such as a connection failure                                                | Retain the report for ordinary retry.                                                      |
| HTTP `408`, `425`, `429`, or `5xx`                                                                       | Retain the report for ordinary retry.                                                      |
| Invalid, malformed, or unsupported submission URL; App Transport Security rejects an insecure connection | Terminal; do not repeatedly retry the same configuration failure.                          |
| Other non-success HTTP responses                                                                         | Terminal; exclude the report from replay and clean it up.                                  |

Live reports and OOM reports also use this submission policy. Retention does not guarantee delivery: ordinary retry records remain subject to retry exhaustion and capacity eviction.

`retryInterval` controls the periodic retry interval in seconds. `retryLimit` controls when stored retry failures are exhausted; it is not a strict count of all network attempts. Use `.none`, not a zero `retryLimit`, to disable ordinary retries.

## Storage Limits

`maxRecordCount` and `maxDatabaseSize` are local maintenance targets. A value of `0` disables the corresponding limit. Capacity maintenance does not evict:

- Native reports whose original crash files have not yet been safely removed.
- Native reports awaiting their first admitted submission attempt.
- Reports being submitted.

Terminal records and then ordinary retry records are eligible for eviction. Protected records can temporarily keep the repository above either target.

`maxDatabaseSize` is measured in MB against the physical SQLite database file, not all SDK disk usage. It does not impose a combined quota on attachments, metadata, or SQLite journal files. SQLite can retain allocated pages after deletion, so removing reports does not necessarily reduce the file size immediately.

Do not delete the database or its companion files as an upgrade or troubleshooting step. Preserve diagnostic files when investigating storage failures.

## Startup Diagnostics

Install logging destinations before constructing the client to capture repository initialization, model lookup, and pending-report processing. Setting them only after initialization misses failures that occur during construction.

```swift
import Foundation
import Backtrace

func initializeBacktrace(submissionURL: URL) throws {
    let credentials = BacktraceCredentials(submissionUrl: submissionURL)
    let configuration = BacktraceClientConfiguration(credentials: credentials)
    configuration.loggingDestinations = [BacktraceConsoleDestination(level: .debug)]
    BacktraceClient.shared = try BacktraceClient(configuration: configuration)
}
```

Alternatively, call `BacktraceLogger.setDestinations(_:)` before initialization.
A `nil` `configuration.loggingDestinations` preserves existing logger destinations; an empty collection explicitly disables them. Reduce diagnostic logging after troubleshooting, and sanitize logs before sharing them. Do not include submission tokens, private attachment contents, or unredacted URLs.

If you need delegate callbacks for the initial pending report or startup replay, assign your delegate to `configuration.delegate` **before** creating the client. This property is weak: retain the delegate in your application. Assigning `BacktraceClient.shared?.delegate` after initialization can miss startup events.

For initialization failures, missing pending reports, or symbolication problems on macOS, see [macOS Troubleshooting](/error-reporting/platform-integrations/macos/troubleshooting/).
