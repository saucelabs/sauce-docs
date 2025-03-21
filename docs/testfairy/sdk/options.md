---
id: options
title: Begin with Options
sidebar_label: Begin with Options
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

App Distribution requires that you call `begin` to start recording your sessions. However, developers can override the build settings to determine what is enabled during a session recording.

Some commonly used options:

- Crash Reporting
- Video Recording
- Recorded Metrics
- Max Session Length
- Feedback Form

<Tabs
groupId="platform"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>

<TabItem value="android">

### Crash Reporting

App Distribution provides a means of capturing and recording stack traces if your application crashes. Stack traces can be vital to understanding any underlying bugs in your app. However, some apps may want to disable App Distribution's crash handling. Invoke `enableCrashHandler` or `disableCrashHandler` before calling `begin`.

Once you enable the App Distribution crash handler, it cannot be disabled unless the app is restarted.

#### Syntax

```java
TestFairy.enableCrashHandler();
TestFairy.disableCrashHandler();
```

#### Code Example

In the following example, the App Distribution crash handler will be disabled.

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.disableCrashHandler();
 TestFairy.begin(this, "<app token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

### Video Recording

App Distribution provides an option to enable or disable video recording and control the recording parameters. Invoke `disableVideo` or `enableVideo` before `begin`.

#### Syntax

```java
TestFairy.disableVideo();
TestFairy.enableVideo("<policy>", "<quality>", <frames per second>);
```

Refer to the [Class Reference](https://app.testfairy.com/reference/android/index.html) for more information on `policy` and `quality` values.

#### Code Example

In the following example, video only records when wifi is available. A high-quality video is recorded every 2 seconds.

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.enableVideo("wifi", "high", 2.0);
 TestFairy.begin(this, "<app token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

### Recorded Metrics

App Distribution can collect several different metrics from your app. Developers can override the metrics defined in their app's build settings.

Developers can call `enableMetric` or `disableMetric` before invoking `begin` with the metric they wish to enable or disable recording.

:::note
Any metric that is enabled or disabled override the settings set in your app's build settings.
:::

#### Syntax

```java
TestFairy.enableMetric("<metric>");
TestFairy.disableMetric("<metric>");
```

Refer to the [Class Reference](https://app.testfairy.com/reference/android/index.html) for more information on which metric can be passed.

#### Code Example

In the following snippet, the CPU metric will be recorded, and the Memory metric will not be recorded, regardless of what's set in the build settings.

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.enableMetric("cpu");
 TestFairy.disableMetric("memory");
 TestFairy.begin(this, "<app token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

### Max Session Length

App Distribution only records for a fixed period. Developers can override the maximum recording period by calling `setMaxSessionLength` before calling `begin`.

:::note
The value passed into this method must be less than or equal to the value defined in the build settings. A value larger than the one in the build settings will be ignored.
:::

#### Syntax

```java
TestFairy.setMaxSessionLength(<session length in seconds>);
```

#### Code Example

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.setMaxSessionLength(10 * 60); // Record for 10 minutes
 TestFairy.begin(this, "<app token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

### Feedback Form

App Distribution provides an option to enable or disable feedback collection. Invoke `disableFeedbackForm` or `enableFeedbackForm` before `begin`.

#### Syntax

```java
TestFairy.disableFeedbackForm();
TestFairy.enableFeedbackForm("<method>");
```

Refer to the [Class Reference](https://app.testfairy.com/reference/android/index.html) for more information on values for `method`.

#### Code Example

In the following example, feedback will be enabled when the device is shaken.

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.enableFeedbackForm("shake");
 TestFairy.begin(this, "<app token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

</TabItem>

<TabItem value="ios">

### Crash Reporting

App Distribution provides a means of capturing and recording stack traces if your application crashes. Stack traces can be vital to understanding any underlying bugs in your app. However, some apps may want to disable App Distribution's crash handling. Invoke `enableCrashHandler` or `disableCrashHandler` before calling `begin`.

Once you enable the App Distribution crash handler, it cannot be disabled unless the app is restarted.

#### Syntax

```java
[TestFairy enableCrashHandler];
[TestFairy disableCrashHandler];
```

#### Code Example

In the following example, the App Distribution crash handler will be disabled.

```java
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy disableCrashHandler];
 [TestFairy begin:@"<app token>"];
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

### Video Recording

TestFairy provides an option to enable or disable video recording and control the recording parameters. Invoke `disableVideo` or `enableVideo` before `begin`.

#### Syntax

```java
[TestFairy disableVideo];
[TestFairy enableVideo:@"<policy>" quality:@"<quality>" framesPerSecond:<frames per second>];
```

Refer to the [Class Reference](https://app.testfairy.com/reference/ios/Classes/TestFairy.html) for more information on `policy` and `quality` values.

#### Code Example

In the following example, the video will only be recorded when wifi is available. A high-quality video will be recorded every 2 seconds.

```java
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy enableVideo:@"wifi" quality:@"high" framesPerSecond:2.0];
 [TestFairy begin: @"<app token>"];
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

### Recorded Metrics

App Distribution can collect several different metrics from your app. Developers can override the metrics defined in their app's build settings.

Developers can call `enableMetric` or `disableMetric` before invoking `begin` with the metric they wish to enable or disable recording.

:::note
Any metric that is enabled or disabled will override the settings set in your app's build settings.
:::

#### Syntax

```java
[TestFairy enableMetric:@"<metric>"];
[TestFairy disableMetric:@"<metric>"];
```

Refer to the [Class Reference](https://app.testfairy.com/reference/ios/Classes/TestFairy.html) for more information on which metric can be passed.

#### Code Example

In the following snippet, the CPU metric will be recorded, and the Memory metric will not be recorded, regardless of what's set in the build settings.

```java
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy enableMetric:@"cpu"];
 [TestFairy disableMetric:@"memory"];
 [TestFairy begin: @"<app token>"];
 // ...
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

### Max Session Length

TestFairy only records for a fixed period. Developers can override the maximum recording period by calling `setMaxSessionLength` before calling `begin`.

:::note
The value passed into this method must be less than or equal to the value defined in the build settings. A value larger than the one in the build settings will be ignored.
:::

#### Syntax

```java
[TestFairy setMaxSessionLength:<session length in seconds>];
```

#### Code Example

```java
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy setMaxSessionLength:(10 * 60)]; // Record for 10 minutes
 [TestFairy begin:@"<app token>"];
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

### Feedback Form

TestFairy provides an option to enable or disable feedback collection. Invoke `disableFeedbackForm` or `enableFeedbackForm` before `begin`.

#### Syntax

```java
[TestFairy disableFeedbackForm];
[TestFairy enableFeedbackForm:@"<method>"];
```

Refer to the [Class Reference](https://app.testfairy.com/reference/ios/Classes/TestFairy.html) for more information on values for `method`.

#### Code Example

In the following example, feedback will be enabled when the device is shaken.

```java
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy enableFeedbackForm:@"shake|screenshot"];
 [TestFairy begin: @"<app token>"];
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

</TabItem>
</Tabs>
