---
id: unreal
title: Unreal Integration Guide
sidebar_label: Getting Started
description: Capture and report handled and unhandled exceptions in Unreal games and apps.
---
Backtrace's integration with Unreal allows you to capture and report handled and unhandled Unity exceptions to a Backtrace instance, instantly offering the ability to prioritize and debug software errors.

## Features

The Backtrace Unreal SDK reports on the following types of errors:

* Crashes - An end to the game play experience, where the game crashes or restarts.
* Hangs (mobile only) -  Errors that occur when a game or an app is non-responsive.
* Out of memory crashes (mobile only) - Terminations of your game or app due to low memory conditions.


## Supported Platforms

|Supported Platforms|Supported Systems|
|---------|---------|
|


## How to Get Started

* [Setup](/error-reporting/platform-integrations/unity/setup): Install and setup the Backtrace client and database object in your Unity project.
* [Configuration](/error-reporting/platform-integrations/unity/configuration): Set the configuration options for the Backtrace client object to customize the crash and error reports and how they are sent.
* [Attributes](/error-reporting/platform-integrations/unity/attributes): Customize the data included in crash and error reports for Unity games and apps.
