---
id: unreal
title: Unreal Engine Integration Guide
sidebar_label: Getting Started
description: Integrate Backtrace with Unreal Engine to automatically detect and report crashes and errors that occur in your apps and games.
---

Integrate Backtrace with Unreal Engine to automatically detect and report native crashes that occur in your apps and games.

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


## How to Get Started

* [Setup](/error-reporting/platform-integrations/unreal/setup): Install and setup the Backtrace client and database object in your Unreal Engine project.
* [Configuration](/error-reporting/platform-integrations/unreal/configuration): Set the configuration options to customize the crash and error reports and how they are sent.
* [Attributes](/error-reporting/platform-integrations/unreal/attributes): Customize the data included in crash and error reports for Unreal Engine games and apps.
