---
id: metrics
title: Stability Metrics Configuration
sidebar_label: Stability Metrics Configuration
description: Configure your Unity SDK for your project's stability metrics.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Starting from version 3.6.0 of backtrace-unity, the SDK captures events by default to calculate two stability metrics: Crash Free Users and Crash Free Application Launches. These stability metrics can be grouped and filtered by default using the attributes `application.version` and `uname.sysname`.

This document provides instructions on further configuring your Unity SDK to enhance the custom details you track for your project's stability metrics. The configurations include:

- Attribute Configuration: Ensure your stability metrics respond to additional attribute filters and queries in the Web Console.
- Custom Metric Groups: Track stability based on the relevant metrics to your game, such as crashes per minute played.
- Metric Event Control: Fine-tune the frequency of metric events for more granular data.

For a high-level overview of stability metrics, see [Stability Metrics](/error-reporting/project-setup/stability-metrics/).

## Attribute Configuration

For stability metrics to respond to queries and filters in the Web Console, follow these steps:

1. Ensure that the SDK sends relevant attributes on events for the metric group in question.
2. Create the metric group and associate the relevant attributes in the Web Console's **Stability Monitoring** project setting.

By default, the Unity SDK sends events that contribute to the `Application Launches` metric group. This metric group calculates Crash Free Sessions and Crash Free Users on the [Overview dashboard](/error-reporting/web-console/overview/). This metric group serves as an example throughout this configuration process.

### SDK Event Attributes

Stability metrics like Crash Free Users/Sessions are calculated using events sent from the Unity SDK. To ensure that stability metrics respond to queries and filters in the Web Console (for example., widgets on the Overview page), the attribute you want to use for filtering must be included in the events sent by the SDK. Refer to the following list of attributes that are sent by default with events from the Unity SDK:

To add new attributes to be sent for a given metric group's event, use the [AddSummedEvent method (IBacktraceMetrics)](https://github.com/backtrace-labs/backtrace-unity/blob/7a4a67bbb256a8105b7efdacd1ebe359721942ec/Runtime/Interfaces/IBacktraceMetrics.cs).

For example, the following code adds an event to the `levels_played` metric group and links the attributes `application.version` and `score` to the events. Therefore, any metrics calculated using the `levels_played` metric group respond to queries involving the `application.version` and/or `score` attributes.

```csharp
BacktraceClient.Instance.Metrics.AddSummedEvent("levels_played", new Dictionary<string, string>() {
  {"application.version", BacktraceClient.Instance["application.version"]},
  {"score", "" + score}
 }
);
```

### Default Event Attributes - Unity SDK

#### Metric Group: Application Launches Attributes

These attributes are sent as part of the `Application Launch `metric group. By default, this event is sent on startup, game end, and every 30 minutes. Due to its relative infrequency, there are many attributes forwarded by default. If you increase the frequency of these events, consider reducing the amount of data sent with each event.

```
Guid
Graphic.id
graphic.nameM
Graphic.type
Graphic.vendor
Graphic.vendor.id
Graphic.driver.version
Graphic.memory
Graphic.multithreaded
Graphic.shader
graphic.topUv
Uname.sysname
Uname.version
Uname.fullname
Uname.family
Cpu.count
Cpu.frequency
Cpu.brand
Audio.supported
Cpu.boottime
Hostname
Vm.rss.size
Backtrace.version
Api.compatibility
Scripting.backend
Application
Application.version
Application.url
Application.company.name
Application.data_path
Application.id
Application.installer.name
Application.internet_reachability
Application.editor
Application.focused
Application.mobile
Application.playing
application.background
application.sandboxType
application.system.language
application.unity.version
application.session
```

### Web Console Metric Group / Attribute Linking

Refer to [this documentation](https://github.com/backtrace-labs/backtrace-unity/blob/7a4a67bbb256a8105b7efdacd1ebe359721942ec/Runtime/Interfaces/IBacktraceMetrics.cs) for instructions on how to set up a metric group and link attributes to it in the Web Console.

:::note

Creating a new project or submission token takes up to 15 minutes to recognize your new submission token. Events are rejected and appear in your Unity log during this time. Once your token is identified, the SDK automatically triggers the creation of metric groups, which may take up to 30 minutes. No metrics are captured during this provisioning process.

:::

By default, the `Application Launches` metric group is automatically created when Crash Free Metrics are enabled in your game. It links the attributes `uname.sysname` and `application.version`. Since the Unity SDK sends all the attributes listed above by default, you can try linking one or more to test it.

## Creating New Metric Groups via Unity SDK

This section explains configuring your Unity game to send custom metric groups using the SDK's public APIs. For information on uploading metric groups from external data sources, refer to the [Importing Metrics documentation](/error-reporting/project-setup/metrics-stability-scores/).

### `MinutesPlayed` Configuration

Let's walk through an example to illustrate the setup process. Suppose you want to analyze crashes/errors against the minutes a user has played your game. This allows you to calculate metrics such as:

- Average crash-free playtime for users
- Average playtime per user
- Average session length
- Average session length by platform
- Average session length by release version

#### Step 1: Add the new metric group to your Backtrace Project in the Web Console by navigating to **Project Settings** > **Stability Monitoring**

<img src={useBaseUrl('/img/error-reporting/unity/AttributeLinking.png')} alt="Attribute Linking"/>

In the above example, a new metric group called `MinutesPlayed` is created, linking the `application.version` and `uname.sysname` attributes to it.

:::tip

The **Metrics** section under **Attributes** needs to be left empty for Unity. This section applies only when importing external metrics.

:::

#### Step 2: Configure the Unity SDK to send this metric group and the desired attributes

Next, use the `AddSummedEvent` method to add events for the new metric group. In this example, we add an event every minute because we track `MinutesPlayed`.

```csharp
private void Update(){
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

## Metric Event Control

The above example adds events for this metric group to a queue, automatically sent based on the interval set in your `BacktraceConfiguration` scriptable object (default every 30 minutes).

You can adjust the frequency of the sending process to suit your needs or manually send the events by calling `BacktraceClient.Instance.Metrics.Send()`.

Avoid adding too many events with numerous linked attributes or sending them too frequently, as this can impact your game's performance and consume a significant amount of your Backtrace data storage limits.
