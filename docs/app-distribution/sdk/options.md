---
id: options
title: Begin with Options
sidebar_label: Begin with Options
description: Override build settings such as video recording, recorded metrics, and session length when you start the Sauce Mobile Beta SDK.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

The Sauce Mobile Beta SDK requires that you call `beginWithoutCrashHandler` (or `begin`) to start recording your sessions. However, developers can override the build settings to determine what is enabled during a session recording.

Some commonly used options:

- Video Recording
- Recorded Metrics
- Max Session Length
- Feedback Form

:::note Crash reporting
The SDK does not install a crash handler. Crash reporting is provided by Backtrace (Sauce Labs Error Reporting), and the two SDKs are designed to run in the same app. `beginWithoutCrashHandler` starts the session without a crash handler and forces the `enableCrashReporter` option (`TFSDKEnableCrashReporterKey` on iOS) to `false` even if you pass `true` in the options. Initialize Backtrace before the SDK. See [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence).
:::

<Tabs
groupId="platform"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>

<TabItem value="android">

## Video Recording

Sauce Labs Mobile App Distribution provides an option to enable or disable video recording and control the recording parameters. Invoke `disableVideo` or `enableVideo` before `beginWithoutCrashHandler`.

### Syntax

```java
TestFairy.disableVideo();
TestFairy.enableVideo("<policy>", "<quality>", <frames per second>);
```

Refer to the [Class Reference](https://app.testfairy.com/reference/android/index.html) for more information on `policy` and `quality` values.

### Code Example

In the following example, video only records when wifi is available. A high-quality video is recorded every 2 seconds.

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.enableVideo("wifi", "high", 2.0f);
 TestFairy.beginWithoutCrashHandler(this, "<sauce-mobile-beta-token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

## Recorded Metrics

Sauce Labs Mobile App Distribution can collect several different metrics from your app. Developers can override the metrics defined in their app's build settings.

Developers can call `enableMetric` or `disableMetric` before `beginWithoutCrashHandler` with the metric they wish to enable or disable recording.

:::note
Any metric that is enabled or disabled override the settings set in your app's build settings.
:::

### Syntax

```java
TestFairy.enableMetric("<metric>");
TestFairy.disableMetric("<metric>");
```

Refer to the [Class Reference](https://app.testfairy.com/reference/android/index.html) for more information on which metric can be passed.

### Code Example

In the following snippet, the CPU metric will be recorded, and the Memory metric will not be recorded, regardless of what's set in the build settings.

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.enableMetric("cpu");
 TestFairy.disableMetric("memory");
 TestFairy.beginWithoutCrashHandler(this, "<sauce-mobile-beta-token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

## Max Session Length

Sauce Labs Mobile App Distribution only records for a fixed period. Developers can override the maximum recording period by calling `setMaxSessionLength` before `beginWithoutCrashHandler`.

:::note
The value passed into this method must be less than or equal to the value defined in the build settings. A value larger than the one in the build settings will be ignored.
:::

### Syntax

```java
TestFairy.setMaxSessionLength(<session length in seconds>);
```

### Code Example

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.setMaxSessionLength(10 * 60); // Record for 10 minutes
 TestFairy.beginWithoutCrashHandler(this, "<sauce-mobile-beta-token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

## Feedback Form

Sauce Labs Mobile App Distribution provides an option to enable or disable feedback collection. Invoke `disableFeedbackForm` or `enableFeedbackForm` before `beginWithoutCrashHandler`.

### Syntax

```java
TestFairy.disableFeedbackForm();
TestFairy.enableFeedbackForm("<method>");
```

Refer to the [Class Reference](https://app.testfairy.com/reference/android/index.html) for more information on values for `method`.

### Code Example

In the following example, feedback will be enabled when the device is shaken.

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
 @Override
 public void onCreate() {
 super.onCreate();

 TestFairy.enableFeedbackForm("shake");
 TestFairy.beginWithoutCrashHandler(this, "<sauce-mobile-beta-token>");
 }
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

</TabItem>

<TabItem value="ios">

## Video Recording

The Sauce Mobile Beta SDK provides an option to enable or disable video recording and control the recording parameters. Invoke `disableVideo` or `enableVideo` before `beginWithoutCrashHandler`.

### Syntax

```objectivec
[TestFairy disableVideo];
[TestFairy enableVideo:@"<policy>" quality:@"<quality>" framesPerSecond:<frames per second>];
```

Refer to the [Class Reference](https://app.testfairy.com/reference/ios/Classes/TestFairy.html) for more information on `policy` and `quality` values.

### Code Example

In the following example, the video will only be recorded when wifi is available. A high-quality video will be recorded every 2 seconds.

```objectivec
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy enableVideo:@"wifi" quality:@"high" framesPerSecond:2.0];
 [TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

## Recorded Metrics

Sauce Labs Mobile App Distribution can collect several different metrics from your app. Developers can override the metrics defined in their app's build settings.

Developers can call `enableMetric` or `disableMetric` before `beginWithoutCrashHandler` with the metric they wish to enable or disable recording.

:::note
Any metric that is enabled or disabled will override the settings set in your app's build settings.
:::

### Syntax

```objectivec
[TestFairy enableMetric:@"<metric>"];
[TestFairy disableMetric:@"<metric>"];
```

Refer to the [Class Reference](https://app.testfairy.com/reference/ios/Classes/TestFairy.html) for more information on which metric can be passed.

### Code Example

In the following snippet, the CPU metric will be recorded, and the Memory metric will not be recorded, regardless of what's set in the build settings.

```objectivec
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy enableMetric:@"cpu"];
 [TestFairy disableMetric:@"memory"];
 [TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
 // ...
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

## Max Session Length

The Sauce Mobile Beta SDK only records for a fixed period. Developers can override the maximum recording period by calling `setMaxSessionLength` before `beginWithoutCrashHandler`.

:::note
The value passed into this method must be less than or equal to the value defined in the build settings. A value larger than the one in the build settings will be ignored.
:::

### Syntax

```objectivec
[TestFairy setMaxSessionLength:<session length in seconds>];
```

### Code Example

```objectivec
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy setMaxSessionLength:(10 * 60)]; // Record for 10 minutes
 [TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

## Feedback Form

The Sauce Mobile Beta SDK provides an option to enable or disable feedback collection. Invoke `disableFeedbackForm` or `enableFeedbackForm` before `beginWithoutCrashHandler`.

### Syntax

```objectivec
[TestFairy disableFeedbackForm];
[TestFairy enableFeedbackForm:@"<method>"];
```

Refer to the [Class Reference](https://app.testfairy.com/reference/ios/Classes/TestFairy.html) for more information on values for `method`.

### Code Example

In the following example, feedback will be enabled when the device is shaken.

```objectivec
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [TestFairy enableFeedbackForm:@"shake|screenshot"];
 [TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
}
```

Once logged in, your app token is available from your [account preferences](https://app.testfairy.com/settings#apptoken).

</TabItem>
</Tabs>
