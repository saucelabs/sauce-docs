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

## Application Not Responding (ANRs)
`BacktraceClient` allows you to detect Application Not Responding (ANR) errors that occur when the main thread is blocked for more than 5 seconds. You can enable ANR reporting as follows:

```java
backtraceClient.enableAnr(timeout, event, debug);
```

You can also provide the following parameters as an argument:
* `timeout`: Specifies how long the thread should be blocked before the ANR is reported.
* `event`: Specifies an event, which will be executed instead of handling the ANR error by default. 
* `debug`: Does not report ANRs if the app is in debug mode.


## Offline Database Settings
`BacktraceClient` allows you to customize the initialization of `BacktraceDatabase` for local storage of error reports by supplying a `BacktraceDatabaseSettings` parameter, as follows:

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
Method BacktraceClient.send will send an error report to the Backtrace endpoint specified. There send method is overloaded, see examples below:
