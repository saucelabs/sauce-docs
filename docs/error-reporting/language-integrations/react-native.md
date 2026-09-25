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
application to Backtrace. This guide covers setup, configuration and symbolication.

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

- React Native 0.72+, verified up to 0.87
- React 18+
- Hermes JavaScript engine (JavaScriptCore is not supported)
- New Architecture and Legacy Architecture (React Native 0.82 and later are New Architecture only)

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

### Install the Package

```
$ npm install @backtrace/react-native
```

On iOS, install the pods after adding the package:

```
$ cd ios
$ pod install
```

### Integrate the SDK

Add the following code at the top of `index.js`, before `AppRegistry.registerComponent`. The SDK starts before other
application code runs.

```js
// Import the BacktraceClient from @backtrace/react-native
import { BacktraceClient } from '@backtrace/react-native';

// Configure client options
const options = {
    // Submission url
    // <universe> is the subdomain of your Backtrace instance (<universe>.sp.backtrace.io)
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

To check native crash capture, call `client.crash()` in a release build with no debugger attached. The report arrives
at once on Android and after the next launch on iOS.

Stack traces from release builds point into the minified bundle until source maps are uploaded. Set up
[Symbolication](#symbolication) before the first release.

## Configuration

### Attributes

Custom attributes are key-value pairs that can be added to your error reports. They are used in report aggregation,
sorting and filtering, can provide better contextual data for an error, and much more. See
[Indexing Attributes](/error-reporting/project-setup/attributes/) for how they are indexed and used across
Backtrace. By default, attributes such as application name and version are populated automatically. If Backtrace cannot find them, you need to provide them
manually via the `userAttributes` option.

Attributes can be added, modified or deleted in several places.

#### Attach an Attributes Object to BacktraceClient

It is possible to include an attributes object during [`BacktraceClient`](#backtraceclient) initialization. This list of
attributes will be included with every error report, referred to as global attributes.

```ts
// Attributes sent with every report. Change them at runtime with client.addAttribute
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

#### Add Attributes During Application Runtime

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

#### Add Attributes to an Error Report

The attributes list of a `BacktraceReport` object can be directly modified.

```ts
const report: BacktraceReport = new BacktraceReport('My error message', { myReportKey: 'myValue' });
report.attributes['myReportKey'] = 'New value';
```

### File Attachments

Files can be attached to every report through the client options or `client.addAttachment`, or to a single report
when it is created. See [File Attachments](/error-reporting/platform-integrations/file-attachments/).

```ts
import { BacktraceClient, BacktraceReport, BacktraceStringAttachment } from "@backtrace/react-native";

// BacktraceStringAttachment is for text content such as a log file
const stringAttachment = new BacktraceStringAttachment("logfile.txt", "This is the start of my log")

// Client options
const options = {
    url: "https://submit.backtrace.io/<universe>/<token>/json",

    // Attach the files to all reports
    attachments: [stringAttachment],
}

const client = BacktraceClient.initialize(options);

// Later decide to add another attachment to all reports
client.addAttachment(new BacktraceStringAttachment("session.txt", "Added after initialization"))

// After catching an exception and generating a report
try {
    throw new Error("Caught exception!")
} catch (error) {
    const report = new BacktraceReport(error as Error, {}, [
        new BacktraceStringAttachment("error-context.txt", "Only on this report"),
    ]);
    client.send(report);
}
```

JavaScript reports sent in the same session accept every attachment type. Native crash reports and reports sent on a
later launch include file attachments only. Use `BacktraceFileAttachment` for those:

```ts
import { BacktraceClient, BacktraceFileAttachment, ReactNativeFileSystem } from '@backtrace/react-native';

const logPath = `${BacktraceClient.applicationDataPath}/app.log`;
client.addAttachment(new BacktraceFileAttachment(new ReactNativeFileSystem(), logPath, 'app.log'));
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
    url: SUBMISSION_URL,
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
| Console | Adds a breadcrumb for every `console.log`, `console.warn`, `console.error`, `console.debug` and `console.trace` call. `console.info` and other methods are not recorded. |
| HTTP    | Adds a breadcrumb for every `fetch` and `XMLHttpRequest` request, with the method, the full URL and the status. |
| Application state | Adds a breadcrumb when the application becomes active or moves to the background, when it becomes inactive on iOS, and on blur and focus on Android. |
| Memory warning | Adds a warning breadcrumb when iOS reports low memory. Not available on Android. |
| Dimension change | Adds a breadcrumb when the window or screen size changes.                |
| Report  | Adds a breadcrumb with the message of each report passed to `send`, including reports that `skipReport` drops. |

#### Intercepting Breadcrumbs

If PII or other information needs to be filtered from a breadcrumb, you can use the intercept function to skip or filter
out the sensitive information. Any `RawBreadcrumb` returned will be used for the breadcrumb. If undefined is returned, no
breadcrumb will be added. HTTP breadcrumbs record the full request URL, query string included, and the SDK's own
submission requests carry the submission token in the URL.

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
  still hung. It works on all supported Android versions. The check runs once per `timeout` period, and a hang
  shorter than two periods can go unreported.
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

### Offline Database Support

The Backtrace react-native SDK can cache generated reports and crashes to local disk before sending them to Backtrace.
Enabling it is recommended: an application can crash before the SDK finishes sending, and on a slow network a closing
application may not finish the upload. Cached reports are sent on the next launch.

With the offline database enabled, the SDK:

- Keeps reports while the device is offline or the service is unavailable.
- Captures crashes.
- Lets you decide whether and when to send reports.

Offline database support is disabled by default. To enable it, set `enable: true` and the path to the directory where
Backtrace can store crash data. Set `createDatabaseDirectory: true` to let the SDK create the directory.

```ts
const client = BacktraceClient.initialize({
    url: SUBMISSION_URL,
    database: {
        enable: true,
        path: `${BacktraceClient.applicationDataPath}/path/to/dir`,
        createDatabaseDirectory: true,
        captureNativeCrashes: true,
    },
});
```

`BacktraceClient.applicationDataPath` returns a base path for the database directory:

- Android: the files directory of the application context
- iOS: the application cache directory

All database options are listed in [Database options](#database-options).

#### Native Crash Support

The SDK captures crashes in the native layer, which JavaScript code cannot observe. Native crash reports differ from
JavaScript reports in a few ways:

- Attribute values set at initialization or with `addAttribute` are included. Attributes computed by a callback are
  not.
- `beforeSend` and `skipReport` apply to JavaScript reports only.
- Android native crashes are sent at crash time by a separate crash-handler process. Unhandled Java exceptions are
  sent before the process exits or on the next launch. iOS native crashes are sent on the next launch.
- Only file attachments (`BacktraceFileAttachment`) are included. See [File Attachments](#file-attachments).
- On iOS, the SDK also sends an `OOMException` report on the next launch when the previous session ended in the
  foreground without a crash. Debugger sessions and OS or application updates are excluded. A forced kill in the
  foreground is reported the same way.

Native crash reports need debug symbols to be readable. See
[Symbolicate native crashes](#symbolicate-native-crashes).

#### Manual Database Operations

The `BacktraceDatabase` instance, available as `client.database`, sends or discards the stored reports on demand. Use it
when `autoSend` is disabled.

```ts
// database is undefined when the offline database is disabled
// send the stored reports, stop at the first failure and keep every report not sent
client.database?.send();
// send the stored reports, then remove all of them whether or not the send succeeded
client.database?.flush();
```

## Symbolication

Readable stack traces from release builds need three kinds of uploads: source maps for JavaScript, the mapping file for
ProGuard and R8 builds on Android, and debug symbols for native crashes.

### Upload Source Maps

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

2. Install the upload tooling (the Metro serializer in the next step imports `@backtrace/sourcemap-tools`):

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

Hermes writes a source map for every release build unless a `hermesFlags` override drops `-output-source-map`. To
upload it, add the Backtrace task at the end of `android/app/build.gradle`:

```gradle
apply from: "$rootDir/../node_modules/@backtrace/react-native/android/upload-sourcemaps.gradle"
```

Then run it after each release build:

```gradle
tasks.matching {
    it.name == "assembleRelease" || it.name == "bundleRelease"
}.configureEach { task ->
    task.finalizedBy("uploadSourceMapsToBacktrace")
}
```

**On iOS:**

In Xcode, select the app target, open `Build Phases` and expand `Bundle React Native code and images`. Add the lines
marked below around the phase's existing script. React Native writes a source map only when `SOURCEMAP_FILE` is
exported before its bundling line. (The existing lines are from the React Native 0.83 template and may differ in
your project.)

```bash
set -e
# added for Backtrace
project_directory="$(pwd)/.."
export SOURCEMAP_FILE="$project_directory/main.jsbundle.map"

# existing lines of the phase, unchanged
WITH_ENVIRONMENT="$REACT_NATIVE_PATH/scripts/xcode/with-environment.sh"
REACT_NATIVE_XCODE="$REACT_NATIVE_PATH/scripts/react-native-xcode.sh"

/bin/sh -c "\"$WITH_ENVIRONMENT\" \"$REACT_NATIVE_XCODE\""
# end of the existing lines

# added for Backtrace
source_map_upload="$project_directory/node_modules/@backtrace/react-native/scripts/ios-sourcemap-upload.sh"
backtrace_js_config="$project_directory/.backtracejsrc"

/bin/bash "$source_map_upload" "$SOURCEMAP_FILE" "$CONFIGURATION_BUILD_DIR/.backtrace-sourcemap-id" "$backtrace_js_config" "$project_directory"
```

The Backtrace serializer writes the debug id file to `$CONFIGURATION_BUILD_DIR`. Under Product > Archive that folder
differs from `$TARGET_BUILD_DIR`, and an archive built with `$TARGET_BUILD_DIR` uploads no source map.

The upload script skips Debug builds, which carry no debug id. On a Release build it reports a missing source map,
debug id or configuration file as an Xcode warning instead of failing the build. When the upload itself fails (for
example without network access), the build fails.

Reports from a build that carries a debug id can be symbolicated after the fact: upload that build's source map and
[reprocess the affected errors](/error-reporting/project-setup/object-reprocessing/). Reports from a build made without
the serializer carry no debug id and cannot be matched to a source map.

#### Advanced Use Cases

The Backtrace serializer writes `.backtrace-sourcemap-id` next to the source map Metro writes during bundling
(`$CONFIGURATION_BUILD_DIR` on iOS, `android/app/build/intermediates/sourcemaps/react/<variant>` on Android). The
file contains the debug id written into the bundle and its source map. The debug id file path can be modified by
setting the `DEBUG_ID_PATH` environment variable to the path to the file. For example:

```
DEBUG_ID_PATH=/path/to/backtrace/debug/id/backtrace-javascript/.debug_id
```

The file directory should be created before building the application.

### Deobfuscate ProGuard and R8 Builds

Minified Android release builds obfuscate Java class and method names. Backtrace deobfuscates unhandled Java
exception and ANR reports with the mapping file uploaded under the report's `symbolication_id`. JavaScript reports
keep using source maps. Native crash reports keep using native symbols.

The package ships the keep rules the native crash reporter needs. Unlike the
[Android SDK setup](/error-reporting/platform-integrations/android/proguard-deobfuscation/), no rules have to be
added to your app.

1. Generate a UUID for the build, for example with `uuidgen`. Every build that changes Java or Kotlin code, a
   dependency, or the shrinker rules produces a different mapping file and needs its own id.

2. Enable ProGuard symbolication and pass the id. The SDK sends it as the `symbolication_id` attribute on every
   Android report.

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

Options are listed in [ProGuard options](#proguard-options).

### Symbolicate Native Crashes

With [native crash support](#native-crash-support) enabled, the SDK also reports crashes from the native layer. Native
reports contain instruction addresses that need matching debug symbols, not source maps, to produce readable call
stacks.

- iOS: generate dSYM files for your release builds and upload them to your project. See
  [Upload Debug Symbols](/error-reporting/platform-integrations/ios/setup/#upload-debug-symbols). React Native ships
  Hermes, `React.framework` and `ReactNativeDependencies.framework` as prebuilt binaries without dSYMs. The matching
  dSYM archives are on Maven Central. Upload them with your app's dSYMs.
- Android: upload the native symbols for your application's shared libraries. See
  [Upload Symbols to Your Project](/error-reporting/symbols/upload-symbols-to-project/).

## Advanced SDK Features

### BacktraceClient

`BacktraceClient` is the main SDK class. Error monitoring starts when this singleton object is instantiated, and it will
compose and send reports for unhandled errors and unhandled promise rejections. It can also be used to manually send
reports from exceptions and rejection handlers. Do not create more than one instance of this object.

All options are listed in [`BacktraceClient` options](#backtraceclient-options).

### Manually Send an Error

`client.send()` accepts a string, an `Error`, or a `BacktraceReport`:

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

### Modify/Skip Error Reports

The `beforeSend` callback runs before every report is sent. Use it to scrub PII or to extend attributes with data the
application has at the time of the exception. Return `undefined` to skip the report.

```ts
const client = BacktraceClient.initialize({
    url: SUBMISSION_URL,
    beforeSend: (data: BacktraceData) => {
        // skip the report by returning undefined from the callback
        if (!shouldSendReportToBacktrace(data)) {
            return undefined;
        }
        // apply custom attribute
        data.attributes['new-attribute'] = 'apply-data-in-callback';
        return data;
    },
});
```

### Error Boundary

`ErrorBoundary` reports errors thrown while React renders components. Initialize `BacktraceClient` before the
boundary renders, then wrap your component tree:

```tsx
import { ErrorBoundary } from '@backtrace/react-native';
import { Text } from 'react-native';

export default function App() {
    return (
        <ErrorBoundary name="app" fallback={<Text>Something went wrong.</Text>}>
            <MainScreen />
        </ErrorBoundary>
    );
}
```

The report includes the React component stack as a separate `component-stack` thread and sets the
`errorboundary.name` attribute (default `main`). `fallback` is an element, or a function that takes the error and
returns an element. Without a valid fallback, the boundary renders nothing after an error.

### SDK Method Overrides

`BacktraceClient.builder` is used to override default `BacktraceClient` methods. File and http operation overrides, for
example, can be used to implement custom encryption for data at rest or in motion.

> Do not use these operations to modify the data objects. See [Modify/skip error reports](#modifyskip-error-reports) for
> the correct method to modify a report before sending it to Backtrace.

```ts
import type { BacktraceAttributeProvider, BacktraceRequestHandler } from '@backtrace/sdk-core';

const client = BacktraceClient.builder(options)
    .useRequestHandler(requestHandler)
    .useBreadcrumbSubscriber(breadcrumbSubscriber)
    .addAttributeProvider(attributeProvider)
    .build();
```

The types come from `@backtrace/sdk-core`, a dependency of `@backtrace/react-native` (with pnpm, add it to your app's
dependencies).

## Configuration Reference

Pass these options to `BacktraceClient.initialize`. Only `url` is required.

### BacktraceClient Options

| Option Name                         | Type                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                       | Default |
| ----------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `url`                               | String                                              | Required. Submission URL to send errors to.                                                                                                                                                                                                                                                                                                                                                                       |         |
| `token`                             | String                                              | Submission token for error ingestion. Needed only when submitting directly to a Backtrace URL (uncommon). Native crash and iOS `OOMException` reports ignore it. For those, include the token in `url`.                                                                                                                                                                                                           |         |
| `userAttributes`                    | `Record<string, unknown> \| (() => Record<string, unknown>)` | Additional attributes that can be filtered and aggregated against in the Backtrace UI. A function is evaluated for every report.                                                                                                                                                                                                                                                                                  |         |
| `attachments`                       | BacktraceAttachment[]                               | Additional files to be sent with error reports. See [File Attachments](#file-attachments)                                                                                                                                                                                                                                                                                                                         |         |
| `beforeSend`                        | (data: BacktraceData) => BacktraceData \| undefined | Runs before each JavaScript report is sent. Modify the report data, or return `undefined` to skip it. See [Modify/skip error reports](#modifyskip-error-reports)                                                                                                                                                                                                                                                  |         |
| `skipReport`                        | (report: BacktraceReport) => boolean                | Runs for each JavaScript report. Return `true` to drop it.                                                                                                                                                                                                                                                                                                                                                        |         |
| `captureUnhandledErrors`            | Boolean                                             | Capture uncaught errors                                                                                                                                                                                                                                                                                                                                                                                           | `true`  |
| `captureUnhandledPromiseRejections` | Boolean                                             | Capture unhandled promise rejections                                                                                                                                                                                                                                                                                                                                                                              | `true`  |
| `timeout`                           | Integer                                             | Time in ms before a JavaScript report or metrics request times out. Native crash uploads do not use it.                                                                                                                                                                                                                                                                                                           | `15000` |
| `rateLimit`                         | Integer                                             | Limits the number of reports the client sends in any 60-second window. If set to '0', there is no limit. Reports over the limit are dropped, not queued or stored.                                                                                                                                                                                                                                                | `0`     |
| `metrics`                           | BacktraceMetricsOptions                             | See [Backtrace Stability Metrics](#application-stability-metrics)                                                                                                                                                                                                                                                                                                                                                 |         |
| `breadcrumbs`                       | BacktraceBreadcrumbsSettings                        | See [Backtrace Breadcrumbs](#breadcrumbs)                                                                                                                                                                                                                                                                                                                                                                         |         |
| `database`                          | BacktraceDatabaseConfiguration                      | See [Backtrace Database](#offline-database-support)                                                                                                                                                                                                                                                                                                                                                               |         |
| `anr`                               | BacktraceAnrConfiguration                           | See [ANR Detection](#anr-detection)                                                                                                                                                                                                                                                                                                                                                                               |         |
| `proguard`                          | BacktraceProguardConfiguration                      | See [Deobfuscate ProGuard and R8 builds](#deobfuscate-proguard-and-r8-builds)                                                                                                                                                                                                                                                                                                                                     |         |

### Breadcrumbs Options

| Option Name          | Type                                                       | Description                                                                                                                                                   | Default         |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `enable`             | Boolean                                                    | Enables breadcrumb collection.                                                                                                                                | `true`          |
| `logLevel`           | BreadcrumbLogLevel                                         | Bitmask of the log levels to include. Combine `BreadcrumbLogLevel` values with `\|`. A single value selects only that level.                                  | All Logs        |
| `eventType`          | BreadcrumbType                                             | Bitmask of the breadcrumb types to include. Combine `BreadcrumbType` values with `\|`.                                                                        | All Types       |
| `maximumBreadcrumbs` | Number                                                     | Maximum number of breadcrumbs stored. With the offline database enabled, between half this many and this many are kept.                                       | `100`           |
| `maximumAttributesDepth` | Number \| false                                            | Maximum depth of nested objects in breadcrumb attributes. `false` removes the limit.                                                                          | `2`             |
| `maximumBreadcrumbMessageLength` | Number \| false                                            | Maximum length of a breadcrumb message. `false` removes the limit.                                                                                            | `255`           |
| `maximumBreadcrumbSize` | Number \| false                                            | Maximum size of a single breadcrumb in bytes. Larger breadcrumbs are dropped. `false` removes the limit.                                                      | `65536`         |
| `maximumTotalBreadcrumbsSize` | Number \| false                                            | Maximum total size of stored breadcrumbs in bytes. With the offline database enabled, between half this size and this size is kept. `false` removes the limit. | `1048576`       |
| `intercept`          | (breadcrumb: RawBreadcrumb) => RawBreadcrumb \| undefined  | Inspects and can modify each breadcrumb before it is stored. Return `undefined` to drop it.                                                                   |                 |

### Metrics Options

| Option Name            | Type    | Description                                                                                                                                                                                                                                                                                                             | Default                       |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `metricsSubmissionUrl` | String  | Metrics server hostname.                                                                                                                                                                                                                                                                                                | `https://events.backtrace.io` |
| `enable`               | Boolean | Enables stability metrics.                                                                                                                                                                                                                                                                                              | `true`                        |
| `autoSendInterval`     | Number  | Interval in ms between metrics submissions. Session events are sent at startup and then on this interval. Nothing is sent at exit. With `0`, events go out only from `client.metrics.send()` or when a queue reaches `size`.                                                                                            | `1800000`                     |
| `size`                 | Number  | Maximum events stored before automatic submission.                                                                                                                                                                                                                                                                      | `50`                          |

### ANR Options

| Option Name                   | Type               | Description                                                                                                         | Default     |
| ----------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| `enable`                      | Boolean            | Enables ANR detection. Android only.                                                                                | `false`     |
| `type`                        | `BacktraceAnrType` | Detection mechanism: `Threshold` or `ApplicationExit`.                                                              | `Threshold` |
| `timeout`                     | Number             | Length in milliseconds of one main-thread check period. Applies to the `Threshold` type only.                       | `5000`      |
| `disableWhenDebuggerAttached` | Boolean            | When true and a debugger is attached at initialization, detection stays off for that session. Applies to the `Threshold` type only. | `false`     |

### ProGuard Options

| Option Name       | Type    | Description                                                                                                                               | Default |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `enable`          | Boolean | Marks unhandled Java exception and ANR reports for ProGuard and R8 deobfuscation. Android only.                                           | `false` |
| `symbolicationId` | String  | Id of the mapping file uploaded for this build. Sent as the `symbolication_id` attribute on every Android report when `enable` is `true`. |         |

### Database Options

| Option Name               | Type    | Description                                                                                                                                                                  | Default |
| ------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `enable`                  | Boolean | Enable/disable offline database support.                                                                                                                                     | `false` |
| `path`                    | String  | Required when the database is enabled. Local storage path for crash data.                                                                                                    |         |
| `createDatabaseDirectory` | Boolean | Create the `path` directory when it does not exist. With `false`, the directory has to exist before `BacktraceClient.initialize` is called.                                  | `false` |
| `autoSend`                | Boolean | Sends stored reports at startup and then every `retryInterval`. With `false`, stored reports wait for `client.database?.send()` or `client.database?.flush()`. New reports are still sent when they are created. | `true`  |
| `maximumNumberOfRecords`  | Number  | The maximum number of reports stored in the offline database. When the limit is reached, the oldest reports are removed. With `0`, stored reports from earlier sessions are deleted at startup. | `8`     |
| `retryInterval`           | Number  | Time in ms between retries when sending stored reports fails.                                                                                                                | `60000` |
| `maximumRetries`          | Number  | Send attempts per session. An attempt stops at the first report that fails. Reports that still fail are retried on the next launch.                                          | `3`     |
| `maximumOldSessions`      | Number  | The number of previous sessions whose files, such as breadcrumbs, are kept on disk.                                                                                          | `1`     |
| `captureNativeCrashes`    | Boolean | Capture crashes in the native layer. Requires `enable: true`. Android sends the report at crash time. iOS sends it on the next launch. See [Native Crash Support](#native-crash-support). | `false` |
