---
id: configuration
title: Configuring Backtrace for Android
sidebar_label: Configuration
description: Configure Backtrace for your Android project.
---
Configure Backtrace for your Android project. This page defines the configuration settings, classes, and methods available with the Backtrace Android SDK.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Global Custom Attributes
You can set global custom attributes to be included with each report. To set global custom attributes, pass a map with custom attributes to the `BacktraceClient` constructor method, as shown below.

<Tabs>
<TabItem value="java" label="Java">

```java
Map<String, Object> attributes = new HashMap<String, Object>(){{
    put("custom-attribute-key", "custom-attribute-value");
}};
BacktraceClient backtraceClient = new BacktraceClient(context, credentials, attributes);
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val attributes: HashMap<String, Any> = hashMapOf("custom-attribute-key" to "custom-attribute-value")
val backtraceClient = BacktraceClient(context, credentials, attributes)
```

</TabItem>
</Tabs>

## File Attachments
You can enable default file attachments which will be sent with all Backtrace reports both managed and native.

```java
final String fileName = context.getFilesDir() + "/" + "myCustomFile.txt";
List<String> attachments = new ArrayList<String>(){{
    add(fileName);
}};

backtraceClient = new BacktraceClient(context, credentials, database, attributes, attachments);
```

File attachment paths for crash reports can only be specified on initialization. If you have rotating file logs or another situation where the exact filename won't be known when you initialize your Backtrace client, you can use symlinks:

```java
// The file simlink path to pass to Backtrace
final String fileName = context.getFilesDir() + "/" + "myCustomFile.txt";
List<String> attachments = new ArrayList<String>(){{
    add(fileName);
}};

backtraceClient = new BacktraceClient(context, credentials, database, attributes, attachments);

// The actual filename of the desired log, not known to the BacktraceClient on initialization
final String fileNameDateString = context.getFilesDir() + "/" + "myCustomFile06_11_2021.txt";
// Create symlink
Os.symlink(fileNameDateString, fileName);
```
:::note
If you create any new files in the same directory as your `BacktraceDatabase` directory, they will be deleted when you create a new `BacktraceClient`.
:::

## Application Not Responding (ANRs)
The `BacktraceClient` allows you to detect Application Not Responding (ANR) errors that occur when the main thread is blocked for more than 5 seconds. You can enable ANR reporting as follows:

```java
backtraceClient.enableAnr(timeout, event, debug);
```

You can also provide the following parameters as an argument:
* `timeout`: Specifies how long (in milliseconds) the thread should be blocked before the ANR is reported.
* `event`: Specifies an event, which will be executed instead of handling the ANR error by default.
* `debug`: Does not report ANRs if the app is in debug mode.


## Offline Database Settings
The `BacktraceClient` allows you to customize the initialization of `BacktraceDatabase` for local storage of error reports by supplying a `BacktraceDatabaseSettings` parameter, as shown below:

```java
BacktraceCredentials credentials = new BacktraceCredentials("https://myserver.sp.backtrace.io:6097/", "4dca18e8769d0f5d10db0d1b665e64b3d716f76bf182fbcdad5d1d8070c12db0");

Context context = getApplicationContext();
String dbPath = context.getFilesDir().getAbsolutePath(); // any path, eg. absolute path to the internal storage

BacktraceDatabaseSettings settings = new BacktraceDatabaseSettings(dbPath);
settings.setMaxRecordCount(100);
settings.setMaxDatabaseSize(100);
settings.setRetryBehavior(RetryBehavior.ByInterval);
settings.setAutoSendMode(true);
settings.setRetryOrder(RetryOrder.Queue);

BacktraceDatabase database = new BacktraceDatabase(context, settings);
BacktraceClient backtraceClient = new BacktraceClient(context, credentials, database);
// start capturing NDK crashes
database.setupNativeIntegration(backtraceClient, credentials);
```

## Sending Reports
The `BacktraceClient.send` method sends an error report to the specified Backtrace endpoint. The `send` method is overloaded——see the examples below.

### Using `BacktraceReport`
The `BacktraceReport` class represents a single error report. You can also submit custom attributes using the attributes parameter, as shown below.

<Tabs>
<TabItem value="java" label="Java">

```java
try {
    // throw exception here
} catch (Exception e) {
    BacktraceReport report = new BacktraceReport(e,
    new HashMap<String, Object>() {{
        put("key", "value");
    }}, new ArrayList<String>() {{
        add("absolute_file_path_1");
        add("absolute_file_path_2");
    }});
    backtraceClient.send(report);
}
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
try {
    // throw exception here
}
catch (e: Exception) {
    val report = BacktraceReport(e, mapOf("key" to "value"), listOf("absolute_file_path_1", "absolute_file_path_2"))
    backtraceClient.send(report)
}
```

</TabItem>
</Tabs>

### Sending Reports Asynchronously
You can use the `send` method to specify an event that should be performed after a report is sent to the server, as shown below.

<Tabs>
<TabItem value="java" label="Java">

```java
client.send(report, new OnServerResponseEventListener() {
    @Override
    public void onEvent(BacktraceResult backtraceResult) {
        // process result here
    }
});
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
client.send(report) { backtraceResult ->
    // process result here
}
```

</TabItem>
</Tabs>

### Sending Reports for an Exception or a Message
You can use the `BacktraceClient.send` method to create a report for a specific exception or a custom message, as shown below.

<Tabs>
<TabItem value="java" label="Java">

```java
try {
  // throw exception here
} catch (Exception exception) {

  backtraceClient.send(new BacktraceReport(exception));

  // pass exception to send method
  backtraceClient.send(exception);

  // pass your custom message to send method
  backtraceClient.send("Message");
}
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
try {
    // throw exception here
} catch (exception: Exception) {
  backtraceClient.send(BacktraceReport(exception));

  // pass exception to send method
  backtraceClient.send(exception);

  // pass your custom message to send method
  backtraceClient.send("Message");
}
```

</TabItem>
</Tabs>

## Custom Event Handlers
The `BacktraceClient` allows you to attach your custom event handlers. For example, you can trigger actions before the `send` method, as shown below.

<Tabs>
<TabItem value="java" label="Java">

```java
backtraceClient.setOnBeforeSendEventListener(new OnBeforeSendEventListener() {
    @Override
    public BacktraceData onEvent(BacktraceData data) {
        // another code
        return data;
    }
});
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
backtraceClient.setOnBeforeSendEventListener { data ->
    // another code
    data
}
```

</TabItem>
</Tabs>

:::note
All events are written in "listener" pattern.
:::

The `BacktraceClient` currently supports the following events:
- `BeforeSend`
- `RequestHandler`
- `OnServerError`

## Unhandled Application Exceptions
The `BacktraceClient` supports reporting of unhandled application exceptions not captured by your try-catch blocks. To enable reporting of unhandled exceptions:

```java
BacktraceExceptionHandler.enable(backtraceClient);
```

You can also add a custom map of attributes to the `BacktraceExceptionHandler`, which will be sent with each unhandled exception:

```java
BacktraceExceptionHandler.setCustomAttributes(customAttributes);
```

## Library Logger - Debug Mode
`BacktraceLogger` is a class that helps with debugging and analysis code flow execution inside the library. Logger is a wrapper on the Android `Log` class. `BacktraceLogger` supports the following four logging levels:
- `DEBUG`
- `WARN`
- `ERROR`
- `OFF`

To enable displaying logs from inside the library, set the level from which information should be logged, as shown below.

```java
BacktraceLogger.setLevel(LogLevel.DEBUG);
```

## Monitoring Custom Threads
The backtrace-android library provides structures and methods to monitor the blocking of your own threads.

:::note Important
Make sure to check whether the thread is blocked and increment the counter, as shown below.
:::

```java
BacktraceWatchdog watchdog = BacktraceWatchdog(backtraceClient); // Initialize BacktraceWatchdog
watchdog.registerThread(customThread, timeout, delay); // Register custom thread

watchdog.checkIsAnyThreadIsBlocked(); // check if any thread has exceeded the time, by default an error will be sent to the Backtrace console


// The following code should be executed inside the thread you want to monitor
watchdog.tick(this); // In your custom thread class make incrementation to inform that the thread is not blocked
```

## Custom Client and Report Classes
You can extend `BacktraceBase` to create your own Backtrace client and error report implementation. You can refer to [`BacktraceClient`](https://github.com/backtrace-labs/backtrace-android/blob/master/backtrace-library/src/main/java/backtraceio/library/BacktraceClient.java) for an implementation example.

## Breadcrumbs
Breadcrumbs help you track events leading up to your crash, error, or other submitted objects.

When breadcrumbs are enabled, any captured breadcrumbs will automatically be attached as a file to your crash, error, or other submitted object (including native crashes) and displayed in the UI on the Breadcrumbs tab.

### Enabling Breadcrumbs
You can enable breadcrumbs as follows:

```java
backtraceClient.enableBreadcrumbs(view.getContext().getApplicationContext());
```

:::tip
Pass the application context to get automatic breadcrumbs for [ActivityLifecycleCallbacks](https://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks).
:::

### Adding Manual Breadcrumbs
You can add breadcrumbs as follows:

```java
backtraceClient.addBreadcrumb("About to send Backtrace report", BacktraceBreadcrumbType.LOG);
```

:::caution
Don't make calls to `addBreadcrumb` from performance-critical code paths.
:::

### Automatic Breadcrumbs
By default, if you enable breadcrumbs, Backtrace registers handlers to capture Android Broadcasts and other common system events, such as low memory warnings, battery warnings, screen orientation changes, ActivityLifecycleCallbacks, and more.

You can limit the types of automatic events we capture for you by specifying which automatic breadcrumb types you want to enable, such as:

```java
EnumSet<BacktraceBreadcrumbType> breadcrumbTypesToEnable = EnumSet.of(BacktraceBreadcrumbType.USER);
backtraceClient.enableBreadcrumbs(view.getContext().getApplicationContext(), breadcrumbTypesToEnable);
```

To disable all automatic breadcrumbs:

```java
EnumSet<BacktraceBreadcrumbType> breadcrumbTypesToEnable = EnumSet.of(BacktraceBreadcrumbType.MANUAL);
backtraceClient.enableBreadcrumbs(view.getContext().getApplicationContext(), breadcrumbTypesToEnable);
```

:::note
Breadcrumbs that you add using `addBreadcrumb` calls in your own code are always logged, regardless of their `BacktraceBreadcrumbType`, as long as breadcrumbs are enabled. The enabled breadcrumb types do not affect your `addBreadcrumb` calls.
:::

### Adding Native Breadcrumbs
To add breadcrumbs from your NDK/C++ code, you must first register your `BacktraceClient` Java class with the NDK by passing it to `Backtrace::InitializeNativeBreadcrumbs`, then call the function from the Backtrace header, `backtrace-android.h`.

`backtrace-android.h` is included with the [example-app](https://github.com/backtrace-labs/backtrace-android/blob/master/example-app/src/main/cpp/backtrace-android.h).

1. Create a JNI function which passes your active `BacktraceClient` to the `Backtrace::InitializeNativeBreadcrumbs` function from `backtrace-android.h`.

    - JNI:
    ```cpp
    #include <jni.h>
    #include "backtrace-android.h"

    JNIEXPORT jboolean JNICALL
    Java_backtraceio_backtraceio_MainActivity_registerNativeBreadcrumbs(JNIEnv *env, jobject thiz,
            jobject backtrace_base) {
        return Backtrace::InitializeNativeBreadcrumbs(env, backtrace_base);
    }
    ```

    - `backtrace.-android.h`:
    ```cpp
    bool Backtrace::InitializeNativeBreadcrumbs(JNIEnv *env, jobject backtrace_base);
    ```

1. You can now add breadcrumbs from your NDK/C++ code by directly calling the below function from `backtrace-android.h`.

    ```cpp
    #include <jni.h>
    #include "backtrace-android.h"

    std::unordered_map<std::string, std::string> attributes;
    attributes["My Attribute"] = "Attribute Value";
    bool success = Backtrace::AddBreadcrumb(env,
                                        "My Native Breadcrumb",
                                        &attributes,
                                        Backtrace::BreadcrumbType::USER,
                                        Backtrace::BreadcrumbLevel::ERROR);
    ```

## Error-Free Metrics
Error free metrics allow you to determine:
- How many of your unique users (i.e: unique device IDs) using your app are experiencing errors/crashes?
- How many application sessions (i.e: individual application sessions from startup till shutdown/exit) of your app are experiencing errors/crashes?

You can track those metrics at-a-glance, as well as in detail to find out what kinds of errors/crashes are most common.

You can enable error-free metrics as follows:
:::note Important
Make sure to enable error-free metrics before you [enable the native integration](#enabling-native-integration).
:::

```java
// Enable metrics
BacktraceMetricsSettings metricsSettings = new BacktraceMetricsSettings(backtraceCredentials);
backtraceClient.metrics.enable(metricsSettings);
```

## NDK Applications
:::note
If your native app is built with NDK 16b, the Breakpad native crash client will be used instead of our recommended Crashpad crash client. To avoid this, use NDK 17c+ to build your native app.
:::
:::note
Breakpad crash reports are submitted on the next app startup, instead of at crash time like Crashpad crash reports.
:::

### Enabling Native Integration
In general, this should be the final step in setting up your Backtrace client to ensure all attributes and file attachment paths are captured properly by the native crash handler.

To capture NDK crashes, you can use the `enableNativeIntegration` method as follows:

```java
backtraceClient.enableNativeIntegration();
```

In addition, you may also need to add the `extractNativeLibs` option to your `AndroidManifest.xml` file:

```xml
<application
        android:extractNativeLibs="true">
        ...
</application>
```
For more information about `extractNativeLibs`, see [Android's developer documentation](https://developer.android.com/guide/topics/manifest/application-element#extractNativeLibs).

#### Disabling Native Integration
You can also disable the native integration as follows:

```java
backtraceClient.disableNativeIntegration();
```

:::note
Breakpad does not currently support `disableNativeIntegration`.
:::

### Uploading Symbols
For an NDK application, debugging symbols are not available to Backtrace by default. You will need to upload the app symbols for your native code to Backtrace.

You can do this by uploading the native libraries themselves, which are usually found in the APK bundle. For more information on how to upload symbols for an NDK app, see [Symbolication](/error-reporting/project-setup/symbolication/).


### Client-Side Unwinding
For an NDK application, debugging symbols for system functions (for instance in `libc.so`) and other opaque libraries can be difficult to obtain. In these cases, it is better to unwind the callstack on the crashing application (i.e: the client).

This may not provide the same callstack quality as with debugging symbols, but will give you debugging information you would otherwise not have if you don't have debugging symbols available.

:::note
When viewing a crash in the Backtrace console, it may still show warning messages that symbols are missing from certain frames after client-side unwinding is performed. This warning is expected if these symbols are not available on the Backtrace server, and should not impact your ability to read the callstack.
:::

To enable client side unwinding, you can call the `setupNativeIntegration` method with an additional boolean value.

```java
database.setupNativeIntegration(backtraceClient, credentials, true);
```

:::note
Client-side unwinding is only available for fatal crashes. For instance, non-fatal Crashpad dumps generated with `DumpWithoutCrash` will not use client-side unwinding.
:::
:::note
Client-side unwinding is only available for the following platforms:
- NDK level 17 or higher (i.e: only with the Crashpad crash reporting backend).
- SDK level 21 or higher (i.e: if the minimum SDK version is lower than 21, client-side unwinding will be disabled for 32-bit arm platforms).
:::

#### Unwinding Modes
You can optionally specify the unwinding mode as follows:

```java
database.setupNativeIntegration(backtraceClient, credentials, true, UnwindingMode.REMOTE_DUMPWITHOUTCRASH);
```

The following unwinding modes are available:
- **LOCAL**: Unwinding is done within the same process that has the crash. This is less robust than remote unwinding, but avoids the complexity of creating a child process and IPC. Local unwinding is executed from a signal handler and needs to be signal-safe.
- **REMOTE**: Unwinding is done by a child process. This means that the unwinding is correct even in case of severe malfunctions in the crashing parent process, and signal-safety is not a concern.
- **LOCAL_DUMPWITHOUTCRASH**: This option is the same as `LOCAL` unwinding, but instead of using the regular Crashpad signal hander to call the unwinder and regular Crashpad reporting mechanism, Backtrace's custom signal handler will be used to call the unwinder before we send the report using Crashpad's `DumpWithoutCrash()` method.
- **REMOTE_DUMPWITHOUTCRASH**: This is the default and recommended option. It's the same as `REMOTE` unwinding, but instead of using the regular Crashpad signal hander to call the unwinder and regular Crashpad reporting mechanism, Backtrace's custom signal handler will be used to call the unwinder before we send the report using Crashpad's `DumpWithoutCrash()` method.
- **LOCAL_CONTEXT**: This option is the same as `LOCAL` unwinding, but uses `ucontext_t *` from the signal handler to reconstruct the callstack instead.
