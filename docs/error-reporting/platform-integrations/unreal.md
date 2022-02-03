---
id: unreal
title: Unreal Integration Guide
sidebar_label: Getting Started
description: Capture and report handled and unhandled exceptions in Unreal games and apps.
---
Backtrace's integration with Unreal allows you to capture and report handled and unhandled Unity exceptions to a Backtrace instance, instantly offering the ability to prioritize and debug software errors.

## Features

The Backtrace Unreal SDK reports on the following types of errors:

* Log errors - Error messages in the console log. Logged by Debug.LogError (a variant of Debug.Log).
* Unhandled Exceptions - Exceptions that occur outside of an explicit try / catch statement.
* Handled exceptions - Exceptions that are explicitly caught and handled.
* Crashes - An end to the game play experience, where the game crashes or restarts.
* Hangs (mobile only) -  Errors that occur when a game or an app is non-responsive.
* Out of memory crashes (mobile only) - Terminations of your game or app due to low memory conditions.
* Message reports - Error messages explicitly sent by the Backtrace client.

## Supported Platforms

|Supported Platforms|Supported Systems|
|---------|---------|
|Mobile|Android, iOS|
|PC|Windows, MacOS|
|Web|WebGL|
|Game Consoles|PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Nintendo Switch, Google Stadia|

:::note
Offline database capabilities are currently not supported for Nintendo Switch.
:::

## How to Get Started

* [Setup](/error-reporting/platform-integrations/unity/setup): Install and setup the Backtrace client and database object in your Unity project.
* [Configuration](/error-reporting/platform-integrations/unity/configuration): Set the configuration options for the Backtrace client object to customize the crash and error reports and how they are sent.
* [Attributes](/error-reporting/platform-integrations/unity/attributes): Customize the data included in crash and error reports for Unity games and apps.
