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

```c#
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

## Configuration Settings

The configuration settings for the Backtrace client and database are defined by the Backtrace Configuration file in the Assets folder of your Unity project. It's recommended to change the configuration settings for the Backtrace client and database in the Unity Inspector:

  <img src={useBaseUrl('img/error-reporting/unity-backtrace-client-config.png')} alt="Customizing Backtrace Client configuration options in the Unity Inspector" />

Alternatively, you can also specify the configuration settings in the C# code for your app.

After you've [setup](/error-reporting/platform-integrations/unity/setup) the Backtrace client and database configuration, you can retrieve database and client instances by using GameObject, then use a try / catch block to throw an exception and start sending reports.

 ```c#
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

### Backtrace Client

|Setting|Description|Type|Default|
|---------|---------|---------|---------|
|Server Address|The [server address](/error-reporting/platform-integrations/unity/setup/#step-3-enter-the-server-address) (submission URL) is required to submit exceptions from your Unity project to your Backtrace instance. <br /><br />The Server Address must be in the following format: `https://submit.backtrace.io/<subdomain-name>/<submission-token>/json`.|String|
|Handle unhandled exceptions|Handles unhandled exceptions that are not captured by try/catch statements.|Boolean|True|
|Reports per minute|Limits the number of reports the client will send per minute. <ul><li>If set to '0', there is no limit.</li> <li>If set to a value greater than '0' value and the value is reached, the client will not send any reports until the next minute.</li></ul> The `BacktraceClient.Send` and `BacktraceClient.SendAsync` methods will return 'false'.|Number|50|
|Ignore SSL validation|By default, Unity validates SSL certificates. If you don't want to validate SSL certificates, set the value to 'true'.|Boolean|False|


### Backtrace Database

<details>
  <summary>Enable Stack Traces for WebGL</summary>
  <div>
  In your Unity project's Player Settings:
  <ul><li>Under Publishing Settings, set Enable Exceptions to 'Full With Stacktrace'.</li>
  <img src={useBaseUrl('img/error-reporting/unity-webgl-player-settings-enable-exceptions.png')} alt="Player setting in Unity required to enable stack traces for WebGL." /></ul>
  </div>
</details>

|Setting|Description|Type|Default|
|---------|---------|---------|---------|
|Enable Database|Enables an offline database to store reports locally.|Boolean|False|
|Backtrace database path|Specifies the absolute path that the local database will use to store reports for your game or app. Note that the Backtrace database will remove all existing files in the database directory when the client is first initialized. <br /><br />You can use interpolated strings such as `${Application.persistentDataPath}/backtrace/database`.|String|
|Client-Side deduplication|Aggregates duplicated reports. The available options are: <ul><li>Disable: Duplicated reports are not aggregated.</li> <li>Everything: Aggregates by faulting call stack, exception type, and exception message.</li> <li>Faulting callstack: Aggregates based on the current stack trace.</li> <li>Exception type: Aggregates by stack trace and exception type.</li> <li>Exception message: Aggregates by stack trace and exception message.</li></ul>|Enum|Disable|
|Attach Unity Player.log|Attaches the Unity player log file to the Backtrace report. Available only for Windows and MacOS.|Boolean|False|
|Auto send mode|Sends reports to the server based on the retry settings described below. <br /><br />When the value is set to 'False', you can use the [`Flush`](/error-reporting/platform-integrations/unity/configuration/#backtracedatabaseflush) method as an alternative.|Boolean|True|
|Create database directory|Creates the offline database directory if the provided path doesn't exist.|Boolean|True|
|Attach screenshot|Generates a screenshot and creates an attachment of the frame when an exception occurs in a game scene.|Boolean|False|
|Maximum number of records|The maximum number of reports stored in the offline database. When the limit is reached, the oldest reports are removed. If the value is equal to '0', then no limit is set.|Number|8|
|Maximum database size (mb)|The maximum database size in MB. When the limit is reached, the oldest reports are removed. If the value is equal to '0', then no limit is set.|Number|0|
|Retry interval|The amount of time (in seconds) to wait between retries if the database is unable to send a report.|Number|60|
|Maximum retries|The maximum number of retries to attempt if the database is unable to send a report.|Number|3|
|Retry order (FIFO/LIFO)|The order in which reports are sent to the Backtrace server: <ul><li>If you set the value to 'Queue' (FIFO), then the first report into the queue is the first report to leave the queue.</li> <li>If you set the value to 'Stack' (LIFO), then the last report into the stack is the last report to leave the stack.</li></ul>|Enum|Stack|

### Advanced Client Settings

|Setting|Description|Type|Default|
|---------|---------|---------|---------|
|Use normalized exception message|Generates a fingerprint with a normalized exception message if an exception doesn't have a stack trace.|Boolean|False|
|Send unhandled native game crashes on startup|Sends native crashes when the game or app starts. Available only for Windows.|Boolean|True|
|Filter reports|Filters reports based on report type: <ul><li>Everything</li> <li>Message</li> <li>Handled Exception</li> <li>Unhandled Exception</li> <li>Hang</li> <li>Game Error</li></ul> For more advanced configuration, you can use [`backtraceClient.SkipReport`](/error-reporting/platform-integrations/unity/configuration/#backtraceclientskipreport).|Enum|Disable|
|Collect last n game logs|Collects last n number of logs generated in the game.|Number|10|
|Enable performance statistics|Allows the Backtrace client to measure execution time and include performance information as report attributes.|Boolean|False|
|Destroy client on new scene load|Persists the Backtrace Client when a new game scene is loaded so it's available in every game scene.|Boolean|False|
|Log random sampling rate|The rate at which random sample reports for DebugLog.error messages are sent to Backtrace. <br /><br />By default, 1% of the DebugLog.error messages will be sent to Backtrace. To send all DebugLog.error messages to Backtrace, set the value to '1'.|Decimal|0.01|
|Game object depth limit|Filters the number of GameObject children in Backtrace reports.|Number|-1|
|Disable error reporting integration in editor|Ignores errors encountered while the project is running in the Unity Editor and only reports errors encountered in a build.|Boolean|False|


### Crash Free Metrics Reporting

Once enabled, unique application launches and unique player identifiers (default: guid) will be submitted to Backtrace so you can get an overview of how many errors, hangs, crashes, and memory problems occur compared to all active users for a given platform, version, and more.

:::note
This functionality is supported on all platforms except WebGL.
:::

|Setting|Description|Type|Default|
|---------|---------|---------|---------|
|Enable crash free metrics reporting|Enables metrics such as crash free users and crash free sessions.|Boolean|True|
|Auto send interval in min|Indicates how often crash free metrics are sent to Backtrace. <br /><br />By default, session events are sent on application startup, when the game ends, and every 30 minutes while the game is running.|Number|30|

You can also enable crash free metrics at runtime with `BacktraceClient.EnableMetrics()`.


### Capturing Native Crashes

<Tabs
  groupId="native support"
  defaultValue="android"
  values={[
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'Windows', value: 'windows'},
  ]}>

  <TabItem value="android">

  The Backtrace Unity SDK includes support for capturing native crashes, as well as memory and process information from the underlying Android OS, JNI, and NDK layers, including:

  - `system.memory.free`
  - `system.memory.swap.free`
  - `system.memory.vmalloc.total`
  - `sched.cs.involuntary`
  - `sched.cs.voluntary`

For more information about other data that is captured, see [Attributes](/error-reporting/platform-integrations/unity/attributes).


#### Uploading Debug Symbols

You can configure the Backtrace client to automatically upload debug symbols in IL2CPP builds for Android apps.

To generate a symbol upload token, in Backtrace go to Project Settings > Symbols > Access tokens > and select + to generate a new token.

For more information about debug symbols, see [add link to product guide].

  <details>
    <summary>Unity Project Settings</summary>
    <div>
    To automatically upload debug symbols to Backtrace:
    <ul><li> In the Build Settings, set Create symbols.zip to 'Debugging'.</li>
    <img src={useBaseUrl('img/error-reporting/unity-android-build-settings-debug-symbols.png')} alt="Build setting required to upload debug symbols to Backtrace for Android builds." />
    <li>In the Player Settings, set Scripting Backend to 'IL2CPP'.</li>
    <img src={useBaseUrl('img/error-reporting/unity-android-player-settings-debug-symbols.png')} alt="Player setting required to upload debug symbols to Backtrace for Android builds." /></ul>
    </div>
  </details>


  |Setting|Description|Type|Default|
  |---------|---------|---------|---------|
  |Capture native crashes|Captures and symbolicates stack traces for native crashes. A crash report is generated, stored locally, and uploaded upon next game start.|Boolean|True|
  |Capture ANR (Application not responding)|Generates a hang report whenever an app hangs for more than 5 seconds. The `error.type` for these reports will be `Hang`.|Boolean|True|
  |Send Out of Memory exceptions to Backtrace|Detects and flags low memory conditions. If the app crashes due to a memory condition, a crash report will be submitted to Backtrace with the `memory.warning` and `memory.warning.date` attributes.|Boolean|False|
  |Enable client-side unwinding|Enables call stack unwinding. If you're unable to upload all debug symbols for your app, you can use this setting to get debug information. Available only for supported versions of Android (NDK 19; Unity 2019+). <br /><br /> You can also enable this setting via the [`BacktraceConfiguration`](/error-reporting/platform-integrations/unity/configuration/#backtraceclient) object and the `.ClientSideUnwinding = true;` option.|Boolean|False|
  |Symbols upload token|Required to automatically upload debug symbols to Backtrace.|String|


  </TabItem>
  <TabItem value="ios">  

The Backtrace Unity SDK includes support for capturing native crashes, as well as memory and process information from the underlying iOS layer, including:
  - `system.memory.free`
  - `system.memory.swap.used`
  - `system.memory.total`
  - `system.memory.active`
  - `system.memory.inactive`

For more information about other data that is captured, see [Attributes](/error-reporting/platform-integrations/unity/attributes).

<details>
  <summary>Unity Project Settings</summary>
  <div>
  To allow Backtrace to capture native crashes:
  <ul><li> In the Player Settings, set Enable CrashReport API to 'False'.
  <img src={useBaseUrl('img/error-reporting/unity-ios-player-settings-native-crashes.png')} alt="Player setting required to allow Backtrace to capture native crashes and exceptions." /></li></ul>
  </div>
</details>

#### Uploading Debug Symbols

When building your iOS game in Xcode, make sure to configure the build settings to generate dSYM files for any build that you want to debug with Backtrace. By default, Xcode may only generate DWARF files.

You can find the dSYM files in the Build folder for your project (`.../Build/Products/<build target folder>`), which you can then compress into a .zip file and upload to Backtrace.

For more information about debug symbols, see [add link to product guide].

<details>
  <summary>Xcode Project Settings</summary>
  <div>
  To generate debug symbols in Xcode:
  <ul><li>In your project's Build Settings, set Debug Information Format to 'DWARF with dSYM File'.</li>
  <img src={useBaseUrl('img/error-reporting/xcode-enable-debug-symbols.png')} alt="Build setting in Xcode required to generate debug symbols for iOS builds." /></ul>
  </div>
</details>


  |Setting|Description|Type|Default|
  |---------|---------|---------|---------|
  |Capture native crashes|Captures and symbolicates stack traces for native crashes. A crash report is generated, stored locally, and uploaded upon next game start.|Boolean|True|
  |Capture ANR (Application not responding)|Generates a hang report whenever an app hangs for more than 5 seconds. The `error.type` for these reports will be `Hang`.|Boolean|True|
  |Send Out of Memory exceptions to Backtrace|Captures snapshots of the app's state when there is a low memory condition. If the app crashes due to a low memory condition, the information is sent to Backtrace. Snapshots are captured every 2 minutes as long as the low memory condition persists.|Boolean|False|

  </TabItem>
  <TabItem value="windows">

  The Backtrace Unity SDK includes support for capturing native Windows crashes.

  |Setting|Description|Type|Default|
  |---------|---------|---------|---------|
  |Minidump type|The type of memory information to capture from Windows minidump reports.|Enum|None|
  |Capture native crashes|Captures stack traces for native crashes. A crash report is generated, stored locally, and uploaded upon next game start.|Boolean|True|
  |Capture ANR (Application not responding)|Generates a hang report whenever an app hangs for more than 5 seconds. The `error.type` for these reports will be `Hang`.|Boolean|True|

  </TabItem>
  </Tabs>


### Logging Breadcrumbs

|Setting|Description|Type|Default|
|---------|---------|---------|---------|
|Enable breadcrumbs support|Logs breadcrumb events, such as the app going to a background process, logging messages, network connectivity lost, and more. <br /> <br />By default, breadcrumbs are limited to 64kB and older events will automatically be removed.|Boolean|False|
|Breadcrumbs event type|Specifies which type of events to log.|Enum|Everything|
|Breadcrumbs log level|Specifies which log level severity to include.|Enum|Everything|

You can also add custom breadcrumb events, with information like "player completed a level" and sub attributes:

```c#
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

Class used to send `backtraceReport` to the Backtrace server by using `backtraceApi`. `backtraceClient` requires a Backtrace Configuration to manage the behavior of the error reporting library.

:::note
This class inherits `MonoBehavior` functions.
:::

If you need to use more advanced configuration settings, the `Initialize` method accepts a `BacktraceConfiguration` scriptable object. For example:

```c#
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

### `backtraceClient.Refresh`
<p><small>| METHOD | OPTIONAL |</small></p>

If you change the configuration settings dynamically, make sure to use the `Refresh` method to apply the configuration changes. For example:

```c#
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

#### Custom Event Handlers

You can also add custom event handlers to the client. For example, you can trigger actions before the `Send` method:

```c#
 //Add your own handler to client API

backtraceClient.BeforeSend =
    (Model.BacktraceData model) =>
    {
        var data = model;
        //do something with data for example:
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

You can also use the `backtraceReport` class to customize the data included in the error reports sent by the `BacktraceClient` with the following parameters.

#### Attributes and Attachment Paths

You can submit custom attributes using the `attributes` parameter, or attach files by specifying an array of file paths with the `attachmentPaths` parameter. For example:

```c#
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

You can use the `Fingerprint` and `Factor` properties to modify the client side deduplication strategy. The `Fingerprint` property will overwrite the result of the deduplication strategy, while the `Factor` property will change the hash generated by the deduplication strategy.

When you set a fingerprint, the client will only write a single report for the exception as it is encountered, and maintains a count for every additional time the exception is encountered, instead of creating a new report. In this case, `BacktraceDatabase` will increase the number of reports in  `BacktraceDatabaseRecord` with the `Counter` property. This allows you to control the volume of reports that are sent to Backtrace. You can also use the `Hash` property to verify generated hash for the diagnostic data.

The `Counter` property is reset when the offline database is cleared (usually when the reports are sent to the server). A new single report will be created the next time the error is encountered. If the game or app is closed before reports are sent, the `Counter` information will be lost.

BacktraceDatabase methods allows you to use aggregated diagnostic data together. You can check Hash property of BacktraceDatabaseRecord to check generated hash for diagnostic data and Counter to check how much the same records we detect.

:::note
Fingerprint values must be a valid SHA-256 string.
:::

For example:

```c#
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
    ....
}
```

---

### `backtraceClient.SkipReport`
<p><small>| SETTING | OPTIONAL |</small></p>

Report filtering is enabled in the Unity UI with the Filter reports setting. However, you more advanced use-cases, you can use the BacktraceClient.SkipReport to set the `ReportFilterType`. For example:

```c#
// Return true to ignore a report, return false to handle the report
// and generate one for the error.
BacktraceClient.SkipReport = (ReportFilterType type, Exception e, string msg) =>
{
  // ReportFilterType is one of None, Message, Exception,
  // UnhandledException or Hang. It is also possible to
  // to filter based on the exception and exception message.

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

Clears all data from the database without sending it to Backtrace server.

```c#
backtraceDatabase.Clear();
```

---

### `backtraceDatabase.Count`
<p><small>| METHOD | OPTIONAL |</small></p>

Returns the number of reports stored in the database, including deduplicated reports.

```c#
backtraceDatabase.Count();
```

---

### `backtraceDatabase.Delete`
<p><small>| METHOD | OPTIONAL |</small></p>

Removes a report stored in the database, including deduplicated reports.

```c#
backtraceDatabase.Delete();
```

---


### `backtraceDatabase.Flush`
<p><small>| METHOD | OPTIONAL |</small></p>

Sends alls reports to the Backtrace server, then removes it from the local drive. If the `Send` method fails, the database will no longer store data. The `Flush` method ignores client side deduplication and retry settings.

```c#
backtraceDatabase.Flush();
```
---

### `backtraceDatabase.Send`
<p><small>| METHOD | OPTIONAL |</small></p>

Sends all reports to the Backtrace server, as defined by the client side deduplication and database retry settings. This can be used as an alternative to the `Flush` method.

```c#
backtraceDatabase.Send();
```

### `backtraceReport`
<p><small>| CLASS | OPTIONAL |</small></p>

Class that defines a single error report.

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

```c#
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

```c#
Annotations.EnvironmentVariablesCache["USERNAME"] = "%USERNAME%";
}
```

You can can also use the `BeforeSend` event along with annotations for environment variables to edit collected diagnostic data.

```c#
client.BeforeSend = (BacktraceData data) =>
{
    data.Annotation.EnvironmentVariables["USERNAME"] = "%USERNAME%";
    return data;
}
```
