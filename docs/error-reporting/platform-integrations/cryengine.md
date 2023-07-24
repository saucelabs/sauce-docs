---
id: cryengine
title: CryEngine Integration Guide
sidebar_label: CryEngine
description: Integrate your CryEngine game into Backtrace for crash reporting.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide shows you how to integrate your CryEngine game with Backtrace for crash reporting.

Backtrace provides first-class support for the native crash reporting format of CryEngine. The basic integration consists of modifying a configuration file to configure your game to use Backtrace as the crash reporting server. The system accepts crash reports from the game client, automatically extracts and indexes all the metadata provided by the client, and accepts any file attachments.

## Supported Platforms

Backtrace's integration with CryEngine supports games deployed on Windows. If you are deploying to game consoles (PS4, Xbox One), use [Backtrace's Video Game Console Integrations](/error-reporting/platform-integrations/overview).

For On-Premise (self-hosted) users: CryEngine crash ingestion requires specific packages. Contact support for detailed instructions and information.

## How To Integrate

### Register for a Backtrace Instance

If you don't have one, register for a [Backtrace instance](https://www.backtrace.io/). You can create projects and tokens to manage your incoming crashes.

Your server instance has a domain in the following form: `https://<AAAA>.sp.backtrace.io`

Your submission token is accessible under your [project configuration menu](https://backtrace.io/docs/token-configurations/) and looks like this: `45e44f361045ae4343e4113e77e0ea3eee1043367342c3f03c3a273cb3e433ae`

Integrating your game with Backtrace only takes a few minutes.

### Configuration File Edits

The configuration file is located in different paths depending on the type of execution method.

For development, edit `user.cfg` in the project directory.
For production, edit `system.cfg` in the build directory.

The following console variables must be changed:

- `sys_crashrpt`: enable or disable the crash reporter
- `sys_crashrpt_appname`: application name
- `sys_crashrpt_appversion`: application version
- `sys_crashrpt_email`: your companies support email address to display to the player
- `sys_crashrpt_privacypolicy`: link to your companies privacy policy to display to the player
- `sys_crashrpt_server`: Backtrace crash server, in the format described as follows https://cryengine.backtrace.io/post?universe=[universe]&token=[token]

Example values:

```bash
sys_crashrpt = "1"
sys_crashrpt_appname = "My Game"
sys_crashrpt_appversion = "0.8"
sys_crashrpt_email = "support@gamingcompany.com"
sys_crashrpt_privacypolicy = "https://gamingcompany.com/privacy"
sys_crashrpt_server = "https://cryengine.backtrace.io/post?universe=gamingcompany&token=5ba5cd76ceac75975cc3c0e8237d65ba743abd0e4d85aa2f5e57e98a44643b4c"
```

### Debug Symbols

When building your game, ensure that it is configured to generate debug symbols (.pdb files) that can be provided to Backtrace. This enables proper deduplication and grouping of minidumps and human-readable call stacks. For more information, refer to the [Symbolication Guide](/error-reporting/project-setup/symbolication/).

You can now view incoming CryEngine crashes in your Backtrace instance. Check out the Debugger to see detailed information about your crashes.
