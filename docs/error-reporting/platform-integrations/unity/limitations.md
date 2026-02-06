---
id: limitations
title: Known Limitations
sidebar_label: Known Limitations
description: Learn about known platform-specific limitations of the Backtrace Unity SDK, with a focus on Unity WebGL stack traces and runtime constraints.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page outlines known platform-specific limitations of the Backtrace Unity SDK. Many of these constraints are inherent to Unity, IL2CPP, and (for WebGL) the browser sandbox. Knowing these boundaries upfront helps set expectations and speeds up troubleshooting.

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
Unity WebGL uses IL2CPP to transpile C# to C++ and then to WebAssembly. Source-level C# line mapping is typically not preserved through this pipeline, so reports generally cannot include reliable C# line numbers. This is a Unity WebGL platform limitation.

#### Why some reports have no stack trace
Some events may arrive without threads/frames when the runtime does not provide stack information at capture time. Common cases include:

- **Message-based logs** such as `Debug.LogError("...")`: these are messages, not exceptions, so there may be no exception stack to attach.
- **`Debug.LogException(exception)`**: Unity may provide an exception object without stack information in WebGL, resulting in stackless reports.
- **Early startup errors**: failures that occur before stack traces are attached (or before SDK initialization) can be captured without frames.

**Best practice:** Prefer capturing real exceptions (not only messages) when you need stack traces.

---

### Native Crash Capture

Native (unmanaged) crash capture is **not supported** on WebGL. WebGL executes inside the browser, so the SDK cannot intercept:

- browser/tab crashes
- WebAssembly runtime failures outside managed C#
- native crash dumps (minidumps)

Only managed C# exceptions and Unity log events can be captured.

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

Offline report storage is supported on WebGL, but it is subject to browser storage behavior:

- Storage quotas vary by browser/platform and may be enforced silently.
- Private/incognito modes may restrict or disable persistence.
- Users can clear site storage at any time.
- Mobile browsers in particular can be more restrictive.

Offline persistence on WebGL should be treated as **best-effort**, not guaranteed.

---

### Persistent Identifiers

A stable, persistent machine identifier cannot be guaranteed on WebGL because:

- Browsers do not expose hardware identifiers
- Browser storage can be cleared or restricted
- Identifiers may change across sessions, browsers, or devices

---

## Troubleshooting

### WebGL reports are missing stack traces
- Confirm **Exception Support** is set to **Full With Stacktrace**.
- Validate the event is captured as an **exception** (not only a message).
- If events originate from `Debug.LogException`, try capturing the exception through Backtrace instead of relying on Unity’s log wrapper.

### WebGL reports show stacks but no line numbers
This is expected on WebGL due to the IL2CPP → WebAssembly pipeline not preserving reliable source-level C# line mappings.

### Offline reports are not replayed after reload
- Verify the browser is not in private/incognito mode.
- Check whether site storage is blocked or cleared.
- Test in a desktop browser first to isolate mobile storage constraints.
