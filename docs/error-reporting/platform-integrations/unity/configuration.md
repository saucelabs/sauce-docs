---
id: configuration
title: Configuring Backtrace for Unity
sidebar_label: Configuration
description: Configure Backtrace for your Unity project.
---

Configure Backtrace for your Unity project. This page defines the configuration settings, classes, and methods available with the Backtrace Unity SDK.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Usage

```csharp
//Read from manager BacktraceClient instance

var backtraceClient = GameObject.Find("_Manager").GetComponent<BacktraceClient>();
try
{
   //throw exception here
}
catch(Exception exception)
{
   var report = new BacktraceReport(exception);
   backtraceClient.Send(report);
}
```

After you've [setup](/error-reporting/platform-integrations/unity/setup) the Backtrace client and database configuration, you can retrieve database and client instances by using `GameObject`, then use a try/catch statement to throw an exception and start sending reports.

## Configuration Settings

The configuration settings for the Backtrace client and database are defined by the **Backtrace Configuration** file in the **Assets** folder of your Unity project. It's recommended to change the configuration settings for the Backtrace client and database in the **Unity Inspector**:

<img src={useBaseUrl('img/error-reporting/unity/unity-backtrace-client-config.png')} alt="Customizing Backtrace client configuration options in the Unity Inspector" />

Alternatively, you can also specify the configuration settings in your C# project.

### Backtrace Client

| Setting                     | Description                                                                                                                                                                                                                                                                                                                                     | Type    | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| Server Address              | The [server address](/error-reporting/platform-integrations/unity/setup/#configure-the-server-address) (submission URL) is required to submit exceptions from your Unity project to your Backtrace instance. <br /><br />The Server Address must be in the following format: `https://submit.backtrace.io/{subdomain}/{submission-token}/json`. | String  |
| Handle unhandled exceptions | Handles unhandled exceptions that are not captured by try/catch statements.                                                                                                                                                                                                                                                                     | Boolean | True    |
| Reports per minute          | Limits the number of reports the client will send per minute. <ul><li>If set to '0', there is no limit.</li> <li>If set to a value greater than '0' and the value is reached, the client will not send any reports until the next minute.</li></ul> The `BacktraceClient.Send` and `BacktraceClient.SendAsync` methods will return 'false'.     | Number  | 50      |
| Ignore SSL validation       | By default, Unity validates SSL certificates. If you don't want to validate SSL certificates, set the value to 'true'.                                                                                                                                                                                                                          | Boolean | False   |

### Backtrace Database

| Setting                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type    | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| Enable Database            | Enables an offline database to store reports locally. This is a requirement for native crash reports to be sent.                                                                                                                                                                                                                                                                                                                                                                                                   | Boolean | False   |
| Backtrace database path    | Specifies the absolute path that the local database will use to store reports for your game or app. Note that the Backtrace database will remove all existing files in the database directory when the client is first initialized. <br /><br />You can use interpolated strings such as `${Application.persistentDataPath}/backtrace/database`.                                                                                                        | String  |
| Client-Side deduplication  | Aggregates duplicated reports. The available options are: <ul><li>Disable: Duplicated reports are not aggregated.</li> <li>Everything: Aggregates by faulting callstack, exception type, and exception message.</li> <li>Faulting callstack: Aggregates based on the current stack trace.</li> <li>Exception type: Aggregates by stack trace and exception type.</li> <li>Exception message: Aggregates by stack trace and exception message.</li></ul> | Enum    | Disable |
| Attach Unity Player.log    | Attaches the Unity player log file to the Backtrace report. Available only for Windows and MacOS.                                                                                                                                                                                                                                                                                                                                                       | Boolean | False   |
| Auto send mode             | Sends reports to the server based on the retry settings described below. <br /><br />If the value is set to 'False', you can use the [`Flush`](/error-reporting/platform-integrations/unity/configuration/#backtracedatabaseflush) or [`Send`](/error-reporting/platform-integrations/unity/configuration/#backtracedatabasesend) methods as an alternative.                                                                                            | Boolean | True    |
| Create database directory  | Creates the offline database directory if the provided path doesn't exist.                                                                                                                                                                                                                                                                                                                                                                              | Boolean | True    |
| Attach screenshot          | Generates a screenshot and creates an attachment of the frame when an exception occurs in a game scene.                                                                                                                                                                                                                                                                                                                                                 | Boolean | False   |
| Maximum number of records  | The maximum number of reports stored in the offline database. When the limit is reached, the oldest reports are removed. If the value is equal to '0', then no limit is set.                                                                                                                                                                                                                                                                            | Number  | 8       |
| Maximum database size (mb) | The maximum database size in MB. When the limit is reached, the oldest reports are removed. If the value is equal to '0', then no limit is set. <br/> (Managed reports only)                                                                                                                                                                                                                                                                                                         | Number  | 0       |
| Retry interval             | The amount of time (in seconds) to wait between retries if the database is unable to send a report.                                                                                                                                                                                                                                                                                                                                                     | Number  | 60      |
| Maximum retries            | The maximum number of retries to attempt if the database is unable to send a report.                                                                                                                                                                                                                                                                                                                                                                    | Number  | 3       |
| Retry order (FIFO/LIFO)    | The order in which reports are sent to the Backtrace server: <ul><li>If you set the value to 'Queue' (FIFO), then the first report into the queue is the first report to leave the queue.</li> <li>If you set the value to 'Stack' (LIFO), then the last report into the stack is the last report to leave the stack.</li></ul>                                                                                                                         | Enum    | Stack   |

#### Enable Stack Traces for WebGL

To enable stack traces for WebGL, in your Unity project's **Player Settings**, under **Publishing Settings**, set **Enable Exceptions** to 'Full With Stacktrace'.

<img src={useBaseUrl('img/error-reporting/unity/unity-webgl-player-settings-enable-exceptions.png')} alt="Player setting in Unity required to enable stack traces for WebGL." />

### Advanced Client Settings

| Setting                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type    | Default |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| Use normalized exception message              | Generates a fingerprint with a normalized exception message if an exception doesn't have a stack trace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Boolean | False   |
| Send unhandled native game crashes on startup | Sends native crashes when the game or app starts. Available only for Windows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Boolean | True    |
| Filter reports                                | Ignores managed error reports based on error type: <ul><li>Disable: Sends error reports for all error types.</li><li>Everything: Ignores error reports for all error types.</li> <li>Message: Ignores error reports for error messages.</li> <li>Handled Exception: Ignores error reports for handled exceptions.</li> <li>Unhandled Exception: Ignores error reports for unhandled exceptions.</li> <li>Hang: Ignores error reports for ANR (Application not responding) or hang errors. Mobile only.</li> <li>Game Error: Ignores error reports for game crashes in the managed environment.</li></ul> | Enum    | Disable |
| Collect last n game logs                      | Collects last n number of logs generated in the game.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Number  | 10      |
| Enable performance statistics                 | Allows the Backtrace client to measure execution time and include performance information as report attributes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Boolean | False   |
| Destroy client on new scene load              | Removes the Backtrace client component when loading a new game scene. <br /><br /> By default, the Backtrace client will be available in every game scene.                                                                                                                                                                                                                                                                                                                                                                                                                                               | Boolean | False   |
| Log random sampling rate                      | The rate at which random sample reports for DebugLog.error messages are sent to Backtrace.<br /><br />By default, 1% of the DebugLog.error messages will be sent to Backtrace. To send all DebugLog.error messages to Backtrace, set the value to '1'.                                                                                                                                                                                                                                                                                                                                                   | Decimal | 0.01    |
| Game object depth limit                       | Filters the number of GameObject children in Backtrace reports.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Number  | -1      |
| Disable error reporting integration in editor | Ignores errors encountered while the project is running in the Unity Editor and only reports errors encountered in a build.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Boolean | False   |

### Crash Free Metrics Reporting

Once enabled, unique application launches and unique player identifiers (default: guid) will be submitted to Backtrace so you can get an overview of how many errors, hangs, crashes, and memory problems occur compared to all active users for a given platform, version, and more.

:::note
This functionality is supported on all platforms except WebGL.
:::

| Setting                             | Description                                                                                                                                                                                               | Type    | Default |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| Enable crash free metrics reporting | Enables metrics such as crash free users and crash free sessions.                                                                                                                                         | Boolean | True    |
| Auto send interval in min           | Indicates how often crash free metrics are sent to Backtrace. <br /><br />By default, session events are sent on application startup, when the game ends, and every 30 minutes while the game is running. | Number  | 30      |

You can enable crash free metrics at runtime with `backtraceClient.EnableMetrics()`.

You can also add custom metrics groups and attributes with [`backtraceClient.Instance.Metrics.AddSummedEvent`](/error-reporting/platform-integrations/unity/configuration/#backtraceclientinstancemetricsaddsummedevent).

### Capturing Native Crashes

<Tabs>
<TabItem value="android" label="Android" default>

The Backtrace Unity SDK includes support for capturing native crashes, as well as memory and process information from the underlying Android OS, JNI, and NDK layers, including:

- `system.memory.free`
- `system.memory.swap.free`
- `system.memory.vmalloc.total`
- `sched.cs.involuntary`
- `sched.cs.voluntary`

For more information about other data that is captured, see [Attributes](/error-reporting/platform-integrations/unity/attributes).

| Setting                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                            | Type    | Default |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| Capture native crashes                     | Captures and symbolicates stack traces for native crashes. A crash report is generated, stored locally, and uploaded upon next game start. This requires "Enable Database" to also be true.                                                                                                                                                                                                                                                                                             | Boolean | True    |
| Capture ANR (Application not responding)   | Generates an error report whenever an app hangs for more than 5 seconds. The `error.type` for these reports will be `Hang`.                                                                                                                                                                                                                                                                                                            | Boolean | True    |
| Send Out of Memory exceptions to Backtrace | Detects low memory conditions. If the app crashes due to a memory condition, a crash report will be submitted to Backtrace with the `memory.warning` and `memory.warning.date` attributes.                                                                                                                                                                                                                                             | Boolean | False   |
| Enable client-side unwinding               | Enables callstack unwinding. If you're unable to upload all debug symbols for your app, you can use this setting to get debug information. Available only for supported versions of Android (NDK 19; Unity 2019+). <br /><br /> You can also enable this setting via the [`BacktraceConfiguration`](/error-reporting/platform-integrations/unity/configuration/#backtraceclient) object and the `.ClientSideUnwinding = true;` option. | Boolean | False   |
| Symbols upload token                       | Required to automatically upload debug symbols to Backtrace. <br /> <br /> To generate a symbol upload token, in Backtrace go to Project Settings > Symbols > Access tokens > and select + to generate a new token.                                                                                                                                                                                                                    | String  |

#### ProGuard Rules
ProGuard obfuscation prevents the reflection used to invoke Java code from the Unity bridge. The ProGuard symbolication id must be passed to BacktraceClient, and additional ProGuard rules must be added to allow Backtrace to identify Java classes. 
<br /> 
Symbolication id is a UUID identifier created by the user. The same identifier value must be sent when uploading the source map and must be accessible in the game's runtime environment.

<br/>
Please follow [this guide](/error-reporting/platform-integrations/android/proguard-deobfuscation/) to enable ProGuard, and add the following:

- Pass your ProGuard symbolication id to BacktraceClient:
   ```java
   var backtraceClient = GameObject.Find("manager name").GetComponent<BacktraceClient>();
   final UUID proguardMappingUUID = UUID.fromString("f6c3e8d4-8626-4051-94ec-53e6daccce25");
   backtraceClient.UseProguard(proguardMappingUUID.toString());
   ```
- Use these rules in proguard_rules.pro:
    ```
    -keep class backtraceio.unity.* { *; }
    -keep class backtraceio.library.**.* { *; }
    ```

#### Uploading Debug Symbols

You can configure the Backtrace client to automatically upload debug symbols in IL2CPP builds for Android apps.

To enable automatic upload of debug symbols, in your Unity project's Android settings:

1. In the **Build Settings**, set **Create symbols.zip** to 'Debugging'.
   <img src={useBaseUrl('img/error-reporting/unity/unity-android-build-settings-debug-symbols.png')} alt="Build setting required to upload debug symbols to Backtrace for Android builds." />
1. In the **Player Settings**, under **Configuration (Other Settings)**, set **Scripting Backend** to 'IL2CPP'.
   <img src={useBaseUrl('img/error-reporting/unity/unity-android-player-settings-debug-symbols.png')} alt="Player setting required to upload debug symbols to Backtrace for Android builds." />

For more information about debug symbols, see [Symbolication](/error-reporting/project-setup/symbolication/).

</TabItem>
<TabItem value="ios" label="iOS">

The Backtrace Unity SDK includes support for capturing native crashes, as well as memory and process information from the underlying iOS layer, including:

- `system.memory.free`
- `system.memory.swap.used`
- `system.memory.total`
- `system.memory.active`
- `system.memory.inactive`

For more information about other data that is captured, see [Attributes](/error-reporting/platform-integrations/unity/attributes).

| Setting                                    | Description                                                                                                                                                                                                                                                                                                                                                    | Type    | Default |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| Capture native crashes                     | Captures and symbolicates stack traces for native crashes. A crash report is generated, stored locally, and uploaded upon next game start.                                                                                                                                                                                                                     | Boolean | True    |
| Capture ANR (Application not responding)   | Generates an error report whenever an app does not respond or hangs for more than 5 seconds. The `error.type` for these reports will be `Hang`.                                                                                                                                                                                                                | Boolean | True    |
| Send Out of Memory exceptions to Backtrace | Captures snapshots of the app's state when there is a low memory condition. If the app crashes due to a low memory condition, the information is sent to Backtrace. Snapshots are captured every 2 minutes as long as the low memory condition persists.                                                                                                       | Boolean | False   |
| Enable client-side unwinding               | Enables callstack unwinding. If you're unable to upload all debug symbols for your app, you can use this setting to get debug information. <br /><br /> You can also enable this setting via the [`BacktraceConfiguration`](/error-reporting/platform-integrations/unity/configuration/#backtraceclient) object and the `.ClientSideUnwinding = true;` option. | Boolean | False   |

:::caution
Unity's CrashReport API might prevent the Backtrace client from sending crashes. To allow Backtrace to capture native crashes, in your Unity project's Player Settings for iOS, under Debugging and crash reporting, make sure that Enable CrashReport API is set to 'False'.
<img src={useBaseUrl('img/error-reporting/unity/unity-ios-player-settings-native-crashes.png')} alt="Player setting required to allow Backtrace to capture native crashes and exceptions." />
:::

#### Uploading Debug Symbols

When building your iOS game in Xcode, make sure to configure the build settings to generate dSYM files for any build that you want to debug with Backtrace. By default, Xcode may only generate DWARF files.

To generate debug symbols in dSYM format:

1. In Xcode, go to your project target's **Build Settings**.
1. Under **Build Options**, set **Debug Information Format** to **DWARF with dSYM File**.

<img src={useBaseUrl('img/error-reporting/unity/xcode-enable-debug-symbols.png')} alt="Build setting in Xcode required to generate debug symbols for iOS builds." />

You can find the dSYM files in the Build folder for your project (`.../Build/Products/<build target folder>`), which you can then compress into a .zip file and upload to Backtrace.

For more information about debug symbols, see [Symbolication](/error-reporting/project-setup/symbolication/).

</TabItem>
<TabItem value="windows" label="Windows">

The Backtrace Unity SDK includes support for capturing native Windows crashes.

| Setting                                  | Description                                                                                                               | Type    | Default |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| Minidump type                            | The type of memory information to capture from Windows minidump reports.                                                  | Enum    | None    |
| Capture native crashes                   | Captures stack traces for native crashes. A crash report is generated, stored locally, and uploaded upon next game start. | Boolean | True    |
| Capture ANR (Application not responding) | Generates a hang report whenever an app hangs for more than 5 seconds. The `error.type` for these reports will be `Hang`. | Boolean | True    |

</TabItem>
</Tabs>

### Logging Breadcrumbs

| Setting                    | Description                                                                                                                                                                                                                            | Type    | Default    |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------- |
| Enable breadcrumbs support | Logs breadcrumb events, such as the app going to a background process, logging messages, network connectivity lost, and more. <br /> <br />By default, breadcrumbs are limited to 64kB and older events will automatically be removed. | Boolean | False      |
| Breadcrumbs event type     | Specifies which type of events to log.                                                                                                                                                                                                 | Enum    | Everything |
| Breadcrumbs log level      | Specifies which log level severity to include.                                                                                                                                                                                         | Enum    | Everything |

You can also add custom breadcrumb events, with information like "player completed a level" and sub attributes:

```csharp
GetComponent<BacktraceClient>().Breadcrumbs.Info("Player Base Upgraded", new Dictionary<string, string>() {
  {"base.name", "MtGox"},
  {"base.level", "15"}
});
```

## Advanced Configuration

### `backtraceApi`

<p><small>| CLASS | REQUIRED |</small></p>

Class used to send diagnostic data in JSON format to the Backtrace endpoint, including asynchronous reports. `backtraceApi` is instantiated when the `backtraceClient` awake method is called.

---

### `backtraceClient`

<p><small>| CLASS | REQUIRED |</small></p>

Class used to send `backtraceReport` to the Backtrace server by using `backtraceApi`. `backtraceClient` requires a Backtrace Configuration window.

:::note
This class inherits `MonoBehavior` functions.
:::

```csharp

 //Read from manager BacktraceClient instance
var backtraceClient = GameObject.Find("manager name").GetComponent<BacktraceClient>();

//Set custom client attribute
backtraceClient["attribute"] = "attribute value";

 //Read from manager BacktraceClient instance
var database = GameObject.Find("manager name").GetComponent<BacktraceDatabase>();


try{
    //throw exception here
}
catch(Exception exception){
    var report = new BacktraceReport(exception);
    backtraceClient.Send(report);
}
```

---

### `backtraceClient.Initialize`

<p><small>| METHOD | REQUIRED |</small></p>

Method used to initialize the Backtrace Unity SDK directly in the C# code of your Unity project.

```csharp
var backtraceClient = BacktraceClient.Initialize(
    url: serverUrl,
    databasePath: "${Application.persistentDataPath}/sample/backtrace/path",
    gameObjectName: "game-object-name",
    attributes: attributes);
```

If you need to use more advanced configuration settings, the `Initialize` method accepts a `BacktraceConfiguration` scriptable object. For example:

```csharp
var configuration = ScriptableObject.CreateInstance<BacktraceConfiguration>();
configuration.ServerUrl = serverUrl;
configuration.Enabled = true;
configuration.DatabasePath = "${Application.persistentDataPath}/sample/backtrace/path";
configuration.CreateDatabase = true;
configuration.Sampling = 0.002;
configuration.ClientSideUnwinding = true;
_backtraceClient = BacktraceClient.Initialize(
    configuration,
    gameObjectName: "game-object-name",
    attributes: attributes);
```

---

### `backtraceClient.Instance.Metrics.AddSummedEvent`

<p><small>| METHOD | OPTIONAL |</small></p>

Used to add custom metrics groups and attributes to capture your game or apps' stability.

For example, if you want to know details about the levels that a user has played in your game, you can add a "LevelsPlayed" event with the `application.version` and `score` attributes.

```csharp
BacktraceClient.Instance.Metrics.AddSummedEvent("levels_played", new Dictionary<string, string>() {
  {"application.version", BacktraceClient.Instance["application.version"]},
  {"score", "" + score}
 }
);
```

As another example, if you want to know how many minutes a user has played your game, you can add a "MinutesPlayed" event with the `application.version` and `uname.sysname` attributes.

```csharp
private void Update()
{
    timeElapsedSeconds += Time.deltaTime;

    // Every second, add an event for this metric group
    if (timeElapsedSeconds >= 60)
    {
      timeElapsedSeconds = 0;

      // Generate your attribute values for the attributes you want linked
      Dictionary<string,string> attributes = new Dictionary<string, string>()
      {
        { "application.version", BacktraceClient.Instance["application.version"] },
        { "uname.sysname", BacktraceClient.Instance["uname.sysname"] },
        { "custom.field", "custom.value" },
      };

      // Add the summed event using the metric group name and attributes
      BacktraceClient.Instance.Metrics.AddSummedEvent("MinutesPlayed", attributes);
    }
}
```

The example above adds an event for this metric group to a queue, which will be sent based on the Auto send interval setting in the Backtrace Configuration in Unity.

You can adjust the frequency of that send process to suit your needs and/or manually send the events with `BacktraceClient.Instance.Metrics.Send()`.

:::caution
Adding multiple events with many linked attributes or sending the metrics events too frequently may affect the performance of your game or app and contribute a lot of data towards your Backtrace data storage limits.
:::

---

### `backtraceClient.Refresh`

<p><small>| METHOD | OPTIONAL |</small></p>

Method used to refresh and apply the configuration settings for the Backtrace client when you change the configuration dynamically. For example:

```csharp
//Read from manager BacktraceClient instance
var backtraceClient = GameObject.Find("manager name").GetComponent<BacktraceClient>();

//Set custom client attribute
backtraceClient["attribute"] = "attribute value";

//Change configuration value
backtraceClient.configuration.DeduplicationStrategy = deduplicationStrategy;

//Refresh configuration
backtraceClient.Refresh();
```

---

### `backtraceClient.Send`

<p><small>| METHOD | REQUIRED |</small></p>

Method used to send error reports to the Backtrace endpoint.

```csharp
try
{
  //throw exception here
}
catch (Exception exception)
{
    var report = new BacktraceReport(
        exception: exception,
        attributes: new Dictionary<string, string>() { { "key", "value" } },
        attachmentPaths: new List<string>() { @"file_path_1", @"file_path_2" }
    );
    backtraceClient.Send(report);
}
```

#### Custom Event Handlers

You can also add custom event handlers to the client. For example, you can use `BeforeSend` to trigger actions before the `Send` method:

```csharp
 //Add a custom event handler
backtraceClient.BeforeSend =
    (Model.BacktraceData model) =>
    {
        var data = model;

        //do something with the data, for example:
        data.Attributes.Attributes.Add("eventAttribute", "EventAttributeValue");
        if(data.Classifier == null || !data.Classifier.Any())
        {
            data.Attachments.Add("path to attachment");
        }

        return data;
    };
```

`BacktraceClient` currently supports the following events:

- `BeforeSend`
- `OnClientReportLimitReached`
- `OnServerResponse`
- `OnServerError`

You can also use the [`backtraceReport`](/error-reporting/platform-integrations/unity/configuration/#backtracereport) class to customize the data included in the error reports sent by the `backtraceClient`.

---

### `backtraceClient.SkipReport`

<p><small>| SETTING | OPTIONAL |</small></p>

If you want to ignore specific types of error reports, we recommend that you use the Filter reports settings in the Backtrace Configuration in the Unity Editor.

However, for more advanced use cases, you can use `BacktraceClient.SkipReport` to set the `ReportFilterType`. For example:

```csharp
// Return 'true' to ignore a report,
// Return 'false' to handle the report and generate it for the error.
BacktraceClient.SkipReport = (ReportFilterType type, Exception e, string msg) =>
{
  // ReportFilterType is one of None, Message, Exception, UnhandledException or Hang.
  // It is also possible to filter based on the exception and exception message.

  // Report hangs and crashes only.
  return type != ReportFilterType.Hang && type != ReportFilterType.UnhandledException;
};
```

---

### `backtraceData`

<p><small>| CLASS | OPTIONAL |</small></p>

Serializable class that holds the diagnostic data in JSON format to be sent to the backtrace endpoint via `backtraceApi`.

---

### `backtraceDatabase`

<p><small>| CLASS | REQUIRED |</small></p>

Class that stores error report data in your local hard drive when reports fail to send due to network outages or server unavailability. `backtraceDatabase` will periodically try to resend reports cached in the database.

---

### `backtraceDatabase.Clear`

<p><small>| METHOD | OPTIONAL |</small></p>

Clears all reports from the database without sending them to Backtrace server.

```csharp
backtraceDatabase.Clear();
```

---

### `backtraceDatabase.Count`

<p><small>| METHOD | OPTIONAL |</small></p>

Returns the number of reports stored in the database, including deduplicated reports.

```csharp
backtraceDatabase.Count();
```

---

### `backtraceDatabase.Delete`

<p><small>| METHOD | OPTIONAL |</small></p>

Removes a report stored in the database, including deduplicated reports.

```csharp
backtraceDatabase.Delete();
```

---

### `backtraceDatabase.Flush`

<p><small>| METHOD | OPTIONAL |</small></p>

Sends all reports to the Backtrace server then removes them from the database. This method is only needed to support the offline database when the Auto send mode is disabled.

:::note
The `Flush` method ignores client side deduplication and retry settings.
:::
:::caution
If the `Send` method fails, the database will no longer store data.
:::

```csharp
backtraceDatabase.Flush();
```

---

### `backtraceDatabase.Send`

<p><small>| METHOD | OPTIONAL |</small></p>

Sends all reports to the Backtrace server, as defined by the client side deduplication and database retry settings. This method is only needed to support the offline database when the Auto send mode is disabled.

```csharp
backtraceDatabase.Send();
```

### `backtraceReport`

<p><small>| CLASS | OPTIONAL |</small></p>

Class that defines a single error report.

#### Attributes and Attachment Paths

You can submit custom attributes using the `attributes` parameter, or attach files by specifying an array of file paths with the `attachmentPaths` parameter. For example:

```csharp
try
{
  //throw exception here
}
catch (Exception exception)
{
    var report = new BacktraceReport(
        exception: exception,
        attributes: new Dictionary<string, string>() { { "key", "value" } },
        attachmentPaths: new List<string>() { @"file_path_1", @"file_path_2" }
    );
    backtraceClient.Send(report);
}
```

#### Fingerprint and Factor

You can use the `Fingerprint` and `Factor` properties to modify the client side deduplication strategy. The `Fingerprint` property changes the hash that is generated, while the `Factor` property changes how duplicated reports are aggregated.

:::note
Fingerprint values must be a valid SHA-256 string.
:::

For example:

```csharp
try
{
  //throw exception here
}
catch (Exception exception)
{
    var report = new BacktraceReport(...){
        Fingerprint = "sha256 string",
        Factor = exception.GetType().Name
    };
    ...
}
```

The Backtrace client will send a single report when an exception occurs and maintain a count for every other time it occurs, which reduces the volume of reports that are generated and sent to Backtrace.

The count is reset when the offline database is cleared (usually when the reports are sent to the server) or if the game is closed before the reports are sent. A new single report is created the next time the exception occurs.

Information about aggregated reports is stored in `backtraceDatabaseRecord`. You can use the `Hash` property to verify the generated hash for the diagnostic data, and the `Counter` property to verify the count of duplicated reports.

---

### `reportWatcher`

<p><small>| CLASS | REQUIRED |</small></p>

Class that validates send requests from `backtraceApi` to the Backtrace endpoint. If `ReportPerMin` is set to a value greater than '0' in the `backtraceClient` configuration, `reportWatcher` will limit the number of reports sent by the client.

---

## Data Management

The Backtrace Unity SDK allows you to modify and remove data that the library collects when an exception occurs using the following methods:

### `backtraceClient.BeforeSend`

<p><small>| EVENT | OPTIONAL |</small></p>

Triggers an event every time an exception in the managed environment occurs, which allows you to skip the report (by returning a null value) or to modify data that library collected before sending the report.

You can use the `BeforeSend` event to extend attributes or JSON object data based on data the application has at the time of exception.

```csharp
//Read from manager BacktraceClient instance

var backtraceClient = GameObject.Find("manager name").GetComponent<BacktraceClient>();

// set beforeSend event

_backtraceClient.BeforeSend = (BacktraceData data) =>
{
    data.Attributes.Attributes["my-dynamic-attribute"] = "value";
    return data;
};
```

---

### `Annotation.EnvironmentVariables`

<p><small>| CLASS | OPTIONAL | STRING |</small></p>

The Annotation class exposes the `EnvironmentVariablesCache` dictionary, which stores environment variables collected by the library. You can manipulate the data in this cache before the report is sent.

For example, you can use an annotation to replace the `USERNAME` environment variable with a random string, which will be used to create reports.

```csharp
Annotations.EnvironmentVariablesCache["USERNAME"] = "%USERNAME%";
}
```

You can also use the `BeforeSend` event along with annotations for environment variables to edit collected diagnostic data.

```csharp
client.BeforeSend = (BacktraceData data) =>
{
    data.Annotation.EnvironmentVariables["USERNAME"] = "%USERNAME%";
    return data;
}
```
