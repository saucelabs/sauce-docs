---
id: setup
title: Setting Up Backtrace for Unreal Engine
sidebar_label: Setup
description: Add Backtrace to your Unreal Engine project.
---
Add Backtrace to your Unreal Engine project to automatically detect and report native crashes that occur in your apps and games.

Backtrace supports Unreal Engine's Crash Reporter, therefore installation of a Backtrace SDK is not required to capture crashes in your Unreal Engine apps or games.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Features
The Backtrace Unreal plugin reports on the following types of errors:

* Crashes - An end to the game play experience, where the game crashes or restarts.
* Hangs (mobile only) -  Errors that occur when a game or an app is non-responsive.
* Out of memory crashes (mobile only) - Terminations of your game or app due to low memory conditions.

## Supported Platforms
|Supported Platforms|Supported Systems|
|---------|---------|
|Mobile|Android, iOS|
|PC|Windows, MacOS, Linux|
|Game Consoles|PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Xbox Series S, Nintendo Switch|

:::note
For on-premise (self-hosted) users, the integration for Unreal Engine requires specific packages. For more information, contact support.
:::

## What You'll Need
 * A Backtrace account (if you don't already have one, start a [free trial](https://register.backtrace.io/signup/)).
 * Your subdomain name (used to connect to your Backtrace instance).
 * A Backtrace project and [submission token].

:::tip Generate a Submission Token
   1. In the Backtrace Console, go to Project settings > Error submission > Submission tokens.
   1. Select +.
:::

### System Requirements
* Unreal Engine version 4.16 to 5.0 (early access)

:::note
To integrate crash reporting in your Unreal Engine apps and games for Linux, see the [README](https://github.com/backtrace-labs/crashpad/tree/backtrace) for Crashpad.
:::

## Enable the Crash Reporter
1. In the Unreal Editor, go to Edit > Project Settings.
1. In the Project Settings, search for "crash reporter".
1. Under Packaging, enable Include Crash Reporter.

  <img src={useBaseUrl('img/error-reporting/unreal-enable-crashreporter.png')} alt="Enable the Crash Reporter in the Unreal Editor." />

:::note
If you're building from the command line, add the `-crashreporter` flag.
:::


## Configure the Backtrace Endpoint

<Tabs
  groupId="platforms"
  defaultValue="windows"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'Android', value: 'android'},
    {label: 'iOS', value: 'ios'},
    {label: 'macOS', value: 'macos'},
    {label: 'Linux', value: 'linux'},
    {label: 'Game Consoles', value: 'GameConsoles'},
  ]}>

<TabItem value="windows">

The basic integration for Windows consists of manually modifying the INI configuration file settings to submit crashes to your Backtrace instance.

#### For Crashes in the Editor
When your app or game crashes in the Unreal Editor, the Unreal Engine Crash Reporter dialog will appear and allow you to send the crash report to your Backtrace instance.

1. In the root directory for your Unreal Engine project, open the Config folder.
1. Copy the `DefaultEngine.ini` file and paste it into the Engine > Config folder.
:::note
If the Engine folder doesn't exist at the root directory for your Unreal Engine project, create a new folder and name it Engine. Then in the Engine folder, create another folder and name it Config.
:::
1. Rename the file to `UserEngine.ini`.
1. Open the `UserEngine.ini` file and add the following lines:

  ```
  [CrashReportClient]
  CrashReportClientVersion=1.0
  DataRouterUrl="https://unreal.backtrace.io/post/{subdomain-name}/{submission-token}>"
  ```

#### For Crashes in Packaged Builds
You can configure the crash reporter to be the default for all packaged builds or for a single packaged build.

To configure the crash reporter as the default for all packaged builds:
1. In the root directory for your Unreal Engine project, open the Config folder.
1. Copy the `DefaultEngine.ini` file and paste it into the following directory:
  `[UNREAL_ENGINE]/UnrealEngine/Engine/Programs/CrashReportClient/Config`
:::note
The directory could also be under `%USERPROFILE%/Documents/UnrealEngine` or `C:/Program Files/Epic Games/UE_[version]`. You can also search your system for 'CrashReportClient' to find it.
:::
1. Open the `DefaultEngine.ini` file and add the following lines:

  ```
  [CrashReportClient]
  CrashReportClientVersion=1.0
  DataRouterUrl="https://unreal.backtrace.io/post/{subdomain-name}/{submission-token}"
  ```

To configure the crash reporter for a packaged build:
1. In the root directory for your Unreal Engine project, open the Config folder.
1. Copy the `DefaultEngine.ini` file and paste it into the following directory:
    - For Unreal Engine 4.25 and earlier:
  `[BUILD_DIRECTORY]/WindowsNoEditor/Engine/Programs/CrashReportClient/Config/NoRedist`
    - For Unreal Engine 4.26 and higher:
  `[BUILD_DIRECTORY]/WindowsNoEditor/Engine/Restricted/NoRedist/Programs/CrashReportClient/Config`
  :::note
  Create the subdirectories if they do not exist.
  :::
1. Open the `DefaultEngine.ini` file and add the following lines:

  ```
  [CrashReportClient]
  CrashReportClientVersion=1.0
  DataRouterUrl="https://unreal.backtrace.io/post/{subdomain-name}/{submission-token}"
  ```

</TabItem>
<TabItem value="android">

Backtrace offers integration with Unreal Engine apps and games for Android using the backtrace-android library. Your apps written in Kotlin or Java can easily start submitting error reports to your Backtrace instance.

1. In the directory for your Unreal Engine project, locate the `build.cs` file.
1. Download [BacktraceAndroid_UPL.xml](https://support.backtrace.io/hc/article_attachments/360092643371/BacktraceAndroid_UPL.xml) and place it in the `build.cs` file.
1. 


</TabItem>
<TabItem value="ios">

Backtrace offers integration with Unreal Engine apps and games for iOS using the backtrace-cocoa library. Your apps written in Swift or Objective-C can easily start submitting error reports to your Backtrace instance.

1.

</TabItem>
<TabItem value="macOS">

Backtrace doesn't provide an integration with Unreal Engine apps and games for macOS. Use PLCrashReporter.

</TabItem>
<TabItem value="linux">

Backtrace offers integration with Unreal Engine apps and games for Linux using Crashpad.

</TabItem>
<TabItem value="GameConsoles">



</TabItem>
</Tabs>

## Upload Debug Symbols
You must now ensure your build environment has been configured to generate debug symbols, which can then be uploaded to your Backtrace instance, a connected Symbol Server, an Amazon S3 bucket, or a Google Cloud storage bucket.

For more information about how to generate symbols, see [Symbolication](https://support.backtrace.io/hc/en-us/articles/360040517071#Windows).
