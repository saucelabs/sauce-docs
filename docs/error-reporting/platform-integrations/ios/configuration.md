---
id: configuration
title: Configuring Backtrace for iOS
sidebar_label: Configuration
description: Configure Backtrace for your iOS project.
---

Configure Backtrace for your iOS project. This page defines the configuration settings, classes, and methods available with the Backtrace Cocoa SDK.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Usage

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift reference title="Usage Example"
https://github.com/backtrace-labs/backtrace-cocoa/blob/master/Examples/Example-iOS/AppDelegate.swift#L18-L77
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc reference title="Usage Example"
https://github.com/backtrace-labs/backtrace-cocoa/blob/master/Examples/Example-iOS-ObjC/AppDelegate.m#L4-L67
```

</TabItem>
</Tabs>

## Advanced Usage

For more advanced usage of `BacktraceClient`, you can supply `BacktraceClientConfiguration` as a parameter. See the following example:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!, token: "token")
let configuration = BacktraceClientConfiguration(credentials: backtraceCredentials,
                                                 dbSettings: BacktraceDatabaseSettings(),
                                                 reportsPerMin: 10,
                                                 allowsAttachingDebugger: false,
                                                 detectOOM: true)
BacktraceClient.shared = try? BacktraceClient(configuration: configuration)
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
BacktraceCredentials *credentials = [[BacktraceCredentials alloc]
                                     initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]
                                     token: @"token"];

BacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]
                                               initWithCredentials: credentials
                                               dbSettings: [[BacktraceDatabaseSettings alloc] init]
                                               reportsPerMin: 3
                                               allowsAttachingDebugger: NO
                                               detectOOM: TRUE];

BacktraceClient.shared = [[BacktraceClient alloc] initWithConfiguration: configuration error: nil];
```

</TabItem>
</Tabs>

### `BacktraceClientConfiguration`

#### Parameters

| Setting                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                            | Type      | Default       |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------- |
| `credentials` (Swift) or <br/>`initWithCredentials` (Objective-C) | The [`BacktraceCredentials`](/error-reporting/platform-integrations/ios/setup/#initialize-the-backtrace-client) (endpoint URL and submission token) used to initialize the `BacktraceClient`.                                                                                                                                                                                                          | Parameter |
| `dbSettings`                                                      | The [`BacktraceDatabaseSettings`](#database-settings) used to initialize the `BacktraceDatabase`.                                                                                                                                                                                                                                                                                                      | Parameter |
| `reportsPerMin`                                                   | The maximum number of reports per minute that `BacktraceClient` will send.                                                                                                                                                                                                                                                                                                                             | Integer   | 30            |
| `allowsAttachingDebugger`                                         | Specifies whether to send reports when the debugger is connected. <br /><br /> The options are: <br /><ul><li>**false** (Swift) / **NO** (Objective-C): `BacktraceClient` will send reports when the debugger is connected.</li><li> **true** (Swift) / **YES** (Objective-C): `BacktraceClient` won't send reports when the debugger is connected.</li></ul>                                          | Boolean   | false / NO    |
| `detectOOM`                                                       | Specifies whether to detect and send reports for out of memory (OOM) crashes. <br /><br /> The options are: <br /> <ul><li> **false** (Swift) / **FALSE** (Objective-C): `BacktraceClient` won't detect or send reports for out of memory (OOM) crashes.</li><li> **true** (Swift) / **TRUE** (Objective-C): `BacktraceClient` will detect and send reports for out of memory (OOM) crashes.</li></ul> | Boolean   | false / FALSE |

## Database Settings

`BacktraceClient` allows you to customize the initialization of `BacktraceDatabase` for local storage of error reports by supplying a `BacktraceDatabaseSettings` parameter, as follows:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!, token: "token")
let backtraceDatabaseSettings = BacktraceDatabaseSettings()
backtraceDatabaseSettings.maxRecordCount = 1000
backtraceDatabaseSettings.maxDatabaseSize = 10
backtraceDatabaseSettings.retryInterval = 5
backtraceDatabaseSettings.retryLimit = 3
backtraceDatabaseSettings.retryBehaviour = RetryBehaviour.interval
backtraceDatabaseSettings.retryOrder = RetryOder.queue
let backtraceConfiguration = BacktraceClientConfiguration(credentials: backtraceCredentials,
                                                          dbSettings: backtraceDatabaseSettings,
                                                          reportsPerMin: 10)
BacktraceClient.shared = try? BacktraceClient(configuration: backtraceConfiguration)
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
BacktraceCredentials *credentials = [[BacktraceCredentials alloc]
                                     initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]
                                     token: @"token"];

BacktraceDatabaseSettings *backtraceDatabaseSettings = [[BacktraceDatabaseSettings alloc] init];
backtraceDatabaseSettings.maxRecordCount = 1000;
backtraceDatabaseSettings.maxDatabaseSize = 10;
backtraceDatabaseSettings.retryInterval = 5;
backtraceDatabaseSettings.retryLimit = 3;
backtraceDatabaseSettings.retryBehaviour = RetryBehaviourInterval;
backtraceDatabaseSettings.retryOrder = RetryOderStack;

BacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]
                                               initWithCredentials: credentials
                                               dbSettings: backtraceDatabaseSettings
                                               reportsPerMin: 3
                                               allowsAttachingDebugger: NO];

BacktraceClient.shared = [[BacktraceClient alloc] initWithConfiguration: configuration error: nil];
```

</TabItem>
</Tabs>

### `BacktraceDatabaseSettings`

#### Parameters

| Setting           | Description                                                                                                                                                                                                                                                                 | Type    | Default  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| `maxRecordCount`  | The maximum number of records stored in the database. If set to '0', then there is no record limit.                                                                                                                                                                         | Integer | 0        |
| `maxDatabaseSize` | The maximum size of the database in MB. If set to '0', then there is no size limit.                                                                                                                                                                                         | Integer | 0        |
| `retryInterval`   | The amount of time (in seconds) to wait before the next retry if unable to send a report.                                                                                                                                                                                   | Integer | 5        |
| `retryLimit`      | The maximum number of retries to attempt if unable to send a report.                                                                                                                                                                                                        | Integer | 3        |
| `retryBehaviour`  | The retry behaviour if unable to send a report. <br /><br /> The options are: <ul><li>**interval**: If unable to send a report, the database will retry based on the `retryInterval`.</li> <li>**none**: If unable to send a report, the database will not retry.</li></ul> | Enum    | interval |
| `retryOrder`      | The retry order if unable to send a report. <br /><br /> The options are: <ul><li>**queue**: The oldest reports are sent first (FIFO).</li> <li>**stack**: The newest reports are sent first (LIFO).</li></ul>                                                              | Enum    | queue    |

## PLCrashReporter

`BacktraceClient` allows you to customize the configuration of the PLCrashReporter by injecting its instance as follows:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!, token: "token")
let backtraceConfiguration = BacktraceClientConfiguration(credentials: backtraceCredentials)
BacktraceClient.shared = try? BacktraceClient(
    configuration: backtraceConfiguration,
    crashReporter: BacktraceCrashReporter(config: PLCrashReporterConfig.defaultConfiguration()))
// or
BacktraceClient.shared = try? BacktraceClient(
    configuration: backtraceConfiguration,
    crashReporter: BacktraceCrashReporter(reporter: PLCrashReporter.shared()))
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
BacktraceCredentials *credentials = [[BacktraceCredentials alloc]
                                     initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]
                                     token: @"token"];

BacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]
                                                initWithCredentials: credentials];

BacktraceClient.shared = [[BacktraceClient alloc]
                            initWithConfiguration: configuration
                            crashReporter: [[BacktraceCrashReporter alloc] initWithConfig: PLCrashReporterConfig.defaultConfiguration]
                            error: nil];

// or
BacktraceClient.shared = [[BacktraceClient alloc]
                            initWithConfiguration: configuration
                            crashReporter: [[BacktraceCrashReporter alloc] initWithReporter: PLCrashReporter.sharedReporter]
                            error: nil];
```

</TabItem>
</Tabs>

## Handling Events

`BacktraceClient` allows you to subscribe to events produced before and after sending each report by attaching an object that follows the `BacktraceClientDelegate` protocol.

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
// assign `self` or any other object as a `BacktraceClientDelegate`
BacktraceClient.shared?.delegate = self

// handle events
func willSend(_ report: BacktraceCrashReport) -> (BacktraceCrashReport)
func willSendRequest(_ request: URLRequest) -> URLRequest
func serverDidFail(_ error: Error)
func serverDidRespond(_ result: BacktraceResult)
func didReachLimit(_ result: BacktraceResult)
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
// assign `self` or any other object as a `BacktraceClientDelegate`
BacktraceClient.shared.delegate = self;

//handle events
- (BacktraceReport *) willSend: (BacktraceReport *)report;
- (void) serverDidFail: (NSError *)error;
- (void) serverDidRespond: (BacktraceResult *)result;
- (NSURLRequest *) willSendRequest: (NSURLRequest *)request;
- (void) didReachLimit: (BacktraceResult *)result;
```

</TabItem>
</Tabs>

For example, you can use `BacktraceClientDelegate` to modify a report before send:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
func willSend(_ report: BacktraceReport) -> (BacktraceReport) {
    report.attributes["added"] = "just before send"
    return report
}
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
- (BacktraceReport *)willSend:(BacktraceReport *)report {
    NSMutableDictionary *dict = [report.attributes mutableCopy];
    [dict setObject: @"just before send" forKey: @"added"];
    report.attributes = dict;
    return report;
}
```

</TabItem>
</Tabs>

## Attributes

You can add custom attributes to send alongside every crash and error report:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
BacktraceClient.shared?.attributes = ["foo": "bar", "testing": true]
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
BacktraceClient.shared.attributes = @{@"foo": @"bar", @"testing": @YES};
```

</TabItem>
</Tabs>

You can also specify a unique set of attributes for a specific report with the `willSend(_:)` method of [`BacktraceClientDelegate`](#handling-events).

## File Attachments

### All Reports

You can specify file attachments to send with every crash and error report. File attachments are specified as an `array` of `URL` that contain the path to the file.

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
guard let libraryDirectoryUrl = try? FileManager.default.url(
     for: .libraryDirectory, in: .userDomainMask, appropriateFor: nil, create: true) else {
     throw CustomError.runtimeError
}

let fileUrl = libraryDirectoryUrl.appendingPathComponent("sample.txt")

var crashAttachments = Attachments()
crashAttachments.append(fileUrl)

BacktraceClient.shared?.attachments = crashAttachments
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
NSString *fileName = @"myCustomFile.txt";
NSURL *libraryUrl = [[[NSFileManager defaultManager] URLsForDirectory:NSLibraryDirectory
         inDomains:NSUserDomainMask] lastObject];
NSURL *fileUrl = [libraryUrl URLByAppendingPathComponent:fileName];

BacktraceClient.shared.attachments = [NSArray arrayWithObjects:fileUrl, nil];
```

</TabItem>
</Tabs>

### Per Report

You can specify file attachments to send for a specific report by supplying an array of file paths.

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
let filePath = Bundle.main.path(forResource: "test", ofType: "txt")!
BacktraceClient.shared?.send(attachmentPaths: [filePath]) { (result) in
    print(result)
}
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
NSArray *paths = @[[[NSBundle mainBundle] pathForResource: @"test" ofType: @"txt"]];
[[BacktraceClient shared] sendWithAttachmentPaths:paths completion:^(BacktraceResult * _Nonnull result) {
    NSLog(@"%@", result);
}];
```

</TabItem>
</Tabs>

You can also specify a unique set of files for specific reports with the `willSend(_:)` method of [`BacktraceClientDelegate`](#handling-events).

## Error-Free Metrics

Error-free metrics allow you to determine:

- How many of your unique users (i.e., unique device IDs) using your app are experiencing errors/crashes.
- How many application sessions (i.e., individual application sessions from startup till shutdown/exit) of your app are experiencing errors/crashes.

You can track those metrics at-a-glance, as well as in detail to find out what kinds of errors/crashes are most common. For more information, see [Stability Metrics Widgets](/error-reporting/web-console/overview/#stability-metrics-widgets).

### Enabling Error-Free Metrics

You can enable error-free metrics as follows:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift reference title="Code Sample"
https://github.com/backtrace-labs/backtrace-cocoa/blob/dfe0d9046c6d5706137d9e861a03d54775277e90/Examples/Example-iOS/AppDelegate.swift#L47
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc reference title="Code Sample"
https://github.com/backtrace-labs/backtrace-cocoa/blob/dfe0d9046c6d5706137d9e861a03d54775277e90/Examples/Example-iOS-ObjC/AppDelegate.m#L55
```

</TabItem>
</Tabs>

## Breadcrumbs

<p><span className="sauceGreen">iOS and macOS Only</span></p>

Breadcrumbs allow you track events leading up to your crash, error, or other submitted object. When breadcrumbs are enabled, any captured breadcrumbs will automatically be attached as a file to your crash, error, or other submitted object (including native crashes).

### Enabling Breadcrumbs

You can enable breadcrumbs as follows:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift reference title="Code Sample"
https://github.com/backtrace-labs/backtrace-cocoa/blob/a817605c07eb83af412533ac8e185ebcbdf79562/Examples/Example-iOS/AppDelegate.swift#L47
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc title="Code Sample"
[BacktraceClient.shared enableBreadCrumbs];
```

</TabItem>
</Tabs>

### Adding Manual Breadcrumbs

You can add breadcrumbs as follows:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift reference title="Code Sample"
https://github.com/backtrace-labs/backtrace-cocoa/blob/dfe0d9046c6d5706137d9e861a03d54775277e90/Examples/Example-iOS/AppDelegate.swift#L52-L57
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc reference title="Code Sample"
https://github.com/backtrace-labs/backtrace-cocoa/blob/dfe0d9046c6d5706137d9e861a03d54775277e90/Examples/Example-iOS-ObjC/AppDelegate.m#L61-L65
```

</TabItem>
</Tabs>

:::caution
We recommend that you do **not** make calls to `addBreadcrumb` from performance-critical code paths.
:::

### Automatic Breadcrumbs

By default, if you enable breadcrumbs, Backtrace registers handlers to capture common iOS system events, such as low memory warnings, battery state, screen orientation changes, background/foreground/inactive changes, and more.

You can limit the types of automatic events that are captured by specifying which automatic breadcrumb types you want to enable. For example:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
let settings = BacktraceBreadcrumbSettings()
settings.breadcrumbTypes = [BacktraceBreadcrumbType.system, BacktraceBreadcrumbType.configuration]
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
BacktraceBreadcrumbSettings *settings = [[BacktraceBreadcrumbSettings alloc]
                                             init:4096
                                             maxQueueFileSizeBytes: 64 * 1024
                                             breadcrumbLogFileName:@"bt-breadcrumbs-0"
                                             breadcrumbTypes:@[[NSNumber numberWithInt:BacktraceBreadcrumbTypeManual],
                                                               [NSNumber numberWithInt:BacktraceBreadcrumbTypeLog]]
                                             breadcrumbLevel:BacktraceBreadcrumbLevelInfo];
```

</TabItem>
</Tabs>
