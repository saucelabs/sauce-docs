---
id: troubleshooting
title: Troubleshoot common Unity SDK issues
sidebar_label: Troubleshooting
description: Learn more about known platform-specific limitations, common issues, and troubleshooting steps.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page outlines known platform-specific limitations of the Backtrace Unity SDK. These constraints are inherent to Unity, IL2CPP, and (for WebGL) the browser sandbox.

## WebGL

### Stack Traces

Stack trace availability in WebGL depends on Unity’s **Exception Support** setting:

**Player Settings > Publishing Settings > WebGL > Exception Support**

| Exception Support | Stack Traces | Line Numbers |
|---|---|---|
| None | No | No |
| Explicitly Thrown Exceptions Only | Yes (thrown exceptions only) | No |
| Full Without Stacktrace | Partial | No |
| **Full With Stacktrace** | **Yes** | **No** |

**Recommendation:** Use **Full With Stacktrace** for the most complete reporting.

#### Why line numbers are missing on WebGL
- Unity WebGL uses IL2CPP to transpile C# to C++ and then to WebAssembly. Source-level C# line mapping is typically not preserved through this pipeline, so reports generally cannot include reliable C# line numbers. This is a Unity WebGL platform limitation.

#### Why some reports have no stack trace
- Some events may arrive without threads/frames when the runtime does not provide stack information at capture time. Common cases include:

    - **Message-based logs** such as `Debug.LogError("...")`: these are messages, not exceptions, so there may be no exception stack to attach.
    - **`Debug.LogException(exception)`**: Unity may provide an exception object without stack information in WebGL, resulting in stackless reports.
    - **Early startup errors**: failures that occur before stack traces are attached (or before SDK initialization) can be captured without frames.

    **Best practice:** Prefer capturing real exceptions (not only messages) when you need stack traces.

---

### Unity WebGL log-callback exceptions with empty stack traces

The Backtrace Unity SDK listens to `Application.logMessageReceived` and `Application.logMessageReceivedThreaded`. Unity calls these handlers with a log message, a `stackTrace` string, and a `LogType`.

In WebGL/IL2CPP builds, Unity can emit an exception-like log event with a valid exception message but an empty `stackTrace` value. This can occur even when WebGL Exception Support is set to **Full With Stacktrace** and Stack Trace Logging is enabled.

When Unity supplies an empty callback stack, Backtrace cannot reconstruct the original managed C# throw-site stack from that callback alone. The SDK preserves the message, attributes, breadcrumbs, Unity log context, and stackless-capture diagnostics.

Newer SDK versions include diagnostic attributes for this path:

| Attribute | Description |
|---|---|
| `backtrace.unity.capture_path` | SDK capture path, such as `Application.logMessageReceived`, `Application.logMessageReceivedThreaded`, or `Debug.unityLogger.logHandler.LogException+Application.logMessageReceived`. |
| `backtrace.unity.log.type` | Unity log type, such as `Error` or `Exception`. |
| `backtrace.unity.log.stacktrace.empty` | Whether Unity supplied an empty callback `stackTrace` string. |
| `backtrace.unity.log.stacktrace.length` | Length of Unity's callback `stackTrace` string. |
| `backtrace.unity.log.message.length` | Length of Unity's callback message. |
| `backtrace.unity.log.thread.id` | Thread id that processed the Unity log callback. |
| `backtrace.unity.log.thread.is_main` | Whether the Unity log callback was handled on the main thread. |
| `backtrace.unity.stacktrace_log_type.error` | Runtime Stack Trace Logging setting for `LogType.Error`. |
| `backtrace.unity.stacktrace_log_type.exception` | Runtime Stack Trace Logging setting for `LogType.Exception`. |
| `backtrace.unity.stack_source` | Stack source selected by the SDK: `original_exception_stacktrace`, `unity_log_callback_stacktrace`, or `unavailable`. |
| `backtrace.unity.report.frames.empty` | Whether the final Backtrace report has zero managed frames. |
| `backtrace.unity.stackless.reason` | Stackless classification when the final report has no frames. |

#### Capturing original exceptions from `Debug.LogException`

On WebGL, the SDK can observe exceptions passed through `Debug.LogException(exception)` by wrapping `Debug.unityLogger.logHandler`.

This is enabled automatically for WebGL builds:

```csharp
configuration.UnityLogHandlerExceptionCapture =
    BacktraceUnityLogHandlerExceptionCaptureMode.Automatic;
```

The SDK does not send directly from the log handler. It records the original exception object, forwards to Unity's original log handler, and waits for Unity's `Application.logMessageReceived` or `Application.logMessageReceivedThreaded` callback. When the callback arrives, the SDK chooses the best available stack source:

1. Original exception stack trace, if present and parseable.
2. Unity callback `stackTrace`, if present and parseable.
3. No frames, with explicit stackless diagnostics, if neither exists.

This avoids creating SDK capture-time frames for stackless original exceptions.

When the original exception is observed, the SDK can add:

| Attribute | Description |
|---|---|
| `backtrace.unity.original_exception.source` | `Debug.unityLogger.logHandler`. |
| `backtrace.unity.original_exception.type` | Original exception type. |
| `backtrace.unity.original_exception.stack_present` | Whether the original exception object had a non-empty `StackTrace`. |
| `backtrace.unity.original_exception.context_name` | Unity context object name when available on the main thread. |
| `backtrace.unity.original_exception.thread.id` | Thread id where the original exception was observed. |
| `backtrace.unity.original_exception.thread.is_main` | Whether the original exception was observed on the main thread. |
| `backtrace.unity.original_exception.stackless_reason` | Reason the original exception object did not contain a managed stack. |

#### Optional WebGL JavaScript stack-at-capture

The WebGL JavaScript stack fallback is **disabled by default**.

When enabled, the SDK captures a browser JavaScript stack at the time the SDK creates a stackless Unity log-callback report.

```csharp
configuration.WebGLJavaScriptStackFallback =
    BacktraceWebGLJavaScriptStackFallbackMode.StacklessUnityLogsOnly;
```

This stack is supplemental context only. It can contain browser, WebAssembly, Unity loader, or SDK callback frames. It is **not** the original managed C# throw-site stack and is not used as the faulting managed thread stack.

#### Recommended WebGL troubleshooting flow

When a Unity WebGL report has no stack frames:

1. Check `backtrace.unity.capture_path`.
2. Check `backtrace.unity.log.stacktrace.empty`.
3. Check `backtrace.unity.stack_source`.
4. Check `backtrace.unity.report.frames.empty`.
5. If `backtrace.unity.stack_source=original_exception_stacktrace`, the SDK used the original exception object's stack.
6. If `backtrace.unity.stack_source=unity_log_callback_stacktrace`, the SDK used Unity's callback stack.
7. If `backtrace.unity.stack_source=unavailable`, neither Unity's callback nor the observed original exception object provided a usable managed stack.

---

### Native Crash Capture

Native (unmanaged) crash capture is **not supported** on WebGL. WebGL executes inside the browser, so the SDK cannot intercept:

- browser/tab crashes
- WebAssembly runtime failures outside managed C#
- native crash dumps (minidumps)

Only managed C# exceptions and Unity log events can be captured.

---

### ANR (Application Not Responding) Detection

ANR detection is **not available** on WebGL. Browser-hosted applications run on a single thread and do not expose platform watchdog mechanisms like native mobile/desktop environments.

---

### Metrics (Error-Free Sessions & Users)

Backtrace Metrics (Error-free sessions and Error-free users) are **not supported** on WebGL builds.

---

### Application Lifecycle Constraints

Browsers may terminate execution abruptly on:

- page refresh / navigation
- tab close
- backgrounding (especially on mobile)

This can prevent in-flight uploads from completing. The SDK uses browser lifecycle signals where possible, but delivery during abrupt shutdown cannot be guaranteed.

---

### Threading

Unity WebGL runs effectively single-threaded. Background-thread behaviors available on native platforms are not available in WebGL builds, and some SDK operations use WebGL-safe alternatives.

---

### Offline Persistence (Best Effort)

Offline report storage is supported on WebGL, but it is subject to browser storage behavior and limits.

- Storage quotas vary by browser/platform and may be enforced silently.
- Private/incognito modes may restrict or disable persistence.
- Users can clear site storage at any time.
- Mobile browsers in particular can be more restrictive.

Offline persistence on WebGL should be treated as **best-effort**, not guaranteed.

If you need concrete sizing guidance for WebGL persistence, design reports to stay small and avoid large attachments where possible.

---

### Persistent Identifiers

A stable, persistent machine identifier cannot be guaranteed on WebGL because:

- Browsers do not expose hardware identifiers
- Browser storage can be cleared or restricted
- Identifiers may change across sessions, browsers, or devices

---

## Common scenarios 

### WebGL reports are missing stack traces
- Confirm **Exception Support** is set to **Full With Stacktrace**.
- Validate the event is captured as an **exception** (not only a message).
- If events originate from `Debug.LogException`, try capturing the exception through Backtrace instead of relying on Unity’s log wrapper.
- Inspect the report's `backtrace.unity.stack_source` attribute to confirm what stack the SDK used:
    - `original_exception_stacktrace` — the SDK used the original exception object's stack.
    - `unity_log_callback_stacktrace` — Unity supplied a non-empty callback `stackTrace`.
    - `unavailable` — neither Unity's callback nor the observed original exception object provided a usable managed stack.
- When `backtrace.unity.report.frames.empty=true`, the final report has no managed frames; check `backtrace.unity.stackless.reason` for the classification.

### WebGL reports show stacks but no line numbers
This is expected on WebGL due to the IL2CPP → WebAssembly pipeline not preserving reliable source-level C# line mappings.

### Offline reports are not replayed after reload
- Verify the browser is not in private/incognito mode.
- Check whether site storage is blocked or cleared.
- Test in a desktop browser first to isolate mobile storage constraints.

### Metrics are not appearing for WebGL builds
Metrics are not supported on WebGL.