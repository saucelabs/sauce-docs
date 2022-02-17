---
id: setup
title: Setting Up Backtrace for Unreal Engine
sidebar_label: Setup
description: Add Backtrace to your Unreal Engine project.
---
Add Backtrace to your Unreal Engine project. After you've completed the steps on this page, the Backtrace client will be setup with the default configuration settings.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## What You'll Need

 * A Backtrace account (if you don't already have one, start a [free trial](https://register.backtrace.io/signup/)).
 * A Backtrace project and [submission token].

:::tip Generate a Submission Token
   1. In the Backtrace Console, go to Project settings > Error submission > Submission tokens.
   1. Select +.
:::

### System Requirements

* Unreal Engine version 4.16 or higher

:::note
To capture crashes and errors in your Unreal Engine apps and games for Linux, see the [README](https://github.com/backtrace-labs/crashpad/tree/backtrace) for Backtrace Crashpad.
:::

##  Windows

To capture crashes and errors in your Unreal Engine apps and games for Windows, Backtrace supports Unreal Engine's CrashReportClient.

### Enable the CrashReportClient

1. In the Unreal Editor, go to Edit > Project Settings.
1. In the Project Settings, search for "crash".
1. Under Packaging, select Include Crash Reporter.

  <img src={useBaseUrl('img/error-reporting/unreal-enable-crashreporter.png')} alt="Enable the Crash Reporter in the Unreal Editor." />

:::note
If you're building from the command line, you should also add the `-crashreporter` flag.
:::

### Edit the Configuration File
The basic integration consists of manually modifying a configuration file setting, or using a plugin to automate the configuration when building/compiling the app or game from the editor.

:::note
The manual method is supported for all versions of UE4 and is recommended.
:::

<Tabs
  groupId="config"
  defaultValue="configfile"
  values={[
    {label: 'Manual', value: 'configfile'},
    {label: 'Plugin', value: 'plugin'},
  ]}>

<TabItem value="configfile">

#### For Crashes in the Editor
Once this is set, when your app or game crashes in the Unreal Editor, the crash reporting dialog will appear and send a crash report to your Backtrace instance.

1. In the root directory for your Unreal Engine project, open the Config folder.
1. Copy the `DefaultEngine.ini` file and paste it into the Engine > Config folder.
1. Rename the file to `UserEngine.ini`.
1. Open the `UserEngine.ini` file and add the following:
  - `[CrashReportClient]
  CrashReportClientVersion=1.0
  DataRouterUrl="https://unreal.backtrace.io/post/<instance>/<submission-token>"`


#### For Crashes in Packaged Builds


1.



</TabItem>
<TabItem value="plugin">

System Requirements:
* Unreal Engine version 4.16 to 4.24
* Windows version 7 to 10 on x86
* Visual Studio version 2017 or higher

</TabItem>
</Tabs>

## Android

Backtrace offers integration with Unreal Engine apps and games for Android using the backtrace-android library. Your apps written in Kotlin or Java can easily start submitting error reports to your Backtrace instance.

1.


## iOS and macOS

Backtrace offers integration with Unreal Engine apps and games for iOS, macOS, and tvOS using the backtrace-cocoa library. Your apps written in Swift or Objective-C can easily start submitting error reports to your Backtrace instance.

1.
