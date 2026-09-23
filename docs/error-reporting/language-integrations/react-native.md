---
id: react-native
title: React Native Integration Guide
sidebar_label: React Native
description: Use React Native in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Backtrace](https://backtrace.io) captures and reports handled and unhandled exceptions in your production software so
you can manage application quality through the complete product lifecycle.

The [@backtrace/react-native](https://www.npmjs.com/package/@backtrace/react-native) SDK connects your JavaScript
application to Backtrace. The basic integration is quick and easy, after which you can explore the rich set of
Backtrace features.

## Setup

### Features

- Reports handled errors, uncaught JavaScript errors, and unhandled promise rejections, with stack traces, device and
  application attributes, and file attachments.
- Captures native crashes on iOS and Android.
- Detects Application Not Responding (ANR) errors on Android.
- Records breadcrumbs and attaches them to JavaScript and native crash reports.
- Stores reports in an offline database and sends them on the next launch.
- Sends application stability metrics.
- Resolves JavaScript stack traces with source maps, deobfuscates ProGuard and R8 builds, and symbolicates native
  crashes with dSYM and NDK symbols.

### Supported Versions

- React Native 0.72 to 0.83+
- React 18 or above
- Hermes JavaScript engine
- Legacy Architecture and New Architecture

### Supported Platforms

- iOS: minimum iOS version follows React Native (15.1 for React Native 0.76 and above).
- Android: minimum SDK version follows React Native (24 for React Native 0.76 and above). Native crash capture on
  arm64-v8a, armeabi-v7a and x86_64.

### What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a
  [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example,
  `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

### Install the package

```
$ npm install @backtrace/react-native
```

On iOS, install the pods after adding the package:

```
$ cd ios
$ pod install
```

### Integrate the SDK

Add the following code at the start of your application, before other code runs.

```ts
// Import the BacktraceClient from @backtrace/react-native
import { BacktraceClient, BacktraceConfiguration } from '@backtrace/react-native';

// Configure client options
const options: BacktraceConfiguration = {
    // Submission url
    // <universe> is the subdomain of your Backtrace instance (<universe>.backtrace.io)
    // <token> can be found in Project Settings/Submission tokens
    url: 'https://submit.backtrace.io/<universe>/<token>/json',
    database: {
        enable: true,
        captureNativeCrashes: true,
        createDatabaseDirectory: true,
        path: `${BacktraceClient.applicationDataPath}/backtrace`,
    },
};

// Initialize the client with the options
const client = BacktraceClient.initialize(options);
```

Once initialized, the client automatically reports JavaScript errors that are not caught by the application and
promise rejections without a handler. Use `client.send()` for errors your code catches.

### Verify the Setup

Send a test report and check that it appears in the Triage view of your project:

```ts
client.send(new Error('Test error from React Native'));
```

To check native crash capture, call `client.crash()` in a release build. The report arrives at once on Android
and after the next launch on iOS.

Stack traces from release builds point into the minified bundle until source maps are uploaded. Set up
[Symbolication](#symbolication) before the first release.

## Configuration

### Attributes

Custom attributes are key-value pairs that can be added to your error reports. They are used in report aggregation,
sorting and filtering, can provide better contextual data for an error, and much more. See
[Indexing Attributes](/error-reporting/project-setup/attributes/) for how they are indexed and used across
Backtrace. By default, attributes such as application name and version are populated automatically. If Backtrace cannot find them, you need to provide them
manually via the `userAttributes` option.

There are several places where attributes can be added, modified or deleted.

#### Attach attributes object to BacktraceClient

It is possible to include an attributes object during [`BacktraceClient`](#backtraceclient) initialization. This list of
attributes will be included with every error report, referred to as global attributes.

```ts
// Create an attributes object that can be modified throughout runtime
const attributes: Record<string, unknown> = {
    release: 'PROD',
};

// Client options
const options: BacktraceConfiguration = {
    url: 'https://submit.backtrace.io/<universe>/<token>/json',

    // Attach the attributes object
    userAttributes: attributes,
};

// Initialize the client
const client = BacktraceClient.initialize(options);
```

Attributes given as a function are evaluated each time a report is created:

```ts
import { AppState } from 'react-native';

// Client options
const options: BacktraceConfiguration = {
    url: 'https://submit.backtrace.io/<universe>/<token>/json',

    // Evaluated for every report
    userAttributes: () => ({
        'app.state': AppState.currentState,
    }),
};

// Initialize the client
const client = BacktraceClient.initialize(options);
```

#### Add attributes during application runtime

Global attributes can also be set at runtime, for example after a user logs in.

```ts
const client = BacktraceClient.initialize(options);
...

client.addAttribute({
    "clientID": "de6faf4d-d5b5-486c-9789-318f58a14476"
})
```

A function passed to `addAttribute` is evaluated each time a report is created:

```ts
const client = BacktraceClient.initialize(options);
...

client.addAttribute(() => ({
    'session.uptime.seconds': Math.round(performance.now() / 1000),
}));
```

#### Add attributes to an error report

The attributes list of a `BacktraceReport` object can be directly modified.

```ts
const report: BacktraceReport = new BacktraceReport('My error message', { myReportKey: 'myValue' });
report.attributes['myReportKey'] = 'New value';
```

### File Attachments

Files can be attached to every report through the client options or `client.addAttachment`, or to a single report
when it is created. See [File Attachments](/error-reporting/platform-integrations/file-attachments/).

```ts
// Import attachment types from @backtrace/react-native
import { BacktraceStringAttachment, BacktraceUint8ArrayAttachment } from "@backtrace/react-native";

// BacktraceStringAttachment is for text content such as a log file
const stringAttachment = new BacktraceStringAttachment("logfile.txt", "This is the start of my log")


// Client options
const options = {
    url: "https://submit.backtrace.io/<universe>/<token>/json",

    // Attach the files to all reports
    attachments: [stringAttachment],
}

const client = BacktraceClient.initialize(options);

// Later decide to add an attachment to all reports
client.addAttachment(stringAttachment)

// After catching an exception and generating a report
try {
    throw new Error("Caught exception!")
} catch (error) {
    const report = new BacktraceReport(error, {}, [stringAttachment]);
    client.send(report);
}
```

### Breadcrumbs

Breadcrumbs are snippets of chronological data tracing runtime events. This SDK records a number of events by default,
and manual breadcrumbs can also be added.

See [Breadcrumbs in the web console](/error-reporting/web-console/debug/#breadcrumbs).

#### Breadcrumbs Configuration

```ts
import { BacktraceClient, BacktraceConfiguration } from '@backtrace/react-native';

// Client options
const options: BacktraceConfiguration = {
    // ignoring all but breadcrumbs config for simplicity
    breadcrumbs: {
        // breadcrumbs configuration
    },
};

// Initialize the client
const client = BacktraceClient.initialize(options);
```

Options are listed in [Breadcrumbs options](#breadcrumbs-options).

#### Default Breadcrumbs

| Type    | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| Console | Adds a breadcrumb every time console log is being used by the developer. |

#### Intercepting Breadcrumbs

If PII or other information needs to be filtered from a breadcrumb, you can use the intercept function to skip or filter
out the sensitive information. Any `RawBreadcrumb` returned will be used for the breadcrumb. If undefined is returned, no
breadcrumb will be added.

#### Manual Breadcrumbs

In addition to all of the default breadcrumbs that are automatically collected, you can also manually add breadcrumbs of
your own.

```ts
client.breadcrumbs?.info('This is a manual breadcrumb.', {
    customAttr: 'value',
});
```

### Application Stability Metrics

The SDK can send application stability metrics, viewable in the Backtrace UI.

See [Stability Metrics](/error-reporting/project-setup/stability-metrics/).

#### Metrics Configuration

```ts
const options: BacktraceConfiguration = {
    url: SUBMISSION_URL,
    metrics: {
        enable: true,
    },
};
```

Options are listed in [Metrics options](#metrics-options).

#### Metrics Usage

```ts
// metrics will be undefined if not enabled
client.metrics?.send();
```

### ANR Detection

The SDK can detect Application Not Responding (ANR) errors on Android, where the main thread stays blocked for longer
than a set time (default 5 seconds), and reports them as `Hang` errors. Two detection methods are available:

- `BacktraceAnrType.Threshold` watches the main thread from a background thread and reports while the application is
  still hung. It works on all supported Android versions.
- `BacktraceAnrType.ApplicationExit` reads the ANRs Android recorded for earlier runs of the application (Android 11,
  API 30, and above) and reports them on the next start. The thread dump Android captured is attached as
  `anr-stacktrace.txt`. Each ANR is reported once.

```ts
import { BacktraceAnrType, BacktraceConfiguration } from '@backtrace/react-native';

const options: BacktraceConfiguration = {
    url: SUBMISSION_URL,
    anr: {
        enable: true,
        type: BacktraceAnrType.Threshold,
    },
};
```

Options are listed in [ANR options](#anr-options).

### Offline database support

The Backtrace react-native SDK can cache generated reports and crashes to local disk before sending them to Backtrace.
Enabling it is recommended: an application can crash before the SDK finishes sending, and on a slow network a closing
application may not finish the upload. Cached reports are sent on the next launch.

With the offline database enabled, the SDK:

- Keeps reports while the device is offline or the service is unavailable.
- Captures crashes.
- Lets you decide whether and when to send reports.

Offline database support is disabled by default. To enable it, set `enable: true` and the path to the directory where
Backtrace can store crash data.

```ts
const client = BacktraceClient.initialize({
    // ignoring all but database config for simplicity
    database: {
        enable: true,
        path: `${BacktraceClient.applicationDataPath}/path/to/dir`,
        captureNativeCrashes: true,
    },
});
```

`BacktraceClient.applicationDataPath` returns a base path for the database directory:

- Android: the files directory of the application context
- iOS: the application cache directory

All database options are listed in [Database options](#database-options).

#### Native crash support

The SDK captures crashes in the native layer, which JavaScript code cannot observe. Native crash reports differ from
JavaScript reports in a few ways:

- Attribute values set at initialization or with `addAttribute` are included. Attributes computed by a callback are
  not.
- `beforeSend` and `skipReport` apply to JavaScript reports only.
- Android native crashes are sent at crash time by a separate crash-handler process. Unhandled Java exceptions are
  sent before the process exits or on the next launch. iOS native crashes are sent on the next launch.

Native crash reports need debug symbols to be readable. See
[Symbolicate native crashes](#symbolicate-native-crashes).

#### Manual database operations

The `BacktraceDatabase` instance, available as `client.database`, sends or discards the stored reports on demand. This
is mainly useful with `autoSend` disabled.

```ts
// send the stored reports, keep the ones that fail
client.database.send();
// send the stored reports, then remove all of them whether or not the send succeeded
client.database.flush();
```

## Symbolication

Readable stack traces from release builds need three kinds of uploads: source maps for JavaScript, the mapping file for
ProGuard and R8 builds on Android, and debug symbols for native crashes.

### Upload source maps

Error reports from a bundled application are based on minified code: stack frames point into the generated bundle
(`main.jsbundle` on iOS, `index.android.bundle` on Android), not into your source files. Upload source maps to resolve
the frames back to your original files, lines, and function names.

:::note
Source map symbolication applies to release builds. Debug builds run unminified JavaScript from the Metro development
server; their stack traces show function names and development-bundle line numbers, not source files.
:::

To set up source map support:

1. Create a `.backtracejsrc` configuration file in the main application folder. The file format is shared with the
   other Backtrace JavaScript SDKs and is described in the
   [Source Map feature documentation](/error-reporting/platform-integrations/source-map/#step-3-create-a-backtracejsrc-configuration-file).

2. Install the upload tooling:

```
$ npm install --save-dev @backtrace/javascript-cli @backtrace/sourcemap-tools
```

3. Set the Backtrace serializer in `metro.config.js`. It writes a debug id into every release bundle and its source map.
   Backtrace uses the id to match a report to the right source map.

```js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const backtraceSourceMapProcessor = require('@backtrace/react-native/scripts/processSourceMap');

const config = {
    serializer: {
        customSerializer: backtraceSourceMapProcessor.processSourceMap,
    },
};
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

4. Add the upload step to your native build. Every release build then uploads its source map.

**On Android:**

Enable source map generation in `app/build.gradle` by uncommenting the hermes source map flags. To upload the generated
source maps to Backtrace, import the gradle task available in the `@backtrace/react-native` library:

```gradle
apply from: "$rootDir/../node_modules/@backtrace/react-native/android/upload-sourcemaps.gradle"
```

Once you import the gradle task, add it to your flow for any build/assemble tasks:

```gradle
tasks.matching {
    it.name.startsWith("assemble") || it.name.startsWith("build")
}.configureEach { task ->
     task.finalizedBy("uploadSourceMapsToBacktrace")
}
```

**On iOS:**

In Xcode, select the app target, open `Build Phases`, expand `Bundle React Native code and images`, and replace the
script with the version below. The `WITH_ENVIRONMENT`, `REACT_NATIVE_XCODE` and first `/bin/sh` lines are the phase's
existing content. `SOURCEMAP_FILE` has to be exported before that first `/bin/sh` line, or React Native does not write
a source map.

```bash
set -e
project_directory="$(pwd)/.."
export SOURCEMAP_FILE="$project_directory/main.jsbundle.map"

WITH_ENVIRONMENT="$REACT_NATIVE_PATH/scripts/xcode/with-environment.sh"
REACT_NATIVE_XCODE="$REACT_NATIVE_PATH/scripts/react-native-xcode.sh"

/bin/sh -c "$WITH_ENVIRONMENT $REACT_NATIVE_XCODE"

source_map_upload="$project_directory/node_modules/@backtrace/react-native/scripts/ios-sourcemap-upload.sh"
backtrace_js_config="$project_directory/.backtracejsrc"

/bin/sh -c "$source_map_upload $SOURCEMAP_FILE $TARGET_BUILD_DIR/.backtrace-sourcemap-id $backtrace_js_config $project_directory"
```

The upload script skips Debug builds, which carry no debug id, so the phase is safe to keep for development builds. On
a Release build it reports a missing source map, debug id or configuration file as an Xcode warning instead of failing
the build.

Reports from a build that carries a debug id can be symbolicated after the fact: upload that build's source map and
[reprocess the affected errors](/error-reporting/project-setup/object-reprocessing/). Reports from a build made without
the serializer carry no debug id and cannot be matched to a source map.

#### Advanced use cases

Backtrace generates `.backtrace-sourcemap-id` in the application build directory. The file contains the debug id
attached to each source file. The debug id file path can be modified by setting the `DEBUG_ID_PATH` environment
variable to the path to the file. For example:

```
DEBUG_ID_PATH=/path/to/backtrace/debug/id/backtrace-javascript/.debug_id
```

The file directory should be created before building the application.

### Deobfuscate ProGuard and R8 builds

Minified Android release builds obfuscate Java class and method names. Backtrace deobfuscates unhandled Java
exception and ANR reports with the mapping file uploaded under the report's `symbolication_id`. JavaScript reports
keep using source maps. Native crash reports keep using native symbols.

The package ships the keep rules the native crash reporter needs. Unlike the
[Android SDK setup](/error-reporting/platform-integrations/android/proguard-deobfuscation/), no rules have to be
added to your app.

1. Generate a UUID for the build, for example with `uuidgen`. Every build that changes Java or Kotlin code, a
   dependency, or the shrinker rules produces a different mapping file and needs its own id.

2. Enable ProGuard symbolication and pass the id. The SDK sends it as the `symbolication_id` attribute on every
   report.

```ts
const options: BacktraceConfiguration = {
    url: 'https://submit.backtrace.io/<universe>/<token>/json',
    proguard: {
        enable: true,
        symbolicationId: '<uuid generated for this build>',
    },
};
```

3. Upload the mapping file written by that build under the same id, using a
   [symbol access token](/error-reporting/symbols/symbol-access-token/):

```bash
curl --data-binary @android/app/build/outputs/mapping/release/mapping.txt -X POST -H "Expect:" "https://submit.backtrace.io/<universe>/<symbol-access-token>/proguard?symbolication_id=<uuid>"
```

Add the upload to the release automation that already uploads source maps.

### Symbolicate native crashes

With [native crash support](#native-crash-support) enabled, the SDK also reports crashes from the native layer. Native
reports contain instruction addresses that need matching debug symbols, not source maps, to produce readable call
stacks.

- iOS: generate dSYM files for your release builds and upload them to your project. See
  [Upload Debug Symbols](/error-reporting/platform-integrations/ios/setup/#upload-debug-symbols).
- Android: upload the native symbols for your application's shared libraries. See
  [Upload Symbols to Your Project](/error-reporting/symbols/upload-symbols-to-project/).

## Advanced SDK Features

### BacktraceClient

`BacktraceClient` is the main SDK class. Error monitoring starts when this singleton object is instantiated, and it will
compose and send reports for unhandled errors and unhandled promise rejections. It can also be used to manually send
reports from exceptions and rejection handlers. Do not create more than one instance of this object.

All options are listed in [`BacktraceClient` options](#backtraceclient-options).

### Manually send an error

There are several ways to send an error to Backtrace:

```ts
// send as a string
await client.send('This is a string!');

// send as an Error
await client.send(new Error('This is an Error!'));

// as a BacktraceReport (string)
await client.send(new BacktraceReport('This is a report with a string!'));

// as a BacktraceReport (Error)
await client.send(new BacktraceReport(new Error('This is a report with a string!')));
```

### Modify/skip error reports

The `beforeSend` callback runs before every report is sent. Use it to scrub PII or to extend attributes with data the
application has at the time of the exception. Return `undefined` to skip the report.

```ts
const client = BacktraceClient.initialize({
    url: SUBMISSION_URL,
    beforeSend: (data: BacktraceData) => {
        // skip the report by returning a null from the callback
        if (!shouldSendReportToBacktrace(data)) {
            return undefined;
        }
        // apply custom attribute
        data.attributes['new-attribute'] = 'apply-data-in-callback';
        return data;
    },
});
```

### Automatically upload source maps

This section moved to [Upload source maps](#upload-source-maps) under Symbolication.

### SDK Method Overrides

`BacktraceClient.builder` is used to override default `BacktraceClient` methods. File and http operation overrides, for
example, can be used to implement custom encryption for data at rest or in motion.

> Do not use these operations to modify the data objects. See [Modify/skip error reports](#modifyskip-error-reports) for
> the correct method to modify a report before sending it to Backtrace.

```ts
const client = BacktraceClient.builder(options)
    .useRequestHandler(requestHandler)
    .useBreadcrumbSubscriber(breadcrumbSubscriber)
    .addAttributeProvider(attributeProvider)
    .build();
```

## Configuration Reference

Pass these options to `BacktraceClient.initialize`. Only `url` is required.

### BacktraceClient options

| Option Name                         | Type                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                       | Default |
| ----------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `url`                               | String                                              | Required. Submission URL to send errors to.                                                                                                                                                                                                                                                                                                                                                                       |         |
| `token`                             | String                                              | The submission token for error ingestion. This is required only if submitting directly to a Backtrace URL. (uncommon)                                                                                                                                                                                                                                                                                             |         |
| `userAttributes`                    | Dictionary                                          | Additional attributes that can be filtered and aggregated against in the Backtrace UI.                                                                                                                                                                                                                                                                                                                            |         |
| `attachments`                       | BacktraceAttachment[]                               | Additional files to be sent with error reports. See [File Attachments](#file-attachments)                                                                                                                                                                                                                                                                                                                         |         |
| `beforeSend`                        | (data: BacktraceData) => BacktraceData \| undefined | Triggers an event every time an exception in the managed environment occurs, which allows you to skip the report (by returning a null value) or to modify data that library collected before sending the report. You can use the BeforeSend event to extend attributes or JSON object data based on data the application has at the time of exception. See [Modify/skip error reports](#modifyskip-error-reports) |         |
| `skipReport`                        | (report: BacktraceReport) => boolean                | If you want to ignore specific types of error reports, we recommend that you use the skipReport callback. By using it, based on the data generated in the report, you can decide to filter the report, or send it to Backtrace.                                                                                                                                                                                   |         |
| `captureUnhandledErrors`            | Boolean                                             | Capture uncaught errors                                                                                                                                                                                                                                                                                                                                                                                           | `true`  |
| `captureUnhandledPromiseRejections` | Boolean                                             | Capture unhandled promise rejections                                                                                                                                                                                                                                                                                                                                                                              | `true`  |
| `timeout`                           | Integer                                             | How long to wait in ms before timing out the connection                                                                                                                                                                                                                                                                                                                                                           | `15000` |
| `ignoreSslCertificate`              | Boolean                                             | Ignore SSL Certificate errors                                                                                                                                                                                                                                                                                                                                                                                     | `false` |
| `rateLimit`                         | Integer                                             | Limits the number of reports the client will send per minute. If set to '0', there is no limit. If set to a value greater than '0' and the value is reached, the client will not send any reports until the next minute.                                                                                                                                                                                          | `0`     |
| `metrics`                           | BacktraceMetricsOptions                             | See [Backtrace Stability Metrics](#application-stability-metrics)                                                                                                                                                                                                                                                                                                                                                 |         |
| `breadcrumbs`                       | BacktraceBreadcrumbsSettings                        | See [Backtrace Breadcrumbs](#breadcrumbs)                                                                                                                                                                                                                                                                                                                                                                         |         |
| `database`                          | BacktraceDatabaseSettings                           | See [Backtrace Database](#offline-database-support)                                                                                                                                                                                                                                                                                                                                                               |         |
| `anr`                               | BacktraceAnrConfiguration                           | See [ANR Detection](#anr-detection)                                                                                                                                                                                                                                                                                                                                                                               |         |
| `proguard`                          | BacktraceProguardConfiguration                      | See [Deobfuscate ProGuard and R8 builds](#deobfuscate-proguard-and-r8-builds)                                                                                                                                                                                                                                                                                                                                     |         |

### Breadcrumbs options

| Option Name          | Type                                                       | Description                                                                                                                                                   | Default         |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `enable`             | Boolean                                                    | Determines if the breadcrumbs support is enabled. By default the value is set to true.                                                                        | `true`          |
| `logLevel`           | BreadcrumbLogLevel                                         | Specifies which log level severity to include. By default all logs are included.                                                                              | All Logs        |
| `eventType`          | BreadcrumbType                                             | Specifies which breadcrumb type to include. By default all types are included.                                                                                | All Types       |
| `maximumBreadcrumbs` | Number                                                     | Specifies maximum number of breadcrumbs stored by the library. By default, only 100 breadcrumbs will be stored.                                               | `100`           |
| `intercept`          | (breadcrumb: RawBreadcrumb) => RawBreadcrumb \| undefined; | Inspects breadcrumb and allows to modify it. If the undefined value is being returned from the method, no breadcrumb will be added to the breadcrumb storage. | All Breadcrumbs |

### Metrics options

| Option Name            | Type    | Description                                                                                                                                                                                                                                                                                                             | Default                       |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `metricsSubmissionUrl` | String  | Metrics server hostname. By default the value is set to https://events.backtrace.io.                                                                                                                                                                                                                                    | `https://events.backtrace.io` |
| `enable`               | Boolean | Determines if the metrics support is enabled. By default the value is set to true.                                                                                                                                                                                                                                      | `true`                        |
| `autoSendInterval`     | Number  | Indicates how often crash free metrics are sent to Backtrace. The interval is a value in ms. By default, session events are sent on application startup/finish, and every 30 minutes while the application is running. If set to 0, auto send is disabled and the application must call `client.metrics.send()` itself. | On application startup/finish |
| `size`                 | Number  | Indicates how many events the metrics storage can store before auto submission.                                                                                                                                                                                                                                         | `50`                          |

### ANR options

| Option Name                   | Type               | Description                                                                                                         | Default     |
| ----------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| `enable`                      | Boolean            | Determines if ANR detection is enabled.                                                                             | `false`     |
| `type`                        | `BacktraceAnrType` | Detection mechanism: `Threshold` or `ApplicationExit`.                                                              | `Threshold` |
| `timeout`                     | Number             | Time in milliseconds the main thread stays blocked before an ANR is reported. Applies to the `Threshold` type only. | `5000`      |
| `disableWhenDebuggerAttached` | Boolean            | When true, detection is disabled while a debugger is attached. Applies to the `Threshold` type only.                | `false`     |

### Database options

| Option Name               | Type    | Description                                                                                                                                                                  | Default |
| ------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `enable`                  | Boolean | Enable/disable offline database support.                                                                                                                                     | false   |
| `path`                    | String  | Required when the database is enabled. Local storage path for crash data.                                                                                                    | -       |
| `createDatabaseDirectory` | Boolean | Allow the SDK to create the offline database directory.                                                                                                                      | true    |
| `autoSend`                | Boolean | Sends reports to the server based on the retry settings. If the value is set to 'false', you can use the Flush or Send methods as an alternative.                            | true    |
| `maximumNumberOfRecords`  | Number  | The maximum number of reports stored in the offline database. When the limit is reached, the oldest reports are removed. If the value is equal to '0', then no limit is set. | 8       |
| `retryInterval`           | Number  | The amount of time (in ms) to wait between retries if the database is unable to send a report.                                                                               | 60 000  |
| `maximumRetries`          | Number  | The maximum number of retries to attempt if the database is unable to send a report.                                                                                         | 3       |
| `captureNativeCrashes`    | Boolean | Capture and symbolicate stack traces for native crashes if the runtime supports this. A crash report is generated, stored locally, and uploaded upon next start.             | false   |
