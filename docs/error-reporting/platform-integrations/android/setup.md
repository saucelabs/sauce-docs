---
id: setup
title: Setting Up Backtrace for Android
sidebar_label: Setup
description: Add Backtrace to your Android project.
---
Add Backtrace to your Android project to automatically detect and report handled and unhandled Java exceptions that occur in your apps written in Java or Kotlin.

After you've completed the steps on this page, the Backtrace client will be installed and setup with the default configuration settings.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Features
* Light-weight Java client library that quickly submits exceptions and crashes to your Backtrace dashboard. Can include callstack, system metadata, custom metadata, and file attachments if needed.
* Supports a wide range of Android SDKs.
* Supports offline database for error report storage and re-submission in case of network outage.
* Fully customizable and extendable event handlers and base classes for custom implementations.
* Supports detection of blocking the application's main thread (Application Not Responding).
* Supports monitoring the blocking of manually created threads by providing watchdog.
* Supports native (JNI/NDK) exceptions and crashes.
* Supports Proguard obfuscated crashes.
* Supports breadcrumbs.

## Supported SDKs
* Minimum SDK version 16 (Android 4.1.x or higher)
* Target SDK version 30 (Android 11.0)
* Minimum NDK version 16b
* Maximum NDK version 22

:::note
Getting the status that the device is in power saving mode is available from API version 21.
:::

## Supported Platforms
* arm32/arm64
* x86_64


## What You'll Need
* A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
* Your subdomain name (used to connect to your Backtrace instance).
* A Backtrace project and a submission token.

:::tip Generate a Submission Token
   1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
   1. Select **+**.
:::


## Install the Backtrace Android SDK
Use Gradle or Maven to install the reporting library for your Android app.

<Tabs
  groupId="platforms"
  defaultValue="openupm"
  values={[
    {label: 'OpenUPM', value: 'openupm'},
    {label: 'Manual', value: 'manual'},
    {label: 'Git', value: 'git'},
  ]}>

  <TabItem value="openupm">

```
# Install openupm-cli
npm install -g openupm-cli

# Go to your Unity project directory
cd YOUR_UNITY_PROJECT_DIR

# Install the latest io.backtrace.unity package
openupm add io.backtrace.unity
```

For more information, see the installation steps on [OpenUPM](https://openupm.com/packages/io.backtrace.unity/).

  </TabItem>
  <TabItem value="manual">  

1. Download the latest version of the Backtrace Unity SDK from [GitHub](https://github.com/backtrace-labs/backtrace-unity/releases).

1. Unzip the package and save it locally.

1. In your Unity project, go to **Window > Package Manager**.

1. Complete the steps in [Installing a package from a local folder](https://docs.unity3d.com/Manual/upm-ui-local.html) in the Unity Documentation.

</TabItem>
<TabItem value="git">  

:::note
This installation method is supported for Unity 2018.3 or higher.
:::

1. Clone the source project’s [Git URL](https://github.com/backtrace-labs/backtrace-unity.git).
1. In your Unity project, go to **Window > Package Manager**.
1. Complete the steps in [Installing from a Git URL](https://docs.unity3d.com/Manual/upm-ui-giturl.html) in the Unity Documentation.

</TabItem>
</Tabs>

## Initialize the Backtrace Client with GameObject
You can add the Backtrace Client component to any GameObject in your game scene.

  1. In your Unity project, go to **Assets > Backtrace > Configuration**.

  The Backtrace Configuration file is added to the root of your Assets folder.

  1. Go to **GameObject > Create Empty**.

  1. Enter a descriptive name for the new GameObject.

  1. In the Inspector, select **Add Component**.

  1. Search for “Backtrace”, then select **Backtrace Client**.

  1. From the **Assets** folder, drag the Backtrace Configuration file to the Backtrace configuration field.

Additional fields now display for the Backtrace client configuration and database configuration options.

To change Backtrace client and database options, we recommend to change these values in the Unity UI via Backtrace Configuration file. Alternatively, you can also make changes to the configuration in the C# code for your Unity project.

For more information about the available configuration options, see [Configuration](/error-reporting/platform-integrations/unity/configuration).


## Verify the Setup
At this point, you've installed and setup the Backtrace client to automatically capture crashes and exceptions in your Unity game or app.

To test the integration, use a try/catch block to throw an exception and start sending reports.

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
