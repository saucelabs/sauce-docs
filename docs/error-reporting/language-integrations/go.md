---
id: go
title: Go Integration Guide
sidebar_label: Go
description: Use Go in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- A Backtrace license; contact support@backtrace.io if you have not yet received one.
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## `backtrace-go`

`backtrace-go` is the Backtrace error reporting SDK for Go. It captures errors, messages, and panics — with goroutine stack traces, source code context, rich indexed attributes, breadcrumbs, and file attachments — and submits them to your Backtrace instance without ever blocking or crashing your application.

Learn more at the [backtrace-go](https://github.com/backtrace-labs/backtrace-go) GitHub repository.

:::note
This guide describes `backtrace-go` v1.1.0 and later. Earlier versions only provide the [legacy global API](#legacy-global-api), which remains fully supported.
:::

## Supported Platforms

Go 1.25+ on Linux, macOS, Windows, and FreeBSD. Linux reports additionally include `/proc` memory and scheduler attributes. The [bcd out-of-process tracer integration](#bcd) is available on Linux and FreeBSD.

## Installation

```bash
go get github.com/backtrace-labs/backtrace-go
```

## Basic Usage

```go
import (
    "log"

    bt "github.com/backtrace-labs/backtrace-go"
)

func main() {
    client, err := bt.NewClient(bt.Config{
        Endpoint: "https://submit.backtrace.io/{universe}/{token}/json",
    })
    if err != nil {
        // Endpoint missing or malformed.
        log.Fatal(err)
    }
    defer client.Close()

    if err := doWork(); err != nil {
        client.Report(err, nil)
    }
}
```

Two endpoint forms are supported:

| Form | Configuration |
| :--- | :--- |
| `https://submit.backtrace.io/{universe}/{token}/json` | Set `Endpoint` only. |
| `https://{subdomain}.sp.backtrace.io` | Set `Endpoint` and `Token`. |

The `BACKTRACE_ENDPOINT` and `BACKTRACE_TOKEN` environment variables are used as fallbacks when the corresponding fields are empty.

## Sending Reports

```go
client.Report(err, nil)                            // error: message, type, and unwrap chain are captured
client.ReportMessage("cache warmup skipped", nil)  // plain message
client.ReportPanicValue(recovered, nil)            // an already-recovered panic value

// Per-report attributes:
client.Report(err, map[string]interface{}{"request.id": "abc-123"})
```

To capture panics with a `Client`, defer a `recover` handler at the top of a goroutine:

```go
defer func() {
    if r := recover(); r != nil {
        client.ReportPanicValue(r, nil)
        client.Flush(5 * time.Second)
        panic(r) // optional: re-raise after reporting
    }
}()
```

If you configure the [global reporter](#legacy-global-api) (`bt.Options` or the `BACKTRACE_ENDPOINT` environment variable), the one-line helpers do this for you:

```go
defer bt.ReportPanic(nil)           // reports, waits for delivery, then re-panics
defer bt.ReportAndRecoverPanic(nil) // reports and swallows the panic; the goroutine lives on
```

Every goroutine that should report its own panics needs a deferred handler; for HTTP servers, use the [middleware](#capturing-panics-in-http-handlers) instead. Crashes in native (cgo) libraries bypass Go panics entirely — handle those with the [bcd tracer integration](#bcd).

## Attributes and Breadcrumbs

```go
client.SetAttribute("user.id", "u-42") // included in every subsequent report; safe from any goroutine
client.AddBreadcrumb(bt.Breadcrumb{
    Message: "checkout started",
    Level:   bt.BreadcrumbInfo, // Debug, Info, Warning, or Error
})
```

Breadcrumbs are kept in a fixed-size ring buffer (default 64) and attached to every report, both as an annotation and as the `bt-breadcrumbs-0` attachment rendered by the Backtrace breadcrumbs view.

Every report automatically includes hostname, process ID and age, Go version, goroutine count, heap and GC statistics, CPU architecture and model, OS version (Linux, macOS, and FreeBSD), machine GUID, `application.version` and `vcs.revision` from Go build info, the Go module dependency list, and — on Linux — `/proc` memory and scheduler attributes.

## File Attachments

```go
client, err := bt.NewClient(bt.Config{
    Endpoint:        "https://submit.backtrace.io/{universe}/{token}/json",
    AttachmentPaths: []string{"/var/log/app.log"},
})
```

Attachments are uploaded with every report using multipart submission. Files larger than 10 MiB, unreadable files, and non-regular files (FIFOs, devices) are skipped. Per-report attachment changes can be made in a [`BeforeSend`](#advanced-configuration) hook via `ReportData.Attachments`.

## Capturing Panics in HTTP Handlers

The `bthttp` subpackage wraps `net/http` handlers with panic reporting:

```go
import "github.com/backtrace-labs/backtrace-go/bthttp"

handler := bthttp.New(bthttp.Options{
    Client:          client,          // omit to use the global reporter
    Repanic:         false,           // re-raise the panic after reporting
    WaitForDelivery: true,            // block the failing request until delivery, bounded by FlushTimeout
    FlushTimeout:    2 * time.Second, // default: 2s
})
http.ListenAndServe(":8080", handler.Handle(mux))
```

Panics are reported with `request.url` (the request path), `request.method`, `request.host`, `request.remote_addr`, `request.user_agent`, and `request.proto` attributes.

## Advanced Configuration

All fields of `bt.Config` (zero values fall back to the documented defaults):

| Field | Explanation |
| :--- | :--- |
| `Endpoint` | **Required.** The submission URL; see [Basic Usage](#basic-usage). Falls back to `BACKTRACE_ENDPOINT`. |
| `Token` | The project submission token, for `{subdomain}.sp.backtrace.io` endpoints. Falls back to `BACKTRACE_TOKEN`. |
| `CaptureAllGoroutines` | Defaults to `false`. If `true`, every goroutine's stack is included in reports, not just the calling goroutine's. |
| `SourceCode` | Defaults to `bt.SourceCodeContext`, which embeds only the lines around each stack frame. `bt.SourceCodeFile` embeds entire source files; `bt.SourceCodeNone` disables source capture. |
| `ContextLineCount` | Defaults to `8`. Number of source lines captured above and below each frame's line in context mode. |
| `TabWidth` | Defaults to `8`. How many spaces a hard tab represents in the source view. |
| `Attributes` | Map of attributes added to every report. |
| `AttachmentPaths` | List of file paths uploaded with every report (10 MiB per-file cap). |
| `SendEnvVars` | Defaults to `false`. If `true`, the process environment is attached as an annotation. Values are redacted when the variable name contains a secret-bearing pattern (`TOKEN`, `SECRET`, `PASS`, `KEY`, `CREDENTIAL`, `AUTH`, `DSN`, `COOKIE`, `SESSION`, `SIGNATURE`, `BEARER`, `CONN`) or when the value embeds URL credentials (`scheme://user:pass@...`). |
| `ScrubEnvVars` | Additional name patterns to redact, extending the built-in list. |
| `SampleRate` | Fraction of reports actually sent, in `[0.0, 1.0]`. The zero value means `1.0` (send everything). |
| `BeforeSend` | Hook running just before a report is serialized: scrub or enrich the `*bt.ReportData`, or return `nil` to drop it. A panicking hook drops the report (it is never sent half-scrubbed). |
| `MaxErrorDepth` | Defaults to `100`. Caps how many wrapped errors (`errors.Unwrap`) are captured per report. |
| `MaxBreadcrumbs` | Defaults to `64`. Capacity of the breadcrumb ring buffer; negative disables breadcrumbs. |
| `QueueSize` | Defaults to `128`. Capacity of the in-memory report queue. |
| `Timeout` | Defaults to `30s`. Per-request HTTP timeout. |
| `HTTPClient` | Custom `*http.Client` for submission (proxies, TLS configuration). |
| `DisableMachineAttributes` | Defaults to `false`. Set to `true` to skip shelling out for machine metadata (CPU model, OS version, machine GUID). Can be used in minimal containers without a shell. |
| `Debug` | Defaults to `false`. Enables SDK diagnostic logging. The SDK never panics regardless of this setting; submission tokens are redacted in all diagnostics. |
| `Logger` | Destination for diagnostics when `Debug` is on. Defaults to stderr. |

## Delivery Semantics

Reporting never blocks your application on network I/O: reports are queued to a background worker, and when the queue is full, new reports are dropped and counted (`client.DroppedReports()`) instead of stalling the caller. Panic reports are the exception — they retry a full queue for up to five seconds, since they are likely the process's last report. Server rate limiting (HTTP 429) is honored automatically.

```go
client.Flush(5 * time.Second) // wait for queued reports; the client stays usable
client.Close()                // drain the queue, stop the worker, release the client
```

## Legacy Global API

The historical package-level API keeps working unchanged and is backed by the same delivery engine:

```go
import bt "github.com/backtrace-labs/backtrace-go"

func init() {
    bt.Options.Endpoint = "https://submit.backtrace.io/{universe}/{token}/json"
}

func foo() {
    if err := doWork(); err != nil {
        bt.Report(err, nil)
    }
}
```

| Function | Explanation |
| :--- | :--- |
| `bt.Report(object interface{}, attributes map[string]interface{})` | Sends a report. `object` may be an `error` or any value convertible to a string; `nil` is ignored. |
| `bt.ReportPanic(attributes map[string]interface{})` | Deferred panic handler: reports, waits up to 5 seconds for delivery, then re-panics. |
| `bt.ReportAndRecoverPanic(attributes map[string]interface{})` | Reports and swallows the panic; the goroutine lives on. Unlike `ReportPanic`, it does not wait for delivery. |
| `bt.ReportPanicValue(value interface{}, attributes map[string]interface{})` | Reports an already-recovered panic value without re-panicking. |
| `bt.SetAttribute(key, value)` / `bt.SetAttributes(map)` | Sets global attributes; safe for concurrent use (prefer over mutating `Options.Attributes` at runtime). |
| `bt.AddBreadcrumb(bt.Breadcrumb{...})` | Records a breadcrumb on the global reporter. |
| `bt.Flush(timeout)` | Waits for queued reports; returns `false` on timeout. |
| `bt.FinishSendingReports()` | Kept for backward compatibility: waits for queued reports (bounded) **without** stopping the reporter. Prefer `bt.Flush`. |

Configure `bt.Options` before the first report. If you are upgrading from a pre-1.1.0 version, note the following behavior changes (see the [CHANGELOG](https://github.com/backtrace-labs/backtrace-go/blob/master/CHANGELOG.md) for the full list):

- Source capture defaults to context lines around each frame instead of whole files; restore the old behavior with `Options.SourceCode = bt.SourceCodeFile`.
- Message reports submit `report_type="message"`, and panic reports submit the `panic` classifier — update saved queries and alerts filtering on these values.
- The reporting API never panics; `DebugBacktrace` only controls diagnostic logging.

## `bcd`

The package also provides integration with out-of-process tracers (Linux and FreeBSD). Using the provided `Tracer` interface, applications may invoke tracer execution on demand; panic and signal handling integrations are provided, which also covers crashes in native (cgo) libraries that bypass Go panics.

The `Tracer` interface is generic and supports any out-of-process tracer implementing it. A default `Tracer` implementation for the Backtrace platform (`BTTracer`) is included.

### Usage

See the [godoc page](https://pkg.go.dev/github.com/backtrace-labs/backtrace-go) for current documentation, and [this example application](https://github.com/backtrace-labs/backtrace-go/blob/master/examples/bcd/main.go) for signal handling, panic recovery, and snapshot upload.
