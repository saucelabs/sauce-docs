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

##  Windows
To capture crashes and errors in your Unreal Engine apps and games for Windows, Backtrace supports Unreal Engine's CrashReportClient.

### Enable the Crash Reporter
1. In the Unreal Editor, go to Edit > Project Settings.
1. In the Project Settings, search for "crash reporter".
1. Under Packaging, enable Include Crash Reporter.

  <img src={useBaseUrl('img/error-reporting/unreal-enable-crashreporter.png')} alt="Enable the Crash Reporter in the Unreal Editor." />

:::note
If you're building from the command line, add the `-crashreporter` flag.
:::

### Configure the Crash Reporter Endpoint
The basic integration consists of manually modifying INI configuration file settings to submit crashes to your Backtrace instance, or using a plugin to automate the configuration when building/compiling the app or game from the editor.

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
Once this is set, when your app or game crashes in the Unreal Editor, the Unreal Engine Crash Reporter dialog will appear and allow you to send the crash report to your Backtrace instance.

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
  DataRouterUrl="https://unreal.backtrace.io/post/<instance>/<submission-token>"
  ```

#### For Crashes in Packaged Builds
To configure the crash reporter as the default for all packaged builds:
1. In the root directory for your Unreal Engine project, open the Config folder.
1. Copy the `DefaultEngine.ini` file and paste it into the following directory:
  `UserProfile/UnrealEngine/Engine/Programs/CrashReportClient/Config`
:::note
If you can't find the directory listed above, it could also be under `%USERPROFILE%/Documents/UnrealEngine` or `C:/Program Files/Epic Games/UE_[version]`. You can also search your system for 'CrashReportClient'.
:::
1. Open the `DefaultEngine.ini` file and add the following lines:

  ```
  [CrashReportClient]
  CrashReportClientVersion=1.0
  DataRouterUrl="https://unreal.backtrace.io/post/<instance>/<submission-token>"
  ```

To configure the crash reporter for a packaged build:
1.

</TabItem>
<TabItem value="plugin">

The plugin updates your configuration files and also allows you to automatically upload symbol files.

**System Requirements:**  
- Unreal Engine version 4.20 to 4.27
- Windows x86 version 7 to 10
- Visual Studio version 2017 or higher

:::note
If you're using your own build system or distributed builds, see the method described above.
:::

1. Download the latest version of the plugin from the [Unreal Engine Marketplace](https://www.unrealengine.com/marketplace/en-US/product/backtrace-crash-reporting-plugin?sessionInvalidated=true).
1.

</TabItem>
</Tabs>

## Android
Backtrace offers integration with Unreal Engine apps and games for Android using the backtrace-android library. Your apps written in Kotlin or Java can easily start submitting error reports to your Backtrace instance.

1. In the directory for your Unreal Engine project, locate the `build.cs` file.
1.


## iOS
Backtrace offers integration with Unreal Engine apps and games for iOS using the backtrace-cocoa library. Your apps written in Swift or Objective-C can easily start submitting error reports to your Backtrace instance.

1.

## macOS
Backtrace doesn't provide an integration with Unreal Engine apps and games for macOS. Use PLCrashReporter.

## Linux
Backtrace offers integration with Unreal Engine apps and games for Linux using Crashpad.


## Game Consoles
