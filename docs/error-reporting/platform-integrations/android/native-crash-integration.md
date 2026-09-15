---
id: native-crash-integration
title: Native Crash Integration for Android
sidebar_label: Native Crash Integration
description: Configure native NDK and JNI crash capture with the Backtrace Android SDK.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Backtrace Android SDK can install a native crash handler to capture crashes in NDK and JNI code. Native crash capture is optional and operates independently from managed Java exception reporting and Application Not Responding (ANR) monitoring.

## Requirements

- Android API level 21 or later.
- A writable `BacktraceDatabase` in an application-private directory.
- A standard Backtrace JSON submission URL that the SDK can convert to a minidump submission URL.

The database must be supplied when constructing `BacktraceClient`. A client constructed without a database uses a disabled default database and cannot register the native crash handler.

## Configure and Enable Native Crash Capture

Native crash capture requires a writable `BacktraceDatabase` supplied to `BacktraceClient`. Configure initial attributes, attachments, breadcrumbs, metrics, and managed exception handling before enabling the native integration.

<Tabs groupId="languages">
<TabItem value="java" label="Java">

```java
Context context = getApplicationContext();
BacktraceCredentials credentials = new BacktraceCredentials("<submissionUrl>");

BacktraceDatabaseSettings databaseSettings = new BacktraceDatabaseSettings(
        new File(context.getFilesDir(), "backtrace").getAbsolutePath());
BacktraceDatabase database = new BacktraceDatabase(context, databaseSettings);
BacktraceClient backtraceClient = new BacktraceClient(context, credentials, database);

// Configure attributes, attachments, breadcrumbs, and metrics before this call.
BacktraceExceptionHandler.enable(backtraceClient);
backtraceClient.enableBreadcrumbs(context);

boolean nativeEnabled = backtraceClient.tryEnableNativeIntegration();
if (!nativeEnabled) {
    // Native crash capture is unavailable. Managed reporting remains available.
}
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val context = applicationContext
val credentials = BacktraceCredentials("<submissionUrl>")

val databaseSettings = BacktraceDatabaseSettings(
    File(context.filesDir, "backtrace").absolutePath
)
val database = BacktraceDatabase(context, databaseSettings)
val backtraceClient = BacktraceClient(context, credentials, database)

// Configure attributes, attachments, breadcrumbs, and metrics before this call.
BacktraceExceptionHandler.enable(backtraceClient)
backtraceClient.enableBreadcrumbs(context)

val nativeEnabled = backtraceClient.tryEnableNativeIntegration()
if (!nativeEnabled) {
    // Native crash capture is unavailable. Managed reporting remains available.
}
```

</TabItem>
</Tabs>

For new integrations, `tryEnableNativeIntegration()` is recommended. It synchronously installs the native crash handler and returns whether registration succeeded.

The existing `enableNativeIntegration()` method and its client-side unwinding overloads remain supported for applications that do not need the result. They perform the same synchronous registration and return normally when an optional native setup failure is contained. Call either the result-returning API or the corresponding `void` API, not both.

Client-side unwinding is available through the result-returning overloads:

```java
boolean nativeEnabled = backtraceClient.tryEnableNativeIntegration(true);

boolean nativeEnabledWithMode = backtraceClient.tryEnableNativeIntegration(
        true,
        UnwindingMode.REMOTE_DUMPWITHOUTCRASH);
```

For unwinding behavior and modes, see [Client-Side Unwinding](./configuration.md#client-side-unwinding).

## Startup and Threading Behavior

Native initialization is synchronous because native crash coverage begins only after the crash handler is installed. Call the enable method from exactly one application-controlled thread, as early as practical after completing the initial configuration.

You can initialize native crash capture on a background thread, but native faults that occur before initialization completes cannot be captured. Do not enable native integration concurrently from multiple threads or race an enable call with `disableNativeIntegration()`.

Native initialization is process-scoped and has a process-global, once-only initialization boundary. Java-side validation and preparation occur before that boundary, but an attempt that reaches the native initializer consumes it. Make at most one initial registration attempt per process, and do not retry a failed setup in a loop. Continue using managed reporting, correct the configuration, and initialize native capture after the next application process start.

## APK and Android App Bundle Support

The SDK supports monolithic APKs and Android App Bundle installations that use split APKs. It resolves `libbacktrace-native.so` in this order:

1. The exact filesystem or APK-backed path selected by Android's native linker.
1. An existing extracted library in `nativeLibraryDir`.
1. An ABI split identified from installed application metadata.
1. The base-APK path shape as a compatibility fallback.

The linker-selected path is authoritative. This supports 32-bit processes on 64-bit devices and native-bridge translation; ABI inference is used only to construct fallback paths. Backtrace does not open or parse the base APK or split APK ZIP central directory while resolving the crash-handler library. Android's linker may still access an installed APK when it loads an unextracted native library. Resolution performs a bounded number of linker, package-metadata, and filesystem checks; its work does not scale with the number of files in the APK.

Libraries loaded directly from an installed APK are supported. You do not need to set `android:extractNativeLibs="true"` solely for Backtrace native-library path resolution.

## Failure and Lifecycle Behavior

- A contained native setup failure returns `false` from `tryEnableNativeIntegration()` and leaves managed exception reporting and ANR monitoring operational.
- Existing integrations that call `BacktraceDatabase.setupNativeIntegration()` directly continue to receive `false` when registration does not succeed. Prefer the client-level `tryEnableNativeIntegration()` API for new integrations.
- `dumpWithoutCrash()` safely drops and logs a request when native integration is unavailable or disabled.
- `disableNativeIntegration()` disables native uploads for the current process. It does not uninstall the process-registered crash handler.
- After successful registration, a later enable call restarts the Crashpad upload thread.

:::note Legacy Breakpad builds
The native backend is selected when the Backtrace SDK artifact is built; the application's NDK version does not switch the backend in a prebuilt artifact. Legacy SDK artifacts built with Breakpad submit native reports on the next application startup and do not support `disableNativeIntegration()`.
:::

## Create Nonfatal Native Reports

After native integration is enabled, use `dumpWithoutCrash()` to create a native report without terminating the application:

```java
backtraceClient.dumpWithoutCrash("native diagnostic");
```

Use the boolean overload to identify the main thread as the faulting thread in the generated report:

```java
backtraceClient.dumpWithoutCrash("native diagnostic", true);
```

If native integration is unavailable or disabled, these methods log and safely drop the request instead of invoking an uninitialized native backend.

## Compatibility and Limitations

- Android API 21 is the minimum supported API level.
- `x86_64`, `armeabi-v7a`, and `arm64-v8a` native crash capture are supported.
- The `x86` native crash backend is not supported.
- `arm64-v8a` and `x86_64` support flexible 16 KB page-size environments.
- Managed Java exception reporting and ANR monitoring remain available independently of native ABI support or native crash-handler registration.

## Native Integration Diagnostic Codes

For the optional native setup and Java crash-handler failure paths listed below, the SDK logs a stable stage code and, where applicable, the exception class. These diagnostics omit exception messages and stack traces because they can contain credentials, application data, or filesystem paths. Some unsupported or disabled configurations can return `false` without emitting one of these codes.

| Code                                | Meaning                                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| `BT_NATIVE_PREPARE_FAILURE`         | Native configuration or environment preparation failed.                                         |
| `BT_NATIVE_BRIDGE_FAILURE`          | The JNI or native initialization bridge failed.                                                 |
| `BT_NATIVE_BREADCRUMB_HOOK_FAILURE` | The breadcrumb synchronization hook could not be installed. Native integration remains enabled. |
| `BT_NATIVE_DISABLE_FAILURE`         | The native disable bridge failed. The Java enabled state is still cleared.                      |
| `BT_NATIVE_DUMP_UNAVAILABLE`        | A dump was requested while native integration was unavailable.                                  |
| `BT_HANDLER_ENV_UNAVAILABLE`        | The crash-handler process environment was unavailable.                                          |
| `BT_HANDLER_PATH_UNAVAILABLE`       | The crash-handler native-library path was unavailable.                                          |
| `BT_HANDLER_LOAD_FAILURE`           | The crash-handler native library could not be loaded.                                           |
| `BT_HANDLER_DISPATCH_FAILURE`       | Dispatch to the native crash handler failed.                                                    |
| `BT_HANDLER_RETURNED_FAILURE`       | The native crash handler returned a failure result.                                             |

## Upload Native Symbols

Native reports contain instruction addresses that require the matching debug symbols for readable call stacks. See [Upload Symbols to Your Project](/error-reporting/symbols/upload-symbols-to-project/) for upload instructions.
