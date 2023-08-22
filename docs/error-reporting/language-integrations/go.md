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

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- A Backtrace license; contact support@backtrace.io if you have not yet received one.
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## `backtrace-go`

`backtrace-go` is the easiest integration mechanism into Go, but it is the least advanced and feature-rich. The package consists of a Go-only library that allows for fast and efficient capture of fatal and non-fatal errors in Go applications.

Learn more at [https://github.com/backtrace-labs/backtrace-go](https://github.com/backtrace-labs/backtrace-go).

## Installation

```bash
go get github.com/backtrace-labs/backtrace-go
```

## Usage

In Go, errors can happen in three ways:

- An operation produces an error return value.
- A goroutine calls panic.
- A native library crashes or the Go runtime itself crashes.

`backtrace-go` handles error and panic situations. When handling panic situations, consider the following:

- To capture error reports in a panic scenario, every goroutine must make an API call to set up panic handling.
- It's possible to forget to do this setup, and you might not know when a callback is executed as a goroutine.
- If a Go application makes any calls into native libraries, a crash in a native library will crash without causing a panic.

Fortunately, there is a robust solution that can capture an error report in all of these circumstances. This is a Backtrace product called Coresnap, which supports deep introspection into the state of Go applications.

The recommended way to capture error reports in a Go application is to use Coresnap to handle panics and crashes and to use `backtrace-go` to report non-fatal error conditions.

```go
import (
    "http"
    "github.com/backtrace-labs/backtrace-go"
)

func init() {
    bt.Options.Endpoint = "https://your_universe_submission_point"
    bt.Options.Token = "your_token_goes_here"
}

func foo() {
    response, err := http.Get("https://doesnotexistexample.com")
    if err != nil {
        bt.Report(err, nil)
    }
}
```

## Documentation

### `bt.Report(msg interface{}, attributes map[string]string)`

`msg` can be an error or something that can be converted to a string. `attributes` are added to the report.

### `bt.ReportPanic(attributes map[string]string)`

Sends an error report in the event of a panic.

```go
defer bt.ReportPanic(nil)
somethingThatMightPanic()
```

### `bt.ReportAndRecoverPanic(attributes map[string]string)`

This is the same as `bt.ReportPanic`, but it recovers from the panic, and the goroutine lives on.

### `bt.FinishSendingReports()`

`backtrace-go` sends reports in a goroutine to avoid blocking. When your application shuts down, it will stop any ongoing sending of reports. Call this function to block until all queued reports are done sending.

## `bcd`

The package provides integration with out-of-process tracers. Using the provided Tracer interface, applications may invoke tracer execution on demand. Panic and signal handling integrations are provided.

The Tracer interface is generic and will support any out of process tracer implementing it. A default Tracer implementation, which uses the Backtrace I/O platform, is provided.

### Usage

See the godoc page for current documentation; see [this example application](https://github.com/backtrace-labs/backtrace-go/blob/master/examples/main.go) for an example.
